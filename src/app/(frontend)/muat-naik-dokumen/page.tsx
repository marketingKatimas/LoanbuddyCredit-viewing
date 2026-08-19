"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MuatNaikDokumenPage() {
  const [applicationId, setApplicationId] = useState("");
  const [myKadFile, setMyKadFile] = useState<File | null>(null);
  const [supportDocFile, setSupportDocFile] = useState<File | null>(null);

  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);

  // Error and Status States
  const [appIdError, setAppIdError] = useState("");
  const [invalidAppIdError, setInvalidAppIdError] = useState(false);
  const [myKadSizeError, setMyKadSizeError] = useState("");
  const [myKadFormatError, setMyKadFormatError] = useState("");
  const [supportDocSizeError, setSupportDocSizeError] = useState("");
  const [supportDocFormatError, setSupportDocFormatError] = useState("");
  const [uploadFileError, setUploadFileError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadFailed, setUploadFailed] = useState(false);

  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const allowedTypes = ["application/pdf", "image/png", "image/jpeg", "image/jpg"];

  useEffect(() => {
    // Load reCAPTCHA script dynamically
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=6LdmCn0nAAAAANC8dQDeC3bko97zlloPkuFcyP7_";
    script.async = true;
    document.body.appendChild(script);

    // Read uploadId from query string
    const params = new URLSearchParams(window.location.search);
    const uploadId = params.get("uploadId");
    if (uploadId) {
      setApplicationId(uploadId);
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleMyKadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMyKadSizeError("");
    setMyKadFormatError("");
    setUploadFileError("");

    const file = e.target.files?.[0];
    if (!file) {
      setMyKadFile(null);
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setMyKadSizeError("File must be less than 10MB");
      setMyKadFile(null);
      e.target.value = "";
    } else if (!allowedTypes.includes(file.type)) {
      setMyKadFormatError("Only PDF, PNG, JPG, or JPEG file are allowed");
      setMyKadFile(null);
      e.target.value = "";
    } else {
      setMyKadFile(file);
    }
  };

  const handleSupportDocChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSupportDocSizeError("");
    setSupportDocFormatError("");
    setUploadFileError("");

    const file = e.target.files?.[0];
    if (!file) {
      setSupportDocFile(null);
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setSupportDocSizeError("File must be less than 10MB");
      setSupportDocFile(null);
      e.target.value = "";
    } else if (!allowedTypes.includes(file.type)) {
      setSupportDocFormatError("Only PDF, PNG, JPG, or JPEG file are allowed");
      setSupportDocFile(null);
      e.target.value = "";
    } else {
      setSupportDocFile(file);
    }
  };

  const skipUpload = () => {
    window.location.href = "mohon-pinjaman-online?status=form-submit";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploadFileError("");
    setAppIdError("");
    setInvalidAppIdError(false);
    setUploadFailed(false);

    // Validation
    const trimmedId = applicationId.trim();
    if (!trimmedId) {
      setAppIdError("This fields is required");
      return;
    }

    if (!myKadFile && !supportDocFile) {
      setUploadFileError("Sila muat naik sekurang-kurangnya satu fail.");
      return;
    }

    if (!agree1 || !agree2 || !agree3) {
      return;
    }

    setIsSubmitting(true);

    try {
      let token = "";
      if ((window as any).grecaptcha) {
        token = await new Promise<string>((resolve) => {
          (window as any).grecaptcha.ready(() => {
            (window as any).grecaptcha
              .execute("6LdmCn0nAAAAANC8dQDeC3bko97zlloPkuFcyP7_", { action: "submit" })
              .then((tokenVal: string) => resolve(tokenVal))
              .catch(() => resolve(""));
          });
        });
      }

      const formData = new FormData();
      formData.append("applicationId", trimmedId);
      if (myKadFile) {
        formData.append("myKad", myKadFile);
      }
      if (supportDocFile) {
        formData.append("supportingDocument", supportDocFile);
      }
      formData.append("mohon-agree-1", "on");
      formData.append("mohon-agree-2", "on");
      formData.append("mohon-agree-3", "on");
      formData.append("pageUrl", typeof window !== "undefined" ? window.location.href : "");
      if (token) {
        formData.append("token", token);
      }

      /* =========================================================================
       * PRODUCTION REAL SERVER API (CURRENTLY DISCONNECTED FOR LOCAL TESTING)
       * =========================================================================
       * REAL API ENDPOINT: https://script.leadsync.com.my/applyform-step2-upload-lbc
       * 
       * TO RE-ENABLE PRODUCTION BEFORE DEPLOYING TO LIVE SERVER:
       * 1. Comment out the local fetch call to "/api/upload" below.
       * 2. Uncomment the LeadSync production fetch block below.
       * =========================================================================
       * 
       * PRODUCTION CODE (UNCOMMENT FOR PRODUCTION):
       * -------------------------------------------------------------------------
       * const response = await fetch("https://script.leadsync.com.my/applyform-step2-upload-lbc", {
       *   method: "POST",
       *   body: formData,
       * });
       * =========================================================================
       */

      // LOCAL DEVELOPMENT ENDPOINT
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadSuccess(true);
        window.location.href = "mohon-pinjaman-online?status=form-with-upload";
      } else {
        const errData = await response.json().catch(() => ({}));
        if (errData.message === "Application ID not found") {
          setInvalidAppIdError(true);
        }
        setUploadFailed(true);
      }
    } catch (err) {
      console.error(err);
      setUploadFailed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page_wrapper">
      {/* Back To Top */}
      <div className="backtotop">
        <a href="#" className="scroll">
          <i className="far fa-arrow-up"></i>
        </a>
      </div>

      {/* Header */}
      <Header />

      {/* Main Body */}
      <main className="page_content">
        {/* Page Banner Section */}
        <section
          className="page_banner"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')`, borderRadius: "10px", overflow: "hidden" }}
        >
          <div className="container container-apply-header">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col col-12">
                <h1 className="banner-mohon-big-title text-center justify-content-center">
                  Pinjaman Peribadi Sehingga RM50,000
                  <br />
                  Mohon Hari ini!
                </h1>
                <p className="banner-apply-header">
                  Satu Langkah mudah untuk mencapai kestabilan kewangan yang anda perlukan. Pilih Loanbuddy Credit!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Apply Form Section */}
        <section className="section-space-mohon-lg sec-relative bg-apply-1">
          <div className="container container-mohon">
            <div className="row row-mohon-1 col-12 z-index-10">
              <div className="course-card-mohon h-max col-lg-7 animate-slide-in-left delay-300" style={{ borderRadius: "10px" }}>
                <form id="applyUploadForm" onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="inner-mohon">
                    <div className="form-mohon-content pos-relative col-lg-12">
                      {/* Form Header */}
                      <div
                        className="form-header text-center"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "10px 20px 25px 20px",
                          margin: "0 0 25px 0"
                        }}
                      >
                        <h3 style={{ margin: "0 0 15px 0" }}>Permohonan Telah Berjaya Dihantar!</h3>
                        <p style={{ fontStyle: "italic", color: "#6c757d", margin: 0 }}>
                          Nota: Untuk menyokong lagi permohonan anda, anda boleh memuat naik
                          dokumen pilihan yang berikut. Walaupun ia tidak wajib, dokumen tersebut
                          dapat membantu dalam kerja pemprosesan. Tekan Langkau jika anda
                          memilih untuk tidak memuat naik sebarang dokumen.
                        </p>
                      </div>

                      {uploadSuccess ? (
                        <div
                          id="success-upload-message"
                          style={{ display: "block", color: "#0468BF", border: "1px solid #0468BF", padding: "20px", borderRadius: "10px" }}
                        >
                          Dokumen berjaya dimuat naik!
                          <br />
                          Terima kasih dan kami akan menghubungi anda dalam masa terdekat.
                        </div>
                      ) : (
                        <div className="upload-form-section" style={{ display: isSubmitting ? "none" : "block" }}>
                          <div className="form-row">
                            <div className="form-holder w-100">
                              <label htmlFor="applicationId">ID Permohonan</label>
                              <input
                                id="applicationId"
                                name="applicationId"
                                type="text"
                                placeholder="Id permohonan"
                                className="form-control"
                                value={applicationId}
                                onChange={(e) => setApplicationId(e.target.value)}
                                onBlur={(e) => setApplicationId(e.target.value.trim())}
                                required
                              />
                              {appIdError && <div className="error-message" style={{ color: "red" }}>{appIdError}</div>}
                              {invalidAppIdError && (
                                <div className="error-message" style={{ color: "red" }}>
                                  ID Permohonan Tidak Sah. <br />
                                  Sila semak sama ada terdapat kesilapan ejaan atau perbezaan huruf besar dan kecil.
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="form-row form-row-column">
                            {/* MyKad Upload */}
                            <div className="form-holder form-holder-mobile">
                              <label htmlFor="upload-file-1">Salinan MyKad (Pilihan)</label>
                              <div className="upload-container">
                                <div className="file-name" id="file-name-1">
                                  {myKadFile ? myKadFile.name : ""}
                                </div>
                                <label className="tp-btn-3 upload-btn1" htmlFor="upload-file-1">
                                  Muat Naik
                                </label>
                                <input
                                  type="file"
                                  id="upload-file-1"
                                  name="myKad"
                                  accept=".pdf,.png,.jpg,.jpeg"
                                  onChange={handleMyKadChange}
                                  style={{ display: "none" }}
                                />
                              </div>
                              {myKadSizeError && <div className="error-message" style={{ color: "red" }}>{myKadSizeError}</div>}
                              {myKadFormatError && <div className="error-message" style={{ color: "red" }}>{myKadFormatError}</div>}
                            </div>

                            {/* Supporting Document Upload */}
                            <div className="form-holder">
                              <label htmlFor="upload-file-2">Penyata Gaji / Bank / KWSP Terkini (Pilihan)</label>
                              <div className="upload-container">
                                <div className="file-name" id="file-name-2">
                                  {supportDocFile ? supportDocFile.name : ""}
                                </div>
                                <label className="tp-btn-3 upload-btn1" htmlFor="upload-file-2">
                                  Muat Naik
                                </label>
                                <input
                                  type="file"
                                  id="upload-file-2"
                                  name="supportingDocument"
                                  accept=".pdf,.png,.jpg,.jpeg"
                                  onChange={handleSupportDocChange}
                                  style={{ display: "none" }}
                                />
                              </div>
                              {supportDocSizeError && <div className="error-message" style={{ color: "red" }}>{supportDocSizeError}</div>}
                              {supportDocFormatError && <div className="error-message" style={{ color: "red" }}>{supportDocFormatError}</div>}
                            </div>
                          </div>

                          {/* Checkboxes */}
                          <div className="checkbox-row">
                            <div className="checkbox-holder">
                              <div className="checkbox-box">
                                <input
                                  type="checkbox"
                                  id="mohon-agree-1"
                                  name="mohon-agree-1"
                                  checked={agree1}
                                  onChange={(e) => setAgree1(e.target.checked)}
                                  required
                                  style={{
                                    backgroundColor: agree1 ? "#808080" : "white",
                                    borderColor: agree1 ? "#808080" : "#c1c5c9",
                                  }}
                                />
                              </div>
                              <label htmlFor="mohon-agree-1" className="checkbox-text">
                                Dengan menandakan kotak, saya bersetuju untuk dihubungi oleh Loanbuddy Credit melalui WhatsApp.
                              </label>
                            </div>

                            <div className="checkbox-holder">
                              <div className="checkbox-box">
                                <input
                                  type="checkbox"
                                  id="mohon-agree-2"
                                  name="mohon-agree-2"
                                  checked={agree2}
                                  onChange={(e) => setAgree2(e.target.checked)}
                                  required
                                  style={{
                                    backgroundColor: agree2 ? "#808080" : "white",
                                    borderColor: agree2 ? "#808080" : "#c1c5c9",
                                  }}
                                />
                              </div>
                              <label htmlFor="mohon-agree-2" className="checkbox-text">
                                Dengan menandakan kotak, saya telah membaca, memahami dan bersetuju dengan{" "}
                                <a href="#" onClick={(e) => { e.preventDefault(); setShowTermsModal(true); }}>
                                  Dasar Privasi
                                </a>{" "}
                                &{" "}
                                <a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacyModal(true); }}>
                                  Terma dan Syarat;
                                </a>
                                {" "}dan,
                              </label>
                            </div>

                            <div className="checkbox-holder">
                              <div className="checkbox-box">
                                <input
                                  type="checkbox"
                                  id="mohon-agree-3"
                                  name="mohon-agree-3"
                                  checked={agree3}
                                  onChange={(e) => setAgree3(e.target.checked)}
                                  required
                                  style={{
                                    backgroundColor: agree3 ? "#ff0000" : "white",
                                    borderColor: agree3 ? "#ff0000" : "#c1c5c9",
                                  }}
                                />
                              </div>
                              <label htmlFor="mohon-agree-3" className="checkbox-text">
                                Dengan menandakan kotak, klik pada butang "Hantar" di bawah, saya mengaku dan mengesahkan bahawa semua maklumat yang diberikan di dalam ini adalah lengkap, benar dan tepat.
                              </label>
                            </div>
                          </div>

                          {/* Button Row */}
                          <div className="button-row button-row-left d-flex align-items-center gap-3">
                            <button
                              type="submit"
                              className="btn border_red_reverse btn-mohon-short"
                              id="submitBtn"
                              disabled={isSubmitting}
                              style={{ height: "auto" }}
                            >
                              <span>
                                <small>{isSubmitting ? "Sedang memuat..." : "Hantar"}</small>
                                <small>{isSubmitting ? "Sedang memuat..." : "Hantar"}</small>
                              </span>
                            </button>
                            <button
                              type="button"
                              className="btn border_red_new btn-mohon-short"
                              onClick={skipUpload}
                              style={{ height: "auto" }}
                            >
                              <span>
                                <small>Langkau</small>
                                <small>Langkau</small>
                              </span>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Error & Processing Messages */}
                      {uploadFileError && (
                        <div className="error-message-2 ps-3" style={{ color: "red", display: "block" }}>
                          {uploadFileError}
                        </div>
                      )}

                      {uploadFailed && (
                        <div id="Unsuccessfully-message" className="ps-3 unsuccessful-message" style={{ display: "block" }}>
                          Muat naik gagal.
                          <br />
                          Sila <strong>Reload</strong> halaman dan cuba sekali lagi.
                        </div>
                      )}

                      {isSubmitting && (
                        <div id="processing-message" className="process-message" style={{ display: "block" }}>
                          Sila tunggu sebentar, dokumen sedang dimuat naik...
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>

              {/* Sidebar Section */}
              <div className="course-card-mohon col-lg-4 d-flex flex-column justify-content-center sidebar-scaled-down animate-slide-in-right delay-400" style={{ borderRadius: "10px" }}>
                <div className="form-header text-center mb-4">
                  <h3>Apa yang anda perlukan untuk memohon?</h3>
                </div>
                <div className="mohon-rules-top mb-3">
                  <img src="/assets/images/dokumen-permohonan.png" alt="dokumen permohonan" className="mx-auto d-block" />
                </div>
                <div className="mohon-rules">
                  <h5>1. Dokumen Diperlukan Untuk Permohonan</h5>
                  <ul>
                    <li>Salinan kad pengenalan (depan dan belakang)</li>
                    <li>Penyata bank pengkreditan gaji 3 bulan terkini (format PDF)</li>
                    <li>Slip gaji 3 bulan terkini (format PDF) dan/atau</li>
                    <li>Bil utiliti 1 bulan terkini (air, elektrik, dll.)</li>
                  </ul>
                  <h5>2. Semua transaksi pembayaran boleh dilakukan melalui saluran berikut:</h5>
                  <div className="mohon-rules-bottom">
                    <div className="d-flex">
                      <img src="/assets/images/jompay-logo.png" alt="JomPay" />
                    </div>
                    <div className="d-flex">
                      <img src="/assets/images/direct-debit-logo.png" alt="Direct Debit" />
                    </div>
                    <div className="d-flex">
                      <img src="/assets/images/transfer-logo.png" alt="Bank Transfer" />
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

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title modal-title-custom-1">DASAR PRIVASI</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowPrivacyModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body privay-policy-modal">
                <div className="container">
                  <p>
                    LoanBuddy (bakal dirujuk sebagai “LoanBuddy” atau “kami”), berkomited untuk menghormati dan melindungi privasi dan data peribadi anda.
                  </p>
                  <p>
                    Dasar privasi ini (bersama dengan terma dan syarat dan sebarang dokumen lain yang dirujuk kepadanya) menentukan kaedah pengurusan maklumat peribadi yang dikumpulkan atau yang diberikan kepada kami.
                  </p>
                  <p>
                    Dalam mengumpul dan mengendalikan data peribadi anda, kami terikat dengan Akta Perlindungan Data Peribadi 2012 (bakal dirujuk sebagai “Akta”) dan undang-undang lain seperti garis panduan privasi yang terpakai. Dengan memberikan Data Peribadi anda kepada kami, anda dianggap telah membaca dan bersetuju dengan pengumpulan, penggunaan, pemprosesan, pendedahan dan pengendalian data peribadi anda mengikut dasar privasi ini.
                  </p>

                  <h5>1. DATA PERIBADI</h5>
                  <p className="p-dasar-privasi">
                    Ungkapan “data peribadi” hendaklah membawa maksud seperti yang ditakrifkan oleh Akta dan termasuk maklumat mengenai nama, nombor kad pengenalan, nombor pasport, alamat, jantina, tarikh lahir, maklumat perhubungan, alamat e-mel, bangsa dan kewarganegaraan.
                  </p>
                  <p className="p-dasar-privasi">
                    Data Peribadi yang diberikan kepada kami melalui borang di laman web kami di loanbuddy.com.my, atau melalui pautan di platform sosial digital kami atau melalui pautan WhatsApp (bakal dirujuk sebagai “laman web kami”) mungkin perlu didedahkan untuk tujuan memproses permohonan pinjaman, melanjutkan atau memperbaharui permohonan pinjaman atau menyediakan perkhidmatan lain yang berkaitan.
                  </p>
                  <p className="p-dasar-privasi">
                    Jika anda menghubungi kami, kami mungkin menyimpan rekod komunikasi itu. Kami mungkin meminta anda untuk melengkapkan tinjauan secara sukarela untuk penyelidikan, menjejak butiran transaksi anda dan memantau lawatan laman web anda dan sumber yang diakses.
                  </p>
                  <p className="p-dasar-privasi">
                    Adalah diperlukan bagi pihak kami untuk mengumpul dan memproses data peribadi anda. Kegagalan untuk memberikan data peribadi yang diperlukan atau persetujuan kepada notis ini boleh menyebabkan LoanBuddy tidak dapat memproses permohonan pinjaman anda, membuka akaun baharu atau mengekalkan akaun sedia ada.
                  </p>

                  <h5>2. PENGGUNAAN DATA PERIBADI</h5>
                  <p className="p-dasar-privasi">
                    Dengan memberikan Data Peribadi anda, anda membenarkan penggunaannya untuk tujuan berikut:
                  </p>
                  <ul>
                    <li className="li-dasar-privasi">
                      <strong>a.</strong> Penilaian Permohonan Pinjaman: Data Peribadi anda boleh digunakan untuk menilai merit dan kelayakan permohonan anda untuk kemudahan pinjaman, termasuk penilaian oleh penyedia pinjaman.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>b.</strong> Komunikasi Berkenaan Ciri Pinjaman: Kami mungkin menggunakan Data Peribadi anda untuk memaklumkan kepada anda tentang sebarang kemas kini, perubahan atau pengubahsuaian kepada terma, syarat, atau ciri produk atau perkhidmatan pinjaman yang anda mohon.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>c.</strong> Pengurusan Akaun yang Sedang Berjalan: Data Peribadi anda juga boleh digunakan untuk mengurus dan menyelenggara akaun pinjaman anda, termasuk sebarang sambungan atau pembaharuan kemudahan pinjaman.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>d.</strong> Komunikasi dan Penyelesaian Pertikaian: Data Peribadi anda boleh digunakan untuk berkomunikasi dengan anda mengenai permohonan atau akaun pinjaman anda, termasuk menangani sebarang pertanyaan atau menyelesaikan pertikaian yang berkaitan dengan kemudahan pinjaman.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>e.</strong> Penambahbaikan Perkhidmatan: Kami mungkin menggunakan Data Peribadi anda untuk menganalisi dan menambahbaik produk dan perkhidmatan kami untuk memenuhi keperluan anda dengan lebih baik.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>f.</strong> Pematuhan Undang-undang dan Kontrak: Untuk memastikan pematuhan terhadap kewajipan undang-undang dan kontrak.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>g.</strong> Pematuhan Dasar Dalaman: Data Peribadi anda boleh digunakan untuk mematuhi dasar dan prosedur dalaman, termasuk yang berkaitan dengan pencegahan pengubahan wang haram, penipuan atau aktiviti haram yang lain.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>h.</strong> Pentadbiran dan Perakaunan: Untuk memenuhi keperluan pentadbiran dan perakaunan dalaman kami.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>i.</strong> Penyelenggaraan Sejarah Kredit: Kami mungkin menggunakan Data Peribadi anda untuk mengekalkan rekod sejarah kredit anda untuk rujukan dan penilaian masa depan yang berkaitan dengan perkhidmatan kewangan.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>j.</strong> Pemprofilan dan Tinjauan Pelanggan: Data Peribadi anda boleh digunakan untuk mereka bentuk dan menjalankan tinjauan yang bertujuan untuk memahami keutamaan dan pemprofilan pelanggan untuk tujuan pemasaran dan pembangunan produk.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>k.</strong> Analisis Statistik: Kami mungkin menggunakan Data Peribadi anda untuk analisis statistik untuk lebih memahami arah aliran pasaran dan gelagat pelanggan, yang akan membantu dalam meningkatkan produk dan perkhidmatan kami.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>l.</strong> Penyediaan Makluman dan Bahan Pendidikan: Data Peribadi anda boleh digunakan untuk memberi anda pemakluman, surat berita dan bahan pendidikan, serta sebarang maklumat yang telah anda minta atau daftar untuk menerima.
                    </li>
                  </ul>

                  <h5>3. PENDEDAHAN DAN TUJUAN DATA PERIBADI</h5>
                  <p className="p-dasar-privasi">
                    Data peribadi yang diberi akan dirahsiakan dan direkod tetapi mungkin akan diberikan kepada pihak-pihak berikut dan digunakan untuk tujuan yang digariskan di bawah:
                  </p>
                  <ul>
                    <li className="li-dasar-privasi">
                      <strong>a. Kakitangan:</strong> Dikongsi dengan pekerja dan kakitangan kami yang memerlukan akses untuk melaksanakan kerja hakiki yang berkaitan dengan perkhidmatan kami.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>b. Ejen dan Penasihat:</strong> Didedahkan kepada ejen, kontraktor dan penasihat kami yang membantu dalam menyampaikan perkhidmatan kami, dengan syarat mereka terikat dengan obligasi kerahsiaan.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>c. Agensi Pelaporan Kredit:</strong> Dikongsi dengan agensi pelaporan kredit untuk menilai kelayakan kredit, menilai permohonan pinjaman dan mengekalkan rekod kredit yang tepat.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>d. Agensi Kutipan Hutang:</strong> Didedahkan kepada agensi kutipan hutang sekiranya terdapat hutang tertunggak untuk tujuan mengutip bayaran kepada kami.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>e. Obligasi Kerahsiaan:</strong> Dikongsi dengan individu atau entiti yang berada di bawah obligasi kerahsiaan untuk memastikan pengendalian maklumat yang bertanggungjawab.
                    </li>
                    <li className="li-dasar-privasi">
                      <strong>f. Keperluan Undang-undang dan Kawal Selia:</strong> Didedahkan kepada pihak yang berkaitan di bawah undang-undang dan peraturan yang berkenaan, dalam Malaysia dan antarabangsa, untuk memastikan kepatuhan.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowPrivacyModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Use Modal */}
      {showTermsModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title modal-title-custom-1">TERMA & SYARAT</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowTermsModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body term-of-use-modal">
                <p>
                  Terma dan syarat yang terkandung tertakluk kepada pemohon yang sah (bakal dirujuk sebagai <strong>“Pelanggan”</strong>) dan yang telah diberikan pembiayaan peribadi (bakal dirujuk sebagai <strong>“Perkhidmatan”</strong>) oleh Klien (bakal dirujuk sebagai <strong>“Pembiaya”</strong>). Segala produk dan perkhidmatan dari LoanBuddy adalah tertakluk kepada terma dan syarat yang berkenaan. Sila baca bersama-sama dengan mana-mana perjanjian khusus untuk transaksi dan perkhidmatan.
                  <br />
                  <br />
                  Terma dan Syarat yang dinyatakan di sini adalah sebagai tambahan kepada, dan bukan sebagai pengganti kepada atau pengurangan mana-mana terma dan syarat yang terikat kepada Pelanggan dari semasa ke semasa. LoanBuddy berhak untuk menukar maklumat dan kandungan di laman web ini pada bila-bila masa. Dengan meneruskan penggunaan laman web ini bermakna anda menerima perubahan-perubahan ini.
                </p>

                <h5>1. PERMOHONAN PERKHIDMATAN</h5>
                <ul>
                  <li className="li-terma-syarat">
                    <strong>a.</strong> Pelanggan boleh memohon Perkhidmatan melalui laman web LoanBuddy.
                  </li>
                  <li className="li-terma-syarat">
                    <strong>b.</strong> Apabila pemohonan dibuat oleh Pelanggan, Pembiaya kemudiannya akan menilai permohonan tersebut dan hendaklah menasihati Pelanggan jika permohon tersebut telah diluluskan.
                  </li>
                  <li className="li-terma-syarat">
                    <strong>c.</strong> Apabila permohonan Pelanggan diluluskan, Pembiaya hendaklah memaklumkan Pelanggan mengenai kelulusan tersebut, jumlah pembiayaan yang diluluskan untuk Perkhidmatan, dan jadual pembayaran Ansuran di bawah Perkhidmatan, melalui Platform Perkhidmatan Pembiaya (atau laman web Pembiaya, sebagai kes mungkin).
                  </li>
                  <li className="li-terma-syarat">
                    <strong>d.</strong> Pelanggan boleh menerima Perkhidmatan melalui Platform Perkhidmatan Pembiaya (atau laman web Pembiaya, mengikut mana-mana yang berkenaan) dengan menandatangani perjanjian pembiayaan dengan Pembiaya (“Perjanjian”).
                  </li>
                </ul>

                <h5>2. MEKANISME PEMBIAYAAN</h5>
                <p className="p-terma-syarat">
                  Pembiaya hendaklah bertanggungjawab sepenuhnya untuk runding dan muktamadkan Perjanjian Pembiayaaan dengan Pelanggan. Semua dokumen yang disediakan oleh LoanBuddy, termasuk tetapi tidak terhad kepada laporan, helaian perbandingan, atau mana-mana dokumen lain yang berkaitan dengan pembiayaan pinjaman peribadi, adalah untuk tujuan permakluman sahaja dan bukan nasihat kewangan.
                </p>

                <h5>3. PERWAKILAN DAN WARANTI</h5>
                <p className="p-terma-syarat">
                  Pelanggan mewakili dan menjamin kepada Pembiaya seperti yang berikut:-
                </p>
                <ul>
                  <li className="li-terma-syarat">
                    <strong>a.</strong> Pelanggan mengisytiharkan bahawa dia bukan bankrap yang belum dilepaskan atau tertakluk kepada prosiding kebankrapan;
                  </li>
                  <li className="li-terma-syarat">
                    <strong>b.</strong> bahawa Perjanjian Pembiayaan merupakan obligasi Pelanggan yang sah mengikut undang-undang dan terikat, dan dikuatkuasakan mengikut terma dan kewajipan Pelanggan berkenaan dengan pembayaran yang perlu dibayar oleh Pelanggan, dan perbelanjaan dan caj lain yang dilakukan tidak melanggar mana-mana perundangan atau peraturan yang terikat kepada Pelanggan;
                  </li>
                  <li className="li-terma-syarat">
                    <strong>c.</strong> bahawa pemberian Perkhidmatan kepada Pelanggan tidak akan melanggar atau melanggar mana-mana perundangan;
                  </li>
                  <li className="li-terma-syarat">
                    <strong>d.</strong> bahawa tiada perintah mahkamah atau agensi kerajaan lain atau mana-mana peruntukan perjanjian sedia ada yang mengikat Pelanggan atau yang tertakluk kepadanya yang akan dilanggar atau dilanggar oleh pelaksanaan, penyerahan dan pelaksanaan Perjanjian;
                  </li>
                  <li className="li-terma-syarat">
                    <strong>e.</strong> bahawa tiada pelanggaran mana-mana peruntukan perundangan, perintah mahkamah dan penghakiman telah dilakukan oleh Pelanggan;
                  </li>
                  <li className="li-terma-syarat">
                    <strong>f.</strong> bahawa semua maklumat penyata kewangan dan data lain yang diberikan oleh Pelanggan kepada Pembiaya adalah lengkap dan tepat;
                  </li>
                  <li className="li-terma-syarat">
                    <strong>g.</strong> bahawa Pelanggan telah mendedahkan sepenuhnya dan tepat, secara bertulis, kepada Pembiaya, semua fakta yang berkaitan dengan perniagaannya yang Pelanggan tahu atau patut semunasabahnya tahu dan yang penting untuk didedahkan kepada Pembiaya dalam konteks Perkhidmatan dan Perjanjian ini;
                  </li>
                  <li className="li-terma-syarat">
                    <strong>h.</strong> segala maklumat yang diberikan atau yang akan diberikan oleh Pelanggan berkaitan dengan Perjanjian ini tidak mengundang sebarang kenyataan yang tidak benar atau meninggalkan sebarang fakta dalam kenyataannya, berdasarkan keadaan di mana ia dibuat, dan semua ungkapan jangkaan, niat, kepercayaan dan pendapat serta semua unjuran yang terkandung dalamnya dibuat secara jujur atas alasan yang munasabah selepas pertanyaan yang sewajarnya telah diteliti oleh Pelanggan; dan
                  </li>
                  <li className="li-terma-syarat">
                    <strong>i.</strong> Pelanggan mempunyai kapasiti undang-undang untuk bertindak secara individu, tanpa mengira bahawa Pelanggan telah dilantik secara sah sebagai wakil perkongsian, syarikat atau entiti perniagaan, dan bahawa Pelanggan dianggap menjamin bahawa ia diberikuasa sewajarnya untuk bertindak bagi pihaknya sendiri atau sebagai wakil. Tindakan undang-undang akan diambil oleh Pembiaya sekiranya terdapat pelanggaran kewajipan ini.
                  </li>
                </ul>

                <h5>4. UMUM</h5>
                <p className="p-terma-syarat">
                  Pelanggan tidak mempunyai hak untuk menyerahkan atau memindahkan mana-mana hak, aku janji, perjanjian, kewajipan, liabiliti dan/atau obligasi yang termaktub dalam terma dan syarat ini.
                </p>

                <h5>5. PENDEDAHAN MAKLUMAT</h5>
                <ul>
                  <li className="li-terma-syarat">
                    <strong>a.</strong> Dengan ini, Pelanggan bersetuju bahawa semasa penerusan Perjanjian dan/atau selagi mana-mana wang yang perlu dibayar masih belum dijelaskan, Pembiaya berhak untuk mendedahkan maklumat mengenai Pelanggan dan Perkhidmatan (termasuk akaun Pelanggan dan/atau akaun baru Pelanggan) kepada berikut:
                    <ul>
                      <li className="li-terma-syarat">
                        <strong>i.</strong> agensi pelaporan kredit seperti yang ditakrifkan di bawah Akta Agensi Pelaporan Kredit 2010 (termasuk CTOS Data Systems Sdn. Bhd. (“CTOS”), Experian Information Services (Malaysia) Sdn. Bhd. (“Experian”) atau pihak berkuasa atau badan lain yang ditubuhkan oleh kerajaan atau pihak berkuasa lain yang mempunyai bidang kuasa ke atas Pembiaya; atau
                      </li>
                      <li className="li-terma-syarat">
                        <strong>ii.</strong> badan atau pihak berkuasa lain atau pihak yang dikatikan dengan Pembiaya; atau
                      </li>
                      <li className="li-terma-syarat">
                        <strong>iii.</strong> bakal penerima serah hak atau orang lain yang mewakili untuk membuat perjanjian kontrak dengan Pembiaya.
                      </li>
                    </ul>
                  </li>
                  <li className="li-terma-syarat">
                    <strong>b.</strong> Pelanggan dengan ini secara nyata dan tidak boleh ditarik balik persetujuannya dengan pendedahan tersebut dan dengan ini mengesahkan dan mengisytiharkan bahawa tiada persetujuan lanjut daripada Pelanggan diperlukan yang berkaitan dengannya.
                  </li>
                </ul>

                <h5>6. KETETAPAN</h5>
                <p className="p-terma-syarat">
                  Sebarang terma, syarat, ketetapan, peruntukan, perjanjian atau aku janji yang terkandung di sini yang menyalahi undang-undang, dilarang atau tidak boleh dikuatkuasakan dalam mana-mana bidang kuasa hendaklah, mengenai bidang kuasa tersebut, dihentikan setakat undang-undang, larangan atau yang tidak boleh dikuatkuasakan dalam mana-mana bidang kuasa tersebut, tanpa membatalkan atau menjadikan tidak sah, batal atau tidak boleh dikuatkuasakan mana-mana terma, syarat, ketetapan, peruntukan, perjanjian atau aku janji sedemikian dalam mana-mana bidang kuasa lain.
                </p>

                <h5>7. PERKHIDMATAN NOTIS DAN PROSES UNDANG-UNDANG</h5>
                <ul>
                  <li className="li-terma-syarat">
                    <strong>a.</strong> Setiap komunikasi yang akan dibuat di bawah Perjanjian perlu dilakukan secara bertulis, dan bagi Pembiaya, hendaklah dilakukan di bawah tanggungan mana-mana pengurus atau pegawai lain yang diberi kuasa Pembiaya atau peguam cara atau firma peguam cara yang bertindak untuk Pembiaya dan, melainkan telah dinyatakan sebaliknya, hendaklah dihantar melalui faks atau surat rasmi, ke alamat yang dinyatakan atau ke alamat lain yang mungkin dimaklumkan oleh pihak lain yang memberi notis.
                  </li>
                  <li className="li-terma-syarat">
                    <strong>b.</strong> Sebarang notis atau permintaan sedemikian hendaklah dianggap telah diberikan secukupnya, atau dibuat dan dianggap telah diterima (melainkan terdapat bukti yang bertentangan bahawa notis atau permintaan tersebut sebenarnya tidak diterima) oleh pihak yang menerimanya:
                    <ul>
                      <li className="li-terma-syarat">
                        <strong>i.</strong> dalam kes penghantaran peribadi, apabila dihantar sebelum 5.00 petang pada Hari Bekerja; atau;
                      </li>
                      <li className="li-terma-syarat">
                        <strong>ii.</strong> dalam kes penghantaran pos prabayar atau berdaftar, pada hari kedua Hari Bekerja selepas penghantaran dilakukan; atau;
                      </li>
                      <li className="li-terma-syarat">
                        <strong>iii.</strong> dalam kes teleks atau kabel, pada Hari Bekerja sejurus selepas penghantaran; atau;
                      </li>
                      <li className="li-terma-syarat">
                        <strong>iv.</strong> dalam kes faksimili, pada masa laporan penghantaran diterima oleh penghantar, yang mengesahkan bahawa penerima telah menerima faksimili tersebut; atau;
                      </li>
                      <li className="li-terma-syarat">
                        <strong>v.</strong> dalam kes surat elektronik, pada hari surat elektronik tersebut memasuki sistem maklumat Pelanggan, selagi Pembiaya belum menerima mesej yang gagal atau tidak dapat dihantar daripada pembekal hos pada hari penghantaran.
                      </li>
                    </ul>
                  </li>
                  <li className="li-terma-syarat">
                    <strong>c.</strong> Sekiranya berlaku perubahan dalam alamat Pelanggan, Pelanggan hendaklah secepat yang mungkin atau dalam apa jua keadaan sekurang-kurangnya tujuh (7) hari sebelum perubahan tersebut memberitahu Pembiaya secara bertulis tentang perubahan tersebut.
                  </li>
                  <li className="li-terma-syarat">
                    <strong>d.</strong> Tiada perubahan dalam alamat untuk perkhidmatan dalam apa jua cara sekalipun akan berkuatkuasa atau mengikat Pembiaya melainkan Pelanggan telah memberi Pembiaya, menurut perenggan (c), notis sebenar mengenai perubahan Alamat untuk Perkhidmatan dan tiada peruntukan yang diberikan di sini akan terjejas atau mengalami prejudis oleh sebarang perubahan Alamat untuk Perkhidmatan yang mana Pembiaya tidak mempunyai pengetahuan sebenar pada masa perbuatan atau perkara itu dilakukan atau dijalankan.
                  </li>
                  <li className="li-terma-syarat">
                    <strong>e.</strong> Sebarang notis atau komunikasi lain yang akan diberikan di bawah atau berkenaan dengan Perjanjian hendaklah dihantar, diberikan atau dihantar kepada penerima di alamat tersebut (atau alamat lain yang mungkin diberikan oleh penerima notis kepada pihak lain mengikut perenggan (c) dari semasa ke semasa) yang ditetapkan.
                  </li>
                  <li className="li-terma-syarat">
                    <strong>f.</strong> Pembiaya hendaklah mempunyai budi bicara mutlak sama ada untuk menerima, atau bergantung, atau bertindak ke atas mana-mana komunikasi yang diterima melalui telefon atau e-mel dan berhak untuk meminta pengesahan mana-mana komunikasi sedemikian melalui mana-mana kaedah yang difikirkan sesuai oleh Pembiaya.
                  </li>
                  <li className="li-terma-syarat">
                    <strong>g.</strong> Penyampaian mana-mana proses undang-undang boleh diberikan melalui pos berdaftar prabayar atau pos biasa yang dihantar kepada Pelanggan di alamat yang dinyatakan dan proses undang-undang tersebut hendaklah dianggap telah dilaksanakan dengan sewajarnya selepas tamat tempoh lima (5) hari dari tarikh ia diposkan dan tiada perubahan dalam alamat Pelanggan yang dinyatakan di sini walau apa jua pun yang dibawa akan berkuatkuasakan atau mengikat Pembiaya melainkan notis sebenar pertukaran alamat telah diberikan kepada Pembiaya.
                  </li>
                </ul>

                <h5>8. PENERBITAN TERMA DAN SYARAT INI DI LAMAN WEB LOANBUDDY</h5>
                <p className="p-terma-syarat">
                  Salinan Terma dan Syarat ini diterbitkan di laman web <a href="https://loanbuddy.com.my" target="_blank" rel="noreferrer">loanbuddy.com.my</a>. Sekiranya LoanBuddy menukar atau mengubah apa-apa terma dan syarat di sini, versi yang dipinda dan dikemaskini akan disiarkan di laman web tersebut.
                </p>

                <h5>9. PENAFIAN</h5>
                <p className="p-terma-syarat">
                  Segala bahan di laman web LoanBuddy adalah disediakan “seadanya”. LoanBuddy tidak menjamin ketepatan, kebergantungan, atau kesempurnaan maklumat dan tidak bertanggungjawab atas kesilapan atau gangguan dalam perkhidmatan. Maklumat di laman ini bukanlah tawaran untuk membeli, menjual atau memindahkan sebarang sekuriti atau perkhidmatan. Pelanggan bertanggungjawab untuk menilai perkhidmatan dan mendapatkan nasihat profesional seperti yang disarankan.
                </p>

                <h5>10. PAUTAN</h5>
                <p className="p-terma-syarat">
                  Pautan ke laman luar adalah untuk kemudahan sahaja. LoanBuddy tidak bertanggungjawab untuk kandungan pada laman yang dipautkan dan tidak mengendorsnya. Penggunaan pautan luar adalah atas risiko Pelanggan sendiri.
                </p>

                <h5>11. HAK CIPTA</h5>
                <p className="p-terma-syarat">
                  Kandungan di laman web ini dimiliki oleh LoanBuddy dan dilindungi oleh undang-undang hak cipta. Pelanggan tidak boleh menyalin, mengedar, atau mengubah suai sebarang kandungan tanpa kebenaran.
                </p>

                <h5>12. TANDA DAGANG</h5>
                <p className="p-terma-syarat">
                  Semua tanda dagang dan logo di laman web adalah milik LoanBuddy. Tiada hak diberikan untuk menggunakannya tanpa kebenaran terlebih dahulu.
                </p>

                <h5>13. PENGECUALIAN LIABILITI</h5>
                <p className="p-terma-syarat">
                  LoanBuddy tidak bertanggungjawab untuk sebarang kerugian atau kerosakan daripada menggunakan laman web ini atau pergantungan pada kandungannya.
                </p>

                <h5>14. INDEMNITI</h5>
                <p className="p-terma-syarat">
                  Pelanggan bersetuju untuk menanggung rugi LoanBuddy daripada sebarang tuntutan, kerugian atau perbelanjaan yang timbul daripada penggunaan laman web atau pelanggaran syarat ini oleh Pelanggan.
                </p>

                <h5>15. PENAMATAN</h5>
                <p className="p-terma-syarat">
                  LoanBuddy boleh menggantung atau menamatkan akses Pelanggan ke laman web pada bila-bila masa atas sebarang sebab, terutamanya pelanggaran terma dan syarat ini.
                </p>

                <h5>16. UNDANG-UNDANG DAN BIDANG KUASA</h5>
                <p className="p-terma-syarat">
                  Terma-terma ini dikawal oleh undang-undang Malaysia. Dengan menggunakan laman web ini, Pelanggan bersetuju dengan bidang kuasa mahkamah Malaysia untuk sebarang pertikaian.
                </p>

                <h5>17. KESELAMATAN PRIVASI</h5>
                <p className="p-terma-syarat">
                  LoanBuddy komited terhadap keselamatan maklumat anda. Sentiasa rahsiakan nama pengguna dan kata laluan anda. Berwaspada dengan e-mel dan panggilan telefon yang meminta maklumat peribadi. LoanBuddy tidak akan meminta maklumat sensitif melalui cara ini.
                </p>

                <div className="text-center">
                  <h5>PENERIMAAN dan PENGAKUAN</h5>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowTermsModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
