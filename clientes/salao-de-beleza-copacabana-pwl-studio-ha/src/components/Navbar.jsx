import { useEffect, useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { business } from '../data/content.js';

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#local', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-sand-100/90 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${business.name} — início`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink font-display text-sm font-bold text-bronze-400">
            PWL
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Pwl <span className="font-normal text-bronze-600">Studio Hair</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-stone transition-colors hover:bg-sand-50 hover:text-bronze-700"
            >
              {l.label}
            </a>
          ))}
          <a href={`tel:${business.phoneTel}`} className="btn-primary ml-2">
            <Phone size={16} /> Ligar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-bronze-500/30 bg-sand-50/80 text-bronze-700 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-sand-300 bg-sand-100/95 backdrop-blur-md md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-sand-50 hover:text-bronze-700"
              >
                {l.label}
              </a>
            ))}
            <a
              href={business.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-bronze-700"
            >
              <MapPin size={16} /> {business.addressShort}
            </a>
            <a
              href={`tel:${business.phoneTel}`}
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              <Phone size={16} /> Ligar para agendar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
