'use client'
import { useState, useRef, useEffect } from 'react'

const PASSWORD = 'storycafeygn'

const defaultMenu = {
  coffee: [
    { name: 'Espresso', price: '3,500', note: '' },
    { name: 'Americano', price: '4,000', note: '' },
    { name: 'Cappuccino', price: '5,000', note: '' },
    { name: 'Latte', price: '5,000', note: '' },
    { name: 'Cold Brew', price: '5,500', note: '' },
    { name: 'Ex Girlfriend ★', price: '7,000', note: 'Bestseller' },
  ],
  drinks: [
    { name: 'Matcha Latte', price: '5,500', note: '' },
    { name: 'Thai Tea', price: '4,500', note: '' },
    { name: 'Sooper Strawberry ★', price: '8,000', note: 'Fan Fave' },
    { name: 'Still Old Gin ★', price: '6,500', note: 'No Alcohol' },
    { name: 'Fresh Juice', price: '4,000', note: '' },
  ],
  food: [
    { name: 'Club Sandwich', price: '8,500', note: '' },
    { name: 'Egg Toast', price: '5,000', note: '' },
    { name: 'French Fries ★', price: '10,000', note: 'Must Order' },
    { name: 'Pasta Carbonara', price: '9,000', note: '' },
    { name: 'Grilled Chicken Rice', price: '11,000', note: '' },
  ],
  desserts: [
    { name: 'Tiramisu', price: '7,500', note: '' },
    { name: 'Waffle', price: '6,000', note: '' },
    { name: 'Cheesecake', price: '6,500', note: '' },
    { name: 'Brownie', price: '5,500', note: '' },
    { name: 'Cookie (3pcs)', price: '3,500', note: '' },
  ],
}

type Item = { name: string; price: string; note: string }
type MenuData = typeof defaultMenu
type Cat = keyof MenuData

function UploadBtn({ label, storageKey, preview }: { label: string; storageKey: string; preview?: string }) {
  const ref = useRef<HTMLInputElement>(null)
  const [src, setSrc] = useState(preview || '')
  const [url, setUrl] = useState('')
  const [mode, setMode] = useState<'file' | 'url'>('file')

  const save = (s: string) => { setSrc(s); localStorage.setItem(storageKey, s) }

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]; if (!f) return
    const r = new FileReader(); r.onload = ev => save(ev.target?.result as string); r.readAsDataURL(f)
  }

  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--text)' }}>{label}</div>
      {src && <img src={src} alt="" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: '0.5rem' }} />}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => setMode('file')} style={{ fontSize: '0.72rem', padding: '0.3rem 0.7rem', borderRadius: '999px', border: '1px solid var(--border)', background: mode === 'file' ? 'var(--terra)' : 'transparent', color: mode === 'file' ? '#fff' : 'var(--text-muted)', cursor: 'pointer' }}>File</button>
        <button onClick={() => setMode('url')} style={{ fontSize: '0.72rem', padding: '0.3rem 0.7rem', borderRadius: '999px', border: '1px solid var(--border)', background: mode === 'url' ? 'var(--terra)' : 'transparent', color: mode === 'url' ? '#fff' : 'var(--text-muted)', cursor: 'pointer' }}>URL</button>
      </div>
      {mode === 'file' ? (
        <>
          <input ref={ref} type="file" accept="image/*" onChange={onFile} style={{ display: 'none' }} />
          <button onClick={() => ref.current?.click()} style={{ background: 'var(--terra-pale)', border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.5rem 1rem', color: 'var(--terra)', fontSize: '0.8rem', cursor: 'pointer', fontWeight: 600 }}>Upload Photo</button>
        </>
      ) : (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input value={url} onChange={e => setUrl(e.target.value)} placeholder="Paste image URL..." style={{ flex: 1, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: 'var(--text)', fontSize: '0.8rem', outline: 'none' }} />
          <button onClick={() => save(url)} style={{ background: 'var(--terra)', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.5rem 0.9rem', cursor: 'pointer', fontSize: '0.8rem' }}>Set</button>
        </div>
      )}
    </div>
  )
}

export default function AdminPage() {
  const [auth, setAuth] = useState(false)
  const [pw, setPw] = useState('')
  const [tab, setTab] = useState<'analytics' | 'photos' | 'menu'>('analytics')
  const [menuCat, setMenuCat] = useState<Cat>('coffee')
  const [menu, setMenu] = useState<MenuData>(defaultMenu)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('sc-menu')
    if (stored) setMenu(JSON.parse(stored))
  }, [])

  if (!auth) return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1.25rem', padding: '2.5rem', width: '100%', maxWidth: 380, textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>☕</div>
        <div className="display" style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--terra)', marginBottom: '0.3rem' }}>Story Cafe Admin</div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Enter password to continue</div>
        <input type="password" value={pw} onChange={e => setPw(e.target.value)} onKeyDown={e => e.key === 'Enter' && pw === PASSWORD && setAuth(true)}
          placeholder="Password" style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '0.65rem', padding: '0.7rem', fontSize: '0.9rem', outline: 'none', marginBottom: '0.75rem', textAlign: 'center', color: 'var(--text)' }} />
        <button onClick={() => pw === PASSWORD && setAuth(true)}
          style={{ width: '100%', background: 'var(--terra)', color: '#fff', border: 'none', borderRadius: '0.65rem', padding: '0.75rem', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}>
          Enter
        </button>
        {pw && pw !== PASSWORD && <div style={{ color: 'var(--terra)', fontSize: '0.75rem', marginTop: '0.6rem' }}>Incorrect password</div>}
      </div>
    </div>
  )

  const updateItem = (cat: Cat, i: number, field: keyof Item, val: string) => {
    setMenu(prev => { const next = { ...prev }; next[cat] = next[cat].map((it, idx) => idx === i ? { ...it, [field]: val } : it); return next })
  }
  const addItem = (cat: Cat) => setMenu(prev => ({ ...prev, [cat]: [...prev[cat], { name: '', price: '', note: '' }] }))
  const removeItem = (cat: Cat, i: number) => setMenu(prev => ({ ...prev, [cat]: prev[cat].filter((_, idx) => idx !== i) }))
  const saveMenu = () => { localStorage.setItem('sc-menu', JSON.stringify(menu)); setSaved(true); setTimeout(() => setSaved(false), 2000) }

  const cats: { key: Cat; label: string; icon: string }[] = [
    { key: 'coffee', label: 'Coffee', icon: '☕' },
    { key: 'drinks', label: 'Drinks', icon: '🫖' },
    { key: 'food', label: 'Food', icon: '🍳' },
    { key: 'desserts', label: 'Desserts', icon: '🍰' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ background: 'var(--terra)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.3rem' }}>☕</span>
          <div>
            <div className="display" style={{ color: '#fff', fontSize: '0.95rem', fontStyle: 'italic' }}>Story Cafe Admin</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem' }}>Content Management</div>
          </div>
        </div>
        <button onClick={() => setAuth(false)} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '999px', padding: '0.35rem 0.9rem', cursor: 'pointer', fontSize: '0.75rem' }}>Sign Out</button>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '0 2rem', display: 'flex', gap: '0.25rem', background: 'var(--surface)' }}>
        {(['analytics', 'photos', 'menu'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: '0.75rem 1.1rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600, color: tab === t ? 'var(--terra)' : 'var(--text-muted)', borderBottom: tab === t ? '2px solid var(--terra)' : '2px solid transparent', textTransform: 'capitalize', transition: 'all 0.2s' }}>
            {t === 'analytics' ? '📊 Analytics' : t === 'photos' ? '📸 Photos' : '🍽️ Menu'}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '2rem' }}>

        {/* Analytics */}
        {tab === 'analytics' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '2rem' }}>
              {[{ v: '35K+', l: 'Facebook Followers', i: '📘' }, { v: '881', l: 'Total Posts', i: '📸' }, { v: '96%', l: 'Recommend Rate', i: '⭐' }].map(s => (
                <div key={s.l} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{s.i}</div>
                  <div className="display" style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--terra)' }}>{s.v}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{s.l}</div>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '1.5rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text)', fontSize: '0.85rem' }}>📈 Monthly Engagement</div>
              {[{ l: 'Jan', v: 72 }, { l: 'Feb', v: 85 }, { l: 'Mar', v: 68 }, { l: 'Apr', v: 91 }, { l: 'May', v: 78 }, { l: 'Jun', v: 95 }].map(b => (
                <div key={b.l} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                  <span style={{ width: 32, fontSize: '0.72rem', color: 'var(--text-muted)' }}>{b.l}</span>
                  <div style={{ flex: 1, height: 10, background: 'var(--surface2)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${b.v}%`, background: 'linear-gradient(to right, var(--terra), var(--terra-lt))', borderRadius: '999px', transition: 'width 0.8s ease' }} />
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', width: 28 }}>{b.v}%</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Photos */}
        {tab === 'photos' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Hero & Key Photos</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }}>
              <UploadBtn label="Hero Main Photo" storageKey="sc-photo-hero" />
              <UploadBtn label="Specialty Coffee Photo" storageKey="sc-photo-coffee" />
              <UploadBtn label="Homemade Food Photo" storageKey="sc-photo-food" />
              <UploadBtn label="Interior / Vibes" storageKey="sc-photo-interior" />
            </div>
            <div style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.9rem' }}>Gallery Photos</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.85rem' }}>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <UploadBtn key={n} label={`Gallery ${n}`} storageKey={`sc-gal-${n}`} />
              ))}
            </div>
          </div>
        )}

        {/* Menu editor */}
        {tab === 'menu' && (
          <div>
            {/* Cat tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {cats.map(c => (
                <button key={c.key} onClick={() => setMenuCat(c.key)}
                  style={{ padding: '0.45rem 1rem', borderRadius: '999px', border: '1px solid var(--border)', cursor: 'pointer', fontSize: '0.78rem', fontWeight: 600, background: menuCat === c.key ? 'var(--terra)' : 'var(--surface)', color: menuCat === c.key ? '#fff' : 'var(--text-muted)' }}>
                  {c.icon} {c.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
              {menu[menuCat].map((item, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: '0.5rem', alignItems: 'center', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '0.65rem', padding: '0.65rem' }}>
                  <input value={item.name} onChange={e => updateItem(menuCat, i, 'name', e.target.value)}
                    placeholder="Item name" style={{ background: 'var(--bg)', border: '1px solid var(--border-dim)', borderRadius: '0.4rem', padding: '0.4rem 0.65rem', color: 'var(--text)', fontSize: '0.82rem', outline: 'none' }} />
                  <input value={item.price} onChange={e => updateItem(menuCat, i, 'price', e.target.value)}
                    placeholder="Price" style={{ width: 80, background: 'var(--bg)', border: '1px solid var(--border-dim)', borderRadius: '0.4rem', padding: '0.4rem 0.65rem', color: 'var(--terra)', fontSize: '0.82rem', outline: 'none', fontWeight: 600 }} />
                  <input value={item.note} onChange={e => updateItem(menuCat, i, 'note', e.target.value)}
                    placeholder="Badge" style={{ width: 90, background: 'var(--bg)', border: '1px solid var(--border-dim)', borderRadius: '0.4rem', padding: '0.4rem 0.65rem', color: 'var(--green)', fontSize: '0.75rem', outline: 'none' }} />
                  <button onClick={() => removeItem(menuCat, i)} style={{ background: 'none', border: 'none', color: 'var(--terra)', cursor: 'pointer', fontSize: '0.9rem', padding: '0.2rem 0.4rem' }}>✕</button>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={() => addItem(menuCat)} style={{ background: 'var(--green-pale)', border: '1px solid rgba(61,90,62,0.2)', color: 'var(--green)', borderRadius: '0.5rem', padding: '0.55rem 1.1rem', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600 }}>+ Add Item</button>
              <button onClick={saveMenu} style={{ background: 'var(--terra)', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.55rem 1.5rem', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 700 }}>
                {saved ? '✓ Saved!' : 'Save Menu'}
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: var(--bg); font-family: 'DM Sans', sans-serif; }
        .display { font-family: 'DM Serif Display', serif; }
        :root {
          --bg: #F5EFE0; --surface: #EDE5CF; --surface2: #E4D9C0;
          --terra: #C26B4A; --terra-lt: #E08B6A; --terra-pale: rgba(194,107,74,0.10); --terra-glow: rgba(194,107,74,0.22);
          --green: #3D5A3E; --green-pale: rgba(61,90,62,0.08);
          --text: #1C1108; --text-muted: rgba(28,17,8,0.50);
          --border: rgba(194,107,74,0.18); --border-dim: rgba(28,17,8,0.08);
        }
      `}</style>
    </div>
  )
}
