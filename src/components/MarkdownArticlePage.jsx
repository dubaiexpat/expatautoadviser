import Layout from './Layout';
import ArticleRenderer from './ArticleRenderer';

const HERO_STYLES = {
  wrap: { width: '100%', height: 'clamp(220px,35vw,420px)', overflow: 'hidden', borderRadius: 12, marginBottom: 32, position: 'relative' },
  img: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' },
  overlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,26,46,0.55) 0%, transparent 60%)' },
  badge: { position: 'absolute', bottom: 20, left: 24 },
  badgeText: { background: '#2a9d8f', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 6 },
};

const CITY_LABELS = {
  sg: 'Singapore',
  hk: 'Hong Kong',
};

export default function MarkdownArticlePage({ city, title, description, heroImage, relatedLinks, markdown }) {
  return (
    <Layout city={city} title={title} description={description} relatedLinks={relatedLinks}>
      <div style={HERO_STYLES.wrap}>
        <img src={heroImage} alt={title} style={HERO_STYLES.img} />
        <div style={HERO_STYLES.overlay} />
        <div style={HERO_STYLES.badge}>
          <span style={HERO_STYLES.badgeText}>{CITY_LABELS[city]}</span>
        </div>
      </div>
      <div style={{ maxWidth: 760 }}>
        <p style={{ color: '#0d9488', fontWeight: 600, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>{CITY_LABELS[city]}</p>
        <ArticleRenderer markdown={markdown} />
      </div>
    </Layout>
  );
}
