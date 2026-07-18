export const metadata = {
  title: 'Decor Express',
  description: 'A minimal Next.js + TypeScript + Tailwind starter for the decor-express layout',
}

import './globals.css'
import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
