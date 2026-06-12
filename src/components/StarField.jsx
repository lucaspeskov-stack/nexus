import { useEffect, useRef } from 'react'

/**
 * Fundo estrelado animado, desenhado em <canvas> para ser leve no celular.
 * Estrelas que cintilam suavemente + algumas "poeiras douradas" flutuando.
 */
export default function StarField({ density = 1 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let width = 0
    let height = 0
    let stars = []
    let dust = []
    let raf = 0

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function makeStars() {
      const area = (width * height) / 9000
      const count = Math.floor(area * density)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.015 + 0.004,
      }))
      dust = Array.from({ length: Math.floor(count / 12) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.6,
        vy: -(Math.random() * 0.12 + 0.03),
        alpha: Math.random() * 0.4 + 0.1,
      }))
    }

    function resize() {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      makeStars()
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      // Estrelas
      for (const s of stars) {
        s.twinkle += s.speed
        const alpha = s.baseAlpha + Math.sin(s.twinkle) * 0.35
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 250, 235, ${Math.max(0, alpha)})`
        ctx.fill()
      }

      // Poeira dourada subindo
      for (const d of dust) {
        d.y += d.vy
        if (d.y < -5) {
          d.y = height + 5
          d.x = Math.random() * width
        }
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245, 215, 122, ${d.alpha})`
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    if (prefersReduced) {
      draw()
      cancelAnimationFrame(raf)
    } else {
      draw()
    }

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      aria-hidden="true"
    />
  )
}
