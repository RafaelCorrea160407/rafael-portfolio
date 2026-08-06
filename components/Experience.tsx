'use client';

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, Check, Code2, GitBranch, UsersRound } from 'lucide-react';
import { SiGithub, SiNextdotjs, SiReact, SiTailwindcss } from '@icons-pack/react-simple-icons';
import type { ComponentType } from 'react';

const activities = [
  { label: 'Desenvolvimento Front-end de ERP', icon: Code2 },
  { label: 'React', icon: SiReact },
  { label: 'Next.js', icon: SiNextdotjs },
  { label: 'Tailwind CSS', icon: SiTailwindcss },
  { label: 'Scrum', icon: GitBranch },
  { label: 'Levantamento de requisitos', icon: BriefcaseBusiness },
  { label: 'Git', icon: GitBranch },
  { label: 'GitHub', icon: SiGithub },
  { label: 'Trabalho em equipe', icon: UsersRound },
];

const learnings = ['Desenvolvimento em equipe', 'Versionamento com Git', 'Desenvolvimento Front-end', 'Comunicação com clientes', 'Metodologias Ágeis'];

const metrics: { label: string; value: string; icon: ComponentType<{ className?: string }> }[] = [
  { label: 'Período', value: '2025 — Atual', icon: BriefcaseBusiness },
  { label: 'Foco', value: 'ERP + Front-end', icon: Code2 },
  { label: 'Método', value: 'Scrum', icon: GitBranch },
];

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [3, -3]), { stiffness: 180, damping: 24 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-3, 3]), { stiffness: 180, damping: 24 });

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
    <section className="experience-section" id="experience">
      <div className="experience-shell">
        <motion.div
          className="experience-header"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="section-kicker"><BriefcaseBusiness className="size-3.5" /> Professional path</p>
            <h2>Experiência<span>.</span></h2>
          </div>
          <p>Minha experiência profissional até o momento.</p>
        </motion.div>

        <motion.article
          className="experience-card"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 32 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ type: 'spring', stiffness: 78, damping: 18 }}
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <div className="experience-card-glow" />
          <div className="experience-card-main">
            <div className="experience-card-topline">
              <span className="experience-index">01 / NOW</span>
              <span className="experience-current"><span /> Atualmente</span>
            </div>

            <div className="experience-heading">
              <div>
                <p className="experience-company">IBMEC Jr. Soluções</p>
                <h3>Desenvolvedor de Software</h3>
              </div>
              <ArrowUpRight className="experience-arrow" aria-hidden="true" />
            </div>

            <p className="experience-description">Atuo no desenvolvimento de soluções em equipe utilizando metodologias ágeis, participando do levantamento de requisitos, desenvolvimento Front-end de um ERP e colaboração com diferentes áreas durante todo o processo de desenvolvimento.</p>

            <div className="experience-activities">
              {activities.map(({ label, icon: Icon }, index) => (
                <motion.span key={label} initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }} whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.035 }}>
                  <Icon aria-hidden="true" className="size-3.5" />{label}
                </motion.span>
              ))}
            </div>
          </div>

          <aside className="experience-aside">
            <div className="experience-aside-title"><span>Context</span><span className="experience-pulse" /></div>
            <div className="experience-metrics">
              {metrics.map(({ label, value, icon: Icon }) => <div className="experience-metric" key={label}><Icon aria-hidden="true" className="size-4" /><div><small>{label}</small><strong>{value}</strong></div></div>)}
            </div>
            <div className="experience-learnings"><p>Aprendizados</p>{learnings.map((learning) => <span key={learning}><Check aria-hidden="true" className="size-3" />{learning}</span>)}</div>
          </aside>
        </motion.article>
      </div>
    </section>
  );
}

