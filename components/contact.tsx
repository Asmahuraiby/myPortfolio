"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import Toast from "./Toast";
import { BsEnvelope, BsTelephone, BsGeoAlt, BsSend } from "react-icons/bs";
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import AnimateOnScroll from "./animate-on-scroll";
import AnimateStagger from "./animate-stagger";

function ContactCard({ icon, label, value, href ,dir}: { icon: any, label: string, value: string, href?: string,dir?:string }) {
  return (
    <div className="p-6 sm:w-[400px] w-full rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center gap-4 shadow-sm">
      <div className="p-3.5 rounded-2xl bg-[#62adb7]/10 text-[#62adb7] text-xl">{icon}</div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        {href ? (
          <a href={href} className="font-bold dark:text-white hover:text-[#62adb7]">{value}</a>
        ) : (
          <p className="font-bold dark:text-white" dir={dir}>{value}</p>
        )}
      </div>
    </div>
  );
}
export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [isLoading, setIsLoading] = useState(false);
  const translation = useTranslations();
  const [toastData, setToastData] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });

  const triggerToast = (type: "success" | "error", message: string) => {
    setToastData({ show: true, type, message });
  };


  return (
    <section id="contact" ref={ref} className="pb-24 px-2 sm:px-6 relative overflow-hidden w-full">
      <AnimateOnScroll animation="fade-in-up" duration={0.5}>
        <div className="mb-6 flex flex-col gap-4 ltr:lg:max-w-3xl">
          <div className="w-fit inline-flex items-center gap-3 rounded-full border border-[#62adb7]/20 bg-[#62adb7]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#62adb7]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#62adb7] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#62adb7]" />
            </span>
            06 — {translation("Contact")}
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            {translation("ContactTitle")}
          </h2>

          <div className="flex gap-1">
            <div className="h-1 w-20 rounded-full bg-[#62adb7]" />
            <div className="h-1 w-8 rounded-full bg-[#62adb7]/30" />
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in-up" delay={0.2} duration={0.6}>
        <div className="relative overflow-hidden">

        {/* LEFT: Form Section */}
        <div className="relative py-8 px-5 lg:py-16 rtl:lg:pr-16 rtl:lg:pl-52 ltr:lg:pl-16 ltr:lg:pr-52 bg-primary/30 dark:bg-black/20 rounded-[2rem] lg:w-[70%] w-full">
          <h2 className="text-4xl font-extrabold text-slate-950 dark:text-white mb-2">{translation('formTitle')}</h2>
          <p className="text-slate-500 mb-10">{translation('formDescription')}</p>

          <form className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault(); // Stop default form refresh
              setIsLoading(true);
              const formData = new FormData(e.currentTarget);

              // Call your action manually
              const result = await sendEmail(formData);

              setIsLoading(false);
              if (result.success) {
                triggerToast("success", "Email sent successfully!");
                // e.currentTarget.reset(); // Clear the form
              } else {
                triggerToast("error", "Error sending email.");
              }
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="senderName"
                type="name"
                required className="w-full h-14 px-5 rounded-2xl bg-slate-50 dark:bg-transparent border  border-transparent dark:border-slate-800 outline-none focus:ring-2 ring-[#62adb7]" placeholder={translation("Name")} />
              <input name="senderEmail"
                type="email"
                required className="w-full h-14 px-5 rounded-2xl bg-slate-50 dark:bg-transparent border  border-transparent dark:border-slate-800 outline-none focus:ring-2 ring-[#62adb7]" placeholder={translation("Email")} />
            </div>
            <textarea name="message" required className="w-full h-40 p-5 rounded-2xl bg-slate-50 dark:bg-transparent border  border-transparent dark:border-slate-800 outline-none focus:ring-2 ring-[#62adb7]" placeholder={translation("Message")} />
            <SubmitBtn loading={isLoading} />
          </form>

          <AnimateStagger staggerDelay={0.1} className="lg:min-h-[400px] bg-transparent lg:absolute lg:top-1/4 rtl:lg:-left-72 ltr:lg:-right-72">
            <div className="space-y-6 sm:mt-0 mt-4">
              <ContactCard
                icon={<BsEnvelope />}
                label={translation("EmailLabel")}
                value="asmahuraiby@gmail.com"
                href="mailto:asmahuraiby@gmail.com"
              />
              <ContactCard
                icon={<BsTelephone />}
                label={translation("PhoneLabel")}
                value="+967 772554459"
                href="tel:+967 772554459"
                dir="ltr"
              />
              <ContactCard
                icon={<BsGeoAlt />}
                label={translation("AddressLabel")}
                value={translation("myAddress")}
              />
            </div>
          </AnimateStagger>
        </div>

        {/* RENDER THE CUSTOM TOAST */}
        {toastData.show && (
          <Toast
            type={toastData.type}
            message={toastData.message}
            onClose={() => setToastData({ ...toastData, show: false })}
          />
        )}
      </div>
      </AnimateOnScroll>
    </section>
  );
}
