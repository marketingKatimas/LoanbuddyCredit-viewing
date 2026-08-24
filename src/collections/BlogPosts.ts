import type { CollectionConfig } from 'payload'

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'category', 'updatedAt'],
    description: 'Manage and create individual blog articles and news updates.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Tajuk Artikel / Post Title',
      localized: true,
      admin: {
        placeholder: 'e.g. Tips Pengurusan Kewangan & Penyatuan Hutang 2026',
        description: 'Main headline for the blog article.',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug URL',
      admin: {
        placeholder: 'e.g. tips-pengurusan-kewangan-2026',
        description: 'URL identifier used to access this post (e.g. /blog/tips-pengurusan-kewangan-2026).',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'category',
          type: 'text',
          label: 'Kategori / Category',
          localized: true,
          admin: {
            width: '50%',
            placeholder: 'e.g. Kewangan / Pinjaman / Tips',
          },
        },
        {
          name: 'tag',
          type: 'text',
          label: 'Tag / Badge',
          defaultValue: 'Artikel Terbaru!',
          localized: true,
          admin: {
            width: '50%',
            placeholder: 'e.g. Artikel Terbaru!',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'author',
          type: 'text',
          label: 'Penulis / Author',
          defaultValue: 'Pasukan Kewangan Loanbuddy Credit',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'publishedDate',
          type: 'text',
          label: 'Tarikh Kemaskini / Published Date',
          defaultValue: '2026',
          admin: {
            width: '50%',
            placeholder: 'e.g. 2026 or 19 Ogos 2026',
          },
        },
      ],
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Gambar Utama / Featured Image',
      admin: {
        description: 'Upload or choose the main cover image for this blog post.',
      },
    },
    {
      name: 'summary',
      type: 'textarea',
      label: 'Ringkasan Artikel / Summary',
      localized: true,
      admin: {
        description: 'Brief overview displayed in search cards and meta descriptions.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Kandungan Artikel / Article Content',
      localized: true,
      admin: {
        description: 'Write and format the main body of the article with headings, lists, bold text, and links.',
      },
    },
    {
      name: 'ctaBox',
      type: 'group',
      label: 'Bottom CTA Box',
      admin: {
        description: 'Call-to-action banner displayed at the end of the article.',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'CTA Heading',
          defaultValue: 'Perlukan Pinjaman Peribadi?',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'CTA Description',
          defaultValue: 'Dapatkan khidmat nasihat pinjaman peribadi daripada Loanbuddy Credit hari ini secara percuma dan pantas.',
          localized: true,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'buttonText',
              type: 'text',
              label: 'CTA Button Text',
              defaultValue: 'Mohon Sekarang',
              localized: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'buttonLink',
              type: 'text',
              label: 'CTA Button Link',
              defaultValue: '/mohon-pinjaman-online',
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'Search Engine Optimization (SEO)',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
          localized: true,
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          localized: true,
        },
      ],
    },
  ],
}
