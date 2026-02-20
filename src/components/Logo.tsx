import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="bracketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="mGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="slashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Opening bracket < */}
      <text
        x="8"
        y="78"
        fontSize="52"
        fontWeight="700"
        fontFamily="'JetBrains Mono', 'Fira Code', monospace"
        fill="url(#bracketGradient)"
        filter="url(#glow)"
      >
        &lt;
      </text>

      {/* Letter M */}
      <text
        x="35"
        y="80"
        fontSize="56"
        fontWeight="800"
        fontFamily="'Inter', 'Segoe UI', sans-serif"
        fill="url(#mGradient)"
        filter="url(#glow)"
      >
        M
      </text>

      {/* Closing slash and bracket /> */}
      <text
        x="74"
        y="78"
        fontSize="52"
        fontWeight="700"
        fontFamily="'JetBrains Mono', 'Fira Code', monospace"
        fill="url(#slashGradient)"
        filter="url(#glow)"
      >
        /&gt;
      </text>
    </svg>
  );
};

export default Logo;
