import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Xidra Cloud Services | Digital Backbone for SidraChain',
  description:
    'Xidra Cloud Services (XCS) powers the future of SidraChain with secure, scalable, and Shariah-compliant cloud infrastructure. Multi-cloud redundancy, zero-downtime, and enterprise-grade security.',
  keywords: ['XCS', 'Xidra Cloud Services', 'SidraChain', 'cloud infrastructure', 'decentralized', 'Shariah-compliant', 'blockchain'],
  icons: {
    icon: '/images/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0088CC',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
