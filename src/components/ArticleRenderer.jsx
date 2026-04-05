import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const h1Style = { fontSize: 36, fontWeight: 800, color: '#1e3a5f', marginBottom: 16, lineHeight: 1.2, marginTop: 0 };
const h2Style = { fontSize: 24, fontWeight: 700, color: '#1e3a5f', margin: '40px 0 14px', lineHeight: 1.3 };
const h3Style = { fontSize: 19, fontWeight: 700, color: '#1e3a5f', margin: '28px 0 10px', lineHeight: 1.4 };
const pStyle = { fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 16 };
const ulStyle = { fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 20, paddingLeft: 24 };
const liStyle = { marginBottom: 8 };
const strongStyle = { color: '#1e3a5f', fontWeight: 700 };
const emStyle = { fontStyle: 'italic' };
const tableWrap = { background: 'white', border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden', margin: '16px 0 28px' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', fontSize: 14 };
const theadStyle = { background: '#f9fafb' };
const thStyle = { padding: '12px 16px', textAlign: 'left', fontWeight: 600, fontSize: 13, color: '#374151', borderBottom: '1px solid #e5e7eb' };
const tdStyle = { padding: '12px 16px', color: '#374151', fontSize: 14, borderTop: '1px solid #f3f4f6' };
const blockquoteStyle = { borderLeft: '4px solid #2a9d8f', background: '#f0fdfa', padding: '14px 20px', margin: '20px 0', color: '#134e4a', fontSize: 15, lineHeight: 1.7, borderRadius: '0 8px 8px 0' };
const hrStyle = { border: 'none', borderTop: '1px solid #e5e7eb', margin: '36px 0' };
const codeStyle = { background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: '0.92em', fontFamily: 'Menlo, Monaco, Consolas, monospace' };

const components = {
  h1: ({ children }) => <h1 style={h1Style}>{children}</h1>,
  h2: ({ children }) => <h2 style={h2Style}>{children}</h2>,
  h3: ({ children }) => <h3 style={h3Style}>{children}</h3>,
  p: ({ children }) => <p style={pStyle}>{children}</p>,
  ul: ({ children }) => <ul style={ulStyle}>{children}</ul>,
  ol: ({ children }) => <ol style={{ ...ulStyle, listStyleType: 'decimal' }}>{children}</ol>,
  li: ({ children }) => <li style={liStyle}>{children}</li>,
  strong: ({ children }) => <strong style={strongStyle}>{children}</strong>,
  em: ({ children }) => <em style={emStyle}>{children}</em>,
  blockquote: ({ children }) => <blockquote style={blockquoteStyle}>{children}</blockquote>,
  hr: () => <hr style={hrStyle} />,
  code: ({ inline, children }) => inline ? <code style={codeStyle}>{children}</code> : <pre style={{ ...codeStyle, display: 'block', padding: 16, overflowX: 'auto' }}><code>{children}</code></pre>,
  table: ({ children }) => <div style={tableWrap}><table style={tableStyle}>{children}</table></div>,
  thead: ({ children }) => <thead style={theadStyle}>{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr>{children}</tr>,
  th: ({ children }) => <th style={thStyle}>{children}</th>,
  td: ({ children }) => <td style={tdStyle}>{children}</td>,
  a: ({ href, children }) => <a href={href} style={{ color: '#0d9488', textDecoration: 'underline' }} target={href && href.startsWith('http') ? '_blank' : undefined} rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined}>{children}</a>,
};

export default function ArticleRenderer({ markdown }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {markdown}
    </ReactMarkdown>
  );
}
