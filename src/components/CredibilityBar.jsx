// CredibilityBar â honest trust signals based on Patrick's real experience
// NO fake testimonials. Just verifiable facts about the site and its author.

export default function CredibilityBar({ city }) {
  const accent = city === "sg" ? "#e8341c" : "#0d9488";
  const cityName = city === "sg" ? "Singapore" : "Hong Kong";

  const stats = [
    { icon: "ð§âð¼", value: "Real expat", label: "Patrick moved from London â SG â HK" },
    { icon: "ð", value: "19 guides", label: "Written from personal experience, not research" },
    { icon: "ð§®", value: "Free tools", label: "COE, FRT, cost calculators â no paywall" },
    { icon: "ð§", value: "To Trust or Not", label: "Affiliate partners shown transparently. Editorial stays independent." },
  ];

  return (
    <div style={{ background: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", padding: "40px 24px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: 13, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 28 }}>
          Why trust this guide?
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: "white", border: "1.5px solid #e5e7eb", borderRadius: 10, padding: "20px 22px", display: "flex", alignItems: "flex-start", gap: 14 }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>{s.icon}</span>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#1e3a5f", margin: "0 0 4px" }}>{s.value}</p>
                <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.5 }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Book Patrick CTA */}
        <div style={{ marginTop: 32, background: "white", border: `1.5px solid ${accent}30`, borderRadius: 12, padding: "24px 28px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, textAlign: "center" }}>
          <p style={{ fontSize: 15, fontWeight: 700, color: "#1e3a5f", margin: 0 }}>
            Want a second opinion before you commit?
          </p>
          <p style={{ fontSize: 14, color: "#6b7280", margin: 0, maxWidth: 480, lineHeight: 1.6 }}>
            Book a 30-minute call with Patrick. He's done this in both {cityName} and Singapore â
            he'll tell you exactly what he'd do in your situation.
          </p>
          <a
            href="https://calendly.com/expatautoadviser/consultation"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", padding: "12px 28px", background: accent, color: "white", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}
          >
            Book a call with Patrick â
          </a>
          <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>
            SGD $75 Â· 30 minutes Â· Zoom or Google Meet
          </p>
        </div>
      </div>
    </div>
  );
}
