import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/best-family-cars-singapore-uk-expats.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80';

export default function SGBestFamilyCars() {
  return (
    <MarkdownArticlePage
      city="sg"
      title="Best Family Cars in Singapore for UK Expats: 2026 Realistic Buyer's Guide"
      description="Realistic 2026 family-car options for UK expats in Singapore — three budget tiers from S$160K to S$340K, top picks per band, used-car alternatives, and the trade-offs that matter for expat families."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'COE Bidding Strategy', to: '/singapore/coe-bidding-strategy' },
        { label: 'Funding a Car Purchase', to: '/singapore/funding-car-purchase' },
        { label: 'Singapore Car Loans', to: '/singapore/car-loans' },
        { label: 'Singapore Used-Car Buying Guide', to: '/singapore/buying-guide' },
        { label: 'Road Tax & Vehicle Fees', to: '/singapore/road-tax-vehicle-fees' },
      ]}
      markdown={markdown}
    />
  );
}
