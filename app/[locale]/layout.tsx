// app/local/layout
import Header from "@/components/header";
import "../globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { notFound } from 'next/navigation';
import LanguageSwitcher from "@/components/language-switcher";


import { IntlProvider } from '@/app/intl-provider';

// import type { Metadata } from "next";
import Script from 'next/script';

// export const metadata: Metadata = {
//   title: "اسماء منير  | Asma Muneer",
//   description: "اسماء منير  | Asma Muneer",
//   manifest: "/manifest.webmanifest",
//   icons: {
//     icon: [
//       { url: "/favicon.ico", sizes: "any" }, // fallback
//       { url: "/logo.svg", type: "image/svg+xml" },
//       { url: "/logo.png", type: "image/png", sizes: "any" },
//     ],
//     apple: "/logo.png",
//   },
// };



export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam || 'ar';
  let messages: Record<string, string> = {};


  try {
    const imported = await import(`../../locales/${locale}/lang.json`);
    messages = imported.default;
  } catch (err) {
    console.warn(`No messages found for locale "${locale}"`, err);
  }

  return (
    <html lang={locale} className="!scroll-smooth" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head></head>
      <body
        className={`font-serif bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden`}
      >
          <div className="bg-light_primary absolute top-[-6rem] -z-10 ltr:right-[11rem] rtl:left-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-thired_primary"></div>
          <div className="bg-light_secondary absolute top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] ltr:left-[-35rem] ltr:md:left-[-33rem] ltr:lg:left-[-28rem] ltr:xl:left-[-15rem] ltr:2xl:left-[-5rem] rtl:right-[-35rem] rtl:md:right-[-33rem] rtl:lg:right-[-28rem] rtl:xl:right-[-15rem] rtl:2xl:right-[-5rem] dark:bg-secondary"></div>
        
        <IntlProvider locale={locale} messages={messages}>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              <div className="container mx-auto">
                {children}
              </div>
              <Footer />

              <Toaster position="top-right" />
              {/* <ThemeSwitch /> */}
              {/* <LanguageSwitcher /> */}
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </IntlProvider>
      </body>
    </html>
  );
}
