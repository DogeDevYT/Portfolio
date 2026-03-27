import FadeIn from '../components/FadeIn';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-pad parchment-texture">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading
            title="The Man"
            subtitle="— About Me —"
            light
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Portrait / Avatar */}
          <FadeIn direction="left" delay={0.2}>
            <div className="flex justify-center">
              <div className="relative">
                {/* Outer gilded frame */}
                <div
                  className="w-72 h-72 md:w-80 md:h-80 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #C9A84C 0%, #9A7A2E 50%, #C9A84C 100%)',
                    padding: '3px',
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #3B2314, #1C1209)' }}>
                    <img src="/Raghav.jpg" className="w-full h-full object-cover" alt="Portrait" />
                  </div>
                </div>
                {/* Decorative ring */}
                <div
                  className="absolute -inset-4 rounded-full pointer-events-none"
                  style={{
                    border: '1px solid rgba(201,168,76,0.2)',
                    animation: 'spin 30s linear infinite',
                  }}
                />
                {/* Wax seal badge */}
                <div className="absolute -bottom-4 -right-4 wax-seal">
                  <span className="font-display font-bold text-parchment text-lg">✦</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Bio Text */}
          <FadeIn direction="right" delay={0.3}>
            <div className="space-y-6">
              <p className="font-body text-xl text-brown leading-relaxed drop-cap">
                Hailing from the crossroads of art and engineering, I craft quality experiences
                with the care of a Renaissance master — each line of code deliberate, each
                circuit imbued with purpose and beauty.
              </p>
              <p className="font-body text-lg text-brown/80 leading-relaxed">
                Hello Everyone! I'm a Computer Engineering Undergraduate at Georgia Tech with a passion for learning and building cool stuff.
                I always love a good challenge and would love to connect with like minded people.
              </p>
              <p className="font-accent italic text-brown/70 text-base leading-relaxed">
                "In every craft, the greatest art lies not in the tool, but in the mind that
                guides it."
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-brown/20">
                {[
                  { num: '2+', label: 'Years of Craft' },
                  { num: '10+', label: 'Works Completed' },
                  { num: '∞', label: 'Curiosity' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display font-bold text-3xl text-aged">{stat.num}</div>
                    <div className="font-body text-xs text-stone tracking-widest uppercase mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
