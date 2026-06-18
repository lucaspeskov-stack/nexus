import { motion } from 'framer-motion'
import Scene from '../components/Scene'
import GoldButton from '../components/GoldButton'
import { letter } from '../data/content'

export default function Letter({ onNext }) {
  return (
    <Scene className="!justify-start pt-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-serif text-3xl text-gold text-glow"
      >
        {letter.title}
      </motion.h2>

      <div className="mt-8 space-y-5 text-left">
        {letter.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="font-serif text-lg leading-relaxed text-gold-soft/90"
          >
            {p}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-12"
      >
        <GoldButton onClick={onNext}>Continuar</GoldButton>
      </motion.div>
    </Scene>
  )
}
