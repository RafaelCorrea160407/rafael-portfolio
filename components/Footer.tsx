'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUp, Mail } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { createTimeline } from 'animejs';
import { motion, useReducedMotion } from 'framer-motion';

const links = [
  { label: 'GitHub', href: 'https://github.com/RafaelCorrea160407', external: true, icon: SiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', external: true, icon: null },
  { label: 'Email', href: 'mailto:rafaelcsn123@gmail.com', external: false, icon: Mail },
  { label: 'Currículo', href: '/curriculo-rafael-correa-soares-nogueira.pdf', external: false, icon: null, download: true },
];

const technologies = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Anime.js'];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !footerRef.current || !lineRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const line = lineRef.current;
      if (!line) return;
      createTimeline({ defaults: { ease: 'outExpo' } }).add(line, { scaleX: [0, 1], duration: 900 });
      observer.disconnect();
    }, { threshold: 0.25 });
    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="site-footer" id="footer" ref={footerRef}>
      <div className="site-footer-shell">
        <span className="site-footer-line" ref={lineRef} />
        <motion.div
          className="site-footer-content"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.35, duration: 0.65 }}
        >
          <div className="site-footer-brand">
            <div className="site-footer-identity">
              <Image src="/rafael-correa-avatar.png" alt="Rafael Correa" width={32} height={32} />
              <strong>Rafael Correa</strong>
            </div>
            <p>Building data-driven solutions with Python, SQL &amp; AI.</p>
          </div>

          <nav className="site-footer-links" aria-label="Links do rodapé">
            {links.map(({ label, href, external, icon: Icon, download }) => (
              <a href={href} key={label} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} download={download}>
                {Icon ? <Icon aria-hidden="true" className="size-3.5" /> : null}
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </motion.div>

        <motion.div
          className="site-footer-bottom"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.48, duration: 0.65 }}
        >
          <div className="site-footer-stack">
            <span>Tecnologias utilizadas neste portfólio</span>
            <div>{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          </div>
          <button className="site-footer-top" type="button" onClick={scrollToTop} aria-label="Voltar ao topo">
            <span>Back to Top</span>
            <ArrowUp aria-hidden="true" className="size-3.5" />
          </button>
        </motion.div>

        <div className="site-footer-legal">
          <span>© 2026 Rafael Correa.</span>
          <span>Built with passion.</span>
        </div>
      </div>
    </footer>
  );
}

