import { motion } from 'framer-motion'
import Scene from '../components/Scene'
import GoldButton from '../components/GoldButton'
import useElapsed from '../hooks/useElapsed'
import { time } from '../data/content'

function Unit({ value, label }) {
  return (
    <div className="flex min-w-[64px] flex-col items-center rounded-2xl border border-gold/15 bg-white/5 px-3 py-3 backdrop-blur-sm">
      <span className="font-serif text-3xl font-semibold text-gold text-glow tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gold-soft/60">
        {label}
      </span>
    </div>
  )
}

export default function TimeScene({ onNext }) {
  const t = useElapsed(time.since)

  return (
    <Scene>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-serif text-3xl text-gold-soft"
      >
        {time.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-2 text-sm text-gold-soft/60"
      >
        {time.label}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="mt-8 grid grid-cols-3 gap-2"
      >
        <Unit value={t.years} label="anos" />
        <Unit value={t.months} label="meses" />
        <Unit value={t.days} label="dias" />
        <Unit value={t.hours} label="horas" />
        <Unit value={t.minutes} label="min" />
        <Unit value={t.seconds} label="seg" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="mt-6 font-serif text-lg italic text-gold-soft/80"
      >
        São {t.totalDays.toLocaleString('pt-BR')} dias te amando — e contando. ❤️
      </motion.p>

      <div className="mt-10">
        <GoldButton onClick={onNext}>Continuar</GoldButton>
      </div>
    </Scene>
  )
}
