import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Scene from '../components/Scene'
import GoldButton from '../components/GoldButton'
import { quiz } from '../data/content'

export default function Quiz({ onNext }) {
  const [selected, setSelected] = useState(null)
  const isCorrect = selected === quiz.correctIndex

  function handlePick(i) {
    setSelected(i)
  }

  return (
    <Scene>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-serif text-3xl text-gold-soft"
      >
        {quiz.question}
      </motion.h2>

      <div className="mt-8 space-y-3">
        {quiz.options.map((opt, i) => {
          const chosen = selected === i
          const showCorrect = selected !== null && i === quiz.correctIndex
          const showWrong = chosen && i !== quiz.correctIndex

          return (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePick(i)}
              className={
                'w-full rounded-2xl border px-4 py-3 text-left text-sm transition-colors ' +
                (showCorrect
                  ? 'border-emerald-300/60 bg-emerald-400/15 text-emerald-100'
                  : showWrong
                    ? 'border-rose-300/50 bg-rose-400/10 text-rose-100'
                    : 'border-gold/15 bg-white/5 text-gold-soft/90')
              }
            >
              {opt}
            </motion.button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        {selected !== null && (
          <motion.div
            key={isCorrect ? 'ok' : 'try'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6"
          >
            <p className="font-serif text-lg text-gold-soft">
              {isCorrect ? quiz.correctMessage : quiz.wrongMessage}
            </p>
            {isCorrect && (
              <div className="mt-6">
                <GoldButton onClick={onNext}>Continuar</GoldButton>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Scene>
  )
}
