import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import '@/styles/global.css'
import Footer from '@/common/layout/Footer'
import Navbar from '@/common/layout/Navbar'

export const metadata: Metadata = {
  title: 'DevCorner',
  description: 'A tech blog',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
