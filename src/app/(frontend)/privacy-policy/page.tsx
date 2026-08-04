"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PrivacyPolicyPage() {
  

  return (
    <div className="page_wrapper">
      {/* Back To Top */}
      <div className="backtotop">
        <a href="#" className="scroll">
          <i className="far fa-arrow-up"></i>
        </a>
      </div>

      {/* Sticky WhatsApp */}
      <div className="sticky-chat">
        <a
          className="chat-button"
          href="https://wa.link/nlt1a4"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <span>Start chatting now!</span>
          <svg viewBox="0 0 32 32">
            <path
              className="cls-1"
              d="M19.47,31a2,2,0,0,1-1.8-1.09l-4-7.57a1,1,0,0,1,1.77-.93l4,7.57L29,3.06,3,12.49l9.8,5.26,8.32-8.32a1,1,0,0,1,1.42,1.42l-8.85,8.84a1,1,0,0,1-1.17.18L2.09,14.33a2,2,0,0,1,.25-3.72L28.25,1.13a2,2,0,0,1,2.62,2.62L21.39,29.66A2,2,0,0,1,19.61,31Z"
            ></path>
          </svg>
        </a>
      </div>

      {/* Header */}
      <Header />

      {/* Main Body */}
      <main className="page_content">
        <section
          className="page_banner faq_banner_main section_space_lg_about overflow-hidden decoration_wrap mouse_move"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col col-12">
                <h1 className="banner-mohon-big-title text-center justify-content-center">
                  Dasar Privasi (Privacy Policy)
                </h1>
                <p className="banner_description banner-mohon-description text-center text-grey">
                  Loanbuddy Credit Sdn. Bhd. komited dalam melindungi privasi data peribadi anda di bawah Akta Perlindungan Data Peribadi 2010 (PDPA).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space_lg bg_white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="legal-content text-secondary leading-relaxed fs-6">
                  <h3 className="text-blue mt-4 mb-3 fs-4">1. Pengumpulan Maklumat Peribadi</h3>
                  <p>
                    Kami mengumpul maklumat peribadi yang diserahkan secara sukarela oleh anda melalui borang permohonan online, termasuk nama, nombor IC, maklumat hubungan, penyata gaji, dan dokumen berkaitan kewangan yang lain.
                  </p>

                  <h3 className="text-blue mt-4 mb-3 fs-4">2. Penggunaan Maklumat Peribadi</h3>
                  <p>Maklumat anda digunakan untuk tujuan:</p>
                  <ul>
                    <li>Memproses permohonan pinjaman peribadi dan menilai kelayakan kredit anda.</li>
                    <li>Menghubungi anda mengenai permohonan, tawaran pinjaman, atau pertanyaan khidmat pelanggan.</li>
                    <li>Memenuhi keperluan undang-undang dan pengawalseliaan di bawah KPKT dan Akta Pemberi Pinjam Wang 1951.</li>
                  </ul>

                  <h3 className="text-blue mt-4 mb-3 fs-4">3. Keselamatan dan Kerahsiaan Data</h3>
                  <p>
                    Kami mengambil langkah fizikal, elektronik, dan pengurusan yang sewajarnya bagi memastikan data peribadi anda dilindungi daripada sebarang akses, kehilangan, atau penyalahgunaan yang tidak sah.
                  </p>

                  <h3 className="text-blue mt-4 mb-3 fs-4">4. Hak Anda</h3>
                  <p>
                    Anda berhak untuk mengakses, mengemas kini, atau meminta pembetulan maklumat peribadi anda pada bila-bila masa dengan menghubungi pegawai perlindungan data kami di <a href="mailto:info@loanbuddy.com.my">info@loanbuddy.com.my</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
