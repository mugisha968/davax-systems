import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { Check } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="border-y border-slate-900 bg-slate-950/60 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Built for segment */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
            <span className="font-mono uppercase tracking-wider text-cyan-400 font-semibold text-[11px]">
              Built for:
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-300 font-medium">
              {COMPANY_INFO.builtFor.map((segment, index) => (
                <div key={segment} className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800/80 px-2.5 py-1 rounded-md text-xs text-slate-200">
                    <Check className="w-3 h-3 text-cyan-400 stroke-[2.5]" aria-hidden="true" />
                    <span>{segment}</span>
                  </span>
                  {index < COMPANY_INFO.builtFor.length - 1 && (
                    <span className="hidden sm:inline text-slate-700" aria-hidden="true">
                      ·
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Statement */}
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed lg:text-right border-l-2 lg:border-l-0 lg:border-r-0 border-cyan-400/40 pl-3 lg:pl-0">
            "{COMPANY_INFO.statement}"
          </p>
        </div>
      </div>
    </section>
  );
};
