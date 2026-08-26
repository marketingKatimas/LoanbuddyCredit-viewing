import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { seedDefaultPages } from './seedPages'
import { seedBlogPosts } from './seedBlogPosts'
import { seedFooter } from './seedFooter'

async function run() {
  try {
    console.log('[Direct Seed] Starting dual-language (MS & EN) database seed...')
    const payload = await getPayload({ config: configPromise })
    await seedDefaultPages(payload)
    await seedBlogPosts(payload)
    await seedFooter(payload)
    console.log('[Direct Seed] Successfully seeded Pages, Blog Posts, and Footer in both MS and EN!')
    process.exit(0)
  } catch (err) {
    console.error('[Direct Seed] Failed:', err)
    process.exit(1)
  }
}

run()
