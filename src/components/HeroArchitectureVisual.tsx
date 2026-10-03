import React, { useState } from 'react';
import {
  Activity,
  Layers,
  ArrowRight,
  Database,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  Zap,
  Server,
  Monitor,
  Cpu,
  BarChart2,
} from 'lucide-react';

export const HeroArchitectureVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'system' | 'dashboard' | 'automation'>('dashboard');
  const [syncedCount, setSyncedCount] = useState(1482);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleSimulateSync = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setSyncedCount((prev) => prev + 7);
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div className="relative w-full rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5 shadow-2xl backdrop-blur-xl overflow-hidden">
      {/* Top Window Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 text-xs font-mono text-slate-400">
            davax-core.system.engine
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800/80">
          <button
            type="button"
            onClick={() => setActiveTab('dashboard')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
              activeTab === 'dashboard'
                ? 'bg-slate-800 text-cyan-400 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Dashboard
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('system')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
              activeTab === 'system'
                ? 'bg-slate-800 text-cyan-400 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('automation')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
              activeTab === 'automation'
                ? 'bg-slate-800 text-cyan-400 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Automation
          </button>
        </div>
      </div>

      {/* View 1: Live Business Operations Dashboard */}
      {activeTab === 'dashboard' && (
        <div className="space-y-4">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Active Workflows</span>
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-xl font-bold font-mono text-slate-100 tabular-nums">24 / 24</div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>All services healthy</span>
              </div>
            </div>

            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Data Records Synced</span>
                <button
                  onClick={handleSimulateSync}
                  title="Simulate real-time sync"
                  className="p-0.5 hover:text-cyan-400 transition-colors"
                >
                  <RefreshCw
                    className={`w-3.5 h-3.5 text-slate-400 ${
                      isRefreshing ? 'animate-spin text-cyan-400' : ''
                    }`}
                  />
                </button>
              </div>
              <div className="text-xl font-bold font-mono text-slate-100 tabular-nums">
                {syncedCount.toLocaleString()}
              </div>
              <div className="text-[11px] text-cyan-400 flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Zero sync conflicts</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Response Time</span>
                <Zap className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-xl font-bold font-mono text-slate-100 tabular-nums">42ms</div>
              <div className="text-[11px] text-slate-400 mt-1">p99 edge latency</div>
            </div>
          </div>

          {/* Operational Pipeline Feed */}
          <div className="bg-slate-950/70 rounded-xl border border-slate-800 p-3.5">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 mb-2 border-b border-slate-800">
              <span className="font-semibold text-slate-300">Live System Operations</span>
              <span className="text-[11px] text-cyan-400 font-mono">Stream: Active</span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-200">Customer Invoice Generated</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="text-slate-300 font-semibold">$3,450.00</span>
                  <span className="text-[11px] text-slate-500">12s ago</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-slate-200">Inventory Stock Auto-Updated</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="text-slate-300">SKU-9020 (82 units)</span>
                  <span className="text-[11px] text-slate-500">45s ago</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-slate-200">Member Session Verified</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="text-slate-300">Auth Token [JWT]</span>
                  <span className="text-[11px] text-slate-500">1m ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View 2: System Architecture & Connected Topology */}
      {activeTab === 'system' && (
        <div className="space-y-3.5 py-1">
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>Distributed System Architecture</span>
            <span className="text-[11px] text-cyan-400 font-mono">End-to-End Type Safety</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
            {/* Node 1 */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Monitor className="w-4 h-4 text-cyan-400" />
                  <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">
                    Tier 1
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-slate-200">Client Web App</h4>
                <p className="text-[11px] text-slate-400 mt-1">
                  React 19 + TypeScript. Sub-second render with optimistic UI updates.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/60 text-[10px] font-mono text-slate-500">
                HTTP/3 · SSL/TLS
              </div>
            </div>

            {/* Node 2 */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] font-mono text-emerald-400/90 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                    Tier 2
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-slate-200">API Gateway</h4>
                <p className="text-[11px] text-slate-400 mt-1">
                  Role-based auth, rate limiting, and structured payload validation.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/60 text-[10px] font-mono text-slate-500">
                RBAC · CORS Safe
              </div>
            </div>

            {/* Node 3 */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  <span className="text-[10px] font-mono text-indigo-400/90 bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-800/40">
                    Tier 3
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-slate-200">Business Engine</h4>
                <p className="text-[11px] text-slate-400 mt-1">
                  Automated business logic, calculations, and external integrations.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/60 text-[10px] font-mono text-slate-500">
                Async Workers
              </div>
            </div>

            {/* Node 4 */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Database className="w-4 h-4 text-amber-400" />
                  <span className="text-[10px] font-mono text-amber-400/90 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40">
                    Tier 4
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-slate-200">Storage &amp; Sync</h4>
                <p className="text-[11px] text-slate-400 mt-1">
                  PostgreSQL / Convex real-time persistence with audit logs.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/60 text-[10px] font-mono text-slate-500">
                ACID · Automated Backups
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-3 py-2 bg-slate-950/60 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Full Data Flow Encrypted &amp; Monitored</span>
            </span>
            <span className="text-cyan-400">Zero Single Point of Failure</span>
          </div>
        </div>
      )}

      {/* View 3: Automation Workflow */}
      {activeTab === 'automation' && (
        <div className="space-y-3 py-1">
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>Automated Business Pipeline Example</span>
            <span className="text-[11px] text-emerald-400 font-mono">Trigger: Client Action</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="w-6 h-6 rounded-md bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 text-xs font-mono">
                1
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-200">Client Completes Booking / Order</div>
                <div className="text-[11px] text-slate-400">Event received with verified payload schema</div>
              </div>
              <span className="text-[11px] font-mono text-slate-500">t=0ms</span>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="w-6 h-6 rounded-md bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400 text-xs font-mono">
                2
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-200">Ledger &amp; Inventory Reconciled</div>
                <div className="text-[11px] text-slate-400">Database transaction commits without locking</div>
              </div>
              <span className="text-[11px] font-mono text-slate-500">t=+18ms</span>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="w-6 h-6 rounded-md bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 text-xs font-mono">
                3
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-200">Notifications &amp; Calendar Invites Sent</div>
                <div className="text-[11px] text-slate-400">Client and staff alerted simultaneously via webhook</div>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">t=+42ms ✓</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 text-center pt-1 font-mono">
            Every step logged, audited, and recoverable with zero manual data entry.
          </div>
        </div>
      )}

      {/* Visual Bottom Footer */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Davax Engine · Custom Architecture</span>
        </span>
        <span className="font-mono text-slate-400">Modular · Scalable · Secure</span>
      </div>
    </div>
  );
};
