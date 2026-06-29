import { Star, Quote, ExternalLink } from 'lucide-react'
import { BUSINESS, REVIEWS, RATING_BREAKDOWN, REVIEW_TAGS } from '../data/content'
import StarRating from '../components/StarRating'
import Reveal from '../components/Reveal'

export default function Reviews() {
  return (
    <section id="avaliacoes" className="bg-cream py-20 sm:py-28">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="gold-line" /> Avaliações <span className="gold-line" />
          </span>
          <h2 className="mt-4 text-3xl text-ink-900 sm:text-4xl lg:text-5xl">
            O que dizem nossas clientes
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Resumo da nota */}
          <Reveal>
            <div className="card p-7 lg:sticky lg:top-28">
              <div className="flex items-end gap-4">
                <span className="font-serif text-6xl leading-none text-ink-900">
                  {BUSINESS.rating.toLocaleString('pt-BR')}
                </span>
                <div className="pb-1">
                  <StarRating value={BUSINESS.rating} size={18} />
                  <p className="mt-1 text-sm text-ink/60">{BUSINESS.reviewsCount} avaliações</p>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                {RATING_BREAKDOWN.map((r) => (
                  <div key={r.stars} className="flex items-center gap-3 text-xs text-ink/60">
                    <span className="flex w-7 items-center gap-0.5">
                      {r.stars}
                      <Star size={11} className="fill-rose text-rose" strokeWidth={1.5} />
                    </span>
                    <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/[0.07]">
                      <span
                        className="block h-full rounded-full bg-rose"
                        style={{ width: `${r.pct}%` }}
                      />
                    </span>
                    <span className="w-8 text-right tabular-nums">{r.pct}%</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {REVIEW_TAGS.map((t) => (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-rose-light px-3 py-1 text-xs font-medium text-rose-deep"
                  >
                    {t.label}
                    <span className="text-rose-deep/60">{t.count}</span>
                  </span>
                ))}
              </div>

              <a
                href={BUSINESS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-7 w-full"
              >
                Ver no Google
                <ExternalLink size={15} />
              </a>
            </div>
          </Reveal>

          {/* Lista de depoimentos */}
          <div className="grid gap-5 sm:grid-cols-2">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={(i % 2) * 0.08}>
                <figure className="card flex h-full flex-col p-6">
                  <Quote size={26} className="text-rose/40" />
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-ink/[0.06] pt-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink-900 text-sm font-semibold text-rose-soft">
                      {r.initials}
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-semibold text-ink-900">{r.name}</p>
                      <p className="text-xs text-ink/55">{r.meta}</p>
                    </div>
                    <StarRating value={r.stars || 5} size={13} className="ml-auto" />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
