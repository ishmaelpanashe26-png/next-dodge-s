import Button from '../Button/Button'
import styles from '../../styles/components/ProductCard.module.css'

export default function ProductCard({ product, showAdmin = false, onDelete, onEdit }: any) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image}/>
      <div className={styles.content}>
        <h3>{product.name}</h3>
        <p className={styles.price}>${product.price}</p>
        <p style={{color: 'var(--text-gray)'}}>{product.desc}</p>

        {showAdmin? (
          <div style={{display: 'flex', gap: '10px', marginTop: '16px'}}>
            <Button onClick={() => onEdit(product)}>Edit</Button>
            <Button variant="danger" onClick={() => onDelete(product.id)}>Delete</Button>
          </div>
        ) : (
          <Button style={{width: '100%', marginTop: '16px'}}>Add to Cart</Button>
        )}
      </div>
    </div>
  )
}
