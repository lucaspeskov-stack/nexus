import { MessageCircle, MapPin, Star, ChevronDown } from 'lucide-react'
import { BUSINESS, waLink } from '../data/content'
import SmartImage from '../components/SmartImage'
import { useOpenStatus } from '../hooks/useOpenStatus'

export default function Hero() {
  const status = useOpenStatus()

  return (
    <section className="relative overflow-hidden bg-ink-900 pt-[4.75rem] text-cream">
      {/* Fundo: gradiente rico + textura */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 80% at 85% 10%, #46313e 0%, #241820 45%, #160d13 100%)',
          }}
        />
        <div className="absolute inset-0 bg-grain opacity-40" />
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-rose/20 blur-[90px]" />
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-mauve/20 blur-[100px]" />
      </div>

      <div className="container-wide relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Coluna de texto */}
        <div className="max-w-xl">
          <span className="eyebrow text-rose-soft">
            <span className="gold-line" /> {BUSINESS.city}
          </span>

          <h1 className="mt-5 font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Beleza e bem-estar
            <span className="block italic text-gold-grad">como você merece.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/80 sm:text-lg">
            No coração de Ipanema, o <strong className="font-semibold text-cream">I AM Salon &amp; Spa</strong>{' '}
            reúne salão e spa em um só endereço — uma experiência completa de cuidado,
            sofisticação e relaxamento.
          </p>

          {/* Prova social */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <span className="inline-flex items-center gap-2">
              <Star size={18} className="fill-rose text-rose" strokeWidth={1.5} />
              <span className="font-semibold text-cream">{BUSINESS.rating.toLocaleString('pt-BR')}</span>
              <span className="text-cream/60">· {BUSINESS.reviewsCount} avaliações no Google</span>
            </span>
            <span className="inline-flex items-center gap-2 text-cream/70">
              <span className={`h-2 w-2 rounded-full ${status.open ? 'bg-emerald-400' : 'bg-rose'}`} />
              {status.label}
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa">
              <MessageCircle size={18} />
              Agendar pelo WhatsApp
            </a>
            <a href="#servicos" className="btn-light">
              Ver serviços
            </a>
          </div>

          <a
            href={BUSINESS.googleDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-rose-soft"
          >
            <MapPin size={16} className="text-rose-soft" />
            {BUSINESS.addressShort}
          </a>
        </div>

        {/* Coluna da imagem */}
        <div className="relative">
          <div className="frame-gold mx-auto aspect-[3/4] w-full max-w-sm animate-floatSlow lg:max-w-md">
            <SmartImage
              src={BUSINESS.heroPhoto}
              alt={`Ambiente do ${BUSINESS.name} em Ipanema`}
              className="h-full w-full"
              imgClassName="animate-kenburns"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
          </div>

          {/* Card flutuante de avaliação */}
          <div className="absolute -bottom-5 left-1/2 w-[88%] max-w-xs -translate-x-1/2 rounded-2xl border border-white/10 bg-white/95 p-4 shadow-card backdrop-blur sm:-left-4 sm:translate-x-0">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink-900 font-serif text-base italic text-rose-soft">
                4,8
              </span>
              <div className="leading-tight">
                <div className="flex items-center gap-1 text-rose">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-rose text-rose" strokeWidth={1.5} />
                  ))}
                </div>
                <p className="mt-0.5 text-xs text-ink/60">
                  Avaliado por {BUSINESS.reviewsCount} clientes no Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#servicos"
        aria-label="Rolar para serviços"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-cream/50 transition-colors hover:text-rose-soft lg:block"
      >
        <ChevronDown size={26} className="animate-scrollCue" />
      </a>
    </section>
  )
}
