"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { RichText } from "@/components/RichText";
import { getMediaUrl } from "@/lib/media";

export default function CCRISPTPTNArticlePage() {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    fetch("/api/blog-posts?slug=pinjaman-peribadi-ccris-ptptn-2026", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPost(data.doc);
        }
      })
      .catch(() => {});
  }, []);

  const postImage = post?.featuredImage
    ? getMediaUrl(post.featuredImage)
    : "/assets/images/blog/ccris-sangkut-ptptn-ini-cara-dapat-pinjaman-2026.avif";

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

      {/* Main Body */}
      <main className="page_content">
        <section className="blog_details_section section_space_lg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="mb-3">
                  <Link
                    href="/blog"
                    className="text-muted small d-inline-flex align-items-center text-decoration-none hover-primary"
                    style={{ gap: "6px" }}
                  >
                    <i className="fas fa-arrow-left"></i>
                    <span>Kembali ke Senarai Blog</span>
                  </Link>
                </div>

                <div className="blog_details_content bg-white p-4 p-md-5 rounded shadow-sm">
                  <div className="mb-4 text-center">
                    <span className="badge bg-primary text-white mb-2 fs-6 px-3 py-2">
                      {post?.category || "Panduan CCRIS & PTPTN"}
                    </span>
                    <h1 className="display-6 fw-bold text-blue mb-3">
                      {post?.title || "Kurangkan Beban Kewangan Anda dengan Penyatuan Hutang di Loanbuddy Credit"}
                    </h1>
                    <p className="text-muted small">
                      Tarikh Kemaskini: {post?.publishedDate || "2026"} | Oleh {post?.author || "Pasukan Kewangan Loanbuddy Credit"}
                    </p>
                  </div>

                  <div className="item_image mb-4 text-center">
                    <img
                      src={postImage}
                      className="img-fluid rounded"
                      alt={post?.title || "CCRIS PTPTN Pinjaman"}
                      style={{ maxHeight: "480px", objectFit: "cover", width: "100%" }}
                    />
                  </div>

                  <div className="article-body text-secondary leading-relaxed fs-6">
                    {post?.content ? (
                      <RichText content={post.content} />
                    ) : (
                      <>
                        <p>
                          Banyak pemohon pinjaman di Malaysia mendapati permohonan pinjaman peribadi mereka ditolak oleh bank disebabkan tunggakan bayaran PTPTN yang muncul dalam laporan CCRIS.
                        </p>

                        <h3 className="text-blue mt-4 mb-3 fs-4">Adakah Rekod PTPTN Menjejaskan Pinjaman Peribadi?</h3>
                        <p>
                          Ya, bank komersial biasanya menyemak nisbah tunggakan kredit dalam laporan CCRIS. Walau bagaimanapun, pemberi pinjaman berlesen KPKT seperti Loanbuddy Credit mempunyai kriteria penilaian yang lebih fleksibel mengikut tahap pendapatan semasa anda.
                        </p>

                        <h3 className="text-blue mt-4 mb-3 fs-4">Langkah-Langkah Mendapatkan Kelulusan Pinjaman</h3>
                        <ol>
                          <li><strong>Semak Kelayakan Semasa:</strong> Pastikan anda mempunyai slip gaji 3 bulan terkini dan rekod pengkreditan gaji di bank.</li>
                          <li><strong>Strukturkan Semula Tunggakan:</strong> Berhubung dengan PTPTN untuk jadual bayaran semula.</li>
                          <li><strong>Mohon Bersama Syarikat Berlesen KPKT:</strong> Dapatkan pinjaman peribadi yang meluluskan pemohon secara fleksibel.</li>
                        </ol>
                      </>
                    )}

                    <div className="article-cta-box mt-5">
                      <h4 className="cta-title">
                        {post?.ctaBox?.heading || "Pernah Ditolak Oleh Bank?"}
                      </h4>
                      <p className="cta-desc">
                        {post?.ctaBox?.description || "Loanbuddy Credit sedia membantu permohonan pinjaman peribadi anda tanpa kerumitan."}
                      </p>
                      <a
                        href={post?.ctaBox?.buttonLink || "/mohon-pinjaman-online"}
                        className="article-cta-btn"
                      >
                        <span>{post?.ctaBox?.buttonText || "Mohon Pinjaman Sekarang"}</span>
                        <span className="btn-icon">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </a>
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
    </div>
  );
}

