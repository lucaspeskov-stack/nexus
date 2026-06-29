// ─────────────────────────────────────────────────────────────
// Dados centrais da marca e contato.
// EDITE AQUI quando tiver os dados reais (WhatsApp, e-mail, Instagram).
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: 'Forja',
  tagline: 'Forjado para vender.',
  city: 'Rio de Janeiro · Brasil',
  year: new Date().getFullYear(),
}

// Preencha quando tiver os dados. Enquanto estiver `null`, o botão
// mostra "Em breve" e não quebra o layout.
export const contact = {
  // Ex.: '5521999999999' (só números, com DDI 55 + DDD)
  whatsapp: null,
  // Mensagem pré-preenchida do WhatsApp
  whatsappMessage: 'Olá! Vim pelo site da Forja e quero forjar meu projeto.',
  // Ex.: 'contato@forja.com.br'
  email: null,
  // Ex.: 'forja.studio'
  instagram: null,
}

// Helper: monta o link de WhatsApp (ou null se não configurado)
export function whatsappLink() {
  if (!contact.whatsapp) return null
  const msg = encodeURIComponent(contact.whatsappMessage || '')
  return `https://wa.me/${contact.whatsapp}?text=${msg}`
}
