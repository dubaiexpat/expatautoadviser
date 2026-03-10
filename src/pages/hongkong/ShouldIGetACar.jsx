import Layout from "../../components/Layout";
import PatrickTip from "../../components/PatrickTip";
import { Link } from "react-router-dom";

export default function HKShouldIGetACar() {
  return (
    <Layout city="hk" title="Should I Get a Car in Hong Kong?" description="Honest advice for expats deciding whether to buy or lease a car in Hong Kong. MTR alternatives, where a car makes sense, and a practical decision guide.">
      <div style={{maxWidth:760}}>
        <p style={{color:"#0d9488",fontWeight:600,fontSize:13,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>Hong Kong</p>
        <h1 style={{fontSize:36,fontWeight:800,color:"#1e3a5f",marginBottom:16,lineHeight:1.2}}>Should I Get a Car in Hong Kong?</h1>
        <p style={{fontSize:17,color:"#6b7280",lineHeight:1.7,marginBottom:40}}>Unlike Singapore, the answer in Hong Kong genuinely depends on where you live. Your postcode is the single most important variable.</p>

        <h2 style={h2}>The MTR is excellent â in the right places</h2>
        <p style={body}>Hong Kong's MTR is fast, reliable, air-conditioned, and covers most of Hong Kong Island, Kowloon, and significant parts of the New Territories. If you live in Central, Wan Chai, Causeway Bay, or anywhere within easy walking distance of an MTR station â you genuinely may not need a car.</p>
        <p style={body}>Minibuses and taxis fill most of the gaps. Uber is available and reasonably priced. For most CBD and mid-levels expats, a car is more hassle than it's worth: you'll spend more time finding parking than driving.</p>

        <h2 style={h2}>Where a car changes everything</h2>
        <p style={body}>Move east to Sai Kung, south to Stanley or Repulse Bay, or into the New Territories â and the MTR becomes useless or irrelevant. The South Side and eastern NT are served by buses that run infrequently and take forever. Sai Kung has no MTR at all.</p>
        <p style={body}>For families with children in schools outside the MTR corridor, or expats who value weekend hiking and beach access, a car is less a luxury and more a necessity.</p>

        <h2 style={h2}>Quick decision guide</h2>
        <div style={{background:"white",border:"1px solid #e5e7eb",borderRadius:10,padding:24,margin:"16px 0 32px"}}>
          {[{q:"Do you live in Sai Kung, Stanley, South Side, NT, or DB?",lean:"Get a car"},
            {q:"Do you live within 5 mins walk of an MTR station?",lean:"Probably skip it"},
            {q:"Do you have school-age children?",lean:"Lean: get a car"},
            {q:"Will you be here 2+ years?",lean:"Buying used makes sense"},
            {q:"Will you be here under 18 months?",lean:"Rent or skip"},
            {q:"Is parking at your building included?",lean:"Strong signal to get a car"},
          ].map(({q,lean}) => (
            <div key={q} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid #f3f4f6",gap:16}}>
              <span style={{color:"#374151",fontSize:15}}>{q}</span>
              <span style={{fontSize:13,fontWeight:600,color:lean.includes("Get")||lean.includes("get")?"#0d9488":"#6b7280",whiteSpace:"nowrap"}}>{lean}</span>
            </div>
          ))}
        </div>

        <h2 style={h2}>The cost reality</h2>
        <p style={body}>Cars in Hong Kong are expensive to run. Petrol runs at <strong>HKD $24â27/litre</strong>. Monthly parking in most urban areas costs <strong>HKD $2,000â$6,000</strong>. Add insurance, annual vehicle licence, and maintenance, and you're looking at HKD $6,000â$12,000/month in total running costs for a typical mid-range car.</p>
        <p style={body}>For most expats, the right strategy is to <strong>buy a used car</strong> (which avoids the First Registration Tax that inflates new car prices dramatically) and sell it when you leave. See the <Link to="/hongkong/buying-guide" style={{color:"#0d9488"}}>Hong Kong Buying Guide</Link> for the full process.</p>

        <PatrickTip city="hk">"In HK I bought. I lived in Sai Kung â the MTR was useless to me. Clear Water Bay Road at 7am, windows down, driving to school: genuinely one of the best things about living there. But on HK Island? Working in Central? I'd probably have skipped it entirely and used Uber for evenings. Know your geography before you decide."</PatrickTip>
      </div>
    </Layout>
  );
}
const h2 = {fontSize:22,fontWeight:700,color:"#1e3a5f",margin:"36px 0 12px"};
const body = {fontSize:16,color:"#374151",lineHeight:1.8,marginBottom:16};