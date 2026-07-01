# BISTRÔ HAIR — Site

Site institucional premium do **BISTRÔ HAIR** (Copacabana, Rio de Janeiro), gerado pela Forja
usando a skill `ui-ux-pro-max`.

## Stack
- React 18 + Vite
- Tailwind CSS 3
- framer-motion (animações com respeito a `prefers-reduced-motion`)
- lucide-react (ícones SVG — sem emojis)

## Design system (ui-ux-pro-max)
- **Tema:** sofisticado escuro «bistrô» — espresso/carvão + dourado quente (editorial, premium)
- **Cores:** `#161110` (fundo) · `#C9A24B` (dourado) · `#F4ECDD` (creme)
- **Tipografia:** Playfair Display (títulos) + Inter (texto)

## Seções
Hero · Serviços · Galeria (5 imagens) · Avaliações · Sobre · Localização (Maps) · Contato + Footer.

## Rodar localmente
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção (dist/)
npm run preview  # pré-visualizar o build
```

## Sobre as imagens
Conforme combinado, a galeria usa **5 imagens**:
- **1 foto oficial do Google Maps** do estabelecimento (hotlink em `src/data/content.js`).
- **4 imagens de stock curado** (Unsplash), ilustrativas.

Essas URLs podem expirar; o componente `SmartImage` mostra um fallback elegante caso alguma não
carregue. Para máxima estabilidade e autenticidade, **substitua pelas fotos reais do salão** em
`public/` e atualize o array `gallery` em `src/data/content.js`.

## Observações
- O **horário de funcionamento** em `src/data/content.js` é uma estimativa (não constava na ficha) —
  ajuste conforme o funcionamento real.
- O link social informado é um **Linktree** (`linktr.ee/bistrohair`), usado nos botões de "Links".
- Dados de contato, endereço e Maps são os oficiais do estabelecimento.
