import { ForjaIcon } from './ForjaMark'
import { brand, contact, whatsappLink } from '../data/site'

function ContactLink({ label, href, display }) {
  if (!href) {
    return (
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-ash/50">
        {label} · em breve
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-mono text-xs uppercase tracking-[0.18em] text-ash transition-colors hover:text-ember-200"
    >
      {label}
      {display ? ` · ${display}` : ''}
    </a>
  )
}

export default function Footer() {
  const wpp = whatsappLink()
  const email = contact.email ? `mailto:${contact.email}` : null
  const insta = contact.instagram ? `https://instagram.com/${contact.instagram}` : null

  return (
    <footer className="relative border-t border-white/[0.07] bg-ink-800">
      <div className="shell py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <ForjaIcon size={26} />
              <span className="font-display text-lg font-bold tracking-[0.18em]">FORJA</span>
            </div>
            <p className="mt-4 font-mono text-sm text-ash">{brand.tagline}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-ash/60">
              {brand.city}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="eyebrow mb-1">Contato</span>
            <ContactLink label="WhatsApp" href={wpp} display={contact.whatsapp ? '' : null} />
            <ContactLink label="E-mail" href={email} display={contact.email || ''} />
            <ContactLink
              label="Instagram"
              href={insta}
              display={contact.instagram ? `@${contact.instagram}` : null}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash/50">
            © {brand.year} {brand.name}. Forjado no Rio.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash/50">
            Sites · Agents de IA
          </p>
        </div>
      </div>
    </footer>
  )
}
