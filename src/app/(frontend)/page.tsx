"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { getMediaUrl } from "@/lib/media";

export default function Home() {
  const [pageData, setPageData] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 45;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      // Swiped left -> next slide
      setCurrentSlide((prev) => (prev + 1) % bannerList.length);
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev slide
      setCurrentSlide((prev) => (prev - 1 + bannerList.length) % bannerList.length);
    }
  };

  useEffect(() => {
    fetch("/api/content?slug=home", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPageData(data.doc);
        }
      })
      .catch(() => { });
  }, []);

  const servicesRef = useRef<HTMLElement>(null);
  const [isServicesVisible, setIsServicesVisible] = useState(false);

  const whyChooseRef = useRef<HTMLElement>(null);
  const [isWhyChooseVisible, setIsWhyChooseVisible] = useState(false);

  const mascotStarRef = useRef<HTMLDivElement>(null);
  const [isMascotStarVisible, setIsMascotStarVisible] = useState(false);

  const testimonialsRef = useRef<HTMLElement>(null);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);

  const ctaBannerRef = useRef<HTMLElement>(null);
  const [isCtaBannerVisible, setIsCtaBannerVisible] = useState(false);

  const blogRef = useRef<HTMLElement>(null);
  const [isBlogVisible, setIsBlogVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setIsServicesVisible(true);
      setIsWhyChooseVisible(true);
      setIsMascotStarVisible(true);
      setIsTestimonialsVisible(true);
      setIsCtaBannerVisible(true);
      setIsBlogVisible(true);
      return;
    }

    const sections = [
      { ref: servicesRef, setVisible: setIsServicesVisible, rootMargin: "0px" },
      { ref: whyChooseRef, setVisible: setIsWhyChooseVisible, rootMargin: "0px" },
      { ref: mascotStarRef, setVisible: setIsMascotStarVisible, rootMargin: "250px 0px 50px 0px" },
      { ref: testimonialsRef, setVisible: setIsTestimonialsVisible, rootMargin: "0px" },
      { ref: ctaBannerRef, setVisible: setIsCtaBannerVisible, rootMargin: "0px" },
      { ref: blogRef, setVisible: setIsBlogVisible, rootMargin: "0px" },
    ];

    const observers: IntersectionObserver[] = [];

    sections.forEach(({ ref, setVisible, rootMargin }) => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: rootMargin || "0px" }
      );
      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const defaultBanners = [
    {
      heading: pageData?.hero?.heading || "Selamat Datang ke Loanbuddy Credit",
      subheading:
        pageData?.hero?.subheading ||
        "Kami sedia membantu dengan menawarkan pembiayaan yang cepat, mudah, dan tanpa sebarang kerumitan. Dengan proses permohonan yang ringkas dan kelulusan pantas, anda boleh mendapatkan dana yang diperlukan tepat pada masanya untuk mengurus keperluan kewangan anda.",
      primaryCtaText: pageData?.hero?.primaryCtaText || "Mohon Sekarang",
      primaryCtaLink: pageData?.hero?.primaryCtaLink || "mohon-pinjaman-online",
      bannerImage: pageData?.hero?.heroImage || "/assets/images/banner-1.png",
    },
    {
      bannerImage: "/assets/images/banner-2.png",
    },
  ];

  const bannerList =
    pageData?.banners && pageData.banners.length > 0
      ? pageData.banners
      : defaultBanners;

  useEffect(() => {
    if (currentSlide >= bannerList.length) {
      setCurrentSlide(0);
    }
  }, [bannerList.length, currentSlide]);

  useEffect(() => {
    if (bannerList.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerList.length]);

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

      {/* Sticky WhatsApp Chat */}
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

      {/* Main Content Body */}
      <main className="page_content">
        {/* Hero Section Carousel */}
        <section className="hero-carousel">
          <div
            className="carousel-track-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="carousel-track"
              id="carouselTrack"
              style={{
                width: `${bannerList.length * 100}%`,
                transform: `translateX(-${(currentSlide * 100) / bannerList.length}%)`,
              }}
            >
              {bannerList.map((banner: any, index: number) => {
                const fallbackImg =
                  index === 0 ? "/assets/images/banner-1.png" : "/assets/images/banner-2.png";
                const bgImage = getMediaUrl(banner.bannerImage, fallbackImg);
                const hasText = Boolean(
                  banner.heading || banner.subheading || banner.primaryCtaText
                );

                return (
                  <div
                    key={index}
                    className={`carousel-slide slide-${index + 1} ${hasText ? "has-text-slide" : "image-only-slide"
                      }`}
                    style={{
                      width: `${100 / bannerList.length}%`,
                      backgroundImage: `url('${bgImage}')`,
                      backgroundSize: hasText ? "cover" : "100% auto",
                      backgroundPosition: hasText ? "center bottom" : "center center",
                      backgroundColor: hasText ? undefined : "#f4f6f8",
                      cursor: !hasText && banner.primaryCtaLink ? "pointer" : "default",
                    }}
                    onClick={() => {
                      if (!hasText && banner.primaryCtaLink) {
                        window.location.href = banner.primaryCtaLink;
                      }
                    }}
                  >
                    {hasText && (
                      <div className="hero-content">
                        {banner.heading && <h1>{banner.heading}</h1>}
                        {banner.subheading && <p>{banner.subheading}</p>}
                        {banner.primaryCtaText && (
                          <a
                            href={banner.primaryCtaLink || "mohon-pinjaman-online"}
                            className="btn border_red_reverse cta_semak cta_mohon"
                          >
                            <span>
                              <small>{banner.primaryCtaText}</small>
                              <small>{banner.primaryCtaText}</small>
                            </span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {bannerList.length > 1 && (
            <div className="carousel-indicators">
              {bannerList.map((_: any, index: number) => (
                <div
                  key={index}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))}
            </div>
          )}
        </section>

        {/* Mascot Divider */}
        <div className="mascot-divider d-none d-lg-block">
          <img src="/assets/images/ladybird-1.png" alt="Loanbuddy Mascot" />
        </div>

        {/* Services Section */}
        {(() => {
          const servicesSection = pageData?.sections?.[0];
          const defaultServices = [
            {
              itemTitle: "Pinjaman Peribadi Online",
              itemDescription: "Mohon pinjaman peribadi dengan mudah dan pantas melalui permohonan atas talian.",
              image: "/assets/images/fimage2.png",
              itemLink: "pinjaman-peribadi-kl-sarawak",
            },
            {
              itemTitle: "Pinjaman Tambah Nilai",
              itemDescription: "Pinjaman peribadi tidak mencukupi? Pinjaman Tambah Nilai boleh selesaikan masalah anda.",
              image: "/assets/images/fimage1.png",
              itemLink: "pinjaman-koperasi",
            },
          ];
          const serviceItems = servicesSection?.items?.length ? servicesSection.items : defaultServices;

          return (
            <section className={`services ${isServicesVisible ? "animated-in" : ""}`} ref={servicesRef}>
              <h2>{servicesSection?.sectionTitle || "Perkhidmatan Kami"}</h2>

              <div className="services-grid">
                {serviceItems.map((item: any, idx: number) => {
                  const fallbackImg = idx === 0 ? "/assets/images/fimage2.png" : "/assets/images/fimage1.png";
                  const fallbackLink = idx === 0 ? "pinjaman-peribadi-kl-sarawak" : "pinjaman-koperasi";
                  const itemHref = item.itemLink || item.link || fallbackLink;
                  const imageUrl = getMediaUrl(item.itemImage, fallbackImg);
                  return (
                    <div key={idx} className="service-card">
                      {/* Mobile background photo */}
                      <img
                        src={imageUrl}
                        alt={item.itemTitle || "Service Background"}
                        className="service-card-bg-img d-md-none"
                      />
                      {/* Mobile gradient overlay */}
                      <div className="service-card-overlay d-md-none"></div>

                      <div className="service-card-inner">
                        {/* Desktop standard image */}
                        <img
                          src={imageUrl}
                          alt={item.itemTitle || "Service Image"}
                          className="service-image d-none d-md-block"
                        />
                        <h3>{item.itemTitle}</h3>
                        <p>{item.itemDescription}</p>
                        <a href={itemHref} className="service-link">
                          <span>Ketahui Lebih Lanjut</span>
                          <i className="far fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a href="mohon-pinjaman-online" className="btn border_red_reverse cta_semak cta_mohon">
                <span>
                  <small>Mohon Sekarang</small>
                  <small>Mohon Sekarang</small>
                </span>
              </a>
            </section>
          );
        })()}

        {/* Why Choose Loanbuddy Section */}
        {(() => {
          const whyChooseSection = pageData?.sections?.[1];
          const defaultCards = [
            {
              itemTitle: "Kredibel",
              itemDescription:
                "Telus, profesional dan komited untuk perkhidmatan yang optimum - kami adalah pemberi pinjaman wang berlesen di bawah Kementerian Perumahan dan Kerajaan Tempatan (KPKT).",
            },
            {
              itemTitle: "Permohonan Mudah",
              itemDescription:
                "Dokumen ringkas, proses mudah. Segalanya direka untuk memudahkan proses pinjaman tanpa tekanan.",
            },
            {
              itemTitle: "Kelulusan Pantas",
              itemDescription:
                "Kelulusan permohonan pinjaman dalam masa 1-2 hari bekerja dan pindahan wang pada hari yang sama selepas permohonan diluluskan.",
            },
          ];
          const cards = whyChooseSection?.items?.length ? whyChooseSection.items : defaultCards;

          return (
            <section
              ref={whyChooseRef}
              className={`intro_video_section bg_blue overflow-hidden decoration_wrap py-5 why-choose-section ${isWhyChooseVisible ? "animated-in" : ""
                }`}
            >
              <div className="container position-relative mb-5">
                <div className="row justify-content-center text-center mb-4">
                  <div className="col-12 col-lg-10">
                    <h2 className="font-ramai text-white mb-2" style={{ fontSize: "24px" }}>
                      {whyChooseSection?.sectionTitle || "Kenapa Ramai Memilih Loanbuddy Credit?"}
                    </h2>
                  </div>
                </div>

                <div className="row justify-content-center g-3 g-md-4">
                  {cards.map((card: any, idx: number) => {
                    const fallbackImg =
                      idx === 0
                        ? "/assets/images/kredibel-2.png"
                        : idx === 1
                          ? "/assets/images/mohon-mudah.png"
                          : "/assets/images/lulus-pantas.png";
                    return (
                      <div
                        key={idx}
                        className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
                        style={{ maxWidth: "360px" }}
                      >
                        <div
                          className="service_item bg_white w-100 rounded-3 text-center align-items-center why-choose-mobile-card"
                          style={{ aspectRatio: "auto", padding: "22px 24px" }}
                        >
                          <div
                            className="item_icon flex-shrink-0 mb-3 why-choose-mobile-icon"
                            style={{ width: "100px", height: "100px", minWidth: "100px" }}
                          >
                            <img
                              src={getMediaUrl(card.itemImage, fallbackImg)}
                              alt={card.itemTitle || "Icon"}
                              loading="lazy"
                              style={{ maxHeight: "64px", width: "auto" }}
                            />
                          </div>
                          <div className="why-choose-mobile-content">
                            <h4 className="item_title text-blue mb-2" style={{ fontSize: "18px", fontWeight: 700 }}>
                              {card.itemTitle}
                            </h4>
                            <div className="item_content">
                              <p className="mb-0 text-secondary" style={{ fontSize: "13.5px", lineHeight: 1.5 }}>
                                {card.itemDescription}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="btn_wrap btn_warp_home pb-0 d-lg-none text-center mt-4">
                  <a className="btn border_new" href="tentang-loanbuddy-credit">
                    <span>
                      <small>Ketahui Lebih Lanjut</small>
                      <small>Ketahui Lebih Lanjut</small>
                    </span>
                  </a>
                </div>
              </div>
            </section>
          );
        })()}

        {/* Testimonials Section */}
        {(() => {
          const testimonialSection = pageData?.sections?.[2];
          const defaultTestimonials = [
            {
              itemTitle: "Encik Samsudin",
              itemDescription:
                "Staf sangat membantu dan soalan saya semua dijawab dengan penuh kesabaran dan boleh nampak staf tau apa yang dia nak sampaikan.",
            },
            {
              itemTitle: "Fatimah binti Said",
              itemDescription: "Sgt efisien dr segi kelulusan. Sentiasa bagi update.",
            },
            {
              itemTitle: "Mr. Wong",
              itemDescription:
                "The process is very fast... and friendly staff.. they will guide from a-z so no need worry bc they will not leave u hanging. answer many questions quite good..",
            },
          ];
          const testimonials = testimonialSection?.items?.length ? testimonialSection.items : defaultTestimonials;

          return (
            <section
              ref={testimonialsRef}
              className={`testimonial_section section_space_lg bg_grey pos-relative ${isTestimonialsVisible ? "animated-in" : ""
                }`}
            >
              {/* Mascot Star (Behind Testimonial Cards) */}
              <div
                ref={mascotStarRef}
                className={`mascot-star-between d-none d-lg-block ${isMascotStarVisible ? "animated-in" : ""
                  }`}
              >
                <img
                  src="/assets/images/banner/home-mohon/star-ladybug.webp"
                  loading="lazy"
                  alt="Mascot Star"
                />
              </div>

              <div className="container position-relative">
                <div className="text-center mb-5">
                  <h2 style={{ fontSize: "24px", color: "#333", fontWeight: 700, marginBottom: 0 }}>
                    {testimonialSection?.sectionTitle || "Apa Kata Pelanggan Loanbuddy Credit?"}
                  </h2>
                </div>

                <div className="row justify-content-center g-4">
                  {testimonials.map((t: any, idx: number) => {
                    const fallbackAvatar =
                      idx === 0
                        ? "/assets/images/testimonial/samsudin.png"
                        : idx === 1
                          ? "/assets/images/testimonial/fatimah.png"
                          : "/assets/images/testimonial/wong.png";
                    return (
                      <div key={idx} className="col-12 col-md-6 col-lg-4">
                        <div className="testimonial_item h-100">
                          <div className="testimonial_content">
                            <div className="testimonial_header_wrap">
                              <img
                                src={getMediaUrl(t.itemImage, fallbackAvatar)}
                                alt={t.itemTitle || "Avatar"}
                                className="testimonial_avatar"
                              />
                              <div className="testimonial_meta">
                                <div className="d-flex align-items-center gap-1 mb-1">
                                  {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="26" height="26" viewBox="0 0 24 24" fill="#0052cc">
                                      <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                                    </svg>
                                  ))}
                                </div>
                                <h5 className="testimonial_name">{t.itemTitle}</h5>
                              </div>
                            </div>
                            <p>{t.itemDescription}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })()}


        {/* Call to Action Banner Section */}
        <section
          ref={ctaBannerRef}
          className={`bg_blue overflow-hidden cta_banner_section ${isCtaBannerVisible ? "animated-in" : ""
            }`}
          style={{ backgroundImage: `url('/assets/images/banner/home-mohon/white-3d-bg.webp')` }}
        >
          <div className="container">
            <div className="cta_home_new d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 text-center text-md-start">
              <div className="text-cta-mobile">
                <h2 className="text-white mb-1" style={{ fontSize: "24px", fontWeight: 700, lineHeight: "1.3" }}>
                  Perlukan Pinjaman Peribadi?
                </h2>
                <p className="text-white mb-0" style={{ fontSize: "16px", fontWeight: 500, opacity: 0.95, lineHeight: "1.4" }}>
                  Loanbuddy Credit Sedia Berkhidmat untuk Anda!
                </p>
              </div>
              <div className="z-index-3 flex-shrink-0">
                <a href="mohon-pinjaman-online" className="btn border_red_new cta_semak cta_mohon">
                  <span>
                    <small>Mohon Sekarang</small>
                    <small>Mohon Sekarang</small>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Blog & Resources Section */}
        {(() => {
          const blogSection = pageData?.sections?.[3];
          const defaultBlogs = [
            {
              itemTitle: "Penyatuan Hutang",
              itemDescription: "Baca artikel",
              itemLink: "penyatuan-hutang-kad-kredit-2026",
              fallbackImg: "/assets/images/blog/penyatuan-hutang-01.png",
              alt: "Tabiat Buruk Pengurusan Kewangan",
            },
            {
              itemTitle: "Jenis-Jenis Pinjaman di Malaysia",
              itemDescription: "Baca artikel",
              itemLink: "kesan-opr-pinjaman-peribadi",
              fallbackImg: "/assets/images/blog/pinjaman-my-01.png",
              alt: "Kesan OPR Pinjaman Peribadi",
            },
            {
              itemTitle: "Kurangkan Beban Kewangan Anda dengan Penyatuan Hutang di Loanbuddy Credit",
              itemDescription: "Baca artikel",
              itemLink: "pinjaman-peribadi-ccris-ptptn-2026",
              fallbackImg: "/assets/images/blog/beban-kewangan-01.png",
              alt: "CCRIS Sangkut PTPTN",
            },
          ];

          const blogItems = blogSection?.items?.length ? blogSection.items : defaultBlogs;

          return (
            <section
              ref={blogRef}
              className={`calltoaction_section section_space_md bg_grey decoration_wrap blog_section ${isBlogVisible ? "animated-in" : ""
                }`}
            >
              <div className="container col-mobile">
                <div className="section_heading">
                  <div className="row align-items-center">
                    <div className="col col-lg-7">
                      <h2 className="heading_text mb-0" style={{ fontSize: "24px", color: "#333", fontWeight: 700 }}>
                        {blogSection?.sectionTitle || "Sumber & Blog"}
                      </h2>
                    </div>
                    <div className="col col-lg-5 d-none d-lg-flex justify-content-end">
                      <div className="btn_wrap p-0 z-index-3">
                        <a className="btn border_artikel" href="blog">
                          <span>
                            <small>Artikel lain</small>
                            <small>Artikel lain</small>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row align-items-stretch">
                  {blogItems.map((blog: any, idx: number) => {
                    const fallbackImg = defaultBlogs[idx]?.fallbackImg || "/assets/images/blog/penyatuan-hutang-01.png";
                    const link = blog.itemLink || defaultBlogs[idx]?.itemLink || "blog";
                    const altText = blog.itemTitle || defaultBlogs[idx]?.alt || "Blog thumbnail";
                    return (
                      <div key={idx} className="col col-lg-4 z-index-3">
                        <div className="blog_item bg-white" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                          <div className="item_image">
                            <a href={link}>
                              <img
                                src={getMediaUrl(blog.itemImage, fallbackImg)}
                                alt={altText}
                                loading="lazy"
                              />
                            </a>
                          </div>
                          <div className="item_content p-15" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                            <h3 className="item_title">
                              <a href={link} style={{ fontSize: "18px", lineHeight: "22px" }}>
                                {blog.itemTitle}
                              </a>
                            </h3>
                            <div style={{ marginTop: "15px" }}>
                              <a href={link} style={{ color: "red", fontWeight: "bold", textDecoration: "underline !important" }}>
                                {blog.itemDescription || "Baca artikel"}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="btn_wrap d-block d-lg-none pb-0 text-center">
                  <a className="btn border_new border_artikel" href="blog">
                    <span>
                      <small>Artikel Lain</small>
                      <small>Artikel Lain</small>
                    </span>
                  </a>
                </div>
              </div>
            </section>
          );
        })()}

        {/* FAQ Section */}
        <section className="faq_section section_space_faq">
          <div className="container">
            <div className="section_heading text-center mb-3">
              <div className="row justify-content-center">
                <div className="col col-lg-8">
                  <h2 className="heading_text heading_text_custom text-blue">Soalan Lazim</h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="accordion faq-system" id="faq_accordion_1">
                  {/* FAQ 1 */}
                  <div className="accordion-item accordion-item-custom">
                    <div
                      className={`accordion-button text-blue ${openFaq === 0 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(0)}
                    >
                      Sekiranya saya membuat pinjaman RM3,000. Apakah gambaran jadual pembayaran balik?
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 0 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <div className="mb-0">
                          Contoh Wakil: <br />
                          Amaun Pinjaman: <strong>RM3,000</strong> <br />
                          Tempoh Pinjaman: <strong>12 bulan</strong> <br />
                          Kadar Faedah: <strong>18.0% setahun</strong> <br />
                          Fi: <strong>Fi pesuruhjaya sumpah RM10 dan caj LHDN RM15</strong> <br />
                          <br />
                          <img src="/assets/images/Jadual.png" alt="Jadual Pembayaran Balik" loading="lazy" className="w-100" />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                    <div
                      className={`accordion-button ${openFaq === 1 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(1)}
                    >
                      Siapakah Loanbuddy Credit?
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 1 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <p className="mb-0">
                          Loanbuddy Credit Sdn. Bhd. (<span className="no-link">200901039396</span> / 882536-K) ialah sebuah
                          syarikat pinjaman wang berlesen di bawah Akta Pemberi Pinjam Wang 1951 dan dikawal selia oleh
                          Kementerian Perumahan dan Kerajaan Tempatan (KPKT). Kami komited menyediakan pinjaman peribadi
                          yang selamat, telus dan mudah dengan proses kelulusan yang pantas untuk membantu anda memenuhi
                          keperluan kewangan tanpa kerumitan.
                        </p>
                      </div>
                    </div>
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
                    <div className={`faq-answer-collapse ${openFaq === 2 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <div className="mb-0">
                          Anda boleh memohon dalam talian di sini, pada bila-bila masa. Sekiranya anda memerlukan bantuan atau maklumat lanjut, hubungi Loanbuddy Credit melalui WhatsApp.

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
                                <span className="text-white" style={{ fontSize: "10px", display: "block", color: "#ffffff" }}>Cawangan Kuala Lumpur</span>
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
                                <span className="text-white" style={{ fontSize: "10px", display: "block", color: "#ffffff" }}>Cawangan Kuching</span>
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
                                <span className="text-white" style={{ fontSize: "10px", display: "block", color: "#ffffff" }}>Cawangan Bintulu</span>
                                <span className="text-white" style={{ color: "#ffffff" }}>+6010 909 8557</span>
                              </div>
                            </a>
                          </div>
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
                      Berapakah kadar faedah?
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 4 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <p className="mb-0">
                          Kadar faedah tahunan adalah sehingga 18.0%.
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
                      Bolehkah saya memohon Pinjaman Peribadi jika saya bekerja sendiri atau bekerja sambilan?
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 5 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <p className="mb-0">
                          Tidak. Anda mesti bekerja sekurang-kurangnya 3 bulan dengan syarikat semasa anda.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 6 */}
                  <div className="accordion-item">
                    <div
                      className={`accordion-button ${openFaq === 3 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(3)}
                    >
                      Apakah dokumen dan kelayakan yang diperlukan?
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 3 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <div className="mb-0">
                          <strong>Dokumen Diperlukan</strong>
                          <ul>
                            <li>1. Salinan kad pengenalan (depan dan belakang)</li>
                            <li>2. Penyata bank pengkreditan gaji 3 bulan terkini (format PDF)</li>
                            <li>3. Slip gaji 3 bulan terkini (format PDF) dan/atau</li>
                            <li>4. Bil utiliti 1 bulan terkini (air, elektrik, dll.)</li>
                          </ul>
                          <strong>Kelayakan Pinjaman Peribadi Atas Talian</strong>
                          <ul>
                            <li>1. Warganegara Malaysia</li>
                            <li>2. Berumur antara 18 sehingga 60 tahun</li>
                            <li>3. Ada pekerjaan tetap (sektor swasta/kerajaan/GLC) dengan sekurang-kurangnya 3 bulan bekerja (dengan slip gaji dan gaji dikreditkan ke dalam akaun bank)</li>
                            <li>4. Pendapatan bulanan kasar minimum RM1,700</li>
                            <li>5. Tidak muflis dan mampu membayar balik pinjaman</li>
                            <li>6. Bukan individu berstatus Orang Terdedah Politik (PEP)</li>
                          </ul>
                          <strong>Kelayakan Pinjaman Tambah Nilai</strong>
                          <ul>
                            <li>1. Pelanggan yang mempunyai kontrak sedia ada dengan baki jumlah pinjaman</li>
                            <li>2. Rekod pembayaran yang baik dengan Loanbuddy Credit</li>
                            <li>3. Individu berumur 18 hingga 60 tahun</li>
                            <li>4. Pendapatan kasar bulanan minimum RM1,700</li>
                            <li>5. Kakitangan swasta dan kerajaan sahaja</li>
                            <li>6. Warganegara Malaysia</li>
                            <li>7. Tidak muflis dan mampu membayar balik pinjaman</li>
                            <li>8. Bukan individu berstatus Orang Terdedah Politik (PEP)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 7 */}
                  <div className="accordion-item">
                    <div
                      className={`accordion-button ${openFaq === 6 ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => toggleFaq(6)}
                    >
                      Apakah tempoh pinjaman minimum dan maksimum?
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 6 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <p className="mb-0">
                          Tempoh pinjaman minimum ialah 12 bulan dan tempoh pinjaman maksimum ialah 60 bulan (5 tahun).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
