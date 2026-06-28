import { Star, Quote } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Testimonials() {
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

  const testimonials = [
    {
      name: 'Mariana Silva',
      rating: 5,
      text: 'Simplesmente perfeito! O Flavio é um artista, entende exatamente o que queremos e sempre surpreende com o resultado. O ambiente é acolhedor e profissional.',
      avatar: 'MS',
      color: 'bg-pink-500',
    },
    {
      name: 'Juliana Costa',
      rating: 5,
      text: 'Melhor salão do Centro! Atendimento impecável, produtos de qualidade e profissionais super capacitados. Saio de lá me sentindo renovada!',
      avatar: 'JC',
      color: 'bg-purple-500',
    },
    {
      name: 'Fernanda Oliveira',
      rating: 5,
      text: 'Já sou cliente há mais de 3 anos e nunca me decepcionei. A coloração fica perfeita, os cortes são modernos e o tratamento capilar é excelente!',
      avatar: 'FO',
      color: 'bg-primary-500',
    },
    {
      name: 'Paula Rodrigues',
      rating: 5,
      text: 'Profissionalismo e carinho no atendimento. O Flavio é super atencioso e o resultado sempre supera as expectativas. Recomendo de olhos fechados!',
      avatar: 'PR',
      color: 'bg-blue-500',
    },
    {
      name: 'Camila Santos',
      rating: 5,
      text: 'Ambiente agradável, produtos de primeira qualidade e um atendimento que faz toda diferença. Meu cabelo nunca esteve tão bonito e saudável!',
      avatar: 'CS',
      color: 'bg-gold-500',
    },
    {
      name: 'Amanda Lima',
      rating: 5,
      text: 'Excelente! Local super bem localizado no Centro, fácil de chegar. A equipe é maravilhosa e o resultado é sempre impecável. Vale muito a pena!',
      avatar: 'AL',
      color: 'bg-green-500',
    },
  ]

  return (
    <section id="avaliacoes" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            O Que Dizem Nossos <span className="text-primary-600">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Mais de 239 avaliações com 5 estrelas no Google
          </p>
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="text-gold-400 fill-gold-400" size={28} />
            ))}
            <span className="ml-3 text-2xl font-bold text-gray-900">5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover-lift transition-all duration-500 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-14 h-14 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-gold-400 fill-gold-400" size={16} />
                    ))}
                  </div>
                </div>
              </div>
              <Quote className="text-primary-200 mb-2" size={32} />
              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-600 mb-6 text-lg">
            Junte-se a centenas de clientes satisfeitos!
          </p>
          <a
            href="https://wa.me/5521969261188"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-600 text-white px-10 py-4 rounded-full hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-lg font-semibold"
          >
            <span>Quero Agendar Agora</span>
          </a>
        </div>
      </div>
    </section>
  )
}
