import { ExternalLink } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SectionHeading from '../components/SectionHeading';

const projects = [
  {
    title: 'Jump Trading Sports Prediction Bot',
    subtitle: 'Autonomous Sports Forecasting',
    period: 'June 2026 - July 2026',
    highlights: [
      'Architected an autonomous 2026 World Cup forecasting pipeline combining an LLM with live match data.',
      'Optimized predictions for Relative Brier Points, reaching a 36% contrarian win rate and a 248 RBP single-match gain.',
      'Maintained 100% forecast coverage with GitHub Actions and chunked batch POST requests.',
    ],
    tags: ['Python', 'LLMs', 'GitHub Actions', 'REST APIs'],
    accent: '#8B3A3A',
  },
  {
    title: 'TradeShark',
    subtitle: 'FPGA Options Pricing System',
    period: 'May 2026 - August 2026',
    highlights: [
      'Built a deployment-ready Black-Scholes options pricing system using live Alpaca market data.',
      'Ported the system to a DE10-Standard HPS and connected it to the Cyclone V FPGA over its high-speed onboard bus.',
      'Led the SystemVerilog coprocessor implementation using reusable IP cores.',
    ],
    tags: ['SystemVerilog', 'Rust', 'FPGA', 'Black-Scholes'],
    accent: '#C9A84C',
  },
  {
    title: 'DinosaurEDA',
    subtitle: 'Cloud HDL IDE with AI Assistance',
    period: 'November 2025 - January 2026',
    highlights: [
      'Developed a full-stack, cloud-based HDL IDE with AI-assisted development workflows.',
      'Containerized an on-demand Yosys SystemVerilog compiler for a modular execution model.',
      'Built an xterm.js and Monaco-inspired frontend, backed by Node.js and Gemini Vertex AI on Google Cloud.',
    ],
    tags: ['SystemVerilog', 'Node.js', 'Docker', 'Yosys', 'Gemini Vertex AI'],
    demo: 'https://github.com/DogeDevYT/DinosaurEDA',
    repo: 'https://github.com/DogeDevYT/DinosaurEDA',
    accent: '#4C7A8B',
  },
  {
    title: 'IMC Prosperity 4 Trading Algorithm',
    subtitle: 'Quantitative Market-Making Strategy',
    period: 'January 2026 - May 2026',
    highlights: [
      'Developed a Python algorithm that qualified for the Prosperity 4 finals with more than 120k PnL.',
      'Combined mean reversion, EMA fair value, inventory shading, and micro-price signals to generate over 250k in fictional profit.',
      'Led a five-person team to a top-3,000 global finish.',
    ],
    tags: ['Python', 'pandas', 'Jupyter', 'Quantitative Finance'],
    accent: '#6E4F7A',
  },
  {
    title: 'Hardware Pomodoro Timer',
    subtitle: 'Embedded Productivity Timer',
    period: 'September 2025 - December 2025',
    highlights: [
      'Built a physical timer around an Arduino Uno and a four-digit, seven-segment display.',
      'Used a non-blocking architecture for smooth countdown updates and a flashing end-of-session alarm.',
      'Wrote the C++ firmware to coordinate hardware across all 14 digital pins.',
    ],
    tags: ['Arduino', 'C++', 'Embedded Systems', 'Electronics'],
    demo: 'https://www.youtube.com/watch?v=LmLpWAS6bqo',
    repo: 'https://github.com/DogeDevYT/ECE1100Project',
    accent: '#A46A3F',
  },
  {
    title: 'GTVC-Slashy Market Sizing',
    subtitle: 'Startup Market Research & Diligence',
    period: 'March 2026 - April 2026',
    highlights: [
      'Partnered with Create-X startup Slashy on market research and enterprise planning.',
      'Analyzed macroeconomic reports to assess market conditions and advise the founding team on potential risks.',
      'Met weekly with the founders to perform startup due diligence.',
    ],
    tags: ['Valuation', 'Due Diligence', 'Market Research', 'Financial Modeling'],
    accent: '#557A5A',
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

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                    <p className="font-display text-[0.65rem] tracking-[0.18em] uppercase text-gold/60 mb-2">{project.period}</p>
                    <p className="font-accent italic text-stone-light text-sm tracking-wide mb-1">{project.subtitle}</p>
                    <h3 className="font-display font-semibold text-2xl text-gold group-hover:text-gold-light transition-colors tracking-wide">
                      {project.title}
                    </h3>
                  </div>
                  {/* Ornament */}
                  <div className="h-px w-full" style={{ background: 'linear-gradient(to right, rgba(201,168,76,0.3), transparent)' }} />
                  <ul className="font-body text-parchment/75 leading-relaxed text-base flex-1 space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="text-gold/60 mt-0.5" aria-hidden="true">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

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

                  {/* Links are shown only when a verified destination is available. */}
                  {(project.demo || project.repo) && (
                    <div className="flex items-center gap-6 pt-4 border-t border-gold/10">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 font-display text-xs tracking-widest uppercase text-gold/70 hover:text-gold transition-colors"
                        >
                          <ExternalLink size={14} />
                          View Work
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 font-display text-xs tracking-widest uppercase text-stone-light hover:text-gold transition-colors"
                        >
                          <span className="text-xs">⌥</span>
                          Source
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
