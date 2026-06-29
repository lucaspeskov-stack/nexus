import { useState } from 'react'

// Imagem com fallback elegante: se a imagem remota falhar,
// exibe um gradiente rose gold com o rótulo — nunca um "quebrado".
export default function SmartImage({ src, alt, className = '', imgClassName = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-cream-200 ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
      {failed && (
        <div
          className="flex h-full w-full items-center justify-center bg-grain"
          style={{
            backgroundImage:
              'linear-gradient(135deg, #f4e3d9 0%, #e6c4b3 45%, #caa1ac 100%)',
          }}
        >
          <span className="px-4 text-center font-serif text-sm italic text-ink/60">{alt}</span>
        </div>
      )}
    </div>
  )
}
