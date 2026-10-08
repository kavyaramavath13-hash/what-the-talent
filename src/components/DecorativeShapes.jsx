import React from 'react';

export const DoodleStar = ({ size = 32, color = '#4A69B3', style = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block', ...style }}
    className={className}
    aria-hidden="true"
  >
    <path
      d="M20 2L24.5 13.8L37 15.2L27.6 23.5L30.4 36L20 29.5L9.6 36L12.4 23.5L3 15.2L15.5 13.8L20 2Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DoodleSquiggle = ({ color = '#4A69B3', style = {}, className = '' }) => (
  <svg
    width="60"
    height="30"
    viewBox="0 0 60 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block', ...style }}
    className={className}
    aria-hidden="true"
  >
    <path
      d="M4 15 Q 15 2, 26 15 T 48 15 T 56 12"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const FluidSplashBottom = ({ color = '#4A69B3' }) => (
  <div
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '90px',
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 1
    }}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      <path
        d="M0 72C120 30 210 110 360 88C520 64 560 18 720 42C900 70 980 120 1140 92C1280 68 1360 20 1440 48V120H0V72Z"
        fill={color}
      />
    </svg>
  </div>
);

export const TapeClip = ({ style = {} }) => (
  <div
    style={{
      position: 'absolute',
      top: '-10px',
      left: '50%',
      transform: 'translateX(-50%) rotate(-2deg)',
      width: '70px',
      height: '24px',
      backgroundColor: 'rgba(255, 248, 205, 0.85)',
      border: '1px solid rgba(74, 105, 179, 0.4)',
      boxShadow: '1px 2px 4px rgba(0,0,0,0.1)',
      zIndex: 5,
      ...style
    }}
    aria-hidden="true"
  />
);

export const PaintBlobLeft = ({ className = '' }) => (
  <svg
    className={`paint-blob animate-float ${className}`}
    viewBox="0 0 280 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      top: '-40px',
      left: '-70px',
      width: 'min(42vw, 280px)',
      height: 'auto',
      opacity: 0.95
    }}
  >
    <path
      d="M40 120C18 70 48 18 110 12C172 6 214 42 232 88C250 134 238 168 198 196C158 224 96 248 58 214C20 180 62 170 40 120Z"
      fill="#4A69B3"
    />
    <circle cx="210" cy="48" r="14" fill="#4A69B3" />
    <circle cx="236" cy="92" r="7" fill="#4A69B3" />
  </svg>
);

export const PaintBlobRight = ({ className = '' }) => (
  <svg
    className={`paint-blob animate-float ${className}`}
    viewBox="0 0 320 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      bottom: '-20px',
      right: '-80px',
      width: 'min(48vw, 320px)',
      height: 'auto',
      animationDelay: '-3s'
    }}
  >
    <path
      d="M80 40C140 8 210 20 250 70C290 120 310 180 270 220C230 260 150 272 100 240C50 208 18 150 32 100C46 50 40 62 80 40Z"
      fill="#4A69B3"
    />
    <circle cx="70" cy="220" r="16" fill="#4A69B3" />
    <circle cx="48" cy="188" r="8" fill="#4A69B3" />
  </svg>
);

export const CornerDecorationLeft = ({ className = '' }) => (
  <svg
    className={className}
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ position: 'absolute', pointerEvents: 'none', zIndex: 0 }}
  >
    <path
      d="M10 80C10 35.8172 45.8172 0 90 0C134.183 0 160 30 140 70C120 110 100 160 45 150C-10 140 10 124.183 10 80Z"
      fill="#4A69B3"
      fillOpacity="0.18"
    />
    <circle cx="45" cy="45" r="14" fill="#BA3801" fillOpacity="0.25" />
  </svg>
);

export const CornerDecorationRight = ({ className = '' }) => (
  <svg
    className={className}
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ position: 'absolute', pointerEvents: 'none', zIndex: 0 }}
  >
    <path
      d="M160 30C180 80 140 140 90 170C40 200 10 150 20 100C30 50 140 -20 160 30Z"
      fill="#4A69B3"
      fillOpacity="0.2"
    />
  </svg>
);
