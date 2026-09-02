import type { Payload } from 'payload'

export interface DefaultPageData {
  title: string
  slug: string
  banners?: Array<{
    heading: string
    subheading?: string
    primaryCtaText?: string
    primaryCtaLink?: string
    bannerImage?: string
  }>
  hero: {
    badgeText?: string
    heading: string
    subheading?: string
    primaryCtaText?: string
    primaryCtaLink?: string
    secondaryCtaText?: string
    secondaryCtaLink?: string
    heroImage?: string
  }
  sections?: Array<{
    sectionBadge?: string
    sectionTitle: string
    sectionDescription?: string
    videoUrl?: string
    sectionImage?: string
    thumbnailImage?: string
    items?: Array<{
      itemTitle: string
      itemDescription?: string
      itemLink?: string
      itemImage?: string
    }>
  }>
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
      {
        heading: 'Loanbuddy Credit\ndi Hujung Jari Anda',
        subheading:
          'Permohonan pinjaman peribadi kini lebih pantas dan mudah. Muat turun aplikasi kami sekarang untuk memohon pada bila-bila masa, di mana jua.',
        primaryCtaText: 'Ketahui Lebih Lanjut',
        primaryCtaLink: 'loan-compare',
        bannerImage: '/assets/images/App-banners-No-Copy.png',
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
        'https://www.google.com/maps/d/embed?mid=1_Q6pIm1rAxMyXKvZ4nAlypvYi3L9ruM',
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
    title: 'Perkhidmatan Kami (Our Services)',
    slug: 'perkhidmatan-kami',
    hero: {
      badgeText: 'Perkhidmatan Pinjaman',
      heading: 'Terokai Perkhidmatan Pinjaman Online:\nPinjaman Peribadi Online dan Pinjaman Tambah Nilai',
      subheading:
        'Loanbuddy Credit menyediakan perkhidmatan pinjaman kewangan peribadi untuk anda yang mencari penyelesaian masalah kewangan. Kami amat memahami keperluan anda dan sentiasa bersedia untuk membantu anda dengan perkhidmatan kewangan yang memuaskan dan berbaloi.\n\nMatlamat kami adalah untuk memberikan bantuan kewangan yang telus, adil, dan mengikut keperluan individu.\n\nJangan bimbang, maklumat peribadi anda dijamin selamat dan terpelihara! Keselamatan data anda adalah keutamaan kami.',
      primaryCtaText: 'Mohon Sekarang',
      primaryCtaLink: 'mohon-pinjaman-online',
      heroImage: '/assets/images/banner/home-mohon/white-3d-bg.webp',
    },
    sections: [
      {
        sectionBadge: 'Perkhidmatan',
        sectionTitle: 'Perkhidmatan Pinjaman Loanbuddy Credit',
        sectionDescription:
          'Pilih perkhidmatan pinjaman yang bersesuaian dengan keperluan kewangan anda.',
        items: [],
      },
      {
        sectionBadge: 'Kelebihan',
        sectionTitle: 'Pinjaman Peribadi Online',
        sectionDescription:
          'Dalam kehidupan yang moden, hampir setiap keperluan memerlukan peruntukan kewangan yang mencukupi. Sama ada untuk situasi kecemasan, pembiayaan pendidikan anak, pengurusan bil bulanan, atau keperluan gaya hidup, pinjaman peribadi online kami direka untuk memastikan anda mendapat akses kepada dana yang diperlukan tepat pada waktunya.',
        items: [
          {
            itemTitle: 'Kelulusan Pantas',
            itemDescription:
              'Permohonan pinjaman peribadi Loanbuddy Credit boleh dibuat sepenuhnya secara online, dari mana-mana lokasi yang selesa untuk anda. Hanya isi maklumat ringkas, dan dengan dokumen lengkap, kelulusan boleh diperoleh seawal 24 jam*\n\n*Tertakluk kepada penilaian dan saringan individu.',
            itemImage: '/assets/images/permohonan-mudah.png',
          },
          {
            itemTitle: 'Syarat-Syarat Fleksibel',
            itemDescription:
              'Syarat-syarat fleksibel Loanbuddy Credit direka untuk memenuhi keperluan pelbagai lapisan masyarakat. Dari tempoh pembayaran balik hingga syarat umur dan pendapatan, setiap permohonan dipertimbangkan secara peribadi dan profesional agar selaras dengan keperluan kewangan individu.',
            itemImage: '/assets/images/syarat-fleksibel.png',
          },
          {
            itemTitle: 'Tidak Memegang Kad ATM',
            itemDescription:
              'Loanbuddy Credit tidak memegang sebarang kad ATM atau kad pengenalan dari peminjaman-peminjam kami, sesuai dan selaras dengan standard prosedur di bawah Kementerian Perumahanan dan Kerajaan Tempatan (KPKT).',
            itemImage: '/assets/images/kad-atm-2.png',
          },
        ],
      },
      {
        sectionBadge: 'Syarat & Terma',
        sectionTitle: 'Syarat Pinjaman Fleksibel Kami',
        sectionDescription:
          'Syarat permohonan yang mudah difahami dan mesra pelanggan.',
        items: [
          {
            itemTitle: 'Jumlah Pinjaman',
            itemDescription:
              'Pinjaman boleh dibuat dari serendah RM1,000 hingga maksimum RM50,000, tertakluk kepada kelayakan dan penilaian kredit.',
          },
          {
            itemTitle: 'Bayaran Balik Fleksibel',
            itemDescription:
              'Bayaran balik yang fleksibel tanpa caj penyelesaian awal. Selesaikan pinjaman anda pada bila-bila masa dalam tempoh pinjaman, memberikan anda kawalan penuh ke atas kewangan dan kebebasan untuk melangsaikan pinjaman mengikut kemampuan anda.',
          },
          {
            itemTitle: 'Pembayaran dalam Talian',
            itemDescription:
              'Kemudahan pembayaran dalam talian melalui Direct Debit, pemindahan bank dalam talian, dan JomPay tersedia agar bayaran balik pinjaman anda dapat dilakukan dengan lebih senang.',
          },
        ],
      },
      {
        sectionBadge: 'Tambah Nilai',
        sectionTitle: 'Pinjaman Tambah Nilai',
        sectionDescription:
          'Pinjaman Tambah Nilai Loanbuddy Credit ditawar khusus kepada pelanggan sedia ada yang memerlukan kewangan tambahan. Produk ini mengekalkan komitmen kami terhadap kemudahan, ketelusan dan kebolehpercayaan.',
        sectionImage: '/assets/images/ladybug-holding-phone.png',
        items: [
          {
            itemTitle: 'Integrasi Lancar',
            itemDescription:
              'Nikmati akses kemudahan Pinjaman Tambah Nilai melalui aplikasi kami atau hubungi khidmat pelanggan Loanbuddy Credit untuk bantuan segera.',
            itemImage: '/assets/images/integrasi-lancar.png',
          },
          {
            itemTitle: 'Terma Pembayaran Balik Lanjutan',
            itemDescription:
              'Jadual pembayaran balik yang dikemas kini akan dikeluarkan selepas kelulusan Pinjaman Tambah Nilai.',
            itemImage: '/assets/images/terma-pembayaran.png',
          },
          {
            itemTitle: 'Pengecualian Faedah Tertunggak',
            itemDescription:
              'Faedah tertunggak daripada pinjaman asal akan diketepikan (waived).',
            itemImage: '/assets/images/pengecualian-faedah.png',
          },
          {
            itemTitle: 'Permohonan Semula Lancar',
            itemDescription:
              'Mudah untuk menambah pinjaman sedia ada anda dengan permohonan semula yang pantas.',
            itemImage: '/assets/images/permohonan-semula-lancar.png',
          },
          {
            itemTitle: 'Jumlah Pinjaman Lebih Besar',
            itemDescription:
              'Nikmati pembiayaan yang lebih tinggi tanpa peningkatan kadar faedah.',
            itemImage: '/assets/images/jumlah-pinjaman-besar.png',
          },
        ],
      },
      {
        sectionBadge: 'Kelayakan',
        sectionTitle: 'Siapa yang Boleh Memohon?',
        sectionDescription:
          'Pinjaman online mudah lulus Loanbuddy Credit memberikan kemudahan permohonan dengan syarat yang fleksibel, memastikan anda dapat mengakses pembiayaan dengan cepat dan mudah.',
        items: [
          {
            itemTitle: 'Umur Pemohon',
            itemDescription:
              'Pemohon yang berumur antara 18 hingga 60 tahun, mempunyai bukti kewarganegaraan Malaysia, serta bekerja dan menetap di Malaysia.',
          },
          {
            itemTitle: 'Keperluan Pendapatan',
            itemDescription:
              'Dengan syarat pendapatan kasar bulanan serendah RM1,700, Loanbuddy Credit menawarkan pinjaman yang mesra pelanggan dan mudah diakses di Malaysia.',
          },
          {
            itemTitle: 'Pengecualian',
            itemDescription:
              'Pemohon tidak boleh diisytiharkan muflis atau terdedah kepada aktiviti politik. Individu yang bekerja secara bebas (freelance) juga tidak layak memohon.',
          },
        ],
      },
      {
        sectionBadge: 'Langkah Permohonan',
        sectionTitle: 'Proses Permohonan Mudah dan Tanpa Kerumitan',
        sectionDescription:
          'Permohonan pinjaman online mudah lulus Loanbuddy Credit boleh dilakukan sepenuhnya dalam talian, dengan langkah-langkah yang mudah dan efisien.',
        items: [
          {
            itemTitle: 'Langkah 1: Maklumat Pemohon',
            itemDescription:
              'Sila berikan butiran asas dan maklumat hubungan anda bagi membolehkan kami menghubungi anda.',
          },
          {
            itemTitle: 'Langkah 2: Lampirkan Dokumen',
            itemDescription:
              'Sila muat naik salinan MyKad dan penyata gaji / bank / KWSP terkini bagi tujuan pengesahan.',
          },
          {
            itemTitle: 'Langkah 3: Proses Kelulusan',
            itemDescription:
              'Loanbuddy Credit akan menyemak kelayakan kredit anda dengan mengambil kira nisbah hutang kepada pendapatan dan keadaan kewangan semasa.',
          },
          {
            itemTitle: 'Langkah 4: Tandatangan Kontrak dalam Talian',
            itemDescription:
              'Semak serta sahkan maklumat anda dan berikan tandatangan secara dalam talian untuk melengkapkan proses permohonan dalam talian.',
          },
          {
            itemTitle: 'Langkah 5: Terima Dana',
            itemDescription:
              'Dana pinjaman akan dikreditkan ke akaun berdaftar anda dalam tempoh 24 jam bekerja selepas perjanjian ditandatangani secara dalam talian.',
          },
        ],
      },
      {
        sectionBadge: 'Komitmen Kami',
        sectionTitle: 'Komitmen Kami kepada Anda',
        sectionDescription:
          'Perkhidmatan pembiayaan yang selamat, pantas dan dipercayai.',
        items: [
          {
            itemTitle: 'Permohonan Mudah',
            itemDescription:
              'Loanbuddy Credit menekankan kecekapan dalam perkhidmatan. Proses permohonan direka untuk disiapkan dalam beberapa minit dengan keperluan dokumentasi yang minimum, memastikan pengalaman yang lancar dan mesra pelanggan.',
          },
          {
            itemTitle: 'Wang Tunai Segera',
            itemDescription:
              'Loanbuddy Credit komited untuk pemprosesan yang pantas, dengan purata kelulusan dalam tempoh tiga hari bekerja dan/atau secepat 24 jam.\n\n*bergantung kepada kelengkapan dokumen.',
          },
          {
            itemTitle: 'Penyedia yang Dipercayai',
            itemDescription:
              'Loanbuddy Credit didaftarkan di bawah SSM dan dilesenkan mengikut Akta Peminjam Wang serta oleh KPKT. Loanbuddy Credit memastikan setiap transaksi dijalankan selamat, terjamin, dan tahap ketelusan yang tinggi.',
          },
          {
            itemTitle: 'Warisan Amanah dan Kepakaran',
            itemDescription:
              'Loanbuddy Credit Sdn. Bhd. (“Loanbuddy Credit”) ditubuhkan dan beroperasi sejak 2009. Sebelum ini dikenali sebagai Azio Credit, Loanbuddy Credit membawa kepakaran dalam industri pinjaman untuk menyediakan sokongan kewangan yang dipercayai kepada peminjam.',
          },
          {
            itemTitle: 'Berlesen dan Diperakui Sepenuhnya',
            itemDescription:
              'Loanbuddy Credit berlesen sepenuhnya di bawah Kementerian Perumahanan dan Kerajaan Tempatan (KPKT) sebagai penyedia pinjaman dan perkhidmatan kewangan sejak tahun 2009.',
          },
        ],
      },
      {
        sectionBadge: 'Mulakan Sekarang',
        sectionTitle: 'Mulakan Perjalanan Kewangan Anda dengan Loanbuddy Credit',
        sectionDescription:
          'Sama ada untuk kecemasan atau mendapatkan pembiayaan tambahan bagi mencapai matlamat hidup anda, Loanbuddy Credit adalah rakan kongsi dipercayai anda dalam memastikan kestabilan kewangan dan ketenangan fikiran.\n\nMohon dalam talian sekarang dan nikmati kemudahan, fleksibiliti, dan kebolehpercayaan yang kami tawarkan. Sertai kami dan rasai bagaimana perkhidmatan pinjaman Loanbuddy Credit dapat membantu merealisasikan impian kewangan anda.',
        items: [],
      },
    ],
    seo: {
      metaTitle: 'Perkhidmatan Kami - Pinjaman Peribadi & Tambah Nilai | Loanbuddy Credit',
      metaDescription:
        'Terokai perkhidmatan pinjaman kewangan peribadi dan pinjaman tambah nilai atas talian dengan kelulusan pantas dari Loanbuddy Credit.',
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
  {
    title: 'Blog (Senarai Artikel)',
    slug: 'blog',
    hero: {
      heading: 'Blog',
      subheading:
        'Dapatkan tips kewangan terkini, panduan pinjaman peribadi, dan strategi pengurusan hutang daripada pakar Loanbuddy Credit.',
    },
    sections: [
      {
        sectionBadge: 'Artikel Terbaru!',
        sectionTitle: 'Senarai Artikel Blog',
        sectionDescription:
          'Koleksi artikel dan panduan kewangan untuk membantu anda membuat keputusan kewangan yang bijak.',
        items: [
          {
            itemTitle: 'Penyatuan Hutang',
            itemDescription: 'Artikel Terbaru!',
            itemLink: 'penyatuan-hutang-kad-kredit-2026',
          },
          {
            itemTitle: 'Jenis-Jenis Pinjaman di Malaysia',
            itemDescription: 'Artikel Terbaru!',
            itemLink: 'kesan-opr-pinjaman-peribadi',
          },
          {
            itemTitle:
              'Kurangkan Beban Kewangan Anda dengan Penyatuan Hutang di Loanbuddy Credit',
            itemDescription: 'Artikel Terbaru!',
            itemLink: 'pinjaman-peribadi-ccris-ptptn-2026',
          },
          {
            itemTitle: 'Konvensional vs Islamik: Beza Pinjaman Peribadi Malaysia 2026',
            itemDescription: 'Artikel Terbaru!',
            itemLink: 'beza-pinjaman-konvensional-islamik-2026',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Blog - Loanbuddy Credit',
      metaDescription:
        'Ketahui tips kewangan terkini, strategi penyatuan hutang, dan panduan pinjaman peribadi di Loanbuddy Credit.',
    },
  },
  {
    title: 'Aplikasi Mudah Alih (Mobile App)',
    slug: 'loan-compare',
    hero: {
      badgeText: 'Aplikasi Mudah Alih',
      heading: 'Loanbuddy Credit\ndi Hujung Jari Anda',
      subheading:
        'Permohonan pinjaman peribadi kini lebih pantas dan mudah. Muat turun aplikasi kami sekarang untuk memohon pada bila-bila masa, di mana jua.',
      primaryCtaText: 'Ketahui Lebih Lanjut',
      primaryCtaLink: '#download',
      heroImage: '/assets/images/App-banners-No-Copy.png',
    },
    sections: [
      {
        sectionBadge: 'Ciri-Ciri Utama',
        sectionTitle:
          'Aplikasi Loanbuddy Credit Kini Tersedia di Google Play & Apple App Store - Permohonan Pinjaman Anda Kini Lebih Mudah & Pantas!',
        sectionDescription:
          'Dengan sukacitanya kami ingin memaklumkan bahawa Aplikasi Mudah Alih Loanbuddy Credit kini tersedia untuk dimuat turun di Google Play Store & Apple App Store!\n\nTidak kira anda pelanggan baharu atau pelanggan sedia ada, aplikasi ini direka untuk memudahkan anda memohon pinjaman peribadi, memantau status permohonan dan mengurus pinjaman anda. Semuanya tersedia di hujung jari!\n\nCiri-ciri utama aplikasi Loanbuddy Credit:',
        items: [
          {
            itemTitle: 'Permohonan Pinjaman Segera',
            itemDescription: 'Mohon pinjaman peribadi secara pantas terus melalui aplikasi.',
            itemImage: '/assets/images/permohonan-segera.png',
          },
          {
            itemTitle: 'Pantau Status Permohonan',
            itemDescription: 'Semak perkembangan status permohonan pinjaman anda dalam masa nyata.',
            itemImage: '/assets/images/pantau-status-permohonan.png',
          },
          {
            itemTitle: 'Notifikasi Segera',
            itemDescription: 'Terima kemas kini segera mengenai status kelulusan dan pemindahan dana.',
            itemImage: '/assets/images/notifikasi-segera.png',
          },
          {
            itemTitle: 'Reka Bentuk Mesra Pengguna',
            itemDescription: 'Antara muka intuitif yang mudah digunakan oleh sesiapa sahaja.',
            itemImage: '/assets/images/reka-bentuk-mesra.png',
          },
          {
            itemTitle: 'Sokongan Pelanggan Terus dari Aplikasi',
            itemDescription: 'Hubungi pasukan sokongan pelanggan kami secara terus bila-bila masa.',
            itemImage: '/assets/images/sokongan-pelanggan.png',
          },
        ],
      },
      {
        sectionBadge: 'Kenapa Pilih',
        sectionTitle: 'Kenapa Pilih Loanbuddy Credit?',
        sectionDescription:
          'Sebagai rakan pinjaman peribadi anda yang diyakini di Malaysia, Loanbuddy Credit menawarkan proses yang pantas, syarat yang telus dan bantuan khidmat pelanggan yang unggul. Kini, segalanya lebih mudah dengan adanya aplikasi Loanbuddy Credit!\n\nUrus pinjaman anda dengan selamat, cepat dan fleksibel secara terus melalui telefon pintar anda, pada bila-bila masa, di mana sahaja anda berada.',
        items: [],
      },
      {
        sectionBadge: 'Panduan Muat Turun',
        sectionTitle: 'Muat Turun Aplikasi Loanbuddy Credit',
        sectionDescription:
          'Muat turun sekarang di Google Play & Apple App Store dan nikmati kemudahan mengurus pinjaman di hujung jari anda!',
        items: [
          {
            itemTitle: 'Langkah 1',
            itemDescription: 'Buka Google Play atau Apple App Store di peranti anda.',
            itemImage: '/assets/images/icon-langkah-1-app.png',
          },
          {
            itemTitle: 'Langkah 2',
            itemDescription: 'Cari "Loanbuddy Credit".',
            itemImage: '/assets/images/icon-langkah-2-app.png',
          },
          {
            itemTitle: 'Langkah 3',
            itemDescription: 'Muat turun aplikasi "Loanbuddy Credit".',
            itemImage: '/assets/images/icon-langkah-3-app.png',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Aplikasi Mudah Alih Loanbuddy Credit - Muat Turun Sekarang',
      metaDescription:
        'Muat turun aplikasi mudah alih Loanbuddy Credit di Google Play & App Store untuk memohon pinjaman peribadi secara pantas dan selamat.',
    },
  },
]

export const defaultPagesDataMs = defaultPagesData

export const defaultPagesDataEn: DefaultPageData[] = [
  {
    title: 'Homepage',
    slug: 'home',
    banners: [
      {
        heading: 'Easy & Fast Personal Loans Up To RM50,000',
        subheading:
          'We are here to help by offering quick, easy, and hassle-free financing solutions tailored for you. With a simple application process and fast approval, you can obtain the funds you need right on time to manage your finances.',
        primaryCtaText: 'Apply Now',
        primaryCtaLink: 'mohon-pinjaman-online',
      },
    ],
    hero: {
      heading: 'Easy & Fast Personal Loans Up To RM50,000',
      subheading:
        'We are here to help by offering quick, easy, and hassle-free financing solutions tailored for you.',
      primaryCtaText: 'Apply Now',
      primaryCtaLink: 'mohon-pinjaman-online',
    },
    sections: [
      {
        sectionTitle: 'Our Loan Services',
        items: [
          {
            itemTitle: 'Online Personal Loan',
            itemDescription:
              'Simple, fast, and transparent personal loan applications up to RM50,000.',
            itemLink: 'pinjaman-peribadi-kl-sarawak',
          },
          {
            itemTitle: 'Top Up Loan',
            itemDescription:
              'Top up your existing loan for emergency cash requirements anytime.',
            itemLink: 'pinjaman-koperasi',
          },
        ],
      },
      {
        sectionTitle: 'Why Choose Loanbuddy Credit?',
        items: [
          {
            itemTitle: 'Competitive Interest Rates',
            itemDescription:
              'Affordable and transparent interest rates in compliance with KPKT regulations.',
          },
          {
            itemTitle: 'Easy Application',
            itemDescription:
              'Simple documents, easy process. Everything is designed to make the loan process stress-free.',
          },
          {
            itemTitle: 'Fast 24-Hour Approval',
            itemDescription:
              'Quick document review and approval process within 24 hours with same-day disbursement.',
          },
        ],
      },
      {
        sectionTitle: 'What Our Clients Say',
        items: [
          {
            itemTitle: 'Mr. Samsudin',
            itemDescription:
              'Staff was very helpful and all my questions were answered patiently with great professionalism.',
          },
          {
            itemTitle: 'Fatimah binti Said',
            itemDescription: 'Very efficient in terms of approval. Kept me updated throughout.',
          },
          {
            itemTitle: 'Mr. Wong',
            itemDescription:
              'The process is very fast... and friendly staff.. they will guide from a-z so no need worry bc they will not leave u hanging.',
          },
        ],
      },
      {
        sectionTitle: 'Financial Articles & Tips',
        items: [
          {
            itemTitle: 'Debt Consolidation',
            itemDescription: 'Read article',
            itemLink: 'penyatuan-hutang-kad-kredit-2026',
          },
          {
            itemTitle: 'Types of Loans in Malaysia',
            itemDescription: 'Read article',
            itemLink: 'kesan-opr-pinjaman-peribadi',
          },
          {
            itemTitle:
              'Reduce Your Financial Burden with Loanbuddy Credit Debt Consolidation',
            itemDescription: 'Read article',
            itemLink: 'pinjaman-peribadi-ccris-ptptn-2026',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Loanbuddy Credit - Fast Approval Personal Loans',
      metaDescription:
        'Apply for personal loans online with fast approval and affordable interest rates.',
    },
  },

  {
    title: 'About Loanbuddy Credit',
    slug: 'tentang-loanbuddy-credit',
    hero: {
      badgeText: 'About Us',
      heading: 'About Loanbuddy Credit',
      subheading:
        'Loanbuddy Credit believes every individual deserves easy, friendly, and reliable financial access. For over 10 years in the financial industry, we have helped countless clients achieve their dreams through personal financing, cooperative loans, debt consolidation, education, housing, and business loans—all with fast, transparent, and secure processes.',
      primaryCtaText: 'Apply Now',
      primaryCtaLink: 'mohon-pinjaman-online',
    },
    sections: [
      {
        sectionBadge: 'Motto & Vision',
        sectionTitle: 'Your Financial Journey Partner',
        sectionDescription:
          'Loanbuddy Credit is not just a loan provider. We are your partner through every step, challenge, and opportunity in your financial journey.',
        items: [],
      },
      {
        sectionBadge: 'Advantages',
        sectionTitle: 'Advantages of Loanbuddy Credit',
        sectionDescription:
          'Key advantages of choosing Loanbuddy Credit as your financing partner.',
        items: [
          {
            itemTitle: 'Time Saving:',
            itemDescription:
              'Processes that typically take days can now be completed in just a few minutes with us.',
          },
          {
            itemTitle: 'Efficient:',
            itemDescription:
              'No need to stress over researching multiple lenders. We provide the best vetted options for you—all legal and trustworthy.',
          },
          {
            itemTitle: 'Peace of Mind:',
            itemDescription:
              'Only deal with lenders thoroughly verified by our expert team. So you can feel confident with every step.',
          },
          {
            itemTitle: 'Verified Information:',
            itemDescription:
              'All information you receive from us is authenticated so you can make informed decisions calmly.',
          },
          {
            itemTitle: 'Stress Reduction:',
            itemDescription:
              'Reduce the risk of loan rejection by applying to tailored, pre-matched lenders.',
          },
        ],
      },
      {
        sectionBadge: 'KPKT',
        sectionTitle: 'KPKT Licensed Moneylender Verification',
        sectionDescription:
          'Loanbuddy Credit is a licensed and registered moneylender under KPKT Malaysia. Users can verify our license status on the official KPKT portal for complete safety before applying.',
        items: [],
      },
      {
        sectionBadge: 'Key Features',
        sectionTitle: 'Why Choose Loanbuddy Credit?',
        sectionDescription:
          '8 Key reasons to choose Loanbuddy Credit financing services.',
        items: [
          {
            itemTitle: 'Interest Rate',
            itemDescription: 'Interest rate of 1.5% per month or 18% per annum (fixed)',
          },
          {
            itemTitle: 'Loan Amount',
            itemDescription: 'Loan amounts from RM1,000 up to RM50,000',
          },
          {
            itemTitle: 'Loan Tenure',
            itemDescription: 'Flexible loan tenure from 12 months up to 60 months.',
          },
          {
            itemTitle: 'No ATM Card Retention',
            itemDescription: 'No ATM card holding, no upfront payment',
          },
          {
            itemTitle: 'Fast Approval',
            itemDescription:
              'Loan application approval within 1-2 business days with same-day disbursement',
          },
          {
            itemTitle: 'Licensed Moneylender',
            itemDescription:
              'Licensed moneylender under the Ministry of Housing and Local Government (KPKT)',
          },
          {
            itemTitle: 'Easy Application',
            itemDescription: 'Easy and fast application with clear and efficient steps',
          },
          {
            itemTitle: 'Payment Facilities',
            itemDescription:
              'Online payment facilities available (Direct Debit, online bank transfer, or JomPay)',
          },
        ],
      },
      {
        sectionBadge: 'Trusted Partner',
        sectionTitle: 'A Loyal Financial Partner You Can Trust',
        sectionDescription:
          'Whether starting a business, purchasing a home, or continuing your education—we are here to simplify your path. With Loanbuddy Credit, you are in safe hands!',
        items: [],
      },
      {
        sectionBadge: 'Commitment',
        sectionTitle: 'Loanbuddy Credit is Committed to Helping You',
        sectionDescription:
          'Every day, we assist Malaysians in finding organized, confident, and secure financial pathways. Ready for smoother loan arrangements? Let Loanbuddy Credit be your guide.\n\nLoanbuddy Credit – where your loan search ends, dreams come true, and trust is always honored.',
        items: [],
      },
      {
        sectionBadge: 'Immediate Assistance',
        sectionTitle:
          'Need A Personal Loan? \nLoanbuddy Credit Is Ready To Serve You!',
        sectionDescription: 'Apply Now',
        items: [
          {
            itemTitle: 'Apply Now',
            itemDescription: 'mohon-pinjaman-online',
            itemLink: 'mohon-pinjaman-online',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'About Loanbuddy Credit - Trusted Financial Partner',
      metaDescription:
        'Discover the background and commitment of Loanbuddy Credit in providing secure and transparent personal loans.',
    },
  },
  {
    title: 'Contact Us',
    slug: 'hubungi-kami',
    hero: {
      badgeText: 'Contact Us',
      heading: 'Contact Us',
      subheading:
        'Have any questions? Share your message here and we will reply as soon as possible to assist you!',
      primaryCtaText: 'Send Message',
      primaryCtaLink: '#subscribeForm',
      secondaryCtaText:
        'https://www.google.com/maps/d/embed?mid=1_Q6pIm1rAxMyXKvZ4nAlypvYi3L9ruM',
    },
    sections: [
      {
        sectionBadge: 'Our Branches',
        sectionTitle: 'Official Branches & Locations',
        sectionDescription:
          'Visit our branches or reach out to our customer service officers via WhatsApp.',
        items: [
          {
            itemTitle: 'Kuala Lumpur Branch',
            itemDescription:
              'No.15-4, Jalan Medan Tuanku 1, Medan Tuanku, 50300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur | kl@loanbuddycredit.com.my | +6018 785 6072',
            itemLink: 'https://wa.link/taaakr',
          },
          {
            itemTitle: 'Kuching Branch, Sarawak',
            itemDescription:
              '1st Floor, Lot 9269 (SL.75) Bandar Riyal, Jalan Muara Tuang Kota Samarahan, 94300 Kuching, Sarawak | ks@loanbuddycredit.com.my | +6010 932 9976',
            itemLink: 'https://wa.link/32cpg5',
          },
          {
            itemTitle: 'Bintulu Branch, Sarawak',
            itemDescription:
              'Lot 8093, Sublot 20, 1st Floor, Bintulu Sentral, Jln Kidurong, 97000 Bintulu, Sarawak | bintulu@loanbuddycredit.com.my | +6010 909 8557',
            itemLink: 'https://wa.link/6v806i',
          },
        ],
      },
      {
        sectionBadge: 'Inquiry Form',
        sectionTitle: 'Have Any Questions?',
        sectionDescription:
          'Have any questions? Share your message here \nand we will reply as soon as possible to assist you!',
        items: [
          {
            itemTitle: 'Submit Button',
            itemDescription: 'Send Message',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Contact Loanbuddy Credit - Branches & Customer Support',
      metaDescription:
        'Contact Loanbuddy Credit branches in Kuala Lumpur, Kuching, and Bintulu via WhatsApp, email, or visit our office.',
    },
  },
  {
    title: 'Frequently Asked Questions (FAQ)',
    slug: 'soalan-lazim-faq',
    hero: {
      badgeText: 'FAQ',
      heading: 'Frequently Asked Questions About Loanbuddy Credit',
      subheading:
        'Find detailed answers to common inquiries and get the information you need quickly.',
      primaryCtaText: 'Ask Question',
      primaryCtaLink: 'hubungi-kami',
    },
    sections: [
      {
        sectionBadge: 'General',
        sectionTitle: 'Frequently Asked Questions About Loans',
        sectionDescription:
          'All common inquiries regarding eligibility criteria, application process, and approval.',
        items: [
          {
            itemTitle: 'What documents are required to apply?',
            itemDescription:
              'Copy of NRIC (IC front & back), latest 3 months payslips, and latest 3 months bank statements.',
          },
          {
            itemTitle: 'What is the loan limit I can apply for?',
            itemDescription:
              'The loan limit depends on your eligibility and monthly income, ranging from RM1,000 up to RM100,000.',
          },
          {
            itemTitle: 'How long is the repayment tenure?',
            itemDescription:
              'Repayment tenure is flexible, ranging between 6 months to 60 months (5 years).',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Frequently Asked Questions (FAQ) - Loanbuddy Credit',
      metaDescription: 'Complete answers to FAQ on eligibility, interest rates, and loan application processes.',
    },
  },
  {
    title: 'Online Loan Application (Apply Form)',
    slug: 'mohon-pinjaman-online',
    hero: {
      badgeText: 'Welcome to Loanbuddy Credit!',
      heading: 'Personal Loan Up to RM50,000\nApply Today!',
      subheading:
        'One simple step to achieve the financial stability you need. Choose Loanbuddy Credit!',
      primaryCtaText: 'Submit',
      primaryCtaLink: '#applyForm',
      secondaryCtaText:
        'Loan applications are only open to Malaysian citizens.',
    },
    sections: [
      {
        sectionBadge: 'Documents & Guide',
        sectionTitle: 'What do you need to apply?',
        sectionDescription: 'Documents Required For Application',
        items: [
          {
            itemTitle: '1. Documents Required For Application',
            itemDescription:
              'Copy of Identity Card / NRIC (Front and Back)\nLatest 3 months bank salary crediting statements (PDF format)\nLatest 3 months payslips (PDF format) and/or\nLatest 1 month utility bill (water, electricity, etc.)',
          },
          {
            itemTitle:
              '2. All payment transactions can be made through the following channels:',
            itemDescription:
              'All payment transactions can be made through JomPay, Direct Debit, and Bank Transfer channels.',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Apply for Loan Online - Instant Approval | Loanbuddy Credit',
      metaDescription: 'Online personal loan application form. Fast, safe, and easy.',
    },
  },
  {
    title: 'Our Services (Perkhidmatan Kami)',
    slug: 'perkhidmatan-kami',
    hero: {
      badgeText: 'Loan Services',
      heading: 'Explore Online Loan Services:\nOnline Personal Loan and Top-Up Loan',
      subheading:
        'Loanbuddy Credit provides personal financial loan services for you who are looking for financial solutions. We understand your needs and are always ready to assist you with satisfying and worthwhile financial services.\n\nOur goal is to provide financial assistance that is transparent, fair, and tailored to individual needs.\n\nRest assured, your personal information is guaranteed safe and secure! Your data security is our top priority.',
      primaryCtaText: 'Apply Now',
      primaryCtaLink: 'mohon-pinjaman-online',
      heroImage: '/assets/images/banner/home-mohon/white-3d-bg.webp',
    },
    sections: [
      {
        sectionBadge: 'Services',
        sectionTitle: 'Loanbuddy Credit Loan Services',
        sectionDescription:
          'Choose the loan service tailored to your financial needs.',
        items: [],
      },
      {
        sectionBadge: 'Benefits',
        sectionTitle: 'Online Personal Loan',
        sectionDescription:
          "In modern life, almost every need requires sufficient financial allocation. Whether for emergency situations, children's education funding, managing monthly bills, or lifestyle needs, our online personal loan is designed to ensure you get access to the funds you need right on time.",
        items: [
          {
            itemTitle: 'Fast Approval',
            itemDescription:
              'Loanbuddy Credit personal loan applications can be made completely online, from wherever is convenient for you. Just fill in basic details, and with complete documents, approval can be obtained as fast as 24 hours*\n\n*Subject to individual assessment and screening.',
            itemImage: '/assets/images/permohonan-mudah.png',
          },
          {
            itemTitle: 'Flexible Terms',
            itemDescription:
              "Loanbuddy Credit's flexible terms are designed to meet the needs of all walks of life. From repayment tenures to age and income requirements, every application is evaluated personally and professionally to align with individual financial needs.",
            itemImage: '/assets/images/syarat-fleksibel.png',
          },
          {
            itemTitle: 'No ATM Card Retention',
            itemDescription:
              'Loanbuddy Credit does not hold any ATM cards or identity cards from our borrowers, strictly adhering to standard procedures under the Ministry of Housing and Local Government (KPKT).',
            itemImage: '/assets/images/kad-atm-2.png',
          },
        ],
      },
      {
        sectionBadge: 'Terms & Conditions',
        sectionTitle: 'Our Flexible Loan Terms',
        sectionDescription:
          'Clear, customer-friendly loan conditions designed for peace of mind.',
        items: [
          {
            itemTitle: 'Loan Amount',
            itemDescription:
              'Loans are available from as low as RM1,000 up to a maximum of RM50,000, subject to eligibility and credit assessment.',
          },
          {
            itemTitle: 'Flexible Repayment',
            itemDescription:
              'Flexible repayment with no early settlement charges. Settle your loan at any time during the loan tenure, giving you full control over your finances and the freedom to clear your loan according to your capability.',
          },
          {
            itemTitle: 'Online Payment',
            itemDescription:
              'Online payment facilities via Direct Debit, online bank transfer, and JomPay are available so that your loan repayments can be made more conveniently.',
          },
        ],
      },
      {
        sectionBadge: 'Top-Up Loan',
        sectionTitle: 'Top-Up Loan',
        sectionDescription:
          'Loanbuddy Credit Top-Up Loan is offered specifically to existing customers who require additional financing. This product maintains our commitment to convenience, transparency, and reliability.',
        sectionImage: '/assets/images/ladybug-holding-phone.png',
        items: [
          {
            itemTitle: 'Seamless Integration',
            itemDescription:
              'Enjoy easy access to Top-Up Loan facilities via our app or contact Loanbuddy Credit customer service for immediate assistance.',
            itemImage: '/assets/images/integrasi-lancar.png',
          },
          {
            itemTitle: 'Extended Repayment Terms',
            itemDescription:
              'An updated repayment schedule will be issued upon approval of the Top-Up Loan.',
            itemImage: '/assets/images/terma-pembayaran.png',
          },
          {
            itemTitle: 'Outstanding Interest Waiver',
            itemDescription:
              'Outstanding interest from the original loan will be waived.',
            itemImage: '/assets/images/pengecualian-faedah.png',
          },
          {
            itemTitle: 'Seamless Reapplication',
            itemDescription:
              'Easily top up your existing loan with a quick and seamless reapplication.',
            itemImage: '/assets/images/permohonan-semula-lancar.png',
          },
          {
            itemTitle: 'Higher Loan Amount',
            itemDescription:
              'Enjoy higher financing amounts without an increase in interest rates.',
            itemImage: '/assets/images/jumlah-pinjaman-besar.png',
          },
        ],
      },
      {
        sectionBadge: 'Eligibility',
        sectionTitle: 'Who Can Apply?',
        sectionDescription:
          'Loanbuddy Credit easy-approval online loans offer easy application with flexible terms, ensuring you can access financing quickly and conveniently.',
        items: [
          {
            itemTitle: 'Applicant Age',
            itemDescription:
              'Applicants aged between 18 and 60 years old, with proof of Malaysian citizenship, and working and residing in Malaysia.',
          },
          {
            itemTitle: 'Income Requirement',
            itemDescription:
              'With a minimum gross monthly income requirement of RM1,700, Loanbuddy Credit offers customer-friendly and accessible loans in Malaysia.',
          },
          {
            itemTitle: 'Exclusions',
            itemDescription:
              'Applicants must not be declared bankrupt or politically exposed. Freelance individuals are also not eligible to apply.',
          },
        ],
      },
      {
        sectionBadge: 'Application Steps',
        sectionTitle: 'Simple and Hassle-Free Application Process',
        sectionDescription:
          'Loanbuddy Credit easy-approval online loan applications can be completed entirely online, with simple and efficient steps.',
        items: [
          {
            itemTitle: 'Step 1: Applicant Information',
            itemDescription:
              'Please provide your basic details and contact information so we can reach out to you.',
          },
          {
            itemTitle: 'Step 2: Attach Documents',
            itemDescription:
              'Please upload a copy of your MyKad and latest salary / bank / EPF statements for verification purposes.',
          },
          {
            itemTitle: 'Step 3: Approval Process',
            itemDescription:
              'Loanbuddy Credit will review your credit eligibility, taking into account debt-to-income ratio and current financial status.',
          },
          {
            itemTitle: 'Step 4: Sign Contract Online',
            itemDescription:
              'Review and confirm your information and sign online to complete the digital application process.',
          },
          {
            itemTitle: 'Step 5: Receive Funds',
            itemDescription:
              'Loan funds will be credited to your registered bank account within 24 working hours after the agreement is signed online.',
          },
        ],
      },
      {
        sectionBadge: 'Our Commitment',
        sectionTitle: 'Our Commitment to You',
        sectionDescription:
          'Safe, fast, and trusted financial financing services.',
        items: [
          {
            itemTitle: 'Easy Application',
            itemDescription:
              'Loanbuddy Credit emphasizes service efficiency. The application process is designed to be completed in minutes with minimal documentation requirements, ensuring a seamless and customer-friendly experience.',
          },
          {
            itemTitle: 'Instant Cash',
            itemDescription:
              'Loanbuddy Credit is committed to fast processing, with an average approval within three working days and/or as fast as 24 hours.\n\n*subject to completeness of documents.',
          },
          {
            itemTitle: 'Trusted Provider',
            itemDescription:
              'Loanbuddy Credit is registered under SSM and licensed under the Moneylenders Act as well as by KPKT. Loanbuddy Credit ensures every transaction is conducted safely, securely, and with high transparency.',
          },
          {
            itemTitle: 'Legacy of Trust and Expertise',
            itemDescription:
              'Loanbuddy Credit Sdn. Bhd. (“Loanbuddy Credit”) was established and operating since 2009. Formerly known as Azio Credit, Loanbuddy Credit brings deep industry expertise to provide trusted financial support to borrowers.',
          },
          {
            itemTitle: 'Fully Licensed and Certified',
            itemDescription:
              'Loanbuddy Credit is fully licensed under the Ministry of Housing and Local Government (KPKT) as a loan and financial services provider since 2009.',
          },
        ],
      },
      {
        sectionBadge: 'Get Started',
        sectionTitle: 'Start Your Financial Journey with Loanbuddy Credit',
        sectionDescription:
          'Whether for emergencies or securing additional financing to achieve your life goals, Loanbuddy Credit is your trusted partner in ensuring financial stability and peace of mind.\n\nApply online now and enjoy the convenience, flexibility, and reliability we offer. Join us and experience how Loanbuddy Credit loan services can help realize your financial dreams.',
        items: [],
      },
    ],
    seo: {
      metaTitle: 'Our Services - Online Personal & Top-Up Loans | Loanbuddy Credit',
      metaDescription:
        'Explore personal financial loan services and online top-up loans with fast approvals from Loanbuddy Credit.',
    },
  },
  {
    title: 'Personal Loan',
    slug: 'pinjaman-peribadi',
    hero: {
      badgeText: 'Specially for Individuals',
      heading: 'Online Personal Loan',
      subheading:
        'Loanbuddy Credit provides fast Online Personal Loans to help you achieve personal financial goals and manage cash flow with ease.',
      primaryCtaText: 'Apply Now',
      primaryCtaLink: 'mohon-pinjaman-online',
    },
    sections: [
      {
        sectionBadge: 'Key Features',
        sectionTitle: 'Personal Loan Features',
        sectionDescription:
          'Advantages and facilities of personal financing with Loanbuddy Credit.',
        items: [
          {
            itemTitle: 'Interest Rate',
            itemDescription: 'Interest rate of 1.5% per month or 18% per year',
          },
          {
            itemTitle: 'Loan Amount',
            itemDescription: 'Loan amount from RM1,000 up to RM50,000',
          },
          {
            itemTitle: 'Loan Tenure',
            itemDescription: 'Flexible loan tenure 12 to 60 months',
          },
          {
            itemTitle: 'ATM Card',
            itemDescription: 'No ATM card holding',
          },
          {
            itemTitle: 'Fast Approval',
            itemDescription: 'Approval within 1-2 business days',
          },
          {
            itemTitle: 'Licensed Moneylender',
            itemDescription: 'Licensed moneylender under KPKT',
          },
          {
            itemTitle: 'Same Day Transfer',
            itemDescription: 'Approval and disbursement on the same day',
          },
          {
            itemTitle: 'Easy Application',
            itemDescription: 'Easy, fast, and efficient application',
          },
        ],
      },
      {
        sectionBadge: 'Application Steps',
        sectionTitle: 'How to Apply for a Personal Loan',
        sectionDescription:
          '3 Simple steps to apply for a personal loan with fast approval.',
        items: [
          {
            itemTitle: 'Step 1',
            itemDescription: "Click 'Apply Now' button",
          },
          {
            itemTitle: 'Step 2',
            itemDescription: 'Fill in required details and submit application',
          },
          {
            itemTitle: 'Step 3',
            itemDescription:
              'Our credit consultant will contact you via WhatsApp or email promptly',
          },
        ],
      },
      {
        sectionBadge: 'Immediate Assistance',
        sectionTitle:
          'Need a Personal Loan? Loanbuddy Credit is Ready to Help!',
        sectionDescription:
          'Contact us or apply online for immediate approval.',
        items: [
          {
            itemTitle: 'Apply Now',
            itemDescription: 'mohon-pinjaman-online',
            itemLink: 'mohon-pinjaman-online',
          },
        ],
      },
      {
        sectionBadge: 'FAQ',
        sectionTitle: 'Frequently Asked Questions',
        sectionDescription:
          'Answers to frequently asked questions regarding Personal Loans.',
        items: [
          {
            itemTitle: 'What is a Personal Loan?',
            itemDescription:
              'A Personal Loan is a sum borrowed by an individual from a financial institution, licensed moneylender, or credit cooperative with an agreed interest rate and repayment period.',
          },
          {
            itemTitle: 'What are the Different Types of Personal Loans in Malaysia?',
            itemDescription:
              'There are two main types: secured loans (requiring collateral) and unsecured loans (evaluated based on income, credit score, and employment without collateral).',
          },
          {
            itemTitle:
              'What are the requirements to apply for a personal loan?',
            itemDescription:
              'You are eligible if you are a Malaysian citizen aged 18 to 60, with steady employment and minimum monthly income of RM1,700, and not declared bankrupt.',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Online Personal Loan - Loanbuddy Credit',
      metaDescription:
        'Loanbuddy Credit provides fast Online Personal Loans to help you achieve personal financial goals with ease.',
    },
  },
  {
    title: 'Top-Up Loan (Pinjaman Tambah Nilai)',
    slug: 'pinjaman-koperasi',
    hero: {
      badgeText: 'Exclusive for Existing Customers',
      heading: 'Top-Up Loan',
      subheading:
        'Loanbuddy Credit offers Top-Up Loans allowing you to top up* your existing loan for emergency financial needs anytime, anywhere.\n\n*Subject to terms and conditions',
      primaryCtaText: 'Top Up Now',
      primaryCtaLink: 'mohon-pinjaman-online',
    },
    sections: [
      {
        sectionBadge: 'Introduction',
        sectionTitle: 'What is a Top-Up Loan?',
        sectionDescription:
          'A Top-Up Loan is a financing facility where you can add to your existing loan.\n\n- Top up your existing loan for additional financial needs.\n- Outstanding interest from previous loan will be waived upon top-up approval.\n\nNo extra or hidden charges, ensuring a smooth process.',
        videoUrl:
          'https://drive.google.com/file/d/1i2ifqzZ7n0sjni1v9hsa3Asf9gBup8Xv/preview',
        items: [],
      },
      {
        sectionBadge: 'Advantages',
        sectionTitle: 'Why Apply for a Top-Up Loan?',
        sectionDescription:
          '4 Key advantages of choosing Loanbuddy Credit Top-Up Loans.',
        items: [
          {
            itemTitle: 'Good Repayment Record',
            itemDescription:
              'Available for existing Loanbuddy Credit customers with active agreements and good payment records',
          },
          {
            itemTitle: 'Easy Top-Up',
            itemDescription:
              'Simple to top up existing loans for additional financial needs',
          },
          {
            itemTitle: 'No Extra Charges',
            itemDescription:
              'No hidden fees or extra charges—ensuring a smooth and straightforward process',
          },
          {
            itemTitle: 'Interest Waived',
            itemDescription:
              'Previous outstanding interest will be waived upon top-up approval',
          },
        ],
      },
      {
        sectionBadge: 'Method',
        sectionTitle: 'Top-Up Financing Method',
        sectionDescription:
          'Method and calculation formula for Top-Up Loan amounts.',
        items: [
          {
            itemTitle: 'Balance Calculation',
            itemDescription:
              'Financing amount is calculated by deducting previous loan balance from requested new principal amount',
          },
          {
            itemTitle: 'Previous Account Settlement',
            itemDescription:
              'Once approved, previous loan account is marked settled and a new account is opened with updated repayment schedules.',
          },
          {
            itemTitle: 'Loan Amount Limit',
            itemDescription:
              'Top-up loan amount must be equal to or higher than previous loan amount.',
          },
        ],
      },
      {
        sectionBadge: 'Application Steps',
        sectionTitle: 'How to Apply for Top-Up',
        sectionDescription:
          '3 Simple steps to apply for top-up financing with fast approval.',
        items: [
          {
            itemTitle: 'Step 1',
            itemDescription: "Click \n'Apply Now' button",
          },
          {
            itemTitle: 'Step 2',
            itemDescription: 'Fill in required details and \nsubmit application',
          },
          {
            itemTitle: 'Step 3',
            itemDescription:
              'Our credit specialist will contact you via WhatsApp or email promptly',
          },
        ],
      },
      {
        sectionBadge: 'Immediate Assistance',
        sectionTitle:
          'Need a Personal Loan? \nLoanbuddy Credit is Ready to Help!',
        sectionDescription:
          'Contact us or apply online for immediate approval.',
        items: [
          {
            itemTitle: 'Apply Now',
            itemDescription: 'mohon-pinjaman-online',
            itemLink: 'mohon-pinjaman-online',
          },
        ],
      },
      {
        sectionBadge: 'FAQ',
        sectionTitle: 'Frequently Asked Questions',
        sectionDescription:
          'Answers to common questions regarding loans.',
        items: [
          {
            itemTitle: 'What is a Personal Loan?',
            itemDescription:
              'A Personal Loan is a financial facility borrowed from a licensed lender with set interest and tenure.',
          },
          {
            itemTitle: 'What is the Difference Between Conventional and Islamic Loans?',
            itemDescription:
              'Conventional loans operate on interest while Islamic financing follows Shariah-compliant profit rates.',
          },
          {
            itemTitle:
              'What are the requirements for a personal loan?',
            itemDescription:
              'You are eligible if you are a Malaysian citizen aged 18 to 60, with steady employment and minimum monthly income of RM1,700, and not declared bankrupt.',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Top-Up Loan - Loanbuddy Credit',
      metaDescription:
        'Loanbuddy Credit offers Top-Up Loans allowing you to top up existing loans for emergency cash requirements.',
    },
  },
  {
    title: 'Payment Methods',
    slug: 'pembayaran',
    hero: {
      badgeText: 'Payment Guide',
      heading: 'Payment Methods',
      subheading:
        'Loanbuddy Credit accepts loan repayments via Direct Debit, online bank transfer, or JomPay into the official Loanbuddy Credit bank account, where Loanbuddy Credit will notify you of repayment receipt via phone call, SMS, or WhatsApp.',
      secondaryCtaText:
        'Loanbuddy Credit does not accept any cash payments at any branch. Ensure you make repayments to only ONE (1) official bank account to avoid any fraud or impersonation.',
    },
    sections: [
      {
        sectionBadge: 'Branch Contact',
        sectionTitle: 'Official Branches & WhatsApp Lines',
        sectionDescription:
          'Contact our official branches for any payment inquiries and account balance verification.',
        items: [
          {
            itemTitle: 'Kuala Lumpur Branch',
            itemDescription: 'kl@loanbuddycredit.com.my | +6018 785 6072',
            itemLink: 'https://wa.link/taaakr',
          },
          {
            itemTitle: 'Kuching Branch, Sarawak',
            itemDescription: 'ks@loanbuddycredit.com.my | +6010 932 9976',
            itemLink: 'https://wa.link/32cpg5',
          },
          {
            itemTitle: 'Bintulu Branch, Sarawak',
            itemDescription: 'bintulu@loanbuddycredit.com.my | +6010 909 8557',
            itemLink: 'https://wa.link/6v806i',
          },
        ],
      },
      {
        sectionBadge: 'FAQ',
        sectionTitle: 'Frequently Asked Questions',
        sectionDescription:
          'FAQ on repayment methods, early settlement, and account verification.',
        items: [
          {
            itemTitle: 'How do I request early / full settlement?',
            itemDescription:
              'You can settle your loan prior to loan maturity at any time without incurring termination fees as Loanbuddy Credit loans have no lock-in period. However, you are required to notify Loanbuddy Credit at least 30 days before the full/early repayment date and pay the full outstanding principal amount and billed interest only.\n\nYou can also contact Loanbuddy Credit or send an email before paying your loan amount for further details.',
          },
          {
            itemTitle: 'How do I check my monthly instalment amount?',
            itemDescription:
              'You can check your loan details by contacting Loanbuddy Credit via WhatsApp.',
          },
          {
            itemTitle:
              'How do I know if my repayment has been received?',
            itemDescription:
              'Once the repayment is processed, you will receive a phone call, SMS, or WhatsApp confirmation from Loanbuddy Credit.',
          },
          {
            itemTitle: 'When is my first repayment date?',
            itemDescription:
              '1. If the contract is signed on or before the 14th of the month, your first repayment date is on the 1st of the next month.\n2. If signed on or after the 15th, first repayment date is on the 1st of the month after next.',
          },
          {
            itemTitle:
              'How do I make repayments to Loanbuddy Credit?',
            itemDescription:
              'Currently, Loanbuddy Credit accepts repayments via Direct Debit, online bank transfer, and JomPay. Cash payments are not accepted at any branch.',
          },
          {
            itemTitle: 'How do I request a refund for excess payment?',
            itemDescription:
              'Loanbuddy Credit will contact you via call, SMS or WhatsApp to refund excess funds once verified upon full settlement.\n\nIf you overpaid monthly instalments and wish to request a refund before full settlement, please contact us via phone, WhatsApp or email.',
          },
          {
            itemTitle: 'What happens if I fail to pay my monthly debt?',
            itemDescription:
              'A Loanbuddy Credit representative will reach out to you. Late payment charges (8.0% per annum on the overdue amount) are calculated daily and billed on the final day.',
          },
          {
            itemTitle:
              'How do I check my repayment due date?',
            itemDescription:
              'You can check your account details by contacting Loanbuddy Credit via WhatsApp or email.',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Payment Methods - Loanbuddy Credit',
      metaDescription:
        'Information on repayment methods, direct debit, JomPay and FAQ on Loanbuddy Credit repayments.',
    },
  },
  {
    title: 'Blog (Article List)',
    slug: 'blog',
    hero: {
      heading: 'Blog',
      subheading:
        'Get the latest financial tips, personal loan guides, and debt management strategies from Loanbuddy Credit experts.',
    },
    sections: [
      {
        sectionBadge: 'Latest Articles!',
        sectionTitle: 'Blog Articles List',
        sectionDescription:
          'A curated collection of financial articles and guides to help you make smart financial decisions.',
        items: [
          {
            itemTitle: 'Debt Consolidation',
            itemDescription: 'Latest Article!',
            itemLink: 'penyatuan-hutang-kad-kredit-2026',
          },
          {
            itemTitle: 'Types of Loans in Malaysia',
            itemDescription: 'Latest Article!',
            itemLink: 'kesan-opr-pinjaman-peribadi',
          },
          {
            itemTitle:
              'Reduce Your Financial Burden with Loanbuddy Credit Debt Consolidation',
            itemDescription: 'Latest Article!',
            itemLink: 'pinjaman-peribadi-ccris-ptptn-2026',
          },
          {
            itemTitle: 'Conventional vs Islamic: Personal Loan Differences in Malaysia 2026',
            itemDescription: 'Latest Article!',
            itemLink: 'beza-pinjaman-konvensional-islamik-2026',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Blog & Financial Tips - Loanbuddy Credit',
      metaDescription:
        'Read the latest financial tips, debt consolidation strategies, and personal loan guides at Loanbuddy Credit.',
    },
  },
  {
    title: 'Mobile App (Loan Compare)',
    slug: 'loan-compare',
    hero: {
      badgeText: 'Mobile App',
      heading: 'Loanbuddy Credit\nat Your Fingertips',
      subheading:
        'Personal loan applications are now faster and easier. Download our mobile app now to apply anytime, anywhere.',
      primaryCtaText: 'Learn More',
      primaryCtaLink: '#download',
      heroImage: '/assets/images/App-banners-No-Copy.png',
    },
    sections: [
      {
        sectionBadge: 'Key Features',
        sectionTitle:
          'Loanbuddy Credit App Is Now Available on Google Play & Apple App Store - Your Loan Application Is Now Easier & Faster!',
        sectionDescription:
          'We are delighted to announce that the Loanbuddy Credit Mobile App is now available for download on Google Play Store & Apple App Store!\n\nWhether you are a new applicant or an existing borrower, this app is designed to help you apply for personal loans, track application status, and manage your account seamlessly. Everything at your fingertips!\n\nKey features of the Loanbuddy Credit app:',
        items: [
          {
            itemTitle: 'Instant Loan Application',
            itemDescription: 'Apply for personal loans quickly and easily direct from the mobile app.',
            itemImage: '/assets/images/permohonan-segera.png',
          },
          {
            itemTitle: 'Track Application Status',
            itemDescription: 'Check real-time updates on your loan application progress.',
            itemImage: '/assets/images/pantau-status-permohonan.png',
          },
          {
            itemTitle: 'Instant Notifications',
            itemDescription: 'Receive immediate alerts on approval status and fund disbursements.',
            itemImage: '/assets/images/notifikasi-segera.png',
          },
          {
            itemTitle: 'User-Friendly Interface',
            itemDescription: 'An intuitive and streamlined interface designed for everyone.',
            itemImage: '/assets/images/reka-bentuk-mesra.png',
          },
          {
            itemTitle: 'Direct In-App Customer Support',
            itemDescription: 'Get dedicated customer assistance directly within the app.',
            itemImage: '/assets/images/sokongan-pelanggan.png',
          },
        ],
      },
      {
        sectionBadge: 'Why Choose Us',
        sectionTitle: 'Why Choose Loanbuddy Credit?',
        sectionDescription:
          'As your trusted personal loan partner in Malaysia, Loanbuddy Credit offers fast processing, transparent terms, and dedicated customer support. Everything is now even more convenient with our mobile app!\n\nManage your financing securely, quickly, and flexibly right from your smartphone, whenever and wherever you need.',
        items: [],
      },
      {
        sectionBadge: 'Download Guide',
        sectionTitle: 'Download the Loanbuddy Credit App',
        sectionDescription:
          'Download now on Google Play & Apple App Store and enjoy the convenience of managing your loan at your fingertips!',
        items: [
          {
            itemTitle: 'Step 1',
            itemDescription: 'Open Google Play Store or Apple App Store on your smartphone.',
            itemImage: '/assets/images/icon-langkah-1-app.png',
          },
          {
            itemTitle: 'Step 2',
            itemDescription: 'Search for "Loanbuddy Credit".',
            itemImage: '/assets/images/icon-langkah-2-app.png',
          },
          {
            itemTitle: 'Step 3',
            itemDescription: 'Download and install the "Loanbuddy Credit" app.',
            itemImage: '/assets/images/icon-langkah-3-app.png',
          },
        ],
      },
    ],
    seo: {
      metaTitle: 'Loanbuddy Credit Mobile App - Download Now',
      metaDescription:
        'Download the Loanbuddy Credit mobile app on Google Play & App Store to apply for personal loans fast and securely.',
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

    for (let i = 0; i < defaultPagesDataMs.length; i++) {
      const pageMs = defaultPagesDataMs[i]
      const pageEn = defaultPagesDataEn[i]
      const existing = existingPagesMap.get(pageMs.slug)

      if (!existing) {
        // Create new page entry in MS
        const created = await payload.create({
          collection: 'pages',
          data: pageMs as any,
          locale: 'ms',
        })

        const enSections = pageEn.sections?.map((sec, sIdx) => {
          const currentSec = (created.sections as any)?.[sIdx]
          return {
            ...sec,
            id: currentSec?.id,
            items: sec.items?.map((item, iIdx) => {
              const currentItem = currentSec?.items?.[iIdx]
              return {
                ...item,
                id: currentItem?.id,
              }
            }),
          }
        })

        const enBanners = pageEn.banners?.map((b, idx) => {
          const currentBanner = (created.banners as any)?.[idx]
          return {
            ...b,
            id: currentBanner?.id,
          }
        })

        // Seed EN locale with matching row IDs
        await payload.update({
          collection: 'pages',
          id: created.id,
          data: {
            ...pageEn,
            banners: enBanners,
            sections: enSections,
          } as any,
          locale: 'en',
        })
        console.log(`[Seed] Created dual-language page entry: ${pageMs.slug}`)
      } else {
        // Update existing page sections and hero with the accurate template, preserving any uploaded media and row IDs
        const updatedSectionsMs = pageMs.sections?.map((defaultSec, sIdx) => {
          const existingSec = existing.sections?.[sIdx]
          return {
            ...defaultSec,
            id: existingSec?.id,
            sectionImage: existingSec?.sectionImage || undefined,
            items: defaultSec.items?.map((defaultItem, iIdx) => {
              const existingItem = existingSec?.items?.[iIdx]
              return {
                ...defaultItem,
                id: existingItem?.id,
                itemImage: existingItem?.itemImage || undefined,
              }
            }),
          }
        })

        const updatedBannersMs =
          pageMs.banners?.map((b, idx) => {
            const existingBanner = existing.banners?.[idx]
            return {
              ...b,
              id: existingBanner?.id,
              bannerImage: idx === 0 && existing.hero?.heroImage ? existing.hero.heroImage : (existingBanner?.bannerImage || b.bannerImage || undefined),
            }
          })

        // 1. Update BM locale
        const updatedDocMs = await payload.update({
          collection: 'pages',
          id: existing.id,
          data: {
            banners: updatedBannersMs,
            hero: {
              ...pageMs.hero,
              heroImage: existing.hero?.heroImage || undefined,
            },
            sections: updatedSectionsMs,
            seo: pageMs.seo,
          } as any,
          locale: 'ms',
        })

        // 2. Prepare EN payload sharing the exact same row IDs from updatedDocMs
        const updatedSectionsEn = pageEn.sections?.map((defaultSec, sIdx) => {
          const currentSec = (updatedDocMs.sections as any)?.[sIdx]
          return {
            ...defaultSec,
            id: currentSec?.id,
            sectionImage: currentSec?.sectionImage || undefined,
            items: defaultSec.items?.map((defaultItem, iIdx) => {
              const currentItem = currentSec?.items?.[iIdx]
              return {
                ...defaultItem,
                id: currentItem?.id,
                itemImage: currentItem?.itemImage || undefined,
              }
            }),
          }
        })

        const updatedBannersEn = pageEn.banners?.map((b, idx) => {
          const currentBanner = (updatedDocMs.banners as any)?.[idx]
          return {
            ...b,
            id: currentBanner?.id,
            bannerImage: idx === 0 && existing.hero?.heroImage ? existing.hero.heroImage : (currentBanner?.bannerImage || b.bannerImage || undefined),
          }
        })

        // 3. Update EN locale
        await payload.update({
          collection: 'pages',
          id: existing.id,
          data: {
            banners: updatedBannersEn,
            hero: {
              ...pageEn.hero,
              heroImage: existing.hero?.heroImage || undefined,
            },
            sections: updatedSectionsEn,
            seo: pageEn.seo,
          } as any,
          locale: 'en',
        })

        console.log(`[Seed] Updated dual-language (MS & EN) content for page: ${pageMs.slug}`)
      }
    }
  } catch (error) {
    console.error('[Seed] Error seeding default pages:', error)
  }
}
