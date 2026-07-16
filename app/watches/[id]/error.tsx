'use client' // error components must be client

export default function ProductError() {
  return (
    <main style={{padding: '100px 40px', textAlign: 'center', minHeight: '60vh'}}>
      <h1 style={{fontSize: '50px'}}>Watch Not Found ⌚</h1>
      <p style={{color: 'var(--gray)', fontSize: '20px', margin: '20px 0'}}>
        This watch doesn't exist or was deleted
      </p>
      <a href="/watches" style={{color: 'var(--gold)', fontSize: '18px', textDecoration: 'underline'}}>
        ← Go back to shop
      </a>
    </main>
  )
}
