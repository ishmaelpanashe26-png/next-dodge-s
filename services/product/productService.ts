import { apiClient } from '../api'

// Mock data fallback if backend not ready
const mockProducts = [
  { id: 1, name: 'DODGE Chrono', price: 599, image: 'https://images.unsplash.com/photo-1523170335258-03ed810e7d0d?q=80&w=1480', stock: 10 },
  { id: 2, name: 'DODGE Classic', price: 399, image: 'https://images.unsplash.com/photo-1548169874-53e85fbf2a90?q=80&w=1480', stock: 15 },
  { id: 3, name: 'DODGE Sport', price: 799, image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1480', stock: 8 },
]

export const productService = {
  async getAllProducts() {
    try {
      return await apiClient.get('/products')
    } catch {
      return mockProducts // fallback
    }
  },
  async getProductById(id: number) {
    try {
      return await apiClient.get(`/products/${id}`)
    } catch {
      return mockProducts.find(p => p.id === id)
    }
  }
}
