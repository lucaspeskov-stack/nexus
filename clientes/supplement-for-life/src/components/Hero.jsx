import { FaWhatsapp, FaStar } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <FaStar className="text-yellow-400" />
            <span className="text-white font-semibold">4.7 Estrelas</span>
            <span className="text-gray-300">• 12 Avaliações</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up">
            Transforme Seu Corpo
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Com Suplementos Premium
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed animate-fade-in-up max-w-3xl mx-auto">
            Os melhores suplementos importados e nacionais para potencializar seus resultados.
            Atendimento especializado em Irajá, Rio de Janeiro.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up">
            <a
              href="https://wa.me/5521986573650?text=Olá! Gostaria de saber mais sobre os suplementos."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 w-full sm:w-auto justify-center"
            >
              <FaWhatsapp className="text-2xl group-hover:rotate-12 transition-transform" />
              Fale no WhatsApp
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50 shadow-xl transform hover:scale-105 w-full sm:w-auto text-center"
            >
              Conheça Nossos Produtos
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            {[
              { number: '500+', label: 'Produtos Premium' },
              { number: '4.7★', label: 'Avaliação Clientes' },
              { number: '5 Anos', label: 'de Experiência' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl lg:text-5xl font-black text-red-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white text-4xl opacity-70 hover:opacity-100 transition-opacity">
          ↓
        </a>
      </div>
    </section>
  )
}
