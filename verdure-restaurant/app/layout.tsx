import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Verdure — Fresh Modern Dining',
  description: 'A fresh, plant-forward dining experience in the heart of the city.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
