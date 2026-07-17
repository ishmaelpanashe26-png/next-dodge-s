export interface Product {
  id: number
  name: string
  price: number
  desc: string
  image: string
  category?: string // optional
  stock?: number // optional
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}
