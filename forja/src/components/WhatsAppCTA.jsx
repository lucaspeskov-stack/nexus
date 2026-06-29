import Button from './Button'
import { whatsappLink } from '../data/site'

// Botão principal de conversão. Se o WhatsApp ainda não foi configurado
// em data/site.js, mostra "Em breve" desabilitado (sem quebrar o layout).
export default function WhatsAppCTA({ children = 'Forjar meu projeto', size = 'md', variant = 'primary' }) {
  const link = whatsappLink()

  if (!link) {
    return (
      <Button variant={variant} size={size} disabled title="Configure o WhatsApp em data/site.js">
        WhatsApp · em breve
      </Button>
    )
  }

  return (
    <Button href={link} variant={variant} size={size} arrow>
      {children}
    </Button>
  )
}
