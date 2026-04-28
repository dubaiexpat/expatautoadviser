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
 *
 * 27 Apr 2026 update: each magnet now ships with site-link recommendations
 * with UTM tags. Plain-text version generated for deliverability (improves
 * Promotions-tab placement).
 */

export const SITE_BASE_URL = 'https://www.expatautoadviser.com';
const SENDER_NAME = 'Patrick at ExpatAutoAdviser';
const SENDER_EMAIL = 'partnerships@expatautoadviser.com';

// Affiliate URL helper (NordVPN — useful for keeping UK banking apps working
// from SG/HK during the first 90 days). Tracking suffixes unique per placement.
const NORDVPN = (sub) =>
  `https://go.nordvpn.net/aff_c?offer_id=15&aff_id=145336&source=eaa&aff_sub=email-magnet-${sub}`;

export const MAGNETS = {
  'eaa-sg-car-buyer-checklist': {
    subject: 'Your Singapore Car Buyer Checklist (+ what to read next)',
    pdfPath: '/magnets/eaa-sg-car-buyer-checklist.pdf',
    displayName: 'Singapore Car Buyer Checklist',
    intro:
      "Thanks for signing up. Here's your Singapore Car Buyer Checklist — a practical walkthrough of COE, OMV, ARF, PARF, road tax, insurance, and the gotchas every new arrival needs to know before buying a car in Singapore.",
    brandColor: '#e63946',
    siteLinks: [
      { label: "How the COE bidding system actually works", path: "/singapore/coe-guide" },
      { label: "Funding a car purchase from a UK account", path: "/singapore/funding-car-purchase" },
      { label: "Buying guide: dealer vs parallel import vs private", path: "/singapore/buying-guide" },
      { label: "Car loan reality (MAS LTV rules for expats)", path: "/singapore/car-loans" },
    ],
  },
  'eaa-hk-car-buyer-guide': {
    subject: 'Your Hong Kong Car Buyer Guide (+ the FRT trap)',
    pdfPath: '/magnets/eaa-hk-car-buyer-guide.pdf',
    displayName: 'Hong Kong Car Buyer Guide',
    intro:
      "Thanks for signing up. Here's your Hong Kong Car Buyer Guide — covering first registration tax, driving licences for expats, parking reality, insurance, and whether owning a car in HK actually makes sense for you.",
    brandColor: '#e63946',
    siteLinks: [
      { label: "Hong Kong First Registration Tax: rates, bands, worked examples", path: "/hong-kong/frt-tax-explained" },
      { label: "Buying guide for HK expats", path: "/hong-kong/buying-guide" },
      { label: "Insurance: what cover you actually need", path: "/hong-kong/insurance-guide" },
      { label: "Leasing vs buying for a 2-3 year expat assignment", path: "/hong-kong/leasing-guide" },
    ],
  },

  /* ── Welcome guides (sent to pure newsletter subscribers) ───────── */
  'eaa-sg-welcome-guide': {
    subject: 'Welcome to ExpatAutoAdviser — your Singapore starter guide',
    pdfPath: '/magnets/eaa-sg-welcome-guide.pdf',
    displayName: '5 Things Every Expat Should Know Before Getting a Car in Singapore',
    intro:
      "Welcome aboard! We've put together a quick one-pager with the five things every expat should know before getting a car in Singapore — from COE costs to insurance tips. Have a read, and keep an eye on your inbox for new guides and market updates.",
    brandColor: '#e63946',
    siteLinks: [
      { label: "Should I get a car in Singapore? (the honest answer)", path: "/singapore/should-i-get-a-car" },
      { label: "Real cost of driving — fuel, parking, ERP, COE amortised", path: "/singapore/cost-of-driving" },
      { label: "Singapore homepage with all guides", path: "/singapore" },
    ],
    affiliateLinks: [
      { label: "NordVPN", href: NORDVPN("sg-welcome"), reason: "keeps UK banking apps working from Singapore (most banks geo-block by default)" },
    ],
  },
  'eaa-hk-welcome-guide': {
    subject: 'Welcome to ExpatAutoAdviser — your Hong Kong starter guide',
    pdfPath: '/magnets/eaa-hk-welcome-guide.pdf',
    displayName: '5 Things Every Expat Should Know Before Getting a Car in Hong Kong',
    intro:
      "Welcome aboard! We've put together a quick one-pager with the five things every expat should know before getting a car in Hong Kong — from first registration tax to parking costs. Have a read, and keep an eye on your inbox for new guides and market updates.",
    brandColor: '#2a9d8f',
    siteLinks: [
      { label: "Should I get a car in Hong Kong? (the honest answer)", path: "/hong-kong/should-i-get-a-car" },
      { label: "Hong Kong First Registration Tax explained", path: "/hong-kong/frt-tax-explained" },
      { label: "Hong Kong homepage with all guides", path: "/hong-kong" },
    ],
    affiliateLinks: [
      { label: "NordVPN", href: NORDVPN("hk-welcome"), reason: "keeps UK banking apps working from Hong Kong" },
    ],
  },
};

/** Build a UTM-tagged absolute URL for a site-link recommendation. */
function siteLinkUrl(magnetSlug, path) {
  const sep = path.includes('?') ? '&' : '?';
  return `${SITE_BASE_URL}${path}${sep}utm_source=email&utm_medium=magnet&utm_campaign=${magnetSlug}`;
}

/** Sender details exported so the subscribe route stays in sync with the template. */
export const EMAIL_SENDER = { name: SENDER_NAME, email: SENDER_EMAIL };

/**
 * Build the HTML body for a magnet delivery email.
 */
export function buildMagnetEmailHtml(magnet, magnetSlug) {
  const slug = magnetSlug || 'magnet';
  const pdfUrl = `${SITE_BASE_URL}${magnet.pdfPath}`;
  const color = magnet.brandColor || '#e63946';

  // Site-link recommendations block
  let siteLinksBlock = '';
  if (magnet.siteLinks && magnet.siteLinks.length > 0) {
    const items = magnet.siteLinks
      .map(
        (l) =>
          `<li style="margin-bottom:6px;"><a href="${siteLinkUrl(slug, l.path)}" style="color:${color};text-decoration:underline;">${l.label}</a></li>`
      )
      .join('');
    siteLinksBlock = `
      <tr>
        <td style="padding:8px 32px 16px 32px;color:#333;font-size:15px;line-height:1.6;">
          <p style="margin:0 0 8px 0;"><strong>While you're at it, these guides on the site might help:</strong></p>
          <ul style="margin:0 0 0 0;padding-left:20px;">${items}</ul>
        </td>
      </tr>`;
  }

  // Affiliate placements block (with disclosure)
  let affiliateBlock = '';
  if (magnet.affiliateLinks && magnet.affiliateLinks.length > 0) {
    const items = magnet.affiliateLinks
      .map(
        (l) =>
          `<p style="margin:0 0 8px 0;color:#333;font-size:14px;line-height:1.5;"><a href="${l.href}" style="color:${color};text-decoration:underline;font-weight:600;">${l.label}</a> &mdash; ${l.reason}</p>`
      )
      .join('');
    affiliateBlock = `
      <tr>
        <td style="padding:8px 32px 16px 32px;border-top:1px solid #f0f0f0;">
          <p style="margin:0 0 10px 0;color:#1d3557;font-size:15px;font-weight:600;">Tools we use ourselves</p>
          ${items}
          <p style="margin:8px 0 0 0;color:#888;font-size:12px;line-height:1.4;font-style:italic;">These are affiliate links &mdash; we may earn a small commission at no extra cost to you. We only recommend tools we use ourselves.</p>
        </td>
      </tr>`;
  }

  return `<!doctype html>
<html>
  <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background:#f5f5f5;margin:0;padding:24px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;">
      <tr><td style="padding:32px 32px 16px 32px;"><h1 style="margin:0 0 16px 0;color:#111;font-size:24px;line-height:1.3;">${magnet.displayName}</h1><p style="margin:0 0 16px 0;color:#333;font-size:16px;line-height:1.5;">${magnet.intro}</p></td></tr>
      <tr><td style="padding:8px 32px 24px 32px;"><a href="${pdfUrl}" style="display:inline-block;background:${color};color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:6px;font-weight:600;font-size:16px;">Download the PDF &rarr;</a></td></tr>
      <tr><td style="padding:8px 32px 16px 32px;color:#555;font-size:13px;line-height:1.5;">If the button doesn't work, paste this link into your browser:<br/><a href="${pdfUrl}" style="color:${color};">${pdfUrl}</a></td></tr>${siteLinksBlock}${affiliateBlock}
      <tr><td style="padding:16px 32px 8px 32px;color:#333;font-size:15px;line-height:1.6;"><p style="margin:0 0 4px 0;">Best,</p><p style="margin:0;"><strong>Patrick</strong><br/><span style="color:#666;font-size:13px;">ExpatAutoAdviser</span></p></td></tr>
      <tr><td style="padding:8px 32px 24px 32px;color:#777;font-size:12px;line-height:1.5;"><p style="margin:0 0 8px 0;">You'll start getting our ExpatAutoAdviser newsletter roughly once a week. Unsubscribe any time &mdash; there's a link in every email.</p><p style="margin:0;font-style:italic;">Tip: add <a href="mailto:${SENDER_EMAIL}" style="color:#777;">${SENDER_EMAIL}</a> to your contacts so future emails reach your inbox rather than the Promotions tab.</p></td></tr>
      <tr><td style="padding:16px 32px 32px 32px;border-top:1px solid #eee;color:#777;font-size:12px;line-height:1.4;">ExpatAutoAdviser &middot; <a href="${SITE_BASE_URL}" style="color:#777;">expatautoadviser.com</a></td></tr>
    </table>
  </body>
</html>`;
}

/**
 * Plain-text fallback for the magnet email.
 * Improves Promotions-tab placement (Gmail favours multipart/alternative).
 */
export function buildMagnetEmailText(magnet, magnetSlug) {
  const slug = magnetSlug || 'magnet';
  const pdfUrl = `${SITE_BASE_URL}${magnet.pdfPath}`;
  const lines = [];

  lines.push('Hi,', '');
  lines.push(`Your ${magnet.displayName}:`);
  lines.push(pdfUrl, '');
  lines.push(magnet.intro, '');

  if (magnet.siteLinks && magnet.siteLinks.length > 0) {
    lines.push(`While you're at it, these guides might help:`);
    magnet.siteLinks.forEach((l) =>
      lines.push(`  - ${l.label}: ${siteLinkUrl(slug, l.path)}`)
    );
    lines.push('');
  }
  if (magnet.affiliateLinks && magnet.affiliateLinks.length > 0) {
    lines.push(`Tools we use ourselves:`);
    magnet.affiliateLinks.forEach((l) =>
      lines.push(`  - ${l.label} (${l.reason}): ${l.href}`)
    );
    lines.push(
      `(Affiliate links — we may earn a small commission at no extra cost.)`,
      ''
    );
  }
  lines.push('Best,', 'Patrick', 'ExpatAutoAdviser', '');
  lines.push(
    `You'll start getting our ExpatAutoAdviser newsletter roughly once a week. Unsubscribe any time.`
  );
  lines.push(
    `Tip: add ${SENDER_EMAIL} to your contacts so future emails reach your inbox.`
  );
  return lines.join('\n');
}
