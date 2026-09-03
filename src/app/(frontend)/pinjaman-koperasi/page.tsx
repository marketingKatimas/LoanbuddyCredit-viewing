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
    <div className="d-flex flex-wrap gap-3 mt-3 mb-2 justify-content-center">
      {/* Kuala Lumpur Button */}
      <a
        href="https://wa.link/taaakr"
        target="_blank"
        rel="noopener noreferrer"
        className="d-inline-flex align-items-center gap-2 text-white text-decoration-none shadow-sm whatsapp-btn-hover"
        style={{
          backgroundColor: "#25D366",
          borderRadius: "50px",
          padding: "8px 20px",
          fontSize: "13px",
          fontWeight: "600",
          color: "#ffffff",
        }}
      >
        <img src="/assets/images/ws-logo.png" alt="WhatsApp" style={{ width: "22px", height: "22px" }} />
        <div className="text-start text-white" style={{ lineHeight: "1.2", color: "#ffffff" }}>
          <span className="text-white" style={{ fontSize: "10px", display: "block", color: "#ffffff" }}>{isEnglish ? t.faqPage.branchKL : "Cawangan Kuala Lumpur"}</span>
          <span className="text-white" style={{ color: "#ffffff" }}>+6018 785 6072</span>
        </div>
      </a>

      {/* Kuching Button */}
      <a
        href="https://wa.link/32cpg5"
        target="_blank"
        rel="noopener noreferrer"
        className="d-inline-flex align-items-center gap-2 text-white text-decoration-none shadow-sm whatsapp-btn-hover"
        style={{
          backgroundColor: "#25D366",
          borderRadius: "50px",
          padding: "8px 20px",
          fontSize: "13px",
          fontWeight: "600",
          color: "#ffffff",
        }}
      >
        <img src="/assets/images/ws-logo.png" alt="WhatsApp" style={{ width: "22px", height: "22px" }} />
        <div className="text-start text-white" style={{ lineHeight: "1.2", color: "#ffffff" }}>
          <span className="text-white" style={{ fontSize: "10px", display: "block", color: "#ffffff" }}>{isEnglish ? t.faqPage.branchKuching : "Cawangan Kuching"}</span>
          <span className="text-white" style={{ color: "#ffffff" }}>+6010 932 9976</span>
        </div>
      </a>

      {/* Bintulu Button */}
      <a
        href="https://wa.link/6v806i"
        target="_blank"
        rel="noopener noreferrer"
        className="d-inline-flex align-items-center gap-2 text-white text-decoration-none shadow-sm whatsapp-btn-hover"
        style={{
          backgroundColor: "#25D366",
          borderRadius: "50px",
          padding: "8px 20px",
          fontSize: "13px",
          fontWeight: "600",
          color: "#ffffff",
        }}
      >
        <img src="/assets/images/ws-logo.png" alt="WhatsApp" style={{ width: "22px", height: "22px" }} />
        <div className="text-start text-white" style={{ lineHeight: "1.2", color: "#ffffff" }}>
          <span className="text-white" style={{ fontSize: "10px", display: "block", color: "#ffffff" }}>{isEnglish ? t.faqPage.branchBintulu : "Cawangan Bintulu"}</span>
          <span className="text-white" style={{ color: "#ffffff" }}>+6010 909 8557</span>
        </div>
      </a>
    </div>
  );
};

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

  const heroHeading = isEnglish
    ? t.pinjamanKoperasiPage.heroHeading
    : (pageData?.hero?.heading || t.pinjamanKoperasiPage.heroHeading);
  const heroSubheading = isEnglish
    ? t.pinjamanKoperasiPage.heroSubheading
    : (pageData?.hero?.subheading || t.pinjamanKoperasiPage.heroSubheading);
  const heroCtaText = isEnglish
    ? t.pinjamanKoperasiPage.heroCtaText
    : (pageData?.hero?.primaryCtaText || t.pinjamanKoperasiPage.heroCtaText);
  const heroCtaLink = pageData?.hero?.primaryCtaLink || "/mohon-pinjaman-online";

  const videoSectionTitle = isEnglish
    ? t.pinjamanKoperasiPage.videoSectionTitle
    : (pageData?.sections?.[0]?.sectionTitle || t.pinjamanKoperasiPage.videoSectionTitle);

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

  const kelebihanSectionTitle = isEnglish
    ? t.pinjamanKoperasiPage.kelebihanSectionTitle
    : (pageData?.sections?.[1]?.sectionTitle || t.pinjamanKoperasiPage.kelebihanSectionTitle);
  const kaedahSectionTitle = isEnglish
    ? t.pinjamanKoperasiPage.kaedahSectionTitle
    : (pageData?.sections?.[2]?.sectionTitle || t.pinjamanKoperasiPage.kaedahSectionTitle);
  const stepsSectionTitle = isEnglish
    ? t.pinjamanPeribadiPage.stepsTitle
    : (pageData?.sections?.[3]?.sectionTitle || t.pinjamanPeribadiPage.stepsTitle);
  const ctaSectionTitle = isEnglish
    ? t.pinjamanPeribadiPage.ctaBannerTitle
    : (pageData?.sections?.[4]?.sectionTitle || t.pinjamanPeribadiPage.ctaBannerTitle);
  const ctaButtonText = isEnglish
    ? t.pinjamanPeribadiPage.ctaBannerBtn
    : (pageData?.sections?.[4]?.items?.[0]?.itemTitle || t.pinjamanPeribadiPage.ctaBannerBtn);
  const ctaButtonLink = "/mohon-pinjaman-online";
  const faqSectionTitle = isEnglish
    ? t.pinjamanPeribadiPage.faqTitle
    : (pageData?.sections?.[5]?.sectionTitle || t.pinjamanPeribadiPage.faqTitle);

  const [activeStep, setActiveStep] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsInteracting(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsInteracting(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe && activeStep < 2) {
      setActiveStep((prev) => prev + 1);
    }
    if (isRightSwipe && activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    if (isInteracting) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isInteracting]);

  // Kelebihan Slider State
  const [activeBenefitStep, setActiveBenefitStep] = useState<number>(0);
  const touchStartBenefitX = useRef<number | null>(null);
  const touchEndBenefitX = useRef<number | null>(null);
  const [isInteractingBenefit, setIsInteractingBenefit] = useState<boolean>(false);

  const handleTouchStartBenefit = (e: React.TouchEvent) => {
    setIsInteractingBenefit(true);
    touchStartBenefitX.current = e.touches[0].clientX;
  };

  const handleTouchMoveBenefit = (e: React.TouchEvent) => {
    touchEndBenefitX.current = e.touches[0].clientX;
  };

  const handleTouchEndBenefit = () => {
    setIsInteractingBenefit(false);
    if (!touchStartBenefitX.current || !touchEndBenefitX.current) return;
    const distance = touchStartBenefitX.current - touchEndBenefitX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe && activeBenefitStep < 3) {
      setActiveBenefitStep((prev) => prev + 1);
    }
    if (isRightSwipe && activeBenefitStep > 0) {
      setActiveBenefitStep((prev) => prev - 1);
    }
    touchStartBenefitX.current = null;
    touchEndBenefitX.current = null;
  };

  useEffect(() => {
    if (isInteractingBenefit) return;
    const interval = setInterval(() => {
      setActiveBenefitStep((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isInteractingBenefit]);

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

            {/* Desktop Layout (>= md) */}
            <div className="hidden md:flex flex-row justify-center items-center gap-6 lg:gap-12 relative z-10">
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

            {/* Mobile Slider (< md) with left icon, right text layout */}
            <div className="md:hidden flex flex-col items-center relative z-10 w-full">
              <div className="flex items-center justify-between w-full">

                {/* Left Side Arrow */}
                <button
                  type="button"
                  onClick={() => setActiveBenefitStep(prev => prev - 1)}
                  disabled={activeBenefitStep === 0}
                  aria-label={isEnglish ? "Previous benefit" : "Kelebihan sebelumnya"}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[#044BD9] transition-all duration-200 ${activeBenefitStep === 0
                    ? "opacity-30 cursor-not-allowed"
                    : "opacity-100 hover:bg-gray-50 active:scale-95 cursor-pointer"
                    }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Viewport */}
                <div
                  className="overflow-hidden w-full max-w-[280px]"
                  onTouchStart={handleTouchStartBenefit}
                  onTouchMove={handleTouchMoveBenefit}
                  onTouchEnd={handleTouchEndBenefit}
                >
                  <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(-${activeBenefitStep * 100}%)` }}
                  >
                    {/* Item 1 */}
                    <div className="w-full flex-shrink-0 flex justify-center px-1">
                      <div className="flex flex-row items-center w-full min-h-[120px] bg-white p-4 shadow-md rounded-[10px]">
                        <div className="w-[70px] flex-shrink-0 flex items-center justify-center mr-4">
                          <Image src="/assets/images/rekod-pembayaran-baik.png" alt="Rekod Baik" width={60} height={60} className="w-[60px] h-[60px] object-contain" />
                        </div>
                        <p className="text-[13px] font-medium text-[#424143] text-left leading-tight">
                          {isEnglish ? t.pinjamanKoperasiPage.benefit1 : "Tersedia untuk pelanggan Loanbuddy Credit yang mempunyai perjanjian pinjaman sedia dan rekod pembayaran baik"}
                        </p>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="w-full flex-shrink-0 flex justify-center px-1">
                      <div className="flex flex-row items-center w-full min-h-[120px] bg-white p-4 shadow-md rounded-[10px]">
                        <div className="w-[70px] flex-shrink-0 flex items-center justify-center mr-4">
                          <Image src="/assets/images/senang-top-up.png" alt="Senang Top Up" width={60} height={60} className="w-[60px] h-[60px] object-contain" />
                        </div>
                        <p className="text-[13px] font-medium text-[#424143] text-left leading-tight">
                          {isEnglish ? t.pinjamanKoperasiPage.benefit2 : "Senang untuk Top Up pinjaman sedia ada untuk menampung keperluan kewangan tambahan"}
                        </p>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="w-full flex-shrink-0 flex justify-center px-1">
                      <div className="flex flex-row items-center w-full min-h-[120px] bg-white p-4 shadow-md rounded-[10px]">
                        <div className="w-[70px] flex-shrink-0 flex items-center justify-center mr-4">
                          <Image src="/assets/images/tiada-caj-tambahan.png" alt="Tiada Caj" width={60} height={60} className="w-[60px] h-[60px] object-contain" />
                        </div>
                        <p className="text-[13px] font-medium text-[#424143] text-left leading-tight">
                          {isEnglish ? t.pinjamanKoperasiPage.benefit3 : "Tiada caj tambahan atau tersembunyi—proses lebih mudah dan lancar"}
                        </p>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="w-full flex-shrink-0 flex justify-center px-1">
                      <div className="flex flex-row items-center w-full min-h-[120px] bg-white p-4 shadow-md rounded-[10px]">
                        <div className="w-[70px] flex-shrink-0 flex items-center justify-center mr-4">
                          <Image src="/assets/images/faedah-dahulu-dikecualikan.png" alt="Faedah Dikecualikan" width={60} height={60} className="w-[60px] h-[60px] object-contain" />
                        </div>
                        <p className="text-[13px] font-medium text-[#424143] text-left leading-tight">
                          {isEnglish ? t.pinjamanKoperasiPage.benefit4 : "Selepas Top Up, sebarang faedah tertunggak daripada pinjaman terdahulu akan dikecualikan"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side Arrow */}
                <button
                  type="button"
                  onClick={() => setActiveBenefitStep(prev => prev + 1)}
                  disabled={activeBenefitStep === 3}
                  aria-label={isEnglish ? "Next benefit" : "Kelebihan seterusnya"}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[#044BD9] transition-all duration-200 ${activeBenefitStep === 3
                    ? "opacity-30 cursor-not-allowed"
                    : "opacity-100 hover:bg-gray-50 active:scale-95 cursor-pointer"
                    }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Step Indicator Dots for Mobile */}
              <div className="flex justify-center items-center mt-6 gap-3">
                {[0, 1, 2, 3].map((dotIdx: number) => (
                  <div
                    key={dotIdx}
                    onClick={() => setActiveBenefitStep(dotIdx)}
                    aria-label={`${isEnglish ? "Step" : "Langkah"} ${dotIdx + 1}`}
                    className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${activeBenefitStep === dotIdx ? "w-8 bg-blue-600" : "w-3 bg-gray-300"
                      }`}
                  />
                ))}
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
              {/* Desktop Steps Layout (>= md) */}
              <div className="hidden md:flex flex-row justify-between items-center gap-6 lg:gap-4 relative z-10">

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

              {/* Mobile Steps Slider (< md) with side navigation arrows */}
              <div className="md:hidden flex flex-col items-center relative z-10">
                <div className="flex items-center justify-center w-full gap-2 sm:gap-4">
                  {/* Left Side Arrow */}
                  <button
                    type="button"
                    onClick={() => setActiveStep(prev => prev - 1)}
                    disabled={activeStep === 0}
                    aria-label={isEnglish ? "Previous step" : "Langkah sebelumnya"}
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[#044BD9] transition-all duration-200 ${activeStep === 0
                      ? "opacity-30 cursor-not-allowed"
                      : "opacity-100 hover:bg-gray-50 active:scale-95 cursor-pointer"
                      }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Step Card Viewport */}
                  <div
                    className="overflow-hidden w-[300px] sm:w-[280px]"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div
                      className="flex transition-transform duration-300 ease-out"
                      style={{ transform: `translateX(-${activeStep * 100}%)` }}
                    >
                      {/* Mobile Step 1 */}
                      <div className="w-full flex-shrink-0 flex justify-center px-1">
                        <div className="w-full h-[340px] flex flex-col items-center justify-center text-center bg-white p-6 rounded-[10px]">
                          <div className="h-[95px] w-full flex items-center justify-center mb-4">
                            <Image
                              src="/assets/images/tekan-butang.png"
                              alt="Langkah 1 - Tekan Butang"
                              width={90}
                              height={90}
                              className="h-[80px] w-auto max-w-[90px] object-contain"
                            />
                          </div>
                          <h3 className="text-[19px] font-bold text-[#222222] mb-2.5">
                            {isEnglish ? t.pinjamanPeribadiPage.step1Title : "Langkah 1"}
                          </h3>
                          <p className="text-[13.5px] text-[#555555] font-normal leading-relaxed max-w-[220px] whitespace-pre-line">
                            {isEnglish ? t.pinjamanPeribadiPage.step1Desc : "Tekan butang \n'Mohon Sekarang'"}
                          </p>
                        </div>
                      </div>

                      {/* Mobile Step 2 */}
                      <div className="w-full flex-shrink-0 flex justify-center px-1">
                        <div className="w-full h-[340px] flex flex-col items-center justify-center text-center bg-white p-6 rounded-[10px]">
                          <div className="h-[95px] w-full flex items-center justify-center mb-4">
                            <Image
                              src="/assets/images/isi-maklumat.png"
                              alt="Langkah 2 - Isi Maklumat"
                              width={90}
                              height={90}
                              className="h-[75px] w-auto max-w-[90px] object-contain"
                            />
                          </div>
                          <h3 className="text-[19px] font-bold text-[#222222] mb-2.5">
                            {isEnglish ? t.pinjamanPeribadiPage.step2Title : "Langkah 2"}
                          </h3>
                          <p className="text-[13.5px] text-[#555555] font-normal leading-relaxed max-w-[220px] whitespace-pre-line">
                            {isEnglish ? t.pinjamanPeribadiPage.step2Desc : "Isi maklumat yang diperlukan dan \nhantar permohonan"}
                          </p>
                        </div>
                      </div>

                      {/* Mobile Step 3 */}
                      <div className="w-full flex-shrink-0 flex justify-center px-1">
                        <div className="w-full h-[340px] flex flex-col items-center justify-center text-center bg-white p-6 rounded-[10px]">
                          <div className="h-[95px] w-full flex items-center justify-center mb-4">
                            <Image
                              src="/assets/images/hubungi-anda.png"
                              alt="Langkah 3 - Dihubungi"
                              width={90}
                              height={90}
                              className="h-[80px] w-auto max-w-[90px] object-contain"
                            />
                          </div>
                          <h3 className="text-[19px] font-bold text-[#222222] mb-2.5">
                            {isEnglish ? t.pinjamanPeribadiPage.step3Title : "Langkah 3"}
                          </h3>
                          <p className="text-[13.5px] text-[#555555] font-normal leading-relaxed max-w-[220px] whitespace-pre-line">
                            {isEnglish ? t.pinjamanPeribadiPage.step3Desc : "Pakar kredit kami akan menghubungi anda melalui WhatsApp atau emel dalam masa terdekat"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Arrow */}
                  <button
                    type="button"
                    onClick={() => setActiveStep(prev => prev + 1)}
                    disabled={activeStep === 2}
                    aria-label={isEnglish ? "Next step" : "Langkah seterusnya"}
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[#044BD9] transition-all duration-200 ${activeStep === 2
                      ? "opacity-30 cursor-not-allowed"
                      : "opacity-100 hover:bg-gray-50 active:scale-95 cursor-pointer"
                      }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Step Indicator Dots for Mobile */}
                <div className="flex justify-center items-center mt-8 gap-3">
                  {[0, 1, 2].map((dotIdx: number) => (
                    <div
                      key={dotIdx}
                      onClick={() => setActiveStep(dotIdx)}
                      aria-label={`${isEnglish ? "Step" : "Langkah"} ${dotIdx + 1}`}
                      className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${activeStep === dotIdx ? "w-8 bg-blue-600" : "w-3 bg-gray-300"
                        }`}
                    />
                  ))}
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
        <section className="faq_section section_space_faq">
          <div className="container">
            <div className="section_heading text-center mb-3">
              <div className="row justify-content-center">
                <div className="col col-lg-8">
                  <h2 className="heading_text heading_text_custom text-blue">{faqSectionTitle}</h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="accordion faq-system" id="faq_accordion_koperasi">
                  {/* FAQ 0 */}
                  <div className="accordion-item accordion-item-custom">
                    <div
                      className={`accordion-button text-blue ${openFaq === 0 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(0)}
                    >
                      {isEnglish ? t.faqPage.faq0Q : "Sekiranya saya membuat pinjaman RM3,000. Apakah gambaran jadual pembayaran balik?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 0 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <div className="mb-0">
                          {isEnglish ? t.faqPage.faq0Example : "Contoh Wakil:"} <br />
                          {isEnglish ? t.faqPage.faq0Amount : "Amaun Pinjaman:"} <strong>{isEnglish ? t.faqPage.faq0AmountVal : "RM3,000"}</strong> <br />
                          {isEnglish ? t.faqPage.faq0Tenure : "Tempoh Pinjaman:"} <strong>{isEnglish ? t.faqPage.faq0TenureVal : "12 bulan"}</strong> <br />
                          {isEnglish ? t.faqPage.faq0Interest : "Kadar Faedah:"} <strong>{isEnglish ? t.faqPage.faq0InterestVal : "18.0% setahun"}</strong> <br />
                          {isEnglish ? t.faqPage.faq0Fees : "Fi:"} <strong>{isEnglish ? t.faqPage.faq0FeesVal : "Fi pesuruhjaya sumpah RM10 dan caj LHDN RM15"}</strong> <br />
                          <br />
                          <img src="/assets/images/Jadual-umum.png" loading="lazy" className="w-100" alt="Jadual Pembayaran Balik" />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 1 */}
                  <div className="accordion-item">
                    <div
                      className={`accordion-button ${openFaq === 1 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(1)}
                    >
                      {isEnglish ? t.faqPage.faq1Q : "Berapakah jumlah pinjaman yang boleh saya mohon?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 1 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <div className="mb-0">
                          {isEnglish ? t.faqPage.faq1A1 : "Anda boleh meminjam dengan minimum RM1,000 sehingga maksimum RM50,000. Amaun yang anda boleh pinjam berbeza-beza bergantung pada penilaian skor kredit individu."}
                          <br /><br />
                          {isEnglish ? t.faqPage.faq1A2 : "Walau bagaimanapun, untuk Tambah Nilai dan pinjaman seterusnya, RM1,000 dan maksimum akan ditentukan oleh Loanbuddy Credit."}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                    <div
                      className={`accordion-button ${openFaq === 2 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(2)}
                    >
                      {isEnglish ? t.faqPage.faq2Q : "Bagaimanakah cara untuk saya memohon pinjaman Loanbuddy Credit?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 2 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <div className="mb-0">
                          {isEnglish ? t.faqPage.faq2A : "Anda boleh memohon dalam talian di sini, pada bila-bila masa. Sekiranya anda memerlukan bantuan atau maklumat lanjut, hubungi Loanbuddy Credit melalui WhatsApp."}
                          <WhatsAppButtons />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item">
                    <div
                      className={`accordion-button ${openFaq === 4 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(4)}
                    >
                      {isEnglish ? t.pinjamanPeribadiPage.faqSelfEmployedQ : "Bolehkah saya memohon Pinjaman Peribadi jika saya bekerja sendiri atau bekerja sambilan?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 4 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <p className="mb-0">
                          {isEnglish ? t.pinjamanPeribadiPage.faqSelfEmployedA : "Tidak. Anda mesti bekerja sekurang-kurangnya 3 bulan dengan syarikat semasa anda."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item">
                    <div
                      className={`accordion-button ${openFaq === 5 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(5)}
                    >
                      {isEnglish ? t.faqPage.faq4Q : "Apakah dokumen dan kelayakan yang diperlukan?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 5 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <div className="mb-0">
                          <strong>{isEnglish ? t.faqPage.faq4DocTitle : "Dokumen dan kelayakan yang diperlukan termasuk:"}</strong>
                          <ol className="list-decimal list-outside mt-2 mb-3">
                            <li>{isEnglish ? t.faqPage.faq4Doc1 : "Salinan kad pengenalan (depan dan belakang)"}</li>
                            <li>{isEnglish ? t.faqPage.faq4Doc2 : "Penyata bank pengkreditan gaji 3 bulan terkini (format PDF)"}</li>
                            <li>{isEnglish ? t.faqPage.faq4Doc3 : "Slip gaji 3 bulan terkini (format PDF) dan/atau"}</li>
                            <li>{isEnglish ? t.faqPage.faq4Doc4 : "Bil utiliti 1 bulan terkini (air, elektrik, dll.)"}</li>
                          </ol>

                          <strong>{isEnglish ? t.faqPage.faq4Eligibility1Title : "Kelayakan Pinjaman Peribadi Atas Talian"}</strong>
                          <ol className="list-decimal list-outside mt-2 mb-3">
                            <li>{isEnglish ? t.faqPage.faq4E1 : "Berumur antara 18 sehingga 60 tahun"}</li>
                            <li>{isEnglish ? t.faqPage.faq4E2 : "Ada pekerjaan tetap (sektor swasta/kerajaan/GLC) dengan sekurang-kurangnya 3 bulan bekerja (dengan slip gaji dan gaji dikreditkan ke dalam akaun bank)"}</li>
                            <li>{isEnglish ? t.faqPage.faq4E3 : "Pendapatan bulanan kasar minimum RM1,700"}</li>
                            <li>{isEnglish ? t.faqPage.faq4E4 : "Tidak muflis dan mampu membayar balik pinjaman"}</li>
                            <li>{isEnglish ? t.faqPage.faq4E5 : "Bukan individu berstatus Orang Terdedah Politik (PEP)"}</li>
                          </ol>

                          <strong>{isEnglish ? t.faqPage.faq4Eligibility2Title : "Kelayakan Pinjaman Tambah Nilai"}</strong>
                          <ol className="list-decimal list-outside mt-2">
                            <li>{isEnglish ? t.faqPage.faq4TopUp1 : "Pelanggan yang mempunyai kontrak sedia ada dengan baki jumlah pinjaman"}</li>
                            <li>{isEnglish ? t.faqPage.faq4TopUp2 : "Rekod pembayaran yang baik dengan Loanbuddy Credit"}</li>
                            <li>{isEnglish ? t.faqPage.faq4TopUp3 : "Individu berumur 18 hingga 60 tahun"}</li>
                            <li>{isEnglish ? t.faqPage.faq4TopUp4 : "Pendapatan kasar bulanan minimum RM1,700"}</li>
                            <li>{isEnglish ? t.faqPage.faq4TopUp5 : "Kakitangan swasta dan kerajaan sahaja"}</li>
                            <li>{isEnglish ? t.faqPage.faq4TopUp6 : "Warganegara Malaysia"}</li>
                            <li>{isEnglish ? t.faqPage.faq4TopUp7 : "Tidak muflis dan mampu membayar balik pinjaman"}</li>
                            <li>{isEnglish ? t.faqPage.faq4TopUp8 : "Bukan individu berstatus Orang Terdedah Politik (PEP)"}</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 6 */}
                  <div className="accordion-item">
                    <div
                      className={`accordion-button ${openFaq === 6 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(6)}
                    >
                      {isEnglish ? t.faqPage.faq5Q : "Apakah tempoh pinjaman minimum dan maksimum?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 6 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <p className="mb-0">
                          {isEnglish ? t.faqPage.faq5A : "Tempoh pinjaman minimum ialah 12 bulan dan tempoh pinjaman maksimum ialah 60 bulan (5 tahun)."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 7 */}
                  <div className="accordion-item">
                    <div
                      className={`accordion-button ${openFaq === 7 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(7)}
                    >
                      {isEnglish ? t.pinjamanPeribadiPage.faqApprovalNotificationQ : "Bagaimanakah saya akan tahu jika permohonan pinjaman saya telah diluluskan?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 7 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <div className="mb-0">
                          {isEnglish ? t.pinjamanPeribadiPage.faqApprovalNotificationA : "Permohonan yang telah diluluskan akan dihubungi secara peribadi oleh pihak Loanbuddy Credit melalui panggilan telefon, SMS atau WhatsApp."}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 8 */}
                  <div className="accordion-item">
                    <div
                      className={`accordion-button ${openFaq === 8 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(8)}
                    >
                      {isEnglish ? t.pinjamanPeribadiPage.faqApprovalTimeQ : "Berapa lamakah proses kelulusan pinjaman?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 8 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <div className="mb-0">
                          {isEnglish ? t.pinjamanPeribadiPage.faqApprovalTimeA : "Proses pinjaman dalam masa 1-3 hari bekerja. Walau bagaimanapun, jika dokumen tidak lengkap, kami memerlukan 1-3 hari bekerja tambahan untuk urusan pengesahan."}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 9 */}
                  <div className="accordion-item">
                    <div
                      className={`accordion-button ${openFaq === 9 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(9)}
                    >
                      {isEnglish ? t.pinjamanPeribadiPage.faqNextStepsQ : "Apakah yang perlu saya lakukan apabila permohonan pinjaman saya telah diluluskan?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 9 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <div className="mb-0">
                          {isEnglish ? t.pinjamanPeribadiPage.faqNextStepsA : "Sila tunggu panggilan, SMS atau WhatsApp dari pihak Loanbuddy Credit dan ikuti arahan yang diberikan. Untuk pertanyaan dan maklumat lebih lanjut, hubungi Loanbuddy Credit melalui WhatsApp:"}
                          <WhatsAppButtons />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 10 */}
                  <div className="accordion-item">
                    <div
                      className={`accordion-button ${openFaq === 10 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(10)}
                    >
                      {isEnglish ? t.pinjamanPeribadiPage.faqDisbursementMethodQ : "Bagaimanakah saya akan menerima duit pinjaman saya?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 10 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <p className="mb-0">
                          {isEnglish ? t.pinjamanPeribadiPage.faqDisbursementMethodA : "Anda akan menerima pinjaman anda secara terus melalui akaun bank berdaftar anda."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 11 */}
                  <div className="accordion-item">
                    <div
                      className={`accordion-button ${openFaq === 11 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(11)}
                    >
                      {isEnglish ? t.pinjamanPeribadiPage.faqDisbursementNotificationQ : "Bagaimanakah saya akan tahu jika pinjaman saya telah dikeluarkan?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 11 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <div className="mb-0">
                          {isEnglish ? t.pinjamanPeribadiPage.faqDisbursementNotificationA : "Setelah pinjaman telah dimasukkan ke dalam akaun anda, anda akan menerima panggilan, SMS atau WhatsApp dari pihak Loanbuddy Credit."}
                        </div>
                      </div>
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