import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/hong-kong-tunnel-tolls-explained.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1580930091960-eddbf16456e1?w=1200&q=80';

export default function HKTunnelTolls() {
  return (
    <MarkdownArticlePage
      city="hk"
      title="Hong Kong Tunnel Tolls Explained: What UK Expats Pay to Cross the Harbour (2026)"
      description="Hong Kong's three cross-harbour tunnels under the Time-Varying Tolls system, plus Tai Lam, Tate's Cairn, Lion Rock and Aberdeen — what UK expats actually pay each month, with worked commute examples and HKeToll setup."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'Hong Kong Parking Costs', to: '/hong-kong/parking-costs' },
        { label: 'Hong Kong Buying Guide', to: '/hong-kong/buying-guide' },
        { label: 'Hong Kong New Arrival Guide', to: '/hong-kong/new-arrival' },
        { label: 'Hong Kong Insurance Guide', to: '/hong-kong/insurance-guide' },
      ]}
      markdown={markdown}
    />
  );
}
