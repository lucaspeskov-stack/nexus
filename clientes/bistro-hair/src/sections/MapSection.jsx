import { MapPin, Navigation, Clock } from 'lucide-react';
import { business } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

const today = new Date().getDay(); // 0 = domingo
const dayIndex = (today + 6) % 7; // 0 = segunda (nossa ordem)

export default function MapSection() {
  const embed =
    'https://www.google.com/maps?q=' +
    encodeURIComponent('BISTRÔ HAIR, Rua Siqueira Campos, 43, Copacabana, Rio de Janeiro') +
    '&output=embed';

  return (
    <section id="local" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Localização</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            No coração de Copacabana
          </h2>
          <p className="mt-4 text-lg text-sand">{business.address}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="overflow-hidden rounded-4xl border border-white/10 shadow-soft">
            <iframe
              title={`Mapa — ${business.name}`}
              src={embed}
              className="h-[320px] w-full md:h-[440px]"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.05)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="card p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-cream">Endereço</h3>
                    <p className="mt-1 text-sm leading-relaxed text-sand">{business.address}</p>
                    <a
                      href={business.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 hover:text-gold-200"
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
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300">
                    <Clock size={20} />
                  </span>
                  <h3 className="text-sm font-semibold text-cream">Horário de funcionamento</h3>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {business.hours.map((h, i) => {
                    const closed = !h.open;
                    const isToday = i === dayIndex;
                    return (
                      <li
                        key={h.day}
                        className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-sm ${
                          isToday ? 'bg-gold-500/10 font-semibold text-gold-200' : 'text-sand'
                        }`}
                      >
                        <span>{h.day}</span>
                        <span className={closed ? 'text-muted' : ''}>
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
