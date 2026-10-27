"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { PrivacyNoticeModal, TermsOfServiceModal } from "@/components/LegalModals";

export default function MuatNaikDokumenPage() {
  const { t, language } = useLanguage();
  const [pageData, setPageData] = useState<any>(null);

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
    fetch(`/api/content?slug=mohon-pinjaman-online&locale=${language}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPageData(data.doc);
        }
      })
      .catch(() => {});
  }, [language]);

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
      setMyKadSizeError(t.uploadDoc.fileSizeError);
      setMyKadFile(null);
      e.target.value = "";
    } else if (!allowedTypes.includes(file.type)) {
      setMyKadFormatError(t.uploadDoc.fileFormatError);
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
      setSupportDocSizeError(t.uploadDoc.fileSizeError);
      setSupportDocFile(null);
      e.target.value = "";
    } else if (!allowedTypes.includes(file.type)) {
      setSupportDocFormatError(t.uploadDoc.fileFormatError);
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
      setAppIdError(t.uploadDoc.appIdRequired);
      return;
    }

    if (!myKadFile && !supportDocFile) {
      setUploadFileError(t.uploadDoc.atLeastOneRequired);
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

  const bannerHeading = pageData?.hero?.heading || t.applyForm.bannerHeading;
  const bannerSubheading = pageData?.hero?.subheading || t.applyForm.bannerSubheading;
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
                <h1 className="banner-mohon-big-title text-center justify-content-center whitespace-pre-line">
                  {bannerHeading}
                </h1>
                <p className="banner-apply-header">
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
                className="course-card-mohon h-max upload-doc-card col-12 col-lg-7 d-flex flex-column justify-content-center animate-slide-in-left delay-300"
                style={{ borderRadius: "10px", width: "100%", maxWidth: "854px", paddingTop: "45px", paddingBottom: "45px" }}
              >
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
                          padding: "0 20px 25px 20px",
                          margin: "0 0 25px 0"
                        }}
                      >
                        <h3 style={{ margin: "0 0 15px 0" }}>{t.uploadDoc.formHeaderSuccess}</h3>
                        <p style={{ fontStyle: "italic", color: "#6c757d", margin: 0 }}>
                          {t.uploadDoc.formHeaderNote}
                        </p>
                      </div>

                      {uploadSuccess ? (
                        <div
                          id="success-upload-message"
                          style={{ display: "block", color: "#0468BF", border: "1px solid #0468BF", padding: "20px", borderRadius: "10px" }}
                        >
                          {t.uploadDoc.uploadSuccessTitle}
                          <br />
                          {t.uploadDoc.uploadSuccessDesc}
                        </div>
                      ) : (
                        <div className="upload-form-section" style={{ display: isSubmitting ? "none" : "block" }}>
                          <div className="form-row">
                            <div className="form-holder w-100">
                              <label htmlFor="applicationId">{t.uploadDoc.appIdLabel}</label>
                              <input
                                id="applicationId"
                                name="applicationId"
                                type="text"
                                placeholder={t.uploadDoc.appIdPlaceholder}
                                className="form-control"
                                value={applicationId}
                                onChange={(e) => setApplicationId(e.target.value)}
                                onBlur={(e) => setApplicationId(e.target.value.trim())}
                                required
                              />
                              {appIdError && <div className="error-message" style={{ color: "red" }}>{appIdError}</div>}
                              {invalidAppIdError && (
                                <div className="error-message" style={{ color: "red" }}>
                                  {t.uploadDoc.appIdInvalid}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="form-row form-row-column">
                            {/* MyKad Upload */}
                            <div className="form-holder form-holder-mobile">
                              <label htmlFor="upload-file-1">{t.uploadDoc.myKadLabel}</label>
                              <div className="upload-container">
                                <div className="file-name" id="file-name-1">
                                  {myKadFile ? myKadFile.name : ""}
                                </div>
                                <label className="tp-btn-3 upload-btn1" htmlFor="upload-file-1">
                                  {t.uploadDoc.uploadBtn}
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
                              <label htmlFor="upload-file-2">{t.uploadDoc.supportDocLabel}</label>
                              <div className="upload-container">
                                <div className="file-name" id="file-name-2">
                                  {supportDocFile ? supportDocFile.name : ""}
                                </div>
                                <label className="tp-btn-3 upload-btn1" htmlFor="upload-file-2">
                                  {t.uploadDoc.uploadBtn}
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
                                {t.applyForm.checkbox1}
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
                                {t.applyForm.checkbox2Prefix}
                                <a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacyModal(true); }}>
                                  {t.applyForm.checkbox2Privacy}
                                </a>{" "}
                                &{" "}
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
                                  name="mohon-agree-3"
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
                          <div className="button-row button-row-left d-flex align-items-center gap-3">
                            <button
                              type="submit"
                              className="btn border_red_reverse btn-mohon-short"
                              id="submitBtn"
                              disabled={isSubmitting}
                              style={{ height: "auto" }}
                            >
                              <span>
                                <small>{isSubmitting ? t.uploadDoc.submittingBtn : t.uploadDoc.submitBtn}</small>
                                <small>{isSubmitting ? t.uploadDoc.submittingBtn : t.uploadDoc.submitBtn}</small>
                              </span>
                            </button>
                            <button
                              type="button"
                              className="btn border_red_new btn-mohon-short"
                              onClick={skipUpload}
                              style={{ height: "auto" }}
                            >
                              <span>
                                <small>{t.uploadDoc.skipBtn}</small>
                                <small>{t.uploadDoc.skipBtn}</small>
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
                          {t.uploadDoc.uploadFailedMsg}
                        </div>
                      )}

                      {isSubmitting && (
                        <div id="processing-message" className="process-message" style={{ display: "block" }}>
                          {t.uploadDoc.processingMsg}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>

              {/* Sidebar Section */}
              <div
                className="course-card-mohon col-12 col-lg-5 d-flex flex-column justify-content-center sidebar-scaled-down animate-slide-in-right delay-400"
                style={{ borderRadius: "10px", width: "100%", maxWidth: "564px", minHeight: "784px" }}
              >
                <div style={{ margin: "auto 0", width: "100%" }}>
                  <div className="form-header text-center">
                    <h3 style={{ fontSize: "25px", margin: 0 }}>{sidebarTitle}</h3>
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
