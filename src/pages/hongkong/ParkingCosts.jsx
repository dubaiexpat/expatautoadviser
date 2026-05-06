import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/hong-kong-parking-costs-expats.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200&q=80';

export default function HKParkingCosts() {
  return (
    <MarkdownArticlePage
      city="hk"
      title="Hong Kong Parking Costs for Expats: Real 2026 Numbers"
      description="What parking actually costs in different parts of Hong Kong (HK$1,500–HK$12,000/month), the three layers most expats only see one of, and how parking changes the buy-vs-lease maths."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'Hong Kong Buying Guide', to: '/hong-kong/buying-guide' },
        { label: 'Hong Kong Leasing Guide', to: '/hong-kong/leasing-guide' },
        { label: 'Should I Get a Car in HK?', to: '/hong-kong/should-i-get-a-car' },
        { label: 'First Registration Tax Explained', to: '/hong-kong/frt-tax-explained' },
        { label: 'Tunnel Tolls Explained', to: '/hong-kong/tunnel-tolls-explained' },
      ]}
      markdown={markdown}
    />
  );
}
