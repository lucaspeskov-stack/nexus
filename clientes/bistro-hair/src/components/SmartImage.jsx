import { useState } from 'react';

/**
 * Imagem com fallback gracioso. Se a URL (foto do Google Maps por hotlink ou
 * imagem de stock) falhar/expirar, mostra um bloco elegante em vez de imagem
 * quebrada — mantendo o padrão visual escuro do site.
 */
export default function SmartImage({ src, alt, className = '', imgClassName = '' }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-espresso-800 ${className}`}>
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
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-espresso-700 via-espresso-800 to-espresso-950"
        >
          <span className="font-display text-4xl font-semibold text-gold-300/80">BH</span>
        </div>
      )}
    </div>
  );
}
