interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
  const titleColor = light ? 'text-brown' : 'text-gold';
  const subtitleColor = light ? 'text-stone' : 'text-stone-light';
  const lineColor = light ? 'rgba(59,35,20,0.3)' : 'rgba(201,168,76,0.4)';
  const ornamentColor = light ? 'text-brown' : 'text-gold';

  return (
    <div className="text-center mb-16">
      <p className={`font-accent italic text-sm tracking-widest mb-3 ${subtitleColor}`}>
        {subtitle || '— ✦ —'}
      </p>
      <h2 className={`font-display font-bold text-4xl md:text-5xl tracking-widest uppercase ${titleColor} text-glow`}>
        {title}
      </h2>
      {/* Ornamental rule */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="h-px w-24 md:w-40" style={{ background: `linear-gradient(to right, transparent, ${lineColor})` }} />
        <span className={`${ornamentColor} text-xl`}>❧</span>
        <div className="h-px w-24 md:w-40" style={{ background: `linear-gradient(to left, transparent, ${lineColor})` }} />
      </div>
    </div>
  );
}
