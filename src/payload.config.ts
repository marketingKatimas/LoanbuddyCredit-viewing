import path from 'path'
import { fileURLToPath } from 'url'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { BlogPosts } from './collections/BlogPosts'
import { Footer } from './globals/Footer'

import { seedDefaultPages } from './seed/seedPages'
import { seedBlogPosts } from './seed/seedBlogPosts'
import { seedFooter } from './seed/seedFooter'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: [
      {
        label: 'Bahasa Malaysia',
        code: 'ms',
      },
      {
        label: 'English',
        code: 'en',
      },
    ],
    defaultLocale: 'ms',
    fallback: true,
  },
  collections: [
    Users,
    Media,
    Pages,
    BlogPosts,
  ],
  globals: [
    Footer,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || process.env.MONGODB_URI || '',
  }),
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  onInit: async (payload) => {
    try {
      const existing = await payload.count({ collection: 'pages' })
      if (existing.totalDocs === 0) {
        console.log('[Seed] Seeding initial database content...')
        await seedDefaultPages(payload)
        await seedBlogPosts(payload)
        await seedFooter(payload)
      }
    } catch (err) {
      console.error('[Init] Error during database initialization:', err)
    }
  },
})
