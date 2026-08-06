"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HubungiKamiPage() {


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "",
    message: "",
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

      <Header />

      {/* Main Content */}
      <main className="page_content bg_white" style={{ backgroundColor: "#fff" }}>
        {/* Branches and Map Section */}
        <section className="branches_map_section bg_white" style={{ paddingTop: "30px", paddingBottom: "60px" }}>
          <div className="container">
            <h1 className="text-center animate-fade-in-up delay-100" style={{ color: "#0d4ed8", fontSize: "30px", fontWeight: "700", marginBottom: "40px" }}>
              Hubungi Kami
            </h1>
            <div className="row d-flex align-items-center">
              {/* Left Column: Branches Details */}
              <div className="col col-12 col-lg-6 animate-slide-in-left delay-200">

                {/* Kuala Lumpur Branch */}
                <div className="branch_item mb-4 pb-4" style={{ borderBottom: "1px solid #ccc" }}>
                  <h3 className="text-center text-lg-start" style={{ color: "#0d4ed8", fontSize: "20px", fontWeight: "700", marginBottom: "15px" }}>
                    Cawangan Kuala Lumpur
                  </h3>
                  <div className="row align-items-center justify-content-center justify-content-lg-between g-3">
                    <div className="col-12 col-lg-7 d-flex justify-content-center justify-content-lg-start">
                      <div className="branch-details-block text-start">
                        <p className="mb-2 d-flex align-items-start gap-2" style={{ color: "#666", fontSize: "14px" }}>
                          <i className="fas fa-map-marker-alt" style={{ color: "#0d4ed8", marginTop: "4px", width: "16px", flexShrink: 0 }}></i>
                          <span>No.15-4, Jalan Medan Tuanku 1, Medan Tuanku, 50300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</span>
                        </p>
                        <p className="mb-0 d-flex align-items-center gap-2" style={{ color: "#666", fontSize: "14px" }}>
                          <i className="fas fa-envelope" style={{ color: "#0d4ed8", width: "16px", flexShrink: 0 }}></i>
                          <span>kl@loanbuddycredit.com.my</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5 text-center text-lg-end">
                      <a
                        href="https://wa.link/taaakr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center justify-content-start gap-3 whatsapp-btn-hover"
                        style={{
                          backgroundColor: "#25D366",
                          color: "#fff",
                          borderRadius: "30px",
                          padding: "10px 24px",
                          textDecoration: "none",
                          fontWeight: "600",
                          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                        }}
                      >
                        <img src="/assets/images/ws-logo.png" alt="WhatsApp" style={{ width: "30px", height: "30px", marginLeft: "auto" }} />
                        <div className="text-start" style={{ lineHeight: "1.2" }}>
                          <span style={{ fontSize: "0.75rem", display: "block" }}>WhatsApp Kami</span>
                          <span style={{ fontSize: "1rem" }}>+6018 785 6072</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Kuching Branch */}
                <div className="branch_item mb-4 pb-4" style={{ borderBottom: "1px solid #ccc" }}>
                  <h3 className="text-center text-lg-start" style={{ color: "#0d4ed8", fontSize: "20px", fontWeight: "700", marginBottom: "15px" }}>
                    Cawangan Kuching, Sarawak
                  </h3>
                  <div className="row align-items-center justify-content-center justify-content-lg-between g-3">
                    <div className="col-12 col-lg-7 d-flex justify-content-center justify-content-lg-start">
                      <div className="branch-details-block text-start">
                        <p className="mb-2 d-flex align-items-start gap-2" style={{ color: "#666", fontSize: "14px" }}>
                          <i className="fas fa-map-marker-alt" style={{ color: "#0d4ed8", marginTop: "4px", width: "16px", flexShrink: 0 }}></i>
                          <span>1st Floor, Lot 9269 (SL.75) Bandar Riyal, Jalan Muara Tuang Kota Samarahan, 94300 Kuching, Sarawak</span>
                        </p>
                        <p className="mb-0 d-flex align-items-center gap-2" style={{ color: "#666", fontSize: "14px" }}>
                          <i className="fas fa-envelope" style={{ color: "#0d4ed8", width: "16px", flexShrink: 0 }}></i>
                          <span>ks@loanbuddycredit.com.my</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5 text-center text-lg-end">
                      <a
                        href="https://wa.link/32cpg5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center justify-content-start gap-3 whatsapp-btn-hover"
                        style={{
                          backgroundColor: "#25D366",
                          color: "#fff",
                          borderRadius: "30px",
                          padding: "10px 24px",
                          textDecoration: "none",
                          fontWeight: "600",
                          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                        }}
                      >
                        <img src="/assets/images/ws-logo.png" alt="WhatsApp" style={{ width: "30px", height: "30px", marginLeft: "auto" }} />
                        <div className="text-start" style={{ lineHeight: "1.2" }}>
                          <span style={{ fontSize: "0.75rem", display: "block" }}>WhatsApp Kami</span>
                          <span style={{ fontSize: "1rem" }}>+6010 932 9976</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bintulu Branch */}
                <div className="branch_item mb-4">
                  <h3 className="text-center text-lg-start" style={{ color: "#0d4ed8", fontSize: "20px", fontWeight: "700", marginBottom: "15px" }}>
                    Cawangan Bintulu, Sarawak
                  </h3>
                  <div className="row align-items-center justify-content-center justify-content-lg-between g-3">
                    <div className="col-12 col-lg-7 d-flex justify-content-center justify-content-lg-start">
                      <div className="branch-details-block text-start">
                        <p className="mb-2 d-flex align-items-start gap-2" style={{ color: "#666", fontSize: "14px" }}>
                          <i className="fas fa-map-marker-alt" style={{ color: "#0d4ed8", marginTop: "4px", width: "16px", flexShrink: 0 }}></i>
                          <span>Lot 8093, Sublot 20, 1st Floor, Bintulu Sentral, Jln Kidurong, 97000 Bintulu, Sarawak</span>
                        </p>
                        <p className="mb-0 d-flex align-items-center gap-2" style={{ color: "#666", fontSize: "14px" }}>
                          <i className="fas fa-envelope" style={{ color: "#0d4ed8", width: "16px", flexShrink: 0 }}></i>
                          <span>bintulu@loanbuddycredit.com.my</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5 text-center text-lg-end">
                      <a
                        href="https://wa.link/6v806i"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center justify-content-start gap-3 whatsapp-btn-hover"
                        style={{
                          backgroundColor: "#25D366",
                          color: "#fff",
                          borderRadius: "30px",
                          padding: "10px 24px",
                          textDecoration: "none",
                          fontWeight: "600",
                          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                        }}
                      >
                        <img src="/assets/images/ws-logo.png" alt="WhatsApp" style={{ width: "30px", height: "30px", marginLeft: "auto" }} />
                        <div className="text-start" style={{ lineHeight: "1.2" }}>
                          <span style={{ fontSize: "0.75rem", display: "block" }}>WhatsApp Kami</span>
                          <span style={{ fontSize: "1rem" }}>+6010 909 8557</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Google Maps Interactive Embed */}
              <div className="col col-12 col-lg-6 mt-4 mt-lg-0 animate-slide-in-right delay-300">
                <div
                  style={{
                    overflow: "hidden",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    border: "1px solid #e2e8f0",
                    height: "450px",
                    width: "100%"
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/d/u/0/embed?mid=1u9eA-xFNCD0Ddtd3HYLSnCgvoWwOZgw"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Google My Maps - Cawangan Loanbuddy Credit"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Contact Form */}
        <section className="contact_section contact-form-section bg_green animate-fade-in-up delay-400">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col col-12 col-md-10 col-lg-8">
                <div className="container decoration_wrap col-contact-form">
                  {submitted ? (
                    <div id="success-message" className="contact-success-message" style={{ display: "block" }}>
                      Thanks for contacting us! We will be in touch with you shortly.
                    </div>
                  ) : (
                    <form id="subscribeForm" onSubmit={handleSubmit}>
                      <p className="text-center mb-4" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "500" }}>
                        Ada sebarang pertanyaan? Kongsikan mesej anda di sini <br />
                        dan kami akan membalas secepat mungkin untuk membantu anda!
                      </p>
                      <div className="row justify-content-center">
                        <div className="col w-100">
                          <div className="row">
                            <div className="col col-12 col-md-6">
                              <div className="form_item m-0">
                                <label htmlFor="name" className="input_title">
                                  Nama
                                </label>
                                <input
                                  id="name"
                                  type="text"
                                  name="name"
                                  placeholder="Nama"
                                  value={formData.name}
                                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                  required
                                />
                              </div>
                            </div>

                            <div className="col col-12 col-md-6">
                              <div className="form_item m-0">
                                <label htmlFor="phone" className="input_title">
                                  No. Telefon
                                </label>
                                <input
                                  id="phone"
                                  type="tel"
                                  name="phone"
                                  placeholder="0123456789"
                                  maxLength={12}
                                  value={formData.phone}
                                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                  required
                                />
                              </div>
                            </div>

                            <div className="col col-12 col-md-6">
                              <div className="form_item m-0">
                                <label htmlFor="email" className="input_title">
                                  Emel
                                </label>
                                <input
                                  id="email"
                                  type="email"
                                  name="email"
                                  placeholder="Emel"
                                  value={formData.email}
                                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                  required
                                />
                              </div>
                            </div>

                            <div className="col col-12 col-md-6">
                              <div className="form_item m-0">
                                <label htmlFor="branch" className="input_title">
                                  Sila Pilih Cawangan
                                </label>
                                <select
                                  className="formbold-form-input-option"
                                  name="branch"
                                  id="branch"
                                  value={formData.branch}
                                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
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

                            <div className="col col-12">
                              <div className="form_item">
                                <label htmlFor="message" className="input_title">
                                  Mesej Anda
                                </label>
                                <textarea
                                  id="message"
                                  name="message"
                                  placeholder="Mesej Anda"
                                  value={formData.message}
                                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                  required
                                ></textarea>
                              </div>
                              <div className="row col-contact-btn mt-20">
                                <button type="submit" className="btn btn_red col-contact-btn b-block">
                                  <span>
                                    <small>Kirim Mesej</small>
                                    <small>Kirim Mesej</small>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
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
