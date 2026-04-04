import Layout from '../../components/Layout';

export default function Terms() {
  const s = {
    page: { maxWidth: 720, margin: '0 auto', padding: '2rem 1rem', fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", color: '#1a1a2e', lineHeight: 1.7 },
    h1: { fontSize: '2rem', fontWeight: 800, marginBottom: 8 },
    date: { fontSize: 13, color: '#9ca3af', marginBottom: 32 },
    h2: { fontSize: '1.25rem', fontWeight: 700, marginTop: 32, marginBottom: 8 },
    p: { marginBottom: 16, fontSize: 15 },
    ul: { marginBottom: 16, paddingLeft: 24, fontSize: 15 },
    li: { marginBottom: 6 },
  };

  return (
    <Layout city="sg">
      <div style={s.page}>
        <h1 style={s.h1}>Terms of Use</h1>
        <p style={s.date}>Last updated: 4 April 2026</p>

        <p style={s.p}>
          These Terms of Use apply to the website <a href="https://www.expatautoadviser.com" style={{ color: '#e63946' }}>www.expatautoadviser.com</a> (the &ldquo;Site&rdquo;), which is operated by NewDigitalWorld Pte. Ltd., a company incorporated in Singapore.
        </p>
        <p style={s.p}>
          By accessing or using the Site, you agree to be bound by these Terms of Use. If you do not agree to these Terms, you should not use the Site.
        </p>

        <h2 style={s.h2}>1. About This Site</h2>
        <p style={s.p}>
          ExpatAutoAdviser provides information, guides, tools, and resources relating to car ownership, leasing, insurance, and motoring for expats in Singapore and Hong Kong.
        </p>
        <p style={s.p}>
          We may update, change, suspend, restrict, or remove any part of the Site at any time without notice.
        </p>

        <h2 style={s.h2}>2. Information Only</h2>
        <p style={s.p}>
          All content on the Site is provided for general information purposes only.
        </p>
        <p style={s.p}>
          It does not constitute financial, legal, insurance, or other professional advice. You should always seek independent professional advice before making decisions relating to purchasing, leasing, or insuring a vehicle, or any other financial commitment.
        </p>

        <h2 style={s.h2}>3. No Warranty as to Accuracy</h2>
        <p style={s.p}>
          We make reasonable efforts to keep information accurate and up to date. However, COE premiums, ARF rates, insurance quotes, regulations, prices, and third-party offers may change at any time.
        </p>
        <p style={s.p}>
          To the fullest extent permitted by law, we do not warrant that the Site or any content on it is complete, accurate, current, reliable, or free from error. You acknowledge that any reliance you place on the Site is at your own risk.
        </p>

        <h2 style={s.h2}>4. Calculators and Tools</h2>
        <p style={s.p}>
          Where available, our calculators and tools (including the COE calculator, lease checker, and similar features) provide estimates and general guidance only.
        </p>
        <p style={s.p}>
          The results are indicative and do not constitute a financial assessment, valuation, or guarantee of cost, availability, or outcome. Prices, premiums, and regulations may change without notice.
        </p>
        <p style={s.p}>
          You should always verify figures directly with the relevant dealer, authority, or qualified adviser before making financial decisions.
        </p>

        <h2 style={s.h2}>5. Affiliate Links and Recommendations</h2>
        <p style={s.p}>
          Some links on the Site are affiliate links. If you click those links and purchase a product or service, we may receive a commission at no extra cost to you.
        </p>
        <p style={s.p}>
          This does not affect the price you pay. We aim to provide honest and independent editorial content, but you should always carry out your own research before purchasing any third-party product or service.
        </p>
        <p style={s.p}>
          Please see our <a href="/affiliate-disclosure" style={{ color: '#e63946' }}>Affiliate Disclosure</a> for more information.
        </p>

        <h2 style={s.h2}>6. Third-Party Sites</h2>
        <p style={s.p}>
          The Site may contain links to third-party websites, tools, products, or services.
        </p>
        <p style={s.p}>
          We do not control and are not responsible for the content, availability, security, terms, or privacy practices of any third-party site. If you visit a third-party site, you do so at your own risk and subject to that site&rsquo;s own terms and policies.
        </p>

        <h2 style={s.h2}>7. Intellectual Property</h2>
        <p style={s.p}>
          Unless otherwise stated, all content on the Site, including text, graphics, logos, images, design, layout, and code, is owned by or licensed to NewDigitalWorld Pte. Ltd. and is protected by applicable intellectual property laws.
        </p>
        <p style={s.p}>
          You may view the Site for your personal, non-commercial use only. You may not copy, reproduce, distribute, modify, publish, transmit, create derivative works from, or otherwise use any content from the Site without our prior written consent, except as permitted by law.
        </p>

        <h2 style={s.h2}>8. User Conduct</h2>
        <p style={s.p}>You agree not to use the Site:</p>
        <ul style={s.ul}>
          <li style={s.li}>in any unlawful, fraudulent, or harmful way;</li>
          <li style={s.li}>to interfere with the proper operation, security, or performance of the Site;</li>
          <li style={s.li}>to attempt to gain unauthorised access to any part of the Site, server, or system;</li>
          <li style={s.li}>to use automated means to scrape, crawl, harvest, or extract data without our prior written permission;</li>
          <li style={s.li}>to upload, transmit, or distribute malware, spam, or other harmful material;</li>
          <li style={s.li}>to reverse engineer, decompile, or attempt to bypass any security or access controls; or</li>
          <li style={s.li}>to misuse any calculator, tool, or other feature on the Site.</li>
        </ul>

        <h2 style={s.h2}>9. User-Submitted Content</h2>
        <p style={s.p}>
          If the Site allows you to submit content, including comments, forms, messages, reviews, or other materials, you are responsible for ensuring that your submission is lawful, accurate, and does not infringe the rights of any third party.
        </p>
        <p style={s.p}>
          By submitting content to us, you grant NewDigitalWorld Pte. Ltd. a non-exclusive, worldwide, royalty-free licence to use, reproduce, adapt, publish, and display that content for the purpose of operating, promoting, and improving the Site, unless we agree otherwise in writing.
        </p>
        <p style={s.p}>
          We reserve the right to review, remove, or refuse to publish any user-submitted content at our discretion.
        </p>

        <h2 style={s.h2}>10. Privacy and Cookies</h2>
        <p style={s.p}>
          Your use of the Site is also subject to our <a href="/privacy" style={{ color: '#e63946' }}>Privacy Policy</a> and <a href="/cookies" style={{ color: '#e63946' }}>Cookie Policy</a>, which explain how we collect, use, and store personal data and how we use cookies and similar technologies.
        </p>

        <h2 style={s.h2}>11. No Endorsement</h2>
        <p style={s.p}>
          References on the Site to third-party products, services, companies, or websites do not constitute an endorsement unless we expressly say so.
        </p>
        <p style={s.p}>
          We may receive compensation from some third parties, but this does not mean we guarantee, approve, or assume responsibility for their products or services.
        </p>

        <h2 style={s.h2}>12. Termination</h2>
        <p style={s.p}>
          We may suspend or terminate your access to the Site, or any part of it, at any time if we reasonably believe that you have breached these Terms, misused the Site, or otherwise acted in a way that may harm us, other users, or third parties.
        </p>

        <h2 style={s.h2}>13. Limitation of Liability</h2>
        <p style={s.p}>
          To the fullest extent permitted by law, NewDigitalWorld Pte. Ltd., its directors, employees, contractors, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive losses or damages arising out of or in connection with your use of, or inability to use, the Site.
        </p>
        <p style={s.p}>
          This includes, without limitation, loss of profits, loss of revenue, loss of data, business interruption, and loss arising from reliance on information provided on the Site.
        </p>
        <p style={s.p}>
          Nothing in these Terms excludes or limits liability that cannot be excluded under applicable law.
        </p>

        <h2 style={s.h2}>14. Indemnity</h2>
        <p style={s.p}>
          To the fullest extent permitted by law, you agree to indemnify and hold harmless NewDigitalWorld Pte. Ltd. and its directors, employees, contractors, and affiliates from and against any claims, liabilities, losses, damages, costs, and expenses arising out of or relating to:
        </p>
        <ul style={s.ul}>
          <li style={s.li}>your misuse of the Site;</li>
          <li style={s.li}>your breach of these Terms; or</li>
          <li style={s.li}>your violation of any law or third-party right.</li>
        </ul>

        <h2 style={s.h2}>15. Severability</h2>
        <p style={s.p}>
          If any provision of these Terms is found to be invalid, unlawful, or unenforceable, that provision will be limited or removed to the minimum extent necessary, and the remaining provisions will continue in full force and effect.
        </p>

        <h2 style={s.h2}>16. Entire Agreement</h2>
        <p style={s.p}>
          These Terms of Use, together with our <a href="/privacy" style={{ color: '#e63946' }}>Privacy Policy</a>, <a href="/cookies" style={{ color: '#e63946' }}>Cookie Policy</a>, and <a href="/affiliate-disclosure" style={{ color: '#e63946' }}>Affiliate Disclosure</a>, constitute the entire agreement between you and us regarding your use of the Site.
        </p>

        <h2 style={s.h2}>17. Changes to These Terms</h2>
        <p style={s.p}>
          We may update these Terms of Use from time to time. Any changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. By continuing to use the Site after changes are posted, you agree to the revised Terms.
        </p>

        <h2 style={s.h2}>18. Governing Law</h2>
        <p style={s.p}>
          These Terms of Use are governed by the laws of Singapore. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Singapore, except where applicable law requires otherwise.
        </p>

        <h2 style={s.h2}>19. Contact</h2>
        <p style={s.p}>If you have any questions about these Terms of Use, please contact us at:</p>
        <p style={s.p}>
          NewDigitalWorld Pte. Ltd.<br />
          Email: <a href="mailto:partnerships@expatautoadviser.com" style={{ color: '#e63946' }}>partnerships@expatautoadviser.com</a>
        </p>
      </div>
    </Layout>
  );
}
