import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = 'https://www.expatautoadviser.com';

/**
 * ROUTES is auto-derived from src/App.jsx at build time so the prerender
 * list cannot drift from the actual route table.
 *
 * Pattern: any <Route path="..." element={<X />} /> where the element is NOT
 * a <Navigate ...> redirect. Redirect routes are filtered because they 301
 * to a canonical URL and shouldn't be prerendered or sitemapped separately.
 *
 * If you add a new <Route> in App.jsx, also add a META entry below for the
 * page's title/description/schema. The validation step at the top of this
 * script will fail the build if a route exists without a META entry.
 *
 * (See SHARED/proposals/2026-04-26_seo_postmortem.md for context.)
 */
function deriveRoutesFromApp() {
  const appPath = path.join(__dirname, 'src', 'App.jsx');
  const src = fs.readFileSync(appPath, 'utf-8');

  // Match every <Route path="..." element={<X .../>} />
  // We need to capture both the path AND the element to filter out Navigate redirects.
  const routeRegex = /<Route\s+path="([^"]+)"\s+element=\{(<[^/>]+\/?>)/g;
  const routes = [];
  const seen = new Set();

  let m;
  while ((m = routeRegex.exec(src)) !== null) {
    const [, routePath, element] = m;

    // Skip dynamic segments (no /:slug routes here, but be defensive)
    if (routePath.includes(':')) continue;

    // Skip <Navigate ...> redirect routes
    if (/^<Navigate\b/.test(element)) continue;

    // De-dupe (paranoid)
    if (seen.has(routePath)) continue;
    seen.add(routePath);

    routes.push(routePath);
  }

  return routes;
}

const ROUTES = deriveRoutesFromApp();

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
    title: `Singapore Car Leasing Guide for Expats (2026): Costs, Companies & Terms`,
    desc: `Complete guide to leasing a car in Singapore as an expat in 2026 — typical lease costs (SGD 1,200-1,800/mo), expat-friendly leasing companies, what to check in a lease, and 6-month vs 36-month options.`,
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
    title: `Hong Kong Car Leasing Guide for Expats (2026): Costs, Companies & Terms`,
    desc: `Complete guide to leasing a car in Hong Kong as an expat in 2026 — typical costs (HKD 10,000-16,000/mo), expat-friendly leasing companies, lease vs buy maths, and short-term options.`,
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
    title: `Hong Kong First Registration Tax 2026: Private Car Rates & Bands Explained`,
    desc: `Hong Kong First Registration Tax (FRT) rates for private cars in 2026: progressive bands (46/86/115/132%), how taxable value is calculated, EV concession rules, and worked examples for expats.`,
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
  '/singapore/cost-of-driving': {
    title: `ERP 2.0 and the Real Cost of Driving in Singapore`,
    desc: `How Singapore's ERP 2.0 system works in 2026: OBU rollout, distance-based charging intent, typical gantry rates, and what daily driving really costs an expat.`,
    type: `article`,
  },
  '/singapore/car-loans': {
    title: `Car Loans for Expats in Singapore: MAS LTV Rules Explained`,
    desc: `How car loans work for expats in Singapore: MAS LTV caps (70%/60%), typical lender practice, TDSR considerations, EP requirements, and indicative 2026 rate ranges.`,
    type: `article`,
  },
  '/singapore/child-car-seats': {
    title: `Child Car Seats and ISOFIX Laws in Singapore`,
    desc: `Singapore's child restraint rules for expat families: the 1.35m height threshold, approved standards, the S$150 fine, and the taxi vs private-hire vehicle exemption.`,
    type: `article`,
  },
  '/singapore/subscription-vs-ownership': {
    title: `Car Subscription vs Ownership in Singapore: What Expats Should Know`,
    desc: `Car subscription vs ownership in Singapore: how Carro Leap and Drive Lah work, what's typically bundled, illustrative cost comparison, and when each option suits expats.`,
    type: `article`,
  },
  '/hong-kong/selling-guide': {
    title: `Selling Your Car When Leaving Hong Kong: A Six-Week Checklist`,
    desc: `How to sell your car before leaving Hong Kong: timing the sale, dealer vs private, TD forms, export rules, insurance gaps, and a six-week countdown for departing expats.`,
    type: `article`,
  },
  '/singapore/funding-car-purchase': {
    title: `Funding a Car Purchase in Singapore: UK Expat Money-Transfer Guide (2026)`,
    desc: `The full Singapore car cost stack for UK expats — COE S$123k, ARF tiers, GST, excise — plus how to move £35-80k from a UK bank to Singapore without losing thousands to FX margins.`,
    type: `article`,
    faq: [
      {
        q: `What's the cheapest way to send GBP to Singapore for a car purchase?`,
        a: `For amounts above £5,000, Wise typically beats UK high-street banks by £600-1,400 per transfer thanks to the mid-market exchange rate. UK banks bake a 2-4% margin into the rate they quote, which is invisible as a fee but real cash. Wise charges a transparent fee on top of the true mid-market rate.`,
      },
      {
        q: `How long does a UK to Singapore transfer take?`,
        a: `Wise: typically same-day for amounts under £100k, often within an hour. UK bank SWIFT transfers: 1-3 working days. Plan to initiate transfers at least 2-3 working days before the dealer's payment deadline to absorb any delays.`,
      },
      {
        q: `Should I take a Singapore car loan instead of transferring all the cash?`,
        a: `Often yes for cash-flow reasons. UK expats with valid Employment Pass and a few months of Singapore salary history can typically borrow 50-60% LTV against the OMV + ARF + COE total via Singapore banks. Reduces upfront GBP transfer; you service the SGD loan from your Singapore salary going forward.`,
      },
    ],
  },
  '/singapore/coe-guide': {
    title: `How the COE System Works for Expats in Singapore`,
    desc: `Everything expats need to know about Singapore's Certificate of Entitlement system: how bidding works, current COE prices, categories, renewal rules, and strategies to manage the cost.`,
    type: `article`,
    faq: [
      {
        q: `What is COE in Singapore?`,
        a: `COE (Certificate of Entitlement) is a government quota licence that gives you the right to own and use a vehicle in Singapore for 10 years. Without one, you cannot register a car. COE prices are set by open bidding and currently run between S$80,000 and S$100,000 for a standard family car.`,
      },
      {
        q: `How does COE bidding work?`,
        a: `COE is awarded through a sealed-bid, uniform-price auction held twice a month by the Land Transport Authority. You submit the maximum price you are willing to pay. All successful bidders pay the same price — the lowest winning bid, known as the Quota Premium.`,
      },
      {
        q: `Can expats bid for COE in Singapore?`,
        a: `Yes. Any individual with a valid Singapore driving licence or converted foreign licence can bid for COE. Most expats let their car dealer handle the bidding process as part of the purchase.`,
      },
    ],
  },
  '/singapore/new-arrival': {
    title: `New Arrival in Singapore? Your First-90-Days Car Checklist`,
    desc: `What expats need to sort in their first 90 days in Singapore — driving licence, vehicle options, MRT vs car economics, and how to avoid expensive early mistakes.`,
    type: `article`,
    faq: [
      {
        q: `When should new arrivals decide whether to get a car in Singapore?`,
        a: `Most relocation experts recommend living in Singapore for at least 60-90 days before deciding on a car. Use that time to test your daily commute on MRT and bus, see whether your home is in a walkable area, and understand whether the cost-versus-convenience math actually works for your family.`,
      },
      {
        q: `Can I drive in Singapore on a foreign licence as a new arrival?`,
        a: `Yes — for the first 12 months. After that you must convert to a Singapore licence. Most UK, Australian, NZ, and EU licences qualify for direct conversion without sitting a test, but you do need to apply within 12 months of becoming a resident.`,
      },
      {
        q: `What's the cheapest way to get on the road as a new expat in Singapore?`,
        a: `Short-term leasing (1-3 months) gives you flexibility while you settle. Expect SGD 2,000-3,000 per month for a sedan. Once you've decided whether you actually need a car long-term, switch to a 12-36 month lease for SGD 1,200-1,800 per month or commit to a purchase.`,
      },
    ],
  },
  '/hong-kong/new-arrival': {
    title: `New Arrival in Hong Kong? Your First-90-Days Car Checklist`,
    desc: `What expats need to sort in their first 90 days in Hong Kong — driving licence, MTR vs car decision, Octopus card vs car economics, and the realities of HK parking.`,
    type: `article`,
    faq: [
      {
        q: `Do I need a car when I first arrive in Hong Kong?`,
        a: `Most newly arrived expats in Hong Kong Island or Kowloon don't need a car. The MTR, buses, trams, and taxis cover almost everything. A car becomes more useful if you're settling in the New Territories or have school-age kids.`,
      },
      {
        q: `Can I drive on a UK or Australian licence in Hong Kong?`,
        a: `Yes — for the first 12 months. The UK, Australia, and many other jurisdictions are on Hong Kong's Direct Issue List, so you can convert without sitting a test. Apply early — Transport Department processing takes 5-10 working days, longer if your documents need verification.`,
      },
      {
        q: `How quickly can I get a car in Hong Kong as a new arrival?`,
        a: `Short-term lease companies can put you in a car within a week. Buying takes longer — 2-4 weeks if you're buying used from a dealer, longer for a new car needing First Registration Tax processing. Most new expats lease for the first 6-12 months while they decide.`,
      },
    ],
  },
  '/contact': {
    title: `Contact ExpatAutoAdviser`,
    desc: `Get in touch with ExpatAutoAdviser. Questions about expat car ownership in Singapore or Hong Kong, content corrections, or partnership enquiries — we read every message.`,
    type: `website`,
  },
  '/privacy': {
    title: `Privacy Policy — ExpatAutoAdviser`,
    desc: `Privacy policy for ExpatAutoAdviser: what data we collect, how we use it, third-party services (Vercel, Brevo, Google Analytics), and your rights as a user.`,
    type: `website`,
  },
  '/terms': {
    title: `Terms of Use — ExpatAutoAdviser`,
    desc: `Terms of use for ExpatAutoAdviser. Editorial independence, affiliate disclosure, accuracy, limitations of liability, and the legal basis for using our content.`,
    type: `website`,
  },
  '/cookies': {
    title: `Cookies Policy — ExpatAutoAdviser`,
    desc: `Cookies policy for ExpatAutoAdviser: which cookies we set, third-party cookies, and how to control them in your browser.`,
    type: `website`,
  },
  '/affiliate-disclosure': {
    title: `Affiliate Disclosure — ExpatAutoAdviser`,
    desc: `ExpatAutoAdviser's affiliate disclosure: which articles contain affiliate links, how we choose partners, and our editorial independence policy.`,
    type: `website`,
  },
};

// ---- Build-time validation: every ROUTE must have a META entry ----
// Catches the drift bug from 2026-04-26 (new-arrival pages were in App.jsx but
// missing from META, which meant they prerendered with default placeholder
// titles). Now: missing META = build fails immediately, surfaced in CI logs.
const missingMeta = ROUTES.filter((route) => !META[route]);
if (missingMeta.length > 0) {
  console.error(`\n❌ prerender.mjs: ${missingMeta.length} route(s) in App.jsx have no META entry:`);
  missingMeta.forEach((r) => console.error(`   - ${r}`));
  console.error(`\nAdd a META entry for each, then re-run the build.\n`);
  process.exit(1);
}
console.log(`✅ prerender.mjs: ${ROUTES.length} routes, all have META entries`);

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

  // BreadcrumbList — derived from the route path. Helps Google show breadcrumb-trail
  // SERP rich results instead of bare URLs. Added 2026-04-26 for parity with DX schema.
  if (route !== '/') {
    const segments = route.split('/').filter(Boolean);
    const items = [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE + '/' },
    ];
    let cumulativePath = '';
    segments.forEach((seg, i) => {
      cumulativePath += '/' + seg;
      const name = seg
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .replace(/Hong Kong/gi, 'Hong Kong')
        .replace(/^Frt /, 'FRT ')
        .replace(/Coe /, 'COE ')
        .replace(/Ev /, 'EV ')
        .replace(/Mot /, 'MOT ');
      items.push({
        '@type': 'ListItem',
        position: i + 2,
        name,
        item: BASE + cumulativePath,
      });
    });
    schemas.push(JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
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
