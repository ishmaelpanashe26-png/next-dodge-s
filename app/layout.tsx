import type { Metadata } from 'next'
import './globals.css'
import './variables.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export const metadata: Metadata = {
  title: 'DODGE - Luxury Watches',
  description: 'Premium watches crafted for precision and style',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
