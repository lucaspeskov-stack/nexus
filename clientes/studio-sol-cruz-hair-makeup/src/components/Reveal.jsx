import useReveal from '../hooks/useReveal.js';

/**
 * Envolve o conteúdo com o efeito de scroll reveal (fade + slide-up sutil),
 * baseado em IntersectionObserver.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, inView] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'reveal-in' : ''} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
