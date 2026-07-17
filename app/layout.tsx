import '../styles/globals.css' // 1. Import global styles
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DODGE | Swiss Luxury Watches',
  description: 'DODGE - Precision in Every Second. Luxury timepieces crafted with Swiss precision.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
