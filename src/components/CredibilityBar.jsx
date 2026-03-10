// CredibilityBar Ã¢ÂÂ honest trust signals based on Patrick's real experience
// NO fake testimonials. Just verifiable facts about the site and its author.

export default function CredibilityBar({ city }) {
  const accent = city === "sg" ? "#e8341c" : "#0d9488";
  const cityName = city === "sg" ? "Singapore" : "Hong Kong";

  const stats = [
    { icon: "Ã°ÂÂ§ÂÃ¢ÂÂÃ°ÂÂÂ¼", value: "Real expat", label: "Patrick moved from London Ã¢ÂÂ SG Ã¢ÂÂ HK" },
    { icon: "Ã°ÂÂÂ", value: "19 guides", label: "Written from personal experience, not research" },
    { icon: "Ã°ÂÂ§Â®", value: "Free tools", label: "COE, FRT, cost calculators Ã¢ÂÂ no paywall" },
    { icon: "Ã°ÂÂÂ§", value: "To Trust or Not", label: "Affiliate partners shown transparently. Editorial stays independent." },
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
    </div>
  );
}
