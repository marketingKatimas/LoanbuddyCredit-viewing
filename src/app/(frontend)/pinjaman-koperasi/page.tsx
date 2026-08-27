"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMediaUrl } from "@/lib/media";
import { useLanguage } from "@/context/LanguageContext";


// 1. Reusable WhatsApp Buttons Component
const WhatsAppButtons = () => {
  const { t, isEnglish } = useLanguage();
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-6">
      {/* Kuala Lumpur Button */}
      <a href="https://wa.me/60187856072" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-3 bg-[#25D366] !text-white px-6 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full md:w-auto no-underline">
        <svg className="w-7 h-7 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
        <div className="text-left leading-tight">
          <div className="text-[14px] font-bold">{isEnglish ? t.faqPage.branchKL : "Cawangan Kuala Lumpur"}</div>
          <div className="text-[13px] font-normal">+6018 785 6072</div>
        </div>
      </a>

      {/* Kuching Button */}
      <a href="https://wa.me/60109329976" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-3 bg-[#25D366] !text-white px-6 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full md:w-auto no-underline">
        <svg className="w-7 h-7 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
        <div className="text-left leading-tight">
          <div className="text-[14px] font-bold">{isEnglish ? t.faqPage.branchKuching : "Cawangan Kuching"}</div>
          <div className="text-[13px] font-normal">+6010 932 9976</div>
        </div>
      </a>

      {/* Bintulu Button */}
      <a href="https://wa.me/60109098557" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-3 bg-[#25D366] !text-white px-6 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full md:w-auto no-underline">
        <svg className="w-7 h-7 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
        <div className="text-left leading-tight">
          <div className="text-[14px] font-bold">{isEnglish ? t.faqPage.branchBintulu : "Cawangan Bintulu"}</div>
          <div className="text-[13px] font-normal">+6010 909 8557</div>
        </div>
      </a>
    </div>
  );
};


// 2. Circular outline downward arrow matching FAQ page
const FaqArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.35s ease",
      flexShrink: 0,
      marginLeft: "auto",
    }}
  >
    <circle cx="12" cy="12" r="10" stroke="#0d4ed8" strokeWidth="2" />
    <path
      d="M12 8V16M8 12L12 16L16 12"
      stroke="#0d4ed8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PinjamanPeribadiPage() {
  const { t, isEnglish, language } = useLanguage();
  const [pageData, setPageData] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const mascotStarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`/api/content?slug=pinjaman-koperasi&locale=${language}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPageData(data.doc);
        }
      })
      .catch(() => { });
  }, [language]);

  // Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [loanTenure, setLoanTenure] = useState<number>(12);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Constants & Formulas
  const ANNUAL_INTEREST_RATE = 18; // 18% per year
  const monthlyInterestRate = ANNUAL_INTEREST_RATE / 12 / 100; // 0.015 (1.5% per month)
  const interestFactor = 1 + monthlyInterestRate * loanTenure;

  const totalAmount = Math.round(loanAmount * interestFactor);
  const monthlyEMI = Math.round(totalAmount / loanTenure);

  // Hydration-Safe Number Formatter
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const amountPercentage = ((loanAmount - 1000) / (50000 - 1000)) * 100;
  const tenurePercentage = ((loanTenure - 12) / (60 - 12)) * 100;

  const heroHeading =
    pageData?.hero?.heading || t.pinjamanKoperasiPage.heroHeading;
  const heroSubheading =
    pageData?.hero?.subheading || t.pinjamanKoperasiPage.heroSubheading;
  const heroCtaText =
    pageData?.hero?.primaryCtaText || t.pinjamanKoperasiPage.heroCtaText;
  const heroCtaLink = pageData?.hero?.primaryCtaLink || "/mohon-pinjaman-online";

  const videoSectionTitle =
    pageData?.sections?.[0]?.sectionTitle || t.pinjamanKoperasiPage.videoSectionTitle;

  const videoUrlRaw =
    pageData?.sections?.[0]?.videoUrl ||
    "https://drive.google.com/file/d/1i2ifqzZ7n0sjni1v9hsa3Asf9gBup8Xv/preview";

  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    if (url.includes("drive.google.com") && url.includes("/view")) {
      return url.replace(/\/view.*$/, "/preview");
    }
    if (url.includes("youtube.com/watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    if (url.includes("youtu.be/")) {
      return url.replace("youtu.be/", "www.youtube.com/embed/");
    }
    return url;
  };

  const videoUrl = getEmbedUrl(videoUrlRaw);
  const thumbnailMedia =
    pageData?.sections?.[0]?.thumbnailImage || pageData?.sections?.[0]?.sectionImage;
  const thumbnailUrl = getMediaUrl(thumbnailMedia, "");

  const kelebihanSectionTitle =
    pageData?.sections?.[1]?.sectionTitle || t.pinjamanKoperasiPage.kelebihanSectionTitle;
  const kaedahSectionTitle =
    pageData?.sections?.[2]?.sectionTitle || t.pinjamanKoperasiPage.kaedahSectionTitle;
  const stepsSectionTitle =
    pageData?.sections?.[3]?.sectionTitle || t.pinjamanPeribadiPage.stepsTitle;
  const ctaSectionTitle =
    pageData?.sections?.[4]?.sectionTitle || t.pinjamanPeribadiPage.ctaBannerTitle;
  const ctaButtonText =
    pageData?.sections?.[4]?.items?.[0]?.itemTitle || t.pinjamanPeribadiPage.ctaBannerBtn;
  const ctaButtonLink = "/mohon-pinjaman-online";
  const faqSectionTitle =
    pageData?.sections?.[5]?.sectionTitle || t.pinjamanPeribadiPage.faqTitle;

  return (
    <div className="page_wrapper bg-white">
      {/* Header */}
      <Header />

      <main className="page_content">

        {/* 1. Hero Section */}
        <section
          className="w-full bg-cover bg-center bg-no-repeat flex items-center lg:py-0"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="w-full px-[15px] lg:!px-[8vw] !px-0 lg:!h-[100%]">
            <div 
              className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat !min-h-[500px] lg:!min-h-[700px] lg:h-full flex items-center justify-start"
              style={{ backgroundImage: `url('/assets/images/fimage-tambah-nilai.png')` }}
            >

              {/* Seamless Frosted Gradient Layer */}
              <div
                className="absolute inset-y-0 left-0 w-full lg:w-[55%] bg-white/70 lg:bg-white/70  backdrop-blur-lg pointer-events-none"
                style={{
                  WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0) 100%)",
                  maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0) 100%)"
                }}
              ></div>

              {/* Content Container */}
              <div className="relative z-10 w-full lg:w-[50%] px-6 md:px-12 lg:px-16 py-12 text-left md:text-left flex flex-col items-center md:items-start">
                <h1 className="text-[25px] md:!text-[32px] lg:!text-[35px] font-[800] text-blue !leading-[1.25] mb-4">
                  {heroHeading}
                </h1>

                <p className="text-[14px] md:text-[15px] text-center lg:!text-start text-[#424143] mb-8 font-medium max-w-[400px] whitespace-pre-line">
                  {heroSubheading}
                </p>

                {/* Slot Machine Red Button */}
                <a
                  href={heroCtaLink}
                  className="group relative inline-flex h-[50px] items-start justify-center overflow-hidden rounded-full border-[2px] border-[#F20505] bg-[#F20505] px-[35px] font-bold !text-white shadow-md whitespace-nowrap transition-colors duration-300 hover:!bg-white hover:!text-[#F20505]"
                >
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                    <small className="flex h-[50px] items-center text-[16px]">{heroCtaText}</small>
                    <small className="flex h-[50px] items-center text-[16px]">{heroCtaText}</small>
                  </span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Rakan Kongsi / Video Section */}
        <section className="py-12 lg:py-20 bg-white relative z-20">
          <div className="container mx-auto px-4 lg:max-w-[1200px]">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

              {/* Left Side: Video Player */}
              <div className="w-full lg:w-7/12">
                <div className="relative w-full aspect-video shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden z-20">
                  {thumbnailUrl && !isPlaying ? (
                    <button
                      type="button"
                      className="absolute inset-0 w-full h-full p-0 m-0 border-0 bg-transparent cursor-pointer group select-none block overflow-hidden"
                      onClick={() => setIsPlaying(true)}
                      aria-label="Play video"
                    >
                      <img
                        src={thumbnailUrl}
                        alt="Video Thumbnail"
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 block"
                      />
                      <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gray-900/20 backdrop-blur-[2px] border border-white/40 text-white rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-900/40">
                          <svg className="w-8 h-8 md:w-9 md:h-9 fill-white/90 translate-x-[2px]" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  ) : (
                    <iframe
                      src={videoUrl ? (thumbnailUrl && isPlaying && !videoUrl.includes("autoplay=1") ? (videoUrl.includes("?") ? `${videoUrl}&autoplay=1` : `${videoUrl}?autoplay=1`) : videoUrl) : ""}
                      className="absolute inset-0 w-full h-full z-10 border-0 rounded-2xl"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>

              {/* Right Side: Text Content */}
              <div className="w-full lg:w-5/12">
                <h3 className="text-blue text-[22px] md:text-[28px] lg:text-[30px] font-bold mb-4">
                  {videoSectionTitle}
                </h3>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.65] text-[#424143] mb-3">
                  {isEnglish ? t.pinjamanKoperasiPage.videoP1 : "Pinjaman Tambah Nilai merupakan pinjaman di mana anda boleh tambah ke atas pinjaman sedia ada anda."}
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-[#424143] text-[14px] md:text-[15px] lg:text-[16px]">
                  <li>{isEnglish ? t.pinjamanKoperasiPage.videoLi1 : "Top up pinjaman sedia ada anda untuk menampung keperluan kewangan tambahan."}</li>
                  <li>{isEnglish ? t.pinjamanKoperasiPage.videoLi2 : "Sebarang faedah tertunggak daripada pinjaman terdahulu akan dikecualikan selepas pinjaman tambah nilai anda diluluskan."}</li>
                </ul>
                <p className="mb-0 text-[14px] md:text-[15px] lg:text-[16px] leading-[1.65] text-[#424143]">
                  {isEnglish ? t.pinjamanKoperasiPage.videoP2 : "Tiada caj tambahan atau tersembunyi, menjadikan proses lebih mudah dan lancar."}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Kenapa Memohon untuk Tambah Nilai? */}
        <section className="py-8 lg:!py-[100px] bg-[#f2f2f2] overflow-hidden">
          <div className="container mx-auto px-4 lg:max-w-[1200px]">
            <div className="text-center mb-12">
              <h2 className="text-[23px] lg:!text-[25px] font-bold text-blue mb-4">{kelebihanSectionTitle}</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-12 relative z-10">

              <div className="w-[250px] h-[250px] aspect-square flex flex-col items-center justify-center text-center bg-white p-6 shadow-md">
                <Image src="/assets/images/rekod-pembayaran-baik.png" alt="Rekod Baik" width={100} height={100} className="w-[100px] h-[100px] object-contain mb-4" style={{ width: "auto", height: "auto" }} />
                <p className="text-[12px] font-medium text-[#424143]">{isEnglish ? t.pinjamanKoperasiPage.benefit1 : "Tersedia untuk pelanggan Loanbuddy Credit yang mempunyai perjanjian pinjaman sedia dan rekod pembayaran baik"}</p>
              </div>

              <div className="w-[250px] h-[250px] aspect-square flex flex-col items-center justify-center text-center bg-white p-6 shadow-md">
                <Image
                  src="/assets/images/senang-top-up.png"
                  alt="Senang Top Up"
                  width={100}
                  height={100}
                  className="object-contain mb-4"
                />
                <p className="text-[13px] font-medium text-[#424143]">
                  {isEnglish ? t.pinjamanKoperasiPage.benefit2 : "Senang untuk Top Up pinjaman sedia ada untuk menampung keperluan kewangan tambahan"}
                </p>
              </div>

              <div className="w-[250px] h-[250px] aspect-square flex flex-col items-center justify-center text-center bg-white p-6 shadow-md">
                <Image src="/assets/images/tiada-caj-tambahan.png" alt="Tiada Caj" width={100} height={100} className="w-[100px] h-[100px] object-contain mb-4" style={{ width: "auto", height: "auto" }} />
                <p className="text-[13px] font-medium text-[#424143]">{isEnglish ? t.pinjamanKoperasiPage.benefit3 : "Tiada caj tambahan atau tersembunyi—proses lebih mudah dan lancar"}</p>
              </div>

              <div className="w-[250px] h-[250px] aspect-square flex flex-col items-center justify-center text-center bg-white p-6 shadow-md">
                <Image src="/assets/images/faedah-dahulu-dikecualikan.png" alt="Faedah Dikecualikan" width={100} height={100} className="w-[100px] h-[100px] object-contain mb-4" style={{ width: "auto", height: "auto" }} />
                <p className="text-[13px] font-medium text-[#424143]">{isEnglish ? t.pinjamanKoperasiPage.benefit4 : "Selepas Top Up, sebarang faedah tertunggak daripada pinjaman terdahulu akan dikecualikan"}</p>
              </div>
            </div>

          </div>
        </section>

        {/* Kaedah Tambah Nilai */}
        <section className="py-12 lg:py-20 bg-white relative z-20">
          {/* Mascot wrapped in a div to preserve positioning while animating */}
          <div className="absolute left-0 -translate-y-[35%] -translate-x-[45%] w-[250px] md:w-[200px] lg:w-[600px] z-0 pointer-events-none">
            <img 
              src="/assets/images/Loanbuddy-Ladybug-Mirror.png" 
              alt="Loanbuddy Mascot" 
              className="w-full h-full object-contain"
              style={{ animation: "mascotFloat 5s ease-in-out infinite" }}
            />
          </div>

          <div className="container mx-auto px-4 lg:max-w-[1200px] relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

              <div className="w-full lg:w-6/12">
                <img src="/assets/images/kaedah-tambah-nilai.png" loading="lazy" className="w-full object-contain" alt="Kaedah Tambah Nilai" />
              </div>

              {/* Right Side: Text Content */}
              <div className="w-full lg:w-6/12">
                <h3 className="text-blue text-[22px] md:text-[28px] lg:text-[30px] font-bold mb-4">
                  {kaedahSectionTitle}
                </h3>

                <ul className="list-disc leading-[1.3] pl-5 mb-4 space-y-2 text-[#424143] text-[14px] md:text-[15px] lg:text-[16px]">
                  <li>{isEnglish ? t.pinjamanKoperasiPage.kaedahLi1 : "Jumlah pembiayaan bagi Pinjaman Top-Up dikira dengan menolak baki pinjaman terdahulu daripada amaun prinsipal Pinjaman Top-Up yang anda mohon"}</li>
                  <li>{isEnglish ? t.pinjamanKoperasiPage.kaedahLi2 : "Sebaik sahaja permohonan Pinjaman Top-Up anda diluluskan, akaun pinjaman terdahulu anda akan dianggap selesai sepenuhnya, dan akaun Pinjaman Top-Up yang baharu akan dibuka. Jadual pembayaran balik anda juga akan dikemas kini."}</li>
                  <li>{isEnglish ? t.pinjamanKoperasiPage.kaedahLi3 : "Jumlah Pinjaman Top-Up mesti sama atau lebih tinggi daripada jumlah pinjaman terdahulu."}</li>
                </ul>
                <br />

                <p className="mb-0 italic text-[14px] md:text-[15px] lg:text-[16px] leading-[1.3] text-[#424143]">
                  {isEnglish ? t.pinjamanKoperasiPage.exampleHeading : "Sebagai contoh:"} <br />
                  <span className="text-blue font-bold">{isEnglish ? t.pinjamanKoperasiPage.previousLoanLabel : "Pinjaman Terdahulu: RM 3,000"}</span> <br />
                  {isEnglish ? t.pinjamanKoperasiPage.paidAmountLabel : "Amaun telah dibayar: RM1,000"} <br />
                  {isEnglish ? t.pinjamanKoperasiPage.balanceLoanLabel : "Baki Pinjaman: RM3,000 - RM1,000 = "}<span className="text-blue font-bold">RM2,000</span><br />
                  <br />
                  <span className="text-red-500 font-bold">{isEnglish ? t.pinjamanKoperasiPage.topupPrincipalLabel : "Jumlah Prinsipal Pinjaman Top-Up: RM5,000"}</span> <br />
                  {isEnglish ? t.pinjamanKoperasiPage.disbursedAmountLabel : "Jumlah Pengeluaran Wang Tambah Nilai (Yang Anda Bakal Terima): RM3,000"}
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* 3. Split Content & Calculator Section */}
        <section className="py-12 lg:py-20 bg-[#f2f2f2]">
          <div className="container mx-auto px-4 lg:max-w-[1200px]">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

              {/* Left Side: Requirements Text */}
              <div className="w-full lg:w-5/12">
                <div className="mb-8">
                  <h3 className="text-[22px] font-bold text-blue mb-3">{isEnglish ? t.pinjamanPeribadiPage.productDetailsTitle : "Butiran Produk"}</h3>
                  <ul className="text-[#424143] !pl-0 text-[15px] lg:text-[16px]">
                    <li><strong>{isEnglish ? t.pinjamanPeribadiPage.interestRateLabel : "Kadar faedah:"}</strong> {isEnglish ? t.pinjamanPeribadiPage.interestRateVal : "sehingga 18% setahun."}</li>
                    <li><strong>{isEnglish ? t.pinjamanPeribadiPage.repaymentTenureLabel : "Tempoh Bayaran Balik:"}</strong> {isEnglish ? t.pinjamanPeribadiPage.repaymentTenureVal : "12 bulan hingga 60 bulan"}</li>
                    <li><strong>{isEnglish ? t.pinjamanPeribadiPage.financingAmountLabel : "Jumlah Pembiayaan:"}</strong> {isEnglish ? t.pinjamanPeribadiPage.financingAmountVal : "RM1,000 hingga RM50,000"}</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-[22px] font-bold text-blue mb-3">{isEnglish ? t.pinjamanPeribadiPage.eligibilityTitle : "Kelayakan"}</h3>
                  <ul className="list-disc pl-5 text-[#424143] space-y-2 text-[15px] lg:text-[16px]">
                    <li>{isEnglish ? t.pinjamanPeribadiPage.e1 : "Individu berumur 18 tahun sehingga 60 tahun"}</li>
                    <li>{isEnglish ? t.pinjamanPeribadiPage.e2 : "Pendapatan Bulanan minimum RM1,700"}</li>
                    <li>{isEnglish ? t.pinjamanPeribadiPage.e3 : "Pekerja Swasta dan kerajaan"}</li>
                    <li>{isEnglish ? t.pinjamanPeribadiPage.e4 : "Warganegara Malaysia"}</li>
                    <li>{isEnglish ? t.pinjamanPeribadiPage.e5 : "Tidak Muflis"}</li>
                    <li>{isEnglish ? t.pinjamanPeribadiPage.e6 : "Tidak Terlibat dengan Politik"}</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-[22px] font-bold text-blue mb-3">{isEnglish ? t.pinjamanPeribadiPage.documentsTitle : "Dokumen Diperlukan"}</h3>
                  <ul className="list-disc pl-5 text-[#424143] space-y-2 text-[15px] lg:text-[16px]">
                    <li>{isEnglish ? t.pinjamanPeribadiPage.doc1 : "Salinan kad pengenalan (depan dan belakang)"}</li>
                    <li>{isEnglish ? t.pinjamanPeribadiPage.doc2 : "Penyata bank pengkreditan gaji 3 bulan terkini (format PDF)"}</li>
                    <li>{isEnglish ? t.pinjamanPeribadiPage.doc3 : "Slip gaji 3 bulan terkini (format PDF)"}</li>
                    <li>{isEnglish ? t.pinjamanPeribadiPage.doc4 : "Bil utiliti 1 bulan terkini (air, elektrik, dll.)"}</li>
                  </ul>
                </div>

                <p className="text-[11px] lg:text-[12px] text-gray-500 italic leading-relaxed">
                  {isEnglish ? t.pinjamanPeribadiPage.disclaimer : "Maklumat yang dipaparkan adalah sebagai rujukan dan untuk kegunaan peribadi sahaja. Loanbuddy Credit tidak menjamin ketepatan pengiraan ini serta tidak bertanggungjawab terhadap sebarang ketidaktepatan atau ketinggalan. Maklumat di atas bukanlah tawaran kredit dan tidak menjamin bahawa sebarang permohonan akan diluluskan. Semua permohonan pembiayaan adalah tertakluk kepada penilaian serta kelulusan oleh pihak Loanbuddy Credit."}
                </p>
              </div>

              {/* Right Side: Calculator Box */}
              <div className="w-full lg:w-7/12">
                <div className="bg-white rounded-[5px] shadow-[6px_6px_6px_0px_rgba(0,0,0,0.6)] p-6 lg:p-8 border-4 border-[#044BD9]">

                  {/* Loan Amount */}
                  <div className="mb-8">
                    <label className="block text-[#044BD9] font-bold mb-3">{isEnglish ? t.pinjamanPeribadiPage.calcLoanAmount : "Jumlah Pinjaman:"}</label>
                    <div className="flex items-center mb-2">
                      <span className="text-gray-600 font-bold mr-2">RM</span>
                      <span className="text-[#044BD9] font-bold text-xl">{formatNumber(loanAmount)}</span>
                    </div>
                    <input
                      type="range"
                      min={1000}
                      max={50000}
                      step={1000}
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      onInput={(e) => setLoanAmount(Number((e.target as HTMLInputElement).value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[5px] [&::-webkit-slider-thumb]:border-[#044BD9] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[5px] [&::-moz-range-thumb]:border-[#044BD9] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-md"
                      style={{ background: `linear-gradient(to right, #044BD9 ${amountPercentage}%, #e5e7eb ${amountPercentage}%)` }}
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
                      <span>RM1,000</span>
                      <span>RM50,000</span>
                    </div>
                  </div>

                  {/* Loan Tenure */}
                  <div className="mb-8">
                    <label className="block text-[#044BD9] font-bold mb-3">{isEnglish ? t.pinjamanPeribadiPage.calcTenure : "Tempoh (dalam bulan):"}</label>
                    <div className="flex items-center mb-2">
                      <span className="text-[#044BD9] font-bold text-xl">{loanTenure} {isEnglish ? t.pinjamanPeribadiPage.monthsSuffix : "bulan"}</span>
                    </div>
                    <input
                      type="range"
                      min={12}
                      max={60}
                      step={6}
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                      onInput={(e) => setLoanTenure(Number((e.target as HTMLInputElement).value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[5px] [&::-webkit-slider-thumb]:border-[#044BD9] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[5px] [&::-moz-range-thumb]:border-[#044BD9] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-md"
                      style={{ background: `linear-gradient(to right, #044BD9 ${tenurePercentage}%, #e5e7eb ${tenurePercentage}%)` }}
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
                      <span>12 {isEnglish ? t.pinjamanPeribadiPage.monthsSuffix : "bulan"}</span>
                      <span>60 {isEnglish ? t.pinjamanPeribadiPage.monthsSuffix : "bulan"}</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div className="mb-8">
                    <label className="block text-[#044BD9] font-bold mb-3">{isEnglish ? t.pinjamanPeribadiPage.calcInterestRate : "Kadar Faedah(%):"}</label>
                    <div className="flex items-center bg-[#f6f6f6] px-4 py-3 mb-4 rounded-md">
                      <span className="text-[#044BD9] font-bold text-xl">18%</span>
                    </div>
                  </div>

                  {/* Results output */}
                  <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-4 md:p-6 mb-6 flex flex-row items-center">

                    {/* Left Column: Bayaran Bulanan */}
                    <div className="w-1/2 flex flex-col pr-4 border-r border-gray-200">
                      <span className="text-[#044BD9] font-bold text-[13px] md:text-[14px] mb-1">{isEnglish ? t.pinjamanPeribadiPage.calcMonthlyEmi : "Bayaran Bulanan"}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-[#044BD9] font-bold text-[14px] md:text-[16px]">RM</span>
                        <span className="text-[22px] md:text-[28px] font-bold text-[#044BD9] leading-none">
                          {formatNumber(monthlyEMI)}
                        </span>
                      </div>
                    </div>

                    {/* Right Column: Jumlah Keseluruhan */}
                    <div className="w-1/2 flex flex-col pl-4 md:pl-6">
                      <span className="text-[#044BD9] font-bold text-[13px] md:text-[14px] mb-1">{isEnglish ? t.pinjamanPeribadiPage.calcTotalRepayment : "Jumlah Keseluruhan"}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-[#044BD9] font-bold text-[14px] md:text-[16px]">RM</span>
                        <span className="text-[22px] md:text-[28px] font-bold text-[#044BD9] leading-none">
                          {formatNumber(totalAmount)}
                        </span>
                      </div>
                    </div>

                  </div>

                  <div className="flex justify-start mt-2">
                    <a href={ctaButtonLink} className="block w-1/2 text-center bg-[#F20505] text-white font-bold py-4 rounded-full hover:bg-[#d00000] transition-colors shadow-md">
                      {isEnglish ? t.pinjamanPeribadiPage.calcCta : "Mohon Sekarang"}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Steps Section */}
        <section className="py-14 lg:py-20 bg-[#f2f2f2] overflow-hidden">
          <div className="container mx-auto px-4 max-w-[1140px]">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-[26px] lg:text-[30px] font-bold text-[#222222]">
                {stepsSectionTitle}
              </h2>
            </div>

            <div className="max-w-[1040px] mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-4 relative z-10">

                {/* Step 1 */}
                <div className="w-full md:w-[300px] lg:w-[315px] h-[340px] lg:h-[360px] flex flex-col items-center justify-center text-center bg-white p-6 lg:p-8 rounded-[22px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="h-[95px] w-full flex items-center justify-center mb-4">
                    <Image
                      src="/assets/images/tekan-butang.png"
                      alt="Langkah 1 - Tekan Butang"
                      width={90}
                      height={90}
                      className="h-[80px] lg:h-[85px] w-auto max-w-[90px] object-contain"
                    />
                  </div>

                  <h3 className="text-[19px] lg:text-[21px] font-bold text-[#222222] mb-2.5">
                    {isEnglish ? t.pinjamanPeribadiPage.step1Title : "Langkah 1"}
                  </h3>

                  <p className="text-[13.5px] lg:text-[14px] text-[#555555] font-normal leading-relaxed max-w-[240px] whitespace-pre-line">
                    {isEnglish ? t.pinjamanPeribadiPage.step1Desc : "Tekan butang \n'Mohon Sekarang'"}
                  </p>
                </div>

                {/* Arrow separator 1 */}
                <div className="flex items-center justify-center my-1 md:my-0 flex-shrink-0">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-[#F20505] fill-[#F20505] rotate-90 md:rotate-0" viewBox="0 0 24 24">
                    <path d="M6 4.5v15a1 1 0 001.52.86l13-7.5a1 1 0 000-1.72l-13-7.5A1 1 0 006 4.5z" />
                  </svg>
                </div>

                {/* Step 2 */}
                <div className="w-full md:w-[300px] lg:w-[315px] h-[340px] lg:h-[360px] flex flex-col items-center justify-center text-center bg-white p-6 lg:p-8 rounded-[22px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="h-[95px] w-full flex items-center justify-center mb-4">
                    <Image
                      src="/assets/images/isi-maklumat.png"
                      alt="Langkah 2 - Isi Maklumat"
                      width={90}
                      height={90}
                      className="h-[75px] lg:h-[80px] w-auto max-w-[90px] object-contain"
                    />
                  </div>

                  <h3 className="text-[19px] lg:text-[21px] font-bold text-[#222222] mb-2.5">
                    {isEnglish ? t.pinjamanPeribadiPage.step2Title : "Langkah 2"}
                  </h3>

                  <p className="text-[13.5px] lg:text-[14px] text-[#555555] font-normal leading-relaxed max-w-[240px] whitespace-pre-line">
                    {isEnglish ? t.pinjamanPeribadiPage.step2Desc : "Isi maklumat yang diperlukan dan \nhantar permohonan"}
                  </p>
                </div>

                {/* Arrow separator 2 */}
                <div className="flex items-center justify-center my-1 md:my-0 flex-shrink-0">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-[#F20505] fill-[#F20505] rotate-90 md:rotate-0" viewBox="0 0 24 24">
                    <path d="M6 4.5v15a1 1 0 001.52.86l13-7.5a1 1 0 000-1.72l-13-7.5A1 1 0 006 4.5z" />
                  </svg>
                </div>

                {/* Step 3 */}
                <div className="w-full md:w-[300px] lg:w-[315px] h-[340px] lg:h-[360px] flex flex-col items-center justify-center text-center bg-white p-6 lg:p-8 rounded-[22px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="h-[95px] w-full flex items-center justify-center mb-4">
                    <Image
                      src="/assets/images/hubungi-anda.png"
                      alt="Langkah 3 - Dihubungi"
                      width={90}
                      height={90}
                      className="h-[80px] lg:h-[85px] w-auto max-w-[90px] object-contain"
                    />
                  </div>

                  <h3 className="text-[19px] lg:text-[21px] font-bold text-[#222222] mb-2.5">
                    {isEnglish ? t.pinjamanPeribadiPage.step3Title : "Langkah 3"}
                  </h3>

                  <p className="text-[13.5px] lg:text-[14px] text-[#555555] font-normal leading-relaxed max-w-[250px] whitespace-pre-line">
                    {isEnglish ? t.pinjamanPeribadiPage.step3Desc : "Pakar kredit kami akan menghubungi anda melalui WhatsApp atau emel dalam masa terdekat"}
                  </p>
                </div>
              </div>

              {/* Terms and Privacy Policy footer */}
              <div className="mt-12 md:mt-14 text-left">
                <p className="text-[12px] md:text-[13px] text-[#424143]">
                  <Link href="/terma-dan-syarat" className="text-[#044BD9] underline hover:text-blue-700">{isEnglish ? t.pinjamanPeribadiPage.termsText : "Terma & Syarat"}</Link> {isEnglish ? t.pinjamanPeribadiPage.andText : "dan"} <Link href="/dasar-privasi" className="text-[#044BD9] underline hover:text-blue-700">{isEnglish ? t.pinjamanPeribadiPage.privacyText : "Dasar Privasi"}</Link>
                </p>
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
                  {ctaSectionTitle}
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

        {/* 6. FAQ Section */}
        <section className="py-16 lg:py-[100px] bg-white">
          <div className="container mx-auto px-4 lg:max-w-[900px]">
            <div className="text-center mb-10">
              <h2 className="text-[28px] lg:text-[38px] font-bold text-blue">{faqSectionTitle}</h2>
            </div>

            <div>
              <div className="flex flex-col">
                {/* FAQ 0 */}
                <div className="border-b border-gray-200">
                  <button onClick={() => toggleFaq(0)} className="!flex !flex-row !justify-between !items-center w-full py-4 text-left group bg-transparent border-0 outline-none">
                    <span className="text-blue font-bold !text-[15px] md:text-[20px] lg:!text-[20px] pr-4 group-hover:opacity-80 transition-opacity text-left">
                      {isEnglish ? t.faqPage.faq0Q : "Sekiranya saya membuat pinjaman RM3,000. Apakah gambaran jadual pembayaran balik?"}
                    </span>
                    <FaqArrowIcon isOpen={openFaq === 0} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 0 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                    <p className="text-[#424143] text-[13px] lg:text-[15px] leading-tight ">
                      {isEnglish ? t.faqPage.faq0Example : "Contoh Wakil:"} <br />
                      {isEnglish ? t.faqPage.faq0Amount : "Amaun Pinjaman:"} <span className="font-bold">{isEnglish ? t.faqPage.faq0AmountVal : "RM3,000"}</span> <br />
                      {isEnglish ? t.faqPage.faq0Tenure : "Tempoh Pinjaman:"} <span className="font-bold">{isEnglish ? t.faqPage.faq0TenureVal : "12 bulan"}</span> <br />
                      {isEnglish ? t.faqPage.faq0Interest : "Kadar Faedah:"} <span className="font-bold">{isEnglish ? t.faqPage.faq0InterestVal : "18.0% setahun"}</span> <br />
                      {isEnglish ? t.faqPage.faq0Fees : "Fi:"} <span className="font-bold">{isEnglish ? t.faqPage.faq0FeesVal : "Fi pesuruhjaya sumpah RM10 dan caj LHDN RM15"}</span>
                    </p>

                    <div className="w-full mt-3">
                      <img src="/assets/images/Jadual-umum.png" loading="lazy" className="w-full h-auto rounded-lg shadow-sm border border-gray-100" alt="Jadual Pembayaran Balik" />
                    </div>
                  </div>
                </div>

                {/* FAQ 1 */}
                <div className="border-b border-gray-200">
                  <button onClick={() => toggleFaq(1)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                    <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                      {isEnglish ? t.faqPage.faq1Q : "Berapakah jumlah pinjaman yang boleh saya mohon?"}
                    </span>
                    <FaqArrowIcon isOpen={openFaq === 1} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 1 ? "max-h-[1500px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                    <div className="text-[#424143] text-[13px] lg:text-[15px] leading-tight">
                      {isEnglish ? t.faqPage.faq1A1 : "Anda boleh meminjam dengan minimum RM1,000 sehingga maksimum RM50,000. Amaun yang anda boleh pinjam berbeza-beza bergantung pada penilaian skor kredit individu."}
                      <br /><br />
                      {isEnglish ? t.faqPage.faq1A2 : "Walau bagaimanapun, untuk Tambah Nilai dan pinjaman seterusnya, RM1,000 dan maksimum akan ditentukan oleh Loanbuddy Credit."}
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="border-b border-gray-200">
                  <button onClick={() => toggleFaq(2)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                    <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                      {isEnglish ? t.faqPage.faq2Q : "Bagaimanakah cara untuk saya memohon pinjaman Loanbuddy Credit?"}
                    </span>
                    <FaqArrowIcon isOpen={openFaq === 2} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 2 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                    <div className="text-[#424143] text-[15px] leading-tight">
                      {isEnglish ? t.faqPage.faq2A : "Anda boleh memohon dalam talian di sini, pada bila-bila masa. Sekiranya anda memerlukan bantuan atau maklumat lanjut, hubungi Loanbuddy Credit melalui WhatsApp."}

                      <WhatsAppButtons />
                    </div>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="border-b border-gray-200">
                  <button onClick={() => toggleFaq(4)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                    <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                      {isEnglish ? t.pinjamanPeribadiPage.faqSelfEmployedQ : "Bolehkah saya memohon Pinjaman Peribadi jika saya bekerja sendiri atau bekerja sambilan?"}
                    </span>
                    <FaqArrowIcon isOpen={openFaq === 4} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 4 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                    <div className="text-[#424143] text-[13px] lg:text-[15px] leading-relaxed">
                      {isEnglish ? t.pinjamanPeribadiPage.faqSelfEmployedA : "Tidak. Anda mesti bekerja sekurang-kurangnya 3 bulan dengan syarikat semasa anda."}
                    </div>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="border-b border-gray-200">
                  <button onClick={() => toggleFaq(5)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                    <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                      {isEnglish ? t.faqPage.faq4Q : "Apakah dokumen dan kelayakan yang diperlukan?"}
                    </span>
                    <FaqArrowIcon isOpen={openFaq === 5} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 5 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                    <div className="text-[#424143] text-[13px] lg:text-[15px] leading-tight">
                      <span className="font-semibold">{isEnglish ? t.faqPage.faq4DocTitle : "Dokumen dan kelayakan yang diperlukan termasuk:"}</span>
                      <ol className="list-decimal list-outside mt-2">
                        <li>{isEnglish ? t.faqPage.faq4Doc1 : "Salinan kad pengenalan (depan dan belakang)"}</li>
                        <li>{isEnglish ? t.faqPage.faq4Doc2 : "Penyata bank pengkreditan gaji 3 bulan terkini (format PDF)"}</li>
                        <li>{isEnglish ? t.faqPage.faq4Doc3 : "Slip gaji 3 bulan terkini (format PDF) dan/atau"}</li>
                        <li>{isEnglish ? t.faqPage.faq4Doc4 : "Bil utiliti 1 bulan terkini (air, elektrik, dll.)"}</li>
                      </ol> <br />

                      <span className="font-semibold">{isEnglish ? t.faqPage.faq4Eligibility1Title : "Kelayakan Pinjaman Peribadi Atas Talian"}</span>
                      <ol className="list-decimal list-outside mt-2">
                        <li>{isEnglish ? t.faqPage.faq4E1 : "Berumur antara 18 sehingga 60 tahun"}</li>
                        <li>{isEnglish ? t.faqPage.faq4E2 : "Ada pekerjaan tetap (sektor swasta/kerajaan/GLC) dengan sekurang-kurangnya 3 bulan bekerja (dengan slip gaji dan gaji dikreditkan ke dalam akaun bank)"}</li>
                        <li>{isEnglish ? t.faqPage.faq4E3 : "Pendapatan bulanan kasar minimum RM1,700"}</li>
                        <li>{isEnglish ? t.faqPage.faq4E4 : "Tidak muflis dan mampu membayar balik pinjaman"}</li>
                        <li>{isEnglish ? t.faqPage.faq4E5 : "Bukan individu berstatus Orang Terdedah Politik (PEP)"}</li>
                      </ol> <br />

                      <span className="font-semibold">{isEnglish ? t.faqPage.faq4Eligibility2Title : "Kelayakan Pinjaman Tambah Nilai"}</span>
                      <ol className="list-decimal list-outside mt-2">
                        <li>{isEnglish ? t.faqPage.faq4TopUp1 : "Pelanggan yang mempunyai kontrak sedia ada dengan baki jumlah pinjaman"}</li>
                        <li>{isEnglish ? t.faqPage.faq4TopUp2 : "Rekod pembayaran yang baik dengan Loanbuddy Credit"}</li>
                        <li>{isEnglish ? t.faqPage.faq4TopUp3 : "Individu berumur 18 hingga 60 tahun"}</li>
                        <li>{isEnglish ? t.faqPage.faq4TopUp4 : "Pendapatan kasar bulanan minimum RM1,700"}</li>
                        <li>{isEnglish ? t.faqPage.faq4TopUp5 : "Kakitangan swasta dan kerajaan sahaja"}</li>
                        <li>{isEnglish ? t.faqPage.faq4TopUp6 : "Warganegara Malaysia"}</li>
                        <li>{isEnglish ? t.faqPage.faq4TopUp7 : "Tidak muflis dan mampu membayar balik pinjaman"}</li>
                        <li>{isEnglish ? t.faqPage.faq4TopUp8 : "Bukan individu berstatus Orang Terdedah Politik (PEP)"}</li>
                      </ol> <br />
                    </div>
                  </div>
                </div>

                {/* FAQ 6 */}
                <div className="border-b border-gray-200">
                  <button onClick={() => toggleFaq(6)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                    <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                      {isEnglish ? t.faqPage.faq5Q : "Apakah tempoh pinjaman minimum dan maksimum?"}
                    </span>
                    <FaqArrowIcon isOpen={openFaq === 6} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 6 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                    <div className="text-[#424143] text-[15px] leading-relaxed">
                      {isEnglish ? t.faqPage.faq5A : "Tempoh pinjaman minimum ialah 12 bulan dan tempoh pinjaman maksimum ialah 60 bulan (5 tahun)."}
                    </div>
                  </div>
                </div>

                {/* FAQ 7 */}
                <div className="border-b border-gray-200">
                  <button onClick={() => toggleFaq(7)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                    <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                      {isEnglish ? t.pinjamanPeribadiPage.faqApprovalNotificationQ : "Bagaimanakah saya akan tahu jika permohonan pinjaman saya telah diluluskan?"}
                    </span>
                    <FaqArrowIcon isOpen={openFaq === 7} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 7 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                    <div className="text-[#424143] text-[15px] leading-tight">
                      {isEnglish ? t.pinjamanPeribadiPage.faqApprovalNotificationA : "Permohonan yang telah diluluskan akan dihubungi secara peribadi oleh pihak Loanbuddy Credit melalui panggilan telefon, SMS atau WhatsApp."}
                    </div>
                  </div>
                </div>

                {/* FAQ 8 */}
                <div className="border-b border-gray-200">
                  <button onClick={() => toggleFaq(8)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                    <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                      {isEnglish ? t.pinjamanPeribadiPage.faqApprovalTimeQ : "Berapa lamakah proses kelulusan pinjaman?"}
                    </span>
                    <FaqArrowIcon isOpen={openFaq === 8} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 8 ? "max-h-[1500px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                    <div className="text-[#424143] text-[13px] lg:text-[15px] leading-tight">
                      {isEnglish ? t.pinjamanPeribadiPage.faqApprovalTimeA : "Proses pinjaman dalam masa 1-3 hari bekerja. Walau bagaimanapun, jika dokumen tidak lengkap, kami memerlukan 1-3 hari bekerja tambahan untuk urusan pengesahan."}
                    </div>
                  </div>
                </div>

                {/* FAQ 9 */}
                <div className="border-b border-gray-200">
                  <button onClick={() => toggleFaq(9)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                    <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                      {isEnglish ? t.pinjamanPeribadiPage.faqNextStepsQ : "Apakah yang perlu saya lakukan apabila permohonan pinjaman saya telah diluluskan?"}
                    </span>
                    <FaqArrowIcon isOpen={openFaq === 9} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 9 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                    <div className="text-[#424143] text-[15px] leading-tight">
                      {isEnglish ? t.pinjamanPeribadiPage.faqNextStepsA : "Sila tunggu panggilan, SMS atau WhatsApp dari pihak Loanbuddy Credit dan ikuti arahan yang diberikan. Untuk pertanyaan dan maklumat lebih lanjut, hubungi Loanbuddy Credit melalui WhatsApp:"}

                      <WhatsAppButtons />
                    </div>
                  </div>
                </div>

                {/* FAQ 10 */}
                <div className="border-b border-gray-200">
                  <button onClick={() => toggleFaq(10)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                    <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                      {isEnglish ? t.pinjamanPeribadiPage.faqDisbursementMethodQ : "Bagaimanakah saya akan menerima duit pinjaman saya?"}
                    </span>
                    <FaqArrowIcon isOpen={openFaq === 10} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 10 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                    <div className="text-[#424143] text-[13px] lg:text-[15px] leading-tight">
                      {isEnglish ? t.pinjamanPeribadiPage.faqDisbursementMethodA : "Anda akan menerima pinjaman anda secara terus melalui akaun bank berdaftar anda."}
                    </div>
                  </div>
                </div>

                {/* FAQ 11 */}
                <div className="border-b border-gray-200">
                  <button onClick={() => toggleFaq(11)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                    <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                      {isEnglish ? t.pinjamanPeribadiPage.faqDisbursementNotificationQ : "Bagaimanakah saya akan tahu jika pinjaman saya telah dikeluarkan?"}
                    </span>
                    <FaqArrowIcon isOpen={openFaq === 11} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 11 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                    <div className="text-[#424143] text-[13px] lg:text-[15px] leading-tight">
                      {isEnglish ? t.pinjamanPeribadiPage.faqDisbursementNotificationA : "Setelah pinjaman telah dimasukkan ke dalam akaun anda, anda akan menerima panggilan, SMS atau WhatsApp dari pihak Loanbuddy Credit."}
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