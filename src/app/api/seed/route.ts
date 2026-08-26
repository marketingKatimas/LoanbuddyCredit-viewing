import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { seedDefaultPages } from '@/seed/seedPages'
import { seedBlogPosts } from '@/seed/seedBlogPosts'
import { seedFooter } from '@/seed/seedFooter'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })
    await seedDefaultPages(payload)
    await seedBlogPosts(payload)
    await seedFooter(payload)
    return NextResponse.json({ success: true, message: 'Pages, Blog Posts, and Footer successfully seeded/synced for both MS and EN!' })
  } catch (error) {
    console.error('[Seed Route Error]:', error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
