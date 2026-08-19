"use client";

import React, { useState } from "react";

export default function Footer() {
  const [openFooterSection, setOpenFooterSection] = useState<{ [key: string]: boolean }>({});

  const toggleFooterSection = (key: string) => {
    setOpenFooterSection((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <footer
      className="site_footer"
      style={{
        backgroundColor: "#424244",
        color: "#ffffff",
        paddingTop: "60px",
        paddingBottom: "0px",
        fontFamily: "var(--font-reddit-sans), sans-serif",
      }}
    >
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: "20px", paddingRight: "20px" }}>
        <div className="row g-4 pb-5">
          {/* Column 1: Logo & Company Description */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="pe-lg-3">
              <a href="/" className="d-inline-block mb-1">
                <img
                  src="/assets/images/logo/logo-footer-tight.png"
                  alt="Loanbuddy Credit"
                  style={{ maxHeight: "75px", width: "auto", maxWidth: "100%", objectFit: "contain" }}
                  loading="lazy"
                />
              </a>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginTop: "8px",
                  marginBottom: "8px",
                  letterSpacing: "-0.2px",
                }}
              >
                Lending with Understanding
              </h4>
              <p
                style={{
                  fontSize: "13.5px",
                  lineHeight: "1.6",
                  color: "#d8d8d8",
                  margin: 0,
                }}
              >
                Loanbuddy Credit Sdn. Bhd. ialah sebuah agensi pinjaman berlesen di bawah KPKT, dengan cawangan di Kuala Lumpur, Kuching, dan Bintulu.
              </p>
            </div>
          </div>

          {/* Column 2: License Information */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-2">
            <div className="footer_widget">
              <div className="mb-3">
                <h5 style={{ fontSize: "14.5px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                  Nombor Lesen
                </h5>
                <p style={{ fontSize: "13px", color: "#d8d8d8", margin: 0 }}>
                  WL7830/14/01-3/030527
                </p>
              </div>

              <div className="mb-3">
                <h5 style={{ fontSize: "14.5px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                  Tempoh Sah Laku Lesen
                </h5>
                <p style={{ fontSize: "13px", color: "#d8d8d8", margin: 0 }}>
                  04/05/2025 - 03/05/2027
                </p>
              </div>

              <div className="mb-3">
                <h5 style={{ fontSize: "14.5px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                  Nombor Permit Iklan
                </h5>
                <p style={{ fontSize: "13px", color: "#d8d8d8", margin: 0 }}>
                  WP7830/14/01-3/030527
                </p>
              </div>

              <div>
                <h5 style={{ fontSize: "14.5px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                  Tempoh Sah Laku Permit Iklan
                </h5>
                <p style={{ fontSize: "13px", color: "#d8d8d8", margin: 0 }}>
                  04/05/2025 - 03/05/2027
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Waktu Operasi & Ikuti Kami Di */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <div className="footer_widget">
              <h5 style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "14px" }}>
                Waktu Operasi
              </h5>
              <div style={{ fontSize: "13px", color: "#d8d8d8", lineHeight: "1.6" }}>
                <p style={{ margin: "0 0 4px 0" }}>Isnin - Jumaat: 8am - 5pm</p>
                <p style={{ margin: "0 0 4px 0" }}>Sabtu: 8am - 1.30pm</p>
                <p style={{ margin: "0 0 20px 0" }}>Ahad dan Cuti Umum Tutup</p>
              </div>

              <h5 style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
                Ikuti Kami Di
              </h5>
              <div className="d-flex align-items-center gap-3">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    color: "#ffffff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    color: "#ffffff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  style={{
                    color: "#ffffff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Perkhidmatan */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-2">
            <div className="footer_widget">
              <h5 style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "14px" }}>
                Perkhidmatan
              </h5>
              <ul className="list-unstyled" style={{ margin: 0, padding: 0 }}>
                <li style={{ marginBottom: "12px" }}>
                  <a
                    href="/mohon-pinjaman-online"
                    style={{
                      fontSize: "13px",
                      color: "#d8d8d8",
                      textDecoration: "none",
                      display: "inline-block",
                      transition: "color 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#d8d8d8")}
                  >
                    Pinjaman Peribadi Online
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a
                    href="/mohon-pinjaman-online"
                    style={{
                      fontSize: "13px",
                      color: "#d8d8d8",
                      textDecoration: "none",
                      display: "inline-block",
                      transition: "color 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#d8d8d8")}
                  >
                    Pinjaman Tambah Nilai
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 5: Khidmat Pelanggan */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-2">
            <div className="footer_widget">
              <h5 style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "14px" }}>
                Khidmat Pelanggan
              </h5>
              <ul className="list-unstyled" style={{ margin: 0, padding: 0 }}>
                <li style={{ marginBottom: "12px" }}>
                  <a
                    href="/hubungi-kami"
                    style={{
                      fontSize: "13px",
                      color: "#d8d8d8",
                      textDecoration: "none",
                      display: "inline-block",
                      transition: "color 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#d8d8d8")}
                  >
                    Hubungi Kami
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a
                    href="/soalan-lazim-faq"
                    style={{
                      fontSize: "13px",
                      color: "#d8d8d8",
                      textDecoration: "none",
                      display: "inline-block",
                      transition: "color 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#d8d8d8")}
                  >
                    FAQ
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a
                    href="/privacy-policy"
                    style={{
                      fontSize: "13px",
                      color: "#d8d8d8",
                      textDecoration: "none",
                      display: "inline-block",
                      transition: "color 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#d8d8d8")}
                  >
                    Dasar Privasi
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a
                    href="/disclaimer-notice"
                    style={{
                      fontSize: "13px",
                      color: "#d8d8d8",
                      textDecoration: "none",
                      display: "inline-block",
                      transition: "color 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#d8d8d8")}
                  >
                    Kenyataan Penafian
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          padding: "20px 0",
          backgroundColor: "#424244",
        }}
      >
        <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: "20px", paddingRight: "20px" }}>
          <p
            className="text-center mb-0"
            style={{
              fontSize: "13px",
              color: "#d8d8d8",
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            © Copyright 2026 Loanbuddy Credit Sdn. Bhd. [Registration No. 200901039396 (882536-K)]. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

