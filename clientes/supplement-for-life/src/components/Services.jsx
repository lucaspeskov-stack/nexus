import { useEffect, useRef, useState } from 'react'
import { FaDumbbell, FaAppleAlt, FaBolt, FaFire, FaHeart, FaTrophy } from 'react-icons/fa'

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
      icon: FaDumbbell,
      title: 'Proteínas & Whey',
      description: 'Whey isolado, concentrado e hidrolisado das melhores marcas. Ganhe massa muscular com qualidade.',
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-800',
    },
    {
      icon: FaBolt,
      title: 'Pré-Treinos',
      description: 'Energia explosiva e foco total para seus treinos mais intensos. Marcas importadas premium.',
      color: 'from-yellow-500 to-orange-600',
      hoverColor: 'group-hover:from-yellow-600 group-hover:to-orange-700',
    },
    {
      icon: FaFire,
      title: 'Termogênicos',
      description: 'Acelere seu metabolismo e conquiste a definição desejada com termogênicos de alta performance.',
      color: 'from-red-500 to-red-700',
      hoverColor: 'group-hover:from-red-600 group-hover:to-red-800',
    },
    {
      icon: FaAppleAlt,
      title: 'Vitaminas',
      description: 'Multivitamínicos completos para potencializar sua saúde e bem-estar diário.',
      color: 'from-green-500 to-green-700',
      hoverColor: 'group-hover:from-green-600 group-hover:to-green-800',
    },
    {
      icon: FaHeart,
      title: 'Aminoácidos',
      description: 'BCAA, creatina, glutamina e muito mais para recuperação muscular superior.',
      color: 'from-pink-500 to-pink-700',
      hoverColor: 'group-hover:from-pink-600 group-hover:to-pink-800',
    },
    {
      icon: FaTrophy,
      title: 'Kits Especiais',
      description: 'Combos personalizados para seus objetivos: ganho de massa, definição ou performance.',
      color: 'from-purple-500 to-purple-700',
      hoverColor: 'group-hover:from-purple-600 group-hover:to-purple-800',
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            NOSSOS PRODUTOS
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Suplementos de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700"> Alta Performance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Produtos das marcas mais confiáveis do mercado para garantir os melhores resultados no seu treino
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${service.color} ${service.hoverColor} p-8 transition-all duration-500`}>
                <service.icon className="text-white text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                <div className="mt-6">
                  <a
                    href="https://wa.me/5521986573650?text=Olá! Gostaria de saber mais sobre os produtos."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors"
                  >
                    Saiba mais
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <a
            href="https://wa.me/5521986573650?text=Olá! Gostaria de conhecer todos os produtos disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-700 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Ver Catálogo Completo
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
