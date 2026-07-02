import { Phone } from 'lucide-react';
import { business } from '../data/content.js';

/**
 * Botão flutuante de ligação rápida. O telefone informado é fixo (landline),
 * por isso a ação principal é ligar (tel:), não WhatsApp.
 */
export default function PhoneFab() {
  return (
    <a
      href={`tel:${business.phoneTel}`}
      aria-label={`Ligar para ${business.name}`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full
                 bg-bronze-600 text-sand-50 shadow-soft-lg transition-all duration-200
                 hover:-translate-y-0.5 hover:bg-bronze-700 focus:outline-none focus-visible:ring-4
                 focus-visible:ring-bronze-300"
    >
      <Phone size={24} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bronze-400 opacity-20" />
    </a>
  );
}
