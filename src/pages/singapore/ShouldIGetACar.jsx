import Layout from "../../components/Layout";
import PatrickTip from "../../components/PatrickTip";
import { Link } from "react-router-dom";

export default function SGShouldIGetACar() {
  return (
    <Layout city="sg" title="Should I Get a Car in Singapore?" description="Honest advice for expats deciding whether to lease a car in Singapore. Covers MRT alternatives, costs, and a simple decision questionnaire.">
      <div style={{ maxWidth: 760 }}>
        <p style={{ color: "#e8341c", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Singapore</p>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: "#1e3a5f", marginBottom: 16, lineHeight: 1.2 }}>Should I Get a Car in Singapore?</h1>
        <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, marginBottom: 40 }}>The honest answer: most expats in Singapore don't need one. But for some lifestyles, a car changes everything. Here's how to work out which side of the line you're on.</p>

        <h2 style={h2}>The case for not having a car</h2>
        <p style={body}>Singapore's public transport system is genuinely world-class. The MRT covers most of the island, buses fill the gaps, and Grab is cheap and reliable. For expats living within a few stops of Orchard, the CBD, or major town centres, many go their entire assignment without ever needing a car.</p>
        <p style={body}>Add to that the extraordinary cost of car ownership — a Certificate of Entitlement (COE) alone currently runs <strong>SGD $104,000–$124,000</strong>, and that's before you've bought the actual car — and it's easy to see why many expats simply don't bother.</p>

        <h2 style={h2}>The case for leasing</h2>
        <p style={body}>If you have young children, live in the east (Changi, Pasir Ris, Tampines), the west (Jurong, Tuas, Clementi), or in areas with patchier MRT access, a car shifts from luxury to genuine quality-of-life improvement. School runs, weekend escapes to Malaysia, spontaneous dinner trips to Maxwell Food Centre — it all becomes easier.</p>
        <p style={body}>The key word for Singapore expats is <em>lease</em>, not buy. Leasing shields you entirely from COE volatility and bundles in insurance, road tax, and servicing into a single predictable monthly payment. It's almost perfectly designed for a 2–3 year expat assignment.</p>

        <h2 style={h2}>Quick decision guide</h2>
        <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: 24, margin: "16px 0 32px" }}>
          {[
            { q: "Do you have children doing school runs?", lean: "Lean: get a car" },
            { q: "Do you live within 500m of an MRT station?", lean: "Lean: skip it" },
            { q: "Do you travel to Malaysia regularly?", lean: "Lean: get a car" },
            { q: "Will you be here less than 18 months?", lean: "Lean: skip it" },
            { q: "Is your monthly budget over SGD $2,000/month for transport?", lean: "Lean: get a car" },
          ].map(({ q, lean }) => (
            <div key={q} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "12px 0", borderBottom: "1px solid #f3f4f6", gap: 16 }}>
              <span style={{ color: "#374151", fontSize: 15 }}>{q}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: lean.includes("get") ? "#e8341c" : "#6b7280", whiteSpace: "nowrap" }}>{lean}</span>
            </div>
          ))}
        </div>

        <h2 style={h2}>The real costs if you do lease</h2>
        <p style={body}>Budget roughly <strong>SGD $1,400–$1,800/month</strong> for an economy lease (Toyota Vios, Honda Jazz class), rising to <strong>SGD $2,500–$3,500/month</strong> for a mid-size like a Camry or CX-5. Most bundles include insurance, road tax, and servicing. You'll add ERP charges and petrol on top.</p>
        <p style={body}>See the <Link to="/singapore/leasing-guide" style={{ color: "#e8341c" }}>full Singapore Leasing Guide</Link> for a detailed breakdown and what to look for in a lease contract.</p>

        <PatrickTip city="sg">"I lasted 6 months without a car in Singapore. When I finally leased one, I wondered why I'd waited — but also why I hadn't just used Grab more. For my first 6 months I was in an Airbnb near Tanjong Pagar. The MRT was fine. When I moved to Buona Vista the calculation changed. Know your postcode before you decide."</PatrickTip>
      </div>
    </Layout>
  );
}
const h2 = { fontSize: 22, fontWeight: 700, color: "#1e3a5f", margin: "36px 0 12px" };
const body = { fontSize: 16, color: "#374151", lineHeight: 1.8, marginBottom: 16 };