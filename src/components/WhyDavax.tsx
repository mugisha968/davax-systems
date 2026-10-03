import React from 'react';
import { WHY_DAVAX } from '../data/content';
import { Check, Shield, Cpu, Scale, MessageSquareCode, Sliders } from 'lucide-react';

export const WhyDavax: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Sliders className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Shield className="w-5 h-5 text-cyan-400" />;
      case 3:
        return <Scale className="w-5 h-5 text-cyan-400" />;
      case 4:
        return <MessageSquareCode className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sliders className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 md:py-28 border-b border-slate-900 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            Engineering Principles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight text-balance">
            Why Davax Systems
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed text-balance">
            Our guiding philosophy isn’t chasing tech fads—it’s delivering resilient, maintainable
            software that stands the test of daily business operations.
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_DAVAX.map((point, index) => (
            <div
              key={point.title}
              className={`p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {getIcon(index)}
                  </div>
                  <span className="font-mono text-xs text-slate-600 font-bold">0{index + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-2.5">{point.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {point.description}
                </p>
              </div>

              <ul className="space-y-2 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                {point.bulletPoints.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
