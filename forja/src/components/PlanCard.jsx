import { brl } from '../data/plans'
import { ForjaIcon } from './ForjaMark'
import WhatsAppCTA from './WhatsAppCTA'

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
      <path
        d="M3 8.5l3 3 7-7"
        stroke="#FF6B1A"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PlanCard({ plan }) {
  const { name, tagline, setup, monthly, features, featured } = plan

  return (
    <div
      className={`group relative flex h-full flex-col rounded-lg p-8 transition-all duration-300 ${
        featured
          ? 'bg-gradient-to-b from-ember-600/10 to-ink-800 ring-1 ring-ember-400/40 md:-translate-y-3'
          : 'bg-ink-800 ring-1 ring-white/[0.08] hover:ring-white/20'
      } hover:-translate-y-1`}
    >
      {featured && (
        <span className="absolute -top-3 left-8 rounded-sm bg-gradient-to-br from-ember-200 to-ember-600 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-900">
          Mais escolhido
        </span>
      )}

      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl font-bold tracking-tight">{name}</h3>
        <ForjaIcon size={26} glow={featured} />
      </div>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-ash">{tagline}</p>

      <div className="mt-7 border-y border-white/[0.07] py-6">
        <div className="flex items-end gap-1.5">
          <span className="font-mono text-xs uppercase tracking-widest text-ash">Setup</span>
          <span className="ml-auto font-display text-3xl font-bold tabular-nums">{brl(setup)}</span>
        </div>
        <div className="mt-3 flex items-end gap-1.5">
          <span className="font-mono text-xs uppercase tracking-widest text-ash">Mensal</span>
          <span className="ml-auto font-mono text-lg tabular-nums text-ember-200">
            {brl(monthly)}<span className="text-ash">/mês</span>
          </span>
        </div>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex gap-2.5 text-sm leading-snug text-bone/85">
            <Check />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <WhatsAppCTA variant={featured ? 'primary' : 'ghost'}>
          Quero o {name}
        </WhatsAppCTA>
      </div>
    </div>
  )
}
