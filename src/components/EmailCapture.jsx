import { useState } from 'react';

const SUPABASE_URL = 'https://lywjdihnnajvhfcpmxnw.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5d2pkaWhubmFqdmhmY3BteG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMzA4MjEsImV4cCI6MjA4ODgwNjgyMX0.x6A081ICya-DOqW6eeyZnDICltJTroEFSoYONH4WZAk';

async function saveEmail(email, source, city) {
  try {
    await fetch(SUPABASE_URL + '/rest/v1/newsletter_subscribers', {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        email,
        source,
        city,
        subscribed_at: new Date().toISOString(),
      }),
    });
  } catch (e) { /* silent fail */ }
}

export default function EmailCapture({ city = 'sg', source = 'general', title, subtitle, buttonText }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | done

  const accent = city === 'sg' ? '#e8341c' : '#0d9488';
  const lightBg = city === 'sg' ? '#fff8f7' : '#f0fdfa';
  const borderCol = city === 'sg' ? '#fecaca' : '#99f6e4';

  const defaultTitle = city === 'sg'
    ? '📋 Get the free Singapore Car Buyer Checklist'
    : '📋 Get the free Hong Kong Car Buyer Guide';

  const defaultSubtitle = city === 'sg'
    ? 'Step-by-step from COE bidding to insurance to your first drive — plus monthly COE price updates direct to your inbox.'
    : 'First Registration Tax explained, how to find a lease, insurance tips, and the HK expat car market in plain English.';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setStatus('loading');
    await saveEmail(email, source, city);
    setStatus('done');
  };

  if (status === 'done') {
    return (
      <div style={{
        background: '#f0fdf4', border: '1.5px solid #86efac',
        borderRadius: 12, padding: '24px 28px', margin: '28px 0', textAlign: 'center',
      }}>
        <div style={{ fontSize: 32, marginBottom: 8 }}>✅</div>
        <p style={{ fontSize: 16, fontWeight: 700, color: '#166534', margin: '0 0 4px' }}>You're in!</p>
        <p style={{ fontSize: 13, color: '#166534', margin: 0 }}>Check your inbox — your guide is on its way.</p>
      </div>
    );
  }

  return (
    <div style={{
      background: lightBg,
      border: `1.5px solid ${borderCol}`,
      borderRadius: 12,
      padding: '24px 28px',
      margin: '28px 0',
    }}>
      <p style={{ fontSize: 15, fontWeight: 700, color: '#1e3a5f', margin: '0 0 6px', lineHeight: 1.35 }}>
        {title || defaultTitle}
      </p>
      <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 16px', lineHeight: 1.6 }}>
        {subtitle || defaultSubtitle}
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          style={{
            flex: 1, minWidth: 200,
            padding: '11px 14px',
            border: '1.5px solid #d1d5db',
            borderRadius: 8,
            fontSize: 16, // 16px prevents iOS zoom
            fontFamily: 'Inter, sans-serif',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            background: accent, color: 'white', border: 'none',
            borderRadius: 8, padding: '11px 22px',
            fontSize: 14, fontWeight: 700,
            cursor: status === 'loading' ? 'default' : 'pointer',
            fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap',
            opacity: status === 'loading' ? 0.7 : 1,
          }}
        >
          {status === 'loading' ? 'Sending…' : (buttonText || 'Send me the guide →')}
        </button>
      </form>
      <p style={{ fontSize: 11, color: '#9ca3af', margin: '8px 0 0' }}>
        Free. No spam. Unsubscribe any time.
      </p>
    </div>
  );
}
