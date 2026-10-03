import React from 'react';
import { useLogo } from '../context/LogoContext';

interface LogoPlaceholderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /**
   * Optional manual override. If not passed, it automatically uses the logo uploaded via the Admin Portal or saved in localStorage.
   */
  customLogoSrc?: string;
}

export const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({
  className = '',
  size = 'md',
  customLogoSrc,
}) => {
  const { logoSrc: globalUploadedLogo } = useLogo();
  const activeLogo = customLogoSrc || globalUploadedLogo;

  // If a real logo asset is uploaded or provided, render the real logo image
  if (activeLogo) {
    const sizeClasses =
      size === 'sm'
        ? 'max-h-7 max-w-[120px]'
        : size === 'lg'
        ? 'max-h-12 max-w-[200px]'
        : 'max-h-9 max-w-[160px]';

    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src={activeLogo}
          alt="Davax Systems Logo"
          className={`h-auto object-contain transition-opacity duration-200 ${sizeClasses}`}
        />
      </div>
    );
  }

  // Clean, high-precision typographic logo placeholder
  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none group focus:outline-none ${className}`}
      aria-label="Davax Systems Logo"
    >
      {/* Precision Geometric Monogram Accent */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 shadow-inner group-hover:border-cyan-500/50 transition-colors">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-cyan-400 group-hover:scale-105 transition-transform"
        >
          {/* Stylized D / System node icon */}
          <path d="M4 4h7a8 8 0 0 1 0 16H4V4z" />
          <path d="M12 9v6" className="text-cyan-200 stroke-cyan-200" />
        </svg>
        <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-75" />
      </div>

      {/* Two-Line Typographic Wordmark */}
      <div className="flex flex-col text-left leading-none justify-center">
        <span
          className={`font-extrabold tracking-[0.22em] text-slate-100 uppercase transition-colors group-hover:text-white ${
            size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'
          }`}
        >
          DAVAX
        </span>
        <span
          className={`font-semibold tracking-[0.32em] text-cyan-400/90 uppercase mt-0.5 ${
            size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]'
          }`}
        >
          SYSTEMS
        </span>
      </div>
    </div>
  );
};
