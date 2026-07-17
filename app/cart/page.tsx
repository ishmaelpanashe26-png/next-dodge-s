'use client'
import { useEffect, useState } from 'react'
import { cartService } from '../../services/cart/cartService'
import Button from '../../components/Button/Button'
import styles from '../../styles/pages/Home.module.css' // reuse grid
import type { Cart } from '../../types'

export default function CartPage() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0, itemCount: 0 })

  useEffect(() => {
    setCart(cartService.getCart())
  }, [])

  const handleRemove = (productId: number) => {
    const updatedCart = cartService.removeFromCart(productId)
    setCart(updatedCart)
    window.dispatchEvent(new Event('storage')) // update header
  }

  const handleCheckout = () => {
    alert(`Order placed! Total: $${cart.total.toFixed(2)}`)
    cartService.clearCart()
    setCart({ items: [], total: 0, itemCount: 0 })
    window.dispatchEvent(new Event('storage'))
  }

  if (cart.items.length === 0) {
    return (
      <div style={{textAlign: 'center', padding: '80px 0'}}>
        <h1>Your Cart is Empty</h1>
        <p>Add some watches first 😎</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <div style={{display: 'grid', gap: '20px', marginTop: '40px'}}>
        {cart.items.map(item => (
          <div key={item.product.id} style={{
            display: 'flex', 
            gap: '20px', 
            padding: '20px', 
            border: '1px solid var(--card-border)', 
            borderRadius: '8px',
            background: 'var(--card-bg)'
          }}>
            <img src={item.product.image} alt={item.product.name} style={{width: '120px', borderRadius: '8px'}}/>
            <div style={{flex: 1}}>
              <h3>{item.product.name}</h3>
              <p>${item.product.price} x {item.quantity}</p>
              <p><b>Subtotal: ${(item.product.price * item.quantity).toFixed(2)}</b></p>
              <Button variant="danger" onClick={() => handleRemove(item.product.id)}>Remove</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div style={{
        marginTop: '40px', 
        padding: '20px', 
        border: '1px solid var(--card-border)', 
        borderRadius: '8px',
        textAlign: 'right'
      }}>
        <h2>Total: ${cart.total.toFixed(2)}</h2>
        <p>Items: {cart.itemCount}</p>
        <Button onClick={handleCheckout} style={{marginTop: '16px'}}>Checkout</Button>
      </div>
    </div>
  )
}
