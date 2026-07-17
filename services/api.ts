const API_URL = process.env.NEXT_PUBLIC_API_URL

export const apiClient = {
  get: async (endpoint: string) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
  },
  post: async (endpoint: string, data: any) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error('Failed to post')
    return res.json()
  }
}
