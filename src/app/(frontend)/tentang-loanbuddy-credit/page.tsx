"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function TentangKamiPage() {
  

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
                <img src="/assets/images/about-us-page-new.png" loading="lazy" className="about-us-img-1" alt="About Us" />
              </div>
              <div className="col col-lg-7 pt-30 about-us-box-mobile text-left">
                <div className="col-lg-12 perkhidmatan-padding justify-content-start text-grey">
                  <h3 className="item_title item_title_about mb-4 text-blue">Tentang Loanbuddy Credit</h3>
                  <p>
                    Loanbuddy Credit percaya setiap individu layak mendapat akses kewangan yang mudah, mesra dan meyakinkan. Selama lebih 10 tahun berkhidmat dalam dunia kewangan, kami telah membantu ramai pelanggan mencapai impian mereka melalui pembiayaan peribadi, koperasi, konsolidasi, pendidikan, perumahan hingga perniagaan - semuanya dengan proses yang cepat, telus dan selamat.
                    <br />
                    <br />
                    Dipacu pasukan pakar yang berkomited, misi kami jelas:
                    <br />
                  </p>
                  <ul className="list-disc pl-6 mb-0 space-y-2 text-left">
                    <li>Menyediakan solusi kewangan moden, pantas dan berkesan untuk setiap keperluan</li>
                    <li>Mengorak langkah sebagai peneraju kewangan utama di Malaysia</li>
                    <li>Membuka jalan kepada peluang kredit yang setara untuk semua</li>
                    <li>Menjadi sandaran kewangan yang boleh dipercayai di saat diperlukan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        {/* <section className="bg_blue about-us-section-2">
          <div className="container">
            <div className="row cta_loanbuddy cta_loanbuddy_2">
              <div className="col-md-12">
                <h2 className="text-white text-cta-mobile ">
                  <em>
                    Loanbuddy Credit bukan sekadar penyedia pinjaman. Kami adalah rakan perjalanan kewangan anda dalam setiap langkah, cabaran dan peluang.
                  </em>
                </h2>
              </div>
            </div>
          </div>
        </section> */}

        {/* Section 2: Blue Banner */}
        <section className="bg-[#044BD9] relative z-10 lg:-mt-[10vh]">
          <div className="container mx-auto px-4 py-10 lg:py-0 lg:h-[200px] flex items-center justify-center">
            {/* Widened the container slightly to max-w-5xl so the text has room to breathe */}
            <div className="w-full max-w-6xl mx-auto text-center">
              <h2 className="text-white !text-[16px] md:!text-[18px] lg:!text-[24px] italic !font-medium leading-relaxed m-0 px-4">
                Loanbuddy Credit bukan sekadar penyedia pinjaman. Kami adalah rakan perjalanan kewangan anda <br className="hidden md:block" />
                dalam setiap langkah, cabaran dan peluang.
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
                  <h3 className="mb-lg-0 text-blue">Kelebihan Loanbuddy Credit</h3>
                </div>
              </div>
            </div>
            <div className="row row_loanbuddy_kelebihan text-white">
              <img src="/assets/images/about/about-us-fullgrid-1.png" className="d-none d-md-block" alt="Kelebihan Grid" />
            </div>

            {/* Mobile Fallback Carousel (Horizontal Scroll Snap) */}
            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-hide mt-6 px-4">
              <div className="snap-center shrink-0 w-[85%] bg-[#909090] rounded-xl p-6 text-white text-left flex flex-col justify-center min-h-[200px]">
                <h5 className="font-bold text-lg mb-2 text-white ">Penjimatan masa:</h5>
                <p className="text-sm m-0">Proses yang biasanya mengambil masa berhari-hari kini boleh diselesaikan hanya dalam beberapa minit bersama kami.</p>
              </div>
              <div className="snap-center shrink-0 w-[85%] bg-[#034BD9] rounded-xl p-6 text-white text-left flex flex-col justify-center min-h-[200px]">
                <h5 className="font-bold text-lg mb-2 text-white">Cekap:</h5>
                <p className="text-sm m-0">Tak perlu pening kepala menyelidik banyak pemberi pinjaman. Kami sediakan pilihan terbaik yang sesuai untuk anda - semuanya sah dan boleh dipercayai.</p>
              </div>
              <div className="snap-center shrink-0 w-[85%] bg-[#034BD9] rounded-xl p-6 text-white text-left flex flex-col justify-center min-h-[200px]">
                <h5 className="font-bold text-lg mb-2 text-white">Ketenangan fikiran:</h5>
                <p className="text-sm m-0">Hanya berurusan dengan pemberi pinjaman yang telah disemak teliti oleh pasukan pakar kami. Jadi, anda boleh rasa lebih yakin dengan setiap langkah.</p>
              </div>
              <div className="snap-center shrink-0 w-[85%] bg-[#414143] rounded-xl p-6 text-white text-left flex flex-col justify-center min-h-[200px]">
                <h5 className="font-bold text-lg mb-2 text-white">Kesahihan maklumat:</h5>
                <p className="text-sm m-0">Semua maklumat yang anda terima daripada kami telah disahkan, supaya anda boleh membuat keputusan kewangan dengan lebih tenang dan bijak.</p>
              </div>
              <div className="snap-center shrink-0 w-[85%] bg-[#909090] rounded-xl p-6 text-white text-left flex flex-col justify-center min-h-[200px]">
                <h5 className="font-bold text-lg mb-2 text-white">Mengurangkan tekanan:</h5>
                <p className="text-sm m-0">Kurangkan kemungkinan pinjaman tidak diluluskan dengan memohon pemberi pinjaman yang telah dipadankan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Semakan KPKT Pinjaman Berlesen */}
        <section className="py-[50px] lg:py-[70px] bg-[#EDEDED]">
          <div className="container mx-auto px-4">
            <div className="text-center lg:px-[80px]">
              <h3 className="text-[24px] lg:text-[45px] font-bold text-[#044BD9] mb-5 mt-2 text-blue">
                Semakan KPKT Pinjaman Berlesen
              </h3>
              <p className="text-base text-[#424143] mb-0 leading-[1.65]">
                Loanbuddy Credit merupakan pemberi pinjaman wang berlesen dan berdaftar di bawah <a href="https://www.kpkt.gov.my/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#044BD9]">KPKT Malaysia.</a> Pengguna boleh membuat semakan KPKT pinjaman berlesen melalui laman rasmi KPKT untuk pengesahan status lesen dan jaminan keselamatan sebelum memohon pinjaman.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Kenapa Pilih Loanbuddy Credit? */}
        {/* <section className="py-[70px] lg:py-[120px] bg-white overflow-hidden relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-[28px] lg:text-[45px] font-bold text-blue">
                Kenapa Pilih Loanbuddy Credit?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: "kadar-faedah.png", text: "Kadar faedah 1.5% sebulan atau 18% setahun (tetap)" },
                { img: "amaun-pinjaman.png", text: "Amaun pinjaman dari RM1,000 sehingga RM50,000" },
                { img: "tempoh-pinjaman.png", text: "Tempoh pinjaman fleksibel dari 12 bulan sehingga 60 bulan." },
                { img: "kad-atm-2.png", text: "Tidak pegang kad ATM, tiada bayaran pendahuluan" },
                { img: "lulus-pantas.png", text: "Kelulusan permohonan pinjaman dalam masa 1-2 hari bekerja dan pindahan wang pada hari yang sama" },
                { img: "pinjaman-berlesen.png", text: "Pemberi pinjaman berlesen di bawah Kementerian Perumahan dan Kerajaan Tempatan (KPKT)" },
                { img: "permohonan-mudah.png", text: "Permohonan mudah dan pantas, dengan langkah yang jelas dan efisien" },
                { img: "kemudahan-pembayaran.png", text: "Kemudahan pembayaran dalam talian tersedia (Direct Debit, pemindahan bank dalam talian, atau JomPay)" }
              ].map((item, index) => (
                <div key={index} className="bg-[#f3f3f3] border-2 border-[#F6F6F6] rounded-lg p-[30px] flex flex-col items-center justify-center text-center hover:border-[#044BD9] hover:shadow-[0_20px_30px_rgba(31,29,13,0.1)] transition-all duration-300 aspect-square group">
                  <div className="h-[15vh] flex items-center justify-center mb-4">
                    <Image 
                      src={`/assets/images/${item.img}`} 
                      alt="Icon" 
                      width={80} 
                      height={80} 
                      className="group-hover:scale-75 transition-transform duration-300 object-contain" 
                    />
                  </div>
                  <p className="text-base text-[#424143] leading-[1.6] m-0">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* 5. Kenapa Pilih Loanbuddy Credit? */}
        <section className="py-[50px] lg:!py-[50px] bg-white overflow-hidden relative">
          <div className="container mx-auto px-4 lg:max-w-[1200px]">
            <div className="text-center mb-10 lg:mb-12">
              <h2 className="text-blue text-[28px] lg:text-[45px] font-bold text-[#044BD9]">
                Kenapa Pilih Loanbuddy Credit?
              </h2>
            </div>

            {/* Changed to grid-cols-2 for mobile, and lg:grid-cols-4 for desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:!gap-6">
              {[
                { img: "kadar-faedah.png", text: "Kadar faedah 1.5% sebulan atau 18% setahun (tetap)" },
                { img: "amaun-pinjaman.png", text: "Amaun pinjaman dari RM1,000 sehingga RM50,000" },
                { img: "tempoh-pinjaman.png", text: "Tempoh pinjaman fleksibel dari 12 bulan sehingga 60 bulan." },
                { img: "kad-atm-2.png", text: "Tidak pegang kad ATM, tiada bayaran pendahuluan" },
                { img: "lulus-pantas.png", text: "Kelulusan permohonan pinjaman dalam masa 1-2 hari bekerja dan pindahan wang pada hari yang sama" },
                { img: "pinjaman-berlesen.png", text: "Pemberi pinjaman berlesen di bawah Kementerian Perumahan dan Kerajaan Tempatan (KPKT)" },
                { img: "permohonan-mudah.png", text: "Permohonan mudah dan pantas, dengan langkah yang jelas dan efisien" },
                { img: "kemudahan-pembayaran.png", text: "Kemudahan pembayaran dalam talian tersedia (Direct Debit, pemindahan bank dalam talian, atau JomPay)" }
              ].map((item, index) => (
                /* Removed aspect-square, added h-full. Adjusted padding for mobile (p-4) and desktop (lg:p-[30px]) */
                <div key={index} className="bg-[#f3f3f3] border-2 border-[#F6F6F6] rounded-xl p-4 lg:p-[30px] flex flex-col items-center justify-start text-center hover:border-[#044BD9] hover:shadow-[0_20px_30px_rgba(31,29,13,0.1)] transition-all duration-300 h-full group">
                  
                  {/* Fixed height for the icon container to ensure the text below aligns perfectly across all cards */}
                  <div className="h-[70px] lg:h-[100px] flex items-center justify-center mb-3 lg:mb-5">
                    <Image 
                      src={`/assets/images/${item.img}`} 
                      alt={`Loanbuddy: ${item.text.substring(0, 20)}`} 
                      width={80} 
                      height={80} 
                      className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] group-hover:scale-97 transition-transform duration-300 object-contain" 
                    />
                  </div>
                  
                  {/* Responsive text size to prevent mobile crowding */}
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
                  <img src="/assets/images/rakan-setia.png" loading="lazy" className="w-100" alt="Rakan Setia" />
                </div>
                <div className="col col-lg-7">
                  <h3 className="text-blue !text-[22px] md:!text-[28px] lg:!text-[25px] font-bold text-blue mb-4">Rakan Setia Kewangan yang Boleh Anda Percayai</h3>
                  <p className="mb-0 text-[14px] md:text-[15px] lg:!text-[16px] leading-[1.65]">
                    Sama ada anda ingin memulakan perniagaan, membeli rumah atau meneruskan pengajian – kami ada untuk memudahkan perjalanan anda. Bersama Loanbuddy Credit, anda berada di tangan yang selamat!
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Komunited */}
        {/* <section className="section_space_4_lg bg_grey">
          <div className="container position-relative mouse_move">
            <div className="section_heading">
              <div className="row pt-30">
                <div className="col-md-8 col-12">
                  <h3 className="text-blue mb-3">Loanbuddy Credit Komited Membantu Anda</h3>
                  <p className="mb-0">
                    Setiap hari, kami membantu rakyat Malaysia mencari jalan kewangan yang lebih teratur dengan cara yang mudah, yakin dan selamat. Dah bersedia untuk urusan pinjaman yang lebih lancar? Biarkan Loanbuddy Credit jadi panduan anda.
                    <br />
                    <br />
                    Loanbuddy Credit – ruang pencarian pinjaman anda berakhir, impian jadi nyata dan kepercayaan anda sentiasa dihargai. 
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="about-us-deco-item-5">
                    <div className="layer overflow">
                      <img src="/assets/images/celebrate-ladybug.webp" loading="lazy" width="90%" className="celebrate-ladybug" alt="Celebrate Mascot" />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section> */}

        {/* Komuniti Section */}
        <section className="bg-[#EDEDED] py-[35px] lg:py-[70px] relative z-20 overflow-visible md:overflow-visible">
          <div className="mx-auto !px-[45px] md:px-4 lg:max-w-[1200px] relative">
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              
              {/* 
                Text Left 
                Added pb-[130px] on mobile to create empty space at the bottom right.
                Turns to pb-0 on md: (tablet/desktop) where it sits side-by-side.
              */}
              <div className="w-full md:w-8/12 text-[#424143] pb-[130px] md:pb-0 relative z-10 text-left md:text-left lg:!text-left">
                <h3 className="!text-[22px] md:!text-[28px] lg:!text-[25px] font-bold text-blue mb-4">
                  Loanbuddy Credit Komited Membantu Anda
                </h3>
                <p className="text-[14px] md:text-[15px] lg:!text-[16px] leading-[1.65] mb-0">
                  Setiap hari, kami membantu rakyat Malaysia mencari jalan kewangan yang lebih teratur dengan cara yang mudah, yakin dan selamat. Dah bersedia untuk urusan pinjaman yang lebih lancar? Biarkan Loanbuddy Credit jadi panduan anda.
                  <br /><br />
                  Loanbuddy Credit – ruang pencarian pinjaman anda berakhir, impian jadi nyata dan kepercayaan anda sentiasa dihargai.
                </p>
              </div>

              {/* 
                Image Right 
                Mobile: Absolutely positioned in the bottom right corner (right-0 bottom-[-10px])
                Desktop: Positioned relatively to float next to the text.
              */}
              <div className="absolute md:relative bottom-[-50px] right-0 md:bottom-auto md:right-auto w-full md:w-4/12 flex justify-end md:justify-center z-20 pointer-events-auto">
                
                {/* On large screens, this pulls the image slightly up out of the section */}
                <div className="lg:absolute lg:top-[-50%] lg:-mt-[350px] ">
                  <Image
                    src="/assets/images/celebrate-ladybug.webp"
                    alt="Celebrate Mascot"
                    width={400}
                    height={400}
                    /* 
                      Responsive Sizing: w-[130px] on mobile -> w-[320px] on desktop 
                      Hover Effect: Smoothly scales up, moves up, and moves slightly right when hovered
                    */
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
              
              {/* Text Left */}
              <div className="w-full md:w-8/12 text-center lg:!text-left md:text-left">
                <h2 className="!text-[18px] md:text-[15px] lg:!text-[25px] font-bold text-white leading-tight mb-0">
                  Perlukan Pinjaman Peribadi? <br className="hidden md:block" />
                  Loanbuddy Credit Sedia Berkhidmat untuk Anda!
                </h2>
              </div>

              {/* Button Right */}
              {/* Button Right */}
              <div className="w-full md:w-4/12 flex justify-center md:justify-end mt-6 md:mt-0">
                <a
                  href="mohon-pinjaman-online"
                  /* 
                    Cleaned up classes! 
                    Changed to 'items-start' so the 100px tall text track starts exactly at the top of the 50px button.
                  */
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
