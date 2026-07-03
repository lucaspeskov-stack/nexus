import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { business } from '../data/content.js';

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#local', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="relative mt-8 bg-ink text-cream-100">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-caramel-500 font-display text-lg font-bold text-ink">
              O
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-cream-50">
              Onça <span className="font-normal text-caramel-400">Beauty</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-100/70">
            {business.tagline}. Studio de beleza em {business.neighborhood}, {business.city}.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cream-50 transition-colors hover:bg-white/20"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href={`tel:+${business.phoneRaw}`}
              aria-label="Ligar"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cream-50 transition-colors hover:bg-white/20"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-50">Navegação</h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-cream-100/70 transition-colors hover:text-caramel-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-50">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-100/70">
            <li className="flex items-start gap-2.5">
              <MapPin size={17} className="mt-0.5 shrink-0 text-caramel-400" />
              <a href={business.maps} target="_blank" rel="noopener noreferrer" className="hover:text-caramel-400">
                {business.address}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle size={17} className="shrink-0 text-caramel-400" />
              <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-caramel-400">
                {business.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream-100/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {business.name}. Todos os direitos reservados.</p>
          <p>Copacabana · Rio de Janeiro</p>
        </div>
      </div>
    </footer>
  );
}
