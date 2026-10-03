import React, { useState, useRef } from 'react';
import { useLogo, LogoMetadata } from '../context/LogoContext';
import { LogoPlaceholder } from '../components/LogoPlaceholder';
import {
  UploadCloud,
  CheckCircle2,
  Trash2,
  Download,
  ArrowLeft,
  Lock,
  Unlock,
  KeyRound,
  FileCode,
  Sparkles,
  Copy,
  LogOut,
  Eye,
  EyeOff,
  AlertCircle,
  ShieldCheck,
} from 'lucide-react';

interface AdminPageProps {
  onBackToWebsite: () => void;
}

// Default Owner Credentials
export const DEFAULT_ADMIN_CREDENTIALS = {
  email: 'davaxsystems@gmail.com',
  password: 'davax2026',
};

export const AdminPage: React.FC<AdminPageProps> = ({ onBackToWebsite }) => {
  const { logoSrc, logoMetadata, setUploadedLogo, resetToDefault } = useLogo();
  
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('davax_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [loginEmail, setLoginEmail] = useState('davaxsystems@gmail.com');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Logo Upload State
  const [dragActive, setDragActive] = useState(false);
  const [previewDataUrl, setPreviewDataUrl] = useState<string | null>(null);
  const [selectedMeta, setSelectedMeta] = useState<LogoMetadata | null>(null);
  const [previewSize, setPreviewSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(
    null
  );
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    const emailTrim = loginEmail.trim().toLowerCase();
    const isEmailValid =
      emailTrim === DEFAULT_ADMIN_CREDENTIALS.email.toLowerCase() ||
      emailTrim === 'admin@davaxsystems.com';

    if (isEmailValid && loginPassword === DEFAULT_ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      try {
        sessionStorage.setItem('davax_admin_auth', 'true');
      } catch (err) {
        console.warn(err);
      }
    } else {
      setLoginError('Invalid email or passcode. Please check the credentials and try again.');
    }
  };

  const handleQuickLogin = () => {
    setLoginEmail(DEFAULT_ADMIN_CREDENTIALS.email);
    setLoginPassword(DEFAULT_ADMIN_CREDENTIALS.password);
    setIsAuthenticated(true);
    try {
      sessionStorage.setItem('davax_admin_auth', 'true');
    } catch (err) {
      console.warn(err);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    try {
      sessionStorage.removeItem('davax_admin_auth');
    } catch (err) {
      console.warn(err);
    }
  };

  const showStatus = (type: 'success' | 'error', text: string) => {
    setStatusMessage({ type, text });
    setTimeout(() => setStatusMessage(null), 4000);
  };

  const processFile = (file: File) => {
    // Validate file type
    const validTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/webp'];
    if (!validTypes.includes(file.type) && !file.name.endsWith('.svg')) {
      showStatus('error', 'Please upload a valid SVG, PNG, WebP, or JPG image file.');
      return;
    }

    // Validate size (max 2.5MB for browser storage performance)
    if (file.size > 2.5 * 1024 * 1024) {
      showStatus('error', 'Image file is too large. Please upload an image under 2.5 MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setPreviewDataUrl(dataUrl);
      setSelectedMeta({
        name: file.name,
        size: file.size,
        type: file.type || 'image/svg+xml',
        updatedAt: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
      });
      showStatus('success', `Loaded "${file.name}". Click "Apply to Website" to activate.`);
    };
    reader.onerror = () => {
      showStatus('error', 'Failed to read image file. Please try again.');
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleApplyLogo = () => {
    if (previewDataUrl && selectedMeta) {
      setUploadedLogo(previewDataUrl, selectedMeta);
      showStatus('success', 'Logo successfully applied across the entire website!');
    }
  };

  const handleReset = () => {
    resetToDefault();
    setPreviewDataUrl(null);
    setSelectedMeta(null);
    showStatus('success', 'Reset to default Davax Systems typographic logo.');
  };

  const handleDownloadLogo = () => {
    const active = previewDataUrl || logoSrc;
    if (!active) return;
    const link = document.createElement('a');
    link.href = active;
    const isSvg = active.includes('image/svg+xml') || selectedMeta?.name.endsWith('.svg');
    link.download = isSvg ? 'logo.svg' : 'logo.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showStatus('success', `Downloaded as ${link.download}. Place in /public/ for static deployment.`);
  };

  const codeSnippet = `// In src/components/LogoPlaceholder.tsx
// Or place your file in /public/logo.svg
<LogoPlaceholder customLogoSrc="/logo.svg" />`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const displayLogo = previewDataUrl || logoSrc;

  // Render Login Panel if unauthenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 relative bg-tech-grid">
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full"
          aria-hidden="true"
        />

        <div className="w-full max-w-md space-y-6 relative z-10">
          {/* Logo & Header */}
          <div className="text-center space-y-3">
            <div className="inline-block">
              <LogoPlaceholder size="lg" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-100 tracking-tight">
              Admin Login Portal
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Authentication required to upload brand logo and manage system settings.
            </p>
          </div>

          {/* Login Card */}
          <div className="p-7 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl space-y-5">
            {loginError && (
              <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-800/80 text-rose-200 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                  Administrator Email
                </label>
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="davaxsystems@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors font-mono"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-medium text-slate-300 font-mono">
                    Passcode / Password
                  </label>
                  <span className="text-[10px] text-cyan-400 font-mono">Default: davax2026</span>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter passcode"
                    className="w-full px-3.5 py-2.5 pr-10 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-cyan-950/20"
              >
                <Lock className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Authenticate into Admin Portal</span>
              </button>
            </form>

            {/* Quick Fill Helper for Owner */}
            <div className="pt-3 border-t border-slate-800/80 text-center space-y-2">
              <button
                type="button"
                onClick={handleQuickLogin}
                className="w-full py-2 px-3 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>1-Click Login with Default Credentials</span>
              </button>
            </div>
          </div>

          {/* Credentials Display for Owner Clarity */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400 space-y-1 text-center">
            <div className="text-slate-300 font-semibold mb-1 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Owner Access Credentials</span>
            </div>
            <div>
              Email: <span className="text-cyan-400">davaxsystems@gmail.com</span>
            </div>
            <div>
              Passcode: <span className="text-cyan-400">davax2026</span>
            </div>
          </div>

          {/* Return to website */}
          <div className="text-center pt-2">
            <button
              onClick={onBackToWebsite}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Website</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render Authenticated Admin Portal
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Admin Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToWebsite}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Website</span>
            </button>
            <div className="h-4 w-px bg-slate-800 hidden sm:block" />
            <div>
              <h1 className="text-base font-bold text-slate-100">Davax Systems Admin</h1>
              <p className="text-[11px] font-mono text-cyan-400">Branding &amp; Logo Management Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Logged in: {DEFAULT_ADMIN_CREDENTIALS.email}</span>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-400 hover:text-rose-300 transition-colors cursor-pointer"
              title="Log out of admin session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Status Notification */}
        {statusMessage && (
          <div
            className={`p-4 rounded-xl border flex items-center gap-3 text-sm transition-all duration-300 ${
              statusMessage.type === 'success'
                ? 'bg-emerald-950/60 border-emerald-800/80 text-emerald-200'
                : 'bg-rose-950/60 border-rose-800/80 text-rose-200'
            }`}
          >
            <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
            <span className="flex-1">{statusMessage.text}</span>
          </div>
        )}

        {/* Section 1: Logo Upload & Live Customizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Upload Dropzone & Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-100">Upload Company Logo</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Upload an SVG or high-resolution PNG of the official Davax Systems logo. It will update the navbar, footer, and brand lockup across the site immediately.
                </p>
              </div>

              {/* Drag and Drop Zone */}
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${
                  dragActive
                    ? 'border-cyan-400 bg-cyan-950/20'
                    : 'border-slate-700 hover:border-slate-600 bg-slate-950/60'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".svg,image/svg+xml,image/png,image/jpeg,image/webp"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-3 text-cyan-400">
                  <UploadCloud className="w-6 h-6" />
                </div>

                <div className="text-sm font-semibold text-slate-200">
                  Drag and drop your logo here, or <span className="text-cyan-400 underline">browse</span>
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  Supports SVG (recommended), PNG, WebP or JPG (max 2.5MB)
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  disabled={!previewDataUrl}
                  onClick={handleApplyLogo}
                  className="flex-1 py-3 px-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-cyan-950/20"
                >
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                  <span>Apply to Entire Website</span>
                </button>

                {(displayLogo || previewDataUrl) && (
                  <button
                    type="button"
                    onClick={handleDownloadLogo}
                    className="py-3 px-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors flex items-center gap-1.5 border border-slate-700 cursor-pointer"
                    title="Download file to place in /public/logo.svg"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download File</span>
                  </button>
                )}

                {logoSrc && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="py-3 px-3.5 rounded-lg bg-slate-950 hover:bg-rose-950/50 text-rose-300 hover:text-rose-200 text-xs font-medium transition-colors flex items-center gap-1.5 border border-slate-800 hover:border-rose-900/50 cursor-pointer"
                    title="Reset to default typographic placeholder"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Current Active Metadata */}
              <div className="pt-4 border-t border-slate-800/80 text-xs font-mono space-y-1.5 text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Current Active Mode:</span>
                  <span className={logoSrc ? 'text-cyan-400 font-semibold' : 'text-slate-300'}>
                    {logoSrc ? 'Custom Uploaded Logo' : 'Default Typographic Lockup'}
                  </span>
                </div>
                {(selectedMeta || logoMetadata) && (
                  <>
                    <div className="flex items-center justify-between">
                      <span>File Name:</span>
                      <span className="text-slate-200">{(selectedMeta || logoMetadata)?.name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>File Size:</span>
                      <span className="text-slate-200">
                        {Math.round(((selectedMeta || logoMetadata)?.size || 0) / 1024)} KB
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Live Preview Panel */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-100">Live Preview</h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Verify visual contrast across dark and light surfaces.
                  </p>
                </div>

                {/* Size toggle */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
                  {(['sm', 'md', 'lg'] as const).map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setPreviewSize(sz)}
                      className={`px-2.5 py-1 rounded transition-colors uppercase font-mono text-[10px] cursor-pointer ${
                        previewSize === sz
                          ? 'bg-slate-800 text-cyan-400 font-bold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dark Surface Preview (Website Default) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Dark Background Preview (Website Default)</span>
                  <span className="text-[10px] text-cyan-400">bg-slate-950</span>
                </div>
                <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center min-h-[100px] shadow-inner">
                  {displayLogo ? (
                    <img
                      src={displayLogo}
                      alt="Davax Systems Preview"
                      className={`object-contain transition-all ${
                        previewSize === 'sm'
                          ? 'max-h-7 max-w-[120px]'
                          : previewSize === 'lg'
                          ? 'max-h-14 max-w-[220px]'
                          : 'max-h-10 max-w-[170px]'
                      }`}
                    />
                  ) : (
                    <LogoPlaceholder size={previewSize} />
                  )}
                </div>
              </div>

              {/* Light Surface Preview */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Light Background Preview (Inverted Contrast Test)</span>
                  <span className="text-[10px] text-slate-500">bg-white</span>
                </div>
                <div className="p-6 rounded-xl bg-white border border-slate-300 flex items-center justify-center min-h-[100px] shadow-inner">
                  {displayLogo ? (
                    <img
                      src={displayLogo}
                      alt="Davax Systems Preview Light"
                      className={`object-contain transition-all ${
                        previewSize === 'sm'
                          ? 'max-h-7 max-w-[120px]'
                          : previewSize === 'lg'
                          ? 'max-h-14 max-w-[220px]'
                          : 'max-h-10 max-w-[170px]'
                      }`}
                    />
                  ) : (
                    <div className="text-slate-900 font-extrabold tracking-[0.2em] font-mono text-sm">
                      DAVAX SYSTEMS
                    </div>
                  )}
                </div>
              </div>

              {/* Deployment Quick Tip */}
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-900/30 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 font-semibold text-cyan-300">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Permanent Static Deployment Tip</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  When deploying to Vercel, save your logo file to <code>/public/logo.svg</code> in the project. The application is pre-configured to detect and render it across all devices automatically.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Permanent Code Configuration Guide */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <FileCode className="w-5 h-5 text-cyan-400" />
                <span>Hardcoded Repository Setup (Optional)</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                If you prefer committing the logo asset directly into your Git repository for permanent static builds:
              </p>
            </div>
            <button
              onClick={handleCopyCode}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedSnippet ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed">
            {codeSnippet}
          </pre>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-400 font-mono">
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-200 block font-semibold mb-1">Step 1</span>
              Save file to <code>/public/logo.svg</code>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-200 block font-semibold mb-1">Step 2</span>
              Commit to git &amp; push to repo
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-200 block font-semibold mb-1">Step 3</span>
              Vercel rebuilds automatically
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
