import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { CheckCircle2, ChevronRight, ArrowRight, Shield, Sparkles } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section className="py-20 md:py-28 border-b border-slate-900 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            Development Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight text-balance">
            From Idea to Working System
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed text-balance">
            A disciplined, transparent engineering methodology designed to mitigate risk, eliminate
            assumptions, and deliver dependable software on schedule.
          </p>
        </div>

        {/* Interactive Step Navigator Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`relative p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? 'bg-slate-900 border-cyan-500/80 shadow-md shadow-cyan-950/40'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-cyan-400' : 'text-slate-500'
                    }`}
                  >
                    {step.number}
                  </span>
                  {isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : isActive ? (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                  )}
                </div>
                <div
                  className={`text-sm font-semibold truncate ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Showcase */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 font-mono text-xs font-bold">
                  Phase {activeStep.number}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Focus: {activeStep.focusArea}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                {activeStep.title} — {activeStep.headline}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Deliverables &amp; Artifacts
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {activeStep.deliverables.map((deliv) => (
                    <div
                      key={deliv}
                      className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-start gap-2"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-medium">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Architecture Indicator */}
            <div className="lg:col-span-5 bg-slate-950/90 rounded-xl border border-slate-800 p-5 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                <span>Phase Progress Monitor</span>
                <span className="text-cyan-400">
                  Step {activeStepIndex + 1} of {PROCESS_STEPS.length}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Phase Completion</span>
                  <span className="text-slate-200 font-bold">
                    {Math.round(((activeStepIndex + 1) / PROCESS_STEPS.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-cyan-400 h-full transition-all duration-300"
                    style={{ width: `${((activeStepIndex + 1) / PROCESS_STEPS.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-2 text-[11px]">
                <div className="flex items-center gap-2 text-slate-300">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Quality Invariant: Zero Hand-Waved Code</span>
                </div>
                <p className="text-slate-400 leading-normal font-sans">
                  Every deliverable is reviewed directly with your team. We only transition to the next
                  phase once functionality and business logic are fully verified.
                </p>
              </div>

              {/* Next/Prev Navigation Buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed text-xs transition-colors"
                >
                  Previous Phase
                </button>
                <button
                  type="button"
                  disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                  onClick={() =>
                    setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))
                  }
                  className="px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold disabled:opacity-40 disabled:cursor-not-allowed text-xs transition-colors flex items-center gap-1"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
