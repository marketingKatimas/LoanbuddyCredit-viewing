"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function TentangKamiPage() {
  

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

      <Header />

      {/* Main Body */}
      <main className="page_content">
        <section
          className="page_banner about_banner_1 section_space_lg overflow-hidden decoration_wrap mouse_move"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container container_2 cta_container">
            <div className="row z-index-3 row-home-custom">
              <div className="col col-lg-5 p-none d-flex align-items-end justify-content-center">
                <img src="/assets/images/about-us-page.png" loading="lazy" className="about-us-img-1" alt="About Us" />
              </div>
              <div className="col col-lg-7 pt-30 about-us-box-mobile">
                <div className="col-lg-12 perkhidmatan-padding justify-content-start text-grey">
                  <h3 className="item_title item_title_about mb-4">Tentang Loanbuddy Credit</h3>
                  <p>
                    Loanbuddy Credit percaya setiap individu layak mendapat akses kewangan yang mudah, mesra dan meyakinkan. Selama lebih 10 tahun berkhidmat dalam dunia kewangan, kami telah membantu ramai pelanggan mencapai impian mereka melalui pembiayaan peribadi, koperasi, konsolidasi, pendidikan, perumahan hingga perniagaan - semuanya dengan proses yang cepat, telus dan selamat.
                    <br />
                    <br />
                    Dipacu pasukan pakar yang berkomited, misi kami jelas:
                    <br />
                  </p>
                  <ul>
                    <li>Menyediakan solusi kewangan moden, pantas dan berkesan untuk setiap keperluan</li>
                    <li>Mengorak langkah sebagai peneraju kewangan utama di Malaysia</li>
                    <li>Membuka jalan kepada peluang kredit yang setara untuk semua</li>
                    <li>Menjadi sandaran kewangan yang boleh dipercayai di saat diperlukan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg_blue about-us-section-2">
          <div className="container">
            <div className="row cta_loanbuddy cta_loanbuddy_2">
              <div className="col-md-12">
                <h2 className="text-white text-cta-mobile">
                  <em>
                    Loanbuddy Credit bukan sekadar penyedia pinjaman. Kami adalah rakan perjalanan kewangan anda dalam setiap langkah, cabaran dan peluang.
                  </em>
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Kelebihan Section */}
        <section className="section_space_lg section_space_btm_lg bg_grey">
          <div className="container position-relative">
            <div className="section_heading">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col col-lg-12 text-center">
                  <h3 className="mb-lg-0 text-grey">Kelebihan Loanbuddy Credit</h3>
                </div>
              </div>
            </div>
            <div className="row row_loanbuddy_kelebihan text-white">
              <img src="/assets/images/about/about-us-fullgrid-1.webp" className="d-none d-md-block" alt="Kelebihan Grid" />
            </div>
          </div>
        </section>

        {/* Rakan Kongsi */}
        <section className="section_space_4_lg bg_white">
          <div className="container position-relative">
            <div className="section_heading">
              <div className="row align-items-center">
                <div className="col col-lg-7">
                  <h3 className="text-grey mb-3">Rakan Kongsi yang Anda Boleh Percaya</h3>
                  <p className="mb-0">
                    Sama ada anda ingin memulakan perniagaan, membeli rumah atau ingin menyambung pendidikan, kami memudahkan perjalanan anda dan memastikan anda berada di tangan yang selamat.
                  </p>
                </div>
                <div className="col col-lg-5">
                  <img src="/assets/images/rakan-setia.png" loading="lazy" className="w-100" alt="Rakan Setia" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Komuniti */}
        <section className="section_space_4_lg bg_grey">
          <div className="container position-relative mouse_move">
            <div className="section_heading">
              <div className="row pt-30">
                <div className="col-md-4">
                  <div className="about-us-deco-item-5">
                    <div className="layer overflow">
                      <img src="/assets/images/celebrate-ladybug.webp" loading="lazy" width="90%" className="celebrate-ladybug" alt="Celebrate Mascot" />
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-12">
                  <h3 className="text-grey mb-3">Sertai Komuniti Loanbuddy Credit</h3>
                  <p className="mb-0">
                    Setiap hari, kami membantu rakyat Malaysia mencari jalan kewangan yang lebih teratur dengan cara yang mudah, yakin dan selamat. Dah bersedia untuk urusan pinjaman yang lebih lancar? Biarkan Loanbuddy Credit jadi panduan anda.
                    <br />
                    <br />
                    Loanbuddy Credit - ruang pencarian pinjaman anda berakhir, impian jadi nyata dan kepercayaan anda sentiasa dihargai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
