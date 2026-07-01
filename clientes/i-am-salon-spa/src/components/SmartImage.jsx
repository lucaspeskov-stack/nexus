import { useState } from 'react';

/**
 * Imagem com fallback gracioso. Se a URL (ex.: foto hotlink do Google Maps)
 * falhar ou expirar, mostra um gradiente elegante em vez de imagem quebrada.
 */
export default function SmartImage({ src, alt, className = '', imgClassName = '' }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
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
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-plum-200 via-plum-300 to-lav-400"
        >
          <span className="font-display text-5xl font-semibold text-white/90">I AM</span>
        </div>
      )}
    </div>
  );
}
