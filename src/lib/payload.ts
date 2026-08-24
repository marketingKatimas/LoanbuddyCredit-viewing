import { getPayload } from 'payload'
import configPromise from '../../payload.config'
import { getMediaUrl } from './media'

export { getMediaUrl }

export const getPayloadClient = async () => {
  return await getPayload({
    config: configPromise,
  })
}

export async function getPageData(slug: string) {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
      },
      depth: 2,
    })

    if (result.docs && result.docs.length > 0) {
      return result.docs[0]
    }
  } catch (error) {
    console.warn(`[Payload CMS] Notice: Could not fetch page '${slug}' from database, falling back to static content defaults.`)
  }
  return null
}
