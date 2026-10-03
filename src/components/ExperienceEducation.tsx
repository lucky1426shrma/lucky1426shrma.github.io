import React from 'react';
import { LEADERSHIP, EDUCATION } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="leadership" className="py-12 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        
        {/* Leadership */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Leadership & Responsibility
          </h2>

          <div className="space-y-4">
            {LEADERSHIP.map((item, idx) => (
              <div 
                key={idx}
                className="border border-slate-800/80 rounded-xl p-5 bg-slate-900/30 space-y-2 hover:border-slate-700/80 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-medium text-slate-100">
                    {item.role}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 shrink-0">
                    {item.period}
                  </span>
                </div>
                <div className="text-xs text-slate-300 font-mono">
                  {item.organization}
                </div>
                <div className="text-xs text-slate-400">
                  {item.institution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Education
          </h2>

          <div className="space-y-4">
            {EDUCATION.map((edu, idx) => (
              <div 
                key={idx}
                className="border border-slate-800/80 rounded-xl p-5 bg-slate-900/30 space-y-2 hover:border-slate-700/80 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-medium text-slate-100">
                    {edu.institution}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 shrink-0">
                    {edu.period}
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {edu.degree}
                </div>
                <div className="pt-1">
                  <span className="text-xs font-mono text-slate-200 px-2.5 py-0.5 rounded bg-slate-800/80 border border-slate-750">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
