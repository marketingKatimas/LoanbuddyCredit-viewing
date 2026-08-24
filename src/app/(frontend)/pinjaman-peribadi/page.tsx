// import PinjamanPeribadiPage from "../pinjaman-peribadi-kl-sarawak/page";

// export default PinjamanPeribadiPage;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PerkhidmatanKamiPage() {
  const [activeTab, setActiveTab] = useState<"peribadi" | "tambah-nilai">("peribadi");

  return (
    <div className="page_wrapper bg-white">
      <Header />

      <main className="page_content">
        
        {/* 1. Hero Section */}
        <section 
          className="w-full bg-cover bg-center bg-no-repeat py-16 lg:py-24"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container mx-auto px-4 lg:max-w-[1000px] text-center">
            <h1 className="!text-[20px] md:!text-[25px] lg:!text-[25px] font-bold text-blue leading-tight mb-6">
              Terokai Perkhidmatan Pinjaman Online: <br className="hidden md:block" />
              Pinjaman Peribadi Online dan Pinjaman Tambah Nilai
            </h1>
            <p className="text-[16px] md:text-[16px] text-[#424143] !mt-10 font-medium leading-[1.6]">
              Loanbuddy Credit menyediakan perkhidmatan pinjaman kewangan peribadi untuk anda yang mencari penyelesaian masalah kewangan. Kami amat memahami keperluan anda dan sentiasa bersedia untuk membantu anda dengan perkhidmatan kewangan yang memuaskan dan berbaloi.
            </p>
            <p className="text-[14px] md:text-[16px] text-[#424143] font-medium leading-[1.6] mt-4">
              Matlamat kami adalah untuk memberikan bantuan kewangan yang telus, adil, dan mengikut keperluan individu. Kami percaya bahawa setiap individu mempunyai keperluan unik apabila ia melibatkan pembiayaan, oleh itu kami akan memastikan bahawa perkhidmatan kami dirangka secara khusus untuk menyesuaikan setiap pelanggan.
            </p>
            <p className="text-[14px] md:text-[16px] text-[#424143] font-medium leading-[1.6] mt-4 italic">
              Jangan bimbang, maklumat peribadi anda dijamin selamat dan terpelihara! Keselamatan data anda adalah keutamaan kami.
            </p>
          </div>
        </section>

        {/* 2. Tab Controller Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 lg:max-w-[1200px]">
            <div className="text-center mb-10">
              <h2 className="text-[22px] md:text-[26px] font-bold text-blue mb-8 lg:!mb-10">Perkhidmatan Pinjaman Loanbuddy Credit</h2>
              
              {/* Pill Tabs */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
                <button
                  onClick={() => setActiveTab("peribadi")}
                  className={`!px-12 md:!px-20 !py-3 md:!py-4 !rounded-full font-bold text-[14px] md:text-[16px] transition-all duration-300 border-0 outline-none shadow-sm ${
                    activeTab === "peribadi" 
                      ? "!bg-[#044BD9] !text-white" 
                      : "!bg-[#BDBDBD] !text-white hover:!bg-[#D1D1D1]"
                  }`}
                >
                  Pinjaman Peribadi Online
                </button>
                
                <button
                  onClick={() => setActiveTab("tambah-nilai")}
                  className={`!px-12 md:!px-20 !py-3 md:!py-4 !rounded-full font-bold text-[14px] md:text-[16px] transition-all duration-300 border-0 outline-none shadow-sm ${
                    activeTab === "tambah-nilai" 
                      ? "!bg-[#044bd9] !text-white" 
                      : "!bg-[#BDBDBD] !text-white hover:!bg-[#D1D1D1]"
                  }`}
                >
                  Pinjaman Tambah Nilai
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* TAB 1: PINJAMAN PERIBADI ONLINE CONTENT              */}
        {/* ==================================================== */}
        {activeTab === "peribadi" && (
          <div className="animate-fade-in">
            {/* Features Section */}
            <section className="py-10 bg-white">
              <div className="container mx-auto px-4 lg:max-w-[1300px]">
                <h3 className="text-[22px] font-bold text-blue mb-4">Pinjaman Peribadi Online</h3>
                <p className="text-[16px] lg:!text-[16px] text-[#424143] mb-12 leading-tight">
                  Dalam kehidupan yang moden, hampir setiap keperluan memerlukan peruntukan kewangan yang mencukupi. Sama ada untuk situasi kecemasan, pembiayaan pendidikan anak, pengurusan bil bulanan, atau keperluan gaya hidup, pinjaman peribadi online kami direka untuk memastikan anda mendapat akses kepada dana yang diperlukan tepat pada waktunya.
                  <br /><br />
                  Dengan Loanbuddy Credit, anda menikmati kemudahan dan keyakinan apabila berurusan dengan penyedia perkhidmatan kewangan yang dipercayai. Berikut adalah beberapa kelebihan memilih pinjaman peribadi kami:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:mt-20 lg:!gap-30 text-center">
                  
                  {/* Item 1 */}
                  <div className="flex flex-col items-start text-left">
                    <img 
                      src="/assets/images/permohonan-mudah.png" 
                      alt="Kelulusan Pantas" 
                      className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain mb-4" 
                    />
                    <h4 className="font-bold text-blue text-[18px] lg:!text-[20px] mb-4">Kelulusan Pantas</h4>
                    <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight">Permohonan pinjaman peribadi Loanbuddy Credit boleh dibuat sepenuhnya secara online, dari mana-mana lokasi yang selesa untuk anda. Hanya isi maklumat ringkas, dan dengan dokumen lengkap, kelulusan boleh diperoleh seawal 24 jam* <br/><br /><span className="text-[12px] italic">*Tertakluk kepada penilaian dan saringan individu.</span></p>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="flex flex-col items-start text-left">
                    <img 
                      src="/assets/images/syarat-fleksibel.png" 
                      alt="Syarat-Syarat Fleksibel" 
                      className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] object-contain mb-4" 
                    />
                    <h4 className="font-bold text-blue text-[18px] lg:!text-[20px] mb-4">Syarat-Syarat Fleksibel</h4>
                    <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight">Syarat-syarat fleksibel Loanbuddy Credit direka untuk memenuhi keperluan pelbagai lapisan masyarakat. Dari tempoh pembayaran balik hingga syarat umur dan pendapatan, setiap permohonan dipertimbangkan secara peribadi dan profesional agar selaras dengan keperluan kewangan individu.</p>
                  </div>
                  
                  {/* Item 3 */}
                  <div className="flex flex-col items-start text-left">
                    <img 
                      src="/assets/images/kad-atm-2.png" 
                      alt="Tidak Memegang Kad ATM" 
                      className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] object-contain mb-4" 
                    />
                    <h4 className="font-bold text-blue text-[18px] lg:!text-[20px] mb-4">Tidak Memegang Kad ATM</h4>
                    <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight">Loanbuddy Credit tidak memegang sebarang kad ATM atau kad pengenalan dari peminjaman-peminjam kami, sesuai dan selaras dengan standard prosedur di bawah Kementerian Perumahanan dan Kerajaan Tempatan (KPKT).</p>
                  </div>

                </div>
              </div>
            </section>

            {/* Syarat Section */}
            <section className="py-12 bg-white">
              <div className="container mx-auto px-4 lg:max-w-[1300px] text-center">
                <h3 className="text-[22px] lg:!text-[25px] font-bold text-blue !mb-10">Syarat Pinjaman Fleksibel Kami</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
                  <div className="flex items-start gap-3">
                    <svg className="w-15 h-15 text-[#044BD9] flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <div>
                      <h4 className="font-bold text-[16px] lg:!text-[20px] text-blue mb-2">Jumlah Pinjaman</h4>
                      <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight">Pinjaman boleh dibuat dari <span className="font-bold">serendah RM1,000</span> hingga <span className="font-bold">maksimum RM50,000</span>, tertakluk kepada kelayakan dan penilaian kredit. </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-15 h-15 text-[#044BD9] flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <div>
                      <h4 className="font-bold text-[16px] lg:!text-[20px] text-blue mb-2">Bayaran Balik Fleksibel </h4>
                      <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight">Bayaran balik yang fleksibel tanpa caj penyelesaian awal. Selesaikan pinjaman anda pada bila-bila masa dalam tempoh pinjaman, memberikan anda kawalan penuh ke atas kewangan dan kebebasan untuk melangsaikan pinjaman mengikut kemampuan anda.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-15 h-15 text-[#044BD9] flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <div>
                      <h4 className="font-bold text-[16px] lg:!text-[20px] text-blue mb-2">Pembayaran dalam Talian</h4>
                      <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight">Kemudahan pembayaran dalam talian melalui Direct Debit, pemindahan bank dalam talian, dan JomPay tersedia agar bayaran balik pinjaman anda dapat dilakukan dengan lebih senang. </p>
                    </div>
                  </div>
                </div>

                <a href="/mohon-pinjaman-online" className="inline-block bg-[#F20505] text-white font-bold py-3 px-10 rounded-full hover:bg-[#d00000] transition-colors shadow-md">
                  Mohon Sekarang
                </a>
              </div>
            </section>

            
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 2: PINJAMAN TAMBAH NILAI CONTENT                 */}
        {/* ==================================================== */}
        {activeTab === "tambah-nilai" && (
          <div className="animate-fade-in bg-white py-12">
            <div className="container mx-auto px-4 lg:!max-w-[1300px]">
              
              <h3 className="text-[20px] md:!text-[25px] font-bold text-blue mb-5 text-left">
                Pinjaman Tambah Nilai
              </h3>
              <p className="text-[14px] md:text-[16px] text-[#424143] mb-16 text-left leading-tight">
                Pinjaman Tambah Nilai Loanbuddy Credit ditawar khusus kepada pelanggan sedia ada yang memerlukan kewangan tambahan. Produk ini mengekalkan komitmen kami terhadap kemudahan, ketelusan dan kebolehpercayaan. Berikut adalah keistimewaan Pinjaman Tambah Nilai Loanbuddy Credit:
              </p>

              {/* Responsive Grid with Center Mascot */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-8 items-center justify-items-center relative max-w-[1300px] mx-auto py-8">
                
                {/* === LEFT COLUMN === */}
                <div className="flex flex-col gap-6 md:gap-8 w-full justify-center h-full py-4 md:py-8">
                  
                  {/* Item 1 */}
                  <div className="flex flex-col md:flex-row text-center md:text-right lg:!text-start items-center md:items-start gap-4 w-full justify-end">
                    <div className="order-1 md:order-2 flex-1">
                      <h4 className="font-bold !text-[#044BD9] mb-2 text-[16px] md:!text-[20px]">Integrasi Lancar</h4>
                      <p className="text-[13px] md:text-[16px] text-[#424143] leading-tight">
                        Nikmati akses kemudahan Pinjaman Tambah Nilai melalui aplikasi kami atau hubungi khidmat pelanggan Loanbuddy Credit untuk bantuan segera.
                      </p>
                    </div>
                    <div className="order-2 md:order-1 w-[70px] h-[70px] md:w-[80px] md:h-[80px] flex-shrink-0 flex items-center justify-center">
                      <img src="/assets/images/integrasi-lancar.png" alt="Integrasi Lancar" className="w-full h-full object-contain" />
                    </div>
                  </div>

                  {/* Sandwiched Arrow Left (Hidden on Mobile) */}
                  <div className="hidden md:flex justify-end w-full pr-[10px] lg:pl-[10px]">
                    <img src="/assets/images/arrow-left-right.png" alt="Arrow Separator" className="h-[80px] w-auto object-contain" />
                  </div>
                  
                  {/* Item 2 */}
                  <div className="flex flex-col md:flex-row text-center md:text-right lg:!text-start items-center md:items-start gap-4 w-full justify-end">
                    <div className="order-1 md:order-2 flex-1">
                      <h4 className="font-bold !text-[#044BD9] mb-2 text-[16px] md:!text-[20px]">Terma Pembayaran Balik Lanjutan</h4>
                      <p className="text-[13px] md:text-[16px] text-[#424143] leading-tight">
                        Jadual pembayaran balik yang dikemas kini akan dikeluarkan selepas kelulusan Pinjaman Tambah Nilai.
                      </p>
                    </div>
                    <div className="order-2 md:order-1 w-[70px] h-[70px] md:w-[80px] md:h-[80px] flex-shrink-0 flex items-center justify-center">
                      <img src="/assets/images/terma-pembayaran.png" alt="Terma Pembayaran Balik Lanjutan" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>

                {/* === CENTER COLUMN: MASCOT === */}
                <div className="w-full flex justify-center items-center relative py-8 md:py-0 px-2 lg:px-8">
                  <Image 
                    src="/assets/images/ladybug-holding-phone.png" 
                    alt="Loanbuddy Mascot Holding Phone" 
                    width={300} 
                    height={400} 
                    className="w-[300px] md:w-[260px] lg:w-[350px] object-contain relative z-10" 
                  />
                </div>

                {/* === RIGHT COLUMN === */}
                <div className="flex flex-col gap-6 md:gap-8 w-full justify-center h-full py-4 md:py-8">
                  
                  {/* Item 3 */}
                  <div className="flex flex-col md:flex-row text-center md:text-right lg:!text-start items-center md:items-start gap-4 w-full justify-start">
                    <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] flex-shrink-0 flex items-center justify-center">
                       <img src="/assets/images/pengecualian-faedah.png" alt="Pengecualian Faedah Tertunggak" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="font-bold !text-[#044BD9] mb-2 text-[16px] md:!text-[20px]">Pengecualian Faedah Tertunggak</h4>
                      <p className="text-[13px] md:text-[16px] text-[#424143] leading-tight">
                        Faedah tertunggak daripada pinjaman asal akan diketepikan (waived).
                      </p>
                    </div>
                  </div>

                  {/* Sandwiched Arrow Right (Hidden on Mobile & Rotated 180deg) */}
                  <div className="hidden md:flex justify-start w-full pl-[10px]">
                    <img src="/assets/images/arrow-left-right.png" alt="Arrow Separator" className="h-[80px] w-auto object-contain rotate-180" />
                  </div>
                  
                  {/* Item 4 */}
                  <div className="flex flex-col md:flex-row text-center md:text-right lg:!text-start items-center md:items-start gap-4 w-full justify-start">
                    <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] flex-shrink-0 flex items-center justify-center">
                      <img src="/assets/images/permohonan-semula-lancar.png" alt="Permohonan Semula Lancar" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="font-bold !text-[#044BD9] mb-2 text-[16px] md:!text-[20px]">Permohonan Semula Lancar</h4>
                      <p className="text-[13px] md:text-[16px] text-[#424143] leading-tight">
                        Mudah untuk menambah pinjaman sedia ada anda dengan permohonan semula yang pantas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* === BOTTOM CENTER ITEM === */}
                <div className="md:col-span-3 mt-4 md:mt-8 flex flex-col items-center justify-center w-full">
                  
                  {/* Arrow Down (Hidden on Mobile) stacked on top */}
                  <img src="/assets/images/arrow-down.png" alt="Arrow Down" className="hidden md:block h-[40px] lg:h-[60px] w-auto object-contain mb-6 lg:mb-8" />

                  <div className="flex flex-col md:flex-row text-center md:text-right lg:!text-start items-center md:items-start gap-4 w-full max-w-[400px]">
                    <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] flex-shrink-0 flex items-center justify-center">
                      <img src="/assets/images/jumlah-pinjaman-besar.png" alt="Jumlah Pinjaman Lebih Besar" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="font-bold !text-[#044BD9] mb-2 text-[16px] md:!text-[20px]">Jumlah Pinjaman Lebih Besar</h4>
                      <p className="text-[13px] md:!text-[16px] text-[#424143] leading-tight">
                        Nikmati pembiayaan yang lebih tinggi tanpa peningkatan kadar faedah.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              
              <div className="mt-10 text-center max-w-[1200px] mx-auto pt-10">
                <p className="text-[13px] md:!text-[16px] text-[#424143] leading-tight font-medium">
                  Kedua-dua Pinjaman Peribadi Online dan Pinjaman Tambah Nilai menawarkan proses permohonan yang lancar, transaksi yang selamat dan kelulusan yang pantas. Di Loanbuddy Credit, kami komited untuk menyokong kesejahteraan kewangan anda serta memberikan ketenangan fikiran dalam menghadapi waktu yang mencabar.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Siapa Yang Boleh Memohon */}
            <section className="py-12 bg-[#f8f9fa]">
              <div className="container mx-auto px-4 lg:max-w-[1000px]">
                <h3 className="text-[22px] font-bold !text-[#044BD9] mb-5">Siapa yang Boleh Memohon?</h3>
                <p className="text-[16px] text-[#424143] mb-8 lg:!mb-10 leading-tight">
                  Pinjaman online mudah lulus Loanbuddy Credit memberikan kemudahan permohonan dengan syarat yang fleksibel, memastikan anda dapat mengakses pembiayaan dengan cepat dan mudah. Berikut adalah syarat-syarat utama:

                </p>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-3 ">
                    <svg className="w-15 h-15 text-[#044BD9] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <div>
                      <h4 className="font-bold text-[16px] lg:!text-[20px] text-blue mb-2">Jumlah Pinjaman</h4>
                      <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight">Pinjaman boleh dibuat dari <span className="font-bold">serendah RM1,000</span> hingga <span className="font-bold">maksimum RM50,000</span>, tertakluk kepada kelayakan dan penilaian kredit. </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 ">
                    <svg className="w-15 h-15 text-[#044BD9] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <div>
                      <h4 className="font-bold text-[16px] lg:!text-[20px] text-blue mb-2">Pekerjaan Berpendapatan Tetap</h4>
                      <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight">Mempunyai pekerjaan tetap dengan pendapatan bulanan sekurang-kurangnya RM1,700 ke atas.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 ">
                    <svg className="w-15 h-15 text-[#044BD9] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <div>
                      <h4 className="font-bold text-[16px] lg:!text-[20px] text-blue mb-2">Pengesahan Umur</h4>
                      <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight">Pemohon perlulah berumur dalam lingkungan 18 tahun sehingga maksimum umur 60 tahun semasa tempoh pinjaman.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Proses Permohonan */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4 lg:max-w-[1000px]">
                <h3 className="text-[22px] lg:!text-[25px] font-bold !text-[#044BD9] mb-4 lg:mb-6">Proses Permohonan Mudah dan Tanpa Kerumitan</h3>
                <p className="text-[14px] md:text-[16px] text-[#424143] mb-10 lg:!mb-12 leading-relaxed">
                  Permohonan pinjaman online mudah lulus Loanbuddy Credit boleh dilakukan sepenuhnya dalam talian, dengan langkah-langkah yang mudah dan efisien.
                </p>
                
                <div className="space-y-4 md:space-y-5 relative">
                  {/* Vertical Line Connecting Circles */}
                  {/* left-[23px] perfectly centers a 2px line behind a 48px (w-12) circle */}
                  <div className="absolute left-[23px] top-7 bottom-6 w-0.5 bg-[#044BD9] hidden md:block z-0"></div>
                  
                  {[
                    { title: "Umur Pemohon", desc: "Sila berikan butiran asas dan maklumat hubungan anda bagi membolehkan kami menghubungi anda." },
                    { title: "Lampirkan Dokumen", desc: "Sila muat naik salinan MyKad dan penyata gaji / bank / KWSP terkini bagi tujuan pengesahan." },
                    { title: "Proses Kelulusan", desc: "Loanbuddy Credit akan menyemak kelayakan kredit anda dengan mengambil kira nisbah hutang kepada pendapatan dan keadaan kewangan semasa." },
                    { title: "Tandatangan Kontrak dalam Talian", desc: "Semak serta sahkan maklumat anda dan berikan tandatangan secara dalam talian untuk melengkapkan proses permohonan dalam talian." },
                    { title: "Terima Dana", desc: "Dana pinjaman akan dikreditkan ke akaun berdaftar anda dalam tempoh 24 jam bekerja selepas perjanjian ditandatangani secara dalam talian." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-stretch md:items-center gap-4 md:gap-8 relative z-10">
                      
                      {/* Number Circle */}
                      <div className="w-12 h-12 rounded-full bg-[#044BD9] text-white flex items-center justify-center font-bold text-[18px] flex-shrink-0 shadow-sm mt-2 md:mt-0">
                        {idx + 1}
                      </div>
                      
                      {/* Uniform Content Box */}
                      <div className="px-4 py-3 w-full flex flex-col justify-center bg-[#f4f4f5]">
                        <h4 className="font-bold !text-[#044BD9] mb-1.5 text-[16px] md:text-[20px] lg:!text-[20px]">{step.title}</h4>
                        <p className="text-[13px] md:text-[16px] lg:!text-[16px] text-[#424143] leading-relaxed m-0">{step.desc}</p>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ==================================================== */}
        {/* SHARED SECTIONS (Visible outside of tabs)              */}
        {/* ==================================================== */}

        {/* Komitmen Kami Section with Custom SVG Wavy Timeline */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 lg:max-w-[1100px]">
            <h2 className="text-[22px] md:!text-[28px] font-bold !text-[#044BD9] text-center !mb-16 lg:!mb-16">
              Komitmen Kami kepada Anda
            </h2>

            {/* DESKTOP VIEW: Wavy Timeline */}
            <div className="hidden md:block relative w-full max-w-[1200px] mx-auto h-[350px] mb-16">
              
            {/* Wavy dotted line */}
            <svg
              viewBox="0 0 1000 300"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="
                  M 150 220

                  C 220 220, 250 280, 330 250
                  C 400 220, 420 80, 500 100
                  C 570 115, 590 180, 680 150
                  C 750 125, 760 40, 850 50
                "
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="8 8"
                fill="none"
              />

              {/* Nodes */}
              <circle cx="150" cy="220" r="14" fill="#044BD9" />
              <circle cx="500" cy="100" r="14" fill="#044BD9" />
              <circle cx="850" cy="50" r="14" fill="#044BD9" />
            </svg>

              {/* Text Block 1 (Left - Above Node) */}
              <div className="absolute top-[15%] left-[3%] w-[24%] text-center">
                <h4 className="font-bold !text-[#044BD9] mb-2 text-[15px] lg:!text-[20px]">Permohonan Mudah</h4>
                <p className="text-[12px] lg:text-[13px] !text-[#424143] leading-relaxed">
                  Loanbuddy Credit menekankan kecekapan dalam perkhidmatan. Proses permohonan direka untuk disiapkan dalam beberapa minit dengan keperluan dokumentasi yang minimum, memastikan pengalaman yang lancar dan mesra pelanggan.
                </p>
              </div>

              {/* Text Block 2 (Center - Below Node) */}
              <div className="absolute top-[50%] left-[40%] w-[20%] text-center">
                <h4 className="font-bold !text-[#044BD9] mb-2 text-[15px] lg:!text-[20px]">Wang Tunai Segera</h4>
                <p className="text-[12px] lg:text-[13px] !text-[#424143] leading-relaxed">
                  Loanbuddy Credit komited untuk pemprosesan yang pantas, dengan purata kelulusan dalam tempoh tiga hari bekerja dan/atau secepat 24 jam.
                  <br /><br />
                  <span className="italic">*bergantung kepada kelengkapan dokumen.</span>
                </p>
              </div>

              {/* Text Block 3 (Right - Below Node) */}
              <div className="absolute top-[34%] left-[75%] w-[24%] text-center">
                <h4 className="font-bold !text-[#044BD9] mb-2 text-[15px] lg:!text-[20px]">Penyedia yang Dipercayai</h4>
                <p className="text-[12px] lg:text-[13px] !text-[#424143] leading-relaxed">
                  Loanbuddy Credit didaftarkan di bawah SSM dan dilesenkan mengikut Akta Peminjam Wang serta oleh KPKT. Loanbuddy Credit memastikan setiap transaksi dijalankan selamat, terjamin, dan tahap ketelusan yang tinggi.
                </p>
              </div>
            </div>

            {/* MOBILE VIEW: Stacked Timeline */}
            <div className="md:hidden flex flex-col gap-10 mb-16 relative pl-4">
              
              {/* Vertical DASHED line connecting nodes */}
              {/* left-[23px] perfectly centers the 2px border behind the w-4 (16px) circle */}
              <div className="absolute left-[23px] top-2 bottom-6 w-0 border-l-[2px] border-dashed border-[#cbd5e1] z-0"></div>

              {[
                {
                  title: "Permohonan Mudah",
                  desc: "Loanbuddy Credit menekankan kecekapan dalam perkhidmatan. Proses permohonan direka untuk disiapkan dalam beberapa minit dengan keperluan dokumentasi yang minimum, memastikan pengalaman yang lancar dan mesra pelanggan."
                },
                {
                  title: "Wang Tunai Segera",
                  desc: "Loanbuddy Credit komited untuk pemprosesan yang pantas, dengan purata kelulusan dalam tempoh tiga hari bekerja dan/atau secepat 24 jam.\n\n*bergantung kepada kelengkapan dokumen."
                },
                {
                  title: "Penyedia yang Dipercayai",
                  desc: "Loanbuddy Credit didaftarkan di bawah SSM dan dilesenkan mengikut Akta Peminjam Wang serta oleh KPKT. Loanbuddy Credit memastikan setiap transaksi dijalankan selamat, terjamin, dan tahap ketelusan yang tinggi."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 relative z-10">
                  {/* The ring-4 ring-white acts as an "eraser" to cut out the dashed line behind the dot! */}
                  <div className="w-4 h-4 rounded-full bg-[#044BD9] flex-shrink-0 mt-1 shadow-sm !ring-8 ring-white"></div>
                  <div>
                    <h4 className="font-bold !text-[#044BD9] mb-2 text-[16px]">{item.title}</h4>
                    <p className="text-[13px] !text-[#424143] leading-relaxed whitespace-pre-line">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkmark Items */}
            <div className="max-w-[1000px] mx-auto flex flex-col gap-8  pt-12">
              
              <div className="flex gap-4 md:gap-6 items-start">
                {/* Solid Blue Checkmark Circle */}
                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#044BD9] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5l-4-4 1.41-1.41L11 13.67l6.59-6.59L19 8.5l-8 8z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold !text-[#044BD9] text-[16px] md:text-[18px] lg:!text-[20px] mb-1">Warisan Amanah dan Kepakaran</h4>
                  <p className="text-[13px] md:text-[15px] !text-[#424143] leading-tight">
                    Loanbuddy Credit Sdn. Bhd. (“Loanbuddy Credit”) ditubuhkan dan beroperasi sejak 2009. Sebelum ini dikenali sebagai Azio Credit, Loanbuddy Credit membawa kepakaran dalam industri pinjaman untuk menyediakan sokongan kewangan yang dipercayai kepada peminjam. 
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6 items-start">
                {/* Solid Blue Checkmark Circle */}
                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#044BD9] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5l-4-4 1.41-1.41L11 13.67l6.59-6.59L19 8.5l-8 8z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold !text-[#044BD9] text-[16px] md:text-[18px] lg:!text-[20px] mb-1">Berlesen dan Diperakui Sepenuhnya</h4>
                  <p className="text-[13px] md:text-[15px] !text-[#424143] leading-tight">
                    Loanbuddy Credit berlesen sepenuhnya di bawah Kementerian Perumahan dan Kerajaan Tempatan (KPKT) sebagai penyedia pinjaman dan perkhidmatan kewangan sejak tahun 2009.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA Block */}
        <section className="py-16 md:py-20 bg-[#f4f4f5]">
          <div className="container mx-auto px-4 lg:max-w-[1000px]">
            <h3 className="font-bold !text-[#044BD9] text-[20px] md:text-[20px] lg:!text-[20px] mb-12 lg:!mb-8">
              Mulakan Perjalanan Kewangan Anda Bersama Loanbuddy Credit
            </h3>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] !text-[#424143] mb-4 leading-relaxed">
              Sama ada untuk keperluan kecemasan atau mendapatkan pembiayaan tambahan bagi mencapai matlamat hidup, Loanbuddy Credit adalah rakan kongsi yang dipercayai dalam memastikan kestabilan kewangan dan ketenangan fikiran anda.
            </p>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] !text-[#424143] leading-relaxed">
              <span className="font-bold">Mohon dalam talian sekarang</span> dan nikmati kemudahan, fleksibiliti serta kebolehpercayaan yang kami tawarkan. Sertai kami dan alami bagaimana perkhidmatan pinjaman Loanbuddy Credit dapat membantu merealisasikan impian kewangan anda.
            </p>
          </div>
        </section>

      {/* Put </main> right below this block! */}

      </main>

      {/* Global CSS for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />

      <Footer />
    </div>
  );
}