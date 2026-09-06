import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-16 pb-12 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bio & Details */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">
                {PERSONAL_INFO.name}
              </h1>
              <span className="text-sm font-mono text-slate-400">
                Prayagraj, India
              </span>
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              Undergraduate at{' '}
              <span className="text-slate-100 font-medium">
                Motilal Nehru National Institute of Technology Allahabad
              </span>{' '}
              (CPI: 8.51, Batch of 2028).
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              I like AI Engineering, Agents, Backend, Scalable - Distributed systems and DSA. Active in algorithmic contests with a LeetCode Knight rating (1974, top 2.9%) and building production-grade agentic workflows and high-throughput systems.
            </p>

            {/* Clean contact & profile links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 hover:text-slate-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <span className="text-slate-700">•</span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-slate-200 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github/{PERSONAL_INFO.githubHandle}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>

              <span className="text-slate-700">•</span>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-slate-200 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>linkedin/lucky-sharma</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>

              <span className="text-slate-700">•</span>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-slate-200 transition-colors"
              >
                <span>leetcode (1974)</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Lord Hanuman Artwork Card */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="relative group w-48 sm:w-56 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/60 p-2 shadow-2xl transition-all hover:border-slate-700">
              <div className="relative overflow-hidden rounded-xl aspect-[9/15]">
                <img
                  src={`${import.meta.env.BASE_URL}hanuman.webp`}
                  alt="Lord Hanuman In Devotion and Focus"
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 ease-out scale-[1.01] group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity pointer-events-none" />
              </div>
              <div className="pt-2 pb-1 text-center font-mono text-[10px] text-slate-400 group-hover:text-slate-300 tracking-widest uppercase transition-colors">
                Focus • Devotion • Strength
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
