import { useState } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const LEASE_DATA = {
  economy:  { min: 1400, max: 1800, examples: "Toyota Vios, Honda Jazz, Mitsubishi Attrage", included: ["Comprehensive insurance","Road tax","Scheduled servicing","24/7 roadside assistance"] },
  midrange: { min: 2200, max: 2800, examples: "Toyota Camry, Mazda CX-5, Honda CR-V", included: ["Comprehensive insurance","Road tax","Scheduled servicing","24/7 roadside assistance"] },
  premium:  { min: 3200, max: 4500, examples: "BMW 3 Series, Mercedes C-Class, Audi A4", included: ["Comprehensive insurance","Road tax","Scheduled servicing","24/7 roadside assistance","Replacement car"] },
  luxury:   { min: 4500, max: 6500, examples: "BMW 5 Series, Mercedes E-Class, Audi A6", included: ["Comprehensive insurance","Road tax","Scheduled servicing","24/7 roadside assistance","Replacement car","Valet servicing"] },
};

const COE_PRICE = 110000;
const ARF_RATE = 1.0; // simplified: 100% of OMV up to $20k
const PETROL_MONTHLY = 300; // estimated petrol only

const SG_COUNTRIES = [
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
  { country: "Hong Kong", eligible: true },
  { country: "South Africa", eligible: true },
  { country: "India", eligible: false },
  { country: "China", eligible: false },
  { country: "Thailand", eligible: false },
  { country: "Indonesia", eligible: false },
  { country: "Philippines", eligible: false },
  { country: "Malaysia", eligible: false },
  { country: "Other", eligible: false },
];

const accent = "#e8341c";
const tabs = ["Lease Cost Estimator", "COE Buy vs Lease", "Licence Eligibility"];

export default function SGCalculators() {
  const [activeTab, setActiveTab] = useState(0);

  // Lease estimator state
  const [category, setCategory] = useState("midrange");
  const [duration, setDuration] = useState(36);

  // COE comparison state
  const [carOMV, setCarOMV] = useState(60000);
  const [leaseCat, setLeaseCat] = useState("midrange");

  // Licence state
  const [country, setCountry] = useState("United Kingdom");

  const lease = LEASE_DATA[category];
  const leaseMonthlyMid = Math.round((lease.min + lease.max) / 2);
  const leaseTotalMin = lease.min * duration;
  const leaseTotalMax = lease.max * duration;

  // COE calculation (simplified)
  const arf = Math.min(carOMV, 20000) * 1.0 + Math.max(0, Math.min(carOMV - 20000, 30000)) * 1.4 + Math.max(0, Math.min(carOMV - 50000, 0)) * 1.9;
  const regFee = 220;
  const totalNewCar = carOMV + COE_PRICE + arf + regFee;
  const depreciationPer10yr = totalNewCar - carOMV * 0.6; // rough residual
  const ownershipCost3yr = (depreciationPer10yr / 10) * 3 + PETROL_MONTHLY * 36 + 2400 * 3 + 1800 * 3; // depreciation + petrol + insurance + road tax
  const leaseCompareMid = LEASE_DATA[leaseCat];
  const leaseTotal3yr = leaseCompareMid.min * 36;

  const selectedCountry = SG_COUNTRIES.find(c => c.country === country);

  return (
    <Layout city="sg" title="Singapore Car Calculators & Tools for Expats" description="Free calculators for expats in Singapore: lease cost estimator, COE buy vs lease comparison, and driving licence eligibility checker.">
      <div style={{ maxWidth: 800 }}>
        <p style={{ color: accent, fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Singapore</p>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: "#1e3a5f", marginBottom: 12, lineHeight: 1.2 }}>Singapore Car Calculators & Tools</h1>
        <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, marginBottom: 32 }}>Three tools to help you figure out costs, compare leasing vs buying, and check whether your foreign licence converts directly.</p>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: "2px solid #e5e7eb", marginBottom: 36, gap: 0, overflowX: "auto" }}>
          {tabs.map((t, i) => (
            <button key={t} onClick={() => setActiveTab(i)} style={{ padding: "12px 20px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: activeTab === i ? 700 : 400, color: activeTab === i ? accent : "#6b7280", borderBottom: activeTab === i ? `3px solid ${accent}` : "3px solid transparent", marginBottom: -2, whiteSpace: "nowrap", transition: "color 0.15s" }}>
              {t}
            </button>
          ))}
        </div>

        {/* TAB 1: Lease Cost Estimator */}
        {activeTab === 0 && (
          <div>
            <h2 style={h2}>Lease Cost Estimator</h2>
            <p style={body}>Select a car category and lease duration to see typical monthly costs and what's bundled in Singapore leases.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, margin: "24px 0" }}>
              <div>
                <label style={label}>Car category</label>
                <select value={category} onChange={e => setCategory(e.target.value)} style={select}>
                  <option value="economy">Economy</option>
                  <option value="midrange">Mid-range</option>
                  <option value="premium">Premium</option>
                  <option value="luxury">Luxury</option>
                </select>
                <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 6 }}>{lease.examples}</p>
              </div>
              <div>
                <label style={label}>Lease duration</label>
                <select value={duration} onChange={e => setDuration(Number(e.target.value))} style={select}>
                  <option value={12}>12 months</option>
                  <option value={24}>24 months</option>
                  <option value={36}>36 months</option>
                </select>
              </div>
            </div>

            {/* Result card */}
            <div style={{ background: "#fff5f5", border: `2px solid ${accent}`, borderRadius: 12, padding: 28, margin: "24px 0" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 13, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Monthly cost</div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "#1e3a5f" }}>SGD ${lease.min.toLocaleString()}–${lease.max.toLocaleString()}</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 13, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Total over {duration} months</div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "#1e3a5f" }}>SGD ${leaseTotalMin.toLocaleString()}–${leaseTotalMax.toLocaleString()}</div>
                </div>
              </div>
              <div style={{ borderTop: "1px solid #fecaca", paddingTop: 20 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 10 }}>Typically bundled in this category:</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {lease.included.map(item => (
                    <span key={item} style={{ background: "white", border: "1px solid #fca5a5", borderRadius: 20, padding: "4px 12px", fontSize: 13, color: "#374151" }}>✓ {item}</span>
                  ))}
                </div>
                <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["ERP charges", "Petrol", "Parking", "Traffic fines"].map(item => (
                    <span key={item} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 20, padding: "4px 12px", fontSize: 13, color: "#9ca3af" }}>✗ {item}</span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background: "#f0f9ff", border: "1px solid #bae6fd", borderRadius: 10, padding: 20 }}>
              <p style={{ margin: 0, fontSize: 14, color: "#0c4a6e", lineHeight: 1.6 }}>
                <strong>Budget tip:</strong> Add SGD $250–$400/month for petrol and SGD $80–$150/month for ERP on typical commuting patterns. Most expats budget SGD $200–$400/month for parking if their building doesn't include it.
              </p>
            </div>

            <p style={{ fontSize: 14, color: "#9ca3af", marginTop: 20 }}>Estimates based on 2025–26 Singapore lease market. Actual rates vary by company, car age, and lease terms. <Link to="/singapore/leasing-guide" style={{ color: accent }}>See the full leasing guide →</Link></p>
          </div>
        )}

        {/* TAB 2: COE Buy vs Lease */}
        {activeTab === 1 && (
          <div>
            <h2 style={h2}>COE Buy vs Lease — 3-Year Comparison</h2>
            <p style={body}>Buying a car in Singapore means paying for a Certificate of Entitlement (COE) on top of the car price. This tool shows the true 3-year cost of buying vs leasing an equivalent vehicle.</p>

            <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 10, padding: 20, margin: "16px 0 28px" }}>
              <p style={{ margin: 0, fontSize: 14, color: "#92400e", lineHeight: 1.6 }}>
                <strong>Note:</strong> The current COE price (Cat A, cars up to 1600cc) is approximately <strong>SGD $110,000</strong>. This tool uses that figure. COE prices fluctuate at fortnightly bidding — check the LTA website for the latest price.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, margin: "24px 0" }}>
              <div>
                <label style={label}>Car open market value (OMV, SGD)</label>
                <input type="number" value={carOMV} onChange={e => setCarOMV(Number(e.target.value))} style={{ ...select, fontFamily: "inherit" }} min={15000} max={200000} step={5000} />
                <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 6 }}>OMV is on the car's import papers. Economy sedans: ~SGD $20–35k OMV</p>
              </div>
              <div>
                <label style={label}>Equivalent lease category</label>
                <select value={leaseCat} onChange={e => setLeaseCat(e.target.value)} style={select}>
                  <option value="economy">Economy</option>
                  <option value="midrange">Mid-range</option>
                  <option value="premium">Premium</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
            </div>

            {/* Comparison result */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "24px 0" }}>
              <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 12, padding: 24 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: accent, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>Buying (3 years)</div>
                {[
                  ["Car OMV", `SGD $${carOMV.toLocaleString()}`],
                  ["COE (Cat A, est.)", `SGD $${COE_PRICE.toLocaleString()}`],
                  ["ARF (registration duty)", `SGD $${Math.round(Math.min(carOMV, 20000) + Math.max(0, carOMV - 20000) * 1.4).toLocaleString()}`],
                  ["Registration fee", "SGD $220"],
                  ["Insurance (3 yrs est.)", "SGD $5,400"],
                  ["Road tax (3 yrs est.)", "SGD $4,800"],
                  ["Petrol (3 yrs est.)", "SGD $10,800"],
                  ["Maintenance (3 yrs)", "SGD $3,600"],
                ].map(([label, val]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #fecaca", fontSize: 14 }}>
                    <span style={{ color: "#374151" }}>{label}</span>
                    <span style={{ fontWeight: 600, color: "#1e3a5f" }}>{val}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0 0", fontSize: 15, fontWeight: 700 }}>
                  <span style={{ color: "#374151" }}>Less: Est. resale value</span>
                  <span style={{ color: "#16a34a" }}>– SGD ${Math.round(totalNewCar * 0.55).toLocaleString()}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, borderTop: "2px solid #f87171", marginTop: 8, fontSize: 18, fontWeight: 800 }}>
                  <span style={{ color: "#1e3a5f" }}>Net 3-yr cost</span>
                  <span style={{ color: accent }}>SGD ${Math.round(totalNewCar + 24600 - totalNewCar * 0.55).toLocaleString()}</span>
                </div>
              </div>

              <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: 12, padding: 24 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>Leasing (36 months)</div>
                {[
                  ["Monthly rate (min est.)", `SGD $${LEASE_DATA[leaseCat].min.toLocaleString()}`],
                  ["× 36 months", ""],
                  ["Insurance", "✓ Included"],
                  ["Road tax", "✓ Included"],
                  ["Servicing", "✓ Included"],
                  ["Roadside assist", "✓ Included"],
                  ["Petrol (3 yrs est.)", "SGD $10,800"],
                ].map(([l, v]) => (
                  <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #bbf7d0", fontSize: 14 }}>
                    <span style={{ color: "#374151" }}>{l}</span>
                    <span style={{ fontWeight: 600, color: v === "✓ Included" ? "#16a34a" : "#1e3a5f" }}>{v}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, borderTop: "2px solid #86efac", marginTop: 8, fontSize: 18, fontWeight: 800 }}>
                  <span style={{ color: "#1e3a5f" }}>Total 3-yr cost</span>
                  <span style={{ color: "#16a34a" }}>SGD ${(leaseTotal3yr + 10800).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div style={{ background: "#f0f9ff", border: "1px solid #bae6fd", borderRadius: 10, padding: 20 }}>
              <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 600, color: "#0c4a6e" }}>Verdict for expats</p>
              <p style={{ margin: 0, fontSize: 14, color: "#0c4a6e", lineHeight: 1.6 }}>For most 2–3 year assignments, leasing wins on cost, simplicity, and zero COE price risk. The calculation only tips toward buying if you're staying 4+ years <em>and</em> COE prices remain stable. Most expats who buy regret it when they come to sell.</p>
            </div>
          </div>
        )}

        {/* TAB 3: Licence Eligibility */}
        {activeTab === 2 && (
          <div>
            <h2 style={h2}>Driving Licence Eligibility Checker</h2>
            <p style={body}>Singapore allows direct licence conversion (no test required) for holders of licences from approved countries. Select yours to check.</p>

            <div style={{ margin: "24px 0 32px" }}>
              <label style={label}>Country your licence was issued in</label>
              <select value={country} onChange={e => setCountry(e.target.value)} style={{ ...select, maxWidth: 320 }}>
                {SG_COUNTRIES.map(c => (
                  <option key={c.country} value={c.country}>{c.country}</option>
                ))}
              </select>
            </div>

            {selectedCountry && (
              <div style={{ background: selectedCountry.eligible ? "#f0fdf4" : "#fef2f2", border: `2px solid ${selectedCountry.eligible ? "#86efac" : "#fca5a5"}`, borderRadius: 12, padding: 28, margin: "16px 0 28px" }}>
                <div style={{ fontSize: 24, marginBottom: 12 }}>{selectedCountry.eligible ? "✅" : "❌"}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#1e3a5f", marginBottom: 12 }}>
                  {selectedCountry.eligible ? "Direct conversion eligible" : "Test required"}
                </div>
                <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151", lineHeight: 1.6 }}>
                  {selectedCountry.eligible
                    ? `Holders of a ${country} driving licence can convert directly to a Singapore licence at Traffic Police without sitting a driving test, provided the licence has been held for at least one year and is still valid.`
                    : `Holders of a ${country} driving licence must pass the Singapore driving test (theory + practical) to obtain a local licence. You may drive on your foreign licence for up to 12 months after arriving, or with an IDP from your home country.`}
                </p>
                {selectedCountry.eligible && (
                  <div style={{ background: "white", borderRadius: 8, padding: 20 }}>
                    <p style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 600, color: "#374151" }}>What you'll need:</p>
                    {["Valid foreign driving licence (original)", "Passport (original + copy)", "FIN card or Employment Pass (original)", "Completed TP form from Traffic Police website", "SGD $50 fee (approx.)", "Licence must have been held for at least 12 months"].map(item => (
                      <div key={item} style={{ display: "flex", gap: 8, padding: "5px 0", fontSize: 14, color: "#374151" }}>
                        <span style={{ color: "#16a34a", flexShrink: 0 }}>✓</span> {item}
                      </div>
                    ))}
                    <p style={{ margin: "16px 0 0", fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>Processing is typically same-day at Traffic Police HQ (10 Irrawaddy Road, Singapore 329560). Book an appointment online at <strong>onemotoring.lta.gov.sg</strong>.</p>
                  </div>
                )}
              </div>
            )}

            <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 10, padding: 20 }}>
              <p style={{ margin: 0, fontSize: 14, color: "#92400e", lineHeight: 1.6 }}>
                <strong>Important:</strong> The eligibility list is reviewed periodically by the Traffic Police. Always confirm current requirements at <strong>traffic.police.gov.sg</strong> before booking your appointment. Licences must be in English or accompanied by a certified translation.
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
