import { MessageCircle } from 'lucide-react';
import { business } from '../data/content.js';

export default function WhatsAppFab() {
  return (
    <a
      href={business.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full
                 bg-emerald-500 text-white shadow-soft-lg transition-all duration-200
                 hover:-translate-y-0.5 hover:bg-emerald-600 focus:outline-none focus-visible:ring-4
                 focus-visible:ring-emerald-300"
    >
      <MessageCircle size={26} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-20" />
    </a>
  );
}
