import { useState, useRef, useEffect } from 'react';

const SYSTEM_PROMPT = `You are Patrick Whitmore, a friendly British expat who has lived in both Singapore and Hong Kong for many years. You're deeply knowledgeable about car leasing, buying, insurance, COE bidding in Singapore, FRT tax in Hong Kong, licence conversion, and the overall expat car ownership experience in both cities.

Your personality: warm, practical, slightly self-deprecating British humour. You speak from personal experience. You're never pushy but naturally guide people toward the relevant guide pages when it's helpful.

When someone seems ready to make a decision or wants specific recommendations, gently suggest they fill in the lead capture form.

Always be honest about the limits of general guidance vs professional financial/legal advice.

Current guides available:
Singapore: Should I Get a Car, Buying Guide, Leasing Guide, Insurance Guide, Licence Conversion, EV Guide, Calculators, Garage Finder, Lease Checker
Hong Kong: Should I Get a Car, Buying Guide, Leasing Guide, FRT Tax Explained, Insurance Guide, MOT & Maintenance, Licence Conversion, EV Guide, Calculators, Garage Finder, Lease Checker`;

export default function AskPatrick() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const PATRICK_IMG = "/Firefly_GeminiFlash_picture%20of%20a%20white%2040%20year%20old%20clean%20shaven%20man%20in%20smart%20casual%20clothes%20with%20dark%20hai%20966416%20(1).png";

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', content: "Hi! I'm Patrick. Whether you're weighing up COE costs in Singapore or trying to figure out HK's FRT, I'm happy to help. What's on your mind?" }]);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
      if (!apiKey) {
        setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, the chat service isn't configured yet. Check out the guides!" }]);
        setLoading(false);
        return;
      }
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json', 'anthropic-dangerous-allow-browser': 'true' },
        body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 600, system: SYSTEM_PROMPT, messages: newMessages.slice(-10) }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.content?.[0]?.text || "Sorry, couldn't get a response!" }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, something went wrong. Check the guides for now!" }]);
    }
    setLoading(false);
  }

  return (
    <>
      <button onClick={() => setOpen(o => !o)}
        style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999, width: 60, height: 60, borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0, boxShadow: '0 4px 20px rgba(0,0,0,0.25)', overflow: 'hidden', background: 'transparent' }}
        aria-label="Ask Patrick">
        <img src={PATRICK_IMG} alt="Patrick" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </button>
      {open && (
        <div style={{ position: 'fixed', bottom: 96, right: 24, zIndex: 9998, width: 'min(380px, calc(100vw - 48px))', height: 520, background: '#fff', borderRadius: 16, boxShadow: '0 8px 40px rgba(0,0,0,0.18)', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
          <div style={{ background: '#1a1a2e', color: '#fff', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src={PATRICK_IMG} alt="" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Ask Patrick</div>
              <div style={{ fontSize: 12, opacity: 0.75 }}>Expat car expert &middot; SG &amp; HK</div>
            </div>
            <button onClick={() => setOpen(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer', opacity: 0.7, lineHeight: 1 }}>&times;</button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ maxWidth: '82%', padding: '10px 14px', borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px', background: m.role === 'user' ? '#e63946' : '#f1f5f9', color: m.role === 'user' ? '#fff' : '#1e293b', fontSize: 14, lineHeight: 1.55, whiteSpace: 'pre-wrap' }}>{m.content}</div>
              </div>
            ))}
            {loading && <div style={{ display: 'flex', justifyContent: 'flex-start' }}><div style={{ padding: '10px 14px', borderRadius: '16px 16px 16px 4px', background: '#f1f5f9', color: '#64748b', fontSize: 14 }}>Patrick is typing&hellip;</div></div>}
            <div ref={bottomRef} />
          </div>
          <div style={{ padding: '12px 16px', borderTop: '1px solid #e2e8f0', display: 'flex', gap: 8 }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()} placeholder="Ask about COE, leasing, FRT&hellip;"
              style={{ flex: 1, padding: '10px 14px', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: 14, outline: 'none' }} />
            <button onClick={sendMessage} disabled={loading} style={{ background: '#e63946', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 16px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Send</button>
          </div>
          <div style={{ padding: '8px 16px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: 11, color: '#94a3b8', textAlign: 'center' }}>General guidance only &mdash; not professional financial or legal advice.</div>
        </div>
      )}
    </>
  );
}
