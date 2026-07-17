'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { userService } from '../../services/user/userService'
import type { User } from '../../types'
import { productService } from '../../services/product/productService'
import ProductCard from '../../components/ProductCard/ProductCard'

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [products, setProducts] = useState(productService.getAllProducts())
  const router = useRouter()

  useEffect(() => {
    const currentUser = userService.getCurrentUser()
    if (!currentUser || currentUser.role!== 'admin') {
      router.push('/login') // kick out non-admins
    } else {
      setUser(currentUser)
    }
  }, [router])

  const handleLogout = () => {
    userService.logout()
    router.push('/')
  }

  if (!user) return <p>Loading...</p>

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>Admin Dashboard</h1>
        <Button variant="danger" onClick={handleLogout}>Logout</Button>
      </div>
      <p>Welcome {user.name}!</p>

      <h2 style={{marginTop: '40px'}}>Manage Products</h2>
      <div className="grid">
        {products.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            showAdmin={true}
            onDelete={(id) => {
              productService.deleteProduct(id)
              setProducts(productService.getAllProducts())
            }}
            onEdit={(p) => alert(`Edit ${p.name} - we’ll build the modal next`)}
          />
        ))}
      </div>
    </div>
  )
}
