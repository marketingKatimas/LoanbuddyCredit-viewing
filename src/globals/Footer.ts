import type { GlobalConfig } from 'payload'
import { revalidateGlobalHooks } from '@/lib/revalidate'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer Settings',
  ...revalidateGlobalHooks,
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Company Info',
          fields: [
            {
              name: 'tagline',
              type: 'text',
              label: 'Tagline / Slogan',
              defaultValue: 'Lending with Understanding',
              localized: true,
              admin: {
                description: 'The short slogan displayed under the footer logo.',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Company Description',
              defaultValue:
                'Loanbuddy Credit Sdn. Bhd. ialah sebuah agensi pinjaman berlesen di bawah KPKT, dengan cawangan di Kuala Lumpur, Kuching, dan Bintulu.',
              localized: true,
              admin: {
                description: 'The summary paragraph introducing the company in the footer.',
              },
            },
          ],
        },
        {
          label: 'License Details',
          fields: [
            {
              name: 'nomborLesen',
              type: 'text',
              label: 'Nombor Lesen',
              defaultValue: 'WL7830/14/01-3/030527',
            },
            {
              name: 'tempohLesen',
              type: 'text',
              label: 'Tempoh Sah Laku Lesen',
              defaultValue: '04/05/2025 - 03/05/2027',
            },
            {
              name: 'nomborPermit',
              type: 'text',
              label: 'Nombor Permit Iklan',
              defaultValue: 'WP7830/14/01-3/030527',
            },
            {
              name: 'tempohPermit',
              type: 'text',
              label: 'Tempoh Sah Laku Permit Iklan',
              defaultValue: '04/05/2025 - 03/05/2027',
            },
          ],
        },
        {
          label: 'Operating Hours',
          fields: [
            {
              name: 'hoursWeekdays',
              type: 'text',
              label: 'Waktu Operasi (Isnin - Jumaat)',
              defaultValue: 'Isnin - Jumaat: 8am - 5pm',
              localized: true,
            },
            {
              name: 'hoursSaturday',
              type: 'text',
              label: 'Waktu Operasi (Sabtu)',
              defaultValue: 'Sabtu: 8am - 1.30pm',
              localized: true,
            },
            {
              name: 'hoursClosed',
              type: 'text',
              label: 'Waktu Tutup / Cuti',
              defaultValue: 'Ahad dan Cuti Umum Tutup',
              localized: true,
            },
          ],
        },
        {
          label: 'Social Media',
          fields: [
            {
              name: 'facebookUrl',
              type: 'text',
              label: 'Facebook URL',
              defaultValue: 'https://facebook.com',
            },
            {
              name: 'instagramUrl',
              type: 'text',
              label: 'Instagram URL',
              defaultValue: 'https://instagram.com',
            },
            {
              name: 'tiktokUrl',
              type: 'text',
              label: 'TikTok URL',
              defaultValue: 'https://tiktok.com',
            },
          ],
        },
        {
          label: 'Navigation Links',
          fields: [
            {
              name: 'servicesLinks',
              type: 'array',
              label: 'Perkhidmatan Links',
              labels: {
                singular: 'Link',
                plural: 'Links',
              },
              defaultValue: [
                { label: 'Pinjaman Peribadi Online', url: '/pinjaman-peribadi-kl-sarawak' },
                { label: 'Pinjaman Tambah Nilai', url: '/pinjaman-koperasi' },
              ],
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Link Label',
                  localized: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                  label: 'Link URL / Path',
                },
              ],
            },
            {
              name: 'customerServiceLinks',
              type: 'array',
              label: 'Khidmat Pelanggan Links',
              labels: {
                singular: 'Link',
                plural: 'Links',
              },
              defaultValue: [
                { label: 'Hubungi Kami', url: '/hubungi-kami' },
                { label: 'FAQ', url: '/soalan-lazim-faq' },
                { label: 'Dasar Privasi', url: '/privacy-policy' },
                { label: 'Kenyataan Penafian', url: '/disclaimer-notice' },
              ],
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Link Label',
                  localized: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                  label: 'Link URL / Path',
                },
              ],
            },
          ],
        },
        {
          label: 'Copyright Bar',
          fields: [
            {
              name: 'copyrightText',
              type: 'text',
              label: 'Copyright Notice Text',
              defaultValue:
                '© Copyright 2026 Loanbuddy Credit Sdn. Bhd. [Registration No. 200901039396 (882536-K)]. All Rights Reserved.',
              localized: true,
            },
          ],
        },
      ],
    },
  ],
}
