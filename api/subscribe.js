/**
 * Vercel Serverless Function — POST /api/subscribe
 *
 * Unified Brevo ingress for ExpatAutoAdviser (SG + HK).
 *
 * Flow:
 *  - Client posts { email, sourcePage, sourceType, firstMagnet, city, source }
 *  - We add the contact to the EAA PENDING list with full attributes.
 *  - Brevo's "Confirmation Opt-In" automation (configured in the Brevo
 *    dashboard) sends the DOI email, and on click moves the contact into
 *    the final EAA_SG or EAA_HK list and triggers magnet delivery.
 *
 * Env vars required (set in Vercel):
 *   BREVO_API_KEY              — Brevo master API key
 *   BREVO_EAA_PENDING_LIST_ID  — numeric list ID of EAA pending list
 *
 * No Supabase. The previous hardcoded anon key is removed.
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    const {
      email,
      sourcePage,
      sourceType,
      firstMagnet,
      city,
      source,
    } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const pendingListId = Number(process.env.BREVO_EAA_PENDING_LIST_ID || 0);

    if (!apiKey || !pendingListId) {
      // Don't expose infra state to the client, but log loudly.
      console.error(
        'Brevo env missing: BREVO_API_KEY or BREVO_EAA_PENDING_LIST_ID'
      );
      return res.status(200).json({ ok: true });
    }

    const normalisedCity = city === 'hk' ? 'hong-kong' : 'singapore';

    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [pendingListId],
        updateEnabled: true,
        attributes: {
          SOURCE_PAGE: sourcePage || source || 'unknown',
          SOURCE_TYPE: sourceType || 'inline-cta',
          SITE: 'expatautoadviser',
          CITY: normalisedCity,
          FIRST_MAGNET: firstMagnet || '',
          SUBSCRIBED_AT: new Date().toISOString(),
        },
      }),
    });

    if (!brevoRes.ok) {
      const errText = await brevoRes.text().catch(() => '');
      console.error('Brevo subscribe failed:', brevoRes.status, errText);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    // Don't expose errors to the client.
    return res.status(200).json({ ok: true });
  }
}
