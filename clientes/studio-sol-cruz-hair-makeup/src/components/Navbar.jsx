import { useEffect, useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { business } from '../data/content.js';

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
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
        scrolled ? 'bg-cream-100/90 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${business.name} — início`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sun-400 to-gold-500 font-display text-lg font-bold text-cream-50">
            S
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
            Studio <span className="font-normal text-sun-600">Sol Cruz</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-stone transition-colors hover:bg-cream-50 hover:text-sun-700"
            >
              {l.label}
            </a>
          ))}
          <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary ml-2">
            Agendar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-sun-500/30 bg-cream-50/80 text-sun-700 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream-300 bg-cream-100/95 backdrop-blur-md lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-cream-50 hover:text-sun-700"
              >
                {l.label}
              </a>
            ))}
            <a
              href={business.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-sun-700"
            >
              <MapPin size={16} /> {business.addressShort}
            </a>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
