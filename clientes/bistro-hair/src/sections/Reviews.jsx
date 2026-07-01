import { Quote } from 'lucide-react';
import { reviews, business } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import StarRating from '../components/StarRating.jsx';

export default function Reviews() {
  return (
    <section id="avaliacoes" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Avaliações</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Quem passa por aqui, recomenda
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5">
            <StarRating value={business.rating} size={20} />
            <span className="text-sm text-sand">
              <strong className="text-cream">{business.rating.toFixed(1)}</strong> · {business.reviewsCount} avaliações no Google
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.06}>
              <figure className="card flex h-full flex-col p-7">
                <Quote size={28} className="text-gold-500/60" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-sand">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 font-semibold text-espresso-950">
                    {r.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-cream">{r.name}</p>
                    <div className="mt-0.5 flex items-center gap-2">
                      <StarRating value={r.rating} size={13} />
                      <span className="truncate text-xs text-muted">{r.service}</span>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 text-center">
          <a href={business.maps} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Ver todas as avaliações no Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}
