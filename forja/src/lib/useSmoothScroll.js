import { useEffect } from 'react'
import Lenis from 'lenis'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Scroll suave "premium" via Lenis. Desliga se o usuário pede menos movimento.
export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])
}
