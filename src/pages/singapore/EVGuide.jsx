import Layout from "../../components/Layout";
import PatrickTip from "../../components/PatrickTip";

export default function SGEVGuide() {
  return (
    <Layout city="sg" title="Electric Vehicles in Singapore: Expat Guide" description="EV leasing in Singapore explained for expats. EEAI incentives, charging infrastructure, popular EV models in lease fleets, and whether an EV is right for you.">
      <div style={{maxWidth:760}}>
        <p style={{color:"#e8341c",fontWeight:600,fontSize:13,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>Singapore</p>
        <h1 style={{fontSize:36,fontWeight:800,color:"#1e3a5f",marginBottom:16,lineHeight:1.2}}>Electric Vehicles in Singapore: What Expats Should Know</h1>
        <p style={{fontSize:17,color:"#6b7280",lineHeight:1.7,marginBottom:40}}>EVs are increasingly common in Singapore lease fleets. Here's whether one makes sense for your situation — and what the practical realities are.</p>

        <h2 style={h2}>The EV landscape in Singapore</h2>
        <p style={body}>Singapore has committed to phasing out new petrol and diesel cars by 2030. Tesla, BYD, Hyundai Ioniq, and BMW iX are now regularly seen on Singapore roads, and lease companies have been adding EVs rapidly from 2023 onwards.</p>
        <p style={body}>For expats, EVs in a lease context can make a lot of sense: lower running costs, a newer car, and no petrol bills — in a country where fuel costs around <strong>SGD $3.00–$3.30/litre</strong>.</p>

        <h2 style={h2}>EEAI incentives</h2>
        <p style={body}>The Enhanced Electricity-Powered Vehicle Incentive for Accessibility (EEAI) provides rebates on EV registration that leasing companies can pass on through pricing. In practice, EV leases are often more competitively priced than you'd expect given the underlying car cost.</p>

        <h2 style={h2}>Charging infrastructure</h2>
        <div style={{background:"white",border:"1px solid #e5e7eb",borderRadius:10,padding:24,margin:"16px 0 28px"}}>
          {[["🏠 Home charging","If you live in a landed property, a home charger is straightforward. HDB flats and some condos are getting charger retrofits — check your development."],
            ["🏢 Workplace charging","Growing rapidly. Many business parks and CBD offices have Level 2 chargers. Check before you commit to an EV lease."],
            ["🔌 Public charging","SP Group, ChargeEV, and Tesla Superchargers cover most of Singapore. Download the SP Utilities app or PlugShare to map chargers near you."],
            ["🛒 Retail / carpark","VivoCity, Suntec, ION Orchard, and most major malls have EV charger bays. Range anxiety is genuinely low in Singapore given the island's size."],
          ].map(([type, detail]) => (
            <div key={type} style={{marginBottom:16}}><strong style={{fontSize:14,color:"#1e3a5f"}}>{type}</strong><p style={{margin:"4px 0 0",fontSize:14,color:"#374151",lineHeight:1.6}}>{detail}</p></div>
          ))}
        </div>

        <h2 style={h2}>Popular EV models in Singapore lease fleets</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,margin:"16px 0 28px"}}>
          {[["Tesla Model 3","Most common EV lease, excellent range, Supercharger network"],["BYD Atto 3","Strong value, rising fast in lease market"],["Hyundai Ioniq 6","Popular mid-size EV, smooth ride"],["BMW iX3","Premium EV lease option for those used to driving a 3 Series equivalent"]].map(([model, note]) => (
            <div key={model} style={{background:"#f0f9ff",border:"1px solid #bae6fd",borderRadius:8,padding:"14px 16px"}}>
              <strong style={{fontSize:14,color:"#0c4a6e"}}>{model}</strong>
              <p style={{margin:"4px 0 0",fontSize:13,color:"#374151"}}>{note}</p>
            </div>
          ))}
        </div>

        <PatrickTip city="sg">"I didn't go EV in Singapore, which I slightly regret. My building got chargers installed 6 months after I arrived and I was locked into a petrol lease. If you're starting fresh, ask your building management about EV charging before you sign anything. It's becoming a standard question."</PatrickTip>
      </div>
    </Layout>
  );
}
const h2 = {fontSize:22,fontWeight:700,color:"#1e3a5f",margin:"36px 0 12px"};
const body = {fontSize:16,color:"#374151",lineHeight:1.8,marginBottom:16};