// Standalone RAG build only; no environment files or external build requests.
// Retain the historical filename so existing callers can use the same entry.
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createRequire } from 'node:module'

const repository = dirname(dirname(fileURLToPath(import.meta.url)))
const frontend = join(repository, 'frontend')
const require = createRequire(join(frontend, 'package.json'))
const viteDirectory = dirname(require.resolve('vite/package.json'))
const { build } = await import(pathToFileURL(join(viteDirectory, 'dist/node/index.js')))
for (const name of Object.keys(process.env)) if (name.startsWith('VITE_')) delete process.env[name]
globalThis.fetch = () => { throw Error('External requests blocked during build') }
await build({
  root: frontend, configFile: join(frontend, 'vite.rag.config.js'), envDir: false,
  build: { outDir: join(frontend, 'dist'), emptyOutDir: false },
})
console.log('Standalone RAG output: frontend/dist (local verification; not deployed)')
