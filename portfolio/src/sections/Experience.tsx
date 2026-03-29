import FadeIn from '../components/FadeIn';
import SectionHeading from '../components/SectionHeading';

const experiences = [
  {
    role: 'Electrical Engineer',
    company: 'NASA L\'SPACE MCA',
    period: 'January 2026 — Present',
    description:
      'Designed, Formulated, and Actualized Conceptual E.P.S. (Electrical Power System) for a Lunar Rover utilizing several tools and techniques.',
    highlights: ['KiCAD', 'Project Management', 'Team Collaboration', 'Siemens NX CAD'],
  },
  {
    role: 'Project Manager',
    company: 'GT Webdev',
    period: 'January 2026 — Present',
    description:
      'Spearheaded Development of a platform for GT students to request referrals for internships from their seniors by leveraging a team of 6 developers.',
    highlights: ['Project Management', 'Team Collaboration', 'React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    role: 'Undergraduate Researcher',
    company: 'Georgia Tech VIP Projects',
    period: 'May 2025 — Present',
    description:
      'Built RAG pipeline and Embedding Model from Scratch for AI MAKERSPACE NEXUS Vertically Integrated Project as well as add features for Flashcard Generation with Aesthetic UI/UX',
    highlights: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'RAG', 'Next.js', 'Tailwind CSS', 'React.js', 'LangChain'],
  },
  {
    role: 'Flight Software Engineer',
    company: 'UGA Small Satellite Research Lab',
    period: 'January 2025 — May 2025',
    description:
      'Contributed towards the Rigourous Testing of the MOCI Satellite\'s Onboard Camera and Radio while occasionally debugging C issues with RTOS',
    highlights: ['C', 'C++', 'Python', 'RTOS', 'Satellite Testing', 'Team Collaboration'],
  },
  {
    role: 'Data Engineer Intern',
    company: 'Primerica',
    period: 'August 2023 — May 2024',
    description:
      'Built data pipelines and ETL processes to extract, transform, and load data from various sources into a centralized data warehouse.',
    highlights: ['Python', 'SQL', 'ETL', 'Data Warehousing', 'Excel', 'Microsoft PowerBI'],
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
                      <p className="font-body text-parchment/75 leading-relaxed text-base mb-4">
                        {exp.description}
                      </p>
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
