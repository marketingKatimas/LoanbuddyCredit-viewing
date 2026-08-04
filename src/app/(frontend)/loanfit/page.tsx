"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function LoanFitPage() {
  

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    salary: "",
    ccris: "",
    employment: "",
    loanAmount: "",
  });
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setCompleted(true);
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
                  LoanFit - Semakan Kelayakan Percuma
                </h1>
                <p className="banner_description banner-mohon-description text-center text-grey">
                  Ketahui skor kelayakan pinjaman anda dalam beberapa soalan mudah!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Loanfit Interactive Quiz */}
        <section className="section_space_lg bg_grey">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                  {completed ? (
                    <div className="text-center p-4">
                      <div className="mb-4">
                        <i className="fas fa-check-circle text-success display-1"></i>
                      </div>
                      <h3 className="text-blue mb-3" style={{ fontWeight: 700 }}>
                        Kelayakan Anda: TINGGI!
                      </h3>
                      <p className="text-secondary mb-4">
                        Berdasarkan maklumat jawapan anda, anda berpeluang tinggi untuk mendapatkan kelulusan pinjaman peribadi. Pegawai kami sedia membantu proses selanjutnya.
                      </p>
                      <a href="/mohon-pinjaman-online" className="btn btn-primary btn-lg rounded-pill px-5">
                        Mohon Pinjaman Sekarang
                      </a>
                    </div>
                  ) : (
                    <div>
                      <div className="progress mb-4" style={{ height: "10px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: `${(step / 4) * 100}%` }}
                        ></div>
                      </div>

                      {step === 1 && (
                        <div>
                          <h4 className="mb-3">1. Berapakah pendapatan kasar bulanan anda?</h4>
                          <div className="d-flex flex-column gap-2 mb-4">
                            {["Bawah RM1,700", "RM1,700 - RM3,000", "RM3,001 - RM5,000", "Lebih RM5,000"].map((opt) => (
                              <button
                                key={opt}
                                className={`btn text-start p-3 border ${
                                  answers.salary === opt ? "btn-primary text-white" : "btn-light"
                                }`}
                                onClick={() => setAnswers({ ...answers, salary: opt })}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div>
                          <h4 className="mb-3">2. Apakah status pekerjaan anda?</h4>
                          <div className="d-flex flex-column gap-2 mb-4">
                            {["Kakitangan Swasta", "Kakitangan Kerajaan / GLC", "Bekerja Sendiri", "Lain-lain"].map((opt) => (
                              <button
                                key={opt}
                                className={`btn text-start p-3 border ${
                                  answers.employment === opt ? "btn-primary text-white" : "btn-light"
                                }`}
                                onClick={() => setAnswers({ ...answers, employment: opt })}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div>
                          <h4 className="mb-3">3. Adakah anda mempunyai sebarang rekod tunggakan CCRIS/CTOS?</h4>
                          <div className="d-flex flex-column gap-2 mb-4">
                            {["Tiada Tunggakan (Bersih)", "Ada Tunggakan Kurang 2 Bulan", "Ada Tunggakan Lebih 2 Bulan", "Tidak Pasti"].map((opt) => (
                              <button
                                key={opt}
                                className={`btn text-start p-3 border ${
                                  answers.ccris === opt ? "btn-primary text-white" : "btn-light"
                                }`}
                                onClick={() => setAnswers({ ...answers, ccris: opt })}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {step === 4 && (
                        <div>
                          <h4 className="mb-3">4. Berapakah jumlah pinjaman yang anda inginkan?</h4>
                          <div className="d-flex flex-column gap-2 mb-4">
                            {["RM 1,000 - RM 5,000", "RM 5,001 - RM 15,000", "RM 15,001 - RM 30,000", "RM 30,000 - RM 50,000"].map((opt) => (
                              <button
                                key={opt}
                                className={`btn text-start p-3 border ${
                                  answers.loanAmount === opt ? "btn-primary text-white" : "btn-light"
                                }`}
                                onClick={() => setAnswers({ ...answers, loanAmount: opt })}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="d-flex justify-content-between">
                        {step > 1 && (
                          <button className="btn btn-outline-secondary rounded-pill px-4" onClick={() => setStep(step - 1)}>
                            Kembali
                          </button>
                        )}
                        <button className="btn btn-primary rounded-pill px-5 ms-auto" onClick={handleNext}>
                          {step === 4 ? "Lihat Keputusan" : "Seterusnya"}
                        </button>
                      </div>
                    </div>
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
