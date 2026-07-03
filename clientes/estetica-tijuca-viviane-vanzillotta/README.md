# Estética Tijuca — Viviane Vanzillotta — Site

Site institucional premium da **Estética Tijuca — Viviane Vanzillotta** (Tijuca, Rio de Janeiro),
gerado pela Forja usando a skill `ui-ux-pro-max`.

## Stack
- React 18 + Vite
- Tailwind CSS 3
- lucide-react (ícones SVG — sem emojis)
- **Sem bibliotecas de animação externas** — scroll reveal com `IntersectionObserver` nativo.

## Design system (ui-ux-pro-max)
- **Paleta Sálvia/eucalipto + off-white + bronze** (escolhida como base): `#F4F3EC` (off-white) · `#2A2E27` (texto) · `#566A51` (sálvia) · `#A98A5E` (bronze).
- **Tipografia:** Playfair Display (títulos) + Inter (texto).
- **Contraste:** texto verde-carvão sobre off-white e texto claro sobre scrim escuro no Hero — mínimo AA.

## Interações
- **Hero — efeito Ken Burns:** a foto 1 aplica zoom lento contínuo (escala 1 → 1.08, ~18s, loop
  suave `alternate`). Desativado em `prefers-reduced-motion`.
- **Scroll reveal:** fade + slide-up sutil ao entrar na viewport, via `IntersectionObserver`
  (`src/hooks/useReveal.js`). Respeita `prefers-reduced-motion`.

## Seções
Hero · Serviços (estética facial/corporal) · Galeria (5 fotos) · Avaliações · Sobre · Localização
(Maps) · Contato + Footer.

## Rodar localmente
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção (dist/)
npm run preview  # pré-visualizar o build
```

## Observações importantes
- **Cores:** a paleta foi **escolhida** (Sálvia/eucalipto), não extraída automaticamente das fotos —
  o host das imagens do Google (`lh3.googleusercontent.com` / `streetviewpixels`) estava inacessível
  no ambiente de build, então não foi possível amostrar os pixels. Ajuste os tokens em
  `tailwind.config.js` para afinar às cores reais.
- **Fotos:** o site usa **as 5 URLs fornecidas** (Google Maps + Street View, hotlink) na Galeria, no
  Hero (Ken Burns) e no bloco Sobre. Essas URLs podem expirar; há **fallback gracioso** (`SmartImage`
  / gradiente no Hero). Para máxima estabilidade, baixe as fotos para `public/` e atualize
  `src/data/content.js`.
- **Contato:** o número informado é um **WhatsApp** (`+55 21 99170-2223`); a CTA principal abre o
  WhatsApp com mensagem pré-preenchida. O link do **Instagram** é um link de convite fornecido no
  briefing — recomendo trocar pelo @ oficial do perfil quando disponível.
- **Horário de funcionamento:** estimativa (não constava na ficha) — ajuste conforme o real.
