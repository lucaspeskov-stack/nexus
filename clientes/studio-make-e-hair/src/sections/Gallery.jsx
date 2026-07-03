import { Camera } from 'lucide-react';
import { gallery, business } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SmartImage from '../components/SmartImage.jsx';

/**
 * Galeria com as 5 fotos oficiais (Google Maps). Layout mosaico editorial;
 * como as fotos são landscape, a primeira ocupa destaque em largura.
 */
export default function Gallery() {
  const spans = [
    'sm:col-span-2 lg:col-span-2 lg:row-span-2',
    '',
    '',
    'sm:col-span-2 lg:col-span-1',
    '',
  ];

  return (
    <section id="galeria" className="relative py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cream-50 to-cream-100" />

      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow"><Camera size={13} /> Galeria</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Nosso espaço e nossos trabalhos
          </h2>
          <p className="mt-4 text-lg text-stone">
            A atmosfera acolhedora do {business.shortName}, no {business.neighborhood} do Rio.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
          {gallery.map((img, i) => (
            <Reveal key={i} delay={i * 50} className={`group ${spans[i] ?? ''}`}>
              <div className="relative h-full overflow-hidden rounded-3xl ring-1 ring-cream-300">
                <SmartImage
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-stone/70">
          Fotos oficiais do estabelecimento (Google Maps).
        </p>
      </div>
    </section>
  );
}
