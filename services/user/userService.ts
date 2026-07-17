import type { User, LoginPayload } from '../../types'

const USER_KEY = 'dodge_user'

// Fake users. Replace with real API later
const FAKE_USERS: User[] = [
  { id: 1, name: 'Admin', email: 'admin@dodge.com', role: 'admin' },
  { id: 2, name: 'Customer', email: 'user@dodge.com', role: 'customer' }
]

export const userService = {
  login: (payload: LoginPayload): User | null => {
    const user = FAKE_USERS.find(u => u.email === payload.email)
    if (user && payload.password === '123456') { // password is 123456 for both
      localStorage.setItem(USER_KEY, JSON.stringify(user))
      window.dispatchEvent(new Event('storage'))
      return user
    }
    return null
  },

  logout: () => {
    localStorage.removeItem(USER_KEY)
    window.dispatchEvent(new Event('storage'))
  },

  getCurrentUser: (): User | null => {
    const user = localStorage.getItem(USER_KEY)
    return user? JSON.parse(user) : null
  }
}
