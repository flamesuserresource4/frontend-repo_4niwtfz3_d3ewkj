import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import QuoteForm from './components/QuoteForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
