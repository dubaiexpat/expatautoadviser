import Layout from '../../components/Layout';

export default function Privacy() {
  const s = {
    page: { maxWidth: 720, margin: '0 auto', padding: '2rem 1rem', fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", color: '#1a1a2e', lineHeight: 1.7 },
    h1: { fontSize: '2rem', fontWeight: 800, marginBottom: 8 },
    date: { fontSize: 13, color: '#9ca3af', marginBottom: 32 },
    h2: { fontSize: '1.25rem', fontWeight: 700, marginTop: 32, marginBottom: 8 },
    p: { marginBottom: 16, fontSize: 15 },
    ul: { marginBottom: 16, paddingLeft: 24, fontSize: 15 },
    li: { marginBottom: 8 },
    table: { width: '100%', borderCollapse: 'collapse', marginBottom: 16, fontSize: 14 },
    th: { textAlign: 'left', borderBottom: '2px solid #e5e7eb', padding: '8px 12px', fontWeight: 600 },
    td: { borderBottom: '1px solid #f3f4f6', padding: '8px 12px' },
  };

  return (
    <Layout city="sg">
      <div style={s.page}>
        <h1 style={s.h1}>Privacy Policy</h1>
        <p style={s.date}>Last updated: 4 April 2026</p>

        <h2 style={s.h2}>1. Who We Are</h2>
        <p style={s.p}>
          ExpatAutoAdviser (<a href="https://www.expatautoadviser.com" style={{ color: '#e63946' }}>www.expatautoadviser.com</a>) is operated by NewDigitalWorld Pte. Ltd., a company incorporated in Singapore. For the purposes of data-protection law we are the data controller.
        </p>
        <p style={s.p}><strong>Contact:</strong> partnerships@expatautoadviser.com</p>
        <p style={s.p}><strong>Data Protection Officer:</strong> partnerships@expatautoadviser.com</p>

        <h2 style={s.h2}>2. What Data We Collect</h2>
        <ul style={s.ul}>
          <li style={s.li}><strong>Information you provide</strong> — email address when subscribing to our newsletter or using interactive tools.</li>
          <li style={s.li}><strong>Usage data</strong> — pages visited, time on site, referral source, device type and browser, collected via cookies and analytics tools.</li>
          <li style={s.li}><strong>Communication data</strong> — information you include when contacting us by email.</li>
        </ul>

        <h2 style={s.h2}>3. Why We Collect It &amp; Legal Basis</h2>
        <table style={s.table}>
          <thead>
            <tr><th style={s.th}>Purpose</th><th style={s.th}>Legal Basis</th></tr>
          </thead>
          <tbody>
            <tr><td style={s.td}>Provide tools and guides</td><td style={s.td}>Legitimate interest</td></tr>
            <tr><td style={s.td}>Send marketing emails</td><td style={s.td}>Consent (explicit opt-in)</td></tr>
            <tr><td style={s.td}>Analyse site usage</td><td style={s.td}>Consent (via cookie banner)</td></tr>
            <tr><td style={s.td}>Respond to enquiries</td><td style={s.td}>Legitimate interest</td></tr>
          </tbody>
        </table>

        <h2 style={s.h2}>4. Marketing Emails</h2>
        <p style={s.p}>
          We only send marketing emails if you give explicit consent by ticking the relevant checkbox. You can withdraw consent at any time by clicking the unsubscribe link in any email or emailing partnerships@expatautoadviser.com.
        </p>

        <h2 style={s.h2}>5. Who We Share Data With</h2>
        <ul style={s.ul}>
          <li style={s.li}><strong>Email platform</strong> — Brevo (formerly Sendinblue), which processes subscriber data.</li>
          <li style={s.li}><strong>Analytics</strong> — Google Analytics, collecting anonymised usage data.</li>
          <li style={s.li}><strong>Affiliate networks</strong> — destination sites may set their own cookies when you click affiliate links. We do not share your email with affiliate partners.</li>
          <li style={s.li}><strong>Hosting</strong> — Vercel (United States).</li>
        </ul>

        <h2 style={s.h2}>6. International Transfers</h2>
        <p style={s.p}>
          Your data may be processed outside Singapore — specifically in the United States (Vercel, Google) and the EU (Brevo). Where data is transferred, we rely on appropriate safeguards including standard contractual clauses.
        </p>

        <h2 style={s.h2}>7. How Long We Keep Data</h2>
        <ul style={s.ul}>
          <li style={s.li}><strong>Email subscribers</strong> — until you unsubscribe, plus 30 days for processing.</li>
          <li style={s.li}><strong>Analytics data</strong> — aggregated and anonymised; retained up to 26 months.</li>
          <li style={s.li}><strong>Contact enquiries</strong> — up to 12 months after last communication.</li>
        </ul>

        <h2 style={s.h2}>8. Your Rights</h2>
        <p style={s.p}>Depending on your jurisdiction, you may have the right to:</p>
        <ul style={s.ul}>
          <li style={s.li}>Access the personal data we hold about you</li>
          <li style={s.li}>Rectify inaccurate data</li>
          <li style={s.li}>Erase your data</li>
          <li style={s.li}>Restrict processing</li>
          <li style={s.li}>Data portability</li>
          <li style={s.li}>Withdraw consent at any time</li>
        </ul>

        <h2 style={s.h2}>9. Singapore PDPA Compliance</h2>
        <p style={s.p}>
          Under Singapore's Personal Data Protection Act (PDPA), we collect, use and disclose personal data only with your consent and for purposes a reasonable person would consider appropriate. You may contact the Personal Data Protection Commission (PDPC) at <a href="https://www.pdpc.gov.sg" style={{ color: '#e63946' }}>www.pdpc.gov.sg</a> if you have concerns about our data practices.
        </p>

        <h2 style={s.h2}>10. Hong Kong PDPO Compliance</h2>
        <p style={s.p}>
          Under Hong Kong's Personal Data (Privacy) Ordinance (PDPO), we ensure personal data is collected for a lawful purpose directly related to our function, and that the data collected is adequate but not excessive. You may lodge a complaint with the Privacy Commissioner for Personal Data at <a href="https://www.pcpd.org.hk" style={{ color: '#e63946' }}>www.pcpd.org.hk</a>.
        </p>

        <h2 style={s.h2}>11. Cookies</h2>
        <p style={s.p}>
          We use cookies on this site. For full details, see our <a href="/cookies" style={{ color: '#e63946' }}>Cookie Policy</a>.
        </p>

        <h2 style={s.h2}>12. Children</h2>
        <p style={s.p}>
          This site is not directed at individuals under the age of 16. We do not knowingly collect personal data from children.
        </p>

        <h2 style={s.h2}>13. Changes to This Policy</h2>
        <p style={s.p}>
          We may update this policy from time to time. Material changes will be communicated via email to subscribers.
        </p>
      </div>
    </Layout>
  );
}
