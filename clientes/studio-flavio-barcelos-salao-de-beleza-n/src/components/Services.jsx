import { Scissors, Sparkles, Palette, Heart, Droplet, User } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Services() {
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
      icon: Scissors,
      title: 'Cortes Personalizados',
      description: 'Cortes modernos e clássicos adaptados ao seu estilo e formato de rosto.',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Palette,
      title: 'Coloração Premium',
      description: 'Técnicas avançadas de coloração, mechas, balayage e tonalização.',
      color: 'from-gold-500 to-gold-600',
    },
    {
      icon: Sparkles,
      title: 'Tratamentos Capilares',
      description: 'Hidratação profunda, reconstrução e tratamentos especializados.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Droplet,
      title: 'Químicas',
      description: 'Progressivas, relaxamentos e alisamentos com produtos de alta qualidade.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Heart,
      title: 'Penteados',
      description: 'Penteados para festas, casamentos e eventos especiais.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: User,
      title: 'Barba e Bigode',
      description: 'Design e manutenção profissional de barba e bigode.',
      color: 'from-gray-700 to-gray-800',
    },
  ]

  return (
    <section id="servicos" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-primary-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de beleza com produtos premium e técnicas modernas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-2xl shadow-lg hover-lift transition-all duration-500 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="https://wa.me/5521969261188"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-600 text-white px-10 py-4 rounded-full hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-lg font-semibold"
          >
            <span>Agende Seu Horário</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
