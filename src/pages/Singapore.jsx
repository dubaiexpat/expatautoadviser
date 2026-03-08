import { Link } from "react-router-dom";

export default function Singapore() {
  const guides = [
    { to: "/singapore/should-i-get-a-car", emoji: "🤔", title: "Should I Get a Car?", desc: "Honest answer: depends on where you live and how long you're staying. Start here.", label: "Help me decide →" },
    { to: "/singapore/leasing-guide", emoji: "📋", title: "Leasing Guide", desc: "How leasing works, what's bundled, typical costs, and how to choose a lease company.", label: "Read the guide →" },
    { to: "/singapore/insurance-guide", emoji: "🛡️", title: "Insurance Guide", desc: "Why insurance is almost always bundled in leases — and what to check when it's not.", label: "Read the guide →" },
    { to: "/singapore/licence-conversion", emoji: "🪪", title: "Licence Conversion", desc: "Which nationalities convert without a test, step-by-step Traffic Police process, costs.", label: "Read the guide →" },
    { to: "/singapore/ev-guide", emoji: "⚡", title: "EV Guide", desc: "EVs are rising fast in Singapore lease fleets. EEAI incentives, charging, popular models.", label: "Read the guide →" },
    { to: "/singapore/calculators", emoji: "🧮", title: "Calculators & Tools", desc: "Lease cost estimator, COE buy vs lease comparison, ERP estimator, licence eligibility checker.", label: "Use the tools →" },
    { to: "/singapore/garage-finder", emoji: "🔧", title: "Garage Finder", desc: "Find expat-friendly, English-speaking garages and workshops near your postcode.", label: "Find a garage →" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#fafaf9", fontFamily: "Inter, sans-serif" }}>
      {/* Nav */}
      <nav style={{ background: "#1e3a5f", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: 700, fontSize: 18 }}>ExpatAutoAdviser</Link>
        <div style={{ display: "flex", gap: 12 }}>
          <span style={{ background: "#e8341c", color: "white", padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>🇸🇬 Singapore</span>
          <Link to="/hongkong" style={{ background: "rgba(255,255,255,0.15)", color: "white", padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>🇭🇰 Hong Kong</Link>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2d5282 100%)", padding: "60px 32px 48px", textAlign: "center" }}>
        <p style={{ color: "#e8341c", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Singapore</p>
        <h1 style={{ color: "white", fontSize: 48, fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>Cars in Singapore</h1>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.6 }}>The expat guide to leasing, insuring and driving in the Lion City</p>
        <div style={{ background: "rgba(232,52,28,0.15)", border: "1px solid rgba(232,52,28,0.4)", borderRadius: 10, padding: "16px 24px", maxWidth: 620, margin: "0 auto", textAlign: "left" }}>
          <span style={{ color: "#e8341c", fontWeight: 700, fontSize: 14 }}>Patrick's take: </span>
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 14, lineHeight: 1.6 }}>Singapore has no car ownership culture for most expats — leasing is almost always cheaper and less stressful than buying. The COE system makes ownership a gamble on short-term contracts. Here's everything I wish I'd known in 2019.</span>
        </div>
      </div>

      {/* Key numbers bar */}
      <div style={{ background: "#1e3a5f", padding: "20px 32px", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
        {[["COE (Cat A)", "~SGD $104k"], ["Monthly lease (sedan)", "SGD $1.8–2.5k"], ["Petrol", "~SGD $3.10/L"], ["Annual road tax", "SGD $742+"]].map(([label, val]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
            <div style={{ color: "white", fontWeight: 700, fontSize: 16, marginTop: 2 }}>{val}</div>
          </div>
        ))}
      </div>

      {/* Guides grid */}
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "52px 24px" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, color: "#1e3a5f", marginBottom: 8 }}>All Singapore Guides</h2>
        <p style={{ color: "#6b7280", fontSize: 15, marginBottom: 36 }}>Everything you need, in one place — written from experience, not guesswork.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 20 }}>
          {guides.map(({ to, emoji, title, desc, label }) => (
            <Link key={to} to={to} style={{ textDecoration: "none" }}>
              <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 12, padding: 28, height: "100%", boxSizing: "border-box", transition: "box-shadow 0.15s", cursor: "pointer", display: "flex", flexDirection: "column" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(30,58,95,0.12)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{emoji}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1e3a5f", margin: "0 0 10px" }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, margin: "0 0 20px", flexGrow: 1 }}>{desc}</p>
                <span style={{ color: "#e8341c", fontWeight: 600, fontSize: 14 }}>{label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "24px 32px", textAlign: "center" }}>
        <p style={{ color: "#9ca3af", fontSize: 13, margin: 0 }}>
          ExpatAutoAdviser · <Link to="/" style={{ color: "#9ca3af" }}>Switch city</Link>
        </p>
      </footer>
    </div>
  );
}