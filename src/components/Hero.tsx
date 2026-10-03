import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { HeroArchitectureVisual } from './HeroArchitectureVisual';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreServices }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-900 bg-tech-grid"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Tagline kicker - clean unboxed typography, no pill badges */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 font-mono">
              <span>{COMPANY_INFO.name}</span>
              <span aria-hidden="true">/</span>
              <span className="text-slate-400 font-normal">Engineering Digital Infrastructure</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1] text-balance">
              Digital Systems Built for Real Businesses.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl text-balance">
              {COMPANY_INFO.supportingText}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded-lg transition-colors shadow-sm hover:shadow-cyan-500/20 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowDown className="w-4 h-4 text-slate-400" aria-hidden="true" />
              </button>
            </div>

            {/* Micro Credibility Notes */}
            <div className="pt-4 border-t border-slate-900 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Websites &amp; Platforms</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Custom Internal Systems</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Zero Generic Templates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Software Architecture Component */}
          <div className="lg:col-span-6 w-full">
            <HeroArchitectureVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
