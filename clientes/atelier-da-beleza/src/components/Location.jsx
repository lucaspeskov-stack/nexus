import React, { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

const Location = () => {
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

  return (
    <section id="location" ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Venha nos Visitar
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos no coração do Centro do Rio de Janeiro, com fácil acesso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className={`bg-white rounded-2xl p-8 shadow-lg ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                  <p className="text-gray-600">
                    Av. Rio Branco, 135 - 2º Andar<br />
                    Centro, Rio de Janeiro - RJ<br />
                    CEP: 20040-006
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Rio+Branco,+135+-+Centro,+Rio+de+Janeiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium mt-2 inline-block"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                  <a
                    href="tel:5521989397763"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    (21) 98939-7763
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Ligue agora e agende seu horário
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Segunda a Sexta: 9h às 19h</p>
                    <p>Sábado: 9h às 17h</p>
                    <p className="text-primary-600 font-medium">Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                  <a
                    href="mailto:contato@atelierdabeleza.com.br"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    contato@atelierdabeleza.com.br
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="tel:5521989397763"
                className="block w-full text-center bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>

          <div
            className={`rounded-2xl overflow-hidden shadow-lg h-[600px] ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2661739486376!2d-43.17846492377749!3d-22.90699823791833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e3e3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sAv.%20Rio%20Branco%2C%20135%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020040-006!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Atelier da Beleza"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
