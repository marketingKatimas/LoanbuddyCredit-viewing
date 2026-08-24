import type { Metadata } from "next";
import { Reddit_Sans } from "next/font/google";
import "./globals.css";


const redditSans = Reddit_Sans({
  variable: "--font-reddit-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pinjaman Peribadi Sah KL & Sarawak | Loanbuddy Credit",
  description:
    "Mencari syarikat kredit dipercayai di KL atau Sarawak? Loanbuddy Credit menawarkan pinjaman pantas di KL, Kuching, & Bintulu. Sah, selamat & lulus KPKT.",
  icons: {
    icon: "/assets/images/icon.png",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cssFiles = [
    "/assets/css/home-first.css",
    "/assets/css/home-start.css",
    "/assets/css/slick.css",
    "/assets/css/slick-theme.css",
    "/assets/css/bootstrap.min.css",
    "/assets/css/fontawesome.css",
    "/assets/css/style-home.css",
    "/assets/css/style.css",
    "/assets/css/about-us.css",
    "/assets/css/contact-form.css",
    "/assets/css/blog.css",
    "/assets/css/faq.css",
    "/assets/css/pinjaman-koperasi-page.css",
    "/assets/css/calculator-page.css",
    "/assets/css/apply-form-1.css",
    "/assets/css/apply-form-2.css",
    "/assets/css/loanfit-form.css",
    "/assets/css/mohon-sekarang.css",
    "/assets/css/style-article.css",
    "/assets/css/navbar-article.css",
    "/assets/css/privacy-policy.css",
    "/assets/css/terma-syarat.css",
    "/assets/css/loan-compare.css",
    "/assets/css/slick-custom-l.css",
    "/assets/css/home-custom.css?v=2.0",
  ];

  return (
    <html
      lang="ms"
      className={`${redditSans.variable} h-full antialiased`}
    >
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap"
        />

        {/*
          Preload all CSS files so the browser fetches them in parallel
          as soon as the HTML is parsed — before any JS runs.
          The subsequent <link rel="stylesheet"> tags then pick up
          the already-cached files, dramatically reducing FOUC.
        */}
        {cssFiles.map((href) => (
          <link key={`preload-${href}`} rel="preload" as="style" href={href} />
        ))}

        {/* Actual stylesheet links — all rendered server-side in SSR HTML */}
        {cssFiles.map((href) => (
          <link key={`css-${href}`} rel="stylesheet" href={href} />
        ))}
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
