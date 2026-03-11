import { Link } from 'react-router-dom';
import CredibilityBar from '../components/CredibilityBar';

const guides = [
  { to: '/singapore/should-i-get-a-car', emoji: '\u{1F914}', title: 'Should I Get a Car?', desc: "Honest answer: depends on where you live and how long you're staying. Start here before anything else.", cta: 'Help me decide →' },
  { to: '/singapore/leasing-guide', emoji: '\u{1F4CB}', title: 'Leasing Guide', desc: "How leasing works, what's bundled, typical costs from economy to premium, and how to pick a lease company.", cta: 'Read the guide →' },
  { to: '/singapore/buying-guide', emoji: '\u{1F697}', title: 'Buying Guide', desc: 'When buying beats leasing: how COE, ARF and registration fees work, total cost of ownership, and how to sell before you leave.', cta: 'Read the guide →' },
  { to: '/singapore/insurance-guide', emoji: '\u{1F6E1}\uFE0F', title: 'Insurance Guide', desc: 'Why insurance is almost always bundled in leases — and what to check when it is not.', cta: 'Read the guide →' },
  { to: '/singapore/licence-conversion', emoji: '\u{1FAAA}', title: 'Licence Conversion', desc: 'Which nationalities convert without a test, the step-by-step Traffic Police process, costs and timeline.', cta: 'Read the guide →' },
  { to: '/singapore/ev-guide', emoji: '\u26A1', title: 'EV Guide', desc: 'EVs are rising fast in lease fleets. EEAI incentives, charging infrastructure, popular models for expats.', cta: 'Read the guide →' },
  { to: '/singapore/calculators', emoji: '\u{1F9EE}', title: 'Calculators & Tools', desc: 'Lease cost estimator, COE buy-vs-lease 3-year comparison, ERP estimator, licence eligibility checker.', cta: 'Use the tools →' },
  { to: '/singapore/garage-finder', emoji: '\u{1F527}', title: 'Garage Finder', desc: 'Find expat-friendly, English-speaking garages and workshops near your postcode.', cta: 'Find a garage →' },
];

const NUM = [
  ['COE Cat A', '~SGD $104k'],
  ['Monthly lease (sedan)', 'SGD $1.8–2.5k'],
  ['Petrol (95 RON)', '~SGD $3.10/L'],
  ['Annual road tax', 'SGD $742+'],
];

export default function Singapore() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9', fontFamily: 'Inter, sans-serif' }}>
      <nav style={{ background: '#1e3a5f', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 0, zIndex: 50 }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em' }}>ExpatAutoAdviser</Link>
        <div style={{ display: 'flex', gap: 10 }}>
          <span style={{ background: '#e8341c', color: 'white', padding: '6px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600 }}>🇸🇬 Singapore</span>
          <Link to="/hongkong" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', padding: '6px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>🇭🇰 Hong Kong</Link>
        </div>
      </nav>

      <div style={{ position: 'relative', height: 500, overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1400&auto=format&fit=crop&q=80"
          alt="Premium car on road"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.72) 50%, rgba(10,22,40,0.28) 100%)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 56px', maxWidth: 620 }}>
            <p style={{ color: '#f87171', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', margin: '0 0 14px' }}>Singapore Car Guide</p>
            <h1 style={{ color: 'white', fontSize: 48, fontWeight: 800, margin: '0 0 18px', lineHeight: 1.06 }}>Drive Singapore<br/>the smart way.</h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 17, margin: '0 0 32px', lineHeight: 1.7, maxWidth: 460 }}>Lease vs buy, COE explained, insurance and more — written by expats who have actually done it.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/singapore/calculators" style={{ background: '#e8341c', color: 'white', padding: '13px 26px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>Calculate my costs →</Link>
              <a href="#guides" style={{ background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.28)', color: 'white', padding: '13px 26px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>Browse all guides ↓</a>
            </div>
          </div>
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

      <div style={{ background: '#1a3050', padding: '18px 32px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', background: 'rgba(232,52,28,0.11)', border: '1px solid rgba(232,52,28,0.28)', borderRadius: 10, padding: '14px 22px' }}>
          <span style={{ color: '#f87171', fontWeight: 700, fontSize: 13 }}>Patrick’s take: </span>
          <span style={{ color: 'rgba(255,255,255,0.83)', fontSize: 14, lineHeight: 1.65 }}>Singapore has no real car-ownership culture for expats — leasing is almost always cheaper and less stressful than buying. The COE system makes ownership a gamble on a short assignment. Here’s everything I wish I’d known when I landed in 2019.</span>
        </div>
      </div>

      <div id="guides" style={{ maxWidth: 1040, margin: '0 auto', padding: '52px 24px 64px' }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: '#1e3a5f', marginBottom: 6 }}>All Singapore Guides</h2>
        <p style={{ color: '#6b7280', fontSize: 15, marginBottom: 36, lineHeight: 1.6 }}>Everything you need, written from experience — not guesswork.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(288px, 1fr))', gap: 18 }}>
          {guides.map(({ to, emoji, title, desc, cta }) => (
            <Link key={to} to={to} style={{ textDecoration: 'none' }}>
              <div
                style={{ background: 'white', border: '1.5px solid #e5e7eb', borderRadius: 12, padding: '26px 28px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', transition: 'border-color 0.15s, box-shadow 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#e8341c'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(232,52,28,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: 30, marginBottom: 12 }}>{emoji}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1e3a5f', margin: '0 0 9px', lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6, margin: '0 0 18px', flexGrow: 1 }}>{desc}</p>
                <span style={{ color: '#e8341c', fontWeight: 600, fontSize: 14 }}>{cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CredibilityBar city="sg" />
      <footer style={{ borderTop: '1px solid #e5e7eb', padding: '24px 32px', textAlign: 'center' }}>
        <p style={{ color: '#9ca3af', fontSize: 13, margin: 0 }}>ExpatAutoAdviser · <Link to="/" style={{ color: '#9ca3af' }}>Switch city</Link></p>
      </footer>
    </div>
  );
}
