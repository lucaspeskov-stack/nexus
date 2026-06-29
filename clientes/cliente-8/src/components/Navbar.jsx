import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle, MapPin } from 'lucide-react'
import { BUSINESS, waLink } from '../data/content'
import { useOpenStatus } from '../hooks/useOpenStatus'

const LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#mapa', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const status = useOpenStatus()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink/10 bg-cream/85 backdrop-blur-md shadow-soft'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-wide flex h-[4.75rem] items-center justify-between gap-4">
        {/* Logo */}
        <a href="#topo" className="group flex items-center gap-3" aria-label={`${BUSINESS.name} — início`}>
          <span
            className={`grid h-11 w-11 place-items-center rounded-full font-serif text-lg italic transition-colors ${
              scrolled ? 'bg-ink-900 text-rose-soft' : 'bg-cream/90 text-ink-900'
            }`}
          >
            I
          </span>
          <span className="leading-tight">
            <span
              className={`block font-serif text-base font-semibold tracking-wide transition-colors ${
                scrolled ? 'text-ink-900' : 'text-cream'
              }`}
            >
              I AM
            </span>
            <span
              className={`block text-[0.62rem] font-medium uppercase tracking-widest3 transition-colors ${
                scrolled ? 'text-rose-deep' : 'text-rose-soft'
              }`}
            >
              Salon &amp; Spa
            </span>
          </span>
        </a>

        {/* Links desktop */}
        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-rose ${
                scrolled ? 'text-ink/75' : 'text-cream/85'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${
              scrolled ? 'bg-ink/5 text-ink/70' : 'bg-white/10 text-cream/90'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${status.open ? 'bg-emerald-400' : 'bg-rose'}`}
            />
            {status.label}
          </span>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <MessageCircle size={16} strokeWidth={2} />
            Agendar
          </a>
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className={`grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${
            scrolled ? 'text-ink-900 hover:bg-ink/5' : 'text-cream hover:bg-white/10'
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Painel mobile */}
      <div
        className={`overflow-hidden bg-cream/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[28rem] border-t border-ink/10' : 'max-h-0'
        }`}
      >
        <div className="container-px flex flex-col gap-1 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-ink/5"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-2 px-3 text-sm text-ink/60">
            <MapPin size={15} className="text-rose-deep" />
            {BUSINESS.neighborhood} · Rio de Janeiro
          </div>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-wa mt-3"
          >
            <MessageCircle size={16} />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
