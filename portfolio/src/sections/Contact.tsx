import { useState } from 'react';
import type { FormEvent } from 'react';

import FadeIn from '../components/FadeIn';
import SectionHeading from '../components/SectionHeading';

const socials = [
  { icon: '⌥', label: 'GitHub', href: 'https://github.com/DogeDevYT' },
  { icon: '∈', label: 'LinkedIn', href: 'https://linkedin.com/in/raghav-vikramprabhu/' },
  { icon: '✉', label: 'Email', href: 'mailto:raghav.vikramprabhu@gmail.com' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.querySelector('#name') as HTMLInputElement).value;
    const email = (form.querySelector('#email') as HTMLInputElement).value;
    const message = (form.querySelector('#message') as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);

    window.location.href = `mailto:raghav.vikramprabhu@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad parchment-texture">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionHeading
            title="The Summons"
            subtitle="— Send Word —"
            light
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Quote + Socials */}
          <FadeIn direction="left" delay={0.2}>
            <div className="space-y-8">
              <div className="border-l-2 border-brown/30 pl-6">
                <p className="font-accent italic text-2xl text-brown/80 leading-relaxed">
                  "Great things are not done by impulse, but by a series of small things brought together."
                </p>
                <p className="font-body text-stone mt-3 text-sm tracking-widest">— Vincent van Gogh</p>
              </div>

              <p className="font-body text-lg text-brown/70 leading-relaxed">
                Whether you have a commission in mind, a collaboration to propose, or maybe even a job offer 👀 — I welcome your message.
              </p>

              {/* Socials */}
              <div className="space-y-3">
                {socials.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full"
                      style={{
                        border: '1px solid rgba(59,35,20,0.3)',
                        background: 'rgba(59,35,20,0.05)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <span className="text-aged group-hover:text-brown transition-colors text-base">{icon}</span>
                    </div>
                    <span className="font-display text-xs tracking-[0.2em] uppercase text-stone group-hover:text-brown transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="right" delay={0.3}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16 gap-6">
                <div className="wax-seal scale-150">
                  <span className="font-display text-parchment text-2xl">✦</span>
                </div>
                <h3 className="font-display text-2xl text-brown tracking-widest">Message Dispatched</h3>
                <p className="font-body italic text-stone">Your scroll has been received. I shall reply with haste.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Leonardo da Vinci' },
                  { id: 'email', label: 'Your Email', type: 'email', placeholder: 'leo@renaissance.it' },
                ].map((field) => (
                  <div key={field.id} className="space-y-1.5">
                    <label htmlFor={field.id} className="font-display text-xs tracking-[0.2em] uppercase text-stone">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      className="w-full font-body text-base text-brown placeholder-stone/50 px-4 py-3 outline-none transition-all duration-300"
                      style={{
                        background: 'rgba(245,236,215,0.6)',
                        border: '1px solid rgba(59,35,20,0.25)',
                        borderRadius: 0,
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(139,58,58,0.6)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(59,35,20,0.25)'; }}
                    />
                  </div>
                ))}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-display text-xs tracking-[0.2em] uppercase text-stone">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your commission or inquiry..."
                    required
                    className="w-full font-body text-base text-brown placeholder-stone/50 px-4 py-3 outline-none resize-none transition-all duration-300"
                    style={{
                      background: 'rgba(245,236,215,0.6)',
                      border: '1px solid rgba(59,35,20,0.25)',
                      borderRadius: 0,
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(139,58,58,0.6)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(59,35,20,0.25)'; }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-display text-xs tracking-[0.25em] uppercase py-4 text-parchment transition-all duration-300 hover:shadow-[0_4px_20px_rgba(139,58,58,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #8B3A3A, #5A1A1A)', border: '1px solid rgba(139,58,58,0.4)' }}
                >
                  Dispatch Scroll ✦
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-brown/20 text-center">
        <p className="font-display text-xs tracking-widest uppercase text-stone/60">
          © {new Date().getFullYear()} &nbsp;·&nbsp; Raghav Vikramprabhu &nbsp;·&nbsp; Crafted with devotion
        </p>
      </div>
    </section>
  );
}
