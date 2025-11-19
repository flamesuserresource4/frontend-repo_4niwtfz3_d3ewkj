function Services() {
  const services = [
    { title: 'Household Shifting', desc: 'Packing, loading, transport and unpacking for 1RK to 4BHK moves.' },
    { title: 'Office Relocation', desc: 'Safe movement of workstations, servers, files with minimal downtime.' },
    { title: 'Vehicle Transport', desc: 'Door-to-door car and bike transport across India.' },
    { title: 'Storage & Warehousing', desc: 'Clean, secure storage with flexible plans and inventory tracking.' },
  ]

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 bg-white rounded-xl border shadow-sm">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="text-slate-600 text-sm mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
