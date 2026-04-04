import { useState, useEffect } from 'react';

const COOKIE_KEY = 'cookie_consent';

function getStoredConsent() {
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCustomise, setShowCustomise] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ essential: true, analytics: true, marketing: true }));
    setVisible(false);
  }
  function reject() {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ essential: true, analytics: false, marketing: false }));
    setVisible(false);
  }
  function saveCustom() {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ essential: true, analytics, marketing }));
    setVisible(false);
  }

  if (!visible) return null;

  const bannerStyle = {
    position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
    background: '#fff', borderTop: '1px solid #e5e7eb',
    padding: '16px 20px', boxShadow: '0 -2px 10px rgba(0,0,0,0.08)',
  };
  const innerStyle = { maxWidth: 800, margin: '0 auto' };
  const textStyle = { fontSize: 14, color: '#4b5563', marginBottom: 12, lineHeight: 1.6 };
  const customiseBox = {
    background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8,
    padding: 12, marginBottom: 12, fontSize: 14,
  };
  const labelStyle = { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 };
  const btnRow = { display: 'flex', flexWrap: 'wrap', gap: 8 };
  const btnPrimary = {
    background: '#1a1a2e', color: '#fff', border: 'none', borderRadius: 6,
    padding: '8px 16px', fontSize: 14, fontWeight: 600, cursor: 'pointer',
  };
  const btnSecondary = {
    background: '#fff', color: '#374151', border: '1px solid #d1d5db', borderRadius: 6,
    padding: '8px 16px', fontSize: 14, fontWeight: 500, cursor: 'pointer',
  };
  const btnAccent = {
    ...btnSecondary, color: '#e63946', borderColor: '#e63946',
  };

  return (
    <div style={bannerStyle}>
      <div style={innerStyle}>
        <p style={textStyle}>
          We use cookies to improve your experience. Essential cookies are always active.
          You can accept or reject optional cookies.{' '}
          <a href="/cookies" style={{ color: '#e63946', textDecoration: 'underline' }}>Read our Cookie Policy</a>
        </p>

        {showCustomise && (
          <div style={customiseBox}>
            <label style={{ ...labelStyle, color: '#9ca3af' }}>
              <input type="checkbox" checked disabled /> Essential cookies (always on)
            </label>
            <label style={labelStyle}>
              <input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} />
              Analytics cookies (Google Analytics)
            </label>
            <label style={labelStyle}>
              <input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} />
              Marketing cookies (affiliate tracking)
            </label>
          </div>
        )}

        <div style={btnRow}>
          <button onClick={accept} style={btnPrimary}>Accept All</button>
          <button onClick={reject} style={btnSecondary}>Reject All</button>
          {showCustomise ? (
            <button onClick={saveCustom} style={btnAccent}>Save Preferences</button>
          ) : (
            <button onClick={() => setShowCustomise(true)} style={btnSecondary}>Customise</button>
          )}
        </div>
      </div>
    </div>
  );
}
