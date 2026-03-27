import { ExternalLink } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SectionHeading from '../components/SectionHeading';

const projects = [
  {
    title: 'Suppstack',
    subtitle: 'Full Stack Cross-Platform Flutter App',
    description:
      'Supplement Advisor is a mobile application that helps users make informed, science-backed decisions about their supplement stack. Users can search for supplements, view detailed information about their ingredients and potential benefits, and receive personalized recommendations based on their health goals and preferences.',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Microsoft Azure', 'Supabase', 'Google Cloud Platform', 'PostgreSQL'],
    demo: 'https://github.com/DogeDevYT/suppstack',
    repo: 'https://github.com/DogeDevYT/suppstack',
    accent: '#8B3A3A',
  },
  {
    title: 'Hardware Pomodoro Timer',
    subtitle: 'Hardware Embedded Project',
    description:
      'A hardware-based Pomodoro timer built with an Arduino Uno, featuring a 4-digit, 7-segment display, tactile buttons, and an LED indicator for work/break cycles. The device allows users to set custom work and break durations and tracks time using the Arduino\'s internal clock.',
    tags: ['Arduino', 'C++', 'Embedded Systems', 'Electronics'],
    demo: 'https://www.youtube.com/watch?v=LmLpWAS6bqo',
    repo: 'https://github.com/DogeDevYT/ECE1100Project',
    accent: '#C9A84C',
  },
  {
    title: 'DinosaurEDA',
    subtitle: 'Cloud-Based HDL Editor with AI-assisted Design',
    description:
      'A web-based HDL (Hardware Description Language) editor that allows users to write, simulate, and analyze Verilog code in the browser. It features a Monaco editor with HDL syntax highlighting, an integrated YoSys compiler, and AI-powered code generation and optimization suggestions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'SystemVerilog', 'YoSys', 'Monaco Editor'],
    demo: 'https://github.com/DogeDevYT/DinosaurEDA',
    repo: 'https://github.com/DogeDevYT/DinosaurEDA',
    accent: '#4C7A8B',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad parchment-texture">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading
            title="The Gallery"
            subtitle="— Select Works —"
            light
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.15}>
              <article
                className="group relative flex flex-col h-full rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(170deg, #3B2314 0%, #1C1209 100%)',
                  border: '1px solid rgba(201,168,76,0.25)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                }}
              >
                {/* Top accent stripe */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(to right, transparent, ${project.accent}, transparent)` }} />

                {/* Card body */}
                <div className="p-8 flex flex-col flex-1 gap-4">
                  <div>
                    <p className="font-accent italic text-stone-light text-xs tracking-widest mb-1">{project.subtitle}</p>
                    <h3 className="font-display font-semibold text-2xl text-gold group-hover:text-gold-light transition-colors tracking-wide">
                      {project.title}
                    </h3>
                  </div>
                  {/* Ornament */}
                  <div className="h-px w-full" style={{ background: 'linear-gradient(to right, rgba(201,168,76,0.3), transparent)' }} />
                  <p className="font-body text-parchment/75 leading-relaxed text-base flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-display text-xs tracking-widest uppercase px-3 py-1"
                        style={{
                          border: '1px solid rgba(201,168,76,0.25)',
                          color: 'rgba(201,168,76,0.8)',
                          background: 'rgba(201,168,76,0.05)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6 pt-4 border-t border-gold/10">
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 font-display text-xs tracking-widest uppercase text-gold/70 hover:text-gold transition-colors"
                    >
                      <ExternalLink size={14} />
                      View Work
                    </a>
                    <a
                      href={project.repo}
                      className="flex items-center gap-2 font-display text-xs tracking-widest uppercase text-stone-light hover:text-gold transition-colors"
                    >
                      <span className="text-xs">⌥</span>
                      Codex
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
