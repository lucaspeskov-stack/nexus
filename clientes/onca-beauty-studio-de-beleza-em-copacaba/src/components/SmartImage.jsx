import { useState } from 'react';

/**
 * Imagem com fallback gracioso. Se a foto (hotlink do Google Maps) falhar ou
 * expirar, mostra um bloco elegante na paleta do site em vez de imagem quebrada.
 */
export default function SmartImage({ src, alt, className = '', imgClassName = '' }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-cream-300 ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-caramel-400 via-caramel-600 to-ink"
        >
          <span className="font-display text-3xl font-semibold text-cream-50/90">Onça</span>
        </div>
      )}
    </div>
  );
}
