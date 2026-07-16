export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{minHeight: '100vh', background: 'var(--bg)'}}>
      <div style={{padding: '20px 40px', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between'}}>
        <h2 style={{color: 'var(--gold)'}}>Admin Panel</h2>
        <a href="/" style={{color: 'var(--gray)'}}>← Back to Store</a>
      </div>
      {children}
    </div>
  )
}
