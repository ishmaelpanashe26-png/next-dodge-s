import { notFound } from 'next/navigation' // 1. Import on top

async function getWatch(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/products`, { cache: 'no-store' })
  const watches = await res.json()
  return watches.find((w: any) => w.id === Number(id))
}

export default async function WatchPage({ params }: { params: { id: string } }) {
  const watch = await getWatch(params.id)
  
  if(!watch) notFound() // 2. This triggers the error page

  return (
    <main style={{padding: '60px 40px', maxWidth: '1200px', margin: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px'}}>
      <img src={watch.image} alt={watch.name} style={{width: '100%', borderRadius: '8px'}}/>
      <div>
        <h1 style={{fontSize: '40px'}}>{watch.name}</h1>
        <p style={{color: 'var(--gold)', fontSize: '32px', margin: '20px 0'}}>${watch.price}</p>
        <p style={{color: 'var(--gray)', lineHeight: '1.8'}}>{watch.desc}</p>
        
        <button style={{background: 'var(--gold)', color: '#000', padding: '16px 40px', border: 'none', fontSize: '18px', marginTop: '30px', cursor: 'pointer'}}>
          Add to Cart
        </button>
      </div>
    </main>
  )
}
