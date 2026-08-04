import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    console.log('Mock API Lead Received:', payload)
    return NextResponse.json({ success: true, message: 'Mock submission received successfully' })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 })
  }
}
