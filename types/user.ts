export type UserRole = 'customer' | 'admin'

export interface User {
  id: number
  name: string
  email: string
  role: UserRole
  avatar?: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload extends LoginPayload {
  name: string
}
