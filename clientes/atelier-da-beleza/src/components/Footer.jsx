import React from 'react'
import { Facebook, Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-primary-400">
              Atelier da Beleza
            </h3>
            <p className="text-gray-400 mb-4">
              Seu refúgio de beleza e bem-estar no coração do Rio de Janeiro.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
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
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Cabelos</li>
              <li>Unhas</li>
              <li>Maquiagem</li>
              <li>Estética Facial</li>
              <li>Depilação</li>
              <li>Pacotes Premium</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Av. Rio Branco, 135 - 2º Andar<br />
                  Centro, Rio de Janeiro - RJ
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <a
                  href="tel:5521989397763"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  (21) 98939-7763
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:contato@atelierdabeleza.com.br"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  contato@atelierdabeleza.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Atelier da Beleza. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-1">
              <span>Desenvolvido com</span>
              <Heart size={16} className="text-primary-400 fill-current" />
              <span>pela Forja</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
