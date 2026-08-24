import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Media } from './src/collections/Media'
import { Pages } from './src/collections/Pages'
import { BlogPosts } from './src/collections/BlogPosts'
import { Footer } from './src/globals/Footer'

import { seedDefaultPages } from './src/seed/seedPages'
import { seedBlogPosts } from './src/seed/seedBlogPosts'
import { seedFooter } from './src/seed/seedFooter'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  onInit: async (payload) => {
    await seedDefaultPages(payload)
    await seedBlogPosts(payload)
    await seedFooter(payload)
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
    Media,
    Pages,
    BlogPosts,
  ],
  globals: [
    Footer,
  ],
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
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  editor: lexicalEditor({}),
})
