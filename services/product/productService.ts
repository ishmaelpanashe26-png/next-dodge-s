const BASE_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

export const productService = {
  // GET all products
  getAll: async () => {
    const res = await fetch(`${BASE_URL}/api/products`, { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to fetch products')
    return res.json()
  },

  // GET single product by id
  getById: async (id: string) => {
    const res = await fetch(`${BASE_URL}/api/products`, { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to fetch product')
    const watches = await res.json()
    return watches.find((w: any) => w.id === Number(id))
  },

  // POST create product
  create: async (product: any) => {
    const res = await fetch(`${BASE_URL}/api/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
    if (!res.ok) throw new Error('Failed to create product')
    return res.json()
  },

  // DELETE product
  delete: async (id: number) => {
    const res = await fetch(`${BASE_URL}/api/products?id=${id}`, { method: 'DELETE' })
    if (!res.ok) throw new Error('Failed to delete product')
    return res.json()
  }
}
