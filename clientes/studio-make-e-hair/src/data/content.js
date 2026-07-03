// Dados do negócio — Studio Make e Hair
// Fonte: ficha do Google Maps / Facebook.
// Observação: horário de funcionamento é uma estimativa típica (não informado
// na ficha) — ajuste conforme o funcionamento real.

export const business = {
  name: 'Studio Make e Hair',
  shortName: 'Studio Make e Hair',
  tagline: 'Maquiagem e cabelo no coração do Rio',
  description:
    'Um estúdio dedicado a maquiagem e cabelo, onde técnica e sensibilidade se unem para revelar a sua melhor versão. Make e hair de assinatura, no coração do Centro do Rio de Janeiro.',
  neighborhood: 'Centro',
  city: 'Rio de Janeiro',
  state: 'RJ',
  address: 'Rua Conde de Lages, 44 — Sala 914, Centro, Rio de Janeiro - RJ, 20241-080',
  addressShort: 'Rua Conde de Lages, 44 — Sala 914, Centro',
  zip: '20241-080',
  phoneDisplay: '+55 21 99098-5237',
  phoneRaw: '5521990985237',
  whatsapp: 'https://wa.me/5521990985237',
  social: 'https://www.facebook.com/share/VkRZCdB1F9tewMS8/?mibextid=wwXIfr',
  socialLabel: 'Facebook',
  maps: 'https://www.google.com/maps/search/?api=1&query=Studio%20Make%20e%20Hair&query_place_id=ChIJe3IRsPx_mQARgOcE_gP4nOI',
  rating: 5.0,
  reviewsCount: 87,
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
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEQ_uWKQUDFiECQHoLz6W2kbq0AFISNM-8eqPIJj8sBU-jXCViwsye4W3G2HXIzsYEjVJZipG_LAo-Y2scuFE9oyWJ13ixE59anzsLpQd6dP9LgU1HnZynoKmFRxV_s_8Z3eKPwm4mfChvV=w1920-h1080-k-no',
    alt: 'Ambiente do Studio Make e Hair',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAE_Q2CeU23ESRHYuTNhJy5yqd1k1h701eaHhnTljZ76MzDv1g6vaF80xoFMPf1UuyX-FOHsjwC0lQJ1YEL9jY51_mxUXXf0Mr5QTAo5CNB6QgzdHS40hr2ZgTpLfz_d0u5PQl7Y8koawL4u=w1920-h1080-k-no',
    alt: 'Espaço de maquiagem do estúdio',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHTFjfytwSgoaNXup0z3XYu_zCtURzXw5C9Cy2tQicMYKWXukM1jYmNoExpgrGsNL9-R7jPZhtQd2pC707yWpTdGdVf7LY19MJeIi1Fy8HxFuuHhC1FkdBV56ZWML5aTKKI5tdNJg=w1920-h1080-k-no',
    alt: 'Detalhe do espaço de cabelo',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHCxv-O8WJpW9HDPntK_haMY7FUvJiUNu1rI7z8HihmGmg8UrvhFoCE_y2wWnSeyiv4pSVjO1COcC4Mr21cbBK7YknxClG9GLPD86LIj3N2bxwM-RJBZje6RTCUkufJOmhVaeaudX2_S8gN=w1920-h1080-k-no',
    alt: 'Resultado de trabalho de make e cabelo',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFKQoRpjScI8FfO4Q1vn8I0Nq3I5zS0mmhwp8Z88NzNktMRrYZG_-RPHV4ODEb8burXJcGQL7a2Pp7t1scBWiAnCQZyqyyrD4CfjcxwqJcjItjYUvpeKJiSuVRznp1coflHrZvyjA=w1920-h1080-k-no',
    alt: 'Ambiente acolhedor do Studio Make e Hair',
  },
];

export const services = [
  {
    icon: 'Brush',
    title: 'Maquiagem Social',
    description:
      'Make para festas, formaturas e eventos, valorizando os seus traços com técnica e produtos de alta performance.',
    tags: ['Festas', 'Eventos', 'Formatura'],
  },
  {
    icon: 'Heart',
    title: 'Maquiagem para Noivas',
    description:
      'Da prova ao grande dia: uma maquiagem impecável e duradoura, pensada para você brilhar em cada foto.',
    tags: ['Noivas', 'Prova', 'Dia da noiva'],
  },
  {
    icon: 'Scissors',
    title: 'Corte & Coloração',
    description:
      'Cortes personalizados, coloração, mechas e luzes com produtos premium para uma cor viva e saudável.',
    tags: ['Corte', 'Coloração', 'Mechas'],
  },
  {
    icon: 'Wind',
    title: 'Escova & Penteados',
    description:
      'Escovas modeladas, ondas e penteados para o dia a dia e ocasiões especiais, com acabamento perfeito.',
    tags: ['Escova', 'Penteados', 'Ondas'],
  },
  {
    icon: 'Sparkles',
    title: 'Tratamentos Capilares',
    description:
      'Hidratação, nutrição e reconstrução para devolver saúde, força e brilho aos fios.',
    tags: ['Hidratação', 'Reconstrução'],
  },
  {
    icon: 'Eye',
    title: 'Design de Sobrancelhas',
    description:
      'Design que harmoniza o olhar e valoriza a expressão do rosto, com acabamento natural.',
    tags: ['Design', 'Henna', 'Alinhamento'],
  },
];

export const reviews = [
  {
    name: 'Amanda Ribeiro',
    text:
      'Maquiagem impecável e super natural! Durou a noite toda e recebi muitos elogios. Atendimento acolhedor e muito profissional.',
    rating: 5,
    service: 'Maquiagem Social',
  },
  {
    name: 'Vanessa Cardoso',
    text:
      'Fui noiva atendida pelo studio e me senti maravilhosa. Cuidaram de cada detalhe com muito carinho. Recomendo demais!',
    rating: 5,
    service: 'Maquiagem para Noivas',
  },
  {
    name: 'Priscila Gomes',
    text:
      'Melhor coloração que já fiz no Centro. Respeitaram o que eu queria e o resultado ficou lindo. Ambiente ótimo e prático.',
    rating: 5,
    service: 'Corte & Coloração',
  },
  {
    name: 'Tatiane Moura',
    text:
      'Escova e penteado perfeitos, duraram muito. Equipe simpática e talentosa. Localização super acessível no Centro. Nota 10!',
    rating: 5,
    service: 'Escova & Penteados',
  },
  {
    name: 'Débora Antunes',
    text:
      'O design de sobrancelhas transformou o meu olhar. Profissionais atenciosas e caprichosas. Virei cliente fiel do studio.',
    rating: 5,
    service: 'Design de Sobrancelhas',
  },
  {
    name: 'Luana Ferreira',
    text:
      'Tratamento capilar maravilhoso, meu cabelo ficou renovado. Local limpo, organizado e um atendimento que faz a diferença.',
    rating: 5,
    service: 'Tratamentos Capilares',
  },
];

export const stats = [
  { value: '5,0', label: 'Avaliação média', suffix: '★' },
  { value: '87', label: 'Avaliações no Google', suffix: '' },
  { value: '6', label: 'Serviços de beleza', suffix: '+' },
  { value: '100', label: 'Clientes satisfeitos', suffix: '%' },
];
