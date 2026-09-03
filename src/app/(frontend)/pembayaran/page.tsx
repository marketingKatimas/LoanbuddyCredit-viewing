"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLanguage } from "@/context/LanguageContext";

export default function PembayaranPage() {
  const { t, isEnglish, language } = useLanguage();
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/content?slug=pembayaran&locale=${language}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPageData(data.doc);
        }
      })
      .catch(() => {});
  }, [language]);

  // Single open FAQ — only one open at a time (accordion style)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const defaultBranches = [
    {
      name: t.pembayaran.branchKLFull,
      shortName: t.pembayaran.branchKL,
      email: "kl@loanbuddycredit.com.my",
      phone: "+6018 785 6072",
      link: "https://wa.link/taaakr",
    },
    {
      name: t.pembayaran.branchKuchingFull,
      shortName: t.pembayaran.branchKuching,
      email: "ks@loanbuddycredit.com.my",
      phone: "+6010 932 9976",
      link: "https://wa.link/32cpg5",
    },
    {
      name: t.pembayaran.branchBintuluFull,
      shortName: t.pembayaran.branchBintulu,
      email: "bintulu@loanbuddycredit.com.my",
      phone: "+6010 909 8557",
      link: "https://wa.link/6v806i",
    },
  ];

  const branches =
    pageData?.sections?.[0]?.items && pageData.sections[0].items.length > 0
      ? pageData.sections[0].items.map((item: any, idx: number) => {
          const defaultB = defaultBranches[idx] || defaultBranches[0];
          const parts = (item.itemDescription || "").split("|").map((s: string) => s.trim());
          const email = parts[0]?.includes("@") ? parts[0] : defaultB.email;
          const phone = parts[1] || (!parts[0]?.includes("@") ? parts[0] : defaultB.phone);
          return {
            name: item.itemTitle || defaultB.name,
            shortName: item.itemTitle ? item.itemTitle.replace(", Sarawak", "") : defaultB.shortName,
            email: email,
            phone: phone,
            link: item.itemLink || defaultB.link,
          };
        })
      : defaultBranches;

  const pageHeading =
    pageData?.hero?.heading || t.pembayaran.pageHeading;

  const pageSubheading =
    pageData?.hero?.subheading || t.pembayaran.pageSubheading;

  const secondaryNote =
    pageData?.hero?.secondaryCtaText || t.pembayaran.secondaryNote;

  const faqSectionTitle =
    pageData?.sections?.[1]?.sectionTitle || t.pembayaran.faqTitle;

  const getFaqTitle = (idx: number, fallback: string) => {
    return pageData?.sections?.[1]?.items?.[idx]?.itemTitle || fallback;
  };

  const BranchCards = () => (
    <div className="row g-3 mt-3 mb-2 justify-content-center text-center">
      {branches.map((branch: any, idx: number) => (
        <div key={idx} className="col-12 col-md-4 d-flex flex-column align-items-center">
          <div className="fw-bold mb-1" style={{ color: "#0d4ed8", fontSize: "14px" }}>
            {branch.name}
          </div>
          {branch.email && (
            <div className="mb-2 text-muted d-flex align-items-center justify-content-center gap-1" style={{ fontSize: "13px" }}>
              <i className="far fa-envelope" style={{ color: "#0d4ed8" }}></i>
              <span>{branch.email}</span>
            </div>
          )}
          <a
            href={branch.link}
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-flex align-items-center gap-2 text-white text-decoration-none shadow-sm whatsapp-btn-hover"
            style={{
              backgroundColor: "#25D366",
              borderRadius: "50px",
              padding: "8px 18px",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            <img src="/assets/images/ws-logo.png" alt="WhatsApp" style={{ width: "20px", height: "20px" }} />
            <div className="text-start" style={{ lineHeight: "1.2" }}>
              <span style={{ fontSize: "10px", display: "block" }}>{isEnglish ? t.pembayaran.whatsappUs : "WhatsApp Kami"}</span>
              <span>{branch.phone}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );

  const BranchButtonsOnly = () => (
    <div className="d-flex flex-wrap gap-3 mt-3 mb-2 justify-content-center">
      {branches.map((branch: any, idx: number) => (
        <a
          key={idx}
          href={branch.link}
          target="_blank"
          rel="noopener noreferrer"
          className="d-inline-flex align-items-center gap-2 text-white text-decoration-none shadow-sm whatsapp-btn-hover"
          style={{
            backgroundColor: "#25D366",
            borderRadius: "50px",
            padding: "8px 20px",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          <img src="/assets/images/ws-logo.png" alt="WhatsApp" style={{ width: "22px", height: "22px" }} />
          <div className="text-start" style={{ lineHeight: "1.2" }}>
            <span style={{ fontSize: "10px", display: "block" }}>{branch.shortName || branch.name}</span>
            <span>{branch.phone}</span>
          </div>
        </a>
      ))}
    </div>
  );

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
        {/* Kaedah Pembayaran Section */}
        <section
          className="section_space_lg overflow-hidden animate-fade-in-up delay-100"
          style={{
            backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')`,
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            backgroundColor: "#f8f9fa",
            paddingTop: "70px",
            paddingBottom: "70px",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                {/* Section Title */}
                <h2
                  className="mb-4 animate-fade-in-up delay-100"
                  style={{ color: "#0d4ed8", fontSize: "28px", fontWeight: "800", lineHeight: "1.25" }}
                >
                  {pageHeading}
                </h2>

                {/* Paragraphs */}
                <p
                  className="mb-4 animate-fade-in-up delay-200"
                  style={{ color: "#444", fontSize: "16px", lineHeight: "1.7" }}
                >
                  {pageSubheading}
                </p>

                <p
                  className="mb-5 animate-fade-in-up delay-200"
                  style={{ color: "#444", fontSize: "16px", lineHeight: "1.7" }}
                >
                  {secondaryNote}
                </p>

                {/* Branch WhatsApp Green Pill Buttons Row */}
                <div className="row g-3 justify-content-center animate-fade-in-up delay-300">
                  {branches.map((branch: any, idx: number) => (
                    <div key={idx} className="col-12 col-md-auto">
                      <a
                        href={branch.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center gap-3 text-white text-decoration-none shadow-sm whatsapp-btn-hover"
                        style={{
                          backgroundColor: "#25D366",
                          borderRadius: "50px",
                          padding: "12px 28px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <img
                          src="/assets/images/ws-logo.png"
                          alt="WhatsApp"
                          style={{ width: "32px", height: "32px", flexShrink: 0 }}
                        />
                        <div className="text-start" style={{ lineHeight: "1.2" }}>
                          <span style={{ fontSize: "0.85rem", display: "block", fontWeight: "600" }}>
                            {branch.shortName || branch.name}
                          </span>
                          <span style={{ fontSize: "1.05rem", fontWeight: "700" }}>
                            {branch.phone}
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soalan Lazim Section */}
        <section className="faq_section section_space_lg bg_white animate-fade-in-up delay-200" style={{ paddingTop: "60px", paddingBottom: "80px" }}>
          <div className="container">
            <h2
              className="fw-bold text-center mb-5 animate-fade-in-up delay-200"
              style={{ color: "#0d4ed8", fontSize: "28px" }}
            >
              {faqSectionTitle}
            </h2>

            <div className="row justify-content-center animate-fade-in-up delay-300">
              <div className="col-12 col-lg-10">
                {/* Item 1 */}
                <div
                  className="py-4"
                  style={{ borderBottom: "1.5px solid #bfdbfe" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-between cursor-pointer"
                    onClick={() => toggleFaq(0)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3
                      className="fw-bold mb-0 pe-3"
                      style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                    >
                      {getFaqTitle(0, isEnglish ? t.pembayaran.faq1Question : "Bagaimanakah cara saya meminta penyelesaian penuh/awal?")}
                    </h3>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: openFaq === 0 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.35s ease",
                        flexShrink: 0,
                      }}
                    >
                      <circle cx="12" cy="12" r="10" stroke="#0d4ed8" strokeWidth="2" />
                      <path
                        d="M12 8V16M8 12L12 16L16 12"
                        stroke="#0d4ed8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: openFaq === 0 ? "1fr" : "0fr",
                      opacity: openFaq === 0 ? 1 : 0,
                      transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ minHeight: 0 }}>
                      <div className="pt-3">
                        <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                          {isEnglish
                            ? t.pembayaran.faq1Answer1
                            : "Anda boleh menjelaskan pinjaman sebelum tempoh matang pinjaman anda pada bila-bila masa tanpa dikenakan yuran penamatan kerana pinjaman Loanbuddy Credit tiada tempoh lock-in. Namun, anda dikehendaki untuk memaklumkan Loanbuddy Credit sekurang-kurangnya 30 hari sebelum tarikh pembayaran balik penuh/awal dan anda dikehendaki membuat pembayaran penuh bagi jumlah pokok tertunggak dan faedah yang dibilkan sahaja."}
                        </p>
                        <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                          {isEnglish
                            ? t.pembayaran.faq1Answer2
                            : "Anda juga boleh menghubungi Loanbuddy Credit atau menghantar e-mel sebelum membayar jumlah pinjaman anda untuk keterangan lebih lanjut."}
                        </p>
                        <BranchCards />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div
                  className="py-4"
                  style={{ borderBottom: "1.5px solid #bfdbfe" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-between cursor-pointer"
                    onClick={() => toggleFaq(1)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3
                      className="fw-bold mb-0 pe-3"
                      style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                    >
                      {getFaqTitle(1, isEnglish ? t.pembayaran.faq2Question : "Bagaimana untuk menyemak jumlah ansuran bulanan saya?")}
                    </h3>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: openFaq === 1 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.35s ease",
                        flexShrink: 0,
                      }}
                    >
                      <circle cx="12" cy="12" r="10" stroke="#0d4ed8" strokeWidth="2" />
                      <path
                        d="M12 8V16M8 12L12 16L16 12"
                        stroke="#0d4ed8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: openFaq === 1 ? "1fr" : "0fr",
                      opacity: openFaq === 1 ? 1 : 0,
                      transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ minHeight: 0 }}>
                      <div className="pt-3">
                        <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                          {isEnglish
                            ? t.pembayaran.faq2Answer
                            : "Anda boleh menyemak butiran pinjaman anda dengan menghubungi pihak Loanbuddy Credit melalui WhatsApp."}
                        </p>
                        <BranchButtonsOnly />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div
                  className="py-4"
                  style={{ borderBottom: "1.5px solid #bfdbfe" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-between cursor-pointer"
                    onClick={() => toggleFaq(2)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3
                      className="fw-bold mb-0 pe-3"
                      style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                    >
                      {getFaqTitle(2, isEnglish ? t.pembayaran.faq3Question : "Bagaimanakah saya tahu jika pembayaran balik saya telah diterima?")}
                    </h3>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: openFaq === 2 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.35s ease",
                        flexShrink: 0,
                      }}
                    >
                      <circle cx="12" cy="12" r="10" stroke="#0d4ed8" strokeWidth="2" />
                      <path
                        d="M12 8V16M8 12L12 16L16 12"
                        stroke="#0d4ed8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: openFaq === 2 ? "1fr" : "0fr",
                      opacity: openFaq === 2 ? 1 : 0,
                      transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ minHeight: 0 }}>
                      <div className="pt-3">
                        <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                          {isEnglish
                            ? t.pembayaran.faq3Answer
                            : "Setelah pembayaran balik telah diproses, anda akan menerima panggilan, SMS atau WhatsApp pengesahan daripada Loanbuddy Credit."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div
                  className="py-4"
                  style={{ borderBottom: "1.5px solid #bfdbfe" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-between cursor-pointer"
                    onClick={() => toggleFaq(3)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3
                      className="fw-bold mb-0 pe-3"
                      style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                    >
                      {getFaqTitle(3, isEnglish ? t.pembayaran.faq4Question : "Bilakah tarikh pembayaran balik pertama saya?")}
                    </h3>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: openFaq === 3 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.35s ease",
                        flexShrink: 0,
                      }}
                    >
                      <circle cx="12" cy="12" r="10" stroke="#0d4ed8" strokeWidth="2" />
                      <path
                        d="M12 8V16M8 12L12 16L16 12"
                        stroke="#0d4ed8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: openFaq === 3 ? "1fr" : "0fr",
                      opacity: openFaq === 3 ? 1 : 0,
                      transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ minHeight: 0 }}>
                      <div className="pt-3">
                        <ol className="ps-3 mb-0" style={{ color: "#444", fontSize: "15px", lineHeight: "1.7" }}>
                          <li className="mb-2">
                            {isEnglish
                              ? t.pembayaran.faq4Step1
                              : "Jika kontrak ditandatangani sebelum atau pada 14 haribulan, tarikh pembayaran balik pertama anda ialah pada 1 haribulan seterusnya."}
                          </li>
                          <li>
                            {isEnglish
                              ? t.pembayaran.faq4Step2
                              : "Jika kontrak ditandatangani pada atau selepas 15 haribulan, tarikh pembayaran balik pertama anda ialah pada 1 haribulan selepas bulan seterusnya."}
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div
                  className="py-4"
                  style={{ borderBottom: "1.5px solid #bfdbfe" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-between cursor-pointer"
                    onClick={() => toggleFaq(4)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3
                      className="fw-bold mb-0 pe-3"
                      style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                    >
                      {getFaqTitle(4, isEnglish ? t.pembayaran.faq5Question : "Bagaimanakah cara saya membuat pembayaran balik kepada Loanbuddy Credit?")}
                    </h3>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: openFaq === 4 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.35s ease",
                        flexShrink: 0,
                      }}
                    >
                      <circle cx="12" cy="12" r="10" stroke="#0d4ed8" strokeWidth="2" />
                      <path
                        d="M12 8V16M8 12L12 16L16 12"
                        stroke="#0d4ed8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: openFaq === 4 ? "1fr" : "0fr",
                      opacity: openFaq === 4 ? 1 : 0,
                      transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ minHeight: 0 }}>
                      <div className="pt-3">
                        <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                          {isEnglish
                            ? t.pembayaran.faq5Answer
                            : "Pada masa ini, Loanbuddy Credit hanya menerima pembayaran balik melalui Direct Debit, pemindahan bank dalam talian dan JomPay. Loanbuddy Credit tidak menerima pembayaran balik secara tunai di mana-mana cawangan kami."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 6 */}
                <div
                  className="py-4"
                  style={{ borderBottom: "1.5px solid #bfdbfe" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-between cursor-pointer"
                    onClick={() => toggleFaq(5)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3
                      className="fw-bold mb-0 pe-3"
                      style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                    >
                      {getFaqTitle(5, isEnglish ? t.pembayaran.faq6Question : "Bagaimanakah saya meminta bayaran pulangan?")}
                    </h3>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: openFaq === 5 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.35s ease",
                        flexShrink: 0,
                      }}
                    >
                      <circle cx="12" cy="12" r="10" stroke="#0d4ed8" strokeWidth="2" />
                      <path
                        d="M12 8V16M8 12L12 16L16 12"
                        stroke="#0d4ed8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: openFaq === 5 ? "1fr" : "0fr",
                      opacity: openFaq === 5 ? 1 : 0,
                      transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ minHeight: 0 }}>
                      <div className="pt-3">
                        <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                          {isEnglish
                            ? t.pembayaran.faq6Answer1
                            : "Loanbuddy Credit akan menghubungi anda melalui panggilan, SMS atau WhatsApp. Loanbuddy Credit akan membayar balik lebihan dana apabila pihak kami mengesahkan bahawa anda telah membuat penyelesaian penuh dengan lebihan dana."}
                        </p>
                        <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                          {isEnglish
                            ? t.pembayaran.faq6Answer2
                            : "Jika anda membayar ansuran bulanan anda dengan lebihan dana dan ingin meminta bayaran balik sebelum penyelesaian penuh, sila hubungi pihak kami melalui panggilan, WhatsApp atau e-mel."}
                        </p>
                        <BranchCards />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 7 */}
                <div
                  className="py-4"
                  style={{ borderBottom: "1.5px solid #bfdbfe" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-between cursor-pointer"
                    onClick={() => toggleFaq(6)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3
                      className="fw-bold mb-0 pe-3"
                      style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                    >
                      {getFaqTitle(6, isEnglish ? t.pembayaran.faq7Question : "Bagaimana jika saya gagal membayar hutang bulanan saya?")}
                    </h3>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: openFaq === 6 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.35s ease",
                        flexShrink: 0,
                      }}
                    >
                      <circle cx="12" cy="12" r="10" stroke="#0d4ed8" strokeWidth="2" />
                      <path
                        d="M12 8V16M8 12L12 16L16 12"
                        stroke="#0d4ed8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: openFaq === 6 ? "1fr" : "0fr",
                      opacity: openFaq === 6 ? 1 : 0,
                      transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ minHeight: 0 }}>
                      <div className="pt-3">
                        <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                          {isEnglish ? t.pembayaran.faq7Call : "Wakil Loanbuddy Credit akan membuat panggilan kepada anda."}
                        </p>
                        <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                          {isEnglish
                            ? t.pembayaran.faq7Charge
                            : "Anda dikehendaki membayar caj pembayaran lewat (8.0% setiap jumlah jumlah ansuran tertunggak*¹). Ia dikira setiap hari dan dicaj pada hari terakhir."}
                        </p>
                        <div className="mt-3">
                          <div className="fw-bold mb-1" style={{ color: "#333", fontSize: "14px" }}>
                            {isEnglish ? t.pembayaran.faq7CalcTitle : "Kaedah Pengiraan"}
                          </div>
                          <div style={{ color: "#444", fontSize: "14px" }}>
                            {isEnglish
                              ? t.pembayaran.faq7CalcFormula
                              : "Caj Pembayaran Lewat = (Amaun Ansuran Tertunggak x 8.0%) / (365 hari x Bilangan Hari Lewat Matang)*²"}
                          </div>
                        </div>
                        <div className="mt-3 text-secondary" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                          <p className="mb-1" style={{ fontStyle: "italic" }}>
                            {isEnglish
                              ? t.pembayaran.faq7Note1
                              : "*¹ Jumlah ansuran tertunggak atau baki jumlah apabila terdapat pembayaran separa."}
                          </p>
                          <p className="mb-0" style={{ fontStyle: "italic" }}>
                            {isEnglish
                              ? t.pembayaran.faq7Note2
                              : "*² Loanbuddy Credit menyediakan tempoh tangguh selama 5 hari dari tarikh tamat tempoh, di mana caj pembayaran lewat tidak akan dikenakan. Namun, selepas tempoh tangguh, caj pembayaran lewat akan dikenakan termasuk 5 hari sebelumnya."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 8 */}
                <div
                  className="py-4"
                  style={{ borderBottom: "1.5px solid #bfdbfe" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-between cursor-pointer"
                    onClick={() => toggleFaq(7)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3
                      className="fw-bold mb-0 pe-3"
                      style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                    >
                      {getFaqTitle(7, isEnglish ? t.pembayaran.faq8Question : "Bagaimana untuk menyemak tarikh akhir pembayaran balik saya?")}
                    </h3>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: openFaq === 7 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.35s ease",
                        flexShrink: 0,
                      }}
                    >
                      <circle cx="12" cy="12" r="10" stroke="#0d4ed8" strokeWidth="2" />
                      <path
                        d="M12 8V16M8 12L12 16L16 12"
                        stroke="#0d4ed8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: openFaq === 7 ? "1fr" : "0fr",
                      opacity: openFaq === 7 ? 1 : 0,
                      transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ minHeight: 0 }}>
                      <div className="pt-3">
                        <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                          {isEnglish
                            ? t.pembayaran.faq8Answer
                            : "Anda boleh menyemak butiran akaun anda dengan menghubungi Loanbuddy Credit melalui WhatsApp atau e-mel."}
                        </p>
                        <BranchCards />
                      </div>
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
