import { GALLERY } from '../data/content'
import SmartImage from '../components/SmartImage'
import Reveal from '../components/Reveal'

export default function Gallery() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="gold-line" /> Ambiente &amp; trabalhos <span className="gold-line" />
          </span>
          <h2 className="mt-4 text-3xl text-ink-900 sm:text-4xl lg:text-5xl">
            Um espaço pensado para você
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 0.06}
              className={`group ${g.span ? 'col-span-2 row-span-1 lg:row-span-2' : ''}`}
            >
              <div className="frame-gold h-full w-full">
                <SmartImage
                  src={g.image}
                  alt={g.alt}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
