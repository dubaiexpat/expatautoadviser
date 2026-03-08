import { Link } from "react-router-dom";

const ACCENT = "#2a9d8f";
const PATRICK_IMG = "/Firefly_GeminiFlash_picture%20of%20a%20white%2040%20year%20old%20clean%20shaven%20man%20in%20smart%20casual%20clothes%20with%20dark%20hai%20966416%20(1).png";

function Navbar() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", background: "rgba(8,10,18,0.95)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "20px" }}>🚗</span>
        <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: "20px", color: "#fff" }}>ExpatAutoAdviser</span>
      </Link>
      <div style={{ display: "flex", gap: "8px" }}>
        <Link to="/singapore" style={{ textDecoration: "none", padding: "6px 16px", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", borderRadius: "20px", fontSize: "13px", fontWeight: 500 }}>🇸🇬 Singapore</Link>
        <span style={{ padding: "6px 16px", background: ACCENT, color: "#fff", borderRadius: "20px", fontSize: "13px", fontWeight: 600 }}>🇭🇰 Hong Kong</span>
      </div>
    </nav>
  );
}

function Card({ icon, title, desc, href, cta }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "28px", gap: "12px", transition: "all 0.2s ease" }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(42,157,143,0.08)"; e.currentTarget.style.borderColor = "rgba(42,157,143,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "none"; }}>
      <span style={{ fontSize: "32px" }}>{icon}</span>
      <h3 style={{ margin: 0, fontFamily: "'Playfair Display',Georgia,serif", fontSize: "20px", fontWeight: 700, color: "#fff" }}>{title}</h3>
      <p style={{ margin: 0, fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{desc}</p>
      <span style={{ marginTop: "auto", fontSize: "13px", color: ACCENT, fontWeight: 600 }}>{cta} →</span>
    </a>
  );
}

function InfoBox({ label, value, sub }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "20px 24px" }}>
      <p style={{ margin: "0 0 4px", fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</p>
      <p style={{ margin: "0 0 4px", fontFamily: "'Playfair Display',Georgia,serif", fontSize: "24px", fontWeight: 700, color: "#fff" }}>{value}</p>
      {sub && <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>{sub}</p>}
    </div>
  );
}

export default function HongKong() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0c12", color: "#fff", fontFamily: "system-ui,sans-serif" }}>
      <Navbar />
      {/* HERO */}
      <div style={{ paddingTop: "68px", background: "linear-gradient(180deg, #0d1117 0%, #0a0c12 100%)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 32px 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <span style={{ fontSize: "52px" }}>🇭🇰</span>
            <div>
              <h1 style={{ margin: 0, fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>Cars in Hong Kong</h1>
              <p style={{ margin: "8px 0 0", fontSize: "16px", color: "rgba(255,255,255,0.5)" }}>The expat guide to buying, FRT, MOT & driving in the SAR</p>
            </div>
          </div>
          <div style={{ background: "rgba(42,157,143,0.1)", border: "1px solid rgba(42,157,143,0.25)", borderRadius: "12px", padding: "16px 20px", fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
            <strong style={{ color: ACCENT }}>Patrick's take:</strong> HK is a genuine car ownership city — no COE lottery, right-hand drive, and brilliant mountain roads. The FRT and annual fees are the complexity. Here's my full breakdown.
          </div>
        </div>
      </div>

      {/* KEY NUMBERS */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px 48px" }}>
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "28px", fontWeight: 700, marginBottom: "20px", color: "#fff" }}>Key Numbers (2025)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
          <InfoBox label="FRT (First Reg. Tax)" value="43.1–115%" sub="On taxable value by band" />
          <InfoBox label="Annual licence fee" value="HK$5,512+" sub="Private car, 1500cc+" />
          <InfoBox label="MOT (every 1 or 2 yrs)" value="~HK$500–800" sub="At DVLA-approved centres" />
          <InfoBox label="Petrol (98 RON)" value="HK$20–22/L" sub="May 2025 avg" />
          <InfoBox label="Monthly parking (CBD)" value="HK$3–6k" sub="Covered private space" />
          <InfoBox label="Tunnel toll (Cross-Harbour)" value="HK$20–60" sub="By time of day" />
        </div>
      </div>

      {/* MAIN GUIDES */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px 48px" }}>
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "28px", fontWeight: 700, marginBottom: "20px", color: "#fff" }}>Expat Car Guides</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          <Card icon="🏷️" title="First Registration Tax" desc="How FRT is calculated across the 4 tax bands, how to estimate your total landed cost, and EV exemptions." href="https://www.td.gov.hk/en/public_services/licences_and_permits/vehicle_registration/index.html" cta="TD guide" />
          <Card icon="🔍" title="Buying a Used Car" desc="Where to find used cars in HK, how to run a vehicle history check, and what to inspect before signing." href="https://www.hkcartrader.com" cta="Search listings" />
          <Card icon="🛡️" title="Car Insurance" desc="Third-party vs comprehensive, insurer options, and how to transfer your UK no-claims bonus to HK." href="https://www.aia.com.hk" cta="Compare quotes" />
          <Card icon="🔧" title="Annual MOT" desc="Where to get your annual vehicle examination, what fails, and the difference between 1-year and 2-year licences." href="https://www.td.gov.hk/en/public_services/licences_and_permits/vehicle_licences/index.html" cta="Book MOT" />
          <Card icon="📋" title="Driving Licence" desc="Converting a UK licence at the Transport Department — the form, fee, and same-day turnaround process." href="https://www.td.gov.hk/en/public_services/licences_and_permits/driving_licences/index.html" cta="TD process" />
          <Card icon="🚗" title="EV in Hong Kong" desc="Waived FRT for EVs, charger network by district, and the full monthly cost comparison vs petrol." href="https://www.ev.gov.hk" cta="EV portal" />
        </div>
      </div>

      {/* PATRICK STRIP */}
      <div style={{ background: "#0d1117", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "48px 40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", flexWrap: "wrap" }}>
        <img src={PATRICK_IMG} alt="Patrick" style={{ width: "72px", height: "72px", borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: "3px solid rgba(42,157,143,0.4)" }} />
        <div style={{ maxWidth: "520px" }}>
          <p style={{ margin: "0 0 8px", fontFamily: "'Playfair Display',Georgia,serif", fontSize: "18px", color: "#fff", lineHeight: 1.6, fontStyle: "italic" }}>"HK was my first car ownership experience in Asia. The FRT calculation tripped me up at first, but once you understand the bands it's actually more predictable than Singapore's COE auction."</p>
          <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Patrick · London → Singapore → Hong Kong</p>
        </div>
      </div>

      {/* FOOTER NAV */}
      <div style={{ background: "#080b11", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "28px 40px", display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
        <Link to="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "13px" }}>← Home</Link>
        <Link to="/singapore" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "13px" }}>← Singapore</Link>
        <a href="https://www.td.gov.hk" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "13px" }}>HK Transport Dept</a>
      </div>
    </div>
  );
}