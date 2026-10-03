import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { Globe, Layers, AppWindow, BarChart3, Zap, Cpu, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Icon mapping helper
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors' };
    switch (iconName) {
      case 'Globe':
        return <Globe {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'AppWindow':
        return <AppWindow {...props} />;
      case 'BarChart3':
        return <BarChart3 {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      default:
        return <Layers {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight text-balance">
            What We Build
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed text-balance">
            We don’t deliver generic website themes or bloated off-the-shelf software. We engineer
            purpose-built systems tailored precisely to your operations, team workflows, and customer experience.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const isHovered = hoveredId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative rounded-2xl p-6 sm:p-7 bg-slate-900/60 border transition-all duration-200 flex flex-col justify-between ${
                  isHovered
                    ? 'border-cyan-500/50 bg-slate-900/90 shadow-xl shadow-cyan-950/20 -translate-y-0.5'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Row: Editorial Index & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                      {renderIcon(service.icon)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400/90 mt-1 mb-3">
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Capabilities */}
                  <ul className="mt-5 space-y-2 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-800/60">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 group-hover:text-cyan-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:underline"
                  >
                    <span>Request {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
