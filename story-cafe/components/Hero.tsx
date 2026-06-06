'use client'
import { motion } from 'framer-motion'

export default function Hero({ lang }: { lang: 'en' | 'my' }) {
  const t = {
    en: {
      badge: 'South Okkalapa · Yangon',
      h1a: 'Write your', h1b: 'STORY', h1c: 'over a Coffee.',
      sub: 'A cozy corner where every cup tells a tale. Homemade food, specialty coffee, and a place to simply be.',
      cta1: 'See the Menu', cta2: 'Reserve a Table',
      mustOrder: 'Must Order', fries: 'French Fries (Homemade)', friesPrice: '10,000 MMK',
      specialty: 'Specialty Coffee', food: 'Homemade Food',
      followers: 'Followers', recommend: 'Recommend', posts: 'Posts',
    },
    my: {
      badge: 'တောင်ဥက္ကလာ · ရန်ကုန်',
      h1a: 'သင့်ဇာတ်လမ်းကို', h1b: 'ကော်ဖီနဲ့', h1c: 'ရေးကြပါ။',
      sub: 'နွေးထွေးတဲ့ထောင့်ကလေးမှာ ကော်ဖီတစ်ခွက်နဲ့ ဇာတ်လမ်းတစ်ပုဒ် ဖန်တီးပါ။',
      cta1: 'မီနူးကြည့်ရန်', cta2: 'စားပွဲမှာရန်',
      mustOrder: 'မှာသင့်တဲ့', fries: 'ကြာမှောင်ကြော် (အိမ်လုပ်)', friesPrice: '၁၀,၀၀၀ ကျပ်',
      specialty: 'ထူးခြားသောကော်ဖီ', food: 'အိမ်လုပ်အစားအသောက်',
      followers: 'နောက်လိုက်', recommend: 'ထောက်ခံကြ', posts: 'ပို့စ်များ',
    },
  }[lang]

  return (
    <section id="home" style={{ minHeight: '100vh', padding: '0 2rem', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, width: '100%', margin: '0 auto', paddingTop: '6rem', paddingBottom: '4rem' }}>

        {/* Bento grid hero */}
        <div className="bento-grid">

          {/* Left column — headline + stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Big headline card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1.5rem', padding: '2.5rem', boxShadow: '0 4px 24px rgba(28,17,8,0.07)' }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--terra-pale)', border: '1px solid var(--border)', borderRadius: '999px', padding: '0.3rem 0.9rem', marginBottom: '1.5rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--terra)', display: 'inline-block' }} />
                <span className={lang === 'my' ? 'myanmar' : ''} style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--terra)', letterSpacing: '0.1em', textTransform: lang === 'en' ? 'uppercase' : 'none' }}>{t.badge}</span>
              </div>

              <h1 className="display" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 700, lineHeight: 1.08, color: 'var(--text)', marginBottom: '1.2rem' }}>
                <span className={lang === 'my' ? 'myanmar' : ''} style={{ display: 'block', fontSize: lang === 'my' ? 'clamp(1.6rem, 3.5vw, 2.8rem)' : undefined }}>{t.h1a}</span>
                <em style={{ color: 'var(--terra)', fontStyle: 'italic' }}>{t.h1b}</em>
                <span className={lang === 'my' ? 'myanmar' : ''} style={{ display: 'block', fontSize: lang === 'my' ? 'clamp(1.6rem, 3.5vw, 2.8rem)' : undefined }}>{t.h1c}</span>
              </h1>

              <p className={lang === 'my' ? 'myanmar' : ''} style={{ color: 'var(--text-muted)', fontSize: lang === 'my' ? '0.92rem' : '0.97rem', lineHeight: 1.8, maxWidth: 400, marginBottom: '2rem' }}>{t.sub}</p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="#menu" style={{ background: 'var(--terra)', color: '#fff', padding: '0.8rem 1.8rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 700, fontSize: '0.875rem', boxShadow: '0 6px 18px var(--terra-glow)' }}
                  className={lang === 'my' ? 'myanmar' : ''}>{t.cta1}</a>
                <a href="#reserve" style={{ background: 'transparent', color: 'var(--terra)', padding: '0.8rem 1.8rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 600, fontSize: '0.875rem', border: '1.5px solid var(--terra)' }}
                  className={lang === 'my' ? 'myanmar' : ''}>{t.cta2}</a>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.75rem' }}
            >
              {[{ v: '35K+', l: t.followers }, { v: '96%', l: t.recommend }, { v: '881', l: t.posts }].map(s => (
                <div key={s.l} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '1.1rem', textAlign: 'center', boxShadow: '0 2px 12px rgba(28,17,8,0.05)' }}>
                  <div className="display" style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '-0.03em' }}>{s.v}</div>
                  <div className={lang === 'my' ? 'myanmar' : ''} style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — photo cards */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
          >
            {/* Main photo */}
            <div style={{ borderRadius: '1.25rem', overflow: 'hidden', height: 280, position: 'relative', boxShadow: '0 12px 40px rgba(28,17,8,0.13)' }}>
              <div style={{ position: 'absolute', inset: 0, background: `url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=85") center/cover` }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,17,8,0.4) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--terra)', color: '#fff', borderRadius: '999px', padding: '0.28rem 0.8rem', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em' }}>✦ 35K Community</div>
            </div>

            {/* Two small cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              <div style={{ borderRadius: '1rem', overflow: 'hidden', height: 130, position: 'relative', boxShadow: '0 6px 20px rgba(28,17,8,0.10)' }}>
                <div style={{ position: 'absolute', inset: 0, background: `url("https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80") center/cover` }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,17,8,0.5) 0%, transparent 55%)' }} />
                <div className={lang === 'my' ? 'myanmar' : ''} style={{ position: 'absolute', bottom: '0.7rem', left: '0.75rem', fontSize: '0.68rem', color: '#fff', fontWeight: 600 }}>{t.specialty}</div>
              </div>
              <div style={{ borderRadius: '1rem', overflow: 'hidden', height: 130, position: 'relative', boxShadow: '0 6px 20px rgba(28,17,8,0.10)' }}>
                <div style={{ position: 'absolute', inset: 0, background: `url("https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80") center/cover` }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,17,8,0.5) 0%, transparent 55%)' }} />
                <div className={lang === 'my' ? 'myanmar' : ''} style={{ position: 'absolute', bottom: '0.7rem', left: '0.75rem', fontSize: '0.68rem', color: '#fff', fontWeight: 600 }}>{t.food}</div>
              </div>
            </div>

            {/* Must Order badge */}
            <div style={{ background: 'var(--surface)', border: '1.5px solid var(--border)', borderRadius: '1rem', padding: '0.9rem 1rem', display: 'flex', gap: '0.75rem', alignItems: 'center', boxShadow: '0 4px 16px rgba(28,17,8,0.06)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '0.6rem', background: 'var(--terra-pale)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>🍟</div>
              <div>
                <div className={lang === 'my' ? 'myanmar' : ''} style={{ fontSize: '0.6rem', color: 'var(--green)', fontWeight: 700, letterSpacing: '0.1em', textTransform: lang === 'en' ? 'uppercase' : 'none', marginBottom: '0.1rem' }}>{t.mustOrder}</div>
                <div className={lang === 'my' ? 'myanmar' : ''} style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{t.fries}</div>
                <div className={lang === 'my' ? 'myanmar' : ''} style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{t.friesPrice} · Classic / Spicy / Cheesy</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
