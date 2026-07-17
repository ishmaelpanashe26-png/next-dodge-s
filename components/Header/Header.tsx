'use client' // <-- because we useState + localStorage
import Link from 'next/link'
import styles from '../../styles/components/Header.module.css'
import { useEffect, useState } from 'react'
import { cartService } from '../../services/cart/cartService' // note: /cart/cartService
import type { Cart } from '../../types'

export default function Header() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0, itemCount: 0 })

  useEffect(() => {
    // 1. Load cart on page load
    setCart(cartService.getCart())

    // 2. Update cart count if another tab changes it
    const updateCart = () => setCart(cartService.getCart())
    window.addEventListener('storage', updateCart)
    
    return () => window.removeEventListener('storage', updateCart)
  }, [])

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>DODGE</Link>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/watches">Shop</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/cart">Cart [{cart.itemCount}]</Link> {/* <-- This updates live */}
      </nav>
    </header>
  )
}
