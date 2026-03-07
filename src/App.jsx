import { useState } from "react";

const MARKET_INFO = {
  hk: {
    name: "Hong Kong",
    currency: "HKD",
    flag: "🇭🇰",
    taxNote: "First Registration Tax (FRT) adds 40–115% to the vehicle price",
    licenseNote: "Overseas licences can be exchanged without test for most nationalities",
    parkingNote: "Monthly parking in HK Island: HK$2,000–6,000. Parking is scarce and expensive.",
    fuelNote: "Petrol ~HK$22/litre. EVs benefit from FRT waiver (up to HK$97,500).",
    insuranceNote: "Third-party insurance is mandatory. Comprehensive typically HK$5,000–15,000/yr",
    tipHeader: "Is a car worth it in HK?",
    tip: "Most expats in HK find a car unnecessary — MTR, buses and taxis cover everything cheaply. Consider a car only if you live in the New Territories or need regular cross-border trips.",
    budgetUnit: "HK$",
    budgetOptions: [
      { label: "Under HK$150k", min: 0, max: 150000 },
      { label: "HK$150k–300k", min: 150000, max: 300000 },
      { label: "HK$300k–500k", min: 300000, max: 500000 },
      { label: "HK$500k–800k", min: 500000, max: 800000 },
      { label: "HK$800k+", min: 800000, max: 9999999 },
    ],
  },
  sg: {
    name: "Singapore",
    currency: "SGD",
    flag: "🇸🇬",
    taxNote: "COE (Certificate of Entitlement) alone can cost S$80,000–120,000+. Cars are among the world's most expensive.",
    licenseNote: "Foreign licences valid for 1 year. Must convert to Singapore licence after that.",
    parkingNote: "HDB carparks ~S$80–150/month. Private parking S$150–400/month. ERP gantry charges in CBD.",
    fuelNote: "Petrol ~S$3.00/litre. EVs growing fast — charging infrastructure expanding rapidly.",
    insuranceNote: "Mandatory third-party. Comprehensive typically S$1,500–3,500/yr depending on NCD.",
    tipHeader: "Understanding COE in Singapore",
    tip: "The COE system limits car numbers. A 10-year COE is required to own a car. Current COE prices (Cat B, >1600cc) often exceed S$100,000 alone. Factor this into ALL prices shown.",
    budgetUnit: "S$",
    budgetOptions: [
      { label: "Under S$80k", min: 0, max: 80000 },
      { label: "S$80k–120k", min: 80000, max: 120000 },
      { label: "S$120k–180k", min: 120000, max: 180000 },
      { label: "S$180k–250k", min: 180000, max: 250000 },
      { label: "S$250k+", min: 250000, max: 9999999 },
    ],
  },
};

const CARS = {
  hk: [
    {
      id: 1, name: "Toyota Corolla Cross", type: "SUV", priceRange: [180000, 240000],
      fuelType: "Hybrid", seats: 5,
      pros: ["Excellent fuel economy", "Lower FRT due to hybrid status", "Practical size for HK roads", "Reliable"],
      cons: ["Less sporty", "Smaller boot", "Higher demand = longer wait"],
      bestFor: ["New Territories residents", "Family shopping trips", "Weekend escapes to Sai Kung"],
      emoji: "🚙", maintenance: "Low", tags: ["family", "hybrid", "practical", "weekend"], annualRunning: "~HK$30,000",
    },
    {
      id: 2, name: "Honda Jazz / City", type: "Hatchback", priceRange: [120000, 170000],
      fuelType: "Petrol/Hybrid", seats: 5,
      pros: ["Compact — easy to park in HK", "Affordable", "Reliable Honda quality", "Good resale"],
      cons: ["Small boot", "Noisy on highways", "Basic interior"],
      bestFor: ["City driving", "Solo expats", "Tight budget buyers"],
      emoji: "🚗", maintenance: "Low", tags: ["city", "compact", "value", "practical"], annualRunning: "~HK$20,000",
    },
    {
      id: 3, name: "Tesla Model 3", type: "Sedan", priceRange: [280000, 380000],
      fuelType: "Electric", seats: 5,
      pros: ["FRT waiver saves up to HK$97,500", "Near-zero fuel cost", "Tech-forward", "Great performance"],
      cons: ["Charging tricky in older HK buildings", "Higher upfront cost", "Software-dependent"],
      bestFor: ["Tech-savvy expats", "Home with private parking", "Long-term residents"],
      emoji: "⚡", maintenance: "Very Low", tags: ["ev", "premium", "eco", "tech"], annualRunning: "~HK$15,000",
    },
    {
      id: 4, name: "BYD Atto 3", type: "SUV", priceRange: [200000, 260000],
      fuelType: "Electric", seats: 5,
      pros: ["FRT waiver applies", "Spacious for size", "Good range (~420km)", "Value EV option"],
      cons: ["Brand still building reputation", "Smaller charging network than Tesla", "Resale value unproven"],
      bestFor: ["Eco-conscious expats", "New Territories families", "EV-curious buyers"],
      emoji: "⚡", maintenance: "Low", tags: ["ev", "family", "value", "eco"], annualRunning: "~HK$14,000",
    },
    {
      id: 5, name: "BMW 3 Series", type: "Sedan", priceRange: [380000, 550000],
      fuelType: "Petrol", seats: 5,
      pros: ["Prestige brand", "Excellent driving dynamics", "Premium feel", "Strong in HK corporate culture"],
      cons: ["High FRT cost", "Expensive maintenance", "Overkill for HK traffic jams"],
      bestFor: ["Senior executives", "Status-conscious buyers", "Car enthusiasts"],
      emoji: "🚘", maintenance: "High", tags: ["luxury", "premium", "status", "executive"], annualRunning: "~HK$55,000",
    },
    {
      id: 6, name: "Mercedes GLC", type: "SUV", priceRange: [550000, 800000],
      fuelType: "Petrol/Hybrid", seats: 5,
      pros: ["Top prestige in HK", "Spacious & comfortable", "Great for Sai Kung/Clearwater Bay weekends", "Strong brand"],
      cons: ["Very high FRT", "Expensive servicing", "Parking is a nightmare"],
      bestFor: ["Senior management", "Comfort + status families", "Long-term HK residents"],
      emoji: "🚘", maintenance: "High", tags: ["luxury", "suv", "status", "family", "weekend"], annualRunning: "~HK$70,000",
    },
  ],
  sg: [
    {
      id: 1, name: "Toyota Corolla Altis", type: "Sedan", priceRange: [110000, 140000],
      fuelType: "Hybrid", seats: 5,
      pros: ["Cat A COE applies (under 1600cc = cheaper COE)", "Excellent reliability", "Fuel efficient", "Good resale"],
      cons: ["Modest interior", "Less exciting to drive", "Very common"],
      bestFor: ["Practical families", "Daily commuters", "Value-conscious expats"],
      emoji: "🚗", maintenance: "Low", tags: ["family", "practical", "hybrid", "value"], annualRunning: "~S$12,000",
    },
    {
      id: 2, name: "Honda HR-V", type: "SUV", priceRange: [130000, 160000],
      fuelType: "Petrol", seats: 5,
      pros: ["Compact SUV perfect for SG roads", "Practical Magic Seat", "Affordable running costs", "Good boot space"],
      cons: ["Cat B COE adds significant cost", "Slightly dated design", "Average highway performance"],
      bestFor: ["Young families", "Weekend drivers", "Practical expats"],
      emoji: "🚙", maintenance: "Low", tags: ["family", "suv", "practical", "weekend"], annualRunning: "~S$13,000",
    },
    {
      id: 3, name: "Tesla Model 3", type: "Sedan", priceRange: [180000, 230000],
      fuelType: "Electric", seats: 5,
      pros: ["No road tax on EVs", "Dense SG charging network", "Cat A COE eligible (standard range)", "Low running costs"],
      cons: ["High initial outlay including COE", "Fewer service centres vs ICE brands"],
      bestFor: ["Tech-forward expats", "Condo dwellers with charging", "Long-term SG residents"],
      emoji: "⚡", maintenance: "Very Low", tags: ["ev", "tech", "premium", "eco"], annualRunning: "~S$9,000",
    },
    {
      id: 4, name: "BYD Seal", type: "Sedan", priceRange: [170000, 210000],
      fuelType: "Electric", seats: 5,
      pros: ["Strong value vs Tesla", "Stylish interior", "Good range (520km+)", "Growing BYD dealer network in SG"],
      cons: ["Brand newer in SG", "Resale value unproven", "Fewer service centres"],
      bestFor: ["EV adopters on a budget", "Tech-savvy expats", "Eco-conscious families"],
      emoji: "⚡", maintenance: "Low", tags: ["ev", "value", "eco", "tech"], annualRunning: "~S$8,500",
    },
    {
      id: 5, name: "Volvo XC40", type: "SUV", priceRange: [200000, 260000],
      fuelType: "Petrol/Electric", seats: 5,
      pros: ["Premium Scandinavian design", "Excellent safety ratings", "Comfortable for families", "EV version has no road tax"],
      cons: ["Cat B COE increases cost", "Higher servicing costs", "Limited Volvo service centres"],
      bestFor: ["Safety-conscious families", "Expats from Europe", "Premium buyers"],
      emoji: "🚘", maintenance: "Medium", tags: ["premium", "family", "suv", "safety", "eco"], annualRunning: "~S$15,000",
    },
    {
      id: 6, name: "Mercedes C-Class", type: "Sedan", priceRange: [250000, 330000],
      fuelType: "Petrol/Hybrid", seats: 5,
      pros: ["Strong resale value in SG", "Premium status", "Comfortable long drives to JB", "Good dealer network"],
      cons: ["Expensive Cat B COE", "High maintenance costs", "Depreciates with COE renewal"],
      bestFor: ["Senior executives", "Corporate lease buyers", "Status-conscious expats"],
      emoji: "🚘", maintenance: "High", tags: ["luxury", "premium", "status", "executive"], annualRunning: "~S$20,000",
    },
  ],
};

const NEEDS_OPTIONS = [
  { id: "family", label: "Family trips", emoji: "👨‍👩‍👧" },
  { id: "practical", label: "Pure practicality", emoji: "🔧" },
  { id: "weekend", label: "Weekend escapes", emoji: "🏖️" },
  { id: "status", label: "Corporate status", emoji: "💼" },
  { id: "eco", label: "Eco / sustainability", emoji: "🌿" },
  { id: "value", label: "Best value", emoji: "💰" },
  { id: "ev", label: "Go electric", emoji: "⚡" },
  { id: "tech", label: "Tech & features", emoji: "📱" },
];

export default function App() {
  const [step, setStep] = useState(0);
  const [market, setMarket] = useState(null);
  const [profile, setProfile] = useState({ name: "", duration: "" });
  const [budget, setBudget] = useState(null);
  const [needs, setNeeds] = useState([]);

  const marketData = market ? MARKET_INFO[market] : null;

  const toggleNeed = (id) =>
    setNeeds((prev) => prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]);

  const getRecommendations = () => {
    if (!market || !budget) return [];
    return CARS[market]
      .map((car) => {
        const inBudget = car.priceRange[0] <= budget.max && car.priceRange[1] >= budget.min;
        const tagMatches = needs.filter((n) => car.tags.includes(n)).length;
        return { ...car, inBudget, score: tagMatches + (inBudget ? 5 : 0) };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  };

  const recommendations = step === 4 ? getRecommendations() : [];

  const btn = (onClick, disabled, label, full = true) => (
    <button onClick={onClick} disabled={disabled}
      style={{ marginTop: 28, width: full ? "100%" : "auto", background: disabled ? "rgba(255,255,255,0.1)" : "linear-gradient(135deg,#00d2ff,#7b2ff7)", border: "none", borderRadius: 12, padding: "16px 24px", color: "#fff", fontWeight: 700, fontSize: 16, cursor: disabled ? "not-allowed" : "pointer" }}>
      {label}
    </button>
  );

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", fontFamily: "'Segoe UI', sans-serif", color: "#fff" }}>
      <div style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "16px 24px", display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 28 }}>🚘</span>
        <div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>ExpatAutoAdviser</div>
          <div style={{ fontSize: 12, opacity: 0.6 }}>Car buying guide for HK & Singapore expats</div>
        </div>
        {market && (
          <div style={{ marginLeft: "auto", background: "rgba(255,255,255,0.1)", borderRadius: 20, padding: "4px 12px", fontSize: 13 }}>
            {marketData.flag} {marketData.name}
          </div>
        )}
      </div>

      {step > 0 && (
        <div style={{ background: "rgba(255,255,255,0.1)", height: 4 }}>
          <div style={{ background: "linear-gradient(90deg, #00d2ff, #7b2ff7)", height: "100%", width: `${(step / 4) * 100}%`, transition: "width 0.4s ease" }} />
        </div>
      )}

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 20px" }}>

        {/* STEP 0: Market */}
        {step === 0 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🌏</div>
            <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Where are you based?</h1>
            <p style={{ opacity: 0.7, marginBottom: 36 }}>Car buying rules, taxes, and costs differ enormously between these two cities.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 480, margin: "0 auto" }}>
              {Object.entries(MARKET_INFO).map(([key, m]) => (
                <button key={key} onClick={() => { setMarket(key); setStep(1); }}
                  style={{ background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.15)", borderRadius: 16, padding: "32px 20px", cursor: "pointer", color: "#fff", fontSize: 16, transition: "all 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.18)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}>
                  <div style={{ fontSize: 48, marginBottom: 10 }}>{m.flag}</div>
                  <div style={{ fontWeight: 700, fontSize: 18 }}>{m.name}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 1: Profile */}
        {step === 1 && marketData && (
          <div>
            <button onClick={() => setStep(0)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", marginBottom: 20, fontSize: 14 }}>← Back</button>
            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }}>Tell us about yourself</h2>
            <p style={{ opacity: 0.6, marginBottom: 24 }}>Helps us tailor advice to your situation.</p>

            <div style={{ background: "rgba(123,47,247,0.2)", border: "1px solid rgba(123,47,247,0.4)", borderRadius: 12, padding: "16px 20px", marginBottom: 24 }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>💡 {marketData.tipHeader}</div>
              <div style={{ fontSize: 14, opacity: 0.85 }}>{marketData.tip}</div>
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              <div>
                <label style={{ display: "block", marginBottom: 6, fontSize: 13, opacity: 0.7 }}>Your name (optional)</label>
                <input value={profile.name} onChange={e => setProfile(p => ({ ...p, name: e.target.value }))} placeholder="e.g. Alex"
                  style={{ width: "100%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "12px 16px", color: "#fff", fontSize: 15, boxSizing: "border-box", outline: "none" }} />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: 10, fontSize: 13, opacity: 0.7 }}>How long are you planning to stay?</label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                  {["Under 1 year", "1–3 years", "3+ years"].map(d => (
                    <button key={d} onClick={() => setProfile(p => ({ ...p, duration: d }))}
                      style={{ background: profile.duration === d ? "linear-gradient(135deg,#00d2ff,#7b2ff7)" : "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "12px 8px", color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: 16 }}>
                <div style={{ fontWeight: 700, marginBottom: 12, fontSize: 14 }}>📋 Key facts — {marketData.flag} {marketData.name}</div>
                <div style={{ display: "grid", gap: 8 }}>
                  {[["🏛️ Tax", marketData.taxNote], ["🪪 Licence", marketData.licenseNote], ["🅿️ Parking", marketData.parkingNote], ["⛽ Fuel", marketData.fuelNote], ["🛡️ Insurance", marketData.insuranceNote]].map(([icon, text]) => (
                    <div key={icon} style={{ fontSize: 13, opacity: 0.85 }}><strong>{icon}</strong> {text}</div>
                  ))}
                </div>
              </div>
            </div>

            {btn(() => setStep(2), !profile.duration, "Continue →")}
          </div>
        )}

        {/* STEP 2: Budget */}
        {step === 2 && marketData && (
          <div>
            <button onClick={() => setStep(1)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", marginBottom: 20, fontSize: 14 }}>← Back</button>
            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }}>What's your budget?</h2>
            <p style={{ opacity: 0.6, marginBottom: 16 }}>All-in price including all taxes {market === "sg" ? "& COE" : "& FRT"}.</p>

            {profile.duration === "Under 1 year" && (
              <div style={{ background: "rgba(255,200,0,0.15)", border: "1px solid rgba(255,200,0,0.3)", borderRadius: 12, padding: "12px 16px", marginBottom: 20, fontSize: 13 }}>
                ⚠️ <strong>Short stay tip:</strong> With under 1 year planned, consider leasing or renting instead — buying and selling quickly in {marketData.name} means significant losses on taxes and depreciation.
              </div>
            )}

            <div style={{ display: "grid", gap: 12 }}>
              {marketData.budgetOptions.map(opt => (
                <button key={opt.label} onClick={() => setBudget(opt)}
                  style={{ background: budget?.label === opt.label ? "linear-gradient(135deg,rgba(0,210,255,0.25),rgba(123,47,247,0.25))" : "rgba(255,255,255,0.06)", border: budget?.label === opt.label ? "2px solid #00d2ff" : "1px solid rgba(255,255,255,0.15)", borderRadius: 12, padding: "16px 20px", color: "#fff", cursor: "pointer", textAlign: "left", fontWeight: 600, fontSize: 15 }}>
                  {opt.label}
                </button>
              ))}
            </div>

            {btn(() => setStep(3), !budget, "Continue →")}
          </div>
        )}

        {/* STEP 3: Needs */}
        {step === 3 && (
          <div>
            <button onClick={() => setStep(2)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", marginBottom: 20, fontSize: 14 }}>← Back</button>
            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }}>What matters most to you?</h2>
            <p style={{ opacity: 0.6, marginBottom: 28 }}>Select all that apply.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {NEEDS_OPTIONS.map(n => (
                <button key={n.id} onClick={() => toggleNeed(n.id)}
                  style={{ background: needs.includes(n.id) ? "linear-gradient(135deg,rgba(0,210,255,0.3),rgba(123,47,247,0.3))" : "rgba(255,255,255,0.06)", border: needs.includes(n.id) ? "2px solid #00d2ff" : "1px solid rgba(255,255,255,0.15)", borderRadius: 12, padding: "16px", color: "#fff", cursor: "pointer", fontWeight: 600, fontSize: 14, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 22 }}>{n.emoji}</span> {n.label}
                </button>
              ))}
            </div>
            {btn(() => setStep(4), false, "Show My Recommendations →")}
          </div>
        )}

        {/* STEP 4: Results */}
        {step === 4 && marketData && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>🎯</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }}>
                {profile.name ? `${profile.name}'s` : "Your"} Top Picks — {marketData.flag} {marketData.name}
              </h2>
              <p style={{ opacity: 0.6 }}>Budget: {budget?.label} · {needs.length > 0 ? needs.length + " priorities selected" : "No specific priorities"}</p>
            </div>

            <div style={{ display: "grid", gap: 20, marginBottom: 28 }}>
              {recommendations.map((car, i) => (
                <div key={car.id}
                  style={{ background: i === 0 ? "rgba(0,210,255,0.08)" : "rgba(255,255,255,0.04)", border: i === 0 ? "2px solid rgba(0,210,255,0.35)" : "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 20, position: "relative" }}>
                  {i === 0 && <div style={{ position: "absolute", top: -12, left: 20, background: "linear-gradient(135deg,#00d2ff,#7b2ff7)", borderRadius: 20, padding: "3px 4px", fontSize: 12, fontWeight: 700 }}>⭐ Best Match</div>}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 18 }}>{car.emoji} {car.name}</div>
                      <div style={{ fontSize: 13, opacity: 0.6 }}>{car.type} · {car.fuelType} · {car.seats} seats</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: car.inBudget ? "#4eff91" : "#ff9a4e" }}>
                        {marketData.budgetUnit}{car.priceRange[0].toLocaleString()}–{marketData.budgetUnit}{car.priceRange[1].toLocaleString()}
                      </div>
                      <div style={{ fontSize: 11, opacity: 0.5 }}>{car.inBudget ? "✓ Within budget" : "⚠ Above budget"}</div>
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                    <div style={{ background: "rgba(78,255,145,0.08)", borderRadius: 10, padding: 12 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#4eff91", marginBottom: 6 }}>✅ PROS</div>
                      {car.pros.map(p => <div key={p} style={{ fontSize: 12, opacity: 0.85, marginBottom: 3 }}>· {p}</div>)}
                    </div>
                    <div style={{ background: "rgba(255,100,100,0.08)", borderRadius: 10, padding: 12 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#ff9a9a", marginBottom: 6 }}>⚠️ CONS</div>
                      {car.cons.map(c => <div key={c} style={{ fontSize: 12, opacity: 0.85, marginBottom: 3 }}>· {c}</div>)}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 12, opacity: 0.7 }}>
                    <span>Est. annual running: <strong style={{ color: "#fff" }}>{car.annualRunning}</strong></span>
                    <span>Maintenance: <strong style={{ color: car.maintenance.includes("Low") ? "#4eff91" : car.maintenance === "High" ? "#ff9a9a" : "#ffd27a" }}>{car.maintenance}</strong></span>
                  </div>
                  <div style={{ marginTop: 8, fontSize: 12, opacity: 0.55 }}>👥 Best for: {car.bestFor.join(" · ")}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 14, padding: 20, marginBottom: 20 }}>
              <div style={{ fontWeight: 700, marginBottom: 14 }}>🔗 Useful Resources</div>
              <div style={{ display: "grid", gap: 8 }}>
                {(market === "hk" ? [
                  ["Transport Dept — First Registration Tax (FRT)", "https://www.td.gov.hk"],
                  ["TD — Driving Licence Exchange", "https://www.td.gov.hk/en/road_safety/driving_licence/index.html"],
                  ["Carousell Motors HK", "https://hk.carousell.com/cars"],
                  ["EV Charging — CLP EV Power", "https://www.clp.com.hk/en/sustainability/electric-vehicles"],
                ] : [
                  ["LTA — COE Bidding Information", "https://www.lta.gov.sg/content/ltagov/en/motoring/owning_a_vehicle/coe_open_bidding.html"],
                  ["OneMotoring — Licence Conversion", "https://onemotoring.lta.gov.sg"],
                  ["sgCarMart — Buy/Sell Cars", "https://www.sgcarmart.com"],
                  ["SP Group EV Charging Network", "https://www.spgroup.com.sg"],
                ]).map(([label, url]) => (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                    style={{ color: "#00d2ff", fontSize: 13, textDecoration: "none" }}>
                    → {label}
                  </a>
                ))}
              </div>
            </div>

            <button onClick={() => { setStep(0); setMarket(null); setBudget(null); setNeeds([]); setProfile({ name: "", duration: "" }); }}
              style={{ width: "100%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12, padding: "14px", color: "#fff", fontWeight: 600, fontSize: 15, cursor: "pointer" }}>
              ⚞ Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
