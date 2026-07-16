import Card from '@/components/Card'

async function getWatches() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/products`, { 
    cache: 'no-store' 
  })
  if (!res.ok) throw new Error('Failed to fetch watches')
  return res.json()
}

export default async function Home() {
  const watches = await getWatches()
  
  return (
    <main style={{padding: '60px 40px', maxWidth: '1200px', margin: 'auto'}}>
      <section style={{textAlign: 'center', marginBottom: '60px'}}>
        <h1 style={{fontSize: '48px'}}>Timeless Luxury</h1>
        <p style={{color: 'var(--gray)'}}>Precision crafted. Built to last generations.</p>
      </section>
      
      <section style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px'}}>
        {watches.map((w: any) => <Card key={w.id} {...w} />)}
      </section>
    </main>
  )
}
