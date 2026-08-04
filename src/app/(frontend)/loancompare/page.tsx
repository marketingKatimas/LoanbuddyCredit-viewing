"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function LoanComparePage() {
  

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
                  LoanCompare - Perbandingan Pinjaman Peribadi
                </h1>
                <p className="banner_description banner-mohon-description text-center text-grey">
                  Bandingkan pilihan pinjaman peribadi sah berlesen untuk membuat keputusan kewangan yang bijak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Grid */}
        <section className="section_space_lg bg_grey">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="bg-white p-4 rounded shadow-sm h-100 text-center border-top border-primary border-4">
                  <h4 className="text-blue mb-3">Pinjaman Peribadi Swasta</h4>
                  <div className="display-6 fw-bold text-primary mb-3">18% p.a.</div>
                  <p className="text-muted">Kadar faedah tetap 1.5% sebulan</p>
                  <hr />
                  <ul className="list-unstyled text-start small leading-loose mb-4">
                    <li>✓ Amaun: RM1,000 – RM50,000</li>
                    <li>✓ Tempoh: 12 – 60 Bulan</li>
                    <li>✓ Gaji Min: RM1,700/bulan</li>
                    <li>✓ Kelulusan: 1–2 Hari Bekerja</li>
                  </ul>
                  <a href="/mohon-pinjaman-online" className="btn btn-primary rounded-pill w-100">
                    Mohon Sekarang
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="bg-white p-4 rounded shadow-sm h-100 text-center border-top border-success border-4">
                  <h4 className="text-success mb-3">Pinjaman Kakitangan Kerajaan</h4>
                  <div className="display-6 fw-bold text-success mb-3">18% p.a.</div>
                  <p className="text-muted">Kadar faedah tetap & pemprosesan pantas</p>
                  <hr />
                  <ul className="list-unstyled text-start small leading-loose mb-4">
                    <li>✓ Amaun: Sehingga RM50,000</li>
                    <li>✓ Tempoh: 12 – 60 Bulan</li>
                    <li>✓ Kelulusan Segera</li>
                    <li>✓ Potongan Gaji / PGM Flexible</li>
                  </ul>
                  <a href="/mohon-pinjaman-online" className="btn btn-success rounded-pill w-100">
                    Mohon Sekarang
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="bg-white p-4 rounded shadow-sm h-100 text-center border-top border-info border-4">
                  <h4 className="text-info mb-3">Penyatuan Hutang (Consolidation)</h4>
                  <div className="display-6 fw-bold text-info mb-3">Ringankan Ansuran</div>
                  <p className="text-muted">Gabung pelbagai kad kredit & hutang</p>
                  <hr />
                  <ul className="list-unstyled text-start small leading-loose mb-4">
                    <li>✓ Mengurangkan Kadar Faedah Tinggi</li>
                    <li>✓ 1 Tarikh Pembayaran Bulanan</li>
                    <li>✓ Membantu Memperbaiki CCRIS</li>
                  </ul>
                  <a href="/penyatuan-hutang-kad-kredit-2026" className="btn btn-info text-white rounded-pill w-100">
                    Ketahui Lanjut
                  </a>
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
