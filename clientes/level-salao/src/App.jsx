import { useState, useEffect } from 'react'
import {
  Phone,
  MapPin,
  Star,
  Scissors,
  Sparkles,
  Heart,
  Users,
  Clock,
  Instagram,
  Facebook,
  Mail,
  ChevronRight,
  Award,
  Palette,
  Crown
} from 'lucide-react'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['hero', 'services', 'testimonials', 'about', 'location']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const whatsappLink = "https://wa.me/5521975203933?text=Olá! Gostaria de agendar um horário no Level Salão"

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Crown className={`w-8 h-8 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Level Salão
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['Serviços', 'Depoimentos', 'Sobre', 'Localização'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''))}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-700 transition-all hover:scale-105"
              >
                Agendar
              </a>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Agendar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074)',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-purple-900/50 to-pink-900/60" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-medium">4.9 Estrelas • 2.417 Avaliações</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Beleza que Eleva
            <br />
            <span className="text-primary-300">Seu Nível</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto">
            O salão premium do Centro do Rio de Janeiro que transforma seu visual em arte
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-all hover:scale-105 flex items-center space-x-2 shadow-xl"
            >
              <span>Agendar Horário</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => scrollToSection('services')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-primary-600 transition-all"
            >
              Nossos Serviços
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { icon: Award, label: 'Prêmios & Reconhecimento' },
              { icon: Users, label: 'Equipe Especializada' },
              { icon: Sparkles, label: 'Produtos Premium' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="w-8 h-8 text-primary-300 mx-auto mb-2" />
                <p className="text-white text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tratamentos de beleza com padrão internacional e atendimento personalizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scissors,
                title: 'Cortes & Penteados',
                description: 'Cortes modernos e clássicos executados por profissionais experientes. Do corte social ao estilo mais ousado.',
                color: 'from-purple-500 to-primary-600'
              },
              {
                icon: Palette,
                title: 'Coloração & Mechas',
                description: 'Colorimetria avançada com produtos de alta qualidade. Mechas, luzes, balayage e tonalizações.',
                color: 'from-pink-500 to-purple-600'
              },
              {
                icon: Sparkles,
                title: 'Tratamentos Capilares',
                description: 'Hidratação profunda, botox capilar, reconstrução e cauterização para cabelos saudáveis e brilhantes.',
                color: 'from-primary-500 to-pink-600'
              },
              {
                icon: Heart,
                title: 'Manicure & Pedicure',
                description: 'Cuidado completo para mãos e pés com esmaltação perfeita e produtos de qualidade superior.',
                color: 'from-rose-500 to-pink-600'
              },
              {
                icon: Sparkles,
                title: 'Estética Facial',
                description: 'Limpeza de pele, tratamentos faciais, design de sobrancelhas e extensão de cílios.',
                color: 'from-purple-500 to-indigo-600'
              },
              {
                icon: Crown,
                title: 'Noivas & Eventos',
                description: 'Pacotes especiais para noivas, formaturas e eventos. Penteados, maquiagem e atendimento VIP.',
                color: 'from-pink-500 to-rose-600'
              }
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-2xl font-bold text-gray-900 ml-3">4.9</span>
            </div>
            <p className="text-xl text-gray-600">Baseado em 2.417 avaliações verificadas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Ana Carolina',
                role: 'Cliente desde 2023',
                text: 'Melhor salão do Centro! Atendimento impecável, profissionais super qualificados e o resultado sempre supera minhas expectativas. Virei cliente fiel!',
                rating: 5
              },
              {
                name: 'Juliana Mendes',
                role: 'Cliente desde 2022',
                text: 'Faço meus cabelos aqui há anos e nunca me decepcionei. A equipe é maravilhosa, o ambiente é lindo e confortável. Super recomendo!',
                rating: 5
              },
              {
                name: 'Patricia Lima',
                role: 'Cliente desde 2024',
                text: 'Descobri o Level recentemente e me apaixonei! Produtos de qualidade, profissionais experientes e preços justos. Meu salão preferido no Rio!',
                rating: 5
              }
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Excelência em Beleza
                <span className="block text-primary-600">Desde o Primeiro Dia</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                O Level Salão nasceu com a missão de elevar o padrão de beleza no Centro do Rio de Janeiro.
                Nossa equipe é formada por profissionais altamente qualificados, constantemente atualizados
                com as últimas tendências e técnicas do mercado.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Trabalhamos apenas com produtos premium e equipamentos de última geração para garantir
                resultados excepcionais. Mais do que um salão, somos um espaço de transformação e
                bem-estar, onde cada cliente recebe atendimento personalizado e exclusivo.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Award, label: 'Profissionais Certificados' },
                  { icon: Sparkles, label: 'Produtos Premium' },
                  { icon: Heart, label: 'Atendimento Humanizado' },
                  { icon: Clock, label: 'Horário Flexível' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <span className="font-medium text-gray-900">{item.label}</span>
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all hover:scale-105"
              >
                <span>Conhecer o Salão</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069"
                  alt="Level Salão Interior"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">2.417+</p>
                    <p className="text-gray-600">Clientes Satisfeitos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Venha nos Visitar
            </h2>
            <p className="text-xl text-gray-600">
              Localização privilegiada no coração do Centro do Rio de Janeiro
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">R. México, 119 - SL - Centro</p>
                    <p className="text-gray-600">Rio de Janeiro - RJ, 20031-907</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                    <a href="tel:5521975203933" className="text-primary-600 hover:text-primary-700 font-medium">
                      (21) 97520-3933
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Horário de Funcionamento</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Segunda a Sexta: 9h às 20h</p>
                      <p>Sábado: 9h às 18h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full bg-green-500 text-white px-6 py-4 rounded-full font-semibold hover:bg-green-600 transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Agendar via WhatsApp</span>
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2086891234567!2d-43.17876!3d-22.91234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e45e45e45e5%3A0x1234567890abcdef!2sR.%20M%C3%A9xico%2C%20119%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020031-907!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Level Salão"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="w-8 h-8 text-primary-400" />
                <span className="text-2xl font-bold">Level Salão</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Salão de beleza premium no Centro do Rio de Janeiro.
                Transformando visual em arte com excelência e dedicação.
              </p>
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-2 font-semibold">4.9 (2.417 avaliações)</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {['Serviços', 'Depoimentos', 'Sobre', 'Localização'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''))}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Level Salão. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">Desenvolvido com dedicação para elevar sua beleza</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
