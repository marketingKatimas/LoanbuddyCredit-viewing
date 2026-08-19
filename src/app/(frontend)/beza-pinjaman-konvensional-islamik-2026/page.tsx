"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function BezaPinjamanKonvensionalIslamikPage() {
  

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
        <section className="blog_details_section section_space_lg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="blog_details_content bg-white p-4 p-md-5 rounded shadow-sm">
                  <div className="mb-4 text-center">
                    <span className="badge bg-primary text-white mb-2">Panduan Kewangan Malaysia</span>
                    <h1 className="display-6 fw-bold text-blue mb-3">
                      Konvensional vs Islamik: Beza Pinjaman Peribadi Malaysia 2026
                    </h1>
                    <p className="text-muted small">Tarikh Kemaskini: 2026 | Oleh Pasukan Kewangan Loanbuddy Credit</p>
                  </div>

                  <div className="item_image mb-4 text-center">
                    <img
                      src="/assets/images/blog/konvensional-vs-islamik-beza-pinjaman-peribadi-2026.avif"
                      className="img-fluid rounded"
                      alt="Beza Pinjaman Konvensional vs Islamik"
                    />
                  </div>

                  <div className="article-body text-secondary leading-relaxed fs-6">
                    <p>
                      Sebelum memohon sebarang pembiayaan peribadi di Malaysia, adalah penting untuk memahami perbezaan konsep utama antara Pinjaman Konvensional dan Pembiayaan Islamik.
                    </p>

                    <h3 className="text-blue mt-4 mb-3 fs-4">1. Konsep Perjanjian</h3>
                    <p>
                      <strong>Konvensional:</strong> Berdasarkan hubungan pemberi pinjam dan peminjam, di mana peminjam membayar balik wang prinsipal bersama kadar faedah (interest).<br />
                      <strong>Islamik:</strong> Berdasarkan konsep Syariah seperti Murabahah (jual beli) atau Tawarruq, di mana bank menjual komoditi pada harga yang telah ditambah keuntungan (profit margin).
                    </p>

                    <h3 className="text-blue mt-4 mb-3 fs-4">2. Caj Bayaran Lewat</h3>
                    <p>
                      <strong>Konvensional:</strong> Mengenakan caj faedah kompaun ke atas bayaran yang terlewat.<br />
                      <strong>Islamik:</strong> Mengenakan caj Ta&apos;widh (ganti rugi) pada kadar yang ditetapkan dan sebahagian daripadanya disalurkan kepada badan kebajikan.
                    </p>

                    <div className="article-cta-box">
                      <h4 className="cta-title">Perlukan Khidmat Nasihat Pembiayaan?</h4>
                      <p className="cta-desc">Hubungi perunding kewangan Loanbuddy Credit untuk rundingan percuma hari ini.</p>
                      <a href="/mohon-pinjaman-online" className="article-cta-btn">
                        <span>Mohon Pinjaman Sekarang</span>
                        <span className="btn-icon">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
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
