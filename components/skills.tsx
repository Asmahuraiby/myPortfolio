"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import AnimateOnScroll from "./animate-on-scroll";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * index,
      duration: 0.4,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const translation = useTranslations();

  return (
    <section
      ref={ref}
      id="skills"
      className="relative w-full overflow-hidden pb-24"
    >
      <div className="relative z-10 sm:px-4">
        <div className="flex lg:flex-row flex-col lg:items-center gap-12">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <AnimateOnScroll animation="fade-in-up" duration={0.5} className="lg:w-[40%] w-full">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#62adb7]/20 bg-[#62adb7]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#62adb7]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#62adb7] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#62adb7]" />
                </span>
                03 — {translation("Skills")}
              </div>

              <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
                {translation("SkillsTitle")}
              </h2>

              <div className="flex gap-1">
                <div className="h-1 w-20 rounded-full bg-[#62adb7]" />
                <div className="h-1 w-8 rounded-full bg-[#62adb7]/30" />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                {translation('SkillsDesc')}
              </p>
            </div>
          </AnimateOnScroll>

          {/* RIGHT — SKILLS */}
          <div className="lg:w-[60%] w-full lg:px-16">
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
              {skillsData.map((skill, index) => (
                <motion.li
                  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: false,
                  }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
