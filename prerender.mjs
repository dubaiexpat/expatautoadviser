import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE = 'https://www.expatautoadviser.com';

const ROUTES = [
  '/',
  '/singapore',
  '/singapore/should-i-get-a-car',
  '/singapore/leasing-guide',
  '/singapore/buying-guide',
  '/singapore/insurance-guide',
  '/singapore/licence-conversion',
  '/singapore/ev-guide',
  '/singapore/calculators',
  '/singapore/garage-finder',
  '/hongkong',
  '/hongkong/should-i-get-a-car',
  '/hongkong/buying-guide',
  '/hongkong/leasing-guide',
  '/hongkong/frt-tax-explained',
  '/hongkong/insurance-guide',
  '/hongkong/mot-maintenance',
  '/hongkong/licence-conversion',
  '/hongkong/ev-guide',
  '/hongkong/calculators',
  '/hongkong/garage-finder',
];

const META = {
  '/': {
    title: 'Expat Auto Adviser â Singapore & Hong Kong Car Guides',
    desc: 'Free, independent guides to buying, leasing and insuring a car in Singapore and Hong Kong. Written by expats, for expats.',
    type: 'website',
  },
  '/singapore': {
    title: 'Cars in Singapore: The Complete Expat Guide | ExpatAutoAdviser',
    desc: 'Everything expats need to know about cars in Singapore â leasing, buying, COE, insurance and licence conversion. Independent advice.',
    type: 'website',
  },
  '/singapore/should-i-get-a-car': {
    title: 'Should I Get a Car in Singapore? Honest Expat Advice',
    desc: 'Cars in Singapore are expensive â but so is your time. Our honest breakdown helps you decide if a car makes financial sense for your lifestyle.',
    type: 'article',
    faq: [
      { q: 'Do expats need a car in Singapore?', a: 'It depends on where you live. In central Singapore the MRT is excellent and most expats do not need a car. In areas like Bukit Timah, Seletar or the East Coast, or if you have school run duties, a car is often worth it.' },
      { q: 'How much does a car cost per month in Singapore?', a: 'All-in for a mid-range lease: roughly SGD $2,000â$3,500/month including insurance and fuel. Ownership costs more when you factor in COE and depreciation.' },
      { q: 'Is leasing or buying better for expats in Singapore?', a: 'For most expats on 2â5 year assignments, leasing is better â no COE risk, no need to sell, insurance often bundled. Buying makes sense if you plan to stay 7+ years.' },
    ],
  },
  '/singapore/leasing-guide': {
    title: 'Leasing a Car in Singapore as an Expat | Full Guide',
    desc: "How car leasing works in Singapore, what's bundled in a lease, typical monthly costs from economy to premium, and how to pick the right company.",
    type: 'article',
    faq: [
      { q: 'Can expats lease a car in Singapore?', a: 'Yes. Most leasing companies accept expats with a valid Employment Pass or S-Pass. You need a valid driving licence and usually a deposit of 1â2 months.' },
      { q: 'What is included in a Singapore car lease?', a: 'Full-service leases typically include road tax, maintenance, 24/7 roadside assistance and often insurance. Always clarify what is bundled before signing.' },
      { q: 'How long is a typical car lease in Singapore?', a: 'Most expat leases run 12â36 months. Shorter leases exist but cost significantly more per month.' },
    ],
  },
  '/singapore/buying-guide': {
    title: 'Buying a Car in Singapore as an Expat: COE, ARF & Full Costs',
    desc: 'When buying beats leasing: how COE, ARF and registration fees work, total cost of ownership, the step-by-step buying process, and how to sell before you leave.',
    type: 'article',
    faq: [
      { q: 'Can foreigners buy a car in Singapore?', a: 'Yes. Any valid Employment Pass or Dependant Pass holder can buy a car in Singapore. You need a valid driving licence and SingPass for the registration process.' },
      { q: 'What is COE in Singapore?', a: 'The Certificate of Entitlement is a government quota system controlling vehicle numbers. Required for every new car, it is bid fortnightly and currently costs SGD $80,000â$130,000+ depending on category.' },
      { q: 'What happens to my car when I leave Singapore?', a: 'You can sell privately, trade in to a dealer, or export. Most expats sell 6â12 months before departure to avoid a fire sale. Dealers will buy at any time.' },
    ],
  },
  '/singapore/insurance-guide': {
    title: 'Car Insurance in Singapore for Expats: What You Actually Need',
    desc: 'Why insurance is almost always bundled in leases, what to check when it is not, how to transfer your No Claims Discount, and recommended insurers.',
    type: 'article',
    faq: [
      { q: 'Is car insurance mandatory in Singapore?', a: 'Yes. Third-party liability insurance is a legal requirement. Comprehensive cover is strongly recommended given repair costs and traffic density.' },
      { q: 'Can I transfer my No Claims Discount from overseas?', a: 'Yes, Singapore insurers recognise overseas NCD from many countries including UK, Australia and USA. You need a letter from your previous insurer.' },
      { q: 'How much does car insurance cost in Singapore?', a: 'For a leased mid-range car, expect SGD $1,500â$3,000/year for comprehensive cover. New and young drivers pay significantly more.' },
    ],
  },
  '/singapore/licence-conversion': {
    title: 'Convert Your Driving Licence in Singapore: Expat Step-by-Step Guide',
    desc: 'Which nationalities can convert without a test, the step-by-step Traffic Police process, what it costs and how long it takes.',
    type: 'article',
    faq: [
      { q: 'Which countries can convert to a Singapore licence without a test?', a: 'Citizens from most developed countries including UK, USA, Australia, Canada and Germany can convert without a test. Check the Traffic Police website for the current approved list.' },
      { q: 'How long does licence conversion take in Singapore?', a: 'Typically 1â3 weeks from application at a driving centre, once you have all documents ready.' },
      { q: 'Can I drive in Singapore on my foreign licence?', a: 'Yes, for up to 12 months on a valid foreign licence. After that you must convert or obtain a Singapore licence.' },
    ],
  },
  '/singapore/ev-guide': {
    title: 'Electric Cars in Singapore: Expat Guide to EVs, Incentives & Charging',
    desc: 'EVs are rising fast in Singapore lease fleets. EEAI incentives, charging infrastructure, popular models and what expats need to know before choosing an EV.',
    type: 'article',
  },
  '/singapore/calculators': {
    title: 'Singapore Car Cost Calculators for Expats | ExpatAutoAdviser',
    desc: 'Free calculators for Singapore expats: COE costs, total cost of ownership, lease vs buy comparison, and car insurance estimate.',
    type: 'website',
  },
  '/singapore/garage-finder': {
    title: 'Expat-Friendly Mechanics & Garages in Singapore | ExpatAutoAdviser',
    desc: 'Find English-speaking, expat-friendly mechanics and workshops in Singapore. Vetted recommendations from the ExpatAutoAdviser community.',
    type: 'website',
  },
  '/hongkong': {
    title: 'Cars in Hong Kong: The Complete Expat Guide | ExpatAutoAdviser',
    desc: 'Everything expats need to know about cars in Hong Kong â buying, FRT tax, leasing, insurance and licence conversion. Independent advice.',
    type: 'website',
  },
  '/hongkong/should-i-get-a-car': {
    title: 'Should I Get a Car in Hong Kong? Honest Expat Advice',
    desc: "HK's public transport is exceptional â but so are its hills and school run logistics. Our honest breakdown helps you decide if a car is worth it.",
    type: 'article',
    faq: [
      { q: 'Do expats need a car in Hong Kong?', a: 'In central urban areas (HK Island, Kowloon) the MTR is world-class and most expats do not need a car. In Sai Kung, the South Side or the New Territories, a car makes a significant difference.' },
      { q: 'How much does a car cost per month in Hong Kong?', a: 'All-in for a mid-range used car: HKD $8,000â$15,000/month including insurance, parking and fuel. Parking alone on HK Island can be HKD $4,000â$6,000/month.' },
      { q: 'Can I buy a used car in Hong Kong as an expat?', a: 'Yes. Used cars are the norm for expats in HK. There is no equivalent of Singapore COE, though First Registration Tax adds 40â115%+ to new car prices.' },
    ],
  },
  '/hongkong/buying-guide': {
    title: 'Buying a Car in Hong Kong as an Expat: New vs Used Guide',
    desc: 'New vs used cars in HK, why most expats buy used, the full purchase process, where to find good stock, and FRT explained simply.',
    type: 'article',
    faq: [
      { q: 'Why do most expats buy used cars in Hong Kong?', a: 'First Registration Tax adds 40â115%+ to new car prices, making used cars far better value. The used market in HK is large and well-regulated.' },
      { q: 'Where can I buy a used car in Hong Kong?', a: 'Main options: licensed dealers (most reliable, check TADA membership), private sellers via classifieds, and car auctions. Cheung Sha Wan and Kowloon Bay have dealer clusters.' },
      { q: 'Do I need a HK driving licence to buy a car?', a: 'No, but you need one to drive it. You have 12 months from arrival to drive on a valid overseas licence before needing to convert.' },
    ],
  },
  '/hongkong/leasing-guide': {
    title: 'Leasing a Car in Hong Kong as an Expat | Full Guide',
    desc: 'How leasing works in HK, full-service vs operating leases, typical monthly costs, and how to avoid hidden charges in a Hong Kong car lease.',
    type: 'article',
    faq: [
      { q: 'Is car leasing popular in Hong Kong?', a: 'Leasing is less common than buying in HK, but growing. It suits expats on shorter assignments who want to avoid the complexity of buying and selling a used car.' },
      { q: 'What does a car lease include in Hong Kong?', a: 'Full-service leases typically include maintenance, road tax and sometimes insurance. Always check what is excluded â tyres and accident damage are common exclusions.' },
    ],
  },
  '/hongkong/frt-tax-explained': {
    title: 'Hong Kong First Registration Tax (FRT) Explained for Expats',
    desc: 'FRT adds 40â115%+ to new car prices in Hong Kong. Understand the tax bands, EV exemptions, and how to calculate your true total cost.',
    type: 'article',
    faq: [
      { q: 'What is First Registration Tax in Hong Kong?', a: 'FRT is levied on all newly registered vehicles. It ranges from 40% on the first HKD $150,000 of taxable value to 115% on higher bands, making new cars very expensive.' },
      { q: 'Are EVs exempt from FRT in Hong Kong?', a: 'Electric vehicles benefit from a full FRT waiver capped at HKD $287,500 (as of 2024/25), making EVs significantly more price-competitive than petrol cars.' },
      { q: 'Does FRT apply to used cars in Hong Kong?', a: 'No. FRT is only charged on first registration. Used cars have already paid FRT so it is not charged again on resale.' },
    ],
  },
  '/hongkong/insurance-guide': {
    title: 'Car Insurance in Hong Kong for Expats: What You Actually Need',
    desc: 'Third-party insurance is mandatory in HK. How to transfer your overseas No Claims Bonus, comprehensive vs third-party costs, and what to watch out for.',
    type: 'article',
    faq: [
      { q: 'Is car insurance mandatory in Hong Kong?', a: 'Yes. Third-party liability insurance is a legal requirement for all registered vehicles in HK. Comprehensive insurance is strongly recommended, especially for used cars.' },
      { q: 'Can I use my overseas No Claims Bonus in Hong Kong?', a: 'Yes. Most HK insurers recognise overseas NCB from major markets including UK, Australia and Singapore. You need a letter from your previous insurer confirming your claims history.' },
    ],
  },
  '/hongkong/mot-maintenance': {
    title: 'MOT Test & Car Maintenance in Hong Kong: The Expat Guide',
    desc: 'Cars over 6 years old need an annual roadworthiness test in HK. How the MOT process works, how to find a mechanic expats actually trust, and maintenance cost guide.',
    type: 'article',
  },
  '/hongkong/licence-conversion': {
    title: 'Convert Your Driving Licence in Hong Kong: Expat Step-by-Step Guide',
    desc: 'Which nationalities convert without a test in HK, the Transport Department process step by step, costs and how long it takes.',
    type: 'article',
    faq: [
      { q: 'Which overseas licences convert in Hong Kong without a test?', a: 'HK recognises licences from many countries including UK, USA, Australia, Canada and major European countries. Check the Transport Department website for the full current list.' },
      { q: 'How long can I drive in Hong Kong on my overseas licence?', a: 'You can drive on a valid overseas licence for up to 12 months after arrival. After that you must hold a valid HK driving licence.' },
    ],
  },
  '/hongkong/ev-guide': {
    title: 'Electric Cars in Hong Kong: Expat Guide to EVs, FRT Waiver & Charging',
    desc: 'FRT concessions for EVs, the One-for-One Replacement Scheme, charging infrastructure across HK, and popular EV models for expats in 2026.',
    type: 'article',
  },
  '/hongkong/calculators': {
    title: 'Hong Kong Car Cost Calculators for Expats | ExpatAutoAdviser',
    desc: 'Free HK car calculators: FRT tax calculator, total ownership cost estimator, used car true cost, and insurance ballpark tool.',
    type: 'website',
  },
  '/hongkong/garage-finder': {
    title: 'Expat-Friendly Mechanics & Garages in Hong Kong | ExpatAutoAdviser',
    desc: 'Find MOT-approved centres, EV-capable workshops and English-speaking expat-friendly mechanics in Hong Kong, searchable by district.',
    type: 'website',
  },
};

function buildSchema(route, meta) {
  const schemas = [];
  const url = BASE + (route === '/' ? '' : route);
  if (meta.type === 'article') {
    schemas.push(JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": meta.title,
      "description": meta.desc,
      "url": url,
      "publisher": { "@type": "Organization", "name": "ExpatAutoAdviser", "url": BASE },
      "dateModified": new Date().toISOString().split('T')[0],
    }));
  } else {
    schemas.push(JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": meta.title,
      "description": meta.desc,
      "url": url,
      "isPartOf": { "@type": "WebSite", "name": "ExpatAutoAdviser", "url": BASE },
    }));
  }
  if (meta.faq && meta.faq.length) {
    schemas.push(JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": meta.faq.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a },
      })),
    }));
  }
  return schemas.map(s => `  <script type="application/ld+json">${s}</script>`).join('\n');
}

const template = fs.readFileSync(path.join(__dirname, 'dist/index.html'), 'utf-8');
const { render } = await import('./.ssr/entry-server.js');

for (const route of ROUTES) {
  const meta = META[route] || { title: 'Expat Auto Adviser', desc: 'Independent car guides for expats in Singapore and Hong Kong.', type: 'website' };
  const appHtml = render(route);
  const canonicalUrl = BASE + (route === '/' ? '' : route);

  const html = template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace(/<!--META_TITLE-->/g, meta.title)
    .replace(/<!--META_DESC-->/g, meta.desc)
    .replace('<!--OG_URL-->', canonicalUrl)
    .replace('<!--CANONICAL-->', `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace('<!--PAGE_SCHEMA-->', buildSchema(route, meta));

  const outDir = route === '/'
    ? path.join(__dirname, 'dist')
    : path.join(__dirname, 'dist' + route);

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log('Pre-rendered:', route);
}

// Generate sitemap.xml
const today = new Date().toISOString().split('T')[0];
const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...ROUTES.map(route => {
    const loc = BASE + (route === '/' ? '' : route) + '/';
    const freq = (route === '/' || route === '/singapore' || route === '/hongkong') ? 'weekly' : 'monthly';
    const pri = route === '/' ? '1.0' : (route === '/singapore' || route === '/hongkong') ? '0.9' : '0.8';
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${pri}</priority>\n  </url>`;
  }),
  '</urlset>',
].join('\n');

fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), sitemapXml);
console.log('Sitemap generated:', ROUTES.length, 'URLs');
console.log('Pre-rendering complete!');