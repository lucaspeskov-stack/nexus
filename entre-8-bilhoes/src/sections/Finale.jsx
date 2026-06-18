import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Scene from '../components/Scene'
import GoldButton from '../components/GoldButton'
import Photo from '../components/Photo'
import { finale, footer } from '../data/content'

export default function Finale({ onRestart }) {
  // Avança os frames (foto casal → logo → foto gatos) e depois revela o fecho.
  const [frame, setFrame] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (frame >= finale.frames.length) {
      setDone(true)
      return
    }
    const id = setTimeout(() => setFrame((f) => f + 1), 3200)
    return () => clearTimeout(id)
  }, [frame])

  const current = finale.frames[Math.min(frame, finale.frames.length - 1)]

  return (
    <Scene>
      {!done ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={frame}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <div className="h-64 w-64 overflow-hidden rounded-3xl border border-gold/20 shadow-[0_0_50px_rgba(245,215,122,0.25)]">
              <Photo
                src={current.image}
                alt={current.caption}
                contain={current.contain}
                className="h-full w-full"
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 font-serif text-2xl italic text-gold-soft text-glow"
            >
              {current.caption}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center"
        >
          {finale.closing.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 1.1, duration: 1 }}
              className={
                i === 0
                  ? 'font-serif text-3xl text-gold text-glow animate-glow'
                  : 'mt-3 font-serif text-xl text-gold-soft/90'
              }
            >
              {line}
            </motion.p>
          ))}

          {/* Rodapé */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + finale.closing.length * 1.1 + 0.5, duration: 1.2 }}
            className="mt-14 space-y-1 text-xs leading-relaxed text-gold-soft/50"
          >
            {footer.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + finale.closing.length * 1.1 + 1.2, duration: 1 }}
            className="mt-8"
          >
            <GoldButton ghost onClick={onRestart}>
              Reviver nossa história
            </GoldButton>
          </motion.div>
        </motion.div>
      )}
    </Scene>
  )
}
