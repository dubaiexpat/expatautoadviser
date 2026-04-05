import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/erp-2-real-cost-of-driving-in-singapore.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1542189412744-bfabf27522ee?w=1200&q=80';

export default function SGCostOfDriving() {
  return (
    <MarkdownArticlePage
      city="sg"
      title="ERP 2.0 and the Real Cost of Driving in Singapore"
      description="How Singapore's ERP 2.0 system works in 2026: OBU rollout, distance-based charging intent, typical gantry rates, and what daily driving really costs an expat."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'Buying Guide', to: '/singapore/buying-guide' },
        { label: 'Car Loans', to: '/singapore/car-loans' },
        { label: 'Subscription vs Ownership', to: '/singapore/subscription-vs-ownership' },
      ]}
      markdown={markdown}
    />
  );
}
