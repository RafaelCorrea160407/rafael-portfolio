'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Link2, Mail, MapPin } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { createTimeline, stagger } from 'animejs';

const contacts = [
  { label: 'Email', value: 'rafaelcsn123@gmail.com', href: 'mailto:rafaelcsn123@gmail.com', icon: Mail },
  { label: 'GitHub', value: 'RafaelCorrea160407', href: 'https://github.com/RafaelCorrea160407', icon: SiGithub },
  { label: 'LinkedIn', value: 'Rafael Correa', href: 'https://www.linkedin.com/', icon: Link2 },
  { label: 'Localização', value: 'Brasil', href: '#contact', icon: MapPin },
];

const headline = "Let's build something amazing together.";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current || !lineRef.current || !headlineRef.current) return;
    const section = sectionRef.current;
    const line = lineRef.current;
    const headlineLetters = headlineRef.current.querySelectorAll('.contact-letter');
    let hasPlayed = false;

    const play = () => {
      if (hasPlayed) return;
      hasPlayed = true;
      createTimeline({ defaults: { ease: 'outExpo' } })
        .add(line, { scaleX: [0, 1], duration: 850 })
        .add(headlineLetters, { opacity: [0, 1], translateY: ['0.45em', '0em'], delay: stagger(34), duration: 700 }, '-=420');
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        play();
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(section);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!glowRef.current || prefersReducedMotion) return;
    const glow = glowRef.current;
    const handlePointerMove = (event: PointerEvent) => {
      const rect = glow.parentElement?.getBoundingClientRect();
      if (!rect) return;
      glow.style.transform = `translate3d(${event.clientX - rect.left - 180}px, ${event.clientY - rect.top - 180}px, 0)`;
    };
    const parent = glow.parentElement;
    parent?.addEventListener('pointermove', handlePointerMove);
    return () => parent?.removeEventListener('pointermove', handlePointerMove);
  }, [prefersReducedMotion]);

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-glow" ref={glowRef} />
      <div className="contact-shell">
        <motion.div className="contact-header" initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }} whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }}>
          <p className="section-kicker"><Mail className="size-3.5" /> Get in touch</p>
          <h2>Contato<span>.</span></h2>
          <span className="contact-line" ref={lineRef} />
        </motion.div>

        <motion.div className="contact-intro" initial={prefersReducedMotion ? undefined : { opacity: 0, y: 22 }} whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: 0.12, duration: 0.7 }}>
          <h3 ref={headlineRef}>{headline.split('').map((letter, index) => <span className="contact-letter" key={`${letter}-${index}`}>{letter === ' ' ? '\u00a0' : letter}</span>)}</h3>
          <p>Estou em busca de oportunidades de estágio em Ciência de Dados, Engenharia de Dados, Business Intelligence e Inteligência Artificial. Se você acredita que posso agregar valor ao seu time, vamos conversar.</p>
        </motion.div>

        <div className="contact-grid">{contacts.map(({ label, value, href, icon: Icon }, index) => <motion.a className="contact-card" href={href} key={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }} whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: 0.18 + index * 0.07, type: 'spring', stiffness: 90, damping: 18 }}>
            <Icon aria-hidden="true" className="size-5" /><span><small>{label}</small><strong>{value}</strong></span><ArrowDownRight aria-hidden="true" className="contact-card-arrow size-4" />
          </motion.a>)}</div>

        <motion.div className="contact-actions" initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }} whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: 0.46, duration: 0.65 }}>
          <a className="contact-primary" href="mailto:rafaelcsn123@gmail.com">Entrar em contato <ArrowDownRight className="size-4" /></a>
          <a className="contact-secondary" href="/curriculo-rafael-correa-soares-nogueira.pdf" download>Download CV <ArrowDownRight className="size-4" /></a>
        </motion.div>
      </div>
    </section>
  );
}




