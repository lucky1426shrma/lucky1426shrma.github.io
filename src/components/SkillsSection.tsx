import React from 'react';
import { SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const categories = [
    {
      category: 'Languages',
      items: SKILLS.languages
    },
    {
      category: 'Frameworks & Libraries',
      items: SKILLS.frameworks
    },
    {
      category: 'Databases & Infrastructure',
      items: SKILLS.toolsAndDatabases
    },
    {
      category: 'Relevant Coursework',
      items: SKILLS.coursework
    },
    {
      category: 'Areas of Interest',
      items: SKILLS.interests
    }
  ];

  return (
    <section id="skills" className="py-12 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-8">
          Technical Skills & Coursework
        </h2>

        <div className="border border-slate-800/80 rounded-xl divide-y divide-slate-800/70 bg-slate-900/30 overflow-hidden">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline hover:bg-slate-850/40 transition-colors"
            >
              <div className="sm:col-span-4 text-xs font-mono text-slate-300 font-medium tracking-wide">
                {cat.category}
              </div>

              <div className="sm:col-span-8 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/60 text-slate-200 border border-slate-750 hover:border-slate-600 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
