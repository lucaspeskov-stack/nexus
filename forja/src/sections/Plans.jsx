import SectionHeading from '../components/SectionHeading'
import PlanCard from '../components/PlanCard'
import Reveal from '../components/Reveal'
import { sitePlans } from '../data/plans'

export default function Plans() {
  return (
    <section id="planos" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Planos de Sites"
          title="Escolha a têmpera"
          accent="do seu site."
          description="Três níveis, um padrão: acabamento de estúdio. Setup único + mensalidade que mantém tudo no ar, rápido e atualizado."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
          {sitePlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 90}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center font-mono text-xs uppercase tracking-[0.18em] text-ash/70">
            Todos os planos incluem design sob medida e código próprio — sem template genérico.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
