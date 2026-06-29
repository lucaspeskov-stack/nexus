#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const https = require("https");

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const VERCEL_ORG_ID = process.env.VERCEL_ORG_ID;
const GITHUB_REPO = process.env.GITHUB_REPOSITORY;

console.log("🔍 Verificando configuração...");
console.log("VERCEL_TOKEN:", VERCEL_TOKEN ? "✅ Configurado" : "❌ Faltando");
console.log("VERCEL_ORG_ID:", VERCEL_ORG_ID ? "✅ " + VERCEL_ORG_ID : "❌ Faltando");
console.log("GITHUB_REPO:", GITHUB_REPO || "❌ Faltando");

if (!VERCEL_TOKEN || !VERCEL_ORG_ID || !GITHUB_REPO) {
  console.error("❌ Secrets não configurados!");
  process.exit(1);
}

const clientsDir = path.join(process.cwd(), "clientes");
const deployedFile = path.join(process.cwd(), ".vercel-deployed.json");

console.log("\n📁 Diretórios:");
console.log("Clientes:", clientsDir);

if (!fs.existsSync(clientsDir)) {
  console.error("❌ Pasta clientes/ não existe!");
  process.exit(1);
}

let deployed = {};
if (fs.existsSync(deployedFile)) {
  deployed = JSON.parse(fs.readFileSync(deployedFile, "utf-8"));
  console.log("✅ Clientes já deployados:", Object.keys(deployed).length);
}

const clientFolders = fs.readdirSync(clientsDir).filter((name) => {
  const fullPath = path.join(clientsDir, name);
  return fs.statSync(fullPath).isDirectory();
});

console.log("\n📂 Pastas em clientes/:", clientFolders);

const newClients = clientFolders.filter((name) => !deployed[name]);
console.log("🆕 Novos clientes para deploy:", newClients);

if (newClients.length === 0) {
  console.log("✅ Nenhum novo cliente");
  if (!fs.existsSync(deployedFile)) {
    fs.writeFileSync(deployedFile, JSON.stringify(deployed, null, 2));
  }
  process.exit(0);
}

// Função para fazer requisições HTTPS
function makeRequest(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.vercel.com",
      port: 443,
      path: path,
      method: method,
      headers: {
        Authorization: `Bearer ${VERCEL_TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, data: parsed });
        } catch {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });

    req.on("error", reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function deployClients() {
  for (const clientName of newClients) {
    try {
      console.log(`\n🚀 Processando: ${clientName}`);
      const projectSlug = `nexus-${clientName}`;

      // 1. Criar projeto
      console.log(`📦 Criando projeto: ${projectSlug}`);
      const createRes = await makeRequest("POST", "/v1/projects", {
        name: projectSlug,
        gitRepository: {
          type: "github",
          repo: GITHUB_REPO,
        },
        rootDirectory: `clientes/${clientName}`,
      });

      if (createRes.status !== 201) {
        console.error(`❌ Erro ao criar projeto: ${createRes.status}`);
        console.error("Response:", createRes.data);
        continue;
      }

      const projectId = createRes.data.id;
      console.log(`✅ Projeto criado: ${projectId}`);

      // 2. Fazer deploy automático
      console.log(`📤 Disparando deploy...`);
      const deployRes = await makeRequest("POST", "/v1/deployments", {
        projectId: projectId,
        source: "cli",
        gitSource: {
          type: "github",
          repo: GITHUB_REPO,
          ref: "main",
        },
      });

      if (deployRes.status !== 200 && deployRes.status !== 201) {
        console.warn(`⚠️ Deploy retornou status ${deployRes.status}`);
        console.warn("Response:", deployRes.data);
      } else {
        const deploymentUrl = deployRes.data.url || `${projectSlug}.vercel.app`;
        console.log(`✅ Deploy iniciado: https://${deploymentUrl}`);
      }

      // 3. Registrar como deployado
      deployed[clientName] = {
        projectId: projectId,
        projectSlug: projectSlug,
        projectUrl: `${projectSlug}.vercel.app`,
        deployedAt: new Date().toISOString(),
      };

      console.log(`✅ ${clientName} registrado!`);
    } catch (error) {
      console.error(`❌ Erro ao processar ${clientName}:`, error.message);
    }
  }

  // Salvar arquivo
  fs.writeFileSync(deployedFile, JSON.stringify(deployed, null, 2));
  console.log("\n✅ .vercel-deployed.json atualizado");
  console.log("Total deployados:", Object.keys(deployed).length);
}

deployClients().catch((err) => {
  console.error("❌ Erro fatal:", err);
  process.exit(1);
});
