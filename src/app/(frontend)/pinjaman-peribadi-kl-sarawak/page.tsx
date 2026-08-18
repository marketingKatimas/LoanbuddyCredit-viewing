"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PinjamanPeribadiPage() {
  // Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [loanTenure, setLoanTenure] = useState<number>(12);

  // FAQ State
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

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

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
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
              style={{ backgroundImage: `url('/assets/images/banner/home-mohon/pinjaman-peribadi-banner.webp')` }}
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
                  Pinjaman Peribadi Online
                </h1>
                
                <p className="text-[14px] md:text-[15px] text-[#424143] mb-8 font-medium max-w-[400px]">
                  Loanbuddy Credit menyediakan Pinjaman Peribadi dalam Talian yang lebih pantas dan memudahkan anda untuk mencapai matlamat kewangan peribadi dan aliran tunai yang lebih terkawal.
                </p>
                
                {/* Slot Machine Red Button */}
                <a
                  href="mohon-pinjaman-online"
                  className="group relative inline-flex h-[50px] items-start justify-center overflow-hidden rounded-full border-[2px] border-[#F20505] bg-[#F20505] px-[35px] font-bold !text-white shadow-md whitespace-nowrap transition-colors duration-300 hover:!bg-white hover:!text-[#F20505]"
                >
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                    <small className="flex h-[50px] items-center text-[16px]">Mohon Sekarang</small>
                    <small className="flex h-[50px] items-center text-[16px]">Mohon Sekarang</small>
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
            {[
              { img: "kadar-faedah.png", text: "Kadar faedah 1.5% sebulan atau 18% setahun" },
              { img: "amaun-pinjaman.png", text: "Amaun pinjaman dari RM1,000 sehingga RM50,000" },
              { img: "tempoh-pinjaman.png", text: "Tempoh pinjaman fleksibel 12 hingga 60 bulan" },
              { img: "kad-atm-2.png", text: "Tidak pegang kad ATM" },
              { img: "lulus-pantas.png", text: "Kelulusan dalam masa 1-2 hari bekerja" },
              { img: "pinjaman-berlesen.png", text: "Pemberi pinjaman berlesen di bawah KPKT" },
              { img: "kelulusan-pinjaman.png", text: "Kelulusan dan pemindahan pada hari yang sama" },
              { img: "permohonan-mudah.png", text: "Permohonan mudah, pantas dan efisien" },
              // Duplicated array starts here for infinite loop
              { img: "kadar-faedah.png", text: "Kadar faedah 1.5% sebulan atau 18% setahun" },
              { img: "amaun-pinjaman.png", text: "Amaun pinjaman dari RM1,000 sehingga RM50,000" },
              { img: "tempoh-pinjaman.png", text: "Tempoh pinjaman fleksibel 12 hingga 60 bulan" },
              { img: "kad-atm-2.png", text: "Tidak pegang kad ATM" },
              { img: "lulus-pantas.png", text: "Kelulusan dalam masa 1-2 hari bekerja" },
              { img: "pinjaman-berlesen.png", text: "Pemberi pinjaman berlesen di bawah KPKT" },
              { img: "kelulusan-pinjaman.png", text: "Kelulusan dan pemindahan pada hari yang sama" },
              { img: "permohonan-mudah.png", text: "Permohonan mudah, pantas dan efisien" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-start text-center w-[220px] md:w-[280px] flex-shrink-0 px-4 group">
                <div className="h-[60px] md:h-[70px] flex items-center justify-center mb-3">
                  <Image 
                    src={`/assets/images/${item.img}`} 
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
                    <a href="mohon-pinjaman-online" className="block w-1/2 text-center bg-[#F20505] text-white font-bold py-4 rounded-full hover:bg-[#d00000] transition-colors shadow-md">
                      Mohon Sekarang
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Steps Section */}
        <section className="py-8 lg:py-[40px] bg-[#f2f2f2] overflow-hidden">
          <div className="container mx-auto px-4 lg:max-w-[1200px]">
            <div className="text-center mb-12">
              <h2 className="text-[23px] lg:!text-[25px] font-bold text-[#044BD9] mb-4">Cara Permohonan Pinjaman Peribadi</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-12 relative z-10">
              
              {/* Step 1 */}
              <div className="w-[250px] h-[250px] aspect-square flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-md">
                <Image 
                  src="/assets/images/tekan-butang.png" 
                  alt="Tekan Butang" 
                  width={100} 
                  height={100} 
                  className="w-[100px] h-[100px] object-contain mb-4" 
                  style={{ width: "auto", height: "auto" }} 
                />
                <p className="text-[15px] font-medium text-[#424143]">Tekan butang <br/>&apos;Mohon Sekarang&apos;</p>
              </div>

              {/* Arrow separator */}
              <div className="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[30px] border-l-[#F20505] rotate-90 md:rotate-0 my-4 md:my-0 md:mx-4"></div>

              {/* Step 2 */}
              <div className="w-[250px] h-[250px] aspect-square flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-md">
                <Image 
                  src="/assets/images/isi-maklumat.png" 
                  alt="Isi Maklumat" 
                  width={100} 
                  height={100} 
                  className="w-[100px] h-[100px] object-contain mb-4" 
                  style={{ width: "auto", height: "auto" }} 
                />
                <p className="text-[15px] font-medium text-[#424143]">Isi maklumat yang diperlukan dan hantar permohonan</p>
              </div>

              {/* Arrow separator */}
              <div className="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[30px] border-l-[#F20505] rotate-90 md:rotate-0 my-4 md:my-0 md:mx-4"></div>

              {/* Step 3 */}
              <div className="w-[250px] h-[250px] aspect-square flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-md">
                <Image 
                  src="/assets/images/hubungi-anda.png" 
                  alt="Dihubungi" 
                  width={100} 
                  height={100} 
                  className="w-[100px] h-[100px] object-contain mb-4" 
                  style={{ width: "auto", height: "auto" }} 
                />
                <p className="text-[15px] font-medium text-[#424143]">Pakar kredit kami akan menghubungi anda melalui WhatsApp atau emel</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row px-16 text-start relative z-10">
                <p className="text-[11px] lg:text-[12px] text-gray-500 pt-8 leading-relaxed">
                  <a href="terma-dan-syarat" className="text-blue-500 hover:!underline">Terma & Syarat</a> dan <a href="dasar-privasi" className="text-blue-500 hover:!underline">Dasar Privasi.</a>
                </p>
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
                <h2 className="!text-[18px] md:text-[15px] lg:!text-[25px] font-bold text-white leading-tight mb-0">
                  Perlukan Pinjaman Peribadi? <br className="hidden md:block" />
                  Loanbuddy Credit Sedia Berkhidmat untuk Anda!
                </h2>
              </div>

              {/* Button Right */}
              <div className="w-full md:w-4/12 flex justify-center md:justify-end mt-6 md:mt-0">
                <a
                  href="mohon-pinjaman-online"
                  className="group relative inline-flex h-[60px] items-start justify-center overflow-hidden rounded-full border-[2px] border-[#F20505] bg-white px-[40px] font-bold !text-[#F20505] shadow-md whitespace-nowrap transition-colors duration-300 hover:!bg-[#F20505] hover:!text-white"
                >
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                    
                    {/* First text: Flex + items-center perfectly centers the text within this 50px block */}
                    <small className="flex h-[60px] items-center !text-[20px]">Mohon Sekarang</small>
                    
                    {/* Second text: Hidden below, slides up on hover */}
                    <small className="flex h-[60px] items-center !text-[20px]">Mohon Sekarang</small>
                    
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
              <h2 className="text-[28px] lg:text-[38px] font-bold text-blue">Soalan Lazim</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className=" overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left bg-[#f8f9fa] !border-b !border-[#f2f2f2] hover:bg-gray-100 flex justify-between items-center transition-colors duration-300"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-[#044BD9] font-bold text-[16px] lg:text-[18px] pr-4">{faq.question}</span>
                    <span className="text-[#044BD9] text-xl font-bold">
                      {activeFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  
                  {/* Smooth Animated Accordion Body */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      activeFaq === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 py-4 bg-white text-[#424143] text-[15px] leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/soalan-lazim-faq" className="inline-block px-8 py-3 border-2 border-[#044BD9] text-[#044BD9] font-bold rounded-full hover:bg-[#044BD9] hover:text-white transition-colors duration-300">
                Lihat Semua FAQ
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}