import Link from 'next/link'
import Button from '../components/Button/Button'
import { productService } from '../services/product/productService'
import ProductCard from '../components/ProductCard/ProductCard'
import styles from '../styles/pages/Home.module.css'

export default function HomePage() {
  const featured = productService.getAllProducts().slice(0, 3)

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Time, Redefined</h1>
          <p>Discover luxury watches crafted for precision, style, and legacy.</p>
          <Link href="/watches"><Button>Shop Collection</Button></Link>
        </div>
        <img src="https://images.unsplash.com/photo-1523170335258-03ed810e7d0d?q=80&w=1480" alt="Luxury Watch" />
      </section>

      <section className={styles.section}>
        <h2>Featured Collection</h2>
        <div className={styles.grid}>
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className={styles.centerBtn}>
          <Link href="/watches"><Button>View All Watches</Button></Link>
        </div>
      </section>
    </>
  )
}
