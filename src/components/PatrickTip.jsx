export default function PatrickTip({ city, children }) {
  const accentColor = city === "hk" ? "#0d9488" : "#e8341c";
  return (
    <div style={{ background: "#fffbeb", border: `1px solid ${accentColor}30`, borderLeft: `4px solid ${accentColor}`, borderRadius: 8, padding: "20px 24px", margin: "40px 0 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <span style={{ fontSize: 22 }}>💬</span>
        <strong style={{ fontSize: 14, color: accentColor, textTransform: "uppercase", letterSpacing: "0.05em" }}>Patrick's Take</strong>
      </div>
      <p style={{ margin: 0, color: "#374151", lineHeight: 1.7, fontSize: 15, fontStyle: "italic" }}>{children}</p>
    </div>
  );
}