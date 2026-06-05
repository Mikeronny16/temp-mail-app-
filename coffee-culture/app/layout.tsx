import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coffee Culture — Everyone Deserves Love and Coffee',
  description: 'Premium coffee shop in Yangon. Specialty coffee, signatures, fresh food. Upper Pazundaung Rd.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* SVG filters for liquid glass effect */}
        <svg id="liquid-filters" aria-hidden="true">
          <defs>
            <filter id="liquid-distortion">
              <feTurbulence type="fractalNoise" baseFrequency="0.006 0.006" numOctaves="3" result="noise" seed="5" />
              <feGaussianBlur in="noise" stdDeviation="1" result="smooth" />
              <feDisplacementMap in="SourceGraphic" in2="smooth" scale="6" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="liquid-subtle">
              <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="2" result="noise" seed="3" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  )
}
