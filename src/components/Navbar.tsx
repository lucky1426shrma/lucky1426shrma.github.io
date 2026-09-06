import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  return (
    <header className="border-b border-slate-800/80 bg-[#0d1117]/90 backdrop-blur-sm sticky top-0 z-30">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#about" className="group">
          <span className="font-medium text-slate-100 group-hover:text-white transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-xs text-slate-400 block font-mono">
            MNNIT Allahabad '28
          </span>
        </a>

        <nav className="flex items-center gap-4 sm:gap-5 text-xs sm:text-sm font-medium text-slate-400">
          <a href="#projects" className="hover:text-slate-200 transition-colors">
            Projects
          </a>
          <a href="#competitive" className="hover:text-slate-200 transition-colors">
            Contests
          </a>
          <a href="#experience" className="hover:text-slate-200 transition-colors">
            Experience
          </a>
          <a 
            href={PERSONAL_INFO.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              className="text-slate-500 hover:text-red-400 text-sm transition-colors px-1"
              title="Replay Spider-Man Intro Animation"
              aria-label="Replay Intro"
            >
              🕷️
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
