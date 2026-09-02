import type { Payload } from 'payload'

export const defaultFooterDataMs = {
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
    { label: 'Pinjaman Peribadi Online', url: '/pinjaman-peribadi-kl-sarawak' },
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

export const defaultFooterData = defaultFooterDataMs

export const defaultFooterDataEn = {
  tagline: 'Lending with Understanding',
  description:
    'Loanbuddy Credit Sdn. Bhd. is a licensed money lender under KPKT, with branches located in Kuala Lumpur, Kuching, and Bintulu.',
  nomborLesen: 'WL7830/14/01-3/030527',
  tempohLesen: '04/05/2025 - 03/05/2027',
  nomborPermit: 'WP7830/14/01-3/030527',
  tempohPermit: '04/05/2025 - 03/05/2027',
  hoursWeekdays: 'Monday - Friday: 8am - 5pm',
  hoursSaturday: 'Saturday: 8am - 1.30pm',
  hoursClosed: 'Closed on Sundays & Public Holidays',
  facebookUrl: 'https://facebook.com',
  instagramUrl: 'https://instagram.com',
  tiktokUrl: 'https://tiktok.com',
  servicesLinks: [
    { label: 'Online Personal Loan', url: '/pinjaman-peribadi-kl-sarawak' },
    { label: 'Top-Up Loan', url: '/pinjaman-koperasi' },
  ],
  customerServiceLinks: [
    { label: 'Contact Us', url: '/hubungi-kami' },
    { label: 'FAQ', url: '/soalan-lazim-faq' },
    { label: 'Privacy Policy', url: '/privacy-policy' },
    { label: 'Disclaimer Notice', url: '/disclaimer-notice' },
  ],
  copyrightText:
    '© Copyright 2026 Loanbuddy Credit Sdn. Bhd. [Registration No. 200901039396 (882536-K)]. All Rights Reserved.',
}

export async function seedFooter(payload: Payload) {
  try {
    // Seed/Update BM footer
    await payload.updateGlobal({
      slug: 'footer',
      data: defaultFooterDataMs as any,
      locale: 'ms',
    })

    // Seed/Update EN footer
    await payload.updateGlobal({
      slug: 'footer',
      data: defaultFooterDataEn as any,
      locale: 'en',
    })

    console.log('[Seed] Seeded dual-language (MS & EN) Footer global configuration.')
  } catch (error) {
    console.error('[Seed] Error seeding Footer global:', error)
  }
}
