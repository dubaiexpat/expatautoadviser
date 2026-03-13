import Layout from "../../components/Layout";
import PatrickTip from "../../components/PatrickTip";
import { Link } from "react-router-dom";

const HERO_IMG = "https://images.unsplash.com/photo-1522962172216-3cffc9debf30?w=1200&q=80";

export default function HKBuyingGuide() {
  return (
    <Layout city="hk" title="Hong Kong Car Buying Guide for Expats" description="How to buy a car in Hong Kong as an expat: new vs used, avoiding FRT, step-by-step process, Transport Department registration, documents needed, and where to find good used cars." relatedLinks={[{ label: 'FRT Tax Explained', to: '/hongkong/frt-tax-explained' }, { label: 'Insurance Guide', to: '/hongkong/insurance-guide' }, { label: 'MOT & Maintenance', to: '/hongkong/mot-maintenance' }, { label: 'Licence Conversion', to: '/hongkong/licence-conversion' }]}>
      <div style={{ width: "100%", height: "clamp(180px,30vw,340px)", overflow: "hidden", borderRadius: "0 0 12px 12px", marginBottom: 32, position: "relative" }}>
        <img src={HERO_IMG} alt="Sports car Hong Kong" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,46,0.55) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: 20, left: 24 }}>
          <span style={{ background: "#2a9d8f", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 6 }}>Hong Kong</span>
        </div>
      </div>
      <div style={{maxWidth:760}}>
        <p style={{color:"#0d9488",fontWeight:600,fontSize:13,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>Hong Kong</p>
        <h1 style={{fontSize:36,fontWeight:800,color:"#1e3a5f",marginBottom:16,lineHeight:1.2}}>Buying a Car in Hong Kong: The Expat Guide</h1>
        <p style={{fontSize:17,color:"#6b7280",lineHeight:1.7,marginBottom:40}}>Most expats who get a car in HK buy used. Here's the full process — from understanding FRT to picking up your keys.</p>

        <h2 style={h2}>New vs used: why almost everyone buys used</h2>
        <p style={body}>New cars in Hong Kong attract the <strong>First Registration Tax (FRT)</strong>, a progressive tax that can add 40–115% to a car's taxable value. A car with a taxable value of HKD $300,000 could end up costing over HKD $500,000 after FRT. See the <Link to="/hongkong/frt-explained" style={{color:"#0d9488"}}>FRT Explainer</Link> for the full breakdown.</p>
        <p style={body}>When you buy a used car, FRT has already been paid. You're simply buying the asset — the car — at market value. For expats on 2–4 year stints, buying a used car and selling it before leaving is typically the most cost-effective approach.</p>

        <h2 style={h2}>What to look for in a used car</h2>
        <ul style={{...body, paddingLeft:20}}>
          <li style={{marginBottom:8}}><strong>Service history</strong> — look for stamped logbooks or records from a main dealer or known independent garage</li>
          <li style={{marginBottom:8}}><strong>Number of previous owners</strong> — fewer is better; 1–2 owners is typical for a well-maintained car</li>
          <li style={{marginBottom:8}}><strong>Mileage context</strong> — HK cars are typically low mileage due to traffic, tolls, and parking costs. Under 10,000 km/year is common. High mileage (20,000+ km/year) warrants investigation</li>
          <li style={{marginBottom:8}}><strong>MOT status</strong> — cars 7+ years old need an annual inspection. Check when it's next due</li>
          <li style={{marginBottom:8}}><strong>Rust and accident damage</strong> — HK's humidity and tight parking means minor scrapes are common; structural damage is the red flag</li>
        </ul>

        <h2 style={h2}>Where to buy</h2>
        <div style={{background:"white",border:"1px solid #e5e7eb",borderRadius:10,padding:24,margin:"16px 0 28px"}}>
          {[["Carousell HK","carousell.com.hk — private and dealer listings. Filter by make/model/year. Popular and well-used by expat community."],
            ["AutoTrader HK","autotrader.com.hk — primarily dealer listings, good for comparing prices."],
            ["Dealers","For higher-end used cars (Mercedes, BMW, Lexus), main dealer pre-owned programmes offer warranty and peace of mind."],
            ["Facebook Groups","Expat car groups (search 'Expats in Hong Kong buy/sell cars') move fast and are often priced fairly as sellers are motivated to sell before leaving."],
          ].map(([src,desc]) => (
            <div key={src} style={{marginBottom:16}}><strong style={{fontSize:14,color:"#0d9488"}}>{src}</strong><p style={{margin:"4px 0 0",fontSize:14,color:"#374151",lineHeight:1.6}}>{desc}</p></div>
          ))}
        </div>

        <h2 style={h2}>Step-by-step buying process</h2>
        <div style={{margin:"16px 0 28px"}}>
          {[{n:"1",t:"Agree price and check the car",d:"Inspect the car, review service history, and if possible get an independent mechanic inspection for used cars over HKD $100,000."},
            {n:"2",t:"Complete the TD25 form",d:"The Vendor Statement (TD25) transfers ownership. The seller fills in their section; you complete yours. Available from the Transport Department (td.gov.hk)."},
            {n:"3",t:"Pay the purchase price",d:"Bank transfer or cashier's order is standard. Get a receipt. If using a dealer, they handle much of the paperwork."},
            {n:"4",t:"Register with Transport Department",d:"The change of ownership must be registered. You can do this online via the TD portal or in person at a licensing office. Fee: approximately HKD $100–200."},
            {n:"5",t:"Arrange insurance before driving",d:"You must have at minimum third-party insurance before driving the car away. See the Insurance Guide for details."},
            {n:"6",t:"Collect your new Vehicle Licence",d:"Once registered, you'll receive a new Vehicle Licence showing you as owner. The physical number plates stay with the car."},
          ].map(({n,t,d}) => (
            <div key={n} style={{display:"flex",gap:16,marginBottom:20}}>
              <div style={{width:32,height:32,borderRadius:"50%",background:"#0d9488",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,flexShrink:0}}>{n}</div>
              <div><strong style={{fontSize:15,color:"#1e3a5f",display:"block",marginBottom:4}}>{t}</strong><p style={{margin:0,fontSize:14,color:"#374151",lineHeight:1.6}}>{d}</p></div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Exit strategy: selling before you leave</h2>
        <p style={body}>Budget 2–3 months to sell privately for a good price, or 2–4 weeks if you're willing to accept a dealer trade-in (typically HKD $20,000–$40,000 below market). The expat Facebook groups often move cars in days if priced fairly. Cars in good condition with full service history command a premium.</p>

        <PatrickTip city="hk">"The best used car deals in HK consistently come from expats who are leaving. They price to sell quickly, the cars are typically well-maintained, and the paperwork is usually in English. Keep an eye on expat Facebook groups and community boards — good cars go fast, but they come up regularly. The HK used market holds value well if you buy sensibly."</PatrickTip>
      </div>
    </Layout>
  );
}
const h2 = {fontSize:22,fontWeight:700,color:"#1e3a5f",margin:"36px 0 12px"};
const body = {fontSize:16,color:"#374151",lineHeight:1.8,marginBottom:16};