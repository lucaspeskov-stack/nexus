import { Sparkles, Clock, MapPin, HeartHandshake } from 'lucide-react'

const ITEMS = [
  { icon: Sparkles, title: 'Experiência premium', desc: 'Salão & spa em um só lugar' },
  { icon: HeartHandshake, title: 'Equipe acolhedora', desc: 'Profissionais experientes' },
  { icon: MapPin, title: 'Ipanema', desc: 'No coração do bairro' },
  { icon: Clock, title: 'Aberto 6 dias', desc: 'Segunda a sábado' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-ink/[0.06] bg-cream-100">
      <div className="container-wide grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-center gap-3 px-2 py-6 sm:px-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-rose-light text-rose-deep">
              <Icon size={20} strokeWidth={1.6} />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink-900">{title}</p>
              <p className="text-xs text-ink/55">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
