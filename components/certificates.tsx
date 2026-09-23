"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import AnimateOnScroll from "./animate-on-scroll";
import AnimateStagger from "./animate-stagger";

export default function Certificates() {
  const translation = useTranslations();
  const certificates = [
    {
      id: 1,
      title: "BachelorofIT" ,
      issuer: "UST_Location" ,
      date: "January 2, 2022"
    },
    {
      id: 2,
      title: "TrainingCertificate" ,
      issuer: "Temmam_Location",
      date: "January 2, 2022"
    },
    {
      id: 3,
      title: "ExperienceCertificate" ,
      issuer: "Ysys_Location",
      date: "January 2, 2022"
    },
    {
      id: 4,
      title: "ExperienceCertificate" ,
      issuer: "Otek_Location",
      date: "January 2, 2022"
    }
  ];

  return (
    <section id="Certificates" className="w-screen relative flex items-center justify-center rounded-2xl bg-primary/20 dark:bg-transparent mb-20">
      <div className="container mx-auto px-5 lg:px-5 py-14 sm:py-16">
        <div className="">
          <AnimateOnScroll animation="fade-in-up" duration={0.5}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#62adb7]/20 bg-[#62adb7]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#62adb7]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#62adb7] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#62adb7]" />
                </span>
                04 — {translation("Certificates")}
              </div>

              <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl ltr:lg:max-w-4xl dark:text-white">
                {translation("CertificatesTitle")}
              </h2>

              <div className="flex gap-1">
                <div className="h-1 w-20 rounded-full bg-[#62adb7]" />
                <div className="h-1 w-8 rounded-full bg-[#62adb7]/30" />
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateStagger staggerDelay={0.1} className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative p-6 h-fit rounded-3xl border border-[#62adb7]/20 bg-[#62adb7]/5 backdrop-blur-sm shadow-sm hover:bg-white/[0.07] hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden sm:p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-indigo-900/[0.05]"
              >
                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white/30 dark:bg-slate-950/20 flex items-center justify-center shrink-0 text-[#62adb7]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>

                    <div className="space-y-1.5 w-full text-start rtl:text-right">
                      <h3 className="text-base sm:text-lg font-bold font-display leading-snug">
                        {translation(cert.title)}
                      </h3>
                      <p className="text-xs font-mono font-medium opacity-80 mt-1">
                        {translation(cert.issuer)}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/10 dark:border-white/10 space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-start gap-2 opacity-80">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>{/* Add your "Date Issued" translation here if needed */} {cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </div>
    </section>
  );
}
