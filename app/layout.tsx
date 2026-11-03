import type { Metadata, Viewport } from 'next'
// self-hosted fonts (no Google Fonts round-trip)
import '@fontsource/pixelify-sans/latin-500.css'
import '@fontsource/pixelify-sans/latin-700.css'
import '@fontsource/gochi-hand/latin-400.css'
import '@fontsource/caveat/latin-500.css'
import '@fontsource-variable/inter/index.css'
import '@fontsource/jetbrains-mono/latin-500.css'
import '@fontsource/jetbrains-mono/latin-700.css'
import './globals.css'

const description =
  'Sri Ram — full-stack developer & AI entrepreneur. President of E-Cell REC, founder of Avataq.ai (AI-native compliance infrastructure for SMBs & NBFCs) and PromptCraft. Turning bold ideas into validated products.'

export const metadata: Metadata = {
  title: { default: 'Sri Ram — Full Stack Developer & AI Entrepreneur', template: '%s · Sri Ram' },
  description,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Sri Ram — Full Stack Developer & AI Entrepreneur',
    description: 'I turn bold ideas into validated products.',
    images: ['/me-portrait.jpg'],
  },
}

export const viewport: Viewport = { themeColor: '#FAFAF7' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
