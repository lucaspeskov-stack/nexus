#!/usr/bin/env node
'use strict';

/**
 * deploy-to-vercel.js
 *
 * Faz o deploy de um site da pasta clientes/<slug> no Vercel, criando/vinculando
 * um projeto chamado "forja-<slug>" (framework Vite) e publicando em produção.
 *
 * Uso:
 *   VERCEL_TOKEN=xxxxxxxx node deploy-to-vercel.js <slug>
 *   ex: VERCEL_TOKEN=xxxxxxxx node deploy-to-vercel.js i-am-salon-spa
 *
 * Saída (última linha do stdout): https://forja-<slug>.vercel.app
 *
 * SEGURANÇA: o token NUNCA é gravado neste arquivo. Ele é lido de
 * process.env.VERCEL_TOKEN para não vazar no histórico do git. Exporte o token
 * no ambiente (ou use um .env fora do versionamento) antes de rodar.
 */

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function fail(msg, code = 1) {
  console.error(`\n❌ ${msg}\n`);
  process.exit(code);
}

// ---- 1) argumentos e validações ------------------------------------------
const slug = (process.argv[2] || '').trim();
if (!slug) {
  fail(
    'Informe o slug do cliente.\n' +
    '   Uso: VERCEL_TOKEN=xxxx node deploy-to-vercel.js <slug>\n' +
    '   ex:  VERCEL_TOKEN=xxxx node deploy-to-vercel.js i-am-salon-spa'
  );
}
if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
  fail(`Slug inválido: "${slug}". Use apenas minúsculas, números e hífens.`);
}

const token = process.env.VERCEL_TOKEN;
if (!token) {
  fail(
    'Token do Vercel ausente. Defina a variável de ambiente VERCEL_TOKEN.\n' +
    `   ex: VERCEL_TOKEN=seu_token node deploy-to-vercel.js ${slug}\n` +
    '   (o token é lido do ambiente de propósito — não deve ser commitado no script)'
  );
}

const projectName = `forja-${slug}`;
const projectDir = path.resolve(__dirname, 'clientes', slug);

if (!fs.existsSync(projectDir) || !fs.statSync(projectDir).isDirectory()) {
  fail(
    `Pasta do site não encontrada: clientes/${slug}\n` +
    `   Gere o site em clientes/${slug}/ antes de fazer o deploy.`
  );
}

// ---- 2) helper para chamar a CLI do Vercel -------------------------------
function vercel(args, { capture = false } = {}) {
  return execFileSync('vercel', [...args, '--token', token, '--yes'], {
    cwd: projectDir,
    encoding: 'utf8',
    // progresso vai para stderr; a URL do deploy vai para stdout
    stdio: capture ? ['ignore', 'pipe', 'inherit'] : 'inherit',
    env: process.env,
  });
}

// ---- 3) execução ----------------------------------------------------------
console.log(`\n🚀 Deploy "${slug}" → projeto Vercel "${projectName}"`);
console.log(`   Pasta:     clientes/${slug}`);
console.log(`   Framework: vite (definido em clientes/${slug}/vercel.json)\n`);

// 3a) cria/vincula o projeto com o nome forja-<slug>
console.log('🔗 Vinculando/criando projeto no Vercel...');
try {
  vercel(['link', '--project', projectName]);
} catch (err) {
  fail(
    `Falha ao vincular/criar o projeto "${projectName}".\n` +
    '   Verifique o token (VERCEL_TOKEN) e o acesso de rede ao Vercel.\n' +
    `   ${err.message}`
  );
}

// 3b) deploy de produção, capturando a URL do deploy
console.log('\n📦 Fazendo deploy de produção...');
let deployUrl = '';
try {
  const out = vercel(['deploy', '--prod'], { capture: true }) || '';
  deployUrl = out.split('\n').map((l) => l.trim()).filter(Boolean).pop() || '';
} catch (err) {
  fail(`Falha no deploy de produção.\n   ${err.message}`);
}

const prodUrl = `https://${projectName}.vercel.app`;

console.log('\n✅ Deploy concluído!');
if (deployUrl) console.log(`   Deploy:  ${deployUrl}`);
console.log(`   Online:  ${prodUrl}\n`);

// última linha do stdout = URL canônica de produção (para automação)
console.log(prodUrl);
