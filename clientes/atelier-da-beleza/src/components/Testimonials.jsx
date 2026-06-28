import React, { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
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
      name: 'Maria Silva',
      rating: 5,
      comment:
        'Simplesmente perfeito! O atendimento é excepcional e o resultado ficou maravilhoso. Já sou cliente há mais de 2 anos e não troco por nada!',
      service: 'Corte e Coloração',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop',
    },
    {
      name: 'Ana Paula',
      rating: 5,
      comment:
        'Profissionais super capacitados e ambiente aconchegante. Me sinto sempre em casa! A maquiagem para meu casamento ficou impecável.',
      service: 'Maquiagem',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop',
    },
    {
      name: 'Juliana Costa',
      rating: 5,
      comment:
        'Melhor salão do Centro! Sempre saio de lá me sentindo renovada. As meninas são atenciosas e fazem um trabalho impecável.',
      service: 'Pacote Completo',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop',
    },
    {
      name: 'Carla Mendes',
      rating: 5,
      comment:
        'Atendimento nota 10! Fiz alongamento de unhas e estou apaixonada. Voltarei com certeza!',
      service: 'Alongamento de Unhas',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2787&auto=format&fit=crop',
    },
    {
      name: 'Patricia Oliveira',
      rating: 5,
      comment:
        'Ambiente luxuoso e acolhedor. Os produtos usados são de primeira linha. Super recomendo!',
      service: 'Tratamento Capilar',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=2787&auto=format&fit=crop',
    },
    {
      name: 'Fernanda Souza',
      rating: 5,
      comment:
        'Excelente! Profissionais qualificados e muito cuidadosos. Meu cabelo nunca esteve tão bonito!',
      service: 'Alisamento',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
    },
  ]

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-br from-primary-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            A satisfação de nossos clientes é nossa maior conquista
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#fbbf24" color="#fbbf24" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900 ml-2">4.9</span>
            <span className="text-gray-600">(105 avaliações)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <Quote className="text-primary-200" size={32} />
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>

              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold text-primary-600">Mais de 105 clientes satisfeitos</span>{' '}
            já confiaram em nosso trabalho
          </p>
          <a
            href="tel:5521989397763"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
          >
            Seja Nosso Próximo Cliente
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
