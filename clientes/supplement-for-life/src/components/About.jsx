import { useEffect, useRef, useState } from 'react'
import { FaAward, FaShieldAlt, FaUsers, FaRocket } from 'react-icons/fa'

export default function About() {
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

  const features = [
    {
      icon: FaAward,
      title: 'Qualidade Garantida',
      description: 'Trabalhamos apenas com marcas certificadas e produtos com procedência comprovada.',
    },
    {
      icon: FaShieldAlt,
      title: 'Produtos Originais',
      description: '100% de garantia de autenticidade. Seus resultados dependem da qualidade.',
    },
    {
      icon: FaUsers,
      title: 'Atendimento Especializado',
      description: 'Nossa equipe está pronta para ajudar você a escolher o melhor para seus objetivos.',
    },
    {
      icon: FaRocket,
      title: 'Entrega Rápida',
      description: 'Retire na loja em Irajá ou receba em casa com agilidade e segurança.',
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold text-sm mb-6">
              SOBRE NÓS
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Sua Loja de Confiança em
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700"> Irajá</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              A <strong>Supplement for Life</strong> é referência em suplementos alimentares no Rio de Janeiro.
              Oferecemos os melhores produtos nacionais e importados para quem busca resultados reais.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Nossa missão é fornecer suplementos de altíssima qualidade com atendimento personalizado,
              ajudando você a alcançar seus objetivos fitness e de saúde com segurança e eficiência.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-gradient-to-br from-red-500 to-red-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                ✓ Marcas Premium
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                ✓ Preços Competitivos
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                ✓ Entrega Rápida
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-red-700 rounded-3xl opacity-20 blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=2070&auto=format&fit=crop"
                alt="Loja Supplement for Life"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-red-500 to-red-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform duration-300">
                <feature.icon className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
