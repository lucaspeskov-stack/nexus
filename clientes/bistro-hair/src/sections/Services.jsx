import { Scissors, Palette, Sparkles, Wind, Droplets, UserRound, ArrowUpRight } from 'lucide-react';
import { services, business } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

const iconMap = { Scissors, Palette, Sparkles, Wind, Droplets, UserRound };

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nossos serviços</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            O cuidado que o seu cabelo merece
          </h2>
          <p className="mt-4 text-lg text-sand">
            Do corte à cor, cada serviço é conduzido com técnica, produtos premium e um olhar atento a você.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Sparkles;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <article className="group card h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/30">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/20 bg-gold-500/10 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-espresso-950">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-cream">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand">{s.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gold-200"
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
