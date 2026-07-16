import Card from '@/components/Card'

const watches = [
  {id: 1, name: 'Dodge S1 Chronograph', price: 1299, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500'},
  {id: 2, name: 'Dodge S2 Automatic', price: 2499, image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500'},
  {id: 3, name: 'Dodge S3 Tourbillon', price: 8999, image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=500'},
]

export default function Home() {
  return (
    <main style={{padding: '60px 40px', maxWidth: '1200px', margin: 'auto'}}>
      <section style={{textAlign: 'center', marginBottom: '60px'}}>
        <h1 style={{fontSize: '48px'}}>Timeless Luxury</h1>
        <p style={{color: 'var(--gray)'}}>Precision crafted. Built to last generations.</p>
      </section>
      <section style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px'}}>
        {watches.map(w => <Card key={w.id} {...w} />)}
      </section>
    </main>
  )
}
