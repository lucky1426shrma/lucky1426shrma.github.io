import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const CompetitiveBento: React.FC = () => {
  return (
    <section id="competitive" className="py-12 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Competitive Programming & Contests
          </h2>
          <span className="text-xs font-mono text-slate-400">Active Records</span>
        </div>

        <div className="border border-slate-800/80 rounded-xl divide-y divide-slate-800/70 overflow-hidden bg-slate-850/40">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-800/50 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {item.platform}
                  </span>
                  <span className="text-slate-700">•</span>
                  <h3 className="text-sm font-medium text-slate-100">
                    {item.title}
                  </h3>
                  {item.rating && (
                    <span className="text-xs font-mono text-slate-300 px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700/60">
                      {item.rating}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400">
                  {item.detail}
                </p>
              </div>

              <div className="flex items-center gap-4 self-end sm:self-center">
                <span className="text-xs font-mono text-slate-400">
                  {item.year}
                </span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                >
                  <span>Verify</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
