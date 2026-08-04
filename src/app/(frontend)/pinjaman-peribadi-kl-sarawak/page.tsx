"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PinjamanPeribadiPage() {
  

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
          className="page_banner about_banner_main section_space_lg_about decoration_wrap mouse_move"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col col-12">
                <h1 className="banner-mohon-big-title text-center justify-content-center">
                  Pinjaman Peribadi Wang Berlesen
                </h1>
                <p className="banner_description banner-mohon-description text-center text-grey">
                  Nikmati kemudahan permohonan pinjaman yang pantas, cekap dan selamat untuk anda.
                </p>
                <div className="btn_wrap text-center">
                  <a className="btn border_new" href="mohon-pinjaman-online">
                    <span>
                      <small>MOHON SEKARANG</small>
                      <small>MOHON SEKARANG</small>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="page_banner about_banner about_banner-mobile bg_blue section_space_lg section_space_lg-mobile overflow-hidden decoration_wrap mouse_move"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/pinjaman-peribadi-banner.webp')` }}
        ></section>

        {/* Why Loanbuddy Features */}
        <section className="intro_video_section section_space_lg bg_white overflow-hidden decoration_wrap">
          <div className="container position-relative">
            <div className="row">
              <div className="col col-lg-12">
                <div className="section_heading text-center section_heading_mobile_home">
                  <h2 className="heading_text text-lightgrey font-decrease2">
                    Pembiayaan Peribadi yang Kredibel untuk memenuhi <br />
                    keperluan kewangan anda dengan lebih mudah
                  </h2>
                </div>
              </div>

              <div className="row custom-row-margin centre-mobile">
                <div className="col col-lg-4 col-md-6 col-sm-6 service_item_mobile flex">
                  <div className="service_item flex">
                    <div className="item_icon">
                      <img src="/assets/images/kadar-faedah.png" alt="Faedah Icon" loading="lazy" />
                    </div>
                    <div className="item_content text-center">
                      <p className="mb-0">Kadar faedah 1.5% sebulan atau 18% setahun (tetap)</p>
                    </div>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6 service_item_mobile">
                  <div className="service_item">
                    <div className="item_icon">
                      <img src="/assets/images/amaun-pinjaman.png" alt="Amaun Icon" loading="lazy" />
                    </div>
                    <div className="item_content text-center">
                      <p className="mb-0">Amaun pinjaman dari RM1,000 sehingga RM50,000</p>
                    </div>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6 service_item_mobile">
                  <div className="service_item">
                    <div className="item_icon">
                      <img src="/assets/images/tempoh-pinjaman.png" alt="Tempoh Icon" loading="lazy" />
                    </div>
                    <div className="item_content text-center">
                      <p className="mb-0">Tempoh pinjaman fleksibel dari 12 bulan sehingga 60 bulan.</p>
                    </div>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6 service_item_mobile">
                  <div className="service_item slight-big">
                    <div className="item_icon">
                      <img src="/assets/images/kad-atm-2.png" alt="Kad ATM Icon" loading="lazy" />
                    </div>
                    <div className="item_content text-center">
                      <p className="mb-0">Tidak pegang kad ATM</p>
                    </div>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6 service_item_mobile">
                  <div className="service_item">
                    <div className="item_icon">
                      <img src="/assets/images/lulus-pantas.png" alt="Lulus Pantas Icon" loading="lazy" />
                    </div>
                    <div className="item_content text-center">
                      <p className="mb-0">Kelulusan permohonan pinjaman dalam masa 1-2 hari bekerja</p>
                    </div>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6 service_item_mobile">
                  <div className="service_item">
                    <div className="item_icon">
                      <img src="/assets/images/pinjaman-berlesen.png" alt="Berlesen Icon" loading="lazy" />
                    </div>
                    <div className="item_content text-center">
                      <p className="mb-0">Pemberi pinjaman berlesen di bawah Kementerian Perumahan dan Kerajaan Tempatan (KPKT)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
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
