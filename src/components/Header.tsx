"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`site_header site_header_1 site_header_2 ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Mobile Logo (Left) */}
          <div className="col-6 col-md-4 col-lg-2 d-lg-none d-flex align-items-center">
            <a className="site_link d-flex align-items-center" href="/">
              <img
                src="/assets/images/logo/Keyline%20Horizontal%20.png"
                alt="loanbuddy credit logo"
                className="site-header-logo mobile-logo"
              />
            </a>
          </div>

          {/* Navigation Bar / Mobile Navigation Drawer */}
          <div className="col-lg-9 col-12 order-3 order-lg-2">
            <nav className="main_menu navbar navbar-expand-lg">
              <div
                className={`main_menu_inner collapse navbar-collapse ${
                  isMobileMenuOpen ? "show" : ""
                }`}
                id="main_menu_dropdown"
              >
                <ul className="main_menu_list unordered_list_center">
                  <li className="site_logo d-none d-lg-block">
                    <a className="site_link" href="/">
                      <img
                        src="/assets/images/logo/Keyline%20Horizontal%20.png"
                        alt="loanbuddy credit logo"
                        className="site-header-logo"
                      />
                    </a>
                  </li>

                  <li className={`dropdown ${activeDropdown === "service" ? "show" : ""}`}>
                    <a
                      className="nav-link"
                      href="#"
                      id="service_submenu"
                      onClick={(e) => toggleDropdown("service", e)}
                    >
                      Perkhidmatan
                    </a>
                    <ul className={`dropdown-menu ${activeDropdown === "service" ? "show" : ""}`}>
                      <li>
                        <a className="nav-link" href="pinjaman-peribadi-kl-sarawak">
                          Pinjaman Peribadi
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a className="nav-link" href="soalan-lazim-faq">
                      Pembayaran
                    </a>
                  </li>

                  <li className={`dropdown ${activeDropdown === "pages" ? "show" : ""}`}>
                    <a
                      className="nav-link"
                      href="#"
                      id="pages_submenu"
                      onClick={(e) => toggleDropdown("pages", e)}
                    >
                      Tentang Kami
                    </a>
                    <ul className={`dropdown-menu ${activeDropdown === "pages" ? "show" : ""}`}>
                      <li>
                        <a href="tentang-loanbuddy-credit">Kenali Kami</a>
                      </li>
                      <li>
                        <a href="soalan-lazim-faq">F.A.Q.</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a className="nav-link" href="blog">
                      Blog
                    </a>
                  </li>

                  <li>
                    <a className="nav-link" href="hubungi-kami">
                      Hubungi Kami
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Right Area: CTA Button, Language Switcher, Mobile Hamburger Button */}
          <div className="col-6 col-md-8 col-lg-3 order-2 order-lg-3 text-end d-flex align-items-center justify-content-end header_right_area">
            <a href="mohon-pinjaman-online" className="btn_semak_layak d-none d-lg-inline-flex">
              <span>
                <small>Mohon Sekarang</small>
                <small>Mohon Sekarang</small>
              </span>
            </a>
            <div className="header_lang_switcher">
              <a href="#" className="lang_item active">
                BM
              </a>
              <span className="lang_divider">|</span>
              <a href="#" className="lang_item">
                EN
              </a>
            </div>
            <button
              className="mobile_menu_btn d-lg-none ms-2"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <i className={isMobileMenuOpen ? "far fa-times" : "far fa-bars"}></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
