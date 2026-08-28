"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

import { getMediaUrl } from "@/lib/media";

export default function Home() {
  const { t, isEnglish, language } = useLanguage();
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
    fetch(`/api/content?slug=home&locale=${language}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPageData(data.doc);
        }
      })
      .catch(() => { });
  }, [language]);

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
      heading: pageData?.hero?.heading || t.home.heroHeading,
      subheading: pageData?.hero?.subheading || t.home.heroSubheading,
      primaryCtaText: pageData?.hero?.primaryCtaText || t.home.heroCta,
      primaryCtaLink: pageData?.hero?.primaryCtaLink || "mohon-pinjaman-online",
      bannerImage: pageData?.hero?.heroImage || "/assets/images/banner-1.png",
    },
    {
      heading: t.home.banner2Heading || "Loanbuddy Credit di Hujung Jari Anda",
      subheading:
        t.home.banner2Subheading ||
        "Permohonan pinjaman peribadi kini lebih pantas dan mudah. Muat turun aplikasi kami sekarang untuk memohon pada bila-bila masa, di mana jua.",
      primaryCtaText: t.home.banner2Cta || "Ketahui Lebih Lanjut",
      primaryCtaLink: t.home.banner2Link || "loan-compare",
      bannerImage: "/assets/images/App-banners-No-Copy.png",
    },
  ];

  const bannerList =
    pageData?.banners && pageData.banners.length > 0
      ? pageData.banners.map((b: any, idx: number) => ({
          ...b,
          heading:
            b.heading ||
            (idx === 0
              ? pageData?.hero?.heading || t.home.heroHeading
              : idx === 1
              ? t.home.banner2Heading || "Loanbuddy Credit di Hujung Jari Anda"
              : undefined),
          subheading:
            b.subheading ||
            (idx === 0
              ? pageData?.hero?.subheading || t.home.heroSubheading
              : idx === 1
              ? t.home.banner2Subheading ||
                "Permohonan pinjaman peribadi kini lebih pantas dan mudah. Muat turun aplikasi kami sekarang untuk memohon pada bila-bila masa, di mana jua."
              : undefined),
          primaryCtaText:
            b.primaryCtaText ||
            (idx === 0
              ? pageData?.hero?.primaryCtaText || t.home.heroCta
              : idx === 1
              ? t.home.banner2Cta || "Ketahui Lebih Lanjut"
              : undefined),
          primaryCtaLink:
            b.primaryCtaLink ||
            (idx === 0
              ? pageData?.hero?.primaryCtaLink || "mohon-pinjaman-online"
              : idx === 1
              ? t.home.banner2Link || "loan-compare"
              : undefined),
          bannerImage:
            b.bannerImage ||
            (idx === 0
              ? pageData?.hero?.heroImage || "/assets/images/banner-1.png"
              : "/assets/images/App-banners-No-Copy.png"),
        }))
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
        <section className="hero-carousel w-full px-[15px] lg:!px-[8vw] !px-0 lg:!h-[100%]">
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
                  index === 0 ? "/assets/images/banner-1.png" : "/assets/images/App-banners-No-Copy.png";
                const bgImage = getMediaUrl(banner.bannerImage, fallbackImg);
                const hasText = Boolean(
                  banner.heading || banner.subheading || banner.primaryCtaText
                );
                
                // Identify if this is the second banner to apply special layout
                const isAppBanner = index === 1;

                return (
                  <div
                    key={index}
                    // CHANGED: Added md: prefix to layout modifiers so mobile reverts to Banner 1 standard layout. 
                    // Added bg-[25%_center] so the mobile background frames the left side correctly.
                    className={`carousel-slide slide-${index + 1} ${hasText ? "has-text-slide" : "image-only-slide"} ${
                      isAppBanner ? "!bg-[8%_center] md:!bg-[center_top] md:!flex-row md:!items-center md:!justify-end md:!p-0" : ""
                    }`}
                    style={{
                      width: `${100 / bannerList.length}%`,
                      backgroundImage: `url('${bgImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: isAppBanner ? undefined : (hasText ? "center bottom" : "center center"),
                      backgroundColor: hasText ? undefined : "#f4f6f8",
                      cursor: !hasText && banner.primaryCtaLink ? "pointer" : "default",
                    }}
                    onClick={() => {
                      if (!hasText && banner.primaryCtaLink) {
                        window.location.href = banner.primaryCtaLink;
                      }
                    }}
                  >
                    {/* Layout for Banner 1 (Standard Layout) */}
                    {hasText && !isAppBanner && (
                      <div className="hero-content">
                        {banner.heading && (
                          <h1>
                            {typeof banner.heading === "string" && banner.heading.includes("\n")
                              ? banner.heading.split("\n").map((line: string, i: number) => (
                                  <React.Fragment key={i}>
                                    {i > 0 && <br />}
                                    {line}
                                  </React.Fragment>
                                ))
                              : banner.heading}
                          </h1>
                        )}
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

                    {/* Layout specifically for Banner 2 (App Banner Layout) */}
                    {hasText && isAppBanner && (
                      // CHANGED: pt-10 to pt-0 md:pt-14, and justify-start to justify-center md:justify-start for perfect mobile centering
                      <div className="relative z-10 w-full lg:w-[58%] px-6 md:px-12 py-30 lg:!py-10 md:pt-14 lg:pt-16 pb-0 text-center md:text-left flex flex-col items-center md:!items-start h-full  md:justify-start">
                        {banner.heading && (
                          // CHANGED: Added !text-white for mobile, preserved md:!text-[#044BD9] for desktop
                          <h1 className="text-[25px] md:text-[32px] lg:text-[35px] font-bold !text-white md:!text-[#044BD9] leading-tight mb-3 !text-center md:!text-left whitespace-pre-line">
                            {typeof banner.heading === "string" && banner.heading.includes("\n")
                              ? banner.heading.split("\n").map((line: string, i: number) => (
                                  <React.Fragment key={i}>
                                    {i > 0 && <br />}
                                    {line}
                                  </React.Fragment>
                                ))
                              : banner.heading}
                          </h1>
                        )}
                        
                        {banner.subheading && (
                          // CHANGED: Added !text-white for mobile, preserved md:!text-[#424143] for desktop
                          <p className="!text-[14px] md:!text-[15px] !text-white md:!text-[#424143] mb-6 md:!mb-8 font-bold !max-w-[1200px] !leading-relaxed lg:!leading-relaxed mx-auto md:mx-0 lg:!mx-0 !text-center md:!text-start whitespace-pre-line">
                            {banner.subheading}
                          </p>
                        )}
                        
                        {banner.primaryCtaText && (
                          <a
                            href={banner.primaryCtaLink || "mohon-pinjaman-online"}
                            className="group relative inline-flex h-[50px] items-start justify-center overflow-hidden rounded-full border-[2px] border-[#F20505] bg-[#F20505] px-[60px] font-bold !text-white shadow-md whitespace-nowrap transition-colors duration-300 hover:!bg-white hover:!text-[#F20505]"
                          >
                            <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                              <small className="flex h-[50px] items-center text-[16px]">{banner.primaryCtaText}</small>
                              <small className="flex h-[50px] items-center text-[16px]">{banner.primaryCtaText}</small>
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
              itemTitle: t.home.service1Title,
              itemDescription: t.home.service1Desc,
              image: "/assets/images/fimage2.png",
              itemLink: "pinjaman-peribadi-kl-sarawak",
            },
            {
              itemTitle: t.home.service2Title,
              itemDescription: t.home.service2Desc,
              image: "/assets/images/fimage1.png",
              itemLink: "pinjaman-koperasi",
            },
          ];
          const serviceItems =
            servicesSection?.items && servicesSection.items.length > 0
              ? servicesSection.items.map((item: any, idx: number) => ({
                  ...item,
                  itemTitle: item.itemTitle || (idx === 0 ? t.home.service1Title : t.home.service2Title),
                  itemDescription: item.itemDescription || (idx === 0 ? t.home.service1Desc : t.home.service2Desc),
                }))
              : defaultServices;

          return (
            <section className={`services ${isServicesVisible ? "animated-in" : ""}`} ref={servicesRef}>
              <h2>{servicesSection?.sectionTitle || t.home.servicesTitle}</h2>

              <div className="services-grid">
                {serviceItems.map((item: any, idx: number) => {
                  const fallbackImg = idx === 0 ? "/assets/images/fimage2.png" : "/assets/images/fimage1.png";
                  const fallbackLink = idx === 0 ? "pinjaman-peribadi-kl-sarawak" : "pinjaman-koperasi";
                  const itemHref = item.itemLink || item.link || fallbackLink;
                  const imageUrl = getMediaUrl(item.itemImage, fallbackImg);
                  const title = item.itemTitle || (idx === 0 ? t.home.service1Title : t.home.service2Title);
                  const description = item.itemDescription || (idx === 0 ? t.home.service1Desc : t.home.service2Desc);

                  return (
                    <div key={idx} className="service-card">
                      {/* Mobile background photo */}
                      <img
                        src={imageUrl}
                        alt={title || "Service Background"}
                        className="service-card-bg-img d-md-none"
                      />
                      {/* Mobile gradient overlay */}
                      <div className="service-card-overlay d-md-none"></div>

                      <div className="service-card-inner">
                        {/* Desktop standard image */}
                        <img
                          src={imageUrl}
                          alt={title || "Service Image"}
                          className="service-image d-none d-md-block"
                        />
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href={itemHref} className="service-link">
                          <span>{t.home.learnMore}</span>
                          <i className="far fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a href="mohon-pinjaman-online" className="btn border_red_reverse cta_semak cta_mohon">
                <span>
                  <small>{t.home.applyNow}</small>
                  <small>{t.home.applyNow}</small>
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
              itemTitle: t.home.whyChoose1Title,
              itemDescription: t.home.whyChoose1Desc,
            },
            {
              itemTitle: t.home.whyChoose2Title,
              itemDescription: t.home.whyChoose2Desc,
            },
            {
              itemTitle: t.home.whyChoose3Title,
              itemDescription: t.home.whyChoose3Desc,
            },
          ];
          const cards =
            whyChooseSection?.items && whyChooseSection.items.length > 0
              ? whyChooseSection.items.map((card: any, idx: number) => ({
                  ...card,
                  itemTitle: card.itemTitle || defaultCards[idx]?.itemTitle || "",
                  itemDescription: card.itemDescription || defaultCards[idx]?.itemDescription || "",
                }))
              : defaultCards;

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
                      {whyChooseSection?.sectionTitle || t.home.whyChooseTitle}
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
                    const title = card.itemTitle || (idx === 0 ? t.home.whyChoose1Title : idx === 1 ? t.home.whyChoose2Title : t.home.whyChoose3Title);
                    const description = card.itemDescription || (idx === 0 ? t.home.whyChoose1Desc : idx === 1 ? t.home.whyChoose2Desc : t.home.whyChoose3Desc);

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
                            style={{ width: "120px", height: "115px", minWidth: "120px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}
                          >
                            <img
                              src={getMediaUrl(card.itemImage, fallbackImg)}
                              alt={title || "Icon"}
                              loading="lazy"
                              style={{ maxHeight: "95px", maxWidth: "120px", width: "auto", height: "auto", objectFit: "contain" }}
                            />
                          </div>
                          <div className="why-choose-mobile-content">
                            <h4 className="item_title text-blue mb-2" style={{ fontSize: "18px", fontWeight: 700 }}>
                              {title}
                            </h4>
                            <div className="item_content">
                              <p className="mb-0 text-secondary" style={{ fontSize: "13.5px", lineHeight: 1.5 }}>
                                {description}
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
                      <small>{isEnglish ? t.home.learnMore : "Ketahui Lebih Lanjut"}</small>
                      <small>{isEnglish ? t.home.learnMore : "Ketahui Lebih Lanjut"}</small>
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
          const defaultTestimonials = isEnglish
            ? [
                {
                  itemTitle: "Mr. Samsudin",
                  itemDescription:
                    "Staff was very helpful and all my questions were answered patiently with great professionalism.",
                },
                {
                  itemTitle: "Fatimah binti Said",
                  itemDescription: "Very efficient in terms of approval. Kept me updated throughout.",
                },
                {
                  itemTitle: "Mr. Wong",
                  itemDescription:
                    "The process is very fast... and friendly staff.. they will guide from a-z so no need worry bc they will not leave u hanging.",
                },
              ]
            : [
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
          const testimonials =
            testimonialSection?.items && testimonialSection.items.length > 0
              ? testimonialSection.items.map((tItem: any, idx: number) => ({
                  ...tItem,
                  itemTitle: tItem.itemTitle || defaultTestimonials[idx]?.itemTitle || "",
                  itemDescription: tItem.itemDescription || defaultTestimonials[idx]?.itemDescription || "",
                }))
              : defaultTestimonials;

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
                    {isEnglish ? t.home.testimonialsTitle : (testimonialSection?.sectionTitle || t.home.testimonialsTitle)}
                  </h2>
                </div>

                <div className="row justify-content-center g-4">
                  {testimonials.map((tItem: any, idx: number) => {
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
                                src={getMediaUrl(tItem.itemImage, fallbackAvatar)}
                                alt={tItem.itemTitle || "Avatar"}
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
                                <h5 className="testimonial_name">{tItem.itemTitle}</h5>
                              </div>
                            </div>
                            <p>{tItem.itemDescription}</p>
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
                  {isEnglish ? t.home.ctaTitle : "Perlukan Pinjaman Peribadi?"}
                </h2>
                <p className="text-white mb-0" style={{ fontSize: "16px", fontWeight: 500, opacity: 0.95, lineHeight: "1.4" }}>
                  {isEnglish ? t.home.ctaSubtitle : "Loanbuddy Credit Sedia Berkhidmat untuk Anda!"}
                </p>
              </div>
              <div className="z-index-3 flex-shrink-0">
                <a href="mohon-pinjaman-online" className="btn border_red_new cta_semak cta_mohon">
                  <span>
                    <small>{isEnglish ? t.home.applyNow : "Mohon Sekarang"}</small>
                    <small>{isEnglish ? t.home.applyNow : "Mohon Sekarang"}</small>
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
              itemDescription: isEnglish ? t.home.readArticle : "Baca artikel",
              itemLink: "penyatuan-hutang-kad-kredit-2026",
              fallbackImg: "/assets/images/blog/penyatuan-hutang-01.png",
              alt: "Tabiat Buruk Pengurusan Kewangan",
            },
            {
              itemTitle: "Jenis-Jenis Pinjaman di Malaysia",
              itemDescription: isEnglish ? t.home.readArticle : "Baca artikel",
              itemLink: "kesan-opr-pinjaman-peribadi",
              fallbackImg: "/assets/images/blog/pinjaman-my-01.png",
              alt: "Kesan OPR Pinjaman Peribadi",
            },
            {
              itemTitle: "Kurangkan Beban Kewangan Anda dengan Penyatuan Hutang di Loanbuddy Credit",
              itemDescription: isEnglish ? t.home.readArticle : "Baca artikel",
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
                        {isEnglish ? t.home.blogTitle : (blogSection?.sectionTitle || t.home.blogTitle)}
                      </h2>
                    </div>
                    <div className="col col-lg-5 d-none d-lg-flex justify-content-end">
                      <div className="btn_wrap p-0 z-index-3">
                        <a className="btn border_artikel" href="blog">
                          <span>
                            <small>{isEnglish ? t.home.moreArticles : "Artikel Lain"}</small>
                            <small>{isEnglish ? t.home.moreArticles : "Artikel Lain"}</small>
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
                                {isEnglish ? t.home.readArticle : (blog.itemDescription || "Baca artikel")}
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
                      <small>{isEnglish ? t.home.moreArticles : "Artikel Lain"}</small>
                      <small>{isEnglish ? t.home.moreArticles : "Artikel Lain"}</small>
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
                  <h2 className="heading_text heading_text_custom text-blue">
                    {isEnglish ? t.home.faqTitle : "Soalan Lazim"}
                  </h2>
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
                      {isEnglish
                        ? t.home.faq1Question
                        : "Sekiranya saya membuat pinjaman RM3,000. Apakah gambaran jadual pembayaran balik?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 0 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <div className="mb-0">
                          {isEnglish ? t.home.faq1Example : "Contoh Wakil:"} <br />
                          {isEnglish ? t.home.faq1Amount : "Amaun Pinjaman:"} <strong>RM3,000</strong> <br />
                          {isEnglish ? t.home.faq1Tenure : "Tempoh Pinjaman:"} <strong>{isEnglish ? t.home.faq1TenureVal : "12 bulan"}</strong> <br />
                          {isEnglish ? t.home.faq1Interest : "Kadar Faedah:"} <strong>{isEnglish ? t.home.faq1InterestVal : "18.0% setahun"}</strong> <br />
                          {isEnglish ? t.home.faq1Fees : "Fi:"} <strong>{isEnglish ? t.home.faq1FeesVal : "Fi pesuruhjaya sumpah RM10 dan caj LHDN RM15"}</strong> <br />
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
                      {isEnglish ? t.home.faq2Question : "Siapakah Loanbuddy Credit?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 1 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <p className="mb-0">
                          {isEnglish
                            ? t.home.faq2Answer
                            : "Loanbuddy Credit Sdn. Bhd. (200901039396 / 882536-K) ialah sebuah syarikat pinjaman wang berlesen di bawah Akta Pemberi Pinjam Wang 1951 dan dikawal selia oleh Kementerian Perumahan dan Kerajaan Tempatan (KPKT). Kami komited menyediakan pinjaman peribadi yang selamat, telus dan mudah dengan proses kelulusan yang pantas untuk membantu anda memenuhi keperluan kewangan tanpa kerumitan."}
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
                      {isEnglish
                        ? t.home.faq3Question
                        : "Bagaimanakah cara untuk saya memohon pinjaman peribadi Loanbuddy Credit?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 2 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <div className="mb-0">
                          {isEnglish
                            ? t.home.faq3Answer
                            : "Anda boleh memohon dalam talian di sini, pada bila-bila masa. Sekiranya anda memerlukan bantuan atau maklumat lanjut, hubungi Loanbuddy Credit melalui WhatsApp."}

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
                                <span className="text-white" style={{ fontSize: "10px", display: "block", color: "#ffffff" }}>{isEnglish ? t.home.branchKL : "Cawangan Kuala Lumpur"}</span>
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
                                <span className="text-white" style={{ fontSize: "10px", display: "block", color: "#ffffff" }}>{isEnglish ? t.home.branchKuching : "Cawangan Kuching"}</span>
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
                                <span className="text-white" style={{ fontSize: "10px", display: "block", color: "#ffffff" }}>{isEnglish ? t.home.branchBintulu : "Cawangan Bintulu"}</span>
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
                      {isEnglish ? "What is the interest rate?" : "Berapakah kadar faedah?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 4 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <p className="mb-0">
                          {isEnglish ? "Annual interest rate is up to 18.0%." : "Kadar faedah tahunan adalah sehingga 18.0%."}
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
                      {isEnglish ? "Can I apply for a Personal Loan if I am self-employed or part-time?" : "Bolehkah saya memohon Pinjaman Peribadi jika saya bekerja sendiri atau bekerja sambilan?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 5 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <p className="mb-0">
                          {isEnglish
                            ? "No. You must be employed for at least 3 months with your current company."
                            : "Tidak. Anda mesti bekerja sekurang-kurangnya 3 bulan dengan syarikat semasa anda."}
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
                      {isEnglish ? "What are the required documents and eligibility criteria?" : "Apakah dokumen dan kelayakan yang diperlukan?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 3 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <div className="mb-0">
                          <strong>{isEnglish ? "Required Documents" : "Dokumen Diperlukan"}</strong>
                          <ul>
                            <li>{isEnglish ? "1. Copy of NRIC (front and back)" : "1. Salinan kad pengenalan (depan dan belakang)"}</li>
                            <li>{isEnglish ? "2. Latest 3 months salary bank crediting statements (PDF format)" : "2. Penyata bank pengkreditan gaji 3 bulan terkini (format PDF)"}</li>
                            <li>{isEnglish ? "3. Latest 3 months payslips (PDF format) and/or" : "3. Slip gaji 3 bulan terkini (format PDF) dan/atau"}</li>
                            <li>{isEnglish ? "4. Latest 1 month utility bill (water, electricity, etc.)" : "4. Bil utiliti 1 bulan terkini (air, elektrik, dll.)"}</li>
                          </ul>
                          <strong>{isEnglish ? "Online Personal Loan Eligibility" : "Kelayakan Pinjaman Peribadi Atas Talian"}</strong>
                          <ul>
                            <li>{isEnglish ? "1. Malaysian citizen" : "1. Warganegara Malaysia"}</li>
                            <li>{isEnglish ? "2. Aged between 18 and 60 years old" : "2. Berumur antara 18 sehingga 60 tahun"}</li>
                            <li>{isEnglish ? "3. Permanent employment (Private/Government/GLC) with min. 3 months employment" : "3. Ada pekerjaan tetap (sektor swasta/kerajaan/GLC) dengan sekurang-kurangnya 3 bulan bekerja (dengan slip gaji dan gaji dikreditkan ke dalam akaun bank)"}</li>
                            <li>{isEnglish ? "4. Minimum gross monthly salary of RM1,700" : "4. Pendapatan bulanan kasar minimum RM1,700"}</li>
                            <li>{isEnglish ? "5. Not bankrupt and capable of repaying the loan" : "5. Tidak muflis dan mampu membayar balik pinjaman"}</li>
                            <li>{isEnglish ? "6. Not a Politically Exposed Person (PEP)" : "6. Bukan individu berstatus Orang Terdedah Politik (PEP)"}</li>
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
                      {isEnglish ? "What is the minimum and maximum loan tenure?" : "Apakah tempoh pinjaman minimum dan maksimum?"}
                    </div>
                    <div className={`faq-answer-collapse ${openFaq === 6 ? "open" : ""}`}>
                      <div className="accordion-body">
                        <p className="mb-0">
                          {isEnglish
                            ? "The minimum loan tenure is 12 months and the maximum is 60 months (5 years)."
                            : "Tempoh pinjaman minimum ialah 12 bulan dan tempoh pinjaman maksimum ialah 60 bulan (5 tahun)."}
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
