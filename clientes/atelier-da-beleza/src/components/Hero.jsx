import React from 'react'
import { Star, MapPin, Phone } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center space-x-1 mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
              ))}
            </div>
            <span className="text-white font-semibold ml-2">
              4.9 (105 avaliações)
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Atelier da Beleza
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-4 max-w-2xl mx-auto">
            Seu refúgio de beleza e bem-estar no coração do Rio de Janeiro
          </p>

          <div className="flex items-center justify-center space-x-2 text-white/90 mb-8">
            <MapPin size={20} />
            <span className="text-sm md:text-base">
              Av. Rio Branco, 135 - Centro, Rio de Janeiro
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <a
              href="tel:5521989397763"
              className="group flex items-center space-x-3 bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <Phone size={22} />
              <span>Agendar Horário</span>
            </a>
            <a
              href="#services"
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default Hero
