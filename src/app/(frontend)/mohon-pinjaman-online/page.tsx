"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function MohonPinjamanOnlinePage() {
  const { t, isEnglish, language } = useLanguage();
  const [pageData, setPageData] = useState<any>(null);

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
    fetch(`/api/content?slug=mohon-pinjaman-online&locale=${language}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPageData(data.doc);
        }
      })
      .catch(() => { });
  }, [language]);

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
      sanitizedValue = value.replace(/[0-9]/g, "").slice(0, 100);
    } else if (name === "email") {
      sanitizedValue = value.slice(0, 100);
    } else if (["age", "phone", "amount", "salary", "netSalary"].includes(name)) {
      sanitizedValue = value.replace(/\D/g, "");
      if (name === "amount") {
        const numVal = parseInt(sanitizedValue, 10);
        if (!isNaN(numVal) && numVal > 50000) {
          sanitizedValue = "50000";
        }
      } else if (name === "age") {
        sanitizedValue = sanitizedValue.slice(0, 2);
      } else if (["salary", "netSalary"].includes(name)) {
        sanitizedValue = sanitizedValue.slice(0, 6);
      }
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
      setError(t.applyForm.valNameRequired);
      return;
    }

    const ageVal = parseInt(formData.age);
    if (isNaN(ageVal) || ageVal < 18 || ageVal > 60) {
      setError(t.applyForm.valAgeRange);
      return;
    }

    if (!formData.phone.trim()) {
      setError(t.applyForm.valPhoneRequired);
      return;
    }

    const phoneRegex = /^(01[0-9]{8,9}|0[3-9][0-9]{7,8}|601[0-9]{8,9}|60[3-9][0-9]{7,8})$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      setError(t.applyForm.valPhoneInvalid);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setError(t.applyForm.valEmailInvalid);
      return;
    }

    if (!formData.sector) {
      setError(t.applyForm.valSectorRequired);
      return;
    }

    const amountVal = parseFloat(formData.amount);
    if (isNaN(amountVal) || amountVal < 1000 || amountVal > 50000) {
      setError(t.applyForm.valAmountRange);
      return;
    }

    if (!formData.branch) {
      setError(t.applyForm.valBranchRequired);
      return;
    }

    if (!formData.salary.trim()) {
      setError(t.applyForm.valGrossSalaryRequired);
      return;
    }

    if (!formData.netSalary.trim()) {
      setError(t.applyForm.valNetSalaryRequired);
      return;
    }

    if (!agree1 || !agree2 || !agree3) {
      setError(t.applyForm.valAgreementsRequired);
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
      setError(t.applyForm.valSubmitFailed);
    } finally {
      setIsSubmitting(false);
    }
  };

  const bannerHeading = pageData?.hero?.heading || t.applyForm.bannerHeading;
  const bannerSubheading = pageData?.hero?.subheading || t.applyForm.bannerSubheading;
  const formTitle = pageData?.hero?.badgeText || t.applyForm.formTitle;
  const formSubtitle = pageData?.hero?.secondaryCtaText || t.applyForm.formSubtitle;
  const sidebarTitle = pageData?.sections?.[0]?.sectionTitle || t.applyForm.requirementsTitle;
  const docHeading = pageData?.sections?.[0]?.items?.[0]?.itemTitle || t.applyForm.docHeading;

  const docList =
    pageData?.sections?.[0]?.items?.[0]?.itemDescription
      ? pageData.sections[0].items[0].itemDescription
        .split("\n")
        .map((line: string) => line.trim())
        .filter(Boolean)
      : [
          t.applyForm.doc1,
          t.applyForm.doc2,
          t.applyForm.doc3,
          t.applyForm.doc4,
        ];

  const paymentHeading = pageData?.sections?.[0]?.items?.[1]?.itemTitle || t.applyForm.paymentHeading;
  const submitButtonText = pageData?.hero?.primaryCtaText || t.applyForm.submitButton;

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
                <h1 className="banner-mohon-big-title text-center justify-content-center animate-fade-in-up whitespace-pre-line">
                  {bannerHeading}
                </h1>
                <p className="banner-apply-header animate-fade-in-up delay-200">
                  {bannerSubheading}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Apply Form Section */}
        <section className="section-space-mohon-lg sec-relative bg-apply-1">
          <div className="container container-mohon">
            <div className="row row-mohon-1 col-12 z-index-10">
              <div
                className="course-card-mohon h-max col-12 col-lg-7 animate-slide-in-left delay-300 d-flex flex-column justify-content-between"
                style={{ borderRadius: "10px", width: "100%", maxWidth: "854px", minHeight: "913px", padding: "70px 45px" }}
              >
                {formStatus === "form-submit" || submitted ? (
                  <div id="success-message" className="success-message-1" style={{ display: "block", borderRadius: "10px" }}>
                    {t.applyForm.successSubmit}
                  </div>
                ) : formStatus === "form-with-upload" ? (
                  <div id="success-upload-message" className="success-upload-message-1" style={{ display: "block", borderRadius: "10px" }}>
                    {t.applyForm.successUpload}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} id="applyForm">
                    <div className="inner-mohon">
                      <div className="form-mohon-content pos-relative col-lg-12">
                        {/* Form Header */}
                        <div className="form-header text-center">
                          <h3 style={{ fontSize: "25px" }}>{formTitle}</h3>
                          <p style={{ fontSize: "16px" }}>{formSubtitle}</p>
                        </div>

                        {error && (
                          <div className="alert alert-danger" role="alert" style={{ fontSize: "14px" }}>
                            {error}
                          </div>
                        )}

                        {/* Name Input */}
                        <div className="form-row" style={{ marginTop: "45px" }}>
                          <div className="form-holder w-100">
                            <label htmlFor="name">{t.applyForm.fullNameLabel}</label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder={t.applyForm.fullNamePlaceholder}
                              maxLength={100}
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
                            <label htmlFor="age">{t.applyForm.ageLabel}</label>
                            <input
                              id="age"
                              name="age"
                              type="number"
                              placeholder={t.applyForm.agePlaceholder}
                              min="18"
                              max="60"
                              className="form-control"
                              value={formData.age}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-holder pos-relative">
                            <label htmlFor="phone">{t.applyForm.phoneLabel}</label>
                            <input
                              id="phone"
                              name="phone"
                              type="text"
                              placeholder={t.applyForm.phonePlaceholder}
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
                            <label htmlFor="email">{t.applyForm.emailLabel}</label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              placeholder={t.applyForm.emailPlaceholder}
                              maxLength={100}
                              className="form-control"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-holder pos-relative">
                            <label htmlFor="sector">{t.applyForm.sectorLabel}</label>
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
                                {t.applyForm.sectorPlaceholder}
                              </option>
                              <option value="Penjawat-Awam">{t.applyForm.sectorPenjawatAwam}</option>
                              <option value="Pekerja-GLC">{t.applyForm.sectorPekerjaGLC}</option>
                              <option value="Pekerja-Swasta">{t.applyForm.sectorPekerjaSwasta}</option>
                              <option value="Bekerja-Sendiri">{t.applyForm.sectorBekerjaSendiri}</option>
                              <option value="Freelance-Pekerja-Gig">{t.applyForm.sectorGig}</option>
                              <option value="Pelajar">{t.applyForm.sectorPelajar}</option>
                            </select>
                          </div>
                        </div>

                        {/* Amount & Branch Input */}
                        <div className="form-row form-row-reverse">
                          <div className="form-holder">
                            <label htmlFor="amount">{t.applyForm.loanAmountLabel}</label>
                            <input
                              id="amount"
                              name="amount"
                              type="number"
                              placeholder={t.applyForm.loanAmountPlaceholder}
                              min="1000"
                              max="50000"
                              className="form-control"
                              value={formData.amount}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-holder form-holder-mobile pos-relative">
                            <label htmlFor="branch">{t.applyForm.branchLabel}</label>
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
                                {t.applyForm.branchPlaceholder}
                              </option>
                              <option value="bintulu">{t.applyForm.branchBintulu}</option>
                              <option value="kotaSamarahan">{t.applyForm.branchKotaSamarahan}</option>
                              <option value="kualaLumpur">{t.applyForm.branchKualaLumpur}</option>
                            </select>
                          </div>
                        </div>

                        {/* Salary & Net Salary Input */}
                        <div className="form-row form-row-column">
                          <div className="form-holder">
                            <label htmlFor="salary">{t.applyForm.grossSalaryLabel}</label>
                            <input
                              id="salary"
                              name="salary"
                              type="number"
                              placeholder={t.applyForm.grossSalaryPlaceholder}
                              className="form-control"
                              min="0"
                              step="1"
                              value={formData.salary}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-holder">
                            <label htmlFor="netSalary">{t.applyForm.netSalaryLabel}</label>
                            <input
                              id="netSalary"
                              name="netSalary"
                              type="number"
                              placeholder={t.applyForm.netSalaryPlaceholder}
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
                              {t.applyForm.checkbox1}
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
                              {t.applyForm.checkbox2Prefix}
                              <a href="#" onClick={(e) => { e.preventDefault(); setShowTermsModal(true); }}>
                                {t.applyForm.checkbox2Privacy}
                              </a>
                              {t.applyForm.checkbox2And}
                              <a href="#" onClick={(e) => { e.preventDefault(); setShowTermsModal(true); }}>
                                {t.applyForm.checkbox2Terms}
                              </a>
                              {t.applyForm.checkbox2Suffix}
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
                                  backgroundColor: agree3 ? "#808080" : "white",
                                  borderColor: agree3 ? "#808080" : "#c1c5c9",
                                }}
                              />
                            </div>
                            <label htmlFor="mohon-agree-3" className="checkbox-text">
                              {t.applyForm.checkbox3}
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
                              <small>{isSubmitting ? t.applyForm.submittingButton : submitButtonText}</small>
                              <small>{isSubmitting ? t.applyForm.submittingButton : submitButtonText}</small>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>

              {/* Sidebar Content */}
              <div
                className="course-card-mohon col-12 col-lg-5 d-flex flex-column justify-content-center sidebar-scaled-down animate-slide-in-right delay-400"
                style={{ borderRadius: "10px", width: "100%", maxWidth: "564px", minHeight: "784px" }}
              >
                <div style={{ margin: "auto 0", width: "100%" }}>
                  <div className="form-header text-center">
                    <h3>{sidebarTitle}</h3>
                  </div>
                  <div className="mohon-rules-top">
                    <img src="/assets/images/dokumen-permohonan.png" alt="dokumen permohonan" className="mx-auto d-block" />
                  </div>
                  <div className="mohon-rules">
                    <h5>{docHeading}</h5>
                    <ul>
                      {docList.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <h5>{paymentHeading}</h5>
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

