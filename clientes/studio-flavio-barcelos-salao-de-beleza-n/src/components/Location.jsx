import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Location() {
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
    <section id="localizacao" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Visite Nosso <span className="text-primary-600">Studio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos localizados no coração do Centro do Rio de Janeiro, com fácil acesso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gradient-to-br from-primary-50 to-gold-50 p-8 rounded-2xl shadow-lg border border-primary-100">
              <h3 className="font-display text-3xl font-bold text-gray-900 mb-8">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      R. México, 119 - sala 201<br />
                      Centro, Rio de Janeiro - RJ<br />
                      CEP: 20031-145
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/5521969261188"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium text-lg transition-colors"
                    >
                      (21) 96926-1188
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">Horário de Funcionamento</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Segunda a Sexta: 9h às 20h</p>
                      <p>Sábado: 9h às 19h</p>
                      <p>Domingo: 10h às 16h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-primary-200">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=R.+México,+119+-+sala+201+-+Centro,+Rio+de+Janeiro+-+RJ,+20031-145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 w-full justify-center font-semibold"
                >
                  <Navigation size={20} />
                  <span>Como Chegar</span>
                </a>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2366732652736!2d-43.17842082378204!3d-22.909879537653746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e0e2e3b5d%3A0x1234567890abcdef!2sR.%20M%C3%A9xico%2C%20119%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020031-145!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Studio Flavio Barcelos"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
