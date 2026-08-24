"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AplikasiPage() {
  return (
    <div className="page_wrapper bg-white">
      {/* Header */}
      <Header />

      <main className="page_content">
        
        {/* 1. Hero Banner Section */}
        <section 
          className="w-full bg-cover bg-center bg-no-repeat flex items-center py-6 lg:py-0 lg:h-[65vh]"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          {/* Container creates the side gaps to match the other pages */}
          <div className="container mx-auto px-4 lg:max-w-[1200px] lg:h-[100%]">
            
            {/* 
              bg-[85%_center] on mobile shifts the image to the right, hiding the mascot.
              md:bg-[center_top] restores the full image on desktop.
            */}
            <div 
              className="relative w-full overflow-hidden bg-cover bg-[68%_center] md:bg-[center_top] bg-no-repeat min-h-[500px] lg:h-full flex items-start justify-end rounded-lg md:rounded-none shadow-sm md:shadow-none"
              style={{ backgroundImage: `url('/assets/images/App-banners-No-Copy.png')` }}
            >
              
              {/* Content Container - Pushed to the right and aligned to the top-middle to sit above embedded QRs */}
              <div className="relative z-10 w-full lg:w-[60%] px-6 md:px-12 py-10 md:py-16 text-center md:text-left flex flex-col items-center md:!items-start h-full">
                
                <h1 className="text-[25px] md:text-[32px] lg:text-[35px] font-bold !text-[#044BD9] leading-tight mb-4 text-center md:!text-left">
                  Loanbuddy Credit <br className="hidden md:block" /> di Hujung Jari Anda
                </h1>
                
                <p className="text-[14px] md:text-[15px] text-[#424143] mb-6 md:!mb-10 font-bold max-w-[600px] leading-relaxed mx-auto md:mx-0 text-center md:!text-start">
                  Permohonan pinjaman peribadi kini lebih pantas dan mudah. Muat turun aplikasi kami sekarang untuk memohon pada bila-bila masa, di mana jua.
                </p>
                
                {/* Slot Machine Red Button */}
                <a
                  href="#"
                  className="group relative inline-flex h-[50px] items-start justify-center overflow-hidden rounded-full border-[2px] border-[#F20505] bg-[#F20505] px-[60px] font-bold !text-white shadow-md whitespace-nowrap transition-colors duration-300 hover:!bg-white hover:!text-[#F20505]"
                >
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                    <small className="flex h-[50px] items-center text-[16px]">Ketahui Lebih Lanjut</small>
                    <small className="flex h-[50px] items-center text-[16px]">Ketahui Lebih Lanjut</small>
                  </span>
                </a>

                {/* The QR codes and badges are natively rendered in the background image below this area! */}
              </div>

            </div>
          </div>
        </section>

        {/* 2. Intro & Features Section */}
        <section className="py-12 md:py-20 bg-[#F2F2F2]">
          <div className="container mx-auto px-4 lg:max-w-[1000px]">
            
            <h2 className="text-[18px] md:!text-[25px] font-bold !text-[#044BD9] mb-6 lg:!mb-10 leading-tight">
              Aplikasi Loanbuddy Credit Kini Tersedia di Google Play & Apple App Store - Permohonan Pinjaman Anda Kini Lebih Mudah & Pantas!
            </h2>
            
            <div className="text-[14px] md:text-[15px] text-[#424143] space-y-4 mb-12 lg:!mb-20 leading-relaxed">
              <p>
                Dengan sukacitanya kami ingin memaklumkan bahawa <span className="font-bold">Aplikasi Mudah Alih Loanbuddy Credit</span> kini tersedia untuk dimuat turun di <span className="font-bold">Google Play Store & Apple App Store!</span>
              </p>
              <p>
                Tidak kira anda pelanggan baharu atau pelanggan sedia ada, aplikasi ini direka untuk memudahkan anda memohon pinjaman peribadi, memantau status permohonan dan mengurus pinjaman anda. Semuanya tersedia di hujung jari!
              </p>
              <p>Ciri-ciri utama aplikasi Loanbuddy Credit:</p>
            </div>

            {/* 5 Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 justify-items-center text-center">
              {[
                { title: "Permohonan Pinjaman Segera", img: "permohonan-segera.png" },
                { title: "Pantau Status Permohonan", img: "pantau-status-permohonan.png" },
                { title: "Notifikasi Segera", img: "notifikasi-segera.png" },
                { title: "Reka Bentuk Mesra Pengguna", img: "reka-bentuk-mesra.png" },
                { title: "Sokongan Pelanggan Terus dari Aplikasi", img: "sokongan-pelanggan.png" },
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center max-w-[200px]">
                  <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center mb-4">
                     <img src={`/assets/images/${feature.img}`} alt={feature.title} className="w-full h-full object-contain" />
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
              Kenapa Pilih Loanbuddy Credit?
            </h2>
            <div className="text-[14px] md:text-[15px] text-[#424143] space-y-4 leading-relaxed">
              <p>
                Sebagai rakan pinjaman peribadi anda yang diyakini di Malaysia, Loanbuddy Credit menawarkan proses yang pantas, syarat yang telus dan bantuan khidmat pelanggan yang unggul. Kini, segalanya lebih mudah dengan adanya aplikasi Loanbuddy Credit!
              </p>
              <p>
                Urus pinjaman anda dengan selamat, cepat dan fleksibel secara terus melalui telefon pintar anda, pada bila-bila masa, di mana sahaja anda berada.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Langkah Muat Turun Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 lg:max-w-[1000px]">
            
            <h2 className="text-[20px] md:!text-[25px] font-bold !text-[#044BD9] text-center !mb-20 lg:!mb-24">
              Muat Turun Aplikasi Loanbuddy Credit
            </h2>

            {/* Changed mobile gap-8 to gap-16 to make room for the downward arrows */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4 relative justify-items-center text-center mb-16">
              
              {/* Langkah 1 */}
              <div className="flex flex-col items-center w-full max-w-[300px] relative">
                <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] mb-4">
                  <img src="/assets/images/icon-langkah-1-app.png" alt="Langkah 1" className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bold !text-[#424143] mb-2 lg:!mb-4 text-[15px] md:text-[16px]">Langkah 1</h4>
                <p className="text-[13px] md:text-[14px] text-[#424143] leading-tight">
                  Buka Google Play atau Apple App Store di peranti anda.
                </p>
                
                {/* Red Arrow (Rotates Down on Mobile) */}
                <div className="absolute -bottom-[50px] left-1/2 -translate-x-1/2 md:bottom-auto md:top-[40%] md:left-auto md:-right-[20px] lg:-right-[35px] md:-translate-y-1/2 md:translate-x-0 z-10 rotate-90 md:rotate-0">
                  <svg className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 4
                      Q5 2.5 6.5 3.5
                      L18 10.8
                      Q19.5 12 18 13.2
                      L6.5 20.5
                      Q5 21.5 5 20
                      Z"
                    fill="#F20505"
                  />
                </svg>
                </div>
              </div>

              {/* Langkah 2 */}
              <div className="flex flex-col items-center w-full max-w-[300px] relative">
                <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] mb-4">
                  <img src="/assets/images/icon-langkah-2-app.png" alt="Langkah 2" className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bold !text-[#424143] mb-2 lg:!mb-4 text-[15px] md:text-[16px]">Langkah 2</h4>
                <p className="text-[13px] md:text-[14px] text-[#424143] leading-tight">
                  Cari "Loanbuddy Credit".
                </p>

                {/* Red Arrow (Rotates Down on Mobile) */}
                <div className="absolute -bottom-[50px] left-1/2 -translate-x-1/2 md:bottom-auto md:top-[40%] md:left-auto md:-right-[20px] lg:-right-[35px] md:-translate-y-1/2 md:translate-x-0 z-10 rotate-90 md:rotate-0">
                  <svg className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 4
                        Q5 2.5 6.5 3.5
                        L18 10.8
                        Q19.5 12 18 13.2
                        L6.5 20.5
                        Q5 21.5 5 20
                        Z"
                      fill="#F20505"
                    />
                  </svg>
                </div>
              </div>

              {/* Langkah 3 */}
              <div className="flex flex-col items-center w-full max-w-[300px]">
                <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] mb-4">
                  <img src="/assets/images/icon-langkah-3-app.png" alt="Langkah 3" className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bold !text-[#424143] mb-2 lg:!mb-4 text-[15px] md:text-[16px]">Langkah 3</h4>
                <p className="text-[13px] md:text-[14px] text-[#424143] leading-tight">
                  Muat turun aplikasi "Loanbuddy Credit".
                </p>
              </div>

            </div>

            {/* Bottom Call To Action */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white  pt-10">
              <p className="text-[14px] md:text-[15px] font-bold text-[#044BD9] text-center md:!text-start max-w-[500px]">
                Muat turun sekarang di Google Play & Apple App Store dan nikmati kemudahan mengurus pinjaman di hujung jari anda!
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="transition-transform hover:-translate-y-1">
                  <img src="/assets/images/badge-google-play.png" alt="Dapatkan di Google Play" className="h-[35px] md:h-[45px] object-contain" />
                </a>
                <a href="#" className="transition-transform hover:-translate-y-1">
                  <img src="/assets/images/badge-app-store.png" alt="Muat turun pada App Store" className="h-[35px] md:h-[45px] object-contain" />
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