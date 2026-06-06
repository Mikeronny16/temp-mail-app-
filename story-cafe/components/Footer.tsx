'use client'

export default function Footer({ lang }: { lang: 'en' | 'my' }) {
  return (
    <footer style={{ background: 'var(--blue)', color: 'rgba(255,255,255,0.6)', padding: '3rem 2.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.10)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="22" height="36" viewBox="0 0 60 100">
              <path d="M 45 10 C 45 10, 10 25, 30 50 C 50 75, 15 90, 15 90" fill="none" stroke="#F0B429" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <div>
              <div className="display" style={{ color: '#fff', fontSize: '1.1rem', fontStyle: 'italic' }}>The Story Cafe</div>
              <div className="myanmar" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem' }}>ဇာတ်လမ်းကဖေး</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://www.facebook.com/thestorycafe.88" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.8rem' }}>Facebook</a>
            <a href="https://www.instagram.com/thestorycafe.88" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.8rem' }}>Instagram</a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.72rem' }}>
          <span className={lang === 'my' ? 'myanmar' : ''} style={{ color: 'rgba(255,255,255,0.35)' }}>
            {lang === 'en' ? '© 2024 The Story Cafe · No.207 Parami Rd, South Okkalapa, Yangon' : '© ၂၀၂၄ The Story Cafe · ပါရမီလမ်း ၂၀၇ · တောင်ဥက္ကလာ'}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>Open daily 8AM – 10PM</span>
        </div>
      </div>
    </footer>
  )
}
