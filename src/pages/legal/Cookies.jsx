import Layout from '../../components/Layout';

export default function Cookies() {
  const s = {
    page: { maxWidth: 720, margin: '0 auto', padding: '2rem 1rem', fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", color: '#1a1a2e', lineHeight: 1.7 },
    h1: { fontSize: '2rem', fontWeight: 800, marginBottom: 8 },
    date: { fontSize: 13, color: '#9ca3af', marginBottom: 32 },
    h2: { fontSize: '1.25rem', fontWeight: 700, marginTop: 32, marginBottom: 8 },
    h3: { fontSize: '1.05rem', fontWeight: 600, marginTop: 24, marginBottom: 8 },
    p: { marginBottom: 16, fontSize: 15 },
    table: { width: '100%', borderCollapse: 'collapse', marginBottom: 16, fontSize: 14 },
    th: { textAlign: 'left', borderBottom: '2px solid #e5e7eb', padding: '8px 12px', fontWeight: 600 },
    td: { borderBottom: '1px solid #f3f4f6', padding: '8px 12px' },
  };

  return (
    <Layout city="sg">
      <div style={s.page}>
        <h1 style={s.h1}>Cookie Policy</h1>
        <p style={s.date}>Last updated: 4 April 2026</p>

        <h2 style={s.h2}>1. What Are Cookies</h2>
        <p style={s.p}>
          Cookies are small text files stored on your device when you visit a website. They help sites remember your preferences and understand how you use them.
        </p>

        <h2 style={s.h2}>2. How We Use Cookies</h2>

        <h3 style={s.h3}>Essential Cookies</h3>
        <p style={s.p}>Necessary for the site to function. Cannot be disabled.</p>
        <table style={s.table}>
          <thead><tr><th style={s.th}>Cookie</th><th style={s.th}>Purpose</th><th style={s.th}>Duration</th></tr></thead>
          <tbody>
            <tr><td style={s.td}>cookie_consent</td><td style={s.td}>Stores your cookie preferences</td><td style={s.td}>1 year</td></tr>
          </tbody>
        </table>

        <h3 style={s.h3}>Analytics Cookies</h3>
        <p style={s.p}>Help us understand site usage. Only set with your consent.</p>
        <table style={s.table}>
          <thead><tr><th style={s.th}>Cookie</th><th style={s.th}>Purpose</th><th style={s.th}>Duration</th></tr></thead>
          <tbody>
            <tr><td style={s.td}>_ga</td><td style={s.td}>Google Analytics — distinguishes unique users</td><td style={s.td}>2 years</td></tr>
            <tr><td style={s.td}>_ga_*</td><td style={s.td}>Google Analytics — maintains session state</td><td style={s.td}>2 years</td></tr>
          </tbody>
        </table>

        <h3 style={s.h3}>Marketing Cookies</h3>
        <p style={s.p}>Used by affiliate partners for conversion tracking. Only set with your consent when you click an affiliate link.</p>
        <table style={s.table}>
          <thead><tr><th style={s.th}>Cookie</th><th style={s.th}>Purpose</th><th style={s.th}>Duration</th></tr></thead>
          <tbody>
            <tr><td style={s.td}>Varies by partner</td><td style={s.td}>Affiliate conversion tracking</td><td style={s.td}>30–90 days</td></tr>
          </tbody>
        </table>

        <h2 style={s.h2}>3. Your Choices</h2>
        <p style={s.p}>
          Our cookie banner lets you accept all cookies, reject optional cookies, or customise preferences. You can change preferences at any time by clearing your browser cookies — the banner will reappear.
        </p>

        <h2 style={s.h2}>4. More Information</h2>
        <p style={s.p}>
          See our <a href="/privacy" style={{ color: '#e63946' }}>Privacy Policy</a> for details on how we handle personal data.
        </p>
        <p style={s.p}>Questions? Contact partnerships@expatautoadviser.com.</p>
      </div>
    </Layout>
  );
}
