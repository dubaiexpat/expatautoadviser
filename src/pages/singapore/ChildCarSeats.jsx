import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/child-car-seats-isofix-laws-singapore.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1600664356348-10686526af4f?w=1200&q=80';

export default function SGChildCarSeats() {
  return (
    <MarkdownArticlePage
      city="sg"
      title="Child Car Seats and ISOFIX Laws in Singapore: What Expats Need to Know"
      description="Singapore's child restraint rules: the 1.35m height threshold, approved standards (ECE R44/R129, FMVSS 213), S$150 fine, ISOFIX basics, and the taxi vs PHV exemption."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'Should I Get a Car?', to: '/singapore/should-i-get-a-car' },
        { label: 'Buying Guide', to: '/singapore/buying-guide' },
        { label: 'Insurance Guide', to: '/singapore/insurance-guide' },
      ]}
      markdown={markdown}
    />
  );
}
