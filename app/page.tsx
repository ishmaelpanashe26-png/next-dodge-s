import Link from 'next/link'

export default function Home() {
  return (
    <div className="prose">
      <h1>Welcome to Decor Express</h1>
      <p>This is a minimal scaffolded Next.js app (TypeScript + Tailwind) created for you on the decor-express-setup branch.</p>
      <p>
        Use the nav to visit <Link href="/about">About</Link>, <Link href="/products">Products</Link>, <Link href="/gallery">Gallery</Link>, and <Link href="/contact">Contact</Link>.
      </p>
    </div>
  )
}
