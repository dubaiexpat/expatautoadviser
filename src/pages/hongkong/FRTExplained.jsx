import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/first-registration-tax-explained-hong-kong-expats.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1518599807935-37015b9cefcb?w=1200&q=80';

export default function HKFRTExplained() {
  return (
    <MarkdownArticlePage
      city="hk"
      title="Hong Kong First Registration Tax (FRT) Explained for Expats"
      description="How Hong Kong's First Registration Tax is calculated for expats: progressive rate bands, worked examples, EV concessions, import rules, and planning ranges."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'Buying Guide', to: '/hong-kong/buying-guide' },
        { label: 'Insurance Guide', to: '/hong-kong/insurance-guide' },
        { label: 'Selling Your Car', to: '/hong-kong/selling-guide' },
      ]}
      markdown={markdown}
    />
  );
}
