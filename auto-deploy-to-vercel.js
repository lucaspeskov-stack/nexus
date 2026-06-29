#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const https = require("https");

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const VERCEL_ORG_ID = process.env.VERCEL_ORG_ID;
const GITHUB_REPO = process.env.GITHUB_REPOSITORY;

console.log("🔍 Debug Info:");
console.log("VERCEL_TOKEN:", VERCEL_TOKEN ? "✅ Configurado" : "❌ Faltando");
console.log("VERCEL_ORG_ID:", VERCEL_ORG_ID ? "✅ " + VERCEL_ORG_ID : "❌ Faltando");
console.log("GITHUB_REPO:", GITHUB_REPO || "❌ Faltando");

if (!VERCEL_TOKEN || !VERCEL_ORG_ID) {
  console.error("❌ Secrets não configurados!");
  process.exit(1);
}

const clientsDir = path.join(process.cwd(), "clientes");
const deployedFile = path.join(process.cwd(), ".vercel-deployed.json");

console.log("\n📁 Diretórios:");
console.log("Working dir:", process.cwd());
console.log("Clientes dir:", clientsDir);
console.log("Deployed file:", deployedFile);

// Verifica se pasta clientes existe
if (!fs.existsSync(clientsDir)) {
  console.error("❌ Pasta clientes/ não existe!");
  process.exit(1);
}

let deployed = {};
if (fs.existsSync(deployedFile)) {
  deployed = JSON.parse(fs.readFileSync(deployedFile, "utf-8"));
  console.log("✅ Arquivo deployed existente:", Object.keys(deployed));
}

const clientFolders = fs.readdirSync(clientsDir).filter((name) => {
  return fs.statSync(path.join(clientsDir, name)).isDirectory();
});

console.log("\n📂 Pastas encontradas:", clientFolders);

const newClients = clientFolders.filter((name) => !deployed[name]);
console.log("🆕 Novos clientes:", newClients);

if (newClients.length === 0) {
  console.log("✅ Nenhum novo cliente");
  // Cria arquivo vazio se não existir
  if (!fs.existsSync(deployedFile)) {
    fs.writeFileSync(deployedFile, JSON.stringify(deployed, null, 2));
  }
  process.exit(0);
}

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

    console.log(`\n📡 Request: ${method} ${path}`);
    
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        console.log(`📡 Response status: ${res.statusCode}`);
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, data: parsed });
        } catch {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });

    req.on("error", (err) => {
      console.error("❌ Request error:", err.message);
      reject(err);
    });

    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function deployClients() {
  for (const clientName of newClients) {
    try {
      console.log(`\n🚀 Processando: ${clientName}`);
      const projectSlug = `nexus-${clientName}`;

      const createRes = await makeRequest("POST", "/v1/projects", {
        name: projectSlug,
        gitRepository: {
          type: "github",
          repo: GITHUB_REPO,
        },
        rootDirectory: `clientes/${clientName}`,
      });

      console.log("Response data:", createRes.data);

      if (createRes.status !== 201) {
        console.error(
          `❌ Erro ao criar ${clientName}: Status ${createRes.status}`,
          createRes.data
        );
        continue;
      }

      const projectId = createRes.data.id;
      const projectUrl = createRes.data.url;
      console.log(`✅ Projeto criado: https://${projectUrl}`);

      deployed[clientName] = {
        projectId,
        projectUrl,
        deployedAt: new Date().toISOString(),
      };
    } catch (error) {
      console.error(`❌ Erro: ${error.message}`);
    }
  }

  // Sempre salva o arquivo
  fs.writeFileSync(deployedFile, JSON.stringify(deployed, null, 2));
  console.log("\n✅ Arquivo atualizado: .vercel-deployed.json");
}

deployClients().catch((err) => {
  console.error("❌ Erro fatal:", err);
  process.exit(1);
});
