import React, { useEffect, useRef, useState } from 'react'
import { Scissors, Sparkles, Heart, Paintbrush, Smile, Star } from 'lucide-react'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Cabelos',
      description: 'Cortes, coloração, mechas, alisamentos e tratamentos capilares premium',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Unhas',
      description: 'Manicure, pedicure, alongamento e nail art com as últimas tendências',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2087&auto=format&fit=crop',
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: 'Maquiagem',
      description: 'Maquiagem social, para noivas e eventos especiais',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Estética Facial',
      description: 'Limpeza de pele, tratamentos faciais e rejuvenescimento',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: 'Depilação',
      description: 'Depilação com cera quente, fria e a laser',
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2071&auto=format&fit=crop',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Pacotes Premium',
      description: 'Dia de beleza completo com múltiplos serviços',
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop',
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de beleza com profissionais especializados
            e produtos de alta qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-primary-600 w-14 h-14 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button className="mt-4 text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center space-x-2 group">
                  <span>Saiba mais</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="tel:5521989397763"
            className="inline-block bg-primary-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Agende seu Horário
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
