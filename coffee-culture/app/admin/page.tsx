'use client'
import { useState, useEffect, useRef } from 'react'

const PASSWORD = 'coffeecultureygn'

const defaultMenu: Record<string, { name: string; price: string; note?: string }[]> = {
  'Espresso Bar': [
    { name: 'Espresso Single', price: '4,000 MMK' }, { name: 'Espresso Double', price: '5,000 MMK' },
    { name: 'Café Mocha (Hot)', price: '11,000 MMK' }, { name: 'Cappuccino (Hot)', price: '9,500 MMK' },
    { name: 'Americano (Hot)', price: '7,300 MMK' }, { name: 'Mocha (Iced)', price: '13,000 MMK' },
    { name: 'Café Latte (Hot/Iced)', price: '9,500 / 11,500 MMK' }, { name: 'Flavour Latte', price: '10,000 / 11,500 MMK', note: 'Hazelnut, Caramel, Vanilla' },
  ],
  'Signatures': [
    { name: 'Signature (Hot)', price: '10,000 MMK' }, { name: 'Café Margarita (Iced)', price: '7,000 MMK' },
    { name: 'Ocean Taste (Iced)', price: '8,000 MMK' }, { name: 'Signature (Iced)', price: '11,000 MMK' },
    { name: 'Matcha Strawberry (Iced)', price: '15,000 MMK', note: 'Best Seller' },
    { name: 'Orange Espresso (Iced)', price: '9,500 MMK' }, { name: 'Tonic Espresso (Iced)', price: '10,000 MMK' },
  ],
  'Italian Soda': [
    { name: 'Strawberry Soda', price: '9,000 MMK' }, { name: 'Blue Lemon Soda', price: '9,000 MMK' },
    { name: 'Raspberry Soda', price: '9,000 MMK' }, { name: 'Mango Soda', price: '9,000 MMK' },
    { name: 'Green Apple Soda', price: '9,000 MMK' }, { name: 'Kiwi Soda', price: '9,000 MMK' },
  ],
  'Non-Coffee': [
    { name: 'Chocolate (Hot/Iced)', price: '10,000 MMK' }, { name: 'Matcha Latte (Hot/Iced)', price: '10,000 MMK' },
    { name: 'Lemon Tea (Iced)', price: '8,000 MMK' }, { name: 'Jasmine Tea', price: '3,500 MMK' },
    { name: 'Pinky Thai Tea (Iced)', price: '10,000 MMK' }, { name: 'Thai Milk Tea (Iced)', price: '9,000 MMK' },
  ],
  'Smoothies': [
    { name: 'Papaya Smoothie', price: '14,000 MMK' }, { name: 'Avocado Smoothie', price: '14,000 MMK' },
    { name: 'Strawberry Smoothie', price: '14,000 MMK' }, { name: 'Mango Smoothie', price: '14,000 MMK' },
  ],
  'Food': [
    { name: 'Grilled BBQ Burger', price: '18,000 MMK', note: 'Chicken/Pork' },
    { name: 'Club Sandwich', price: '15,000 MMK' }, { name: 'Tuna Sandwich', price: '15,000 MMK' },
    { name: 'Chicken Spring Roll', price: '12,000 MMK' }, { name: 'Fried Noodle', price: '10,000–15,000 MMK', note: 'Chicken/Pork/Prawn/Veg' },
    { name: 'Green Tea Leaf Rice Salad', price: '15,000 MMK' },
  ],
}

const defaultGallery = [
  'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&q=80',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80',
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
  'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=500&q=80',
  'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80',
]

/* ── Shared input style ── */
const inp: React.CSSProperties = {
  padding: '0.6rem 0.8rem', borderRadius: '0.5rem',
  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)',
  color: 'var(--text)', fontSize: '0.82rem', outline: 'none', fontFamily: 'inherit',
}

function UploadBtn({ label, current, onChange }: { label: string; current: string; onChange: (url: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null)
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => onChange(ev.target?.result as string)
    reader.readAsDataURL(file)
  }
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ fontSize: '0.68rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{label}</div>
      {current && (
        <div style={{ borderRadius: '0.65rem', overflow: 'hidden', height: 120, marginBottom: '0.6rem', border: '1px solid rgba(255,255,255,0.08)', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: `url("${current}") center/cover`, filter: 'brightness(0.75)' }} />
        </div>
      )}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button type="button" onClick={() => fileRef.current?.click()} style={{ ...inp, cursor: 'pointer', padding: '0.55rem 1rem', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', color: 'var(--gold)', fontWeight: 600, fontSize: '0.78rem', borderRadius: '0.5rem' }}>
          📁 Upload Photo
        </button>
        <input value={current.startsWith('data:') ? '' : current} onChange={e => onChange(e.target.value)}
          placeholder="or paste URL..." style={{ ...inp, flex: 1 }} />
      </div>
      <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />
    </div>
  )
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [pwErr, setPwErr] = useState(false)
  const [tab, setTab] = useState<'analytics' | 'photos' | 'menu'>('analytics')
  const [saved, setSaved] = useState(false)

  const [heroImg, setHeroImg] = useState('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80')
  const [sigImgs, setSigImgs] = useState(['https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80', 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80'])
  const [galleryImgs, setGalleryImgs] = useState(defaultGallery)
  const [menu, setMenu] = useState(defaultMenu)
  const [menuCat, setMenuCat] = useState('Espresso Bar')
  const [todaySpecial, setTodaySpecial] = useState('Matcha Strawberry')
  const [todayPrice, setTodayPrice] = useState('15,000 MMK')

  useEffect(() => {
    const s = localStorage.getItem('cc_admin_v2')
    if (s) { const d = JSON.parse(s); setHeroImg(d.heroImg ?? heroImg); setSigImgs(d.sigImgs ?? sigImgs); setGalleryImgs(d.galleryImgs ?? galleryImgs); setMenu(d.menu ?? menu); setTodaySpecial(d.todaySpecial ?? todaySpecial); setTodayPrice(d.todayPrice ?? todayPrice) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const save = () => {
    localStorage.setItem('cc_admin_v2', JSON.stringify({ heroImg, sigImgs, galleryImgs, menu, todaySpecial, todayPrice }))
    setSaved(true); setTimeout(() => setSaved(false), 2500)
  }

  const updateMenuItem = (cat: string, idx: number, field: 'name' | 'price' | 'note', val: string) => {
    setMenu(prev => ({ ...prev, [cat]: prev[cat].map((item, i) => i === idx ? { ...item, [field]: val } : item) }))
  }
  const addMenuItem = (cat: string) => setMenu(prev => ({ ...prev, [cat]: [...prev[cat], { name: '', price: '', note: '' }] }))
  const removeMenuItem = (cat: string, idx: number) => setMenu(prev => ({ ...prev, [cat]: prev[cat].filter((_, i) => i !== idx) }))

  const statCard = (label: string, value: string, sub: string) => (
    <div key={label} style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', background: 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(201,168,76,0.04))', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '1rem', padding: '1.25rem', boxShadow: '0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.10)' }}>
      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>{label}</div>
      <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--gold)', fontFamily: 'Playfair Display, serif' }}>{value}</div>
      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{sub}</div>
    </div>
  )

  const weekData = [{ d: 'Mon', v: 142 }, { d: 'Tue', v: 198 }, { d: 'Wed', v: 167 }, { d: 'Thu', v: 221 }, { d: 'Fri', v: 289 }, { d: 'Sat', v: 312 }, { d: 'Sun', v: 205 }]
  const maxV = Math.max(...weekData.map(x => x.v))

  /* ─── Login ─── */
  if (!authed) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', padding: '2rem' }}>
      <div style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', background: 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(201,168,76,0.04))', border: '1px solid rgba(255,255,255,0.11)', borderRadius: '1.5rem', padding: '3rem 2.5rem', width: '100%', maxWidth: 360, textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>☕</div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: 'var(--gold)', fontStyle: 'italic', marginBottom: '0.4rem' }}>Admin Panel</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '2rem' }}>Coffee Culture · Yangon</p>
        <input type="password" placeholder="Password" value={pw} onChange={e => setPw(e.target.value)} onKeyDown={e => e.key === 'Enter' && (pw === PASSWORD ? (setAuthed(true), setPwErr(false)) : setPwErr(true))}
          style={{ ...inp, width: '100%', marginBottom: '0.65rem', textAlign: 'center', padding: '0.85rem', borderColor: pwErr ? 'rgba(255,80,80,0.5)' : 'rgba(255,255,255,0.10)', fontSize: '0.9rem' }} />
        {pwErr && <div style={{ color: 'rgba(255,100,100,0.9)', fontSize: '0.75rem', marginBottom: '0.65rem' }}>Wrong password</div>}
        <button onClick={() => pw === PASSWORD ? (setAuthed(true), setPwErr(false)) : setPwErr(true)}
          style={{ width: '100%', padding: '0.875rem', background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', color: '#07120A', border: 'none', borderRadius: '0.75rem', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'inherit' }}>
          Enter
        </button>
      </div>
    </div>
  )

  /* ─── Dashboard ─── */
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', maxWidth: 1100, margin: '0 auto 2rem' }}>
        <div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: 'var(--gold)', fontStyle: 'italic' }}>Coffee Culture</div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Admin Dashboard</div>
        </div>
        <div style={{ display: 'flex', gap: '0.65rem' }}>
          <a href="/" target="_blank" style={{ ...inp, cursor: 'pointer', padding: '0.45rem 1rem', fontSize: '0.78rem', textDecoration: 'none', color: 'var(--text-muted)' }}>View Site ↗</a>
          <button onClick={() => setAuthed(false)} style={{ ...inp, cursor: 'pointer', borderColor: 'rgba(255,80,80,0.3)', color: 'rgba(255,100,100,0.7)', padding: '0.45rem 1rem', fontSize: '0.78rem' }}>Logout</button>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
          {(['analytics', 'photos', 'menu'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '0.45rem 1.25rem', borderRadius: '999px', cursor: 'pointer', fontFamily: 'inherit', border: '1px solid', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderColor: tab === t ? 'rgba(201,168,76,0.6)' : 'rgba(255,255,255,0.09)', background: tab === t ? 'linear-gradient(135deg, rgba(201,168,76,0.88), rgba(232,201,106,0.75))' : 'rgba(255,255,255,0.05)', color: tab === t ? '#07120A' : 'var(--text-muted)', fontSize: '0.82rem', fontWeight: tab === t ? 700 : 400, textTransform: 'capitalize' }}>{t === 'analytics' ? '📊 Analytics' : t === 'photos' ? '🖼 Photos' : '📋 Menu'}</button>
          ))}
        </div>

        {/* ── ANALYTICS ── */}
        {tab === 'analytics' && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {statCard('Total Visits', '1,284', 'All time')}
              {statCard('This Week', '1,534', '+19% vs last week')}
              {statCard('Today', '127', 'Still counting')}
              {statCard('Avg. Session', '2m 14s', 'Time on site')}
            </div>
            {/* Bar chart */}
            <div style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.25rem', padding: '1.5rem', marginBottom: '1.25rem', boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Visitors — Last 7 Days</div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-end', height: 120 }}>
                {weekData.map(v => (
                  <div key={v.d} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', height: '100%', justifyContent: 'flex-end' }}>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{v.v}</div>
                    <div style={{ width: '100%', borderRadius: '3px 3px 0 0', background: 'linear-gradient(to top, var(--gold), var(--gold-light))', height: `${(v.v / maxV) * 100}%`, minHeight: 4, opacity: 0.85 }} />
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{v.d}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Top sections */}
            <div style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.25rem', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.1rem' }}>Top Sections</div>
              {[['#menu', 892, 58], ['#signatures', 645, 42], ['#gallery', 521, 34], ['#reserve', 318, 21], ['#location', 287, 19]].map(([name, views, pct]) => (
                <div key={name as string} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: 110, fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{name}</div>
                  <div style={{ flex: 1, height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 3 }}>
                    <div style={{ width: `${pct}%`, height: '100%', background: 'linear-gradient(to right, var(--gold), var(--gold-light))', borderRadius: 3 }} />
                  </div>
                  <div style={{ width: 40, textAlign: 'right', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{views}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── PHOTOS ── */}
        {tab === 'photos' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {/* Today's Special */}
            <div style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(255,255,255,0.04))', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '1.25rem', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.1rem' }}>Today's Special</div>
              <div style={{ marginBottom: '0.65rem' }}>
                <label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Drink Name</label>
                <input style={{ ...inp, width: '100%' }} value={todaySpecial} onChange={e => setTodaySpecial(e.target.value)} placeholder="Matcha Strawberry" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Price</label>
                <input style={{ ...inp, width: '100%' }} value={todayPrice} onChange={e => setTodayPrice(e.target.value)} placeholder="15,000 MMK" />
              </div>
              <div style={{ marginTop: '0.85rem', padding: '0.75rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.65rem', display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem' }}>☕</span>
                <div>
                  <div style={{ fontSize: '0.62rem', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Preview</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{todaySpecial}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{todayPrice}</div>
                </div>
              </div>
            </div>

            {/* Hero */}
            <div style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '1.25rem', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.1rem' }}>Hero Photo</div>
              <UploadBtn label="Main coffee photo" current={heroImg} onChange={setHeroImg} />
            </div>

            {/* Signatures */}
            <div style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '1.25rem', padding: '1.5rem', gridColumn: 'span 2' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.1rem' }}>Signature Drinks (3)</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {sigImgs.map((img, i) => (
                  <UploadBtn key={i} label={['Matcha Strawberry', 'Ocean Taste', 'Hand Drip V60'][i]} current={img} onChange={url => { const u = [...sigImgs]; u[i] = url; setSigImgs(u) }} />
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '1.25rem', padding: '1.5rem', gridColumn: '1 / -1' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.1rem' }}>Gallery (6 Photos)</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {galleryImgs.map((img, i) => (
                  <UploadBtn key={i} label={`Photo ${i + 1}`} current={img} onChange={url => { const u = [...galleryImgs]; u[i] = url; setGalleryImgs(u) }} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── MENU EDITOR ── */}
        {tab === 'menu' && (
          <div>
            {/* Category tabs */}
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {Object.keys(menu).map(cat => (
                <button key={cat} onClick={() => setMenuCat(cat)} style={{ padding: '0.4rem 1rem', borderRadius: '999px', cursor: 'pointer', fontFamily: 'inherit', border: '1px solid', backdropFilter: 'blur(10px)', borderColor: menuCat === cat ? 'rgba(201,168,76,0.6)' : 'rgba(255,255,255,0.09)', background: menuCat === cat ? 'linear-gradient(135deg, rgba(201,168,76,0.88), rgba(232,201,106,0.75))' : 'rgba(255,255,255,0.04)', color: menuCat === cat ? '#07120A' : 'var(--text-muted)', fontSize: '0.78rem', fontWeight: menuCat === cat ? 700 : 400 }}>{cat}</button>
              ))}
            </div>

            <div style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.25rem', padding: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: '0.5rem', marginBottom: '0.75rem', padding: '0 0 0.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Name</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', width: 140 }}>Price</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', width: 130 }}>Note</div>
                <div style={{ width: 32 }} />
              </div>

              {menu[menuCat].map((item, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'center' }}>
                  <input value={item.name} onChange={e => updateMenuItem(menuCat, i, 'name', e.target.value)} style={{ ...inp, width: '100%' }} placeholder="Drink name" />
                  <input value={item.price} onChange={e => updateMenuItem(menuCat, i, 'price', e.target.value)} style={{ ...inp, width: 140 }} placeholder="e.g. 9,000 MMK" />
                  <input value={item.note ?? ''} onChange={e => updateMenuItem(menuCat, i, 'note', e.target.value)} style={{ ...inp, width: 130 }} placeholder="Note (optional)" />
                  <button onClick={() => removeMenuItem(menuCat, i)} style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.25)', color: 'rgba(255,100,100,0.8)', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
                </div>
              ))}

              <button onClick={() => addMenuItem(menuCat)} style={{ marginTop: '0.75rem', padding: '0.55rem 1.25rem', borderRadius: '999px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', color: 'var(--gold)', cursor: 'pointer', fontSize: '0.78rem', fontFamily: 'inherit' }}>
                + Add Item
              </button>
            </div>
          </div>
        )}

        {/* Save */}
        {tab !== 'analytics' && (
          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={save} style={{ background: saved ? 'rgba(80,200,120,0.12)' : 'linear-gradient(135deg, var(--gold), var(--gold-light))', color: saved ? 'rgba(80,200,120,0.9)' : '#07120A', border: saved ? '1px solid rgba(80,200,120,0.3)' : 'none', padding: '0.85rem 2.5rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: saved ? 'none' : '0 4px 20px rgba(201,168,76,0.3)', transition: 'all 0.3s' }}>
              {saved ? '✓ Saved!' : 'Save Changes'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
