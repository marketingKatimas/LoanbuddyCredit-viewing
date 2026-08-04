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
      <main className="page_content">
        <section
          className="page_banner section_contact_us_lg overflow-hidden decoration_wrap mouse_move"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col col-12">
                <h1 className="banner-mohon-big-title text-center justify-content-center">
                  Hubungi Kami
                </h1>
                <p className="banner_description banner-mohon-description text-center text-grey mt-80-30s">
                  Ada sebarang pertanyaan? Kongsikan mesej anda di sini dan kami akan membalas secepat mungkin untuk membantu anda!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="page_banner about_banner bg_blue section_space_lg overflow-hidden decoration_wrap mouse_move"
          style={{ backgroundImage: `url('/assets/images/banner/contact-us-banner.webp')` }}
        ></section>

        {/* Branches */}
        <section className="contact_section section_space_lg section_space_lg_contact bg_grey">
          <div className="container">
            <div className="row">
              {/* KL Branch */}
              <div className="col-contact col-12 col-md-4">
                <div className="contact-box bg_white">
                  <h2 className="heading_text heading-contact">
                    Cawangan <br /> Kuala Lumpur
                  </h2>
                  <p className="heading_description mb-0">
                    support@loanbuddy.com.my <br />
                    <br />
                    No.15-4, Jalan Medan Tuanku 1, Medan Tuanku, 50300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur <br />
                    <br />
                    0187856072 (WS)
                  </p>
                  <button className="btn btn_blue btn-contact b-block mt-20">
                    <a href="https://wa.link/taaakr" target="_blank" rel="noopener noreferrer">
                      <span>
                        <small>Whatsapp Kami</small>
                        <small>Whatsapp Kami</small>
                      </span>
                    </a>
                  </button>
                </div>
              </div>

              {/* Kota Samarahan Branch */}
              <div className="col-contact col-12 col-md-4">
                <div className="contact-box bg_white">
                  <h2 className="heading_text heading-contact">
                    Cawangan <br /> Kota Samarahan, Sarawak
                  </h2>
                  <p className="heading_description mb-0">
                    ks@loanbuddy.com.my <br />
                    <br />
                    1st Floor, Lot 9269 (SL.75) Bandar Riyal, Jalan Muara Tuang Kota Samarahan, 94300 Kuching, Sarawak <br />
                    <br />
                    0109329976 (WS)
                  </p>
                  <button className="btn btn_blue btn-contact b-block mt-20">
                    <a href="https://wa.link/32cpg5" target="_blank" rel="noopener noreferrer">
                      <span>
                        <small>Whatsapp Kami</small>
                        <small>Whatsapp Kami</small>
                      </span>
                    </a>
                  </button>
                </div>
              </div>

              {/* Bintulu Branch */}
              <div className="col-contact col-12 col-md-4">
                <div className="contact-box bg_white">
                  <h2 className="heading_text heading-contact">
                    Cawangan <br /> Bintulu, Sarawak
                  </h2>
                  <p className="heading_description mb-0">
                    bintulu@loanbuddy.com.my <br />
                    <br />
                    Lot 8093, Sublot 20, 1st Floor, Bintulu Sentral, Jln Kidurong, 97000 Bintulu, Sarawak <br />
                    <br />
                    0109098557 (WS)
                  </p>
                  <button className="btn btn_blue btn-contact b-block mt-20">
                    <a href="https://wa.link/6v806i" target="_blank" rel="noopener noreferrer">
                      <span>
                        <small>Whatsapp Kami</small>
                        <small>Whatsapp Kami</small>
                      </span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact_section contact-form-section bg_green">
          <div className="container">
            <div className="row align-content-centre">
              <div className="col col-lg-12">
                <div className="container decoration_wrap col-contact-form">
                  {submitted ? (
                    <div id="success-message" className="contact-success-message" style={{ display: "block" }}>
                      Thanks for contacting us! We will be in touch with you shortly.
                    </div>
                  ) : (
                    <form id="subscribeForm" onSubmit={handleSubmit}>
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
                                  Sila Pilih
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
