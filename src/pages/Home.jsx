import { Link } from "react-router-dom";

const SG_MAP = "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1400&q=80";
const HK_MAP = "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1400&q=80";
const PATRICK_IMG = "/Firefly_GeminiFlash_picture%20of%20a%20white%2040%20year%20old%20clean%20shaven%20man%20in%20smart%20casual%20clothes%20with%20dark%20hai%20966416%20(1).png";

const styles = `
  .eaa-home * { box-sizing: border-box; }
  .city-panels {
    display: flex;
    height: calc(100vh - 220px);
    min-height: 520px;
  }
  .city-panel {
    flex: 0 0 50%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    transition: flex 0.45s cubic-bezier(0.4,0,0.2,1);
    text-decoration: none;
  }
  .city-panel:hover { flex: 0 0 58%; }
  .city-panel-divider {
    width: 2px;
    background: rgba(255,255,255,0.15);
    flex-shrink: 0;
    z-index: 10;
  }
  .city-panel-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    filter: blur(1px) brightness(0.65);
    transform: scale(1.03);
    transition: filter 0.4s ease;
  }
  .city-panel:hover .city-panel-bg {
    filter: blur(0px) brightness(0.55);
  }
  .city-btn {
    padding: 13px 36px;
    border-radius: 40px;
    background: rgba(255,255,255,0.15);
    color: #fff;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border: 2px solid rgba(255,255,255,0.7);
    transition: all 0.3s ease;
  }
  .city-panel:hover .city-btn { transform: translateY(-3px); }
  .city-flag {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-60%) scale(1);
    font-size: clamp(80px,10vw,130px);
    line-height: 1;
    filter: drop-shadow(0 6px 32px rgba(0,0,0,0.7));
    transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
    z-index: 2;
  }
  .city-panel:hover .city-flag { transform: translate(-50%,-60%) scale(1.15); }
  .city-tagline { opacity: 0.75; transition: opacity 0.3s ease; }
  .city-panel:hover .city-tagline { opacity: 1; }
  .patrick-strip {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 36px;
    text-align: left;
  }
  .newsletter-form { display: flex; width: 100%; max-width: 420px; }
  .newsletter-form input {
    flex: 1; padding: 13px 16px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-right: none; border-radius: 6px 0 0 6px;
    color: #fff; font-size: 14px; outline: none;
  }
  .newsletter-form button {
    padding: 13px 22px; background: #e63946; color: #fff;
    border: none; border-radius: 0 6px 6px 0;
    font-weight: 700; font-size: 13px; cursor: pointer; white-space: nowrap;
  }
  @media (max-width: 639px) {
    .city-panels { flex-direction: column; height: auto; min-height: unset; }
    .city-panel { flex: none !important; height: 260px; transition: none; }
    .city-panel-divider { display: none; }
    .city-flag { font-size: 48px; position: static; transform: none !important; filter: none; transition: none; }
    .city-btn { padding: 10px 28px; font-size: 12px; }
    .patrick-strip { flex-direction: column; gap: 20px; text-align: center; padding: 36px 24px !important; }
    .newsletter-form { flex-direction: column; gap: 10px; }
    .newsletter-form input { border-right: 1px solid rgba(255,255,255,0.12); border-radius: 6px; }
    .newsletter-form button { border-radius: 6px; width: 100%; }
  }
`;

function CityPanel({ city, flag, mapUrl, tagline, accent, to }) {
  return (
    <Link to={to} className="city-panel" style={{ textDecoration: "none" }}>
      <div className="city-panel-bg" style={{ backgroundImage: "url(" + mapUrl + ")" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, " + accent + "cc 0%, " + accent + "22 50%, transparent 100%)" }} />
      <div className="city-flag">{flag}</div>
      <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "0 40px 52px", textAlign: "center", width: "100%" }}>
        <h2 style={{ margin: 0, fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(32px,4vw,58px)", fontWeight: 700, color: "#fff", textShadow: "0 2px 24px rgba(0,0,0,0.8)" }}>{city}</h2>
        <p className="city-tagline" style={{ margin: 0, fontSize: "clamp(13px,1.3vw,16px)", color: "rgba(255,255,255,0.9)", maxWidth: "280px", lineHeight: 1.6, textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}>{tagline}</p>
        <div className="city-btn">{"I'm in " + city + " \u2192"}</div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="eaa-home" style={{ minHeight: "100vh", background: "#0a0c12" }}>
      <style>{styles}</style>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: "56px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,10,18,0.95)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "20px" }}>🚗</span>
          <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: "clamp(18px,2.5vw,26px)", color: "#fff" }}>ExpatAutoAdviser</span>
        </div>
      </nav>
      <div style={{ textAlign: "center", padding: "100px 20px 40px", background: "#0a0c12" }}>
        <h1 style={{ margin: "0 0 10px", fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(36px,7vw,96px)", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>ExpatAutoAdviser</h1>
        <p style={{ margin: 0, fontFamily: "system-ui,sans-serif", fontSize: "clamp(12px,1.8vw,20px)", color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Singapore · Hong Kong</p>
      </div>
      <div className="city-panels">
        <CityPanel city="Singapore" flag="🇸🇬" mapUrl={SG_MAP} tagline="Leasing, insurance & everything you need to get moving in the Lion City." accent="#e63946" to="/singapore" />
        <div className="city-panel-divider" />
        <CityPanel city="Hong Kong" flag="🇭🇰" mapUrl={HK_MAP} tagline="Buying, FRT, MOT & everything you need to own a car in the SAR." accent="#2a9d8f" to="/hongkong" />
      </div>
      <div className="patrick-strip" style={{ background: "#0d1117", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "52px 40px" }}>
        <img src={PATRICK_IMG} alt="Patrick" style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: "3px solid rgba(255,255,255,0.15)", flexShrink: 0 }} />
        <div style={{ maxWidth: "540px" }}>
          <p style={{ margin: "0 0 10px", fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(16px,1.8vw,20px)", color: "#fff", lineHeight: 1.6, fontStyle: "italic" }}>
            "Hi, I'm Patrick. I moved from London to Singapore in 2019, then on to Hong Kong. I spent way too long figuring out cars in both cities — this is what I wish had existed."
          </p>
          <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.32)", letterSpacing: "0.06em", textTransform: "uppercase" }}>London → Singapore → Hong Kong · Expat since 2019</p>
        </div>
      </div>
      <div style={{ background: "#080b11", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "56px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", textAlign: "center" }}>
        <div style={{ background: "rgba(232,52,28,0.08)", border: "1px solid rgba(232,52,28,0.2)", borderRadius: 10, padding: "14px 24px", maxWidth: 480 }}>
          <p style={{ margin: 0, fontSize: "12px", fontWeight: 700, color: "#e63946", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Free download</p>
          <p style={{ margin: 0, fontSize: "clamp(16px,2vw,18px)", fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>Get the Expat Car Checklist</p>
          <p style={{ margin: "8px 0 0", fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>The 12 questions to ask before you sign any lease or buy any car in Singapore or HK. Used by 600+ expats.</p>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder="your@email.com" />
          <button>Send me the checklist →</button>
        </div>
        <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.2)" }}>No spam · COE & FRT updates included · Unsubscribe anytime</p>
      </div>
    </div>
  );
}
