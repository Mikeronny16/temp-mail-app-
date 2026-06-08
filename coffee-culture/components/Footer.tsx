export default function Footer() {
  return (
    <footer style={{ padding: '3rem 6rem', background: 'var(--surface)', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div className="display" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '0.35rem', fontStyle: 'italic' }}>Coffee Culture</div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Everyone Deserves Love and Coffee ☕</p>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {[['Menu', '#menu'], ['Signatures', '#signatures'], ['Location', '#location']].map(([label, href]) => (
          <a key={label} href={href} style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>{label}</a>
        ))}
      </div>
      <p style={{ color: 'rgba(240,235,224,0.2)', fontSize: '0.75rem' }}>&copy; 2025 Coffee Culture, Yangon</p>
    </footer>
  )
}
