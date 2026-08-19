import { getPayload } from 'payload'
import config from '../payload.config'
import { seedDefaultPages } from '../src/seed/seedPages'

async function run() {
  try {
    const payload = await getPayload({ config })
    await seedDefaultPages(payload)
    const home = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'home' } },
    })
    console.log('Home sections count:', home.docs[0].sections?.length)
    console.log(
      'Home sections titles:',
      home.docs[0].sections?.map((s: any) => s.sectionTitle)
    )
    process.exit(0)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

run()
