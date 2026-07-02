import { Scissors, Palette, Wind, Sparkles, Hand, Brush, ArrowUpRight } from 'lucide-react';
import { services, business } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

const iconMap = { Scissors, Palette, Wind, Sparkles, Hand, Brush };

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nossos serviços</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Beleza completa, do corte à cor
          </h2>
          <p className="mt-4 text-lg text-stone">
            Serviços conduzidos com técnica, produtos premium e atenção a cada detalhe do seu visual.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Sparkles;
            return (
              <Reveal key={s.title} delay={i * 60}>
                <article className="group card h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-bronze-400 hover:shadow-soft-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand-200 text-bronze-600 transition-colors group-hover:bg-bronze-600 group-hover:text-sand-50">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{s.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-sand-200 px-3 py-1 text-xs font-medium text-bronze-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100} className="mt-12 text-center">
          <a href={`tel:${business.phoneTel}`} className="btn-primary">
            Agendar um serviço <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
