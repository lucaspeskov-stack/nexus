import { Heart, Leaf, Award, Users } from 'lucide-react';
import { business } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SmartImage from '../components/SmartImage.jsx';

const pillars = [
  { icon: Heart, title: 'Atendimento humano', text: 'Cada cliente é único. Ouvimos, entendemos e cuidamos com carinho.' },
  { icon: Leaf, title: 'Bem-estar real', text: 'Um ambiente sereno para relaxar e recarregar as energias.' },
  { icon: Award, title: 'Qualidade premium', text: 'Produtos e técnicas de alta performance em cada serviço.' },
  { icon: Users, title: 'Time apaixonado', text: 'Profissionais experientes e dedicados ao seu resultado.' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-plum-200/60 to-lav-400/30 blur-2xl" />
            <SmartImage
              src={business.photo}
              alt={`Espaço do ${business.name}`}
              className="aspect-[4/5] w-full rounded-4xl shadow-soft-lg ring-1 ring-plum-100"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Sobre nós</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-plum-900 sm:text-4xl">
              Um refúgio de beleza no coração de Ipanema
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              O {business.name} nasceu para unir o melhor do salão e do spa em uma experiência única.
              Aqui, cada detalhe é pensado para que você se sinta cuidada, renovada e confiante —
              da recepção acolhedora ao resultado impecável.
            </p>
            <p className="mt-3 leading-relaxed text-ink/70">
              Localizado na charmosa {business.addressShort}, somos ponto de encontro de quem valoriza
              autocuidado, qualidade e um atendimento que faz diferença.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="flex gap-3 rounded-2xl border border-plum-100 bg-white/70 p-4 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-plum-100 text-plum-700">
                    <p.icon size={20} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-plum-900">{p.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink/60">{p.text}</p>
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
