import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Story Cafe — ဇာတ်လမ်းကဖေး',
  description: 'A cozy corner in South Okkalapa, Yangon. No.207 Parami Road. Specialty coffee, homemade food, signature drinks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
