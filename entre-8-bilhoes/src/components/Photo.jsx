import { useState } from 'react'

/**
 * Imagem com fallback elegante caso o arquivo ainda não exista em /public/photos.
 * Assim o site nunca "quebra" antes de você colocar as fotos reais.
 */
export default function Photo({ src, alt, className = '', contain = false }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={
          'flex items-center justify-center bg-gradient-to-br from-space-600 to-space-800 text-gold/60 ' +
          className
        }
      >
        <span className="px-4 text-center text-xs tracking-wide">
          {alt || 'Foto'}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={(contain ? 'object-contain' : 'object-cover') + ' ' + className}
    />
  )
}
