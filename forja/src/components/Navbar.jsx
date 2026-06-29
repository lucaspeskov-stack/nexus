import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ForjaWordmark } from './ForjaMark'
import WhatsAppCTA from './WhatsAppCTA'

const links = [
  { to: '/', label: 'Sites' },
  { to: '/agents', label: 'Agents de IA' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha o menu mobile ao trocar de página
  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink-900/80 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between md:h-20">
        <Link to="/" aria-label="Forja — início">
          <ForjaWordmark />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-7">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 ${
                    isActive ? 'text-ember-200' : 'text-ash hover:text-bone'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
          <WhatsAppCTA size="sm">Falar agora</WhatsAppCTA>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-6 bg-bone transition-transform duration-300 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-bone transition-opacity duration-200 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-bone transition-transform duration-300 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-ink-900/95 backdrop-blur-md md:hidden transition-[max-height] duration-300 ${
          open ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <div className="shell flex flex-col gap-6 py-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `font-mono text-sm uppercase tracking-[0.2em] ${
                  isActive ? 'text-ember-200' : 'text-bone'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <WhatsAppCTA>Falar agora</WhatsAppCTA>
        </div>
      </div>
    </header>
  )
}
