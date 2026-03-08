import Layout from "../../components/Layout";
import PatrickTip from "../../components/PatrickTip";

export default function SGLicenceConversion() {
  const countries = ["United Kingdom","United States","Australia","New Zealand","Canada","Germany","France","Japan","South Korea","Switzerland","Sweden","Norway","Denmark","Netherlands","Austria","Belgium","Finland","Ireland","Italy","Spain"];
  return (
    <Layout city="sg" title="Driving Licence Conversion in Singapore for Expats" description="Step-by-step guide to converting your foreign driving licence in Singapore. Which nationalities qualify, costs, timing, and the Traffic Police process.">
      <div style={{maxWidth:760}}>
        <p style={{color:"#e8341c",fontWeight:600,fontSize:13,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>Singapore</p>
        <h1 style={{fontSize:36,fontWeight:800,color:"#1e3a5f",marginBottom:16,lineHeight:1.2}}>Converting Your Driving Licence in Singapore</h1>
        <p style={{fontSize:17,color:"#6b7280",lineHeight:1.7,marginBottom:40}}>Most Western expats can convert their foreign licence to a Singapore one without sitting a test. Here's exactly how.</p>

        <h2 style={h2}>Can you convert without a test?</h2>
        <p style={body}>Singapore allows holders of licences from certain countries to convert directly — no theory test, no practical test, just paperwork. Qualifying countries include:</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,margin:"16px 0 28px"}}>
          {countries.map(c => <div key={c} style={{background:"#f0fdf4",border:"1px solid #86efac",borderRadius:6,padding:"8px 12px",fontSize:13,color:"#166534",fontWeight:500}}>✓ {c}</div>)}
        </div>

        <h2 style={h2}>Step-by-step process</h2>
        <div style={{margin:"16px 0 28px"}}>
          {[{n:"1",t:"Check your eligibility",d:"Confirm your nationality qualifies. Your foreign licence must be valid (not expired)."},
            {n:"2",t:"Prepare your documents",d:"Valid foreign driving licence, passport (and Employment Pass / Long Term Visit Pass), recent passport-sized photo, and completed TP Form 17."},
            {n:"3",t:"Book an appointment",d:"Visit the Traffic Police website (www.police.gov.sg/eLodgement) to book a slot at Traffic Police HQ in Ubi. Walk-ins are generally not accepted."},
            {n:"4",t:"Attend your appointment",d:"Bring all originals (not just photocopies). The officer will verify your documents and process the application on the spot in most cases."},
            {n:"5",t:"Collect your licence",d:"Your Singapore licence is typically issued at the appointment or mailed within 3–5 working days. The fee is approximately SGD $50."},
          ].map(({n,t,d}) => (
            <div key={n} style={{display:"flex",gap:16,marginBottom:20}}>
              <div style={{width:32,height:32,borderRadius:"50%",background:"#e8341c",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,flexShrink:0}}>{n}</div>
              <div><strong style={{fontSize:15,color:"#1e3a5f",display:"block",marginBottom:4}}>{t}</strong><p style={{margin:0,fontSize:14,color:"#374151",lineHeight:1.6}}>{d}</p></div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Cost and timing</h2>
        <div style={{background:"white",border:"1px solid #e5e7eb",borderRadius:10,padding:24,margin:"16px 0 28px"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
            {[["Application fee","~SGD $50"],["Processing time","Same day (usually)"],["Licence validity","Typically 5 years"],["Appointment wait","1–3 weeks typically"]].map(([l,v]) => (
              <div key={l}><p style={{margin:0,fontSize:13,color:"#6b7280"}}>{l}</p><p style={{margin:"4px 0 0",fontSize:18,fontWeight:700,color:"#1e3a5f"}}>{v}</p></div>
            ))}
          </div>
        </div>

        <PatrickTip city="sg">"Book the Traffic Police appointment as soon as you arrive — slots fill up. I waited three weeks, drove on my UK licence the whole time, and was absolutely fine. But it's one of those things you want ticked off early rather than remembering it at month 11."</PatrickTip>
      </div>
    </Layout>
  );
}
const h2 = {fontSize:22,fontWeight:700,color:"#1e3a5f",margin:"36px 0 12px"};
const body = {fontSize:16,color:"#374151",lineHeight:1.8,marginBottom:16};