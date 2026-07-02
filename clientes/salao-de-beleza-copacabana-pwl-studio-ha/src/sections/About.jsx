import { Award, HeartHandshake, Leaf, Clock } from 'lucide-react';
import { business } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SmartImage from '../components/SmartImage.jsx';

const pillars = [
  { icon: Award, title: 'Excelência 5,0★', text: 'Nota máxima no Google — resultado de capricho em cada atendimento.' },
  { icon: HeartHandshake, title: 'Atendimento próximo', text: 'Ouvimos você para entregar o resultado que combina com o seu estilo.' },
  { icon: Leaf, title: 'Saúde capilar', text: 'Produtos de qualidade e técnicas que cuidam dos seus fios.' },
  { icon: Clock, title: 'Pontualidade', text: 'Respeito pelo seu tempo, com horários bem organizados.' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-bronze-300/50 to-transparent blur-2xl" />
            <SmartImage
              src={business.photo}
              alt={`Ambiente do ${business.name} em Copacabana`}
              className="aspect-[4/5] w-full rounded-4xl shadow-soft-lg ring-1 ring-sand-300"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Sobre nós</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Um estúdio de beleza no coração de Copacabana
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone">
              O {business.name} é um endereço de confiança para quem valoriza cuidado, técnica e um
              atendimento acolhedor. Cada cliente é recebido com atenção e sai com a autoestima renovada.
            </p>
            <p className="mt-3 leading-relaxed text-stone">
              Na {business.addressShort}, unimos ambiente agradável, profissionais experientes e produtos
              premium para transformar a sua visita em uma experiência memorável.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="flex gap-3 rounded-2xl border border-sand-300 bg-sand-50/80 p-4 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sand-200 text-bronze-600">
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
