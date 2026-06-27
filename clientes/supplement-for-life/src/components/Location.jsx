import { useEffect, useRef, useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'

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

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Endereço',
      content: 'Estr. da Água Grande, 399 - Loja 04',
      subtitle: 'Irajá, Rio de Janeiro - RJ, 21230-230',
      link: 'https://www.google.com/maps/search/?api=1&query=Estr.+da+Água+Grande+399+Irajá',
      linkText: 'Ver no Google Maps',
    },
    {
      icon: FaPhone,
      title: 'Telefone',
      content: '(21) 98657-3650',
      subtitle: 'Atendimento via WhatsApp',
      link: 'tel:21986573650',
      linkText: 'Ligar agora',
    },
    {
      icon: FaClock,
      title: 'Horário de Funcionamento',
      content: 'Segunda a Sexta: 9h - 19h',
      subtitle: 'Sábado: 9h - 14h | Domingo: Fechado',
    },
  ]

  return (
    <section id="location" ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            LOCALIZAÇÃO
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Visite Nossa
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700"> Loja Física</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos em Irajá, Rio de Janeiro, prontos para atender você com os melhores suplementos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-red-500 to-red-700 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transform hover:rotate-6 transition-transform">
                    <info.icon className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-700 font-semibold text-lg mb-1">{info.content}</p>
                    <p className="text-gray-600 mb-3">{info.subtitle}</p>
                    {info.link && (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
                      >
                        {info.linkText}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Fale Conosco pelo WhatsApp</h3>
              <p className="mb-6 text-green-50">
                Tire suas dúvidas, faça pedidos ou agende sua visita através do WhatsApp
              </p>
              <a
                href="https://wa.me/5521986573650?text=Olá! Gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <FaWhatsapp className="text-2xl" />
                Enviar Mensagem
              </a>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.6934767890684!2d-43.33467!3d-22.83361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997c0e5e5e5e5e5f%3A0x5e5e5e5e5e5e5e5e!2sEstr.%20da%20%C3%81gua%20Grande%2C%20399%20-%20Iraj%C3%A1%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021230-230!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Supplement for Life"
              ></iframe>
            </div>
          </div>
        </div>

        <div className={`bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Siga-nos nas Redes Sociais
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Acompanhe nossas novidades, promoções e dicas de suplementação
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://wa.me/5521986573650"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <FaWhatsapp className="text-3xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <FaFacebook className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
