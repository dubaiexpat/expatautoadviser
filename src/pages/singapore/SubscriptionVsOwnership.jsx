import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/car-subscription-vs-ownership-singapore.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1619190375868-3adc7d6c51ff?w=1200&q=80';

export default function SGSubscriptionVsOwnership() {
  return (
    <MarkdownArticlePage
      city="sg"
      title="Car Subscription vs Ownership in Singapore: What Expats Should Know"
      description="Car subscription vs ownership in Singapore: how Carro Leap and Drive Lah work, what's typically bundled, illustrative cost comparison, and when each option suits expats."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'Buying Guide', to: '/singapore/buying-guide' },
        { label: 'Leasing Guide', to: '/singapore/leasing-guide' },
        { label: 'Car Loans', to: '/singapore/car-loans' },
      ]}
      markdown={markdown}
    />
  );
}
