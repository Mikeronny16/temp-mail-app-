export default function Footer() {
  return (
    <footer style={{ padding: '3rem 5rem', background: '#1A2B1C', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div className="display" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#8AAE8D', marginBottom: '0.4rem' }}>Verdure</div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>Fresh · Seasonal · Modern</p>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {['Menu', 'About', 'Gallery', 'Reserve', 'Contact'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#8AAE8D')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>{link}</a>
        ))}
      </div>
      <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>© 2025 Verdure. All rights reserved.</p>
    </footer>
  )
}
