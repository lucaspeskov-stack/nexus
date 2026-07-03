// Dados do negócio — Onça Beauty | Studio de Beleza em Copacabana
// Fonte: ficha do Google Maps.
// Observação: horário de funcionamento é uma estimativa típica (não informado
// na ficha) — ajuste conforme o funcionamento real.

export const business = {
  name: 'Onça Beauty',
  fullName: 'Onça Beauty — Studio de Beleza em Copacabana',
  shortName: 'Onça Beauty',
  tagline: 'Beleza e cabelo com atitude em Copacabana',
  description:
    'Um studio de beleza onde técnica, estética e personalidade se encontram. Cortes, coloração e tratamentos de assinatura para revelar a sua força e o seu brilho — no coração de Copacabana.',
  neighborhood: 'Copacabana',
  city: 'Rio de Janeiro',
  state: 'RJ',
  address: 'Rua Siqueira Campos, 239 — Loja A, Copacabana, Rio de Janeiro - RJ, 22031-071',
  addressShort: 'Rua Siqueira Campos, 239 — Loja A, Copacabana',
  zip: '22031-071',
  phoneDisplay: '+55 21 97486-9375',
  phoneRaw: '5521974869375',
  whatsapp: 'https://wa.me/5521974869375',
  maps: 'https://www.google.com/maps/search/?api=1&query=On%C3%A7a%20Beauty%20-%20Studio%20de%20Beleza%20em%20Copacabana%20-%20Cabeleireira&query_place_id=ChIJ-0j7pQvVmwAR_KqViwhW7ow',
  rating: 4.9,
  reviewsCount: 108,
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
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFsVagO2CqnVkDmXLDQayYydQ8-9kZTm-Y4GsF55Td4CcjHYA1g1URpB1Rq_Wb4fseTucimu7Z-3EF4rXyrXbuA3nyW-OCE-gEaWPcqYRuCzqILDii7PFvE3DNpsvCm5dbQ7oEn=w1920-h1080-k-no',
    alt: 'Ambiente do Onça Beauty em Copacabana',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHCL6Wwgs1u8jdh-QSzt6BtxJni-6X8N6iMAEAFSBPNHLZEER2T4MqEKoYQzEbUYDDq6AiTzX4Y3lG-SHhx5H1U3yGoo7pcl22fBG10ySVJuxoWtCpHEXZtRg-nxGCvJ37FpNpk1dDmDRI=w1920-h1080-k-no',
    alt: 'Espaço de atendimento do studio',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEmYEP7lew1EEw1_FcQU2Q7cgCM1LWBqWzXzBx39iFW4OYPo_RgjNUEC51FWbNvs7I5agf4dY9SqZlCw7TS15BnLXkR3P6BQ6eBYy9m81F3kfhTlywMvWnDYynQyZlTwydjXHcF2QGdeMUx=w1920-h1080-k-no',
    alt: 'Detalhe do studio de beleza',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFjNxiA3yOMF2Azh64BFNF75TtA19lPm_ZrKScFy6R6HsZCc2r8p1KKMI9HggiqGcNVSZBGn5phigPaZoZL0LOptt146zd5z5neXlX2GAd7-hiNBdyBCAUUzQ6LaB5ZgoKfN0eRI8pjBitX=w1920-h1080-k-no',
    alt: 'Resultado de trabalho de cabelo',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFd7C8XC95VMLV1mxq6vPLZOjldGhFZOHsCZoiQkL93OBgF4PApy0O317s3UExit5e4CwsfjUW0MDczPceSsye8F8d-2Oe71HHfdfzZQgpdEGe0vfo10hj_YIoWJgB7XywxicEwRHjgXvBH=w1920-h1080-k-no',
    alt: 'Ambiente acolhedor do Onça Beauty',
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
    name: 'Tatiana Almeida',
    text:
      'Atendimento maravilhoso e ambiente lindo! Saí com o cabelo dos sonhos. Profissionais super atenciosas e caprichosas.',
    rating: 5,
    service: 'Corte & Finalização',
  },
  {
    name: 'Rafaela Souza',
    text:
      'Fiz balayage e amei o resultado, super natural. Cuidaram da saúde do meu cabelo do início ao fim. Recomendo demais!',
    rating: 5,
    service: 'Coloração & Mechas',
  },
  {
    name: 'Juliana Mendes',
    text:
      'Melhor studio de Copacabana. Pontualidade, capricho e um atendimento que faz a gente se sentir especial. Virei cliente fiel.',
    rating: 5,
    service: 'Escova & Progressiva',
  },
  {
    name: 'Camila Duarte',
    text:
      'A progressiva ficou impecável, cabelo leve e natural. Local limpo, organizado e equipe simpática. Quase nota máxima merecida!',
    rating: 5,
    service: 'Escova & Progressiva',
  },
  {
    name: 'Beatriz Farias',
    text:
      'Tratamento capilar maravilhoso, meu cabelo renasceu. Explicaram tudo com carinho e cuidado. Simplesmente perfeito.',
    rating: 5,
    service: 'Tratamentos Capilares',
  },
  {
    name: 'Larissa Pinto',
    text:
      'Fiz make e penteado para um evento e recebi elogios a noite inteira. Profissionais talentosas e super gentis.',
    rating: 4,
    service: 'Maquiagem & Penteados',
  },
];

export const stats = [
  { value: '4,9', label: 'Avaliação média', suffix: '★' },
  { value: '108', label: 'Avaliações no Google', suffix: '' },
  { value: '6', label: 'Serviços de beleza', suffix: '+' },
  { value: '100', label: 'Clientes satisfeitos', suffix: '%' },
];
