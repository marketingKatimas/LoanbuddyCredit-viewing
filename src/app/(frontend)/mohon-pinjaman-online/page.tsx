"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MohonPinjamanOnlinePage() {

  const [formData, setFormData] = useState({
    name: "",
    ic: "",
    phone: "",
    email: "",
    employment: "",
    salary: "",
    amount: "3000",
    branch: "kualaLumpur",
  });
  const [submitted, setSubmitted] = useState(false);



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
                  Permohonan Pinjaman Peribadi Online
                </h1>
                <p className="banner_description banner-mohon-description text-center text-grey">
                  Isikan maklumat anda dengan teliti untuk permohonan pinjaman yang pantas dan mudah.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="section_space_lg bg_grey">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                  {submitted ? (
                    <div className="alert alert-success text-center p-4">
                      <h4>Permohonan Berjaya Dihantar!</h4>
                      <p className="mb-3">
                        Terima kasih kerana memilih Loanbuddy Credit. Pegawai kami akan menghubungi anda melalui WhatsApp/Emel secepat mungkin.
                      </p>
                      <a href="/muat-naik-dokumen" className="btn btn-primary rounded-pill px-4">
                        Muat Naik Dokumen Sekarang
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h3 className="text-blue mb-4" style={{ fontWeight: 700 }}>
                        Borang Permohonan
                      </h3>

                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label font-weight-bold">Nama Penuh (Mengikut IC)</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nama Penuh"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label font-weight-bold">No. Kad Pengenalan</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="YYMMDD-SS-####"
                            value={formData.ic}
                            onChange={(e) => setFormData({ ...formData, ic: e.target.value })}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label font-weight-bold">No. Telefon (WhatsApp)</label>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="0123456789"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label font-weight-bold">Emel</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="nama@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label font-weight-bold">Sektor Pekerjaan</label>
                          <select
                            className="form-select"
                            value={formData.employment}
                            onChange={(e) => setFormData({ ...formData, employment: e.target.value })}
                            required
                          >
                            <option value="" disabled>Sila Pilih</option>
                            <option value="swasta">Sektor Swasta</option>
                            <option value="kerajaan">Sektor Kerajaan / GLC</option>
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label font-weight-bold">Gaji Kasar Bulanan (RM)</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="cth: 2500"
                            value={formData.salary}
                            onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label font-weight-bold">Amaun Pinjaman Dipohon (RM)</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="cth: 5000"
                            value={formData.amount}
                            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label font-weight-bold">Cawangan Berdekatan</label>
                          <select
                            className="form-select"
                            value={formData.branch}
                            onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                            required
                          >
                            <option value="kualaLumpur">Kuala Lumpur</option>
                            <option value="kotaSamarahan">Kota Samarahan (Kuching)</option>
                            <option value="bintulu">Bintulu</option>
                          </select>
                        </div>

                        <div className="col-12 mt-4">
                          <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill">
                            Hantar Permohonan Sekarang
                          </button>
                        </div>
                      </div>
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
