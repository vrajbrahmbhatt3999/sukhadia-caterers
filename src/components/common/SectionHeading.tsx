import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignStyles[align]} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[1px] bg-gold" />
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
            {eyebrow}
          </span>
          {align === 'center' && <span className="w-8 h-[1px] bg-gold" />}
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight ${
          isDark ? 'text-ivory' : 'text-forest-900'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed font-light ${
            isDark ? 'text-ivory/80' : 'text-charcoal-muted'
          } max-w-2xl text-balance`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
