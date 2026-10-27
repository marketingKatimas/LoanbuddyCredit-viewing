import { cookies } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { defaultPagesData } from '@/seed/seedPages'
import { defaultBlogPosts } from '@/seed/seedBlogPosts'
import { LANGUAGE_COOKIE, isLanguage, type Language } from '@/dictionaries'
import type { BlogPost, Footer, Page } from '@/payload-types'

/** Language chosen by the visitor (cookie), defaulting to Bahasa Malaysia. */
export async function getRequestLanguage(): Promise<Language> {
  const value = (await cookies()).get(LANGUAGE_COOKIE)?.value
  return isLanguage(value) ? value : 'ms'
}

/** CMS page by slug; auto-seeds pages that exist in the defaults but not yet in the DB. */
export async function getPageContent(slug: string, locale: Language): Promise<Page | null> {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'pages',
      locale,
      fallbackLocale: 'ms',
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

    const defaultPage = defaultPagesData.find((p) => p.slug === slug)
    if (defaultPage) {
      const createdDoc = await payload.create({
        collection: 'pages',
        data: defaultPage as any,
      })
      console.log(`[Content] Auto-seeded missing page: ${slug}`)
      return createdDoc
    }
  } catch (error) {
    console.error(`[Content] Error fetching page slug '${slug}':`, error)
  }

  return null
}

/** Footer global. */
export async function getFooterContent(locale: Language): Promise<Footer | null> {
  try {
    const payload = await getPayload({ config: configPromise })
    return await payload.findGlobal({ slug: 'footer', locale })
  } catch (error) {
    console.error('[Content] Error fetching footer:', error)
    return null
  }
}

/** All published blog posts, falling back to the seeded defaults when the DB has none. */
export async function getBlogPosts(locale: Language): Promise<BlogPost[]> {
  try {
    const payload = await getPayload({ config: configPromise })
    const allPosts = await payload.find({
      collection: 'blog-posts',
      locale,
      fallbackLocale: false,
      sort: '-createdAt',
      limit: 100,
      depth: 2,
    })

    if (allPosts.docs && allPosts.docs.length > 0) {
      return allPosts.docs
    }
  } catch (error) {
    console.error('[Content] Error fetching blog posts:', error)
  }

  return defaultBlogPosts as unknown as BlogPost[]
}
