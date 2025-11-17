import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value
        })
      })
      if (res.ok) setStatus('Thanks! I will get back to you soon.')
      else setStatus('Something went wrong. Please try again later.')
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let’s build together</h2>
          <p className="mt-2 text-blue-200/80">Share a bit about your project and I’ll reply within 24 hours.</p>
          <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name" className="rounded-lg bg-black/30 text-white placeholder:text-blue-200/50 px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/20" />
            <input required name="email" type="email" placeholder="Your email" className="rounded-lg bg-black/30 text-white placeholder:text-blue-200/50 px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/20" />
            <textarea required name="message" placeholder="Project details" rows={5} className="md:col-span-2 rounded-lg bg-black/30 text-white placeholder:text-blue-200/50 px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/20" />
            <div className="md:col-span-2 flex items-center gap-4">
              <button className="rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 text-sm font-semibold transition-colors">Send message</button>
              <span className="text-blue-200/80 text-sm">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
