'use client'
import { useParams } from 'next/navigation'
import { productService } from '../../../services/product/productService'
import { cartService } from '../../../services/cartService'
import Button from '../../../components/Button'
import styles from '../../../styles/pages/ProductDetail.module.css'

export default function ProductDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const product = productService.getProductById(id)

  if (!product) return <div style={{padding: '80px', textAlign: 'center'}}>Product not found</div>

  const handleAddToCart = () => {
    cartService.addToCart(product, 1)
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.name} className={styles.image} />
      
      <div className={styles.info}>
        <h1>{product.name}</h1>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.desc}>
          This premium timepiece features Swiss movement, sapphire crystal, and a handcrafted leather strap. 
          Built for those who value precision and elegance.
        </p>
        <p>Stock: {product.stock} available</p>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </div>
    </div>
  )
}
