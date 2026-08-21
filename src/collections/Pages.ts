import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Page Name (Internal)',
      admin: {
        placeholder: 'e.g. Laman Utama (Homepage)',
        description: 'Internal reference title for this page entry in Payload Admin.',
      },
    },
    {
      name: 'slug',
      type: 'select',
      required: true,
      unique: true,
      label: 'Select Target Page',
      options: [
        { label: 'Laman Utama (Home)', value: 'home' },
        { label: 'Tentang Loanbuddy Credit (About Us)', value: 'tentang-loanbuddy-credit' },
        { label: 'Hubungi Kami (Contact Us)', value: 'hubungi-kami' },
        { label: 'Soalan Lazim (FAQ)', value: 'soalan-lazim-faq' },
        { label: 'Mohon Pinjaman Online (Apply Form)', value: 'mohon-pinjaman-online' },
        { label: 'Pinjaman Peribadi', value: 'pinjaman-peribadi' },
        { label: 'Pinjaman Koperasi', value: 'pinjaman-koperasi' },
        { label: 'Pembayaran (Payment)', value: 'pembayaran' },
        { label: 'Blog (Senarai Artikel)', value: 'blog' },
      ],
      admin: {
        description: 'Select the website page you want this content to manage.',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero / Banners',
          fields: [
            {
              name: 'banners',
              type: 'array',
              label: 'Homepage Banners / Carousel Slides (Max 5)',
              maxRows: 5,
              labels: {
                singular: 'Banner Slide',
                plural: 'Banner Slides',
              },
              admin: {
                condition: (data) => data?.slug === 'home',
                description: 'Add up to 5 banner slides for the homepage carousel. You can add image-only banners or banners with titles, descriptions, and CTA buttons.',
              },
              fields: [
                {
                  name: 'bannerImage',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Banner Image',
                  admin: {
                    description: 'Select or upload a banner background image.',
                  },
                },
                {
                  name: 'heading',
                  type: 'text',
                  label: 'Heading / Title (Optional)',
                  localized: true,
                  admin: {
                    placeholder: 'e.g. Selamat Datang ke Loanbuddy Credit',
                    description: 'Leave empty for an image-only banner.',
                  },
                },
                {
                  name: 'subheading',
                  type: 'textarea',
                  label: 'Subheading / Description (Optional)',
                  localized: true,
                  admin: {
                    placeholder: 'e.g. Kami sedia membantu dengan menawarkan pembiayaan yang cepat, mudah, dan tanpa sebarang kerumitan...',
                    description: 'Descriptive paragraph text below the heading.',
                  },
                },
                {
                  name: 'primaryCtaText',
                  type: 'text',
                  label: 'CTA Button Text (Optional)',
                  localized: true,
                  admin: {
                    placeholder: 'e.g. Mohon Sekarang',
                    description: 'Button label. Leave blank if not needed.',
                  },
                },
                {
                  name: 'primaryCtaLink',
                  type: 'text',
                  label: 'CTA Button Link (Optional)',
                  admin: {
                    placeholder: 'e.g. mohon-pinjaman-online or https://...',
                    description: 'Target page URL or external link when user clicks CTA button or banner.',
                  },
                },
              ],
            },
            {
              name: 'hero',
              type: 'group',
              label: 'Hero Content',
              admin: {
                condition: (data) => data?.slug !== 'home',
                description: 'Hero header content for this page.',
              },
              fields: [
                {
                  name: 'badgeText',
                  type: 'text',
                  label: 'Badge Text',
                  localized: true,
                  admin: {
                    placeholder: 'e.g. Pinjaman Peribadi Lulus Segera',
                    description: 'Small tag or badge text displayed above the main heading.',
                  },
                },
                {
                  name: 'heading',
                  type: 'text',
                  label: 'Main Heading / Title',
                  localized: true,
                  admin: {
                    placeholder: 'e.g. Selamat Datang ke Loanbuddy Credit',
                    description: 'Main title displayed prominently at the top of the page.',
                  },
                },
                {
                  name: 'subheading',
                  type: 'textarea',
                  label: 'Subheading / Description',
                  localized: true,
                  admin: {
                    placeholder: 'e.g. Kami sedia membantu dengan menawarkan pembiayaan yang cepat, mudah, dan tanpa sebarang kerumitan...',
                    description: 'Descriptive paragraph text below the main heading.',
                  },
                },
                {
                  name: 'heroImage',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Hero Image',
                  admin: {
                    description: 'Select or upload an image for the hero background or banner graphic.',
                  },
                },
                {
                  name: 'primaryCtaText',
                  type: 'text',
                  label: 'Primary CTA Button Text',
                  localized: true,
                  admin: {
                    placeholder: 'e.g. Mohon Sekarang',
                    description: 'Label shown on the main action button.',
                  },
                },
                {
                  name: 'primaryCtaLink',
                  type: 'text',
                  label: 'Primary CTA Button Link',
                  admin: {
                    placeholder: 'e.g. mohon-pinjaman-online',
                    description: 'Target page URL or link for the main action button.',
                  },
                },
                {
                  name: 'secondaryCtaText',
                  type: 'text',
                  label: 'Secondary CTA Button Text',
                  localized: true,
                  admin: {
                    placeholder: 'e.g. Baca Soalan Lazim',
                  },
                },
                {
                  name: 'secondaryCtaLink',
                  type: 'text',
                  label: 'Secondary CTA Button Link',
                  admin: {
                    placeholder: 'e.g. soalan-lazim-faq',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Page Content & Sections',
          fields: [
            {
              name: 'sections',
              type: 'array',
              label: 'Content Sections',
              labels: {
                singular: 'Section',
                plural: 'Sections',
              },
              fields: [
                {
                  name: 'sectionBadge',
                  type: 'text',
                  label: 'Section Badge Text',
                  localized: true,
                  admin: {
                    placeholder: 'e.g. Perkhidmatan Kami',
                  },
                },
                {
                  name: 'sectionTitle',
                  type: 'text',
                  label: 'Section Title',
                  localized: true,
                  admin: {
                    placeholder: 'e.g. Kenapa Ramai Memilih Loanbuddy Credit?',
                  },
                },
                {
                  name: 'sectionDescription',
                  type: 'textarea',
                  label: 'Section Description',
                  localized: true,
                  admin: {
                    placeholder: 'e.g. Di ruangan ini, anda akan mendapatkan jawapan kepada pertanyaan yang sering dikemukakan...',
                  },
                },
                {
                  name: 'sectionImage',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Section Image',
                  admin: {
                    description: 'Select or upload an image for this section.',
                  },
                },
                {
                  name: 'videoUrl',
                  type: 'text',
                  label: 'Section Video URL (Optional)',
                  admin: {
                    placeholder: 'e.g. https://drive.google.com/file/d/.../preview or YouTube link',
                    description: 'Embeddable video link (Google Drive preview link, YouTube, etc.) for video sections.',
                  },
                },
                {
                  name: 'thumbnailImage',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Video Thumbnail Image (Optional)',
                  admin: {
                    description: 'Upload or select a custom thumbnail poster image for the video preview.',
                  },
                },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Feature Cards / List Items',
                  fields: [
                    {
                      name: 'itemTitle',
                      type: 'text',
                      label: 'Item Title',
                      localized: true,
                      admin: {
                        placeholder: 'e.g. Kredibel / Permohonan Mudah / Proses Pantas',
                      },
                    },
                    {
                      name: 'itemDescription',
                      type: 'textarea',
                      label: 'Item Description',
                      localized: true,
                      admin: {
                        placeholder: 'e.g. Telus, profesional dan komited untuk perkhidmatan yang optimum...',
                      },
                    },
                    {
                      name: 'itemImage',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Item Image / Icon',
                      admin: {
                        description: 'Select or upload an image/icon for this item.',
                      },
                    },
                    {
                      name: 'itemLink',
                      type: 'text',
                      label: 'Item Link / URL',
                      admin: {
                        placeholder: 'e.g. penyatuan-hutang-kad-kredit-2026 or https://...',
                        description: 'Link destination when user clicks on this card or article.',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'SEO Metadata',
          fields: [
            {
              name: 'seo',
              type: 'group',
              label: 'Search Engine Optimization',
              fields: [
                {
                  name: 'metaTitle',
                  type: 'text',
                  label: 'Meta Title',
                  localized: true,
                  admin: {
                    placeholder: 'e.g. Loanbuddy Credit - Pinjaman Peribadi Lulus Segera',
                  },
                },
                {
                  name: 'metaDescription',
                  type: 'textarea',
                  label: 'Meta Description',
                  localized: true,
                  admin: {
                    placeholder: 'e.g. Mohon pinjaman peribadi atas talian dengan kelulusan pantas...',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
