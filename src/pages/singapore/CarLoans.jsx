import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/car-loans-for-expats-in-singapore-mas-ltv-rules.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1600191763437-4262cefe23ab?w=1200&q=80';

export default function SGCarLoans() {
  return (
    <MarkdownArticlePage
      city="sg"
      title="Car Loans for Expats in Singapore: MAS LTV Rules and What You Need"
      description="How car loans work for expats in Singapore: MAS LTV caps (70%/60%), typical lender practice, TDSR considerations, EP requirements, and indicative 2026 rate ranges."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'Buying Guide', to: '/singapore/buying-guide' },
        { label: 'Subscription vs Ownership', to: '/singapore/subscription-vs-ownership' },
        { label: 'Cost of Driving (ERP)', to: '/singapore/cost-of-driving' },
      ]}
      markdown={markdown}
    />
  );
}
