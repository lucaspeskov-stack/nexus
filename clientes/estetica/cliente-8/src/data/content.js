// ─────────────────────────────────────────────────────────────
//  Conteúdo do site — I AM Salon & Spa
//  Edite este arquivo para atualizar textos, contatos e serviços.
// ─────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: 'I AM Salon & Spa',
  tagline: 'Salão & Spa',
  city: 'Ipanema · Rio de Janeiro',
  neighborhood: 'Ipanema',
  rating: 4.8,
  reviewsCount: 137,
  phoneDisplay: '(21) 99679-3922',
  phoneIntl: '5521996793922',
  address: 'R. Visc. de Pirajá, 608 — Ipanema, Rio de Janeiro — RJ, 22410-002',
  addressShort: 'R. Visc. de Pirajá, 608 — Ipanema, RJ',
  instagram: 'https://www.instagram.com/iamsalonspa',
  instagramHandle: '@iamsalonspa',
  // Links do Google (avaliações / rotas)
  googleMaps:
    'https://www.google.com/maps/search/?api=1&query=I%20AM%20Salon%20%26%20Spa&query_place_id=ChIJwT5hDfTVmwAR4lNaUE4n0kM',
  googleDirections:
    'https://www.google.com/maps/dir/?api=1&destination=R.+Visc.+de+Piraj%C3%A1%2C+608+Ipanema+Rio+de+Janeiro+RJ',
  // Embed sem chave de API
  mapEmbed:
    'https://www.google.com/maps?q=R.%20Visc.%20de%20Piraj%C3%A1%2C%20608%20-%20Ipanema%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022410-002&output=embed',
  // Foto principal do Google Business
  heroPhoto:
    'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEIfC7tywC5voyQdiaGsqCK1rny_FEs_nq2T_4jyVj5zk3He0toRu_Cy-4_Qw-SJ54RD_29kGhTyn9r_fJC4sGQyaFotukkQXj0Z5Zx0IoEGR-XIhAj9SJRgLREx5SXplrlGZk=w800-h1066-k-no',
}

// Mensagem padrão do WhatsApp
const WA_MSG = 'Olá! Vim pelo site do I AM Salon & Spa e gostaria de agendar um horário.'
export const waLink = (extra) =>
  `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(extra || WA_MSG)}`

// Horário de funcionamento (0 = domingo … 6 = sábado)
// open/close em minutos a partir da meia-noite (09:00 = 540, 20:00 = 1200)
export const HOURS = [
  { day: 'Domingo', short: 'Dom', closed: true },
  { day: 'Segunda', short: 'Seg', open: 540, close: 1200 },
  { day: 'Terça', short: 'Ter', open: 540, close: 1200 },
  { day: 'Quarta', short: 'Qua', open: 540, close: 1200 },
  { day: 'Quinta', short: 'Qui', open: 540, close: 1200 },
  { day: 'Sexta', short: 'Sex', open: 540, close: 1200 },
  { day: 'Sábado', short: 'Sáb', open: 540, close: 1080 },
]

// Imagens (Unsplash) — carregadas no navegador do visitante.
// Caso alguma falhe, o componente exibe um placeholder elegante.
const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

// Especialidades / Serviços
export const SERVICES = [
  {
    icon: 'scissors',
    title: 'Cabelo',
    desc: 'Corte, coloração, mechas, balayage e tratamentos de alto brilho assinados por especialistas.',
    items: ['Corte & finalização', 'Coloração & mechas', 'Balayage & loiros', 'Hidratação & reconstrução'],
    image: img('1560066984-138dadb4c035'),
  },
  {
    icon: 'sparkles',
    title: 'Estética Facial',
    desc: 'Limpeza de pele, peelings e protocolos de skincare para uma pele renovada e luminosa.',
    items: ['Limpeza de pele', 'Peeling & revitalização', 'Skincare personalizado', 'Design de sobrancelha'],
    image: img('1570172619644-dfd03ed5d881'),
  },
  {
    icon: 'flower',
    title: 'Spa & Massagem',
    desc: 'Massagens relaxantes e terapêuticas em um ambiente pensado para o seu bem-estar.',
    items: ['Massagem relaxante', 'Drenagem linfática', 'Massagem terapêutica', 'Day spa'],
    image: img('1540555700478-4be289fbecef'),
  },
  {
    icon: 'hand',
    title: 'Manicure & Pedicure',
    desc: 'Esmaltação em gel, spa dos pés e nail art com acabamento impecável e durabilidade.',
    items: ['Esmaltação em gel', 'Spa dos pés', 'Alongamento', 'Nail art'],
    image: img('1604654894610-df63bc536371'),
  },
  {
    icon: 'eye',
    title: 'Cílios & Sobrancelha',
    desc: 'Extensão de cílios, lash lifting e design para um olhar marcante e natural.',
    items: ['Extensão de cílios', 'Lash lifting', 'Design com henna', 'Brow lamination'],
    image: img('1591019479261-1a103585c559'),
  },
  {
    icon: 'gem',
    title: 'Maquiagem',
    desc: 'Make para o dia, eventos e noivas, valorizando a sua beleza com técnica e sofisticação.',
    items: ['Make social', 'Make para noivas', 'Penteados', 'Dia da noiva'],
    image: img('1596462502278-27bfdc403348'),
  },
]

// Galeria de ambientes e trabalhos
export const GALLERY = [
  { image: img('1633681926022-84c23e8cb2d6', 1100), alt: 'Ambiente sofisticado do salão', span: true },
  { image: img('1522337660859-02fbefca4702'), alt: 'Estação de cabelo do salão' },
  { image: img('1544161515-4ab6ce6db874'), alt: 'Sala de massagem do spa' },
  { image: img('1562322140-8baeececf3df'), alt: 'Coloração e mechas' },
  { image: img('1487412947147-5cebf100ffc2'), alt: 'Detalhe de cuidado com a pele' },
  { image: img('1519014816548-bf5fe059798b', 1100), alt: 'Cabelo finalizado com brilho', span: true },
]

// Avaliações
export const REVIEW_TAGS = [
  { label: 'atendimento', count: 22 },
  { label: 'ambiente', count: 18 },
  { label: 'profissionais', count: 15 },
  { label: 'spa', count: 11 },
  { label: 'localização', count: 9 },
]

export const RATING_BREAKDOWN = [
  { stars: 5, pct: 86 },
  { stars: 4, pct: 10 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
]

export const REVIEWS = [
  {
    name: 'Marina Albuquerque',
    meta: 'Local Guide · há 3 meses',
    initials: 'MA',
    stars: 5,
    text: 'Experiência impecável do início ao fim. O ambiente é lindo, a equipe é super atenciosa e saí me sentindo renovada. Virou meu salão e spa de confiança em Ipanema.',
  },
  {
    name: 'Camila Resende',
    meta: '4 avaliações · há 1 mês',
    initials: 'CR',
    stars: 5,
    text: 'Fiz cabelo e massagem no mesmo dia e foi maravilhoso. Profissionais extremamente cuidadosos e um espaço que respira sofisticação. Recomendo de olhos fechados.',
  },
  {
    name: 'Patrícia Gomes',
    meta: '2 avaliações · há 2 meses',
    initials: 'PG',
    stars: 5,
    text: 'Atendimento de primeira e localização perfeita, no coração de Ipanema. A coloração ficou exatamente como eu queria. Ambiente acolhedor e muito limpo.',
  },
]

export const HIGHLIGHTS = [
  'Ambiente sofisticado e acolhedor no coração de Ipanema.',
  'Equipe de profissionais experientes e atenciosos.',
  'Salão e spa completos em um só endereço.',
]

// Números de confiança para a seção Sobre
export const STATS = [
  { value: '4,8', label: 'Nota no Google' },
  { value: '137+', label: 'Avaliações' },
  { value: '6', label: 'Especialidades' },
  { value: 'Ipanema', label: 'Localização' },
]
