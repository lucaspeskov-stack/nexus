import Reveal from '../components/Reveal'
import Button from '../components/Button'
import WhatsAppCTA from '../components/WhatsAppCTA'
import CursorBlur from '../components/CursorBlur'
import { brand } from '../data/site'
import heroVideo from '../../arquivos/forja-hero.mp4'

const REDUCED =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      {/* Fundo: vídeo da forja */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          src={heroVideo}
          autoPlay={!REDUCED}
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* Escurecimento + vinheta para legibilidade do texto */}
        <div className="absolute inset-0 bg-ink-900/55" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(10,10,11,0.85) 0%, rgba(10,10,11,0.35) 55%, rgba(10,10,11,0.15) 100%), linear-gradient(180deg, rgba(10,10,11,0.4) 0%, rgba(10,10,11,0) 30%, rgba(10,10,11,0.7) 100%)',
          }}
        />
      </div>

      {/* Holofote de desfoque que segue o cursor sobre o vídeo */}
      <CursorBlur radius={140} maxBlur={14} />

      <div className="shell relative z-10 grid w-full grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
        {/* Coluna principal */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-ember-400">[ 00 ]</span>
              <span className="h-px w-8 bg-white/20" />
              <span className="eyebrow">Estúdio de IA &amp; Web · {brand.city}</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-7 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
              Sites <span className="text-ember">forjados</span>
              <br />
              para vender.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <WhatsAppCTA>Forjar meu site</WhatsAppCTA>
              <Button variant="ghost" href="#planos" arrow>
                Ver planos
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Coluna de apoio (texto) */}
        <div className="lg:col-span-5 lg:pb-3">
          <Reveal delay={280}>
            <p className="max-w-md text-lg leading-relaxed text-ash">
              A <span className="text-bone">Forja</span> desenha e constrói sites de alta
              performance — rápidos, vivos e pensados para converter. Do conceito ao no ar,
              com acabamento de estúdio.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Dica de scroll */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <Reveal delay={500}>
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-ash/60">
            Role para forjar ↓
          </span>
        </Reveal>
      </div>
    </section>
  )
}
