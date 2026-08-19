"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
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
      <div className="container">
        <div className="row align-items-center justify-content-between flex-nowrap">
          {/* Logo (Left Column on Desktop & Mobile) */}
          <div className="col-auto d-flex align-items-center">
            <Link className="site_link d-flex align-items-center" href="/" onClick={handleLogoClick}>
              <img
                src="/assets/images/logo/Keyline%20Horizontal%20.png"
                alt="loanbuddy credit logo"
                className="site-header-logo"
              />
            </Link>
          </div>

          {/* Navigation Bar / Mobile Navigation Drawer (Center Column) */}
          <div className="col col-12 col-lg order-3 order-lg-2">
            <nav className="main_menu navbar navbar-expand-lg w-100 justify-content-center">
              <div
                className={`main_menu_inner collapse navbar-collapse justify-content-center ${
                  isMobileMenuOpen ? "show" : ""
                }`}
                id="main_menu_dropdown"
              >
                <ul className="main_menu_list unordered_list_center justify-content-center flex-nowrap">

                  <li
                    className={`dropdown ${activeDropdown === "service" ? "show" : ""} ${
                      isActive("/pinjaman-peribadi-kl-sarawak") ? "active" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("service")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      className={`nav-link ${isActive("/pinjaman-peribadi-kl-sarawak") ? "active" : ""}`}
                      href="#"
                      id="service_submenu"
                      onClick={(e) => toggleDropdown("service", e)}
                    >
                      Perkhidmatan
                    </a>
                    <ul className={`dropdown-menu ${activeDropdown === "service" ? "show" : ""}`}>
                      <li>
                        <Link
                          className={`nav-link ${isActive("/pinjaman-peribadi-kl-sarawak") ? "active" : ""}`}
                          href="/pinjaman-peribadi-kl-sarawak"
                          onClick={closeAllMenus}
                        >
                          Pinjaman Peribadi
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
                      Pembayaran
                    </Link>
                  </li>

                  <li
                    className={`dropdown ${activeDropdown === "pages" ? "show" : ""} ${
                      isActive("/tentang-loanbuddy-credit") ? "active" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("pages")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      className={`nav-link ${isActive("/tentang-loanbuddy-credit") ? "active" : ""}`}
                      href="#"
                      id="pages_submenu"
                      onClick={(e) => toggleDropdown("pages", e)}
                    >
                      Tentang Kami
                    </a>
                    <ul className={`dropdown-menu ${activeDropdown === "pages" ? "show" : ""}`}>
                      <li>
                        <Link
                          className={isActive("/tentang-loanbuddy-credit") ? "active" : ""}
                          href="/tentang-loanbuddy-credit"
                          onClick={closeAllMenus}
                        >
                          Kenali Kami
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={isActive("/soalan-lazim-faq") ? "active" : ""}
                          href="/soalan-lazim-faq"
                          onClick={closeAllMenus}
                        >
                          F.A.Q.
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
                      Blog
                    </Link>
                  </li>

                  <li className={isActive("/hubungi-kami") ? "active" : ""}>
                    <Link
                      className={`nav-link ${isActive("/hubungi-kami") ? "active" : ""}`}
                      href="/hubungi-kami"
                      onClick={closeAllMenus}
                    >
                      Hubungi Kami
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Right Area: CTA Button, Language Switcher, Mobile Hamburger Button */}
          <div className="col-auto order-2 order-lg-3 text-end d-flex align-items-center justify-content-end header_right_area">
            <a href="mohon-pinjaman-online" className="btn_semak_layak d-none d-lg-inline-flex">
              <span>
                <small>Mohon Sekarang</small>
                <small>Mohon Sekarang</small>
              </span>
            </a>
            {/* Language switcher temporarily commented out until translations are ready
            <div className="header_lang_switcher">
              <a href="#" className="lang_item active">
                BM
              </a>
              <span className="lang_divider">|</span>
              <a href="#" className="lang_item">
                EN
              </a>
            </div>
            */}
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
