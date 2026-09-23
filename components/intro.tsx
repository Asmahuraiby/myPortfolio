"use client";

import Image from "next/image";
import React from "react";
import FlippingText from './FlippingText';
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl";
import AnimateOnScroll from "./animate-on-scroll";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const translation = useTranslations();
  const locale = useLocale();

  return (
    <section
      ref={ref}
      id="home"
      className="sm:mt-10 mb-10 flex flex-col md:flex-row items-center justify-between gap-12 px-4 w-full"
      dir="ltr" // Force LTR for the section to keep layout consistent
    >
      {/* RIGHT SIDE: Image Collage (Now placed first for visual left-side appearance) */}
      <AnimateOnScroll
        animation="scale-up"
        duration={0.7}
        className="relative w-full md:w-[40%] h-[400px] flex items-center justify-center order-2 md:rtl:order-1 md:ltr:order-2"
      >
        <div className="absolute top-0 left-0 w-48 h-64 sm:w-96 sm:h-80 rounded-2xl overflow-hidden shadow-2xl rotate-[-10deg] hover:rotate-0 transition-transform duration-500">
          <img src="https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Dev" />
        </div>

        <div className="absolute top-16 right-0 sm:-right-10 w-48 h-64 sm:w-96 sm:h-80 rounded-2xl overflow-hidden shadow-2xl rotate-[10deg] hover:rotate-0 transition-transform duration-500">
          <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Code" />
        </div>

        <div className="absolute bottom-4 sm:-bottom-16 left-16 w-48 h-64 sm:w-96 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-950">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Modern Dev" />
        </div>
      </AnimateOnScroll>

      {/* LEFT SIDE: Text Content (Now placed second for visual right-side appearance) */}
      <div className="md:w-1/2 flex flex-col  items-start  order-1 md:rtl:order-2 md:ltr:order-1" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <AnimateOnScroll
          animation="fade-in-up"
          delay={0.1}
          duration={0.5}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/30 text-emerald-700 dark:text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-medium self-center lg:self-start rtl:lg:self-start shadow-sm reveal reveal-delay-1 revealed">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{translation('availableWork')}</span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll
          animation="fade-in-up"
          delay={0.2}
          duration={0.5}
          className="mb-2 mt-4 text-3xl font-medium !leading-[1.5] md:text-6xl"
        >
          <span className="font-bold">{translation('welcome')}<span className="font-bold text-primary"> {translation('asma')}</span></span>
          <p className="text-xl md:text-3xl text-slate-500 dark:text-Gray500">{translation('asmaJob')}</p>
        </AnimateOnScroll>

        <AnimateOnScroll
          animation="fade-in-up"
          delay={0.3}
          duration={0.5}
          className="mt-6 text-lg md:text-2xl text-slate-500 text-start dark:text-gray-400 max-w-lg"
        >
          {translation('desc')}
        </AnimateOnScroll>

        <AnimateOnScroll
          animation="fade-in-up"
          delay={0.4}
          duration={0.5}
          className="mt-4 text-2xl font-medium !leading-[1.5]"
        >
          <div className="mb-6 text-slate-500 dark:text-gray-400 sm:h-fit rtl:h-10 ltr:h-16 overflow-hidden">
            <FlippingText
              words={[
                translation('word1'),
                translation('word2'),
                translation('word3'),
                translation('word4')
              ]}
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll
          animation="fade-in-up"
          delay={0.5}
          duration={0.5}
          className="flex flex-col sm:flex-row items-center gap-2 text-lg font-medium w-full"
        >
          <Link
            href="#contact"
            className="group sm:w-fit w-full bg-gray-950 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            {translation('Contact')}{" "}
          </Link>

          <a
            className="group sm:w-fit w-full bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/AsmaAlhuraiby.pdf"
            download
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            {translation('DownloadCV')}{" "}
          </a>

        </AnimateOnScroll>
      </div>
    </section>
  );
}
