"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";
import { BsSun, BsMoon, BsArrowRight } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const translation = useTranslations();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const switchLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";

    startTransition(() => {
      // Replace the locale in the pathname
      const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
      router.replace(newPathname);
    });
  };

  const [scrollbar, setScrollbar] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollbar(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <header className={`z-[999] fixed top-0 left-0 right-0 w-full ${scrollbar ? 'py-1 border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  sm:rounded-none dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75':''}`}>

      {/* Main Container */}
      <nav className={`container mx-auto w-full px-3 py-1  flex items-center justify-between  ${scrollbar ? '':'lg:mt-4 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'}`}>

        {/* Left: Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <div className="flex items-center">
            <img src="/icon-logo.png" className="h-12 rounded-full" alt="Logo" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary dark:text-white mb-0">{translation('asma')}</span>
              <span className="text-xs text-gray-950 dark:text-Gray500 ">{translation('asmaJob')}</span>
            </div>
          </div>
        </motion.div>

        {/* Center: Navigation */}
        <ul className="lg:flex hidden w-[22rem] flex-wrap items-center justify-center text-[0.9rem] font-medium text-Gray500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            link.name != 'Contact' &&(
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-1 hover:text-gray-950 transition dark:text-Gray500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {translation(link.name)}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-primary/20 rounded-full absolute inset-0 -z-10 dark:bg-primary/20"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
            )
          ))}
        </ul>

        {/* Right: Buttons */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "tween",
            duration: 0.3,
          }}
        >
          <div className="flex items-center gap-3">
            <button
              className="w-[1.8rem] h-[1.8rem] sm:w-[2.5rem] sm:h-[2.5rem] bg-white bg-opacity-80 backdrop-blur-[0.5rem] border border-white hover:border-primary border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] transition-all dark:bg-gray-950"
              onClick={toggleTheme}
            >
              {theme === "light" ? <BsSun /> : <BsMoon />}
            </button>

            <button
              onClick={switchLanguage}
              disabled={isPending}
              className="w-[1.8rem] h-[1.8rem] sm:w-[2.5rem] sm:h-[2.5rem] bg-white bg-opacity-80 backdrop-blur-[0.5rem] border border-white hover:border-primary border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] transition-all dark:bg-gray-950"
            >
              <span className="sm:text-sm text-xs font-bold">
                {locale === "en" ? "ع" : "EN"}
              </span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden block p-2 rounded-lg text-slate-600 dark:text-slate-300"
            >
              {isOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
              )}
            </button>

            {/* Animated Mobile Panel */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ x: "-100%" }} // Starts off-screen to the left
                  animate={{ x: 0 }}       // Slides in to the right
                  exit={{ x: "-100%" }}    // Slides out to the left
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="lg:hidden fixed inset-0 top-[55px] h-screen bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl z-[998]"
                >
                  <div className="px-4 pt-6 space-y-2">
                    {/* Your Menu Links */}
                    {links.map((link) => (
                      link.name != 'Contact' &&(
                      <a
                        key={link.hash}
                        href={link.hash}
                        onClick={() => setIsOpen(false)} // Close menu on click
                        className="block px-4 py-3 text-lg font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
                      >
                        {translation(link.name)}
                      </a>
                      )
                    ))}
                  <Link href={'#contact'}
                    className="flex  h-[2.5rem] px-3 bg-gradient-to-r from-[#62adb7] to-[#62adb754] text-black font-bold bg-opacity-80 backdrop-blur-[0.5rem]  shadow-2xl rounded-full items-center justify-center gap-1 hover:scale-[1.15] transition-all dark:bg-[#62adb7]"
                  >
                    <span>{translation('Contact')}</span>
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition rtl:rotate-180 mt-1" />
                  </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <Link href={'#contact'}
              className="lg:flex hidden h-[2.5rem] px-3 bg-gradient-to-r from-primary to-primary/40 text-black font-bold bg-opacity-80 backdrop-blur-[0.5rem]  shadow-2xl rounded-full items-center justify-center gap-1 hover:scale-[1.15] transition-all dark:bg-[#62adb7]"
            >
              <span className="text-sm">{translation('Contact')}</span>
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition rtl:rotate-180 mt-1" />
            </Link>
          </div>
        </motion.div>

      </nav>
    </header>
  );
}
