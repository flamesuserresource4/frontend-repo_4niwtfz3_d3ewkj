import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">🚚</span>
            <div className="leading-tight">
              <p className="font-extrabold text-slate-900">OmSai</p>
              <p className="text-xs -mt-1 text-slate-600">Packers & Movers</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#why" className="hover:text-blue-600">Why Us</a>
            <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
            <a href="#quote" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Get Quote</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-slate-300">
            <span className="sr-only">Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-slate-700">
              <a href="#services" onClick={()=>setOpen(false)} className="py-2">Services</a>
              <a href="#why" onClick={()=>setOpen(false)} className="py-2">Why Us</a>
              <a href="#testimonials" onClick={()=>setOpen(false)} className="py-2">Testimonials</a>
              <a href="#quote" onClick={()=>setOpen(false)} className="py-2 px-4 rounded bg-blue-600 text-white text-center">Get Quote</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
