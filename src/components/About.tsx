import React from 'react';
import { ArrowRight, Sparkles, Target, Compass, Code2, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const steps = [
    {
      title: 'Problem',
      desc: 'Operational bottlenecks & manual friction',
      icon: Target,
      color: 'text-rose-400',
      border: 'border-rose-900/40',
      bg: 'bg-rose-950/20',
    },
    {
      title: 'Design',
      desc: 'Human workflows & architecture blueprints',
      icon: Compass,
      color: 'text-amber-400',
      border: 'border-amber-900/40',
      bg: 'bg-amber-950/20',
    },
    {
      title: 'Technology',
      desc: 'Type-safe, fast & maintainable stacks',
      icon: Code2,
      color: 'text-cyan-400',
      border: 'border-cyan-900/40',
      bg: 'bg-cyan-950/20',
    },
    {
      title: 'Solution',
      desc: 'Working system that transforms the business',
      icon: CheckCircle2,
      color: 'text-emerald-400',
      border: 'border-emerald-900/40',
      bg: 'bg-emerald-950/20',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Our Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight text-balance">
              Technology Built Around People.
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Davax Systems is a software development company focused on building practical digital
                products for real businesses and organizations.
              </p>
              <p>
                We believe technology should simplify work, improve communication, organize information,
                and create better experiences for customers and teams.
              </p>
              <p className="text-white font-medium">
                Instead of forcing businesses into generic solutions, we build systems around their
                actual needs.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-200 font-semibold block mb-0.5">Custom Fit</span>
                Software tailored to your company hierarchy
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-200 font-semibold block mb-0.5">Zero Bloat</span>
                Only the features your business actually relies on
              </div>
            </div>
          </div>

          {/* Right Visual: Problem → Design → Technology → Solution */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 text-xs font-mono">
                <span className="text-slate-400">Engineering Paradigm</span>
                <span className="text-cyan-400">Continuous Value Chain</span>
              </div>

              {/* Step Sequence */}
              <div className="space-y-3">
                {steps.map((s, index) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.title}>
                      <div
                        className={`flex items-center gap-4 p-4 rounded-xl border ${s.border} ${s.bg} transition-all`}
                      >
                        <div
                          className={`w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 ${s.color}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-slate-500 font-bold">
                              0{index + 1}
                            </span>
                            <span className="text-sm font-bold text-slate-100">{s.title}</span>
                          </div>
                          <p className="text-xs text-slate-400 truncate mt-0.5">{s.desc}</p>
                        </div>
                        <span className="font-mono text-xs text-slate-600 hidden sm:inline">
                          Phase 0{index + 1}
                        </span>
                      </div>

                      {index < steps.length - 1 && (
                        <div className="flex justify-center py-1">
                          <div className="w-0.5 h-3 bg-slate-800" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-center text-xs font-mono text-slate-400">
                Direct translation from commercial need to measurable software deliverable.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
