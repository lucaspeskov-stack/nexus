import Reveal from './Reveal'

// Cabeçalho de seção: índice (mono) + eyebrow + título + descrição.
export default function SectionHeading({ index, eyebrow, title, accent, description, center }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <Reveal>
        <div className={`flex items-center gap-4 ${center ? 'justify-center' : ''}`}>
          {index && <span className="font-mono text-xs text-ember-400">[ {index} ]</span>}
          <span className="h-px w-10 bg-white/20" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
          {title} {accent && <span className="text-ember">{accent}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="mt-5 text-base leading-relaxed text-ash md:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
