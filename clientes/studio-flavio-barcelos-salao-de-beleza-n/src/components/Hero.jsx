import { Phone, Star, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gold-400/20 backdrop-blur-sm text-gold-300 px-4 py-2 rounded-full mb-6 border border-gold-400/30">
            <Star size={16} fill="currentColor" />
            <span className="font-medium">5.0 estrelas - 239 avaliações</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow">
            Beleza e Elegância
            <br />
            <span className="text-gold-400">No Centro do Rio</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto text-shadow">
            Transforme seu visual com os melhores profissionais
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-200 mb-10 text-shadow">
            <MapPin size={20} />
            <span className="text-lg">R. México, 119 - sala 201 - Centro, Rio de Janeiro</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5521969261188"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all shadow-2xl hover:shadow-primary-600/50 hover:scale-105 text-lg font-semibold"
            >
              <Phone size={22} />
              <span>Agendar Horário</span>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all border-2 border-white/30 text-lg font-semibold"
            >
              <span>Nossos Serviços</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
