import { Star } from 'lucide-react';

export default function StarRating({ value = 5, size = 18, className = '' }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;

  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${value} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        const half = i === full && hasHalf;
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <Star size={size} className="absolute inset-0 text-cream-400" fill="currentColor" />
            {(filled || half) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: half ? size / 2 : size }}
              >
                <Star size={size} className="text-caramel-500" fill="currentColor" />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
