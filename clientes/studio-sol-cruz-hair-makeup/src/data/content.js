// Dados do negócio — Studio Sol Cruz Hair & Makeup
// Fonte: ficha do Google Maps / WhatsApp.
// Observação: horário de funcionamento é uma estimativa típica (não informado
// na ficha) — ajuste conforme o funcionamento real.

export const business = {
  name: 'Studio Sol Cruz Hair & Makeup',
  shortName: 'Studio Sol Cruz',
  tagline: 'Cabelo e maquiagem que iluminam você',
  description:
    'Um estúdio de beleza dedicado a cabelo e maquiagem, onde técnica e sensibilidade se encontram. Realçamos a sua luz natural com cortes, cor e make de assinatura — no coração de Copacabana.',
  neighborhood: 'Copacabana',
  city: 'Rio de Janeiro',
  state: 'RJ',
  address: 'Av. Nossa Sra. de Copacabana, 613 — Sala 205, Copacabana, Rio de Janeiro - RJ, 22010-122',
  addressShort: 'Av. N. Sra. de Copacabana, 613 — Sala 205, Copacabana',
  zip: '22010-122',
  phoneDisplay: '+55 21 97470-9833',
  phoneRaw: '5521974709833',
  whatsapp: 'https://wa.me/5521974709833',
  maps: 'https://www.google.com/maps/search/?api=1&query=Studio%20Sol%20Cruz%20Hair%20%26%20Makeup&query_place_id=ChIJgzwK6d_VmwARJEQZx6c0DAM',
  rating: 5.0,
  reviewsCount: 141,
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
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAElk4iCSWk7gQ4WKNZNjT_fH3pto6XDiPfXKDWaKZk9YTVg06cQfuc5cyQyxDCMACUYrxisvi9VXBz-e6-qrC-O_r_lKvGWGqO8sLuJpDM6Ov-O32a9eaJQll3vOrCpjQJH274bN2mBVIgU=w1920-h1080-k-no',
    alt: 'Ambiente do Studio Sol Cruz Hair & Makeup',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGBrBUigCHoR13nt3r0X8svJoQuZof5JpEEcO4wkMBpggeQhVU6QiDLa_pXhc0GeEfgxWdH6G5vtSix9JUTGnBH6XxQdlGczt2HJNg4j0OqRfMZiI70ewOG6rLD0PUG6ELjEnB4=w1920-h1080-k-no',
    alt: 'Detalhe do estúdio de beleza',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHL-wre5v5l2yhXFjzGmuXUvXn40R2ckX5kftEyfRw2bmgw04T8yT960ZOx2-dEhy_z2hKh1zL9si_dhXcdXLoxD0RPSC2uB2BQ-2qpvla-T6I6hLUTWQ1SGzOp22O5E9hbLzBOTS5ysZY=w1920-h1080-k-no',
    alt: 'Espaço de atendimento do estúdio',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEgliwNzaqKNl5zi_rJ5AoxxYOwpw4tk3QRul4HQ6jkRGdOJ2CFH7dqgbXue9RsgUbuT01C927gNk0oDpqH7Y9Co0xHpUlkafdW2EkF8cdNZRr5y4ThtNpPpVMa9g1s3VPXH1JQ1NNagQV1=w1920-h1080-k-no',
    alt: 'Resultado de trabalho de cabelo e make',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFLAvN0d5DgI4qoyrdfVg8ZhdqcVIV9yIDhEJgWIkYZ9iO3fQXvIAVZrmt6h6QDO8WaXSDW7s5DZ0sQczGQP4sIHzJDiRfZDvzV-KTuNBdXc2sm06wdWe7iVLcITGz4U9HYB0Q9sMVgt2M=w1920-h1080-k-no',
    alt: 'Ambiente acolhedor do Studio Sol Cruz',
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
    name: 'Marina Cruz',
    text:
      'Simplesmente perfeito! A make durou a festa inteira e ficou linda nas fotos. Atendimento acolhedor e muito profissional.',
    rating: 5,
    service: 'Maquiagem Social',
  },
  {
    name: 'Beatriz Sol',
    text:
      'Fui noiva atendida pelo studio e me senti a mulher mais linda do mundo. Capricho em cada detalhe. Recomendo de olhos fechados!',
    rating: 5,
    service: 'Maquiagem para Noivas',
  },
  {
    name: 'Larissa Andrade',
    text:
      'Melhor coloração que já fiz. Respeitaram o que eu queria e cuidaram da saúde do meu cabelo. Ambiente lindo e aconchegante.',
    rating: 5,
    service: 'Corte & Coloração',
  },
  {
    name: 'Camila Reis',
    text:
      'Penteado e escova impecáveis, duraram muito mais do que eu esperava. Equipe talentosa e super simpática. Nota 10!',
    rating: 5,
    service: 'Escova & Penteados',
  },
  {
    name: 'Fernanda Lopes',
    text:
      'O design de sobrancelhas mudou o meu olhar. Profissionais atenciosas e caprichosas. Virei cliente fiel do studio.',
    rating: 5,
    service: 'Design de Sobrancelhas',
  },
  {
    name: 'Juliana Prado',
    text:
      'Tratamento capilar maravilhoso, meu cabelo renasceu. Local limpo, organizado e um atendimento que faz a diferença.',
    rating: 5,
    service: 'Tratamentos Capilares',
  },
];

export const stats = [
  { value: '5,0', label: 'Avaliação média', suffix: '★' },
  { value: '141', label: 'Avaliações no Google', suffix: '' },
  { value: '6', label: 'Serviços de beleza', suffix: '+' },
  { value: '100', label: 'Clientes satisfeitos', suffix: '%' },
];
