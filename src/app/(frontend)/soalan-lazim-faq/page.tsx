"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function FAQPage() {
  

  const [activeTab, setActiveTab] = useState<"all" | "umum" | "bayaran">("all");
  const [showMoreFaqs, setShowMoreFaqs] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
                  Soalan Lazim Tentang Loanbuddy Credit
                </h1>
                <p className="banner_description banner-mohon-description text-center text-grey">
                  Temui jawapan terperinci untuk soalan-soalan lazim anda dan dapatkan maklumat yang anda perlukan dengan cepat.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="page_banner about_banner_faq bg_blue section_space_lg overflow-hidden decoration_wrap mouse_move"
          style={{ backgroundImage: `url('/assets/images/banner/faq-image.png')` }}
        ></section>

        {/* FAQ Section */}
        <section className="faq_section section_space_lg bg_grey">
          <div className="container faq_container">
            <div className="section_heading text-center mb-3">
              <div className="row justify-content-center">
                <div className="col col-lg-7">
                  <h2 className="heading_text text-blue">Soalan Lazim Pelanggan Kami</h2>
                  <p className="heading_description mb-0">
                    Di ruangan ini, anda akan mendapatkan jawapan kepada pertanyaan yang sering dikemukakan oleh pelanggan kami berkaitan perkhidmatan kami. Maklumat penting telah disusun bagi membantu anda memahami proses, prosedur dan perkhidmatan yang ditawarkan dengan lebih jelas.
                    <br />
                    <br />
                    Sebarang kemusykilan dan persoalan yang ingin diajukan, anda boleh menghubungi kami dan kami akan membantu anda!
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col col-lg-10">
                <div className="sorting-menu">
                  <ul className="d-flex justify-content-center gap-3 list-unstyled">
                    <li
                      className={`filter ${activeTab === "all" ? "active font-weight-bold text-primary" : ""}`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveTab("all")}
                    >
                      Semua
                    </li>
                    <li
                      className={`filter ${activeTab === "umum" ? "active font-weight-bold text-primary" : ""}`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveTab("umum")}
                    >
                      Pertanyaan Umum
                    </li>
                    <li
                      className={`filter ${activeTab === "bayaran" ? "active font-weight-bold text-primary" : ""}`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveTab("bayaran")}
                    >
                      Pertanyaan Bayaran Balik
                    </li>
                  </ul>
                </div>

                <div className="accordion faq-system" id="faq_accordion_1">
                  <div className="row" id="Container">
                    {/* General FAQs */}
                    {(activeTab === "all" || activeTab === "umum") && (
                      <div className="col-12 mix ui umum mb-3">
                        <div className="accordion-item accordion-item-custom">
                          <div
                            className={`accordion-button text-blue ${openFaq === 0 ? "" : "collapsed"}`}
                            role="button"
                            onClick={() => toggleFaq(0)}
                          >
                            Siapakah Loanbuddy Credit?
                          </div>
                          {openFaq === 0 && (
                            <div className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                <p className="mb-0">
                                  Loanbuddy Credit Sdn. Bhd. (<span className="no-link">200901039396</span> / 882536-K) ialah sebuah syarikat pinjaman wang berlesen di bawah Akta Pemberi Pinjam Wang 1951 dan dikawal selia oleh Kementerian Perumahan dan Kerajaan Tempatan (KPKT). Kami komited menyediakan pinjaman peribadi yang selamat, telus dan mudah dengan proses kelulusan yang pantas untuk membantu anda memenuhi keperluan kewangan tanpa kerumitan.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="accordion-item">
                          <div
                            className={`accordion-button ${openFaq === 1 ? "" : "collapsed"}`}
                            role="button"
                            onClick={() => toggleFaq(1)}
                          >
                            Sekiranya saya membuat pinjaman RM3,000. Apakah gambaran jadual pembayaran balik?
                          </div>
                          {openFaq === 1 && (
                            <div className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                <p className="mb-0">
                                  Contoh Wakil: <br />
                                  Amaun Pinjaman: <strong>RM3,000</strong> <br />
                                  Tempoh Pinjaman: <strong>12 bulan</strong> <br />
                                  Kadar Faedah: <strong>18.0% setahun</strong> <br />
                                  Jumlah Bayaran Balik = <strong>RM3,540</strong>, hanya <strong>RM295</strong> sebulan <br />
                                  <br />
                                  <img src="/assets/images/kadar-table.png" alt="" loading="lazy" />
                                  <br />
                                  <br />
                                  <a className="mt-3 text-dark" href="mohon-pinjaman-online">
                                    <u className="text-blue">KLIK SINI</u> untuk mohon sekarang
                                  </a>
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="accordion-item">
                          <div
                            className={`accordion-button ${openFaq === 2 ? "" : "collapsed"}`}
                            role="button"
                            onClick={() => toggleFaq(2)}
                          >
                            Bagaimanakah cara untuk saya memohon pinjaman peribadi Loanbuddy Credit?
                          </div>
                          {openFaq === 2 && (
                            <div className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                <p className="mb-0">
                                  Untuk permohonan pinjaman peribadi bersama Loanbuddy Credit, langkah-langkah permohonan adalah seperti berikut: <br />
                                  <br />
                                  <ol>
                                    <li>Klik butang “Mohon Sekarang” di laman web rasmi Loanbuddy Credit.</li>
                                    <li>Lengkapkan borang permohonan dengan butiran penting anda dan hantar.</li>
                                    <li>Pakar kredit Loanbuddy Credit akan menghubungi anda melalui WhatsApp atau emel untuk pengesahan maklumat dan proses seterusnya.</li>
                                  </ol>
                                  <em>Nota privasi: Maklumat peribadi anda adalah sulit dan dilindungi. Kami tidak akan meminta butiran sensitif tanpa kebenaran anda. </em>
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        {showMoreFaqs && (
                          <div id="more-faqs">
                            <div className="accordion-item">
                              <div
                                className={`accordion-button ${openFaq === 3 ? "" : "collapsed"}`}
                                role="button"
                                onClick={() => toggleFaq(3)}
                              >
                                Apakah dokumen dan kelayakan yang diperlukan untuk memohon pinjaman peribadi?
                              </div>
                              {openFaq === 3 && (
                                <div className="accordion-collapse collapse show">
                                  <div className="accordion-body">
                                    <p className="mb-0">
                                      <strong>Dokumen Diperlukan</strong>
                                      <ul>
                                        <li>Salinan kad pengenalan (depan dan belakang)</li>
                                        <li>Penyata bank pengkreditan gaji 3 bulan terkini (format PDF)</li>
                                        <li>Slip gaji 3 bulan terkini (format PDF) dan/atau</li>
                                        <li>Bil utiliti 1 bulan terkini (air, elektrik, dll.)</li>
                                      </ul>
                                      <strong>Kelayakan Permohonan</strong>
                                      <ul>
                                        <li>Warganegara Malaysia</li>
                                        <li>Individu berumur 18 hingga 60 tahun</li>
                                        <li>Pendapatan kasar bulanan minimum RM1,700</li>
                                        <li>Kakitangan swasta, GLC dan kerajaan sahaja</li>
                                        <li>Tidak pernah diisytiharkan muflis</li>
                                        <li>Bukan individu berstatus Orang Terdedah Politik (PEP)</li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>

                            <div className="accordion-item">
                              <div
                                className={`accordion-button ${openFaq === 4 ? "" : "collapsed"}`}
                                role="button"
                                onClick={() => toggleFaq(4)}
                              >
                                Berapakah jumlah pinjaman yang boleh saya mohon?
                              </div>
                              {openFaq === 4 && (
                                <div className="accordion-collapse collapse show">
                                  <div className="accordion-body">
                                    <p className="mb-0">
                                      Anda boleh memohon pinjaman serendah RM1000 sehingga maksimum RM50,000. Jumlah yang layak dipinjam adalah bergantung kepada penilaian skor kredit individu. <br /> <br />
                                      Bagi pinjaman tambahan (top-up), jumlah minimum ialah RM500 manakala jumlah maksimum akan ditentukan oleh Loanbuddy Credit berdasarkan kelayakan anda.
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        <button
                          id="view-more-faqs"
                          className="btn btn_blue text-white mt-3"
                          onClick={() => setShowMoreFaqs(!showMoreFaqs)}
                        >
                          {showMoreFaqs ? "Lihat Kurang" : "Lihat Lagi"}
                        </button>
                      </div>
                    )}

                    {/* Payment FAQs */}
                    {(activeTab === "all" || activeTab === "bayaran") && (
                      <div className="col-12 mix ui bayaran mb-3">
                        <div className="accordion-item accordion-item-custom">
                          <div
                            className={`accordion-button text-blue ${openFaq === 10 ? "" : "collapsed"}`}
                            role="button"
                            onClick={() => toggleFaq(10)}
                          >
                            Bilakah tarikh pembayaran balik pertama saya?
                          </div>
                          {openFaq === 10 && (
                            <div className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                <p className="mb-0">
                                  Tarikh pembayaran balik pertama anda ditentukan berdasarkan tarikh tandatangan kontrak pinjaman.
                                  <br />
                                  <ul>
                                    <li>Jika kontrak ditandatangani pada atau sebelum 14 haribulan, tarikh pembayaran balik pertama ialah 1 haribulan berikutnya.</li>
                                    <li>Jika kontrak ditandatangani selepas 14 haribulan, tarikh pembayaran balik pertama ialah 1 haribulan dua bulan berikutnya.</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
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
