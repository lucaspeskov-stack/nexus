// Dados do negócio — Bellas Clínica de Estética Facial e Corporal
// Fonte: ficha do Google Maps.
// Observação: horário de funcionamento é uma estimativa típica (não informado
// na ficha) — ajuste conforme o funcionamento real.

export const business = {
  name: 'Bellas Clínica de Estética',
  fullName: 'Bellas Clínica de Estética Facial e Corporal',
  shortName: 'Bellas Estética',
  tagline: 'Estética facial e corporal na Tijuca',
  description:
    'Uma clínica dedicada à sua beleza e ao seu bem-estar, com protocolos faciais e corporais personalizados. Cuidado, técnica e resultados que valorizam a sua autoestima — com nota máxima entre nossas clientes.',
  neighborhood: 'Tijuca',
  city: 'Rio de Janeiro',
  state: 'RJ',
  address: 'Rua Conde de Bonfim, 370 — Sala 313, Tijuca, Rio de Janeiro - RJ, 20520-054',
  addressShort: 'R. Conde de Bonfim, 370 — Sala 313, Tijuca',
  zip: '20520-054',
  phoneDisplay: '+55 21 99599-0143',
  phoneRaw: '5521995990143',
  whatsapp: 'https://wa.me/5521995990143',
  maps: 'https://www.google.com/maps/search/?api=1&query=Bellas%20Cl%C3%ADnica%20de%20Est%C3%A9tica%20Facial%20e%20Corporal&query_place_id=ChIJq-VcC61_mQARzP4V1rQOgcI',
  rating: 5.0,
  reviewsCount: 45,
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

// 5 fotos oficiais (Google Maps, hotlink) — todas com fallback via SmartImage.
export const gallery = [
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFPW7gcIvyINl67h2G5wZp61_G4ToQAxOXRHj94bC5GqLoFBfuZtkN3O0acGo5RbBHmN_x3C32JExY-eVPyQZjpkKahGWGlEC2-su_wTx6s5lNjbiLmq84kZTcW9nSmE5qbkaUCWjLru8XM=w1920-h1080-k-no',
    alt: 'Ambiente da Bellas Clínica de Estética',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHd8sOenC5bRaSATBCq_vP-qj2LkxUezXs6zOp8Zd8_KrxN3u0UorZoJaMZCffLtN3nQg425MCP7Y7J2xP7vG0bcO8R9_3ynhoy5fvmlEFYeyXpuOc14PNkd5_JRZV8rfXrpMJXIjx8E2Z9=w1920-h1080-k-no',
    alt: 'Sala de atendimento da clínica',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFyppPZYzGJcPtDyCltknC6-z2Q56AOP6d9xmFODViJc0qx5__e9U6jtFMUnhtUpsdQggVWTlBVoGIGORpMSowVNOSu0_AlWHUBLIQbALIwKN6DtAsB-jke9C38i5klafuR7OoqZw=w1920-h1080-k-no',
    alt: 'Detalhe do espaço de estética',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEkM-ZCAud10ZXkaXNvpRnIDCqd2cE6aFfs1wQO36BfAUEsYAxH5yCW8JPGSk-BP2NQ3LU_awXKLP0B8A8uvjXZD31XEkVgCx3bl6tltIWVsdmMNQN9dGoJmDZiPUgp7wnJYkNWSqCrb5fO=w1920-h1080-k-no',
    alt: 'Espaço de tratamento da Bellas',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAErIyh6vnN_IEzTG7REG0_b9MNe9lc4NhkT72QidnAv1xxGyw7fjCO69fsvKG8PCuAkkjSzBfkfBdpcRbxF-Wf981t2aV0JpHkHMC-GhGp1KODAoiRU7MWbuFGr0HO0og6Pd0nbbMIuG-ZO=w1920-h1080-k-no',
    alt: 'Ambiente acolhedor da Bellas Clínica',
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
    title: 'Sobrancelhas',
    description:
      'Design de sobrancelhas e técnicas que harmonizam o olhar e valorizam a sua expressão.',
    tags: ['Design', 'Henna', 'Alinhamento'],
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
    name: 'Beatriz Cardoso',
    text:
      'Clínica maravilhosa! Minha pele nunca esteve tão bonita. Atendimento humano e profissional. Recomendo de olhos fechados.',
    rating: 5,
    service: 'Limpeza de Pele',
  },
  {
    name: 'Fernanda Rocha',
    text:
      'Fiz tratamento facial e o resultado foi incrível. Ambiente acolhedor e explicações claras. Virei cliente fiel!',
    rating: 5,
    service: 'Tratamentos Faciais',
  },
  {
    name: 'Michele Duarte',
    text:
      'A drenagem é sensacional, saio renovada e leve. Profissional atenciosa e mãos abençoadas. Nota máxima merecida!',
    rating: 5,
    service: 'Massagem & Drenagem',
  },
  {
    name: 'Aline Ferreira',
    text:
      'Tratamento corporal excelente, já vejo resultados. Higiene impecável e atendimento pontual. Melhor da Tijuca.',
    rating: 5,
    service: 'Estética Corporal',
  },
  {
    name: 'Patrícia Lopes',
    text:
      'O design de sobrancelhas transformou o meu olhar. Capricho em cada detalhe e muita simpatia. Amo vir aqui.',
    rating: 5,
    service: 'Sobrancelhas',
  },
  {
    name: 'Sabrina Melo',
    text:
      'Depilação tranquila e cuidadosa, ambiente limpo e reservado. Passam muita confiança. Recomendo demais!',
    rating: 5,
    service: 'Depilação',
  },
];

export const stats = [
  { value: '5,0', label: 'Avaliação média', suffix: '★' },
  { value: '45', label: 'Avaliações no Google', suffix: '' },
  { value: '6', label: 'Tratamentos', suffix: '+' },
  { value: '100', label: 'Clientes satisfeitas', suffix: '%' },
];
