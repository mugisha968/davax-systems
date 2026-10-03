import React from 'react';
import { LogoPlaceholder } from './LogoPlaceholder';
import { ArrowUp, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-12 border-b border-slate-900">
          {/* Brand & Slogan */}
          <div className="space-y-4 max-w-sm text-left">
            <a href="#home" className="inline-block">
              <LogoPlaceholder size="md" />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              We build digital systems for real businesses.
            </p>
            <p className="text-xs font-mono text-slate-500">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3 text-left">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Navigation
            </div>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors text-slate-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links (Placeholders clearly designated) & Back to Top */}
          <div className="space-y-3 text-left md:text-right">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Connect
            </div>
            <div className="flex items-center gap-3">
              <span
                title="GitHub (Placeholder)"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </span>
              <span
                title="LinkedIn (Placeholder)"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </span>
              <span
                title="X / Twitter (Placeholder)"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors cursor-pointer"
              >
                <Twitter className="w-4 h-4" />
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-600">
              Social accounts placeholder
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Production-Grade Architecture</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
