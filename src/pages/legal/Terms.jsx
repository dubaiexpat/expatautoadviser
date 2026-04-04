import Layout from '../../components/Layout';

export default function Terms() {
  const s = {
    page: { maxWidth: 720, margin: '0 auto', padding: '2rem 1rem', fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", color: '#1a1a2e', lineHeight: 1.7 },
    h1: { fontSize: '2rem', fontWeight: 800, marginBottom: 8 },
    date: { fontSize: 13, color: '#9ca3af', marginBottom: 32 },
    h2: { fontSize: '1.25rem', fontWeight: 700, marginTop: 32, marginBottom: 8 },
    p: { marginBottom: 16, fontSize: 15 },
  };

  return (
    <Layout city="sg">
      <div style={s.page}>
        <h1 style={s.h1}>Terms of Use</h1>
        <p style={s.date}>Last updated: 4 April 2026</p>

        <h2 style={s.h2}>1. About This Site</h2>
        <p style={s.p}>
          ExpatAutoAdviser (<a href="https://www.expatautoadviser.com" style={{ color: '#e63946' }}>www.expatautoadviser.com</a>) is operated by NewDigitalWorld Pte. Ltd., a company incorporated in Singapore. By accessing or using this site you agree to these terms.
        </p>

        <h2 style={s.h2}>2. Information Only</h2>
        <p style={s.p}>
          All content is provided for general informational purposes only. It does not constitute financial, legal, or insurance advice. Always seek professional advice before making decisions about purchasing, leasing, or insuring a vehicle.
        </p>

        <h2 style={s.h2}>3. Accuracy</h2>
        <p style={s.p}>
          We make every effort to keep information accurate and up to date, but COE premiums, ARF rates, insurance quotes, and regulations change frequently. We do not guarantee the completeness or accuracy of any information and accept no liability for decisions made in reliance on it.
        </p>

        <h2 style={s.h2}>4. Calculators &amp; Tools</h2>
        <p style={s.p}>
          Our calculators (COE calculator, lease checker, etc.) provide estimates only. Results are indicative and should not be relied upon for financial decisions. Always verify with the relevant authority or dealer.
        </p>

        <h2 style={s.h2}>5. Affiliate Links &amp; Recommendations</h2>
        <p style={s.p}>
          Some links are affiliate links. When you click through and use a service, we may earn a commission at no extra cost to you. This does not influence our editorial recommendations. See our <a href="/affiliate-disclosure" style={{ color: '#e63946' }}>Affiliate Disclosure</a> for full details.
        </p>

        <h2 style={s.h2}>6. Third-Party Sites</h2>
        <p style={s.p}>
          This site links to external websites. We are not responsible for their content, privacy practices, or availability.
        </p>

        <h2 style={s.h2}>7. Intellectual Property</h2>
        <p style={s.p}>
          All content, design, and code is owned by NewDigitalWorld Pte. Ltd. or used under licence. You may not reproduce or distribute any content without prior written consent.
        </p>

        <h2 style={s.h2}>8. Limitation of Liability</h2>
        <p style={s.p}>
          To the fullest extent permitted by law, NewDigitalWorld Pte. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this site.
        </p>

        <h2 style={s.h2}>9. Changes to These Terms</h2>
        <p style={s.p}>
          We may update these terms at any time. Continued use of the site after changes constitutes acceptance of the revised terms.
        </p>

        <h2 style={s.h2}>10. Governing Law</h2>
        <p style={s.p}>
          These terms are governed by the laws of Singapore. Disputes shall be subject to the exclusive jurisdiction of the courts of Singapore.
        </p>

        <h2 style={s.h2}>11. Contact</h2>
        <p style={s.p}>
          For questions, contact us at partnerships@expatautoadviser.com.
        </p>
      </div>
    </Layout>
  );
}
