import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/selling-your-car-when-leaving-singapore.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1449280429541-0214e229317b?w=1200&q=80';

export default function SGSellingGuide() {
  return (
    <MarkdownArticlePage
      city="sg"
      title="Selling Your Car When Leaving Singapore: PARF, COE Rebates and the Six-Week Plan"
      description="Departing UK expats: how to claim your PARF and COE rebate, choose between dealer / instant-offer / private sale, and avoid the deadline traps that cost four-figure refunds."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'COE System Explained', to: '/singapore/coe-guide' },
        { label: 'Singapore Buying Guide', to: '/singapore/buying-guide' },
        { label: 'Cost of Driving', to: '/singapore/cost-of-driving' },
        { label: 'Funding a Car Purchase', to: '/singapore/funding-car-purchase' },
      ]}
      markdown={markdown}
    />
  );
}
