"use client";

import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { TermsOfServiceContent } from "@/components/LegalModals";
import { useLanguage } from "@/context/LanguageContext";

export default function TermaDanSyaratPage() {
  const { t } = useLanguage();

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

      {/* Main Body */}
      <main className="page_content">
        <section
          className="page_banner faq_banner_main section_space_lg_about overflow-hidden decoration_wrap mouse_move"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col col-12">
                <h1 className="banner-mohon-big-title text-center justify-content-center">
                  {t.termsPage.heroTitle}
                </h1>
                <p className="banner_description banner-mohon-description text-center text-grey">
                  {t.termsPage.heroDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space_lg bg_white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="legal-content text-secondary leading-relaxed fs-6">
                  <TermsOfServiceContent headingAs="h3" headingClassName="text-blue mt-4 mb-3 fs-4" />
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
