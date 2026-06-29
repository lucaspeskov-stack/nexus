import { motion } from 'framer-motion'

/**
 * Casca de uma cena: tela cheia, centralizada, com transição de entrada/saída
 * cinematográfica (usada junto do <AnimatePresence> no App).
 */
const variants = {
  initial: { opacity: 0, scale: 1.04, filter: 'blur(8px)' },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    filter: 'blur(8px)',
    transition: { duration: 0.7, ease: 'easeInOut' },
  },
}

export default function Scene({ children, className = '' }) {
  return (
    <motion.section
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={
        'relative flex min-h-[100svh] w-full flex-col items-center justify-center px-6 py-16 text-center ' +
        className
      }
    >
      <div className="w-full max-w-md">{children}</div>
    </motion.section>
  )
}
