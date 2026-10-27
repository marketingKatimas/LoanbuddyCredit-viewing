"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { PrivacyNoticeModal, TermsOfServiceModal } from "@/components/LegalModals";

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

    // Branch WhatsApp phone numbers mapping
    const getBranchPhone = (branch: string): string => {
      const normalized = (branch || "").toLowerCase().trim();
      if (normalized.includes("kuala") || normalized.includes("kl")) {
        return "60187856072";
      }
      if (normalized.includes("samarahan") || normalized.includes("kuching")) {
        return "60109329976";
      }
      if (normalized.includes("bintulu")) {
        return "60109098557";
      }
      return "60187856072";
    };

    const getBranchLabel = (branch: string): string => {
      const normalized = (branch || "").toLowerCase().trim();
      if (normalized.includes("kuala") || normalized.includes("kl")) {
        return "Kuala Lumpur";
      }
      if (normalized.includes("samarahan") || normalized.includes("kuching")) {
        return "Kota Samarahan";
      }
      if (normalized.includes("bintulu")) {
        return "Bintulu";
      }
      return branch;
    };

    const getSectorLabel = (sector: string): string => {
      switch (sector) {
        case "Penjawat-Awam":
          return "Penjawat Awam";
        case "Pekerja-GLC":
          return "Pekerja GLC";
        case "Pekerja-Swasta":
          return "Pekerja Swasta";
        case "Bekerja-Sendiri":
          return "Bekerja Sendiri";
        case "Freelance-Pekerja-Gig":
          return "Freelance / Pekerja Gig";
        case "Pelajar":
          return "Pelajar";
        default:
          return sector;
      }
    };

    const branchPhone = getBranchPhone(formData.branch);
    const branchLabel = getBranchLabel(formData.branch);
    const sectorLabel = getSectorLabel(formData.sector);

    const whatsappMessage = `Hi, I would like to apply for Loanbuddy Credit loan. Loan Amount: RM${formData.amount} Name: ${formData.name} Phone: ${formData.phone} Age: ${formData.age} Email: ${formData.email} Gross Salary: RM${formData.salary} Net Salary: RM${formData.netSalary} Employment Sector: ${sectorLabel} Branch: ${branchLabel}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${branchPhone}&text=${encodeURIComponent(whatsappMessage)}`;

    // Open a new tab immediately within user action to avoid browser popup blockers
    let whatsappWindow: Window | null = null;
    if (typeof window !== "undefined") {
      whatsappWindow = window.open("", "_blank");
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

        // Redirect the opened tab to WhatsApp with pre-filled message
        if (whatsappWindow) {
          whatsappWindow.location.href = whatsappUrl;
        } else if (typeof window !== "undefined") {
          window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        }

        if (data.applicationId) {
          window.location.href = `/muat-naik-dokumen?uploadId=${data.applicationId}`;
        } else {
          setSubmitted(true);
        }
      } else {
        if (whatsappWindow) {
          whatsappWindow.close();
        }
        throw new Error("Submission failed");
      }
    } catch (err) {
      if (whatsappWindow) {
        whatsappWindow.close();
      }
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
                              <option value="kuching">{t.applyForm.branchKotaSamarahan}</option>
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
                              <a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacyModal(true); }}>
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

      {showPrivacyModal && <PrivacyNoticeModal onClose={() => setShowPrivacyModal(false)} />}
      {showTermsModal && <TermsOfServiceModal onClose={() => setShowTermsModal(false)} />}
    </div>
  );
}

