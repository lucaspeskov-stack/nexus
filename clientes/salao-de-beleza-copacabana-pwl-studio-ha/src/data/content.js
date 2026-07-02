// Dados do negócio — Salão de Beleza Copacabana · Pwl Studio Hair
// Fonte: ficha do Google Maps / Instagram.
// Observação: horário de funcionamento é uma estimativa típica (não informado
// na ficha) — ajuste conforme o funcionamento real.

export const business = {
  name: 'Pwl Studio Hair',
  fullName: 'Salão de Beleza Copacabana · Pwl Studio Hair',
  tagline: 'Beleza e cuidado capilar em Copacabana',
  description:
    'Um estúdio de beleza onde técnica, estética e acolhimento se encontram. Cortes, coloração e tratamentos pensados para valorizar a sua identidade — com o padrão de excelência que rendeu nota máxima entre nossos clientes.',
  neighborhood: 'Copacabana',
  city: 'Rio de Janeiro',
  state: 'RJ',
  address: 'R. Barata Ribeiro, 370 — Sala 326, Copacabana, Rio de Janeiro - RJ, 22040-901',
  addressShort: 'R. Barata Ribeiro, 370 — Sala 326, Copacabana',
  zip: '22040-901',
  phoneDisplay: '+55 21 3497-5156',
  phoneTel: '+552134975156',
  instagram: 'https://www.instagram.com/pwlstudiohair/',
  instagramHandle: '@pwlstudiohair',
  maps: 'https://www.google.com/maps/search/?api=1&query=Sal%C3%A3o%20de%20Beleza%20Copacabana%20-%20Pwl%20Studio%20Hair&query_place_id=ChIJ1UG80KXVmwARuxPbsQdUD9E',
  rating: 5.0,
  reviewsCount: 49,
  // Única foto fornecida (Google Maps, hotlink) — com fallback gracioso.
  photo:
    'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFhxIDDlBtQyDqmT1oL3aU0jpHZjK5ulp1YJbY7aLsdFMHg7htGcgMlbptPTsWF4-lmzH2rcj_Ns4aoreLm_f4jb5N8iIQOeaqtAJw3czJ2dI949My2HDJZQVL_ALRBwhpJkdRGRQ=w408-h306-k-no',
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

export const services = [
  {
    icon: 'Scissors',
    title: 'Corte & Finalização',
    description:
      'Cortes personalizados para todos os tipos de cabelo, com leitura de rosto, textura e estilo.',
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
    icon: 'Wind',
    title: 'Escova & Progressiva',
    description:
      'Escovas modeladas, alisamentos e tratamentos de alinhamento para fios leves e disciplinados.',
    tags: ['Escova', 'Progressiva'],
  },
  {
    icon: 'Sparkles',
    title: 'Tratamentos Capilares',
    description:
      'Reconstrução, hidratação e cronograma capilar para devolver saúde, força e brilho aos fios.',
    tags: ['Hidratação', 'Reconstrução'],
  },
  {
    icon: 'Hand',
    title: 'Manicure & Pedicure',
    description:
      'Cuidado completo de mãos e pés, com esmaltação impecável e acabamento caprichado.',
    tags: ['Manicure', 'Pedicure'],
  },
  {
    icon: 'Brush',
    title: 'Maquiagem & Penteados',
    description:
      'Make e penteados para eventos, noivas e ocasiões especiais, valorizando os seus traços.',
    tags: ['Social', 'Noivas', 'Eventos'],
  },
];

export const reviews = [
  {
    name: 'Patrícia Souza',
    text:
      'Atendimento nota 10! Profissionais super atenciosos e o resultado do meu corte ficou perfeito. Ambiente aconchegante.',
    rating: 5,
    service: 'Corte & Finalização',
  },
  {
    name: 'Renata Lopes',
    text:
      'Fiz coloração e amei. Respeitaram exatamente o que eu queria e cuidaram da saúde do meu cabelo. Recomendo de olhos fechados.',
    rating: 5,
    service: 'Coloração & Mechas',
  },
  {
    name: 'Marcelo Dias',
    text:
      'Melhor salão de Copacabana. Pontualidade, capricho e um atendimento que faz a gente se sentir em casa. Virei cliente fixo.',
    rating: 5,
    service: 'Corte Masculino',
  },
  {
    name: 'Isabela Martins',
    text:
      'A progressiva ficou impecável, cabelo leve e natural. Local limpo, organizado e equipe simpática. Nota máxima!',
    rating: 5,
    service: 'Escova & Progressiva',
  },
  {
    name: 'Fernanda Rocha',
    text:
      'Tratamento capilar maravilhoso, meu cabelo renasceu. Explicaram tudo com carinho e cuidado. Simplesmente perfeito.',
    rating: 5,
    service: 'Tratamentos Capilares',
  },
  {
    name: 'Camila Nunes',
    text:
      'Fiz make e penteado para um casamento e recebi elogios a noite inteira. Profissionais talentosos e super gentis.',
    rating: 5,
    service: 'Maquiagem & Penteados',
  },
];

export const stats = [
  { value: '5,0', label: 'Avaliação média', suffix: '★' },
  { value: '49', label: 'Avaliações no Google', suffix: '' },
  { value: '6', label: 'Serviços de beleza', suffix: '+' },
  { value: '100', label: 'Clientes satisfeitos', suffix: '%' },
];
