import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/wise-vs-bank-transfer-car-deposits-asia.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1200&q=80';

export default function SGWiseVsBank() {
  return (
    <MarkdownArticlePage
      city="sg"
      title="Wise vs Bank Transfer for Car Deposits: How UK Expats Get £25-80k to Asia (2026)"
      description="What your UK high-street bank actually charges (most of which is invisible), what Wise actually charges, and the timing playbook for transferring £25-80k to Singapore or Hong Kong for a car deposit."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'Funding a Car Purchase (SG)', to: '/singapore/funding-car-purchase' },
        { label: 'COE Explained', to: '/singapore/coe-guide' },
        { label: 'HK First Registration Tax', to: '/hong-kong/frt-tax-explained' },
        { label: 'HK Buying Guide', to: '/hong-kong/buying-guide' },
      ]}
      markdown={markdown}
    />
  );
}
