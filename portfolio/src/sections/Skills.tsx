import FadeIn from '../components/FadeIn';
import SectionHeading from '../components/SectionHeading';

const skillGroups = [
  {
    title: 'The Arcane Arts',
    subtitle: 'Frontend',
    icon: '🖋',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    title: 'The Forge',
    subtitle: 'Backend',
    icon: '⚗',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'Python / Django', level: 75 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'REST', level: 80 },
      { name: 'RAG', level: 70 },
      { name: 'LangChain', level: 70 },
      { name: 'AI/LLMs', level: 95 },
    ],
  },
  {
    title: 'The Cartographer',
    subtitle: 'Tools & DevOps',
    icon: '🗺',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS / Vercel / GCP / Supabase / Azure', level: 72 },
      { name: 'CI/CD', level: 68 },
    ],
  },
  {
    title: 'The Artificer',
    subtitle: 'Hardware & Embedded',
    icon: '⚙',
    skills: [
      { name: 'Verilog / SystemVerilog', level: 75 },
      { name: 'Breadboarding / Circuits', level: 80 },
      { name: 'Embedded C / C++', level: 72 },
      { name: 'Arduino / RTOS', level: 70 },
      { name: 'KiCAD / PCB Design', level: 65 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-body text-sm text-parchment/90">{name}</span>
        <span className="font-display text-xs text-gold/70">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-brown/30 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${level}%`,
            background: 'linear-gradient(to right, #9A7A2E, #C9A84C, #E8C97A)',
          }}
        />
      </div>
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

                {/* Skill bars */}
                <div className="space-y-5">
                  {group.skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
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
