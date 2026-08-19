import type { Payload } from 'payload'

function createLexicalParagraph(text: string) {
  return {
    type: 'paragraph',
    version: 1,
    children: [
      {
        type: 'text',
        version: 1,
        text,
      },
    ],
  }
}

function createLexicalHeading(tag: 'h1' | 'h2' | 'h3' | 'h4', text: string) {
  return {
    type: 'heading',
    tag,
    version: 1,
    children: [
      {
        type: 'text',
        version: 1,
        text,
      },
    ],
  }
}

function createLexicalList(items: { boldText?: string; normalText: string }[], listType: 'bullet' | 'number' = 'bullet') {
  return {
    type: 'list',
    listType,
    version: 1,
    children: items.map((item) => ({
      type: 'listitem',
      version: 1,
      children: [
        ...(item.boldText
          ? [
              {
                type: 'text',
                version: 1,
                text: item.boldText,
                format: 1, // bold
              },
            ]
          : []),
        {
          type: 'text',
          version: 1,
          text: item.normalText,
        },
      ],
    })),
  }
}

export const defaultBlogPosts = [
  {
    title: 'Penyatuan Hutang',
    slug: 'penyatuan-hutang-kad-kredit-2026',
    category: 'Penyatuan Hutang & Kewangan',
    tag: 'Artikel Terbaru!',
    author: 'Pasukan Kewangan Loanbuddy Credit',
    publishedDate: '2026',
    summary:
      'Adakah anda berasa sesak setiap kali menerima penyata kad kredit bulanan? Ketahui strategi penyatuan hutang bijak untuk mengurangkan kadar faedah tinggi.',
    content: {
      root: {
        type: 'root',
        version: 1,
        children: [
          createLexicalParagraph(
            'Adakah anda berasa sesak setiap kali menerima penyata kad kredit bulanan? Membayar bayaran minimum sahaja setiap bulan hanya akan memanjangkan tempoh hutang dan menambah beban kadar faedah yang tinggi (15% hingga 18% setahun).'
          ),
          createLexicalHeading('h3', 'Apa Itu Penyatuan Hutang (Debt Consolidation)?'),
          createLexicalParagraph(
            'Penyatuan hutang merujuk kepada langkah menggabungkan beberapa tunggakan kad kredit atau pinjaman kecil menjadi satu pinjaman peribadi tunggal dengan kadar faedah yang lebih rendah dan jadual bayaran balik yang tetap.'
          ),
          createLexicalHeading('h3', 'Kelebihan Utama Penyatuan Hutang'),
          createLexicalList([
            {
              boldText: 'Pengurangan Kadar Faedah: ',
              normalText: 'Menggantikan faedah kad kredit tinggi dengan kadar pinjaman peribadi yang lebih rendah.',
            },
            {
              boldText: 'Pengurusan Mudah: ',
              normalText: 'Hanya 1 tarikh matang bayaran setiap bulan berbanding menguruskan pelbagai akaun.',
            },
            {
              boldText: 'Skor Kredit Lebih Baik: ',
              normalText: 'Membantu membersihkan tunggakan kad kredit dan menambah baik rekod CCRIS secara berperingkat.',
            },
          ]),
        ],
      },
    },
    ctaBox: {
      heading: 'Ingin Menyelesaikan Hutang Kad Kredit Anda?',
      description:
        'Dapatkan khidmat nasihat pinjaman peribadi penyatuan hutang daripada Loanbuddy Credit hari ini.',
      buttonText: 'Mohon Penyatuan Hutang Sekarang',
      buttonLink: '/mohon-pinjaman-online',
    },
    seo: {
      metaTitle: 'Penyatuan Hutang Kad Kredit 2026 - Loanbuddy Credit',
      metaDescription:
        'Panduan lengkap penyatuan hutang kad kredit dan strategi penjimatan faedah bersama Loanbuddy Credit.',
    },
  },
  {
    title: 'Jenis-Jenis Pinjaman di Malaysia',
    slug: 'kesan-opr-pinjaman-peribadi',
    category: 'Kewangan & OPR',
    tag: 'Artikel Terbaru!',
    author: 'Pasukan Kewangan Loanbuddy Credit',
    publishedDate: '2026',
    summary:
      'Kadar Dasar Semalaman (OPR) yang ditetapkan oleh Bank Negara Malaysia sering menjadi topik penting. Fahami bagaimana OPR memberi kesan kepada pinjaman peribadi.',
    content: {
      root: {
        type: 'root',
        version: 1,
        children: [
          createLexicalParagraph(
            'Kadar Dasar Semalaman (OPR) yang ditetapkan oleh Bank Negara Malaysia (BNM) sering menjadi bahan perbincangan panas. Namun, tahukah anda bagaimana perubahan OPR mempengaruhi ansuran pinjaman peribadi anda?'
          ),
          createLexicalHeading('h3', 'Pinjaman Kadar Tetap vs Pinjaman Kadar Terapung'),
          createLexicalParagraph(
            'Bagi pinjaman peribadi berasaskan kadar faedah tetap (fixed rate) seperti di Loanbuddy Credit, pergerakan OPR tidak akan mengubah jumlah ansuran bulanan yang telah dipersetujui dalam perjanjian anda!'
          ),
          createLexicalHeading('h3', 'Kelebihan Kadar Faedah Tetap'),
          createLexicalList([
            {
              boldText: 'Kepastian Kewangan: ',
              normalText: 'Bayaran bulanan anda kekal dari bulan pertama hingga bulan terakhir.',
            },
            {
              boldText: 'Bebas Kejutan OPR: ',
              normalText: 'Kenaikan OPR BNM tidak menjejaskan perancangan belanjawan bulanan anda.',
            },
          ]),
        ],
      },
    },
    ctaBox: {
      heading: 'Perlukan Pinjaman Peribadi Kadar Tetap?',
      description:
        'Ketahui kelayakan pinjaman peribadi anda di Loanbuddy Credit hari ini secara percuma dan pantas.',
      buttonText: 'Semak Kelayakan Pinjaman',
      buttonLink: '/mohon-pinjaman-online',
    },
    seo: {
      metaTitle: 'Kesan OPR Terhadap Pinjaman Peribadi 2026 - Loanbuddy Credit',
      metaDescription:
        'Ketahui kesan OPR dan perbezaan kadar tetap vs terapung untuk pinjaman peribadi anda.',
    },
  },
  {
    title: 'Kurangkan Beban Kewangan Anda dengan Penyatuan Hutang di Loanbuddy Credit',
    slug: 'pinjaman-peribadi-ccris-ptptn-2026',
    category: 'Panduan CCRIS & PTPTN',
    tag: 'Artikel Terbaru!',
    author: 'Pasukan Kewangan Loanbuddy Credit',
    publishedDate: '2026',
    summary:
      'Banyak permohonan pinjaman ditolak disebabkan rekod CCRIS atau PTPTN. Ketahui cara mendapatkan pembiayaan yang fleksibel.',
    content: {
      root: {
        type: 'root',
        version: 1,
        children: [
          createLexicalParagraph(
            'Banyak pemohon pinjaman di Malaysia mendapati permohonan pinjaman peribadi mereka ditolak oleh bank disebabkan tunggakan bayaran PTPTN yang muncul dalam laporan CCRIS.'
          ),
          createLexicalHeading('h3', 'Adakah Rekod PTPTN Menjejaskan Pinjaman Peribadi?'),
          createLexicalParagraph(
            'Ya, bank komersial biasanya menyemak nisbah tunggakan kredit dalam laporan CCRIS. Walau bagaimanapun, pemberi pinjaman berlesen KPKT seperti Loanbuddy Credit mempunyai kriteria penilaian yang lebih fleksibel mengikut tahap pendapatan semasa anda.'
          ),
          createLexicalHeading('h3', 'Langkah-Langkah Mendapatkan Kelulusan Pinjaman'),
          createLexicalList(
            [
              {
                boldText: 'Semak Kelayakan Semasa: ',
                normalText: 'Pastikan anda mempunyai slip gaji 3 bulan terkini dan rekod pengkreditan gaji di bank.',
              },
              {
                boldText: 'Strukturkan Semula Tunggakan: ',
                normalText: 'Berhubung dengan PTPTN untuk jadual bayaran semula.',
              },
              {
                boldText: 'Mohon Bersama Syarikat Berlesen KPKT: ',
                normalText: 'Dapatkan pinjaman peribadi yang meluluskan pemohon secara fleksibel.',
              },
            ],
            'number'
          ),
        ],
      },
    },
    ctaBox: {
      heading: 'Pernah Ditolak Oleh Bank?',
      description:
        'Loanbuddy Credit sedia membantu permohonan pinjaman peribadi anda tanpa kerumitan.',
      buttonText: 'Mohon Pinjaman Sekarang',
      buttonLink: '/mohon-pinjaman-online',
    },
    seo: {
      metaTitle: 'Pinjaman Peribadi CCRIS & PTPTN 2026 - Loanbuddy Credit',
      metaDescription:
        'Cara memohon pinjaman peribadi walaupun ada rekod tunggakan CCRIS dan PTPTN bersama Loanbuddy Credit.',
    },
  },
  {
    title: 'Konvensional vs Islamik: Beza Pinjaman Peribadi Malaysia 2026',
    slug: 'beza-pinjaman-konvensional-islamik-2026',
    category: 'Panduan Kewangan Malaysia',
    tag: 'Artikel Terbaru!',
    author: 'Pasukan Kewangan Loanbuddy Credit',
    publishedDate: '2026',
    summary:
      'Fahami perbezaan antara pinjaman peribadi konvensional dan pembiayaan Islamik sebelum memohon.',
    content: {
      root: {
        type: 'root',
        version: 1,
        children: [
          createLexicalParagraph(
            'Sebelum memohon sebarang pembiayaan peribadi di Malaysia, adalah penting untuk memahami perbezaan konsep utama antara Pinjaman Konvensional dan Pembiayaan Islamik.'
          ),
          createLexicalHeading('h3', '1. Konsep Perjanjian'),
          createLexicalParagraph(
            'Konvensional: Berdasarkan hubungan pemberi pinjam dan peminjam, di mana peminjam membayar balik wang prinsipal bersama kadar faedah (interest).'
          ),
          createLexicalParagraph(
            'Islamik: Berdasarkan konsep Syariah seperti Murabahah (jual beli) atau Tawarruq, di mana bank menjual komoditi pada harga yang telah ditambah keuntungan (profit margin).'
          ),
          createLexicalHeading('h3', '2. Caj Bayaran Lewat'),
          createLexicalParagraph(
            'Konvensional: Mengenakan caj faedah kompaun ke atas bayaran yang terlewat.'
          ),
          createLexicalParagraph(
            'Islamik: Mengenakan caj Ta’widh (ganti rugi) pada kadar yang ditetapkan dan sebahagian daripadanya disalurkan kepada badan kebajikan.'
          ),
        ],
      },
    },
    ctaBox: {
      heading: 'Perlukan Khidmat Nasihat Pembiayaan?',
      description:
        'Hubungi perunding kewangan Loanbuddy Credit untuk rundingan percuma hari ini.',
      buttonText: 'Mohon Pinjaman Sekarang',
      buttonLink: '/mohon-pinjaman-online',
    },
    seo: {
      metaTitle: 'Beza Pinjaman Konvensional vs Islamik 2026 - Loanbuddy Credit',
      metaDescription:
        'Perbandingan terperinci antara pinjaman konvensional dan pembiayaan Islamik di Malaysia.',
    },
  },
]

export async function seedBlogPosts(payload: Payload) {
  try {
    const existingPosts = await payload.find({
      collection: 'blog-posts',
      limit: 100,
    })

    const existingSlugs = new Set(existingPosts.docs.map((p: any) => p.slug))

    for (const post of defaultBlogPosts) {
      if (!existingSlugs.has(post.slug)) {
        await payload.create({
          collection: 'blog-posts',
          data: post as any,
        })
        console.log(`[Seed] Created blog post: ${post.slug}`)
      }
    }
  } catch (error) {
    console.error('[Seed] Error seeding blog posts:', error)
  }
}
