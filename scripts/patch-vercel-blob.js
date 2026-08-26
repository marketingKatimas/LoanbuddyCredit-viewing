import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const targetFile = path.resolve(
  __dirname,
  '../node_modules/@payloadcms/storage-vercel-blob/dist/uploadFile.js'
)

if (fs.existsSync(targetFile)) {
  let content = fs.readFileSync(targetFile, 'utf8')
  if (!content.includes('unsharedBuffer')) {
    content = content.replace(
      'const result = await put(fileKey, buffer, {',
      'const unsharedBuffer = buffer ? Buffer.from(Uint8Array.from(buffer)) : buffer;\n    const result = await put(fileKey, unsharedBuffer, {'
    )
    fs.writeFileSync(targetFile, content, 'utf8')
    console.log('[Patch] Successfully patched @payloadcms/storage-vercel-blob/dist/uploadFile.js for SharedArrayBuffer safety.')
  } else {
    console.log('[Patch] @payloadcms/storage-vercel-blob is already patched.')
  }
}
