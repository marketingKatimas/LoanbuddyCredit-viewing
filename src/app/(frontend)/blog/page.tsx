"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMediaUrl } from "@/lib/media";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogListingPage() {
  const { t, isEnglish, language } = useLanguage();
  const [pageData, setPageData] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const defaultArticles = [
    {
      title: isEnglish ? t.blog.art1Title : "Penyatuan Hutang",
      slug: "penyatuan-hutang-kad-kredit-2026",
      image: "/assets/images/blog/tersepit-hutang-kad-kredit-ini-strategi-penyatuan-hutang-bijak.avif",
      category: "kewangan",
      tag: isEnglish ? t.blog.latestTag : "Artikel Terbaru!",
    },
    {
      title: isEnglish ? t.blog.art2Title : "Jenis-Jenis Pinjaman di Malaysia",
      slug: "kesan-opr-pinjaman-peribadi",
      image: "/assets/images/blog/opr-2.75-2026-macam-mana-installment-pinjaman-peribadi-berubah.png",
      category: "kewangan",
      tag: isEnglish ? t.blog.latestTag : "Artikel Terbaru!",
    },
    {
      title: isEnglish
        ? t.blog.art3Title
        : "Kurangkan Beban Kewangan Anda dengan Penyatuan Hutang di Loanbuddy Credit",
      slug: "pinjaman-peribadi-ccris-ptptn-2026",
      image: "/assets/images/blog/ccris-sangkut-ptptn-ini-cara-dapat-pinjaman-2026.avif",
      category: "kewangan",
      tag: isEnglish ? t.blog.latestTag : "Artikel Terbaru!",
    },
    {
      title: isEnglish
        ? t.blog.art4Title
        : "Konvensional vs Islamik: Beza Pinjaman Peribadi Malaysia 2026",
      slug: "beza-pinjaman-konvensional-islamik-2026",
      image: "/assets/images/blog/konvensional-vs-islamik-beza-pinjaman-peribadi-2026.avif",
      category: "umum",
      tag: isEnglish ? t.blog.latestTag : "Artikel Terbaru!",
    },
  ];

  useEffect(() => {
    // Fetch Blog Page Header Settings
    fetch(`/api/content?slug=blog&locale=${language}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPageData(data.doc);
        }
      })
      .catch(() => { });

    // Fetch All Published Blog Posts with active locale
    fetch(`/api/blog-posts?locale=${language}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.docs) && data.docs.length > 0) {
          setPosts(data.docs);
        }
      })
      .catch(() => { });
  }, [language]);

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
          tag: item.tag || (isEnglish ? t.blog.latestTag : "Artikel Terbaru!"),
        };
      })
      : defaultArticles.map((art) => ({
        ...art,
        slug: `/blog/${art.slug}`,
      }));

  const pageHeading =
    pageData?.hero?.heading || t.blog.pageHeading;

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
        <section className="blog_section section_space_lg header_blog bg-white">
          <div className="container">
            <div className="row align-items-center mb-4">
              <div className="col-lg-6 col-mobile mb-3 mb-lg-0">
                <h1 className="blog-h1-text text-blue">{pageHeading}</h1>
              </div>
              <div className="col-lg-6 col-mobile">
                <div className="widget-search-blog">
                  <i className="fas fa-search search-icon" aria-hidden="true"></i>
                  <input
                    id="blogSearch"
                    placeholder={isEnglish ? t.blog.searchPlaceholder : "Cari artikel blog..."}
                    className="search-blog-field"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label={isEnglish ? t.blog.searchPlaceholder : "Cari artikel blog"}
                  />
                  {searchTerm && (
                    <button
                      className="search-clear-btn"
                      type="button"
                      onClick={() => setSearchTerm("")}
                      title={isEnglish ? t.blog.searchClear : "Padam carian"}
                      aria-label={isEnglish ? t.blog.searchClear : "Padam carian"}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                  <button className="search-blog-button" type="button" aria-label={isEnglish ? t.blog.searchButton : "Cari"}>
                    <span>{isEnglish ? t.blog.searchButton : "Cari"}</span>
                  </button>
                </div>
                {searchTerm && (
                  <div className="blog-search-count">
                    {isEnglish ? t.blog.showingPrefix : "Menunjukkan"} <strong>{filteredArticles.length}</strong> {isEnglish ? t.blog.showingOf : "daripada"} {articlesList.length} {isEnglish ? t.blog.showingSuffix : "artikel"}
                  </div>
                )}
              </div>
            </div>

            {/* Article Grid */}
            <div id="blogList">
              {filteredArticles.length > 0 ? (
                <div id="Container" className="blog-grid">
                  {filteredArticles.map((article: any, idx: number) => (
                    <a
                      key={idx}
                      href={article.slug}
                      className="blog-card-link"
                      style={{ textDecoration: "none", color: "inherit", display: "block" }}
                    >
                      <div className="blog-card">
                        {/* Image with overlaid badge */}
                        <div className="blog-card-img-wrap">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="blog-card-img"
                          />
                        </div>
                        {/* Card body */}
                        <div className="blog-card-body">
                          <h3 className="blog-card-title">{article.title}</h3>
                          <span className="blog-card-read-link">
                            {isEnglish ? t.blog.readArticle : "Baca artikel"}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="blog-empty-state">
                  <i className="fas fa-search"></i>
                  <h4>{isEnglish ? t.blog.emptyTitle : "Tiada artikel dijumpai"}</h4>
                  <p>
                    {isEnglish ? t.blog.emptyDesc : "Tiada artikel yang sepadan dengan carian"}{" "}
                    <strong>&ldquo;{searchTerm}&rdquo;</strong>.
                  </p>
                  <button
                    type="button"
                    className="btn-reset"
                    onClick={() => setSearchTerm("")}
                  >
                    {isEnglish ? t.blog.viewAll : "Lihat Semua Artikel"}
                  </button>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* Call to Action Banner Section */}
        <section
          className="bg_blue overflow-hidden cta_banner_section animated-in"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container">
            <div className="cta_home_new d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 text-center text-md-start">
              <div className="text-cta-mobile">
                <h2 className="text-white mb-1" style={{ fontSize: "25px", fontWeight: 700, lineHeight: "1.3" }}>
                  {isEnglish ? t.home.ctaTitle : "Perlukan Pinjaman Peribadi?"}
                </h2>
                <p className="text-white mb-0" style={{ fontSize: "25px", fontWeight: 700, opacity: 0.95, lineHeight: "1.4" }}>
                  {isEnglish ? t.home.ctaSubtitle : "Loanbuddy Credit Sedia Berkhidmat untuk Anda!"}
                </p>
              </div>
              <div className="z-index-3 flex-shrink-0">
                <a href="mohon-pinjaman-online" className="btn border_red_new cta_semak cta_mohon">
                  <span>
                    <small>{isEnglish ? t.home.applyNow : "Mohon Sekarang"}</small>
                    <small>{isEnglish ? t.home.applyNow : "Mohon Sekarang"}</small>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Blog card responsive styles */}
      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .blog-card {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .blog-card-link:hover .blog-card {
          box-shadow: 0 6px 24px rgba(0,0,0,0.13);
          transform: translateY(-3px);
        }

        .blog-card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }

        .blog-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 10px 10px 0 0;
          transition: transform 0.3s ease;
        }

        .blog-card-link:hover .blog-card-img {
          transform: scale(1.04);
        }

        .blog-card-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #1a3fac;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 10px 5px 6px;
          max-width: calc(100% - 20px);
        }

        .blog-badge-logo {
          width: 22px;
          height: 22px;
          object-fit: contain;
          flex-shrink: 0;
          border-radius: 3px;
        }

        .blog-badge-text {
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.3;
          white-space: normal;
          word-break: break-word;
        }

        .blog-card-body {
          padding: 14px 16px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .blog-card-title {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a2e;
          line-height: 1.45;
          margin: 0 0 12px;
          flex: 1;
        }

        .blog-card-read-link {
          color: #e02020;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          display: inline-block;
        }

        @media (max-width: 991px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 575px) {
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .blog-card-img-wrap {
            aspect-ratio: 16 / 9;
          }

          .blog-card-title {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}
