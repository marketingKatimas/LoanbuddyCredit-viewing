"use client";

import React from "react";

export default function ThankYouAwamPage() {
  return (
    <div className="bg-blue-thank-you text-white min-vh-100 d-flex flex-column justify-content-center align-items-center p-4">
      <div className="bg-white text-dark p-5 rounded-4 shadow-lg text-center max-w-lg" style={{ maxWidth: "600px" }}>
        <div className="mb-4">
          <i className="fas fa-check-circle text-success" style={{ fontSize: "4rem" }}></i>
        </div>
        <h2 className="text-primary fw-bold mb-3">Terima Kasih!</h2>
        <h5 className="mb-3 text-secondary">Permohonan Pinjaman Kakitangan Awam Anda Telah Diterima.</h5>
        <p className="text-muted mb-4">
          Pegawai khidmat pelanggan kami akan menghubungi anda melalui WhatsApp untuk pengesahan slip gaji dan penyemakan syarat kelayakan.
        </p>

        <div className="d-flex flex-column gap-2">
          <a
            href="https://wa.link/nlt1a4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg rounded-pill fw-bold"
          >
            <i className="fab fa-whatsapp me-2"></i> Hubungi Kami di WhatsApp
          </a>
          <a href="/" className="btn btn-outline-secondary rounded-pill mt-2">
            Kembali ke Laman Utama
          </a>
        </div>
      </div>
    </div>
  );
}
