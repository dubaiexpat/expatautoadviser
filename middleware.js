import { NextResponse } from 'next/server';

const BOTS = /googlebot|bingbot|yandexbot|baiduspider|facebookexternalhit|twitterbot|linkedinbot|slackbot|whatsapp|perplexity|anthropic|claudebot|applebot|duckduckbot|semrushbot|ahrefsbot/i;

const META = {
  '/': ['ExpatAutoAdviser — Cars in Singapore & Hong Kong', 'The complete expat guide to car ownership in Singapore and Hong Kong. Leasing, buying, insurance, FRT, COE, licence conversion and more.'],
  '/singapore': ['Cars in Singapore for Expats', 'Everything expats need to lease, insure and drive in Singapore. COE explained, leasing guide, insurance, licence conversion and EV guide.'],
  '/singapore/leasing-guide': ['Singapore Car Leasing Guide for Expats', 'How car leasing works in Singapore, what is bundled, typical costs SGD 1800-2500/month, and how to choose a lease company. COE explained.'],
  '/singapore/should-i-get-a-car': ['Should I Get a Car in Singapore?', 'Honest guide to whether expats in Singapore need a car. Depends on location, assignment length and whether you live near the MRT.'],
  '/singapore/insurance-guide': ['Singapore Car Insurance Guide for Expats', 'Car insurance in Singapore — usually bundled in leases. NCD transfer, third-party vs comprehensive coverage explained.'],
  '/singapore/licence-conversion': ['Singapore Driving Licence Conversion', 'Convert your UK, Australian or other foreign licence in Singapore. Step-by-step guide, costs and timeline at the Traffic Police.'],
  '/singapore/ev-guide': ['Electric Cars in Singapore for Expats', 'EV leasing in Singapore, EEAI incentives, EV charging infrastructure and popular electric models for expats.'],
  '/hongkong': ['Cars in Hong Kong for Expats', 'Complete guide for expats buying, insuring and running a car in Hong Kong. FRT, MOT, insurance, parking and licence conversion.'],
  '/hongkong/buying-guide': ['Hong Kong Car Buying Guide for Expats', 'How to buy a car in Hong Kong — new vs used, FRT explained, TD25 registration process and where to find used cars.'],
  '/hongkong/frt-tax-explained': ['Hong Kong First Registration Tax (FRT) Explained', 'FRT adds 40 to 115 percent to new car prices in Hong Kong. Understand the progressive bands, EV exemptions and total cost calculation.'],
  '/hongkong/insurance-guide': ['Hong Kong Car Insurance Guide for Expats', 'Third-party insurance mandatory in HK. Transfer your overseas No Claims Bonus and understand comprehensive cover costs.'],
  '/hongkong/mot-maintenance': ['Hong Kong MOT and Car Maintenance Guide', 'Cars 7 or more years old need annual MOT in HK. Find DVLA-approved inspection centres and expat-trusted mechanics.'],
  '/hongkong/licence-conversion': ['Hong Kong Driving Licence Conversion', 'Convert your UK, US or Australian licence at the Hong Kong Transport Department without a test. Costs and timeline.'],
  '/hongkong/ev-guide': ['Electric Cars in Hong Kong for Expats', 'FRT concessions for EVs, One-for-One Replacement Scheme explained, and EV charging network across Hong Kong.'],
};

function botHtml(path) {
  const [title, desc] = META[path] || META['/'];
  const sgLinks = Object.keys(META).filter(k => k.startsWith('/singapore')).map(k => '<li><a href="'+k+'">'+META[k][0]+'</a></li>').join('');
  const hkLinks = Object.keys(META).filter(k => k.startsWith('/hongkong')).map(k => '<li><a href="'+k+'">'+META[k][0]+'</a></li>').join('');
  return '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>'+title+' | ExpatAutoAdviser</title><meta name="description" content="'+desc+'"><meta name="robots" content="index, follow"><link rel="canonical" href="https://www.expatautoadviser.com'+path+'"><meta name="google-site-verification" content="zZgPqt1kDnNKqPNyfbARMbleNNiwTLKH8_HC9X2n78Y"></head><body><header><a href="/">ExpatAutoAdviser</a> | <a href="/singapore">Singapore</a> | <a href="/hongkong">Hong Kong</a></header><main><h1>'+title+'</h1><p>'+desc+'</p><h2>Singapore Guides</h2><ul>'+sgLinks+'</ul><h2>Hong Kong Guides</h2><ul>'+hkLinks+'</ul></main></body></html>';
}

export function middleware(request) {
  const ua = request.headers.get('user-agent') || '';
  if (!BOTS.test(ua)) return NextResponse.next();
  const path = new URL(request.url).pathname;
  return new NextResponse(botHtml(path), {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'index, follow' },
  });
}

export const config = { matcher: ['/((?!_next|assets|favicon\\.ico|sitemap\\.xml|robots\\.txt).*)'] };
