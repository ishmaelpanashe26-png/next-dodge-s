import { NextResponse } from 'next/server'

// This handles POST /api/auth
export async function POST(request: Request) {
  const body = await request.json()
  
  // For now: fake login. Later we connect real database
  if(body.email === 'admin@nextdodges.com' && body.password === '123456') {
    return NextResponse.json({ success: true, message: 'Logged in' })
  }
  
  return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
}

// This handles GET /api/auth
export async function GET() {
  return NextResponse.json({ message: 'Auth API is working' })
}
