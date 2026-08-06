"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import { SiGit, SiNextdotjs, SiPandas, SiPostgresql, SiPython, SiReact } from "@icons-pack/react-simple-icons";
import Link from "next/link";

const roles = [
  "Data Science",
  "Data Analytics",
  "Data Engineering",
  "Artificial Intelligence",
  "Business Intelligence",
  "Python Developer",
];

const technologies = [
  { label: "Python", icon: SiPython, color: "#3776AB" },
  { label: "SQL", icon: SiPostgresql, color: "#4169E1" },
  { label: "Pandas", icon: SiPandas, color: "#150458" },
  { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { label: "React", icon: SiReact, color: "#61DAFB" },
  { label: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { label: "Git", icon: SiGit, color: "#F05032" },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-black px-6 pb-16 pt-24 text-white sm:px-10 lg:px-16" id="about">
      <div aria-hidden="true" className="hero-scene pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-haze hero-haze-one" />
        <div className="hero-haze hero-haze-two" />
        <div className="hero-orb">
          <div className="hero-orb-core" />
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-orbit hero-orbit-three" />
          <div className="hero-grid" />
        </div>
        <div className="hero-vignette" />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <motion.div
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-xs font-medium text-zinc-300 shadow-[0_0_24px_rgb(59_130_246_/_0.08)] backdrop-blur-md"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        >
          <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgb(52_211_153_/_0.8)]" />
          Disponível para estágio
        </motion.div>

        <motion.p
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-blue-300/80"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          transition={{ delay: 0.2, duration: 0.65, ease: "easeOut" }}
        >
          Olá, eu sou
        </motion.p>

        <motion.h1
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          className="text-5xl font-semibold tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          transition={{ delay: 0.25, duration: 0.75, ease: "easeOut" }}
        >
          Rafael Correa
        </motion.h1>

        <motion.div
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          className="mt-6 max-w-3xl"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          transition={{ delay: 0.35, duration: 0.75, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-medium tracking-[-0.04em] text-zinc-100 sm:text-4xl">
            Data Science &amp; Artificial Intelligence Student
          </h2>
          <div className="hero-role-mask mt-3 h-9 overflow-hidden text-lg text-blue-200 sm:text-xl" aria-live="polite">
            <motion.div
              animate={prefersReducedMotion ? undefined : { y: [0, -36 * (roles.length - 1)] }}
              className="flex flex-col"
              transition={prefersReducedMotion ? undefined : { delay: 1, duration: roles.length * 1.8, ease: "linear", repeat: Infinity, repeatDelay: 0.8 }}
            >
              {[...roles, roles[0]].map((role, index) => (
                <span className="flex h-9 items-center justify-center" key={`${role}-${index}`}>
                  {role}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
          transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
        >
          Transformando dados em soluções através de Python, SQL e Inteligência Artificial. Atualmente desenvolvendo aplicações focadas em análise de dados, automação, visualização e engenharia de dados.
        </motion.p>

        <motion.div
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
          transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
        >
          <Link className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300" href="#projects">
            Ver projetos
            <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:rotate-[-20deg]" />
          </Link>
          <a className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300" download href="/curriculo-rafael-correa-soares-nogueira.pdf">
            Download CV
            <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          className="mt-16 w-full max-w-4xl border-t border-white/10 pt-5"
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="hero-marquee overflow-hidden">
            <div className="hero-marquee-track flex w-max items-center gap-4 text-sm text-zinc-400">
              {[...technologies, ...technologies].map(({ label, icon: Icon, color }, index) => (
                <span className="flex items-center gap-4 whitespace-nowrap" key={`${label}-${index}`}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-sm">
                    <Icon aria-hidden="true" color={color} className="size-4" title={`${label} logo`} />
                    {label}
                  </span>
                  <span className="size-1 rounded-full bg-blue-400/40" />
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          className="mt-10 flex flex-col items-center gap-2 text-zinc-500"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.24em]">Continue rolando</span>
          <ArrowDownRight aria-hidden="true" className="size-4 rotate-45" />
        </motion.div>
      </div>
    </section>
  );
}






