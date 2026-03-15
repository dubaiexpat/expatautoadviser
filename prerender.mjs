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
    '/singapore/lease-checker',
  '/hong-kong',
  '/hong-kong/should-i-get-a-car',
  '/hong-kong/buying-guide',
  '/hong-kong/leasing-guide',
  '/hong-kong/frt-tax-explained',
  '/hong-kong/insurance-guide',
  '/hong-kong/mot-maintenance',
  '/hong-kong/licence-conversion',
  '/hong-kong/ev-guide',
  '/hong-kong/calculators',
  '/hong-kong/garage-finder',
    '/hong-kong/lease-checker',
];

const META = {
  '/': {
    title: `ExpatAutoAdviser — Singapore & Hong Kong Car Guides`,
    desc: `Free guides for expats on leasing or buying a car in Singapore and Hong Kong. Compare costs, understand rules, and make the right choice.`,
    type: `website`,
  },
  '/singapore': {
    title: `Singapore Expat Car Guide — Lease, Buy or Skip?`,
    desc: `Everything expats need to know about getting a car in Singapore. COE, leasing vs buying, insurance, and cost calculators.`,
    type: `website`,
  },
  '/singapore/should-i-get-a-car': {
    title: `Should I Get a Car in Singapore? Honest Expat Advice`,
    desc: `Weighing up a car in Singapore? This guide covers real costs, MRT vs driving trade-offs, and who actually benefits from owning a car as an expat.`,
    type: `article`,
    faq: [
      {
        q: `Do expats need a car in Singapore?`,
        a: `Most expats living in central Singapore do not need a car. The MRT and bus network is excellent and affordable. A car makes more sense if you have children doing school runs, live outside the central belt, or plan to stay 3 or more years.`,
      },
      {
        q: `How much does a car cost per month in Singapore?`,
        a: `Expect to pay SGD 1,500 to 2,500 per month all-in for a leased car including insurance and road tax. Buying costs more upfront due to COE prices which can exceed SGD 100,000.`,
      },
      {
        q: `Is leasing or buying better for expats in Singapore?`,
        a: `Leasing is almost always better for expats on a 1 to 3 year assignment. Buying only makes financial sense if you plan to stay 5 or more years and can recoup the COE cost.`,
      },
    ],
  },
  '/singapore/leasing-guide': {
    title: `How to Lease a Car in Singapore — Expat Guide`,
    desc: `A step-by-step guide to leasing a car in Singapore as an expat. What to look for in a lease, typical costs, and which companies are expat-friendly.`,
    type: `article`,
    faq: [
      {
        q: `Can expats lease a car in Singapore without a Singapore licence?`,
        a: `Yes. Most leasing companies accept a valid foreign driving licence or an International Driving Permit for the duration of your lease.`,
      },
      {
        q: `What is a typical car lease cost in Singapore?`,
        a: `A standard sedan lease in Singapore typically costs SGD 1,200 to 1,800 per month including road tax. Insurance is usually extra.`,
      },
      {
        q: `How long are car leases in Singapore?`,
        a: `Most expat leases run from 6 months to 3 years. Short-term leases of 1 to 3 months are available but cost significantly more per month.`,
      },
    ],
  },
  '/singapore/buying-guide': {
    title: `Buying a Car in Singapore as an Expat — Full Guide`,
    desc: `Everything you need to know about buying a car in Singapore. COE explained, dealers, financing, and whether buying actually makes financial sense for expats.`,
    type: `article`,
    faq: [
      {
        q: `What is COE and how does it affect car prices in Singapore?`,
        a: `COE (Certificate of Entitlement) is a government quota licence required to own a car in Singapore. COE prices are set by auction and frequently exceed SGD 100,000, making Singapore one of the most expensive places in the world to buy a car.`,
      },
      {
        q: `Can foreigners buy a car in Singapore?`,
        a: `Yes. Foreigners with a valid Employment Pass or Dependent Pass can purchase a car in Singapore. You will need a Singapore driving licence or a converted foreign licence.`,
      },
    ],
  },
  '/singapore/insurance-guide': {
    title: `Car Insurance in Singapore — Expat Guide`,
    desc: `Compare car insurance options in Singapore as an expat. Understand comprehensive vs third-party coverage, NCD transfers, and how to get the best rate.`,
    type: `article`,
    faq: [
      {
        q: `Can I transfer my No Claim Discount to Singapore?`,
        a: `Some Singapore insurers accept NCD from overseas policies. You will need a letter from your previous insurer confirming your claims history and NCD level.`,
      },
      {
        q: `What type of car insurance do I need in Singapore?`,
        a: `Third-party insurance is the legal minimum in Singapore. Most expats opt for comprehensive coverage given the high cost of vehicles.`,
      },
    ],
  },
  '/singapore/licence-conversion': {
    title: `Converting Your Driving Licence in Singapore — Expat Guide`,
    desc: `How to convert a foreign driving licence to a Singapore licence. Which licences qualify for direct conversion, the process, costs, and timelines.`,
    type: `article`,
    faq: [
      {
        q: `Which countries have reciprocal licence agreements with Singapore?`,
        a: `Singapore has reciprocal agreements with Australia, New Zealand, the UK, Ireland, and several other countries, allowing direct conversion without a driving test.`,
      },
      {
        q: `How long does licence conversion take in Singapore?`,
        a: `The conversion process typically takes 1 to 3 weeks once you have gathered the required documents and passed any required tests.`,
      },
    ],
  },
  '/singapore/ev-guide': {
    title: `Electric Cars in Singapore — Expat EV Guide`,
    desc: `Thinking about an electric car in Singapore? This guide covers EV grants, charging infrastructure, COE implications, and which EVs work best for expat lifestyles.`,
    type: `article`,
    faq: [
      {
        q: `Are electric cars worth it in Singapore?`,
        a: `EVs can make sense in Singapore thanks to government grants like the EV Early Adoption Incentive. However, high COE costs still apply, and charging infrastructure in older condos can be limited.`,
      },
      {
        q: `Where can I charge an EV in Singapore?`,
        a: `Singapore has a growing public charging network including ChargePoint and SP Group chargers at shopping malls, car parks, and condos. Many newer residential buildings have dedicated EV charging points.`,
      },
    ],
  },
  '/singapore/calculators': {
    title: `Singapore Car Cost Calculator — Lease vs Buy`,
    desc: `Use our free calculator to compare the true monthly cost of leasing vs buying a car in Singapore. Includes COE, insurance, road tax, and running costs.`,
    type: `website`,
  },
  '/singapore/garage-finder': {
    title: `Expat-Friendly Garages in Singapore`,
    desc: `Find reliable, English-speaking garages and service centres in Singapore. Recommended by expats for fair pricing and quality work.`,
    type: `website`,
  },
  '/hong-kong': {
    title: `Hong Kong Expat Car Guide — Lease, Buy or Skip?`,
    desc: `Everything expats need to know about getting a car in Hong Kong. FRT tax, leasing vs buying, insurance, and practical advice for expatriates.`,
    type: `website`,
  },
  '/hong-kong/should-i-get-a-car': {
    title: `Should I Get a Car in Hong Kong? Honest Expat Advice`,
    desc: `Is a car worth it in Hong Kong? This guide covers real costs, the MTR vs driving trade-off, and who actually benefits from owning a car as an expat in HK.`,
    type: `article`,
    faq: [
      {
        q: `Do expats need a car in Hong Kong?`,
        a: `Most expats in Hong Kong Island or Kowloon do not need a car. The MTR and bus network is world-class. A car is more useful in the New Territories or if you have children doing school runs.`,
      },
      {
        q: `How much does a car cost per month in Hong Kong?`,
        a: `Expect to pay HKD 12,000 to 20,000 per month all-in for a leased car. Buying is also expensive due to the First Registration Tax which can add 40 to 100 percent to the vehicle price.`,
      },
      {
        q: `Is leasing or buying better for expats in Hong Kong?`,
        a: `Leasing is generally better for expats on short to medium assignments. Buying can make sense for long-term residents who plan to stay 4 or more years.`,
      },
    ],
  },
  '/hong-kong/buying-guide': {
    title: `Buying a Car in Hong Kong as an Expat — Full Guide`,
    desc: `Everything you need to know about buying a car in Hong Kong. First Registration Tax explained, dealers, financing, and whether buying makes sense for expats.`,
    type: `article`,
    faq: [
      {
        q: `What is First Registration Tax in Hong Kong?`,
        a: `First Registration Tax (FRT) is a tax levied on all newly registered vehicles in Hong Kong. It ranges from 40 to 115 percent of the taxable value of the vehicle, making new cars extremely expensive.`,
      },
      {
        q: `Can foreigners buy a car in Hong Kong?`,
        a: `Yes. Foreigners with a valid Hong Kong identity document can purchase a car. You will need a Hong Kong driving licence or a valid overseas licence plus an International Driving Permit.`,
      },
    ],
  },
  '/hong-kong/leasing-guide': {
    title: `How to Lease a Car in Hong Kong — Expat Guide`,
    desc: `A practical guide to leasing a car in Hong Kong as an expat. Typical costs, what to look for in a lease agreement, and expat-friendly leasing companies.`,
    type: `article`,
    faq: [
      {
        q: `Can expats lease a car in Hong Kong without a local licence?`,
        a: `Yes. Most leasing companies in Hong Kong accept valid overseas driving licences. If your licence is not in English or Chinese, you may need an International Driving Permit.`,
      },
      {
        q: `What is a typical car lease cost in Hong Kong?`,
        a: `A standard sedan lease in Hong Kong typically costs HKD 10,000 to 16,000 per month excluding insurance.`,
      },
    ],
  },
  '/hong-kong/frt-tax-explained': {
    title: `Hong Kong First Registration Tax (FRT) Explained`,
    desc: `A clear explanation of Hong Kong First Registration Tax for expats. How FRT is calculated, current rates, EV exemptions, and how it affects the cost of buying a car.`,
    type: `article`,
    faq: [
      {
        q: `How is First Registration Tax calculated in Hong Kong?`,
        a: `FRT is calculated on a progressive scale based on the taxable value of the vehicle. Rates range from 40 percent on the first HKD 150,000 of value up to 115 percent on the portion above HKD 500,000.`,
      },
      {
        q: `Are electric vehicles exempt from FRT in Hong Kong?`,
        a: `Electric vehicles have historically received FRT concessions in Hong Kong. The government has offered full or partial FRT waivers for EVs as part of its green transport policy, though the exact terms change periodically.`,
      },
    ],
  },
  '/hong-kong/insurance-guide': {
    title: `Car Insurance in Hong Kong — Expat Guide`,
    desc: `Compare car insurance options in Hong Kong as an expat. Third-party vs comprehensive coverage, NCD, and tips for getting a fair quote.`,
    type: `article`,
    faq: [
      {
        q: `What is the minimum car insurance required in Hong Kong?`,
        a: `Third-party liability insurance is the legal minimum in Hong Kong. It covers injury or death to third parties but not damage to your own vehicle.`,
      },
      {
        q: `Can I use my overseas No Claim Discount in Hong Kong?`,
        a: `Some Hong Kong insurers will recognise overseas NCD. You will need a letter from your previous insurer confirming your claims-free history.`,
      },
    ],
  },
  '/hong-kong/mot-maintenance': {
    title: `Car Maintenance and Inspection in Hong Kong — Expat Guide`,
    desc: `What expats need to know about car maintenance, roadworthiness testing, and finding reliable garages in Hong Kong.`,
    type: `article`,
    faq: [
      {
        q: `Is there a car inspection requirement in Hong Kong?`,
        a: `Yes. Vehicles in Hong Kong must pass periodic vehicle examination at government-authorised centres. The frequency depends on vehicle age, with older vehicles requiring more frequent checks.`,
      },
      {
        q: `How do I find a trustworthy garage in Hong Kong as an expat?`,
        a: `Look for garages recommended by other expats in online forums or expat groups. Many authorised dealers and larger chain service centres have English-speaking staff.`,
      },
    ],
  },
  '/hong-kong/licence-conversion': {
    title: `Converting Your Driving Licence in Hong Kong — Expat Guide`,
    desc: `How to convert a foreign driving licence to a Hong Kong licence. Which licences qualify, the process, costs, and how long it takes.`,
    type: `article`,
    faq: [
      {
        q: `Which countries can convert their licence directly in Hong Kong?`,
        a: `Hong Kong has reciprocal licence agreements with many countries including the UK, Australia, and EU member states. Holders of qualifying licences can exchange without sitting a test.`,
      },
      {
        q: `How long can I drive in Hong Kong on a foreign licence?`,
        a: `Visitors can drive on a valid overseas licence for up to 12 months. After that, or once you become a Hong Kong resident, you will need a local licence.`,
      },
    ],
  },
  '/hong-kong/ev-guide': {
    title: `Electric Cars in Hong Kong — Expat EV Guide`,
    desc: `Thinking about an electric car in Hong Kong? This guide covers FRT concessions, charging infrastructure, and which EVs suit expat life in HK.`,
    type: `article`,
    faq: [
      {
        q: `Are electric cars popular in Hong Kong?`,
        a: `Yes. Hong Kong has one of the highest EV adoption rates in Asia, driven by FRT concessions and a dense public charging network. Tesla is particularly popular among expats.`,
      },
      {
        q: `Where can I charge an EV in Hong Kong?`,
        a: `Hong Kong has an extensive charging network at car parks, shopping malls, and residential buildings. CLP and HK Electric also offer home charger installation for eligible customers.`,
      },
    ],
  },
  '/hong-kong/calculators': {
    title: `Hong Kong Car Cost Calculator — Lease vs Buy`,
    desc: `Use our free calculator to compare the true cost of leasing vs buying a car in Hong Kong. Includes FRT, insurance, and running costs.`,
    type: `website`,
  },
  '/hong-kong/garage-finder': {
    title: `Expat-Friendly Garages in Hong Kong`,
    desc: `Find reliable, English-speaking garages and service centres in Hong Kong. Recommended by expats for fair pricing and quality work.`,
    type: `website`,
  },
  '/singapore/lease-checker': {
    title: `Singapore Lease Checker — Is Your Car Lease a Fair Deal?`,
    desc: `Check if your Singapore car lease is fairly priced. Enter your terms and compare against real market data from expat lease submissions.`,
    type: `website`,
    faq: [
      {
        q: `What is a fair monthly price for a car lease in Singapore?`,
        a: `A mid-range sedan lease in Singapore typically costs SGD 1,650 to 2,300 per month. Economy cars range from SGD 1,150 to 1,580, while premium cars can cost SGD 2,150 to 3,050 per month. These figures are for 36-month leases — shorter terms cost more.`,
      },
      {
        q: `Does a Singapore car lease include insurance?`,
        a: `It depends on the lease. Many Singapore leases include comprehensive car insurance, road tax, and servicing in the monthly price. Always check what is included — a lease at SGD 2,500 with insurance included may be cheaper than one at SGD 2,000 without it.`,
      },
      {
        q: `How do I compare car lease prices in Singapore?`,
        a: `Get at least three quotes for the same car segment and lease term. Ask each company to quote with and without insurance and servicing so you can compare on a like-for-like basis. Use our Lease Checker to benchmark any quote against current market rates.`,
      },
    ],
  },
  '/hong-kong/lease-checker': {
    title: `Hong Kong Lease Checker — Is Your Car Lease a Fair Deal?`,
    desc: `Check if your Hong Kong car lease is fairly priced. Compare your lease terms against current HK market rates from real expat data.`,
    type: `website`,
    faq: [
      {
        q: `What is a fair monthly price for a car lease in Hong Kong?`,
        a: `A standard sedan lease in Hong Kong typically costs HKD 10,000 to 16,000 per month excluding insurance. Prices vary by car model, lease length, and what is included.`,
      },
      {
        q: `Should I lease or buy a car in Hong Kong as an expat?`,
        a: `Leasing is generally better for expats on 1 to 3 year assignments. Buying involves First Registration Tax of 40 to 115 percent on top of the vehicle price, making it only worthwhile for longer stays.`,
      },
    ],
  },
};

function buildSchema(route, meta) {
  const schemas = [];
  const url = BASE + (route === '/' ? '' : route);

  if (meta.type === 'article') {
    schemas.push(JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: meta.title,
      description: meta.desc,
      url,
      publisher: {
        '@type': 'Organization',
        name: 'ExpatAutoAdviser',
        url: BASE,
      },
      dateModified: new Date().toISOString().split('T')[0],
    }));
  } else {
    schemas.push(JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: meta.title,
      description: meta.desc,
      url,
      isPartOf: {
        '@type': 'WebSite',
        name: 'ExpatAutoAdviser',
        url: BASE,
      },
    }));
  }

  if (meta.faq && meta.faq.length > 0) {
    schemas.push(JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: meta.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    }));
  }

  return schemas
    .map(s => `  <script type="application/ld+json">${s}</script>`)
    .join('\n');
}

const template = fs.readFileSync(path.join(__dirname, 'dist/index.html'), 'utf-8');
const { render } = await import('./.ssr/entry-server.js');

for (const route of ROUTES) {
  const meta = META[route] || {
    title: 'ExpatAutoAdviser',
    desc: 'Free car guides for expats in Singapore and Hong Kong.',
    type: 'website',
  };

  const appHtml = render(route);
  const canonicalUrl = BASE + (route === '/' ? '' : route);

  const html = template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace(/<!--META_TITLE-->/g, meta.title)
    .replace('PAGE_TITLE_HERE', meta.title)
    .replace(/<!--META_DESC-->/g, meta.desc)
    .replace('<!--OG_URL-->', canonicalUrl)
    .replace('<!--CANONICAL-->', `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace('<!--PAGE_SCHEMA-->', buildSchema(route, meta));

  const outDir =
    route === '/'
      ? path.join(__dirname, 'dist')
      : path.join(__dirname, 'dist' + route);

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log('Pre-rendered:', route);
}

const today = new Date().toISOString().split('T')[0];
const urlEntries = ROUTES.map(route => {
  const loc = BASE + (route === '/' ? '' : route);
  const priority = route === '/' ? '1.0' : route.split('/').length === 2 ? '0.8' : '0.7';
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>monthly</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
});

const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urlEntries,
  '</urlset>',
].join('\n');

fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), sitemapXml);
console.log(`Sitemap generated: ${ROUTES.length} URLs`);
console.log('Pre-rendering complete!');
