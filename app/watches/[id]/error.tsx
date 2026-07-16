'use client'

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <main style={{padding: '100px 40px', textAlign: 'center', minHeight: '60vh'}}>
      <h1 style={{color: 'red', fontSize: '40px'}}>Something went wrong 😵</h1>
      <p style={{color: 'var(--gray)', margin: '20px 0'}}>{error.message}</p>
      <button 
        onClick={() => reset()} 
        style={{background: 'var(--gold)', color: '#000', padding: '12px 24px', border: 'none', cursor: 'pointer', fontSize: '16px'}}
      >
        Try again
      </button>
    </main>
  )
}
