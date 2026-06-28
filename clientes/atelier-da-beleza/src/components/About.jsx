import React, { useEffect, useRef, useState } from 'react'
import { Award, Heart, Users, TrendingUp } from 'lucide-react'

const About = () => {
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

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: '105+',
      label: 'Clientes Satisfeitos',
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: '8+',
      label: 'Anos de Experiência',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      value: '4.9',
      label: 'Avaliação Média',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '98%',
      label: 'Taxa de Retorno',
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop"
                alt="Atelier da Beleza"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary-600 text-white p-8 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">8+</div>
                  <div className="text-sm">Anos de Excelência</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Sobre o Atelier da Beleza
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Localizado no coração do Centro do Rio de Janeiro, o{' '}
              <span className="font-semibold text-primary-600">Atelier da Beleza</span> é referência
              em serviços de beleza e bem-estar.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Com mais de 8 anos de experiência, nossa equipe de profissionais altamente
              qualificados está dedicada a proporcionar uma experiência única e personalizada para
              cada cliente.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Utilizamos apenas produtos premium e as técnicas mais modernas do mercado para
              garantir os melhores resultados. Aqui, você não encontra apenas um salão de beleza,
              mas sim um verdadeiro refúgio de relaxamento e transformação.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100 hover:shadow-lg transition-shadow"
                >
                  <div className="text-primary-600 mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:5521989397763"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Agendar Agora
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300"
              >
                Ver Serviços
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
