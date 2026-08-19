import type { Payload } from 'payload'

export const defaultFooterData = {
  tagline: 'Lending with Understanding',
  description:
    'Loanbuddy Credit Sdn. Bhd. ialah sebuah agensi pinjaman berlesen di bawah KPKT, dengan cawangan di Kuala Lumpur, Kuching, dan Bintulu.',
  nomborLesen: 'WL7830/14/01-3/030527',
  tempohLesen: '04/05/2025 - 03/05/2027',
  nomborPermit: 'WP7830/14/01-3/030527',
  tempohPermit: '04/05/2025 - 03/05/2027',
  hoursWeekdays: 'Isnin - Jumaat: 8am - 5pm',
  hoursSaturday: 'Sabtu: 8am - 1.30pm',
  hoursClosed: 'Ahad dan Cuti Umum Tutup',
  facebookUrl: 'https://facebook.com',
  instagramUrl: 'https://instagram.com',
  tiktokUrl: 'https://tiktok.com',
  servicesLinks: [
    { label: 'Pinjaman Peribadi Online', url: '/mohon-pinjaman-online' },
    { label: 'Pinjaman Tambah Nilai', url: '/pinjaman-koperasi' },
  ],
  customerServiceLinks: [
    { label: 'Hubungi Kami', url: '/hubungi-kami' },
    { label: 'FAQ', url: '/soalan-lazim-faq' },
    { label: 'Dasar Privasi', url: '/privacy-policy' },
    { label: 'Kenyataan Penafian', url: '/disclaimer-notice' },
  ],
  copyrightText:
    '© Copyright 2026 Loanbuddy Credit Sdn. Bhd. [Registration No. 200901039396 (882536-K)]. All Rights Reserved.',
}

export async function seedFooter(payload: Payload) {
  try {
    const existing = await payload.findGlobal({
      slug: 'footer',
    })

    if (!existing || !existing.tagline) {
      await payload.updateGlobal({
        slug: 'footer',
        data: defaultFooterData,
      })
      console.log('[Seed] Seeded default Footer global configuration.')
    }
  } catch (error) {
    console.error('[Seed] Error seeding Footer global:', error)
  }
}
