import { motion } from 'framer-motion'
import Scene from '../components/Scene'
import GoldButton from '../components/GoldButton'
import { intro } from '../data/content'

export default function Intro({ onNext }) {
  return (
    <Scene>
      <div className="space-y-3">
        {intro.lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.9, duration: 1 }}
            className={
              i === 1
                ? 'font-serif text-6xl font-semibold text-gold text-glow animate-glow'
                : 'font-serif text-2xl text-gold-soft/90'
            }
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 + intro.lines.length * 0.9 + 0.4, duration: 1 }}
        className="mt-12"
      >
        <GoldButton onClick={onNext}>{intro.button}</GoldButton>
      </motion.div>
    </Scene>
  )
}
