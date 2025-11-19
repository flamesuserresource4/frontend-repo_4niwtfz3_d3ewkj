import { useEffect, useState } from 'react'

function Testimonials() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/content/testimonials`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([
          { name: 'Rahul S.', text: 'Very professional team. My Mumbai to Pune move was smooth and on time.' },
          { name: 'Anita K.', text: 'They packed everything carefully and delivered safely. Highly recommend!' },
          { name: 'Vikram P.', text: 'Affordable and reliable. Great communication throughout the process.' },
        ])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">What our customers say</h2>
        {loading ? (
          <p className="text-slate-600">Loading testimonials...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {items.map((t, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border shadow-sm">
                <div className="text-3xl">💬</div>
                <p className="mt-3 text-slate-700">“{t.text}”</p>
                <p className="mt-3 text-sm font-semibold text-slate-900">{t.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials
