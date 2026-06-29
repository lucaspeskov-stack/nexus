import { Scissors, Sparkles, Flower2, Hand, Eye, Gem, Check, ArrowRight } from 'lucide-react'
import { SERVICES, waLink } from '../data/content'
import SmartImage from '../components/SmartImage'
import Reveal from '../components/Reveal'

const ICONS = {
  scissors: Scissors,
  sparkles: Sparkles,
  flower: Flower2,
  hand: Hand,
  eye: Eye,
  gem: Gem,
}

export default function Services() {
  return (
    <section id="servicos" className="bg-cream py-20 sm:py-28">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="gold-line" /> Nossos serviços <span className="gold-line" />
          </span>
          <h2 className="mt-4 text-3xl text-ink-900 sm:text-4xl lg:text-5xl">
            Tudo para a sua beleza e bem-estar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/65">
            Do cabelo ao spa, reunimos especialidades em um ambiente sofisticado para
            cuidar de você por completo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] || Sparkles
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <article className="group card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <SmartImage
                      src={s.image}
                      alt={`${s.title} — ${s.desc}`}
                      className="h-full w-full"
                      imgClassName="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/55 to-transparent" />
                    <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream/90 text-rose-deep shadow-soft backdrop-blur">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <h3 className="absolute bottom-3 left-4 right-4 font-serif text-xl text-cream">
                      {s.title}
                    </h3>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-sm leading-relaxed text-ink/65">{s.desc}</p>
                    <ul className="mt-4 grid gap-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-ink/75">
                          <Check size={15} className="shrink-0 text-rose-deep" strokeWidth={2.2} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={waLink(`Olá! Gostaria de saber mais sobre ${s.title} no I AM Salon & Spa.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rose-deep transition-colors hover:text-ink-900"
                    >
                      Agendar {s.title.toLowerCase()}
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
