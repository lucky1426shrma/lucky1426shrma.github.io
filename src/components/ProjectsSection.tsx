import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-12 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-8">
          Selected Projects
        </h2>

        <div className="space-y-10">
          {PROJECTS.map((project, idx) => (
            <article 
              key={idx} 
              className="group rounded-xl p-5 -mx-5 hover:bg-slate-850/60 transition-colors border border-transparent hover:border-slate-800"
            >
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-medium text-slate-100 group-hover:text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-100 p-0.5 inline-flex items-center"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {project.date}
                </span>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-3.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-750"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bullet points from resume */}
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400 leading-relaxed list-disc list-outside pl-4">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-slate-400">
                    <span className="text-slate-300">{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
