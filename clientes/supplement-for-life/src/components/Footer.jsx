import { FaDumbbell, FaPhone, FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-red-500 to-red-700 p-2.5 rounded-lg">
                <FaDumbbell className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Supplement for Life</h3>
                <p className="text-red-400 text-xs font-medium">Premium Quality</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sua loja de suplementos premium em Irajá, Rio de Janeiro. Qualidade e resultados garantidos.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5521986573650"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-red-400">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="text-red-500">›</span> Início
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="text-red-500">›</span> Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="text-red-500">›</span> Sobre Nós
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="text-red-500">›</span> Avaliações
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="text-red-500">›</span> Localização
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-red-400">Nossos Produtos</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-center gap-2">
                <span className="text-red-500">›</span> Whey Protein
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span className="text-red-500">›</span> Pré-Treinos
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span className="text-red-500">›</span> Creatina
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span className="text-red-500">›</span> Termogênicos
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span className="text-red-500">›</span> Vitaminas
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span className="text-red-500">›</span> Aminoácidos
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-red-400">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Estr. da Água Grande, 399 - Loja 04<br />
                  Irajá, Rio de Janeiro - RJ<br />
                  21230-230
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-red-500 flex-shrink-0" />
                <a href="tel:21986573650" className="text-gray-400 hover:text-white transition-colors">
                  (21) 98657-3650
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-red-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Segunda a Sexta: 9h - 19h<br />
                  Sábado: 9h - 14h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Supplement for Life. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Feito com <FaHeart className="text-red-500" /> pela <a href="https://forja.lat" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 font-semibold transition-colors">Forja</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
