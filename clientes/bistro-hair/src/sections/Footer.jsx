import { MapPin, Phone, Link2, MessageCircle } from 'lucide-react';
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
    <footer className="relative mt-8 border-t border-white/10 bg-espresso-950">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-500/40 bg-espresso-800 font-display text-lg font-bold text-gold-300">
              BH
            </span>
            <span className="font-display text-lg font-semibold tracking-wide text-cream">
              BISTRÔ <span className="font-normal text-gold-300">HAIR</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {business.tagline}. Um salão-atelier em {business.neighborhood}, {business.city}.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={business.links}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Links e redes sociais"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gold-200 transition-colors hover:border-gold-500/40 hover:bg-white/10"
            >
              <Link2 size={20} />
            </a>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gold-200 transition-colors hover:border-gold-500/40 hover:bg-white/10"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">Navegação</h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted transition-colors hover:text-gold-200">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2.5">
              <MapPin size={17} className="mt-0.5 shrink-0 text-gold-400" />
              <a href={business.maps} target="_blank" rel="noopener noreferrer" className="hover:text-gold-200">
                {business.address}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={17} className="shrink-0 text-gold-400" />
              <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-gold-200">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Link2 size={17} className="shrink-0 text-gold-400" />
              <a href={business.links} target="_blank" rel="noopener noreferrer" className="hover:text-gold-200">
                {business.linksLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {business.name}. Todos os direitos reservados.</p>
          <p>Copacabana · Rio de Janeiro</p>
        </div>
      </div>
    </footer>
  );
}
