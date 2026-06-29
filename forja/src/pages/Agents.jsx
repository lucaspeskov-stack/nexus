import Reveal from '../components/Reveal'
import WhatsAppCTA from '../components/WhatsAppCTA'
import { ForjaIcon } from '../components/ForjaMark'

const capabilities = [
  {
    title: 'Automação de processos',
    desc: 'Tarefas repetitivas no piloto automático — do follow-up ao preenchimento de dados.',
  },
  {
    title: 'Atendimento 24/7',
    desc: 'Um agente que responde clientes a qualquer hora, no tom da sua marca.',
  },
  {
    title: 'Qualificação de leads',
    desc: 'Conversa, entende e separa quem está pronto para comprar.',
  },
  {
    title: 'Agendamento',
    desc: 'Marca reuniões e organiza a agenda sem você tocar no teclado.',
  },
  {
    title: 'Suporte inteligente',
    desc: 'Resolve dúvidas comuns e encaminha o que precisa de humano.',
  },
  {
    title: 'Integrações',
    desc: 'Conecta WhatsApp, CRM e suas ferramentas em um fluxo só.',
  },
]

export default function Agents() {
  return (
    <>
      {/* Hero da página */}
      <section className="relative flex min-h-[88svh] items-center pt-24">
        <div className="shell">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-ember-400">[ IA ]</span>
              <span className="h-px w-10 bg-white/20" />
              <span className="eyebrow">Agents de IA · Em breve</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
              Agents que <span className="text-ember">trabalham</span>
              <br />
              enquanto você cresce.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ash">
              Estamos forjando agentes de IA para automatizar o que trava o seu dia: atendimento,
              vendas e operação. Em breve, aqui. Quer ser avisado primeiro?
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10">
              <WhatsAppCTA>Quero saber antes</WhatsAppCTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* O que vem por aí */}
      <section className="relative border-t border-white/[0.06] py-28 md:py-32">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">O que vem por aí</span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight md:text-4xl">
              Os agentes em forja
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <div className="group h-full bg-ink-800 p-8 transition-colors duration-300 hover:bg-ink-700">
                  <ForjaIcon size={24} className="opacity-80" />
                  <h3 className="mt-5 font-display text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ash">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-col items-center gap-6 rounded-xl border border-dashed border-white/10 bg-ink-800/40 px-8 py-14 text-center">
              <ForjaIcon size={40} glow />
              <h3 className="max-w-xl font-display text-2xl font-bold tracking-tight md:text-3xl">
                Esta página está <span className="text-ember">em construção.</span>
              </h3>
              <p className="max-w-md text-ash">
                Os planos e detalhes dos Agents de IA chegam em breve. Fale com a gente para entrar
                na lista de espera.
              </p>
              <WhatsAppCTA variant="ghost">Entrar na lista</WhatsAppCTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
