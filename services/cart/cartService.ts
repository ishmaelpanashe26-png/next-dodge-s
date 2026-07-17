import type { Cart, CartItem, Product } from '../../types'

const CART_KEY = 'dodge_cart'

// For now we use localStorage. Later we connect to /api/cart
export const cartService = {
  getCart: (): Cart => {
    const cart = localStorage.getItem(CART_KEY)
    const items: CartItem[] = cart ? JSON.parse(cart) : []
    
    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    
    return { items, total, itemCount }
  },

  addToCart: (product: Product): Cart => {
    const cart = cartService.getCart()
    const existingItem = cart.items.find(item => item.product.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.items.push({ product, quantity: 1 })
    }
    
    localStorage.setItem(CART_KEY, JSON.stringify(cart.items))
    return cartService.getCart()
  },

  removeFromCart: (productId: number): Cart => {
    const cart = cartService.getCart()
    cart.items = cart.items.filter(item => item.product.id !== productId)
    localStorage.setItem(CART_KEY, JSON.stringify(cart.items))
    return cartService.getCart()
  },

  clearCart: (): Cart => {
    localStorage.removeItem(CART_KEY)
    return { items: [], total: 0, itemCount: 0 }
  }
}
