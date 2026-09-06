import React from 'react';
import { EXPERIENCE, EDUCATION } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-12 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Experience */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Experience
          </h2>

          <div className="space-y-6">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-medium text-slate-100">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {exp.organization} • {exp.location}
                </div>
                <ul className="space-y-1 pt-2 list-disc list-outside pl-4 text-xs text-slate-400 leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <span className="text-slate-300">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Education
          </h2>

          <div className="space-y-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-medium text-slate-100">
                    {edu.institution}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {edu.period}
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  {edu.degree}
                </div>
                <div className="pt-2 text-xs font-mono text-slate-300">
                  {edu.score}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
