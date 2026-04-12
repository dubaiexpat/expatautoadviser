/**
 * Magnet delivery configuration for ExpatAutoAdviser.
 *
 * One entry per lead magnet. /api/subscribe.js looks up the magnet by
 * `firstMagnet` slug, then sends a transactional email via Brevo's
 * POST /v3/smtp/email endpoint with inline HTML and a link to the PDF
 * hosted on /public/magnets/.
 *
 * No Brevo Automations or templates are required — the email body is
 * version-controlled here alongside the code that sends it.
 */

export const SITE_BASE_URL = 'https://www.expatautoadviser.com';

export const MAGNETS = {
  'eaa-sg-car-buyer-checklist': {
    subject: 'Your Singapore Car Buyer Checklist is ready',
    pdfPath: '/magnets/eaa-sg-car-buyer-checklist.pdf',
    displayName: 'Singapore Car Buyer Checklist',
    intro:
      "Thanks for signing up. Here's your Singapore Car Buyer Checklist — a practical walkthrough of COE, OMV, ARF, PARF, road tax, insurance, and the gotchas every new arrival needs to know before buying a car in Singapore.",
    brandColor: '#e63946',
  },
  'eaa-hk-car-buyer-guide': {
    subject: 'Your Hong Kong Car Buyer Guide is ready',
    pdfPath: '/magnets/eaa-hk-car-buyer-guide.pdf',
    displayName: 'Hong Kong Car Buyer Guide',
    intro:
      "Thanks for signing up. Here's your Hong Kong Car Buyer Guide — covering first registration tax, driving licences for expats, parking reality, insurance, and whether owning a car in HK actually makes sense for you.",
    brandColor: '#e63946',
  },

  /* ── Welcome guides (sent to pure newsletter subscribers) ───────── */
  'eaa-sg-welcome-guide': {
    subject: 'Welcome to ExpatAutoAdviser — your Singapore starter guide',
    pdfPath: '/magnets/eaa-sg-welcome-guide.pdf',
    displayName: '5 Things Every Expat Should Know Before Getting a Car in Singapore',
    intro:
      "Welcome aboard! We've put together a quick one-pager with the five things every expat should know before getting a car in Singapore — from COE costs to insurance tips. Have a read, and keep an eye on your inbox for new guides and market updates.",
    brandColor: '#e63946',
  },
  'eaa-hk-welcome-guide': {
    subject: 'Welcome to ExpatAutoAdviser — your Hong Kong starter guide',
    pdfPath: '/magnets/eaa-hk-welcome-guide.pdf',
    displayName: '5 Things Every Expat Should Know Before Getting a Car in Hong Kong',
    intro:
      "Welcome aboard! We've put together a quick one-pager with the five things every expat should know before getting a car in Hong Kong — from first registration tax to parking costs. Have a read, and keep an eye on your inbox for new guides and market updates.",
    brandColor: '#2a9d8f',
  },
};

/**
 * Build the HTML body for a magnet delivery email.
 */
export function buildMagnetEmailHtml(magnet) {
  const pdfUrl = `${SITE_BASE_URL}${magnet.pdfPath}`;
  const color = magnet.brandColor || '#e63946';
  return `<!doctype html>
<html>
  <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background:#f5f5f5;margin:0;padding:24px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;">
      <tr>
        <td style="padding:32px 32px 16px 32px;">
          <h1 style="margin:0 0 16px 0;color:#111;font-size:24px;line-height:1.3;">${magnet.displayName}</h1>
          <p style="margin:0 0 16px 0;color:#333;font-size:16px;line-height:1.5;">${magnet.intro}</p>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 32px 24px 32px;">
          <a href="${pdfUrl}" style="display:inline-block;background:${color};color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:6px;font-weight:600;font-size:16px;">Download the PDF &rarr;</a>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 32px 24px 32px;color:#555;font-size:14px;line-height:1.5;">
          <p style="margin:0 0 12px 0;">If the button doesn't work, paste this link into your browser:<br/><a href="${pdfUrl}" style="color:${color};">${pdfUrl}</a></p>
          <p style="margin:0;">You'll start getting our ExpatAutoAdviser newsletter roughly once a week. Unsubscribe any time — there's a link in every email.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 32px 32px 32px;border-top:1px solid #eee;color:#777;font-size:12px;line-height:1.4;">
          ExpatAutoAdviser &middot; <a href="${SITE_BASE_URL}" style="color:#777;">expatautoadviser.com</a>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
