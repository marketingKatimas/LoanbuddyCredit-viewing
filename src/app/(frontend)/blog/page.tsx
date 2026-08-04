"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const articles = [
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
  
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter((art) =>
    art.title.toLowerCase().includes(searchTerm.toLowerCase())
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
            <div className="row mb-4">
              <div className="col-lg-8 col-mobile">
                <h1 className="blog-h1-text">Blog</h1>
              </div>
              <div className="col-lg-4 col-mobile">
                <div className="ps-lg-4 ms-1 widget-search-blog">
                  <input
                    id="blogSearch"
                    placeholder="Tajuk Blog..."
                    className="search-blog-field"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="search-blog-button" type="button" aria-label="Search">
                    Cari
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col col-mobile col-lg-12">
                <div id="blogList">
                  <div className="row" id="Container">
                    {filteredArticles.map((article, idx) => (
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
