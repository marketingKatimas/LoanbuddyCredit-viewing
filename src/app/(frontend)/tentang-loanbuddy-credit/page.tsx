"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMediaUrl } from "@/lib/media";
import { useLanguage } from "@/context/LanguageContext";

export default function TentangKamiPage() {
  const { t, isEnglish, language } = useLanguage();
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/content?slug=tentang-loanbuddy-credit&locale=${language}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPageData(data.doc);
        }
      })
      .catch(() => {});
  }, [language]);

  const defaultKelebihan = [
    {
      title: t.aboutUs.kelebihan1Title,
      desc: t.aboutUs.kelebihan1Desc,
      bg: "#909090",
    },
    {
      title: t.aboutUs.kelebihan2Title,
      desc: t.aboutUs.kelebihan2Desc,
      bg: "#034BD9",
    },
    {
      title: t.aboutUs.kelebihan3Title,
      desc: t.aboutUs.kelebihan3Desc,
      bg: "#034BD9",
    },
    {
      title: t.aboutUs.kelebihan4Title,
      desc: t.aboutUs.kelebihan4Desc,
      bg: "#414143",
    },
    {
      title: t.aboutUs.kelebihan5Title,
      desc: t.aboutUs.kelebihan5Desc,
      bg: "#909090",
    },
  ];

  const kelebihanItems =
    pageData?.sections?.[1]?.items && pageData.sections[1].items.length > 0
      ? pageData.sections[1].items.map((item: any, idx: number) => ({
          title: item.itemTitle || defaultKelebihan[idx]?.title || "",
          desc: item.itemDescription || defaultKelebihan[idx]?.desc || "",
          bg: defaultKelebihan[idx]?.bg || "#034BD9",
        }))
      : defaultKelebihan;

  const defaultFeatures = [
    {
      img: "kadar-faedah.png",
      text: t.aboutUs.feature1,
    },
    {
      img: "amaun-pinjaman.png",
      text: t.aboutUs.feature2,
    },
    {
      img: "tempoh-pinjaman.png",
      text: t.aboutUs.feature3,
    },
    {
      img: "kad-atm-2.png",
      text: t.aboutUs.feature4,
    },
    {
      img: "lulus-pantas.png",
      text: t.aboutUs.feature5,
    },
    {
      img: "pinjaman-berlesen.png",
      text: t.aboutUs.feature6,
    },
    {
      img: "permohonan-mudah.png",
      text: t.aboutUs.feature7,
    },
    {
      img: "kemudahan-pembayaran.png",
      text: t.aboutUs.feature8,
    },
  ];

  const features =
    pageData?.sections?.[3]?.items && pageData.sections[3].items.length > 0
      ? pageData.sections[3].items.map((item: any, idx: number) => ({
          img: defaultFeatures[idx]?.img || "permohonan-mudah.png",
          text: item.itemDescription || item.itemTitle || defaultFeatures[idx]?.text || "",
        }))
      : defaultFeatures;

  const heroHeading = pageData?.hero?.heading || t.aboutUs.heroTitle;
  const heroSubheading = pageData?.hero?.subheading || t.aboutUs.heroDesc;
  const blueBannerText = pageData?.sections?.[0]?.sectionDescription || t.aboutUs.blueBannerText;
  const kelebihanSectionTitle = pageData?.sections?.[1]?.sectionTitle || t.aboutUs.kelebihanTitle;
  const kpktTitle = pageData?.sections?.[2]?.sectionTitle || t.aboutUs.kpktTitle;
  const kpktDesc = pageData?.sections?.[2]?.sectionDescription || t.aboutUs.kpktDesc;
  const whyChooseTitle = pageData?.sections?.[3]?.sectionTitle || t.aboutUs.whyChooseTitle;
  const rakanSetiaTitle = pageData?.sections?.[4]?.sectionTitle || t.aboutUs.rakanSetiaTitle;
  const rakanSetiaDesc = pageData?.sections?.[4]?.sectionDescription || t.aboutUs.rakanSetiaDesc;
  const komitedTitle = pageData?.sections?.[5]?.sectionTitle || t.aboutUs.komitedTitle;
  const komitedDesc = pageData?.sections?.[5]?.sectionDescription || t.aboutUs.komitedDesc;
  const ctaTitle = pageData?.sections?.[6]?.sectionTitle || t.aboutUs.ctaTitle;

  const ctaButtonText =
    pageData?.sections?.[6]?.items?.[0]?.itemTitle ||
    pageData?.hero?.primaryCtaText ||
    t.aboutUs.applyNow;

  const ctaButtonLink =
    pageData?.sections?.[6]?.items?.[0]?.itemLink ||
    pageData?.hero?.primaryCtaLink ||
    "mohon-pinjaman-online";

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
          className="page_banner about_banner_1 section_space_lg overflow-hidden decoration_wrap mouse_move"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container container_2 cta_container">
            <div className="row z-index-3 row-home-custom">
              <div className="col col-lg-5 p-none d-flex align-items-end justify-content-center">
                <img
                  src={getMediaUrl(pageData?.hero?.heroImage, "/assets/images/about-us-page-new.png")}
                  loading="lazy"
                  className="about-us-img-1"
                  alt="About Us"
                />
              </div>
              <div className="col col-lg-7 pt-30 about-us-box-mobile text-left">
                <div className="col-lg-12 perkhidmatan-padding justify-content-start text-grey">
                  <h3 className="item_title item_title_about mb-4 text-blue" style={{ fontWeight: 800, lineHeight: 1.25 }}>
                    {heroHeading}
                  </h3>
                  <p>
                    {heroSubheading}
                    <br />
                    <br />
                    {isEnglish ? t.aboutUs.missionIntro : "Dipacu pasukan pakar yang berkomited, misi kami jelas:"}
                    <br />
                  </p>
                  <ul className="list-disc pl-6 mb-0 space-y-2 text-left">
                    <li>{isEnglish ? t.aboutUs.mission1 : "Menyediakan solusi kewangan moden, pantas dan berkesan untuk setiap keperluan"}</li>
                    <li>{isEnglish ? t.aboutUs.mission2 : "Mengorak langkah sebagai peneraju kewangan utama di Malaysia"}</li>
                    <li>{isEnglish ? t.aboutUs.mission3 : "Membuka jalan kepada peluang kredit yang setara untuk semua"}</li>
                    <li>{isEnglish ? t.aboutUs.mission4 : "Menjadi sandaran kewangan yang boleh dipercayai di saat diperlukan"}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Blue Banner */}
        <section className="bg-[#044BD9] relative z-10 lg:-mt-[10vh]">
          <div className="container mx-auto px-4 py-10 lg:py-0 lg:h-[200px] flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto text-center">
              <h2 className="text-white !text-[16px] md:!text-[18px] lg:!text-[24px] italic !font-medium leading-relaxed m-0 px-4">
                {blueBannerText}
              </h2>
            </div>
          </div>
        </section>

        {/* Kelebihan Section */}
        <section
          className="py-[50px] lg:py-[120px] bg-[#cecece] bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container position-relative">
            <div className="section_heading">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col col-lg-12 text-center">
                  <h3 className="mb-lg-0 text-blue">
                    {kelebihanSectionTitle}
                  </h3>
                </div>
              </div>
            </div>
            <div className="row row_loanbuddy_kelebihan text-white">
              <img
                src="/assets/images/about/about-us-fullgrid-1.png"
                className="d-none d-md-block"
                alt="Kelebihan Grid"
              />
            </div>

            {/* Mobile Fallback Carousel (Horizontal Scroll Snap) */}
            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-hide mt-6 px-4">
              {kelebihanItems.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="snap-center shrink-0 w-[85%] rounded-xl p-6 text-white text-left flex flex-col justify-center min-h-[200px]"
                  style={{ backgroundColor: item.bg }}
                >
                  <h5 className="font-bold text-lg mb-2 text-white">{item.title}</h5>
                  <p className="text-sm m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Semakan KPKT Pinjaman Berlesen */}
        <section className="py-[50px] lg:py-[70px] bg-[#EDEDED]">
          <div className="container mx-auto px-4">
            <div className="text-center lg:px-[80px]">
              <h3 className="text-[24px] lg:text-[45px] font-bold text-[#044BD9] mb-5 mt-2 text-blue">
                {kpktTitle}
              </h3>
              <p className="text-base text-[#424143] mb-0 leading-[1.65]">
                {kpktDesc}
              </p>
            </div>
          </div>
        </section>

        {/* 5. Kenapa Pilih Loanbuddy Credit? */}
        <section className="py-[50px] lg:!py-[50px] bg-white overflow-hidden relative">
          <div className="container mx-auto px-4 lg:max-w-[1200px]">
            <div className="text-center mb-10 lg:mb-12">
              <h2 className="text-blue text-[28px] lg:text-[45px] font-bold text-[#044BD9]">
                {whyChooseTitle}
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:!gap-6">
              {features.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-[#f3f3f3] border-2 border-[#F6F6F6] rounded-xl p-4 lg:p-[30px] flex flex-col items-center justify-start text-center hover:border-[#044BD9] hover:shadow-[0_20px_30px_rgba(31,29,13,0.1)] transition-all duration-300 h-full group"
                >
                  <div className="h-[70px] lg:h-[100px] flex items-center justify-center mb-3 lg:mb-5">
                    <Image
                      src={`/assets/images/${item.img}`}
                      alt={`Loanbuddy: ${item.text.substring(0, 20)}`}
                      width={80}
                      height={80}
                      className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] group-hover:scale-97 transition-transform duration-300 object-contain"
                    />
                  </div>

                  <p className="text-[13px] lg:text-[15px] text-[#424143] leading-[1.5] lg:leading-[1.6] m-0">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rakan Kongsi */}
        <section className="section_space_4_lg bg_white lg:!pt-[10px] lg:!pb-[70px] relative z-20 overflow-visible md:overflow-visible">
          <div className="container position-relative">
            <div className="section_heading">
              <div className="row align-items-center">
                <div className="col col-lg-5">
                  <img
                    src="/assets/images/rakan-setia.png"
                    loading="lazy"
                    className="w-100"
                    alt="Rakan Setia"
                  />
                </div>
                <div className="col col-lg-7">
                  <h3 className="text-blue !text-[22px] md:!text-[28px] lg:!text-[25px] font-bold text-blue mb-4">
                    {rakanSetiaTitle}
                  </h3>
                  <p className="mb-0 text-[14px] md:text-[15px] lg:!text-[16px] leading-[1.65]">
                    {rakanSetiaDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Komuniti Section */}
        <section className="bg-[#EDEDED] py-[35px] lg:py-[70px] relative z-20 overflow-visible md:overflow-visible">
          <div className="mx-auto !px-[45px] md:px-4 lg:max-w-[1200px] relative">
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              <div className="w-full md:w-8/12 text-[#424143] pb-[130px] md:pb-0 relative z-10 text-left md:text-left lg:!text-left">
                <h3 className="!text-[22px] md:!text-[28px] lg:!text-[25px] font-bold text-blue mb-4">
                  {komitedTitle}
                </h3>
                <p className="text-[14px] md:text-[15px] lg:!text-[16px] leading-[1.65] mb-0 whitespace-pre-line">
                  {komitedDesc}
                </p>
              </div>

              <div className="absolute md:relative bottom-[-50px] right-0 md:bottom-auto md:right-auto w-full md:w-4/12 flex justify-end md:justify-center z-20 pointer-events-auto">
                <div className="lg:absolute lg:top-[-50%] lg:-mt-[350px] ">
                  <Image
                    src="/assets/images/celebrate-ladybug.webp"
                    alt="Celebrate Mascot"
                    width={400}
                    height={400}
                    className="w-[130px] md:w-[250px] lg:w-[320px] object-contain transition-all duration-500 ease-out hover:-translate-y-6 hover:translate-x-2 hover:scale-110 hover:drop-shadow-2xl cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="bg-[#044BD9] py-12 md:py-16 bg-cover bg-center relative"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-8/12 text-center lg:!text-left md:text-left">
                <h2 className="!text-[18px] md:text-[15px] lg:!text-[25px] font-bold text-white leading-tight mb-0 whitespace-pre-line">
                  {ctaTitle}
                </h2>
              </div>

              <div className="w-full md:w-4/12 flex justify-center md:justify-end mt-6 md:mt-0">
                <a
                  href={ctaButtonLink}
                  className="group relative inline-flex h-[60px] items-start justify-center overflow-hidden rounded-full border-[2px] border-[#F20505] bg-white px-[40px] font-bold !text-[#F20505] shadow-md whitespace-nowrap transition-colors duration-300 hover:!bg-[#F20505] hover:!text-white"
                >
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                    <small className="flex h-[60px] items-center !text-[20px]">{ctaButtonText}</small>
                    <small className="flex h-[60px] items-center !text-[20px]">{ctaButtonText}</small>
                  </span>
                </a>
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


