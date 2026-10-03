import React, { useState } from 'react';
import { SOLUTIONS } from '../data/content';
import {
  Users,
  Boxes,
  CreditCard,
  Calendar,
  Network,
  LayoutDashboard,
  Monitor,
  Code2,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';

interface SolutionsProps {
  onSelectSolution: (solutionTitle: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution }) => {
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>(SOLUTIONS[0].id);
  const activeSolution = SOLUTIONS.find((s) => s.id === selectedSolutionId) || SOLUTIONS[0];

  const renderIcon = (iconName: string, active: boolean) => {
    const props = {
      className: `w-5 h-5 transition-colors ${
        active ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-200'
      }`,
    };
    switch (iconName) {
      case 'Users':
        return <Users {...props} />;
      case 'Boxes':
        return <Boxes {...props} />;
      case 'CreditCard':
        return <CreditCard {...props} />;
      case 'Calendar':
        return <Calendar {...props} />;
      case 'Network':
        return <Network {...props} />;
      case 'LayoutDashboard':
        return <LayoutDashboard {...props} />;
      case 'Monitor':
        return <Monitor {...props} />;
      case 'Code2':
        return <Code2 {...props} />;
      default:
        return <Code2 {...props} />;
    }
  };

  return (
    <section id="solutions" className="py-20 md:py-28 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            Tailored Implementation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight text-balance">
            Technology That Fits Your Business
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed text-balance">
            Every company has unique operational handoffs, customer journeys, and data models.
            Davax Systems does not force your business into rigid off-the-shelf templates.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 font-mono">
            <span>&ldquo;We build around the problem, not around a template.&rdquo;</span>
          </div>
        </div>

        {/* Category Selector Tabs & Detailed Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Solution Categories List */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {SOLUTIONS.map((item) => {
              const isSelected = item.id === selectedSolutionId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedSolutionId(item.id)}
                  className={`group w-full p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/80 shadow-md shadow-cyan-950/30'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors ${
                        isSelected
                          ? 'bg-slate-950 border-cyan-500/40'
                          : 'bg-slate-900/80 border-slate-800'
                      }`}
                    >
                      {renderIcon(item.icon, isSelected)}
                    </div>
                    <div>
                      <div
                        className={`text-sm font-bold ${
                          isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                        }`}
                      >
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate max-w-[220px]">
                        {item.typicalBusiness}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? 'text-cyan-400 translate-x-1'
                        : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Solution In-Depth Inspection Card */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Engineered Solution
                </span>
                <h3 className="text-2xl font-bold text-slate-100 mt-1">{activeSolution.title}</h3>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                Fit: {activeSolution.typicalBusiness}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-5">
              {activeSolution.description}
            </p>

            {/* Core Modules We Engineer */}
            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Core System Modules We Engineer
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeSolution.coreModules.map((mod) => (
                  <div
                    key={mod}
                    className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs font-medium text-slate-200">{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Problems Solved */}
            <div className="mt-6 pt-5 border-t border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Common Operational Inefficiencies This Eliminates</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {activeSolution.solvedProblems.map((prob) => (
                  <li key={prob} className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono mt-0.5">✕</span>
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct CTA */}
            <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-mono">
                Have specific requirements for {activeSolution.title}?
              </span>
              <button
                type="button"
                onClick={() => onSelectSolution(activeSolution.title)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
              >
                <span>Consult on this Solution</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
