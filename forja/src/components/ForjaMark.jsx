// Marca da Forja: a chama (símbolo) recriada como SVG inline,
// fundo transparente, com o gradiente de fogo do logo.
export function ForjaIcon({ size = 32, className = '', glow = false }) {
  const id = 'forjaGrad'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={glow ? { filter: 'drop-shadow(0 0 14px rgba(255,107,26,0.55))' } : undefined}
    >
      <defs>
        <linearGradient id={id} x1="68" y1="10" x2="14" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFA62B" />
          <stop offset="50%" stopColor="#FF6B1A" />
          <stop offset="100%" stopColor="#E2360F" />
        </linearGradient>
      </defs>
      <path d="M 14 60 L 40 14 L 66 60 L 40 46 Z" fill={`url(#${id})`} />
      <path d="M 40 14 L 66 60 L 40 46 Z" fill="#0A0A0B" opacity="0.32" />
    </svg>
  )
}

// Logotipo completo: chama + palavra "FORJA".
export function ForjaWordmark({ className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <ForjaIcon size={28} />
      <span className="font-display text-xl font-bold tracking-[0.18em] text-bone">
        FORJA
      </span>
    </div>
  )
}
