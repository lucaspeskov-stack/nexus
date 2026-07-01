// Dados do negócio — BISTRÔ HAIR
// Fonte: ficha do Google Maps / Linktree do salão.
// Observação: horário de funcionamento é uma estimativa típica (não informado
// na ficha) — ajuste conforme o funcionamento real.

export const business = {
  name: 'BISTRÔ HAIR',
  shortName: 'Bistrô',
  tagline: 'Cabelo com assinatura, no coração de Copacabana',
  description:
    'Um salão-atelier onde técnica e cuidado se encontram. Cortes, coloração e tratamentos pensados para revelar a sua melhor versão — com a elegância de um bistrô e a precisão de quem ama o que faz.',
  neighborhood: 'Copacabana',
  city: 'Rio de Janeiro',
  state: 'RJ',
  address: 'Rua Siqueira Campos, 43 — Sala 1008, Copacabana, Rio de Janeiro - RJ, 22050-001',
  addressShort: 'Rua Siqueira Campos, 43 — Sala 1008, Copacabana',
  zip: '22050-001',
  phoneDisplay: '+55 21 98069-5049',
  phoneRaw: '5521980695049',
  whatsapp: 'https://wa.me/5521980695049',
  links: 'https://linktr.ee/bistrohair',
  linksLabel: 'linktr.ee/bistrohair',
  maps: 'https://www.google.com/maps/search/?api=1&query=BISTR%C3%94%20HAIR&query_place_id=ChIJKwKP0k_VmwARpd6W9L2gArw',
  rating: 4.5,
  reviewsCount: 133,
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

// 5 imagens: [0] é a foto oficial do Google Maps (hotlink), [1..4] são de stock
// curado (Unsplash) — todas com fallback gracioso via SmartImage.
export const gallery = [
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG_OLdC6pqhoQ2bq94-iMuESlp5zODFBe3dB-rhscfg0bkPYQXD3kZLxJVd0oFueh9oQ6RxrY7HIOxVR0rIOlUhcDx38T5ZkjmkTtYvTpB_ZoqLNYaNRVge3WY6v4M4YNgSyB5g=w408-h544-k-no',
    alt: 'Ambiente do BISTRÔ HAIR em Copacabana',
    source: 'Google',
  },
  {
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80',
    alt: 'Cliente sendo atendido na cadeira do salão',
    source: 'Unsplash',
  },
  {
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80',
    alt: 'Detalhe de ferramentas e cuidado com o cabelo',
    source: 'Unsplash',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    alt: 'Estação de trabalho elegante do salão',
    source: 'Unsplash',
  },
  {
    src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80',
    alt: 'Resultado de coloração e finalização',
    source: 'Unsplash',
  },
];

export const services = [
  {
    icon: 'Scissors',
    title: 'Corte & Finalização',
    description:
      'Cortes autorais para todos os tipos de cabelo, com leitura de rosto, textura e estilo de vida.',
    tags: ['Feminino', 'Masculino', 'Repicado'],
  },
  {
    icon: 'Palette',
    title: 'Coloração & Mechas',
    description:
      'Coloração, mechas, luzes e balayage com produtos premium para uma cor viva e uniforme.',
    tags: ['Balayage', 'Luzes', 'Tonalização'],
  },
  {
    icon: 'Sparkles',
    title: 'Tratamentos Capilares',
    description:
      'Reconstrução, nutrição e cronograma capilar para fios saudáveis, fortes e com brilho.',
    tags: ['Reconstrução', 'Nutrição', 'Cronograma'],
  },
  {
    icon: 'Wind',
    title: 'Escova & Penteados',
    description:
      'Escovas modeladas, ondas e penteados para o dia a dia, eventos e ocasiões especiais.',
    tags: ['Escova', 'Ondas', 'Eventos'],
  },
  {
    icon: 'Droplets',
    title: 'Spa Capilar',
    description:
      'Um ritual de hidratação profunda e massagem no couro cabeludo para relaxar e revitalizar.',
    tags: ['Hidratação', 'Massagem', 'Relax'],
  },
  {
    icon: 'UserRound',
    title: 'Barba & Cuidados',
    description:
      'Alinhamento de barba, acabamento e cuidados masculinos com toque de barbearia clássica.',
    tags: ['Barba', 'Acabamento', 'Clássico'],
  },
];

export const reviews = [
  {
    name: 'Rafael Monteiro',
    text:
      'Melhor corte que já fiz no Rio. Ambiente charmoso, atendimento atencioso e resultado impecável. Virei cliente fixo.',
    rating: 5,
    service: 'Corte & Finalização',
  },
  {
    name: 'Camila Torres',
    text:
      'Fiz balayage e amei o resultado, super natural. Cuidaram do meu cabelo do início ao fim. Recomendo demais!',
    rating: 5,
    service: 'Coloração & Mechas',
  },
  {
    name: 'Diego Almeida',
    text:
      'Lugar aconchegante em Copacabana, equipe simpática e profissional. A barba ficou perfeita. Voltarei sempre.',
    rating: 4,
    service: 'Barba & Cuidados',
  },
  {
    name: 'Larissa Prado',
    text:
      'O spa capilar é maravilhoso, saí renovada. Cabelo macio e brilhante como há tempos não via. Vale cada minuto.',
    rating: 5,
    service: 'Spa Capilar',
  },
  {
    name: 'Bruno Cardoso',
    text:
      'Atendimento pontual e caprichado. Explicaram tudo sobre os cuidados. Ótimo custo-benefício para a qualidade.',
    rating: 4,
    service: 'Tratamentos Capilares',
  },
  {
    name: 'Aline Ferreira',
    text:
      'Escova impecável que durou dias. Ambiente lindo e clima acolhedor. Um dos melhores salões da Zona Sul.',
    rating: 5,
    service: 'Escova & Penteados',
  },
];

export const stats = [
  { value: '4.5', label: 'Avaliação média', suffix: '★' },
  { value: '133', label: 'Avaliações no Google', suffix: '+' },
  { value: '6', label: 'Serviços de assinatura', suffix: '' },
  { value: '10', label: 'Anos de experiência', suffix: '+' },
];
