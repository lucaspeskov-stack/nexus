import Reveal from '../components/Reveal'
import WhatsAppCTA from '../components/WhatsAppCTA'
import { ForjaIcon } from '../components/ForjaMark'

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <div className="shell relative text-center">
        <Reveal>
          <ForjaIcon size={56} glow className="mx-auto" />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mx-auto mt-8 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Tem uma ideia? <span className="text-ember">Vamos forjar.</span>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ash">
            Conte seu projeto pelo WhatsApp. Em minutos a gente entende o que você precisa e
            desenha o caminho.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-10 flex justify-center">
            <WhatsAppCTA>Forjar meu projeto</WhatsAppCTA>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
