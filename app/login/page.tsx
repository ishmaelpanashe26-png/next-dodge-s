'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { userService } from '../../services/user/userService'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

export default function LoginPage() {
  const [email, setEmail] = useState('admin@dodge.com')
  const [password, setPassword] = useState('123456')
  const router = useRouter()

  const handleLogin = () => {
    const user = userService.login({ email, password })
    if (user) {
      router.push('/dashboard') // send to dashboard if success
    } else {
      alert('Invalid login. Try admin@dodge.com / 123456')
    }
  }

  return (
    <div style={{maxWidth: '400px', margin: '80px auto'}}>
      <h1>Login</h1>
      <div style={{display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px'}}>
        <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
        <p style={{fontSize: '14px', color: 'var(--text-gray)'}}>
          Admin: admin@dodge.com / 123456 <br/>
          User: user@dodge.com / 123456
        </p>
      </div>
    </div>
  )
}
