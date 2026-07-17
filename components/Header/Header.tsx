import Link from 'next/link'
import styles from '../../styles/components/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>DODGE</Link>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/watches">Shop</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/cart">Cart [0]</Link>
      </nav>
    </header>
  )
}
