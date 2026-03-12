import Layout from "../../components/Layout";
import PatrickTip from "../../components/PatrickTip";

const HERO_IMG = "https://images.unsplash.com/photo-GYE9sJxRjs4?w=1200&q=80";

export default function HKFRTExplained() {
  return (
    <Layout city="hk" title="Hong Kong First Registration Tax (FRT) Explained" description="FRT in Hong Kong explained for expats: what it is, how it's calculated, progressive bands with worked examples, EV exemptions, and annual licence fees." relatedLinks={[{ label: 'Buying Guide', to: '/hongkong/buying-guide' }, { label: 'Insurance Guide', to: '/hongkong/insurance-guide' }, { label: 'Cost Calculator', to: '/hongkong/calculators' }]}>
      <div style={{ width: "100%", height: "clamp(180px,30vw,340px)", overflow: "hidden", borderRadius: "0 0 12px 12px", marginBottom: 32, position: "relative" }}>
        <img src={HERO_IMG} alt="Premium car FRT" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,46,0.55) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: 20, left: 24 }}>
          <span style={{ background: "#2a9d8f", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 6 }}>Hong Kong</span>
        </div>
      </div>
      <div style={{maxWidth:760}}>
        <p style={{color:"#0d9488",fontWeight:600,fontSize:13,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>Hong Kong</p>
        <h1 style={{fontSize:36,fontWeight:800,color:"#1e3a5f",marginBottom:16,lineHeight:1.2}}>Hong Kong FRT &amp; Tax Explained</h1>
        <p style={{fontSize:17,color:"#6b7280",lineHeight:1.7,marginBottom:40}}>The First Registration Tax is why new cars in Hong Kong cost roughly double what you'd pay elsewhere. Here's exactly how it works.</p>

        <h2 style={h2}>What is the First Registration Tax?</h2>
        <p style={body}>The FRT is a one-time tax applied when a new private car is first registered in Hong Kong. It's charged on the car's "taxable value" — essentially the import cost plus charges. The tax is progressive, meaning higher-value cars are taxed at increasingly steep rates.</p>
        <p style={body}>FRT only applies once. If you buy a second-hand car, FRT has already been paid by the original owner. This is precisely why most expats buy used.</p>

        <h2 style={h2}>FRT rate bands (private cars)</h2>
        <div style={{background:"white",border:"1px solid #e5e7eb",borderRadius:10,overflow:"hidden",margin:"16px 0 28px"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
            <thead><tr style={{background:"#f9fafb"}}><th style={th}>Taxable Value (HKD)</th><th style={th}>FRT Rate</th></tr></thead>
            <tbody>
              {[["First $150,000","40%"],["Next $150,000 ($150,001–$300,000)","75%"],["Next $200,000 ($300,001–$500,000)","100%"],["Remainder (above $500,000)","115%"]].map(([band,rate]) => (
                <tr key={band} style={{borderTop:"1px solid #f3f4f6"}}><td style={td}>{band}</td><td style={{...td,fontWeight:700,color:"#0d9488"}}>{rate}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Worked example: Toyota RAV4 (taxable value HKD $320,000)</h2>
        <div style={{background:"#f0fdfa",border:"1px solid #99f6e4",borderRadius:10,padding:24,margin:"16px 0 28px"}}>
          {[["First $150,000 @ 40%","= HKD $60,000"],["Next $150,000 @ 75%","= HKD $112,500"],["Remaining $20,000 @ 100%","= HKD $20,000"],["Total FRT","= HKD $192,500"]].map(([c,r]) => (
            <div key={c} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:"1px solid #ccfbf1",fontSize:14}}>
              <span style={{color:"#374151"}}>{c}</span><span style={{fontWeight:600,color:"#134e4a"}}>{r}</span>
            </div>
          ))}
          <p style={{margin:"16px 0 0",fontSize:14,color:"#134e4a"}}><strong>Total cost of car = HKD $320,000 + $192,500 = HKD $512,500</strong></p>
        </div>

        <h2 style={h2}>EV concessions</h2>
        <p style={body}>Battery electric vehicles benefit from FRT concessions under the One-for-One Replacement Scheme, providing a concession of up to <strong>HKD $97,500</strong> per vehicle. Verify the current scheme details with the Transport Department (td.gov.hk) before purchasing as policy evolves.</p>

        <h2 style={h2}>Annual vehicle licence fees</h2>
        <div style={{background:"white",border:"1px solid #e5e7eb",borderRadius:10,overflow:"hidden",margin:"16px 0 28px"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
            <thead><tr style={{background:"#f9fafb"}}><th style={th}>Engine Capacity</th><th style={th}>Annual Licence Fee</th></tr></thead>
            <tbody>
              {[["Up to 1,500cc","HKD $3,718"],["1,501cc–2,500cc","HKD $5,074"],["Above 2,500cc","HKD $9,144"],["Electric vehicles","HKD $728 (reduced rate)"]].map(([eng,fee]) => (
                <tr key={eng} style={{borderTop:"1px solid #f3f4f6"}}><td style={td}>{eng}</td><td style={{...td,fontWeight:600,color:"#1e3a5f"}}>{fee}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <PatrickTip city="hk">"FRT is the single biggest shock for expats buying new in HK. Run the numbers once and the used market makes overwhelming sense — same car, properly maintained, at a fraction of the effective new price. The only scenario where new genuinely pencils out is an EV eligible for the FRT concession scheme. For everything else, used is where the value is."</PatrickTip>
      </div>
    </Layout>
  );
}
const h2 = {fontSize:22,fontWeight:700,color:"#1e3a5f",margin:"36px 0 12px"};
const body = {fontSize:16,color:"#374151",lineHeight:1.8,marginBottom:16};
const th = {padding:"12px 16px",textAlign:"left",fontWeight:600,fontSize:13,color:"#374151"};
const td = {padding:"12px 16px",color:"#374151",fontSize:14};