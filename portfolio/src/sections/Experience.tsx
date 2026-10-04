import FadeIn from '../components/FadeIn';
import SectionHeading from '../components/SectionHeading';

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Vanguard',
    location: 'Charlotte, NC',
    period: 'September 2026 — Present',
    details: [
      'Restyled the score-over-time graph in an internal code-review tool to align with Vanguard\'s design system and improve usability, contributing to a 10% decrease in ticket volume.',
      'Updated an AWS SES Lambda to resolve team ownership from repository pull requests and notify the appropriate team when a pull request targets a repository failing code-quality checks.',
    ],
    highlights: ['AWS Lambda', 'AWS SES', 'Data Visualization', 'Developer Tooling'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Georgia Tech Open Source Projects Office',
    location: 'Atlanta, GA',
    period: 'May 2026 — September 2026',
    details: [
      'Developed a basis-translation algorithm for QWERTY, a quantum programming language written in Rust and C++, enabling variable quantum-state changes while handling all input cases with 90% less interpreter code.',
      'Collaborated with a PhD student and a graduate student to repair MLIR basis-vector lowering for the abstract syntax tree and basis translation in the interpreter.',
      'Fixed evaluation wrapping in the interpreter, bringing unit and integration test pass rates to 100%.',
    ],
    highlights: ['Rust', 'C++', 'MLIR', 'Compiler Design', 'Quantum Computing'],
  },
  {
    role: 'Project Manager',
    company: 'GT Webdev',
    location: 'Atlanta, GA',
    period: 'January 2026 — Present',
    details: [
      'Lead a six-developer team building a platform that helps Georgia Tech students request internship referrals from upperclassmen.',
    ],
    highlights: ['Project Management', 'React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    role: 'Electrical Engineer',
    company: 'NASA L\'SPACE MCA',
    location: 'Tempe, AZ',
    period: 'January 2026 — April 2026',
    details: [
      'Collaborated with a 20-person team to simulate a NASA mission from conception through Preliminary Design Review.',
      'Researched more than 10 past NASA missions and led development of a lunar-rover electrical power system in KiCad.',
    ],
    highlights: ['KiCad', 'Electrical Power Systems', 'Mission Design', 'Team Collaboration'],
  },
  {
    role: 'Undergraduate Researcher',
    company: 'Georgia Tech VIP Projects — AI Makerspace Nexus',
    location: 'Atlanta, GA',
    period: 'August 2025 — April 2026',
    details: [
      'Added five REST endpoints to an Ollama backend for features including flashcard generation and concept-map creation.',
      'Built a vector-embedding pipeline for local Mistral LLM retrieval over more than 50 GB of Georgia Tech course data.',
      'Deployed the Study Buddy workload to a PACE-ICE cluster with NVIDIA H200 HGX GPUs, improving execution speed by 10x.',
    ],
    highlights: ['Python', 'REST APIs', 'RAG', 'Ollama', 'Mistral', 'HPC'],
  },
  {
    role: 'Flight Software Engineer',
    company: 'University of Georgia Small Satellite Research Lab',
    location: 'Athens, GA',
    period: 'February 2025 — May 2025',
    details: [
      'Reviewed 20 files of performance-critical C code for a real-time embedded system.',
      'Documented five system-test results and wrote or edited more than 10 Bash and Python test scripts.',
    ],
    highlights: ['C', 'Python', 'Bash', 'RTOS', 'Embedded Systems'],
  },
  {
    role: 'Data Engineer Intern',
    company: 'Primerica',
    location: 'Duluth, GA',
    period: 'August 2023 — May 2024',
    details: [
      'Developed Python metadata automation across nine databases, improving large-scale data-processing efficiency by 20%.',
      'Containerized the tool with Docker and deployed it as a cloud-native microservice through a Jenkins CI/CD pipeline.',
      'Automated SQL-script generation to streamline database updates and reduce manual effort.',
    ],
    highlights: ['Python', 'SQL', 'Docker', 'Jenkins', 'CI/CD'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad dark-texture">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionHeading
            title="The Chronicle"
            subtitle="— Professional Journey —"
          />
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Center spine */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.4) 10%, rgba(201,168,76,0.4) 90%, transparent)' }}
          />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.2}>
                <div className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot on the spine */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-2 border-gold bg-ink"
                      style={{ boxShadow: '0 0 12px rgba(201,168,76,0.5)' }}
                    />
                  </div>

                  {/* Date (alternating side) */}
                  <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block">
                      <p className="font-display text-xs tracking-[0.2em] uppercase text-gold/70 mb-1">{exp.period}</p>
                      <p className="font-body text-stone-light text-sm tracking-wide">{exp.company}</p>
                      <p className="font-accent italic text-stone-light/70 text-xs tracking-wide mt-1">{exp.location}</p>
                    </div>
                  </div>

                  {/* Spacer for center dot */}
                  <div className="hidden md:block w-10 flex-shrink-0" />

                  {/* Content card */}
                  <div className="md:w-[45%]">
                    <div className="gilded-card rounded-sm p-6 transition-all duration-500 hover:-translate-y-1">
                      <h3 className="font-display font-semibold text-lg text-gold tracking-wide mb-3">
                        {exp.role}
                      </h3>
                      <ul className="font-body text-parchment/75 leading-relaxed text-base mb-5 space-y-2">
                        {exp.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <span className="text-gold/60 mt-0.5" aria-hidden="true">›</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((h) => (
                          <span
                            key={h}
                            className="font-display text-xs tracking-widest uppercase px-2 py-0.5 text-gold/60"
                            style={{ border: '1px solid rgba(201,168,76,0.2)' }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
