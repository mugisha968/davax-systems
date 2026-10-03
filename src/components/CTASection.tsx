import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface CTASectionProps {
  onStartProject: () => void;
  onTalkToUs: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartProject, onTalkToUs }) => {
  return (
    <section className="py-20 md:py-28 border-b border-slate-900 bg-tech-grid relative overflow-hidden">
      {/* Subtle radial ambient highlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
          Ready to Deploy
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight text-balance">
          Have a Problem Worth Solving?
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
          Let’s turn your idea, workflow, or business challenge into a working digital system.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded-lg transition-colors shadow-lg shadow-cyan-950/40 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={onTalkToUs}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            <MessageSquare className="w-4 h-4 text-slate-400" aria-hidden="true" />
            <span>Talk to Us</span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500 font-mono">
          <span>Direct engineering engagement</span>
          <span>·</span>
          <span>No sales pressure</span>
          <span>·</span>
          <span>Transparent scoping</span>
        </div>
      </div>
    </section>
  );
};
