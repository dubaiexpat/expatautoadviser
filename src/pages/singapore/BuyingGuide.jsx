import Layout from '../../components/Layout';
import AffiliateBox from '../../components/AffiliateBox';
import FAQ from '../../components/FAQ';

const h1 = { margin: "0 0 12px", fontSize: "clamp(26px,4vw,38px)", fontWeight: 700, color: "#1a1a2e", fontFamily: "'Playfair Display',Georgia,serif", lineHeight: 1.2 };
const h2 = { margin: "36px 0 12px", fontSize: "clamp(18px,2.5vw,24px)", fontWeight: 700, color: "#1a1a2e" };
const body = { margin: "0 0 16px", fontSize: 15, color: "#374151", lineHeight: 1.75 };
const note = { background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 8, padding: "14px 18px", margin: "16px 0", fontSize: 14, color: "#92400e", lineHeight: 1.6 };
const warn = { background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "14px 18px", margin: "16px 0", fontSize: 14, color: "#991b1b", lineHeight: 1.6 };

// Real car image — a BMW 3 Series parked in Singapore
const HERO_IMG = "https://images.unsplash.com/photo-1602010143890-8dbfa316b5d6?w=1200&q=80";

const faqItems = [
  { q: "Can I buy a car in Singapore on a work pass?", a: "Yes. There is no citizenship or PR requirement to buy a car in Singapore. EP, SP, and DP holders can all purchase a vehicle. You will need a local bank account for financing." },
  { q: "What is a COE and how do I bid for one?", a: "A Certificate of Entitlement (COE) is a government-issued permit to own a car for 10 years. You bid through your bank or dealer via the LTA bidding system, which runs twice a month. Most dealers handle this on your behalf for a fee." },
  { q: "Can I renew the COE after 10 years?", a: "Yes — you can renew for another 5 or 10 years by paying the Prevailing Quota Premium (PQP), which is a 3-month moving average of COE prices. Renewing is often cheaper than buying new, especially if COE prices are high." },
  { q: "What happens to my car when I leave Singapore?", a: "You can sell it (locally or via parallel export), scrap it for the PARF rebate (if the COE is under 10 years old), or transfer it to another buyer. Timing matters: if COE prices are high when you leave, resale value can be strong." },
  { q: "Is financing available for expats?", a: "Yes, but typically requires 12+ months remaining on your pass. Loan-to-value (LTV) is capped at 60% for cars with OMV above SGD $20,000. You will need a minimum 40% down payment. Some banks require a local guarantor." },
];

export default function SGBuyingGuide() {
  return (
    <Layout city="sg" active="Buying Guide" relatedLinks={[{ label: 'Should I Get a Car?', to: '/singapore/should-i-get-a-car' }, { label: 'Insurance Guide', to: '/singapore/insurance-guide' }, { label: 'Licence Conversion', to: '/singapore/licence-conversion' }, { label: 'Cost Calculator', to: '/singapore/calculators' }]}>
      {/* Hero */}
      <div style={{ width: "100%", height: "clamp(180px,30vw,340px)", overflow: "hidden", borderRadius: "0 0 12px 12px", marginBottom: 32, position: "relative" }}>
        <img src={HERO_IMG} alt="BMW parked in Singapore" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,46,0.55) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: 20, left: 24 }}>
          <span style={{ background: "#e63946", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 6 }}>Singapore</span>
        </div>
      </div>

      <p style={{ margin: "0 0 6px", fontSize: 12, fontWeight: 700, color: "#e63946", textTransform: "uppercase", letterSpacing: "0.1em" }}>Singapore</p>
      <h1 style={h1}>Buying a Car in Singapore as an Expat</h1>
      <p style={{ ...body, fontSize: 17, color: "#6b7280" }}>Leasing is usually the smarter choice for expats — but if you're here for the long term, ownership can make financial sense. Here's what you need to know.</p>

      <div style={warn}>
        <strong>Read this first:</strong> Buying in Singapore is expensive. A mid-range car (Toyota Camry or similar) typically costs SGD $180,000–$220,000 all-in once you add COE, ARF, and registration fees. Make sure you've compared the total cost of ownership against leasing before committing.
      </div>

      <h2 style={h2}>Why expats do (and don't) buy</h2>
      <p style={body}>Most expats on short assignments (under 3 years) should lease — the COE resale risk and upfront capital outlay rarely make sense. But if you're planning to stay 5+ years, own a business, or have a family that needs reliable transport at odd hours, ownership starts to look more attractive. You also avoid mileage caps and the restrictions that come with leases.</p>

      <h2 style={h2}>The true cost of buying: what you're actually paying</h2>
      <div style={{ overflowX: "auto", margin: "16px 0 28px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, background: "white", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden" }}>
          <thead>
            <tr style={{ background: "#f9fafb" }}>
              <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, color: "#374151", borderBottom: "1px solid #e5e7eb" }}>Cost Component</th>
              <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, color: "#374151", borderBottom: "1px solid #e5e7eb" }}>Typical Amount</th>
              <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, color: "#374151", borderBottom: "1px solid #e5e7eb" }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Car price (OMV)", "SGD $25k–$60k+", "Open Market Value set by Singapore Customs"],
              ["COE (Category B)", "SGD $95k–$125k", "Fluctuates every 2 weeks — check LTA"],
              ["ARF (Additional Registration Fee)", "SGD $17k–$60k+", "100–320% of OMV depending on value"],
              ["Excise duty", "~20% of OMV", ""],
              ["GST (9%)", "On OMV + duties", ""],
              ["Dealer margin & fees", "SGD $5k–$15k", "Varies by brand and dealer"],
              ["Insurance (year 1)", "SGD $1,500–$4,000", "Higher for new drivers in SG"],
            ].map(([item, amt, note], i) => (
              <tr key={i} style={{ borderBottom: "1px solid #f3f4f6", background: i % 2 === 0 ? "white" : "#fafafa" }}>
                <td style={{ padding: "11px 16px", color: "#374151" }}>{item}</td>
                <td style={{ padding: "11px 16px", fontWeight: 600, color: "#1a1a2e" }}>{amt}</td>
                <td style={{ padding: "11px 16px", color: "#6b7280", fontSize: 13 }}>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={h2}>COE: the thing that makes Singapore unique</h2>
      <p style={body}>The Certificate of Entitlement is a government quota system that controls the number of vehicles on the road. Every new car purchase requires a COE, which is valid for 10 years. COE prices are set by open bidding and have ranged from SGD $40,000 to over $130,000 in recent years — they are volatile and unpredictable.</p>
      <p style={body}>Key things to understand: COE is not transferable between buyers. When you sell a car, the buyer is buying the car plus the remaining COE. PARF (Preferential Additional Registration Fee) rebate is a partial refund you get when you scrap a car before the COE expires — it reduces the effective cost of ownership if you leave Singapore before the 10 years is up.</p>

      <div style={note}>
        <strong>PARF rebate tip:</strong> If you scrap a car within the first 5 years, you get a 75% PARF rebate on the ARF paid. Between 5–9 years it steps down. This is why many expats who buy deliberately plan their ownership period around the rebate schedule.
      </div>

      <h2 style={h2}>What expats actually buy</h2>
      <p style={body}>The most popular choices among expats in Singapore tend to be fuel-efficient saloons and SUVs with strong resale value. Japanese and Korean brands hold value better than European equivalents due to lower maintenance costs and dealer network. Electric vehicles are growing fast — Hyundai Ioniq 5 and Tesla Model 3 are increasingly common among expats who plan to stay 4–5 years.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, margin: "20px 0 32px" }}>
        {[
          { car: "Toyota Camry", type: "Mid-range saloon", price: "SGD $195k–$215k", why: "Best resale, reliable, low running costs" },
          { car: "Honda CR-V", type: "Family SUV", price: "SGD $210k–$240k", why: "Popular with families, spacious" },
          { car: "BMW 3 Series", type: "Premium saloon", price: "SGD $250k–$290k", why: "Status, performance, dealer support" },
          { car: "Hyundai Ioniq 5", type: "Electric SUV", price: "SGD $215k–$245k", why: "Growing expat choice, charging improving" },
        ].map(({ car, type, price, why }) => (
          <div key={car} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "16px 18px" }}>
            <p style={{ margin: "0 0 4px", fontWeight: 700, color: "#1a1a2e", fontSize: 15 }}>{car}</p>
            <p style={{ margin: "0 0 6px", fontSize: 12, color: "#e63946", fontWeight: 600 }}>{type}</p>
            <p style={{ margin: "0 0 6px", fontSize: 14, fontWeight: 600, color: "#374151" }}>{price}</p>
            <p style={{ margin: 0, fontSize: 13, color: "#6b7280" }}>{why}</p>
          </div>
        ))}
      </div>

      <h2 style={h2}>The buying process, step by step</h2>
      <p style={body}>Buying a car in Singapore is done almost entirely through dealers. There is no private bidding system you have to manage yourself — dealers handle the COE bidding on your behalf. The process typically takes 4–8 weeks from deposit to collection.</p>
      <ol style={{ margin: "0 0 24px 20px", paddingLeft: 0, fontSize: 15, color: "#374151", lineHeight: 2, listStyle: 'none' }}>
        {[
          "Choose your car and dealer — get quotes from 2–3 dealers for the same model",
          "Agree a price and pay a booking deposit (usually SGD $500–$2,000, refundable within cooling-off period)",
          "Arrange financing if needed — dealer can assist or use your own bank",
          "Dealer submits COE bid on your behalf in the next available exercise",
          "If bid succeeds, pay the remaining balance; if not, dealer rebids at next exercise",
          "Register the vehicle with LTA — dealer handles paperwork",
          "Arrange insurance before collection day",
          "Collect your car — inspect carefully before signing off",
        ].map((step, i) => (
          <li key={i} style={{ marginBottom: 8 }}><strong style={{ color: "#e63946" }}>{i+1}.</strong> {step}</li>
        ))}
      </ol>

      <AffiliateBox
        city="sg"
        type="buying"
        title="Singapore Car Dealers — Expat Recommended"
        partners={[
          { name: "Inchcape Singapore", badge: "OFFICIAL IMPORTER", desc: "Official importer for Toyota, Lexus, and Volkswagen. Strong expat support, English-speaking staff.", url: "#", cta: "Enquire now" },
          { name: "Wearnes Automotive", badge: "PREMIUM", desc: "Official dealer for BMW and MINI. Competitive COE pricing, strong after-sales.", url: "#", cta: "Enquire now" },
          { name: "Carro.co", badge: "USED", desc: "Singapore's largest used car marketplace. Certified pre-owned with warranty, competitive pricing.", url: "#", cta: "Browse cars" },
        ]}
      />

      <FAQ items={faqItems} city="sg" />
    </Layout>
  );
}
