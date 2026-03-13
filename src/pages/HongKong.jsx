import { useState } from 'react';
import { Link } from 'react-router-dom';

const PATRICK_IMG =
  "/Firefly_GeminiFlash_picture%20of%20a%20white%2040%20year%20old%20man%20in%20a%20suit%20standing%20in%20front%20of%20a%20busy%20city%20intersection%20with%20cars%20around%20him%20(1).jpg";

// FRT data — First Registration Tax rates (effective Feb 2024)
const FRT_DATA = {
  updatedAt: 'Feb 2024',
  tiers: [
    { tier: 'First HK$150,000', rate: '46%', example: 'e.g. $150k car → $69k FRT' },
    { tier: 'Next HK$150,000', rate: '86%', example: 'Cumulative from $150k–$300k' },
    { tier: 'Next HK$200,000', rate: '115%', example: 'Cumulative from $300k–$500k' },
    { tier: 'Remainder', rate: '132%', example: 'Everything above $500k' },
  ],
  evNote: 'Full EV concession: First HK$97,500 exempt; 46% on next HK$97,500; standard rates above.',
};

const HK_GUIDES = [
  {
    n: '01',
    label: 'Should I Get a Car?',
    to: '/hongkong/should-i-get-a-car',
    desc: 'HK has world-class public transport — but a car still makes sense for some expats. Here\'s how to decide.',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
  },
  {
    n: '02',
    label: 'Buying Guide',
    to: '/hongkong/buying-guide',
    desc: 'FRT, first registration, and the full process of buying a car in Hong Kong.',
    img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80',
  },
  {
    n: '03',
    label: 'FRT Explained',
    to: '/hongkong/frt-tax-explained',
    desc: 'First Registration Tax is the biggest cost on any new car. Here\'s exactly how it\'s calculated.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  },
  {
    n: '04',
    label: 'Leasing Guide',
    to: '/hongkong/leasing-guide',
    desc: 'Corporate leasing vs personal lease — pros, cons, and what actually works for expats.',
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
  },
  {
    n: '05',
    label: 'EV Guide',
    to: '/hongkong/ev-guide',
    desc: 'EV incentives, charging infrastructure, and the best EV choices in Hong Kong.',
    img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
  },
  {
    n: '06',
    label: 'Licence Conversion',
    to: '/hongkong/licence-conversion',
    desc: 'Convert your foreign driving licence to a Hong Kong one — who qualifies and how.',
    img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
  },
  {
    n: '07',
    label: 'MOT & Maintenance',
    to: '/hongkong/mot-maintenance',
    desc: 'Statutory inspection schedule, trusted workshops, and keeping maintenance costs down.',
    img: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80',
  },
  {
    n: '08',
    label: 'Calculators & Tools',
    to: '/hongkong/calculators',
    desc: 'FRT calculator, true-cost-of-ownership, tunnel toll guide and more.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
];

const PATRICK_TIPS = [
  "FRT is the killer cost — on a HK$600,000 car, you'll pay well over HK$500,000 in FRT alone. Factor this in from day one.",
  "The EV FRT concession is significant: the first HK$97,500 is exempt. On a Tesla Model 3, that's a real saving — but the breakeven vs a petrol car is still 3–4 years.",
  "Tunnel tolls add up fast if you cross between HK Island and Kowloon daily. Budget HK$2,000–3,000/month if you do this regularly.",
  "Parking in Central or Wan Chai can hit HK$6,000–8,000/month. If your office is in the CBD, seriously reconsider whether you need the car on weekdays at all.",
];

const styles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .hk-page { font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; color: #f0f2f8; background: #0a0c12; min-height: 100vh; }

  /* NAV */
  .hk-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 1.5rem; height: 52px;
    background: rgba(10,12,18,0.92); backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }
  .hk-nav-left { display: flex; align-items: center; gap: 1.2rem; }
  .hk-logo { font-size: 0.9rem; font-weight: 700; color: #f0f2f8; text-decoration: none; letter-spacing: 0.03em; }
  .hk-logo span { color: #e8341c; }
  .hk-city-badge {
    background: rgba(42,157,143,0.15); color: #2a9d8f;
    border: 1px solid rgba(42,157,143,0.3); border-radius: 5px;
    padding: 0.2rem 0.6rem; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.05em;
  }
  .hk-switch-btn {
    display: flex; align-items: center; gap: 0.35rem;
    color: rgba(255,255,255,0.55); text-decoration: none;
    font-size: 0.78rem; font-weight: 500;
    border: 1px solid rgba(255,255,255,0.12); border-radius: 6px;
    padding: 0.28rem 0.7rem;
    transition: color 0.2s, border-color 0.2s;
  }
  .hk-switch-btn:hover { color: #e8341c; border-color: rgba(232,52,28,0.4); }

  /* MAIN */
  .hk-main { padding-top: 52px; max-width: 960px; margin: 0 auto; padding-left: 1.5rem; padding-right: 1.5rem; }

  /* HERO */
  .hk-hero {
    background: linear-gradient(135deg, rgba(42,157,143,0.1) 0%, rgba(10,12,18,0) 60%);
    border: 1px solid rgba(42,157,143,0.18); border-radius: 12px;
    padding: 1.6rem 2rem; margin: 1.4rem 0;
    display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap;
  }
  .hk-hero-text h1 { font-size: clamp(1.2rem, 2.5vw, 1.6rem); font-weight: 800; color: #f0f2f8; letter-spacing: -0.02em; margin-bottom: 0.4rem; }
  .hk-hero-text p { font-size: 0.85rem; color: #8892a4; line-height: 1.5; max-width: 420px; }
  .hk-cta-form { display: flex; gap: 0.5rem; flex-shrink: 0; }
  .hk-cta-input {
    background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15);
    border-radius: 7px; padding: 0.5rem 0.9rem; font-size: 0.82rem; color: #f0f2f8;
    width: 210px; outline: none;
  }
  .hk-cta-input::placeholder { color: #4a5568; }
  .hk-cta-btn {
    background: #2a9d8f; color: #fff; border: none; border-radius: 7px;
    padding: 0.5rem 1.1rem; font-size: 0.78rem; font-weight: 700;
    cursor: pointer; letter-spacing: 0.04em; white-space: nowrap; transition: background 0.2s;
  }
  .hk-cta-btn:hover { background: #207d71; }

  /* FRT WIDGET */
  .hk-frt-section { margin: 0 0 1.6rem; }
  .hk-section-title {
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
    color: #4a5568; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;
  }
  .hk-section-title::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.06); }
  .hk-frt-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 0.6rem; }
  .hk-frt-card {
    background: #10131d; border: 1px solid rgba(255,255,255,0.07);
    border-radius: 8px; padding: 0.75rem 0.8rem;
  }
  .hk-frt-tier { font-size: 0.62rem; color: #4a5568; margin-bottom: 0.25rem; line-height: 1.3; }
  .hk-frt-rate { font-size: 1.4rem; font-weight: 800; color: #2a9d8f; margin-bottom: 0.15rem; }
  .hk-frt-example { font-size: 0.6rem; color: #3a4155; line-height: 1.3; }
  .hk-frt-ev {
    background: rgba(42,157,143,0.06); border: 1px solid rgba(42,157,143,0.15);
    border-radius: 7px; padding: 0.6rem 0.9rem;
    font-size: 0.73rem; color: #8892a4; line-height: 1.5;
  }
  .hk-frt-ev strong { color: #2a9d8f; }
  .hk-frt-footer { font-size: 0.65rem; color: #3a4155; margin-top: 0.5rem; }

  /* GUIDES */
  .hk-guides-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 2rem; }
  .hk-guide-card {
    display: block; text-decoration: none; border-radius: 10px;
    overflow: hidden; position: relative; height: 200px;
    transition: transform 0.2s, box-shadow 0.2s; background: #151820;
  }
  .hk-guide-card:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(0,0,0,0.5); }
  .hk-card-bg { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.35s ease; }
  .hk-guide-card:hover .hk-card-bg { transform: scale(1.05); }
  .hk-card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%); }
  .hk-card-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 0.9rem 1rem; }
  .hk-card-badge {
    display: inline-block; padding: 0.15rem 0.5rem; border-radius: 4px;
    font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em; margin-bottom: 0.4rem;
    background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.75);
    border: 1px solid rgba(255,255,255,0.15); backdrop-filter: blur(4px);
  }
  .hk-card-title { font-size: 0.95rem; font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 0.25rem; text-shadow: 0 1px 4px rgba(0,0,0,0.7); }
  .hk-card-desc { font-size: 0.7rem; color: rgba(255,255,255,0.6); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

  /* PATRICK */
  .hk-patrick {
    background: #10131d; border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;
    display: flex; gap: 1.4rem; align-items: flex-start;
  }
  .hk-patrick-img { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(42,157,143,0.35); flex-shrink: 0; }
  .hk-patrick-name { font-size: 0.95rem; font-weight: 700; color: #f0f2f8; margin-bottom: 0.15rem; }
  .hk-patrick-bio { font-size: 0.78rem; color: #6b7585; line-height: 1.5; margin-bottom: 1rem; }
  .hk-tips-title { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #2a9d8f; margin-bottom: 0.6rem; }
  .hk-tip {
    display: flex; gap: 0.6rem; align-items: flex-start;
    padding: 0.55rem 0; border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .hk-tip:last-child { border-bottom: none; }
  .hk-tip-icon { color: #2a9d8f; font-size: 0.85rem; flex-shrink: 0; margin-top: 0.05rem; }
  .hk-tip-text { font-size: 0.78rem; color: #8892a4; line-height: 1.5; }

  @media (max-width: 640px) {
    .hk-guides-grid { grid-template-columns: 1fr; }
    .hk-frt-grid { grid-template-columns: repeat(2, 1fr); }
    .hk-cta-form { width: 100%; }
    .hk-cta-input { flex: 1; width: auto; }
    .hk-hero { padding: 1.2rem; }
    .hk-patrick { flex-direction: column; }
  }
`;

function GuideCard({ n, label, to, desc, img }) {
  return (
    <Link to={to} className="hk-guide-card">
      <div className="hk-card-bg" style={{ backgroundImage: `url(${img})` }} />
      <div className="hk-card-overlay" />
      <div className="hk-card-content">
        <span className="hk-card-badge">GUIDE {n}</span>
        <div className="hk-card-title">{label}</div>
        <div className="hk-card-desc">{desc}</div>
      </div>
    </Link>
  );
}

export default function HongKong() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="hk-page">
      <style>{styles}</style>

      {/* Nav */}
      <nav className="hk-nav">
        <div className="hk-nav-left">
          <Link to="/" className="hk-logo">Expat<span>Auto</span>Adviser</Link>
          <span className="hk-city-badge">🇭🇰 HONG KONG</span>
        </div>
        <Link to="/singapore" className="hk-switch-btn">
          🇸🇬 Switch to Singapore →
        </Link>
      </nav>

      <div className="hk-main" style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
        <aside style={{ width: "220px", minWidth: "200px", flexShrink: 0, padding: "24px 16px", borderRight: "1px solid #e5e7eb", background: "#f9fafb", alignSelf: "flex-start" }}>
          <div style={{ fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6b7280", marginBottom: 14 }}>🇭🇰 Hong Kong Guides</div>
          {HK_GUIDES.map(g => (
            <Link key={g.to} to={g.to} style={{ display: "block", padding: "7px 10px", borderRadius: 5, color: "#374151", fontSize: "0.875rem", textDecoration: "none", marginBottom: 2 }}>{g.label}</Link>
          ))}
          <div style={{ borderTop: "1px solid #e5e7eb", marginTop: 14, paddingTop: 10 }}>
            <Link to="/singapore" style={{ display: "block", padding: "7px 10px", borderRadius: 5, color: "#6b7280", fontSize: "0.82rem", textDecoration: "none" }}>🇸🇬 SG Guides →</Link>
          </div>
        </aside>
        <div style={{ flex: 1, minWidth: 0 }}>

        {/* Hero CTA */}
        <div className="hk-hero">
          <div className="hk-hero-text">
            <h1>🇭🇰 Hong Kong Car Guides for Expats</h1>
            <p>FRT, tunnel tolls, EV concessions and more — plain-English guides written by expats who've navigated it. Get the free PDF guide.</p>
          </div>
          {submitted ? (
            <div style={{ color: '#4ade80', fontSize: '0.85rem', fontWeight: 600 }}>✓ Guide on its way!</div>
          ) : (
            <form className="hk-cta-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              <input
                type="email"
                placeholder="your@email.com"
                className="hk-cta-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="hk-cta-btn">GET FREE PDF</button>
            </form>
          )}
        </div>

        {/* FRT Widget */}
        <div className="hk-frt-section">
          <div className="hk-section-title">First Registration Tax (FRT) Rates — {FRT_DATA.updatedAt}</div>
          <div className="hk-frt-grid">
            {FRT_DATA.tiers.map(t => (
              <div key={t.tier} className="hk-frt-card">
                <div className="hk-frt-tier">{t.tier}</div>
                <div className="hk-frt-rate">{t.rate}</div>
                <div className="hk-frt-example">{t.example}</div>
              </div>
            ))}
          </div>
          <div className="hk-frt-ev">
            <strong>EV Concession:</strong> {FRT_DATA.evNote}
          </div>
          <div className="hk-frt-footer">Source: HKSAR Transport Department. See full FRT guide for worked examples.</div>
        </div>

        {/* Guide Cards */}
        <div className="hk-section-title">The Guides</div>
        <div className="hk-guides-grid">
          {HK_GUIDES.map(g => <GuideCard key={g.to} {...g} />)}
        </div>

        {/* Patrick Section */}
        <div className="hk-section-title">Your Guide</div>
        <div className="hk-patrick">
          <img src={PATRICK_IMG} alt="Patrick" className="hk-patrick-img" />
          <div style={{ flex: 1 }}>
            <div className="hk-patrick-name">Patrick — Expat Car Adviser, Hong Kong</div>
            <p className="hk-patrick-bio">
              Based in Hong Kong since 2016, Patrick has owned three cars here — including a Tesla Model 3 under the EV concession scheme. Previously worked in finance in London and Shanghai. Writes these guides because the official resources are almost deliberately confusing, and expats deserve better.
            </p>
            <div className="hk-tips-title">Patrick's Top Tips for Hong Kong</div>
            {PATRICK_TIPS.map((tip, i) => (
              <div key={i} className="hk-tip">
                <span className="hk-tip-icon">→</span>
                <span className="hk-tip-text">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
