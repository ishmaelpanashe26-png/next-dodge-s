import Button from '../Button/Button'

export default function ProductCard({ product, showAdmin = false, onDelete, onEdit }: any) {
  return (
    <div style={{background: '#121212', borderRadius: '8px', overflow: 'hidden', border: '1px solid #222'}}>
      <img src={product.image} alt={product.name} style={{width: '100%', height: '300px', objectFit: 'cover'}}/>
      <div style={{padding: '20px'}}>
        <h3>{product.name}</h3>
        <p style={{color: 'var(--gold)', fontSize: '24px'}}>${product.price}</p>
        <p style={{color: 'var(--gray)'}}>{product.desc}</p>

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
