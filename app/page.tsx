"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type PopupType = "courses" | "demo" | null;

const programs = [
  "Advanced Excel/ MS Training",
  "Amazon Web Services (AWS)",
  "Civil CAD Training",
  "Cloud Computing Training",
  "Database Training",
  "Digital Marketing Training",
  "DotNet Training",
  "ERP & SAP Training",
  "Global Certification",
  "Graphic Designing Training",
  "Industrial Training",
  "Java Programming Training",
];

const placements = [
  { name: "Rohit Sharma", company: "Infosys", role: "Software Engineer", lpa: "12 LPA" },
  { name: "Meera Krishnan", company: "Amazon", role: "Data Analyst", lpa: "15 LPA" },
  { name: "Arjun Nair", company: "TCS", role: "Cloud Architect", lpa: "18 LPA" },
  { name: "Karan Malhotra", company: "Accenture", role: "DevOps Engineer", lpa: "14 LPA" },
];

const mediaMentions = ["nucamp", "upED", "mid-day", "Josh"];
const testimonials = [
  "The Python and Data Science course exceeded my expectations. Highly recommended!",
  "The DevOps course was exactly what I needed to advance my career.",
  "From a non-IT background to a software developer - support was game-changing.",
];
const successStories = ["Utkarsh", "Sameer", "Shubham", "Rajat", "Utkarsh"];
const curriculum = [
  "Best Graphic Designing Training",
  "UI/UX Design",
  "Digital Marketing",
  "Java Full Stack with DSA",
];
const features = [
  "Getting ready for a job interview",
  "Unlimited classes to clear doubts",
  "Free Tools to Use for Practice",
  "100% Placement Assistance",
  "Industry Expert Trainers",
  "Doubt sessions whenever you want",
  "Learning with an expert in a classroom or online",
];
const blogs = ["Spring Data Jpa", "Java8", "Multi Threading", "Multi Threading"];

const trendingCourseColumns = [
  [
    "Advanced Java Training",
    "MERN Training",
    "Data Analytics using Python",
    "Full Stack QA Training",
    "DevOps with AWS",
    "Cloud Computing Training",
  ],
  [
    "Python Full Stack Development",
    "Java Full Stack with DSA",
    "UI/UX Design Professional",
    "Digital Marketing Mastery",
    "Graphic Designing Training",
    "SAP FICO Certification",
  ],
  [
    "AWS Solutions Architect",
    "Microsoft Azure Fundamentals",
    "Data Science with AI",
    "Cybersecurity Essentials",
    "DotNet Full Stack",
    "Industrial Summer Training",
  ],
  [
    "Machine Learning Bootcamp",
    "React.js Advanced",
    "SEO & Content Marketing",
    "Software Testing Automation",
    "Blockchain Basics",
    "Global IT Certification Prep",
  ],
];

const noidaCourseLinks = [
  "Java Programming Training in Noida",
  "Python Development in Noida",
  "MERN Stack Course in Noida",
  "Data Analytics in Noida",
  "Digital Marketing in Noida",
  "Graphic Design in Noida",
  "AWS Training in Noida",
  "Full Stack QA in Noida",
  "UI/UX Design in Noida",
  "DevOps Training in Noida",
  "SAP MM Course in Noida",
  "Cloud Computing in Noida",
];

const ghaziabadCourseLinks = [
  "Java Full Stack Training in Ghaziabad",
  "Python Data Science in Ghaziabad",
  "Web Development Course in Ghaziabad",
  "Digital Marketing Training in Ghaziabad",
  "Software Testing in Ghaziabad",
  "Graphic Designing in Ghaziabad",
  "AWS Certification in Ghaziabad",
  "MERN Development in Ghaziabad",
  "DevOps Engineering in Ghaziabad",
  "UI/UX Professional in Ghaziabad",
  "SAP Training in Ghaziabad",
  "Cloud Solutions in Ghaziabad",
];

const partnerNames = [
  "Pearson",
  "SAP",
  "Microsoft Academy",
  "Google Cloud",
  "AWS",
  "Kryterion",
  "ACT",
  "Languagecert",
  "Skills For English",
  "Salesforce",
  "Oracle",
];

function FooterChevronLink({ children }: { children: ReactNode }) {
  return (
    <li className="text-sm">
      <a href="#" className="inline-flex items-baseline gap-1.5 text-slate-300 transition hover:text-white">
        <span className="font-semibold text-[#ff8c00]">»</span>
        <span>{children}</span>
      </a>
    </li>
  );
}

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
    <main className="bg-[#f6f7fb] text-[#101218]">
      <header className="sticky top-0 z-30 border-b border-[#e4e7eb] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[66px] max-w-[1320px] items-center justify-between px-6">
          <div className="flex items-end gap-2">
            <div className="text-[24px] font-extrabold leading-none text-[#1f5aa8]">
              SOFT<span className="text-[#f48220]">CRAYONS</span>
            </div>
            <span className="pb-0.5 text-[12px] font-semibold text-[#f48220]">15+ years</span>
          </div>
          <nav className="hidden items-center gap-5 text-[13px] font-medium text-[#666] xl:flex">
            <a href="#" className="rounded-full bg-[#1f5aa8] px-4 py-1.5 text-white">
              Home
            </a>
            <button
              type="button"
              onClick={() => setActivePopup("courses")}
              className="hover:text-[#1f5aa8]"
            >
              Courses
            </button>
            {["Placements", "Blogs", "Tutorials", "More"].map((item) => (
              <a key={item} href="#" className="hover:text-[#1f5aa8]">
                {item}
              </a>
            ))}
            <button className="grid h-9 w-9 place-items-center rounded-full border border-[#d9dce2] text-[#6b7280]">
              ⌕
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActivePopup("demo")}
              className="rounded-full bg-gradient-to-r from-[#1658ad] to-[#f48220] px-5 py-2 text-[12px] font-semibold text-white"
            >
              Get a Free Demo
            </button>
            <button className="hidden rounded-full border border-[#d9dce2] px-4 py-2 text-[12px] font-medium text-[#374151] md:block">
              Find Jobs
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1320px] bg-[#f6f7f9] px-6 pb-10 pt-10">
        <div className="grid items-start gap-4 lg:grid-cols-[52%_48%]">
          <div className="pt-6">
          <p className="mb-8 inline-block rounded-full bg-[#fff3e9] px-4 py-1.5 text-[12px] text-[#f48220]">
            New Batch Starting Soon
          </p>
          <h1 className="text-[58px] font-extrabold leading-[1.07] tracking-[-0.02em] text-[#111827]">
            <span className="text-[#1f5aa8]">Learn Skills</span> That
            <br />
            Actually Get You
            <br />
            <span className="text-[#f48220]">Hired!</span>
          </h1>
          <p className="mt-7 max-w-[560px] text-[17px] leading-8 text-[#6b7280]">
            At SoftCrayons, education goes far beyond textbooks and theory. We focus on practical
            learning that equips you with real, job-ready skills.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActivePopup("demo")}
              className="rounded-full bg-[#143f7f] px-7 py-3 text-[14px] font-semibold text-white"
            >
              Book Free Demo Class
            </button>
            <button className="rounded-full border border-[#f48220] px-7 py-3 text-[14px] font-semibold text-slate-700">
              Contact Us
            </button>
          </div>
          <div className="mt-9">
            <p className="mb-3 text-[12px] text-[#7b8390]">Technologies you&apos;ll master</p>
            <div className="flex max-w-[560px] flex-wrap gap-2">
              {["Digital Marketing", "Graphic Designing", "UI/UX", "Java", "GenAI Development", "AWS", "Cloud", "CAD Softwares"].map(
                (tech) => (
                  <span key={tech} className="rounded-lg border border-[#e5e7eb] bg-white px-3 py-1.5 text-[11px] text-[#374151]">
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
          <div className="relative h-[540px]">
            <div className="absolute right-[92px] top-[88px] h-[316px] w-[316px] rounded-full bg-[#76cfff]" />
            <div className="absolute bottom-[54px] right-[76px] h-[74px] w-[390px] rounded-2xl bg-white shadow-sm" />
            <div className="absolute right-[95px] top-[70px] flex h-[430px] w-[380px] items-end justify-center">
              <div className="relative h-[360px] w-[245px] rounded-[130px_130px_40px_40px] bg-[#f3f4f7] shadow-md">
                <div className="absolute left-1/2 top-[38px] h-[92px] w-[92px] -translate-x-1/2 rounded-full bg-[#d7dae0]" />
                <div className="absolute left-1/2 top-[130px] h-[190px] w-[175px] -translate-x-1/2 rounded-[80px_80px_24px_24px] bg-[#dee2e8]" />
                <div className="absolute left-[-26px] top-[160px] h-[22px] w-[84px] rotate-[-18deg] rounded-full bg-[#dee2e8]" />
                <div className="absolute right-[-26px] top-[160px] h-[22px] w-[84px] rotate-[18deg] rounded-full bg-[#dee2e8]" />
              </div>
            </div>
            <div className="absolute right-[42px] top-[248px] w-[215px] rounded-xl border border-[#b7dcff] bg-white px-4 py-3 shadow-sm">
              <p className="text-[24px] font-bold leading-none text-[#111827]">5000+</p>
              <p className="mt-1 text-[14px] font-semibold text-[#1f5aa8]">Happy Student</p>
              <p className="mt-1 text-[11px] text-[#6b7280]">★★★★★ (4.8 Stars)</p>
            </div>
            <div className="absolute bottom-[24px] right-[112px] rounded-xl bg-white px-7 py-3 text-[14px] font-semibold text-[#1f5aa8] shadow-sm">
              ★ 100% Placement Assistance
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-center">
          <div className="h-8 w-4 rounded-full border border-[#cdd3dc]">
            <div className="mx-auto mt-1 h-2 w-1 rounded-full bg-[#95a0ad]" />
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1280px] px-4">
          <h2 className="text-center text-4xl font-extrabold">
            Explore Our Top <span className="text-[#1956a8]">Programs</span>
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3 xl:grid-cols-4">
            {programs.map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setSelectedProgram(item);
                  setActivePopup("courses");
                }}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-[#1956a8] hover:shadow-md"
              >
                <span className="font-medium text-slate-700">{item}</span>
                <span className="rounded-md bg-[#eef4ff] px-2 py-1 text-xs text-[#1956a8]">
                  C{index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-14">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
          {[
            ["10,000+", "Students Trained"],
            ["20+", "Courses Available"],
            ["90%", "Success Rate"],
            ["200+", "Companies Hired"],
          ].map(([count, label]) => (
            <div key={count}>
              <div className="mx-auto mb-3 h-10 w-10 rounded-lg bg-[#fff1e5]" />
              <p className="text-4xl font-extrabold">{count}</p>
              <p className="text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-16">
        <h2 className="text-center text-4xl font-extrabold">
          Students <span className="text-[#f48220]">Placed</span> Successfully
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {placements.map((item) => (
            <article key={item.name} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-full bg-[#143f7f] text-center text-sm leading-10 text-white">
                  {item.name.split(" ")[0][0]}
                </div>
                <span className="rounded-full bg-[#edf4ff] px-3 py-1 text-xs font-semibold text-[#1956a8]">
                  {item.lpa}
                </span>
              </div>
              <p className="mt-3 font-bold">{item.name}</p>
              <p className="text-sm text-slate-500">{item.company}</p>
              <p className="mt-1 text-sm font-medium text-slate-700">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <h2 className="text-5xl font-extrabold">
            Ready to <span className="text-[#f48220]">Level Up</span>
            <br />
            Your Career?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Join thousands of developers who transformed their careers with industry-focused
            curriculum and expert mentorship.
          </p>
          <button className="mt-8 rounded-full bg-[#143f7f] px-8 py-3 font-semibold text-white">
            Start Your Journey
          </button>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-16">
        <div className="mx-auto max-w-[1280px] px-4">
          <h2 className="text-center text-5xl font-extrabold">
            Media <span className="text-[#f48220]">Presence</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {mediaMentions.map((m) => (
              <article key={m} className="rounded-xl border border-[#d8e5f8] bg-white p-6 text-center">
                <div className="mx-auto mb-6 h-10 w-24 rounded bg-[#eef5ff]" />
                <p className="text-base font-semibold text-slate-700">
                  Top 5 insights featured in {m}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fdf1e9] py-16">
        <div className="mx-auto max-w-[1280px] rounded-3xl bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="min-h-[340px] rounded-2xl bg-gradient-to-br from-slate-300 to-slate-200" />
            <div>
              <h3 className="text-4xl font-extrabold text-[#143f7f]">Book Free Demo Class</h3>
              <p className="mt-2 text-slate-600">
                Reach out and let the magic of collaboration illuminate your skies.
              </p>
              <form className="mt-5 grid gap-3">
                {["Last Name", "First Name", "Email", "Phone Number"].map((field) => (
                  <input
                    key={field}
                    placeholder={field}
                    className="h-11 rounded-md border border-[#7ea2d5] px-3 outline-none ring-[#1956a8] focus:ring-2"
                  />
                ))}
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="rounded-md border border-[#7ea2d5] p-3 outline-none ring-[#1956a8] focus:ring-2"
                />
                <button
                  type="button"
                  onClick={() => setActivePopup("demo")}
                  className="rounded-md bg-[#143f7f] py-3 font-semibold text-white"
                >
                  Start Your Journey
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1280px] px-4">
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item} className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-600">{item}</p>
                <p className="mt-4 font-semibold">SoftCrayons Alumni</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="rounded-full border border-[#f48220] px-6 py-2 text-sm font-semibold">
              View All Testimonials
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#174788] py-14 text-white">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-4 lg:grid-cols-[1fr,1.2fr]">
          <div>
            <h3 className="text-4xl font-extrabold">Softcrayons Global Partner&apos;s</h3>
            <ul className="mt-5 space-y-2 text-sm text-blue-100">
              <li>• Options of Classroom/In-house/Online Training</li>
              <li>• Fully Customize Instructor-led training</li>
              <li>• Flexible Schedule Buffer</li>
            </ul>
            <button className="mt-6 rounded-full bg-[#f48220] px-8 py-3 font-semibold">
              Book Free Demo Class
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {["Google Cloud", "AWS", "Microsoft", "Kryterion", "ACT", "ITIL"].map((p) => (
              <div key={p} className="grid h-16 place-items-center rounded bg-white text-sm font-bold text-slate-700">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1280px] px-4">
          <h2 className="text-center text-5xl font-extrabold">
            Knowledge <span className="text-[#f48220]">Hub</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {blogs.map((blog, index) => (
              <article key={`${blog}-${index}`} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="h-36 bg-gradient-to-br from-[#173f7a] to-[#1d8adb]" />
                <div className="p-4">
                  <p className="text-xs text-slate-500">50 min read</p>
                  <h4 className="mt-2 text-lg font-bold">{blog}</h4>
                  <p className="mt-2 text-xs text-slate-500">Ani kumar</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1280px] px-4">
          <h2 className="text-center text-5xl font-extrabold">
            Our Student <span className="text-[#f48220]">Recent Placed</span>
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {successStories.map((name, i) => (
              <article key={name + i} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="h-16 bg-[#1a58a8]" />
                <div className="p-3 text-center">
                  <p className="font-bold">{name}</p>
                  <p className="text-xs text-slate-500">Successfully placed as trainee</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1280px] px-4">
          <h2 className="text-center text-5xl font-extrabold">
            Industry-Ready <span className="text-[#f48220]">Curriculum</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {curriculum.map((item) => (
              <article key={item} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="h-40 bg-gradient-to-br from-[#b5c9e9] to-[#e8f1ff]" />
                <div className="p-4">
                  <p className="text-xs text-slate-500">6 months</p>
                  <h4 className="mt-1 font-bold">{item}</h4>
                  <button className="mt-3 text-sm font-semibold text-[#143f7f]">View Course +</button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="rounded-full bg-[#143f7f] px-8 py-3 font-semibold text-white">
              View all Courses
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6fa] py-16">
        <div className="mx-auto max-w-[1280px] px-4">
          <h2 className="text-center text-5xl font-extrabold">
            Built for Your <span className="text-[#f48220]">Success</span>
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {features.map((item) => (
              <article key={item} className="rounded-xl border border-slate-200 bg-white p-5">
                <h4 className="font-bold text-[#143f7f]">{item}</h4>
                <p className="mt-2 text-sm text-slate-500">Structured support to help you grow faster.</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <div className="rounded-full bg-[#143f7f] p-1">
              {["Testimonials", "Video Reviews", "Audio Reviews"].map((tab) => (
                <button key={tab} className="rounded-full px-4 py-2 text-sm text-white">
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0e1a] py-14 text-slate-300">
        <div className="mx-auto max-w-[1280px] px-6">
          <div>
            <h3 className="border-b border-[#ff8c00] pb-2 text-lg font-bold text-[#ff8c00]">Trending Courses</h3>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {trendingCourseColumns.map((col, i) => (
                <ul key={i} className="space-y-2">
                  {col.map((name) => (
                    <FooterChevronLink key={name}>{name}</FooterChevronLink>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 border-b border-[#ff8c00] pb-2 text-lg font-bold text-[#5db6ff]">
                <span aria-hidden>📍</span>
                Courses in Noida
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {noidaCourseLinks.map((label) => (
                  <a key={label} href="#" className="text-slate-300 transition hover:text-white">
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="border-b border-[#ff8c00] pb-2 text-lg font-bold text-[#c084fc]">Courses in Ghaziabad</h3>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {ghaziabadCourseLinks.map((label) => (
                  <a key={label} href="#" className="text-slate-300 transition hover:text-white">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-10">
            <div className="grid gap-10 md:grid-cols-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-white">FOLLOW US</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    { label: "Facebook", bg: "bg-[#1877f2]" },
                    { label: "Instagram", bg: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]" },
                    { label: "Twitter", bg: "bg-[#e02424]" },
                    { label: "LinkedIn", bg: "bg-[#0a66c2]" },
                    { label: "Pinterest", bg: "bg-[#bd081c]" },
                    { label: "YouTube", bg: "bg-[#ff0000]" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className={`grid h-10 w-10 place-items-center rounded-full text-xs font-bold text-white ${s.bg}`}
                    >
                      {s.label[0]}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-white">FOR NEWSLETTER</h4>
                <div className="mt-4 flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="min-w-0 flex-1 rounded-md border border-white/10 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400"
                  />
                  <button
                    type="button"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded bg-[#ff8c00] text-white"
                    aria-label="Subscribe to newsletter"
                  >
                    →
                  </button>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-white">FOR NOTIFICATIONS</h4>
                <div className="mt-4 flex gap-2">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="min-w-0 flex-1 rounded-md border border-white/10 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400"
                  />
                  <button
                    type="button"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded bg-[#ff8c00] text-white"
                    aria-label="Get notifications"
                  >
                    →
                  </button>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-white">WE ACCEPT ONLINE PAYMENTS</h4>
                <p className="mt-4 text-xs leading-relaxed text-slate-400">
                  PhonePe · GPay · Paytm · Visa · Amex
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-start sm:justify-between">
            <p>
              © 2028{" "}
              <span className="font-semibold text-[#ff8c00]">Softcrayons Tech Solutions</span>. All Rights Reserved.
            </p>
            <p className="max-w-xl text-slate-500">
              All product names, logos, and brands are property of their respective owners. Use of these names does not
              imply endorsement.
            </p>
          </div>
        </div>
      </footer>

      <footer className="border-t border-white/5 bg-[#07132a] py-14 text-slate-300">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 lg:grid-cols-3">
          <div>
            <h4 className="text-2xl font-extrabold">
              Soft<span className="text-[#f48220]">crayons</span>
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Empowering professionals through transformative digital learning experiences and industry-aligned
              training programs.
            </p>
            <h5 className="mt-8 border-b border-[#ff8c00] pb-2 text-sm font-bold text-[#ff8c00]">Contact Information</h5>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2">
                <span className="text-[#5db6ff]" aria-hidden>
                  🏢
                </span>
                <span>C-6 Sector 2, Noida, Uttar Pradesh</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#c084fc]" aria-hidden>
                  🏢
                </span>
                <span>Raj Nagar Extension, Ghaziabad, Uttar Pradesh</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#22c55e]" aria-hidden>
                  📞
                </span>
                <span>+91 8545012345</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#f472b6]" aria-hidden>
                  📞
                </span>
                <span>+91 8545012345</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#38bdf8]" aria-hidden>
                  ✉
                </span>
                <a href="mailto:info@softcrayons.com" className="hover:text-white">
                  info@softcrayons.com
                </a>
              </li>
              <li className="flex gap-2">
                <span className="text-[#a78bfa]" aria-hidden>
                  ✉
                </span>
                <a href="mailto:info@softcrayons.com" className="hover:text-white">
                  info@softcrayons.com
                </a>
              </li>
            </ul>
            <h5 className="mt-8 border-b border-[#ff8c00] pb-2 text-sm font-bold text-[#ff8c00]">Our Branches</h5>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span aria-hidden>🏛</span>
                Noida Branch
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden>🏛</span>
                Ghaziabad Branch
              </li>
            </ul>
          </div>
          <div>
            <h5 className="border-b border-[#ff8c00] pb-2 text-sm font-bold text-[#ff8c00]">Quick Links</h5>
            <ul className="mt-4 space-y-2 text-sm">
              <FooterChevronLink>Home</FooterChevronLink>
              <FooterChevronLink>About Us</FooterChevronLink>
              <li className="text-sm">
                <button
                  type="button"
                  onClick={() => setActivePopup("courses")}
                  className="inline-flex items-baseline gap-1.5 text-left text-slate-300 transition hover:text-white"
                >
                  <span className="font-semibold text-[#ff8c00]">»</span>
                  <span className="underline-offset-2 hover:underline">Courses</span>
                </button>
              </li>
              <FooterChevronLink>Blog</FooterChevronLink>
              <FooterChevronLink>Contact</FooterChevronLink>
              <FooterChevronLink>Placements</FooterChevronLink>
            </ul>
          </div>
          <div>
            <h5 className="border-b border-[#ff8c00] pb-2 text-sm font-bold text-[#ff8c00]">Our Partners</h5>
            <ul className="mt-4 space-y-2">
              {partnerNames.map((name) => (
                <FooterChevronLink key={name}>{name}</FooterChevronLink>
              ))}
            </ul>
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
                        key={item}
                        type="button"
                        onClick={() => setSelectedProgram(item)}
                        className={`flex w-full items-center justify-between rounded-md border px-2.5 py-2 text-left text-[13px] ${
                          selectedProgram === item
                            ? "border-[#1d4f94] bg-[#1d4f94] text-white"
                            : "border-transparent bg-transparent text-[#4b5563]"
                        }`}
                      >
                        <span>{item}</span>
                        <span>›</span>
                      </button>
                    ))}
                  </div>
                </aside>
                <section className="border-r border-[#dbe3ec] bg-white p-4">
                  <p className="text-[11px] text-[#1d4f94]">All Courses of</p>
                  <h2 className="text-[29px] font-extrabold uppercase leading-8 text-[#f48220]">
                    {selectedProgram}
                  </h2>
                  <ul className="mt-5 space-y-3 text-[14px] text-[#4b5563]">
                    <li>○ Advanced Excel Training</li>
                    <li>○ MIS Training</li>
                  </ul>
                </section>
                <aside className="bg-[#f8fafc] p-4">
                  <div className="mb-3 h-28 rounded-lg bg-gradient-to-br from-[#d2def0] to-[#f4f7fb]" />
                  <h4 className="text-[13px] font-semibold text-[#111827]">
                    AI-Driven {selectedProgram} Program
                  </h4>
                  <p className="mt-2 text-[12px] leading-5 text-[#596273]">
                    The AI-Driven Advanced Excel & MIS Program is designed to help professionals
                    master advanced Excel tools and modern reporting techniques.
                  </p>
                </aside>
              </div>
            ) : (
              <div className="grid overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-2">
                <div className="min-h-[460px] bg-gradient-to-br from-[#0e4ca1] via-[#0b73d8] to-[#41b6ff] p-8 text-white">
                  <h2 className="text-6xl font-black leading-tight">
                    LEARN IT
                    <br />
                    SKILLS
                    <br />
                    FOR A
                    <br />
                    FUTURE
                    <br />
                    OF SUCCESS
                  </h2>
                </div>
                <div className="p-8">
                  <h3 className="text-4xl font-extrabold text-[#143f7f]">Book Free Demo Class</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Reach out and let the magic of collaboration illuminate your skies.
                  </p>
                  <form className="mt-5 grid grid-cols-2 gap-3">
                    <input className="h-11 rounded border border-[#8caee0] px-3" placeholder="Last Name" />
                    <input className="h-11 rounded border border-[#8caee0] px-3" placeholder="First Name" />
                    <input className="col-span-2 h-11 rounded border border-[#8caee0] px-3" placeholder="Email" />
                    <input className="col-span-2 h-11 rounded border border-[#8caee0] px-3" placeholder="Phone Number" />
                    <textarea className="col-span-2 rounded border border-[#8caee0] p-3" rows={4} placeholder="Message" />
                    <button className="col-span-2 rounded bg-[#143f7f] py-3 font-semibold text-white" type="button">
                      Start Your Journey
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
