"use client"

import Header from "@/components/Header"
import Link from "next/link"

export default function About() {
  const journey = [
    {
      year: "Now",
      title: "Freelance Frontend Developer",
      desc: "Building web and mobile-facing products for clients and self-initiated platforms — React, Next.js, TypeScript, Tailwind.",
    },
    {
      year: "Previously",
      title: "Gigs Tech Solution & Consult",
      desc: "Sharpened core frontend fundamentals and shipped production interfaces as part of a dev team.",
    },
  ]

  const values = [
    {
      title: "Clean, maintainable code",
      desc: "I write components that are easy to read, extend, and hand off — not just code that works today.",
    },
    {
      title: "Design-first thinking",
      desc: "I care about how an interface feels, not just how it functions — spacing, motion, and hierarchy matter.",
    },
    {
      title: "Ownership",
      desc: "Freelancing means wearing every hat — from scoping to shipping — and I take that seriously.",
    },
    {
      title: "Always learning",
      desc: "New tools, new patterns, new frameworks — I stay curious so my work doesn't go stale.",
    },
  ]

  const techStack = [
   "HTML","CSS", "JavaScript","React.js", "Next.js", "TypeScript", "Tailwind CSS",
    "React Native", "Framer Motion", "GSAP", "shadcn/ui",
  ]

  return (
    <div className="overflow-x-hidden">
      {/* ---------------- Header ---------------- */}
      <Header />

      {/* ---------------- Hero ---------------- */}
      <div className="mt-36 px-4 sm:mt-50 sm:px-10 lg:px-40">
        <p className="mb-5 text-xs tracking-widest text-muted uppercase">
          About &bull; Mubarak Abdulsalam
        </p>

        <h1 className="max-w-3xl text-3xl leading-tight sm:text-3xl lg:text-5xl">
          Frontend developer who turns{" "}
          <span className="text-accent">ideas into interfaces.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Hey, I&apos;m Mubarak — a frontend developer with hands-on experience
          across web and mobile, and a solid grip on HTML, CSS, JavaScript,
          React.js, Next.js, and React Native. I like taking a design or an
          idea and turning it into something fast, accessible, and genuinely
          nice to use.
        </p>
      </div>

      {/* ---------------- Journey ---------------- */}
      <div className="mt-16 px-4 sm:mt-50 sm:px-10 lg:px-40">
        <p className="mb-4 text-xs tracking-widest text-muted uppercase">
          Journey
        </p>
        <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
          Where I&apos;ve <span className="text-accent">worked.</span>
        </h2>

        <div className="space-y-4">
          {journey.map((j) => (
            <div
              key={j.title}
              className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8"
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "16px",
                background: "var(--color-surface)",
                padding: "28px",
              }}
            >
              <span className="shrink-0 text-xs font-bold tracking-widest text-accent uppercase sm:w-28">
                {j.year}
              </span>
              <div>
                <h3 className="text-lg font-bold">{j.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {j.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- How I work ---------------- */}
      <div className="mt-16 px-4 sm:mt-20 sm:px-10 lg:px-40">
        <p className="mb-4 text-xs font-bold tracking-widest text-muted uppercase">
          How I work
        </p>
        <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
          What I <span className="text-accent">value.</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "16px",
                background: "var(--color-surface)",
                padding: "28px",
              }}
            >
              <h3 className="text-lg font-bold">{v.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- Tech stack ---------------- */}
      <div className="mt-16 px-4 sm:mt-20 sm:px-10 lg:px-40">
        <p className="mb-4 text-xs font-bold tracking-widest text-muted uppercase">
          Toolbox
        </p>
        <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
          What I <span className="text-accent">build with.</span>
        </h2>

        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm font-medium"
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "999px",
                padding: "10px 18px",
                background: "var(--color-surface)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ---------------- Contact ---------------- */}
      <div className="mt-16 px-4 sm:mt-20 sm:px-10 lg:px-40">
        <div
          className="px-6 text-center sm:px-10"
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "32px",
            background: "var(--color-bg)",
            padding: "60px 20px",
          }}
        >
          <p className="mb-4 text-xs font-bold tracking-widest text-muted uppercase">
            Get in touch
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Got a project? <span className="text-accent">Let&apos;s talk.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted">
            I&apos;m currently available for freelance work — reach out and
            let&apos;s figure out what we can build.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-block font-bold text-white"
            style={{
              background: "var(--color-accent)",
              borderRadius: "999px",
              padding: "14px 28px",
            }}
          >
            Send me a message →
          </Link>
        </div>
      </div>

      {/* ---------------- Footer ---------------- */}
      <p className="py-10 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} Devraq. Designed with intention.
      </p>
    </div>
  )
}