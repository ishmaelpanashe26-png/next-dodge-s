import { productService } from '../services/product/productService'
import ProductCard from '../components/ProductCard/ProductCard'
import Button from '../components/Button/Button'
import Link from 'next/link'
import styles from '../styles/pages/Home.module.css'

export default function HomePage() {
  // Get first 3 products as "Featured"
  const featured = productService.getAllProducts().slice(0, 3)

  return (
    <div>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div>
          <h1 className={styles.heroTitle}>Time, Redefined</h1>
          <p className={styles.heroSub}>
            Discover the collection of luxury watches crafted for precision, style, and legacy.
          </p>
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

      {/* FEATURED PRODUCTS SECTION */}
      <section style={{padding: '80px 5%'}}>
        <h2 style={{textAlign: 'center', marginBottom: '16px', fontSize: '2.5rem'}}>
          Featured Watches
        </h2>
        <p style={{textAlign: 'center', color: 'var(--text-gray)', marginBottom: '40px'}}>
          Handpicked favorites from our collection
        </p>
        
        <div className={styles.grid}>
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div style={{textAlign: 'center', marginTop: '40px'}}>
          <Link href="/watches">
            <Button>View All Watches</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
