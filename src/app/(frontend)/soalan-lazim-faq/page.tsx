"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMediaUrl } from "@/lib/media";

// Reusable WhatsApp Buttons Component
const WhatsAppButtons = () => (
  <div className="d-flex flex-wrap gap-3 mt-4">
    {/* Kuala Lumpur Button */}
    <a
      href="https://wa.me/60187856072"
      target="_blank"
      rel="noopener noreferrer"
      className="d-inline-flex align-items-center justify-content-center gap-2 text-white text-decoration-none shadow-sm whatsapp-btn-hover"
      style={{
        backgroundColor: "#25D366",
        borderRadius: "50px",
        padding: "10px 22px",
        fontSize: "13px",
        fontWeight: "600",
      }}
    >
      <img src="/assets/images/ws-logo.png" alt="WhatsApp" style={{ width: "22px", height: "22px" }} />
      <div className="text-start" style={{ lineHeight: "1.2" }}>
        <span style={{ fontSize: "10px", display: "block" }}>Cawangan Kuala Lumpur</span>
        <span>+6018 785 6072</span>
      </div>
    </a>

    {/* Kuching Button */}
    <a
      href="https://wa.me/60109329976"
      target="_blank"
      rel="noopener noreferrer"
      className="d-inline-flex align-items-center justify-content-center gap-2 text-white text-decoration-none shadow-sm whatsapp-btn-hover"
      style={{
        backgroundColor: "#25D366",
        borderRadius: "50px",
        padding: "10px 22px",
        fontSize: "13px",
        fontWeight: "600",
      }}
    >
      <img src="/assets/images/ws-logo.png" alt="WhatsApp" style={{ width: "22px", height: "22px" }} />
      <div className="text-start" style={{ lineHeight: "1.2" }}>
        <span style={{ fontSize: "10px", display: "block" }}>Cawangan Kuching</span>
        <span>+6010 932 9976</span>
      </div>
    </a>

    {/* Bintulu Button */}
    <a
      href="https://wa.me/60109098557"
      target="_blank"
      rel="noopener noreferrer"
      className="d-inline-flex align-items-center justify-content-center gap-2 text-white text-decoration-none shadow-sm whatsapp-btn-hover"
      style={{
        backgroundColor: "#25D366",
        borderRadius: "50px",
        padding: "10px 22px",
        fontSize: "13px",
        fontWeight: "600",
      }}
    >
      <img src="/assets/images/ws-logo.png" alt="WhatsApp" style={{ width: "22px", height: "22px" }} />
      <div className="text-start" style={{ lineHeight: "1.2" }}>
        <span style={{ fontSize: "10px", display: "block" }}>Cawangan Bintulu</span>
        <span>+6010 909 8557</span>
      </div>
    </a>
  </div>
);

// Reusable Branch Cards Grid Component
const BranchCards = () => (
  <div className="row g-3 mt-3 mb-2 justify-content-center text-center">
    {/* Kuala Lumpur */}
    <div className="col-12 col-md-4 d-flex flex-column align-items-center">
      <div className="fw-bold mb-1" style={{ color: "#0d4ed8", fontSize: "14px" }}>
        Cawangan Kuala Lumpur
      </div>
      <div className="mb-2 text-muted d-flex align-items-center justify-content-center gap-1" style={{ fontSize: "13px" }}>
        <i className="far fa-envelope" style={{ color: "#0d4ed8" }}></i>
        <a href="mailto:kl@loanbuddycredit.com.my" className="text-decoration-none text-muted">kl@loanbuddycredit.com.my</a>
      </div>
      <a
        href="https://wa.me/60187856072"
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
          <span style={{ fontSize: "10px", display: "block" }}>WhatsApp Kami</span>
          <span>+6018 785 6072</span>
        </div>
      </a>
    </div>

    {/* Kuching */}
    <div className="col-12 col-md-4 d-flex flex-column align-items-center">
      <div className="fw-bold mb-1" style={{ color: "#0d4ed8", fontSize: "14px" }}>
        Cawangan Kuching, Sarawak
      </div>
      <div className="mb-2 text-muted d-flex align-items-center justify-content-center gap-1" style={{ fontSize: "13px" }}>
        <i className="far fa-envelope" style={{ color: "#0d4ed8" }}></i>
        <a href="mailto:ks@loanbuddycredit.com.my" className="text-decoration-none text-muted">ks@loanbuddycredit.com.my</a>
      </div>
      <a
        href="https://wa.me/60109329976"
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
          <span style={{ fontSize: "10px", display: "block" }}>WhatsApp Kami</span>
          <span>+6010 932 9976</span>
        </div>
      </a>
    </div>

    {/* Bintulu */}
    <div className="col-12 col-md-4 d-flex flex-column align-items-center">
      <div className="fw-bold mb-1" style={{ color: "#0d4ed8", fontSize: "14px" }}>
        Cawangan Bintulu, Sarawak
      </div>
      <div className="mb-2 text-muted d-flex align-items-center justify-content-center gap-1" style={{ fontSize: "13px" }}>
        <i className="far fa-envelope" style={{ color: "#0d4ed8" }}></i>
        <a href="mailto:bintulu@loanbuddycredit.com.my" className="text-decoration-none text-muted">bintulu@loanbuddycredit.com.my</a>
      </div>
      <a
        href="https://wa.me/60109098557"
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
          <span style={{ fontSize: "10px", display: "block" }}>WhatsApp Kami</span>
          <span>+6010 909 8557</span>
        </div>
      </a>
    </div>
  </div>
);

// Circular outline downward arrow matching Pembayaran page
const FaqArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.35s ease",
      flexShrink: 0,
      marginLeft: "auto",
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
);

export default function FAQPage() {
  const [pageData, setPageData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"all" | "umum" | "bayaran">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    fetch("/api/content?slug=soalan-lazim-faq")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPageData(data.doc);
        }
      })
      .catch(() => {});
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="page_wrapper">
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

      <main className="page_content bg-white">
        {/* Hero Section */}
        <section
          className="section_space_lg overflow-hidden animate-fade-in-up delay-100"
          style={{
            backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')`,
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            backgroundColor: "#f8f9fa",
            paddingTop: "60px",
            paddingBottom: "60px",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <h1
                  className="fw-bold mb-4 animate-fade-in-up delay-100 text-start"
                  style={{ color: "#0d4ed8", fontSize: "28px" }}
                >
                  {pageData?.hero?.heading || "Soalan Lazim Pelanggan Kami"}
                </h1>
                <p
                  className="mb-0 animate-fade-in-up delay-200 text-start"
                  style={{ color: "#444", fontSize: "16px", lineHeight: "1.7" }}
                >
                  {pageData?.hero?.subheading ? (
                    pageData.hero.subheading
                  ) : (
                    <>
                      Di ruangan ini, anda akan mendapatkan jawapan kepada pertanyaan yang sering dikemukakan oleh pelanggan kami berkaitan perkhidmatan kami. Maklumat penting telah disusun bagi membantu anda memahami proses, prosedur dan perkhidmatan yang ditawarkan dengan lebih jelas.
                      <br /><br />
                      Sebarang kemusykilan dan persoalan yang ingin diajukan, anda boleh menghubungi kami dan kami akan membantu anda!
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom FAQ Section */}
        <section
          className="faq_section section_space_lg bg_white animate-fade-in-up delay-200"
          style={{ paddingTop: "50px", paddingBottom: "80px" }}
        >
          <div className="container">
            {/* Pill Tabs with equal width */}
            <div className="row justify-content-center mb-5">
              <div className="col-12 col-md-11 col-lg-9">
                <div className="d-flex flex-wrap gap-2 gap-md-3 justify-content-center">
                  <button
                    onClick={() => setActiveTab("all")}
                    className="border-0 shadow-sm text-center"
                    style={{
                      backgroundColor: activeTab === "all" ? "#0d4ed8" : "#b5b5b5",
                      color: "#ffffff",
                      borderRadius: "50px",
                      height: "46px",
                      width: "220px",
                      fontSize: "14px",
                      fontWeight: "700",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Semua
                  </button>

                  <button
                    onClick={() => setActiveTab("umum")}
                    className="border-0 shadow-sm text-center"
                    style={{
                      backgroundColor: activeTab === "umum" ? "#0d4ed8" : "#b5b5b5",
                      color: "#ffffff",
                      borderRadius: "50px",
                      height: "46px",
                      width: "220px",
                      fontSize: "14px",
                      fontWeight: "700",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Pertanyaan Umum
                  </button>

                  <button
                    onClick={() => setActiveTab("bayaran")}
                    className="border-0 shadow-sm text-center"
                    style={{
                      backgroundColor: activeTab === "bayaran" ? "#0d4ed8" : "#b5b5b5",
                      color: "#ffffff",
                      borderRadius: "50px",
                      height: "46px",
                      width: "220px",
                      fontSize: "14px",
                      fontWeight: "700",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Pertanyaan Bayaran Balik
                  </button>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                {/* SECTION: Pertanyaan Umum */}
                {(activeTab === "all" || activeTab === "umum") && (
                  <div className="mb-5">
                    <h2
                      className="fw-bold mb-4 pb-1 text-start"
                      style={{
                        color: "#0d4ed8",
                        fontSize: "22px",
                        borderBottom: "2px solid #0d4ed8",
                        display: "inline-block",
                      }}
                    >
                      Pertanyaan Umum
                    </h2>

                    <div className="d-flex flex-column">
                      {/* FAQ 0 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(0)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Sekiranya saya membuat pinjaman RM3,000. Apakah gambaran jadual pembayaran balik?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 0} />
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
                            <div className="pt-3 text-start">
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Contoh Wakil: <br />
                                Amaun Pinjaman: <span className="fw-bold">RM3,000</span> <br />
                                Tempoh Pinjaman: <span className="fw-bold">12 bulan</span> <br />
                                Kadar Faedah: <span className="fw-bold">18.0% setahun</span> <br />
                                Fi: <span className="fw-bold">Fi pesuruhjaya sumpah RM10 dan caj LHDN RM15</span>
                              </p>
                              <div className="mt-3 w-100" style={{ width: "100%" }}>
                                <img
                                  src="/assets/images/Jadual-umum.png"
                                  loading="lazy"
                                  className="img-fluid rounded shadow-sm border w-100"
                                  style={{ width: "100%", height: "auto", display: "block" }}
                                  alt="Jadual Pembayaran Balik"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* FAQ 1 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(1)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Berapakah jumlah pinjaman yang boleh saya mohon?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 1} />
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
                            <div className="pt-3 text-start">
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Anda boleh meminjam dengan minimum RM1,000 sehingga maksimum RM50,000. Amaun yang anda boleh pinjam berbeza-beza bergantung pada penilaian skor kredit individu.
                              </p>
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Walau bagaimanapun, untuk Tambah Nilai dan pinjaman seterusnya, RM1,000 dan maksimum akan ditentukan oleh Loanbuddy Credit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* FAQ 2 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(2)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Bagaimanakah cara untuk saya memohon pinjaman Loanbuddy Credit?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 2} />
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
                            <div className="pt-3 text-start">
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Anda boleh memohon dalam talian di sini, pada bila-bila masa. Sekiranya anda memerlukan bantuan atau maklumat lanjut, hubungi Loanbuddy Credit melalui WhatsApp.
                              </p>
                              <WhatsAppButtons />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* FAQ 3 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(3)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Berapakah kadar faedah?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 3} />
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
                            <div className="pt-3 text-start">
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Kadar faedah tahunan adalah sehingga 18.0%.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* FAQ 4 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(4)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Apakah dokumen dan kelayakan yang diperlukan?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 4} />
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
                            <div className="pt-3 text-start">
                              <div className="mb-3">
                                <span className="fw-bold d-block mb-1" style={{ color: "#333", fontSize: "15px" }}>
                                  Dokumen dan kelayakan yang diperlukan termasuk:
                                </span>
                                <ol className="ps-3 mb-0" style={{ color: "#444", fontSize: "15px", lineHeight: "1.7" }}>
                                  <li>Salinan kad pengenalan (depan dan belakang)</li>
                                  <li>Penyata bank pengkreditan gaji 3 bulan terkini (format PDF)</li>
                                  <li>Slip gaji 3 bulan terkini (format PDF) dan/atau</li>
                                  <li>Bil utiliti 1 bulan terkini (air, elektrik, dll.)</li>
                                </ol>
                              </div>

                              <div className="mb-3">
                                <span className="fw-bold d-block mb-1" style={{ color: "#333", fontSize: "15px" }}>
                                  Kelayakan Pinjaman Peribadi Atas Talian
                                </span>
                                <ol className="ps-3 mb-0" style={{ color: "#444", fontSize: "15px", lineHeight: "1.7" }}>
                                  <li>Berumur antara 18 sehingga 60 tahun</li>
                                  <li>Ada pekerjaan tetap (sektor swasta/kerajaan/GLC) dengan sekurang-kurangnya 3 bulan bekerja (dengan slip gaji dan gaji dikreditkan ke dalam akaun bank)</li>
                                  <li>Pendapatan bulanan kasar minimum RM1,700</li>
                                  <li>Tidak muflis dan mampu membayar balik pinjaman</li>
                                  <li>Bukan individu berstatus Orang Terdedah Politik (PEP)</li>
                                </ol>
                              </div>

                              <div>
                                <span className="fw-bold d-block mb-1" style={{ color: "#333", fontSize: "15px" }}>
                                  Kelayakan Pinjaman Tambah Nilai
                                </span>
                                <ol className="ps-3 mb-0" style={{ color: "#444", fontSize: "15px", lineHeight: "1.7" }}>
                                  <li>Pelanggan yang mempunyai kontrak sedia ada dengan baki jumlah pinjaman</li>
                                  <li>Rekod pembayaran yang baik dengan Loanbuddy Credit</li>
                                  <li>Individu berumur 18 hingga 60 tahun</li>
                                  <li>Pendapatan kasar bulanan minimum RM1,700</li>
                                  <li>Kakitangan swasta dan kerajaan sahaja</li>
                                  <li>Warganegara Malaysia</li>
                                  <li>Tidak muflis dan mampu membayar balik pinjaman</li>
                                  <li>Bukan individu berstatus Orang Terdedah Politik (PEP)</li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* FAQ 5 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(5)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Apakah tempoh pinjaman minimum dan maksimum?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 5} />
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
                            <div className="pt-3 text-start">
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Tempoh pinjaman minimum ialah 12 bulan dan tempoh pinjaman maksimum ialah 60 bulan (5 tahun).
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* FAQ 6 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(6)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Adakah terdapat sebarang bayaran yang perlu saya bayar untuk pendaftaran?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 6} />
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
                            <div className="pt-3 text-start">
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Tiada yuran pendaftaran dikenakan. Walau bagaimanapun, jika permohonan anda diluluskan, anda perlu membayar duti setem dan yuran perakuan.
                              </p>
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Yuran ini akan dikenakan bersama dengan jumlah pembayaran balik pada pembayaran balik pertama.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SECTION: Pertanyaan Bayaran Balik */}
                {(activeTab === "all" || activeTab === "bayaran") && (
                  <div className="mb-5">
                    <h2
                      className="fw-bold mb-4 pb-1 text-start"
                      style={{
                        color: "#0d4ed8",
                        fontSize: "22px",
                        borderBottom: "2px solid #0d4ed8",
                        display: "inline-block",
                      }}
                    >
                      Pertanyaan Bayaran Balik
                    </h2>

                    <div className="d-flex flex-column">
                      {/* Payment FAQ 7 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(7)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Bagaimanakah cara saya meminta penyelesaian penuh/awal?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 7} />
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
                            <div className="pt-3 text-start">
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Anda boleh menjelaskan pinjaman sebelum tempoh matang pinjaman anda pada bila-bila masa tanpa dikenakan yuran penamatan kerana pinjaman Loanbuddy Credit tiada tempoh <em>lock-in</em>. Namun, anda dikehendaki untuk memaklumkan Loanbuddy Credit sekurang-kurangnya 30 hari sebelum tarikh pembayaran balik penuh/awal dan anda dikehendaki membuat pembayaran penuh bagi jumlah pokok tertunggak dan faedah yang dibilkan sahaja.
                              </p>
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Anda juga boleh menghubungi Loanbuddy Credit atau menghantar e-mel sebelum membayar jumlah pinjaman anda untuk keterangan lebih lanjut.
                              </p>
                              <BranchCards />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Payment FAQ 8 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(8)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Bagaimana untuk menyemak jumlah ansuran bulanan saya?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 8} />
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateRows: openFaq === 8 ? "1fr" : "0fr",
                            opacity: openFaq === 8 ? 1 : 0,
                            transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                            overflow: "hidden",
                          }}
                        >
                          <div style={{ minHeight: 0 }}>
                            <div className="pt-3 text-start">
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Anda boleh menyemak butiran pinjaman anda dengan menghubungi pihak Loanbuddy Credit melalui WhatsApp.
                              </p>
                              <WhatsAppButtons />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Payment FAQ 9 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(9)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Bagaimanakah saya tahu jika pembayaran balik saya telah diterima?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 9} />
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateRows: openFaq === 9 ? "1fr" : "0fr",
                            opacity: openFaq === 9 ? 1 : 0,
                            transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                            overflow: "hidden",
                          }}
                        >
                          <div style={{ minHeight: 0 }}>
                            <div className="pt-3 text-start">
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Setelah pembayaran balik telah diproses, anda akan menerima panggilan, SMS atau WhatsApp pengesahan daripada Loanbuddy Credit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Payment FAQ 10 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(10)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Bilakah tarikh pembayaran balik pertama saya?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 10} />
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateRows: openFaq === 10 ? "1fr" : "0fr",
                            opacity: openFaq === 10 ? 1 : 0,
                            transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                            overflow: "hidden",
                          }}
                        >
                          <div style={{ minHeight: 0 }}>
                            <div className="pt-3 text-start">
                              <ol className="ps-3 mb-0" style={{ color: "#444", fontSize: "15px", lineHeight: "1.7" }}>
                                <li>
                                  Jika kontrak ditandatangani sebelum atau pada 14 <em>haribulan</em>, tarikh pembayaran balik pertama anda ialah pada 1 haribulan seterusnya.
                                </li>
                                <li>
                                  Jika kontrak ditandatangani pada atau selepas 15 <em>haribulan</em>, tarikh pembayaran balik pertama anda ialah pada 1 haribulan selepas bulan seterusnya.
                                </li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Payment FAQ 11 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(11)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Bagaimanakah cara saya membuat pembayaran balik kepada Loanbuddy Credit?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 11} />
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateRows: openFaq === 11 ? "1fr" : "0fr",
                            opacity: openFaq === 11 ? 1 : 0,
                            transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                            overflow: "hidden",
                          }}
                        >
                          <div style={{ minHeight: 0 }}>
                            <div className="pt-3 text-start">
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Pada masa ini, Loanbuddy Credit hanya menerima pembayaran balik melalui Direct Debit, pemindahan bank dalam talian dan JomPay. Loanbuddy Credit tidak menerima pembayaran balik secara tunai di mana-mana cawangan kami.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Payment FAQ 12 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(12)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Bagaimanakah saya meminta bayaran pulangan?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 12} />
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateRows: openFaq === 12 ? "1fr" : "0fr",
                            opacity: openFaq === 12 ? 1 : 0,
                            transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                            overflow: "hidden",
                          }}
                        >
                          <div style={{ minHeight: 0 }}>
                            <div className="pt-3 text-start">
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Loanbuddy Credit akan menghubungi anda melalui panggilan, SMS atau WhatsApp. Loanbuddy Credit akan membayar balik lebihan dana apabila pihak kami mengesahkan bahawa anda telah membuat penyelesaian penuh dengan lebihan dana.
                              </p>
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Jika anda membayar ansuran bulanan anda dengan lebihan dana dan ingin meminta bayaran balik sebelum penyelesaian penuh, sila hubungi pihak kami melalui panggilan, WhatsApp atau e-mel.
                              </p>
                              <BranchCards />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Payment FAQ 13 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(13)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Bagaimana jika saya gagal membayar hutang bulanan saya?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 13} />
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateRows: openFaq === 13 ? "1fr" : "0fr",
                            opacity: openFaq === 13 ? 1 : 0,
                            transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                            overflow: "hidden",
                          }}
                        >
                          <div style={{ minHeight: 0 }}>
                            <div className="pt-3 text-start">
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Wakil Loanbuddy Credit akan membuat panggilan kepada anda.
                              </p>
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Anda dikehendaki membayar caj pembayaran lewat (8.0% setiap jumlah jumlah ansuran tertunggak<sup>*¹</sup>). Ia dikira setiap hari dan dicaj pada hari terakhir.
                              </p>
                              <div className="mt-3">
                                <div className="fw-bold mb-1" style={{ color: "#333", fontSize: "14px" }}>
                                  Kaedah Pengiraan
                                </div>
                                <div style={{ color: "#444", fontSize: "14px" }}>
                                  Caj Pembayaran Lewat = (Amaun Ansuran Tertunggak x 8.0%) / (365 hari x Bilangan Hari Lewat Matang)<sup>*²</sup>
                                </div>
                              </div>
                              <div className="mt-3 text-secondary" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                                <p className="mb-1" style={{ fontStyle: "italic" }}>
                                  <sup>*¹</sup> Jumlah ansuran tertunggak atau baki jumlah apabila terdapat pembayaran separa.
                                </p>
                                <p className="mb-0" style={{ fontStyle: "italic" }}>
                                  <sup>*²</sup> Loanbuddy Credit menyediakan tempoh tangguh selama 5 hari dari tarikh tamat tempoh, di mana caj pembayaran lewat tidak akan dikenakan. Namun, selepas tempoh tangguh, caj pembayaran lewat akan dikenakan termasuk 5 hari sebelumnya.
                                </p>
                              </div>
                              <WhatsAppButtons />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Payment FAQ 14 */}
                      <div className="py-4" style={{ borderBottom: "1.5px solid #bfdbfe" }}>
                        <div
                          className="d-flex align-items-center justify-content-between cursor-pointer w-100"
                          onClick={() => toggleFaq(14)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3
                            className="fw-bold mb-0 pe-3 text-start flex-grow-1"
                            style={{ color: "#0d4ed8", fontSize: "19px", lineHeight: "1.4" }}
                          >
                            Bagaimana untuk menyemak tarikh akhir pembayaran balik saya?
                          </h3>
                          <FaqArrowIcon isOpen={openFaq === 14} />
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateRows: openFaq === 14 ? "1fr" : "0fr",
                            opacity: openFaq === 14 ? 1 : 0,
                            transition: "grid-template-rows 0.35s ease-in-out, opacity 0.3s ease-in-out",
                            overflow: "hidden",
                          }}
                        >
                          <div style={{ minHeight: 0 }}>
                            <div className="pt-3 text-start">
                              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
                                Anda boleh menyemak butiran akaun anda dengan menghubungi Loanbuddy Credit melalui WhatsApp atau e-mel.
                              </p>
                              <BranchCards />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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