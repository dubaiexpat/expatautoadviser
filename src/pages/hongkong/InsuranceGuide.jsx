import Layout from "../../components/Layout";
import PatrickTip from "../../components/PatrickTip";

const HERO_IMG = "https://images.unsplash.com/photo-1517449905587-f80695d63356?w=1200&q=80";

export default function HKInsuranceGuide() {
  return (
    <Layout city="hk" title="Car Insurance in Hong Kong for Expats" description="Car insurance in Hong Kong explained for expats: third-party vs comprehensive, transferring your No Claims Bonus from overseas, typical premiums, and recommended brokers." relatedLinks={[{ label: 'Leasing Guide', to: '/hongkong/leasing-guide' }, { label: 'Buying Guide', to: '/hongkong/buying-guide' }, { label: 'MOT & Maintenance', to: '/hongkong/mot-maintenance' }]}>
      <div style={{ width: "100%", height: "clamp(180px,30vw,340px)", overflow: "hidden", borderRadius: "0 0 12px 12px", marginBottom: 32, position: "relative" }}>
        <img src={HERO_IMG} alt="Car interior Hong Kong" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,46,0.55) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: 20, left: 24 }}>
          <span style={{ background: "#2a9d8f", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 6 }}>Hong Kong</span>
        </div>
      </div>
      <div style={{maxWidth:760}}>
        <p style={{color:"#0d9488",fontWeight:600,fontSize:13,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>Hong Kong</p>
        <h1 style={{fontSize:36,fontWeight:800,color:"#1e3a5f",marginBottom:16,lineHeight:1.2}}>Car Insurance in Hong Kong: What Expats Need to Know</h1>
        <p style={{fontSize:17,color:"#6b7280",lineHeight:1.7,marginBottom:40}}>Third-party insurance is mandatory in HK. Comprehensive is strongly recommended. Here's how to get the right cover — and transfer your overseas No Claims history.</p>

        <h2 style={h2}>Third-party vs comprehensive</h2>
        <div style={{background:"white",border:"1px solid #e5e7eb",borderRadius:10,overflow:"hidden",margin:"16px 0 28px"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
            <thead><tr style={{background:"#f9fafb"}}><th style={th}>Type</th><th style={th}>Covers</th><th style={th}>Annual cost (est.)</th></tr></thead>
            <tbody>
              <tr style={{borderTop:"1px solid #f3f4f6"}}>
                <td style={{...td,fontWeight:600}}>Third-Party Only</td>
                <td style={td}>Damage/injury to others. Mandatory by law.</td>
                <td style={{...td,color:"#0d9488",fontWeight:600}}>HKD $2,000–4,000</td>
              </tr>
              <tr style={{borderTop:"1px solid #f3f4f6"}}>
                <td style={{...td,fontWeight:600}}>Comprehensive</td>
                <td style={td}>Third-party plus damage to your own vehicle, fire, theft, weather damage.</td>
                <td style={{...td,color:"#0d9488",fontWeight:600}}>HKD $5,000–15,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={body}>For any car worth over HKD $80,000, comprehensive is almost always worthwhile. HK's tight car parks mean minor scrapes happen. Comprehensive also typically covers you if the other party is uninsured or cannot be traced.</p>

        <h2 style={h2}>Transferring your overseas No Claims Bonus</h2>
        <p style={body}>Most major HK insurers will accept a No Claims Bonus (NCB) letter from your home country insurer. UK, Australian, US, and other international NCBs are routinely accepted. You'll need a formal letter (not just a renewal notice) confirming your NCB level and claims-free years.</p>
        <p style={body}>HK's NCB system mirrors the UK approach: discounts typically range from 20% (1 year) to 60% (5+ years). At 60% NCB on a HKD $10,000 premium, that's HKD $6,000 saved annually. Always ask — most expats don't realise this is possible.</p>

        <h2 style={h2}>Typical premiums by profile</h2>
        <div style={{background:"white",border:"1px solid #e5e7eb",borderRadius:10,padding:24,margin:"16px 0 28px"}}>
          {[["Expat, age 35–50, no HK NCB, mid-range used car (~HKD $200,000)","HKD $8,000–12,000/year comprehensive"],
            ["Same profile with 50%+ NCB transfer","HKD $4,500–6,500/year"],
            ["Young driver (25–30), first HK policy","HKD $12,000–18,000/year (loading for inexperience)"],
            ["Premium car (BMW 5 Series, Mercedes E-Class)","HKD $15,000–25,000/year comprehensive"],
          ].map(([profile, cost]) => (
            <div key={profile} style={{marginBottom:16,paddingBottom:16,borderBottom:"1px solid #f3f4f6"}}>
              <p style={{margin:0,fontSize:14,color:"#374151"}}>{profile}</p>
              <p style={{margin:"4px 0 0",fontSize:15,fontWeight:700,color:"#1e3a5f"}}>{cost}</p>
            </div>
          ))}
        </div>

        <h2 style={h2}>Getting quotes</h2>
        <p style={body}>Major HK insurers include AXA, MSIG, QBE, and Zurich. Using an independent broker (rather than going direct) is often worthwhile for expats — brokers understand NCB transfers and can shop multiple insurers. Ask other expats in your building or community for broker recommendations.</p>

        <PatrickTip city="hk">"If you're coming from the UK, Australia, or another country with a No Claims Bonus system, ask specifically whether your HK insurer will recognise your overseas NCB. Many do. It typically requires a letter from your previous insurer confirming your claims history — straightforward to get — but it can meaningfully reduce your first-year premium. Most expats don't ask because they assume it won't apply."</PatrickTip>
      </div>
    </Layout>
  );
}
const h2 = {fontSize:22,fontWeight:700,color:"#1e3a5f",margin:"36px 0 12px"};
const body = {fontSize:16,color:"#374151",lineHeight:1.8,marginBottom:16};
const th = {padding:"12px 16px",textAlign:"left",fontWeight:600,fontSize:13,color:"#374151"};
const td = {padding:"12px 16px",color:"#374151",fontSize:14};