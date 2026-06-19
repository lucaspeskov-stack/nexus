import { useReveal } from '../lib/useReveal'

// Envolve conteúdo com uma animação de entrada suave (fade + subida).
// `delay` em ms para escalonar (stagger) itens em sequência.
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const { ref, visible } = useReveal()

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(22px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  )
}
