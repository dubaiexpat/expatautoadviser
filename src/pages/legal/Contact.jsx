import Layout from '../../components/Layout';

export default function Contact() {
  const s = {
    page: { maxWidth: 720, margin: '0 auto', padding: '2rem 1rem', fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", color: '#1a1a2e', lineHeight: 1.7 },
    h1: { fontSize: '2rem', fontWeight: 800, marginBottom: 8 },
    date: { fontSize: 13, color: '#9ca3af', marginBottom: 32 },
    h2: { fontSize: '1.25rem', fontWeight: 700, marginTop: 32, marginBottom: 8 },
    p: { marginBottom: 16, fontSize: 15 },
    table: { width: '100%', borderCollapse: 'collapse', marginBottom: 16, fontSize: 14 },
    td: { borderBottom: '1px solid #f3f4f6', padding: '8px 12px' },
    note: { background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: 16, marginBottom: 16, fontSize: 14 },
    link: { color: '#e63946', textDecoration: 'none' },
  };

  return (
    <Layout city="sg">
      <div style={s.page}>
        <h1 style={s.h1}>Contact Us</h1>
        <p style={s.date}>Last updated: 18 April 2026</p>

        <p style={s.p}>
          ExpatAutoAdviser is run by a small team of expats who've been through the car-buying process in Singapore and Hong Kong. We're always happy to hear from readers — whether you've spotted something that needs updating, have a question about a guide, or want to discuss a partnership.
        </p>

        <h2 style={s.h2}>Get in Touch</h2>
        <table style={s.table}>
          <tbody>
            <tr><td style={s.td}><strong>General enquiries</strong></td><td style={s.td}><a href="mailto:hello@expatautoadviser.com" style={s.link}>hello@expatautoadviser.com</a></td></tr>
            <tr><td style={s.td}><strong>Partnerships &amp; advertising</strong></td><td style={s.td}><a href="mailto:partnerships@expatautoadviser.com" style={s.link}>partnerships@expatautoadviser.com</a></td></tr>
            <tr><td style={s.td}><strong>Press &amp; media</strong></td><td style={s.td}><a href="mailto:partnerships@expatautoadviser.com" style={s.link}>partnerships@expatautoadviser.com</a></td></tr>
          </tbody>
        </table>

        <p style={s.p}>
          We aim to respond to all enquiries within two working days.
        </p>

        <h2 style={s.h2}>About ExpatAutoAdviser</h2>
        <p style={s.p}>
          ExpatAutoAdviser is operated by <strong>NewMediaWorld Pte. Ltd.</strong>, a company incorporated in Singapore. We provide independent car buying, leasing, and ownership guides for British expats living in Singapore and Hong Kong.
        </p>

        <div style={s.note}>
          <strong>Affiliate disclosure:</strong> Some links on this site are affiliate links. This means we may earn a small commission if you click through and make a purchase — at no extra cost to you. This helps us keep our guides free and up to date. See our full <a href="/affiliate-disclosure" style={s.link}>affiliate disclosure</a> for details.
        </div>

        <h2 style={s.h2}>Report an Issue</h2>
        <p style={s.p}>
          Found outdated information, a broken link, or something that doesn't look right? Please email <a href="mailto:hello@expatautoadviser.com" style={s.link}>hello@expatautoadviser.com</a> and we'll get it sorted.
        </p>

        <h2 style={s.h2}>Privacy</h2>
        <p style={s.p}>
          For details on how we handle your data, please see our <a href="/privacy" style={s.link}>privacy policy</a>.
        </p>
      </div>
    </Layout>
  );
}
