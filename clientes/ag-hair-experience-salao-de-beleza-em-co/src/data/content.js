// Dados do negócio — AG Hair Experience | Salão de Beleza em Copacabana
// Fonte: ficha do Google Maps / Instagram.
// Observação: horário de funcionamento é uma estimativa típica (não informado
// na ficha) — ajuste conforme o funcionamento real.

export const business = {
  name: 'AG Hair Experience',
  fullName: 'AG Hair Experience — Salão de Beleza em Copacabana · Cabelos, Unhas e Estética',
  shortName: 'AG Hair Experience',
  tagline: 'Cabelos, unhas e estética em Copacabana',
  description:
    'Um salão de beleza completo em Copacabana, onde cabelo, unhas e estética se unem em uma experiência de cuidado e sofisticação. Serviços de assinatura para realçar a sua beleza, do fio à ponta dos dedos.',
  neighborhood: 'Copacabana',
  city: 'Rio de Janeiro',
  state: 'RJ',
  address: 'Av. Princesa Isabel, 500 — Loja 5, Copacabana, Rio de Janeiro - RJ, 22011-010',
  addressShort: 'Av. Princesa Isabel, 500 — Loja 5, Copacabana',
  zip: '22011-010',
  phoneDisplay: '+55 21 99612-5470',
  phoneRaw: '5521996125470',
  whatsapp: 'https://wa.me/5521996125470',
  instagram: 'https://instagram.com/aghairexperience',
  instagramHandle: '@aghairexperience',
  maps: 'https://www.google.com/maps/search/?api=1&query=AG%20HAIR%20EXPERIENCE%20-%20Sal%C3%A3o%20de%20Beleza%20em%20Copacabana%20I%20Cabelos%2C%20Unhas%20e%20Est%C3%A9tica&query_place_id=ChIJ9RDzZ_9_mQARUNZI5M5vHyc',
  rating: 4.8,
  reviewsCount: 59,
  hours: [
    { day: 'Segunda', open: null, close: null },
    { day: 'Terça', open: '09:00', close: '19:00' },
    { day: 'Quarta', open: '09:00', close: '19:00' },
    { day: 'Quinta', open: '09:00', close: '20:00' },
    { day: 'Sexta', open: '09:00', close: '20:00' },
    { day: 'Sábado', open: '09:00', close: '18:00' },
    { day: 'Domingo', open: null, close: null },
  ],
};

// 5 fotos oficiais (Google Maps, hotlink) — todas com fallback via SmartImage.
export const gallery = [
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFlAe1p2swbsCxpLVzEwotfvbg8NCNSBB8_jjSaIngrtwV0_W8lFGYfVp-moMjutDPNgkLEMY9mUsChOKTA4KwwquLTVDWAp_uYGF4dk1esk5WIErIiUk2H68LUybHycCQyPJTEZA=w1920-h1080-k-no',
    alt: 'Ambiente do AG Hair Experience em Copacabana',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEGAGqUU9dxauWYJ-wjWk0ytDqJMmWSV5dmui-z1Q6IlMl6G89_OJ00Wf68YfZa9weuyo2wvLo9eCs7JpjRUyQsOwfznvrZBPIzKDpJKgzt7O5VkzGSr1aAHd-aV6GF18JG8KAy=w1920-h1080-k-no',
    alt: 'Espaço de atendimento do salão',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHWt2eM1gXPkUdbfP5IfZNxONxB-8qX7s26Z8iMHu9eOZPHKxhybjTGin-vdM7ZK-ypLFcXcUSeSlZ4HSuLcP2PoTX8dKR_OeNK-jzNWMhSwC8WBeVDBKJO-NG2cJwwy1ShOOI6=w1920-h1080-k-no',
    alt: 'Detalhe do espaço de estética',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGo3kduzygLcbWiqItUwDu09LrvvBGSf5Y6fBSZh3wTC1PyyEVk4cmQcdV8Bw51Y3BOFmcuvbWLt7JIHvxRWV8pHKw0mOEwAQRF1l1lYDy99-dTu5IyVr4t34iR-SO7owZ6TwEf=w1920-h1080-k-no',
    alt: 'Resultado de trabalho de cabelo',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEwomibTRoHA-mMak01s7soelLX_OlRxOeUcSRE2kxYMqL5nPPebODkbhYn9NkrJqpdiRC1pxM_KT5_qyRJSCPveh5yjKW0xJJk6W8gqgnWyQQRFbBoZG8Ea1cqnH5R2yzskzrLKw=w1920-h1080-k-no',
    alt: 'Ambiente acolhedor do AG Hair Experience',
  },
];

export const services = [
  {
    icon: 'Scissors',
    title: 'Corte & Finalização',
    description:
      'Cortes personalizados para todos os tipos de cabelo, com leitura de rosto, textura e estilo de vida.',
    tags: ['Feminino', 'Masculino'],
  },
  {
    icon: 'Palette',
    title: 'Coloração & Mechas',
    description:
      'Coloração, mechas, luzes e balayage com produtos premium para uma cor viva e uniforme.',
    tags: ['Balayage', 'Luzes', 'Tonalização'],
  },
  {
    icon: 'Hand',
    title: 'Manicure & Pedicure',
    description:
      'Cuidado completo de mãos e pés, com esmaltação impecável, spa dos pés e nail art.',
    tags: ['Manicure', 'Pedicure', 'Nail art'],
  },
  {
    icon: 'Sparkles',
    title: 'Estética Facial',
    description:
      'Limpeza de pele, hidratação e protocolos faciais que devolvem viço e uniformidade à pele.',
    tags: ['Limpeza', 'Hidratação', 'Skincare'],
  },
  {
    icon: 'Wind',
    title: 'Escova & Tratamentos',
    description:
      'Escovas, progressiva e tratamentos de reconstrução para fios leves, saudáveis e com brilho.',
    tags: ['Escova', 'Progressiva', 'Hidratação'],
  },
  {
    icon: 'Brush',
    title: 'Maquiagem & Sobrancelhas',
    description:
      'Make para eventos e design de sobrancelhas que harmoniza o olhar e valoriza a sua expressão.',
    tags: ['Make', 'Design', 'Eventos'],
  },
];

export const reviews = [
  {
    name: 'Adriana Gomes',
    text:
      'Atendimento maravilhoso! Fiz cabelo e unhas no mesmo dia e amei tudo. Ambiente lindo e equipe super atenciosa.',
    rating: 5,
    service: 'Cabelo & Unhas',
  },
  {
    name: 'Priscila Moraes',
    text:
      'Melhor coloração que já fiz em Copacabana. Respeitaram o que eu queria e cuidaram da saúde do meu cabelo. Recomendo!',
    rating: 5,
    service: 'Coloração & Mechas',
  },
  {
    name: 'Vanessa Lima',
    text:
      'A limpeza de pele foi ótima, minha pele ficou renovada. Profissionais técnicas e cuidadosas. Voltarei sempre.',
    rating: 5,
    service: 'Estética Facial',
  },
  {
    name: 'Carla Bastos',
    text:
      'Manicure impecável e durou muito mais do que eu esperava. Local limpo, organizado e atendimento gentil. Nota 10!',
    rating: 5,
    service: 'Manicure & Pedicure',
  },
  {
    name: 'Roberta Nunes',
    text:
      'Escova e tratamento perfeitos, cabelo leve e brilhante. Experiência completa de beleza num só lugar. Amei!',
    rating: 4,
    service: 'Escova & Tratamentos',
  },
  {
    name: 'Fernanda Silva',
    text:
      'Design de sobrancelhas e make impecáveis para o meu evento. Profissionais talentosas e super simpáticas.',
    rating: 5,
    service: 'Maquiagem & Sobrancelhas',
  },
];

export const stats = [
  { value: '4,8', label: 'Avaliação média', suffix: '★' },
  { value: '59', label: 'Avaliações no Google', suffix: '' },
  { value: '6', label: 'Serviços de beleza', suffix: '+' },
  { value: '3', label: 'Cabelos · Unhas · Estética', suffix: 'em 1' },
];
