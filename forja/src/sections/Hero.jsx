import Reveal from '../components/Reveal'
import Button from '../components/Button'
import WhatsAppCTA from '../components/WhatsAppCTA'
import { brand } from '../data/site'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center pt-24">
      <div className="shell grid w-full grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
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
      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <Reveal delay={500}>
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-ash/60">
            Role para forjar ↓
          </span>
        </Reveal>
      </div>
    </section>
  )
}
