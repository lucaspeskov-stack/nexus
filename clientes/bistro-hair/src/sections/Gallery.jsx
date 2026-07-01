import { Camera } from 'lucide-react';
import { gallery, business } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SmartImage from '../components/SmartImage.jsx';

/**
 * Galeria com 5 imagens (a 1ª é a foto oficial do Google Maps; as demais são
 * de stock curado). Layout tipo mosaico editorial.
 */
export default function Gallery() {
  // classes de posicionamento no mosaico (desktop)
  const spans = [
    'md:col-span-2 md:row-span-2',
    'md:col-span-2',
    '',
    '',
    'md:col-span-2',
  ];

  return (
    <section id="galeria" className="relative py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-espresso-950/60 to-espresso-900" />

      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow"><Camera size={13} /> Galeria</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Um espaço pensado nos detalhes
          </h2>
          <p className="mt-4 text-lg text-sand">
            Ambiente, resultados e a atmosfera do {business.name} em {business.neighborhood}.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
          {gallery.map((img, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              className={`group ${spans[i] ?? ''}`}
            >
              <div className="relative h-full overflow-hidden rounded-3xl ring-1 ring-white/10">
                <SmartImage
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          Imagens ilustrativas · foto principal do Google Maps do estabelecimento.
        </p>
      </div>
    </section>
  );
}
