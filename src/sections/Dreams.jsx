import { motion } from 'framer-motion'
import Scene from '../components/Scene'
import GoldButton from '../components/GoldButton'
import { dreams } from '../data/content'

export default function Dreams({ onNext }) {
  return (
    <Scene>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-serif text-4xl font-semibold text-gold-soft"
      >
        {dreams.title}
      </motion.h2>

      <ul className="mt-8 grid grid-cols-2 gap-3">
        {dreams.items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center gap-2 rounded-2xl border border-gold/10 bg-white/5 px-3 py-5 backdrop-blur-sm"
          >
            <span className="text-3xl animate-floatSlow" style={{ animationDelay: `${i * 0.3}s` }}>
              {item.emoji}
            </span>
            <span className="text-sm text-gold-soft/90">{item.text}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-10">
        <GoldButton onClick={onNext}>Continuar</GoldButton>
      </div>
    </Scene>
  )
}
