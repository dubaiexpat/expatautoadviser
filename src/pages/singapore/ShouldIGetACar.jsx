import Layout from "../../components/Layout";
import PatrickTip from "../../components/PatrickTip";
import { Link } from "react-router-dom";

const AREAS = [
  { area: "Orchard / Tanglin / Novena", mrt: "Excellent", verdict: "Skip it", reason: "MRT and Grab cover almost everything. Parking is expensive and congestion is real." },
  { area: "CBD / Marina Bay / Tanjong Pagar", mrt: "Excellent", verdict: "Skip it", reason: "Very well served. Evening Grab is reliable and affordable. Parking costs are high." },
  { area: "Buona Vista / Holland Village", mrt: "Good", verdict: "Borderline", reason: "MRT accessible but the surrounding area is more spread out. Car useful for families." },
  { area: "East Coast / Katong / Marine Parade", mrt: "Moderate", verdict: "Consider it", reason: "Reasonable MRT coverage but beach and east coast access is much easier with a car." },
  { area: "Changi / Pasir Ris / Tampines", mrt: "Good (East Line)", verdict: "Get a car", reason: "Well connected by MRT but the eastern sprawl and Malaysia access make a car genuinely useful." },
  { area: "Jurong / Tuas / Boon Lay (West)", mrt: "Moderate", verdict: "Get a car", reason: "Western expansion has good MRT coverage but industrial west areas benefit from a car." },
  { area: "Sentosa / Harbourfront", mrt: "Good", verdict: "Skip it", reason: "Well connected. Sentosa Express and walkability are sufficient for most expats." },
  { area: "Seletar / Punggol / Sengkang (North-East)", mrt: "Good (NE Line)", verdict: "Borderline", reason: "NE line is good but outlying areas of the north-east benefit from a car." },
];

export default function SGShouldIGetACar() {
  return (
    <Layout city="sg" title="Should I Get a Car in Singapore? Honest Expat Advice (2025–26)" description="Should you lease a car in Singapore? The honest answer depends on where you live. MRT map, neighbourhood breakdown, real costs, and a practical decision guide.">
      <div style={{ maxWidth: 760 }}>
        <p style={{ color: "#e8341c", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Singapore</p>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: "#1e3a5f", marginBottom: 16, lineHeight: 1.2 }}>Should I Get a Car in Singapore?</h1>
        <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, marginBottom: 40 }}>The honest answer: most Singapore expats don't need one. But for some lifestyles and locations, a car changes everything. Here's a clear-eyed look at how to decide — including a neighbourhood-by-neighbourhood breakdown.</p>

        <h2 style={h2}>The case for not having a car</h2>
        <p style={body}>Singapore's public transport system is genuinely world-class. The MRT covers most of the island with high frequency and reliability, buses fill the gaps, and Grab is cheap and plentiful. For expats living within a few stops of Orchard, the CBD, or major town centres, many complete their entire assignment without ever needing a car — and are arguably better off for it.</p>
        <p style={body}>Add to that the extraordinary cost of car ownership: a Certificate of Entitlement (COE) alone currently runs <strong>SGD $104,000–$124,000</strong>, and that's before you've paid for the car itself. Even leasing — the sensible choice for expats — adds a minimum of SGD $1,400/month to your expenses. The MRT costs SGD $1.50. Grab across town costs SGD $12–$18. The maths matter.</p>

        <h2 style={h2}>When a car genuinely changes your quality of life</h2>
        <p style={body}>There are specific situations where a car shifts from luxury to genuine necessity:</p>
        <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: 24, margin: "0 0 28px" }}>
          {[
            ["Young children and school runs", "Singapore's school locations are spread across the island and rarely align with your home and workplace. Multiple drop-offs across different schools at 7:30am is genuinely difficult without a car."],
            ["Living east of Tampines or west of Jurong", "The further you are from the central MRT spine, the more a car makes sense. Pasir Ris, Changi Village, Tuas, and parts of the west are poorly served for spontaneous trips."],
            ["Regular Malaysia trips", "A Singapore-registered car makes JB crossings trivial. The causeway crossing by car (with CashCard and Autopass) takes 20–40 minutes vs 1.5+ hours by bus. If you're in Johor regularly, a car pays for itself in time alone."],
            ["Weekend lifestyle requiring flexibility", "Beach clubs, nature reserves, golf courses, and off-the-beaten-track hawker centres are often difficult or expensive to reach by Grab late on a Saturday night. If your social life is spread across the island, a car matters."],
          ].map(([title, detail]) => (
            <div key={title} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #f3f4f6" }}>
              <strong style={{ fontSize: 14, color: "#1e3a5f" }}>{title}</strong>
              <p style={{ margin: "5px 0 0", fontSize: 14, color: "#374151", lineHeight: 1.6 }}>{detail}</p>
            </div>
          ))}
        </div>

        <h2 style={h2}>Quick decision guide</h2>
        <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: 24, margin: "16px 0 32px" }}>
          {[
            { q: "Do you have children doing school runs?", lean: "Get a car" },
            { q: "Do you live within 500m of an MRT station?", lean: "Consider skipping it" },
            { q: "Do you travel to Malaysia regularly?", lean: "Get a car" },
            { q: "Will you be in Singapore for less than 18 months?", lean: "Probably skip it" },
            { q: "Is your monthly transport budget over SGD $2,000?", lean: "Get a car" },
            { q: "Do you live in the east (Changi/Tampines) or west (Jurong/Tuas)?", lean: "Lean toward getting a car" },
            { q: "Will you use Grab for evening and weekend trips frequently?", lean: "Calculate: if Grab spend > SGD $600/mth, a lease may be worth it" },
          ].map(({ q, lean }) => (
            <div key={q} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "12px 0", borderBottom: "1px solid #f3f4f6", gap: 16 }}>
              <span style={{ color: "#374151", fontSize: 15 }}>{q}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: lean.startsWith("Get") || lean.startsWith("Lean toward") ? "#e8341c" : "#6b7280", whiteSpace: "nowrap", minWidth: 120, textAlign: "right" }}>{lean}</span>
            </div>
          ))}
        </div>

        <h2 style={h2}>Neighbourhood guide: where a car makes sense</h2>
        <p style={body}>Your postcode is the single most important variable. The same lifestyle decision looks completely different in Tanjong Pagar vs Seletar vs Changi.</p>
        <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden", margin: "16px 0 36px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "#f9fafb" }}>
                <th style={th}>Area</th>
                <th style={th}>MRT access</th>
                <th style={th}>Verdict</th>
              </tr>
            </thead>
            <tbody>
              {AREAS.map(({ area, mrt, verdict, reason }) => (
                <tr key={area} style={{ borderTop: "1px solid #f3f4f6" }}
                  title={reason}>
                  <td style={{ padding: "12px 16px", color: "#374151" }}>{area}</td>
                  <td style={{ padding: "12px 16px", color: mrt === "Excellent" ? "#16a34a" : mrt === "Good" ? "#ca8a04" : "#6b7280" }}>{mrt}</td>
                  <td style={{ padding: "12px 16px", fontWeight: 600, color: verdict === "Get a car" ? "#e8341c" : verdict === "Skip it" ? "#16a34a" : "#ca8a04" }}>{verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>The real monthly cost if you do lease</h2>
        <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden", margin: "16px 0 28px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "#f9fafb" }}>
                <th style={th}>Category</th>
                <th style={th}>What's included in lease</th>
                <th style={th}>Monthly cost</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Lease rate (economy)", "Insurance, road tax, servicing, breakdown", "SGD $1,400–$1,800"],
                ["Lease rate (mid-range)", "Insurance, road tax, servicing, breakdown", "SGD $2,200–$2,800"],
                ["Petrol", "Not included", "SGD $250–$400"],
                ["ERP charges", "Not included", "SGD $80–$200 (commuter)"],
                ["Parking", "Not included — depends on building", "SGD $0–$400"],
                ["Total (economy)", "All in", "SGD $1,730–$2,400"],
                ["Total (mid-range)", "All in", "SGD $2,530–$3,400"],
              ].map(([cat, inc, cost]) => (
                <tr key={cat} style={{ borderTop: "1px solid #f3f4f6", background: cat.startsWith("Total") ? "#fef2f2" : "white" }}>
                  <td style={{ padding: "12px 16px", color: "#374151", fontWeight: cat.startsWith("Total") ? 700 : 400 }}>{cat}</td>
                  <td style={{ padding: "12px 16px", color: "#6b7280", fontSize: 13 }}>{inc}</td>
                  <td style={{ padding: "12px 16px", color: cat.startsWith("Total") ? "#e8341c" : "#1e3a5f", fontWeight: cat.startsWith("Total") ? 700 : 600 }}>{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Grab vs car: a real comparison</h2>
        <p style={body}>Many expats underestimate how much they spend on Grab. Here's a rough monthly Grab spend at different usage levels:</p>
        <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: 24, margin: "0 0 28px" }}>
          {[
            { usage: "Light user (3–4 trips/week)", spend: "SGD $200–$350/month", note: "Car is expensive at this level — stick with Grab" },
            { usage: "Moderate user (daily commute alternative, weekend trips)", spend: "SGD $400–$700/month", note: "Car starts to look competitive when you add convenience" },
            { usage: "Heavy user (family, school runs, evenings out)", spend: "SGD $800–$1,400/month", note: "Economy lease likely cheaper and far more convenient" },
          ].map(({ usage, spend, note }) => (
            <div key={usage} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "12px 0", borderBottom: "1px solid #f3f4f6", gap: 16, flexWrap: "wrap" }}>
              <div style={{ minWidth: 200 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>{usage}</div>
                <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 3 }}>{note}</div>
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#1e3a5f" }}>{spend}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>The 18-month rule</h2>
        <p style={body}>For assignments under 18 months, the economics of leasing rarely work out well once you account for the upfront setup (usually first and last month's payment), administrative hassle, and the practical difficulty of finding and returning a lease at both ends of a short assignment. Under 18 months: heavy Grab usage and occasional car rental for Malaysia trips is almost always the better answer.</p>
        <p style={body}>Over 2 years: leasing becomes compelling for most family or lifestyle situations that aren't perfectly served by the MRT. See the <Link to="/singapore/leasing-guide" style={{ color: "#e8341c" }}>full Singapore Leasing Guide</Link> for what to look for in a lease contract and typical costs by category.</p>

        <PatrickTip city="sg">"I lasted 6 months without a car. When I finally leased one, I wondered why I'd waited — but also why I hadn't used Grab more strategically during that first period. My first flat was near Tanjong Pagar — the MRT was genuinely fine. When I moved to Buona Vista the calculation changed completely. Know your postcode before you decide. And if you're on the fence, try Grab aggressively for the first month and see if you're fighting it constantly. You'll know pretty quickly."</PatrickTip>
      </div>
    </Layout>
  );
}

const h2 = { fontSize: 22, fontWeight: 700, color: "#1e3a5f", margin: "36px 0 12px" };
const body = { fontSize: 16, color: "#374151", lineHeight: 1.8, marginBottom: 16 };
const th = { padding: "12px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "#374151" };
