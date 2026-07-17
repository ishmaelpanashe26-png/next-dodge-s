import Button from '../components/Button/Button'
import Link from 'next/link'
import styles from '../styles/pages/Home.module.css'

export default function HomePage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div>
          <h1 className={styles.heroTitle}>Time, Redefined</h1>
          <p className={styles.heroSub}>Discover the collection of luxury watches crafted for you.</p>
          <Link href="/watches">
            <Button>Shop Collection</Button>
          </Link>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1523170335258-03ed810e7d0d?q=80&w=1480" 
          alt="Luxury Watch" 
          className={styles.heroImage}
        />
      </section>

      {/* FEATURED PRODUCTS */}
      <section>
        <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Featured Watches</h2>
        {/* We will plug in real products here next */}
      </section>
    </div>
  )
}
