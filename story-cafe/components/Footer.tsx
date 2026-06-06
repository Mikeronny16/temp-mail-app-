export default function Footer() {
  return (
    <footer style={{ background: 'var(--blue)', padding: '3rem 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div className="display" style={{ fontSize: '1.15rem', fontWeight: 900, color: '#fff', marginBottom: '0.3rem', letterSpacing: '-0.02em' }}>The STORY Cafe</div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }}>Write your STORY over a Coffee ☕</p>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[['Menu', '#menu'], ['Drinks', '#drinks'], ['Gallery', '#gallery'], ['Location', '#location']].map(([l, h]) => (
            <a key={l} href={h} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >{l}</a>
          ))}
        </div>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.72rem' }}>© 2025 The STORY Cafe, Yangon</p>
      </div>
    </footer>
  )
}
