"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MuatNaikDokumenPage() {
  

  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    ic: null,
    payslips: null,
    bankStatements: null,
    utilityBill: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFiles((prev) => ({ ...prev, [key]: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="page_content">
        <section
          className="page_banner faq_banner_main section_space_lg_about overflow-hidden decoration_wrap mouse_move"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col col-12">
                <h1 className="banner-mohon-big-title text-center justify-content-center">
                  Muat Naik Dokumen Permohonan
                </h1>
                <p className="banner_description banner-mohon-description text-center text-grey">
                  Sila muat naik dokumen berkaitan (PDF / Gambar) bagi membolehkan pegawai kami menyemak permohonan anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upload Form */}
        <section className="section_space_lg bg_grey">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                  {submitted ? (
                    <div className="alert alert-success text-center p-4">
                      <h4>Dokumen Berjaya Diterima!</h4>
                      <p className="mb-0">
                        Dokumen anda telah selamat diserahkan kepada pihak kami. Pegawai kredit kami akan menghubungi anda melalui WhatsApp untuk langkah seterusnya.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h3 className="text-blue mb-4" style={{ fontWeight: 700 }}>
                        Lampiran Dokumen
                      </h3>

                      <div className="mb-4">
                        <label className="form-label font-weight-bold">Salinan Kad Pengenalan (Depan & Belakang)</label>
                        <input
                          type="file"
                          className="form-control"
                          accept="image/*,application/pdf"
                          onChange={(e) => handleFileChange("ic", e)}
                          required
                        />
                        {files.ic && <small className="text-success mt-1 d-block">Terpilih: {files.ic.name}</small>}
                      </div>

                      <div className="mb-4">
                        <label className="form-label font-weight-bold">Slip Gaji 3 Bulan Terkini (PDF / Gambar)</label>
                        <input
                          type="file"
                          className="form-control"
                          accept="image/*,application/pdf"
                          onChange={(e) => handleFileChange("payslips", e)}
                          required
                        />
                        {files.payslips && <small className="text-success mt-1 d-block">Terpilih: {files.payslips.name}</small>}
                      </div>

                      <div className="mb-4">
                        <label className="form-label font-weight-bold">Penyata Bank Pengkreditan Gaji 3 Bulan Terkini</label>
                        <input
                          type="file"
                          className="form-control"
                          accept="image/*,application/pdf"
                          onChange={(e) => handleFileChange("bankStatements", e)}
                          required
                        />
                        {files.bankStatements && <small className="text-success mt-1 d-block">Terpilih: {files.bankStatements.name}</small>}
                      </div>

                      <div className="mb-4">
                        <label className="form-label font-weight-bold">Bil Utiliti Terkini (Air / Elektrik)</label>
                        <input
                          type="file"
                          className="form-control"
                          accept="image/*,application/pdf"
                          onChange={(e) => handleFileChange("utilityBill", e)}
                        />
                        {files.utilityBill && <small className="text-success mt-1 d-block">Terpilih: {files.utilityBill.name}</small>}
                      </div>

                      <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill mt-3">
                        Hantar Dokumen
                      </button>
                    </form>
                  )}
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
