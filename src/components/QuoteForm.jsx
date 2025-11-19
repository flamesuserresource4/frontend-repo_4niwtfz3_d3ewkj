import { useState } from 'react'

function QuoteForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', from_city: '', to_city: '', move_date: '', service_type: 'Household Shifting', message: ''
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          move_date: form.move_date || null
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')
      setStatus('✅ Thank you! We will contact you shortly.')
      setForm({ name: '', phone: '', email: '', from_city: '', to_city: '', move_date: '', service_type: 'Household Shifting', message: '' })
    } catch (e) {
      setStatus(`❌ ${e.message}`)
    }
  }

  return (
    <section id="quote" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Get a free quote</h2>
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border shadow-sm">
          <div className="grid gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className="border rounded-lg px-4 py-3" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required className="border rounded-lg px-4 py-3" />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email (optional)" className="border rounded-lg px-4 py-3" />
            <select name="service_type" value={form.service_type} onChange={handleChange} className="border rounded-lg px-4 py-3">
              <option>Household Shifting</option>
              <option>Office Relocation</option>
              <option>Vehicle Transport</option>
              <option>Storage & Warehousing</option>
            </select>
          </div>
          <div className="grid gap-4">
            <input name="from_city" value={form.from_city} onChange={handleChange} placeholder="From City" required className="border rounded-lg px-4 py-3" />
            <input name="to_city" value={form.to_city} onChange={handleChange} placeholder="To City" required className="border rounded-lg px-4 py-3" />
            <input name="move_date" type="date" value={form.move_date} onChange={handleChange} className="border rounded-lg px-4 py-3" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Additional details" rows={3} className="border rounded-lg px-4 py-3" />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Submit</button>
            {status && <p className="text-sm text-slate-700">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default QuoteForm
