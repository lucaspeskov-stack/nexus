/**
 * ============================================================
 *  ENTRE 8 BILHÕES — Conteúdo do projeto
 * ============================================================
 *  Edite tudo por aqui: textos, datas, fotos e listas.
 *  Você não precisa mexer no código dos componentes. 💛
 * ============================================================
 */

// Caminhos das imagens (coloque os arquivos em /public/photos)
export const PHOTOS = {
  casal: '/photos/foto-casal.jpg',
  gatos: '/photos/foto-gatos.jpg',
  logo: '/photos/logo-madeinugc.png',
}

// 1. Introdução
export const intro = {
  lines: ['Existem mais de', '8 bilhões', 'de pessoas no planeta...'],
  button: 'Começar nossa história',
}

// 2. Encontro Improvável
export const encounter = {
  // Cada "estação" da viagem cinematográfica espaço → réveillon
  journey: ['Espaço', 'Terra', 'Chile', 'Rio', 'Réveillon'],
  poem: [
    'Em uma cidade com milhões de pessoas...',
    'Em uma noite de Réveillon...',
    'Entre 8 bilhões de pessoas...',
    'Uma chilena...',
    'Um carioca...',
    'Dois países...',
    'Um encontro.',
  ],
  chance: {
    pre: 'A chance disso acontecer era',
    value: '0.000000001%',
    post: 'Mas aconteceu.',
  },
}

// 3. Constelação
export const constellation = {
  planet: 'Saturno',
  signs: ['Virgem', 'Capricórnio'],
  quote:
    'Algumas pessoas entram na nossa órbita e nunca mais saem dela.',
}

// 4. Tempo — contador
export const time = {
  // Início da nossa contagem (ano, mês [0-11], dia)
  since: new Date(2026, 0, 1, 0, 0, 0),
  label: 'Desde 01 de Janeiro de 2026',
  title: 'O nosso tempo juntos',
}

// 5. Dez motivos
export const reasons = {
  title: '10 motivos',
  subtitle: 'por que eu te amo',
  items: [
    { emoji: '🐾', text: 'Seu amor enorme pelos animais' },
    { emoji: '👑', text: 'Sua alma de princesa — a minha Rapunzel' },
    { emoji: '✈️', text: 'A vontade de ver o mundo ao seu lado' },
    { emoji: '🎬', text: 'A força e a coragem com a MadeinUGC' },
    { emoji: '🐶', text: 'O Slinky e o jeito que você cuida dele' },
    { emoji: '🐱', text: 'Perseo, Milo e Alma — nossa família de gatos' },
    { emoji: '🌅', text: 'O seu sorriso que ilumina qualquer dia' },
    { emoji: '💬', text: 'As conversas que atravessam fusos e fronteiras' },
    { emoji: '🔥', text: 'A sua garra para correr atrás dos sonhos' },
    { emoji: '❤️', text: 'E por ser, simplesmente, você' },
  ],
}

// 6. Sonhos
export const dreams = {
  title: 'Os nossos sonhos',
  items: [
    { emoji: '🏠', text: 'Morar juntos' },
    { emoji: '💍', text: 'Casar' },
    { emoji: '👶', text: 'Ter filhos' },
    { emoji: '🌍', text: 'Viajar o mundo' },
    { emoji: '🚀', text: 'Ver a empresa crescer' },
    { emoji: '💰', text: 'Ser milionários' },
    { emoji: '🤝', text: 'Ajudar a humanidade' },
    { emoji: '🐾', text: 'Uma família cheia de pets' },
  ],
}

// 7. Quiz
export const quiz = {
  question: 'Onde foi o nosso primeiro encontro?',
  options: [
    'Em uma festa em Santiago',
    'Réveillon no Rio',
    'Numa viagem pela Europa',
    'Em uma cafeteria',
  ],
  correctIndex: 1,
  correctMessage: 'Réveillon no Rio. 🎆 Onde tudo começou.',
  wrongMessage: 'Quase! Pensa na virada do ano... 🎆',
}

// 8. Carta final
export const letter = {
  title: 'Uma carta para você',
  // Cada item é um parágrafo da carta.
  paragraphs: [
    'Meu amor,',
    'Quando penso que existem mais de 8 bilhões de pessoas no mundo, e que entre todas elas eu encontrei justamente você, eu percebo que algumas coisas são grandes demais para serem coincidência.',
    'Foi numa noite de Réveillon, no Rio, com o céu explodindo em fogos, que o universo decidiu cruzar os nossos caminhos. Uma chilena e um carioca. Dois países, dois sotaques, uma mesma vontade de ficar.',
    'A distância entre o Brasil e o Chile nunca foi páreo para o que a gente sente. Cada mensagem, cada chamada, cada saudade virou prova de que vale a pena. Você me ensinou que amar é também esperar, torcer e construir — mesmo de longe.',
    'Te ver lutando pela MadeinUGC, sonhando alto e transformando ideia em realidade, me faz ter ainda mais certeza: eu quero estar do seu lado em cada conquista, em cada gato adotado, em cada viagem e em cada plano maluco que a gente inventar.',
    'O nosso futuro é a parte que mais me anima. Morar juntos, casar, crescer, viajar o mundo e construir uma família cheia de amor (e de pets). Eu escolho você. Hoje, amanhã e em todos os anos que vierem.',
    'Obrigado por entrar na minha órbita e nunca mais sair.',
    'Com todo o meu amor,',
    'Lucas ❤️',
  ],
}

// 9. Final cinematográfico
export const finale = {
  // Cada frame mostra uma imagem com uma legenda
  frames: [
    { image: PHOTOS.casal, caption: 'O começo' },
    { image: PHOTOS.logo, caption: 'Os sonhos', contain: true },
    { image: PHOTOS.gatos, caption: 'O futuro' },
  ],
  closing: [
    'Para o amor da minha vida ❤️',
    'Feliz Dia dos Namorados',
    'Eu te amo — Lucas',
  ],
}

// Rodapé
export const footer = {
  lines: ['Projeto iniciado no planeta Terra.', 'Destino: uma vida juntos. 🌎❤️🪐'],
}

// Ordem das cenas (usada pela navegação)
export const SCENES = [
  'intro',
  'encounter',
  'constellation',
  'time',
  'reasons',
  'dreams',
  'quiz',
  'letter',
  'finale',
]
