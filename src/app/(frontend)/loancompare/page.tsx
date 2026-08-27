"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMediaUrl } from "@/lib/media";
import { useLanguage } from "@/context/LanguageContext";

export default function AplikasiPage() {
  const { t, language } = useLanguage();
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/content?slug=loan-compare&locale=${language}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPageData(data.doc);
        }
      })
      .catch(() => {});
  }, [language]);

  // 1. Dynamic Hero Banner Data
  const heroBannerImg = pageData?.hero?.heroImage
    ? getMediaUrl(pageData.hero.heroImage, "/assets/images/App-banners-No-Copy.png")
    : "/assets/images/App-banners-No-Copy.png";

  const heroHeading = pageData?.hero?.heading;
  const heroDesc = pageData?.hero?.subheading || t.loanComparePage.heroDesc;
  const heroCtaText = pageData?.hero?.primaryCtaText || t.loanComparePage.heroCtaText;
  const heroCtaLink = pageData?.hero?.primaryCtaLink || "#download";

  // 2. Dynamic Section 0: Intro & Key Features
  const introHeading =
    pageData?.sections?.[0]?.sectionTitle || t.loanComparePage.introHeading;
  const introDesc = pageData?.sections?.[0]?.sectionDescription;

  const defaultFeatures = [
    {
      title: t.loanComparePage.feature1Title,
      img: "/assets/images/permohonan-segera.png",
    },
    {
      title: t.loanComparePage.feature2Title,
      img: "/assets/images/pantau-status-permohonan.png",
    },
    {
      title: t.loanComparePage.feature3Title,
      img: "/assets/images/notifikasi-segera.png",
    },
    {
      title: t.loanComparePage.feature4Title,
      img: "/assets/images/reka-bentuk-mesra.png",
    },
    {
      title: t.loanComparePage.feature5Title,
      img: "/assets/images/sokongan-pelanggan.png",
    },
  ];

  const featuresList =
    pageData?.sections?.[0]?.items && pageData.sections[0].items.length > 0
      ? pageData.sections[0].items.map((item: any, idx: number) => ({
          title: item.itemTitle || defaultFeatures[idx]?.title || "",
          img: getMediaUrl(
            item.itemImage,
            defaultFeatures[idx]?.img || "/assets/images/permohonan-segera.png"
          ),
        }))
      : defaultFeatures;

  // 3. Dynamic Section 1: Why Choose Loanbuddy Credit
  const whyChooseTitle =
    pageData?.sections?.[1]?.sectionTitle || t.loanComparePage.whyChooseTitle;
  const whyChooseDesc = pageData?.sections?.[1]?.sectionDescription;

  // 4. Dynamic Section 2: Download Steps
  const downloadStepsTitle =
    pageData?.sections?.[2]?.sectionTitle || t.loanComparePage.downloadStepsTitle;

  const defaultSteps = [
    {
      stepLabel: t.loanComparePage.step1Title,
      desc: t.loanComparePage.step1Desc,
      img: "/assets/images/icon-langkah-1-app.png",
    },
    {
      stepLabel: t.loanComparePage.step2Title,
      desc: t.loanComparePage.step2Desc,
      img: "/assets/images/icon-langkah-2-app.png",
    },
    {
      stepLabel: t.loanComparePage.step3Title,
      desc: t.loanComparePage.step3Desc,
      img: "/assets/images/icon-langkah-3-app.png",
    },
  ];

  const stepsList =
    pageData?.sections?.[2]?.items && pageData.sections[2].items.length > 0
      ? pageData.sections[2].items.map((step: any, idx: number) => ({
          stepLabel: step.itemTitle || defaultSteps[idx]?.stepLabel || "",
          desc: step.itemDescription || defaultSteps[idx]?.desc || "",
          img: getMediaUrl(
            step.itemImage,
            defaultSteps[idx]?.img || "/assets/images/icon-langkah-1-app.png"
          ),
        }))
      : defaultSteps;

  const downloadCtaText =
    pageData?.sections?.[2]?.sectionDescription || t.loanComparePage.downloadCtaText;

  return (
    <div className="page_wrapper bg-white">
      {/* Header */}
      <Header />

      <main className="page_content">
        {/* 1. Hero Banner Section */}
        <section
          className="w-full bg-cover bg-center bg-no-repeat flex items-center py-6 lg:py-0"
          style={{
            backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')`,
          }}
        >
          <div className="w-full px-[15px] lg:!px-[8vw] !px-0 lg:!h-[100%]">
            <div
              className="relative w-full overflow-hidden bg-cover bg-[68%_center] md:bg-[center_top] bg-no-repeat min-h-[700px] lg:min-h-0 lg:aspect-[2.4/1] flex items-start justify-end rounded-lg md:rounded-none shadow-sm md:shadow-none"
              style={{ backgroundImage: `url('${heroBannerImg}')` }}
            >
              {/* Content Container */}
              <div className="relative z-10 w-full lg:w-[58%] px-6 md:px-12 py-10 md:py-16 text-center md:text-left flex flex-col items-center md:!items-start h-full">
                {heroHeading ? (
                  <h1 className="text-[25px] md:text-[32px] lg:text-[35px] font-bold !text-[#044BD9] leading-tight mb-4 text-center md:!text-left whitespace-pre-line">
                    {heroHeading}
                  </h1>
                ) : (
                  <h1 className="text-[25px] md:text-[32px] lg:text-[35px] font-bold !text-[#044BD9] leading-tight mb-4 text-center md:!text-left">
                    {t.loanComparePage.heroTitlePart1} <br className="hidden md:block" />{" "}
                    {t.loanComparePage.heroTitlePart2}
                  </h1>
                )}

                <p className="text-[14px] md:text-[15px] text-[#424143] mb-6 md:!mb-10 lg:!mb-5 font-bold max-w-[1200px] leading-relaxed mx-auto md:mx-0 text-center md:!text-start whitespace-pre-line">
                  {heroDesc}
                </p>

                {/* CTA Button */}
                <a
                  href={heroCtaLink}
                  className="group relative inline-flex h-[50px] items-start justify-center overflow-hidden rounded-full border-[2px] border-[#F20505] bg-[#F20505] px-[60px] font-bold !text-white shadow-md whitespace-nowrap transition-colors duration-300 hover:!bg-white hover:!text-[#F20505]"
                >
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                    <small className="flex h-[50px] items-center text-[16px]">
                      {heroCtaText}
                    </small>
                    <small className="flex h-[50px] items-center text-[16px]">
                      {heroCtaText}
                    </small>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Intro & Features Section */}
        <section className="py-12 md:py-20 bg-[#F2F2F2]">
          <div className="container mx-auto px-4 lg:max-w-[1000px]">
            <h2 className="text-[18px] md:!text-[25px] font-bold !text-[#044BD9] mb-6 lg:!mb-10 leading-tight">
              {introHeading}
            </h2>

            {introDesc ? (
              <div className="text-[14px] md:text-[15px] text-[#424143] space-y-4 mb-12 lg:!mb-20 leading-relaxed whitespace-pre-line">
                <p>{introDesc}</p>
              </div>
            ) : (
              <div className="text-[14px] md:text-[15px] text-[#424143] space-y-4 mb-12 lg:!mb-20 leading-relaxed">
                <p>{t.loanComparePage.introP1}</p>
                <p>{t.loanComparePage.introP2}</p>
                <p>{t.loanComparePage.introP3}</p>
              </div>
            )}

            {/* 5 Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 justify-items-center text-center">
              {featuresList.map((feature: any, idx: number) => (
                <div key={idx} className="flex flex-col items-center max-w-[200px]">
                  <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center mb-4">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-[13px] md:!text-[20px] font-bold !text-[#424143] leading-tight">
                    {feature.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Kenapa Pilih Section */}
        <section className="py-8 md:py-12 bg-[#F2F2F2]">
          <div className="container mx-auto px-4 lg:max-w-[1000px]">
            <h2 className="text-[18px] md:text-[22px] font-bold !text-[#044BD9] mb-4">
              {whyChooseTitle}
            </h2>
            {whyChooseDesc ? (
              <div className="text-[14px] md:text-[15px] text-[#424143] space-y-4 leading-relaxed whitespace-pre-line">
                <p>{whyChooseDesc}</p>
              </div>
            ) : (
              <div className="text-[14px] md:text-[15px] text-[#424143] space-y-4 leading-relaxed">
                <p>{t.loanComparePage.whyChooseP1}</p>
                <p>{t.loanComparePage.whyChooseP2}</p>
              </div>
            )}
          </div>
        </section>

        {/* 4. Langkah Muat Turun Section */}
        <section id="download" className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 lg:max-w-[1000px]">
            <h2 className="text-[20px] md:!text-[25px] font-bold !text-[#044BD9] text-center !mb-20 lg:!mb-24">
              {downloadStepsTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4 relative justify-items-center text-center mb-16">
              {stepsList.map((step: any, idx: number) => (
                <div
                  key={idx}
                  className="flex flex-col items-center w-full max-w-[300px] relative"
                >
                  <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] mb-4">
                    <img
                      src={step.img}
                      alt={step.stepLabel}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="font-bold !text-[#424143] mb-2 lg:!mb-4 text-[15px] md:text-[16px]">
                    {step.stepLabel}
                  </h4>
                  <p className="text-[13px] md:text-[14px] text-[#424143] leading-tight whitespace-pre-line">
                    {step.desc}
                  </p>

                  {/* Red Arrow (Hidden after last step) */}
                  {idx < stepsList.length - 1 && (
                    <div className="absolute -bottom-[50px] left-1/2 -translate-x-1/2 md:bottom-auto md:top-[40%] md:left-auto md:-right-[20px] lg:-right-[35px] md:-translate-y-1/2 md:translate-x-0 z-10 rotate-90 md:rotate-0">
                      <svg
                        className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 4 Q5 2.5 6.5 3.5 L18 10.8 Q19.5 12 18 13.2 L6.5 20.5 Q5 21.5 5 20 Z"
                          fill="#F20505"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Call To Action */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white pt-10">
              <p className="text-[14px] md:text-[15px] font-bold text-[#044BD9] text-center md:!text-start max-w-[500px] whitespace-pre-line">
                {downloadCtaText}
              </p>

              <div className="flex gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.loanbuddycredit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:-translate-y-1"
                >
                  <img
                    src="/assets/images/badge-google-play.png"
                    alt="Dapatkan di Google Play"
                    className="h-[35px] md:h-[45px] object-contain"
                  />
                </a>
                <a
                  href="https://apps.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:-translate-y-1"
                >
                  <img
                    src="/assets/images/badge-app-store.png"
                    alt="Muat turun pada App Store"
                    className="h-[35px] md:h-[45px] object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}