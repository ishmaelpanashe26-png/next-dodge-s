const CART_KEY = 'dodge_cart'

export const cartService = {
  getCart: () => {
    if (typeof window === 'undefined') return []
    const cart = localStorage.getItem(CART_KEY)
    return cart ? JSON.parse(cart) : []
  },
  addToCart: (product: any, quantity: number) => {
    const cart = cartService.getCart()
    const existing = cart.find((item: any) => item.id === product.id)
    if (existing) {
      existing.quantity += quantity
    } else {
      cart.push({ ...product, quantity })
    }
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  },
  removeFromCart: (id: number) => {
    const cart = cartService.getCart().filter((item: any) => item.id !== id)
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  },
  clearCart: () => localStorage.removeItem(CART_KEY)
}
