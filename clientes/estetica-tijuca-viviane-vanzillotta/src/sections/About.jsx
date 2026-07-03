import { Award, HeartHandshake, ShieldCheck, Clock } from 'lucide-react';
import { business, gallery } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SmartImage from '../components/SmartImage.jsx';

const pillars = [
  { icon: Award, title: 'Nota 5,0★', text: 'Avaliação máxima no Google — reflexo do cuidado em cada atendimento.' },
  { icon: HeartHandshake, title: 'Atendimento humano', text: 'A Viviane escuta você para criar o protocolo ideal para a sua pele.' },
  { icon: ShieldCheck, title: 'Higiene e segurança', text: 'Ambiente limpo, reservado e materiais rigorosamente higienizados.' },
  { icon: Clock, title: 'Pontualidade', text: 'Respeito pelo seu tempo, com horários bem organizados.' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-lg">
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sage-300/40 to-transparent blur-2xl" />
            <SmartImage
              src={gallery[1].src}
              alt={`Ambiente da ${business.name}`}
              className="aspect-[4/3] w-full rounded-4xl shadow-soft-lg ring-1 ring-cream-300"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Sobre nós</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Cuidado e resultado com a assinatura de Viviane Vanzillotta
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone">
              A {business.name} é o endereço de quem busca autocuidado com técnica e acolhimento na
              Tijuca. Cada cliente é recebida com atenção e sai com a autoestima renovada.
            </p>
            <p className="mt-3 leading-relaxed text-stone">
              Na {business.addressShort}, unimos ambiente sereno, protocolos personalizados e produtos
              de qualidade para tornar a sua experiência de estética verdadeiramente transformadora.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="flex gap-3 rounded-2xl border border-cream-300 bg-cream-50/80 p-4 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream-200 text-sage-600">
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
