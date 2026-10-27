"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMediaUrl } from "@/lib/media";
import { useLanguage } from "@/context/LanguageContext";

export default function PerkhidmatanKamiPage() {
  const { t, isEnglish, language } = useLanguage();
  const [pageData, setPageData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"peribadi" | "tambah-nilai">("peribadi");

  useEffect(() => {
    fetch(`/api/content?slug=perkhidmatan-kami&locale=${language}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc) {
          setPageData(data.doc);
        }
      })
      .catch(() => {});
  }, [language]);

  // Dynamic Hero Data
  const heroBg = pageData?.hero?.heroImage
    ? getMediaUrl(pageData.hero.heroImage, "/assets/images/banner/home-mohon/white-3d-bg.webp")
    : "/assets/images/banner/home-mohon/white-3d-bg.webp";

  const heroHeading = pageData?.hero?.heading;
  const heroSubheading = pageData?.hero?.subheading;

  // Dynamic Section 0: Tabs Header
  const tabSectionTitle =
    pageData?.sections?.[0]?.sectionTitle || t.ourServicesPage.tabSectionTitle;
  const tabPersonalLoanLabel =
    pageData?.sections?.[1]?.sectionBadge || t.ourServicesPage.tabPersonalLoan;
  const tabTopUpLoanLabel =
    pageData?.sections?.[3]?.sectionBadge || t.ourServicesPage.tabTopUpLoan;

  // Dynamic Section 1: Personal Loan Features
  const personalLoanHeading =
    pageData?.sections?.[1]?.sectionTitle || t.ourServicesPage.personalLoanHeading;
  const personalLoanDesc = pageData?.sections?.[1]?.sectionDescription;

  const feature1Img = getMediaUrl(
    pageData?.sections?.[1]?.items?.[0]?.itemImage,
    "/assets/images/permohonan-mudah.png"
  );
  const feature1Title =
    pageData?.sections?.[1]?.items?.[0]?.itemTitle || t.ourServicesPage.featureFastApprovalTitle;
  const feature1Desc =
    pageData?.sections?.[1]?.items?.[0]?.itemDescription;

  const feature2Img = getMediaUrl(
    pageData?.sections?.[1]?.items?.[1]?.itemImage,
    "/assets/images/syarat-fleksibel.png"
  );
  const feature2Title =
    pageData?.sections?.[1]?.items?.[1]?.itemTitle || t.ourServicesPage.featureFlexibleTermsTitle;
  const feature2Desc =
    pageData?.sections?.[1]?.items?.[1]?.itemDescription || t.ourServicesPage.featureFlexibleTermsDesc;

  const feature3Img = getMediaUrl(
    pageData?.sections?.[1]?.items?.[2]?.itemImage,
    "/assets/images/kad-atm-2.png"
  );
  const feature3Title =
    pageData?.sections?.[1]?.items?.[2]?.itemTitle || t.ourServicesPage.featureNoAtmCardTitle;
  const feature3Desc =
    pageData?.sections?.[1]?.items?.[2]?.itemDescription || t.ourServicesPage.featureNoAtmCardDesc;

  // Dynamic Section 2: Syarat Pinjaman Fleksibel
  const flexibleTermsTitle =
    pageData?.sections?.[2]?.sectionTitle || t.ourServicesPage.flexibleTermsTitle;

  const termLoanAmountTitle =
    pageData?.sections?.[2]?.items?.[0]?.itemTitle || t.ourServicesPage.termLoanAmountTitle;
  const termLoanAmountDesc =
    pageData?.sections?.[2]?.items?.[0]?.itemDescription;

  const termRepaymentTitle =
    pageData?.sections?.[2]?.items?.[1]?.itemTitle || t.ourServicesPage.termRepaymentTitle;
  const termRepaymentDesc =
    pageData?.sections?.[2]?.items?.[1]?.itemDescription || t.ourServicesPage.termRepaymentDesc;

  const termOnlinePaymentTitle =
    pageData?.sections?.[2]?.items?.[2]?.itemTitle || t.ourServicesPage.termOnlinePaymentTitle;
  const termOnlinePaymentDesc =
    pageData?.sections?.[2]?.items?.[2]?.itemDescription || t.ourServicesPage.termOnlinePaymentDesc;

  const applyNowBtnText =
    pageData?.hero?.primaryCtaText || t.ourServicesPage.applyNowBtn;
  const applyNowBtnLink =
    pageData?.hero?.primaryCtaLink || "/mohon-pinjaman-online";

  // Dynamic Section 3: Top Up Loan Features
  const topUpLoanHeading =
    pageData?.sections?.[3]?.sectionTitle || t.ourServicesPage.topUpLoanHeading;
  const topUpLoanDesc =
    pageData?.sections?.[3]?.sectionDescription || t.ourServicesPage.topUpLoanDesc;
  const topUpMascotImg = getMediaUrl(
    pageData?.sections?.[3]?.sectionImage,
    "/assets/images/ladybug-holding-phone.png"
  );

  const topUpFeature1Title =
    pageData?.sections?.[3]?.items?.[0]?.itemTitle || t.ourServicesPage.topUpFeature1Title;
  const topUpFeature1Desc =
    pageData?.sections?.[3]?.items?.[0]?.itemDescription || t.ourServicesPage.topUpFeature1Desc;
  const topUpFeature1Img = getMediaUrl(
    pageData?.sections?.[3]?.items?.[0]?.itemImage,
    "/assets/images/integrasi-lancar.png"
  );

  const topUpFeature2Title =
    pageData?.sections?.[3]?.items?.[1]?.itemTitle || t.ourServicesPage.topUpFeature2Title;
  const topUpFeature2Desc =
    pageData?.sections?.[3]?.items?.[1]?.itemDescription || t.ourServicesPage.topUpFeature2Desc;
  const topUpFeature2Img = getMediaUrl(
    pageData?.sections?.[3]?.items?.[1]?.itemImage,
    "/assets/images/terma-pembayaran.png"
  );

  const topUpFeature3Title =
    pageData?.sections?.[3]?.items?.[2]?.itemTitle || t.ourServicesPage.topUpFeature3Title;
  const topUpFeature3Desc =
    pageData?.sections?.[3]?.items?.[2]?.itemDescription || t.ourServicesPage.topUpFeature3Desc;
  const topUpFeature3Img = getMediaUrl(
    pageData?.sections?.[3]?.items?.[2]?.itemImage,
    "/assets/images/pengecualian-faedah.png"
  );

  const topUpFeature4Title =
    pageData?.sections?.[3]?.items?.[3]?.itemTitle || t.ourServicesPage.topUpFeature4Title;
  const topUpFeature4Desc =
    pageData?.sections?.[3]?.items?.[3]?.itemDescription || t.ourServicesPage.topUpFeature4Desc;
  const topUpFeature4Img = getMediaUrl(
    pageData?.sections?.[3]?.items?.[3]?.itemImage,
    "/assets/images/permohonan-semula-lancar.png"
  );

  const topUpFeature5Title =
    pageData?.sections?.[3]?.items?.[4]?.itemTitle || t.ourServicesPage.topUpFeature5Title;
  const topUpFeature5Desc =
    pageData?.sections?.[3]?.items?.[4]?.itemDescription || t.ourServicesPage.topUpFeature5Desc;
  const topUpFeature5Img = getMediaUrl(
    pageData?.sections?.[3]?.items?.[4]?.itemImage,
    "/assets/images/jumlah-pinjaman-besar.png"
  );

  // Dynamic Section 4: Who Can Apply
  const whoCanApplyTitle =
    pageData?.sections?.[4]?.sectionTitle || t.ourServicesPage.whoCanApplyTitle;
  const whoCanApplyDesc =
    pageData?.sections?.[4]?.sectionDescription || t.ourServicesPage.whoCanApplyDesc;

  const reqAmountTitle =
    pageData?.sections?.[4]?.items?.[0]?.itemTitle || t.ourServicesPage.reqAmountTitle;
  const reqAmountDesc =
    pageData?.sections?.[4]?.items?.[0]?.itemDescription || t.ourServicesPage.reqAmountDesc;

  const reqJobTitle =
    pageData?.sections?.[4]?.items?.[1]?.itemTitle || t.ourServicesPage.reqJobTitle;
  const reqJobDesc =
    pageData?.sections?.[4]?.items?.[1]?.itemDescription || t.ourServicesPage.reqJobDesc;

  const reqAgeTitle =
    pageData?.sections?.[4]?.items?.[2]?.itemTitle || t.ourServicesPage.reqAgeTitle;
  const reqAgeDesc =
    pageData?.sections?.[4]?.items?.[2]?.itemDescription || t.ourServicesPage.reqAgeDesc;

  // Dynamic Section 5: Application Process
  const appProcessTitle =
    pageData?.sections?.[5]?.sectionTitle || t.ourServicesPage.appProcessTitle;
  const appProcessDesc =
    pageData?.sections?.[5]?.sectionDescription || t.ourServicesPage.appProcessDesc;

  const defaultSteps = [
    { title: t.ourServicesPage.step1Title, desc: t.ourServicesPage.step1Desc },
    { title: t.ourServicesPage.step2Title, desc: t.ourServicesPage.step2Desc },
    { title: t.ourServicesPage.step3Title, desc: t.ourServicesPage.step3Desc },
    { title: t.ourServicesPage.step4Title, desc: t.ourServicesPage.step4Desc },
    { title: t.ourServicesPage.step5Title, desc: t.ourServicesPage.step5Desc },
  ];

  const stepsList =
    pageData?.sections?.[5]?.items && pageData.sections[5].items.length > 0
      ? pageData.sections[5].items.map((step: any, idx: number) => ({
          title: step.itemTitle || defaultSteps[idx]?.title || "",
          desc: step.itemDescription || defaultSteps[idx]?.desc || "",
        }))
      : defaultSteps;

  // Dynamic Section 6: Commitments & Trust
  const commitmentTitle =
    pageData?.sections?.[6]?.sectionTitle || t.ourServicesPage.commitmentTitle;

  const commitStep1Title =
    pageData?.sections?.[6]?.items?.[0]?.itemTitle || t.ourServicesPage.commitStep1Title;
  const commitStep1Desc =
    pageData?.sections?.[6]?.items?.[0]?.itemDescription || t.ourServicesPage.commitStep1Desc;

  const commitStep2Title =
    pageData?.sections?.[6]?.items?.[1]?.itemTitle || t.ourServicesPage.commitStep2Title;
  const commitStep2Desc =
    pageData?.sections?.[6]?.items?.[1]?.itemDescription;

  const commitStep3Title =
    pageData?.sections?.[6]?.items?.[2]?.itemTitle || t.ourServicesPage.commitStep3Title;
  const commitStep3Desc =
    pageData?.sections?.[6]?.items?.[2]?.itemDescription || t.ourServicesPage.commitStep3Desc;

  const trustHeritageTitle =
    pageData?.sections?.[6]?.items?.[3]?.itemTitle || t.ourServicesPage.trustHeritageTitle;
  const trustHeritageDesc =
    pageData?.sections?.[6]?.items?.[3]?.itemDescription || t.ourServicesPage.trustHeritageDesc;

  const licensedTitle =
    pageData?.sections?.[6]?.items?.[4]?.itemTitle || t.ourServicesPage.licensedTitle;
  const licensedDesc =
    pageData?.sections?.[6]?.items?.[4]?.itemDescription || t.ourServicesPage.licensedDesc;

  // Dynamic Section 7: Final CTA
  const finalCtaTitle =
    pageData?.sections?.[7]?.sectionTitle || t.ourServicesPage.finalCtaTitle;
  const finalCtaDesc = pageData?.sections?.[7]?.sectionDescription;

  return (
    <div className="page_wrapper bg-white">
      <Header />

      <main className="page_content">
        {/* 1. Hero Section */}
        <section
          className="w-full bg-cover bg-center bg-no-repeat py-16 lg:py-24"
          style={{ backgroundImage: `url('${heroBg}')` }}
        >
          <div className="container mx-auto px-4 lg:max-w-[1000px] text-center">
            {heroHeading ? (
              <h1 className="!text-[20px] md:!text-[25px] lg:!text-[25px] font-bold text-blue leading-tight mb-6 whitespace-pre-line">
                {heroHeading}
              </h1>
            ) : (
              <h1 className="!text-[20px] md:!text-[25px] lg:!text-[25px] font-bold text-blue leading-tight mb-6">
                {t.ourServicesPage.heroTitlePart1} <br className="hidden md:block" />
                {t.ourServicesPage.heroTitlePart2}
              </h1>
            )}

            {heroSubheading ? (
              <p className="text-[14px] md:text-[16px] text-[#424143] !mt-10 font-medium leading-[1.6] whitespace-pre-line">
                {heroSubheading}
              </p>
            ) : (
              <>
                <p className="text-[16px] md:text-[16px] text-[#424143] !mt-10 font-medium leading-[1.6]">
                  {t.ourServicesPage.heroDesc1}
                </p>
                <p className="text-[14px] md:text-[16px] text-[#424143] font-medium leading-[1.6] mt-4">
                  {t.ourServicesPage.heroDesc2}
                </p>
                <p className="text-[14px] md:text-[16px] text-[#424143] font-medium leading-[1.6] mt-4 italic">
                  {t.ourServicesPage.heroDesc3}
                </p>
              </>
            )}
          </div>
        </section>

        {/* 2. Tab Controller Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 lg:max-w-[1200px]">
            <div className="text-center mb-10">
              <h2 className="text-[22px] md:text-[26px] font-bold text-blue mb-8 lg:!mb-10">
                {tabSectionTitle}
              </h2>

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
                  {tabPersonalLoanLabel}
                </button>

                <button
                  onClick={() => setActiveTab("tambah-nilai")}
                  className={`!px-12 md:!px-20 !py-3 md:!py-4 !rounded-full font-bold text-[14px] md:text-[16px] transition-all duration-300 border-0 outline-none shadow-sm ${
                    activeTab === "tambah-nilai"
                      ? "!bg-[#044bd9] !text-white"
                      : "!bg-[#BDBDBD] !text-white hover:!bg-[#D1D1D1]"
                  }`}
                >
                  {tabTopUpLoanLabel}
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
                <h3 className="text-[22px] font-bold text-blue mb-4">
                  {personalLoanHeading}
                </h3>
                {personalLoanDesc ? (
                  <p className="text-[16px] lg:!text-[16px] text-[#424143] mb-12 leading-tight whitespace-pre-line">
                    {personalLoanDesc}
                  </p>
                ) : (
                  <p className="text-[16px] lg:!text-[16px] text-[#424143] mb-12 leading-tight">
                    {t.ourServicesPage.personalLoanDesc1}
                    <br /><br />
                    {t.ourServicesPage.personalLoanDesc2}
                  </p>
                )}

                {/* 
                  MOBILE: flex, overflow-x-auto, snap-x for smooth scrolling. 
                  DESKTOP: md:grid md:grid-cols-3 to restore original layout.
                */}
                <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-10 lg:mt-20 lg:!gap-30 text-center md:overflow-visible md:pb-0 scrollbar-hide">
                  
                  {/* Item 1 */}
                  {/* 
                    MOBILE: w-[85%] forces cards to be slightly smaller than the screen so the next card peeks in. 
                    Added border, rounded-lg, and p-6.
                    DESKTOP: md:w-auto, md:border-0, md:p-0 removes the mobile styling entirely. 
                  */}
                  <div className="flex-shrink-0 w-[85%] sm:w-[320px] md:w-auto flex flex-col items-start text-left border border-gray-200 lg:!border-0 rounded-lg p-6 md:border-0 md:p-0 md:rounded-none snap-center">
                    <img
                      src={feature1Img}
                      alt={feature1Title}
                      className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain mb-4"
                    />
                    <h4 className="font-bold text-blue text-[18px] lg:!text-[20px] mb-4">
                      {feature1Title}
                    </h4>
                    {feature1Desc ? (
                      <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight whitespace-pre-line">
                        {feature1Desc}
                      </p>
                    ) : (
                      <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight">
                        {t.ourServicesPage.featureFastApprovalDesc}
                        <br /><br />
                        <span className="text-[12px] italic">
                          {t.ourServicesPage.featureFastApprovalNote}
                        </span>
                      </p>
                    )}
                  </div>

                  {/* Item 2 */}
                  <div className="flex-shrink-0 w-[85%] sm:w-[320px] md:w-auto flex flex-col items-start text-left border border-gray-200 lg:!border-0 lg:!border-0 rounded-lg p-6 md:border-0 md:p-0 md:rounded-none snap-center">
                    <img
                      src={feature2Img}
                      alt={feature2Title}
                      className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] object-contain mb-4"
                    />
                    <h4 className="font-bold text-blue text-[18px] lg:!text-[20px] mb-4">
                      {feature2Title}
                    </h4>
                    <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight whitespace-pre-line">
                      {feature2Desc}
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="flex-shrink-0 w-[85%] sm:w-[320px] md:w-auto flex flex-col items-start text-left border border-gray-200 lg:!border-0 rounded-lg p-6 md:border-0 md:p-0 md:rounded-none snap-center">
                    <img
                      src={feature3Img}
                      alt={feature3Title}
                      className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] object-contain mb-4"
                    />
                    <h4 className="font-bold text-blue text-[18px] lg:!text-[20px] mb-4">
                      {feature3Title}
                    </h4>
                    <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight whitespace-pre-line">
                      {feature3Desc}
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* Syarat Section */}
            <section className="py-12 bg-white">
              <div className="container mx-auto px-4 lg:max-w-[1300px] text-center">
                <h3 className="text-[22px] lg:!text-[25px] font-bold text-blue !mb-10">
                  {flexibleTermsTitle}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
                  <div className="flex items-start gap-3">
                    <img
                      src="/assets/images/check-icon.png"
                      alt="Check"
                      className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px] flex-shrink-0 mt-1 object-contain"
                    />
                    <div>
                      <h4 className="font-bold text-[16px] lg:!text-[20px] text-blue mb-2">
                        {termLoanAmountTitle}
                      </h4>
                      {termLoanAmountDesc ? (
                        <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight whitespace-pre-line">
                          {termLoanAmountDesc}
                        </p>
                      ) : (
                        <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight">
                          {t.ourServicesPage.termLoanAmountDescPart1}
                          <span className="font-bold">
                            {t.ourServicesPage.termLoanAmountMin}
                          </span>
                          {t.ourServicesPage.termLoanAmountDescPart2}
                          <span className="font-bold">
                            {t.ourServicesPage.termLoanAmountMax}
                          </span>
                          {t.ourServicesPage.termLoanAmountDescPart3}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <img
                      src="/assets/images/check-icon.png"
                      alt="Check"
                      className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px] flex-shrink-0 mt-1 object-contain"
                    />
                    <div>
                      <h4 className="font-bold text-[16px] lg:!text-[20px] text-blue mb-2">
                        {termRepaymentTitle}
                      </h4>
                      <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight whitespace-pre-line">
                        {termRepaymentDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <img
                      src="/assets/images/check-icon.png"
                      alt="Check"
                      className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px] flex-shrink-0 mt-1 object-contain"
                    />
                    <div>
                      <h4 className="font-bold text-[16px] lg:!text-[20px] text-blue mb-2">
                        {termOnlinePaymentTitle}
                      </h4>
                      <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight whitespace-pre-line">
                        {termOnlinePaymentDesc}
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href={applyNowBtnLink}
                  className="inline-block bg-[#F20505] text-white font-bold py-3 px-10 rounded-full hover:bg-[#d00000] transition-colors shadow-md"
                >
                  {applyNowBtnText}
                </Link>
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
                {topUpLoanHeading}
              </h3>
              <p className="text-[14px] md:text-[16px] text-[#424143] mb-16 text-left leading-tight whitespace-pre-line">
                {topUpLoanDesc}
              </p>

              {/* Responsive Grid with Center Mascot */}
              {/* 
                MOBILE: flex flex-nowrap overflow-x-auto for horizontal scrolling.
                DESKTOP: md:grid md:grid-cols-[1fr_auto_1fr] to restore the infographic layout.
              */}
              <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-0 -mx-4  md:mx-auto md:px-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center md:justify-items-center relative max-w-[1300px] py-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
                
                {/* === LEFT COLUMN === */}
                {/* 'contents' removes the wrapper on mobile so items can scroll horizontally alongside the others */}
                <div className="contents md:flex md:flex-col md:gap-8 w-full md:justify-center h-full md:py-8">
                  
                  {/* Item 1 */}
                  {/* Added mobile card styling (border, rounded-xl, shadow, p-4) which is disabled on md: */}
                  <div className="flex flex-row md:flex-row text-left md:text-right lg:!text-start items-center md:items-start gap-3 md:gap-4 w-[85%] sm:w-[320px] md:w-full md:justify-end flex-shrink-0 border border-gray-100 md:!border-0 rounded-xl md:rounded-none shadow-[0_4px_16px_rgba(0,0,0,0.06)] md:shadow-none p-4 md:p-0 snap-center bg-white md:bg-transparent">
                    <div className="order-2 md:!order-1 flex-1">
                      <h4 className="font-bold !text-[#044BD9] mb-1 md:mb-2 text-[15px] md:!text-[20px]">
                        {topUpFeature1Title}
                      </h4>
                      <p className="text-[13px] md:text-[16px] text-[#424143] leading-tight whitespace-pre-line">
                        {topUpFeature1Desc}
                      </p>
                    </div>
                    {/* Changed mobile order to 1 so the icon sits on the left, next to the text */}
                    <div className="order-1 md:order-1 w-[55px] h-[55px] md:w-[80px] md:h-[80px] flex-shrink-0 flex items-center justify-center">
                      <img
                        src={topUpFeature1Img}
                        alt={topUpFeature1Title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Sandwiched Arrow Left (Hidden on Mobile) */}
                  <div className="hidden md:flex justify-end w-full pr-[10px] lg:pl-[10px]">
                    <img
                      src="/assets/images/arrow-left-right.png"
                      alt="Arrow Separator"
                      className="h-[80px] w-auto object-contain"
                    />
                  </div>

                  {/* Item 2 */}
                  <div className="flex flex-row md:flex-row text-left md:text-right lg:!text-start items-center md:items-start gap-3 md:gap-4 w-[85%] sm:w-[320px] md:w-full md:justify-end flex-shrink-0 border border-gray-100 md:!border-0 rounded-xl md:rounded-none shadow-[0_4px_16px_rgba(0,0,0,0.06)] md:shadow-none p-4 md:p-0 snap-center bg-white md:bg-transparent">
                    <div className="order-2 md:!order-1 flex-1">
                      <h4 className="font-bold !text-[#044BD9] mb-1 md:mb-2 text-[15px] md:!text-[20px]">
                        {topUpFeature2Title}
                      </h4>
                      <p className="text-[13px] md:text-[16px] text-[#424143] leading-tight whitespace-pre-line">
                        {topUpFeature2Desc}
                      </p>
                    </div>
                    <div className="order-1 md:order-1 w-[55px] h-[55px] md:w-[80px] md:h-[80px] flex-shrink-0 flex items-center justify-center">
                      <img
                        src={topUpFeature2Img}
                        alt={topUpFeature2Title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* === CENTER COLUMN: MASCOT (Hidden on Mobile) === */}
                <div className="hidden md:flex w-full justify-center items-center relative py-8 md:py-0 px-2 lg:px-8">
                  <Image
                    src={topUpMascotImg}
                    alt="Loanbuddy Mascot Holding Phone"
                    width={300}
                    height={400}
                    className="w-[300px] md:w-[260px] lg:w-[350px] object-contain relative z-10"
                  />
                </div>

                {/* === RIGHT COLUMN === */}
                <div className="contents md:flex md:flex-col md:gap-8 w-full md:justify-center h-full md:py-8">
                  {/* Item 3 */}
                  <div className="flex flex-row md:flex-row text-left md:text-right lg:!text-start items-center md:items-start gap-3 md:gap-4 w-[85%] sm:w-[320px] md:w-full justify-start flex-shrink-0 border border-gray-100 md:!border-0 rounded-xl md:rounded-none shadow-[0_4px_16px_rgba(0,0,0,0.06)] md:shadow-none p-4 md:p-0 snap-center bg-white md:bg-transparent">
                    <div className="w-[55px] h-[55px] md:w-[80px] md:h-[80px] flex-shrink-0 flex items-center justify-center">
                      <img
                        src={topUpFeature3Img}
                        alt={topUpFeature3Title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-bold !text-[#044BD9] mb-1 md:mb-2 text-[15px] md:!text-[20px]">
                        {topUpFeature3Title}
                      </h4>
                      <p className="text-[13px] md:text-[16px] text-[#424143] leading-tight whitespace-pre-line">
                        {topUpFeature3Desc}
                      </p>
                    </div>
                  </div>

                  {/* Sandwiched Arrow Right (Hidden on Mobile & Rotated 180deg) */}
                  <div className="hidden md:flex justify-start w-full pl-[10px]">
                    <img
                      src="/assets/images/arrow-left-right.png"
                      alt="Arrow Separator"
                      className="h-[80px] w-auto object-contain rotate-180"
                    />
                  </div>

                  {/* Item 4 */}
                  <div className="flex flex-row md:flex-row text-left md:text-right lg:!text-start items-center md:items-start gap-3 md:gap-4 w-[85%] sm:w-[320px] md:w-full justify-start flex-shrink-0 border border-gray-100 md:!border-0 rounded-xl md:rounded-none shadow-[0_4px_16px_rgba(0,0,0,0.06)] md:shadow-none p-4 md:p-0 snap-center bg-white md:bg-transparent">
                    <div className="w-[55px] h-[55px] md:w-[80px] md:h-[80px] flex-shrink-0 flex items-center justify-center">
                      <img
                        src={topUpFeature4Img}
                        alt={topUpFeature4Title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-bold !text-[#044BD9] mb-1 md:mb-2 text-[15px] md:!text-[20px]">
                        {topUpFeature4Title}
                      </h4>
                      <p className="text-[13px] md:text-[16px] text-[#424143] leading-tight whitespace-pre-line">
                        {topUpFeature4Desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* === BOTTOM CENTER ITEM === */}
                <div className="contents md:block md:col-span-3  md:flex md:flex-col md:items-center md:justify-center w-full">
                  {/* Arrow Down (Hidden on Mobile) stacked on top */}
                  <img
                    src="/assets/images/arrow-down.png"
                    alt="Arrow Down"
                    className="hidden md:block h-[40px] lg:h-[60px] w-auto object-contain mb-6 lg:mb-8"
                  />

                  {/* Applied Mobile Card Styling to the inner div to match the scrolling items */}
                  <div className="flex flex-row md:flex-row text-left md:text-right lg:!text-start items-center md:items-start gap-3 md:gap-4 w-[85%] sm:w-[320px] md:w-full md:max-w-[400px] flex-shrink-0 border border-gray-100 md:!border-0 rounded-xl md:rounded-none shadow-[0_4px_16px_rgba(0,0,0,0.06)] md:shadow-none p-4 md:p-0 snap-center bg-white md:bg-transparent">
                    <div className="w-[55px] h-[55px] md:w-[80px] md:h-[80px] flex-shrink-0 flex items-center justify-center">
                      <img
                        src={topUpFeature5Img}
                        alt={topUpFeature5Title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-bold !text-[#044BD9] mb-1 md:mb-2 text-[15px] md:!text-[20px]">
                        {topUpFeature5Title}
                      </h4>
                      <p className="text-[13px] md:!text-[16px] text-[#424143] leading-tight whitespace-pre-line">
                        {topUpFeature5Desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center max-w-[1200px] mx-auto pt-10">
                <p className="text-[13px] md:!text-[16px] text-[#424143] leading-tight font-medium">
                  {t.ourServicesPage.topUpSummary}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Siapa Yang Boleh Memohon */}
        <section className="py-12 bg-[#f8f9fa]">
          <div className="container mx-auto px-4 lg:max-w-[1000px]">
            <h3 className="text-[22px] font-bold !text-[#044BD9] mb-5">
              {whoCanApplyTitle}
            </h3>
            <p className="text-[16px] text-[#424143] mb-8 lg:!mb-10 leading-tight whitespace-pre-line">
              {whoCanApplyDesc}
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3 ">
                <img
                  src="/assets/images/check-icon.png"
                  alt="Check"
                  className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px] flex-shrink-0 mt-0.5 object-contain"
                />
                <div>
                  <h4 className="font-bold text-[16px] lg:!text-[20px] text-blue mb-2">
                    {reqAmountTitle}
                  </h4>
                  <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight whitespace-pre-line">
                    {reqAmountDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 ">
                <img
                  src="/assets/images/check-icon.png"
                  alt="Check"
                  className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px] flex-shrink-0 mt-0.5 object-contain"
                />
                <div>
                  <h4 className="font-bold text-[16px] lg:!text-[20px] text-blue mb-2">
                    {reqJobTitle}
                  </h4>
                  <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight whitespace-pre-line">
                    {reqJobDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 ">
                <img
                  src="/assets/images/check-icon.png"
                  alt="Check"
                  className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px] flex-shrink-0 mt-0.5 object-contain"
                />
                <div>
                  <h4 className="font-bold text-[16px] lg:!text-[20px] text-blue mb-2">
                    {reqAgeTitle}
                  </h4>
                  <p className="text-[16px] lg:!text-[16px] text-[#424143] leading-tight whitespace-pre-line">
                    {reqAgeDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proses Permohonan */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:max-w-[1000px]">
            <h3 className="text-[22px] lg:!text-[25px] font-bold !text-[#044BD9] mb-4 lg:mb-6">
              {appProcessTitle}
            </h3>
            <p className="text-[14px] md:text-[16px] text-[#424143] mb-10 lg:!mb-12 leading-relaxed whitespace-pre-line">
              {appProcessDesc}
            </p>

            <div className="space-y-4 md:space-y-5 relative">
              {/* Vertical Line Connecting Circles */}
              <div className="absolute left-[23px] top-7 bottom-6 w-0.5 bg-[#044BD9] hidden md:block z-0"></div>

              {stepsList.map((step: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-stretch md:items-center gap-4 md:gap-8 relative z-10"
                >
                  {/* Number Circle */}
                  <div className="w-12 h-12 rounded-full bg-[#044BD9] text-white flex items-center justify-center font-bold text-[18px] flex-shrink-0 shadow-sm mt-2 md:mt-0">
                    {idx + 1}
                  </div>

                  {/* Uniform Content Box */}
                  <div className="px-4 py-3 w-full flex flex-col justify-center bg-[#f4f4f5]">
                    <h4 className="font-bold !text-[#044BD9] mb-1.5 text-[16px] md:text-[20px] lg:!text-[20px]">
                      {step.title}
                    </h4>
                    <p className="text-[13px] md:text-[16px] lg:!text-[16px] text-[#424143] leading-relaxed m-0 whitespace-pre-line">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* SHARED SECTIONS (Visible outside of tabs)            */}
        {/* ==================================================== */}

        {/* Komitmen Kami Section with Custom SVG Wavy Timeline */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 lg:max-w-[1100px]">
            <h2 className="text-[22px] md:!text-[28px] font-bold !text-[#044BD9] text-center !mb-16 lg:!mb-16">
              {commitmentTitle}
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
                <h4 className="font-bold !text-[#044BD9] mb-2 text-[15px] lg:!text-[20px]">
                  {commitStep1Title}
                </h4>
                <p className="text-[12px] lg:text-[13px] !text-[#424143] leading-relaxed whitespace-pre-line">
                  {commitStep1Desc}
                </p>
              </div>

              {/* Text Block 2 (Center - Below Node) */}
              <div className="absolute top-[50%] left-[40%] w-[20%] text-center">
                <h4 className="font-bold !text-[#044BD9] mb-2 text-[15px] lg:!text-[20px]">
                  {commitStep2Title}
                </h4>
                {commitStep2Desc ? (
                  <p className="text-[12px] lg:text-[13px] !text-[#424143] leading-relaxed whitespace-pre-line">
                    {commitStep2Desc}
                  </p>
                ) : (
                  <p className="text-[12px] lg:text-[13px] !text-[#424143] leading-relaxed">
                    {t.ourServicesPage.commitStep2Desc}
                    <br /><br />
                    <span className="italic">
                      {t.ourServicesPage.commitStep2Note}
                    </span>
                  </p>
                )}
              </div>

              {/* Text Block 3 (Right - Below Node) */}
              <div className="absolute top-[34%] left-[75%] w-[24%] text-center">
                <h4 className="font-bold !text-[#044BD9] mb-2 text-[15px] lg:!text-[20px]">
                  {commitStep3Title}
                </h4>
                <p className="text-[12px] lg:text-[13px] !text-[#424143] leading-relaxed whitespace-pre-line">
                  {commitStep3Desc}
                </p>
              </div>
            </div>

            {/* MOBILE VIEW: Stacked Timeline */}
            <div className="md:hidden flex flex-col gap-10 mb-16 relative pl-4">
              {/* Vertical DASHED line connecting nodes */}
              <div className="absolute left-[23px] top-2 bottom-6 w-0 border-l-[2px] border-dashed border-[#cbd5e1] z-0"></div>

              {[
                {
                  title: commitStep1Title,
                  desc: commitStep1Desc,
                },
                {
                  title: commitStep2Title,
                  desc: commitStep2Desc || `${t.ourServicesPage.commitStep2Desc}\n\n${t.ourServicesPage.commitStep2Note}`,
                },
                {
                  title: commitStep3Title,
                  desc: commitStep3Desc,
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 relative z-10">
                  <div className="w-4 h-4 rounded-full bg-[#044BD9] flex-shrink-0 mt-1 shadow-sm !ring-8 ring-white"></div>
                  <div>
                    <h4 className="font-bold !text-[#044BD9] mb-2 text-[16px]">
                      {item.title}
                    </h4>
                    <p className="text-[13px] !text-[#424143] leading-relaxed whitespace-pre-line">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkmark Items */}
            <div className="max-w-[1000px] mx-auto flex flex-col gap-8 pt-12">
              <div className="flex gap-4 md:gap-6 items-start">
                <img
                  src="/assets/images/check-icon.png"
                  alt="Check"
                  className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px] flex-shrink-0 mt-0.5 object-contain"
                />
                <div>
                  <h4 className="font-bold !text-[#044BD9] text-[16px] md:text-[18px] lg:!text-[20px] mb-1">
                    {trustHeritageTitle}
                  </h4>
                  <p className="text-[13px] md:text-[15px] !text-[#424143] leading-tight whitespace-pre-line">
                    {trustHeritageDesc}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6 items-start">
                <img
                  src="/assets/images/check-icon.png"
                  alt="Check"
                  className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px] flex-shrink-0 mt-0.5 object-contain"
                />
                <div>
                  <h4 className="font-bold !text-[#044BD9] text-[16px] md:text-[18px] lg:!text-[20px] mb-1">
                    {licensedTitle}
                  </h4>
                  <p className="text-[13px] md:text-[15px] !text-[#424143] leading-tight whitespace-pre-line">
                    {licensedDesc}
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
              {finalCtaTitle}
            </h3>
            {finalCtaDesc ? (
              <p className="text-[14px] md:text-[15px] lg:text-[16px] !text-[#424143] mb-4 leading-relaxed whitespace-pre-line">
                {finalCtaDesc}
              </p>
            ) : (
              <>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] !text-[#424143] mb-4 leading-relaxed">
                  {t.ourServicesPage.finalCtaP1}
                </p>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] !text-[#424143] leading-relaxed">
                  <span className="font-bold">{t.ourServicesPage.finalCtaP2Part1}</span>
                  {t.ourServicesPage.finalCtaP2Part2}
                </p>
              </>
            )}
          </div>
        </section>
      </main>

      {/* Global CSS for custom animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `,
        }}
      />

      <Footer />
    </div>
  );
}