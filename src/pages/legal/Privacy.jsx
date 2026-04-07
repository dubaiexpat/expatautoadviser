import Layout from '../../components/Layout';

export default function Privacy() {
  const s = {
    page: { maxWidth: 720, margin: '0 auto', padding: '2rem 1rem', fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", color: '#1a1a2e', lineHeight: 1.7 },
    h1: { fontSize: '2rem', fontWeight: 800, marginBottom: 8 },
    date: { fontSize: 13, color: '#9ca3af', marginBottom: 32 },
    h2: { fontSize: '1.25rem', fontWeight: 700, marginTop: 32, marginBottom: 8 },
    h3: { fontSize: '1.05rem', fontWeight: 600, marginTop: 24, marginBottom: 8 },
    p: { marginBottom: 16, fontSize: 15 },
    ul: { marginBottom: 16, paddingLeft: 24, fontSize: 15 },
    li: { marginBottom: 8 },
    table: { width: '100%', borderCollapse: 'collapse', marginBottom: 16, fontSize: 14 },
    th: { textAlign: 'left', borderBottom: '2px solid #e5e7eb', padding: '8px 12px', fontWeight: 600 },
    td: { borderBottom: '1px solid #f3f4f6', padding: '8px 12px' },
    note: { background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: 16, marginBottom: 16, fontSize: 14 },
  };

  return (
    <Layout city="sg">
      <div style={s.page}>
        <h1 style={s.h1}>Privacy Policy</h1>
        <p style={s.date}>Last updated: 5 April 2026</p>

        <div style={s.note}>
          <strong>Scope:</strong> This policy applies to users of <a href="https://www.expatautoadviser.com" style={{ color: '#e63946' }}>www.expatautoadviser.com</a> and is primarily intended for visitors in Singapore and Hong Kong. It is written to comply with Singapore's Personal Data Protection Act 2012 (PDPA) and Hong Kong's Personal Data (Privacy) Ordinance (Cap. 486) (PDPO).
        </div>

        <h2 style={s.h2}>1. Who We Are</h2>
        <p style={s.p}>
          ExpatAutoAdviser is operated by <strong>NewMediaWorld Pte. Ltd.</strong>, a company incorporated in Singapore.
        </p>
        <table style={s.table}>
          <tbody>
            <tr><td style={s.td}><strong>Privacy contact</strong></td><td style={s.td}>partnerships@expatautoadviser.com</td></tr>
          </tbody>
        </table>
        <p style={s.p}>
          For the purposes of the PDPA and PDPO, NewMediaWorld Pte. Ltd. is the organisation responsible for the collection, use, and disclosure of your personal data through this site.
        </p>

        <h2 style={s.h2}>2. What Personal Data We Collect</h2>
        <p style={s.p}>We collect and use your personal data only for the purposes described in this policy and, where required, with your consent or another lawful basis permitted by applicable law.</p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Information you provide</strong> — your email address when you subscribe to our newsletter or contact us.</li>
          <li style={s.li}><strong>Usage data</strong> — pages visited, time on site, referral source, device type, and browser. This is collected via cookies and analytics tools only with your consent.</li>
          <li style={s.li}><strong>Communication data</strong> — information you include when you email us.</li>
        </ul>

        <h2 style={s.h2}>3. Purposes of Collection and Use</h2>
        <p style={s.p}>We collect and use personal data for the following purposes:</p>
        <table style={s.table}>
          <thead>
            <tr><th style={s.th}>Purpose</th><th style={s.th}>Data involved</th><th style={s.th}>Basis</th></tr>
          </thead>
          <tbody>
            <tr><td style={s.td}>Provide guides and tools</td><td style={s.td}>Usage data</td><td style={s.td}>Legitimate interest in operating the site</td></tr>
            <tr><td style={s.td}>Send marketing emails</td><td style={s.td}>Email address</td><td style={s.td}>Your explicit consent (opt-in)</td></tr>
            <tr><td style={s.td}>Analyse site usage</td><td style={s.td}>Anonymised usage data</td><td style={s.td}>Your consent (via cookie banner)</td></tr>
            <tr><td style={s.td}>Respond to enquiries</td><td style={s.td}>Email address, message content</td><td style={s.td}>Legitimate interest in responding to you</td></tr>
          </tbody>
        </table>
        <p style={s.p}>
          We do not use your personal data for any purpose other than those described above. If we wish to use your data for a new purpose, we will notify you and, where required, seek your consent before doing so.
        </p>

        <h2 style={s.h2}>4. Marketing Emails</h2>
        <p style={s.p}>
          We will send marketing emails only where you have separately opted in by ticking the consent checkbox on our subscribe form. The checkbox is unchecked by default. You can withdraw consent at any time by using the unsubscribe link in any email or emailing partnerships@expatautoadviser.com.
        </p>
        <p style={s.p}>
          Marketing emails may include content about car ownership, insurance, leasing, and related services for expats in Singapore and Hong Kong.
        </p>

        <h2 style={s.h2}>5. Cookies and Tracking</h2>
        <p style={s.p}>
          We use cookies on this site. Cookies are categorised as follows:
        </p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Essential cookies</strong> — required for the site to function (e.g. storing your cookie preferences). These are always active.</li>
          <li style={s.li}><strong>Analytics cookies</strong> — used to understand how visitors interact with the site. Only set with your consent via our cookie banner.</li>
          <li style={s.li}><strong>Marketing cookies</strong> — used by affiliate partners for conversion tracking when you click an affiliate link. Only set with your consent.</li>
        </ul>
        <p style={s.p}>
          Consent for cookies is separate from consent for marketing emails. You can manage your cookie preferences at any time by clearing your browser cookies — the consent banner will reappear. For full details, see our <a href="/cookies" style={{ color: '#e63946' }}>Cookie Policy</a>.
        </p>

        <h2 style={s.h2}>6. Who We Share Data With</h2>
        <p style={s.p}>We may share your personal data with the following third parties, solely for the purposes described above:</p>
        <table style={s.table}>
          <thead>
            <tr><th style={s.th}>Recipient</th><th style={s.th}>Purpose</th><th style={s.th}>Location</th></tr>
          </thead>
          <tbody>
            <tr><td style={s.td}>Brevo (formerly Sendinblue)</td><td style={s.td}>Email delivery and subscriber management</td><td style={s.td}>European Union</td></tr>
            <tr><td style={s.td}>Google Analytics</td><td style={s.td}>Anonymised site usage analysis</td><td style={s.td}>United States</td></tr>
            <tr><td style={s.td}>Vercel</td><td style={s.td}>Website hosting</td><td style={s.td}>United States</td></tr>
          </tbody>
        </table>
        <p style={s.p}>
          When you click an affiliate link, the destination site may set its own cookies. We do not share your email address or other personal data with affiliate partners.
        </p>

        <h2 style={s.h2}>7. International Transfers</h2>
        <p style={s.p}>
          Your personal data may be transferred to and processed in countries outside Singapore and Hong Kong, specifically:
        </p>
        <ul style={s.ul}>
          <li style={s.li}><strong>United States</strong> — Vercel (hosting) and Google (analytics). Both maintain industry-standard security certifications and contractual data protection commitments.</li>
          <li style={s.li}><strong>European Union</strong> — Brevo (email platform), which is subject to the EU General Data Protection Regulation.</li>
        </ul>
        <p style={s.p}>
          Where we transfer personal data outside Singapore or Hong Kong, we take reasonable steps to ensure the recipient provides a standard of protection comparable to the applicable data protection laws, including through contractual obligations, the recipient's published security practices, or their compliance with recognised data protection frameworks.
        </p>

        <h2 style={s.h2}>8. Retention</h2>
        <ul style={s.ul}>
          <li style={s.li}><strong>Email subscribers</strong> — retained until you unsubscribe, plus 30 days for processing and removal from all systems.</li>
          <li style={s.li}><strong>Analytics data</strong> — aggregated and anonymised by Google Analytics; retained for up to 26 months (Google's default retention period).</li>
          <li style={s.li}><strong>Contact enquiries</strong> — retained for up to 12 months after our last communication, then deleted.</li>
        </ul>
        <p style={s.p}>We do not retain personal data longer than necessary for the purpose for which it was collected.</p>

        <h2 style={s.h2}>9. Your Rights</h2>

        <h3 style={s.h3}>Singapore (PDPA)</h3>
        <p style={s.p}>Under the PDPA, you have the right to:</p>
        <ul style={s.ul}>
          <li style={s.li}>Request access to the personal data we hold about you</li>
          <li style={s.li}>Request correction of inaccurate data</li>
          <li style={s.li}>Withdraw consent for collection, use, or disclosure of your data</li>
          <li style={s.li}>Request that we stop sending marketing communications</li>
        </ul>
        <p style={s.p}>
          You may contact the Personal Data Protection Commission (PDPC) at <a href="https://www.pdpc.gov.sg" style={{ color: '#e63946' }}>www.pdpc.gov.sg</a> if you have concerns about our data practices.
        </p>

        <h3 style={s.h3}>Hong Kong (PDPO)</h3>
        <p style={s.p}>Under the PDPO, you have the right to:</p>
        <ul style={s.ul}>
          <li style={s.li}>Request access to your personal data</li>
          <li style={s.li}>Request correction of inaccurate data</li>
          <li style={s.li}>Request that we cease using your data for direct marketing</li>
        </ul>
        <p style={s.p}>
          You may contact the Privacy Commissioner for Personal Data at <a href="https://www.pcpd.org.hk" style={{ color: '#e63946' }}>www.pcpd.org.hk</a> if you wish to make a complaint.
        </p>

        <p style={s.p}>
          To exercise any of these rights, email partnerships@expatautoadviser.com. We aim to respond within 30 days.
        </p>

        <h2 style={s.h2}>10. Data Breach Notification</h2>
        <p style={s.p}>
          In the event of a data breach that is likely to result in significant harm to affected individuals, we will notify the PDPC and affected individuals as soon as practicable, in accordance with the PDPA's mandatory breach notification requirements.
        </p>

        <h2 style={s.h2}>11. Children</h2>
        <p style={s.p}>
          This site is not directed at children. We do not knowingly collect personal data from minors. If you believe a minor has provided us with personal data, please contact us and we will delete it.
        </p>

        <h2 style={s.h2}>12. Changes to This Policy</h2>
        <p style={s.p}>
          We may update this policy from time to time. Material changes will be communicated via email to subscribers. The date at the top of this page will always reflect the most recent version.
        </p>

        <h2 style={s.h2}>13. Contact</h2>
        <p style={s.p}>
          For any questions about this policy or how we handle your personal data, contact us at partnerships@expatautoadviser.com.
        </p>
      </div>
    </Layout>
  );
}
