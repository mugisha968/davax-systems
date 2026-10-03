import React, { useState } from 'react';
import { SELECTED_PROJECTS } from '../data/content';
import { ProjectItem } from '../types';
import {
  FolderGit2,
  CheckCircle2,
  ExternalLink,
  Layers,
  Cpu,
  ChevronRight,
  X,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface WorkProps {
  onStartProject: () => void;
}

export const Work: React.FC<WorkProps> = ({ onStartProject }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="py-20 md:py-28 border-b border-slate-900 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl text-left">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              Portfolio &amp; Architectures
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight text-balance">
              Selected Work
            </h2>
            <p className="mt-4 text-base text-slate-400 leading-relaxed text-balance">
              Representative digital systems, operational platforms, and high-performance web products
              engineered by Davax Systems for specific organizational challenges.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-800 shrink-0">
            Case Architectures · Production-Ready
          </div>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {SELECTED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between shadow-lg hover:shadow-cyan-950/20"
            >
              <div>
                {/* Category kicker */}
                <div className="flex items-center justify-between text-xs font-mono pb-3 mb-4 border-b border-slate-800/80">
                  <span className="text-cyan-400 font-semibold">{project.category}</span>
                  <span className="text-slate-500">Architecture Spec</span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mt-1 mb-4 leading-normal">
                  {project.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Metrics / Highlights */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="text-xs sm:text-sm font-bold font-mono text-cyan-400 tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="text-[11px] font-mono text-slate-400 mb-2">Technology Used:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.architecture.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-3 rounded-lg bg-slate-950 hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white border border-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span>Inspect System Architecture</span>
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on replacing case studies */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-mono">
            Note: Davax Systems protects client confidentiality. Case architectures are abstracted
            from deployed client systems.
          </p>
        </div>
      </div>

      {/* Architecture Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
        >
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-100 mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold">
                  The Problem
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {selectedProject.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-mono">·</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Davax Solution
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedProject.solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core Modules Breakdown */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Core System Components Implemented
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.architecture.components.map((comp) => (
                  <div
                    key={comp}
                    className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-200 flex items-center gap-2"
                  >
                    <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Close View
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedProject(null);
                  onStartProject();
                }}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Build a Similar System</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
