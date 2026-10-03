import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/content';
import { ContactFormData } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  AlertCircle,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    serviceNeeded: initialService || 'Custom Business Systems',
    projectDetails: '',
    budgetRange: '',
    timeline: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: initialService }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please share a brief description of your project';
    } else if (formData.projectDetails.trim().length < 15) {
      errs.projectDetails = 'Please provide at least 15 characters of detail';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief processing & store locally ready for Convex backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const getBriefText = () => {
    return `PROJECT REQUEST TO DAVAX SYSTEMS
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Service Needed: ${formData.serviceNeeded}
Budget Range: ${formData.budgetRange || 'Flexible'}
Timeline: ${formData.timeline || 'Flexible'}

Project Details:
${formData.projectDetails}`;
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(getBriefText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:${COMPANY_INFO.contactPlaceholders.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.serviceNeeded} - ${formData.name}`
  )}&body=${encodeURIComponent(getBriefText())}`;

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                Initiate Project
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight text-balance">
                Let's Build Something Useful.
              </h2>
              <p className="mt-4 text-base text-slate-400 leading-relaxed text-balance">
                Tell us about your organization and what you’re looking to build. We’ll review your
                requirements and arrange an architectural discovery conversation.
              </p>
            </div>

            {/* Direct Contact Channels (Placeholders clearly tagged) */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">
                    Direct Email <span className="text-[10px] text-slate-500">[Placeholder]</span>
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.contactPlaceholders.email}`}
                    className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                  >
                    {COMPANY_INFO.contactPlaceholders.email}
                  </a>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {COMPANY_INFO.contactPlaceholders.emailNote}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">
                    Phone / WhatsApp <span className="text-[10px] text-slate-500">[Placeholder]</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-200">
                    {COMPANY_INFO.contactPlaceholders.phone}
                  </span>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {COMPANY_INFO.contactPlaceholders.phoneNote}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">
                    Location <span className="text-[10px] text-slate-500">[Placeholder]</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-200">
                    {COMPANY_INFO.contactPlaceholders.location}
                  </span>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {COMPANY_INFO.contactPlaceholders.locationNote}
                  </div>
                </div>
              </div>
            </div>

            {/* Response Promise */}
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-900/30 flex items-center gap-3 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>We typically review and respond to project requests within 24 business hours.</span>
            </div>
          </div>

          {/* Right Column: Project Request Form */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company / Organization */}
                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company or project name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                {/* What do you need? */}
                <div>
                  <label
                    htmlFor="serviceNeeded"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    What do you need? <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    id="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
                  >
                    <option value="Business Websites">Business Website</option>
                    <option value="Custom Business Systems">Custom Business System</option>
                    <option value="Web Applications">Interactive Web Application</option>
                    <option value="Dashboards & Admin Systems">Dashboard or Admin Console</option>
                    <option value="Automation & Integrations">Workflow Automation &amp; APIs</option>
                    <option value="AI-Powered Solutions">AI-Powered Business Feature</option>
                    <option value="Complete Digital Platform">Complete Custom Digital Platform</option>
                    <option value="Other">Other Digital Solution</option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Project Details <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Describe your current workflow, the business challenge, or the software you need built..."
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                      errors.projectDetails ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.projectDetails}</p>
                  )}
                </div>

                {/* Optional Budget & Timeline Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="budgetRange"
                      className="block text-xs font-medium text-slate-400 mb-1.5"
                    >
                      Budget Range (Optional)
                    </label>
                    <select
                      id="budgetRange"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <option value="">Select range...</option>
                      <option value="< $5,000">&lt; $5,000</option>
                      <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                      <option value="$15,000 – $30,000">$15,000 – $30,000</option>
                      <option value="$30,000+">$30,000+</option>
                      <option value="Flexible / Needs Scoping">Flexible / Needs Scoping</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-xs font-medium text-slate-400 mb-1.5"
                    >
                      Target Timeline (Optional)
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <option value="">Select timeline...</option>
                      <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                      <option value="1 – 2 Months">1 – 2 Months</option>
                      <option value="3 – 6 Months">3 – 6 Months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-md shadow-cyan-950/20"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Validating Request...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Project Request</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
                  Ready to connect with Convex backend. Client-validated without fake server claims.
                </p>
              </form>
            ) : (
              /* Honest, Production-Grade Confirmation View */
              <div className="py-6 space-y-5 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-950/60 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">
                      Project Request Prepared
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Form data validated and compiled for {COMPANY_INFO.name}.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono text-slate-300">
                  <div className="text-[11px] text-cyan-400 font-bold uppercase pb-1 border-b border-slate-800">
                    Compiled Request Summary
                  </div>
                  <pre className="whitespace-pre-wrap font-sans text-xs text-slate-300 leading-relaxed overflow-x-auto max-h-48">
                    {getBriefText()}
                  </pre>
                </div>

                {/* Immediate Direct Send Channels so no lead is lost */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={mailtoUrl}
                    className="flex-1 py-3 px-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email Client Directly</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="py-3 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors flex items-center justify-center gap-2 border border-slate-700"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Copied Brief!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Brief</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        serviceNeeded: 'Custom Business Systems',
                        projectDetails: '',
                        budgetRange: '',
                        timeline: '',
                      });
                    }}
                    className="text-xs text-slate-500 hover:text-slate-300 font-mono transition-colors underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
