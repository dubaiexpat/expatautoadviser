import { Link } from "react-router-dom";

const ACCENT = "#e63946";
const PATRICK_IMG = "/Firefly_GeminiFlash_picture%20of%20a%20white%2040%20year%20old%20clean%20shaven%20man%20in%20smart%20casual%20clothes%20with%20dark%20hai%20966416%20(1).png";

function Navbar() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", background: "rgba(8,10,18,0.95)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "20px" }}>🚗</span>
        <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: "20px", color: "#fff" }}>ExpatAutoAdviser</span>
      </Link>
      <div style={{ display: "flex", gap: "8px" }}>
        <span style={{ padding: "6px 16px", background: ACCENT, color: "#fff", borderRadius: "20px", fontSize: "13px", fontWeight: 600 }}>🇸🇬 Singapore</span>
        <Link to="/hongkong" style={{ textDecoration: "none", padding: "6px 16px", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", borderRadius: "20px", fontSize: "13px", fontWeight: 500 }}>🇭🇰 Hong Kong</Link>
      </div>
    </nav>
  );
}

function Card({ icon, title, desc, href, cta }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "28px", gap: "12px", transition: "all 0.2s ease", cursor: "pointer" }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(230,57,70,0.08)"; e.currentTarget.style.borderColor = "rgba(230,57,70,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
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

export default function Singapore() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0c12", color: "#fff", fontFamily: "system-ui,sans-serif" }}>
      <Navbar />
      {/* HERO */}
      <div style={{ paddingTop: "68px", background: "linear-gradient(180deg, #0d1117 0%, #0a0c12 100%)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 32px 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <span style={{ fontSize: "52px" }}>🇸🇬</span>
            <div>
              <h1 style={{ margin: 0, fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>Cars in Singapore</h1>
              <p style={{ margin: "8px 0 0", fontSize: "16px", color: "rgba(255,255,255,0.5)" }}>The expat guide to leasing, insuring & driving in the Lion City</p>
            </div>
          </div>
          <div style={{ background: "rgba(230,57,70,0.1)", border: "1px solid rgba(230,57,70,0.25)", borderRadius: "12px", padding: "16px 20px", fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
            <strong style={{ color: ACCENT }}>Patrick's take:</strong> Singapore has no car ownership culture for most expats — leasing is almost always cheaper and less stressful than buying. Here's everything I wish I'd known in 2019.
          </div>
        </div>
      </div>

      {/* KEY NUMBERS */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px 48px" }}>
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "28px", fontWeight: 700, marginBottom: "20px", color: "#fff" }}>Key Numbers (2025)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
          <InfoBox label="COE Cat A (≤1600cc)" value="~S$97k" sub="Valid 10 years" />
          <InfoBox label="COE Cat B (>1600cc)" value="~S$110k" sub="Valid 10 years" />
          <InfoBox label="Monthly lease (sedan)" value="S$1.8–2.5k" sub="All-in with insurance" />
          <InfoBox label="Annual road tax" value="S$742+" sub="Based on engine cc" />
          <InfoBox label="Petrol (95 RON)" value="S$2.80–3.10/L" sub="May 2025 avg" />
          <InfoBox label="ERP peak" value="S$1–6/pass" sub="Zone & time dependent" />
        </div>
      </div>

      {/* MAIN GUIDES */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px 48px" }}>
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "28px", fontWeight: 700, marginBottom: "20px", color: "#fff" }}>Expat Car Guides</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          <Card icon="🔑" title="Leasing vs Buying" desc="Why most Singapore expats lease, not buy — the COE premium, resale risk, and true cost breakdown." href="https://www.sgcarmart.com" cta="Compare options" />
          <Card icon="🛡️" title="Car Insurance" desc="The 3 main insurer groups, NCD transfers from the UK, and how to avoid getting overcharged as a newcomer." href="https://www.directasia.com" cta="Get quotes" />
          <Card icon="🅿️" title="ERP & Parking" desc="How EZ-Link and In-Vehicle Units work, carpark rates by zone, and the IU installation process." href="https://onemotoring.lta.gov.sg" cta="LTA guide" />
          <Card icon="📋" title="Driving Licence" desc="Converting your UK driving licence to a Singapore one — what to bring to the CDC and how long it takes." href="https://onemotoring.lta.gov.sg/content/onemotoring/home/driving/getting_a_driving_licence/overseas_licence_holders.html" cta="LTA process" />
          <Card icon="🔧" title="Servicing & Workshops" desc="Authorised vs independent workshops, what to budget for annual servicing, and the best independents by brand." href="https://www.carousell.sg/cars" cta="Find workshops" />
          <Card icon="🌍" title="Driving to Malaysia" desc="The VEP sticker, Causeway vs Second Link, and everything you need for a JB day trip or weekend away." href="https://www.vtl.ica.gov.sg" cta="Cross-border guide" />
        </div>
      </div>

      {/* PATRICK STRIP */}
      <div style={{ background: "#0d1117", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "48px 40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", flexWrap: "wrap" }}>
        <img src={PATRICK_IMG} alt="Patrick" style={{ width: "72px", height: "72px", borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: "3px solid rgba(230,57,70,0.4)" }} />
        <div style={{ maxWidth: "520px" }}>
          <p style={{ margin: "0 0 8px", fontFamily: "'Playfair Display',Georgia,serif", fontSize: "18px", color: "#fff", lineHeight: 1.6, fontStyle: "italic" }}>"After 3 years in Singapore I switched from buying to leasing halfway through — it was the right call. The COE system makes ownership a gamble for expats on short-term contracts."</p>
          <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Patrick · London → Singapore → Hong Kong</p>
        </div>
      </div>

      {/* FOOTER NAV */}
      <div style={{ background: "#080b11", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "28px 40px", display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
        <Link to="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "13px" }}>← Home</Link>
        <Link to="/hongkong" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "13px" }}>Hong Kong →</Link>
        <a href="https://onemotoring.lta.gov.sg" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "13px" }}>LTA OneMOtoring</a>
      </div>
    </div>
  );
}