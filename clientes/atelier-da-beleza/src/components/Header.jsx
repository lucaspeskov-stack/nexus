import React, { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Sobre', href: '#about' },
    { name: 'Localização', href: '#location' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center space-x-2">
              <span
                className={`font-display text-2xl md:text-3xl font-bold transition-colors ${
                  scrolled ? 'text-primary-600' : 'text-white'
                }`}
              >
                Atelier da Beleza
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:5521989397763"
              className="flex items-center space-x-2 bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={18} />
              <span className="font-medium">Agendar</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:5521989397763"
              className="flex items-center justify-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-all mt-4"
            >
              <Phone size={18} />
              <span className="font-medium">Agendar Agora</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
