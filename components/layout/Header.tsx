import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold">Decor Express</Link>
        <nav className="space-x-4">
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
