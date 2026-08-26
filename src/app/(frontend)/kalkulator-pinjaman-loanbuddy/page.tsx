"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function LoanCalculatorPage() {


  // Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(3000);
  const [loanTenure, setLoanTenure] = useState<number>(12);

  // Constants & Formulas
  const ANNUAL_INTEREST_RATE = 18; // 18% per year
  const monthlyInterestRate = ANNUAL_INTEREST_RATE / 12 / 100; // 0.015 (1.5% per month)
  const interestFactor = 1 + monthlyInterestRate * loanTenure;

  const totalAmount = Math.round(loanAmount * interestFactor);
  const totalInterest = Math.round(totalAmount - loanAmount);
  const monthlyEMI = Math.round(totalAmount / loanTenure);

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

      {/* Main Content */}
      <main className="page_content">
        <section
          className="page_banner faq_banner_main section_space_lg_about overflow-hidden decoration_wrap mouse_move"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col col-12">
                <h1 className="banner-mohon-big-title text-center justify-content-center">
                  Kalkulator Pinjaman Peribadi
                </h1>
                <p className="banner_description banner-mohon-description text-center text-grey">
                  Kira anggaran bayaran bulanan pinjaman anda dengan mudah dan telus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Loan Calculator Section */}
        <section className="section_space_lg bg_grey">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="loan-calculator-box bg-white p-4 p-md-5 rounded shadow-sm">
                  <div className="row g-4">
                    {/* Controls */}
                    <div className="col-lg-7">
                      <h3 className="text-blue mb-4" style={{ fontWeight: 700 }}>
                        Anggaran Pinjaman Anda
                      </h3>

                      {/* Loan Amount Input & Slider */}
                      <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <label className="fw-bold text-secondary">Jumlah Pinjaman (RM)</label>
                          <span className="fs-5 fw-bold text-primary">RM {loanAmount.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          className="form-range"
                          min={1000}
                          max={50000}
                          step={500}
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                        />
                        <div className="d-flex justify-content-between text-muted small">
                          <span>RM 1,000</span>
                          <span>RM 50,000</span>
                        </div>
                      </div>

                      {/* Loan Tenure Input & Slider */}
                      <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <label className="fw-bold text-secondary">Tempoh Pinjaman (Bulan)</label>
                          <span className="fs-5 fw-bold text-primary">{loanTenure} Bulan</span>
                        </div>
                        <input
                          type="range"
                          className="form-range"
                          min={12}
                          max={60}
                          step={1}
                          value={loanTenure}
                          onChange={(e) => setLoanTenure(Number(e.target.value))}
                        />
                        <div className="d-flex justify-content-between text-muted small">
                          <span>12 Bulan (1 Tahun)</span>
                          <span>60 Bulan (5 Tahun)</span>
                        </div>
                      </div>

                      <div className="p-3 bg-light rounded text-muted small">
                        * Kadar faedah tetap: <strong>18.0% setahun</strong> (1.5% sebulan). Tiada bayaran pendahuluan atau caj tersembunyi.
                      </div>
                    </div>

                    {/* Results Display */}
                    <div className="col-lg-5 d-flex flex-column justify-content-between bg-primary text-white p-4 rounded-3">
                      <div>
                        <h4 className="text-white mb-4">Ringkasan Pembiayaan</h4>

                        <div className="mb-3 border-bottom border-light pb-2">
                          <span className="d-block text-white-50 small">Anggaran Bayaran Bulanan</span>
                          <span className="fs-2 fw-bold text-white">RM {monthlyEMI.toLocaleString()}</span>
                        </div>

                        <div className="mb-3 border-bottom border-light pb-2">
                          <span className="d-block text-white-50 small">Jumlah Faedah Keseluruhan</span>
                          <span className="fs-4 fw-semibold text-white">RM {totalInterest.toLocaleString()}</span>
                        </div>

                        <div className="mb-4">
                          <span className="d-block text-white-50 small">Jumlah Bayaran Balik (Prinsipal + Faedah)</span>
                          <span className="fs-4 fw-semibold text-white">RM {totalAmount.toLocaleString()}</span>
                        </div>
                      </div>

                      <a href="mohon-pinjaman-online" className="btn btn-light text-primary fw-bold w-100 py-3 rounded-pill text-center">
                        Mohon Pinjaman Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section
          className="bg_blue"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="cta_container">
            <div className="row cta_home cta_home_new col-md-10">
              <div className="col-12 col-md-6 text-cta-mobile">
                <h2 className="text-white">
                  Perlukan Pinjaman Peribadi? <br />
                  Loanbuddy Credit Sedia Berkhidmat <br />
                  Untuk Anda!
                </h2>
              </div>
              <div className="col-12 col-md-3 z-index-3">
                <a href="mohon-pinjaman-online" className="btn border_red_new cta_semak cta_mohon">
                  <span>
                    <small>Mohon Sekarang</small>
                    <small>Mohon Sekarang</small>
                  </span>
                </a>
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
