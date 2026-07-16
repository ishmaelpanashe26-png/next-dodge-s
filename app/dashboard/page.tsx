'use client'
import { useState, useEffect } from 'react'

export default function Dashboard() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/products').then(r => r.json()).then(setProducts)
  }, [])

  // ADD THIS FUNCTION
  async function deleteWatch(id: number) {
    await fetch('/api/products', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ id })
    })
    // Remove from UI instantly
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <main style={{padding: '40px'}}>
      <h1>Manage Watches</h1>
      <div style={{display: 'grid', gap: '20px', marginTop: '30px'}}>
        {products.map((p: any) => (
          <div key={p.id} style={{background: '#121212', padding: '20px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <h3>{p.name}</h3>
              <p style={{color: 'var(--gold)'}}>${p.price}</p>
            </div>
            <button 
              onClick={() => deleteWatch(p.id)} // WIRE IT UP
              style={{background: 'red', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer'}}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
const [editingId, setEditingId] = useState<number | null>(null)
const [editForm, setEditForm] = useState<any>({})

async function saveEdit() {
  await fetch('/api/products', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(editForm)
  })
  setProducts(products.map(p => p.id === editForm.id ? editForm : p))
  setEditingId(null)
}

// inside products.map replace the div with this:
{editingId === p.id ? (
  <div>
    <input value={editForm.name} onChange={e => setEditForm({...editForm, name: e.target.value})} />
    <input value={editForm.price} onChange={e => setEditForm({...editForm, price: e.target.value})} />
    <button onClick={saveEdit}>Save</button>
  </div>
) : (
  <div>
    <h3>{p.name}</h3>
    <p style={{color: 'var(--gold)'}}>${p.price}</p>
  </div>
)}

<button onClick={() => {setEditingId(p.id); setEditForm(p)}}>Edit</button>
<button onClick={() => deleteWatch(p.id)} style={{background: 'red'}}>Delete</button>
