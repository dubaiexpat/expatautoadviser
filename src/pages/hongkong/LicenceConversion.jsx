import Layout from "../../components/Layout";
import PatrickTip from "../../components/PatrickTip";

const HERO_IMG = "https://images.unsplash.com/photo-tMQxeucwFFc?w=1200&q=80";

export default function HKLicenceConversion() {
  const countries = ["Australia","Austria","Belgium","Canada","China (Mainland)","Denmark","Finland","France","Germany","Iceland","Ireland","Israel","Italy","Japan","Luxembourg","Macau","Malaysia","Netherlands","New Zealand","Norway","Portugal","Singapore","South Africa","South Korea","Spain","Sweden","Switzerland","Taiwan","United Kingdom","United States"];
  return (
    <Layout city="hk" title="Driving Licence Conversion in Hong Kong for Expats" description="How to convert your foreign driving licence in Hong Kong. Which nationalities qualify, the Transport Department process, costs, timing, and when you need an International Driving Permit." relatedLinks={[{ label: 'Should I Get a Car?', to: '/hongkong/should-i-get-a-car' }, { label: 'Leasing Guide', to: '/hongkong/leasing-guide' }, { label: 'Buying Guide', to: '/hongkong/buying-guide' }]}>
      <div style={{ width: "100%", height: "clamp(180px,30vw,340px)", overflow: "hidden", borderRadius: "0 0 12px 12px", marginBottom: 32, position: "relative" }}>
        <img src={HERO_IMG} alt="Driver Hong Kong" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,46,0.55) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: 20, left: 24 }}>
          <span style={{ background: "#2a9d8f", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 6 }}>Hong Kong</span>
        </div>
      </div>
      <div style={{maxWidth:760}}>
        <p style={{color:"#0d9488",fontWeight:600,fontSize:13,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>Hong Kong</p>
        <h1 style={{fontSize:36,fontWeight:800,color:"#1e3a5f",marginBottom:16,lineHeight:1.2}}>Converting Your Driving Licence in Hong Kong</h1>
        <p style={{fontSize:17,color:"#6b7280",lineHeight:1.7,marginBottom:40}}>Holders of licences from approved countries can exchange their foreign licence for a Hong Kong one without any test. If your country is not on the approved list, the Transport Department will require a theory or practical test. Check your eligibility below.</p>

        <h2 style={h2}>Which countries qualify for direct exchange?</h2>
        <p style={body}>Hong Kong's Transport Department has reciprocal licence exchange arrangements with the following countries. Holders of licences from these countries can convert directly — no test required:</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,margin:"16px 0 28px"}}>
          {countries.map(c => <div key={c} style={{background:"#f0fdfa",border:"1px solid #99f6e4",borderRadius:6,padding:"8px 12px",fontSize:13,color:"#134e4a",fontWeight:500}}>✓ {c}</div>)}
        </div>
        <div style={{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:8,padding:"14px 18px",margin:"0 0 28px",fontSize:14,color:"#991b1b",lineHeight:1.6}}>
          <strong>Not on the list?</strong> Licence holders from countries not listed above are not eligible for direct exchange. You may drive on a valid foreign licence for up to 12 months from arrival, but to obtain a Hong Kong licence after that you will need to sit a theory test and/or practical driving test as determined by the Transport Department. An International Driving Permit (IDP) obtained in your home country can also extend the period you may drive legally. Check with the <strong>Transport Department (td.gov.hk)</strong> for your specific situation.
        </div>

        <h2 style={h2}>Step-by-step conversion process</h2>
        <div style={{margin:"16px 0 28px"}}>
          {[{n:"1",t:"Gather your documents",d:"Valid foreign driving licence (with certified translation if not in English or Chinese), valid Hong Kong ID card or passport with valid visa, and one recent passport photo."},
            {n:"2",t:"Complete the application form",d:"Form TD 51 is the Application for Issue/Renewal of Driving Licence. Available at any Transport Department licensing office or download from td.gov.hk."},
            {n:"3",t:"Visit a Transport Department licensing office",d:"Bring all originals. Main offices: Cheung Sha Wan, Sha Tin, and Tuen Mun. No appointment needed for licence exchange — take a queue number on arrival."},
            {n:"4",t:"Pay the fee and collect",d:"The licence fee varies by licence class and validity period. A full private car licence (Class 1) for 10 years costs approximately HKD $900. You'll typically receive a temporary licence on the day and the permanent card by post."},
          ].map(({n,t,d}) => (
            <div key={n} style={{display:"flex",gap:16,marginBottom:20}}>
              <div style={{width:32,height:32,borderRadius:"50%",background:"#0d9488",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,flexShrink:0}}>{n}</div>
              <div><strong style={{fontSize:15,color:"#1e3a5f",display:"block",marginBottom:4}}>{t}</strong><p style={{margin:0,fontSize:14,color:"#374151",lineHeight:1.6}}>{d}</p></div>
            </div>
          ))}
        </div>

        <h2 style={h2}>International Driving Permit (IDP)</h2>
        <p style={body}>An IDP is a translation of your home licence issued by your home country's motoring authority (e.g. AA or RAC in the UK, AAA in the US). In HK, an IDP allows you to drive for up to 12 months alongside your foreign licence. It's a useful backup if your conversion is taking time — and essential if you plan to drive on the mainland.</p>

        <h2 style={h2}>Cost and timing summary</h2>
        <div style={{background:"white",border:"1px solid #e5e7eb",borderRadius:10,padding:24,margin:"16px 0 28px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
          {[["Licence fee (10 years)","~HKD $900"],["Processing time","Same day (temporary)"],["Permanent card delivery","~2 weeks by post"],["Office wait time","Usually under 1 hour"]].map(([l,v]) => (
            <div key={l}><p style={{margin:0,fontSize:13,color:"#6b7280"}}>{l}</p><p style={{margin:"4px 0 0",fontSize:18,fontWeight:700,color:"#1e3a5f"}}>{v}</p></div>
          ))}
        </div>

        <PatrickTip city="hk">"The HK Transport Department is genuinely one of the more efficient government offices I've dealt with. Go in person, have your documents ready, and you're typically done in under an hour. The queue is rarely as long as it looks."</PatrickTip>
      </div>
    </Layout>
  );
}
const h2 = {fontSize:22,fontWeight:700,color:"#1e3a5f",margin:"36px 0 12px"};
const body = {fontSize:16,color:"#374151",lineHeight:1.8,marginBottom:16};