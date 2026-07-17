import type { Product } from '../../types'

const BASE_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

export const productService = {
  getAll: async (): Promise<Product[]> => { // <-- now returns Product[]
    const res = await fetch(`${BASE_URL}/api/products`, { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to fetch products')
    return res.json()
  },

  getById: async (id: string): Promise<Product | undefined> => { // <-- Product or undefined
    const res = await fetch(`${BASE_URL}/api/products`, { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to fetch product')
    const watches: Product[] = await res.json() // <-- typed here too
    return watches.find((w) => w.id === Number(id))
  },

  create: async (product: Omit<Product, 'id'>): Promise<Product> => { // <-- new product without id
    const res = await fetch(`${BASE_URL}/api/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
    if (!res.ok) throw new Error('Failed to create product')
    return res.json()
  },

  delete: async (id: number): Promise<{ success: boolean }> => {
    const res = await fetch(`${BASE_URL}/api/products?id=${id}`, { method: 'DELETE' })
    if (!res.ok) throw new Error('Failed to delete product')
    return res.json()
  }
}
