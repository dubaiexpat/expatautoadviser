import { useState } from "react";

const SG_MAP = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Singapore_location_map.svg/800px-Singapore_location_map.svg.png";
const HK_MAP = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Hong_Kong_location_map.svg/800px-Hong_Kong_location_map.svg.png";

function CityPanel({ city, flag, mapUrl, tagline, accent, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.location.href = href}
      style={{
        flex: hovered ? "0 0 58%" : "0 0 50%",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        minHeight: "calc(100vh - 62px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Blurred map background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${mapUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: hovered ? "blur(2px) brightness(0.28)" : "blur(5px) brightness(0.2)",
        transform: "scale(1.1)",
        transition: "filter 0.4s ease",
      }} />
      {/* Colour tint */}
      <div style={{
        position: "absolute", inset: 0,
        background: hovered ? accent + "44" : accent + "18",
        transition: "background 0.4s ease",
      }} />
      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: "28px",
        padding: "48px",
        textAlign: "center",
      }}>
        {/* Big flag */}
        <div style={{
          fontSize: "clamp(90px, 11vw, 140px)",
          lineHeight: 1,
          filter: "drop-shadow(0 6px 32px rgba(0,0,0,0.6))",
          transform: hovered ? "scale(1.1) translateY(-6px)" : "scale(1)",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}>
          {flag}
        </div>
        {/* City name */}
        <h2 style={{
          margin: 0,
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(38px, 4.5vw, 68px)",
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "0.02em",
          textShadow: "0 2px 20px rgba(0,0,0,0.7)",
        }}>
          {city}
        </h2>
        <p style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: "clamp(14px, 1.4vw, 17px)",
          color: "rgba(255,255,255,0.78)",
          maxWidth: "300px",
          lineHeight: 1.6,
          textShadow: "0 1px 8px rgba(0,0,0,0.6)",
          opacity: hovered ? 1 : 0.7,
          transition: "opacity 0.3s ease",
        }}>
          {tagline}
        </p>
        {/* CTA */}
        <div style={{
          padding: "14px 38px",
          borderRadius: "40px",
          background: hovered ? "#ffffff" : "rgba(255,255,255,0.12)",
          color: hovered ? accent : "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontWeight: 600,
          fontSize: "14px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          border: "2px solid rgba(255,255,255,0.6)",
          transition: "all 0.3s ease",
          backdropFilter: "blur(8px)",
          transform: hovered ? "translateY(-2px)" : "none",
        }}>
          I'm in {city} →
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0c12" }}>

      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: "62px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 36px",
        background: "rgba(8,10,18,0.85)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "20px" }}>🚗</span>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700, fontSize: "17px", color: "#fff",
          }}>ExpatAutoAdviser</span>
        </div>
        <span style={{
          fontSize: "12px", color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.1em", textTransform: "uppercase",
        }}>
          🇸🇬 Singapore &nbsp;·&nbsp; 🇭🇰 Hong Kong
        </span>
      </nav>

      {/* Split hero */}
      <div style={{
        display: "flex",
        minHeight: "100vh",
        paddingTop: "62px",
      }}>
        <CityPanel
          city="Singapore"
          flag="🇸🇬"
          mapUrl={SG_MAP}
          tagline="Leasing, insurance & everything you need to get moving in the Lion City."
          accent="#e63946"
          href="/singapore"
        />
        {/* Divider */}
        <div style={{
          width: "1px",
          background: "rgba(255,255,255,0.12)",
          flexShrink: 0,
          zIndex: 10,
        }} />
        <CityPanel
          city="Hong Kong"
          flag="🇭🇰"
          mapUrl={HK_MAP}
          tagline="Buying, FRT, MOT & everything you need to own a car in the SAR."
          accent="#2a9d8f"
          href="/hongkong"
        />
      </div>

      {/* Patrick strip */}
<img
  src="/patrick.png"
  alt="Patrick"
  style={{
    width: "84px",
    height: "84px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center top",
    border: "3px solid rgba(255,255,255,0.15)",
    flexShrink: 0,
  }}
/>
        <div style={{ maxWidth: "540px" }}>
          <p style={{
            margin: "0 0 10px",
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(16px, 1.8vw, 20px)",
            color: "#ffffff",
            lineHeight: 1.6,
            fontStyle: "italic",
          }}>
            "Hi, I'm Patrick. I moved from London to Singapore in 2019, then on to Hong Kong.
            I spent way too long figuring out cars in both cities — this is what I wish had existed."
          </p>
          <p style={{
            margin: 0, fontSize: "12px",
            color: "rgba(255,255,255,0.32)",
            letterSpacing: "0.06em", textTransform: "uppercase",
          }}>
            London → Singapore → Hong Kong · Expat since 2019
          </p>
        </div>
      </div>

      {/* Newsletter bar */}
      <div style={{
        background: "#080b11",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "44px 40px",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: "18px", textAlign: "center",
      }}>
        <p style={{
          margin: 0, fontSize: "15px",
          color: "rgba(255,255,255,0.58)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          maxWidth: "460px", lineHeight: 1.5,
        }}>
          Monthly: COE updates, FRT news, parking tips. None of the noise.
        </p>
        <div style={{ display: "flex", width: "100%", maxWidth: "420px" }}>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              flex: 1, padding: "13px 18px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRight: "none", borderRadius: "6px 0 0 6px",
              color: "#fff", fontSize: "14px", outline: "none",
            }}
          />
          <button style={{
            padding: "13px 26px", background: "#e63946",
            color: "#fff", border: "none",
            borderRadius: "0 6px 6px 0",
            fontWeight: 600, fontSize: "13px",
            cursor: "pointer", letterSpacing: "0.05em",
          }}>
            Subscribe
          </button>
        </div>
        <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.2)" }}>
          No spam · Unsubscribe anytime ·{" "}
          <a href="/" style={{ color: "rgba(255,255,255,0.28)", textDecoration: "none" }}>
            Switch city
          </a>
        </p>
      </div>

    </div>
  );
}
