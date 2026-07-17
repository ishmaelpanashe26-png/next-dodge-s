import { notFound } from 'next/navigation'

async function getWatch(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/products`, { cache: 'no-store' })
  const watches = await res.json()
  return watches.find((w: any) => w.id === Number(id))
}

export default async function WatchPage({ params }: { params: { id: string } }) {
  const watch = await getWatch(params.id)
  
  if(!watch) notFound()

  return (...) // your code is good
}
