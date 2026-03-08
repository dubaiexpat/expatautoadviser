import { useState } from "react";
import Layout from "../../components/Layout";

const accent = "#0d9488";

// FRT progressive bands (HKD)
function calcFRT(taxableValue, isEV) {
  let frt = 0;
  const bands = [
    { limit: 150000, rate: 0.40 },
    { limit: 150000, rate: 0.75 },
    { limit: 200000, rate: 1.00 },
    { limit: Infinity, rate: 1.15 },
  ];
  let remaining = taxableValue;
  for (const { limit, rate } of bands) {
    const chunk = Math.min(remaining, limit);
    frt += chunk * rate;
    remaining -= chunk;
    if (remaining <= 0) break;
  }
  const concession = isEV ? Math.min(97500, frt) : 0;
  return { frt, concession, finalFRT: Math.max(0, frt - concession) };
}

const HK_COUNTRIES = [
  { country: "United Kingdom", eligible: true },
  { country: "Australia", eligible: true },
  { country: "New Zealand", eligible: true },
  { country: "United States", eligible: true },
  { country: "Canada", eligible: true },
  { country: "Ireland", eligible: true },
  { country: "Germany", eligible: true },
  { country: "France", eligible: true },
  { country: "Netherlands", eligible: true },
  { country: "Belgium", eligible: true },
  { country: "Sweden", eligible: true },
  { country: "Norway", eligible: true },
  { country: "Denmark", eligible: true },
  { country: "Finland", eligible: true },
  { country: "Switzerland", eligible: true },
  { country: "Austria", eligible: true },
  { country: "Japan", eligible: true },
  { country: "South Korea", eligible: true },
  { country: "Singapore", eligible: true },
  { country: "South Africa", eligible: true },
  { country: "China (mainland)", eligible: false },
  { country: "India", eligible: false },
  { country: "Thailand", eligible: false },
  { country: "Indonesia", eligible: false },
  { country: "Philippines", eligible: false },
  { country: "Other", eligible: false },
];

const tabs = ["FRT Calculator", "Monthly Running Cost", "Licence Eligibility"];

export default function HKCalculators() {
  const [activeTab, setActiveTab] = useState(0);

  // FRT state
  const [taxableValue, setTaxableValue] = useState(300000);
  const [isEV, setIsEV] = useState(false);

  // Running cost state
  const [carSize, setCarSize] = useState("medium");
  const [area, setArea] = useState("urban");
  const [weeklyKm, setWeeklyKm] = useState(200);

  // Licence state
  const [country, setCountry] = useState("United Kingdom");

  // FRT results
  const { frt, concession, finalFRT } = calcFRT(taxableValue, isEV);
  const totalCarCost = taxableValue + finalFRT;

  // Running cost
  const fuelConsumption = { small: 8, medium: 11, large: 14 }[carSize]; // L/100km
  const fuelPrice = 25; // HKD/litre
  const monthlyKm = weeklyKm * 4.3;
  const monthlyFuel = Math.round((monthlyKm / 100) * fuelConsumption * fuelPrice);
  const parkingCost = { urban: 4500, suburban: 2500, nt: 1200 }[area];
  const areaLabel = { urban: "Urban (HK Island / Kowloon CBD)", suburban: "Suburban (New Territories, mid-tier)", nt: "Rural NT / New Territories" }[area];
  const insuranceMthly = Math.round({ small: 7000, medium: 9000, large: 12000 }[carSize] / 12);
  const maintenanceMthly = Math.round({ small: 800, medium: 1200, large: 1800 }[carSize]);
  const roadTaxMthly = Math.round({ small: 4500, medium: 6500, large: 9000 }[carSize] / 12);
  const tunnelEst = area === "urban" ? 600 : area === "suburban" ? 400 : 200;
  const totalRunning = monthlyFuel + parkingCost + insuranceMthly + maintenanceMthly + roadTaxMthly + tunnelEst;

  const selectedCountry = HK_COUNTRIES.find(c => c.country === country);

  return (
    <Layout city="hk" title="Hong Kong Car Calculators & Tools for Expats" description="Free calculators for expats in Hong Kong: FRT tax calculator, monthly running cost estimator, and driving licence eligibility checker.">
      <div style={{ maxWidth: 800 }}>
        <p style={{ color: accent, fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Hong Kong</p>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: "#1e3a5f", marginBottom: 12, lineHeight: 1.2 }}>Hong Kong Car Calculators & Tools</h1>
        <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, marginBottom: 32 }}>Three tools to help you understand the real costs of owning a car in Hong Kong — FRT, monthly running costs, and licence conversion eligibility.</p>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: "2px solid #e5e7eb", marginBottom: 36, gap: 0, overflowX: "auto" }}>
          {tabs.map((t, i) => (
            <button key={t} onClick={() => setActiveTab(i)} style={{ padding: "12px 20px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: activeTab === i ? 700 : 400, color: activeTab === i ? accent : "#6b7280", borderBottom: activeTab === i ? `3px solid ${accent}` : "3px solid transparent", marginBottom: -2, whiteSpace: "nowrap", transition: "color 0.15s" }}>
              {t}
            </button>
          ))}
        </div>

        {/* TAB 1: FRT Calculator */}
        {activeTab === 0 && (
          <div>
            <h2 style={h2}>FRT Calculator</h2>
            <p style={body}>Hong Kong's First Registration Tax (FRT) is a progressive tax on new vehicles. Enter the car's taxable value (typically the manufacturer's suggested retail price minus dealer discount, as assessed by the Transport Department) to calculate the FRT.</p>

            <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: 10, padding: 20, margin: "0 0 28px" }}>
              <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 700, color: "#166534" }}>How taxable value works</p>
              <p style={{ margin: 0, fontSize: 14, color: "#166534", lineHeight: 1.6 }}>The FRT taxable value is <em>not</em> the advertised car price — it's the Transport Department's assessed value based on cost, insurance and freight (CIF). For most new cars, it runs 60–80% of the on-road price before FRT. Always ask the dealer for the TD taxable value specifically.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, margin: "0 0 24px" }}>
              <div>
                <label style={label}>Taxable value (HKD)</label>
                <input type="number" value={taxableValue} onChange={e => setTaxableValue(Number(e.target.value))} style={{ ...select, fontFamily: "inherit" }} min={50000} max={5000000} step={10000} />
                <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 6 }}>Toyota RAV4: ~HKD $320k · BMW 3 Series: ~HKD $450k</p>
              </div>
              <div>
                <label style={label}>Vehicle type</label>
                <select value={isEV ? "ev" : "petrol"} onChange={e => setIsEV(e.target.value === "ev")} style={select}>
                  <option value="petrol">Petrol / Hybrid</option>
                  <option value="ev">Electric Vehicle (EV)</option>
                </select>
                {isEV && <p style={{ fontSize: 13, color: "#0d9488", marginTop: 6 }}>EV concession: up to HKD $97,500 under One-for-One Replacement Scheme</p>}
              </div>
            </div>

            {/* FRT breakdown */}
            <div style={{ background: "white", border: "1.5px solid #d1fae5", borderRadius: 12, padding: 28, margin: "0 0 20px" }}>
              <h3 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700, color: "#1e3a5f" }}>FRT breakdown</h3>
              {[
                { band: "First HKD $150,000", rate: "40%", value: Math.min(taxableValue, 150000), tax: Math.min(taxableValue, 150000) * 0.40 },
                { band: "HKD $150,001 – $300,000", rate: "75%", value: Math.max(0, Math.min(taxableValue - 150000, 150000)), tax: Math.max(0, Math.min(taxableValue - 150000, 150000)) * 0.75 },
                { band: "HKD $300,001 – $500,000", rate: "100%", value: Math.max(0, Math.min(taxableValue - 300000, 200000)), tax: Math.max(0, Math.min(taxableValue - 300000, 200000)) * 1.00 },
                { band: "Above HKD $500,000", rate: "115%", value: Math.max(0, taxableValue - 500000), tax: Math.max(0, taxableValue - 500000) * 1.15 },
              ].map(({ band, rate, value, tax }) => (
                value > 0 ? (
                  <div key={band} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #f0fdf4", gap: 12 }}>
                    <div>
                      <div style={{ fontSize: 14, color: "#374151" }}>{band}</div>
                      <div style={{ fontSize: 13, color: "#9ca3af" }}>@ {rate} on HKD ${value.toLocaleString()}</div>
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#1e3a5f", textAlign: "right" }}>HKD ${Math.round(tax).toLocaleString()}</div>
                  </div>
                ) : null
              ))}

              <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderTop: "1px solid #e5e7eb", marginTop: 4 }}>
                <span style={{ fontSize: 14, color: "#374151" }}>FRT subtotal</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#1e3a5f" }}>HKD ${Math.round(frt).toLocaleString()}</span>
              </div>
              {isEV && concession > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
                  <span style={{ fontSize: 14, color: "#0d9488" }}>EV concession (One-for-One)</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#0d9488" }}>– HKD ${Math.round(concession).toLocaleString()}</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0 0", borderTop: "2px solid #0d9488", marginTop: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 800, color: "#1e3a5f" }}>Final FRT payable</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: accent }}>HKD ${Math.round(finalFRT).toLocaleString()}</span>
              </div>
            </div>

            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 10, padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 15, color: "#374151" }}>Taxable value</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "#1e3a5f" }}>HKD ${taxableValue.toLocaleString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid #e5e7eb" }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#1e3a5f" }}>Estimated total car cost (before dealer discount)</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: accent }}>HKD ${Math.round(totalCarCost).toLocaleString()}</span>
              </div>
              <p style={{ margin: "12px 0 0", fontSize: 13, color: "#9ca3af" }}>Add: Annual Licence Fee (HKD $3,718–$9,144), registration fee (HKD $1,000 est.), and any dealer charges.</p>
            </div>
          </div>
        )}

        {/* TAB 2: Running Cost */}
        {activeTab === 1 && (
          <div>
            <h2 style={h2}>Monthly Running Cost Estimator</h2>
            <p style={body}>Hong Kong has some of the highest car running costs in the world. Petrol runs at HKD $24–27/litre and parking in urban areas can exceed HKD $5,000/month. This estimator shows what you'll realistically spend each month.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, margin: "24px 0" }}>
              <div>
                <label style={label}>Car size</label>
                <select value={carSize} onChange={e => setCarSize(e.target.value)} style={select}>
                  <option value="small">Small (e.g. Honda Jazz, Toyota Yaris)</option>
                  <option value="medium">Medium (e.g. Toyota RAV4, Honda CR-V)</option>
                  <option value="large">Large / Premium (e.g. BMW 5 Series, Audi Q7)</option>
                </select>
              </div>
              <div>
                <label style={label}>Where you'll park (primary)</label>
                <select value={area} onChange={e => setArea(e.target.value)} style={select}>
                  <option value="urban">Urban — HK Island / Kowloon CBD</option>
                  <option value="suburban">Suburban — New Territories, Sai Kung, South Side</option>
                  <option value="nt">Rural NT / building parking included</option>
                </select>
              </div>
              <div>
                <label style={label}>Weekly kilometres driven (est.)</label>
                <input type="number" value={weeklyKm} onChange={e => setWeeklyKm(Number(e.target.value))} style={{ ...select, fontFamily: "inherit" }} min={50} max={1000} step={25} />
                <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 6 }}>Average expat in HK drives 150–300 km/week</p>
              </div>
            </div>

            {/* Results */}
            <div style={{ background: "white", border: `2px solid ${accent}`, borderRadius: 12, padding: 28, margin: "24px 0" }}>
              <h3 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700, color: "#1e3a5f" }}>Monthly cost breakdown</h3>
              {[
                ["⛽ Petrol", `${Math.round(monthlyKm)} km @ HKD $25/L, ${fuelConsumption}L/100km`, monthlyFuel],
                ["🅿️ Parking", areaLabel, parkingCost],
                ["🛡️ Insurance (est.)", "Comprehensive, based on car size", insuranceMthly],
                ["🔧 Maintenance", "Servicing, tyres, wear items", maintenanceMthly],
                ["📋 Road tax", "Annual licence fee ÷ 12", roadTaxMthly],
                ["🚇 Tunnels & tolls", "Estimated based on area", tunnelEst],
              ].map(([item, note, cost]) => (
                <div key={item} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "10px 0", borderBottom: "1px solid #f0fdf4", gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#374151" }}>{item}</div>
                    <div style={{ fontSize: 13, color: "#9ca3af" }}>{note}</div>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#1e3a5f", textAlign: "right", flexShrink: 0 }}>HKD ${cost.toLocaleString()}</div>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0 0", borderTop: "2px solid #0d9488", marginTop: 8 }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: "#1e3a5f" }}>Total monthly running cost</span>
                <span style={{ fontSize: 22, fontWeight: 800, color: accent }}>HKD ${totalRunning.toLocaleString()}</span>
              </div>
              <p style={{ margin: "12px 0 0", fontSize: 14, color: "#6b7280" }}>
                Equivalent to approximately <strong>HKD ${Math.round(totalRunning * 12).toLocaleString()} per year</strong> — excluding car purchase or finance.
              </p>
            </div>

            <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 10, padding: 20 }}>
              <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 700, color: "#92400e" }}>What this doesn't include</p>
              <p style={{ margin: 0, fontSize: 14, color: "#92400e", lineHeight: 1.6 }}>Car purchase price, FRT, registration costs, or finance repayments. Also excludes depreciation, which typically runs HKD $30,000–$80,000/year for a mid-range car depending on age and model.</p>
            </div>
          </div>
        )}

        {/* TAB 3: Licence Eligibility */}
        {activeTab === 2 && (
          <div>
            <h2 style={h2}>Driving Licence Eligibility Checker</h2>
            <p style={body}>Hong Kong allows direct licence exchange for holders of licences from approved countries. Select your country to check whether you need a test or can convert directly.</p>

            <div style={{ margin: "24px 0 32px" }}>
              <label style={label}>Country your licence was issued in</label>
              <select value={country} onChange={e => setCountry(e.target.value)} style={{ ...select, maxWidth: 320 }}>
                {HK_COUNTRIES.map(c => (
                  <option key={c.country} value={c.country}>{c.country}</option>
                ))}
              </select>
            </div>

            {selectedCountry && (
              <div style={{ background: selectedCountry.eligible ? "#f0fdf4" : "#fef2f2", border: `2px solid ${selectedCountry.eligible ? "#86efac" : "#fca5a5"}`, borderRadius: 12, padding: 28, margin: "16px 0 28px" }}>
                <div style={{ fontSize: 24, marginBottom: 12 }}>{selectedCountry.eligible ? "✅" : "❌"}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#1e3a5f", marginBottom: 12 }}>
                  {selectedCountry.eligible ? "Direct exchange eligible" : "Test required"}
                </div>
                <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151", lineHeight: 1.6 }}>
                  {selectedCountry.eligible
                    ? `Holders of a valid ${country} driving licence can exchange it for a Hong Kong licence at the Transport Department without taking a driving test, provided you are a Hong Kong resident and your licence has been valid for at least 12 months.`
                    : `Holders of a ${country} driving licence must pass the Hong Kong driving test (written knowledge test + practical) to obtain a local licence. You can drive on your foreign licence for up to 12 months from arrival, or use an International Driving Permit (IDP).`}
                </p>
                {selectedCountry.eligible && (
                  <div style={{ background: "white", borderRadius: 8, padding: 20 }}>
                    <p style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 600, color: "#374151" }}>Documents required:</p>
                    {[
                      "Valid foreign driving licence (original)",
                      "Hong Kong Identity Card (HKID)",
                      "Passport (if HKID shows foreign nationality)",
                      "Completed TD51 application form",
                      "One recent passport-size photo",
                      "Fee: approximately HKD $900 (10-year licence)",
                    ].map(item => (
                      <div key={item} style={{ display: "flex", gap: 8, padding: "5px 0", fontSize: 14, color: "#374151" }}>
                        <span style={{ color: "#16a34a", flexShrink: 0 }}>✓</span> {item}
                      </div>
                    ))}
                    <p style={{ margin: "16px 0 0", fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>
                      Apply at any <strong>Transport Department Licensing Office</strong>. Processing is same-day for a temporary licence; the permanent plastic card takes approximately 2 weeks by post. Book an appointment at <strong>td.gov.hk</strong>.
                    </p>
                  </div>
                )}
              </div>
            )}

            <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 10, padding: 20 }}>
              <p style={{ margin: 0, fontSize: 14, color: "#92400e", lineHeight: 1.6 }}>
                <strong>Important:</strong> Eligibility rules can change. Always confirm current requirements on the <strong>Transport Department website (td.gov.hk)</strong> before visiting. Non-English licences require a certified translation or you must bring the original IDP alongside.
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

const h2 = { fontSize: 22, fontWeight: 700, color: "#1e3a5f", margin: "36px 0 12px" };
const body = { fontSize: 16, color: "#374151", lineHeight: 1.8, marginBottom: 16 };
const label = { display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" };
const select = { width: "100%", padding: "10px 14px", border: "1.5px solid #d1d5db", borderRadius: 8, fontSize: 15, color: "#1e3a5f", background: "white", outline: "none" };
