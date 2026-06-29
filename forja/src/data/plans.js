// ─────────────────────────────────────────────────────────────
// Planos de Sites (HOME).
// Preços confirmados pelo cliente. As listas de itens são uma
// sugestão editável — ajuste o que cada plano realmente entrega.
// ─────────────────────────────────────────────────────────────

export const sitePlans = [
  {
    id: 'brasa',
    name: 'Brasa',
    tagline: 'Para acender sua presença.',
    setup: 500,
    monthly: 150,
    featured: false,
    features: [
      'Landing page de alta conversão',
      'Design sob medida',
      'Responsivo (mobile-first)',
      'Otimização de velocidade',
      'Botão de WhatsApp e formulário',
      '1 rodada de ajustes',
    ],
  },
  {
    id: 'aco',
    name: 'Aço',
    tagline: 'Estrutura para crescer.',
    setup: 750,
    monthly: 200,
    featured: true, // plano em destaque
    features: [
      'Tudo do plano Brasa',
      'Até 5 páginas',
      'Blog / seção de conteúdo',
      'SEO técnico essencial',
      'Integrações (Analytics, Pixel)',
      '2 rodadas de ajustes',
    ],
  },
  {
    id: 'titanio',
    name: 'Titânio',
    tagline: 'Performance sem limite.',
    setup: 999,
    monthly: 300,
    featured: false,
    features: [
      'Tudo do plano Aço',
      'Páginas ilimitadas',
      'Animações e 3D / WebGL',
      'Painel para você editar',
      'Suporte prioritário',
      'Evolução contínua',
    ],
  },
]

export function brl(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  })
}
