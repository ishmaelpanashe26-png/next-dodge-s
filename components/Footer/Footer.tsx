import styles from '../../styles/components/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h3>DODGE</h3>
          <p>Premium watches. Timeless design.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <Link href="/watches">All Watches</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/about">About</Link>
        </div>
      </div>
      <p className={styles.copy}>© 2026 DODGE. All rights reserved.</p>
    </footer>
  )
}
