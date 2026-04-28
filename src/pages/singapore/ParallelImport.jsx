import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/parallel-import-cars-singapore-uk-expats.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80';

export default function SGParallelImport() {
  return (
    <MarkdownArticlePage
      city="sg"
      title="Parallel Import Cars in Singapore: AD vs PI for UK Expats"
      description="When parallel imports save you real money in Singapore — and when they don't. Honest cost differential vs authorised dealers, the five trade-offs (warranty, financing, resale, service, spec), and the decision framework for UK expats."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'Singapore Buying Guide', to: '/singapore/buying-guide' },
        { label: 'COE Explained', to: '/singapore/coe-guide' },
        { label: 'Car Loans (MAS LTV)', to: '/singapore/car-loans' },
        { label: 'Funding a Car Purchase', to: '/singapore/funding-car-purchase' },
      ]}
      markdown={markdown}
    />
  );
}
