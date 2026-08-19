"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { RichText } from "@/components/RichText";
import { getMediaUrl } from "@/lib/media";

export default function PenyatuanHutangKadKreditPage() {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    fetch("/api/blog-posts?slug=penyatuan-hutang-kad-kredit-2026", { cache: "no-store" })
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
    : "/assets/images/blog/tersepit-hutang-kad-kredit-ini-strategi-penyatuan-hutang-bijak.avif";

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
                      {post?.category || "Penyatuan Hutang & Kewangan"}
                    </span>
                    <h1 className="display-6 fw-bold text-blue mb-3">
                      {post?.title || "Penyatuan Hutang"}
                    </h1>
                    <p className="text-muted small">
                      Tarikh Kemaskini: {post?.publishedDate || "2026"} | Oleh {post?.author || "Pasukan Kewangan Loanbuddy Credit"}
                    </p>
                  </div>

                  <div className="item_image mb-4 text-center">
                    <img
                      src={postImage}
                      className="img-fluid rounded"
                      alt={post?.title || "Penyatuan Hutang Kad Kredit"}
                      style={{ maxHeight: "480px", objectFit: "cover", width: "100%" }}
                    />
                  </div>

                  <div className="article-body text-secondary leading-relaxed fs-6">
                    {post?.content ? (
                      <RichText content={post.content} />
                    ) : (
                      <>
                        <p>
                          Adakah anda berasa sesak setiap kali menerima penyata kad kredit bulanan? Membayar bayaran minimum sahaja setiap bulan hanya akan memanjangkan tempoh hutang dan menambah beban kadar faedah yang tinggi (15% hingga 18% setahun).
                        </p>

                        <h3 className="text-blue mt-4 mb-3 fs-4">Apa Itu Penyatuan Hutang (Debt Consolidation)?</h3>
                        <p>
                          Penyatuan hutang merujuk kepada langkah menggabungkan beberapa tunggakan kad kredit atau pinjaman kecil menjadi satu pinjaman peribadi tunggal dengan kadar faedah yang lebih rendah dan jadual bayaran balik yang tetap.
                        </p>

                        <h3 className="text-blue mt-4 mb-3 fs-4">Kelebihan Utama Penyatuan Hutang</h3>
                        <ul>
                          <li><strong>Pengurangan Kadar Faedah:</strong> Menggantikan faedah kad kredit tinggi dengan kadar pinjaman peribadi yang lebih rendah.</li>
                          <li><strong>Pengurusan Mudah:</strong> Hanya 1 tarikh matang bayaran setiap bulan berbanding menguruskan pelbagai akaun.</li>
                          <li><strong>Skor Kredit Lebih Baik:</strong> Membantu membersihkan tunggakan kad kredit dan menambah baik rekod CCRIS secara berperingkat.</li>
                        </ul>
                      </>
                    )}

                    <div className="article-cta-box mt-5">
                      <h4 className="cta-title">
                        {post?.ctaBox?.heading || "Ingin Menyelesaikan Hutang Kad Kredit Anda?"}
                      </h4>
                      <p className="cta-desc">
                        {post?.ctaBox?.description || "Dapatkan khidmat nasihat pinjaman peribadi penyatuan hutang daripada Loanbuddy Credit hari ini."}
                      </p>
                      <a
                        href={post?.ctaBox?.buttonLink || "/mohon-pinjaman-online"}
                        className="article-cta-btn"
                      >
                        <span>{post?.ctaBox?.buttonText || "Mohon Penyatuan Hutang Sekarang"}</span>
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

