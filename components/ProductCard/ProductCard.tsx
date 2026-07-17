'use client'
import Button from '../Button/Button'
import styles from '../../styles/components/ProductCard.module.css'
import type { Product } from '../../types'
import { cartService } from '../../services/cart/cartService'

interface ProductCardProps {
  product: Product
  showAdmin?: boolean
  onDelete?: (id: number) => void
  onEdit?: (product: Product) => void
}

export default function ProductCard({ product, showAdmin = false, onDelete, onEdit }: ProductCardProps) {
  
  const handleAddToCart = () => {
    cartService.addToCart(product)
    window.dispatchEvent(new Event('storage')) // tell Header to update
  }

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image}/>
      <div className={styles.content}>
        <h3>{product.name}</h3>
        <p className={styles.price}>${product.price}</p>
        <p style={{color: 'var(--text-gray)'}}>{product.desc}</p>

        {showAdmin ? (
          <div style={{display: 'flex', gap: '10px', marginTop: '16px'}}>
            <Button onClick={() => onEdit?.(product)}>Edit</Button>
            <Button variant="danger" onClick={() => onDelete?.(product.id)}>Delete</Button>
          </div>
        ) : (
          <Button onClick={handleAddToCart} style={{width: '100%', marginTop: '16px'}}>
            Add to Cart
          </Button>
        )}
      </  div>
    </div>
  )
}
import Link from 'next/link'
...
return (
  <Link href={`/watches/${product.id}`} className={styles.card}>
    ...
  </Link>
)
