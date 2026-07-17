export default function Button({ children, variant = 'primary',...props }: any) {
  const bg = variant === 'primary'? 'var(--gold)' : 'red'
  const color = variant === 'primary'? '#000' : 'white'
  
  return (
    <button style={{background: bg, color, padding: '12px 24px', border: 'none', cursor: 'pointer', fontSize: '16px'}} {...props}>
      {children}
    </button>
  )
}
