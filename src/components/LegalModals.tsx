"use client";

import React, { ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/dictionaries";

// Each privacy item is [bold label, text]; a null label renders the text alone.
type PrivacySection = { title: string; intro?: string; items: [string | null, string][] };
type TermsSection = { title: string; clauses: string[] };

// Loanbuddy Privacy Notice (source: "Privacy Notice.docx", last updated 27 October 2026).
const PRIVACY_NOTICE_SECTIONS_EN: PrivacySection[] = [
  {
    title: "PERSONAL DATA WE COLLECT",
    intro: "To evaluate your account registration and process credit facilities, we must collect and process your personal data. This includes:",
    items: [
      ["Identity Data:", "Your full name, NRIC number (MyKad), date of birth, gender, nationality, and live facial biometric scans (collected via platform)."],
      ["Contact Data:", "Residential address, mailing address, email address, and mobile phone number."],
      ["Financial Data:", "Employment history, employer details, monthly income, bank account numbers, payslips, bank statements, EPF statements, and tax files."],
      ["Credit Profile Data:", "Credit scores, payment histories, bankruptcy checks, and active litigation records obtained from registered credit reporting agencies."],
      ["Technical Data:", "IP address, device type, operating system, and browser tracking information when you interact with our Platform."],
    ],
  },
  {
    title: "SOURCE OF YOUR PERSONAL DATA",
    intro: "We collect your personal data directly from you when you fill out forms, register an account, or upload files to our Platform. Additionally, we collect data from third-party sources, including:",
    items: [
      [null, "Registered credit reporting agencies (e.g., CTOS, CRIF, Experian) and Bank Negara Malaysia’s Central Credit Reference Information System (CCRIS)."],
      [null, "Government agencies or statutory bodies (e.g., LHDN, KWSP) where permitted."],
      [null, "Fraud prevention agencies and public databases."],
    ],
  },
  {
    title: "PURPOSE OF PROCESSING YOUR DATA",
    intro: "Your personal data is processed for necessary operational, legal, and credit assessment purposes, including:",
    items: [
      ["Identity Verification:", "Authenticating your identity via electronic Know-Your-Customer (eKYC) workflows."],
      ["Credit Evaluation:", "Assessing your creditworthiness, debt-to-income ratios, and financial eligibility for funding facilities."],
      ["Contractual Obligation:", "Generating, digitally signing, and executing your statutory Moneylending Agreement (Schedule J/K)."],
      ["Disbursement & Collections:", "Managing loan fund releases, tracking monthly repayments, issuing statements, and conducting recovery actions if a default occurs."],
      ["Regulatory Compliance:", "Fulfilling statutory obligations under the Moneylenders Act 1951, Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 (AMLA), and tax regulations."],
    ],
  },
  {
    title: "DISCLOSURE OF YOUR PERSONAL DATA",
    intro: "We keep your data confidential. However, to operate the Service and fulfill legal requirements, we may disclose your data to the following third parties:",
    items: [
      ["Regulators & Government Authorities:", "The Ministry of Housing and Local Government (KPKT), Bank Negara Malaysia (BNM), Inland Revenue Board (LHDN), the Royal Malaysia Police (PDRM), and other relevant government authorities."],
      ["Credit Reporting Agencies:", "Authorized credit bureaus to log repayment behavior or update active default statuses."],
      ["Service Partners:", "Our designated payment gateway partners (such as FPX providers), secure identity verification software partners, and cloud storage providers."],
      ["Professional Advisors:", "Our legal counsel, auditors, and authorized debt collection agencies in the event of default legal recovery."],
    ],
  },
  {
    title: "YOUR RIGHTS UNDER THE PDPA",
    intro: "As a data subject in Malaysia, you hold specific statutory rights regarding your information:",
    items: [
      ["Right of Access & Correction:", "You have the right to request a copy of your personal data or request updates to inaccurate or obsolete data via your Account settings."],
      ["Right to Withdraw Consent:", "You may withdraw your consent for us to process your data for marketing or non-essential features. However, please note that withdrawing consent for core operational data will result in the immediate termination of your platform Account and loan eligibility."],
    ],
  },
  {
    title: "DATA RETENTION AND SECURITY",
    items: [
      ["Security:", "We protect your personal data using industry-standard Secure Socket Layer (SSL) encryption, firewalls, and restricted administrative access protocols."],
      ["Retention:", "We retain your financial and identity data for as long as your account remains active, or for a mandatory period of seven (7) years following the full settlement of your loan facility to satisfy statutory tax, audit, and moneylending record-keeping laws."],
    ],
  },
  {
    title: "CONTACT AND COMPLAINTS",
    intro: "If you have questions regarding this Privacy Notice, or if you wish to exercise your data access and correction rights, please contact our team at:",
    items: [
      ["Email:", "support@loanbuddy.com.my"],
      ["Mailing Address:", "Loanbuddy Credit Sdn. Bhd., No. 15, Tingkat 4, Jalan Medan Tuanku 1, 50300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"],
    ],
  },
];

// Loanbuddy Terms of Service (source: "Term of Service.docx", last updated 27 October 2026).
// Rendered as numbered sections (1.) with clauses (1.1.); clause 8.2 refers to "Section 8.1", so keep the order.
const TERMS_OF_SERVICE_SECTIONS_EN: TermsSection[] = [
  {
    title: "INTRODUCTION",
    clauses: [
      "Welcome to the Digital Moneylending Platform (the \"Service\") operated by Loanbuddy Credit Sdn. Bhd. (Company Registration No. 200901039396/882536-K) (formerly known as Loan Buddy Sdn. Bhd.) (referred to as “Loanbuddy”, \"Company\", \"we\", \"us\" or \"our\"). Loanbuddy is a licensed moneylender, and our services are strictly subject to the regulations and protections mandated under the Moneylenders Act 1951. These Terms of Use govern your access to and use of our website and mobile application (collectively, the \"Platform\").",
      "Please read these Terms of Use carefully before registering an account (\"Account\"). By clicking the \"Accept\" checkbox or creating an Account on the Platform, you signify your irrevocable agreement to be bound by these Terms of Use. If you do not agree, please do not use our Service.",
      "To register an Account or use the Service, you must be a Malaysian citizen or resident who is at least eighteen (18) years old and not above sixty (60) years old. We reserve the right to refuse access to the Platform or reject Account registration at our sole discretion.",
      "We reserve the right to upgrade, modify, or perform routine technical maintenance on the Platform's interface and underlying software infrastructure at any time. Where such modifications directly impact your repayment channels, statement access, or active account management, we will provide you with reasonable advance notice via your registered email or via an in-app notification. For the avoidance of doubt, no platform modification or technical suspension shall alter, overwrite, or invalidate the fixed financial terms, interest rates, or payment schedules explicitly agreed upon in your executed statutory Moneylending Agreement (Schedule J/K).",
    ],
  },
  {
    title: "ACCEPTANCE OF THE SERVICE",
    clauses: [
      "These Terms of Use govern your digital access to the Platform. They do not constitute a standalone loan offer or a loan agreement.",
      "Every individual loan application approved through this Platform is strictly subject to the electronic execution of a standalone statutory moneylending agreement in the format prescribed under Schedule J (Unsecured Loan) or Schedule K (Secured Loan) of the Moneylenders (Control and Licensing) Regulations 2003 (each, referred to as \"Moneylending Agreement\").",
      "In the event of any direct conflict or inconsistency between these Terms of Use and an executed statutory Moneylending Agreement, the terms of the statutory Moneylending Agreement shall prevail to the extent of the inconsistency.",
    ],
  },
  {
    title: "DIGITAL ACCOUNT ACTIVATION & CREDIT CHECKS",
    clauses: [
      "Upon receiving your registration or loan application, we will conduct required legal and credit due diligence.",
      "You expressly consent to provide true and accurate personal data, including your full name, NRIC number, income statements, bank statements, and any other verification details requested by the Platform (\"Due Diligence Information\").",
      "You authorize us to conduct credit and legal checks with relevant institutions, including but not limited to the Central Credit Reference Information System (CCRIS) managed by Bank Negara Malaysia, and any registered credit reporting agencies operating under the Credit Reporting Agencies Act 2010.",
      "You acknowledge that details regarding your repayment behavior or Account default may be reported to registered credit reporting agencies, who may share this information with their subscribers.",
    ],
  },
  {
    title: "DIGITAL EXECUTION & ELECTRONIC DOCUMENT DELIVERY",
    clauses: [
      "By using this Platform, you agree to conduct all transactions and execute all agreements electronically. You acknowledge that completing in-app verification steps, entering a one-time passcode (OTP), or clicking any \"Accept\", \"Confirm\", or \"Sign\" button or checkbox constitutes your electronic signature. You agree that this electronic format carries the exact same legal validity, enforceability, and binding power as a traditional handwritten signature on paper.",
      "In strict compliance with the Moneylenders Act 1951, a digital copy of your fully executed and stamped statutory Moneylending Agreement will be generated and delivered to your registered email or made instantly downloadable inside your Account portal. This document will be delivered to you prior to or at the exact time of the loan disbursement, ensuring you hold a valid legal copy before funds are released.",
    ],
  },
  {
    title: "INTEREST RATES, STATUTORY FEES, AND LOAN DISBURSEMENT",
    clauses: [
      "Interest rates vary per loan product but will never exceed 18% per annum simple interest for unsecured loans, or 12% per annum simple interest for secured loans, as mandated by Section 17A of the Moneylenders Act 1951.",
      "Interest is calculated daily based on a 365-day year, starting from the exact day your loan funds are disbursed into your bank account.",
      "Before we disburse your loan, we will deduct the required stamp duty and legal attestation fees from your total approved amount. In strict compliance with the Moneylenders Act 1951, no legal fees, processing charges, administrative costs, or platform service fees shall be deducted from your loan disbursement amount. The final cash amount sent to your bank account will be your approved loan minus only these two permitted statutory costs.",
    ],
  },
  {
    title: "REPAYMENT AND LATE FEES",
    clauses: [
      "Your monthly repayment amounts and due dates will be clearly listed in your digital Account portal and issued via a Monthly Statement on the Platform. Payments must be settled by 11.59 P.M. on the specified due date using our approved payment channels (such as FPX Online Banking).",
      "If you fail to repay an installment by the due date, a late payment fee will be charged. In strict compliance with Schedule J/K, this late fee is calculated at a simple interest rate of 8% per annum on the overdue installment amount only, charged on a day-to-day basis from the date of default until fully settled.",
      "For the avoidance of doubt, late interest will never be compounded, nor will it be charged against any remaining unpaid loan principal that has not yet fallen due.",
    ],
  },
  {
    title: "REPAYMENT FLEXIBILITY AND COMPLAINTS MECHANISM",
    clauses: [
      "Borrowers maintain the right to settle their remaining loan balances ahead of schedule at any time. Upon receiving your early settlement request via the Platform, the Company will calculate the exact outstanding principal and simple interest accrued up to that specific day to provide you with your final payoff amount.",
      "If you encounter errors in your online monthly statements or wish to log a formal dispute regarding platform calculations, you may contact our internal careline at support@loanbuddy.com.my.",
    ],
  },
  {
    title: "PLATFORM ACCEPTABLE USE AND SUSPENSION",
    clauses: [
      "You agree not to exploit, hack, or reverse-engineer the digital infrastructure of the Platform, nor use automated scripts, bots, or scrapers to extract platform data. You are strictly prohibited from providing falsified or spoofed financial documentation during the application journey.",
      "If you fail to settle outstanding sums by the given due date, or if we have reasonable grounds to suspect fraudulent activity or a breach of Section 8.1, we reserve the right to limit, restrict, or temporarily suspend your digital Platform Account.",
      "If an account default continues past fourteen (14) days from written notice (sent via physical or electronic means), we reserve the right to demand the immediate full repayment of all outstanding principal and statutory late fees, and initiate legal recovery actions to the extent permitted by Malaysian law.",
    ],
  },
  {
    title: "INDEMNITY AND LIMITATION OF LIABILITY",
    clauses: [
      "You agree to indemnify and hold harmless the Company, its directors, and employees from any third-party claims or legal expenses arising from your violation of these Terms of Use, your misuse of the Platform, or your breach of any applicable laws.",
      "Platform Interruption Disclaimer: While we make reasonable attempts to maintain 24/7 uptime, we shall not be held liable for failure or delays in processing repayments, verifying documentation, or delivering digital notifications where such events stem from third-party payment gateway outages, telecommunications network errors, or scheduled system infrastructure upgrades.",
      "To the maximum extent permitted by Malaysian law, our total corporate liability under these platform Terms of Use shall not exceed Ringgit Malaysia Five Hundred (RM500). This limitation does not affect or alter any obligations explicitly governed by your executed statutory Moneylending Agreement.",
    ],
  },
  {
    title: "GOVERNING LAW AND JURISDICTION",
    clauses: [
      "These Terms of Use shall be governed by, interpreted, and construed in accordance with the laws of Malaysia.",
      "Any dispute, legal action, or claim arising out of your use of the Platform or default under these Terms of Use shall be brought exclusively before the Civil Courts of Malaysia (including the Subordinate Courts or High Court, depending on the jurisdictional monetary value of the claim).",
    ],
  },
];

// Bahasa Malaysia translation of the Privacy Notice (same sections and items as the English version).
const PRIVACY_NOTICE_SECTIONS_MS: PrivacySection[] = [
  {
    title: "DATA PERIBADI YANG KAMI KUMPUL",
    intro: "Bagi menilai pendaftaran akaun anda dan memproses kemudahan kredit, kami perlu mengumpul dan memproses data peribadi anda. Ini termasuk:",
    items: [
      ["Data Identiti:", "Nama penuh, nombor kad pengenalan (MyKad), tarikh lahir, jantina, kewarganegaraan dan imbasan biometrik muka secara langsung (dikumpul melalui platform)."],
      ["Data Hubungan:", "Alamat kediaman, alamat surat-menyurat, alamat e-mel dan nombor telefon bimbit."],
      ["Data Kewangan:", "Sejarah pekerjaan, butiran majikan, pendapatan bulanan, nombor akaun bank, slip gaji, penyata bank, penyata KWSP dan fail cukai."],
      ["Data Profil Kredit:", "Skor kredit, sejarah pembayaran, semakan kebankrapan dan rekod litigasi aktif yang diperoleh daripada agensi pelaporan kredit berdaftar."],
      ["Data Teknikal:", "Alamat IP, jenis peranti, sistem pengendalian dan maklumat penjejakan pelayar apabila anda berinteraksi dengan Platform kami."],
    ],
  },
  {
    title: "SUMBER DATA PERIBADI ANDA",
    intro: "Kami mengumpul data peribadi anda secara langsung daripada anda apabila anda mengisi borang, mendaftar akaun atau memuat naik fail ke Platform kami. Selain itu, kami mengumpul data daripada sumber pihak ketiga, termasuk:",
    items: [
      [null, "Agensi pelaporan kredit berdaftar (cth., CTOS, CRIF, Experian) dan Sistem Maklumat Rujukan Kredit Pusat (CCRIS) Bank Negara Malaysia."],
      [null, "Agensi kerajaan atau badan berkanun (cth., LHDN, KWSP) di mana dibenarkan."],
      [null, "Agensi pencegahan penipuan dan pangkalan data awam."],
    ],
  },
  {
    title: "TUJUAN PEMPROSESAN DATA ANDA",
    intro: "Data peribadi anda diproses bagi tujuan operasi, undang-undang dan penilaian kredit yang perlu, termasuk:",
    items: [
      ["Pengesahan Identiti:", "Mengesahkan identiti anda melalui aliran kerja Kenali Pelanggan Anda secara elektronik (eKYC)."],
      ["Penilaian Kredit:", "Menilai kelayakan kredit, nisbah hutang kepada pendapatan dan kelayakan kewangan anda untuk kemudahan pembiayaan."],
      ["Obligasi Kontrak:", "Menjana, menandatangani secara digital dan melaksanakan Perjanjian Pemberian Pinjaman Wang berkanun anda (Jadual J/K)."],
      ["Pengeluaran & Kutipan:", "Menguruskan pengeluaran dana pinjaman, menjejak bayaran balik bulanan, mengeluarkan penyata dan menjalankan tindakan pemulihan sekiranya berlaku keingkaran."],
      ["Pematuhan Peraturan:", "Memenuhi obligasi berkanun di bawah Akta Pemberi Pinjam Wang 1951, Akta Pencegahan Pengubahan Wang Haram, Pencegahan Pembiayaan Keganasan dan Hasil daripada Aktiviti Haram 2001 (AMLA) dan peraturan cukai."],
    ],
  },
  {
    title: "PENDEDAHAN DATA PERIBADI ANDA",
    intro: "Kami merahsiakan data anda. Walau bagaimanapun, bagi mengendalikan Perkhidmatan dan memenuhi keperluan undang-undang, kami mungkin mendedahkan data anda kepada pihak ketiga berikut:",
    items: [
      ["Pengawal Selia & Pihak Berkuasa Kerajaan:", "Kementerian Perumahan dan Kerajaan Tempatan (KPKT), Bank Negara Malaysia (BNM), Lembaga Hasil Dalam Negeri (LHDN), Polis Diraja Malaysia (PDRM) dan pihak berkuasa kerajaan lain yang berkaitan."],
      ["Agensi Pelaporan Kredit:", "Biro kredit yang diberi kuasa untuk merekodkan tingkah laku bayaran balik atau mengemas kini status keingkaran aktif."],
      ["Rakan Kongsi Perkhidmatan:", "Rakan kongsi gerbang pembayaran kami yang ditetapkan (seperti penyedia FPX), rakan kongsi perisian pengesahan identiti yang selamat dan penyedia storan awan."],
      ["Penasihat Profesional:", "Peguam, juruaudit dan agensi kutipan hutang kami yang diberi kuasa sekiranya berlaku tindakan pemulihan undang-undang akibat keingkaran."],
    ],
  },
  {
    title: "HAK ANDA DI BAWAH PDPA",
    intro: "Sebagai subjek data di Malaysia, anda mempunyai hak berkanun tertentu berkenaan maklumat anda:",
    items: [
      ["Hak Akses & Pembetulan:", "Anda berhak meminta salinan data peribadi anda atau meminta kemas kini kepada data yang tidak tepat atau lapuk melalui tetapan Akaun anda."],
      ["Hak Menarik Balik Persetujuan:", "Anda boleh menarik balik persetujuan anda untuk kami memproses data anda bagi tujuan pemasaran atau ciri yang tidak penting. Walau bagaimanapun, sila ambil perhatian bahawa penarikan balik persetujuan bagi data operasi teras akan menyebabkan penamatan serta-merta Akaun platform dan kelayakan pinjaman anda."],
    ],
  },
  {
    title: "PENYIMPANAN DAN KESELAMATAN DATA",
    items: [
      ["Keselamatan:", "Kami melindungi data peribadi anda menggunakan penyulitan Secure Socket Layer (SSL) bertaraf industri, tembok api (firewall) dan protokol akses pentadbiran yang terhad."],
      ["Penyimpanan:", "Kami menyimpan data kewangan dan identiti anda selagi akaun anda kekal aktif, atau bagi tempoh wajib tujuh (7) tahun selepas penyelesaian penuh kemudahan pinjaman anda bagi mematuhi undang-undang penyimpanan rekod cukai, audit dan pemberian pinjaman wang berkanun."],
    ],
  },
  {
    title: "HUBUNGAN DAN ADUAN",
    intro: "Sekiranya anda mempunyai sebarang pertanyaan berkenaan Notis Privasi ini, atau ingin melaksanakan hak akses dan pembetulan data anda, sila hubungi pasukan kami di:",
    items: [
      ["E-mel:", "support@loanbuddy.com.my"],
      ["Alamat Surat-Menyurat:", "Loanbuddy Credit Sdn. Bhd., No. 15, Tingkat 4, Jalan Medan Tuanku 1, 50300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"],
    ],
  },
];

// Bahasa Malaysia translation of the Terms of Service (same numbering: clause 8.2 refers to 8.1).
const TERMS_OF_SERVICE_SECTIONS_MS: TermsSection[] = [
  {
    title: "PENGENALAN",
    clauses: [
      "Selamat datang ke Platform Pemberian Pinjaman Wang Digital (\"Perkhidmatan\") yang dikendalikan oleh Loanbuddy Credit Sdn. Bhd. (No. Pendaftaran Syarikat 200901039396/882536-K) (dahulunya dikenali sebagai Loan Buddy Sdn. Bhd.) (dirujuk sebagai \"Loanbuddy\", \"Syarikat\" atau \"kami\"). Loanbuddy ialah pemberi pinjam wang berlesen, dan perkhidmatan kami tertakluk sepenuhnya kepada peraturan dan perlindungan yang ditetapkan di bawah Akta Pemberi Pinjam Wang 1951. Terma Penggunaan ini mengawal akses dan penggunaan anda terhadap laman web dan aplikasi mudah alih kami (secara kolektif, \"Platform\").",
      "Sila baca Terma Penggunaan ini dengan teliti sebelum mendaftar akaun (\"Akaun\"). Dengan menandakan kotak semak \"Terima\" atau mewujudkan Akaun di Platform, anda menyatakan persetujuan anda yang tidak boleh dibatalkan untuk terikat dengan Terma Penggunaan ini. Jika anda tidak bersetuju, sila jangan gunakan Perkhidmatan kami.",
      "Untuk mendaftar Akaun atau menggunakan Perkhidmatan, anda mestilah warganegara atau pemastautin Malaysia yang berumur sekurang-kurangnya lapan belas (18) tahun dan tidak melebihi enam puluh (60) tahun. Kami berhak menolak akses ke Platform atau menolak pendaftaran Akaun mengikut budi bicara mutlak kami.",
      "Kami berhak untuk menaik taraf, mengubah suai atau melaksanakan penyelenggaraan teknikal rutin terhadap antara muka Platform dan infrastruktur perisian asasnya pada bila-bila masa. Sekiranya pengubahsuaian tersebut memberi kesan secara langsung kepada saluran bayaran balik, akses penyata atau pengurusan akaun aktif anda, kami akan memberikan notis awal yang munasabah melalui e-mel berdaftar anda atau melalui pemberitahuan dalam aplikasi. Untuk mengelakkan keraguan, tiada pengubahsuaian platform atau penggantungan teknikal akan mengubah, menggantikan atau membatalkan terma kewangan tetap, kadar faedah atau jadual pembayaran yang dipersetujui secara nyata dalam Perjanjian Pemberian Pinjaman Wang berkanun anda yang telah dilaksanakan (Jadual J/K).",
    ],
  },
  {
    title: "PENERIMAAN PERKHIDMATAN",
    clauses: [
      "Terma Penggunaan ini mengawal akses digital anda ke Platform. Terma ini tidak membentuk tawaran pinjaman yang tersendiri atau perjanjian pinjaman.",
      "Setiap permohonan pinjaman individu yang diluluskan melalui Platform ini tertakluk sepenuhnya kepada pelaksanaan secara elektronik perjanjian pemberian pinjaman wang berkanun yang tersendiri dalam format yang ditetapkan di bawah Jadual J (Pinjaman Tidak Bercagar) atau Jadual K (Pinjaman Bercagar) Peraturan-Peraturan Pemberi Pinjam Wang (Kawalan dan Pelesenan) 2003 (setiap satunya dirujuk sebagai \"Perjanjian Pemberian Pinjaman Wang\").",
      "Sekiranya terdapat sebarang percanggahan atau ketidakselarasan secara langsung antara Terma Penggunaan ini dan Perjanjian Pemberian Pinjaman Wang berkanun yang telah dilaksanakan, terma Perjanjian Pemberian Pinjaman Wang berkanun tersebut hendaklah diguna pakai setakat ketidakselarasan itu.",
    ],
  },
  {
    title: "PENGAKTIFAN AKAUN DIGITAL & SEMAKAN KREDIT",
    clauses: [
      "Setelah menerima pendaftaran atau permohonan pinjaman anda, kami akan menjalankan usaha wajar undang-undang dan kredit yang diperlukan.",
      "Anda dengan nyata bersetuju untuk memberikan data peribadi yang benar dan tepat, termasuk nama penuh, nombor kad pengenalan, penyata pendapatan, penyata bank dan sebarang butiran pengesahan lain yang diminta oleh Platform (\"Maklumat Usaha Wajar\").",
      "Anda memberi kuasa kepada kami untuk menjalankan semakan kredit dan undang-undang dengan institusi yang berkaitan, termasuk tetapi tidak terhad kepada Sistem Maklumat Rujukan Kredit Pusat (CCRIS) yang diuruskan oleh Bank Negara Malaysia, dan mana-mana agensi pelaporan kredit berdaftar yang beroperasi di bawah Akta Agensi Pelaporan Kredit 2010.",
      "Anda mengakui bahawa butiran berkenaan tingkah laku bayaran balik anda atau keingkaran Akaun boleh dilaporkan kepada agensi pelaporan kredit berdaftar, yang boleh berkongsi maklumat ini dengan pelanggan mereka.",
    ],
  },
  {
    title: "PELAKSANAAN DIGITAL & PENGHANTARAN DOKUMEN ELEKTRONIK",
    clauses: [
      "Dengan menggunakan Platform ini, anda bersetuju untuk menjalankan semua transaksi dan melaksanakan semua perjanjian secara elektronik. Anda mengakui bahawa melengkapkan langkah pengesahan dalam aplikasi, memasukkan kata laluan sekali guna (OTP), atau menekan mana-mana butang atau kotak semak \"Terima\", \"Sahkan\" atau \"Tandatangan\" merupakan tandatangan elektronik anda. Anda bersetuju bahawa format elektronik ini mempunyai kesahan undang-undang, kebolehkuatkuasaan dan kuasa mengikat yang sama seperti tandatangan tulisan tangan tradisional di atas kertas.",
      "Dengan pematuhan ketat kepada Akta Pemberi Pinjam Wang 1951, salinan digital Perjanjian Pemberian Pinjaman Wang berkanun anda yang telah dilaksanakan sepenuhnya dan disetemkan akan dijana dan dihantar ke e-mel berdaftar anda atau boleh dimuat turun serta-merta di dalam portal Akaun anda. Dokumen ini akan dihantar kepada anda sebelum atau pada masa yang sama dengan pengeluaran pinjaman, bagi memastikan anda memegang salinan undang-undang yang sah sebelum dana dikeluarkan.",
    ],
  },
  {
    title: "KADAR FAEDAH, FI BERKANUN DAN PENGELUARAN PINJAMAN",
    clauses: [
      "Kadar faedah berbeza mengikut produk pinjaman tetapi tidak akan melebihi 18% setahun faedah ringkas bagi pinjaman tidak bercagar, atau 12% setahun faedah ringkas bagi pinjaman bercagar, seperti yang ditetapkan oleh Seksyen 17A Akta Pemberi Pinjam Wang 1951.",
      "Faedah dikira setiap hari berdasarkan 365 hari setahun, bermula dari hari sebenar dana pinjaman anda dikeluarkan ke dalam akaun bank anda.",
      "Sebelum kami mengeluarkan pinjaman anda, kami akan menolak duti setem dan fi pengesahan undang-undang yang diperlukan daripada jumlah keseluruhan yang diluluskan. Dengan pematuhan ketat kepada Akta Pemberi Pinjam Wang 1951, tiada fi guaman, caj pemprosesan, kos pentadbiran atau fi perkhidmatan platform akan ditolak daripada jumlah pengeluaran pinjaman anda. Jumlah tunai akhir yang dihantar ke akaun bank anda ialah pinjaman yang diluluskan ditolak hanya dua kos berkanun yang dibenarkan ini.",
    ],
  },
  {
    title: "BAYARAN BALIK DAN FI LEWAT",
    clauses: [
      "Jumlah bayaran balik bulanan dan tarikh matang anda akan disenaraikan dengan jelas dalam portal Akaun digital anda dan dikeluarkan melalui Penyata Bulanan di Platform. Bayaran mesti dijelaskan selewat-lewatnya 11.59 malam pada tarikh matang yang ditetapkan menggunakan saluran pembayaran kami yang diluluskan (seperti Perbankan Dalam Talian FPX).",
      "Sekiranya anda gagal membayar ansuran pada tarikh matang, fi bayaran lewat akan dikenakan. Dengan pematuhan ketat kepada Jadual J/K, fi lewat ini dikira pada kadar faedah ringkas 8% setahun ke atas amaun ansuran tertunggak sahaja, dikenakan secara harian dari tarikh keingkaran sehingga dijelaskan sepenuhnya.",
      "Untuk mengelakkan keraguan, faedah lewat tidak akan dikompaunkan, dan tidak akan dikenakan ke atas baki prinsipal pinjaman yang belum dibayar dan belum matang.",
    ],
  },
  {
    title: "FLEKSIBILITI BAYARAN BALIK DAN MEKANISME ADUAN",
    clauses: [
      "Peminjam berhak menjelaskan baki pinjaman mereka lebih awal daripada jadual pada bila-bila masa. Setelah menerima permohonan penyelesaian awal anda melalui Platform, Syarikat akan mengira prinsipal tertunggak yang tepat dan faedah ringkas yang terakru sehingga hari tersebut untuk memberikan anda jumlah penyelesaian akhir.",
      "Sekiranya anda mendapati kesilapan dalam penyata bulanan dalam talian anda atau ingin membuat pertikaian rasmi berkenaan pengiraan platform, anda boleh menghubungi talian khidmat dalaman kami di support@loanbuddy.com.my.",
    ],
  },
  {
    title: "PENGGUNAAN PLATFORM YANG DIBENARKAN DAN PENGGANTUNGAN",
    clauses: [
      "Anda bersetuju untuk tidak mengeksploitasi, menggodam atau melakukan kejuruteraan balikan terhadap infrastruktur digital Platform, dan tidak menggunakan skrip automatik, bot atau pengikis (scraper) untuk mengekstrak data platform. Anda dilarang sama sekali daripada memberikan dokumentasi kewangan yang dipalsukan atau diubah suai sepanjang proses permohonan.",
      "Sekiranya anda gagal menjelaskan jumlah tertunggak pada tarikh matang yang ditetapkan, atau sekiranya kami mempunyai alasan munasabah untuk mengesyaki aktiviti penipuan atau pelanggaran Klausa 8.1, kami berhak untuk mengehadkan, menyekat atau menggantung sementara Akaun Platform digital anda.",
      "Sekiranya keingkaran akaun berterusan melebihi empat belas (14) hari dari tarikh notis bertulis (dihantar secara fizikal atau elektronik), kami berhak menuntut bayaran balik penuh dengan serta-merta bagi semua prinsipal tertunggak dan fi lewat berkanun, serta memulakan tindakan pemulihan undang-undang setakat yang dibenarkan oleh undang-undang Malaysia.",
    ],
  },
  {
    title: "INDEMNITI DAN HAD LIABILITI",
    clauses: [
      "Anda bersetuju untuk menanggung rugi dan melepaskan Syarikat, para pengarah dan pekerjanya daripada sebarang tuntutan pihak ketiga atau perbelanjaan guaman yang timbul daripada pelanggaran Terma Penggunaan ini oleh anda, penyalahgunaan Platform oleh anda, atau pelanggaran anda terhadap mana-mana undang-undang yang terpakai.",
      "Penafian Gangguan Platform: Walaupun kami berusaha secara munasabah untuk mengekalkan operasi 24/7, kami tidak akan bertanggungjawab atas kegagalan atau kelewatan dalam memproses bayaran balik, mengesahkan dokumentasi atau menghantar pemberitahuan digital sekiranya kejadian tersebut berpunca daripada gangguan gerbang pembayaran pihak ketiga, ralat rangkaian telekomunikasi atau naik taraf infrastruktur sistem yang dijadualkan.",
      "Setakat maksimum yang dibenarkan oleh undang-undang Malaysia, jumlah liabiliti korporat kami di bawah Terma Penggunaan platform ini tidak akan melebihi Ringgit Malaysia Lima Ratus (RM500). Had ini tidak menjejaskan atau mengubah sebarang obligasi yang dikawal secara nyata oleh Perjanjian Pemberian Pinjaman Wang berkanun anda yang telah dilaksanakan.",
    ],
  },
  {
    title: "UNDANG-UNDANG YANG MENTADBIR DAN BIDANG KUASA",
    clauses: [
      "Terma Penggunaan ini hendaklah ditadbir, ditafsir dan dihuraikan mengikut undang-undang Malaysia.",
      "Sebarang pertikaian, tindakan undang-undang atau tuntutan yang timbul daripada penggunaan Platform oleh anda atau keingkaran di bawah Terma Penggunaan ini hendaklah dibawa secara eksklusif ke Mahkamah Sivil Malaysia (termasuk Mahkamah Rendah atau Mahkamah Tinggi, bergantung pada nilai monetari bidang kuasa tuntutan tersebut).",
    ],
  },
];

function LegalModal({
  title,
  closeLabel,
  bodyClassName,
  onClose,
  children,
}: {
  title: string;
  closeLabel: string;
  bodyClassName: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title modal-title-custom-1">{title}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className={`modal-body ${bodyClassName}`}>{children}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              {closeLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const LEGAL_COPY: Record<
  Language,
  {
    privacyTitle: string;
    termsTitle: string;
    privacyLastUpdated: string;
    termsLastUpdated: string;
    date: string;
    close: string;
    privacySections: PrivacySection[];
    termsSections: TermsSection[];
  }
> = {
  ms: {
    privacyTitle: "NOTIS PRIVASI LOANBUDDY",
    termsTitle: "TERMA PERKHIDMATAN LOANBUDDY",
    privacyLastUpdated: "KEMAS KINI TERAKHIR:",
    termsLastUpdated: "Kemas kini terakhir:",
    date: "27 Oktober 2026",
    close: "Tutup",
    privacySections: PRIVACY_NOTICE_SECTIONS_MS,
    termsSections: TERMS_OF_SERVICE_SECTIONS_MS,
  },
  en: {
    privacyTitle: "LOANBUDDY PRIVACY NOTICE",
    termsTitle: "LOANBUDDY TERMS OF SERVICE",
    privacyLastUpdated: "LAST UPDATED:",
    termsLastUpdated: "Last updated:",
    date: "27 October 2026",
    close: "Close",
    privacySections: PRIVACY_NOTICE_SECTIONS_EN,
    termsSections: TERMS_OF_SERVICE_SECTIONS_EN,
  },
};

function PrivacyIntro({ language }: { language: Language }) {
  if (language === "en") {
    return (
      <p>
        Loanbuddy Credit Sdn. Bhd. (Company Registration No. 200901039396/882536-K) (&quot;<strong>the Company</strong>&quot;, &quot;<strong>we</strong>&quot;, &quot;<strong>us</strong>&quot;, or &quot;<strong>our</strong>&quot;) values your privacy. This Privacy Notice is issued in accordance with the Malaysian <strong>Personal Data Protection Act 2010 (PDPA)</strong>. It explains how we collect, use, process, disclose, and protect your personal data when you access our website, mobile application, and digital services (collectively, the &quot;<strong>Platform</strong>&quot;).
      </p>
    );
  }
  return (
    <p>
      Loanbuddy Credit Sdn. Bhd. (No. Pendaftaran Syarikat 200901039396/882536-K) (&quot;<strong>Syarikat</strong>&quot; atau &quot;<strong>kami</strong>&quot;) menghargai privasi anda. Notis Privasi ini dikeluarkan menurut <strong>Akta Perlindungan Data Peribadi 2010 (PDPA)</strong> Malaysia. Notis ini menerangkan cara kami mengumpul, menggunakan, memproses, mendedahkan dan melindungi data peribadi anda apabila anda mengakses laman web, aplikasi mudah alih dan perkhidmatan digital kami (secara kolektif, &quot;<strong>Platform</strong>&quot;).
    </p>
  );
}

// The notice text in the visitor's language, shared by the pop-ups (h5 headings) and the full pages (styled h3 headings)
type LegalContentProps = { headingAs?: "h3" | "h5"; headingClassName?: string };

export function PrivacyNoticeContent({ headingAs: Heading = "h5", headingClassName }: LegalContentProps) {
  const { language } = useLanguage();
  const copy = LEGAL_COPY[language];
  return (
    <>
      <p>
        <strong>{copy.privacyLastUpdated}</strong> {copy.date}
      </p>
      <PrivacyIntro language={language} />

      {copy.privacySections.map((section, sectionIdx) => (
        <React.Fragment key={section.title}>
          <Heading className={headingClassName}>{sectionIdx + 1}. {section.title}</Heading>
          {section.intro && <p className="p-dasar-privasi">{section.intro}</p>}
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
            {section.items.map(([label, text]) => (
              <li key={text} className="li-dasar-privasi" style={{ marginBottom: "6px" }}>
                {label && <strong>{label} </strong>}
                {text}
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </>
  );
}

export function TermsOfServiceContent({ headingAs: Heading = "h5", headingClassName }: LegalContentProps) {
  const { language } = useLanguage();
  const copy = LEGAL_COPY[language];
  return (
    <>
      <p>
        <strong>{copy.termsLastUpdated}</strong> {copy.date}
      </p>

      {copy.termsSections.map((section, sectionIdx) => (
        <React.Fragment key={section.title}>
          <Heading className={headingClassName}>{sectionIdx + 1}. {section.title}</Heading>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {section.clauses.map((clause, clauseIdx) => (
              <li key={clause} className="li-terma-syarat d-flex" style={{ gap: "10px", marginBottom: "8px" }}>
                <strong style={{ flex: "0 0 2.75rem" }}>
                  {sectionIdx + 1}.{clauseIdx + 1}.
                </strong>
                <span>{clause}</span>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </>
  );
}

export function PrivacyNoticeModal({ onClose }: { onClose: () => void }) {
  const copy = LEGAL_COPY[useLanguage().language];
  return (
    <LegalModal title={copy.privacyTitle} closeLabel={copy.close} bodyClassName="privay-policy-modal" onClose={onClose}>
      <div className="container">
        <PrivacyNoticeContent />
      </div>
    </LegalModal>
  );
}

export function TermsOfServiceModal({ onClose }: { onClose: () => void }) {
  const copy = LEGAL_COPY[useLanguage().language];
  return (
    <LegalModal title={copy.termsTitle} closeLabel={copy.close} bodyClassName="term-of-use-modal" onClose={onClose}>
      <TermsOfServiceContent />
    </LegalModal>
  );
}
