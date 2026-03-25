"use client";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { FiUsers, FiBookOpen, FiAward, FiGlobe } from "react-icons/fi";
import {
  FiCheckSquare,
  FiUser,
  FiTool,
} from "react-icons/fi";
import { FiBriefcase,FiCheck } from "react-icons/fi";

import { useEffect, useState } from "react";
import { Anton, Abel } from "next/font/google"
import { FiArrowRight,FiClock } from "react-icons/fi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Manrope } from "next/font/google";
import { FiCode } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { DM_Sans,Inter,Kaushan_Script } from "next/font/google";
import { FaStar } from "react-icons/fa";



type PopupType = "courses" | "demo" | null;

// font - type
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const konkhmerClass = "font-['Konkhmer_Sleokchher']";

const inter = Inter({
   subsets: ["latin"],
    weight: ["400", "500", "600","800","900"] 
  });

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const abel = Abel({
  subsets: ["latin"],
  weight: "400",
});

const programs = [
  { title: "Advanced Excel/ MS Training", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100" },
  { title: "Amazon Web Services (AWS) Training", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100" },
  { title: "Civil CAD Training", img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=100" },
  { title: "Cloud Computing Training", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=100" },
  { title: "Database Training", img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=100" },
  { title: "Digital Marketing Training", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100" },
  { title: "DotNet Training", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100" },
  { title: "ERP & SAP Training", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100" },
  { title: "Global Certification", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=100" },
  { title: "Graphic Designing Training", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=100" },
  { title: "Industrial Training", img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=100" },
  { title: "Java Programming Training", img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=100" },
];


const stats = [
  {
    icon: FiUsers,
    value: "10,000+",
    label: "Students Trained",
  },
  {
    icon: FiBookOpen,
    value: "20+",
    label: "Courses Available",
  },
  {
    icon: FiAward,
    value: "90%",
    label: "Success Rate",
  },
  {
    icon: FiGlobe,
    value: "200+",
    label: "Companies Hired",
  },
];

const students = [
  {
    name: "Utkarsh Kausik",
    company: "Google Cloud",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sameer Kumar Das",
    company: "Kryterion",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Shubham Kumar",
    company: "Google Cloud",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Rajat Agarwal",
    company: "Kryterion",
    img: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Utkarsh Kausik",
    company: "Google Cloud",
    img: "https://i.pravatar.cc/100?img=5",
  },
];
const testimonials = [
  {
    name: "Priya Patel",
    text: "The Python and Data Science course exceeded my expectations. The hands-on projects and real-world examples made learning so much easier. Highly recommended!",
    img: "https://i.pravatar.cc/100?img=11",
  },
  {
    name: "Vikram Singh",
    text: "The DevOps course was exactly what I needed to advance my career. I learned Docker, Kubernetes, and CI/CD in depth. Worth every penny!",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Rajesh Kumar",
    text: "From a non-IT background to a software developer - SoftCrayons made it possible. The structured curriculum and mentor support were game-changers.",
    img: "https://i.pravatar.cc/100?img=13",
  },
];
const successStories = ["Utkarsh", "Sameer", "Shubham", "Rajat", "Utkarsh"];
const curriculum = [
  "Best Graphic Designing Training",
  "UI/UX Design",
  "Digital Marketing",
  "Java Full Stack with DSA",
];

const courses = [
  {
    title: "Best Graphic Designing Training",
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=500",
  },
  {
    title: "UI/UX Design",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500",
  },
  {
    title: "Digital Marketing",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
  },
  {
    title: "Java Full Stack with DSA",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
  },
];

const features = [
  {
    title: "Getting ready for a job interview",
    desc: "We provide free mock interview sessions.Take free classes to help you get ready for an interview to boost your confidence and your chances of getting the job.",
    icon: FiCheckSquare,
    tagColor: "bg-[#dbeafe] text-[#1d4ed8]",
  },
  {
    title: "Unlimited classes to clear doubts",
    desc: "You can get extra help with your learning by going to daily doubt-solving sessions and getting unlimited backup lessons for free.",
    icon: FiUser,
    tagColor: "bg-[#dbeafe] text-[#1d4ed8]",
  },
  {
    title: "Free Tools to Use for Practice",
    desc: "You can use tools and platforms that are useful in your field for free.",
    icon: FiTool,
    tagColor: "bg-[#fff3e9] text-[#f48220]",
  },
  {
    title: "100% Placement Assistance",
    desc: "We provide complete placement support, including job referrals, interview preparation, and career guidance to help you get placed.",
    icon: FiAward,
    tagColor: "bg-[#e5e7eb] text-[#374151]",
  },
  {
    title: "Industry Expert Trainers",
    desc: "Learn from professionals with 10+ years of real-world digital marketing experience working with top brands.",
    icon: FiUsers,
    tagColor: "bg-[#fde2d7] text-[#ea580c]",
  },
  {
    title: "Doubt sessions whenever you want",
    desc: "Did you miss a class or want to go over what you learned? You can listen to recorded sessions at any time and from any place, and you can go at your own pace.",
    icon: FiBookOpen,
    tagColor: "bg-[#dbeafe] text-[#1d4ed8]",
  },
   {
    title: "Learning with an expert in a classroom or online",
    desc: "You can learn directly from experts in the field by taking interactive classes in person or online from home or work.",
    icon: FiBookOpen,
    tagColor: "bg-[#dbeafe] text-[#1d4ed8]",
  },
];

const partners = [
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
];

const articles = [
  {
    title: "Spring Data Jpa",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600",
    time: "20 min read",
  },
  {
    title: "Java8",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    time: "90 min read",
  },
  {
    title: "Multi Threading",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    time: "50 min read",
  },
  {
    title: "Multi Threading",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
    time: "50 min read",
  },
];

const placements = [
  {
    name: "Rohit Sharma",
    role: "Full Stack Web Developer",
    company: "Infosys",
    position: "Software Engineer",
    ctc: "12 LPA",
    img: "https://i.pravatar.cc/100?img=21",
  },
  {
    name: "Meera Krishnan",
    role: "Data Science & ML",
    company: "Amazon",
    position: "Data Analyst",
    ctc: "15 LPA",
    img: "https://i.pravatar.cc/100?img=22",
  },
  {
    name: "Arjun Nair",
    role: "AWS Solutions Architect",
    company: "TCS",
    position: "Cloud Architect",
    ctc: "18 LPA",
    img: "https://i.pravatar.cc/100?img=23",
  },
  {
    name: "Karan Malhotra",
    role: "DevOps & CI/CD",
    company: "Accenture",
    position: "DevOps Engineer",
    ctc: "14 LPA",
    img: "https://i.pravatar.cc/100?img=24",
  },
];

const media = [
  {
    img: "https://dummyimage.com/120x40/ffffff/000000&text=Nucamp",
    title: "Will AI Replace Finance Jobs in Myanmar? Here’s What to Do in 2025",
  },
  {
    img: "https://dummyimage.com/120x40/ffffff/000000&text=Oped",
    title: "Vaibhav Kakkar on IIM SKILLS: Industry-Relevant Training for Career Success",
  },
  {
    img: "https://dummyimage.com/120x40/ffffff/000000&text=Mid-Day",
    title: "Top 5 Best Financial Modeling and Valuation Courses for Investment Banking in India",
  },
  {
    img: "https://dummyimage.com/120x40/ffffff/000000&text=Josh",
    title: "List of CAT Crash Courses to Pursue in 2024",
  },
];
const blogs = ["Spring Data Jpa", "Java8", "Multi Threading", "Multi Threading"];

export default function Home() {
  const [activePopup, setActivePopup] = useState<PopupType>(null);
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  useEffect(() => {
    const closeOnEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePopup(null);
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  return (
    <main className=" text-[#101218]">
    <header className="sticky top-0 z-50 border-b border-[#e6e9ef] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
  <div className="mx-auto flex h-[58px] max-w-[1320px] items-center justify-between px-6" >

    {/* LEFT: LOGO */}
    <div className="flex items-center gap-3">
      <img
        src="/softcrayon.png"
        alt="SoftCrayons"
        className="h-[28px] w-auto object-contain"
      />

      <div className="h-10 w-[3px] bg-[#f48220]" />

     <div className="flex flex-col leading-none text-[#f48220]">

  {/* 15+ */}
  <div className="flex items-end gap-[1px]">
    <span className={`${anton.className} text-[#143f7f] text-[27px] leading-none`}>
      15
    </span>
    <span className={`${abel.className} top- text-[#1f5aa8] text-[29px] leading-none translate-y-[3px]`}>
      +
    </span>
  </div>

  {/* Years */}
  <span className="text-[13px] font-medium text-[#f48220]">
    Years
  </span>
</div>
    </div>

    {/* CENTER NAV */}
    <nav className={`${dmSans.className} hidden items-center gap-6 text-[13px] font-medium text-[#6b7280] xl:flex`}>

  {/* ACTIVE */}
  <a
    href="#"
    className="rounded-full bg-[#143f7f] px-4 py-1.5 text-white"
  >
    Home
  </a>

  <button
    onClick={() => setActivePopup("courses")}
    className="transition hover:text-[#1f5aa8]"
  >
    Courses
  </button>

  {["Placements", "Blogs", "Tutorials"].map((item) => (
    <a
      key={item}
      href="#"
      className="transition hover:text-[#1f5aa8]"
    >
      {item}
    </a>
  ))}

  {/* MORE */}
  <div className="relative group">
    <button className="flex items-center gap-1 hover:text-[#1f5aa8]">
      More
      <span className="text-[10px]">▾</span>
    </button>

    <div className="absolute left-0 top-full mt-2 hidden w-[150px] rounded-lg border border-[#e5e7eb] bg-white shadow-md group-hover:block">
      {["About Us", "Contact", "Careers"].map((item) => (
        <a
          key={item}
          href="#"
          className="block px-4 py-2 text-[13px] text-[#374151] hover:bg-[#f9fafb]"
        >
          {item}
        </a>
      ))}
    </div>
  </div>

</nav>

    {/* RIGHT ACTIONS */}
    <div className="flex items-center gap-3">
          <button className="grid h-9 w-9 place-items-center rounded-full border border-[#d9dce2] text-[#6b7280] transition hover:bg-[#f3f4f6]">
          <FiSearch className="text-[16px]" />
        </button>
      <button
        onClick={() => setActivePopup("demo")}
        className="rounded-full bg-gradient-to-r from-[#1f5aa8] to-[#f48220] px-5 py-2 text-[12px] font-semibold text-white transition hover:opacity-90"
      >
        Get a Free Demo
      </button>

      <button className="hidden rounded-full border border-[#d9dce2] px-4 py-2 text-[12px] font-medium text-[#374151] transition hover:bg-[#f9fafb] md:block">
        Find Jobs
      </button>
    </div>
  </div>
</header>


            {/* Hero page Book free demo btn */}
      <section className="mx-auto max-w-[1320px] overflow-hidden  px-6 py-12 lg:py-16">
  <div className="grid items-center gap-8 lg:grid-cols-[55%_45%]">

    {/* LEFT CONTENT */}
    <div className="pl-8">
      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f7c9a8] bg-[#fff4ec] px-3.5 py-1 text-[12px] font-medium text-[#f48220]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#f48220]" />
        New Batch Starting Soon
      </p>

     <h1 className={`${dmSans.className} text-[34px] leading-[1.15] font-bold tracking-[-0.02em] text-[#111827] sm:text-[44px] lg:text-[52px]`}>
        <span className="text-[#143f7f]">Learn Skills</span>{" "}
        That <br />
        Actually Get You <br />
        <span className="text-[#f48220]">Hired!</span>
      </h1>

      <p className="mt-6 max-w-[440px] text-[16px] leading-7 text-[#6b7280]">
        At SoftCrayons, education goes far beyond textbooks and theory. 
        We focus on practical learning that equips you with real, job-ready skills.
      </p>

      {/* CTA */}
      <div className="mt-6 flex flex-wrap gap-4">
       <button
          onClick={() => setActivePopup("demo")}
          className={`${dmSans.className} inline-flex items-center gap-2 rounded-full bg-[#143f7f] px-5 py-2 text-[13px] font-medium text-white transition hover:bg-[#0f2f5f]`}
        >
          Book Free Demo Class
          <FiArrowRight className="text-[15px]" />
        </button>

       <button
          className={`${dmSans.className} inline-flex items-center gap-2 rounded-full border border-[#f48220] px-5 py-1.5 text-[13px] font-medium text-[#374151] transition hover:bg-[#fff3e9]`}
        >
          <FiPhone className="text-[15px]" />
          Contact Us
        </button>
      </div>

      {/* TECH STACK */}
      <div className="mt-8">
        <p className="mb-3 text-[12px] text-[#7b8390]">
          Technologies you'll master
        </p>

        <div className="flex max-w-[450px] flex-wrap gap-2">
          {[
            "Digital Marketing",
            "Graphic Designing",
            "UI/UX",
            "Java",
            "GenAI Development",
            "AWS",
            "Cloud",
            "CAD Softwares",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[#e5e7eb] bg-white px-3 py-1.5 text-[11px] text-[#374151]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* RIGHT CONTENT */}
<div className="relative flex right-[100px] justify-center lg:justify-end">

  {/* HALF BLUE BACKGROUND SHAPE (SMALLER) */}
  <div className="absolute top-[120px] right-[30px] h-[250px] w-[300px] rounded-t-full bg-[#63b9e6]" />

  {/* GIRL IMAGE (BIGGER) */}
  <img
    src="/girl.png"
    alt="student"
    className="relative z-10 h-[540px] w-auto object-contain"
  />

  {/* HAPPY STUDENTS CARD */}
  <div className="absolute right-[20px] top-[300px] z-20 w-[260px] rounded-xl border border-[#cfe8ff] bg-white px-4 py-3 shadow-md">
    
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        {[1, 2, 3, 4].map((i) => (
          <img
            key={i}
            src={`https://i.pravatar.cc/40?img=${i}`}
            className="h-7 w-7 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>

      <p className={`${manrope.className} ml-2  text-[18px]  text-[#111827]`}>
        5000<span className="text-[#63b9e6]">+</span>
      </p>
    </div>

    <p className="mt-1 text-[13px] font-semibold text-[#63b9e6]">
      Happy Student
    </p>

   <div className="mt-1 flex items-center gap-1 text-[12px] text-[#6b7280]">
      {[1, 2, 3, 4, 5].map((i) => (
        <FaStar key={i} className="text-[#fbbf24] text-[12px]" />
      ))}
      <span className="ml-1">(4.8 Stars)</span>
    </div>
  </div>

  {/* PLACEMENT BADGE */}
  <div className="absolute flex items-center bottom-[100px] right-[110px] z-20 rounded-xl bg-white px-6 py-2 text-[13px] font-semibold text-[#1f5aa8] shadow-md">
     <FaStar className="mx-3 text-[#1f5aa8] text-[12px]" /> 100% Placement Assistance
  </div>

</div>
  </div>

      {/* SCROLL INDICATOR */}
      <div className="mt-10 flex justify-center">
        <div className="flex h-8 w-4 items-start justify-center rounded-full border border-[#cdd3dc]">
          <div className="mt-1 h-2 w-1 rounded-full bg-[#95a0ad]" />
        </div>
      </div>
    </section>

        <section className={`${dmSans.className} bg-[#f8fafc] py-14 border-y border-[#e5e7eb]`}>
      <div className="mx-auto max-w-[1320px] px-6">
        
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">

          {/* ITEM */}
          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3e9]">
              <FiUsers className="text-[20px] text-[#f48220]" />
            </div>
            <p className="text-[22px] font-bold text-[#111827]">10,000+</p>
            <p className="text-[12px] text-[#6b7280]">Students Trained</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3e9]">
              <FiBookOpen className="text-[20px] text-[#f48220]" />
            </div>
            <p className="text-[22px] font-bold text-[#111827]">20+</p>
            <p className="text-[12px] text-[#6b7280]">Courses Available</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3e9]">
              <FiAward className="text-[20px] text-[#f48220]" />
            </div>
            <p className="text-[22px] font-bold text-[#111827]">90%</p>
            <p className="text-[12px] text-[#6b7280]">Success Rate</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3e9]">
              <FiGlobe className="text-[20px] text-[#f48220]" />
            </div>
            <p className="text-[22px] font-bold text-[#111827]">200+</p>
            <p className="text-[12px] text-[#6b7280]">Companies Hired</p>
          </div>

        </div>
      </div>
    </section>

       <section className="py-20 mx-12">
      <div className="mx-auto max-w-[1320px] px-6">

        {/* HEADING */}
        <div className="text-center">
          <h2 className={`${dmSans.className} text-[36px] font-bold text-[#111827]`}>
            Explore Our <span className="text-[#1f5aa8]">Top Programs</span>
          </h2>

          <p className={`${dmSans.className} mt-4 mx-auto max-w-[620px] text-[14px] leading-6 text-[#6b7280]`}>
            Explore our top programs designed to build your skills and shape your future.
            Choose the right path and start your journey toward success today.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-15 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {programs.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-xl border border-[#e5e7eb] bg-white py-4 px-2 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[1px]"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="h-12 w-12 rounded-lg object-cover"
              />

              {/* TEXT */}
              <p className={`${inter.className} text-[14px] font-medium text-[#374151] leading-5`}>
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-12 flex justify-center">
          <button
            className={`${dmSans.className} rounded-full bg-[#143f7f] px-8 py-2.5 text-[13px] font-medium text-white transition hover:bg-[#0f2f5f]`}
          >
            Show All Category
          </button>
        </div>

      </div>
    </section>

       <section className={`${dmSans.className} bg-[#f8fafc] py-20`}>
      <div className="mx-auto max-w-[1320px] px-6">

        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-[34px] font-bold text-[#111827]">
            Our Student{" "}
            <span className="text-[#f48220]">Recent Placed</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[650px] text-[14px] text-[#6b7280]">
            Our students are landing roles in top companies across industries.
            Their dedication and strong foundation drive real success—and we’re
            proud to power their journey forward.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

          {students.map((student, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
            >
              {/* TOP BLUE BANNER */}
              <div className="bg-gradient-to-r from-[#0f4aa3] to-[#1f66c1] p-4 text-center text-white">

                <p className={`${konkhmerClass} text-[16px]`}>
                  Got Placed
                </p>

                <p className={`${kaushan.className} text-[14px]`}>
                  Congratulation
                </p>
              </div>

              {/* PROFILE IMAGE */}
              <div className="relative -mt-6 flex justify-center">
                <img
                  src={student.img}
                  className="h-12 w-12 rounded-full border-2 border-white object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="px-4 pb-4 pt-2 text-center">
                <p className="text-[14px] font-semibold text-[#111827]">
                  {student.name}
                </p>

                <p className="mt-1 text-[12px] text-[#6b7280] leading-5">
                  On Successfully Placed in Xonier Technologies as a Trainee -
                  Lead Generation
                </p>
              </div>

              {/* FOOTER */}
              <div className="flex items-center justify-between border-t px-3 py-2 text-[11px] text-[#6b7280]">

                {/* LOGO */}
                <img
                  src="/softcrayon.png"
                  className="h-4 object-contain"
                />

                {/* COMPANY */}
                <div className="flex items-center gap-1">
                  <span className="text-[#9ca3af]">››</span>
                  <span className="font-medium">{student.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-12 flex justify-center">
          <button className="rounded-full border border-[#f48220] px-6 py-2 text-[13px] font-medium text-[#374151] transition hover:bg-[#fff3e9]">
            Explore All Success stories
          </button>
        </div>

      </div>
    </section>

     <section className={`${dmSans.className} py-20 mx-12`}>
      <div className="mx-auto max-w-[1120px] px-6">

        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-[34px] font-bold text-[#111827]">
            Industry-Ready{" "}
            <span className="text-[#f48220]">Curriculum</span>
          </h2>

          <p className="mt-3 text-[14px] text-[#6b7280]">
            Hands-on courses designed by industry experts to get you job-ready in
            weeks, not years.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* IMAGE */}
              <img
                src={course.img}
                className="h-[160px] w-full object-cover"
                alt=""
              />

              {/* CONTENT */}
              <div className="p-4">

                {/* TOP META */}
                <div className="flex items-center justify-between text-[12px] text-[#6b7280]">
                  <div className="flex items-center gap-1">
                    <FiClock className="text-[13px]" />
                    <span>6 months</span>
                  </div>

                  <span className="rounded-full bg-[#ffe4e6] px-2 py-[2px] border border-[#ef4444] text-[10px] font-medium text-[#ef4444]">
                    Advanced
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-3 text-[14px] font-semibold text-[#111827] leading-5">
                  {course.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-[12px] text-[#6b7280] leading-5 line-clamp-2">
                  Softcrayons offers an in-depth course for aspiring students,
                  designers and professionals looking to enhance their skills.
                </p>

                {/* BUTTON */}
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-[#e5e7eb] py-2 text-[12px] font-medium text-[#374151] transition group-hover:bg-[#f9fafb]">
                  View Course
                  <FiArrowRight className="text-[14px]" />
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* MAIN BUTTON */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 rounded-full bg-[#143f7f] px-7 py-2.5 text-[13px] font-medium text-white transition hover:bg-[#0f2f5f]">
            View all Courses
            <FiArrowRight />
          </button>
        </div>

      </div>
    </section>

      <section className=" py-20 mx-15">
      <div className="mx-auto max-w-[1320px] px-6">

        {/* HEADING */}
        <div className="text-center">
          <h2 className={`${dmSans.className} text-[34px] font-bold text-[#111827]`}>
            Built for Your <span className="text-[#f48220]">Success</span>
          </h2>

          <p className={`${dmSans.className} mt-4 mx-auto max-w-[650px] text-[14px] text-[#6b7280]`}>
            We don’t just teach, we provide an environment designed for your growth.
            With real-world projects, personalized mentorship, and an active community,
            we are fully committed to your success.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="mt-12 space-y-6">

          {/* ROW 1 */}
          <div className="grid gap-6 md:grid-cols-2">
            {features.slice(0, 2).map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-[#e5e7eb] bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff3e9]">
                    <Icon className="text-[18px] text-[#f48220]" />
                  </div>

                  <div className={`${dmSans.className} ${item.tagColor} inline-block rounded-full px-3 py-1 text-[12px] font-medium`}>
                    {item.title}
                  </div>

                  <p className={`${inter.className} mt-3 text-[13px] leading-6 text-[#6b7280]`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ROW 2 */}
          <div className="grid gap-6 md:grid-cols-3">
            {features.slice(2, 5).map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-[#e5e7eb] bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff3e9]">
                    <Icon className="text-[18px] text-[#f48220]" />
                  </div>

                  <div className={`${dmSans.className} ${item.tagColor} inline-block rounded-full px-3 py-1 text-[12px] font-medium`}>
                    {item.title}
                  </div>

                  <p className={`${inter.className} mt-3 text-[13px] leading-6 text-[#6b7280]`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ROW 3 */}
          <div className="grid gap-6 md:grid-cols-2">
            {features.slice(5, 7).map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-[#e5e7eb] bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff3e9]">
                    <Icon className="text-[18px] text-[#f48220]" />
                  </div>

                  <div className={`${dmSans.className} ${item.tagColor} inline-block rounded-full px-3 py-1 text-[12px] font-medium`}>
                    {item.title}
                  </div>

                  <p className={`${inter.className} mt-3 text-[13px] leading-6 text-[#6b7280]`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>

      <section className={`${dmSans.className} bg-[#f8fafc] py-20`}>
      <div className="mx-auto max-w-[1120px] px-10">

        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-[34px] font-bold text-[#111827]">
            Success <span className="text-[#f48220]">Stories</span>
          </h2>

          <p className="mt-3 text-[14px] text-[#6b7280]">
            Hear from our alumni who transformed their careers with SoftCrayons.
          </p>
        </div>

        {/* TABS */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center rounded-full bg-[#1f4f8f] p-1 text-white">
            <button className="rounded-full bg-gradient-to-r border border-white from-[#5f87c4] to-[#1f4f8f] px-5 py-1.5 text-[13px] font-medium">
              Testimonials
            </button>
            <button className="px-5 py-1.5 text-[13px] opacity-80 hover:opacity-100 rounded-full  ">
              Video Reviews
            </button>
            <button className="px-5 py-1.5 text-[13px] opacity-80 hover:opacity-100">
              Audio Reviews
            </button>
          </div>
        </div>

        {/* SLIDER BUTTONS */}
        <div className="mt-10 flex justify-end gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#6b7280] hover:bg-[#f3f4f6]">
            <FiChevronLeft />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#6b7280] hover:bg-[#f3f4f6]">
            <FiChevronRight />
          </button>
        </div>

        {/* CARDS */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="relative rounded-xl border border-[#e5e7eb] bg-white p-3 shadow-sm transition hover:shadow-md"
            >
              {/* STARS */}
              <div className="flex gap-1 text-[#f97316]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <FaStar key={s} className="text-[14px]" />
                ))}
              </div>

              {/* QUOTE ICON */}
              <span className="absolute right-5 top-5 text-[40px] text-[#f3d3c2]">
                ”
              </span>

              {/* TEXT */}
              <p className="mt-4 text-[13px] leading-6 text-[#374151]">
                "{item.text}"
              </p>

              {/* USER */}
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={item.img}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-[13px] font-semibold text-[#111827]">
                    {item.name}
                  </p>
                  <p className="text-[12px] text-[#6b7280]">
                    SoftCrayons Alumni
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-12 flex justify-center">
          <button className="rounded-full border border-[#f48220] px-6 py-2 text-[13px] font-medium text-[#374151] transition hover:bg-[#fff3e9]">
            View All Testimonials
          </button>
        </div>

      </div>
    </section>

       <section className={`${dmSans.className} bg-[#2f5b91] py-16`}>
      <div className="mx-auto max-w-[1120px] px-6 grid items-center gap-10 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="text-white">
          <h2 className="text-[26px] font-semibold">
            Softcrayons Global Partner’s
          </h2>

          <p className="mt-3 text-[14px] text-[#dbeafe]">
            World-Class Employee Training Solutions
          </p>

          <ul className="mt-5 space-y-2 text-[13px] text-[#e0ecff]">
            <li>• Options of Classroom/InHouse/Online Training</li>
            <li>• Fully Customize Instructor-led training</li>
            <li>• Flexible Schedule-Build Your Own Schedule</li>
          </ul>

          <button className="mt-6 rounded-full bg-[#f48220] px-6 py-2.5 text-[13px] font-medium text-white transition hover:bg-[#e56f0d]">
            Book Free Demo Class
          </button>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-3 gap-4">
          {partners.map((logo, i) => (
            <div
              key={i}
              className="flex h-[70px] items-center justify-center rounded-lg bg-white shadow-sm"
            >
              <img
                src={logo}
                alt="partner"
                className="h-[28px] object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>


      <section className={`${inter.className} bg-[#f8fafc] py-20`}>
      <div className="mx-auto max-w-[1120px] px-6">

        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-[34px] font-semibold text-[#111827]">
            Knowledge <span className="text-[#f48220]">Hub</span>
          </h2>

          <p className="mt-3 text-[14px] text-[#6b7280]">
            Stay ahead with the latest insights, tutorials, and career tips from our experts.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {articles.map((item, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.img}
                  className="h-[160px] w-full object-cover"
                  alt=""
                />

                {/* TAG */}
                <span className="absolute left-3 top-3 rounded-full bg-[#f48220] px-2 py-[2px] text-[10px] font-medium text-white">
                  java
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-4">

                {/* TIME */}
                <div className="flex items-center gap-1 text-[12px] text-[#9ca3af]">
                  <FiClock className="text-[13px]" />
                  {item.time}
                </div>

                {/* TITLE */}
                <h3 className="mt-2 text-[14px] font-semibold text-[#111827]">
                  {item.title}
                </h3>

                {/* SUBTEXT */}
                <p className="mt-1 text-[12px] text-[#6b7280]">
                  Multi Threading
                </p>

                {/* FOOTER */}
                <div className="mt-4 flex items-center justify-between  border-t  pt-3">

                  <div className="flex items-center gap-2">
                    <img
                      src="https://i.pravatar.cc/40?img=15"
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <span className="text-[12px] text-[#6b7280]">
                      Anil kumar
                    </span>
                  </div>

                  <button className="flex items-center gap-1 text-[12px] font-medium text-[#f48220]">
                    Read More
                    <FiArrowRight className="text-[13px]" />
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* BUTTON */}
        <div className="mt-12 flex justify-center">
          <button className="rounded-full border border-[#f48220] px-6 py-2 text-[13px] font-medium text-[#374151] transition hover:bg-[#fff3e9]">
            Explore All Article
          </button>
        </div>

      </div>
    </section>

     <section className={`${inter.className} bg-[#f8fafc] py-20`}>
      <div className="mx-auto max-w-[1320px] px-6">

        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-[34px] font-semibold text-[#111827]">
            Students <span className="text-[#f48220]">Placed</span> Successfully
          </h2>

          <p className="mt-3 text-[14px] text-[#6b7280]">
            Join thousands of students who landed their dream jobs at top companies.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {placements.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              {/* TOP */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[13px] font-semibold text-[#111827]">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-[#6b7280]">
                      {item.role}
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-[#1f5aa8] px-2 py-[2px] text-[10px] font-medium text-white">
                  {item.ctc}
                </span>
              </div>

              {/* COMPANY */}
              <div className="mt-4 flex items-center gap-3 rounded-lg bg-[#f9fafb] p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#fff3e9]">
                  <FiBriefcase className="text-[#f48220]" />
                </div>

                <div>
                  <p className="text-[12px] font-medium text-[#111827]">
                    {item.company}
                  </p>
                  <p className="text-[11px] text-[#6b7280]">
                    {item.position}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* BUTTON */}
        <div className="mt-12 flex justify-center">
          <button className="rounded-full border border-[#f48220] px-6 py-2 text-[13px] font-medium text-[#374151] transition hover:bg-[#fff3e9]">
            View All Placement
          </button>
        </div>

      </div>
    </section>

     <section className={`${inter.className} relative py-24 overflow-hidden`}>

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="circleBg.png"
          alt="bg"
          className="h-full w-full object-cover"
        />
        {/* BLUR + OVERLAY */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-[650px] px-6 text-center">

        {/* TAG */}
        <span className="inline-block rounded-full bg-[#fff3e9] px-4 py-1 text-[12px] font-medium text-[#f48220] border border-[#f7c9a8]">
          Limited Seats Available
        </span>

        {/* HEADING */}
        <h2 className="mt-6 text-[40px] font-black leading-tight text-[#111827]">
          Ready to <span className="text-[#f48220]">Level Up</span>
          <br />
          Your Career?
        </h2>

        {/* SUBTEXT */}
        <p className="mt-4 text-[15px] leading-7 text-[#6b7280]">
          Join thousands of developers who have transformed their careers with
          our industry-focused curriculum and expert mentorship.
        </p>

        {/* BUTTON */}
        <div className="mt-8">
          <button className="inline-flex items-center gap-2 rounded-full bg-[#143f7f] px-6 py-2.5 text-[13px] font-medium text-white transition hover:bg-[#0f2f5f]">
            Start Your Journey
            <FiArrowRight />
          </button>
        </div>

        {/* FEATURES */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-[12px] text-[#6b7280]">
          <div className="flex items-center gap-1">
            <FiCheck className="text-[#16b7280]" />
            Free trial
          </div>
          <div className="flex items-center gap-1">
            <FiCheck className="text-[#6b7280]" />
            Free consultation
          </div>
          <div className="flex items-center gap-1">
            <FiCheck className="text-[#6b7280]" />
            100% satisfaction guarantee
          </div>
        </div>

      </div>
    </section>

     <section className={`${inter.className} bg-[#f8fafc] py-20 `}>
      <div className="mx-auto max-w-[1200px] px-6">

        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-[32px] font-semibold text-[#1f5aa8]">
            Media <span className="text-[#f48220]">Presence</span>
          </h2>
        </div>

        {/* NAV BUTTONS */}
        <div className="mt-8 flex justify-end gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#6b7280] hover:bg-[#f3f4f6]">
            <FiChevronLeft />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#6b7280] hover:bg-[#f3f4f6]">
            <FiChevronRight />
          </button>
        </div>

        {/* CARDS */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {media.map((item, i) => (
            <div
              key={i}
              className="bg-[#f3f4f6] flex flex-col  overflow-hidden rounded-xl border border-[#e5e7eb] shadow-cyan-500/50 shadow-sm transition hover:shadow-md"
            >
              {/* IMAGE AREA */}
              <div className="flex h-[90px] items-center justify-center bg-white">
                <img
                  src={item.img}
                  alt="media"
                  className="h-10 object-contain"
                />
              </div>

              {/* TITLE AREA */}
              <div className="bg-[#f3f4f6] px-4 py-5  text-center">
                <p className="text-[13px] font-semibold leading-6 text-[#374151]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

  
      <section className="bg-[#07183f] py-14 text-slate-200">
        <div className="mx-auto max-w-[1280px] px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <h4 className="text-xl font-bold text-[#f48220]">Trending Courses</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>» Advanced Java Training</li>
                <li>» Data Analytics using Python</li>
                <li>» DevOps Training</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#5db6ff]">Courses in Noida</h4>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <li>» Graphics Design Training</li>
                <li>» Cloud Training</li>
                <li>» SEO Training</li>
                <li>» Python Full Stack</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#d48dff]">Courses in Ghaziabad</h4>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <li>» Digital Marketing</li>
                <li>» Software Testing</li>
                <li>» Cloud Computing</li>
                <li>» Java Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      

      <footer className="bg-[#07183f] py-14 text-slate-100">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 lg:grid-cols-3">
          <div>
            <h4 className="text-3xl font-extrabold">
              Soft<span className="text-[#f48220]">crayons</span>
            </h4>
            <p className="mt-4 text-sm text-slate-300">
              Empowering professionals through transformative digital learning experiences.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-[#f48220]">Quick Links</h5>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {["Home", "About Us", "Courses", "Blog", "Contact", "Placements"].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-[#f48220]">Contact</h5>
            <p className="mt-4 text-sm text-slate-300">+91 8545012345</p>
            <p className="text-sm text-slate-300">info@softcrayons.com</p>
            <p className="mt-4 text-sm text-slate-300">C-6 Sector 2, Noida</p>
          </div>
        </div>
      </footer>

      {activePopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setActivePopup(null)}
        >
          <div className="relative w-full max-w-[980px]" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActivePopup(null)}
              className="absolute right-3 top-2 z-10 rounded-full bg-white px-2 py-1 text-sm font-bold text-black shadow"
              aria-label="Close popup"
            >
              X
            </button>
            {activePopup === "courses" ? (
              <div className="grid min-h-[430px] gap-0 overflow-hidden rounded-2xl border border-[#d9e0ea] bg-white shadow-2xl md:grid-cols-[35%_38%_27%]">
                <aside className="border-r border-[#dbe3ec] bg-[#f1f4f8] p-4">
                  <h3 className="mb-3 text-sm font-semibold text-[#1f2937]">All category</h3>
                  <div className="mb-3 rounded-full border border-[#b7c2d0] bg-white px-3 py-1.5 text-xs text-[#7b8798]">
                    Search Course
                  </div>
                  <div className="space-y-1.5">
                    {programs.slice(0, 8).map((item) => (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setSelectedProgram(item)}
                        className={`flex w-full items-center justify-between rounded-md border px-2.5 py-2 text-left text-[13px] ${
                          selectedProgram === item
                            ? "border-[#1d4f94] bg-[#1d4f94] text-white"
                            : "border-transparent bg-transparent text-[#4b5563]"
                        }`}
                      >
                        <span>{item.title}</span>
                        <span>›</span>
                      </button>
                    ))}
                  </div>
                </aside>
                <section className="border-r border-[#dbe3ec] bg-white p-4">
                  <p className="text-[11px] text-[#1d4f94]">All Courses of</p>
                  <h2 className="text-[29px] font-extrabold uppercase leading-8 text-[#f48220]">
                    {selectedProgram.title}
                  </h2>
                  <ul className="mt-5 space-y-3 text-[14px] text-[#4b5563]">
                    <li>○ Advanced Excel Training</li>
                    <li>○ MIS Training</li>
                  </ul>
                </section>
                <aside className="bg-[#f8fafc] p-4">
                  <div className="mb-3 h-28 rounded-lg bg-gradient-to-br from-[#d2def0] to-[#f4f7fb]" />
                  <h4 className="text-[13px] font-semibold text-[#111827]">
                    AI-Driven {selectedProgram.title} Program
                  </h4>
                  <p className="mt-2 text-[12px] leading-5 text-[#596273]">
                    The AI-Driven Advanced Excel & MIS Program is designed to help professionals
                    master advanced Excel tools and modern reporting techniques.
                  </p>
                </aside>
              </div>
            ) : (
              <div className="grid overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-2">

  {/* LEFT IMAGE SECTION */}
  <div className="relative min-h-[520px]">

    {/* Background Image */}
    <img
      src="/girlOnContactPage.png"
      alt="Learn IT Skills"
      className="absolute inset-0 h-full w-full object-cover"
    />

  </div>

  {/* RIGHT FORM SECTION */}
  <div className="bg-white px-10 py-10">

    <h3 className="text-[28px] font-bold text-[#143f7f]">
      Book Free Demo Class
    </h3>

    <p className="mt-2 text-[14px] leading-6 text-[#6b7280]">
      Let&apos;s align our constellations! Reach out and let the magic of collaboration illuminate our skies.
    </p>

    <form className="mt-6 grid grid-cols-2 gap-4">

      <input
        placeholder="Last Name"
        className="h-[44px] rounded-md border border-[#c7d2e3] px-3 text-[14px] outline-none focus:border-[#1f5aa8]"
      />

      <input
        placeholder="First Name"
        className="h-[44px] rounded-md border border-[#c7d2e3] px-3 text-[14px] outline-none focus:border-[#1f5aa8]"
      />

      <input
        placeholder="Email"
        className="col-span-2 h-[44px] rounded-md border border-[#c7d2e3] px-3 text-[14px] outline-none focus:border-[#1f5aa8]"
      />

      <input
        placeholder="Phone Number"
        className="col-span-2 h-[44px] rounded-md border border-[#c7d2e3] px-3 text-[14px] outline-none focus:border-[#1f5aa8]"
      />

      <textarea
        rows={4}
        placeholder="Message"
        className="col-span-2 rounded-md border border-[#c7d2e3] p-3 text-[14px] outline-none focus:border-[#1f5aa8]"
      />

      <button
        type="button"
        className="col-span-2 mt-2 rounded-md bg-[#143f7f] py-3 text-[15px] font-semibold text-white transition hover:bg-[#0f2f5f]"
      >
        Start Your Journey 🚀
      </button>
    </form>
  </div>
</div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
