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
              style={{ backgroundImage: `url('/assets/images/fimage-tambah-nilai.png')` }}
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
                  Pinjaman Tambah Nilai
                </h1>
                
                <p className="text-[14px] md:text-[15px] text-[#424143] mb-8 font-medium max-w-[400px]">
                  Loanbuddy Credit menawarkan Pinjaman Tambah Nilai di mana anda boleh top up* pinjaman sedia ada anda untuk keperluan kewangan kecemasan pada bila-bila masa, di mana sahaja anda berada. 
                  <br /><br />
                  *Tertakluk kepada terma dan syarat
                </p>
                
                {/* Slot Machine Red Button */}
                <a
                  href="mohon-pinjaman-online"
                  className="group relative inline-flex h-[50px] items-start justify-center overflow-hidden rounded-full border-[2px] border-[#F20505] bg-[#F20505] px-[35px] font-bold !text-white shadow-md whitespace-nowrap transition-colors duration-300 hover:!bg-white hover:!text-[#F20505]"
                >
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                    <small className="flex h-[50px] items-center text-[16px]">Top Up Sekarang</small>
                    <small className="flex h-[50px] items-center text-[16px]">Top Up Sekarang</small>
                  </span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Rakan Kongsi / Video Section */}
        {/* Replaced old section_space classes with clean Tailwind padding */}
        <section className="py-12 lg:py-20 bg-white relative z-20">
          <div className="container mx-auto px-4 lg:max-w-[1200px]">
            
            {/* Used gap-8 to separate items cleanly instead of stacking px-4 padding */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              
              {/* Left Side: Google Drive Video Player */}
              <div className="w-full lg:w-7/12">
                {/* 
                  1. Changed `aspect-video` to `aspect-[16/11] md:aspect-video` to give the Google Drive header room on mobile.
                  2. Added `z-20` to the wrapper so it physically sits above everything else and catches your finger taps.
                */}
                <div className="relative w-full aspect-[16/11] md:aspect-video shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-gray-100 relative z-20">
                  <iframe
                    src="https://drive.google.com/file/d/1i2ifqzZ7n0sjni1v9hsa3Asf9gBup8Xv/preview"
                    /* Added rounded-xl, border-0, and z-10 directly to the iframe so mobile can tap it! */
                    className="absolute top-0 left-0 w-full h-full z-10 border-0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              

              {/* Right Side: Text Content (Removed nested px-4) */}
              <div className="w-full lg:w-5/12">
                <h3 className="text-blue text-[22px] md:text-[28px] lg:text-[30px] font-bold mb-4">
                  Apa Itu Pinjaman Tambah Nilai?
                </h3>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.65] text-[#424143] mb-3">
                  Pinjaman Tambah Nilai merupakan pinjaman di mana anda boleh tambah ke atas pinjaman sedia ada anda. 
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-[#424143] text-[14px] md:text-[15px] lg:text-[16px]">
                  <li><em>Top up</em> pinjaman sedia ada anda untuk menampung keperluan kewangan tambahan.</li>
                  <li>Sebarang faedah tertunggak daripada pinjaman terdahulu akan dikecualikan selepas pinjaman tambah nilai anda diluluskan.</li>
                </ul>
                <p className="mb-0 text-[14px] md:text-[15px] lg:text-[16px] leading-[1.65] text-[#424143]">
                  Tiada caj tambahan atau tersembunyi, menjadikan proses lebih mudah dan lancar. 
                </p>
              </div>
              
            </div>
            
          </div>
        </section>

        {/* Kenapa Memohon untuk Tambah Nilai? */}
        <section className="py-8 lg:!py-[100px] bg-[#f2f2f2] overflow-hidden">
          <div className="container mx-auto px-4 lg:max-w-[1200px]">
            <div className="text-center mb-12">
              <h2 className="text-[23px] lg:!text-[25px] font-bold text-blue mb-4">Kenapa Memohon untuk Tambah Nilai?</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-12 relative z-10">
              
              <div className="w-[250px] h-[250px] aspect-square flex flex-col items-center justify-center text-center bg-white p-6 shadow-md">
                <Image src="/assets/images/rekod-pembayaran-baik.png" alt="Rekod Baik" width={100} height={100} className="w-[100px] h-[100px] object-contain mb-4" style={{ width: "auto", height: "auto" }}/>
                <p className="text-[12px] font-medium text-[#424143] " >Tersedia untuk pelanggan Loanbuddy Credit yang mempunyai perjanjian pinjaman sedia dan rekod pembayaran baik</p>
              </div>

              <div className="w-[250px] h-[250px] aspect-square flex flex-col items-center justify-center text-center bg-white p-6 shadow-md">
                <Image 
                  src="/assets/images/senang-top-up.png" 
                  alt="Senang Top Up" 
                  width={100} 
                  height={100} 
                  /* Removed the conflicting w-[100px] h-[100px] and inline styles */
                  className="object-contain mb-4" 
                />
                <p className="text-[13px] font-medium text-[#424143]">
                  Senang untuk Top Up pinjaman sedia ada untuk menampung keperluan kewangan tambahan
                </p>
              </div>

              <div className="w-[250px] h-[250px] aspect-square flex flex-col items-center justify-center text-center bg-white p-6 shadow-md">
                <Image src="/assets/images/tiada-caj-tambahan.png" alt="Tiada Caj" width={100} height={100} className="w-[100px] h-[100px] object-contain mb-4" style={{ width: "auto", height: "auto" }} />
                <p className="text-[13px] font-medium text-[#424143]">Tiada caj tambahan atau tersembunyi—proses lebih mudah dan lancar</p>
              </div>

              <div className="w-[250px] h-[250px] aspect-square flex flex-col items-center justify-center text-center bg-white p-6 shadow-md">
                <Image src="/assets/images/faedah-dahulu-dikecualikan.png" alt="Faedah Dikecualikan" width={100} height={100} className="w-[100px] h-[100px] object-contain mb-4" style={{ width: "auto", height: "auto" }} />
                <p className="text-[13px] font-medium text-[#424143]">Selepas Top Up, sebarang faedah tertunggak daripada pinjaman terdahulu akan dikecualikan</p>
              </div>
            </div>
            
          </div>
        </section>

        {/* Rakan Kongsi / Video Section */}
        {/* Replaced old section_space classes with clean Tailwind padding */}
        <section className="py-12 lg:py-20 bg-white relative z-20">
          <div className="container mx-auto px-4 lg:max-w-[1200px]">
            
            {/* Used gap-8 to separate items cleanly instead of stacking px-4 padding */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              
              <div className="w-full lg:w-6/12">
                  <img src="/assets/images/kaedah-tambah-nilai.png" loading="lazy" className="w-100" alt="Kaedah Tambah Nilai" /> 
              </div>

              

              {/* Right Side: Text Content (Removed nested px-4) */}
              <div className="w-full lg:w-6/12">
                <h3 className="text-blue text-[22px] md:text-[28px] lg:text-[30px] font-bold mb-4">
                  Kaedah Tambah Nilai/Top-Up
                </h3>
                
                <ul className="list-disc leading-[1.3] pl-5 mb-4 space-y-2 text-[#424143] text-[14px] md:text-[15px] lg:text-[16px]">
                  <li>Jumlah pembiayaan bagi Pinjaman Top-Up dikira dengan menolak baki pinjaman terdahulu daripada amaun prinsipal Pinjaman Top-Up yang anda mohon</li>
                  <li>Sebaik sahaja permohonan Pinjaman Top-Up anda diluluskan, akaun pinjaman terdahulu anda akan dianggap selesai sepenuhnya, dan akaun Pinjaman Top-Up yang baharu akan dibuka. Jadual pembayaran balik anda juga akan dikemas kini.</li>
                  <li>Jumlah Pinjaman Top-Up mesti sama atau lebih tinggi daripada jumlah pinjaman terdahulu.</li>
                </ul>
                <br />

                <p className="mb-0 italic text-[14px] md:text-[15px] lg:text-[16px] leading-[1.3] text-[#424143]">
                  Sebagai contoh: <br />
                  <span className="text-blue font-bold">Pinjaman Terdahulu: RM 3,000</span> <br />
                  Amaun telah dibayar: RM1,000 <br />
                  Baki Pinjaman: RM3,000 - RM1,000 = <span className="text-blue font-bold">RM2,000</span><br />
                  <br />
                  <span className="text-red-500 font-bold">Jumlah Prinsipal Pinjaman Top-Up: RM5,000</span> <br />
                  Jumlah Pengeluaran Wang Tambah Nilai (Yang Anda Bakal Terima): RM3,000
                  
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