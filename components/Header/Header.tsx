'use client'
import Link from 'next/link'
import { useState } from 'react'
import { cartService } from '../../services/cart/cartService'
import { useAuth } from '../../hooks/useAuth'
import styles from '../../styles/components/Header.module.css'

export default function Header() {
  const [cartCount, setCartCount] = useState(cartService.getCart().length)
  const { user } = useAuth()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>DODGE</Link>
        
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/watches">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/cart" className={styles.cart}>
            Cart {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </Link>
          {user ? (
            <Link href="/dashboard">Dashboard</Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
    </header>
  )
}
