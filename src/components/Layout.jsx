import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout({ children, city, title, description }) {
  const location = useLocation();
  useEffect(() => {
    if (title) document.title = title + " | ExpatAutoAdviser";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) metaDesc.setAttribute("content", description);
  }, [title, description]);

  const sgLinks = [
    { to: "/singapore", label: "Overview" },
    { to: "/singapore/should-i-get-a-car", label: "Should I Get a Car?" },
    { to: "/singapore/leasing-guide", label: "Leasing Guide" },
    { to: "/singapore/insurance-guide", label: "Insurance Guide" },
    { to: "/singapore/licence-conversion", label: "Licence Conversion" },
    { to: "/singapore/ev-guide", label: "EV Guide" },
    { to: "/singapore/calculators", label: "Calculators & Tools" },
    { to: "/singapore/garage-finder", label: "Garage Finder" },
  ];
  const hkLinks = [
    { to: "/hongkong", label: "Overview" },
    { to: "/hongkong/should-i-get-a-car", label: "Should I Get a Car?" },
    { to: "/hongkong/buying-guide", label: "Buying Guide" },
    { to: "/hongkong/frt-tax-explained", label: "FRT & Tax Explained" },
    { to: "/hongkong/insurance-guide", label: "Insurance Guide" },
    { to: "/hongkong/mot-maintenance", label: "MOT & Maintenance" },
    { to: "/hongkong/licence-conversion", label: "Licence Conversion" },
    { to: "/hongkong/ev-guide", label: "EV Guide" },
    { to: "/hongkong/calculators", label: "Calculators & Tools" },
    { to: "/hongkong/garage-finder", label: "Garage Finder" },
  ];
  const navLinks = city === "sg" ? sgLinks : city === "hk" ? hkLinks : [];
  const accentColor = city === "sg" ? "#e8341c" : city === "hk" ? "#0d9488" : "#1e3a5f";
  const cityLabel = city === "sg" ? "ð¸ð¬ Singapore" : city === "hk" ? "ð­ð° Hong Kong" : null;

  return (
    <>
    <style>{`
  .eaa-brand-text { display: inline; }
  .eaa-city-label { font-size: 13px; padding: 5px 12px; }
  @media (max-width: 639px) {
    .eaa-brand-text { display: none; }
    .eaa-city-label { font-size: 11px !important; padding: 4px 8px !important; }
    .eaa-city-pill { font-size: 11px !important; padding: 4px 8px !important; }
  }`}</style>
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh", background: "#fafaf9" }}>
      <header style={{ background: "#1e3a5f", color: "white", padding: "0 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56, gap: 8 }}>
          <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: 700, fontSize: 16, letterSpacing: "-0.3px", whiteSpace: "nowrap", flexShrink: 0 }}>
            ExpatAutoAdviser
          </Link>
          {/* Only show the OTHER city link â never duplicate the current city */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
            {cityLabel && (
              <span className="eaa-city-label" style={{ background: accentColor, padding: "5px 12px", borderRadius: 20, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}>
                {cityLabel}
              </span>
            )}
            {city !== "sg" && (
              <Link to="/singapore" className="eaa-city-pill" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: 13, whiteSpace: "nowrap", padding: "5px 10px", borderRadius: 20, background: "rgba(255,255,255,0.1)" }}>
                ð¸ð¬ SG
              </Link>
            )}
            {city !== "hk" && (
              <Link to="/hongkong" className="eaa-city-pill" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: 13, whiteSpace: "nowrap", padding: "5px 10px", borderRadius: 20, background: "rgba(255,255,255,0.1)" }}>
                ð­ð° HK
              </Link>
            )}
          </div>
        </div>
      </header>

      {navLinks.length > 0 && (
        <nav style={{ background: "white", borderBottom: "1px solid #e5e7eb", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", padding: "0 16px", width: "max-content", minWidth: "100%" }}>
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <Link key={to} to={to} style={{
                  padding: "12px 12px", textDecoration: "none", fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? accentColor : "#374151",
                  borderBottom: isActive ? `2px solid ${accentColor}` : "2px solid transparent",
                  whiteSpace: "nowrap", transition: "color 0.15s",
                }}>
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px 60px" }}>
        {children}
      </main>

      <footer style={{ background: "#1e3a5f", color: "rgba(255,255,255,0.7)", padding: "32px 16px", fontSize: 13 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <strong style={{ color: "white" }}>ExpatAutoAdviser</strong><br />
            Honest car advice for expats in Singapore & Hong Kong.
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <Link to="/singapore" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Singapore</Link>
            <Link to="/hongkong" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Hong Kong</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
