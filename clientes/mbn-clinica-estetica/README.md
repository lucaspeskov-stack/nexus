# MBN Clínica Estética — site

Site institucional (one-page) da **MBN Clínica Estética**, na Tijuca, Rio de
Janeiro. Construído com React + Vite + Tailwind CSS.

## Destaques

- **Hero** com a primeira foto oficial e efeito **Ken Burns** (zoom lento 1 → 1.08,
  ~18s em loop), desativado sob `prefers-reduced-motion`.
- **Scroll reveal** leve via `IntersectionObserver` (hook `useReveal`), sem
  bibliotecas de animação, respeitando `prefers-reduced-motion`.
- Seções: Hero, Serviços, Galeria, Avaliações, Sobre, Localização (mapa) e Contato.
- Formulário de contato que abre o **WhatsApp** com a mensagem pré-preenchida.
- Ícones **lucide-react** (SVG, sem emoji), tipografia Playfair Display + Inter.
- Paleta **petróleo/teal + areia/creme + dourado champagne**, sóbria e premium,
  com contraste AA.
- Imagens com fallback gracioso (`SmartImage`) caso os hotlinks do Google expirem.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Observações

- A paleta foi definida manualmente (o ambiente não conseguiu baixar as fotos do
  Google para extração de cores).
- As fotos são hotlinks do Google Maps / Street View e podem expirar — nesse caso
  o `SmartImage` exibe um bloco elegante na paleta do site.
- O horário de funcionamento é uma estimativa (não informado na ficha) — ajuste
  em `src/data/content.js` conforme o funcionamento real.
- A clínica não possui Instagram informado; os canais são WhatsApp, telefone e mapa.
