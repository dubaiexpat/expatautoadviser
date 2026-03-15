import { Link } from "react-router-dom";

const SG_MAP =
  "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1400&q=80";
const HK_MAP =
  "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1400&q=80";
const PATRICK_IMG = '/patrick.png';
  "/Firefly_GeminiFlash_picture%20of%20a%20white%2040%20year%20old%20man%20in%20a%20suit%20standing%20in%20front%20of%20a%20busy%20city%20intersection%20with%20cars%20around%20him%20(1).jpg";

const styles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .eaa-home { font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; color: #f0f2f8; }
  .eaa-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 2rem; height: 56px;
    background: rgba(10,12,18,0.85); backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .eaa-logo { font-size: 1rem; font-weight: 700; letter-spacing: 0.04em; color: #f0f2f8; text-decoration: none; }
  .eaa-logo span { color: #e8341c; }
    .home-brand-hero {
      font-size: clamp(2rem, 6vw, 3.5rem);
      font-weight: 800;
      letter-spacing: 0.04em;
      color: #f0f2f8;
      text-align: center;
      display: block;
      margin-bottom: 0.25rem;
      line-height: 1.1;
    }
    .home-brand-hero span { color: #e8341c; }
  .eaa-tagline-wrap {
    padding-top: 56px;
    text-align: center;
    padding-bottom: 1.5rem;
    background: #0a0c12;
  }
  .eaa-tagline-wrap h1 {
    font-size: clamp(1.6rem, 4vw, 2.6rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.15;
    padding: 1.5rem 1rem 0.4rem;
    color: #f0f2f8;
  }
  .eaa-tagline-wrap p {
    font-size: 1rem;
    color: #8892a4;
    padding-bottom: 0.2rem;
  }
  .city-panels {
    display: flex;
    height: calc(100vh - 56px - 88px);
    min-height: 340px;
  }
  .city-panel {
    flex: 1;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: flex 0.4s ease;
  }
  .city-panel:hover { flex: 1.18; }
  .city-panel-bg {
    position: absolute; inset: 0;
    background-size: cover; background-position: center;
    transition: transform 0.5s ease;
  }
  .city-panel:hover .city-panel-bg { transform: scale(1.04); }
  .city-panel-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.18) 100%);
  }
  .city-panel-content {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 1.6rem 1.8rem 2rem;
    display: flex; flex-direction: column; align-items: flex-start; gap: 0.5rem;
  }
  .city-flag { font-size: 2.2rem; line-height: 1; }
  .city-name {
    font-size: clamp(1.4rem, 2.8vw, 2rem);
    font-weight: 800;
    letter-spacing: -0.01em;
    color: #fff;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  }
  .city-tagline {
    font-size: 0.82rem;
    color: rgba(255,255,255,0.72);
    font-weight: 400;
    max-width: 260px;
    line-height: 1.4;
  }
  .city-btn {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 0.55rem 1.2rem;
    border-radius: 6px;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-decoration: none;
    text-transform: uppercase;
    transition: background 0.2s, transform 0.15s;
  }
  .city-btn:hover { transform: translateY(-1px); }
  .city-panel-divider {
    width: 2px;
    background: rgba(255,255,255,0.12);
    flex-shrink: 0;
    align-self: stretch;
  }
  .patrick-strip {
    background: #10131d;
    border-top: 1px solid rgba(255,255,255,0.07);
    display: flex;
    align-items: center;
    gap: 1.4rem;
    padding: 1.1rem 2rem;
  }
  .patrick-img {
    width: 52px; height: 52px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(255,255,255,0.12);
    flex-shrink: 0;
  }
  .patrick-text { flex: 1; }
  .patrick-text strong { font-size: 0.85rem; color: #f0f2f8; display: block; margin-bottom: 0.15rem; }
  .patrick-text span { font-size: 0.78rem; color: #6b7585; line-height: 1.4; }
  .nl-form { display: flex; gap: 0.5rem; flex-shrink: 0; }
  .nl-input {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 6px;
    padding: 0.45rem 0.8rem;
    font-size: 0.8rem;
    color: #f0f2f8;
    width: 200px;
    outline: none;
  }
  .nl-input::placeholder { color: #4a5568; }
  .nl-btn {
    background: #e8341c;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 0.45rem 1rem;
    font-size: 0.78rem;
    font-weight: 700;
    cursor: pointer;
    letter-spacing: 0.04em;
    transition: background 0.2s;
  }
  .nl-btn:hover { background: #c42a16; }
  @media (max-width: 640px) {
    .city-panels { flex-direction: column; height: auto; min-height: 420px; }
    .city-panel { min-height: 200px; }
    .city-panel-divider { width: 100%; height: 2px; }
    .patrick-strip { flex-wrap: wrap; }
    .nl-form { width: 100%; }
    .nl-input { flex: 1; width: auto; }
  }
`;

function CityPanel({ city, flag, mapUrl, tagline, accent, to }) {
  return (
    <div className="city-panel">
      <div
        className="city-panel-bg"
        style={{ backgroundImage: `url(${mapUrl})` }}
      />
      <div className="city-panel-overlay" />
      <div className="city-panel-content">
        <span className="city-flag">{flag}</span>
        <span className="city-name">{city}</span>
        <span className="city-tagline">{tagline}</span>
        <Link
          to={to}
          className="city-btn"
          style={{ background: accent, color: "#fff" }}
        >
          Explore guides →
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="eaa-home" style={{ minHeight: "100vh", background: "#0a0c12" }}>
      <style>{styles}</style>


      {/* Tagline */}
      <div className="eaa-tagline-wrap">
          <div className="home-brand-hero">Expat<span>Auto</span>Adviser</div>
        <h1>Your Car Guide for Expat Life</h1>
        <p>Singapore · Hong Kong</p>
      </div>

      {/* City panels */}
      <div className="city-panels">
        <CityPanel
          city="Singapore"
          flag="🇸🇬"
          mapUrl={SG_MAP}
          tagline="COE, insurance, EVs, buying vs leasing — everything you need to know."
          accent="#e8341c"
          to="/singapore"
        />
        <div className="city-panel-divider" />
        <CityPanel
          city="Hong Kong"
          flag="🇭🇰"
          mapUrl={HK_MAP}
          tagline="FRT, tunnel tolls, licence conversion — no fluff, just clarity."
          accent="#2a9d8f"
          to="/hongkong"
        />
      </div>

      {/* Patrick strip */}
      <div className="patrick-strip">
        <img src={PATRICK_IMG} alt="Patrick" className="patrick-img" />
        <div className="patrick-text">
          <strong>Written by expats, for expats</strong>
          <span>
            Practical, no-nonsense guides from people who've navigated these
            markets themselves.
          </span>
        </div>
        <form
          className="nl-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="nl-input"
          />
          <button type="submit" className="nl-btn">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
}
