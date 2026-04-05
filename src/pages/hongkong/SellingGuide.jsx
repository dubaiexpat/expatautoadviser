import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/selling-your-car-when-leaving-hong-kong.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1449280429541-0214e229317b?w=1200&q=80';

export default function HKSellingGuide() {
  return (
    <MarkdownArticlePage
      city="hk"
      title="Selling Your Car When Leaving Hong Kong: A Six-Week Checklist"
      description="How to sell your car before leaving Hong Kong: timing the sale, dealer vs private, TD forms, export rules, insurance gaps, and the six-week countdown for departing expats."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'Buying Guide', to: '/hong-kong/buying-guide' },
        { label: 'FRT Explained', to: '/hong-kong/frt-tax-explained' },
        { label: 'Insurance Guide', to: '/hong-kong/insurance-guide' },
      ]}
      markdown={markdown}
    />
  );
}
