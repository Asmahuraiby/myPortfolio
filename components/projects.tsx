"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { projectsData } from "@/lib/data";
import { useTranslations } from 'next-intl';
import { BsArrowRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import AnimateOnScroll from "./animate-on-scroll";


export default function Projects() {
  const translation = useTranslations();
  const { ref } = useSectionInView("Projects");
  return (
    <section ref={ref} id="projects" className="pb-20 w-full sm:px-4 sm:overflow-visible overflow-x-hidden">
      <AnimateOnScroll animation="fade-in-up" duration={0.5}>
        <div className="space-y-4 mb-5">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#62adb7]/20 bg-[#62adb7]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#62adb7]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#62adb7] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#62adb7]" />
            </span>
            02 — {translation("Projects")}
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            {translation("ProjectTitle")}
          </h2>

          <div className="flex gap-1">
            <div className="h-1 w-20 rounded-full bg-[#62adb7]" />
            <div className="h-1 w-8 rounded-full bg-[#62adb7]/30" />
          </div>
        </div>
      </AnimateOnScroll>
      {/* Responsive Swiper */}
      <AnimateOnScroll animation="fade-in-up" delay={0.2} duration={0.6}>
        <div className='sm:block hidden'>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 }, // Tablets: 2 cards
            1024: { slidesPerView: 3 }, // Desktop: 3 cards
          }}
          className="pb-12"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="group h-full flex flex-col border border-slate-200 dark:border-slate-800 rounded-3xl p-6 bg-white dark:bg-slate-900 transition-all hover:shadow-2xl hover:shadow-[#62adb7]/10">
                {/* Image Container */}
                <div className="overflow-hidden rounded-xl mb-4 h-[250px] border">
                  <img
                    src={project.img}
                    alt={translation(project.title)}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="px-8 py-4 flex flex-col flex-grow dark:text-white">
                  <h3 className="text-2xl font-bold mb-3">{translation(project.title)}</h3>
                  <p className="text-sm opacity-70 h-12 mb-3 flex-grow">{translation(project.description)}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase bg-black/10 dark:bg-white/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" className="flex gap-2 text-[#62adb7] font-semibold hover:underline">
                    {translation('ViewProject')}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition rtl:rotate-180 mt-1" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='sm:hidden block'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-[280px] h-[400px] sm:w-[450px] sm:h-[500px]"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index} className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg">
              <div className="flex flex-col h-full">
                <div className="h-3/4 bg-gray-200 relative">
                  {/* Replace with <Image /> for production */}
                  <img
                    src={project.img}
                    alt={translation(project.title)}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-[#62adb7] to-[#1a2f6e] opacity-80" /> */}
                </div>
                <div className="px-8 py-5 flex flex-col flex-grow dark:text-white bg-white">
                  <h3 className="text-2xl font-bold mb-3">{translation(project.title)}</h3>
                  <p className="text-sm opacity-70 mb-3 flex-grow">{translation(project.description)}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase bg-black/10 dark:bg-white/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" className="text-[#62adb7] font-semibold hover:underline">
                    {translation('viewMore')} →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </AnimateOnScroll>
    </section>
  );
}