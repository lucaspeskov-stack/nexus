import { motion } from 'framer-motion'
import Scene from '../components/Scene'
import GoldButton from '../components/GoldButton'
import { reasons } from '../data/content'

export default function Reasons({ onNext }) {
  return (
    <Scene>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-serif text-5xl font-semibold text-gold text-glow"
      >
        {reasons.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-1 font-serif text-xl text-gold-soft/80"
      >
        {reasons.subtitle}
      </motion.p>

      <ul className="mt-8 space-y-3 text-left">
        {reasons.items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            className="flex items-start gap-3 rounded-2xl border border-gold/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
          >
            <span className="text-xl leading-6">{item.emoji}</span>
            <span className="text-sm leading-6 text-gold-soft/90">
              {item.text}
            </span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-10">
        <GoldButton onClick={onNext}>Continuar</GoldButton>
      </div>
    </Scene>
  )
}
