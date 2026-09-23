import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuAward, LuBriefcase, LuMail } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Certificates",
    hash: "#Certificates",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "FullStackDeveloper",
//     location: "Yemen",
//     description:
//       "freelanceDesc",
//     icon: React.createElement(FaReact),
//     date: "2025 - present",
//   },
//   {
//     title: "Teacher",
//     location: "University Science & Technology",
//     description:
//       "I teach Html,Css,Laravel, React js, and Database ",
//     icon: React.createElement(LuAward),
//     date: "2024 - present",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Otek Company",
//     description:
//       "I worked as a front-end developer in projects but I workes as a full stack in other projects. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2023/1 - 2026/7",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Ysys Company",
//     description:
//       "I worked as a front-end developer for 10 months.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2022/12 - 2023/10",
//   },
//   {
//     title: "Trainer and Full Stack Developer",
//     location: "Temmam Light Company",
//     description:
//       "I trainer as a full stack developer and worked a project for Saba bank.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2022/6 - 2022/11",
//   },
  
// ] as const;

export const experiencesData = [
  {
    title: "FullStackDeveloper",
    location: "Yemen",
    description: "freelanceDesc",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
  {
    title: "FrontendDeveloper",
    location: "Otek_Location",
    description: "otekDesc",
    icon: React.createElement(CgWorkAlt),
    date: "2024/1 - 2026/7",
  },
  {
    title: "Teacher",
    location: "UST_Location",
    description: "teacherDesc",
    icon: React.createElement(LuAward),
    date: "2023 - present",
  },
  {
    title: "FrontendDeveloper",
    location: "Ysys_Location",
    description: "ysysDesc",
    icon: React.createElement(CgWorkAlt),
    date: "2022/12 - 2023/10",
  },
  {
    title: "TrainerAndFullStack",
    location: "Temmam_Location",
    description: "temmamDesc",
    icon: React.createElement(CgWorkAlt),
    date: "2022/6 - 2022/11",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Nuxt.js",
  "Vue.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MySql",
  "Laravel",
  "Rest API",
] as const;

export const projectsData = [
  {
    img:"niche.png",
    title: "niche_title",
    description: "niche_desc",
    tags: ["Laravel", "Blade", "Tailwind", "MySQL"],
    link: "https://nichetranslation.com/ar/home"
  },
  {
    img:"yemenHouse.png",
    title: "yemenHouse_title",
    description: "yemenHouse_desc",
    tags: ["Laravel", "Blade", "Tailwind", "MySQL"],
    link: "http://www.yemen-house.com/ar/home"
  },
  {
    img:"rose.png",
    title: "Rosenoud_title",
    description: "Rosenoud_desc",
    tags: ["Next.js", "Tailwind", "REST API"],
    link: "https://rosenoud.com/en/"
  },
  {
    img:"Biqalati.png",
    title: "Biqalati_title",
    description: "Biqalati_desc",
    tags: ["Bootstrap", "Frontend","Some Edit in Backend"],
    link: "https://biqalati.com/"
  },
  {
    img:"goodstoor.png",
    title: "GoodStores_title",
    description: "GoodStores_desc",
    tags: ["Bootstrap", "Frontend","Some Edit in Backend"],
    link: "https://goodsstoresye.com/"
  },
  {
    img:"cutebeauty.png",
    title: "cutebeauty_title",
    description: "cutebeauty_desc",
    tags: ["Bootstrap", "Frontend","Some Edit in Backend"],
    link: "https://cutebeauty-ye.com/"
  },
  {
    img:"ginger.png",
    title: "gingerfusion_title",
    description: "gingerfusion_desc",
    tags: ["laravel", "Backend","MySql","Link Data in Front"],
    link: "https://goodsstoresye.com/"
  },
  {
    img:"MIC.png",
    title: "MIC_title",
    description: "MIC_desc",
    tags: ["laravel", "Backend","MySql","Link Data in Front"],
    link: "https://goodsstoresye.com/"
  },
  {
    img:"saj.png",
    title: "saj_title",
    description: "saj_desc",
    tags: ["laravel", "Backend","MySql","Link Data in Front"],
    link: "https://goodsstoresye.com/"
  },
  {
    img:"daleel.png",
    title: "daleel_title",
    description: "daleel_desc",
    tags: ["Bootstrap", "Frontend","Some Edit in Backend"],
    link: "https://goodsstoresye.com/"
  },
] as const;