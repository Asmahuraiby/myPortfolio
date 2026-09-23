"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { BsWhatsapp, BsEnvelope, BsGithub, BsTelephone } from "react-icons/bs";

export default function Footer() {
  const translation = useTranslations();

  return (
    <footer id="footer" className="bg-gray-950 border-t border-slate-800/50 py-14 text-slate-400 transition-colors duration-300 reveal revealed">
      <div className="container mx-auto px-3 sm:px-0">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-slate-800/50">


          <div className="md:col-span-5 space-y-4 text-left rtl:text-right">
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
                  <span className="text-xs text-slate-300 dark:text-Gray500 ">{translation('asmaJob')}</span>
                </div>
              </div>
            </motion.div>
            <motion.p className="mt-6 text-sm md:text-lg text-slate-500 text-center sm:text-start dark:text-gray-400 max-w-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}>
              {translation('desc')}
            </motion.p>
          </div>


          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:text-start text-center">
            <div className="space-y-2.5">
              <h4 className="text-xl  font-bold tracking-wider text-white uppercase">
                {translation('quickLink')}</h4>
              <ul className="space-y-1.5 text-base  sm:text-start text-center">
                <li>
                  <a href="#home" className="nav-scroll-link hover:text-primary transition-colors flex items-center justify-center sm:justify-start gap-1">
                    <span>{translation('Home')}</span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-scroll-link hover:text-primary transition-colors flex items-center justify-center sm:justify-start gap-1">
                    <span>{translation('About')}</span>
                  </a>
                </li>
                <li>
                  <a href="#projects" className="nav-scroll-link hover:text-primary transition-colors flex items-center justify-center sm:justify-start gap-1">
                    <span>{translation('Projects')}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-xl  font-bold tracking-wider text-white uppercase">
                {translation('myInfo')}</h4>
              <ul className="space-y-1.5 text-base ">
                <li>
                  <a href="#experience" className="nav-scroll-link hover:text-primary transition-colors flex items-center justify-center sm:justify-start gap-1">
                    <span>{translation('Experience')}</span>
                  </a>
                </li>
                <li>
                  <a href="#skills" className="nav-scroll-link hover:text-primary transition-colors flex items-center justify-center sm:justify-start gap-1">
                    <span>{translation('Skills')}</span>
                  </a>
                </li>
                <li>
                  <a href="#Certificates" className="nav-scroll-link hover:text-primary transition-colors flex items-center justify-center sm:justify-start gap-1">
                    <span>{translation('Certificates')}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5 flex flex-col items-center justify-center">
              {/* <h4 className="text-xl  font-bold tracking-wider text-white uppercase">
                {translation('followMe')}</h4> */}
              <ul className="space-y-1.5 text-base flex sm:justify-start justify-center items-center gap-4 mb-3">
                {/* WhatsApp */}
                <li>
                  <a
                    href="https://wa.me/967772554459"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-white hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <BsWhatsapp size={22} />
                  </a>
                </li>

                {/* Email */}
                <li>
                  <a
                    href="mailto:asmahuraiby@gmail.com"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-white hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <BsEnvelope size={22} />
                  </a>
                </li>

                {/* GitHub */}
                <li>
                  <a
                    href="https://github.com/Asmahuraiby"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-800 dark:text-white text-white hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <BsGithub size={22} />
                  </a>
                </li>

                {/* Phone */}
                <li>
                  <a
                    href="tel:+967772554459"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-white hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <BsTelephone size={22} />
                  </a>
                </li>
              </ul>
              <a
                className="group sm:w-fit w-full px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack bg-primary text-black border-none"
                href="/AsmaAlhuraiby.pdf"
                download
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                {translation('DownloadCV')}{" "}
              </a>
            </div>
          </div>

        </div>


        <div className="pt-8 flex flex-col md:flex-row items-center justify-center text-slate-500 gap-4">
          <div className="">
            {translation('copyRight')}
          </div>

        </div>

      </div>

      <div className="fixed bottom-7 rtl:left-7 ltr:right-7 animate-bounce">
        <button id="footer-back-to-top" className="inline-flex items-center gap-2 bg-gradient-to-b from-primary to-primary/40  px-4 py-4 rounded-full text-xs  tracking-wider uppercase btn-press duration-200 transition-all cursor-pointer shadow-lg shrink-0">
          <svg className="w-5 h-5 text-black shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
      </div>
    </footer>
  );
}
