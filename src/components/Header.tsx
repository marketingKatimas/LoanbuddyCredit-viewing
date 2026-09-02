"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

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

  // Close dropdown when clicking outside header
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdowns and mobile menu on pathname change
  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleMouseEnter = (name: string) => {
    if (typeof window !== "undefined" && window.innerWidth >= 992) {
      setActiveDropdown(name);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 992) {
      setActiveDropdown(null);
    }
  };

  const closeAllMenus = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeAllMenus();
    if (pathname === "/" || pathname === "") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActive = (path: string) => {
    if (!pathname) return false;
    const cleanPathname = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
    const cleanTarget = path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
    return cleanPathname === cleanTarget || cleanPathname === `/${cleanTarget}`;
  };

  return (
    <header ref={headerRef} className={`site_header site_header_1 site_header_2 ${isScrolled ? "sticky scrolled" : ""}`}>
      <div className="container position-relative">
        <div className="row align-items-center justify-content-between flex-nowrap position-relative">
          {/* Main Group (Logo + Navigation Menu + CTA Button) */}
          <div className="col-12 col-lg d-flex align-items-center justify-content-between justify-content-lg-center header_main_cluster">
            {/* Logo */}
            <div className="site_logo_wrap d-flex align-items-center">
              <Link className="site_link d-flex align-items-center" href="/" onClick={handleLogoClick}>
                <img
                  src="/assets/images/logo/Keyline%20Horizontal%20.png"
                  alt="loanbuddy credit logo"
                  className="site-header-logo"
                />
              </Link>
            </div>

            {/* Navigation Bar / Mobile Navigation Drawer */}
            <nav className="main_menu navbar navbar-expand-lg">
              <div
                className={`main_menu_inner collapse navbar-collapse justify-content-center ${
                  isMobileMenuOpen ? "show" : ""
                }`}
                id="main_menu_dropdown"
              >
                <ul className="main_menu_list unordered_list_center justify-content-center flex-nowrap">

                  <li
                    className={`dropdown ${activeDropdown === "service" ? "show" : ""} ${
                      isActive("/pinjaman-peribadi") ||
                      isActive("/pinjaman-peribadi-kl-sarawak") ||
                      isActive("/pinjaman-koperasi") ||
                      isActive("/loan-compare")
                        ? "active"
                        : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("service")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      className={`nav-link ${
                        isActive("/pinjaman-peribadi") ||
                        isActive("/pinjaman-peribadi-kl-sarawak") ||
                        isActive("/pinjaman-koperasi") ||
                        isActive("/loan-compare")
                          ? "active"
                          : ""
                      }`}
                      href="#"
                      id="service_submenu"
                      onClick={(e) => toggleDropdown("service", e)}
                    >
                      {t.nav.services}
                    </a>
                    <ul className={`dropdown-menu ${activeDropdown === "service" ? "show" : ""}`}>
                      <li>
                        <Link
                          className={isActive("/pinjaman-peribadi") ? "active" : ""}
                          href="/pinjaman-peribadi"
                          onClick={closeAllMenus}
                        >
                          {t.nav.ourServices}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={isActive("/pinjaman-peribadi-kl-sarawak") ? "active" : ""}
                          href="/pinjaman-peribadi-kl-sarawak"
                          onClick={closeAllMenus}
                        >
                          {t.nav.personalLoanOnline}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={isActive("/pinjaman-koperasi") ? "active" : ""}
                          href="/pinjaman-koperasi"
                          onClick={closeAllMenus}
                        >
                          {t.nav.topUpLoan}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={isActive("/loan-compare") ? "active" : ""}
                          href="/loan-compare"
                          onClick={closeAllMenus}
                        >
                          {t.nav.loanbuddyApp}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className={isActive("/pembayaran") ? "active" : ""}>
                    <Link
                      className={`nav-link ${isActive("/pembayaran") ? "active" : ""}`}
                      href="/pembayaran"
                      onClick={closeAllMenus}
                    >
                      {t.nav.payment}
                    </Link>
                  </li>

                  <li
                    className={`dropdown ${activeDropdown === "pages" ? "show" : ""} ${
                      isActive("/tentang-loanbuddy-credit") || isActive("/soalan-lazim-faq") ? "active" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("pages")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      className={`nav-link ${
                        isActive("/tentang-loanbuddy-credit") || isActive("/soalan-lazim-faq") ? "active" : ""
                      }`}
                      href="#"
                      id="pages_submenu"
                      onClick={(e) => toggleDropdown("pages", e)}
                    >
                      {t.nav.aboutUs}
                    </a>
                    <ul className={`dropdown-menu ${activeDropdown === "pages" ? "show" : ""}`}>
                      <li>
                        <Link
                          className={isActive("/tentang-loanbuddy-credit") ? "active" : ""}
                          href="/tentang-loanbuddy-credit"
                          onClick={closeAllMenus}
                        >
                          {t.nav.knowUs}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={isActive("/soalan-lazim-faq") ? "active" : ""}
                          href="/soalan-lazim-faq"
                          onClick={closeAllMenus}
                        >
                          {t.nav.faq}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className={isActive("/blog") ? "active" : ""}>
                    <Link
                      className={`nav-link ${isActive("/blog") ? "active" : ""}`}
                      href="/blog"
                      onClick={closeAllMenus}
                    >
                      {t.nav.blog}
                    </Link>
                  </li>

                  <li className={isActive("/hubungi-kami") ? "active" : ""}>
                    <Link
                      className={`nav-link ${isActive("/hubungi-kami") ? "active" : ""}`}
                      href="/hubungi-kami"
                      onClick={closeAllMenus}
                    >
                      {t.nav.contactUs}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            {/* CTA Button (Desktop - close to nav tabs) */}
            <Link href="/mohon-pinjaman-online" className="btn_semak_layak d-none d-lg-inline-flex">
              <span>
                <small>{t.header.applyNow}</small>
                <small>{t.header.applyNow}</small>
              </span>
            </Link>
          </div>

          {/* Far Right Area: Mobile Hamburger Button & Language Switcher (Pinned to far right) */}
          <div className="col-auto d-flex align-items-center justify-content-end header_right_area">
            {/* Mobile Hamburger Button */}
            <button
              className="mobile_menu_btn d-lg-none me-2"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <i className={isMobileMenuOpen ? "far fa-times" : "far fa-bars"}></i>
            </button>

            {/* Language switcher */}
            <div className="header_lang_switcher">
              <button
                type="button"
                className={`lang_item ${language === "ms" ? "active" : ""}`}
                onClick={() => setLanguage("ms")}
                aria-label="Tukar bahasa ke Bahasa Malaysia"
                style={{ background: "none", border: "none", cursor: "pointer", padding: "0 4px" }}
              >
                BM
              </button>
              <span className="lang_divider">|</span>
              <button
                type="button"
                className={`lang_item ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
                aria-label="Switch language to English"
                style={{ background: "none", border: "none", cursor: "pointer", padding: "0 4px" }}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
