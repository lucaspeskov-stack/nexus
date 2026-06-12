import { SCENES } from '../data/content'

/** Pontinhos de progresso (constelação) no topo da experiência. */
export default function Progress({ current, onJump }) {
  return (
    <div className="pointer-events-auto fixed left-1/2 top-4 z-30 flex -translate-x-1/2 gap-2">
      {SCENES.map((scene, i) => (
        <button
          key={scene}
          aria-label={`Ir para a cena ${i + 1}`}
          onClick={() => onJump(i)}
          className="p-1"
        >
          <span
            className={
              'block h-1.5 rounded-full transition-all duration-500 ' +
              (i === current
                ? 'w-5 bg-gold shadow-[0_0_10px_rgba(245,215,122,0.8)]'
                : i < current
                  ? 'w-1.5 bg-gold/60'
                  : 'w-1.5 bg-white/20')
            }
          />
        </button>
      ))}
    </div>
  )
}
