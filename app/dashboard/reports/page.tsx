export default function Reports() {
  return (
    <main style={{padding: '40px'}}>
      <h1>Sales Reports</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px'}}>
        <div style={{background: '#121212', padding: '30px', borderRadius: '8px'}}>
          <p style={{color: 'var(--gray)'}}>Total Revenue</p>
          <h2>$42,580</h2>
        </div>
        <div style={{background: '#121212', padding: '30px', borderRadius: '8px'}}>
          <p style={{color: 'var(--gray)'}}>Watches Sold</p>
          <h2>27</h2>
        </div>
        <div style={{background: '#121212', padding: '30px', borderRadius: '8px'}}>
          <p style={{color: 'var(--gray)'}}>Top Product</p>
          <h2>S2 Automatic</h2>
        </div>
      </div>
    </main>
  )
}
