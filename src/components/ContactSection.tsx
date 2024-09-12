'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import '../styles/global.css'


export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true) 

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        console.log('Email sent successfully')
        setTimeout(() => {
          window.location.reload();
        }, 1000); 
      } else {
        console.error('Error sending email:', response.status)
        setIsSubmitting(false) 
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setIsSubmitting(false) 
    }
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Entre em Contato</h2>
      <Card>
        <CardHeader>
          <CardTitle>Envie uma mensagem</CardTitle>
          <CardDescription>Preencha o formulário abaixo para entrar em contato comigo.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Nome</label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">E-mail</label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Mensagem</label>
              <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && ( 
                  <span className="loading loading-spinner"></span> 
                )}
                {!isSubmitting && (
                  'Enviar Mensagem' 
                )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}