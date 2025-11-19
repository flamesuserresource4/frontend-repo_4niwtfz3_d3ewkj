function Hero() {
  return (
    <section id="home" className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Reliable Packers & Movers for a stress-free move
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Local, domestic and office relocations handled with care. Fast quotes, professional packing, safe transport.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#quote" className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Get Instant Quote</a>
            <a href="#services" className="px-6 py-3 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50">Our Services</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2"><span>✅</span> Trained Staff</div>
            <div className="flex items-center gap-2"><span>✅</span> All-India Network</div>
            <div className="flex items-center gap-2"><span>✅</span> Transit Insurance</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200 grid place-content-center text-6xl">
            🚚📦
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white border rounded-xl shadow p-4">
            <p className="text-sm font-semibold text-slate-700">5000+ Moves Completed</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
