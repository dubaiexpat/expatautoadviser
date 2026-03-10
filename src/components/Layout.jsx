import { Link } from 'react-router-dom';

const NAV_LINKS = {
  sg: [
    { label: 'Overview', to: '/singapore' },
    { label: 'Leasing Guide', to: '/singapore/leasing-guide' },
    { label: 'Buying Guide', to: '/singapore/buying-guide' },
    { label: 'Insurance', to: '/singapore/insurance-guide' },
    { label: 'Should I Get a Car?', to: '/singapore/should-i-get-a-car' },
  ],
  hk: [
    { label: 'Overview', to: '/hongkong' },
    { label: 'Buying Guide', to: '/hongkong/buying-guide' },
    { label: 'Leasing Guide', to: '/hongkong/leasing-guide' },
    { label: 'Insurance', to: '/hongkong/insurance-guide' },
    { label: 'Should I Get a Car?', to: '/hongkong/should-i-get-a-car' },
  ],
};

const CITY_META = {
  sg: { label: 'Singapore', color: '#e63946', bg: '#fff1f2' },
  hk: { label: 'Hong Kong', color: '#2a9d8f', bg: '#f0fdfa' },
};

const mobileCSS = [
  '.eaa-brand-text { display: inline; }',
  '.eaa-city-label { font-size: 13px; padding: 5px 12px; }',
  '.eaa-city-pill { font-size: 13px; padding: 5px 10px; }',
  '@media (max-width: 639px) {',
  '  .eaa-brand-text { display: none; }',
  '  .eaa-city-label { font-size: 11px !important; padding: 4px 8px !important; }',
  '  .eaa-city-pill { font-size: 11px !important; padding: 4px 8px !important; }',
  '}',
].join('\n');

export default function Layout({ city, active, children }) {
  const meta = CITY_META[city] || CITY_META.sg;
  const links = NAV_LINKS[city] || NAV_LINKS.sg;

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{mobileCSS}</style>

      {/* Top nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px', height: '56px', gap: 12,
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontSize: 20 }}>🚗</span>
          <span className="eaa-brand-text" style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: 18, color: '#1a1a2e' }}>
            ExpatAutoAdviser
          </span>
        </Link>

        <span
          className="eaa-city-label"
          style={{
            background: meta.bg, color: meta.color,
            fontWeight: 700, borderRadius: 20,
            border: '1px solid currentColor', whiteSpace: 'nowrap', flexShrink: 0,
          }}
        >
          {meta.label}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', flexShrink: 1, minWidth: 0 }}>
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="eaa-city-pill"
              style={{
                textDecoration: 'none', whiteSpace: 'nowrap', borderRadius: 20,
                color: active === link.label ? meta.color : '#6b7280',
                background: active === link.label ? meta.bg : 'transparent',
                fontWeight: active === link.label ? 700 : 500,
                border: active === link.label ? '1px solid currentColor' : '1px solid transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Page content */}
      <main style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 80px' }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #e5e7eb', background: '#fff',
        padding: '32px 20px', textAlign: 'center',
      }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 18 }}>🚗</span>
          <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: 16, color: '#1a1a2e' }}>ExpatAutoAdviser</span>
        </Link>
        <p style={{ margin: '0 0 8px', fontSize: 13, color: '#9ca3af' }}>
          Independent car advice for expats in Singapore and Hong Kong.
        </p>
        <p style={{ margin: 0, fontSize: 12, color: '#d1d5db' }}>
          © 2025 ExpatAutoAdviser · Not financial advice · Partner links may earn commission
        </p>
      </footer>
    </div>
  );
}
