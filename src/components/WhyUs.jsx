function WhyUs() {
  const points = [
    { t: 'Experienced Team', d: 'Skilled professionals trained in safe packing and handling.' },
    { t: 'Transparent Pricing', d: 'No hidden charges. Clear quotes based on inventory and distance.' },
    { t: 'On-time Delivery', d: 'Well-planned logistics and GPS-enabled vehicles for timely delivery.' },
    { t: 'Customer Support', d: 'Single point of contact and regular updates throughout your move.' },
  ]

  return (
    <section id="why" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {points.map((p) => (
            <div key={p.t} className="p-6 bg-white rounded-xl border shadow-sm">
              <div className="text-2xl">⭐</div>
              <h3 className="mt-2 font-semibold text-slate-900">{p.t}</h3>
              <p className="text-slate-600 text-sm mt-1">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
