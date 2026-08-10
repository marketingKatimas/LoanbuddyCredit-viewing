"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MohonPinjamanOnlinePage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    sector: "",
    amount: "",
    branch: "",
    salary: "",
    netSalary: "",
  });

  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);

  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [deviceType, setDeviceType] = useState("desktop");

  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  useEffect(() => {
    // Load Google reCAPTCHA v3 script dynamically
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=6LdmCn0nAAAAANC8dQDeC3bko97zlloPkuFcyP7_";
    script.async = true;
    document.body.appendChild(script);

    // Read query status param
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    if (status) {
      setFormStatus(status);
      const url = new URL(window.location.href);
      url.searchParams.delete("status");
      window.history.replaceState({}, document.title, url.pathname + url.search);
    }

    // Detect device type
    const width = window.innerWidth;
    const hasTouch = navigator.maxTouchPoints > 0;
    let detectedType = "desktop";
    if (width <= 768) {
      detectedType = "mobile";
    } else if (width <= 1024 && hasTouch) {
      detectedType = "tablet";
    }
    setDeviceType(detectedType);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    if (name === "name") {
      sanitizedValue = value.replace(/[0-9]/g, "");
    } else if (["age", "phone", "amount", "salary", "netSalary"].includes(name)) {
      sanitizedValue = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Form Validation
    if (!formData.name.trim()) {
      setError("Nama Penuh mengikut K.P. adalah diperlukan.");
      return;
    }

    const ageVal = parseInt(formData.age);
    if (isNaN(ageVal) || ageVal < 20 || ageVal > 60) {
      setError("Umur mestilah di antara 20 hingga 60 tahun.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Nombor telefon adalah diperlukan.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setError("Format emel tidak sah.");
      return;
    }

    if (!formData.sector) {
      setError("Sila pilih sektor pekerjaan.");
      return;
    }

    const amountVal = parseFloat(formData.amount);
    if (isNaN(amountVal) || amountVal < 1000 || amountVal > 50000) {
      setError("Jumlah pinjaman minimum ialah RM1,000 dan maksimum RM50,000.");
      return;
    }

    if (!formData.branch) {
      setError("Sila pilih cawangan.");
      return;
    }

    if (!formData.salary.trim()) {
      setError("Gaji Kasar adalah diperlukan.");
      return;
    }

    if (!formData.netSalary.trim()) {
      setError("Gaji Bersih adalah diperlukan.");
      return;
    }

    if (!agree1 || !agree2 || !agree3) {
      setError("Sila tandakan semua kotak persetujuan.");
      return;
    }

    setIsSubmitting(true);

    try {
      let token = "";
      if ((window as any).grecaptcha) {
        token = await new Promise<string>((resolve) => {
          (window as any).grecaptcha.ready(() => {
            (window as any).grecaptcha.execute("6LdmCn0nAAAAANC8dQDeC3bko97zlloPkuFcyP7_", { action: "submit" })
              .then((tokenVal: string) => {
                resolve(tokenVal);
              })
              .catch(() => {
                resolve("");
              });
          });
        });
      }

      // Prepare URL encoded form data
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append("token", token);
      urlEncodedData.append("name", formData.name);
      urlEncodedData.append("age", formData.age);
      urlEncodedData.append("phone", formData.phone);
      urlEncodedData.append("email", formData.email);
      urlEncodedData.append("sector", formData.sector);
      urlEncodedData.append("amount", formData.amount);
      urlEncodedData.append("branch", formData.branch);
      urlEncodedData.append("salary", formData.salary);
      urlEncodedData.append("netSalary", formData.netSalary);
      urlEncodedData.append("mohon-agree-1", "on");
      urlEncodedData.append("mohon-agree-2", "on");
      urlEncodedData.append("mohon-agree-3", "on");
      urlEncodedData.append("pageUrl", typeof window !== "undefined" ? window.location.href : "");
      urlEncodedData.append("deviceType", deviceType);

      /* =========================================================================
       * PRODUCTION REAL SERVER API (CURRENTLY DISCONNECTED FOR LOCAL TESTING)
       * =========================================================================
       * REAL API ENDPOINT: https://script.leadsync.com.my/applyform-upload-lbc
       * RECAPTCHA SITE KEY: 6LdmCn0nAAAAANC8dQDeC3bko97zlloPkuFcyP7_
       * 
       * TO RE-ENABLE PRODUCTION BEFORE DEPLOYING TO LIVE SERVER:
       * 1. Comment out the local fetch call to "/api/apply" below.
       * 2. Uncomment the LeadSync production fetch block below.
       * =========================================================================
       * 
       * PRODUCTION CODE (UNCOMMENT FOR PRODUCTION):
       * -------------------------------------------------------------------------
       * const response = await fetch("https://script.leadsync.com.my/applyform-upload-lbc", {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/x-www-form-urlencoded",
       *   },
       *   body: urlEncodedData.toString(),
       * });
       * =========================================================================
       */

      // LOCAL DEVELOPMENT ENDPOINT (Localhost / Local MongoDB Logging Handler)
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData.toString(),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.applicationId) {
          window.location.href = `/muat-naik-dokumen?uploadId=${data.applicationId}`;
        } else {
          setSubmitted(true);
        }
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error(err);
      setError("Penghantaran borang gagal, sila refresh dan cuba sekali lagi.");
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

      {/* Main Content */}
      <main className="page_content">
        {/* Banner Section */}
        <section
          className="page_banner"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')`, borderRadius: "10px", overflow: "hidden" }}
        >
          <div className="container container-apply-header">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col col-12">
                <h1 className="banner-mohon-big-title text-center justify-content-center animate-fade-in-up">
                  Pinjaman Peribadi Sehingga RM50,000
                  <br />
                  Mohon Hari ini!
                </h1>
                <p className="banner-apply-header animate-fade-in-up delay-200">
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
                {formStatus === "form-submit" || submitted ? (
                  <div id="success-message" className="success-message-1" style={{ display: "block", borderRadius: "10px" }}>
                    Terima kasih kerana menghantar permohonan anda! Kami akan menghubungi anda dalam masa terdekat.
                  </div>
                ) : formStatus === "form-with-upload" ? (
                  <div id="success-upload-message" className="success-upload-message-1" style={{ display: "block", borderRadius: "10px" }}>
                    Dokumen berjaya dimuat naik! Terima kasih dan kami akan menghubungi anda dalam masa terdekat.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} id="applyForm">
                    <div className="inner-mohon">
                      <div className="form-mohon-content pos-relative col-lg-12">
                        {/* Form Header */}
                        <div className="form-header text-center">
                          <h3>Selamat Datang ke Loanbuddy Credit!</h3>
                          <p>Permohonan pinjaman hanya terbuka untuk warganegara Malaysia sahaja.</p>
                        </div>

                        {error && (
                          <div className="alert alert-danger" role="alert" style={{ fontSize: "14px" }}>
                            {error}
                          </div>
                        )}

                        {/* Name Input */}
                        <div className="form-row">
                          <div className="form-holder w-100">
                            <label htmlFor="name">Nama Penuh mengikut K.P.</label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Nama Penuh"
                              className="form-control"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        {/* Age & Phone Input */}
                        <div className="form-row form-row-column">
                          <div className="form-holder form-holder-mobile">
                            <label htmlFor="age">Umur</label>
                            <input
                              id="age"
                              name="age"
                              type="number"
                              placeholder="Min. 20"
                              min="20"
                              max="60"
                              className="form-control"
                              value={formData.age}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-holder pos-relative">
                            <label htmlFor="phone">Nombor Telefon</label>
                            <input
                              id="phone"
                              name="phone"
                              type="text"
                              placeholder="0123456789"
                              maxLength={12}
                              className="form-control"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        {/* Email & Sector Input */}
                        <div className="form-row form-row-column">
                          <div className="form-holder form-holder-mobile">
                            <label htmlFor="email">Emel</label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="Emel"
                              className="form-control"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-holder pos-relative">
                            <label htmlFor="sector">Sila Pilih Sektor Pekerjaan</label>
                            <i className="zmdi zmdi-caret-down"></i>
                            <select
                              id="sector"
                              name="sector"
                              className="form-control form-control-dropdown"
                              value={formData.sector}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="" disabled>
                                Sektor Pekerjaan
                              </option>
                              <option value="Penjawat-Awam">Penjawat Awam</option>
                              <option value="Pekerja-GLC">Pekerja GLC</option>
                              <option value="Pekerja-Swasta">Pekerja Swasta</option>
                              <option value="Bekerja-Sendiri">Bekerja Sendiri</option>
                              <option value="Freelance-Pekerja-Gig">Freelance/Pekerja Gig</option>
                              <option value="Pelajar">Pelajar</option>
                            </select>
                          </div>
                        </div>

                        {/* Amount & Branch Input */}
                        <div className="form-row form-row-reverse">
                          <div className="form-holder">
                            <label htmlFor="amount">Jumlah Yang Ingin Dipinjam</label>
                            <input
                              id="amount"
                              name="amount"
                              type="number"
                              placeholder="Min. RM1000 - Max. RM50,000"
                              min="1000"
                              max="50000"
                              className="form-control"
                              value={formData.amount}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-holder form-holder-mobile pos-relative">
                            <label htmlFor="branch">Sila Pilih Cawangan</label>
                            <i className="zmdi zmdi-caret-down"></i>
                            <select
                              id="branch"
                              name="branch"
                              className="form-control form-control-dropdown"
                              value={formData.branch}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="" disabled>
                                Cawangan
                              </option>
                              <option value="bintulu">Bintulu</option>
                              <option value="kotaSamarahan">Kota Samarahan</option>
                              <option value="kualaLumpur">Kuala Lumpur</option>
                            </select>
                          </div>
                        </div>

                        {/* Salary & Net Salary Input */}
                        <div className="form-row form-row-column">
                          <div className="form-holder">
                            <label htmlFor="salary">Gaji Kasar</label>
                            <input
                              id="salary"
                              name="salary"
                              type="number"
                              placeholder="1700"
                              className="form-control"
                              min="0"
                              step="1"
                              value={formData.salary}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-holder">
                            <label htmlFor="netSalary">Gaji Bersih</label>
                            <input
                              id="netSalary"
                              name="netSalary"
                              type="number"
                              placeholder="1500"
                              className="form-control"
                              min="0"
                              step="1"
                              value={formData.netSalary}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        {/* Checkbox Rows */}
                        <div className="checkbox-row">
                          <div className="checkbox-holder">
                            <div className="checkbox-box">
                              <input
                                type="checkbox"
                                id="mohon-agree-1"
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
                        <div className="button-row button-row-left">
                          <button
                            type="submit"
                            className="btn border_red_reverse btn-mohon-short"
                            id="Submit"
                            disabled={isSubmitting}
                            style={{ height: "auto" }}
                          >
                            <span>
                              <small>{isSubmitting ? "Sedang menghantar..." : "Hantar"}</small>
                              <small>{isSubmitting ? "Sedang menghantar..." : "Hantar"}</small>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>

              {/* Sidebar Content */}
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
        <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }} tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title modal-title-custom-1">DASAR PRIVASI</h5>
                <button type="button" className="btn-close" onClick={() => setShowPrivacyModal(false)} aria-label="Close"></button>
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
                <button type="button" className="btn btn-secondary" onClick={() => setShowPrivacyModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Use Modal */}
      {showTermsModal && (
        <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }} tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title modal-title-custom-1">TERMA PENGGUNAAN</h5>
                <button type="button" className="btn-close" onClick={() => setShowTermsModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body term-of-use-modal">
                <p>
                  Terma dan syarat yang terkandung tertakluk kepada pemohon yang sah (bakal dirujuk sebagai <strong>“Pelanggan”</strong>) dan yang telah diberikan pembiayaan peribadi (bakal dirujuk sebagai <strong>“Perkhidmatan”</strong>) oleh Klien (bakal dirujuk sebagai <strong>“Pembiaya”</strong>). Segala produk dan perkhidmatan dari LoanBuddy adalah tertakluk kepada terma dan syarat yang berkenaan. Sila baca bersama-sama dengan mana-mana perjanjian khusus untuk transaksi dan perkhidmatan.
                  <br /><br />
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
                    <strong>d.</strong> Pelanggan boleh menerima Perkhidmatan melalui Platform Perkhidmatan Pembiaya (atau laman web Pembiaya, mengikut mana-mana yang berkatan) dengan menandatangani perjanjian pembiayaan dengan Pembiaya (“Perjanjian”).
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
                    <strong>h.</strong> segala maklumat yang diberikan atau yang akan diberikan oleh Pelanggan berkaitan dengan Perjanjian ini tidak mengundang sebarang kenyataan yang tidak benar atau meninggalkan sebarang fakta dalam kenyataannya, berdasarkan keadaan di mana ia dibuat, dan semua unjuran yang terkandung dalamnya dibuat secara jujur atas alasan yang munasabah selepas pertanyaan yang sewajarnya telah diteliti oleh Pelanggan; dan
                  </li>
                  <li className="li-terma-syarat">
                    <strong>i.</strong> Pelanggan mempunyai kapasitas undang-undang untuk bertindak secara individu, tanpa mengira bahawa Pelanggan telah dilantik secara sah sebagai wakil perkongsian, syarikat atau entiti perniagaan.
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowTermsModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

