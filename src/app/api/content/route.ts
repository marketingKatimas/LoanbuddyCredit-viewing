import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { defaultPagesData } from '@/seed/seedPages'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const locale = (searchParams.get('locale') || 'ms') as 'ms' | 'en'

  if (!slug) {
    return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 })
  }

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'pages',
      locale: locale as any,
      fallbackLocale: 'ms' as any,
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
        { headers: { 'Cache-Control': 'no-store, max-age=0' } },
      )
    }

    // If not found in DB, check if default page data exists and auto-create it
    const defaultPage = defaultPagesData.find((p) => p.slug === slug)
    if (defaultPage) {
      const createdDoc = await payload.create({
        collection: 'pages',
        data: defaultPage as any,
      })
      console.log(`[API Content] Auto-seeded missing page: ${slug}`)
      return NextResponse.json(
        { doc: createdDoc },
        { headers: { 'Cache-Control': 'no-store, max-age=0' } },
      )
    }
  } catch (error) {
    console.error(`[API Content] Error fetching page slug '${slug}':`, error)
  }

  return NextResponse.json(
    { doc: null },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  )
}

