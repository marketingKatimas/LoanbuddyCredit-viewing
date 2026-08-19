"use client";

import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { RichText } from "@/components/RichText";
import { getMediaUrl } from "@/lib/media";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function DynamicBlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch(`/api/blog-posts?slug=${slug}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPost(data.doc);
        }
      })
      .catch((err) => {
        console.error("Error loading blog post:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  const defaultImageMap: Record<string, string> = {
    "penyatuan-hutang-kad-kredit-2026": "/assets/images/blog/tersepit-hutang-kad-kredit-ini-strategi-penyatuan-hutang-bijak.avif",
    "kesan-opr-pinjaman-peribadi": "/assets/images/blog/opr-2.75-2026-macam-mana-installment-pinjaman-peribadi-berubah.png",
    "pinjaman-peribadi-ccris-ptptn-2026": "/assets/images/blog/ccris-sangkut-ptptn-ini-cara-dapat-pinjaman-2026.avif",
    "beza-pinjaman-konvensional-islamik-2026": "/assets/images/blog/konvensional-vs-islamik-beza-pinjaman-peribadi-2026.avif",
  };

  const postImage = post?.featuredImage
    ? getMediaUrl(post.featuredImage)
    : defaultImageMap[slug] || "/assets/images/blog/tersepit-hutang-kad-kredit-ini-strategi-penyatuan-hutang-bijak.avif";

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
                {/* Breadcrumb / Back Link */}
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

                {loading ? (
                  <div className="bg-white p-5 rounded shadow-sm text-center">
                    <div className="spinner-border text-primary mb-3" role="status"></div>
                    <p className="text-muted">Memuatkan artikel...</p>
                  </div>
                ) : post ? (
                  <div className="blog_details_content bg-white p-4 p-md-5 rounded shadow-sm">
                    {/* Header Details */}
                    <div className="mb-4 text-center">
                      {post.category && (
                        <span className="badge bg-primary text-white mb-2 fs-6 px-3 py-2">
                          {post.category}
                        </span>
                      )}
                      <h1 className="display-6 fw-bold text-blue mb-3">
                        {post.title}
                      </h1>
                      <p className="text-muted small">
                        Tarikh Kemaskini: {post.publishedDate || "2026"} | Oleh {post.author || "Pasukan Kewangan Loanbuddy Credit"}
                      </p>
                    </div>

                    {/* Featured Image */}
                    {postImage && (
                      <div className="item_image mb-4 text-center">
                        <img
                          src={postImage}
                          className="img-fluid rounded"
                          alt={post.title}
                          style={{ maxHeight: "480px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    )}

                    {/* Article Body */}
                    <div className="article-body text-secondary leading-relaxed fs-6">
                      {post.content ? (
                        <RichText content={post.content} />
                      ) : post.summary ? (
                        <p>{post.summary}</p>
                      ) : null}

                      {/* CTA Box */}
                      <div className="article-cta-box mt-5">
                        <h4 className="cta-title">
                          {post.ctaBox?.heading || "Perlukan Pinjaman Peribadi?"}
                        </h4>
                        <p className="cta-desc">
                          {post.ctaBox?.description || "Dapatkan khidmat nasihat pinjaman peribadi daripada Loanbuddy Credit hari ini."}
                        </p>
                        <a
                          href={post.ctaBox?.buttonLink || "/mohon-pinjaman-online"}
                          className="article-cta-btn"
                        >
                          <span>{post.ctaBox?.buttonText || "Mohon Sekarang"}</span>
                          <span className="btn-icon">
                            <i className="fas fa-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white p-5 rounded shadow-sm text-center">
                    <i className="fas fa-exclamation-circle text-muted fs-1 mb-3"></i>
                    <h3 className="text-blue">Artikel Tidak Dijumpai</h3>
                    <p className="text-muted">Artikel yang anda cari tidak wujud atau telah dipadam.</p>
                    <Link href="/blog" className="btn btn-primary mt-2">
                      Lihat Semua Artikel
                    </Link>
                  </div>
                )}
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
