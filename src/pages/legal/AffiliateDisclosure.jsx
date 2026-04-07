import Layout from '../../components/Layout';

export default function AffiliateDisclosure() {
  const s = {
    page: { maxWidth: 720, margin: '0 auto', padding: '2rem 1rem', fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", color: '#1a1a2e', lineHeight: 1.7 },
    h1: { fontSize: '2rem', fontWeight: 800, marginBottom: 8 },
    date: { fontSize: 13, color: '#9ca3af', marginBottom: 32 },
    h2: { fontSize: '1.25rem', fontWeight: 700, marginTop: 32, marginBottom: 8 },
    p: { marginBottom: 16, fontSize: 15 },
    ul: { marginBottom: 16, paddingLeft: 24, fontSize: 15 },
    li: { marginBottom: 8 },
  };

  return (
    <Layout city="sg">
      <div style={s.page}>
        <h1 style={s.h1}>Affiliate Disclosure</h1>
        <p style={s.date}>Last updated: 4 April 2026</p>

        <h2 style={s.h2}>How We Earn Revenue</h2>
        <p style={s.p}>
          ExpatAutoAdviser is a free resource for expats navigating car ownership in Singapore and Hong Kong. To help support the cost of running the site and producing free guides, we may participate in affiliate programmes with companies and services that we believe may be useful to our readers.
        </p>

        <h2 style={s.h2}>Affiliate Links</h2>
        <p style={s.p}>
          Some links on this site are affiliate links. This means that if you click a link and sign up for a service, request a quote, make a purchase, or complete another qualifying action, we may earn a commission at no extra cost to you.
        </p>
        <p style={s.p}>
          The price you pay is the same whether you use our affiliate link or visit the provider directly.
        </p>
        <p style={s.p}>
          Affiliate links may appear in articles, comparison tables, banners, buttons, or other content formats across the site. Not every affiliate link is individually labelled in every case.
        </p>

        <h2 style={s.h2}>Editorial Independence</h2>
        <p style={s.p}>
          Our affiliate relationships do not influence our editorial opinions, rankings, or recommendations. We aim to recommend products and services based on our own research and assessment of what may be most useful to our audience.
        </p>
        <p style={s.p}>
          We do not recommend a product or service solely because it pays a commission.
        </p>

        <h2 style={s.h2}>Current or Potential Affiliate Partners</h2>
        <p style={s.p}>We may work with affiliate programmes and partners including:</p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Car leasing companies</strong> — Singapore and Hong Kong lease providers</li>
          <li style={s.li}><strong>Insurance providers</strong> — expat motor insurance</li>
          <li style={s.li}><strong>Workshops and garages</strong> — recommended service centres</li>
          <li style={s.li}><strong>Wise</strong> — international money transfers</li>
          <li style={s.li}>Other automotive, finance, or expat-related services</li>
        </ul>
        <p style={s.p}>
          This list may change from time to time as partnerships are added, removed, or updated. Not every affiliate relationship may be listed individually.
        </p>

        <h2 style={s.h2}>Contact Us</h2>
        <p style={s.p}>
          If you have any questions about this disclosure or our affiliate relationships, please contact us at:
        </p>
        <p style={s.p}>
          NewMediaWorld Pte. Ltd.<br />
          Email: <a href="mailto:partnerships@expatautoadviser.com" style={{ color: '#e63946' }}>partnerships@expatautoadviser.com</a>
        </p>
      </div>
    </Layout>
  );
}
