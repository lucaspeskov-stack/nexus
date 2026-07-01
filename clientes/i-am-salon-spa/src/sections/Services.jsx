import { Scissors, Sparkles, Flower2, Hand, Brush, Wand2, ArrowUpRight } from 'lucide-react';
import { services, business } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

const iconMap = { Scissors, Sparkles, Flower2, Hand, Brush, Wand2 };

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nossos serviços</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-plum-900 sm:text-4xl">
            Cuidado completo, do cabelo ao bem-estar
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Uma experiência premium reunindo salão e spa em um só lugar, no coração de Ipanema.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Sparkles;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <article className="group card h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-plum-100 to-lav-400/20 text-plum-700 transition-colors group-hover:from-plum-500 group-hover:to-lav-500 group-hover:text-white">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-plum-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-plum-50 px-3 py-1 text-xs font-medium text-plum-700"
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

        <Reveal delay={0.1} className="mt-12 text-center">
          <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agendar um serviço <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
