import React from 'react';
import { EDUCATION } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="education" className="py-12 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
          Education
        </h2>

        <div className="border border-slate-800/80 rounded-xl p-5 sm:p-6 bg-slate-900/30">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-medium text-slate-100">
                  {edu.institution}
                </h3>
                <div className="text-xs text-slate-400 font-mono">
                  {edu.degree}
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2">
                <span className="text-xs font-mono text-slate-400">
                  {edu.period}
                </span>
                <span className="text-xs font-mono text-slate-200 px-2.5 py-0.5 rounded bg-slate-800/80 border border-slate-750">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
