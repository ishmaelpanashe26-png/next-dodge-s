import { NextResponse } from 'next/server'

// Fake database for now. Later we connect real DB
const watches = [
  {
    id: 1, 
    name: 'Dodge S1 Chronograph', 
    price: 1299, 
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500', 
    desc: 'Swiss movement. Sapphire crystal. Water resistant 10ATM.'
  },
  {
    id: 2, 
    name: 'Dodge S2 Automatic', 
    price: 2499, 
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500', 
    desc: 'Automatic winding. 5 year warranty. Italian leather strap.'
  },
  {
    id: 3, 
    name: 'Dodge S3 Tourbillon', 
    price: 8999, 
    image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=500', 
    desc: 'Handcrafted. Limited edition of 50. 18k gold case.'
  },
]

// GET = Fetch all products
export async function GET() {
  return NextResponse.json(watches)
}

// POST = Add new product. For your admin dashboard later
export async function POST(request: Request) {
  const newWatch = await request.json()
  watches.push({ id: watches.length + 1, ...newWatch })
  return NextResponse.json({ success: true, product: newWatch })
}
