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
    ul: { marginBottom: 16, paddingLeft: 24, fontSize: 15 },
    li: { marginBottom: 6 },
  };

  return (
    <Layout city="sg">
      <div style={s.page}>
        <h1 style={s.h1}>Cookie Policy</h1>
        <p style={s.date}>Last updated: 4 April 2026</p>

        <h2 style={s.h2}>1. What Are Cookies</h2>
        <p style={s.p}>
          Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember your preferences, and understand how visitors use the site.
        </p>
        <p style={s.p}>
          We also use similar technologies such as pixels, tags, and local storage. In this policy, we refer to all of these technologies together as &ldquo;cookies.&rdquo;
        </p>

        <h2 style={s.h2}>2. Who We Are</h2>
        <p style={s.p}>
          ExpatAutoAdviser (<a href="https://www.expatautoadviser.com" style={{ color: '#e63946' }}>www.expatautoadviser.com</a>) is operated by NewMediaWorld Pte. Ltd., a company incorporated in Singapore.
        </p>

        <h2 style={s.h2}>3. How We Use Cookies</h2>
        <p style={s.p}>We use cookies for the following purposes:</p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Essential cookies</strong> — necessary for the site to operate, including session management and storing your cookie preferences.</li>
          <li style={s.li}><strong>Analytics cookies</strong> — help us understand how visitors use the site so we can improve content and performance. These collect pseudonymous data (such as a randomly generated client ID) rather than directly identifying you.</li>
          <li style={s.li}><strong>Affiliate tracking cookies</strong> — allow us to measure when a visitor clicks through to a partner website or completes an action, so we can track referrals and commissions.</li>
        </ul>

        <h2 style={s.h2}>4. Cookies We Use</h2>

        <h3 style={s.h3}>Essential Cookies</h3>
        <p style={s.p}>These cookies are necessary for the site to function. They are set automatically and cannot be switched off.</p>
        <table style={s.table}>
          <thead>
            <tr><th style={s.th}>Cookie</th><th style={s.th}>Purpose</th><th style={s.th}>Duration</th><th style={s.th}>Consent Required</th></tr>
          </thead>
          <tbody>
            <tr><td style={s.td}>cookie_consent</td><td style={s.td}>Stores your cookie preferences</td><td style={s.td}>1 year</td><td style={s.td}>No</td></tr>
          </tbody>
        </table>

        <h3 style={s.h3}>Analytics Cookies</h3>
        <p style={s.p}>These cookies allow us to measure and analyse how visitors interact with the site. Data is collected pseudonymously — Google Analytics assigns a random client ID rather than recording your name or email. These cookies are only set if you consent via our cookie banner.</p>
        <table style={s.table}>
          <thead>
            <tr><th style={s.th}>Cookie</th><th style={s.th}>Provider</th><th style={s.th}>Purpose</th><th style={s.th}>Duration</th><th style={s.th}>Consent Required</th></tr>
          </thead>
          <tbody>
            <tr><td style={s.td}>_ga</td><td style={s.td}>Google Analytics</td><td style={s.td}>Distinguishes unique users via a pseudonymous client ID</td><td style={s.td}>2 years</td><td style={s.td}>Yes</td></tr>
            <tr><td style={s.td}>_ga_*</td><td style={s.td}>Google Analytics</td><td style={s.td}>Maintains session state</td><td style={s.td}>2 years</td><td style={s.td}>Yes</td></tr>
            <tr><td style={s.td}>_gid</td><td style={s.td}>Google Analytics</td><td style={s.td}>Distinguishes users for a single day</td><td style={s.td}>24 hours</td><td style={s.td}>Yes</td></tr>
          </tbody>
        </table>

        <h3 style={s.h3}>Affiliate Tracking Cookies</h3>
        <p style={s.p}>These cookies are set by third-party affiliate networks when you click an affiliate link on our site. They track whether a referral resulted in a sign-up or purchase, so we can receive commission. They are only set if you consent and click through to a partner site.</p>
        <table style={s.table}>
          <thead>
            <tr><th style={s.th}>Provider</th><th style={s.th}>Purpose</th><th style={s.th}>Typical Duration</th><th style={s.th}>Consent Required</th></tr>
          </thead>
          <tbody>
            <tr><td style={s.td}>Awin</td><td style={s.td}>Tracks affiliate referrals and conversions</td><td style={s.td}>30 days</td><td style={s.td}>Yes</td></tr>
            <tr><td style={s.td}>CJ Affiliate</td><td style={s.td}>Tracks affiliate referrals and conversions</td><td style={s.td}>30–45 days</td><td style={s.td}>Yes</td></tr>
            <tr><td style={s.td}>Impact</td><td style={s.td}>Tracks affiliate referrals and conversions</td><td style={s.td}>30 days</td><td style={s.td}>Yes</td></tr>
            <tr><td style={s.td}>ShareASale</td><td style={s.td}>Tracks affiliate referrals and conversions</td><td style={s.td}>30–90 days</td><td style={s.td}>Yes</td></tr>
          </tbody>
        </table>
        <p style={s.p}>
          We may add or change affiliate partners from time to time. When we do, we will update this table and revise the &ldquo;last updated&rdquo; date above.
        </p>

        <h2 style={s.h2}>5. Your Cookie Choices</h2>
        <p style={s.p}>
          When you first visit our site, a cookie banner allows you to manage your preferences. You may choose to:
        </p>
        <ul style={s.ul}>
          <li style={s.li}>Accept all cookies.</li>
          <li style={s.li}>Reject non-essential cookies.</li>
          <li style={s.li}>Customise your preferences (choose analytics only, affiliate only, or both).</li>
        </ul>
        <p style={s.p}>
          You can change your preferences at any time by clearing your browser cookies and revisiting the site — the banner will reappear. You can also control cookies through your browser settings. If you reject non-essential cookies, the site will still function normally, but some features and analytics may be unavailable.
        </p>

        <h2 style={s.h2}>6. Third-Party Cookies</h2>
        <p style={s.p}>
          Some cookies are set by third parties when you use our site. These third parties may collect information about your browsing activity in accordance with their own privacy policies. We encourage you to review the privacy policies of Google, Awin, CJ Affiliate, Impact, and ShareASale for details on how they use your data.
        </p>

        <h2 style={s.h2}>7. International Transfers</h2>
        <p style={s.p}>
          Some of our service providers may process cookie data outside Singapore or Hong Kong, including in the United States or other countries where they or their servers operate. Where personal data is transferred internationally, we take reasonable steps to ensure appropriate protection is in place in accordance with the Singapore Personal Data Protection Act (PDPA) and the Hong Kong Personal Data (Privacy) Ordinance (PDPO).
        </p>

        <h2 style={s.h2}>8. Changes to This Policy</h2>
        <p style={s.p}>
          We may update this Cookie Policy from time to time to reflect changes in cookies we use, technology, legal requirements, or our business operations. Any updated version will be posted on this page with a revised effective date. We encourage you to check this page periodically.
        </p>

        <h2 style={s.h2}>9. Contact Us</h2>
        <p style={s.p}>
          If you have questions about this Cookie Policy or wish to exercise your data rights, please contact us at:
        </p>
        <p style={s.p}>
          NewMediaWorld Pte. Ltd.<br />
          Email: <a href="mailto:partnerships@expatautoadviser.com" style={{ color: '#e63946' }}>partnerships@expatautoadviser.com</a>
        </p>
        <p style={s.p}>
          For full details on how we handle personal data, see our <a href="/privacy" style={{ color: '#e63946' }}>Privacy Policy</a>.
        </p>
      </div>
    </Layout>
  );
}
