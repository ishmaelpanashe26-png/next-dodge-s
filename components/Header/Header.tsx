import Link from 'next/link'

export default function Header() {
  return (
    <header style={{background: '#000', padding: '20px 40px', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between'}}>
      <Link href="/" style={{fontSize: '24px', fontWeight: 'bold', color: 'var(--gold)'}}>DODGE</Link>
      <nav style={{display: 'flex', gap: '30px'}}>
        <Link href="/watches">Shop</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/cart">Cart [0]</Link>
      </nav>
    </header>
  )
}
