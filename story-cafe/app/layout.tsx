import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The STORY Cafe — Write your STORY over a Coffee',
  description: 'Cozy cafe at No.207 Parami Road, South Okkalapa, Yangon. Food, drinks, homemade desserts.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
