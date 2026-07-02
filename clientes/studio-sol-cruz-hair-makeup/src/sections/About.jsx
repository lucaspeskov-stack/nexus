import { Award, HeartHandshake, Sparkles, Clock } from 'lucide-react';
import { business, gallery } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SmartImage from '../components/SmartImage.jsx';

const pillars = [
  { icon: Award, title: 'Excelência 5,0★', text: 'Nota máxima no Google — fruto de dedicação em cada atendimento.' },
  { icon: HeartHandshake, title: 'Atendimento próximo', text: 'Ouvimos você para criar o resultado perfeito para o seu momento.' },
  { icon: Sparkles, title: 'Hair & Makeup', text: 'Cabelo e maquiagem no mesmo lugar, com harmonia e técnica.' },
  { icon: Clock, title: 'Pontualidade', text: 'Respeito pelo seu tempo, com horários bem organizados.' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-lg">
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sun-300/50 to-transparent blur-2xl" />
            <SmartImage
              src={gallery[1].src}
              alt={`Ambiente do ${business.name}`}
              className="aspect-[4/3] w-full rounded-4xl shadow-soft-lg ring-1 ring-cream-300"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Sobre nós</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Um estúdio que celebra a sua beleza
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone">
              O {business.name} une cabelo e maquiagem em uma experiência de cuidado e acolhimento.
              Cada cliente é recebido com atenção e sai com a autoestima renovada.
            </p>
            <p className="mt-3 leading-relaxed text-stone">
              Na {business.addressShort}, reunimos ambiente agradável, profissionais talentosos e
              produtos premium para tornar a sua visita inesquecível.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="flex gap-3 rounded-2xl border border-cream-300 bg-cream-50/80 p-4 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream-200 text-sun-600">
                    <p.icon size={20} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{p.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-stone">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
