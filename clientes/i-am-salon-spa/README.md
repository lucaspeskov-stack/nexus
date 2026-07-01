# I AM Salon & Spa — Site

Site institucional premium do **I AM Salon & Spa** (Ipanema, Rio de Janeiro), gerado pela Forja
usando a skill `ui-ux-pro-max`.

## Stack
- React 18 + Vite
- Tailwind CSS 3
- framer-motion (animações com respeito a `prefers-reduced-motion`)
- lucide-react (ícones SVG — sem emojis)

## Design system (ui-ux-pro-max)
- **Estilo:** Soft UI Evolution (light mode, WCAG AA)
- **Cores:** rosa + lavanda (luxo) — `#EC4899` / `#8B5CF6`
- **Tipografia:** Playfair Display (títulos) + Inter (texto)

## Seções
Hero · Serviços · Avaliações · Sobre · Localização (Maps) · Contato + Footer.

## Rodar localmente
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção (dist/)
npm run preview  # pré-visualizar o build
```

## Observações
- A **foto do Hero/Sobre** usa hotlink da foto oficial do Google Maps do salão. Essas URLs
  (`lh3.googleusercontent.com/gps-cs-s/...`) podem expirar; o componente `SmartImage` mostra um
  fallback elegante caso a imagem não carregue. Para máxima estabilidade, baixe a foto e coloque em
  `public/`, atualizando `src/data/content.js`.
- O **horário de funcionamento** em `src/data/content.js` é uma estimativa (não constava na ficha) —
  ajuste conforme o funcionamento real.
- Dados de contato, endereço, Instagram e Maps são os oficiais do estabelecimento.
