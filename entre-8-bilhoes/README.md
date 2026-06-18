# Entre 8 Bilhões 🌎❤️🪐

Uma experiência interativa romântica em formato de storytelling cinematográfico —
tema espacial (Interestelar) com toques dourados de Disney/Rapunzel.
Feito em **React + Vite + Tailwind CSS + Framer Motion**, mobile-first e pronto
para publicar na **Vercel**.

## ✨ Cenas

1. **Introdução** — "Existem mais de 8 bilhões de pessoas no planeta..."
2. **Encontro improvável** — a viagem espaço → Terra → Chile → Rio → Réveillon
3. **Constelação** — Saturno, Virgem + Capricórnio
4. **Tempo** — contador ao vivo desde 01/01/2026
5. **10 motivos** — por que eu te amo
6. **Sonhos** — morar juntos, casar, viajar o mundo...
7. **Quiz** — "Onde foi nosso primeiro encontro?"
8. **Carta final** — uma carta emocional completa
9. **Final cinematográfico** — fotos + "Para o amor da minha vida"

## 🚀 Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (geralmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## 🖼️ Trocar as fotos

As imagens ficam em `public/photos/`:

| Arquivo                 | Onde aparece                |
| ----------------------- | --------------------------- |
| `foto-casal.jpg`        | Final — "O começo"          |
| `logo-madeinugc.png`    | Final — "Os sonhos"         |
| `foto-gatos.jpg`        | Final — "O futuro"          |

Já existem **placeholders** prontos para o site rodar de cara. Basta substituir
pelos arquivos reais mantendo os mesmos nomes. (Para regerar os placeholders:
`node scripts/make-placeholders.mjs`.)

## ✏️ Editar textos, datas e listas

Tudo está centralizado em **`src/data/content.js`** — textos, a data do contador,
os 10 motivos, os sonhos, o quiz e a carta. Não é preciso mexer nos componentes.

## ☁️ Publicar na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Em [vercel.com](https://vercel.com), clique em **Add New → Project** e importe o repositório.
3. A Vercel detecta o Vite automaticamente (build `npm run build`, output `dist`).
4. Clique em **Deploy**. Pronto! 💛

## 🗂️ Estrutura

```
public/
  photos/            fotos do casal, gatos e logo
  favicon.svg
src/
  data/content.js    ← todo o conteúdo editável
  hooks/             contador de tempo
  components/        StarField, Scene, GoldButton, Photo, Progress
  sections/          uma cena por arquivo
  App.jsx            orquestra a navegação
  main.jsx
  index.css
```

---

Feito com amor. _Projeto iniciado no planeta Terra. Destino: uma vida juntos._ 🌎❤️🪐
