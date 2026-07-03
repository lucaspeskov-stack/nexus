// Dados do negócio — MBN Clínica Estética
// Fonte: ficha do Google Maps.
// Observação: horário de funcionamento é uma estimativa típica (não informado
// na ficha) — ajuste conforme o funcionamento real.

export const business = {
  name: 'MBN Clínica Estética',
  fullName: 'MBN Clínica Estética',
  shortName: 'MBN Estética',
  tagline: 'Estética facial e corporal na Tijuca',
  description:
    'Uma clínica de estética dedicada ao seu cuidado e bem-estar, com protocolos faciais e corporais personalizados. Técnica, acolhimento e resultados que renovam a sua autoestima — com nota máxima entre nossas clientes.',
  neighborhood: 'Tijuca',
  city: 'Rio de Janeiro',
  state: 'RJ',
  address: 'Rua Almirante Cochrane, 280 — Sala 709, Tijuca, Rio de Janeiro - RJ, 20550-040',
  addressShort: 'R. Almirante Cochrane, 280 — Sala 709, Tijuca',
  zip: '20550-040',
  phoneDisplay: '+55 32 99954-8618',
  phoneRaw: '5532999548618',
  whatsapp: 'https://wa.me/5532999548618',
  maps: 'https://www.google.com/maps/search/?api=1&query=MBN%20Cl%C3%ADnica%20Est%C3%A9tica&query_place_id=ChIJuXPPX0Z-mQARHGhbMtd6I6c',
  rating: 5.0,
  reviewsCount: 35,
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

// 5 fotos oficiais (Google Maps / Street View, hotlink) — todas com fallback via SmartImage.
export const gallery = [
  {
    src: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=UyLhiU-bWp1RM9zwCw-SAA&cb_client=lu.gallery.gps&w=1920&h=1272&yaw=140.214&pitch=0&thumbfov=100',
    alt: 'Fachada e entorno da MBN Clínica Estética na Tijuca',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHPNlb9SBSPHwoZWZlhxLfdn0fxOr6UhZqT5y_leE2fqDeY0tzQDcNYkseKVVxqYOZSMCuROXgVMjyw5QXkanbWazSMYd0Q8D6HDK_6spJk-dFvjjJa22RppB2kd0DDPtbzWzoD=w1920-h1080-k-no',
    alt: 'Ambiente de atendimento da MBN Clínica Estética',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEV_t7Osu3ApDHUE7LSjNiVPVw8NisMC7WQQ6BUeK3C1R1R0hJOW2rwzwR3yXhiUWeTfzjJugcRmSQKgGzUP-s5necuRcbNQJJT9Ttr5gSXrkJKSB4_6ryDW7blA1LFLq7TU661=w1920-h1080-k-no',
    alt: 'Sala de tratamento da clínica',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFpinzJjqAFghfFlXsYoMtGDLMBpTa5XF78XnTi41L-yLAhqNn3YUJrEtKniu4c0Vuh8mEgpWMctkqlTBatyjWV32bIibjalg0d6pl-m8SUIahrnH6X6cdFaaidKy1xDRevZwzj=w1920-h1080-k-no',
    alt: 'Detalhe do espaço de estética da MBN',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEXESCitso6edVXrdw-7R9LlKHtdQinHB6QHReJL9GkdH2B0CY1JYCMuoeAn3wMVShXmQ7ejFqVuaY4Ee3mjZMy0CiF3LHSo-2rwJCJdGbn1pB6QyKD4UqLAxSARy9q6us4HpQlJQ=w1920-h1080-k-no',
    alt: 'Ambiente acolhedor da MBN Clínica Estética',
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
      'Drenagem linfática e massagens que reduzem inchaço e trazem leveza, conforto e bem-estar.',
    tags: ['Drenagem', 'Relaxante', 'Modeladora'],
  },
  {
    icon: 'Eye',
    title: 'Sobrancelhas & Cílios',
    description:
      'Design de sobrancelhas e realce do olhar com técnicas que harmonizam a sua expressão.',
    tags: ['Design', 'Henna', 'Cílios'],
  },
  {
    icon: 'Flower2',
    title: 'Depilação',
    description:
      'Depilação cuidadosa e higiênica, para uma pele lisa e uma sensação de bem-estar duradoura.',
    tags: ['Cera', 'Facial', 'Corporal'],
  },
];

export const reviews = [
  {
    name: 'Camila Nogueira',
    text:
      'Clínica impecável! Minha pele nunca esteve tão bonita. Atendimento humano e muito profissional. Recomendo de olhos fechados.',
    rating: 5,
    service: 'Limpeza de Pele',
  },
  {
    name: 'Renata Barbosa',
    text:
      'Fiz tratamento facial e o resultado foi incrível. Ambiente acolhedor e explicações claras em cada etapa. Virei cliente fiel!',
    rating: 5,
    service: 'Tratamentos Faciais',
  },
  {
    name: 'Juliana Martins',
    text:
      'A drenagem é sensacional, saio sempre renovada e leve. Profissional atenciosa e mãos abençoadas. Nota máxima merecida!',
    rating: 5,
    service: 'Massagem & Drenagem',
  },
  {
    name: 'Priscila Andrade',
    text:
      'Tratamento corporal excelente, já vejo resultados. Higiene impecável e atendimento pontual. A melhor da Tijuca.',
    rating: 5,
    service: 'Estética Corporal',
  },
  {
    name: 'Larissa Freitas',
    text:
      'O design de sobrancelhas transformou o meu olhar. Capricho em cada detalhe e muita simpatia. Amo vir aqui.',
    rating: 5,
    service: 'Sobrancelhas & Cílios',
  },
  {
    name: 'Bianca Teixeira',
    text:
      'Depilação tranquila e cuidadosa, ambiente limpo e reservado. Passam muita confiança e segurança. Recomendo demais!',
    rating: 5,
    service: 'Depilação',
  },
];

export const stats = [
  { value: '5,0', label: 'Avaliação média', suffix: '★' },
  { value: '35', label: 'Avaliações no Google', suffix: '' },
  { value: '6', label: 'Tratamentos', suffix: '+' },
  { value: '100', label: 'Clientes satisfeitas', suffix: '%' },
];
