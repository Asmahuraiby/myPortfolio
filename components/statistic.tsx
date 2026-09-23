"use client";

import React from "react";
import { useTranslations } from 'next-intl';
import Counter from './Counter';
import AnimateOnScroll from "./animate-on-scroll";

export default function Intro() {
  const translation = useTranslations();

  return (
    <AnimateOnScroll animation="fade-in-up" delay={0.2} duration={0.6} className="w-full">
    <div className="sm:m-20 w-[80%] grid grid-cols-1 md:grid-cols-3 gap-6 glass-strong rounded-2xl border border-slate-200 dark:border-slate-800/30 p-8 shadow-xl shadow-slate-900/[0.03] dark:shadow-slate-950/20 relative z-10 reveal revealed">
      <div className="text-center md:border-r border-slate-200 dark:border-slate-800/40 rtl:md:border-l rtl:md:border-r-0 p-3">
        <div className="text-3xl md:text-4xl font-display font-extrabold text-primary"><Counter from={0} to={4.5} />+</div>
        <div className="sm:text-lg text-base text-slate-500 dark:text-slate-400 tracking-wider font-semibold uppercase mt-2">{translation('experianceYear')}</div>
      </div>
      <div className="text-center md:border-r border-slate-200 dark:border-slate-800/40 rtl:md:border-l rtl:md:border-r-0 p-3">
        <div className="text-3xl md:text-4xl font-display font-extrabold text-primary"><Counter from={0} to={15} />+</div>
        <div className="sm:text-lg text-base text-slate-500 dark:text-slate-400 tracking-wider font-semibold uppercase mt-2">{translation('doneProjects')}</div>
      </div>
      <div className="text-center p-3">
        <div className="text-3xl md:text-4xl font-display font-extrabold text-primary"><Counter from={0} to={99.5} />%</div>
        <div className="sm:text-lg text-base text-slate-500 dark:text-slate-400 tracking-wider font-semibold uppercase mt-2">{translation('implementRate')}</div>
      </div>
    </div>
    </AnimateOnScroll>
  );
}
