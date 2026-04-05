import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/car-insurance-hong-kong-expats.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1517449905587-f80695d63356?w=1200&q=80';

export default function HKInsuranceGuide() {
  return (
    <MarkdownArticlePage
      city="hk"
      title="Car Insurance in Hong Kong for Expats: A Practical Guide"
      description="Third-party vs comprehensive car insurance in Hong Kong, typical cost ranges, how NCD transfers work, eligibility, and a checklist for comparing providers as an expat."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'Buying Guide', to: '/hong-kong/buying-guide' },
        { label: 'FRT Explained', to: '/hong-kong/frt-tax-explained' },
        { label: 'Licence Conversion', to: '/hong-kong/licence-conversion' },
      ]}
      markdown={markdown}
    />
  );
}
