import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const ACCENT = '#e8341c';

const SG_GUIDES = [
  {
    n: '01',
    label: 'Should I Get a Car?',
    to: '/singapore/should-i-get-a-car',
    desc: 'Is owning a car in Singapore actually worth it? We crunch the real numbers.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    n: '02',
    label: 'Buying Guide',
    to: '/singapore/buying-guide',
    desc: 'COE, OMV, ARF — a plain-English walkthrough of buying a car in Singapore.',
    img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80',
  },
  {
    n: '03',
    label: 'Leasing Guide',
    to: '/singapore/leasing-guide',
    desc: 'When leasing beats buying — and how to find a deal that won\'t sting.',
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
  },
  {
    n: '04',
    label: 'Insurance Guide',
    to: '/singapore/insurance-guide',
    desc: 'What cover you actually need and how to stop overpaying on premiums.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    n: '05',
    label: 'EV Guide',
    to: '/singapore/ev-guide',
    desc: 'Electric vehicles in Singapore — incentives, charging, and hidden costs.',
    img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
  },
  {
    n: '06',
    label: 'Licence Conversion',
    to: '/singapore/licence-conversion',
    desc: 'Convert your foreign driving licence to a Singapore one — step by step.',
    img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
  },
  {
    n: '07',
    label: 'Calculators & Tools',
    to: '/singapore/calculators',
    desc: 'COE budget calculator, true-cost-of-ownership tool, and more.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    n: '08',
    label: 'Garage Finder',
    to: '/singapore/garage-finder',
    desc: 'Find trusted workshops and service centres near you.',
    img: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80',
  },
];

const cardStyles = `
  .sg-guide-card {
    display: block;
    text-decoration: none;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    height: 210px;
    transition: transform 0.2s, box-shadow 0.2s;
    background: #151820;
  }
  .sg-guide-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.45);
  }
  .sg-card-bg {
    position: absolute; inset: 0;
    background-size: cover; background-position: center;
    transition: transform 0.35s ease;
  }
  .sg-guide-card:hover .sg-card-bg { transform: scale(1.05); }
  .sg-card-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.15) 100%);
  }
  .sg-card-content {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 1rem 1rem 1rem;
  }
  .sg-card-badge {
    display: inline-block;
    padding: 0.18rem 0.55rem;
    border-radius: 4px;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    margin-bottom: 0.45rem;
    backdrop-filter: blur(4px);
    background: rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.8);
    border: 1px solid rgba(255,255,255,0.18);
  }
  .sg-card-title {
    font-size: 0.98rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.25;
    margin-bottom: 0.3rem;
    text-shadow: 0 1px 4px rgba(0,0,0,0.6);
  }
  .sg-card-desc {
    font-size: 0.73rem;
    color: rgba(255,255,255,0.65);
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

function GuideCard({ n, label, to, desc, img }) {
  return (
    <Link to={to} className="sg-guide-card">
      <div className="sg-card-bg" style={{ backgroundImage: `url(${img})` }} />
      <div className="sg-card-overlay" />
      <div className="sg-card-content">
        <span className="sg-card-badge">GUIDE {n}</span>
        <div className="sg-card-title">{label}</div>
        <div className="sg-card-desc">{desc}</div>
      </div>
    </Link>
  );
}

export default function Singapore() {
  return (
    <Layout
      city="sg"
      title="Singapore Car Guides for Expats"
      description="Everything expats need to know about owning, buying, leasing and insuring a car in Singapore."
      relatedLinks={[
        { label: 'COE Explained', to: '/singapore/buying-guide' },
        { label: 'Licence Conversion', to: '/singapore/licence-conversion' },
        { label: 'EV Guide', to: '/singapore/ev-guide' },
      ]}
    >
      <style>{cardStyles}</style>
      <div style={{ maxWidth: 820 }}>
        {/* Hero strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.6rem',
            padding: '1.2rem 1.4rem',
            background: 'rgba(232,52,28,0.08)',
            borderRadius: '10px',
            border: '1px solid rgba(232,52,28,0.18)',
          }}
        >
          <span style={{ fontSize: '2.4rem', lineHeight: 1 }}>🇸🇬</span>
          <div>
            <h1
              style={{
                fontSize: '1.3rem',
                fontWeight: 800,
                color: '#f0f2f8',
                margin: 0,
                letterSpacing: '-0.01em',
              }}
            >
              Singapore Car Guides
            </h1>
            <p style={{ fontSize: '0.82rem', color: '#8892a4', margin: '0.2rem 0 0' }}>
              Everything an expat needs to navigate Singapore's car market
            </p>
          </div>
        </div>

        {/* Guide cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 14,
          }}
        >
          {SG_GUIDES.map((g) => (
            <GuideCard key={g.to} {...g} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
