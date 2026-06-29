import { MapPin, Navigation, Clock } from 'lucide-react'
import { BUSINESS, HOURS } from '../data/content'
import Reveal from '../components/Reveal'
import { useOpenStatus } from '../hooks/useOpenStatus'

const fmt = (min) =>
  `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`

export default function MapSection() {
  const status = useOpenStatus()
  const todayIdx = new Date().getDay()

  return (
    <section id="mapa" className="bg-cream-100 py-20 sm:py-28">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="gold-line" /> Onde estamos <span className="gold-line" />
          </span>
          <h2 className="mt-4 text-3xl text-ink-900 sm:text-4xl lg:text-5xl">
            No coração de Ipanema
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/65">{BUSINESS.address}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Mapa */}
          <Reveal>
            <div className="frame-gold aspect-[4/3] w-full lg:aspect-auto lg:h-full">
              <iframe
                title={`Mapa — ${BUSINESS.name}`}
                src={BUSINESS.mapEmbed}
                className="h-full min-h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          {/* Informações */}
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-5">
              <div className="card p-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-rose-light text-rose-deep">
                    <MapPin size={20} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-ink-900">Endereço</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">{BUSINESS.address}</p>
                    <a
                      href={BUSINESS.googleDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold mt-4"
                    >
                      <Navigation size={16} />
                      Como chegar
                    </a>
                  </div>
                </div>
              </div>

              <div className="card flex-1 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2 font-serif text-lg text-ink-900">
                    <Clock size={18} className="text-rose-deep" />
                    Horários
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                      status.open
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-rose-light text-rose-deep'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        status.open ? 'bg-emerald-500' : 'bg-rose'
                      }`}
                    />
                    {status.open ? 'Aberto' : 'Fechado'}
                  </span>
                </div>

                <ul className="mt-4 divide-y divide-ink/[0.06]">
                  {HOURS.map((h, i) => (
                    <li
                      key={h.day}
                      className={`flex items-center justify-between py-2 text-sm ${
                        i === todayIdx ? 'font-semibold text-ink-900' : 'text-ink/65'
                      }`}
                    >
                      <span>
                        {h.day}
                        {i === todayIdx && (
                          <span className="ml-2 rounded-full bg-rose-light px-2 py-0.5 text-[0.65rem] font-medium text-rose-deep">
                            hoje
                          </span>
                        )}
                      </span>
                      <span className="tabular-nums">
                        {h.closed ? 'Fechado' : `${fmt(h.open)} – ${fmt(h.close)}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
