import { MapPin, Navigation, Clock } from 'lucide-react';
import { business } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

const today = new Date().getDay(); // 0 = domingo
const dayIndex = (today + 6) % 7; // converte p/ 0 = segunda (nossa ordem)

export default function MapSection() {
  const embed =
    'https://www.google.com/maps?q=' +
    encodeURIComponent('I AM Salon & Spa, R. Visc. de Pirajá, 608, Ipanema, Rio de Janeiro') +
    '&output=embed';

  return (
    <section id="local" className="relative py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cream via-plum-50/50 to-cream" />

      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Localização</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-plum-900 sm:text-4xl">
            Fácil de chegar, em Ipanema
          </h2>
          <p className="mt-4 text-lg text-ink/70">{business.address}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="overflow-hidden rounded-4xl border border-plum-100 shadow-soft-lg">
            <iframe
              title={`Mapa — ${business.name}`}
              src={embed}
              className="h-[320px] w-full md:h-[440px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="card p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-plum-100 text-plum-700">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-plum-900">Endereço</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{business.address}</p>
                    <a
                      href={business.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-plum-700 hover:text-plum-900"
                    >
                      <Navigation size={15} /> Traçar rota
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-plum-100 text-plum-700">
                    <Clock size={20} />
                  </span>
                  <h3 className="text-sm font-semibold text-plum-900">Horário de funcionamento</h3>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {business.hours.map((h, i) => {
                    const closed = !h.open;
                    const isToday = i === dayIndex;
                    return (
                      <li
                        key={h.day}
                        className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-sm ${
                          isToday ? 'bg-plum-50 font-semibold text-plum-900' : 'text-ink/70'
                        }`}
                      >
                        <span>{h.day}</span>
                        <span className={closed ? 'text-ink/40' : ''}>
                          {closed ? 'Fechado' : `${h.open} – ${h.close}`}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
