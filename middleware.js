const BOTS = /googlebot|bingbot|yandexbot|baiduspider|facebookexternalhit|twitterbot|linkedinbot|slackbot|whatsapp|perplexity|anthropic|claudebot|applebot|duckduckbot|semrushbot|ahrefsbot/i;

const META = {
  '/': ['ExpatAutoAdviser — Cars in Singapore & Hong Kong', 'The complete expat guide to car ownership in Singapore and Hong Kong. Leasing, buying, insurance, FRT, COE, licence conversion and more.'],
  '/singapore': ['Cars in Singapore for Expats | ExpatAutoAdviser', 'Everything expats need to lease, insure and drive in Singapore. COE, leasing, insurance, licence conversion.'],
  '/singapore/leasing-guide': ['Singapore Car Leasing Guide for Expats | ExpatAutoAdviser', 'How leasing works in Singapore, costs SGD 1800-2500/month, COE explained, how to pick a lease company.'],
  '/singapore/should-i-get-a-car': ['Should I Get a Car in Singapore? | ExpatAutoAdviser', 'Honest guide: do expats in Singapore need a car? Depends on MRT access, assignment length, lifestyle.'],
  '/singapore/insurance-guide': ['Singapore Car Insurance for Expats | ExpatAutoAdviser', 'Car insurance in Singapore — usually bundled in leases. NCD transfer, third-party vs comprehensive.'],
  '/singapore/licence-conversion': ['Singapore Driving Licence Conversion | ExpatAutoAdviser', 'Convert your foreign licence in Singapore. Step-by-step guide, costs, timeline at Traffic Police.'],
  '/singapore/ev-guide': ['Electric Cars in Singapore for Expats | ExpatAutoAdviser', 'EV leasing in Singapore, EEAI incentives, charging infrastructure and popular models.'],
  '/hongkong': ['Cars in Hong Kong for Expats | ExpatAutoAdviser', 'Complete expat guide to buying, insuring and running a car in Hong Kong. FRT, MOT, parking.'],
  '/hongkong/buying-guide': ['Hong Kong Car Buying Guide for Expats | ExpatAutoAdviser', 'New vs used cars in HK, FRT explained, TD25 registration, where to find used cars.'],
  '/hongkong/frt-tax-explained': ['Hong Kong FRT Explained | ExpatAutoAdviser', 'First Registration Tax adds 40-115% to new car prices. Progressive bands, EV exemptions, calculations.'],
  '/hongkong/insurance-guide': ['Hong Kong Car Insurance for Expats | ExpatAutoAdviser', 'Mandatory third-party insurance, No Claims Bonus transfer, comprehensive cover costs.'],
  '/hongkong/mot-maintenance': ['Hong Kong MOT & Maintenance | ExpatAutoAdviser', 'Cars 7+ years need annual MOT. DVLA-approved centres and expat-trusted mechanics.'],
  '/hongkong/licence-conversion': ['Hong Kong Licence Conversion | ExpatAutoAdviser', 'Convert UK, US, Australian licence without a test. Process and costs at Transport Department.'],
  '/hongkong/ev-guide': ['Electric Cars in Hong Kong | ExpatAutoAdviser', 'FRT concessions for EVs, One-for-One Replacement Scheme, EV charging across HK.'],
};

export default async function handler(request) {
  const ua = request.headers.get('user-agent') || '';
  if (!BOTS.test(ua)) return;

  const url = new URL(request.url);
  const path = url.pathname;
  const [title, desc] = META[path] || META['/'];

  const sgLinks = ['/singapore','/singapore/should-i-get-a-car','/singapore/leasing-guide','/singapore/insurance-guide','/singapore/licence-conversion','/singapore/ev-guide']
    .map(k => '<li><a href="'+k+'">'+(META[k]||META['/'])[0].replace(' | ExpatAutoAdviser','')+'</a></li>').join('');
  const hkLinks = ['/hongkong','/hongkong/buying-guide','/hongkong/frt-tax-explained','/hongkong/insurance-guide','/hongkong/mot-maintenance','/hongkong/licence-conversion','/hongkong/ev-guide']
    .map(k => '<li><a href="'+k+'">'+(META[k]||META['/'])[0].replace(' | ExpatAutoAdviser','')+'</a></li>').join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.expatautoadviser.com${path}">
<meta name="google-site-verification" content="zZgPqt1kDnNKqPNyfbARMbleNNiwTLKH8_HC9X2n78Y">
</head>
<body>
<header><a href="/">ExpatAutoAdviser</a> — Cars in Singapore &amp; Hong Kong for Expats</header>
<main>
<h1>${title.replace(' | ExpatAutoAdviser','')}</h1>
<p>${desc}</p>
<section><h2>Singapore Guides</h2><ul>${sgLinks}</ul></section>
<section><h2>Hong Kong Guides</h2><ul>${hkLinks}</ul></section>
</main>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { 'content-type': 'text/html; charset=utf-8', 'x-robots-tag': 'index, follow' },
  });
}

export const config = { path: '/((?!_vercel|assets|favicon\.ico|sitemap\.xml|robots\.txt).*)' };
