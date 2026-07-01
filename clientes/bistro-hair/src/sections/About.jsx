import { Award, Leaf, Clock, HeartHandshake } from 'lucide-react';
import { business, gallery } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SmartImage from '../components/SmartImage.jsx';

const pillars = [
  { icon: Award, title: 'Técnica premium', text: 'Profissionais experientes e produtos de alta performance.' },
  { icon: HeartHandshake, title: 'Atendimento próximo', text: 'Escutamos você para entregar o resultado que combina com o seu estilo.' },
  { icon: Leaf, title: 'Cuidado de verdade', text: 'Saúde capilar em primeiro lugar, do diagnóstico à finalização.' },
  { icon: Clock, title: 'Pontualidade', text: 'Respeito pelo seu tempo, com horários organizados.' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold-500/20 to-transparent blur-2xl" />
            <SmartImage
              src={gallery[3].src}
              alt="Estação de trabalho do BISTRÔ HAIR"
              className="aspect-[4/5] w-full rounded-4xl ring-1 ring-white/10"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Sobre nós</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
              A elegância de um bistrô, a precisão de um atelier
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-sand">
              O {business.name} nasceu para ser mais do que um salão: um endereço de confiança em
              Copacabana, onde cada cliente é recebido com carinho e sai com a autoestima renovada.
            </p>
            <p className="mt-3 leading-relaxed text-sand">
              Na {business.addressShort}, unimos ambiente acolhedor, técnica apurada e um time apaixonado
              por cabelo para transformar a sua visita em uma experiência memorável.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300">
                    <p.icon size={20} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-cream">{p.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">{p.text}</p>
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
