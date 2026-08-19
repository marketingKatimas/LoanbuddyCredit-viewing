"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMediaUrl } from "@/lib/media";

// 1. Reusable WhatsApp Buttons Component defined OUTSIDE the main page
const WhatsAppButtons = () => (
  <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-6">
    
    {/* Kuala Lumpur Button */}
    <a href="https://wa.me/60187856072" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-3 bg-[#25D366] !text-white px-6 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full md:w-auto no-underline">
      <svg className="w-7 h-7 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
      <div className="text-left leading-tight">
        <div className="text-[14px] font-bold">Cawangan Kuala Lumpur</div>
        <div className="text-[13px] font-normal">+6018 785 6072</div>
      </div>
    </a>

    {/* Kuching Button */}
    <a href="https://wa.me/60109329976" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-3 bg-[#25D366] !text-white px-6 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full md:w-auto no-underline">
      <svg className="w-7 h-7 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
      <div className="text-left leading-tight">
        <div className="text-[14px] font-bold">Cawangan Kuching</div>
        <div className="text-[13px] font-normal">+6010 932 9976</div>
      </div>
    </a>

    {/* Bintulu Button */}
    <a href="https://wa.me/60109098557" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-3 bg-[#25D366] !text-white px-6 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full md:w-auto no-underline">
      <svg className="w-7 h-7 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
      <div className="text-left leading-tight">
        <div className="text-[14px] font-bold">Cawangan Bintulu</div>
        <div className="text-[13px] font-normal">+6010 909 8557</div>
      </div>
    </a>

  </div>
);

// 2. Main Page Component defined ONLY ONCE
export default function PinjamanPeribadiPage() {
  const [pageData, setPageData] = useState<any>(null);

  // Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [loanTenure, setLoanTenure] = useState<number>(12);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    fetch("/api/content?slug=pinjaman-peribadi", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPageData(data.doc);
        }
      })
      .catch(() => {});
  }, []);

  // Constants & Formulas
  const ANNUAL_INTEREST_RATE = 18; // 18% per year
  const monthlyInterestRate = ANNUAL_INTEREST_RATE / 12 / 100; // 0.015 (1.5% per month)
  const interestFactor = 1 + monthlyInterestRate * loanTenure;

  const totalAmount = Math.round(loanAmount * interestFactor);
  const monthlyEMI = Math.round(totalAmount / loanTenure);

  // Hydration-Safe Number Formatter (Replaces toLocaleString)
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Dynamic Slider Fill Calculation
  const amountPercentage = ((loanAmount - 1000) / (50000 - 1000)) * 100;
  const tenurePercentage = ((loanTenure - 12) / (60 - 12)) * 100;


  const defaultFaqs = [
    {
      question: "Apa itu Pinjaman Peribadi?",
      answer: "Pinjaman Peribadi ialah sejumlah wang yang dipinjam oleh individu daripada institusi kewangan seperti bank, pemberi pinjaman wang berlesen atau koperasi. Pinjaman ini dikenakan kadar faedah serta mempunyai tempoh pembayaran balik yang telah dipersetujui."
    },
    {
      question: "Apakah Perbezaan Jenis Pinjaman Peribadi di Malaysia?",
      answer: "Terdapat dua jenis pinjaman peribadi yang tersedia: pinjaman bercagar (memerlukan aset sebagai jaminan) dan tidak bercagar (penilaian berdasarkan pendapatan, skor kredit, dan status pekerjaan tanpa memerlukan cagaran aset)."
    },
    {
      question: "Apakah syarat untuk memohon pinjaman peribadi dari pemberi pinjaman wang berlesen?",
      answer: "Anda layak meminjam sekiranya anda adalah warganegara Malaysia, berumur antara 18 sehingga 60 tahun, mempunyai pekerjaan tetap dengan minimum pendapatan RM1,700, dan tidak diisytiharkan muflis."
    }
  ];

  const defaultUspItems = [
    { img: "kadar-faedah.png", text: "Kadar faedah 1.5% sebulan atau 18% setahun" },
    { img: "amaun-pinjaman.png", text: "Amaun pinjaman dari RM1,000 sehingga RM50,000" },
    { img: "tempoh-pinjaman.png", text: "Tempoh pinjaman fleksibel 12 hingga 60 bulan" },
    { img: "kad-atm-2.png", text: "Tidak pegang kad ATM" },
    { img: "lulus-pantas.png", text: "Kelulusan dalam masa 1-2 hari bekerja" },
    { img: "pinjaman-berlesen.png", text: "Pemberi pinjaman berlesen di bawah KPKT" },
    { img: "kelulusan-pinjaman.png", text: "Kelulusan dan pemindahan pada hari yang sama" },
    { img: "permohonan-mudah.png", text: "Permohonan mudah, pantas dan efisien" },
  ];

  const defaultSteps = [
    {
      title: "Langkah 1",
      desc: "Tekan butang \n'Mohon Sekarang'",
      img: "/assets/images/tekan-butang.png",
      alt: "Langkah 1 - Tekan Butang",
    },
    {
      title: "Langkah 2",
      desc: "Isi maklumat yang diperlukan dan \nhantar permohonan",
      img: "/assets/images/isi-maklumat.png",
      alt: "Langkah 2 - Isi Maklumat",
    },
    {
      title: "Langkah 3",
      desc: "Pakar kredit kami akan menghubungi anda melalui WhatsApp atau emel dalam masa terdekat",
      img: "/assets/images/hubungi-anda.png",
      alt: "Langkah 3 - Dihubungi",
    },
  ];

  // Dynamic Data with safe fallbacks
  const heroHeading = pageData?.hero?.heading || "Pinjaman Peribadi Online";
  const heroSubheading =
    pageData?.hero?.subheading ||
    "Loanbuddy Credit menyediakan Pinjaman Peribadi dalam Talian yang lebih pantas dan memudahkan anda untuk mencapai matlamat kewangan peribadi dan aliran tunai yang lebih terkawal.";
  const heroCtaText = pageData?.hero?.primaryCtaText || "Mohon Sekarang";
  const heroCtaLink = pageData?.hero?.primaryCtaLink || "mohon-pinjaman-online";
  const heroBannerBg = pageData?.hero?.heroImage
    ? getMediaUrl(pageData.hero.heroImage, "/assets/images/banner/home-mohon/pinjaman-peribadi-banner.webp")
    : "/assets/images/banner/home-mohon/pinjaman-peribadi-banner.webp";

  const uspItems =
    pageData?.sections?.[0]?.items && pageData.sections[0].items.length > 0
      ? pageData.sections[0].items.map((item: any, idx: number) => ({
          img: item.itemImage
            ? getMediaUrl(item.itemImage, `/assets/images/${defaultUspItems[idx % defaultUspItems.length].img}`)
            : `/assets/images/${defaultUspItems[idx % defaultUspItems.length].img}`,
          text: item.itemDescription || item.itemTitle || defaultUspItems[idx % defaultUspItems.length].text,
        }))
      : defaultUspItems.map((item) => ({
          img: `/assets/images/${item.img}`,
          text: item.text,
        }));

  const stepsTitle = pageData?.sections?.[1]?.sectionTitle || "Cara Permohonan Pinjaman Peribadi";
  const stepsItems =
    pageData?.sections?.[1]?.items && pageData.sections[1].items.length > 0
      ? pageData.sections[1].items.map((item: any, idx: number) => ({
          title: item.itemTitle || defaultSteps[idx]?.title || `Langkah ${idx + 1}`,
          desc: item.itemDescription || defaultSteps[idx]?.desc || "",
          img: item.itemImage
            ? getMediaUrl(item.itemImage, defaultSteps[idx]?.img || "/assets/images/tekan-butang.png")
            : (defaultSteps[idx]?.img || "/assets/images/tekan-butang.png"),
          alt: defaultSteps[idx]?.alt || item.itemTitle || `Langkah ${idx + 1}`,
        }))
      : defaultSteps;

  const ctaHeading =
    pageData?.sections?.[2]?.sectionTitle ||
    "Perlukan Pinjaman Peribadi? \nLoanbuddy Credit Sedia Berkhidmat untuk Anda!";
  const ctaButtonText =
    pageData?.sections?.[2]?.items?.[0]?.itemTitle || "Mohon Sekarang";
  const ctaButtonLink =
    pageData?.sections?.[2]?.items?.[0]?.itemLink ||
    pageData?.sections?.[2]?.items?.[0]?.itemDescription ||
    "mohon-pinjaman-online";

  const faqTitle = pageData?.sections?.[3]?.sectionTitle || "Soalan Lazim";
  const faqs =
    pageData?.sections?.[3]?.items && pageData.sections[3].items.length > 0
      ? pageData.sections[3].items.map((item: any, idx: number) => ({
          question: item.itemTitle || defaultFaqs[idx]?.question || "",
          answer: item.itemDescription || defaultFaqs[idx]?.answer || "",
        }))
      : defaultFaqs;

  return (
    <div className="page_wrapper bg-white">
      {/* Header */}
      <Header />

      <main className="page_content">
        
        {/* 1. Hero Section (70% Screen Height on Desktop) */}
        <section 
          className="w-full bg-cover bg-center bg-no-repeat flex items-center py-6 lg:py-0 lg:h-[65vh]"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          {/* Container takes 90% of the 70vh on desktop to create a nice breathing gap */}
          <div className="container mx-auto px-4 lg:max-w-[1200px] lg:h-[100%]">
            {/* min-h-[400px] keeps mobile looking good, lg:h-full forces desktop to fill the exact height */}
            <div 
              className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat min-h-[400px] lg:h-full flex items-center justify-start"
              style={{ backgroundImage: `url('${heroBannerBg}')` }}
            >
              
              {/* Seamless Frosted Gradient Layer (Blur & Color Masked Fade) */}
              <div 
                className="absolute inset-y-0 left-0 w-full lg:w-[55%] bg-white/70 backdrop-blur-lg pointer-events-none"
                style={{
                  WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0) 100%)",
                  maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0) 100%)"
                }}
              ></div>
              
              {/* Content Container */}
              <div className="relative z-10 w-full lg:w-[50%] px-6 md:px-12 lg:px-16 py-12 text-left md:text-left flex flex-col items-center md:items-start">
                <h1 className="text-[25px] md:!text-[32px] lg:!text-[35px] font-bold text-blue leading-tight mb-4">
                  {heroHeading}
                </h1>
                
                <p className="text-[14px] md:text-[15px] text-[#424143] mb-8 font-medium max-w-[400px]">
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

        {/* 2. USP Auto Side Scroll (Marquee) */}
        <section className="py-6 lg:py-10 bg-white overflow-hidden relative border-b border-gray-100">
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 35s linear infinite;
              display: flex;
              width: max-content;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}} />

          {/* Fade gradients */}
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Added cursor-grab to indicate draggability */}
          <div className="animate-marquee cursor-grab active:cursor-grabbing">
            {[...uspItems, ...uspItems].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-start text-center w-[220px] md:w-[280px] flex-shrink-0 px-4 group">
                <div className="h-[60px] md:h-[70px] flex items-center justify-center mb-3">
                  <Image 
                    src={item.img} 
                    alt="USP Icon" 
                    width={70} 
                    height={70} 
                    className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] group-hover:scale-110 transition-transform duration-300 object-contain" 
                  />
                </div>
                <p className="text-[13px] md:text-[14px] text-[#424143] leading-snug m-0 whitespace-normal font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Modern Draggable Indicator */}
          <div className="flex justify-center items-center mt-6 md:mt-8 gap-1.5 opacity-60">
            <div className="w-8 h-1.5 rounded-full bg-[#044BD9]"></div>
            <div className="w-2 h-1.5 rounded-full bg-[#d1d5db]"></div>
            <div className="w-2 h-1.5 rounded-full bg-[#d1d5db]"></div>
          </div>
          
        </section>

        {/* 3. Split Content & Calculator Section */}
        <section className="py-12 lg:py-20 bg-[#f2f2f2]">
          <div className="container mx-auto px-4 lg:max-w-[1200px]">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              
              {/* Left Side: Requirements Text */}
              <div className="w-full lg:w-5/12">
                <div className="mb-8">
                  <h3 className="text-[22px] font-bold text-blue mb-3">Butiran Produk</h3>
                  <ul className="text-[#424143] !pl-0 text-[15px] lg:text-[16px]">
                    <li><strong>Kadar faedah:</strong> sehingga 18% setahun.</li>
                    <li><strong>Tempoh Bayaran Balik:</strong> 12 bulan hingga 60 bulan</li>
                    <li><strong>Jumlah Pembiayaan:</strong> RM1,000 hingga RM50,000</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-[22px] font-bold text-blue mb-3">Kelayakan</h3>
                  <ul className="list-disc pl-5 text-[#424143] space-y-2 text-[15px] lg:text-[16px]">
                    <li>Individu berumur 18 tahun sehingga 60 tahun</li>
                    <li>Pendapatan Bulanan minimum RM1,700</li>
                    <li>Pekerja Swasta dan kerajaan</li>
                    <li>Warganegara Malaysia</li>
                    <li>Tidak Muflis</li>
                    <li>Tidak Terlibat dengan Politik</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-[22px] font-bold text-blue mb-3">Dokumen Diperlukan</h3>
                  <ul className="list-disc pl-5 text-[#424143] space-y-2 text-[15px] lg:text-[16px]">
                    <li>Salinan kad pengenalan (depan dan belakang)</li>
                    <li>Penyata bank pengkreditan gaji 3 bulan terkini (format PDF)</li>
                    <li>Slip gaji 3 bulan terkini (format PDF)</li>
                    <li>Bil utiliti 1 bulan terkini (air, elektrik, dll.)</li>
                  </ul>
                </div>

                <p className="text-[11px] lg:text-[12px] text-gray-500 italic leading-relaxed">
                  Maklumat yang dipaparkan adalah sebagai rujukan dan untuk kegunaan peribadi sahaja. Loanbuddy Credit tidak menjamin ketepatan pengiraan ini serta tidak bertanggungjawab terhadap sebarang ketidaktepatan atau ketinggalan. Maklumat di atas bukanlah tawaran kredit dan tidak menjamin bahawa sebarang permohonan akan diluluskan. Semua permohonan pembiayaan adalah tertakluk kepada penilaian serta kelulusan oleh pihak Loanbuddy Credit.
                </p>
              </div>

              {/* Right Side: Calculator Box */}
              <div className="w-full lg:w-7/12">
                <div className="bg-white rounded-[5px] shadow-[6px_6px_6px_0px_rgba(0,0,0,0.6)] p-6 lg:p-8 border-4 border-[#044BD9]">
                  
                  {/* Loan Amount */}
                  <div className="mb-8">
                    <label className="block text-[#044BD9] font-bold mb-3">Jumlah Pinjaman:</label>
                    <div className="flex items-center mb-2">
                      <span className="text-gray-600 font-bold mr-2">RM</span>
                      {/* USING SAFE FORMATTER */}
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
                    <label className="block text-[#044BD9] font-bold mb-3">Tempoh (dalam bulan):</label>
                    <div className="flex items-center mb-2">
                      <span className="text-[#044BD9] font-bold text-xl">{loanTenure}</span>
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
                      <span>12 bulan</span>
                      <span>60 bulan</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div className="mb-8">
                    <label className="block text-[#044BD9] font-bold mb-3">Kadar Faedah(%):</label>
                    <div className="flex items-center bg-[#f6f6f6] px-4 py-3 mb-4 rounded-md">
                      <span className="text-[#044BD9] font-bold text-xl">18%</span>
                    </div>
                  </div>

                  {/* Results output */}
                  <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-4 md:p-6 mb-6 flex flex-row items-center">
                    
                    {/* Left Column: Bayaran Bulanan */}
                    <div className="w-1/2 flex flex-col pr-4 border-r border-gray-200">
                      <span className="text-[#044BD9] font-bold text-[13px] md:text-[14px] mb-1">Bayaran Bulanan</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-[#044BD9] font-bold text-[14px] md:text-[16px]">RM</span>
                        {/* USING SAFE FORMATTER */}
                        <span className="text-[22px] md:text-[28px] font-bold text-[#044BD9] leading-none">
                          {formatNumber(monthlyEMI)}
                        </span>
                      </div>
                    </div>
                    
                    {/* Right Column: Jumlah Keseluruhan */}
                    <div className="w-1/2 flex flex-col pl-4 md:pl-6">
                      <span className="text-[#044BD9] font-bold text-[13px] md:text-[14px] mb-1">Jumlah Keseluruhan</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-[#044BD9] font-bold text-[14px] md:text-[16px]">RM</span>
                        {/* USING SAFE FORMATTER */}
                        <span className="text-[22px] md:text-[28px] font-bold text-[#044BD9] leading-none">
                          {formatNumber(totalAmount)}
                        </span>
                      </div>
                    </div>

                  </div>

                  <div className="flex justify-start mt-2">
                    <a href={heroCtaLink} className="block w-1/2 text-center bg-[#F20505] text-white font-bold py-4 rounded-full hover:bg-[#d00000] transition-colors shadow-md">
                      {heroCtaText}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Steps Section */}
        {/* REMOVED 'overflow-hidden' so the mascot doesn't get cut off, and ADDED 'relative' to anchor it */}
        <section className="py-14 lg:py-20 bg-[#f2f2f2] relative">

          {/* Loanbuddy Mascot */}
          {/* 
            - top-0 & left-0 anchors it to the top left of this section.
            - -translate-y-[35%] pushes it UP so it sits exactly between this section and the Calculator.
            - -translate-x-[45%] pushes it LEFT so half its body is off-screen.
          */}
          <img 
            src="/assets/images/Loanbuddy-Ladybug-Mirror.png" 
            alt="Loanbuddy Mascot" 
            className="absolute top-0 left-0 -translate-y-[35%] -translate-x-[45%] w-[250px] md:w-[220px] lg:w-[500px] object-contain z-0 pointer-events-none"
          />

          <div className="container mx-auto px-4 lg:max-w-[1200px] relative z-10">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-[26px] lg:text-[30px] font-bold text-[#222222] mb-4">
                {stepsTitle}
              </h2>
            </div>

            <div className="max-w-[1040px] mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-4 relative z-10">
                {stepsItems.map((stepItem: any, idx: number) => (
                  <React.Fragment key={idx}>
                    {/* Step Card */}
                    <div className="w-full md:w-[300px] lg:w-[315px] h-[340px] lg:h-[360px] flex flex-col items-center justify-center text-center bg-white p-6 lg:p-8 rounded-[22px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1">
                      {/* Icon container with refined size */}
                      <div className="h-[95px] w-full flex items-center justify-center mb-4">
                        <Image 
                          src={stepItem.img} 
                          alt={stepItem.alt || stepItem.title} 
                          width={90} 
                          height={90} 
                          className="h-[80px] lg:h-[85px] w-auto max-w-[90px] object-contain" 
                        />
                      </div>
                      
                      {/* Step Title */}
                      <h3 className="text-[19px] lg:text-[21px] font-bold text-[#222222] mb-2.5">
                        {stepItem.title}
                      </h3>
                      
                      {/* Step Description */}
                      <p className="text-[13.5px] lg:text-[14px] text-[#555555] font-normal leading-relaxed max-w-[250px] whitespace-pre-line">
                        {stepItem.desc}
                      </p>
                    </div>

                    {/* Arrow separator (shown between steps) */}
                    {idx < stepsItems.length - 1 && (
                      <div className="flex items-center justify-center my-1 md:my-0 flex-shrink-0">
                        <svg className="w-7 h-7 md:w-8 md:h-8 text-[#F20505] fill-[#F20505] rotate-90 md:rotate-0" viewBox="0 0 24 24">
                          <path d="M6 4.5v15a1 1 0 001.52.86l13-7.5a1 1 0 000-1.72l-13-7.5A1 1 0 006 4.5z" />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Terms and Privacy Policy footer aligned with left edge of Step 1 card */}
              <div className="mt-12 md:mt-14 text-left">
                <p className="text-[12px] md:text-[13px] text-[#424143]">
                  <Link href="/terma-dan-syarat" className="text-[#044BD9] underline hover:text-blue-700">Terma &amp; Syarat</Link> dan <Link href="/dasar-privasi" className="text-[#044BD9] underline hover:text-blue-700">Dasar Privasi</Link>
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
              
              {/* Text Left */}
              <div className="w-full md:w-8/12 text-center lg:!text-left md:text-left">
                <h2 className="!text-[18px] md:text-[15px] lg:!text-[25px] font-bold text-white leading-tight mb-0 whitespace-pre-line">
                  {ctaHeading}
                </h2>
              </div>

              {/* Button Right */}
              <div className="w-full md:w-4/12 flex justify-center md:justify-end mt-6 md:mt-0">
                <a
                  href={ctaButtonLink}
                  className="group relative inline-flex h-[60px] items-start justify-center overflow-hidden rounded-full border-[2px] border-[#F20505] bg-white px-[40px] font-bold !text-[#F20505] shadow-md whitespace-nowrap transition-colors duration-300 hover:!bg-[#F20505] hover:!text-white"
                >
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                    
                    {/* First text: Flex + items-center perfectly centers the text within this 50px block */}
                    <small className="flex h-[60px] items-center !text-[20px]">{ctaButtonText}</small>
                    
                    {/* Second text: Hidden below, slides up on hover */}
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
              <h2 className="text-[28px] lg:text-[38px] font-bold text-blue">{faqTitle}</h2>
            </div>

            <div>
              <h3 className="text-blue text-[22px] font-bold border-b border-[#044BD9] pb-0 mb-4 inline-block leading-tight">
                Pembayaran Balik
              </h3>

              <div className="flex flex-col">
                    {/* FAQ 0 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(0)} className="!flex !flex-row !justify-between !items-center w-full py-4 text-left group bg-transparent border-0 outline-none">
                        <span className="text-blue font-bold !text-[15px] md:text-[20px] lg:!text-[20px] pr-4 group-hover:opacity-80 transition-opacity text-left">
                          Sekiranya saya membuat pinjaman RM3,000. Apakah gambaran jadual pembayaran balik?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 0 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 0 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <p className="text-[#424143] text-[13px] lg:text-[15px] leading-tight ">
                          Contoh Wakil: <br />
                          Amaun Pinjaman: <span className="font-bold">RM3,000</span> <br />
                          Tempoh Pinjaman: <span className="font-bold">12 bulan</span> <br />
                          Kadar Faedah: <span className="font-bold">18.0% setahun</span> <br />
                          Fi: <span className="font-bold">Fi pesuruhjaya sumpah RM10 dan caj LHDN RM15</span>
                        </p>

                        <div className="w-full mt-3">
                            <img src="/assets/images/Jadual-umum.png" loading="lazy" className="w-full h-auto rounded-lg shadow-sm border border-gray-100" alt="Jadual Pembayaran Balik" /> 
                        </div>
                      </div>
                    </div>

                  </div>


                  {/* FAQ Section: Permohonan */}
                  <h3 className="text-blue text-[22px] font-bold border-b border-[#044BD9] py-5 pb-0 mb-4 inline-block leading-tight">
                    Permohonan
                    </h3>
                  <div className="flex flex-col">
                    
                    {/* FAQ 1 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(1)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Berapakah jumlah pinjaman yang boleh saya mohon?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 1 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 1 ? "max-h-[1500px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[13px] lg:text-[15px] leading-tight">
                          Anda boleh meminjam dengan minimum RM1,000 sehingga maksimum RM50,000. Amaun yang anda boleh pinjam berbeza-beza bergantung pada penilaian skor kredit individu.
                          <br /><br/>
                          Walau bagaimanapun, untuk Tambah Nilai dan pinjaman seterusnya, RM1,000 dan maksimum akan ditentukan oleh Loanbuddy Credit.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(2)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Bagaimanakah cara untuk saya memohon pinjaman Loanbuddy Credit?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 2 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div> 
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 2 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[15px] leading-tight">
                          Anda boleh memohon dalam talian di sini, pada bila-bila masa. Sekiranya anda memerlukan bantuan atau maklumat lanjut, hubungi Loanbuddy Credit melalui WhatsApp.
                          
                          <WhatsAppButtons />
                        </div>
                      </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(3)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Berapakah kadar faedah?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 3 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 3 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[13px] lg:text-[15px] leading-relaxed">
                          Kadar faedah tahunan adalah sehingga 18.0%.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(4)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Bolehkah saya memohon Pinjaman Peribadi jika saya bekerja sendiri atau bekerja sambilan?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 4 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 4 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[13px] lg:text-[15px] leading-relaxed">
                          Tidak. Anda mesti bekerja sekurang-kurangnya 3 bulan dengan syarikat semasa anda. 
                        </div>
                      </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(5)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Apakah dokumen dan kelayakan yang diperlukan?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 5 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 5 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[13px] lg:text-[15px] leading-tight">
                          <span className="font-semibold">Dokumen dan kelayakan yang diperlukan termasuk:</span>
                          <ol className="list-decimal list-outside mt-2">
                            <li>Salinan kad pengenalan (depan dan belakang)</li>
                            <li>Penyata bank pengkreditan gaji 3 bulan terkini (format PDF)</li>
                            <li>Slip gaji 3 bulan terkini (format PDF) dan/atau</li>
                            <li>Bil utiliti 1 bulan terkini (air, elektrik, dll.)</li>
                          </ol> <br />

                          <span className="font-semibold">Kelayakan Pinjaman Peribadi Atas Talian</span>
                          <ol className="list-decimal list-outside mt-2">
                            <li>Berumur antara 18 sehingga 60 tahun</li>
                            <li>Ada pekerjaan tetap (sektor swasta/kerajaan/GLC) dengan sekurang-kurangnya 3 bulan bekerja (dengan slip gaji dan gaji dikreditkan ke dalam akaun bank)</li>
                            <li>Pendapatan bulanan kasar minimum RM1,700</li>
                            <li>Tidak muflis dan mampu membayar balik pinjaman</li>
                            <li>Bukan individu berstatus Orang Terdedah Politik (PEP)</li>
                          </ol> <br />

                          <span className="font-semibold">Kelayakan Pinjaman Tambah NIlai</span>
                          <ol className="list-decimal list-outside mt-2">
                            <li>Pelanggan yang mempunyai kontrak sedia ada dengan baki jumlah pinjaman</li>
                            <li>Rekod pembayaran yang baik dengan Loanbuddy Credit</li>
                            <li>Individu berumur 18 hingga 60 tahun</li>
                            <li>Pendapatan kasar bulanan minimum RM1,700</li>
                            <li>Kakitangan swasta dan kerajaan sahaja</li>
                            <li>Warganegara Malaysia</li>
                            <li>Tidak muflis dan mampu membayar balik pinjaman</li>
                            <li>Bukan individu berstatus Orang Terdedah Politik (PEP)</li>
                          </ol> <br />
                        </div>
                      </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(6)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Apakah tempoh pinjaman minimum dan maksimum?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 6 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 6 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[15px] leading-relaxed">
                          Tempoh pinjaman minimum ialah 12 bulan dan tempoh pinjaman maksimum ialah 60 bulan (5 tahun).
                        </div>
                      </div>
                    </div>

                    {/* FAQ 6 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(7)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Adakah terdapat sebarang bayaran yang perlu saya bayar untuk pendaftaran?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 7 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 7 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[15px] leading-tight">
                          Tiada yuran pendaftaran dikenakan. Walau bagaimanapun, jika permohonan anda diluluskan, anda perlu membayar duti setem dan yuran perakuan.
                          <br /><br />

                          Yuran ini akan dikenakan bersama dengan jumlah pembayaran balik pada pembayaran balik pertama.
                        </div>
                      </div>
                    </div>

                  </div>


                  {/* FAQ Section: Kelulusan */}
                  <h3 className="text-blue text-[22px] font-bold border-b border-[#044BD9] py-5 pb-0 mb-4 inline-block leading-tight">
                    Kelulusan
                    </h3>
                  <div className="flex flex-col">
                    
                    {/* FAQ 1 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(8)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Bagaimanakah saya akan tahu jika permohonan pinjaman saya telah diluluskan?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 8 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 8 ? "max-h-[1500px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[13px] lg:text-[15px] leading-tight">
                          Permohonan yang telah diluluskan akan dihubungi secara peribadi oleh pihak Loanbuddy Credit melalui panggilan telefon, SMS atau WhatsApp.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(9)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Berapa lamakah proses kelulusan pinjaman?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 9 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div> 
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 9 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[15px] leading-tight">
                          Proses pinjaman dalam masa 1-3 hari bekerja. Walau bagaimanapun, jika dokumen tidak lengkap, kami memerlukan 1-3 hari bekerja tambahan untuk urusan pengesahan.
                          
                          
                        </div>
                      </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(10)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Apakah yang perlu saya lakukan apabila permohonan pinjaman saya telah diluluskan?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 10 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 10 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[13px] lg:text-[15px] leading-tight">
                          Sila tunggu panggilan, SMS atau WhatsApp dari pihak Loanbuddy Credit dan ikuti arahan yang diberikan. Untuk pertanyaan dan maklumat lebih lanjut, hubungi Loanbuddy Credit melalui WhatsApp:

                          <WhatsAppButtons />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section: Pengeluaran Pinjaman */}
                  <h3 className="text-blue text-[22px] font-bold border-b border-[#044BD9] py-5 pb-0 mb-4 inline-block leading-tight">
                  Pengeluaran Pinjaman
                  </h3>

                  <div className="flex flex-col">
                    {/* FAQ 10 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(11)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Bagaimanakah saya akan menerima duit pinjaman saya?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 11 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 11 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[13px] lg:text-[15px] leading-relaxed">
                          Anda akan menerima pinjaman anda secara terus melalui akaun bank berdaftar anda.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(12)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Bagaimanakah saya akan tahu jika pinjaman saya telah dikeluarkan?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 12 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 12 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[13px] lg:text-[15px] leading-tight">
                          Setelah pinjaman telah dimasukkan ke dalam akaun anda, anda akan menerima panggilan, SMS atau WhatsApp dari pihak Loanbuddy Credit.
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