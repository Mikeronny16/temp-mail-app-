'use client'

export default function Footer({ lang }: { lang: 'en' | 'my' }) {
  return (
    <footer style={{ background: 'var(--text)', color: 'rgba(245,239,224,0.7)', padding: '3rem 2.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(245,239,224,0.1)' }}>
          <div>
            <div className="display" style={{ color: 'var(--terra-lt)', fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '0.3rem' }}>The Story Cafe</div>
            <div className="myanmar" style={{ color: 'rgba(245,239,224,0.5)', fontSize: '0.75rem' }}>ဇာတ်လမ်းကဖေး</div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://www.facebook.com/thestorycafe.88" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245,239,224,0.5)', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }}>Facebook</a>
            <a href="https://www.instagram.com/thestorycafe.88" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245,239,224,0.5)', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }}>Instagram</a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.72rem' }}>
          <span className={lang === 'my' ? 'myanmar' : ''} style={{ color: 'rgba(245,239,224,0.4)' }}>
            {lang === 'en' ? '© 2024 The Story Cafe. No.207 Parami Rd, South Okkalapa, Yangon.' : '© ၂၀၂၄ The Story Cafe · ပါရမီလမ်း ၂၀၇ · တောင်ဥက္ကလာ'}
          </span>
          <span style={{ color: 'rgba(245,239,224,0.25)' }}>Open daily 8AM – 10PM</span>
        </div>
      </div>
    </footer>
  )
}
