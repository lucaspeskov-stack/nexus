import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function AgentsTeaser() {
  return (
    <section className="relative border-t border-white/[0.06] py-28 md:py-32">
      <div className="shell">
        <Reveal>
          <Link
            to="/agents"
            className="group block overflow-hidden rounded-xl bg-gradient-to-br from-ink-700 to-ink-800 p-10 ring-1 ring-white/[0.08] transition-all duration-300 hover:ring-ember-400/40 md:p-16"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-ember-400">[ 03 ]</span>
                  <span className="eyebrow">Próximo da forja</span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                  Agents de IA que <span className="text-ember">trabalham por você.</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ash md:text-lg">
                  Automação, atendimento e qualificação de leads rodando 24/7. Estamos forjando —
                  veja o que vem por aí.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-bone transition-colors group-hover:text-ember-200">
                Conhecer
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
