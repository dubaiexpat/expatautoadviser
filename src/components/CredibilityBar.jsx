const items = [
  { icon: '🔍', label: 'To Trust or Not', desc: 'We tell you which providers to use — and which to avoid' },
  { icon: '⚡', label: 'Up-to-date pricing', desc: 'COE and FRT data updated monthly' },
];

export default function CredibilityBar() {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      padding: '20px 24px',
      margin: '28px 0',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 16,
    }}>
      {items.map(({ icon, label, desc }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
          <div>
            <p style={{ margin: '0 0 2px', fontWeight: 700, fontSize: 13, color: '#1a1a2e' }}>{label}</p>
            <p style={{ margin: 0, fontSize: 12, color: '#6b7280', lineHeight: 1.5 }}>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
