import { NextResponse } from 'next/server'

let watches = [ // change const to let so we can delete
  {id: 1, name: 'Dodge S1 Chronograph', price: 1299, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500', desc: 'Swiss movement'},
  {id: 2, name: 'Dodge S2 Automatic', price: 2499, image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500', desc: 'Automatic winding'},
  {id: 3, name: 'Dodge S3 Tourbillon', price: 8999, image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=500', desc: 'Handcrafted'},
]

export async function GET() {
  return NextResponse.json(watches)
}

export async function POST(request: Request) {
  const newWatch = await request.json()
  watches.push({ id: watches.length + 1, ...newWatch })
  return NextResponse.json({ success: true, product: newWatch })
}

// ADD THIS
export async function DELETE(request: Request) {
  const { id } = await request.json()
  watches = watches.filter(w => w.id !== id) // remove it
  return NextResponse.json({ success: true })
}
