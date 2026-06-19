import { useEffect, useRef } from 'react'

const REDUCED =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// "Holofote" de desfoque que segue o cursor sobre o elemento pai.
// Apenas a região próxima ao mouse fica borrada (backdrop-filter + máscara radial).
// A intensidade cresce com a velocidade do cursor -> sensação de motion blur.
// CSS puro, sem dependências. Ignora touch e respeita prefers-reduced-motion.
export default function CursorBlur({ radius = 170, maxBlur = 14, className = '' }) {
  const layerRef = useRef(null)

  useEffect(() => {
    const layer = layerRef.current
    if (!layer || REDUCED) return

    const parent = layer.parentElement
    if (!parent) return

    // só em dispositivos com cursor preciso (desktop)
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!canHover) return

    let raf = 0
    let tx = 0
    let ty = 0
    let lastX = 0
    let lastY = 0

    const update = () => {
      raf = 0
      const dx = tx - lastX
      const dy = ty - lastY
      const speed = Math.min(Math.hypot(dx, dy), 70)
      lastX = tx
      lastY = ty
      layer.style.setProperty('--x', `${tx}px`)
      layer.style.setProperty('--y', `${ty}px`)
      // blur base + acréscimo conforme a velocidade (motion)
      const blur = (maxBlur * (0.45 + (speed / 70) * 0.55)).toFixed(2)
      layer.style.setProperty('--blur', `${blur}px`)
    }

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect()
      tx = e.clientX - rect.left
      ty = e.clientY - rect.top
      if (!raf) raf = requestAnimationFrame(update)
    }
    const onEnter = () => {
      layer.style.opacity = '1'
    }
    const onLeave = () => {
      layer.style.opacity = '0'
    }

    parent.addEventListener('pointermove', onMove, { passive: true })
    parent.addEventListener('pointerenter', onEnter)
    parent.addEventListener('pointerleave', onLeave)

    return () => {
      parent.removeEventListener('pointermove', onMove)
      parent.removeEventListener('pointerenter', onEnter)
      parent.removeEventListener('pointerleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [maxBlur])

  const mask = `radial-gradient(${radius}px circle at var(--x, -999px) var(--y, -999px), #000 0%, rgba(0,0,0,0.55) 45%, transparent 72%)`

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-[1] ${className}`}
      style={{
        opacity: 0,
        transition: 'opacity 280ms ease-out',
        backdropFilter: 'blur(var(--blur, 8px))',
        WebkitBackdropFilter: 'blur(var(--blur, 8px))',
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  )
}
