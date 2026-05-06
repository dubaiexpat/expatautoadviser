import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/car-insurance-singapore-vs-hong-kong-uk-expats.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80';

export default function SGInsuranceVsHongKong() {
  return (
    <MarkdownArticlePage
      city="sg"
      title="Expat Car Insurance: Singapore vs Hong Kong — What UK Expats Pay (and Why It Differs)"
      description="UK expats deciding between Singapore and Hong Kong: structural differences in compulsory cover, NCD transfer, premium ranges, excess, and the SG-only forced-comprehensive cliff at year 7."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'Singapore Insurance Guide', to: '/singapore/insurance-guide' },
        { label: 'Hong Kong Insurance Guide', to: '/hong-kong/insurance-guide' },
        { label: 'Singapore Buying Guide', to: '/singapore/buying-guide' },
        { label: 'Hong Kong Buying Guide', to: '/hong-kong/buying-guide' },
      ]}
      markdown={markdown}
    />
  );
}
