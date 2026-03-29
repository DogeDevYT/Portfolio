import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dark-texture vignette"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, #8B3A3A, transparent)' }}
        />
      </div>

      {/* Corner ornaments */}
      <svg className="absolute top-8 left-8 text-gold opacity-30 w-20 h-20" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M2 2 L30 2 L2 30 Z" />
        <path d="M2 2 L20 2 M2 2 L2 20" />
        <circle cx="32" cy="10" r="3" />
        <circle cx="10" cy="32" r="3" />
      </svg>
      <svg className="absolute top-8 right-8 text-gold opacity-30 w-20 h-20" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1" style={{ transform: 'scaleX(-1)' }}>
        <path d="M2 2 L30 2 L2 30 Z" />
        <path d="M2 2 L20 2 M2 2 L2 20" />
        <circle cx="32" cy="10" r="3" />
        <circle cx="10" cy="32" r="3" />
      </svg>
      <svg className="absolute bottom-8 left-8 text-gold opacity-30 w-20 h-20" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1" style={{ transform: 'scaleY(-1)' }}>
        <path d="M2 2 L30 2 L2 30 Z" />
        <path d="M2 2 L20 2 M2 2 L2 20" />
        <circle cx="32" cy="10" r="3" />
        <circle cx="10" cy="32" r="3" />
      </svg>
      <svg className="absolute bottom-8 right-8 text-gold opacity-30 w-20 h-20" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1" style={{ transform: 'scale(-1,-1)' }}>
        <path d="M2 2 L30 2 L2 30 Z" />
        <path d="M2 2 L20 2 M2 2 L2 20" />
        <circle cx="32" cy="10" r="3" />
        <circle cx="10" cy="32" r="3" />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full">
        {/* Pre-title */}
        <motion.p
          className="font-accent italic text-stone-light tracking-[0.3em] text-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ✦ &nbsp; Artisan of the Digital Age &nbsp; ✦
        </motion.p>

        {/* Main Name */}
        <motion.h1
          className="font-display font-black text-3xl md:text-6xl lg:text-7xl tracking-wider md:tracking-widest text-gold text-glow uppercase mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Raghav Vikramprabhu
        </motion.h1>

        {/* Ornament */}
        <motion.div
          className="flex items-center justify-center gap-4 my-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="h-px w-16 sm:w-32 md:w-56 flex-shrink" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.7))' }} />
          <span className="text-gold text-2xl flex-shrink-0">❧</span>
          <div className="h-px w-16 sm:w-32 md:w-56 flex-shrink" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.7))' }} />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="font-body text-xl md:text-2xl text-parchment/80 tracking-widest uppercase">
            Builder &nbsp;·&nbsp; Engineer &nbsp;·&nbsp; Lifelong Learner
          </p>
          <p className="font-accent italic text-gold/70 text-base tracking-[0.2em]">
            Computer Engineering Undergraduate &nbsp;@&nbsp; Georgia Tech
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a
            href="#projects"
            className="font-display text-xs tracking-[0.25em] uppercase px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-ink transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="font-display text-xs tracking-[0.25em] uppercase px-8 py-4 text-stone-light hover:text-gold transition-colors duration-300"
          >
            Summon Me ↓
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-display text-xs tracking-widest uppercase opacity-60">Descend</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
