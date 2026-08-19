import type { Payload } from 'payload'

type PageSlug =
  | 'home'
  | 'tentang-loanbuddy-credit'
  | 'hubungi-kami'
  | 'soalan-lazim-faq'
  | 'mohon-pinjaman-online'
  | 'pinjaman-peribadi'
  | 'pinjaman-koperasi'
  | 'pembayaran'

interface BannerItem {
  bannerImage?: any
  heading?: string
  subheading?: string
  primaryCtaText?: string
  primaryCtaLink?: string
}

interface SectionItem {
  itemTitle?: string
  itemDescription?: string
  itemLink?: string
}

interface ContentSection {
  sectionBadge?: string
  sectionTitle?: string
  sectionDescription?: string
  items?: SectionItem[]
}

interface DefaultPageData {
  title: string
  slug: PageSlug
  banners?: BannerItem[]
  hero?: {
    badgeText?: string
    heading?: string
    subheading?: string
    primaryCtaText?: string
    primaryCtaLink?: string
    secondaryCtaText?: string
    secondaryCtaLink?: string
  }
  sections?: ContentSection[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export const defaultPagesData: DefaultPageData[] = [
  {
    title: 'Laman Utama (Home)',
    slug: 'home',
    banners: [
      {
        heading: 'Selamat Datang ke Loanbuddy Credit',
        subheading:
          'Kami sedia membantu dengan menawarkan pembiayaan yang cepat, mudah, dan tanpa sebarang kerumitan. Dengan proses permohonan yang ringkas dan kelulusan pantas, anda boleh mendapatkan dana yang diperlukan tepat pada masanya untuk mengurus keperluan kewangan anda.',
        primaryCtaText: 'Mohon Sekarang',
        primaryCtaLink: 'mohon-pinjaman-online',
      },
    ],
    hero: {
      heading: 'Selamat Datang ke Loanbuddy Credit',
      subheading:
        'Kami sedia membantu dengan menawarkan pembiayaan yang cepat, mudah, dan tanpa sebarang kerumitan. Dengan proses permohonan yang ringkas dan kelulusan pantas, anda boleh mendapatkan dana yang diperlukan tepat pada masanya untuk mengurus keperluan kewangan anda.',
      primaryCtaText: 'Mohon Sekarang',
      primaryCtaLink: 'mohon-pinjaman-online',
    },
    sections: [
      {
        sectionTitle: 'Perkhidmatan Kami',
        items: [
          {
            itemTitle: 'Pinjaman Peribadi Online',
            itemDescription:
              'Mohon pinjaman peribadi dengan mudah dan pantas melalui permohonan atas talian.',
            itemLink: 'pinjaman-peribadi-kl-sarawak',
          },
          {
            itemTitle: 'Pinjaman Tambah Nilai',
            itemDescription:
              'Pinjaman peribadi tidak mencukupi? Pinjaman Tambah Nilai boleh selesaikan masalah anda.',
            itemLink: 'pinjaman-koperasi',
          },
        ],
      },
      {
        sectionTitle: 'Kenapa Ramai Memilih Loanbuddy Credit?',
        items: [
          {
            itemTitle: 'Kredibel',
            itemDescription:
              'Telus, profesional dan komited untuk perkhidmatan yang optimum - kami adalah pemberi pinjaman wang berlesen di bawah Kementerian Perumahan dan Kerajaan Tempatan (KPKT).',
          },
          {
            itemTitle: 'Permohonan Mudah',
            itemDescription:
              'Dokumen ringkas, proses mudah. Segalanya direka untuk memudahkan proses pinjaman tanpa tekanan.',
          },
          {
            itemTitle: 'Kelulusan Pantas',
            itemDescription:
              'Kelulusan permohonan pinjaman dalam masa 1-2 hari bekerja dan pindahan wang pada hari yang sama selepas permohonan diluluskan.',
          },
        ],
      },
      {
        sectionTitle: 'Apa Kata Pelanggan Loanbuddy Credit?',
        items: [
          {
            itemTitle: 'Encik Samsudin',
            itemDescription:
              'Staf sangat membantu dan soalan saya semua dijawab dengan penuh kesabaran dan boleh nampak staf tau apa yang dia nak sampaikan.',
          },
          {
            itemTitle: 'Fatimah binti Said',
            itemDescription: 'Sgt efisien dr segi kelulusan. Sentiasa bagi update.',
          },
          {
            itemTitle: 'Mr. Wong',
            itemDescription:
              'The process is very fast... and friendly staff.. they will guide from a-z so no need worry bc they will not leave u hanging. answer many questions quite good..',
          },
        ],
      },
      {
        sectionTitle: 'Sumber & Blog',
        items: [
          {
            itemTitle: 'Penyatuan Hutang',
            itemDescription: 'Baca artikel',
            itemLink: 'penyatuan-hutang-kad-kredit-2026',
          },
          {
            itemTitle: 'Jenis-Jenis Pinjaman di Malaysia',
            itemDescription: 'Baca artikel',
            itemLink: 'kesan-opr-pinjaman-peribadi',
          },
          {
            itemTitle:
              'Kurangkan Beban Kewangan Anda dengan Penyatuan Hutang di Loanbuddy Credit',
            itemDescription: 'Baca artikel',
            itemLink: 'pinjaman-peribadi-ccris-ptptn-2026',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Loanbuddy Credit - Pinjaman Peribadi Lulus Segera',
      metaDescription:
        'Mohon pinjaman peribadi atas talian dengan kelulusan pantas dan kadar faedah yang berpatutan.',
    },
  },

  {
    title: 'Tentang Loanbuddy Credit (About Us)',
    slug: 'tentang-loanbuddy-credit',
    hero: {
      badgeText: 'Tentang Kami',
      heading: 'Tentang Loanbuddy Credit',
      subheading:
        'Loanbuddy Credit percaya setiap individu layak mendapat akses kewangan yang mudah, mesra dan meyakinkan. Selama lebih 10 tahun berkhidmat dalam dunia kewangan, kami telah membantu ramai pelanggan mencapai impian mereka melalui pembiayaan peribadi, koperasi, konsolidasi, pendidikan, perumahan hingga perniagaan - semuanya dengan proses yang cepat, telus dan selamat.',
      primaryCtaText: 'Mohon Sekarang',
      primaryCtaLink: 'mohon-pinjaman-online',
    },
    sections: [
      {
        sectionBadge: 'Moto & Visi',
        sectionTitle: 'Rakan Perjalanan Kewangan Anda',
        sectionDescription:
          'Loanbuddy Credit bukan sekadar penyedia pinjaman. Kami adalah rakan perjalanan kewangan anda dalam setiap langkah, cabaran dan peluang.',
        items: [],
      },
      {
        sectionBadge: 'Kelebihan',
        sectionTitle: 'Kelebihan Loanbuddy Credit',
        sectionDescription:
          'Kelebihan utama memilih Loanbuddy Credit sebagai rakan pembiayaan anda.',
        items: [
          {
            itemTitle: 'Penjimatan masa:',
            itemDescription:
              'Proses yang biasanya mengambil masa berhari-hari kini boleh diselesaikan hanya dalam beberapa minit bersama kami.',
          },
          {
            itemTitle: 'Cekap:',
            itemDescription:
              'Tak perlu pening kepala menyelidik banyak pemberi pinjaman. Kami sediakan pilihan terbaik yang sesuai untuk anda - semuanya sah dan boleh dipercayai.',
          },
          {
            itemTitle: 'Ketenangan fikiran:',
            itemDescription:
              'Hanya berurusan dengan pemberi pinjaman yang telah disemak teliti oleh pasukan pakar kami. Jadi, anda boleh rasa lebih yakin dengan setiap langkah.',
          },
          {
            itemTitle: 'Kesahihan maklumat:',
            itemDescription:
              'Semua maklumat yang anda terima daripada kami telah disahkan, supaya anda boleh membuat keputusan kewangan dengan lebih tenang dan bijak.',
          },
          {
            itemTitle: 'Mengurangkan tekanan:',
            itemDescription:
              'Kurangkan kemungkinan pinjaman tidak diluluskan dengan memohon pemberi pinjaman yang telah dipadankan.',
          },
        ],
      },
      {
        sectionBadge: 'KPKT',
        sectionTitle: 'Semakan KPKT Pinjaman Berlesen',
        sectionDescription:
          'Loanbuddy Credit merupakan pemberi pinjaman wang berlesen dan berdaftar di bawah KPKT Malaysia. Pengguna boleh membuat semakan KPKT pinjaman berlesen melalui laman rasmi KPKT untuk pengesahan status lesen dan jaminan keselamatan sebelum memohon pinjaman.',
        items: [],
      },
      {
        sectionBadge: 'Ciri-ciri Utama',
        sectionTitle: 'Kenapa Pilih Loanbuddy Credit?',
        sectionDescription:
          '8 Sebab utama memilih perkhidmatan pembiayaan Loanbuddy Credit.',
        items: [
          {
            itemTitle: 'Kadar Faedah',
            itemDescription: 'Kadar faedah 1.5% sebulan atau 18% setahun (tetap)',
          },
          {
            itemTitle: 'Amaun Pinjaman',
            itemDescription: 'Amaun pinjaman dari RM1,000 sehingga RM50,000',
          },
          {
            itemTitle: 'Tempoh Pinjaman',
            itemDescription: 'Tempoh pinjaman fleksibel dari 12 bulan sehingga 60 bulan.',
          },
          {
            itemTitle: 'Tiada Pegang Kad ATM',
            itemDescription: 'Tidak pegang kad ATM, tiada bayaran pendahuluan',
          },
          {
            itemTitle: 'Kelulusan Pantas',
            itemDescription:
              'Kelulusan permohonan pinjaman dalam masa 1-2 hari bekerja dan pindahan wang pada hari yang sama',
          },
          {
            itemTitle: 'Pemberi Pinjaman Berlesen',
            itemDescription:
              'Pemberi pinjaman berlesen di bawah Kementerian Perumahan dan Kerajaan Tempatan (KPKT)',
          },
          {
            itemTitle: 'Permohonan Mudah',
            itemDescription: 'Permohonan mudah dan pantas, dengan langkah yang jelas dan efisien',
          },
          {
            itemTitle: 'Kemudahan Pembayaran',
            itemDescription:
              'Kemudahan pembayaran dalam talian tersedia (Direct Debit, pemindahan bank dalam talian, atau JomPay)',
          },
        ],
      },
      {
        sectionBadge: 'Rakan Setia',
        sectionTitle: 'Rakan Setia Kewangan yang Boleh Anda Percayai',
        sectionDescription:
          'Sama ada anda ingin memulakan perniagaan, membeli rumah atau meneruskan pengajian – kami ada untuk memudahkan perjalanan anda. Bersama Loanbuddy Credit, anda berada di tangan yang selamat!',
        items: [],
      },
      {
        sectionBadge: 'Komitmen',
        sectionTitle: 'Loanbuddy Credit Komited Membantu Anda',
        sectionDescription:
          'Setiap hari, kami membantu rakyat Malaysia mencari jalan kewangan yang lebih teratur dengan cara yang mudah, yakin dan selamat. Dah bersedia untuk urusan pinjaman yang lebih lancar? Biarkan Loanbuddy Credit jadi panduan anda.\n\nLoanbuddy Credit – ruang pencarian pinjaman anda berakhir, impian jadi nyata dan kepercayaan anda sentiasa dihargai.',
        items: [],
      },
      {
        sectionBadge: 'Bantuan Segera',
        sectionTitle:
          'Perlukan Pinjaman Peribadi? \nLoanbuddy Credit Sedia Berkhidmat untuk Anda!',
        sectionDescription: 'Mohon Sekarang',
        items: [
          {
            itemTitle: 'Mohon Sekarang',
            itemDescription: 'mohon-pinjaman-online',
            itemLink: 'mohon-pinjaman-online',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Tentang Loanbuddy Credit - Rakan Kewangan Dipercayai',
      metaDescription:
        'Ketahui latar belakang dan komitmen Loanbuddy Credit dalam menyediakan penyelesaian pinjaman yang selamat dan telus.',
    },
  },
  {
    title: 'Hubungi Kami (Contact Us)',
    slug: 'hubungi-kami',
    hero: {
      badgeText: 'Hubungi Kami',
      heading: 'Hubungi Kami',
      subheading:
        'Ada sebarang pertanyaan? Kongsikan mesej anda di sini dan kami akan membalas secepat mungkin untuk membantu anda!',
      primaryCtaText: 'Kirim Mesej',
      primaryCtaLink: '#subscribeForm',
      secondaryCtaText:
        'https://www.google.com/maps/d/u/0/embed?mid=1u9eA-xFNCD0Ddtd3HYLSnCgvoWwOZgw',
    },
    sections: [
      {
        sectionBadge: 'Cawangan Kami',
        sectionTitle: 'Cawangan & Lokasi Rasmi',
        sectionDescription:
          'Kunjungi cawangan kami atau hubungi pegawai khidmat pelanggan kami melalui WhatsApp.',
        items: [
          {
            itemTitle: 'Cawangan Kuala Lumpur',
            itemDescription:
              'No.15-4, Jalan Medan Tuanku 1, Medan Tuanku, 50300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur | kl@loanbuddycredit.com.my | +6018 785 6072',
            itemLink: 'https://wa.link/taaakr',
          },
          {
            itemTitle: 'Cawangan Kuching, Sarawak',
            itemDescription:
              '1st Floor, Lot 9269 (SL.75) Bandar Riyal, Jalan Muara Tuang Kota Samarahan, 94300 Kuching, Sarawak | ks@loanbuddycredit.com.my | +6010 932 9976',
            itemLink: 'https://wa.link/32cpg5',
          },
          {
            itemTitle: 'Cawangan Bintulu, Sarawak',
            itemDescription:
              'Lot 8093, Sublot 20, 1st Floor, Bintulu Sentral, Jln Kidurong, 97000 Bintulu, Sarawak | bintulu@loanbuddycredit.com.my | +6010 909 8557',
            itemLink: 'https://wa.link/6v806i',
          },
        ],
      },
      {
        sectionBadge: 'Borang Pertanyaan',
        sectionTitle: 'Ada Sebarang Pertanyaan?',
        sectionDescription:
          'Ada sebarang pertanyaan? Kongsikan mesej anda di sini \ndan kami akan membalas secepat mungkin untuk membantu anda!',
        items: [
          {
            itemTitle: 'Butang Kirim',
            itemDescription: 'Kirim Mesej',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Hubungi Loanbuddy Credit - Cawangan & Khidmat Pelanggan',
      metaDescription:
        'Hubungi cawangan Loanbuddy Credit di Kuala Lumpur, Kuching, dan Bintulu melalui WhatsApp, emel atau kunjungi pejabat kami.',
    },
  },
  {
    title: 'Soalan Lazim (FAQ)',
    slug: 'soalan-lazim-faq',
    hero: {
      badgeText: 'Soalan Lazim',
      heading: 'Soalan Lazim Tentang Loanbuddy Credit',
      subheading:
        'Temui jawapan terperinci untuk soalan-soalan lazim anda dan dapatkan maklumat yang anda perlukan dengan cepat.',
      primaryCtaText: 'Tanya Soalan',
      primaryCtaLink: 'hubungi-kami',
    },
    sections: [
      {
        sectionBadge: 'Umum',
        sectionTitle: 'Soalan Lazim Mengenai Pinjaman',
        sectionDescription:
          'Segala pertanyaan lazim mengenai syarat kelayakan, kaedah permohonan dan kelulusan.',
        items: [
          {
            itemTitle: 'Apakah dokumen yang diperlukan untuk memohon?',
            itemDescription:
              'Salinan Kad Pengenalan (IC), slip gaji 3 bulan terkini, dan penyata bank 3 bulan terkini.',
          },
          {
            itemTitle: 'Berapakah had amaun pinjaman yang boleh dipohon?',
            itemDescription:
              'Had pinjaman bergantung kepada kelayakan dan pendapatan bulanan anda, bermula dari RM1,000 hingga RM100,000.',
          },
          {
            itemTitle: 'Berapa lamakah tempoh bayaran balik?',
            itemDescription:
              'Tempoh bayaran balik adalah fleksibel, antara 6 bulan hingga 60 bulan (5 tahun).',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Soalan Lazim (FAQ) - Loanbuddy Credit',
      metaDescription: 'Jawapan lengkap kepada soalan lazim mengenai syarat, kadar faedah dan proses permohonan pinjaman.',
    },
  },
  {
    title: 'Mohon Pinjaman Online (Apply Form)',
    slug: 'mohon-pinjaman-online',
    hero: {
      badgeText: 'Selamat Datang ke Loanbuddy Credit!',
      heading: 'Pinjaman Peribadi Sehingga RM50,000\nMohon Hari ini!',
      subheading:
        'Satu Langkah mudah untuk mencapai kestabilan kewangan yang anda perlukan. Pilih Loanbuddy Credit!',
      primaryCtaText: 'Hantar',
      primaryCtaLink: '#applyForm',
      secondaryCtaText:
        'Permohonan pinjaman hanya terbuka untuk warganegara Malaysia sahaja.',
    },
    sections: [
      {
        sectionBadge: 'Dokumen & Panduan',
        sectionTitle: 'Apa yang anda perlukan untuk memohon?',
        sectionDescription: 'Dokumen Diperlukan Untuk Permohonan',
        items: [
          {
            itemTitle: '1. Dokumen Diperlukan Untuk Permohonan',
            itemDescription:
              'Salinan kad pengenalan (depan dan belakang)\nPenyata bank pengkreditan gaji 3 bulan terkini (format PDF)\nSlip gaji 3 bulan terkini (format PDF) dan/atau\nBil utiliti 1 bulan terkini (air, elektrik, dll.)',
          },
          {
            itemTitle:
              '2. Semua transaksi pembayaran boleh dilakukan melalui saluran berikut:',
            itemDescription:
              'Semua transaksi pembayaran boleh dilakukan melalui saluran JomPay, Direct Debit dan Bank Transfer.',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Mohon Pinjaman Online - Kelulusan Segera | Loanbuddy Credit',
      metaDescription: 'Borang permohonan pinjaman peribadi atas talian. Cepat, selamat dan mudah.',
    },
  },
  {
    title: 'Pinjaman Peribadi',
    slug: 'pinjaman-peribadi',
    hero: {
      badgeText: 'Khas Untuk Individu',
      heading: 'Pinjaman Peribadi Online',
      subheading:
        'Loanbuddy Credit menyediakan Pinjaman Peribadi dalam Talian yang lebih pantas dan memudahkan anda untuk mencapai matlamat kewangan peribadi dan aliran tunai yang lebih terkawal.',
      primaryCtaText: 'Mohon Sekarang',
      primaryCtaLink: 'mohon-pinjaman-online',
    },
    sections: [
      {
        sectionBadge: 'Ciri-ciri Utama',
        sectionTitle: 'Ciri-ciri Pinjaman Peribadi',
        sectionDescription:
          'Kelebihan dan kemudahan pembiayaan peribadi bersama Loanbuddy Credit.',
        items: [
          {
            itemTitle: 'Kadar Faedah',
            itemDescription: 'Kadar faedah 1.5% sebulan atau 18% setahun',
          },
          {
            itemTitle: 'Amaun Pinjaman',
            itemDescription: 'Amaun pinjaman dari RM1,000 sehingga RM50,000',
          },
          {
            itemTitle: 'Tempoh Pinjaman',
            itemDescription: 'Tempoh pinjaman fleksibel 12 hingga 60 bulan',
          },
          {
            itemTitle: 'Kad ATM',
            itemDescription: 'Tidak pegang kad ATM',
          },
          {
            itemTitle: 'Kelulusan Pantas',
            itemDescription: 'Kelulusan dalam masa 1-2 hari bekerja',
          },
          {
            itemTitle: 'Pemberi Pinjaman Berlesen',
            itemDescription: 'Pemberi pinjaman berlesen di bawah KPKT',
          },
          {
            itemTitle: 'Pindahan Hari Sama',
            itemDescription: 'Kelulusan dan pemindahan pada hari yang sama',
          },
          {
            itemTitle: 'Permohonan Mudah',
            itemDescription: 'Permohonan mudah, pantas dan efisien',
          },
        ],
      },
      {
        sectionBadge: 'Langkah Permohonan',
        sectionTitle: 'Cara Permohonan Pinjaman Peribadi',
        sectionDescription:
          '3 Langkah mudah untuk memohon pinjaman peribadi dengan kelulusan pantas.',
        items: [
          {
            itemTitle: 'Langkah 1',
            itemDescription: "Tekan butang 'Mohon Sekarang'",
          },
          {
            itemTitle: 'Langkah 2',
            itemDescription: 'Isi maklumat yang diperlukan dan hantar permohonan',
          },
          {
            itemTitle: 'Langkah 3',
            itemDescription:
              'Pakar kredit kami akan menghubungi anda melalui WhatsApp atau emel dalam masa terdekat',
          },
        ],
      },
      {
        sectionBadge: 'Bantuan Segera',
        sectionTitle:
          'Perlukan Pinjaman Peribadi? Loanbuddy Credit Sedia Berkhidmat untuk Anda!',
        sectionDescription:
          'Hubungi kami atau mohon secara dalam talian untuk kelulusan segera.',
        items: [
          {
            itemTitle: 'Mohon Sekarang',
            itemDescription: 'mohon-pinjaman-online',
            itemLink: 'mohon-pinjaman-online',
          },
        ],
      },
      {
        sectionBadge: 'Soalan Lazim',
        sectionTitle: 'Soalan Lazim',
        sectionDescription:
          'Jawapan kepada pertanyaan yang sering dikemukakan mengenai Pinjaman Peribadi.',
        items: [
          {
            itemTitle: 'Apa itu Pinjaman Peribadi?',
            itemDescription:
              'Pinjaman Peribadi ialah sejumlah wang yang dipinjam oleh individu daripada institusi kewangan seperti bank, pemberi pinjaman wang berlesen atau koperasi. Pinjaman ini dikenakan kadar faedah serta mempunyai tempoh pembayaran balik yang telah dipersetujui.',
          },
          {
            itemTitle: 'Apakah Perbezaan Jenis Pinjaman Peribadi di Malaysia?',
            itemDescription:
              'Terdapat dua jenis pinjaman peribadi yang tersedia: pinjaman bercagar (memerlukan aset sebagai jaminan) dan tidak bercagar (penilaian berdasarkan pendapatan, skor kredit, dan status pekerjaan tanpa memerlukan cagaran aset).',
          },
          {
            itemTitle:
              'Apakah syarat untuk memohon pinjaman peribadi dari pemberi pinjaman wang berlesen?',
            itemDescription:
              'Anda layak meminjam sekiranya anda adalah warganegara Malaysia, berumur antara 18 sehingga 60 tahun, mempunyai pekerjaan tetap dengan minimum pendapatan RM1,700, dan tidak diisytiharkan muflis.',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Pinjaman Peribadi Online - Loanbuddy Credit',
      metaDescription:
        'Loanbuddy Credit menyediakan Pinjaman Peribadi dalam Talian yang lebih pantas dan memudahkan anda untuk mencapai matlamat kewangan peribadi dan aliran tunai yang lebih terkawal.',
    },
  },
  {
    title: 'Pinjaman Koperasi (Pinjaman Tambah Nilai)',
    slug: 'pinjaman-koperasi',
    hero: {
      badgeText: 'Khas Pelanggan Sedia Ada',
      heading: 'Pinjaman Tambah Nilai',
      subheading:
        'Loanbuddy Credit menawarkan Pinjaman Tambah Nilai di mana anda boleh top up* pinjaman sedia ada anda untuk keperluan kewangan kecemasan pada bila-bila masa, di mana sahaja anda berada.\n\n*Tertakluk kepada terma dan syarat',
      primaryCtaText: 'Top Up Sekarang',
      primaryCtaLink: 'mohon-pinjaman-online',
    },
    sections: [
      {
        sectionBadge: 'Pengenalan',
        sectionTitle: 'Apa Itu Pinjaman Tambah Nilai?',
        sectionDescription:
          'Pinjaman Tambah Nilai merupakan pinjaman di mana anda boleh tambah ke atas pinjaman sedia ada anda.\n\n- Top up pinjaman sedia ada anda untuk menampung keperluan kewangan tambahan.\n- Sebarang faedah tertunggak daripada pinjaman terdahulu akan dikecualikan selepas pinjaman tambah nilai anda diluluskan.\n\nTiada caj tambahan atau tersembunyi, menjadikan proses lebih mudah dan lancar.',
        videoUrl:
          'https://drive.google.com/file/d/1i2ifqzZ7n0sjni1v9hsa3Asf9gBup8Xv/preview',
        items: [],
      },
      {
        sectionBadge: 'Kelebihan',
        sectionTitle: 'Kenapa Memohon untuk Tambah Nilai?',
        sectionDescription:
          '4 Kelebihan utama memilih Pinjaman Tambah Nilai Loanbuddy Credit.',
        items: [
          {
            itemTitle: 'Rekod Pembayaran Baik',
            itemDescription:
              'Tersedia untuk pelanggan Loanbuddy Credit yang mempunyai perjanjian pinjaman sedia dan rekod pembayaran baik',
          },
          {
            itemTitle: 'Senang Top Up',
            itemDescription:
              'Senang untuk Top Up pinjaman sedia ada untuk menampung keperluan kewangan tambahan',
          },
          {
            itemTitle: 'Tiada Caj Tambahan',
            itemDescription:
              'Tiada caj tambahan atau tersembunyi—proses lebih mudah dan lancar',
          },
          {
            itemTitle: 'Faedah Dikecualikan',
            itemDescription:
              'Selepas Top Up, sebarang faedah tertunggak daripada pinjaman terdahulu akan dikecualikan',
          },
        ],
      },
      {
        sectionBadge: 'Kaedah',
        sectionTitle: 'Kaedah Tambah Nilai/Top-Up',
        sectionDescription:
          'Kaedah dan cara pengiraan jumlah pembiayaan bagi Pinjaman Top-Up.',
        items: [
          {
            itemTitle: 'Pengiraan Baki',
            itemDescription:
              'Jumlah pembiayaan bagi Pinjaman Top-Up dikira dengan menolak baki pinjaman terdahulu daripada amaun prinsipal Pinjaman Top-Up yang anda mohon',
          },
          {
            itemTitle: 'Penyelesaian Akaun Terdahulu',
            itemDescription:
              'Sebaik sahaja permohonan Pinjaman Top-Up anda diluluskan, akaun pinjaman terdahulu anda akan dianggap selesai sepenuhnya, dan akaun Pinjaman Top-Up yang baharu akan dibuka. Jadual pembayaran balik anda juga akan dikemas kini.',
          },
          {
            itemTitle: 'Had Jumlah Pinjaman',
            itemDescription:
              'Jumlah Pinjaman Top-Up mesti sama atau lebih tinggi daripada jumlah pinjaman terdahulu.',
          },
        ],
      },
      {
        sectionBadge: 'Langkah Permohonan',
        sectionTitle: 'Cara Permohonan Pinjaman Peribadi',
        sectionDescription:
          '3 Langkah mudah untuk memohon pinjaman dengan kelulusan pantas.',
        items: [
          {
            itemTitle: 'Langkah 1',
            itemDescription: "Tekan butang \n'Mohon Sekarang'",
          },
          {
            itemTitle: 'Langkah 2',
            itemDescription: 'Isi maklumat yang diperlukan dan \nhantar permohonan',
          },
          {
            itemTitle: 'Langkah 3',
            itemDescription:
              'Pakar kredit kami akan menghubungi anda melalui WhatsApp atau emel dalam masa terdekat',
          },
        ],
      },
      {
        sectionBadge: 'Bantuan Segera',
        sectionTitle:
          'Perlukan Pinjaman Peribadi? \nLoanbuddy Credit Sedia Berkhidmat untuk Anda!',
        sectionDescription:
          'Hubungi kami atau mohon secara dalam talian untuk kelulusan segera.',
        items: [
          {
            itemTitle: 'Mohon Sekarang',
            itemDescription: 'mohon-pinjaman-online',
            itemLink: 'mohon-pinjaman-online',
          },
        ],
      },
      {
        sectionBadge: 'Soalan Lazim',
        sectionTitle: 'Soalan Lazim',
        sectionDescription:
          'Jawapan kepada soalan lazim berkaitan pinjaman.',
        items: [
          {
            itemTitle: 'Apa itu Pinjaman Peribadi?',
            itemDescription:
              'Pinjaman Peribadi ialah sejumlah wang yang dipinjam oleh individu daripada institusi kewangan seperti bank, pemberi pinjaman wang berlesen atau koperasi. Pinjaman ini dikenakan kadar faedah serta mempunyai tempoh pembayaran balik yang telah dipersetujui.',
          },
          {
            itemTitle: 'Apakah Perbezaan Jenis Pinjaman Peribadi di Malaysia?',
            itemDescription:
              'Terdapat dua jenis pinjaman peribadi yang tersedia: pinjaman bercagar (memerlukan aset sebagai jaminan) dan tidak bercagar (penilaian berdasarkan pendapatan, skor kredit, dan status pekerjaan tanpa memerlukan cagaran aset).',
          },
          {
            itemTitle:
              'Apakah syarat untuk memohon pinjaman peribadi dari pemberi pinjaman wang berlesen?',
            itemDescription:
              'Anda layak meminjam sekiranya anda adalah warganegara Malaysia, berumur antara 18 sehingga 60 tahun, mempunyai pekerjaan tetap dengan minimum pendapatan RM1,700, dan tidak diisytiharkan muflis.',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Pinjaman Tambah Nilai (Top-Up) - Loanbuddy Credit',
      metaDescription:
        'Loanbuddy Credit menawarkan Pinjaman Tambah Nilai di mana anda boleh top up pinjaman sedia ada anda untuk keperluan kewangan kecemasan.',
    },
  },
  {
    title: 'Pembayaran (Payment)',
    slug: 'pembayaran',
    hero: {
      badgeText: 'Panduan Pembayaran',
      heading: 'Kaedah Pembayaran',
      subheading:
        'Loanbuddy Credit kini menerima bayaran balik melalui Direct Debit, pemindahan bank dalam talian atau JomPay ke akaun bank rasmi Loanbuddy Credit, di mana pihak Loanbuddy Credit akan memaklumkan penerimaan bayaran balik kepada anda melalui panggilan, SMS atau WhatsApp.',
      secondaryCtaText:
        'Pihak Loanbuddy Credit tidak menerima sebarang pembayaran tunai di mana-mana cawangan. Pastikan anda melakukan bayaran balik ke SATU (1) akaun bank rasmi sahaja untuk mengelakkan daripada sebarang penipuan dan penyamaran.',
    },
    sections: [
      {
        sectionBadge: 'Hubungi Cawangan',
        sectionTitle: 'Cawangan & Talian WhatsApp Rasmi',
        sectionDescription:
          'Hubungi cawangan rasmi kami untuk sebarang urusan pembayaran dan semakan akaun.',
        items: [
          {
            itemTitle: 'Cawangan Kuala Lumpur',
            itemDescription: 'kl@loanbuddycredit.com.my | +6018 785 6072',
            itemLink: 'https://wa.link/taaakr',
          },
          {
            itemTitle: 'Cawangan Kuching, Sarawak',
            itemDescription: 'ks@loanbuddycredit.com.my | +6010 932 9976',
            itemLink: 'https://wa.link/32cpg5',
          },
          {
            itemTitle: 'Cawangan Bintulu, Sarawak',
            itemDescription: 'bintulu@loanbuddycredit.com.my | +6010 909 8557',
            itemLink: 'https://wa.link/6v806i',
          },
        ],
      },
      {
        sectionBadge: 'Soalan Lazim',
        sectionTitle: 'Soalan Lazim',
        sectionDescription:
          'Soalan lazim mengenai kaedah pembayaran balik, penyelesaian awal dan semakan akaun.',
        items: [
          {
            itemTitle: 'Bagaimanakah cara saya meminta penyelesaian penuh/awal?',
            itemDescription:
              'Anda boleh menjelaskan pinjaman sebelum tempoh matang pinjaman anda pada bila-bila masa tanpa dikenakan yuran penamatan kerana pinjaman Loanbuddy Credit tiada tempoh lock-in. Namun, anda dikehendaki untuk memaklumkan Loanbuddy Credit sekurang-kurangnya 30 hari sebelum tarikh pembayaran balik penuh/awal dan anda dikehendaki membuat pembayaran penuh bagi jumlah pokok tertunggak dan faedah yang dibilkan sahaja.\n\nAnda juga boleh menghubungi Loanbuddy Credit atau menghantar e-mel sebelum membayar jumlah pinjaman anda untuk keterangan lebih lanjut.',
          },
          {
            itemTitle: 'Bagaimana untuk menyemak jumlah ansuran bulanan saya?',
            itemDescription:
              'Anda boleh menyemak butiran pinjaman anda dengan menghubungi pihak Loanbuddy Credit melalui WhatsApp.',
          },
          {
            itemTitle:
              'Bagaimanakah saya tahu jika pembayaran balik saya telah diterima?',
            itemDescription:
              'Setelah pembayaran balik telah diproses, anda akan menerima panggilan, SMS atau WhatsApp pengesahan daripada Loanbuddy Credit.',
          },
          {
            itemTitle: 'Bilakah tarikh pembayaran balik pertama saya?',
            itemDescription:
              '1. Jika kontrak ditandatangani sebelum atau pada 14 haribulan, tarikh pembayaran balik pertama anda ialah pada 1 haribulan seterusnya.\n2. Jika kontrak ditandatangani pada atau selepas 15 haribulan, tarikh pembayaran balik pertama anda ialah pada 1 haribulan selepas bulan seterusnya.',
          },
          {
            itemTitle:
              'Bagaimanakah cara saya membuat pembayaran balik kepada Loanbuddy Credit?',
            itemDescription:
              'Pada masa ini, Loanbuddy Credit hanya menerima pembayaran balik melalui Direct Debit, pemindahan bank dalam talian dan JomPay. Loanbuddy Credit tidak menerima pembayaran balik secara tunai di mana-mana cawangan kami.',
          },
          {
            itemTitle: 'Bagaimanakah saya meminta bayaran pulangan?',
            itemDescription:
              'Loanbuddy Credit akan menghubungi anda melalui panggilan, SMS atau WhatsApp. Loanbuddy Credit akan membayar balik lebihan dana apabila pihak kami mengesahkan bahawa anda telah membuat penyelesaian penuh dengan lebihan dana.\n\nJika anda membayar ansuran bulanan anda dengan lebihan dana dan ingin meminta bayaran balik sebelum penyelesaian penuh, sila hubungi pihak kami melalui panggilan, WhatsApp atau e-mel.',
          },
          {
            itemTitle: 'Bagaimana jika saya gagal membayar hutang bulanan saya?',
            itemDescription:
              'Wakil Loanbuddy Credit akan membuat panggilan kepada anda. Anda dikehendaki membayar caj pembayaran lewat (8.0% setiap jumlah ansuran tertunggak). Ia dikira setiap hari dan dicaj pada hari terakhir.',
          },
          {
            itemTitle:
              'Bagaimana untuk menyemak tarikh akhir pembayaran balik saya?',
            itemDescription:
              'Anda boleh menyemak butiran akaun anda dengan menghubungi Loanbuddy Credit melalui WhatsApp atau e-mel.',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Kaedah Pembayaran - Loanbuddy Credit',
      metaDescription:
        'Maklumat kaedah pembayaran balik, direct debit, JomPay dan soalan lazim pembayaran pinjaman Loanbuddy Credit.',
    },
  },
]

export async function seedDefaultPages(payload: Payload) {
  try {
    const existingPages = await payload.find({
      collection: 'pages',
      limit: 100,
    })

    const existingPagesMap = new Map(
      existingPages.docs.map((page: any) => [page.slug, page])
    )

    for (const page of defaultPagesData) {
      const existing = existingPagesMap.get(page.slug)

      if (!existing) {
        // Create new page entry with full default data
        await payload.create({
          collection: 'pages',
          data: page as any,
        })
        console.log(`[Seed] Created default page entry: ${page.slug}`)
      } else {
        // Update existing page sections and hero with the accurate template, preserving any uploaded media
        const updatedSections = page.sections?.map((defaultSec, sIdx) => {
          const existingSec = existing.sections?.[sIdx]
          return {
            ...defaultSec,
            sectionImage: existingSec?.sectionImage || undefined,
            items: defaultSec.items?.map((defaultItem, iIdx) => {
              const existingItem = existingSec?.items?.[iIdx]
              return {
                ...defaultItem,
                itemImage: existingItem?.itemImage || undefined,
              }
            }),
          }
        })

        const updatedBanners =
          existing.banners && existing.banners.length > 0
            ? existing.banners
            : page.banners?.map((b, idx) => ({
                ...b,
                bannerImage: idx === 0 && existing.hero?.heroImage ? existing.hero.heroImage : (b.bannerImage || undefined),
              }))

        await payload.update({
          collection: 'pages',
          id: existing.id,
          data: {
            banners: updatedBanners,
            hero: {
              ...page.hero,
              // Retain uploaded hero image if user uploaded one
              heroImage: existing.hero?.heroImage || undefined,
            },
            sections: updatedSections,
            seo: page.seo,
          } as any,
        })
        console.log(`[Seed] Updated and synced sections for existing page: ${page.slug}`)
      }
    }
  } catch (error) {
    console.error('[Seed] Error seeding default pages:', error)
  }
}


