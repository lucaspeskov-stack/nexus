#!/usr/bin/env node
'use strict';

/**
 * auto-deploy-to-vercel.js
 *
 * Detecta quais pastas clientes/<slug> mudaram no último push e dispara o
 * deploy de cada uma chamando deploy-to-vercel.js <slug>.
 *
 * Pensado para rodar no GitHub Actions (onde o Vercel é acessível). Pode rodar
 * localmente também, desde que VERCEL_TOKEN esteja no ambiente.
 *
 * Faixa de comparação (em ordem de preferência):
 *   1. GITHUB_EVENT_BEFORE..GITHUB_EVENT_AFTER  (passados pelo workflow)
 *   2. HEAD~1..HEAD
 *   3. fallback: todas as pastas em clientes/
 *
 * SEGURANÇA: o token é lido de VERCEL_TOKEN (nunca hardcoded).
 */

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CLIENTES_DIR = path.resolve(__dirname, 'clientes');
const ZERO = '0000000000000000000000000000000000000000';

function git(args) {
  return execFileSync('git', args, { cwd: __dirname, encoding: 'utf8' }).trim();
}

function listAllSlugs() {
  if (!fs.existsSync(CLIENTES_DIR)) return [];
  return fs
    .readdirSync(CLIENTES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

/** Descobre os slugs (clientes/<slug>) afetados na faixa de commits. */
function changedSlugs() {
  const before = process.env.GITHUB_EVENT_BEFORE;
  const after = process.env.GITHUB_EVENT_AFTER || 'HEAD';

  let diffRange = null;
  if (before && before !== ZERO) {
    diffRange = [`${before}..${after}`];
  } else {
    // tenta HEAD~1..HEAD
    try {
      git(['rev-parse', 'HEAD~1']);
      diffRange = ['HEAD~1..HEAD'];
    } catch {
      diffRange = null;
    }
  }

  if (!diffRange) {
    console.log('⚠️  Sem faixa de diff confiável — considerando todos os clientes.');
    return listAllSlugs();
  }

  let files = [];
  try {
    files = git(['diff', '--name-only', ...diffRange]).split('\n').filter(Boolean);
  } catch (err) {
    console.log(`⚠️  git diff falhou (${err.message}) — considerando todos os clientes.`);
    return listAllSlugs();
  }

  const slugs = new Set();
  for (const f of files) {
    const m = f.match(/^clientes\/([^/]+)\//);
    if (m) slugs.add(m[1]);
  }
  return [...slugs];
}

function main() {
  if (!process.env.VERCEL_TOKEN) {
    console.error('\n❌ VERCEL_TOKEN ausente no ambiente. Defina o secret/variável antes de rodar.\n');
    process.exit(1);
  }

  // só faz deploy de pastas que ainda existem (ignora clientes removidos)
  const slugs = changedSlugs().filter((slug) => {
    const dir = path.join(CLIENTES_DIR, slug);
    return fs.existsSync(dir) && fs.statSync(dir).isDirectory();
  });

  if (slugs.length === 0) {
    console.log('\nℹ️  Nenhum cliente alterado para fazer deploy. Nada a fazer.\n');
    return;
  }

  console.log(`\n🗂️  Clientes para deploy: ${slugs.join(', ')}\n`);

  const results = [];
  for (const slug of slugs) {
    console.log(`\n=== Deploy: ${slug} ===`);
    try {
      execFileSync('node', [path.join(__dirname, 'deploy-to-vercel.js'), slug], {
        cwd: __dirname,
        stdio: 'inherit',
        env: process.env,
      });
      results.push({ slug, ok: true, url: `https://forja-${slug}.vercel.app` });
    } catch {
      results.push({ slug, ok: false });
    }
  }

  console.log('\n================ RESUMO ================');
  for (const r of results) {
    console.log(r.ok ? `✅ ${r.slug} → ${r.url}` : `❌ ${r.slug} (falhou)`);
  }
  console.log('=======================================\n');

  if (results.some((r) => !r.ok)) process.exit(1);
}

main();
