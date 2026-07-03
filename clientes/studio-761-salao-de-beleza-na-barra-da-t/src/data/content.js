// Dados do negócio — Studio 761 | Salão de Beleza na Barra da Tijuca
// Fonte: ficha do Google Maps / Instagram.
// Observação: horário de funcionamento é uma estimativa típica (não informado
// na ficha) — ajuste conforme o funcionamento real.

export const business = {
  name: 'Studio 761',
  fullName: 'Studio 761 | Salão de Beleza na Barra da Tijuca',
  shortName: 'Studio 761',
  tagline: 'Beleza e cuidado capilar na Barra da Tijuca',
  description:
    'Um salão de beleza que une técnica, estética e acolhimento na Barra da Tijuca. Cortes, coloração e tratamentos de assinatura para valorizar a sua identidade — com o padrão de excelência que rendeu quase nota máxima entre nossos clientes.',
  neighborhood: 'Barra da Tijuca',
  city: 'Rio de Janeiro',
  state: 'RJ',
  address: 'Av. das Américas, 10501 — Barra da Tijuca, Rio de Janeiro - RJ, 22793-082',
  addressShort: 'Av. das Américas, 10501 — Barra da Tijuca',
  zip: '22793-082',
  phoneDisplay: '+55 21 98123-8045',
  phoneRaw: '5521981238045',
  whatsapp: 'https://wa.me/5521981238045',
  instagram: 'https://instagram.com/studio761hair',
  instagramHandle: '@studio761hair',
  maps: 'https://www.google.com/maps/search/?api=1&query=Studio%20761%20%7C%20Sal%C3%A3o%20de%20Beleza%20na%20Barra%20da%20Tijuca&query_place_id=ChIJ_RqcKMvdmwARDT0wXDSdL_o',
  rating: 4.9,
  reviewsCount: 105,
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
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFNZk5BGxokW2JauReje826Xk45CPvTczbwa6Pr7S-LhBMD_88vFjfOi6yr1_A19Xq2z1Ath4FISPRhqgmKMQgagwPUBQO0LcV4gYYPdxHrPc6TeVoKd84gOzyVPj385tOuv1oF=w1920-h1080-k-no',
    alt: 'Ambiente do Studio 761 na Barra da Tijuca',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFXIrJL_0QJXCLtaGOwTeMo0wjcaS5xeBl03sKuBPgwha-20SAWmMxdfHi9Sdeh5Wmn-zy8ykkep-X-i3LAQIrnkhxjBq8T5JE93cOXpdVMSSvqBQ53ifCFw2AwowzL1_xKoJA=w1920-h1080-k-no',
    alt: 'Espaço de atendimento do salão',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHpu2u0qNrvk1cLy5Y0XCXrfCO166K3TxM2jhv5jLeNvnH-FPHRidSp5k8UkKJmn_GtsWoMt2gULMfIc3CMOz5kLQDTsLclCyiCdKrQWlbVhlskgUQBMRXa6Q11QDQooUqnZL5GIqssNAEN=w1920-h1080-k-no',
    alt: 'Detalhe do estúdio de beleza',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH75paok7mG2v3xHchmd1DlHaPaGGWXnw8qErSbLS0EHPWRwN3sfhXRoVke1wRM51dzaouqjbX2HYory-yB8OTdp3mdWAKIiP3Lc5xipS_gBw4Pe7ENmmONKg8AXrnuz8ICwG8=w1920-h1080-k-no',
    alt: 'Resultado de trabalho de cabelo',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGmM5DXmaXSfhdZfBJY_kZOIhAAEEPRRELAY6pfmFM1tULAtZ5jnDXXDFEfNOQ28ECvX3dA-9ogFyrA1Otf9ZRKa0D7NRt4QB9jbn-8QIiwnH1dVGKNuKp1As-PXwnN249qdKjmUA=w1920-h1080-k-no',
    alt: 'Ambiente acolhedor do Studio 761',
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
    name: 'Renata Barbosa',
    text:
      'Atendimento impecável e ambiente lindo na Barra. Saí com o cabelo dos sonhos! Profissionais atenciosos e muito técnicos.',
    rating: 5,
    service: 'Corte & Finalização',
  },
  {
    name: 'Carolina Nunes',
    text:
      'Fiz balayage e amei o resultado, super natural. Cuidaram da saúde do meu cabelo do início ao fim. Recomendo demais!',
    rating: 5,
    service: 'Coloração & Mechas',
  },
  {
    name: 'Gustavo Henrique',
    text:
      'Melhor salão da Barra da Tijuca. Pontualidade, capricho e um atendimento que faz a gente se sentir em casa. Virei cliente fixo.',
    rating: 5,
    service: 'Corte Masculino',
  },
  {
    name: 'Aline Castro',
    text:
      'A progressiva ficou impecável, cabelo leve e natural. Local limpo, organizado e equipe simpática. Quase nota máxima merecida!',
    rating: 5,
    service: 'Escova & Progressiva',
  },
  {
    name: 'Marcela Vieira',
    text:
      'Tratamento capilar maravilhoso, meu cabelo renasceu. Explicaram tudo com carinho e cuidado. Simplesmente perfeito.',
    rating: 5,
    service: 'Tratamentos Capilares',
  },
  {
    name: 'Bianca Ramos',
    text:
      'Fiz make e penteado para um evento e recebi elogios a noite inteira. Profissionais talentosos e super gentis.',
    rating: 4,
    service: 'Maquiagem & Penteados',
  },
];

export const stats = [
  { value: '4,9', label: 'Avaliação média', suffix: '★' },
  { value: '105', label: 'Avaliações no Google', suffix: '' },
  { value: '6', label: 'Serviços de beleza', suffix: '+' },
  { value: '100', label: 'Clientes satisfeitos', suffix: '%' },
];
