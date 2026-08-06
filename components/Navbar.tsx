"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useReducedMotion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState, type SVGProps } from "react";

function GithubLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedinLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.604 0 4.267 2.372 4.267 5.456v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.558V8.999H3.555v11.453Z" />
    </svg>
  );
}
const navigationLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/RafaelCorrea160407", icon: GithubLogo },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rafaelcorreasoaresnogueira/?isSelfProfile=true", icon: LinkedinLogo },
  { label: "Currículo", href: "/curriculo-rafael-correa-soares-nogueira.pdf", icon: FileText },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
  });
  useEffect(() => {
    const sections = navigationLinks
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) setActiveSection(`#${visibleSection.target.id}`);
      },
      { rootMargin: "-30% 0px -55%", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);

    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      animate={
        prefersReducedMotion
          ? undefined
          : {
              paddingTop: isScrolled ? 12 : 20,
              paddingBottom: isScrolled ? 12 : 20,
            }
      }
      className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6"
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                maxWidth: isScrolled ? 920 : 1280,
                borderRadius: isScrolled ? 999 : 24,
              }
        }
        className={`mx-auto flex h-14 items-center border px-2.5 transition-colors sm:px-4 ${
          isScrolled
            ? "border-white/10 bg-zinc-950/70 shadow-[0_12px_40px_rgb(0_0_0_/_0.16)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Link
          aria-label="Ir para o início"
          className="group flex shrink-0 items-center gap-2.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          href="#top"
          onClick={closeMenu}
        >
          <Image
            alt="Rafael Correa"
            className="size-11 rounded-full object-cover object-[center_30%] shadow-[0_0_0_1px_rgb(255_255_255_/_0.14),0_0_22px_rgb(99_102_241_/_0.2)] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_0_1px_rgb(255_255_255_/_0.16),0_0_20px_rgb(59_130_246_/_0.28)]"
            height={44}
            priority
            src="/rafael-correa-avatar.png"
            width={44}
          />
          <span className="hidden text-base font-semibold tracking-[-0.01em] text-white sm:inline">Rafael Correa</span>
        </Link>

        <nav aria-label="Navegação principal" className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="flex items-center gap-1">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  aria-current={activeSection === link.href ? "page" : undefined}
                  className={`group relative rounded-full px-3.5 py-2 text-[15px] font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-white/70 ${
                    activeSection === link.href ? "text-zinc-950" : "text-zinc-400 hover:text-white"
                  }`}
                  href={link.href}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 rounded-full bg-white transition-transform duration-300 ease-out ${
                      activeSection === link.href ? "scale-100" : "scale-0 group-hover:scale-100"
                    }`}
                  />
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden items-center gap-0.5 md:flex">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              aria-label={label}
              className="grid size-10 place-items-center rounded-full text-zinc-500 outline-none transition duration-300 hover:scale-105 hover:bg-white/[0.08] hover:text-white focus-visible:ring-2 focus-visible:ring-white/70"
              href={href}
              key={label}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </Link>
          ))}
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="ml-auto grid size-10 place-items-center rounded-full text-zinc-200 outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/70 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 -z-10 bg-black/50 backdrop-blur-sm md:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-3 max-w-[920px] rounded-3xl border border-white/10 bg-zinc-950/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden"
            exit={{ opacity: 0, y: -12 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <ul className="grid gap-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className="block rounded-2xl px-4 py-3 text-base text-zinc-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    href={link.href}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex border-t border-white/10 pt-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  aria-label={label}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl py-3 text-sm text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  href={href}
                  key={label}
                  onClick={closeMenu}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}















