import { notFound } from 'next/navigation'
import { productService } from '../../../services/productService' // 3x..

export default async function WatchPage({ params }: { params: { id: string } }) {
  const watch = await productService.getById(params.id) // <-- using service
  
  if(!watch) notFound()

  return (...) // your code stays the same
}
