import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '../../../../payload.config'
import { seedDefaultPages } from '@/seed/seedPages'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })
    await seedDefaultPages(payload)
    return NextResponse.json({ success: true, message: 'Pages successfully seeded/synced!' })
  } catch (error) {
    console.error('[Seed Route Error]:', error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
