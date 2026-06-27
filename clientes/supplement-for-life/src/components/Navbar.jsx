import { useState } from 'react'
import { FaDumbbell, FaBars, FaTimes, FaPhone } from 'react-icons/fa'

export default function Navbar({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Avaliações', href: '#testimonials' },
    { name: 'Localização', href: '#location' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-red-500 to-red-700 p-2.5 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
              <FaDumbbell className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl lg:text-2xl tracking-tight">
                Supplement for Life
              </h1>
              <p className="text-red-400 text-xs font-medium">Premium Quality</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-red-500 font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="tel:21986573650"
              className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-red-500/50 transform hover:scale-105"
            >
              <FaPhone className="text-sm" />
              (21) 98657-3650
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white text-2xl z-50"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/98 backdrop-blur-md z-40 pt-24">
          <div className="flex flex-col items-center gap-8 px-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl font-semibold hover:text-red-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:21986573650"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 shadow-lg"
            >
              <FaPhone />
              (21) 98657-3650
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
