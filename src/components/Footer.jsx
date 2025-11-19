function Footer() {
  return (
    <footer className="py-10 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} OmSai Packers & Movers. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="tel:+919999999999" className="hover:text-blue-600">📞 +91 99999 99999</a>
          <a href="mailto:info@omsai-packers.com" className="hover:text-blue-600">✉️ info@omsai-packers.com</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
