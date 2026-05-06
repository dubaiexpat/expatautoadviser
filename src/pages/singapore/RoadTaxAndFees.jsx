import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/road-tax-and-vehicle-fees-singapore.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1554232456-8727aae0cfa4?w=1200&q=80';

export default function SGRoadTaxAndFees() {
  return (
    <MarkdownArticlePage
      city="sg"
      title="Road Tax and Vehicle Fees in Singapore: What UK Expats Actually Pay (2026)"
      description="Singapore road tax explained — petrol vs diesel vs EV formulas, the inspection cycle, the year-10 COE renewal decision, and a worked annual recurring-cost example for typical expat cars."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'Singapore Cost of Driving', to: '/singapore/cost-of-driving' },
        { label: 'COE System Explained', to: '/singapore/coe-guide' },
        { label: 'Singapore Buying Guide', to: '/singapore/buying-guide' },
        { label: 'EV Buying Guide Singapore', to: '/singapore/ev-guide' },
      ]}
      markdown={markdown}
    />
  );
}
