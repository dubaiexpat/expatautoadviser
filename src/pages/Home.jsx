import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SG_MAP = "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1400&q=80";
const HK_MAP = "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1400&q=80";
const PATRICK_IMG = "/Firefly_GeminiFlash_picture%20of%20a%20white%2040%20year%20old%20clean%20shaven%20man%20in%20smart%20casual%20clothes%20with%20dark%20hai%20966416%20(1).png";

function CityPanel({ city, flag, mapUrl, tagline, accent, to, isMobile }) {
  const [hovered, setHovered] = useState(false);

  if (isMobile) {
    return (
      <Link to={to} style={{ textDecoration: "none", display: "block", position: "relative", overflow: "hidden", height: "260px" }}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(" + mapUrl + ")", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.6)", transform: "scale(1.03)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, " + accent + "dd 0%, " + accent + "33 60%, transparent 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "0 24px 28px", textAlign: "center", gap: "10px" }}>
          <span style={{ fontSize: "48px", lineHeight: 1 }}>{flag}</span>
          <h2 style={{ margin: 0, fontFamily: "'Playfair Display',Georgia,serif", fontSize: "36px", fontWeight: 700, color: "#fff", textShadow: "0 2px 16px rgba(0,0,0,0.8)" }}>{city}</h2>
          <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.9)", lineHeight: 1.5, textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}>{tagline}</p>
          <div style={{ padding: "10px 28px", borderRadius: "40px", background: "#fff", color: accent, fontWeight: 700, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            I'm in {city} →
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={to} style={{ textDecoration: "none", flex: hovered ? "0 0 58%" : "0 0 50%", position: "relative", overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1)" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(" + mapUrl + ")", backgroundSize: "cover", backgroundPosition: "center", filter: hovered ? "blur(0px) brightness(0.55)" : "blur(1px) brightness(0.65)", transform: "scale(1.03)", transition: "filter 0.4s ease" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, " + accent + "cc 0%, " + accent + "22 50%, transparent 100%)" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: hovered ? "translate(-50%,-60%) scale(1.15)" : "translate(-50%,-60%) scale(1)", fontSize: "clamp(80px,10vw,130px)", lineHeight: 1, filter: "drop-shadow(0 6px 32px rgba(0,0,0,0.7))", transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)", zIndex: 2 }}>{flag}</div>
      <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "0 40px 52px", textAlign: "center", width: "100%" }}>
        <h2 style={{ margin: 0, fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(32px,4vw,58px)", fontWeight: 700, color: "#fff", textShadow: "0 2px 24px rgba(0,0,0,0.8)" }}>{city}</h2>
        <p style={{ margin: 0, fontSize: "clamp(13px,1.3vw,16px)", color: "rgba(255,255,255,0.9)", maxWidth: "280px", lineHeight: 1.6, textShadow: "0 1px 8px rgba(0,0,0,0.9)", opacity: hovered ? 1 : 0.75, transition: "opacity 0.3s ease" }}>{tagline}</p>
        <div style={{ padding: "13px 36px", borderRadius: "40px", background: hovered ? "#fff" : "rgba(255,255,255,0.15)", color: hovered ? accent : "#fff", fontWeight: 700, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", border: "2px solid rgba(255,255,255,0.7)", transition: "all 0.3s ease", transform: hovered ? "translateY(-3px)" : "none" }}>I'm in {city} →</div>
      </div>
    </Link>
  );
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0c12" }}>
      {/* NAVBAR */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: "56px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,10,18,0.95)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "20px" }}>🚗</span>
          <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: "clamp(18px,2.5vw,26px)", color: "#fff" }}>ExpatAutoAdviser</span>
        </div>
      </nav>

      {/* HERO TITLE */}
      <div style={{ paddingTop: "56px", textAlign: "center", padding: isMobile ? "72px 20px 24px" : "100px 20px 40px", background: "#0a0c12" }}>
        <h1 style={{ margin: "0 0 10px", fontFamily: "'Playfair Display',Georgia,serif", fontSize: isMobile ? "36px" : "clamp(40px,7vw,96px)", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>ExpatAutoAdviser</h1>
        <p style={{ margin: 0, fontFamily: "system-ui,sans-serif", fontSize: isMobile ? "12px" : "clamp(15px,1.8vw,20px)", color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Singapore · Hong Kong</p>
      </div>

      {/* CITY PANELS */}
      {isMobile ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CityPanel city="Singapore" flag="🇸🇬" mapUrl={SG_MAP} tagline="Leasing, insurance & everything you need to get moving in the Lion City." accent="#e63946" to="/singapore" isMobile={true} />
          <CityPanel city="Hong Kong" flag="🇭🇰" mapUrl={HK_MAP} tagline="Buying, FRT, MOT & everything you need to own a car in the SAR." accent="#2a9d8f" to="/hongkong" isMobile={true} />
        </div>
      ) : (
        <div style={{ display: "flex", height: "calc(100vh - 220px)", minHeight: "520px" }}>
          <CityPanel city="Singapore" flag="🇸🇬" mapUrl={SG_MAP} tagline="Leasing, insurance & everything you need to get moving in the Lion City." accent="#e63946" to="/singapore" isMobile={false} />
          <div style={{ width: "2px", background: "rgba(255,255,255,0.15)", flexShrink: 0, zIndex: 10 }} />
          <CityPanel city="Hong Kong" flag="🇭🇰" mapUrl={HK_MAP} tagline="Buying, FRT, MOT & everything you need to own a car in the SAR." accent="#2a9d8f" to="/hongkong" isMobile={false} />
        </div>
      )}

      {/* PATRICK STRIP */}
      <div style={{ background: "#0d1117", borderTop: "1px solid rgba(255,255,255,0.06)", padding: isMobile ? "36px 24px" : "52px 40px", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", justifyContent: "center", gap: isMobile ? "20px" : "36px", textAlign: isMobile ? "center" : "left" }}>
        <img src={PATRICK_IMG} alt="Patrick" style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: "3px solid rgba(255,255,255,0.15)", flexShrink: 0 }} />
        <div style={{ maxWidth: "540px" }}>
          <p style={{ margin: "0 0 10px", fontFamily: "'Playfair Display',Georgia,serif", fontSize: isMobile ? "16px" : "clamp(16px,1.8vw,20px)", color: "#fff", lineHeight: 1.6, fontStyle: "italic" }}>"Hi, I'm Patrick. I moved from London to Singapore in 2019, then on to Hong Kong. I spent way too long figuring out cars in both cities — this is what I wish had existed."</p>
          <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.32)", letterSpacing: "0.06em", textTransform: "uppercase" }}>London → Singapore → Hong Kong · Expat since 2019</p>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div style={{ background: "#080b11", borderTop: "1px solid rgba(255,255,255,0.04)", padding: isMobile ? "32px 20px" : "44px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "rgba(255,255,255,0.58)", maxWidth: "400px", lineHeight: 1.5 }}>Monthly: COE updates, FRT news, parking tips. None of the noise.</p>
        <div style={{ display: "flex", width: "100%", maxWidth: "400px" }}>
          <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: "12px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRight: "none", borderRadius: "6px 0 0 6px", color: "#fff", fontSize: "14px", outline: "none" }} />
          <button style={{ padding: "12px 22px", background: "#e63946", color: "#fff", border: "none", borderRadius: "0 6px 6px 0", fontWeight: 600, fontSize: "13px", cursor: "pointer" }}>Subscribe</button>
        </div>
        <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.2)" }}>No spam · Unsubscribe anytime</p>
      </div>
    </div>
  );
}