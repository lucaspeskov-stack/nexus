import { motion } from 'framer-motion'

/** Botão dourado luminoso (estilo Rapunzel). */
export default function GoldButton({ children, ghost = false, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={(ghost ? 'btn-ghost' : 'btn-gold') + ' ' + className}
      {...props}
    >
      {children}
    </motion.button>
  )
}
