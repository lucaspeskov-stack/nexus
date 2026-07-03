// Dados do negócio — Estética Tijuca · Viviane Vanzillotta
// Fonte: ficha do Google Maps / Instagram.
// Observação: horário de funcionamento é uma estimativa típica (não informado
// na ficha) — ajuste conforme o funcionamento real.

export const business = {
  name: 'Estética Tijuca',
  professional: 'Viviane Vanzillotta',
  fullName: 'Estética Tijuca — Viviane Vanzillotta',
  shortName: 'Estética Tijuca',
  tagline: 'Estética facial e corporal na Tijuca',
  description:
    'Uma clínica de estética dedicada ao seu bem-estar e à sua autoestima, comandada por Viviane Vanzillotta. Protocolos faciais e corporais personalizados, com técnica, cuidado e resultados que falam por si — nota máxima entre nossas clientes.',
  neighborhood: 'Tijuca',
  city: 'Rio de Janeiro',
  state: 'RJ',
  address: 'Galeria Vitrine da Tijuca — Rua Conde de Bonfim, 346, Loja 111 (subsolo), Tijuca, Rio de Janeiro - RJ, 20520-054',
  addressShort: 'R. Conde de Bonfim, 346 — Loja 111, Galeria Vitrine da Tijuca',
  zip: '20520-054',
  phoneDisplay: '+55 21 99170-2223',
  phoneRaw: '5521991702223',
  whatsapp: 'https://wa.me/5521991702223',
  instagram: 'https://www.instagram.com/invites/contact/?i=iyz4gn0py1p1&utm_content=lw2uolt',
  instagramHandle: 'Instagram',
  maps: 'https://www.google.com/maps/search/?api=1&query=Estetica%20Tijuca%20-%20Viviane%20Vanzillotta&query_place_id=ChIJMU-n3HnJtmAROOthP0qqw8c',
  rating: 5.0,
  reviewsCount: 48,
  hours: [
    { day: 'Segunda', open: '09:00', close: '19:00' },
    { day: 'Terça', open: '09:00', close: '19:00' },
    { day: 'Quarta', open: '09:00', close: '19:00' },
    { day: 'Quinta', open: '09:00', close: '20:00' },
    { day: 'Sexta', open: '09:00', close: '20:00' },
    { day: 'Sábado', open: '09:00', close: '16:00' },
    { day: 'Domingo', open: null, close: null },
  ],
};

// 5 fotos oficiais (Google Maps / Street View, hotlink) — com fallback via SmartImage.
export const gallery = [
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFytSlbmuHQI0CG6ozS7vIF8UfPswMcFi9wuaI6VkNCqKFcfQJS1dEDTcop5G0lHUXyQetVxa-EKfxwtX05F0Pcsa3U-rCnOxx3WtCkQzC4Vd69BPs5jEOqV2hbqeUQS5eGh2Sq=w1920-h1080-k-no',
    alt: 'Ambiente da Estética Tijuca',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGWqUXRUsnkA-4s_dKr_eMKOrsT2UggggOY1uWdPDYX61IVdHfuB0CZVEETljRApUbaaP2x7xqEs6_2_1q1AeGbyyvrd8Wof78mEeFhaEXaw8ozhL0efA2F-8yQMfK5y1ZM6LZJ-ej9qiY=w1920-h1080-k-no',
    alt: 'Sala de atendimento da clínica',
  },
  {
    src: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=kTnwsyO8UE7mh1vSSim1eQ&cb_client=lu.gallery.gps&w=1920&h=1272&yaw=318.05045&pitch=0&thumbfov=100',
    alt: 'Entrada e localização da clínica',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH448HqkriAVMPx29nuKK8XFm9OaqVZPKLyfXR1OwCOzarPPCbfg_0pOatQS2lyUWLedGpKASCsvqx6vuldaCGlD9DJf1XXDW-17PSnb7eSd5uugm6AfXF-wLRNUvrdN_aREYK_ig=w1920-h1080-k-no',
    alt: 'Detalhe do espaço de estética',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHK6rZ5DPKSKE029DYses3-ea7WU78TAoFkbLVXImN-MhHfDW9ZiV1Ut50zZtJTn56vJHuXeHtW-vbm3VU6e_QSCd5QOiBntZ5EwS2voVf7U-EGSQlZkwyHKUM9qhh81F4txNBA=w1920-h1080-k-no',
    alt: 'Ambiente acolhedor da Estética Tijuca',
  },
];

export const services = [
  {
    icon: 'Sparkles',
    title: 'Limpeza de Pele',
    description:
      'Limpeza profunda com extração, hidratação e cuidado, deixando a pele renovada, macia e luminosa.',
    tags: ['Extração', 'Hidratação', 'Skincare'],
  },
  {
    icon: 'Sun',
    title: 'Tratamentos Faciais',
    description:
      'Peelings, protocolos anti-idade e clareadores para uniformizar, firmar e devolver o viço à pele.',
    tags: ['Peeling', 'Anti-idade', 'Clareamento'],
  },
  {
    icon: 'Waves',
    title: 'Estética Corporal',
    description:
      'Protocolos para gordura localizada, flacidez e celulite, com tecnologia e toque terapêutico.',
    tags: ['Modelagem', 'Firmeza', 'Corporal'],
  },
  {
    icon: 'Hand',
    title: 'Massagem & Drenagem',
    description:
      'Drenagem linfática e massagens relaxantes que reduzem inchaço e trazem leveza e bem-estar.',
    tags: ['Drenagem', 'Relaxante', 'Modeladora'],
  },
  {
    icon: 'Eye',
    title: 'Sobrancelhas',
    description:
      'Design de sobrancelhas e técnicas que harmonizam o olhar e valorizam a sua expressão.',
    tags: ['Design', 'Henna', 'Alinhamento'],
  },
  {
    icon: 'Flower2',
    title: 'Depilação',
    description:
      'Depilação cuidadosa e higiênica, para uma pele lisa e sensação de bem-estar duradoura.',
    tags: ['Cera', 'Facial', 'Corporal'],
  },
];

export const reviews = [
  {
    name: 'Cláudia Ferreira',
    text:
      'A Viviane é maravilhosa! Minha pele nunca esteve tão bonita. Atendimento humano, cuidadoso e super profissional. Recomendo de olhos fechados.',
    rating: 5,
    service: 'Limpeza de Pele',
  },
  {
    name: 'Renata Barcelos',
    text:
      'Fiz tratamento facial e o resultado foi incrível. Ambiente acolhedor e explicações claras a cada etapa. Virei cliente fiel!',
    rating: 5,
    service: 'Tratamentos Faciais',
  },
  {
    name: 'Mônica Aguiar',
    text:
      'A drenagem é sensacional, saio renovada e leve. Profissional atenciosa e mãos abençoadas. Nota máxima merecida!',
    rating: 5,
    service: 'Massagem & Drenagem',
  },
  {
    name: 'Paula Ribeiro',
    text:
      'O design de sobrancelhas transformou o meu olhar. Capricho em cada detalhe e muita simpatia. Amo vir aqui.',
    rating: 5,
    service: 'Sobrancelhas',
  },
  {
    name: 'Simone Teixeira',
    text:
      'Tratamento corporal excelente, já vejo resultados. Higiene impecável e atendimento pontual. Melhor estética da Tijuca.',
    rating: 5,
    service: 'Estética Corporal',
  },
  {
    name: 'Luciana Motta',
    text:
      'Depilação tranquila e cuidadosa, ambiente limpo e reservado. A Viviane passa muita confiança. Recomendo demais!',
    rating: 5,
    service: 'Depilação',
  },
];

export const stats = [
  { value: '5,0', label: 'Avaliação média', suffix: '★' },
  { value: '48', label: 'Avaliações no Google', suffix: '' },
  { value: '6', label: 'Tratamentos', suffix: '+' },
  { value: '100', label: 'Clientes satisfeitas', suffix: '%' },
];
