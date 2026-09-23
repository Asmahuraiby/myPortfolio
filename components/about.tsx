"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from 'next-intl';
import AnimateOnScroll from "./animate-on-scroll";
import AnimateStagger from "./animate-stagger";

export default function About() {
  const { ref } = useSectionInView("About");
  const translation = useTranslations();

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full overflow-hidden pb-24"
    >
      <div className="relative z-10 sm:px-4">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="space-y-8">
            <AnimateOnScroll animation="fade-in-up" duration={0.5}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#62adb7]/20 bg-[#62adb7]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#62adb7]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#62adb7] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#62adb7]" />
                  </span>
                  01 — {translation("About")}
                </div>

                <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
                  {translation("AboutTitle")}
                </h2>

                <div className="flex gap-1">
                  <div className="h-1 w-20 rounded-full bg-[#62adb7]" />
                  <div className="h-1 w-8 rounded-full bg-[#62adb7]/30" />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={0.1} duration={0.5}>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  {translation("AboutDesc")}
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={0.2} duration={0.5}>
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">{translation('ExpertiseIn')}</h4>
                <div className="flex flex-wrap gap-2">
                  {["Laravel", "PHP", "Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL", "REST API"].map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-[#62adb7]/50 hover:text-[#62adb7] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* RIGHT — CAPABILITIES */}
          <AnimateStagger staggerDelay={0.15} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#62adb7]/30 hover:shadow-2xl hover:shadow-[#62adb7]/10 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#62adb7]/10 text-[#62adb7] transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /><path strokeLinecap="round" d="M7 6.5h.01M10 6.5h.01" /><path strokeLinecap="round" strokeLinejoin="round" d="m9 13-2 2 2 2M15 13l2 2-2 2" /></svg>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-slate-300 dark:text-slate-700">01</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{translation("FrontendTitle")}</h4>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{translation("FrontendDesc")}</p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#1a2f6e]/30 hover:shadow-2xl hover:shadow-[#1a2f6e]/10 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1a2f6e]/10 text-[#1a2f6e] dark:text-[#62adb7] transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></svg>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-slate-300 dark:text-slate-700">02</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{translation("BackendTitle")}</h4>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{translation("BackendDesc")}</p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#62adb7]/30 hover:shadow-2xl hover:shadow-[#62adb7]/10 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#62adb7]/10 text-[#62adb7] transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="6" rx="7" ry="3" /><ellipse cx="12" cy="12" rx="7" ry="3" /><ellipse cx="12" cy="18" rx="7" ry="3" /></svg>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-slate-300 dark:text-slate-700">03</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{translation("DatabaseTitle")}</h4>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{translation("DatabaseDesc")}</p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#1a2f6e]/30 hover:shadow-2xl hover:shadow-[#1a2f6e]/10 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1a2f6e]/10 text-[#1a2f6e] dark:text-[#62adb7] transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="7" height="6" rx="1.5" /><rect x="14" y="4" width="7" height="6" rx="1.5" /><rect x="8.5" y="15" width="7" height="6" rx="1.5" /><path d="M6.5 10v2h11v-2" /><path d="M12 12v3" /></svg>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-slate-300 dark:text-slate-700">04</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{translation("ArchitectureTitle")}</h4>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{translation("ArchitectureDesc")}</p>
            </div>
          </AnimateStagger>

        </div>
      </div>
    </section>
  );
}
