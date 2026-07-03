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
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Quem passa por aqui, recomenda
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-cream-300 bg-cream-50 px-5 py-2.5 shadow-soft">
            <StarRating value={business.rating} size={20} />
            <span className="text-sm text-stone">
              <strong className="text-ink">{business.rating.toFixed(1).replace('.', ',')}</strong> · {business.reviewsCount} avaliações no Google
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 60}>
              <figure className="card flex h-full flex-col p-7">
                <Quote size={28} className="text-caramel-400" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/80">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-cream-300 pt-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-caramel-400 to-caramel-600 font-semibold text-cream-50">
                    {r.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink">{r.name}</p>
                    <div className="mt-0.5 flex items-center gap-2">
                      <StarRating value={r.rating} size={13} />
                      <span className="truncate text-xs text-stone">{r.service}</span>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-12 text-center">
          <a href={business.maps} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Ver todas as avaliações no Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}
