import { Link } from 'react-router-dom';

const ACCENT = '#e8341c';

const SG_GUIDES = [
  {
    n: '01', label: 'Should I Get a Car?', to: '/singapore/should-i-get-a-car',
    desc: 'Weigh the true cost of owning a car in Singapore versus alternatives.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    n: '02', label: 'Buying Guide', to: '/singapore/buying-guide',
    desc: 'COE, ARF, and the full process of buying a car as an expat in Singapore.',
    img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80',
  },
  {
    n: '03', label: 'Leasing Guide', to: '/singapore/leasing-guide',
    desc: 'How leasing works, what to look for, and the best options for expats.',
    img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
  },
  {
    n: '04', label: 'Insurance Guide', to: '/singapore/insurance-guide',
    desc: 'Understanding car insurance requirements and getting the best deal.',
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
  },
  {
    n: '05', label: 'EV Guide', to: '/singapore/ev-guide',
    desc: 'Electric vehicles in Singapore — incentives, charging, and what to buy.',
    img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
  },
  {
    n: '06', label: 'Licence Conversion', to: '/singapore/licence-conversion',
    desc: 'How to convert your foreign driving licence and what tests are required.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
  },
];

const HK_GUIDES = [
  {
    n: '01', label: 'Should I Get a Car?', to: '/hongkong/should-i-get-a-car',
    desc: 'The real cost of car ownership in Hong Kong — is it worth it?',
    img: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80',
  },
  {
    n: '02', label: 'Buying Guide', to: '/hongkong/buying-guide',
    desc: 'FRT, registration tax, and the full process of buying a car in Hong Kong.',
    img: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80',
  },
  {
    n: '03', label: 'Leasing Guide', to: '/hongkong/leasing-guide',
    desc: 'Lease options, costs, and tips for expats in the SAR.',
    img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
  },
  {
    n: '04', label: 'FRT Explained', to: '/hongkong/frt-explained',
    desc: 'First Registration Tax rates, how it is calculated, and EV concessions.',
    img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
  },
  {
    n: '05', label: 'EV Guide', to: '/hongkong/ev-guide',
    desc: 'Electric vehicles in Hong Kong — FRT waivers, charging, and what to buy.',
    img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80',
  },
  {
    n: '06', label: 'Licence Conversion', to: '/hongkong/licence-conversion',
    desc: 'Convert your foreign licence in Hong Kong — approved countries and the process.',
    img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
  },
];

function GuideCard({ n, label, to, desc, img }) {
  return (
    <Link to={to} style={{ textDecoration: 'none', display: 'block' }}>
      <div style={{
        position: 'relative', borderRadius: 12, overflow: 'hidden',
        height: 210, background: '#1e293b',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.25)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
      >
        <img src={img} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.3) 60%, transparent 100%)' }} />
        <div style={{ position: 'absolute', top: 14, left: 14 }}>
          <span style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 20, letterSpacing: '0.05em' }}>
            {n}
          </span>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 18px 18px' }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 5 }}>{label}</div>
          <div style={{ fontSize: 12.5, color: '#cbd5e1', lineHeight: 1.5 }}>{desc}</div>
          <div style={{ marginTop: 10, fontSize: 12, color: ACCENT, fontWeight: 600 }}>Read the guide →</div>
        </div>
      </div>
    </Link>
  );
}

function CitySection({ flag, city, cityLabel, guides, heroImg, overviewTo }) {
  return (
    <div style={{ marginBottom: 56 }}>
      {/* City hero strip */}
      <div style={{
        borderRadius: 12, overflow: 'hidden', position: 'relative',
        height: 140, marginBottom: 24, background: '#0f172a',
      }}>
        <img src={heroImg} alt={cityLabel} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,23,42,0.85) 40%, transparent 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 28px', gap: 16 }}>
          <span style={{ fontSize: 36 }}>{flag}</span>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>{cityLabel}</div>
            <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 2 }}>Car guides for expats</div>
          </div>
          <Link
            to={overviewTo}
            style={{
              marginLeft: 'auto', background: ACCENT, color: '#fff',
              padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600,
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            Overview →
          </Link>
        </div>
      </div>

      {/* Guide cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {guides.map(g => <GuideCard key={g.to} {...g} />)}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ maxWidth: 820 }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        borderRadius: 16, padding: '36px 36px', marginBottom: 44, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(232,52,28,0.08)' }} />
        <div style={{ position: 'absolute', bottom: -30, right: 60, width: 140, height: 140, borderRadius: '50%', background: 'rgba(245,158,11,0.06)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 20, padding: '5px 14px', marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
            <span style={{ fontSize: 12, color: '#94a3b8' }}>Free, independent guides for expats</span>
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff', margin: '0 0 14px', lineHeight: 1.2 }}>
            Your guide to driving<br />in Singapore &amp; Hong Kong
          </h1>
          <p style={{ fontSize: 15, color: '#94a3b8', margin: '0 0 24px', lineHeight: 1.7, maxWidth: 480 }}>
            Everything expats need to know about buying, leasing, insuring and registering a car in Asia's two most car-taxed cities.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/singapore" style={{ background: ACCENT, color: '#fff', padding: '10px 22px', borderRadius: 8, fontSize: 13.5, fontWeight: 700, textDecoration: 'none' }}>
              🇸🇬 Singapore Guides
            </Link>
            <Link to="/hongkong" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', padding: '10px 22px', borderRadius: 8, fontSize: 13.5, fontWeight: 700, textDecoration: 'none' }}>
              🇭🇰 Hong Kong Guides
            </Link>
          </div>
        </div>
      </div>

      {/* Singapore guides */}
      <CitySection
        flag="🇸🇬"
        city="sg"
        cityLabel="Singapore"
        guides={SG_GUIDES}
        heroImg="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80"
        overviewTo="/singapore"
      />

      {/* Hong Kong guides */}
      <CitySection
        flag="🇭🇰"
        city="hk"
        cityLabel="Hong Kong"
        guides={HK_GUIDES}
        heroImg="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1200&q=80"
        overviewTo="/hongkong"
      />
    </div>
  );
}
