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
          ExpatAutoAdviser is a free resource for Western expats navigating car ownership in Singapore and Hong Kong. To keep the site running and continue producing free guides, we participate in affiliate programmes with companies we believe are genuinely useful for expat car owners.
        </p>

        <h2 style={s.h2}>What This Means for You</h2>
        <p style={s.p}>
          Some links on this site are affiliate links. When you click through and sign up for a service, request a quote, or complete a qualifying action, we may earn a commission at no extra cost to you. The price you pay is the same whether you use our link or go directly.
        </p>

        <h2 style={s.h2}>Our Editorial Independence</h2>
        <p style={s.p}>
          Affiliate partnerships do not influence our editorial recommendations. We recommend services based on our own research and assessment of what is most useful for expats. We will never recommend a product solely because it offers a higher commission.
        </p>

        <h2 style={s.h2}>Categories of Partners</h2>
        <p style={s.p}>We currently work with or intend to work with partners in these categories:</p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Car leasing companies</strong> — Singapore and Hong Kong lease providers</li>
          <li style={s.li}><strong>Insurance providers</strong> — expat motor insurance</li>
          <li style={s.li}><strong>Workshops and garages</strong> — recommended service centres</li>
          <li style={s.li}><strong>Financial services</strong> — Wise (international transfers)</li>
        </ul>
        <p style={s.p}>This list is updated as partnerships change.</p>

        <h2 style={s.h2}>Questions</h2>
        <p style={s.p}>
          Contact us at partnerships@expatautoadviser.com.
        </p>
      </div>
    </Layout>
  );
}
