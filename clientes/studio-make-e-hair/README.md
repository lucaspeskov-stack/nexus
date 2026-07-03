# Studio Make e Hair — Site

Site institucional premium do **Studio Make e Hair** (Centro, Rio de Janeiro), gerado pela Forja
usando a skill `ui-ux-pro-max`.

## Stack
- React 18 + Vite
- Tailwind CSS 3
- lucide-react (ícones SVG — sem emojis)
- **Sem bibliotecas de animação externas** — scroll reveal com `IntersectionObserver` nativo.

## Design system (ui-ux-pro-max)
- **Paleta Bordô & rosé** (escolhida como base): `#F7EFEA` (creme rosado) · `#2A1F22` (texto) · `#7E2A3B` (bordô) · `#C98B7A` (rosé).
- **Tipografia:** Playfair Display (títulos) + Inter (texto).
- **Contraste:** texto quase-preto sobre creme e texto claro sobre scrim escuro no Hero — mínimo AA.

## Interações
- **Hero — efeito Ken Burns:** a foto 1 aplica zoom lento contínuo (escala 1 → 1.08, ~18s, loop
  suave `alternate`). Desativado em `prefers-reduced-motion`.
- **Scroll reveal:** fade + slide-up sutil ao entrar na viewport, via `IntersectionObserver`
  (`src/hooks/useReveal.js`). Respeita `prefers-reduced-motion`.

## Seções
Hero · Serviços · Galeria (5 fotos) · Avaliações · Sobre · Localização (Maps) · Contato + Footer.

## Rodar localmente
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção (dist/)
npm run preview  # pré-visualizar o build
```

## Observações importantes
- **Cores:** a paleta foi **escolhida/aprovada**, não extraída automaticamente das fotos — o host das
  imagens do Google (`lh3.googleusercontent.com`) estava inacessível no ambiente de build, então não
  foi possível amostrar os pixels. Ajuste os tokens em `tailwind.config.js` para afinar às cores reais.
- **Fotos:** o site usa **as 5 URLs fornecidas** (Google Maps, hotlink) na Galeria, no Hero (Ken Burns)
  e no bloco Sobre. Essas URLs podem expirar; há **fallback gracioso** (`SmartImage` / gradiente no
  Hero). Para máxima estabilidade, baixe as fotos para `public/` e atualize `src/data/content.js`.
- **Contato:** o número informado é um **WhatsApp** (`+55 21 99098-5237`); a CTA principal abre o
  WhatsApp com mensagem pré-preenchida. O link social fornecido é do **Facebook** (o campo
  "Instagram" do briefing era, na verdade, um link do Facebook).
- **Horário de funcionamento:** estimativa (não constava na ficha) — ajuste conforme o real.
