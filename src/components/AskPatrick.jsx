// AskPatrick — embedded AI chat widget for guide pages
import { useState, useRef, useEffect } from "react";

const PATRICK_IMG = "/Firefly_GeminiFlash_picture%20of%20a%20white%2040%20year%20old%20clean%20shaven%20man%20in%20smart%20casual%20clothes%20with%20dark%20hai%20966416%20(1).png";

const QUICK_QUESTIONS = {
  sg: [
    "Should I lease or buy in Singapore?",
    "How much does a lease cost per month?",
    "Can I use my UK driving licence?",
  ],
  hk: [
    "Do I actually need a car in HK?",
    "How does FRT work on a new car?",
    "Can I transfer my UK no-claims discount?",
  ],
};

function TypingIndicator({ accent }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px" }}>
      <img src={PATRICK_IMG} alt="Patrick" style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", objectPosition: "center top", flexShrink: 0 }} />
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: accent,
            animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }} />
        ))}
      </div>
      <style>{`@keyframes bounce { 0%,80%,100%{transform:scale(0.6);opacity:0.4} 40%{transform:scale(1);opacity:1} }`}</style>
    </div>
  );
}

function Message({ msg, accent }) {
  const isPatrick = msg.role === "assistant";
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "flex-start", flexDirection: isPatrick ? "row" : "row-reverse", marginBottom: 12 }}>
      {isPatrick && (
        <img src={PATRICK_IMG} alt="Patrick" style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", objectPosition: "center top", flexShrink: 0, marginTop: 2 }} />
      )}
      <div style={{ maxWidth: "78%", padding: "10px 14px",
        borderRadius: isPatrick ? "4px 14px 14px 14px" : "14px 4px 14px 14px",
        background: isPatrick ? "white" : accent,
        border: isPatrick ? "1px solid #e5e7eb" : "none",
        fontSize: 14, color: isPatrick ? "#1e3a5f" : "white", lineHeight: 1.6,
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
        {msg.content}
      </div>
    </div>
  );
}

export default function AskPatrick({ city }) {
  const accent = city === "sg" ? "#e8341c" : "#0d9488";
  const quickQuestions = QUICK_QUESTIONS[city] || QUICK_QUESTIONS.sg;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  async function sendMessage(text) {
    if (!text.trim() || loading) return;
    setError(null);
    setStarted(true);
    const userMsg = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, city }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setError("Sorry, something went wrong. Try again in a moment.");
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
  }

  return (
    <div style={{ margin: "48px 0 0", borderTop: "2px solid #f3f4f6", paddingTop: 40 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <img src={PATRICK_IMG} alt="Patrick" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: `2px solid ${accent}` }} />
        <div>
          <p style={{ fontSize: 17, fontWeight: 700, color: "#1e3a5f", margin: 0 }}>Ask Patrick</p>
          <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>AI trained on Patrick's guides · Answers in seconds</p>
        </div>
      </div>
      <div style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb", borderRadius: 14, overflow: "hidden" }}>
        <div style={{ minHeight: 160, maxHeight: 380, overflowY: "auto", padding: "16px 12px 8px" }}>
          {!started && messages.length === 0 ? (
            <div>
              <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 12px", paddingLeft: 4 }}>Common questions:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {quickQuestions.map(q => (
                  <button key={q} onClick={() => sendMessage(q)}
                    style={{ textAlign: "left", background: "white", border: `1.5px solid ${accent}20`,
                      borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#1e3a5f",
                      cursor: "pointer", transition: "all 0.15s", fontFamily: "inherit" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.background = `${accent}08`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = `${accent}20`; e.currentTarget.style.background = "white"; }}
                  >{q}</button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              {messages.map((msg, i) => <Message key={i} msg={msg} accent={accent} />)}
              {loading && <TypingIndicator accent={accent} />}
              {error && <p style={{ fontSize: 13, color: "#ef4444", padding: "8px 12px", background: "#fef2f2", borderRadius: 8, margin: "4px 0" }}>{error}</p>}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
        <div style={{ borderTop: "1px solid #e5e7eb", background: "white", padding: "10px 12px", display: "flex", gap: 8, alignItems: "flex-end" }}>
          <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown}
            placeholder="Ask anything about cars in Singapore or HK…" rows={1}
            style={{ flex: 1, resize: "none", border: "1.5px solid #e5e7eb", borderRadius: 8,
              padding: "9px 12px", fontSize: 14, color: "#1e3a5f", outline: "none",
              fontFamily: "inherit", lineHeight: 1.5, transition: "border-color 0.15s" }}
            onFocus={e => { e.target.style.borderColor = accent; }}
            onBlur={e => { e.target.style.borderColor = "#e5e7eb"; }}
          />
          <button onClick={() => sendMessage(input)} disabled={!input.trim() || loading}
            style={{ padding: "9px 18px", background: input.trim() && !loading ? accent : "#e5e7eb",
              color: input.trim() && !loading ? "white" : "#9ca3af", border: "none",
              borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: input.trim() && !loading ? "pointer" : "default",
              transition: "all 0.15s", flexShrink: 0, fontFamily: "inherit" }}>
            {loading ? "…" : "Ask →"}
          </button>
        </div>
      </div>
      <p style={{ fontSize: 11, color: "#9ca3af", margin: "8px 0 0", lineHeight: 1.5 }}>
        AI assistant — may occasionally be wrong. Always verify costs and rules with your provider.
      </p>
    </div>
  );
}
