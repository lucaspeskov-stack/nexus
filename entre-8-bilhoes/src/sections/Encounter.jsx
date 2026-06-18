import { motion } from 'framer-motion'
import Scene from '../components/Scene'
import GoldButton from '../components/GoldButton'
import { encounter } from '../data/content'

/** Animação da viagem: espaço → Terra → Chile → Rio → Réveillon. */
function Journey() {
  return (
    <div className="mb-8 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-gold/70">
      {encounter.journey.map((stop, i) => (
        <motion.span
          key={stop}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.55, duration: 0.6 }}
          className="flex items-center gap-2"
        >
          {i > 0 && <span className="text-gold/40">→</span>}
          {stop}
        </motion.span>
      ))}
    </div>
  )
}

export default function Encounter({ onNext }) {
  const base = 0.3 + encounter.journey.length * 0.55 + 0.4

  return (
    <Scene>
      {/* "Planeta" pulsando, sugerindo a Terra vista do espaço */}
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="mx-auto mb-8 h-24 w-24 rounded-full animate-floatSlow"
        style={{
          background:
            'radial-gradient(circle at 35% 30%, #6ea8ff 0%, #2b5fb0 45%, #0b1228 100%)',
          boxShadow:
            '0 0 40px rgba(110,168,255,0.4), inset -8px -8px 20px rgba(0,0,0,0.6)',
        }}
      />

      <Journey />

      <div className="space-y-2">
        {encounter.poem.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: base + i * 0.7, duration: 0.9 }}
            className="font-serif text-xl text-gold-soft/90"
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: base + encounter.poem.length * 0.7 + 0.5, duration: 1 }}
        className="mt-10"
      >
        <p className="text-sm text-gold-soft/70">{encounter.chance.pre}</p>
        <p className="my-1 font-serif text-3xl font-semibold text-gold text-glow">
          {encounter.chance.value}
        </p>
        <p className="font-serif text-2xl text-gold-soft">
          {encounter.chance.post}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: base + encounter.poem.length * 0.7 + 1.4, duration: 1 }}
        className="mt-10"
      >
        <GoldButton onClick={onNext}>Continuar</GoldButton>
      </motion.div>
    </Scene>
  )
}
