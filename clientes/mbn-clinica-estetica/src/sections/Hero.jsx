import { useState } from 'react';
import { MapPin, Star, Calendar, ArrowRight } from 'lucide-react';
import { business, gallery, stats } from '../data/content.js';

/**
 * Hero com a primeira foto como imagem principal e efeito Ken Burns
 * (zoom lento 1 -> 1.08, ~18s, loop suave). Fallback em gradiente se a
 * imagem falhar (onError).
 */
export default function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="top" className="relative min-h-dvh overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-ink">
        {imgOk ? (
          <img
            src={gallery[0].src}
            alt=""
            aria-hidden
            onError={() => setImgOk(false)}
            className="h-full w-full origin-center animate-kenburns object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-ink via-teal-600 to-teal-500" />
        )}
        {/* scrim para legibilidade (contraste AA sobre a foto) */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/60 to-ink/35" />
      </div>

      <div className="container-x flex min-h-dvh flex-col justify-center pt-28 pb-16">
        <div className="max-w-2xl">
          <span className="eyebrow border-cream-50/25 bg-white/10 text-cream-100 backdrop-blur">
            <MapPin size={14} /> {business.neighborhood} · {business.city}
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cream-50 sm:text-5xl lg:text-6xl">
            Cuidar de você é a nossa <span className="text-gold-400">arte</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-100/90">
            {business.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Calendar size={18} /> Agendar avaliação
            </a>
            <a
              href="#servicos"
              className="btn inline-flex border border-cream-50/30 bg-white/10 text-cream-50 backdrop-blur hover:bg-white/20"
            >
              Ver tratamentos <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-cream-100 backdrop-blur">
            <div className="flex items-center gap-1.5">
              <Star size={16} className="text-gold-400" fill="currentColor" />
              <strong className="text-cream-50">{business.rating.toFixed(1).replace('.', ',')}</strong>
            </div>
            <span className="h-4 w-px bg-white/20" />
            <span>
              <strong className="text-cream-50">{business.reviewsCount}</strong> avaliações no Google
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:gap-6 md:max-w-3xl md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
                {s.value}
                <span className="text-gold-400">{s.suffix}</span>
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-cream-100/80 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
