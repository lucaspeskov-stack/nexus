import { Instagram, MessageCircle, MapPin, Phone, Star } from 'lucide-react'
import { BUSINESS, waLink } from '../data/content'

const LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#mapa', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink-900 text-cream">
      <div className="absolute inset-0 bg-grain opacity-20" />
      <div className="container-wide relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-cream/95 font-serif text-xl italic text-ink-900">
                I
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-lg font-semibold">I AM</span>
                <span className="block text-[0.62rem] font-medium uppercase tracking-widest3 text-rose-soft">
                  Salon &amp; Spa
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              Salão &amp; spa premium no coração de Ipanema. Beleza, estética e bem-estar
              em um só endereço.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-sm">
              <Star size={15} className="fill-rose text-rose" strokeWidth={1.5} />
              <span className="font-semibold">{BUSINESS.rating.toLocaleString('pt-BR')}</span>
              <span className="text-cream/55">· {BUSINESS.reviewsCount} avaliações</span>
            </div>
          </div>

          {/* Navegação */}
          <nav className="text-sm">
            <h3 className="font-serif text-base text-rose-soft">Navegação</h3>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-cream/65 transition-colors hover:text-rose-soft">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div className="text-sm">
            <h3 className="font-serif text-base text-rose-soft">Contato</h3>
            <ul className="mt-4 space-y-3 text-cream/65">
              <li>
                <a
                  href={BUSINESS.googleDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition-colors hover:text-rose-soft"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0 text-rose-soft" />
                  {BUSINESS.addressShort}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${BUSINESS.phoneIntl}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-rose-soft"
                >
                  <Phone size={16} className="shrink-0 text-rose-soft" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-rose-soft"
                >
                  <Instagram size={16} className="shrink-0 text-rose-soft" />
                  {BUSINESS.instagramHandle}
                </a>
              </li>
            </ul>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6">
              <MessageCircle size={16} />
              Agendar
            </a>
          </div>
        </div>

        <div className="divider-soft" />
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-cream/45 sm:flex-row sm:text-left">
          <p>© {year} {BUSINESS.name}. Todos os direitos reservados.</p>
          <p>{BUSINESS.address}</p>
        </div>
      </div>
    </footer>
  )
}
