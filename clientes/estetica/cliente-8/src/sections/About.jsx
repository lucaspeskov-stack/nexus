import { Check, Instagram, MessageCircle } from 'lucide-react'
import { BUSINESS, HIGHLIGHTS, STATS, waLink } from '../data/content'
import SmartImage from '../components/SmartImage'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-ink-900 py-20 text-cream sm:py-28">
      <div className="absolute inset-0">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-rose/15 blur-[110px]" />
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-mauve/15 blur-[110px]" />
        <div className="absolute inset-0 bg-grain opacity-30" />
      </div>

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2">
        {/* Imagem */}
        <Reveal className="order-2 lg:order-1">
          <div className="frame-gold aspect-[4/5] w-full max-w-md lg:mx-0">
            <SmartImage
              src={BUSINESS.heroPhoto}
              alt={`Interior do ${BUSINESS.name}`}
              className="h-full w-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
          </div>
        </Reveal>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow text-rose-soft">
              <span className="gold-line" /> Sobre nós
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">
              Beleza com identidade, em Ipanema
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/80">
              O <strong className="font-semibold text-cream">I AM Salon &amp; Spa</strong> nasceu
              para ser mais do que um salão: um refúgio de beleza e bem-estar no bairro mais
              icônico do Rio. Aqui, cada detalhe é pensado para que você se sinta única — do
              atendimento personalizado ao ambiente sofisticado.
            </p>
            <p className="mt-4 text-base leading-relaxed text-cream/70">
              Reunimos cabelo, estética, spa e bem-estar em um só endereço, com uma equipe
              experiente e apaixonada pelo que faz.
            </p>

            <ul className="mt-7 grid gap-3">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-cream/85">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-rose/20 text-rose-soft">
                    <Check size={13} strokeWidth={2.4} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa">
                <MessageCircle size={18} />
                Agendar horário
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <Instagram size={17} />
                {BUSINESS.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Estatísticas */}
      <Reveal className="container-wide relative mt-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-4 py-7 text-center">
              <p className="font-serif text-3xl text-rose-soft sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest2 text-cream/55">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
