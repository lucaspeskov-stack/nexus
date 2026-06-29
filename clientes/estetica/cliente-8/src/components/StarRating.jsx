import { Star } from 'lucide-react'

// Estrelas de avaliação com suporte a meias-estrelas.
export default function StarRating({ value = 5, size = 16, className = '' }) {
  const stars = [0, 1, 2, 3, 4]
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} aria-hidden="true">
      {stars.map((i) => {
        const fill = Math.max(0, Math.min(1, value - i))
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <Star size={size} className="absolute inset-0 text-rose/25" strokeWidth={1.5} />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star size={size} className="text-rose fill-rose" strokeWidth={1.5} />
            </span>
          </span>
        )
      })}
    </div>
  )
}
