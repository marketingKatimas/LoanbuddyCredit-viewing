"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function DisclaimerNoticePage() {
  

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
                  Kenyataan Penafian (Disclaimer Notice)
                </h1>
                <p className="banner_description banner-mohon-description text-center text-grey">
                  Penafian undang-undang berhubung maklumat dan perkhidmatan yang disediakan oleh Loanbuddy Credit.
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
                  <h3 className="text-blue mt-4 mb-3 fs-4">1. Tujuan Maklumat General</h3>
                  <p>
                    Semua kandungan yang terdapat pada laman web ini disediakan untuk tujuan maklumat umum sahaja. Walaupun kami berusaha memastikan maklumat dikemas kini dan tepat, Loanbuddy Credit tidak membuat sebarang jaminan nyata atau tersirat berhubung ketepatan atau kebolehgunaan maklumat ini.
                  </p>

                  <h3 className="text-blue mt-4 mb-3 fs-4">2. Bukan Nasihat Kewangan Rasmi</h3>
                  <p>
                    Kandungan artikel dan alat kalkulator di laman web ini tidak boleh dianggap sebagai nasihat kewangan, perundangan, atau pelaburan rasmi. Pemohon dinasihatkan untuk menilai keupayaan kewangan peribadi sebelum membuat sebarang komitmen pinjaman.
                  </p>

                  <h3 className="text-blue mt-4 mb-3 fs-4">3. Status Lesen KPKT</h3>
                  <p>
                    Loanbuddy Credit Sdn. Bhd. (<span className="no-link">200901039396</span> / 882536-K) beroperasi secara sah di bawah Akta Pemberi Pinjam Wang 1951 di bawah kawal selia Kementerian Perumahan dan Kerajaan Tempatan (KPKT) dengan Nombor Lesen WL7830/14/01-3/030527.
                  </p>

                  <h3 className="text-blue mt-4 mb-3 fs-4">4. Amaran Penipuan (Scam Alert)</h3>
                  <p>
                    Loanbuddy Credit <strong>TIDAK PERNAH</strong> meminta sebarang bayaran pendahuluan (upfront fee), yuran pemprosesan, atau wang penjamin sebelum pinjaman anda diluluskan dan dimasukkan ke akaun bank anda. Sila berwaspada terhadap pihak yang menyamar sebagai ejen kami.
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
