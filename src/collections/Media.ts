import type { CollectionConfig } from 'payload'
import { revalidateHooks } from '@/lib/revalidate'

export const Media: CollectionConfig = {
  slug: 'media',
  ...revalidateHooks,
  access: {
    read: () => true,
  },
  admin: {
    group: 'Library',
  },
  upload: {
    // Storage is handled by the Vercel Blob adapter (see payload.config.ts).
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
      label: 'Alt Text',
      admin: {
        description: 'Describes the image for screen readers and SEO.',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
    },
  ],
}
