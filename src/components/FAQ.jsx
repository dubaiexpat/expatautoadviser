// FAQ — collapsible FAQ section for guide pages
// Great for SEO (FAQ schema) and reduces bounce rate by answering anxieties inline.

import { useState } from "react";

function FAQItem({ question, answer, accent, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: "1px solid #f3f4f6", padding: "0" }}>
      <button
        onClick={onToggle}
        style={{ width: "100%", textAlign: "left", background: "none", border: "none",
          padding: "18px 0", cursor: "pointer", display: "flex",
          justifyContent: "space-between", alignItems: "center", gap: 16 }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: "#1e3a5f", lineHeight: 1.4 }}>
          {question}
        </span>
        <span style={{ fontSize: 20, color: accent, flexShrink: 0,
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease", lineHeight: 1 }}>
          +
        </span>
      </button>
      {isOpen && (
        <div style={{ paddingBottom: 18, fontSize: 15, color: "#374151", lineHeight: 1.75 }}>
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ({ items, city }) {
  const [openIndex, setOpenIndex] = useState(null);
  const accent = city === "sg" ? "#e8341c" : "#0d9488";

  return (
    <div style={{ margin: "40px 0" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1e3a5f", margin: "0 0 6px", lineHeight: 1.3 }}>
        Frequently Asked Questions
      </h2>
      <p style={{ fontSize: 14, color: "#9ca3af", margin: "0 0 24px" }}>
        The questions Patrick gets asked most often.
      </p>
      <div style={{ background: "white", border: "1.5px solid #e5e7eb", borderRadius: 12, padding: "0 24px" }}>
        {items.map((item, i) => (
          <FAQItem
            key={i}
            question={item.q}
            answer={item.a}
            accent={accent}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
}
