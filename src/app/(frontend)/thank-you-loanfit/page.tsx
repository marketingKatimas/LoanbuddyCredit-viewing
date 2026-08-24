"use client";

import React from "react";

export default function ThankYouLoanFitPage() {
  return (
    <div className="bg-blue-thank-you text-white min-vh-100 d-flex flex-column justify-content-center align-items-center p-4">
      <div className="bg-white text-dark p-5 rounded-4 shadow-lg text-center max-w-lg" style={{ maxWidth: "600px" }}>
        <div className="mb-4">
          <i className="fas fa-chart-line text-success" style={{ fontSize: "4rem" }}></i>
        </div>
        <h2 className="text-primary fw-bold mb-3">Keputusan Semakan LoanFit</h2>
        <h5 className="mb-3 text-secondary">Terima Kasih Kerana Melakukan Semakan Kelayakan!</h5>
        <p className="text-muted mb-4">
          Keputusan analisis kelayakan anda sedia diproses. Klik butang di bawah untuk berhubung terus dengan penasihat pinjaman kami.
        </p>

        <div className="d-flex flex-column gap-2">
          <a
            href="https://wa.link/nlt1a4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg rounded-pill fw-bold"
          >
            <i className="fab fa-whatsapp me-2"></i> Dapatkan Penilaian di WhatsApp
          </a>
          <a href="/mohon-pinjaman-online" className="btn btn-primary rounded-pill mt-2">
            Mohon Pinjaman Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
