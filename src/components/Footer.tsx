"use client";

import React, { useState } from "react";

export default function Footer() {
  const [openFooterSection, setOpenFooterSection] = useState<{ [key: string]: boolean }>({});

  const toggleFooterSection = (key: string) => {
    setOpenFooterSection((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // On desktop (lg+) sections are always visible; on mobile they toggle
  const sectionStyle = (key: string): React.CSSProperties => ({
    display: undefined, // controlled via CSS classes below
  });

  return (
    <footer className="site_footer">
      <div className="footer_widget_area">
        <div className="container">
          <div className="row">
            {/* Logo & Company Description */}
            <div className="col col-lg-4 col-md-6 col-sm-6">
              <div className="footer_widget">
                <div className="site_logo d-block">
                  <a className="site_link" href="/">
                    <img
                      src="/assets/images/logo/Keyline%20Horizontal%20.png"
                      alt="logo-footer"
                      loading="lazy"
                    />
                  </a>
                </div>
                <p>
                  Loanbuddy Credit Sdn. Bhd. (<span className="no-link">200901039396</span> / 882536-K) ialah sebuah
                  agensi pinjaman berlesen di bawah Akta Pemberi Pinjam Wang 1951 yang dikawal selia oleh Kementerian
                  Perumahan dan Kerajaan Tempatan (KPKT). Kami beroperasi dengan cawangan di Kuala Lumpur, Kuching, dan
                  Bintulu.
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="row mt-1">
                {/* Left column: License & Hours */}
                <div className="col col-lg-7">
                  <div className="row">
                    {/* Maklumat Lesen */}
                    <div className="col col-md-6 col-sm-6">
                      <div className="footer_widget">
                        <h3
                          className="footer_widget_title item_text_1 d-lg-block d-flex justify-content-between align-items-center"
                          onClick={() => toggleFooterSection("license")}
                          style={{ cursor: "pointer" }}
                        >
                          Maklumat Lesen
                          <span className="d-lg-none">+</span>
                        </h3>
                        {/* Always visible on lg+, toggleable on mobile */}
                        <div className={`d-lg-block ${openFooterSection["license"] ? "d-block" : "d-none"}`}>
                          <ul className="page_list unordered_list_block">
                            <li>
                              <span className="item_text_1">Nombor lesen</span>
                              <br />
                              <span className="item_text_2">WL7830/14/01-3/030527</span>
                            </li>
                            <li>
                              <span className="item_text_1">Tempoh sah laku lesen</span>
                              <br />
                              <span className="item_text_2">04/05/2025 - 03/05/2027</span>
                            </li>
                            <li>
                              <span className="item_text_1">Nombor permit iklan</span>
                              <br />
                              <span className="item_text_2">WP7830/14/01-3/030527</span>
                            </li>
                            <li>
                              <span className="item_text_1">Tempoh sah laku permit iklan</span>
                              <br />
                              <span className="item_text_2">04/05/2025 - 03/05/2027</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Waktu Operasi */}
                    <div className="col col-md-6 col-sm-6 col-foot-calc">
                      <div className="footer_widget">
                        <h3
                          className="footer_widget_title item_text_1 d-lg-block d-flex justify-content-between align-items-center"
                          onClick={() => toggleFooterSection("hours")}
                          style={{ cursor: "pointer" }}
                        >
                          Waktu Operasi
                          <span className="d-lg-none">+</span>
                        </h3>
                        <div className={`d-lg-block ${openFooterSection["hours"] ? "d-block" : "d-none"}`}>
                          <ul className="page_list unordered_list_block">
                            <li>
                              <span className="item_text_2">Isnin - Jumaat: 8:30am - 5:30pm</span>
                            </li>
                            <li>
                              <span className="item_text_2">Sabtu: 8:30am - 12.30pm</span>
                            </li>
                            <li>
                              <span className="item_text_2">Ahad dan Cuti Umum Tutup</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column: Services & Support */}
                <div className="col col-lg-5">
                  <div className="row">
                    {/* Perkhidmatan */}
                    <div className="col col-md-6 col-sm-6">
                      <div className="footer_widget">
                        <h3
                          className="footer_widget_title item_text_1 d-lg-block d-flex justify-content-between align-items-center"
                          onClick={() => toggleFooterSection("services")}
                          style={{ cursor: "pointer" }}
                        >
                          Perkhidmatan
                          <span className="d-lg-none">+</span>
                        </h3>
                        <div className={`d-lg-block ${openFooterSection["services"] ? "d-block" : "d-none"}`}>
                          <ul className="page_list unordered_list_block">
                            <li>
                              <a href="pinjaman-peribadi-kl-sarawak">
                                <span className="item_text_3">Pinjaman Peribadi</span>
                              </a>
                            </li>
                            <li>
                              <a href="pinjaman-koperasi">
                                <span className="item_text_3">Pinjaman Koperasi</span>
                              </a>
                            </li>
                            <li>
                              <a href="loanfit">
                                <span className="item_text_3">Loanfit</span>
                              </a>
                            </li>
                            <li>
                              <a href="loancompare">
                                <span className="item_text_3">Loancompare</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Khidmat Pelanggan */}
                    <div className="col col-md-6 col-sm-6">
                      <div className="footer_widget">
                        <h3
                          className="footer_widget_title item_text_1 d-lg-block d-flex justify-content-between align-items-center"
                          onClick={() => toggleFooterSection("support")}
                          style={{ cursor: "pointer" }}
                        >
                          Khidmat Pelanggan
                          <span className="d-lg-none">+</span>
                        </h3>
                        <div className={`d-lg-block ${openFooterSection["support"] ? "d-block" : "d-none"}`}>
                          <ul className="page_list unordered_list_block">
                            <li>
                              <a href="hubungi-kami">
                                <span className="item_text_3">Hubungi Kami</span>
                              </a>
                            </li>
                            <li>
                              <a href="soalan-lazim-faq">
                                <span className="item_text_3">FAQ</span>
                              </a>
                            </li>
                            <li>
                              <a href="privacy-policy">
                                <span className="item_text_3">Dasar Privasi</span>
                              </a>
                            </li>
                            <li>
                              <a href="terma-dan-syarat">
                                <span className="item_text_3">Terma dan Syarat</span>
                              </a>
                            </li>
                            <li>
                              <a href="disclaimer-notice">
                                <span className="item_text_3">Kenyataan Penafian</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright_widget">
        <div className="container">
          <p className="copyright_text text-center mb-0">
            © Copyright 2026 Loanbuddy Credit Sdn. Bhd. [Registration No. 200901039396 (882536-K)]. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
