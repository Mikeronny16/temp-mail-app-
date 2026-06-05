import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coffee Culture — Everyone Deserves Love and Coffee',
  description: 'Premium coffee shop in Yangon. Specialty coffee, signatures, fresh food. Upper Pazundaung Rd.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
