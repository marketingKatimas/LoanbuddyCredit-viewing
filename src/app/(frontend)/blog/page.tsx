"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMediaUrl } from "@/lib/media";

const defaultArticles = [
  {
    title: "Penyatuan Hutang",
    slug: "penyatuan-hutang-kad-kredit-2026",
    image: "/assets/images/blog/tersepit-hutang-kad-kredit-ini-strategi-penyatuan-hutang-bijak.avif",
    category: "kewangan",
    tag: "Artikel Terbaru!",
  },
  {
    title: "Jenis-Jenis Pinjaman di Malaysia",
    slug: "kesan-opr-pinjaman-peribadi",
    image: "/assets/images/blog/opr-2.75-2026-macam-mana-installment-pinjaman-peribadi-berubah.png",
    category: "kewangan",
    tag: "Artikel Terbaru!",
  },
  {
    title: "Kurangkan Beban Kewangan Anda dengan Penyatuan Hutang di Loanbuddy Credit",
    slug: "pinjaman-peribadi-ccris-ptptn-2026",
    image: "/assets/images/blog/ccris-sangkut-ptptn-ini-cara-dapat-pinjaman-2026.avif",
    category: "kewangan",
    tag: "Artikel Terbaru!",
  },
  {
    title: "Konvensional vs Islamik: Beza Pinjaman Peribadi Malaysia 2026",
    slug: "beza-pinjaman-konvensional-islamik-2026",
    image: "/assets/images/blog/konvensional-vs-islamik-beza-pinjaman-peribadi-2026.avif",
    category: "umum",
    tag: "Artikel Terbaru!",
  },
];

export default function BlogListingPage() {
  const [pageData, setPageData] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch Blog Page Header Settings
    fetch("/api/content?slug=blog", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPageData(data.doc);
        }
      })
      .catch(() => {});

    // Fetch All Published Blog Posts
    fetch("/api/blog-posts", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.docs) && data.docs.length > 0) {
          setPosts(data.docs);
        }
      })
      .catch(() => {});
  }, []);

  const defaultImageMap: Record<string, string> = {
    "penyatuan-hutang-kad-kredit-2026": "/assets/images/blog/tersepit-hutang-kad-kredit-ini-strategi-penyatuan-hutang-bijak.avif",
    "kesan-opr-pinjaman-peribadi": "/assets/images/blog/opr-2.75-2026-macam-mana-installment-pinjaman-peribadi-berubah.png",
    "pinjaman-peribadi-ccris-ptptn-2026": "/assets/images/blog/ccris-sangkut-ptptn-ini-cara-dapat-pinjaman-2026.avif",
    "beza-pinjaman-konvensional-islamik-2026": "/assets/images/blog/konvensional-vs-islamik-beza-pinjaman-peribadi-2026.avif",
  };

  const articlesList =
    posts.length > 0
      ? posts.map((item: any) => {
          const postSlug = item.slug || "blog";
          const fallbackImg =
            defaultImageMap[postSlug] ||
            "/assets/images/blog/tersepit-hutang-kad-kredit-ini-strategi-penyatuan-hutang-bijak.avif";

          return {
            title: item.title || "",
            slug: `/blog/${postSlug}`,
            image: getMediaUrl(item.featuredImage, fallbackImg),
            category: item.category || "kewangan",
            tag: item.tag || "Artikel Terbaru!",
          };
        })
      : defaultArticles.map((art) => ({
          ...art,
          slug: `/blog/${art.slug}`,
        }));

  const pageHeading = pageData?.hero?.heading || "Blog";

  const filteredArticles = articlesList.filter((art: any) =>
    art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    art.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    art.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <section className="blog_section section_space_lg header_blog">
          <div className="container">
            <div className="row align-items-center mb-4">
              <div className="col-lg-6 col-mobile mb-3 mb-lg-0">
                <h1 className="blog-h1-text">{pageHeading}</h1>
              </div>
              <div className="col-lg-6 col-mobile">
                <div className="widget-search-blog">
                  <i className="fas fa-search search-icon" aria-hidden="true"></i>
                  <input
                    id="blogSearch"
                    placeholder="Cari artikel blog..."
                    className="search-blog-field"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Cari artikel blog"
                  />
                  {searchTerm && (
                    <button
                      className="search-clear-btn"
                      type="button"
                      onClick={() => setSearchTerm("")}
                      title="Padam carian"
                      aria-label="Padam carian"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                  <button className="search-blog-button" type="button" aria-label="Cari">
                    <span>Cari</span>
                  </button>
                </div>
                {searchTerm && (
                  <div className="blog-search-count">
                    Menunjukkan <strong>{filteredArticles.length}</strong> daripada {articlesList.length} artikel
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col col-mobile col-lg-12">
                <div id="blogList">
                  {filteredArticles.length > 0 ? (
                    <div className="row" id="Container">
                      {filteredArticles.map((article: any, idx: number) => (
                        <div key={idx} className="col col-lg-6 blogPost mix ui kewangan mb-4">
                          <div className="blog_item bg-white p-3" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                            <div className="item_image mb-2">
                              <a href={article.slug}>
                                <img src={article.image} alt={article.title} className="img-fluid rounded" />
                              </a>
                            </div>
                            <div className="mb-2">
                              <ul className="meta_info_list unordered_list mb-2">
                                <li>
                                  <i className="fas fa-thumbtack"></i>
                                  <span>{article.tag}</span>
                                </li>
                              </ul>
                              <h3 className="item_title mb-0">
                                <a href={article.slug} style={{ fontSize: "18px", lineHeight: "22px" }}>{article.title}</a>
                              </h3>
                            </div>
                            <div className="item_content p-0 mt-3 mt-auto">
                              <a href={article.slug} style={{ color: "red", fontWeight: "bold", textDecoration: "none" }}>
                                Baca Artikel
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="blog-empty-state">
                      <i className="fas fa-search"></i>
                      <h4>Tiada artikel dijumpai</h4>
                      <p>Tiada artikel yang sepadan dengan carian <strong>&ldquo;{searchTerm}&rdquo;</strong>.</p>
                      <button
                        type="button"
                        className="btn-reset"
                        onClick={() => setSearchTerm("")}
                      >
                        Lihat Semua Artikel
                      </button>
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
