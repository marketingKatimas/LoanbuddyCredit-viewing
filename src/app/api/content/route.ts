import { NextResponse } from 'next/server'
import { isLanguage } from '@/dictionaries'
import { getPageContent } from '@/lib/content'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const localeParam = searchParams.get('locale')
  const locale = isLanguage(localeParam) ? localeParam : 'ms'

  if (!slug) {
    return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 })
  }

  const doc = await getPageContent(slug, locale)

  return NextResponse.json(
    { doc },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  )
}
