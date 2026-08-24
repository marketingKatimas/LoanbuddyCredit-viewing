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

export const defaultBlogPostsMs = defaultBlogPosts

export const defaultBlogPostsEn = [
  {
    title: 'Debt Consolidation & Credit Card Management 2026',
    slug: 'penyatuan-hutang-kad-kredit-2026',
    category: 'Debt Consolidation & Finance',
    tag: 'Latest Article!',
    author: 'Loanbuddy Credit Financial Team',
    publishedDate: '2026',
    summary:
      'Feeling overwhelmed by monthly credit card bills? Discover smart debt consolidation strategies to reduce high interest rates.',
    content: {
      root: {
        type: 'root',
        version: 1,
        children: [
          createLexicalParagraph(
            'Do you feel overwhelmed every time you receive your monthly credit card statement? Paying only the minimum amount each month prolongs debt duration and piles on high interest rates (15% to 18% per annum).'
          ),
          createLexicalHeading('h3', 'What is Debt Consolidation?'),
          createLexicalParagraph(
            'Debt consolidation refers to combining multiple credit card balances or small loans into a single personal loan with a lower interest rate and a fixed repayment schedule.'
          ),
          createLexicalHeading('h3', 'Key Advantages of Debt Consolidation'),
          createLexicalList([
            {
              boldText: 'Reduced Interest Rate: ',
              normalText: 'Replace high credit card interest with lower personal loan rates.',
            },
            {
              boldText: 'Simplified Management: ',
              normalText: 'Only 1 payment due date each month instead of juggling multiple accounts.',
            },
            {
              boldText: 'Improved Credit Score: ',
              normalText: 'Helps clear credit card arrears and gradually improves your CCRIS record.',
            },
          ]),
        ],
      },
    },
    ctaBox: {
      heading: 'Looking to Settle Your Credit Card Debt?',
      description:
        'Get professional debt consolidation advisory from Loanbuddy Credit today.',
      buttonText: 'Apply for Debt Consolidation Now',
      buttonLink: '/mohon-pinjaman-online',
    },
    seo: {
      metaTitle: 'Credit Card Debt Consolidation 2026 - Loanbuddy Credit',
      metaDescription:
        'Complete guide to credit card debt consolidation and interest savings strategies with Loanbuddy Credit.',
    },
  },
  {
    title: 'OPR 2.75% in 2026: How Do Personal Loan Installments Change?',
    slug: 'kesan-opr-pinjaman-peribadi',
    category: 'Personal Loan & OPR',
    tag: 'Latest Article!',
    author: 'Loanbuddy Credit Financial Team',
    publishedDate: '2026',
    summary:
      'Understand how the Overnight Policy Rate (OPR) affects fixed vs floating rate personal loans in Malaysia.',
    content: {
      root: {
        type: 'root',
        version: 1,
        children: [
          createLexicalParagraph(
            'The Overnight Policy Rate (OPR) set by Bank Negara Malaysia (BNM) is frequently in the news. But do you know how OPR changes affect your personal loan monthly installments?'
          ),
          createLexicalHeading('h3', 'Fixed Rate vs Floating Rate Loans'),
          createLexicalParagraph(
            'For fixed-rate personal loans like those at Loanbuddy Credit, OPR fluctuations will not alter the monthly installment amount agreed upon in your contract!'
          ),
          createLexicalHeading('h3', 'Advantages of Fixed Interest Rates'),
          createLexicalList([
            {
              boldText: 'Financial Certainty: ',
              normalText: 'Your monthly payments remain constant from the first month to the last.',
            },
            {
              boldText: 'Free from OPR Surprises: ',
              normalText: 'BNM OPR rate hikes do not disrupt your planned monthly budget.',
            },
          ]),
        ],
      },
    },
    ctaBox: {
      heading: 'Need a Fixed Rate Personal Loan?',
      description:
        'Check your personal loan eligibility at Loanbuddy Credit today quickly and free of charge.',
      buttonText: 'Check Loan Eligibility',
      buttonLink: '/mohon-pinjaman-online',
    },
    seo: {
      metaTitle: 'Impact of OPR on Personal Loans 2026 - Loanbuddy Credit',
      metaDescription:
        'Learn how OPR impacts your personal loan and the differences between fixed and floating rates.',
    },
  },
  {
    title: 'CCRIS Stalled with PTPTN? How to Qualify for a Loan in 2026',
    slug: 'pinjaman-peribadi-ccris-ptptn-2026',
    category: 'Credit Score & CCRIS',
    tag: 'Latest Article!',
    author: 'Loanbuddy Credit Financial Team',
    publishedDate: '2026',
    summary:
      'Having credit issues or PTPTN arrears? Here is how you can still qualify for legal personal financing.',
    content: {
      root: {
        type: 'root',
        version: 1,
        children: [
          createLexicalParagraph(
            'Many loan applicants in Malaysia find their personal loan applications rejected by commercial banks due to outstanding PTPTN payments recorded on their CCRIS report.'
          ),
          createLexicalHeading('h3', 'Does PTPTN Record Affect Personal Loans?'),
          createLexicalParagraph(
            'Yes, commercial banks strictly check credit arrears ratios in CCRIS reports. However, licensed moneylenders under KPKT like Loanbuddy Credit have more flexible criteria evaluated on your current income stability.'
          ),
          createLexicalHeading('h3', 'Steps to Secure Loan Approval'),
          createLexicalList(
            [
              {
                boldText: 'Verify Current Eligibility: ',
                normalText: 'Ensure you have latest 3 months payslips and salary bank crediting statements.',
              },
              {
                boldText: 'Restructure Arrears: ',
                normalText: 'Reach out to PTPTN to arrange a manageable repayment schedule.',
              },
              {
                boldText: 'Apply with Licensed KPKT Agency: ',
                normalText: 'Secure a personal loan that approves applicants with flexibility.',
              },
            ],
            'number'
          ),
        ],
      },
    },
    ctaBox: {
      heading: 'Ever Been Rejected By Banks?',
      description:
        'Loanbuddy Credit is here to facilitate your personal loan application without hassle.',
      buttonText: 'Apply for Loan Now',
      buttonLink: '/mohon-pinjaman-online',
    },
    seo: {
      metaTitle: 'CCRIS & PTPTN Personal Loan 2026 - Loanbuddy Credit',
      metaDescription:
        'How to apply for a personal loan even with CCRIS or PTPTN records at Loanbuddy Credit.',
    },
  },
  {
    title: 'Conventional vs Islamic: Personal Loan Comparison 2026',
    slug: 'beza-pinjaman-konvensional-islamik-2026',
    category: 'Islamic & Conventional Financing',
    tag: 'Latest Article!',
    author: 'Loanbuddy Credit Financial Team',
    publishedDate: '2026',
    summary:
      'Explore the key differences between conventional interest loans and Shariah-compliant financing structures.',
    content: {
      root: {
        type: 'root',
        version: 1,
        children: [
          createLexicalParagraph(
            'Before applying for personal financing in Malaysia, it is essential to understand the primary conceptual differences between Conventional Loans and Islamic Financing.'
          ),
          createLexicalHeading('h3', '1. Contractual Concept'),
          createLexicalParagraph(
            'Conventional: Based on a debtor-creditor relationship, where the borrower repays the principal together with agreed interest.'
          ),
          createLexicalParagraph(
            'Islamic: Based on Shariah contracts such as Murabahah or Tawarruq, where financing is facilitated via trade commodities with an agreed profit margin.'
          ),
          createLexicalHeading('h3', '2. Late Payment Charges'),
          createLexicalParagraph(
            'Conventional: Applies compounding interest on overdue amounts.'
          ),
          createLexicalParagraph(
            'Islamic: Imposes Ta’widh (compensation fee) at regulated rates, with portions allocated to charitable causes.'
          ),
        ],
      },
    },
    ctaBox: {
      heading: 'Need Financing Consultation?',
      description:
        'Contact Loanbuddy Credit loan specialists for a free consultation today.',
      buttonText: 'Apply for Loan Now',
      buttonLink: '/mohon-pinjaman-online',
    },
    seo: {
      metaTitle: 'Conventional vs Islamic Personal Loans 2026 - Loanbuddy Credit',
      metaDescription:
        'Detailed comparison between conventional and Islamic personal financing in Malaysia.',
    },
  },
]

export async function seedBlogPosts(payload: Payload) {
  try {
    const existingPosts = await payload.find({
      collection: 'blog-posts',
      limit: 100,
    })

    const existingPostsMap = new Map(existingPosts.docs.map((p: any) => [p.slug, p]))

    for (let i = 0; i < defaultBlogPostsMs.length; i++) {
      const postMs = defaultBlogPostsMs[i]
      const postEn = defaultBlogPostsEn[i]
      const existing = existingPostsMap.get(postMs.slug)

      if (!existing) {
        // Create entry in MS
        const created = await payload.create({
          collection: 'blog-posts',
          data: postMs as any,
          locale: 'ms',
        })

        // Update with EN content
        await payload.update({
          collection: 'blog-posts',
          id: created.id,
          data: postEn as any,
          locale: 'en',
        })
        console.log(`[Seed] Created dual-language blog post: ${postMs.slug}`)
      } else {
        // Update MS
        await payload.update({
          collection: 'blog-posts',
          id: existing.id,
          data: {
            ...postMs,
            featuredImage: existing.featuredImage || undefined,
          } as any,
          locale: 'ms',
        })

        // Update EN
        await payload.update({
          collection: 'blog-posts',
          id: existing.id,
          data: {
            ...postEn,
            featuredImage: existing.featuredImage || undefined,
          } as any,
          locale: 'en',
        })
        console.log(`[Seed] Updated dual-language blog post: ${postMs.slug}`)
      }
    }
  } catch (error) {
    console.error('[Seed] Error seeding blog posts:', error)
  }
}
