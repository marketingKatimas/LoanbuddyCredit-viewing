"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<"all" | "umum" | "bayaran">("all");
  const [showMoreFaqs, setShowMoreFaqs] = useState(false);
  const [showMoreFaqsBayaran, setShowMoreFaqsBayaran] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

      {/* Main Content */}
      <main className="page_content">
        <section
          className="page_banner faq_banner_main section_space_lg_about overflow-hidden decoration_wrap mouse_move"
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col col-12">
                <h1 className="banner-mohon-big-title text-center justify-content-center">
                  Soalan Lazim Tentang Loanbuddy Credit
                </h1>
                <p className="banner_description banner-mohon-description text-center text-grey">
                  Temui jawapan terperinci untuk soalan-soalan lazim anda dan dapatkan maklumat yang anda perlukan dengan cepat.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="page_banner about_banner_faq bg_blue section_space_lg overflow-hidden decoration_wrap mouse_move"
          style={{ backgroundImage: `url('/assets/images/banner/faq-image.png')` }}
        ></section>

        {/* FAQ Section */}
        <section className="faq_section section_space_lg bg_grey">
          <div className="container faq_container">
            <div className="section_heading text-center mb-3">
              <div className="row justify-content-center">
                <div className="col col-lg-7">
                  <h2 className="heading_text text-blue">Soalan Lazim Pelanggan Kami</h2>
                  <p className="heading_description mb-0">
                    Di ruangan ini, anda akan mendapatkan jawapan kepada pertanyaan yang sering dikemukakan oleh pelanggan kami berkaitan perkhidmatan kami. Maklumat penting telah disusun bagi membantu anda memahami proses, prosedur dan perkhidmatan yang ditawarkan dengan lebih jelas.
                    <br />
                    <br />
                    Sebarang kemusykilan dan persoalan yang ingin diajukan, anda boleh menghubungi kami dan kami akan membantu anda!
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col col-lg-10">
                <div className="sorting-menu">
                  <ul className="d-flex justify-content-center gap-3 list-unstyled">
                    <li
                      className={`filter ${activeTab === "all" ? "active font-weight-bold text-primary" : ""}`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveTab("all")}
                    >
                      Semua
                    </li>
                    <li
                      className={`filter ${activeTab === "umum" ? "active font-weight-bold text-primary" : ""}`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveTab("umum")}
                    >
                      Pertanyaan Umum
                    </li>
                    <li
                      className={`filter ${activeTab === "bayaran" ? "active font-weight-bold text-primary" : ""}`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveTab("bayaran")}
                    >
                      Pertanyaan Bayaran Balik
                    </li>
                  </ul>
                </div>

                <div className="accordion faq-system" id="faq_accordion_1">
                  <div className="row" id="Container">
                    {/* General FAQs */}
                    {(activeTab === "all" || activeTab === "umum") && (
                      <div className="col-12 mix ui umum mb-4">
                        <h4 className="text-blue mb-3 fw-bold">Pertanyaan Umum</h4>
                        
                        {/* FAQ 1 */}
                        <div className="accordion-item accordion-item-custom">
                          <div
                            className={`accordion-button text-blue ${openFaq === 0 ? "" : "collapsed"}`}
                            role="button"
                            onClick={() => toggleFaq(0)}
                          >
                            Siapakah Loanbuddy Credit?
                          </div>
                          {openFaq === 0 && (
                            <div className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                <div className="mb-0">
                                  Loanbuddy Credit Sdn. Bhd. (<span className="no-link">200901039396</span> / 882536-K) ialah sebuah syarikat pinjaman wang berlesen di bawah Akta Pemberi Pinjam Wang 1951 dan dikawal selia oleh Kementerian Perumahan dan Kerajaan Tempatan (KPKT). Kami komited menyediakan pinjaman peribadi yang selamat, telus dan mudah dengan proses kelulusan yang pantas untuk membantu anda memenuhi keperluan kewangan tanpa kerumitan.
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* FAQ 2 */}
                        <div className="accordion-item">
                          <div
                            className={`accordion-button ${openFaq === 1 ? "" : "collapsed"}`}
                            role="button"
                            onClick={() => toggleFaq(1)}
                          >
                            Sekiranya saya membuat pinjaman RM3,000. Apakah gambaran jadual pembayaran balik?
                          </div>
                          {openFaq === 1 && (
                            <div className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                <div className="mb-0">
                                  Contoh Wakil: <br />
                                  Amaun Pinjaman: <strong>RM3,000</strong> <br />
                                  Tempoh Pinjaman: <strong>12 bulan</strong> <br />
                                  Kadar Faedah: <strong>18.0% setahun</strong> <br />
                                  Jumlah Bayaran Balik = <strong>RM3,540</strong>, hanya <strong>RM295</strong> sebulan <br />
                                  <br />
                                  <img src="/assets/images/kadar-table.png" alt="" loading="lazy" />
                                  <br />
                                  <br />
                                  <a className="mt-3 text-dark" href="mohon-pinjaman-online">
                                    <u className="text-blue">KLIK SINI</u> untuk mohon sekarang
                                  </a>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* FAQ 3 */}
                        <div className="accordion-item">
                          <div
                            className={`accordion-button ${openFaq === 2 ? "" : "collapsed"}`}
                            role="button"
                            onClick={() => toggleFaq(2)}
                          >
                            Bagaimanakah cara untuk saya memohon pinjaman peribadi Loanbuddy Credit?
                          </div>
                          {openFaq === 2 && (
                            <div className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                <div className="mb-0">
                                  Untuk permohonan pinjaman peribadi bersama Loanbuddy Credit, langkah-langkah permohonan adalah seperti berikut: <br />
                                  <br />
                                  <ol>
                                    <li>Klik butang “Mohon Sekarang” di laman web rasmi Loanbuddy Credit.</li>
                                    <li>Lengkapkan borang permohonan dengan butiran penting anda dan hantar.</li>
                                    <li>Pakar kredit Loanbuddy Credit akan menghubungi anda melalui WhatsApp atau emel untuk pengesahan maklumat dan proses seterusnya.</li>
                                  </ol>
                                  <em>Nota privasi: Maklumat peribadi anda adalah sulit dan dilindungi. Kami tidak akan meminta butiran sensitif tanpa kebenaran anda. </em>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {showMoreFaqs && (
                          <div id="more-faqs">
                            {/* FAQ 4 */}
                            <div className="accordion-item">
                              <div
                                className={`accordion-button ${openFaq === 3 ? "" : "collapsed"}`}
                                role="button"
                                onClick={() => toggleFaq(3)}
                              >
                                Apakah dokumen dan kelayakan yang diperlukan untuk memohon pinjaman peribadi?
                              </div>
                              {openFaq === 3 && (
                                <div className="accordion-collapse collapse show">
                                  <div className="accordion-body">
                                    <div className="mb-0">
                                      <strong>Dokumen Diperlukan</strong>
                                      <ul>
                                        <li>Salinan kad pengenalan (depan dan belakang)</li>
                                        <li>Penyata bank pengkreditan gaji 3 bulan terkini (format PDF)</li>
                                        <li>Slip gaji 3 bulan terkini (format PDF) dan/atau</li>
                                        <li>Bil utiliti 1 bulan terkini (air, elektrik, dll.)</li>
                                      </ul>
                                      <strong>Kelayakan Permohonan</strong>
                                      <ul>
                                        <li>Warganegara Malaysia</li>
                                        <li>Individu berumur 18 hingga 60 tahun</li>
                                        <li>Pendapatan kasar bulanan minimum RM1,700</li>
                                        <li>Kakitangan swasta, GLC dan kerajaan sahaja</li>
                                        <li>Tidak pernah diisytiharkan muflis</li>
                                        <li>Bukan individu berstatus Orang Terdedah Politik (PEP)</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* FAQ 5 */}
                            <div className="accordion-item">
                              <div
                                className={`accordion-button ${openFaq === 4 ? "" : "collapsed"}`}
                                role="button"
                                onClick={() => toggleFaq(4)}
                              >
                                Berapakah jumlah pinjaman yang boleh saya mohon?
                              </div>
                              {openFaq === 4 && (
                                <div className="accordion-collapse collapse show">
                                  <div className="accordion-body">
                                    <div className="mb-0">
                                      Anda boleh memohon pinjaman serendah RM1000 sehingga maksimum RM50,000. Jumlah yang layak dipinjam adalah bergantung kepada penilaian skor kredit individu. <br /> <br />
                                      Bagi pinjaman tambahan (top-up), jumlah minimum ialah RM500 manakala jumlah maksimum akan ditentukan oleh Loanbuddy Credit berdasarkan kelayakan anda.
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* FAQ 6 */}
                            <div className="accordion-item">
                              <div
                                className={`accordion-button ${openFaq === 5 ? "" : "collapsed"}`}
                                role="button"
                                onClick={() => toggleFaq(5)}
                              >
                                Berapakah kadar faedah pinjaman peribadi di Loanbuddy Credit?
                              </div>
                              {openFaq === 5 && (
                                <div className="accordion-collapse collapse show">
                                  <div className="accordion-body">
                                    <div className="mb-0">
                                      Kadar faedah pinjaman tidak melebihi: 18% setahun (Tidak Bercagar), 12% setahun (Bercagar), tertakluk kepada terma, syarat dan penilaian kredit pemohon.
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* FAQ 7 */}
                            <div className="accordion-item">
                              <div
                                className={`accordion-button ${openFaq === 6 ? "" : "collapsed"}`}
                                role="button"
                                onClick={() => toggleFaq(6)}
                              >
                                Apakah tempoh pinjaman minimum dan maksimum di Loanbuddy Credit?
                              </div>
                              {openFaq === 6 && (
                                <div className="accordion-collapse collapse show">
                                  <div className="accordion-body">
                                    <div className="mb-0">
                                      Tempoh pinjaman minimum ialah 12 bulan (1 tahun) dan tempoh pinjaman maksimum ialah 60 bulan (5 tahun). Tempoh pinjaman akan ditentukan berdasarkan penilaian kredit individu.
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* FAQ 8 */}
                            <div className="accordion-item">
                              <div
                                className={`accordion-button ${openFaq === 7 ? "" : "collapsed"}`}
                                role="button"
                                onClick={() => toggleFaq(7)}
                              >
                                Adakah terdapat sebarang caj tersembunyi?
                              </div>
                              {openFaq === 7 && (
                                <div className="accordion-collapse collapse show">
                                  <div className="accordion-body">
                                    <div className="mb-0">
                                      <strong>Tidak.</strong> Kami mengamalkan ketelusan penuh. Semua kos akan dimaklumkan secara terperinci sebelum anda menandatangani sebarang perjanjian. <br />
                                      <br />
                                      <ul>
                                        <li>
                                          <strong>Duti Setem:</strong> Kadar adalah <strong>0.5%</strong> daripada jumlah pinjaman (dibundarkan kepada <strong>RM5 terdekat</strong>) ditambah yuran setem <strong>RM10</strong>.
                                        </li>
                                        <li>
                                          <strong>Kos Lain:</strong> Sebarang kos pentadbiran atau dokumentasi tambahan akan dinyatakan secara peribadi berdasarkan profil pinjaman anda.
                                        </li>
                                        <li>
                                          <strong>Tiada Bayaran Pendahuluan:</strong> Kami tidak akan meminta sebarang bayaran sebelum pinjaman diluluskan.
                                        </li>
                                      </ul>
                                      <br />
                                      Segala pecahan yuran akan diberikan secara bertulis untuk semakan anda semasa sesi perjumpaan sebelum proses menandatangani bermula.
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        <button
                          id="view-more-faqs"
                          className="btn btn_blue text-white mt-3"
                          onClick={() => setShowMoreFaqs(!showMoreFaqs)}
                        >
                          {showMoreFaqs ? "Lihat Kurang" : "Lihat Lagi"}
                        </button>
                      </div>
                    )}

                    {/* Payment FAQs */}
                    {(activeTab === "all" || activeTab === "bayaran") && (
                      <div className="col-12 mix ui bayaran mb-3">
                        <h4 className="text-blue mb-3 fw-bold">Pertanyaan Bayaran Balik</h4>
                        
                        {/* Payment FAQ 1 */}
                        <div className="accordion-item accordion-item-custom">
                          <div
                            className={`accordion-button text-blue ${openFaq === 10 ? "" : "collapsed"}`}
                            role="button"
                            onClick={() => toggleFaq(10)}
                          >
                            Bilakah tarikh pembayaran balik pertama saya?
                          </div>
                          {openFaq === 10 && (
                            <div className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                <div className="mb-0">
                                  Tarikh pembayaran balik pertama anda ditentukan berdasarkan tarikh tandatangan kontrak pinjaman.
                                  <br />
                                  <br />
                                  <ul>
                                    <li>Jika kontrak ditandatangani pada atau sebelum 14 haribulan, tarikh pembayaran balik pertama ialah 1 haribulan berikutnya.</li>
                                    <li>Jika kontrak ditandatangani pada atau selepas 15 haribulan, tarikh pembayaran balik pertama ialah 1 haribulan berikutnya dan bukannya bulan berikutnya.</li>
                                  </ul>
                                  <br />
                                  Dengan ketetapan ini, anda mempunyai masa yang jelas untuk membuat perancangan kewangan sebelum bayaran pertama bermula.
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Payment FAQ 2 */}
                        <div className="accordion-item">
                          <div
                            className={`accordion-button ${openFaq === 11 ? "" : "collapsed"}`}
                            role="button"
                            onClick={() => toggleFaq(11)}
                          >
                            Bagaimanakah cara saya membuat pembayaran balik kepada Loanbuddy Credit?
                          </div>
                          {openFaq === 11 && (
                            <div className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                <div className="mb-0">
                                  Pembayaran balik pinjaman hanya boleh dilakukan melalui pemindahan dalam talian atau deposit bank ke akaun rasmi Loanbuddy Credit. Pada masa ini, kami tidak menerima bayaran tunai di pejabat. Semua bayaran mestilah dibuat melalui kaedah yang dinyatakan untuk memastikan rekod pembayaran lebih selamat dan teratur.
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Payment FAQ 3 */}
                        <div className="accordion-item">
                          <div
                            className={`accordion-button ${openFaq === 12 ? "" : "collapsed"}`}
                            role="button"
                            onClick={() => toggleFaq(12)}
                          >
                            Bagaimanakah saya tahu jika pembayaran balik saya telah diterima?
                          </div>
                          {openFaq === 12 && (
                            <div className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                <div className="mb-0">
                                  Setiap kali anda membuat pembayaran balik, sistem kami akan memproses transaksi tersebut. Setelah ia berjaya, anda akan menerima pengesahan melalui SMS atau WhatsApp rasmi Loanbuddy Credit sebagai bukti bahawa bayaran anda telah diterima. <br />
                                  <br />
                                  Selain itu, anda juga boleh: <br />
                                  <ul>
                                    <li>Menyimpan resit atau slip transaksi sebagai rujukan peribadi</li>
                                    <li>Meminta penyata baki terkini untuk melihat rekod pembayaran yang telah dikemaskini</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {showMoreFaqsBayaran && (
                          <div id="more-faqs-bayaran">
                            {/* Payment FAQ 4 */}
                            <div className="accordion-item">
                              <div
                                className={`accordion-button ${openFaq === 13 ? "" : "collapsed"}`}
                                role="button"
                                onClick={() => toggleFaq(13)}
                              >
                                Bagaimanakah cara saya meminta penyelesaian penuh/awal?
                              </div>
                              {openFaq === 13 && (
                                <div className="accordion-collapse collapse show">
                                  <div className="accordion-body">
                                    <div className="mb-0">
                                      Anda boleh membuat penyelesai penuh atau awal pada bila-bila masa tanpa dikenakan sebarang caj penamatan, kerana pinjaman di Loanbuddy Credit tidak mempunyai tempoh lock-in. <br />
                                      <br />
                                      Walau bagaimanapun, anda perlu: <br />
                                      <ul>
                                        <li>Memaklumkan pihak Loanbuddy Credit sekurang-kurangnya 30 hari sebelum tarikh yang anda inginkan untuk penyelesaian penuh/awal.</li>
                                        <li>Menyelesaikan pembayaran penuh bagi jumlah pokok tertunggak serta faedah yang telah dibilkan sahaja (tiada caj tambahan tersembunyi).</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Payment FAQ 5 */}
                            <div className="accordion-item">
                              <div
                                className={`accordion-button ${openFaq === 14 ? "" : "collapsed"}`}
                                role="button"
                                onClick={() => toggleFaq(14)}
                              >
                                Bagaimanakah saya meminta bayaran pulangan?
                              </div>
                              {openFaq === 14 && (
                                <div className="accordion-collapse collapse show">
                                  <div className="accordion-body">
                                    <div className="mb-0">
                                      Loanbuddy Credit akan menghubungi anda melalui panggilan, SMS atau WhatsApp. Loanbuddy Credit akan membayar balik lebihan dana apabila kami mengesahkan bahawa anda telah membuat penyelesaian penuh dengan lebihan dana, kami akan menghubungi anda melalui panggilan, SMS atau WhatsApp. <br />
                                      <br />
                                      Sekiranya anda telah membuat pembayaran ansuran bulanan dengan jumlah melebihi amaun sebenar yang ditetapkan dan ingin memohon pulangan lebihan dana sebelum penyelesaian penuh pinjaman, anda boleh menghubungi kami di sini untuk bantuan lanjut.
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Payment FAQ 6 */}
                            <div className="accordion-item">
                              <div
                                className={`accordion-button ${openFaq === 15 ? "" : "collapsed"}`}
                                role="button"
                                onClick={() => toggleFaq(15)}
                              >
                                Bagaimana jika saya gagal membayar hutang bulanan saya?
                              </div>
                              {openFaq === 15 && (
                                <div className="accordion-collapse collapse show">
                                  <div className="accordion-body">
                                    <div className="mb-0">
                                      Wakil dari Loanbuddy Credit akan menghubungi anda. <br />
                                      <br />
                                      Anda akan dikehendaki membayar caj pembayaran lewat (8.0% setiap jumlah ansuran tertunggak (*1)). Ia dikira setiap hari dan dicaj pada tarikh akhir seterusnya. <br />
                                      <br />
                                      <strong>Kaedah Pengiraan</strong> <br />
                                      Kaedah pengiraan untuk caj pembayaran lewat ialah: &quot;Amaun ansuran tertunggak x 8.0% / 365 hari x Bilangan hari lewat matang (*2)&quot;. <br />
                                      <br />
                                      *1 Jumlah ansuran tertunggak termasuk keseluruhan baki ansuran jika terdapat bayaran separa. <br />
                                      <br />
                                      *2 Loanbuddy Credit menyediakan tempoh tangguh lima hari selepas tarikh akhir pembayaran. Namun, jika bayaran masih belum dibuat selepas tempoh ini, caj pembayaran lewat akan dikenakan termasuk untuk lima hari tangguh tersebut.
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Payment FAQ 7 */}
                            <div className="accordion-item">
                              <div
                                className={`accordion-button ${openFaq === 16 ? "" : "collapsed"}`}
                                role="button"
                                onClick={() => toggleFaq(16)}
                              >
                                Bagaimana untuk menyemak tarikh akhir pembayaran balik saya?
                              </div>
                              {openFaq === 16 && (
                                <div className="accordion-collapse collapse show">
                                  <div className="accordion-body">
                                    <div className="mb-0">
                                      Anda boleh menyemak tarikh pembayaran balik anda dengan menghubungi pihak Loanbuddy Credit melalui panggilan, SMS atau WhatsApp di pautan <a href="hubungi-kami"><u>[sini]</u></a>.
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Payment FAQ 8 */}
                            <div className="accordion-item">
                              <div
                                className={`accordion-button ${openFaq === 17 ? "" : "collapsed"}`}
                                role="button"
                                onClick={() => toggleFaq(17)}
                              >
                                Bagaimana untuk menyemak jumlah ansuran bulanan saya?
                              </div>
                              {openFaq === 17 && (
                                <div className="accordion-collapse collapse show">
                                  <div className="accordion-body">
                                    <div className="mb-0">
                                      Anda boleh menyemak jumlah ansuran bulanan dengan menghubungi pihak Loanbuddy Credit melalui panggilan, SMS atau WhatsApp di pautan <a href="hubungi-kami"><u>[sini]</u></a>.
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        <button
                          id="view-more-faqs-bayaran"
                          className="btn btn_blue text-white mt-3"
                          onClick={() => setShowMoreFaqsBayaran(!showMoreFaqsBayaran)}
                        >
                          {showMoreFaqsBayaran ? "Lihat Kurang" : "Lihat Lagi"}
                        </button>
                      </div>
                    )}
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
