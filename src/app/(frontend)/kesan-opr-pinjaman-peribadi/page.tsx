"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function KesanOPRPinjamanPeribadiPage() {
  

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
                    <span className="badge bg-primary text-white mb-2">Kewangan & OPR</span>
                    <h1 className="display-6 fw-bold text-blue mb-3">
                      Jenis-Jenis Pinjaman di Malaysia
                    </h1>
                    <p className="text-muted small">Tarikh Kemaskini: 2026 | Oleh Pasukan Kewangan Loanbuddy Credit</p>
                  </div>

                  <div className="item_image mb-4 text-center">
                    <img
                      src="/assets/images/blog/opr-2.75-2026-macam-mana-installment-pinjaman-peribadi-berubah.png"
                      className="img-fluid rounded"
                      alt="Kesan OPR 2026"
                    />
                  </div>

                  <div className="article-body text-secondary leading-relaxed fs-6">
                    <p>
                      Kadar Dasar Semalaman (OPR) yang ditetapkan oleh Bank Negara Malaysia (BNM) sering menjadi bahan perbincangan panas. Namun, tahukah anda bagaimana perubahan OPR mempengaruhi ansuran pinjaman peribadi anda?
                    </p>

                    <h3 className="text-blue mt-4 mb-3 fs-4">Pinjaman Kadar Tetap vs Pinjaman Kadar Terapung</h3>
                    <p>
                      Bagi pinjaman peribadi berasaskan <strong>kadar faedah tetap (fixed rate)</strong> seperti di Loanbuddy Credit, pergerakan OPR tidak akan mengubah jumlah ansuran bulanan yang telah dipersetujui dalam perjanjian anda!
                    </p>

                    <h3 className="text-blue mt-4 mb-3 fs-4">Kelebihan Kadar Faedah Tetap</h3>
                    <ul>
                      <li><strong>Kepastian Kewangan:</strong> Bayaran bulanan anda kekal dari bulan pertama hingga bulan terakhir.</li>
                      <li><strong>Bebas Kejutan OPR:</strong> Kenaikan OPR BNM tidak menjejaskan perancangan belanjawan bulanan anda.</li>
                    </ul>

                    <div className="my-5 p-4 bg-light rounded text-center border-start border-primary border-4">
                      <h4 className="text-blue mb-2">Perlukan Pinjaman Peribadi Kadar Tetap?</h4>
                      <p className="mb-3">Ketahui kelayakan pinjaman peribadi anda di Loanbuddy Credit hari ini.</p>
                      <a href="/mohon-pinjaman-online" className="btn btn-primary rounded-pill px-4">
                        Semak Kelayakan Pinjaman
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
