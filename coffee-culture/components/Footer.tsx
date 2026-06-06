export default function Footer() {
  return (
<<<<<<< HEAD
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
=======
    <footer style={{
      padding: '3rem 2.5rem',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(201,168,76,0.02) 100%)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1.5rem',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
    }}>
      <div>
        <div className="display" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '0.3rem', fontStyle: 'italic' }}>Coffee Culture</div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Everyone Deserves Love and Coffee ☕</p>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[['Menu', '#menu'], ['Signatures', '#signatures'], ['Gallery', '#gallery'], ['Location', '#location']].map(([label, href]) => (
          <a key={label} href={href} style={{ color: 'var(--text-muted)', fontSize: '0.78rem', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >{label}</a>
        ))}
      </div>
      <p style={{ color: 'rgba(240,235,224,0.2)', fontSize: '0.72rem' }}>© 2025 Coffee Culture, Yangon</p>
>>>>>>> claude/jolly-turing-c3LGh
    </footer>
  )
}
