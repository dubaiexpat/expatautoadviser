import MarkdownArticlePage from '../../components/MarkdownArticlePage';
import markdown from '../../content/funding-car-purchase-singapore-uk-expat.md?raw';

const HERO_IMG = 'https://images.unsplash.com/photo-1518544866330-95a2bd61b9d8?w=1200&q=80';

export default function SGFundingCarPurchase() {
  return (
    <MarkdownArticlePage
      city="sg"
      title="Funding a Car Purchase in Singapore: A UK Expat Money-Transfer Guide"
      description="The full Singapore car cost stack for UK expats — COE, ARF, GST, excise — plus how to actually move £35-80k from a UK bank to Singapore without losing thousands to FX margins."
      heroImage={HERO_IMG}
      relatedLinks={[
        { label: 'COE Explained', to: '/singapore/coe-guide' },
        { label: 'Buying Guide', to: '/singapore/buying-guide' },
        { label: 'Car Loans (MAS LTV Rules)', to: '/singapore/car-loans' },
        { label: 'Should I Get a Car?', to: '/singapore/should-i-get-a-car' },
        { label: 'Wise vs Bank Transfer', to: '/singapore/wise-vs-bank-transfer-car-deposits' },
      ]}
      markdown={markdown}
    />
  );
}
