import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { defaultBlogPosts } from '@/seed/seedBlogPosts'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const locale = (searchParams.get('locale') || 'ms') as 'ms' | 'en'

  try {
    const payload = await getPayload({ config: configPromise })

    // If slug is provided, return that specific post
    if (slug) {
      const result = await payload.find({
        collection: 'blog-posts',
        locale: locale as any,
        fallbackLocale: false as any,
        where: {
          slug: {
            equals: slug,
          },
        },
        depth: 2,
      })

      if (result.docs && result.docs.length > 0) {
        return NextResponse.json(
          { doc: result.docs[0] },
          { headers: { 'Cache-Control': 'no-store, max-age=0' } }
        )
      }

      // If not yet in DB, check fallback defaults
      const fallbackPost = defaultBlogPosts.find((p) => p.slug === slug)
      if (fallbackPost) {
        try {
          const created = await payload.create({
            collection: 'blog-posts',
            data: fallbackPost as any,
          })
          return NextResponse.json(
            { doc: created },
            { headers: { 'Cache-Control': 'no-store, max-age=0' } }
          )
        } catch {
          return NextResponse.json(
            { doc: fallbackPost },
            { headers: { 'Cache-Control': 'no-store, max-age=0' } }
          )
        }
      }

      return NextResponse.json(
        { doc: null },
        { headers: { 'Cache-Control': 'no-store, max-age=0' } }
      )
    }

    // Otherwise, return all published blog posts
    const allPosts = await payload.find({
      collection: 'blog-posts',
      locale: locale as any,
      fallbackLocale: false as any,
      sort: '-createdAt',
      limit: 100,
      depth: 2,
    })

    if (allPosts.docs && allPosts.docs.length > 0) {
      return NextResponse.json(
        { docs: allPosts.docs },
        { headers: { 'Cache-Control': 'no-store, max-age=0' } }
      )
    }

    return NextResponse.json(
      { docs: defaultBlogPosts },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    )
  } catch (error) {
    console.error('[API Blog Posts] Error:', error)

    if (slug) {
      const fallback = defaultBlogPosts.find((p) => p.slug === slug) || null
      return NextResponse.json({ doc: fallback }, { headers: { 'Cache-Control': 'no-store, max-age=0' } })
    }

    return NextResponse.json({ docs: defaultBlogPosts }, { headers: { 'Cache-Control': 'no-store, max-age=0' } })
  }
}
