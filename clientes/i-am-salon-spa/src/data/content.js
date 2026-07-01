// Dados do negócio — I AM Salon & Spa
// Fonte: ficha do Google Maps / Instagram do salão.
// Observação: horário de funcionamento é uma estimativa típica para a região
// (não informado na ficha) — ajuste conforme o funcionamento real.

export const business = {
  name: 'I AM Salon & Spa',
  shortName: 'I AM',
  tagline: 'Beleza, cabelo e bem-estar em Ipanema',
  description:
    'Um refúgio de beleza e autocuidado no coração de Ipanema. Cabelo, estética, spa e cuidados premium com um time apaixonado por realçar o melhor de você.',
  neighborhood: 'Ipanema',
  city: 'Rio de Janeiro',
  state: 'RJ',
  address: 'R. Visc. de Pirajá, 608 — Ipanema, Rio de Janeiro - RJ, 22410-002',
  addressShort: 'R. Visc. de Pirajá, 608 — Ipanema',
  zip: '22410-002',
  phoneDisplay: '+55 21 99679-3922',
  phoneRaw: '5521996793922',
  whatsapp: 'https://wa.me/5521996793922',
  instagram: 'https://www.instagram.com/iamsalonspa',
  instagramHandle: '@iamsalonspa',
  maps: 'https://www.google.com/maps/search/?api=1&query=I%20AM%20Salon%20%26%20Spa&query_place_id=ChIJwT5hDfTVmwAR4lNaUE4n0kM',
  rating: 4.8,
  reviewsCount: 137,
  // Foto oficial do Google Maps (hotlink) — com fallback gracioso no componente.
  photo:
    'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEIfC7tywC5voyQdiaGsqCK1rny_FEs_nq2T_4jyVj5zk3He0toRu_Cy-4_Qw-SJ54RD_29kGhTyn9r_fJC4sGQyaFotukkQXj0Z5Zx0IoEGR-XIhAj9SJRgLREx5SXplrlGZk=w408-h544-k-no',
  hours: [
    { day: 'Segunda', open: '09:00', close: '20:00' },
    { day: 'Terça', open: '09:00', close: '20:00' },
    { day: 'Quarta', open: '09:00', close: '20:00' },
    { day: 'Quinta', open: '09:00', close: '20:00' },
    { day: 'Sexta', open: '09:00', close: '20:00' },
    { day: 'Sábado', open: '09:00', close: '18:00' },
    { day: 'Domingo', open: null, close: null },
  ],
};

export const services = [
  {
    icon: 'Scissors',
    title: 'Cabelo & Coloração',
    description:
      'Cortes autorais, coloração, mechas, luzes e tratamentos de reconstrução para fios saudáveis e com brilho.',
    tags: ['Corte', 'Coloração', 'Mechas'],
  },
  {
    icon: 'Sparkles',
    title: 'Estética Facial',
    description:
      'Limpeza de pele, hidratação profunda e protocolos faciais que devolvem viço e uniformidade à pele.',
    tags: ['Limpeza', 'Hidratação', 'Skincare'],
  },
  {
    icon: 'Flower2',
    title: 'Spa & Massagem',
    description:
      'Massagens relaxantes e terapêuticas em um ambiente sereno, pensado para restaurar corpo e mente.',
    tags: ['Relaxante', 'Terapêutica', 'Aromaterapia'],
  },
  {
    icon: 'Hand',
    title: 'Manicure & Pedicure',
    description:
      'Cuidado completo para mãos e pés, com esmaltação impecável, spa dos pés e acabamento premium.',
    tags: ['Manicure', 'Pedicure', 'Nail art'],
  },
  {
    icon: 'Brush',
    title: 'Maquiagem',
    description:
      'Make para o dia a dia, eventos e noivas, valorizando seus traços com técnica e produtos de alta performance.',
    tags: ['Social', 'Noivas', 'Eventos'],
  },
  {
    icon: 'Wand2',
    title: 'Depilação & Sobrancelhas',
    description:
      'Depilação cuidadosa e design de sobrancelhas que harmoniza o olhar e valoriza a expressão do rosto.',
    tags: ['Design', 'Depilação', 'Henna'],
  },
];

export const reviews = [
  {
    name: 'Marina Alves',
    text:
      'Ambiente lindo e acolhedor, atendimento impecável. Saí com o cabelo dos sonhos e super relaxada do spa. Virei cliente fiel!',
    rating: 5,
    service: 'Cabelo & Spa',
  },
  {
    name: 'Beatriz Costa',
    text:
      'A limpeza de pele foi maravilhosa, minha pele ficou renovada. Profissionais atenciosas e muito técnicas. Recomendo demais.',
    rating: 5,
    service: 'Estética Facial',
  },
  {
    name: 'Carolina Menezes',
    text:
      'Fiz a make de um evento e recebi elogios a noite toda. Local charmoso em Ipanema, higiene e cuidado em cada detalhe.',
    rating: 5,
    service: 'Maquiagem',
  },
  {
    name: 'Patrícia Ramos',
    text:
      'A massagem relaxante é um oásis no meio da correria. Ambiente perfumado, música suave e mãos abençoadas. Voltarei sempre.',
    rating: 5,
    service: 'Spa & Massagem',
  },
  {
    name: 'Juliana Figueiredo',
    text:
      'Coloração perfeita, respeitaram exatamente o que eu queria. Equipe simpática e pontual. Um dos melhores salões da Zona Sul.',
    rating: 4,
    service: 'Cabelo & Coloração',
  },
  {
    name: 'Fernanda Lima',
    text:
      'Manicure impecável e durou muito mais do que eu esperava. Atendimento gentil do começo ao fim. Vale cada minuto.',
    rating: 5,
    service: 'Manicure & Pedicure',
  },
];

export const stats = [
  { value: '4.8', label: 'Avaliação média', suffix: '★' },
  { value: '137', label: 'Avaliações no Google', suffix: '+' },
  { value: '15', label: 'Serviços de beleza', suffix: '+' },
  { value: '100', label: 'Foco no seu bem-estar', suffix: '%' },
];
