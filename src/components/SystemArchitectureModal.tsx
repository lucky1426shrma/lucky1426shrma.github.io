import React, { useState } from 'react';
import { 
  X, 
  Cpu, 
  Server, 
  Database, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Layers, 
  Play, 
  ExternalLink
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface SystemArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SystemArchitectureModal: React.FC<SystemArchitectureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const project = PROJECTS[0]; // Multi-tier caching reverse proxy & deployment engine
  const [activeStep, setActiveStep] = useState<number>(0);
  const [simulating, setSimulating] = useState(false);
  const [simulationLog, setSimulationLog] = useState<string>('Select a simulation below to trace request lifecycle.');

  const nodes = [
    {
      id: 0,
      title: '1. Client Edge Request',
      tech: 'HTTP/2 • Host Router',
      icon: Activity,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/40',
      badge: 'Incoming',
      description: 'Incoming requests arrive with customized project subdomains or custom domains. The reverse proxy inspects headers for Host identity and cryptographic ETag matching.'
    },
    {
      id: 1,
      title: '2. L1 RAM Cache Tier',
      tech: 'In-Memory Heap (<1ms)',
      icon: Zap,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/40',
      badge: '<1ms Latency',
      description: 'Ultra-hot static assets are held directly in in-memory RAM buffers. Serves frequent landing page assets and JSON payloads instantaneously with zero filesystem I/O.'
    },
    {
      id: 2,
      title: '3. L2 SSD NVMe Tier',
      tech: 'Local Disk + MD5 ETag',
      icon: Database,
      color: 'text-violet-400',
      borderColor: 'border-violet-500/40',
      badge: '2ms Latency',
      description: 'Warm assets are retained on local SSD. When an L1 miss occurs, the proxy checks the L2 directory using an MD5 hash index, avoiding 90% of costly S3 upstream calls.'
    },
    {
      id: 3,
      title: '4. AWS S3 Upstream Gateway',
      tech: 'AWS S3 SDK • Async Hydration',
      icon: Layers,
      color: 'text-blue-400',
      borderColor: 'border-blue-500/40',
      badge: 'Origin Fetch',
      description: 'Only cold cache misses reach AWS S3. Once fetched, the file streams to the client while asynchronously populating the L1 and L2 cache tiers for subsequent hits.'
    },
    {
      id: 4,
      title: '5. BullMQ & Redis Queue',
      tech: 'Redis 7 • BullMQ Workers',
      icon: Server,
      color: 'text-rose-400',
      borderColor: 'border-rose-500/40',
      badge: 'Async Pipeline',
      description: 'When users trigger git deploys, webhooks push build jobs into Redis BullMQ. Jobs are distributed across background worker pools to prevent blocking reverse proxy I/O.'
    },
    {
      id: 5,
      title: '6. Ephemeral Docker Sandbox',
      tech: '512MB RAM • 1 CPU Hard Cap',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/40',
      badge: 'Security Sandbox',
      description: 'Compiles untrusted user code inside strict, unprivileged Docker containers with isolated namespaces, zero host network access, and hard memory caps to eliminate RCE threats.'
    },
    {
      id: 6,
      title: '7. Google V8 Serverless Runtime',
      tech: 'node:vm Isolate Sandboxes',
      icon: Cpu,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/40',
      badge: '2ms Cold Start',
      description: 'Dispatches dynamic Express route handlers inside lightweight Google V8 execution contexts. Provides serverless functionality with 2ms cold start and 0% idle CPU footprint.'
    }
  ];

  const runSimulation = (type: 'l1-hit' | 'l2-hit' | 'build-deploy') => {
    setSimulating(true);
    if (type === 'l1-hit') {
      setActiveStep(0);
      setSimulationLog('Request arriving at Reverse Proxy...');
      setTimeout(() => {
        setActiveStep(1);
        setSimulationLog('✓ L1 RAM Cache HIT! Served in 0.8ms. Zero disk/network egress.');
        setSimulating(false);
      }, 700);
    } else if (type === 'l2-hit') {
      setActiveStep(0);
      setSimulationLog('Request arriving at Reverse Proxy...');
      setTimeout(() => {
        setActiveStep(1);
        setSimulationLog('L1 Miss. Checking L2 SSD index via MD5 ETag...');
      }, 500);
      setTimeout(() => {
        setActiveStep(2);
        setSimulationLog('✓ L2 SSD HIT! Served in 2.1ms. S3 upstream call avoided (90% cost savings).');
        setSimulating(false);
      }, 1200);
    } else {
      setActiveStep(4);
      setSimulationLog('Git push detected! Enqueueing job into Redis BullMQ...');
      setTimeout(() => {
        setActiveStep(5);
        setSimulationLog('Spinning up ephemeral Docker container (512MB RAM cap)... Running build & npm run build...');
      }, 800);
      setTimeout(() => {
        setActiveStep(3);
        setSimulationLog('Build artifacts uploaded to AWS S3 and deployed to edge cache. Status: LIVE!');
        setSimulating(false);
      }, 1800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#06080d]/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#090d16] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>Distributed Cloud Deployment & Reverse Proxy Engine</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  Interactive Simulator
                </span>
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Autocannon Benchmark: 1,671+ req/sec • p99: 22ms • 90% S3 Read Reduction
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Architecture Modal"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Simulation Action Bar */}
        <div className="px-6 py-3 bg-[#06080d] border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5 text-cyan-400" /> Run Pipeline:
            </span>
            <button
              onClick={() => runSimulation('l1-hit')}
              disabled={simulating}
              className="px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono transition-all disabled:opacity-50"
            >
              Test L1 RAM Cache (0.8ms)
            </button>
            <button
              onClick={() => runSimulation('l2-hit')}
              disabled={simulating}
              className="px-2.5 py-1 rounded-lg bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-mono transition-all disabled:opacity-50"
            >
              Test L2 SSD Hit (2ms)
            </button>
            <button
              onClick={() => runSimulation('build-deploy')}
              disabled={simulating}
              className="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono transition-all disabled:opacity-50"
            >
              Simulate Docker Build
            </button>
          </div>

          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-300">{simulationLog}</span>
          </div>
        </div>

        {/* Main Grid: Interactive Architecture Diagram */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Visual Node Pipeline */}
          <div className="lg:col-span-7 space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
              System Components (Click to Inspect)
            </div>
            {nodes.map((node) => {
              const Icon = node.icon;
              const isSelected = activeStep === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveStep(node.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? `bg-white/[0.08] ${node.borderColor} shadow-lg shadow-cyan-500/5 translate-x-1`
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-white/[0.05] ${node.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
                        <span>{node.title}</span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                        )}
                      </div>
                      <div className="text-xs font-mono text-slate-400">{node.tech}</div>
                    </div>
                  </div>

                  <span className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
                    isSelected
                      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 font-medium'
                      : 'bg-white/[0.03] text-slate-400 border-white/[0.05]'
                  }`}>
                    {node.badge}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Inspector */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-white/[0.02] border border-white/[0.08] p-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="text-xs font-mono text-cyan-400">Node Deep-Dive Inspector</span>
                <span className="text-xs font-mono text-slate-500">Tier {activeStep + 1} of {nodes.length}</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {nodes[activeStep].title}
                </h3>
                <p className="text-xs font-mono text-cyan-300 mt-0.5">
                  {nodes[activeStep].tech}
                </p>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed bg-black/30 p-3.5 rounded-xl border border-white/[0.05]">
                {nodes[activeStep].description}
              </div>

              {/* Technical Specifications */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Engine Metrics & Security</div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-slate-500 text-[10px]">THROUGHPUT</div>
                    <div className="text-cyan-300 font-bold">1,671+ req/sec</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-slate-500 text-[10px]">P99 LATENCY</div>
                    <div className="text-emerald-300 font-bold">22ms</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-slate-500 text-[10px]">SANDBOX LIMIT</div>
                    <div className="text-rose-300 font-bold">512MB / 1 CPU</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-slate-500 text-[10px]">V8 COLD START</div>
                    <div className="text-purple-300 font-bold">~2ms</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Link to Source Repository */}
            <div className="pt-4 border-t border-white/[0.08] mt-4 flex items-center justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>View Full Source Code on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onClose}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 font-medium"
              >
                Done
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
