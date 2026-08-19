"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Reusable WhatsApp Buttons Component based on the Figma design
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

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<"all" | "umum" | "bayaran">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="page_wrapper">
      {/* Sticky WhatsApp */}
      <div className="sticky-chat z-50">
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

      <main className="page_content bg-white">
        
        {/* Updated Hero Section aligned to Figma reference */}
        <section
          className="w-full bg-cover bg-center bg-no-repeat pt-4 pb-8 lg:pt-20 lg:pb-16"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container mx-auto px-4 lg:max-w-[1000px]">
            <div className="text-left">
              <h1 className="text-[18px] md:text-[23px] lg:!text-[25px] !font-bold text-blue mb-4">Soalan Lazim Pelanggan Kami</h1>
              <p className="text-[14px] md:text-[16px] text-[#424143] leading-[24px] max-w-[850px]">
                Di ruangan ini, anda akan mendapatkan jawapan kepada pertanyaan yang sering dikemukakan oleh pelanggan kami berkaitan perkhidmatan kami. Maklumat penting telah disusun bagi membantu anda memahami proses, prosedur dan perkhidmatan yang ditawarkan dengan lebih jelas. 
                <br /><br/> 
                Sebarang kemusykilan dan persoalan yang ingin diajukan, anda boleh menghubungi kami dan kami akan membantu anda!
              </p>
            </div>
          </div>
        </section>

        {/* Custom Tailwind FAQ Section */}
        <section className="py-10 lg:py-16 bg-white">
          <div className="container mx-auto px-4 lg:max-w-[1000px]">
            
            {/* Pill Tabs */}
            <div className="grid grid-cols-3 gap-1 md:gap-4 lg:!gap-6 mb-12 w-full max-w-[800px] mx-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={`w-full h-full px-1 py-2 md:py-3 lg:!py-4 !rounded-full font-bold !text-[15px] md:text-[15px] lg:!text-[15px] transition-all duration-300 border-0 outline-none !leading-tight flex items-center justify-center text-center ${
                  activeTab === "all" 
                    ? "!bg-[#044BD9] !text-white shadow-md" 
                    : "!bg-[#BDBDBD] !text-white hover:!bg-[#d1d5db]"
                }`}
              >
                Semua
              </button>
              
              <button
                onClick={() => setActiveTab("umum")}
                className={`w-full h-full px-2 py-2 md:py-3 lg:!py-4 !rounded-full font-bold !text-[12px] md:text-[15px] lg:!text-[15px] transition-all duration-300 border-0 outline-none !leading-tight flex items-center justify-center text-center ${
                  activeTab === "umum" 
                    ? "!bg-[#044BD9] !text-white shadow-md" 
                    : "!bg-[#BDBDBD] !text-white hover:!bg-[#d1d5db]"
                }`}
              >
                Pertanyaan Umum
              </button>
              
              <button
                onClick={() => setActiveTab("bayaran")}
                className={`w-full h-full px-1 py-2 md:py-3 lg:!py-4 !rounded-full font-bold !text-[12px] md:text-[15px] lg:!text-[15px] transition-all duration-300 border-0 outline-none !leading-tight flex items-center justify-center text-center ${
                  activeTab === "bayaran" 
                    ? "!bg-[#044BD9] !text-white shadow-md" 
                    : "!bg-[#BDBDBD] !text-white hover:!bg-[#d1d5db]"
                }`}
              >
                Pertanyaan Bayaran Balik
              </button>
            </div>

            {/* Custom Tab Animation */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes fadeInTab {
                from { opacity: 0; transform: translateY(15px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in-tab {
                animation: fadeInTab 0.4s ease-out forwards;
              }
            `}} />

            {/* 
              The magic trick: key={activeTab} forces React to re-render this div 
              every time the tab changes, triggering the animation from the start! 
            */}
            <div key={activeTab} className="space-y-12 animate-fade-in-tab">
              
              {/* SECTION: Pertanyaan Umum */}
              {(activeTab === "all" || activeTab === "umum") && (
                <div>
                  <h3 className="text-blue text-[22px] font-bold border-b border-[#044BD9] pb-0 mb-4 inline-block leading-tight">
                    Pertanyaan Umum
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
                          Amaun Pinjaman: <span className="font-bold">RM3,000</span> <br />
                          Tempoh Pinjaman: <span className="font-bold">12 bulan</span> <br />
                          Kadar Faedah: <span className="font-bold">18.0% setahun</span> <br />
                          Fi: <span className="font-bold">Fi pesuruhjaya sumpah RM10 dan caj LHDN RM15</span>
                        </p>

                        <div className="w-full lg:w-6/12">
                            <img src="/assets/images/Jadual-umum.png" loading="lazy" className="w-100" alt="Jadual Pembayaran Balik" /> 
                        </div>
                      </div>
                    </div>

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
                          Apakah dokumen dan kelayakan yang diperlukan?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 4 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 4 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
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
                      <button onClick={() => toggleFaq(5)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Apakah tempoh pinjaman minimum dan maksimum?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 5 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 5 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[15px] leading-relaxed">
                          Tempoh pinjaman minimum ialah 12 bulan dan tempoh pinjaman maksimum ialah 60 bulan (5 tahun).
                        </div>
                      </div>
                    </div>

                    {/* FAQ 6 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(6)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Adakah terdapat sebarang bayaran yang perlu saya bayar untuk pendaftaran?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 6 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 6 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[15px] leading-tight">
                          Tiada yuran pendaftaran dikenakan. Walau bagaimanapun, jika permohonan anda diluluskan, anda perlu membayar duti setem dan yuran perakuan.
                          <br /><br />

                          Yuran ini akan dikenakan bersama dengan jumlah pembayaran balik pada pembayaran balik pertama.
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* SECTION: Pertanyaan Bayaran Balik */}
              {(activeTab === "all" || activeTab === "bayaran") && (
                <div>
                  <h3 className="text-blue text-[22px] font-bold border-b border-[#044BD9] pb-0 mb-4 inline-block leading-tight">
                    Pertanyaan Bayaran Balik
                  </h3>
                  
                  <div className="flex flex-col">
                    {/* Payment FAQ 0 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(7)} className="!flex !flex-row !justify-between !items-center w-full py-4 text-left group bg-transparent border-0 outline-none">
                        <span className="text-blue font-bold !text-[15px] md:text-[20px] lg:!text-[20px] pr-4 group-hover:opacity-80 transition-opacity text-left">
                          Bagaimanakah cara saya meminta penyelesaian penuh/awal?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 7 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 7 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[15px] leading-tight">
                          Anda boleh menjelaskan pinjaman sebelum tempoh matang pinjaman anda pada bila-bila masa tanpa dikenakan yuran penamatan kerana pinjaman Loanbuddy Credit tiada tempoh lock-in. Namun, anda dikehendaki untuk memaklumkan Loanbuddy Credit sekurang-kurangnya 30 hari sebelum tarikh pembayaran balik penuh/awal dan anda dikehendaki membuat pembayaran penuh bagi jumlah pokok tertunggak dan faedah yang dibilkan sahaja.
                          <br /><br />
                          Anda juga boleh mengubungi Loanbuddy Credit atau menghantar e-mel sebelum membayar jumlah pinjaman anda untuk keterangan lebih lanjut.
                          
                          {/* Branch Contact Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            
                            {/* Kuala Lumpur */}
                            <div className="flex flex-col space-y-3 items-center">
                              <div>
                                <h4 className="text-blue font-bold !text-[18px] md:text-[15px] mb-1">Cawangan Kuala Lumpur</h4>
                                <div className="flex items-center gap-2 text-[#424143] text-[13px] md:text-[14px]">
                                  {/* Mail Icon */}
                                  <svg className="w-4 h-4 text-[#044BD9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                  <a href="mailto:kl@loanbuddycredit.com.my" className="hover:underline">kl@loanbuddycredit.com.my</a>
                                </div>
                              </div>
                              <a href="https://wa.me/60187856072" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-2 bg-[#25D366] !text-white px-4 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full no-underline">
                                <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                                <div className="text-left leading-tight">
                                  <div className="text-[13px] font-normal">WhatsApp Kami</div>
                                  <div className="text-[14px] font-bold">+6018 785 6072</div>
                                </div>
                              </a>
                            </div>

                            {/* Kuching */}
                            <div className="flex flex-col space-y-3 items-center">
                              <div>
                                <h4 className="text-blue font-bold !text-[18px] md:text-[15px] mb-1">Cawangan Kuching, Sarawak</h4>
                                <div className="flex items-center gap-2 text-[#424143] text-[13px] md:text-[14px]">
                                  <svg className="w-4 h-4 text-[#044BD9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                  <a href="mailto:ks@loanbuddycredit.com.my" className="hover:underline">ks@loanbuddycredit.com.my</a>
                                </div>
                              </div>
                              <a href="https://wa.me/60109329976" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-2 bg-[#25D366] !text-white px-4 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full no-underline">
                                <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                                <div className="text-left leading-tight">
                                  <div className="text-[13px] font-normal">WhatsApp Kami</div>
                                  <div className="text-[14px] font-bold">+6010 932 9976</div>
                                </div>
                              </a>
                            </div>

                            {/* Bintulu */}
                            <div className="flex flex-col space-y-3 items-center">
                              <div>
                                <h4 className="text-blue font-bold !text-[18px] md:text-[15px] mb-1">Cawangan Bintulu, Sarawak</h4>
                                <div className="flex items-center gap-2 text-[#424143] text-[13px] md:text-[14px]">
                                  <svg className="w-4 h-4 text-[#044BD9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                  <a href="mailto:bintulu@loanbuddycredit.com.my" className="hover:underline">bintulu@loanbuddycredit.com.my</a>
                                </div>
                              </div>
                              <a href="https://wa.me/60109098557" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-2 bg-[#25D366] !text-white px-4 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full no-underline">
                                <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                                <div className="text-left leading-tight">
                                  <div className="text-[13px] font-normal">WhatsApp Kami</div>
                                  <div className="text-[14px] font-bold">+6010 909 8557</div>
                                </div>
                              </a>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment FAQ 1 (Penyelesaian Penuh/Awal) */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(8)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Bagaimana untuk menyemak jumlah ansuran bulanan saya?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] !flex !items-center !justify-center transition-transform duration-300 ${openFaq === 8 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 8 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[15px] leading-tight">
                          Anda boleh menyemak butiran pinjaman anda dengan menghubungi pihak Loanbuddy Credit melalui WhatsApp. 
                          
                          <WhatsAppButtons />
                        </div>
                      </div>
                    </div>

                    {/* Payment FAQ 2 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(9)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Bagaimanakah saya tahu jika pembayaran balik saya telah diterima?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] flex items-center justify-center transition-transform duration-300 ${openFaq === 9 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 9 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[15px] leading-tight">
                          Setelah pembayaran balik telah diproses, anda akan menerima panggilan, SMS atau WhatsApp pengesahan daripada Loanbuddy Credit.
                        </div>
                      </div>
                    </div>

                    {/* Payment FAQ 3 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(10)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Bilakah tarikh pembayaran balik pertama saya?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] flex items-center justify-center transition-transform duration-300 ${openFaq === 10 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 10 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[15px] leading-tight">
                          
                          <ul className="list-decimal pl-5 mt-2 space-y-1">
                            <li>Jika kontrak ditandatangani sebelum atau pada 14 haribulan, tarikh pembayaran balik pertama anda ialah pada 1 haribulan seterusnya.</li>
                            <li>Jika kontrak ditandatangani pada atau selepas 15 haribulan, tarikh pembayaran balik pertama anda ialah pada 1 haribulan selepas bulan seterusnya.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Payment FAQ 4 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(11)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Bagaimanakah cara saya membuat pembayaran balik kepada Loanbuddy Credit?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] flex items-center justify-center transition-transform duration-300 ${openFaq === 11 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 11 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[15px] leading-tight">
                          Pada masa ini, Loanbuddy Credit hanya menerima pembayaran balik melalui Direct Debit, pemindahan bank dalam talian dan JomPay. Loanbuddy Credit tidak menerima pembayaran balik secara tunai di mana-mana cawangan kami.
                        </div>
                      </div>
                    </div>

                    {/* Payment FAQ 5 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(12)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Bagaimanakah saya meminta bayaran pulangan?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] flex items-center justify-center transition-transform duration-300 ${openFaq === 12 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 12 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[15px] leading-tight">
                          Loanbuddy Credit akan menghubungi anda melalui panggilan, SMS atau WhatsApp. Loanbuddy Credit akan membayar balik lebihan dana apabila pihak kami mengesahkan bahawa anda telah membuat penyelesaian penuh dengan lebihan dana.
                          <br/><br/>
                          Jika anda membayar ansuran bulanan anda dengan lebihan dana dan ingin meminta bayaran balik sebelum penyelesaian penuh, sila hubungi pihak kami melalui panggilan, WhatsApp atau e-mel.

                          {/* Branch Contact Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            
                            {/* Kuala Lumpur */}
                            <div className="flex flex-col space-y-3 items-center">
                              <div>
                                <h4 className="text-blue font-bold !text-[18px] md:text-[15px] mb-1">Cawangan Kuala Lumpur</h4>
                                <div className="flex items-center gap-2 text-[#424143] text-[13px] md:text-[14px]">
                                  {/* Mail Icon */}
                                  <svg className="w-4 h-4 text-[#044BD9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                  <a href="mailto:kl@loanbuddycredit.com.my" className="hover:underline">kl@loanbuddycredit.com.my</a>
                                </div>
                              </div>
                              <a href="https://wa.me/60187856072" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-2 bg-[#25D366] !text-white px-4 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full no-underline">
                                <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                                <div className="text-left leading-tight">
                                  <div className="text-[13px] font-normal">WhatsApp Kami</div>
                                  <div className="text-[14px] font-bold">+6018 785 6072</div>
                                </div>
                              </a>
                            </div>

                            {/* Kuching */}
                            <div className="flex flex-col space-y-3 items-center">
                              <div>
                                <h4 className="text-blue font-bold !text-[18px] md:text-[15px] mb-1">Cawangan Kuching, Sarawak</h4>
                                <div className="flex items-center gap-2 text-[#424143] text-[13px] md:text-[14px]">
                                  <svg className="w-4 h-4 text-[#044BD9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                  <a href="mailto:ks@loanbuddycredit.com.my" className="hover:underline">ks@loanbuddycredit.com.my</a>
                                </div>
                              </div>
                              <a href="https://wa.me/60109329976" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-2 bg-[#25D366] !text-white px-4 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full no-underline">
                                <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                                <div className="text-left leading-tight">
                                  <div className="text-[13px] font-normal">WhatsApp Kami</div>
                                  <div className="text-[14px] font-bold">+6010 932 9976</div>
                                </div>
                              </a>
                            </div>

                            {/* Bintulu */}
                            <div className="flex flex-col space-y-3 items-center">
                              <div>
                                <h4 className="text-blue font-bold !text-[18px] md:text-[15px] mb-1">Cawangan Bintulu, Sarawak</h4>
                                <div className="flex items-center gap-2 text-[#424143] text-[13px] md:text-[14px]">
                                  <svg className="w-4 h-4 text-[#044BD9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                  <a href="mailto:bintulu@loanbuddycredit.com.my" className="hover:underline">bintulu@loanbuddycredit.com.my</a>
                                </div>
                              </div>
                              <a href="https://wa.me/60109098557" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-2 bg-[#25D366] !text-white px-4 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full no-underline">
                                <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                                <div className="text-left leading-tight">
                                  <div className="text-[13px] font-normal">WhatsApp Kami</div>
                                  <div className="text-[14px] font-bold">+6010 909 8557</div>
                                </div>
                              </a>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment FAQ 6 */}
                    <div className="border-b border-gray-200">
                      <button onClick={() => toggleFaq(13)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Bagaimana jika saya gagal membayar hutang bulanan saya?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] flex items-center justify-center transition-transform duration-300 ${openFaq === 13 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 13 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[15px] leading-tight">
                          Wakil Loanbuddy Credit akan membuat panggilan kepada anda. 
                          <br /> <br />
                          Anda dikehendaki membayar caj pembayaran lewat (8.0% setiap jumlah jumlah ansuran tertunggak*¹). Ia dikira setiap hari dan dicaj pada hari terakhir.
                          <br /> <br />
                          <span className="font-bold">Kaedah Pengiraan</span> <br />
                          Caj Pembayaran Lewat = (Amaun Ansuran Tertunggak x 8.0%) / (365 hari x Bilangan Hari Lewat Matang)*²
                          <br /> <br />
                          *¹ Jumlah ansuran tertunggak atau baki jumlah apabila terdapat pembayaran separa. <br />
                          *² Loanbuddy Credit menyediakan tempoh tangguh selama 5 hari dari tarikh tamat tempoh, di mana caj pembayaran lewat tidak akan dikenakan. Namun, selepas tempoh tangguh, caj pembayaran lewat akan dikenakan termasuk 5 hari sebelumnya.
                          <WhatsAppButtons />
                        </div>
                      </div>
                    </div>

                    {/* Payment FAQ 7 */}
                    <div className="border-b border-transparent">
                      <button onClick={() => toggleFaq(14)} className="!flex !justify-between !items-center w-full py-4 text-left group">
                        <span className="text-[#044BD9] font-bold text-[15px] md:text-[18px] lg:text-[20px] pr-4 group-hover:opacity-80 transition-opacity">
                          Bagaimana untuk menyemak tarikh akhir pembayaran balik saya?
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#044BD9] flex items-center justify-center transition-transform duration-300 ${openFaq === 14 ? 'bg-[#044BD9] text-white rotate-180' : 'text-[#044BD9]'}`}>
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === 14 ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                        <div className="text-[#424143] text-[15px] leading-tight">
                          Anda boleh menyemak butiran akaun anda dengan menghubungi Loanbuddy Credit melalui WhatsApp atau e-mel. 

                          {/* Branch Contact Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            
                            {/* Kuala Lumpur */}
                            <div className="flex flex-col space-y-3 items-center">
                              <div>
                                <h4 className="text-blue font-bold !text-[18px] md:text-[15px] mb-1">Cawangan Kuala Lumpur</h4>
                                <div className="flex items-center gap-2 text-[#424143] text-[13px] md:text-[14px]">
                                  {/* Mail Icon */}
                                  <svg className="w-4 h-4 text-[#044BD9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                  <a href="mailto:kl@loanbuddycredit.com.my" className="hover:underline">kl@loanbuddycredit.com.my</a>
                                </div>
                              </div>
                              <a href="https://wa.me/60187856072" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-2 bg-[#25D366] !text-white px-4 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full no-underline">
                                <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                                <div className="text-left leading-tight">
                                  <div className="text-[13px] font-normal">WhatsApp Kami</div>
                                  <div className="text-[14px] font-bold">+6018 785 6072</div>
                                </div>
                              </a>
                            </div>

                            {/* Kuching */}
                            <div className="flex flex-col space-y-3 items-center">
                              <div>
                                <h4 className="text-blue font-bold !text-[18px] md:text-[15px] mb-1">Cawangan Kuching, Sarawak</h4>
                                <div className="flex items-center gap-2 text-[#424143] text-[13px] md:text-[14px]">
                                  <svg className="w-4 h-4 text-[#044BD9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                  <a href="mailto:ks@loanbuddycredit.com.my" className="hover:underline">ks@loanbuddycredit.com.my</a>
                                </div>
                              </div>
                              <a href="https://wa.me/60109329976" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-2 bg-[#25D366] !text-white px-4 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full no-underline">
                                <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                                <div className="text-left leading-tight">
                                  <div className="text-[13px] font-normal">WhatsApp Kami</div>
                                  <div className="text-[14px] font-bold">+6010 932 9976</div>
                                </div>
                              </a>
                            </div>

                            {/* Bintulu */}
                            <div className="flex flex-col space-y-3 items-center">
                              <div>
                                <h4 className="text-blue font-bold !text-[18px] md:text-[15px] mb-1">Cawangan Bintulu, Sarawak</h4>
                                <div className="flex items-center gap-2 text-[#424143] text-[13px] md:text-[14px]">
                                  <svg className="w-4 h-4 text-[#044BD9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                  <a href="mailto:bintulu@loanbuddycredit.com.my" className="hover:underline">bintulu@loanbuddycredit.com.my</a>
                                </div>
                              </div>
                              <a href="https://wa.me/60109098557" target="_blank" rel="noopener noreferrer" className="!flex !flex-row !items-center !justify-center gap-2 bg-[#25D366] !text-white px-4 py-2.5 !rounded-full hover:bg-[#1ebe57] transition-colors shadow-sm w-full no-underline">
                                <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                                <div className="text-left leading-tight">
                                  <div className="text-[13px] font-normal">WhatsApp Kami</div>
                                  <div className="text-[14px] font-bold">+6010 909 8557</div>
                                </div>
                              </a>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}