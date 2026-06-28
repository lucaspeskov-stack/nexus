import { Phone, MapPin, Instagram, Facebook, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Studio <span className="text-primary-400">Flavio Barcelos</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Seu destino de beleza e estilo no coração do Rio de Janeiro.
            </p>
            <div className="flex items-center gap-2 text-gold-400">
              <span className="text-2xl">⭐⭐⭐⭐⭐</span>
              <span className="font-semibold">5.0</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">239 avaliações</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#localizacao" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5521969261188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Phone size={18} />
                  <span>(21) 96926-1188</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>
                  R. México, 119 - sala 201<br />
                  Centro, Rio de Janeiro - RJ
                </span>
              </li>
              <li>
                <a
                  href="mailto:contato@studioflavio.com.br"
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Mail size={18} />
                  <span>contato@studioflavio.com.br</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
            <p className="text-gray-400 mb-4">
              Siga-nos e fique por dentro das novidades e tendências!
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/studioflavio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/studioflavio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/5521969261188"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Studio Flavio Barcelos. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-2 text-gray-400 text-sm">
              Feito com <Heart size={16} className="text-primary-500 fill-primary-500" /> por{' '}
              <a
                href="https://forja.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 font-semibold transition-colors"
              >
                Forja Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
