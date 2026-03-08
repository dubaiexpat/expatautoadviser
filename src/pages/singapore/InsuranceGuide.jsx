import Layout from "../../components/Layout";
import PatrickTip from "../../components/PatrickTip";

export default function SGInsuranceGuide() {
  return (
    <Layout city="sg" title="Singapore Car Insurance Guide for Expats" description="Car insurance in Singapore explained for expats: what's bundled in leases, NCD transfers, third-party vs comprehensive.">
      <div style={{maxWidth:760}}>
        <p style={{color:"#e8341c",fontWeight:600,fontSize:13,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>Singapore</p>
        <h1 style={{fontSize:36,fontWeight:800,color:"#1e3a5f",marginBottom:16,lineHeight:1.2}}>Car Insurance in Singapore: What Expats Need to Know</h1>
        <p style={{fontSize:17,color:"#6b7280",lineHeight:1.7,marginBottom:40}}>The good news: if you're leasing, insurance is almost certainly already sorted.</p>

        <h2 style={h2}>Insurance is normally bundled in leases</h2>
        <p style={body}>The vast majority of Singapore car leases include comprehensive insurance as part of the monthly fee. Before signing your lease, confirm: (a) that insurance is included, (b) whether it's comprehensive or only third-party, and (c) what the excess is. SGD $1,000–$3,200 is typical.</p>

        <h2 style={h2}>No Claims Discount (NCD) — using your overseas history</h2>
        <p style={body}>Singapore insurance operates on a No Claims Discount system: discounts range from 10% (1 year) to 50% (5+ years). If you have a clean claims history from overseas (UK, Australia, US, etc.), many Singapore insurers will honour this. You'll need a letter from your previous insurer confirming your NCD status.</p>

        <h2 style={h2}>If your lease doesn't include insurance</h2>
        <p style={body}>Major Singapore insurers include AXA, NTUC Income, Tokio Marine, and DirectAsia. Expect to pay roughly <strong>SGD $1,500–$3,000/year</strong> for comprehensive coverage on an economy car with no SG NCD history.</p>

        <PatrickTip city="sg">"Ask your lease company what the excess is before anything else. I once had a minor scrape in a carpark and the excess was SGD $2,500. Worth knowing ahead of time."</PatrickTip>
      </div>
    </Layout>
  );
}
const h2 = {fontSize:22,fontWeight:700,color:"#1e3a5f",margin:"36px 0 12px"};
const body = {fontSize:16,color:"#374151",lineHeight:1.8,marginBottom:16};