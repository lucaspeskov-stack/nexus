# Instruções do repositório `nexus`

Diretrizes permanentes definidas pelo dono do repositório. Toda sessão do Claude
Code deve segui-las.

## Criação de sites

1. **Sempre usar as skills da pasta `skills/`** deste repositório ao criar ou
   modificar sites. As skills disponíveis são:
   - `banner-design` — banners para social/ads/web/print
   - `brand` — voz de marca, identidade visual, mensagens
   - `design` — skill abrangente (logo, identidade, CIP, slides, banners, ícones, social)
   - `design-system` — tokens de design, specs de componentes, slides
   - `frontend-design` — direção visual para UI nova ou redesenho
   - `slides` — apresentações HTML estratégicas (Chart.js)
   - `ui-styling` — UI com shadcn/ui + Tailwind, dark mode, layouts acessíveis
   - `ui-ux-pro-max` — inteligência de UI/UX (estilos, paletas, fontes, UX, charts)

   Preferir essas skills internas em vez de soluções genéricas.

2. **Local do site:** cada site novo vai em `clientes/<nome-do-site>/`
   (ex.: `clientes/cliente-8/`, `clientes/atelier-da-beleza/`). Um diretório por
   cliente/site, direto sob `clientes/` — sem subpastas de categoria.

## Git — commit e push

3. **Commitar e dar push direto na `main`.** O dono autorizou explicitamente
   commits e pushes na `main` para o fluxo de criação de sites — não é preciso
   abrir branch nem PR para isso.

4. **`Reserva`** é a branch de backup: deve espelhar a `main`. Após consolidar
   trabalho na `main`, atualizar a `Reserva` para o mesmo commit.

5. As únicas branches do repositório devem ser **`main`** e **`Reserva`**.

## Convenções

- Mensagens de commit em português, no estilo `feat: site <nome> gerado pela Forja`
  para sites novos.
- Commits devem ser assinados e com committer `noreply@anthropic.com`.
- `node_modules/` e `dist/` ficam fora do versionamento (ver `.gitignore`).
