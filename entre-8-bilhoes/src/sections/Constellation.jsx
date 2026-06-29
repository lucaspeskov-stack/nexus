import { motion } from 'framer-motion'
import Scene from '../components/Scene'
import GoldButton from '../components/GoldButton'
import { constellation } from '../data/content'

/** Saturno estilizado com seus anéis, orbitando suavemente. */
function Saturn() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, ease: 'easeOut' }}
      className="relative mx-auto mb-10 h-40 w-40"
    >
      <div className="absolute inset-0 m-auto h-24 w-24 animate-floatSlow rounded-full"
        style={{
          background:
            'radial-gradient(circle at 35% 30%, #ffe9a8 0%, #e3b85f 40%, #9c7327 100%)',
          boxShadow: '0 0 50px rgba(245,215,122,0.5)',
        }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 m-auto h-40 w-40"
      >
        <div
          className="absolute inset-0 m-auto h-[58px] w-40 rounded-[50%] border border-gold/60"
          style={{ transform: 'rotateX(74deg)' }}
        />
        <div
          className="absolute inset-0 m-auto h-[70px] w-44 rounded-[50%] border border-gold/30"
          style={{ transform: 'rotateX(74deg)' }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Constellation({ onNext }) {
  return (
    <Scene>
      <Saturn />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-xs uppercase tracking-[0.3em] text-gold/70"
      >
        {constellation.planet}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="mt-3 flex items-center justify-center gap-4 font-serif text-2xl text-gold-soft"
      >
        <span>{constellation.signs[0]}</span>
        <span className="text-gold animate-glow">✦</span>
        <span>{constellation.signs[1]}</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1.2 }}
        className="mx-auto mt-10 max-w-sm font-serif text-xl italic leading-relaxed text-gold-soft/90"
      >
        “{constellation.quote}”
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="mt-12"
      >
        <GoldButton onClick={onNext}>Continuar</GoldButton>
      </motion.div>
    </Scene>
  )
}
