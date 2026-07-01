import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';
import { business } from '../data/content.js';

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#local', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="relative mt-8 bg-plum-900 text-plum-100">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-plum-400 to-lav-500 font-display text-lg font-bold text-white">
              IA
            </span>
            <span className="font-display text-lg font-semibold text-white">
              I AM <span className="font-normal text-plum-200">Salon &amp; Spa</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-plum-200/80">
            {business.tagline}. Um espaço de beleza e bem-estar em {business.neighborhood}, {business.city}.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Instagram size={20} />
            </a>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Navegação</h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-plum-200/80 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-plum-200/80">
            <li className="flex items-start gap-2.5">
              <MapPin size={17} className="mt-0.5 shrink-0 text-plum-300" />
              <a href={business.maps} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {business.address}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={17} className="shrink-0 text-plum-300" />
              <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Instagram size={17} className="shrink-0 text-plum-300" />
              <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {business.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-plum-200/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {business.name}. Todos os direitos reservados.</p>
          <p>Feito com carinho em {business.neighborhood} · Rio de Janeiro</p>
        </div>
      </div>
    </footer>
  );
}
