async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/products`, { cache: 'no-store' })
  return res.json()
}

export default async function Dashboard() {
  const products = await getProducts()
  
  return (
    <main style={{padding: '40px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '30px'}}>
        <h1>Manage Watches</h1>
        <button style={{background: 'var(--gold)', color: '#000', padding: '12px 24px', border: 'none', borderRadius: '4px'}}>Add New Watch</button>
      </div>

      <div style={{display: 'grid', gap: '20px'}}>
        {products.map((p: any) => (
          <div key={p.id} style={{background: '#121212', padding: '20px', borderRadius: '8px', border: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
              <img src={p.image} alt={p.name} style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px'}}/>
              <div>
                <h3>{p.name}</h3>
                <p style={{color: 'var(--gold)'}}>${p.price}</p>
              </div>
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
              <button>Edit</button>
              <button style={{background: 'red'}}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
