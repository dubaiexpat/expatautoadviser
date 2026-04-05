import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/buying-a-car-hong-kong-parking-reality.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=1200&q=80';

export default function HKBuyingGuide() {
  return (
    <MarkdownArticlePage
      city="hk"
      title="Buying a Car in Hong Kong as an Expat: Costs, Parking, and Whether It's Worth It"
      description="The real cost of buying a car in Hong Kong: FRT, parking reality, illustrative budgets, chauffeur vs taxi trade-offs, EV concessions, and whether owning actually makes sense."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'FRT Explained', to: '/hong-kong/frt-tax-explained' },
        { label: 'Insurance Guide', to: '/hong-kong/insurance-guide' },
        { label: 'Selling Your Car', to: '/hong-kong/selling-guide' },
      ]}
      markdown={markdown}
    />
  );
}
