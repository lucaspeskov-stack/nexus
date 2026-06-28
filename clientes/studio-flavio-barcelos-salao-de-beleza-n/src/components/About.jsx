import { Award, Clock, Users, Heart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

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

  const stats = [
    { icon: Award, label: 'Anos de Experiência', value: '15+' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '2000+' },
    { icon: Clock, label: 'Horários Flexíveis', value: '7 dias' },
    { icon: Heart, label: 'Avaliação', value: '5.0 ⭐' },
  ]

  return (
    <section id="sobre" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop"
                  alt="Studio Flavio Barcelos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-8 rounded-2xl shadow-xl">
                <p className="text-5xl font-bold font-display">239</p>
                <p className="text-sm font-medium">Avaliações 5★</p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Sobre o <span className="text-primary-600">Studio</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                O <strong>Studio Flavio Barcelos</strong> é referência em beleza e estilo no coração do Rio de Janeiro.
                Localizado estrategicamente no Centro, oferecemos uma experiência premium com atendimento personalizado.
              </p>
              <p>
                Nossa equipe é formada por profissionais altamente qualificados e em constante atualização com as
                últimas tendências e técnicas do mercado. Utilizamos apenas produtos de alta qualidade para garantir
                os melhores resultados.
              </p>
              <p>
                Com mais de <strong>239 avaliações 5 estrelas</strong>, nosso compromisso é fazer você se sentir
                especial e realçar sua beleza natural com todo cuidado e atenção que você merece.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:border-primary-300 transition-all hover-lift"
                >
                  <stat.icon className="text-primary-600 mb-3" size={32} />
                  <p className="font-display text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
