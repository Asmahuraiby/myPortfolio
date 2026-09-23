"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useLocale } from "next-intl";
import { useTranslations } from 'next-intl';
import AnimateOnScroll from "./animate-on-scroll";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const locale = useLocale();
  const translation = useTranslations();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-24 w-full">
      <AnimateOnScroll animation="fade-in-up" duration={0.5}>
        <div className="flex flex-col items-start justify-start gap-3 mb-4">
          <div className="inline-flex items-center gap-5 rounded-full border border-[#62adb7]/20 bg-[#62adb7]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#62adb7]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#62adb7] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#62adb7]" />
            </span>
            05 — {translation("Experience")}
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 lg:text-5xl dark:text-white">
            {translation("ExperienceTitle")}
          </h2>

          <div className="flex gap-1">
            <div className="h-1 w-20 rounded-full bg-[#62adb7]" />
            <div className="h-1 w-8 rounded-full bg-[#62adb7]/30" />
          </div>
        </div>
      </AnimateOnScroll>
      <div dir="ltr">
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "start",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <div dir={`${locale == 'ar' ? 'rtl' : 'ltr'}`} className="text-start">
                  <h3 className="font-semibold capitalize">{translation(item.title)}</h3>
                  <p className="font-normal !mt-0">{translation(item.location)}</p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {translation(item.description)}
                  </p>
                </div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
