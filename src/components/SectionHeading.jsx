import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = false,
  className = ''
}) => {
  return (
    <div
      className={className}
      style={{ marginBottom: '2.5rem', textAlign: centered ? 'center' : 'left' }}
    >
      {badge && (
        <span className="badge-navy mb-3" style={{ border: '1.5px solid #4A69B3' }}>
          {badge}
        </span>
      )}
      <h2
        className="font-display text-rust mb-3"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          lineHeight: '1.1',
          textTransform: 'uppercase'
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="font-editorial text-navy"
          style={{
            fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
            maxWidth: centered ? '700px' : '650px',
            margin: centered ? '0 auto' : '0'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
