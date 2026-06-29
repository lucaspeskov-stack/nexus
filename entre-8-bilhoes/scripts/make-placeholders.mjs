/**
 * Gera imagens de placeholder em /public/photos para o site rodar
 * imediatamente, antes de você adicionar as fotos reais.
 * Basta substituir os arquivos por suas próprias fotos (mesmos nomes).
 *
 *   node scripts/make-placeholders.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { deflateSync } from 'node:zlib'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(__dirname, '../public/photos')
mkdirSync(outDir, { recursive: true })

function crc32(buf) {
  let c = ~0
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i]
    for (let k = 0; k < 8; k++) c = c & 1 ? (c >>> 1) ^ 0xedb88320 : c >>> 1
  }
  return ~c >>> 0
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii')
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])))
  return Buffer.concat([len, typeBuf, data, crc])
}

// Cria um PNG com gradiente vertical entre duas cores RGB.
function makePNG(w, h, top, bottom) {
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(w, 0)
  ihdr.writeUInt32BE(h, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 2 // color type: RGB
  const raw = Buffer.alloc((w * 3 + 1) * h)
  let p = 0
  for (let y = 0; y < h; y++) {
    raw[p++] = 0 // filter byte
    const t = y / (h - 1)
    const r = Math.round(top[0] + (bottom[0] - top[0]) * t)
    const g = Math.round(top[1] + (bottom[1] - top[1]) * t)
    const b = Math.round(top[2] + (bottom[2] - top[2]) * t)
    for (let x = 0; x < w; x++) {
      raw[p++] = r
      raw[p++] = g
      raw[p++] = b
    }
  }
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

const files = [
  { name: 'foto-casal.jpg', top: [40, 30, 80], bottom: [15, 18, 45] },
  { name: 'foto-gatos.jpg', top: [70, 45, 40], bottom: [20, 18, 40] },
  { name: 'logo-madeinugc.png', top: [20, 28, 60], bottom: [10, 12, 30] },
]

for (const f of files) {
  const png = makePNG(640, 640, f.top, f.bottom)
  writeFileSync(resolve(outDir, f.name), png)
  console.log('Criado placeholder:', f.name)
}
