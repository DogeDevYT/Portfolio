import FadeIn from '../components/FadeIn';
import SectionHeading from '../components/SectionHeading';

const skillGroups = [
  {
    title: 'The Arcane Arts',
    subtitle: 'Frontend',
    icon: '🖋',
    skills: [
      'React / Next.js',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
    ],
  },
  {
    title: 'The Forge',
    subtitle: 'Backend',
    icon: '⚗',
    skills: [
      'Node.js / Express',
      'Python / Django',
      'PostgreSQL',
      'REST',
      'RAG',
      'LangChain',
      'AI / LLMs',
    ],
  },
  {
    title: 'The Cartographer',
    subtitle: 'Tools & DevOps',
    icon: '🗺',
    skills: [
      'Git / GitHub',
      'Docker',
      'AWS / Vercel / GCP / Supabase / Azure',
      'CI/CD',
    ],
  },
  {
    title: 'The Artificer',
    subtitle: 'Hardware & Embedded',
    icon: '⚙',
    skills: [
      'Verilog / SystemVerilog',
      'Breadboarding / Circuits',
      'Embedded C / C++',
      'Arduino / RTOS',
      'KiCAD / PCB Design',
    ],
  },
];

function SkillItem({ name }: { name: string }) {
  return (
    <div className="flex items-start gap-3 border-b border-gold/10 pb-3 last:border-b-0 last:pb-0">
      <span className="mt-1 text-gold/70 text-[0.65rem]" aria-hidden="true">✦</span>
      <span className="font-body text-base leading-snug text-parchment/90">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad dark-texture">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading
            title="The Grimoire"
            subtitle="— Skills & Disciplines —"
          />
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-8">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.15} direction="up" className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] max-w-sm">
              <div className="gilded-card rounded-sm p-8 h-full transition-all duration-500 hover:-translate-y-1 group">
                {/* Card header */}
                <div className="text-center mb-8">
                  <div className="text-4xl mb-3">{group.icon}</div>
                  <p className="font-accent italic text-stone-light text-xs tracking-widest mb-1">{group.subtitle}</p>
                  <h3 className="font-display font-semibold text-xl text-gold group-hover:text-gold-light transition-colors tracking-widest">
                    {group.title}
                  </h3>
                  {/* ornament */}
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.5))' }} />
                    <span className="text-gold/50 text-xs">✦</span>
                    <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.5))' }} />
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <SkillItem key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
