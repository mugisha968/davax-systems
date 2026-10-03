import React from 'react';
import { TECH_STACK } from '../data/content';
import { Terminal } from 'lucide-react';

export const TechStack: React.FC = () => {
  return (
    <section className="py-20 md:py-24 border-b border-slate-900 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            Technical Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight text-balance">
            Built with modern technology
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed text-balance">
            We build with proven, industry-standard languages, runtimes, and distributed databases
            that provide high velocity, verifiable stability, and zero ecosystem lock-in.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-base font-bold font-mono text-slate-100">{tech.name}</span>
                <span className="text-[11px] font-mono text-cyan-400/90 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
                  {tech.badge}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{tech.role}</p>
              <div className="mt-3 pt-2 border-t border-slate-800/60 text-[10px] font-mono text-slate-500">
                Category: {tech.category}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-slate-500">
            Tech selections are governed by operational requirements, data security constraints, and long-term maintainability.
          </p>
        </div>
      </div>
    </section>
  );
};
