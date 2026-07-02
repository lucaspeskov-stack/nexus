# Pwl Studio Hair — Site

Site institucional premium do **Salão de Beleza Copacabana · Pwl Studio Hair** (Copacabana, Rio de
Janeiro), gerado pela Forja usando a skill `ui-ux-pro-max`.

## Stack
- React 18 + Vite
- Tailwind CSS 3
- lucide-react (ícones SVG — sem emojis)
- **Sem bibliotecas de animação externas** — scroll reveal com `IntersectionObserver` nativo.

## Design system (ui-ux-pro-max)
- **Paleta nude/greige + bronze** (escolhida como base): `#EFE7DB` (fundo) · `#2B2622` (texto) · `#A97C50`/`#8A6238` (bronze).
- **Tipografia:** Playfair Display (títulos) + Inter (texto).
- **Contraste:** texto carvão sobre bege e texto claro sobre scrim escuro no Hero — mínimo AA.

## Interações
- **Hero — efeito Ken Burns:** a foto principal aplica zoom lento contínuo (escala 1 → 1.08, ~18s,
  loop suave `alternate`). Desativado automaticamente em `prefers-reduced-motion`.
- **Scroll reveal:** cada seção faz fade + slide-up sutil ao entrar na viewport, via
  `IntersectionObserver` (`src/hooks/useReveal.js`). Também respeita `prefers-reduced-motion`
  (conteúdo aparece imediatamente, sem animação).

## Seções
Hero · Serviços · Avaliações · Sobre · Localização (Maps) · Contato + Footer.

## Rodar localmente
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção (dist/)
npm run preview  # pré-visualizar o build
```

## Observações importantes
- **Cores:** a paleta foi **escolhida/aprovada**, não extraída automaticamente da foto — o host da
  imagem do Google (`lh3.googleusercontent.com`) estava inacessível no ambiente de build, então não
  foi possível amostrar os pixels. Ajuste os tokens em `tailwind.config.js` se quiser afinar às
  cores reais do salão.
- **Foto:** usa **a única URL fornecida** (Google Maps, hotlink) no Hero (Ken Burns) e no bloco Sobre.
  Essas URLs podem expirar; há **fallback gracioso** (`SmartImage` / gradiente no Hero). Para máxima
  estabilidade, baixe a foto para `public/` e atualize `src/data/content.js`.
- **Telefone:** o número informado é **fixo** (`+55 21 3497-5156`); por isso a ação principal é
  **ligar** (`tel:`) e o agendamento é concluído pelo **Instagram** (direct). Se houver WhatsApp,
  posso trocar a CTA.
- **Horário de funcionamento:** estimativa (não constava na ficha) — ajuste conforme o real.
