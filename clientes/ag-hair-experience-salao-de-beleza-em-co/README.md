# AG Hair Experience — Site

Site institucional premium do **AG Hair Experience — Salão de Beleza em Copacabana (Cabelos, Unhas e
Estética)**, Rio de Janeiro, gerado pela Forja usando a skill `ui-ux-pro-max`.

## Stack
- React 18 + Vite
- Tailwind CSS 3
- lucide-react (ícones SVG — sem emojis)
- **Sem bibliotecas de animação externas** — scroll reveal com `IntersectionObserver` nativo.

## Design system (ui-ux-pro-max)
- **Paleta Ameixa/plum + champanhe + dourado** (escolhida como base): `#F3ECE2` (champanhe) · `#2B1F28` (texto) · `#4A2C43` (ameixa) · `#C29B5A` (dourado).
- **Tipografia:** Playfair Display (títulos) + Inter (texto).
- **Contraste:** texto ameixa-escuro sobre champanhe e texto claro sobre scrim escuro no Hero — mínimo AA.

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
- **Cores:** a paleta foi **escolhida** (Ameixa/plum + champanhe), não extraída automaticamente das
  fotos — o host das imagens do Google (`lh3.googleusercontent.com`) estava inacessível no ambiente
  de build, então não foi possível amostrar os pixels. Ajuste os tokens em `tailwind.config.js` para
  afinar às cores reais.
- **Fotos:** o site usa **as 5 URLs fornecidas** (Google Maps, hotlink) na Galeria, no Hero (Ken Burns)
  e no bloco Sobre. Essas URLs podem expirar; há **fallback gracioso** (`SmartImage` / gradiente no
  Hero). Para máxima estabilidade, baixe as fotos para `public/` e atualize `src/data/content.js`.
- **Contato:** o número informado é um **WhatsApp** (`+55 21 99612-5470`); a CTA principal abre o
  WhatsApp com mensagem pré-preenchida. Instagram oficial: `@aghairexperience`.
- **Horário de funcionamento:** estimativa (não constava na ficha) — ajuste conforme o real.
