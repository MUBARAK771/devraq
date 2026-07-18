"use client"

import Header from "@/components/Header"
import { User } from "lucide-react"
import Link from "next/link"


export default function Home() {
  const stats = [
    { value: "2+", label: "Years experience" },
    { value: "30+", label: "Projects done" },
    { value: "5+", label: "Happy clients" },
  ]

  const projects = [
    { tag: "Fintech", title: "Budgetflex", desc: "Redesigned the onboarding flow for 30M+ users, reducing drop-off rate by 22%." },
    { tag: "Dashboard", title: "Pay Control Admin", desc: "A data-rich dashboard that surfaces key insights without overwhelming the user." },
    { tag: "E commerce", title: "MarketPro", desc: "An e-commerce platform designed to provide a seamless shopping experience for users." },
  ]

  const skills = [
    { title: "UX Research", desc: "User interviews, usability testing, competitive analysis, and translating data into actionable design decisions." },
    { title: "UI Design", desc: "Crafting high-fidelity interfaces with pixel-perfect attention to typography, spacing, and visual hierarchy." },
    { title: "Mobile Design", desc: "Native iOS and Android design patterns, gesture-first interactions, and thumb-zone optimisation." },
    { title: "Prototyping", desc: "Interactive Figma prototypes, micro-interaction design, and developer-ready design systems." },
  ]

  return (
    <div className="overflow-x-hidden">
      {/* ---------------- Header ---------------- */}
      <Header/>

      {/* ---------------- Hero ---------------- */}
      <div className="px-4 sm:px-10 lg:px-40 mt-36 sm:mt-50">
        <p className="text-xs tracking-widest text-muted uppercase mb-5">
          Mubarak Abdulsalam &bull; Based in Nigeria
        </p>

        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
          <h1 className="text-3xl sm:text-3xl lg:text-5xl leading-tight max-w-2xl">
            I&apos;m a Frontend Developer focused on mobile and web apps, previously {" "}
            <span className="text-accent">
             at Gigs tech solution and consult.
            </span>
          </h1>

          <div
            className="text-sm font-medium flex items-center gap-2 shrink-0"
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "999px",
              padding: "10px 16px",
              background: "var(--color-surface)",
            }}
          >
            Available for work
            <span className="h-2 w-2 rounded-full bg-green-500" />
          </div>
        </div>
      </div>

      {/* ---------------- About ---------------- */}
      <div className="px-4 sm:px-10 lg:px-40 mt-16 sm:mt-50 flex flex-col md:flex-row items-center justify-between gap-12">
        <div>
          <p className="text-xs  tracking-widest text-muted uppercase mb-5">About</p>
          <div className="mt-4 flex w-full flex-col items-start space-y-4 md:mt-0 md:w-[82%]">
            <h4 className="text-start text-xl md:text-2xl">
              I am a pioneering software development firm that
              specializes in frontend development to create
              state-of-the-art tools and solutions.
            </h4>
            <h4 className="text-start text-xl md:text-2xl">
              With a commitment to innovation and quality, I excel in
              developing custom chatbots, AI-driven analytics platforms, and
              specialized software solutions.
            </h4>
            <h4 className="text-start text-xl md:text-2xl">
              Our offerings are meticulously designed to cater to the unique
              requirements of diverse sectors such as healthcare, law, banking,
              and real estate.
            </h4>
          </div>

          <div className="flex gap-8 sm:gap-12 mt-10 flex-wrap">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-accent">{s.value}</p>
                <p className="text-xs font-medium text-muted uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex items-center justify-center shrink-0 w-full max-w-xs md:max-w-none md:w-80 aspect-square"
          style={{
            borderRadius: "24px",
            border: "1px solid var(--color-border)",
            background: "linear-gradient(135deg, var(--color-surface), var(--color-bg))",
          }}
        >
          <User className="h-24 w-24 rounded-full bg-accent/20 text-accent/50 p-5" />
        </div>
      </div>

      {/* ---------------- Work ---------------- */}
      <div className="px-4 mt-20  sm:px-10 lg:px-40 mt-16 sm:mt-50">
        <p className="text-xs  tracking-widest text-muted uppercase mb-4">Selected work</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          Projects that <span className="text-accent">matter.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "16px",
                overflow: "hidden",
                background: "var(--color-surface)",
              }}
            >
              <div
                className="h-40"
                style={{ background: "url(/budgetflex.png)",backgroundPosition:"center",backgroundSize:"cover" }}
              />
              <div className="p-6">
                <span
                  className="text-[11px] font-bold uppercase text-accent"
                  style={{ background: "var(--color-accent-soft)", borderRadius: "999px", padding: "4px 10px" }}
                >
                  {p.tag}
                </span>
                <h3 className="text-lg font-bold mt-4">{p.title}</h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">{p.desc}</p>
                <Link href="" className="inline-block text-sm font-bold text-accent mt-5">
                  View Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- Skills ---------------- */}
      <div className="px-4 sm:px-10 lg:px-40 mt-16 sm:mt-20">
        <p className="text-xs font-bold tracking-widest text-muted uppercase mb-4">Expertise</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          What I <span className="text-accent">bring.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((s) => (
            <div
              key={s.title}
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "16px",
                background: "var(--color-surface)",
                padding: "28px",
              }}
            >
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="text-sm text-muted mt-2 leading-relaxed max-w-md">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- Contact ---------------- */}
      <div className="px-4 sm:px-10 lg:px-40 mt-16 sm:mt-20">
        <div
          className="text-center px-6 sm:px-10"
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "32px",
            background: "var(--color-bg)",
            padding: "60px 20px",
          }}
        >
          <p className="text-xs font-bold tracking-widest text-muted uppercase mb-4">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Let&apos;s build something <span className="text-accent">great.</span>
          </h2>
          <p className="text-muted max-w-md mx-auto mt-5">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>

          <Link
            href=""
            className="inline-block text-white font-bold mt-8"
            style={{ background: "var(--color-accent)", borderRadius: "999px", padding: "14px 28px" }}
          >
            Send me a message →
          </Link>

          <div className="flex gap-4 justify-center mt-9">
            <a href="" className="text-ink/80 hover:text-accent">LinkedIn</a>
            <a href="" className="text-ink/80 hover:text-accent">X</a>
            <a href="" className="text-ink/80 hover:text-accent">Dribbble</a>
          </div>
        </div>
      </div>

      {/* ---------------- Footer ---------------- */}
      <p className="text-center text-xs text-muted py-10">
        &copy; {new Date().getFullYear()} Devraq. Designed with intention.
      </p>
    </div>
  )
}