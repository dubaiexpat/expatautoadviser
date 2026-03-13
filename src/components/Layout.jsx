import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const SIDEBAR_BG = '#0f172a';
const ACCENT = '#e8341c';
const GOLD = '#f59e0b';

const SG_LINKS = [
  { label: 'Should I Get a Car?', to: '/singapore/should-i-get-a-car' },
  { label: 'Buying Guide', to: '/singapore/buying-guide' },
  { label: 'Leasing Guide', to: '/singapore/leasing-guide' },
  { label: 'Insurance Guide', to: '/singapore/insurance-guide' },
  { label: 'EV Guide', to: '/singapore/ev-guide' },
  { label: 'Licence Conversion', to: '/singapore/licence-conversion' },
  { label: 'Calculators', to: '/singapore/calculators' },
];

const HK_LINKS = [
  { label: 'Should I Get a Car?', to: '/hongkong/should-i-get-a-car' },
  { label: 'Buying Guide', to: '/hongkong/buying-guide' },
  { label: 'Leasing Guide', to: '/hongkong/leasing-guide' },
  { label: 'Insurance Guide', to: '/hongkong/insurance-guide' },
  { label: 'EV Guide', to: '/hongkong/ev-guide' },
  { label: 'Licence Conversion', to: '/hongkong/licence-conversion' },
  { label: 'FRT Explained', to: '/hongkong/frt-explained' },
  { label: 'Calculators', to: '/hongkong/calculators' },
];

function NavSection({ title, links, location, flagEmoji }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 20px', marginBottom: 8 }}>
        <span style={{ fontSize: 15 }}>{flagEmoji}</span>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{title}</span>
      </div>
      {links.map(link => {
        const active = location.pathname === link.to;
        return (
          <Link
            key={link.to}
            to={link.to}
            style={{
              display: 'block',
              padding: '7px 20px 7px 44px',
              fontSize: 13.5,
              color: active ? '#fff' : '#94a3b8',
              background: active ? 'rgba(232,52,28,0.18)' : 'transparent',
              borderLeft: active ? `3px solid ${ACCENT}` : '3px solid transparent',
              textDecoration: 'none',
              transition: 'all 0.15s',
              marginLeft: 0,
            }}
            onMouseEnter={e => { if (!active) { e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}}
            onMouseLeave={e => { if (!active) { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent'; }}}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}

export default function Layout({ city, title, description, relatedLinks = [], children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebar = (
    <div style={{
      width: 240,
      minWidth: 240,
      background: SIDEBAR_BG,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflowY: 'auto',
      flexShrink: 0,
    }}>
      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none', display: 'block', padding: '24px 20px 20px' }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.2 }}>
          Expat Auto Adviser
        </div>
        <div style={{ fontSize: 11, color: '#64748b', marginTop: 4 }}>Singapore &amp; Hong Kong</div>
      </Link>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginBottom: 20 }} />

      {/* Home link */}
      <Link
        to="/"
        style={{
          display: 'block',
          padding: '7px 20px',
          fontSize: 13.5,
          color: location.pathname === '/' ? '#fff' : '#94a3b8',
          background: location.pathname === '/' ? 'rgba(232,52,28,0.18)' : 'transparent',
          borderLeft: location.pathname === '/' ? `3px solid ${ACCENT}` : '3px solid transparent',
          textDecoration: 'none',
          marginBottom: 16,
          fontWeight: 500,
        }}
      >
        Home
      </Link>

      {city === 'sg' ? (
        <NavSection title="Singapore" links={SG_LINKS} location={location} flagEmoji="🇸🇬" />
      ) : (
        <NavSection title="Hong Kong" links={HK_LINKS} location={location} flagEmoji="🇭🇰" />
      )}
      <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid #e5e7eb' }}>
        <Link to={city === 'sg' ? '/hongkong' : '/singapore'} style={{ fontSize: 13, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
          {city === 'sg' ? '🇭🇰' : '🇸🇬'} Switch to {city === 'sg' ? 'Hong Kong' : 'Singapore'} guides
        </Link>
      </div>

      <div style={{ flex: 1 }} />
      <div style={{ padding: '16px 20px', fontSize: 11, color: '#475569' }}>
        © {new Date().getFullYear()} Expat Auto Adviser
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
      {/* Desktop sidebar */}
      <div style={{ display: 'none' }} className="sidebar-desktop-hide" />
      <div className="sidebar-desktop" style={{ display: 'flex' }}>
        {sidebar}
      </div>

      {/* Mobile header */}
      <div className="mobile-header" style={{
        display: 'none',
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: SIDEBAR_BG, height: 52, alignItems: 'center',
        justifyContent: 'space-between', padding: '0 16px',
      }}>
        <Link to="/" style={{ textDecoration: 'none', fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Expat Auto Adviser
        </Link>
        <button
          onClick={() => setMobileOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', fontSize: 22, lineHeight: 1, padding: 4 }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 150, background: 'rgba(0,0,0,0.5)' }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 260, background: SIDEBAR_BG, overflowY: 'auto' }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ height: 52 }} />
            {sidebar}
          </div>
        </div>
      )}

      {/* Main content */}
      <main style={{ flex: 1, minWidth: 0, padding: '32px 28px 60px', maxWidth: '860px' }} className="main-content">
        {title && (
          <div style={{ marginBottom: 24 }}>
            {city && (
              <span style={{ display: 'inline-block', background: ACCENT, color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 4, marginBottom: 10 }}>
                {city === 'sg' ? 'Singapore' : 'Hong Kong'}
              </span>
            )}
            <h1 style={{ fontSize: 30, fontWeight: 800, color: '#1e3a5f', margin: 0, lineHeight: 1.2 }}>{title}</h1>
            {description && <p style={{ fontSize: 15, color: '#64748b', marginTop: 8, marginBottom: 0, lineHeight: 1.6 }}>{description}</p>}
          </div>
        )}

        {children}

        {relatedLinks.length > 0 && (
          <div style={{ marginTop: 48, paddingTop: 28, borderTop: '1px solid #e5e7eb' }}>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: '#374151', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Related Guides</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {relatedLinks.map(link => (
                <Link key={link.to} to={link.to} style={{
                  display: 'inline-block', padding: '9px 16px',
                  background: '#fff', border: '1px solid #e5e7eb',
                  borderRadius: 8, color: '#1e3a5f', fontWeight: 600, fontSize: 13,
                  textDecoration: 'none', transition: 'all 0.15s',
                }}>
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <style>{`
        @media (max-width: 768px) {
          .sidebar-desktop { display: none !important; }
          .mobile-header { display: flex !important; }
          .main-content { padding: 76px 16px 48px !important; }
        }
      `}</style>
    </div>
  );
}
