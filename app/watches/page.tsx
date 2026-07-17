'use client'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useFetch } from '../../hooks/useFetch'
import { productService } from '../../services/productService'

export default function WatchesPage() {
  const { data: watches, loading, error } = useFetch(productService.getAll)

  if(loading) return <p style={{padding: '60px', textAlign: 'center'}}>Loading watches...</p>
  if(error) return <p style={{padding: '60px', color: 'red'}}>Error: {error}</p>

  return (
    <main style={{padding: '60px 40px'}}>
      <h1 style={{fontSize: '48px', marginBottom: '40px'}}>The Collection</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
        {watches?.map((w) => <ProductCard key={w.id} product={w} />)}
      </div>
    </main>
  )
}
