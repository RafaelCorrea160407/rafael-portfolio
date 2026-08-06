'use client';

import Image from 'next/image';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, CircleSlash2, ExternalLink, Sparkles } from 'lucide-react';
import { SiDjango, SiGithub, SiPandas, SiPython, SiReact, SiStreamlit } from '@icons-pack/react-simple-icons';
import type { ComponentType } from 'react';

interface Project {
  title: string;
  eyebrow: string;
  description: string;
  year: string;
  status: 'Em destaque' | 'Concluído' | 'Em evolução';
  repo: string;
  demo?: string;
  accent: string;
  visual: string;
  image?: string;
  featured?: boolean;
  technologies: { label: string; icon?: ComponentType<{ className?: string; color?: string; title?: string }> }[];
}

const projects: Project[] = [
  {
    title: 'Financial Insights',
    eyebrow: 'Data analytics platform',
    description: 'Plataforma de análise financeira que transforma dados brutos em indicadores, visualizações e insights acionáveis para apoiar decisões com mais clareza.',
    year: '2025',
    status: 'Em destaque',
    repo: 'https://github.com/RafaelCorrea160407/Financial_Insights',
    accent: '#5b8cff',
    visual: 'financial',
    image: '/financial-insights.gif',
    featured: true,
    technologies: [
      { label: 'Python', icon: SiPython },
      { label: 'Pandas', icon: SiPandas },
      { label: 'Plotly' },
      { label: 'Streamlit', icon: SiStreamlit },
      { label: 'OpenAI' },
    ],
  },
  {
    title: 'Meu Negócio',
    eyebrow: 'Retail management system',
    description: 'Sistema de gestão para mercadinho com foco em controle operacional, cadastro de produtos e uma visão mais eficiente do negócio no dia a dia.',
    year: '2024',
    status: 'Concluído',
    repo: 'https://github.com/KaueFSS/MeuNegocio_App',
    accent: '#fbbf24',
    visual: 'retail',
    image: '/mercadinho.png',
    technologies: [{ label: 'Python', icon: SiPython }, { label: 'Django', icon: SiDjango }, { label: 'SQLite' }],
  },  {
    title: 'Validador de Estágio',
    eyebrow: 'Academic workflow',
    description: 'Sistema para validar estágios com mais organização e rastreabilidade, conectando regras do processo a uma experiência digital objetiva.',
    year: '2024',
    status: 'Em evolução',
    repo: 'https://github.com/Projetos-de-Extensao/Validador_Estagio',
    accent: '#34d399',
    visual: 'validator',
    image: '/api-estagio.png',
    technologies: [{ label: 'Python', icon: SiPython }, { label: 'Django', icon: SiDjango }, { label: 'DRF' }, { label: 'SQLite' }, { label: 'React', icon: SiReact }],
  },
  {
    title: 'Organizador Inteligente',
    eyebrow: 'Automation utility',
    description: 'Ferramenta para organizar arquivos automaticamente, reduzindo tarefas repetitivas e tornando o fluxo de trabalho mais simples e previsível.',
    year: '2025',
    status: 'Concluído',
    repo: 'https://github.com/RafaelCorrea160407/Organizador_Arquivos',
    accent: '#a78bfa',
    visual: 'organizer',
    image: '/organizador-arquivos.png',
    technologies: [{ label: 'Python', icon: SiPython }, { label: 'Pathlib' }, { label: 'JSON' }, { label: 'Tkinter' }],
  },

];

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual project-visual-${project.visual} ${project.image ? "project-visual-with-image" : ""}`} style={{ '--project-accent': project.accent } as React.CSSProperties}>
      {project.image ? <Image className="project-image" src={project.image} alt={`Prévia do projeto ${project.title}`} fill unoptimized priority={project.featured} /> : null}
      <div className="project-visual-noise" />
      {!project.image && project.visual === 'financial' && (
        <>
          <div className="financial-orbit" />
          <div className="financial-chart"><span /><span /><span /><span /><span /><span /></div>
          <div className="financial-metric"><small>NET GROWTH</small><strong>+24.8%</strong><span>↑ 8.2% this month</span></div>
          <div className="financial-dot financial-dot-one" /><div className="financial-dot financial-dot-two" />
        </>
      )}
      {!project.image && project.visual === 'organizer' && (
        <div className="folder-stack"><div className="folder folder-back" /><div className="folder folder-middle" /><div className="folder folder-front"><span>Organizador</span><b>24 files</b></div></div>
      )}
      {!project.image && project.visual === 'validator' && (
        <div className="validation-window"><div className="window-top"><i /><i /><i /></div><div className="validation-row"><span>Documentação</span><CheckCircle2 /></div><div className="validation-row"><span>Horas cumpridas</span><CheckCircle2 /></div><div className="validation-row muted"><span>Assinatura</span><CircleSlash2 /></div></div>
      )}
      {!project.image && project.visual === 'retail' && (
        <div className="retail-dashboard"><div className="retail-value"><small>VENDAS HOJE</small><strong>R$ 8.420</strong></div><div className="retail-bars"><i /><i /><i /><i /><i /><i /></div><div className="retail-pill">+18,4%</div></div>
      )}
      <span className="project-visual-label">CASE STUDY / {project.year}</span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [5, -5]), { stiffness: 220, damping: 24 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), { stiffness: 220, damping: 24 });

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (prefersReducedMotion || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.article
      className={`project-card ${project.featured ? 'project-card-featured' : ''}`}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 34 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ type: 'spring', stiffness: 82, damping: 18, delay: index * 0.08 }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="project-card-inner">
        <ProjectVisual project={project} />
        <div className="project-card-content">
          <div className="project-card-heading">
            <div><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3></div>
            <span className="project-year">{project.year}</span>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="project-meta">
            <div className="project-status"><span className={`status-dot ${project.status === 'Em destaque' ? 'status-dot-featured' : ''}`} />{project.status}</div>
            <div className="project-actions">
              <a className="project-action-button" href={project.repo} target="_blank" rel="noreferrer">
                <SiGithub aria-hidden="true" className="size-3.5" title="GitHub" />
                <span>GitHub</span>
                <ArrowUpRight aria-hidden="true" className="size-3" />
              </a>
              <a className={`project-action-button ${!project.demo ? 'project-action-disabled' : ''}`} href={project.demo ?? '#'} target={project.demo ? '_blank' : undefined} rel={project.demo ? 'noreferrer' : undefined} aria-disabled={!project.demo} onClick={!project.demo ? (event) => event.preventDefault() : undefined}>
                <ExternalLink aria-hidden="true" className="size-3.5" />
                <span>{project.demo ? 'Live Demo' : 'Live Demo · em breve'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="projects-section" id="projects">
      <div className="projects-shell">
        <motion.div className="projects-header" initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }} whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }}>
          <div><p className="section-kicker"><Sparkles className="size-3.5" /> Selected work</p><h2>Projetos<span>.</span></h2></div>
          <p>Alguns dos projetos que desenvolvi ao longo da minha trajetória.</p>
        </motion.div>
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
        <div className="projects-footer-note"><span>Construído com curiosidade, dados e intenção.</span><ArrowUpRight className="size-4" /></div>
      </div>
    </section>
  );
}














