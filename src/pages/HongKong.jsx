import { Link } from 'react-router-dom';
import CredibilityBar from '../components/CredibilityBar';

const guides = [
  { to: '/hongkong/should-i-get-a-car', emoji: '🤔', title: 'Should I Get a Car?', desc: "HK has a great MTR — but if you live in Sai Kung, the South Side or the New Territories, you need a car. Start here.", cta: 'Help me decide →' },
  { to: '/hongkong/buying-guide', emoji: '🚗', title: 'Buying Guide', desc: "New vs used, why most expats buy used, the full purchase process, and where to find good stock.", cta: 'Read the guide →' },
  { to: '/hongkong/leasing-guide', emoji: '📋', title: 'Leasing Guide', desc: "How leasing works in HK, full-service vs operating leases, typical monthly costs, and how to avoid hidden charges.", cta: 'Read the guide →' },
  { to: '/hongkong/frt-tax-explained', emoji: '🧾', title: 'FRT & Tax Explained', desc: "First Registration Tax adds 40–115%+ to a new car's price. Understand the bands, EV exemptions and your total cost.", cta: 'Read the guide →' },
  { to: '/hongkong/insurance-guide', emoji: '🛡️', title: 'Insurance Guide', desc: "Third-party is mandatory. How to transfer your overseas No Claims Bonus and what comprehensive cover costs.", cta: 'Read the guide →' },
  { to: '/hongkong/mot-maintenance', emoji: '🔬', title: 'MOT & Maintenance', desc: "Cars 7+ years old need an annual roadworthiness test. How to find a mechanic expats actually trust.", cta: 'Read the guide →' },
  { to: '/hongkong/licence-conversion', emoji: '🪪', title: 'Licence Conversion', desc: "UK, US, Australian and other licences convert without a test. Process, costs and timing at the Transport Department.", cta: 'Read the guide →' },
  { to: '/hongkong/ev-guide', emoji: '⚡', title: 'EV Guide', desc: "FRT concessions for EVs, the One-for-One Replacement Scheme, and charging infrastructure across HK.", cta: 'Read the guide →' },
  { to: '/hongkong/calculators', emoji: '🧮', title: 'Calculators & Tools', desc: "FRT calculator, total ownership cost, used car true cost estimator, insurance ballpark estimator.", cta: 'Use the tools →' },
  { to: '/hongkong/garage-finder', emoji: '🔧', title: 'Garage Finder', desc: "Find MOT-approved centres, EV-capable workshops and expat-friendly English-speaking mechanics by district.", cta: 'Find a garage →' },
];

const NUM = [
  ['FRT on new car', '40–115%+'],
  ['Used sedan (3yr)', 'HKD $150–350k'],
  ['Petrol', 'HKD $24–27/L'],
  ['Parking (HK Island)', 'HKD $2–6k/mo'],
];

export default function HongKong() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9', fontFamily: 'Inter, sans-serif' }}>
      <nav style={{ background: '#1e3a5f', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 0, zIndex: 50 }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em' }}>ExpatAutoAdviser</Link>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link to="/singapore" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', padding: '6px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>🇸🇬 Singapore</Link>
          <span style={{ background: '#0d9488', color: 'white', padding: '6px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600 }}>🇭🇰 Hong Kong</span>
        </div>
      </nav>
      <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5282 100%)', padding: '64px 32px 52px', textAlign: 'center' }}>
        <p style={{ color: '#5eead4', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Hong Kong</p>
        <h1 style={{ color: 'white', fontSize: 46, fontWeight: 800, margin: '0 0 16px', lineHeight: 1.1 }}>Cars in Hong Kong</h1>
        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 18, maxWidth: 540, margin: '0 auto 36px', lineHeight: 1.65 }}>The expat guide to buying, insuring and running a car in the SAR.</p>
        <div style={{ background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.4)', borderRadius: 10, padding: '16px 24px', maxWidth: 600, margin: '0 auto', textAlign: 'left' }}>
          <span style={{ color: '#5eead4', fontWeight: 700, fontSize: 13 }}>Patrick's take: </span>
          <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, lineHeight: 1.65 }}>In HK I bought — I lived in Sai Kung and the MTR was useless to me. But on HK Island? I'd probably have skipped it. The right answer depends entirely on where you live. The guides below will walk you through every decision.</span>
        </div>
      </div>
      <div style={{ background: '#162d4a', padding: '18px 32px', display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        {NUM.map(([label, val]) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: 15, marginTop: 3 }}>{val}</div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '52px 24px 64px' }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: '#1e3a5f', marginBottom: 6 }}>All Hong Kong Guides</h2>
        <p style={{ color: '#6b7280', fontSize: 15, marginBottom: 36, lineHeight: 1.6 }}>Everything you need, written from experience — not guesswork.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(288px, 1fr))', gap: 18 }}>
          {guides.map(({ to, emoji, title, desc, cta }) => (
            <Link key={to} to={to} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', border: '1.5px solid #e5e7eb', borderRadius: 12, padding: '26px 28px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', transition: 'border-color 0.15s, box-shadow 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#0d9488'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(13,148,136,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: 30, marginBottom: 12 }}>{emoji}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1e3a5f', margin: '0 0 9px', lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6, margin: '0 0 18px', flexGrow: 1 }}>{desc}</p>
                <span style={{ color: '#0d9488', fontWeight: 600, fontSize: 14 }}>{cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <CredibilityBar city="hk" />
      <footer style={{ borderTop: '1px solid #e5e7eb', padding: '24px 32px', textAlign: 'center' }}>
        <p style={{ color: '#9ca3af', fontSize: 13, margin: 0 }}>ExpatAutoAdviser &middot; <Link to="/" style={{ color: '#9ca3af' }}>Switch city</Link></p>
      </footer>
    </div>
  );
}
