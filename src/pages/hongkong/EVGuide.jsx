import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const HERO_IMG = "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80";

export default function HKEVGuide() {
  return (
    <Layout city="hk" title="Electric Vehicles in Hong Kong: Expat Guide" description="EV buying and ownership in Hong Kong for expats: FRT concessions, One-for-One Replacement Scheme, charging infrastructure, popular EV models, and whether an EV makes sense for you." relatedLinks={[{ label: 'Buying Guide', to: '/hong-kong/buying-guide' }, { label: 'Leasing Guide', to: '/hong-kong/leasing-guide' }, { label: 'FRT Tax Explained', to: '/hong-kong/frt-tax-explained' }]}>
      <div style={{ width: "100%", height: "clamp(180px,30vw,340px)", overflow: "hidden", borderRadius: 12, marginBottom: 32, position: "relative" }}>
        <img src={HERO_IMG} alt="EV Hong Kong" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,46,0.55) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: 20, left: 24 }}>
          <span style={{ background: "#2a9d8f", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 6 }}>Hong Kong</span>
        </div>
      </div>
      <div style={{maxWidth:760}}>
        <p style={{color:"#0d9488",fontWeight:600,fontSize:13,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>Hong Kong</p>
        <h1 style={{fontSize:36,fontWeight:800,color:"#1e3a5f",marginBottom:16,lineHeight:1.2}}>Electric Vehicles in Hong Kong: What Expats Should Know</h1>
        <p style={{fontSize:17,color:"#6b7280",lineHeight:1.7,marginBottom:40}}>HK has a generous EV incentive scheme, and the island's compact geography makes it well-suited to EVs. Here's what you need to know before buying.</p>

        <h2 style={h2}>Why EVs make sense in Hong Kong</h2>
        <p style={body}>With petrol running at <strong>HKD $29–31/litre</strong> — among the world's highest — the running cost savings of an EV in Hong Kong are substantial. The government has also historically provided strong purchase incentives. And given that most HK driving is urban or suburban (distances are short), range anxiety is rarely an issue.</p>

        <h2 style={h2}>FRT concessions for EVs</h2>
        <p style={body}>Battery electric vehicles receive a First Registration Tax (FRT) concession under the government's EV promotion policy. Historically, EVs have benefited from a full FRT waiver, though the scheme has evolved. The current arrangement (extended to 31 March 2026) provides two tiers: under the <strong>One-for-One Replacement Scheme</strong> (scrapping an old petrol car), eligible buyers receive an FRT concession of up to <strong>HKD $172,500</strong> on EVs priced at or below HK$500,000. For general new EV purchases without a trade-in, the concession is up to <strong>HKD $58,500</strong>. EVs priced above HK$500,000 do not qualify.</p>
        <p style={body}>Verify the latest concession amount at the <strong>Environment Bureau (enb.gov.hk)</strong> or Transport Department before purchasing, as policy details change periodically. See the <Link to="/hong-kong/frt-tax-explained" style={{color:"#0d9488"}}>FRT Explainer</Link> for background on how FRT is calculated.</p>

        <h2 style={h2}>One-for-One Replacement Scheme</h2>
        <p style={body}>The scheme allows buyers of new EVs to receive an enhanced FRT concession, provided they simultaneously cancel (de-register) an older petrol or diesel vehicle. For expats buying new rather than used, this scheme can make the purchase economics significantly more attractive — but requires you to already own a scrappable vehicle.</p>

        <h2 style={h2}>Charging infrastructure</h2>
        <div style={{background:"white",border:"1px solid #e5e7eb",borderRadius:10,padding:24,margin:"16px 0 28px"}}>
          {[["🏠 Home charging","Landed properties: straightforward to install a home charger. High-rise buildings: increasingly installing EV chargers in car parks, but coverage is still patchy — check before you buy."],
            ["🔌 Tesla Superchargers","Multiple Supercharger sites across HK Island, Kowloon, and NT. Coverage is strong for Tesla owners."],
            ["⚡ CLP and HKE chargers","Both main utilities (CLP and HK Electric) operate public charging networks. Download their apps (CLP EV Charging, HKE GO) for locations."],
            ["🏢 Car park charging","Many commercial buildings and shopping centres (IFC, Pacific Place, MegaBox) have EV bays. Availability is growing fast."],
          ].map(([type, detail]) => (
            <div key={type} style={{marginBottom:16}}><strong style={{fontSize:14,color:"#1e3a5f"}}>{type}</strong><p style={{margin:"4px 0 0",fontSize:14,color:"#374151",lineHeight:1.6}}>{detail}</p></div>
          ))}
        </div>

        <h2 style={h2}>Popular EV models among Hong Kong expats</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,margin:"16px 0 28px"}}>
          {[["Tesla Model 3","Most popular EV in HK; excellent Supercharger network makes ownership easy"],["Tesla Model Y","Family SUV; growing fast in popularity, especially in NT and Sai Kung"],["BYD Han / Atto 3","Strong value proposition; BYD has become a serious player in HK"],["Porsche Taycan","Premium choice; FRT concession makes the price gap vs petrol narrower than you'd think"],["BMW iX3 / i4","Popular among expats upgrading from petrol BMWs — familiar brand, electric drivetrain"]].map(([model, note]) => (
            <div key={model} style={{background:"#f0fdfa",border:"1px solid #99f6e4",borderRadius:8,padding:"14px 16px"}}>
              <strong style={{fontSize:14,color:"#0d9488"}}>{model}</strong>
              <p style={{margin:"4px 0 0",fontSize:13,color:"#374151"}}>{note}</p>
            </div>
          ))}
        </div>

        <h2 style={h2}>Is an EV right for you?</h2>
        <div style={{background:"white",border:"1px solid #e5e7eb",borderRadius:10,padding:24,margin:"16px 0 28px"}}>
          {[["✅ Good fit for EV","You have home charging or secure EV access in your building. You drive primarily in urban HK or NT. You plan to stay 2+ years. You're buying new and can use the FRT concession."],
            ["⚠ï¸ Consider carefully","You live in a high-rise without EV charging provision. You drive long distances frequently. You need a used car and the used EV market is thinner than petrol equivalents."],
          ].map(([label, detail]) => (
            <div key={label} style={{marginBottom:16}}><strong style={{fontSize:14,color:"#1e3a5f"}}>{label}</strong><p style={{margin:"4px 0 0",fontSize:14,color:"#374151",lineHeight:1.6}}>{detail}</p></div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
const h2 = {fontSize:22,fontWeight:700,color:"#1e3a5f",margin:"36px 0 12px"};
const body = {fontSize:16,color:"#374151",lineHeight:1.8,marginBottom:16};