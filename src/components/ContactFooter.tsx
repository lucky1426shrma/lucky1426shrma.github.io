import React from 'react';
import { Mail, Phone, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="py-16 bg-[#0d1117] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        
        <div className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Contact
          </h2>
          <p className="text-sm text-slate-300 max-w-lg">
            Feel free to reach out directly via email or phone for software engineering opportunities, collaborations, or contest discussion.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-300">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <span className="text-slate-700 hidden sm:inline">•</span>

          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>

          <span className="text-slate-700 hidden sm:inline">•</span>

          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Lucky_Sharma_Resume.pdf"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>Download Resume PDF</span>
          </a>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-slate-200 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-slate-200 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-slate-200 transition-colors"
            >
              <span>LeetCode</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href={PERSONAL_INFO.codeforces}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-slate-200 transition-colors"
            >
              <span>Codeforces</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href={PERSONAL_INFO.codechef}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-slate-200 transition-colors"
            >
              <span>CodeChef</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          <div>
            © {new Date().getFullYear()} Lucky Sharma
          </div>
        </div>

      </div>
    </footer>
  );
};
