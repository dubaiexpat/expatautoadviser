import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/converting-overseas-driving-licence-hong-kong.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1545033425-4e71fc54a759?w=1200&q=80';

export default function HKLicenceConversion() {
  return (
    <MarkdownArticlePage
      city="hk"
      title="Converting an Overseas Driving Licence in Hong Kong: Expat Guide"
      description="Step-by-step guide to converting a foreign driving licence in Hong Kong: Direct Issue List countries, photo specs, processing times, medical checks, and IDP rules."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'Buying Guide', to: '/hong-kong/buying-guide' },
        { label: 'Insurance Guide', to: '/hong-kong/insurance-guide' },
        { label: 'Should I Get a Car?', to: '/hong-kong/should-i-get-a-car' },
      ]}
      markdown={markdown}
    />
  );
}
