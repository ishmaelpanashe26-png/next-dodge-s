'use client'
import { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input/Input'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  
  const handleSubmit = () => {
    setSent(true)
    alert('Message sent! We will get back to you.')
  }

  return (
    <div style={{padding: '80px 5%', maxWidth: '600px', margin: '0 auto'}}>
      <h1>Contact Us</h1>
      <div style={{display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px'}}>
        <Input label="Name" />
        <Input label="Email" type="email" />
        <textarea placeholder="Your Message" rows={5} style={{padding: '12px', border: '1px solid var(--card-border)', borderRadius: '8px'}} />
        <Button onClick={handleSubmit}>Send Message</Button>
      </div>
    </div>
  )
}
