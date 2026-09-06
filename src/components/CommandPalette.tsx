import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  FileText, 
  Copy, 
  Check, 
  Award, 
  Server, 
  Cpu, 
  Briefcase, 
  ExternalLink,
  Terminal,
  Code2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenArchitectureModal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenArchitectureModal
}) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const handleNavigate = (hash: string) => {
    onClose();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const allActions = [
    {
      group: 'Quick Navigation',
      items: [
        {
          id: 'nav-overview',
          label: 'Overview & Top Credentials',
          icon: <Award className="w-4 h-4 text-cyan-400" />,
          action: () => handleNavigate('#overview'),
        },
        {
          id: 'nav-arch',
          label: 'Interactive Systems Architecture Visualizer',
          icon: <Server className="w-4 h-4 text-amber-400" />,
          action: () => {
            onClose();
            onOpenArchitectureModal();
          },
        },
        {
          id: 'nav-projects',
          label: 'Projects (Caching Proxy, LangGraph, MCP)',
          icon: <Code2 className="w-4 h-4 text-blue-400" />,
          action: () => handleNavigate('#projects'),
        },
        {
          id: 'nav-competitive',
          label: 'Competitive Programming (LeetCode Knight, CF)',
          icon: <Award className="w-4 h-4 text-amber-400" />,
          action: () => handleNavigate('#competitive'),
        },
        {
          id: 'nav-skills',
          label: 'Technical Skills Matrix',
          icon: <Cpu className="w-4 h-4 text-violet-400" />,
          action: () => handleNavigate('#skills'),
        },
        {
          id: 'nav-experience',
          label: 'Experience & MNNIT Education',
          icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
          action: () => handleNavigate('#experience'),
        },
        {
          id: 'nav-contact',
          label: 'Contact & Hire Details',
          icon: <Terminal className="w-4 h-4 text-slate-400" />,
          action: () => handleNavigate('#contact'),
        },
      ]
    },
    {
      group: 'Direct Founder & Recruiter Actions',
      items: [
        {
          id: 'action-resume',
          label: 'Download Official PDF Resume',
          icon: <FileText className="w-4 h-4 text-cyan-400" />,
          action: () => {
            onClose();
            window.open(PERSONAL_INFO.resumeUrl, '_blank');
          },
        },
        {
          id: 'action-email',
          label: copied ? 'Copied to Clipboard!' : `Copy Email (${PERSONAL_INFO.email})`,
          icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />,
          action: handleCopyEmail,
        },
        {
          id: 'action-github',
          label: 'Open GitHub Profile (@lucky1426shrma)',
          icon: <GithubIcon className="w-4 h-4 text-white" />,
          action: () => {
            onClose();
            window.open(PERSONAL_INFO.github, '_blank');
          },
        },
        {
          id: 'action-linkedin',
          label: 'Connect on LinkedIn (Lucky Sharma)',
          icon: <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />,
          action: () => {
            onClose();
            window.open(PERSONAL_INFO.linkedin, '_blank');
          },
        },
        {
          id: 'action-leetcode',
          label: 'Verify LeetCode Knight Profile (Rating: 1974)',
          icon: <ExternalLink className="w-4 h-4 text-amber-400" />,
          action: () => {
            onClose();
            window.open(PERSONAL_INFO.leetcode, '_blank');
          },
        },
      ]
    }
  ];

  const filteredGroups = allActions.map(group => ({
    ...group,
    items: group.items.filter(item => 
      item.label.toLowerCase().includes(query.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 pb-4 bg-black/70 backdrop-blur-md">
      <div 
        className="w-full max-w-xl bg-[#090d16] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section (e.g. resume, proxy, leetcode)..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-slate-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.05] border border-white/10">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-4">
          {filteredGroups.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-slate-500">
              No matching commands or sections found for "{query}".
            </div>
          ) : (
            filteredGroups.map(group => (
              <div key={group.group}>
                <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-500">
                  {group.group}
                </div>
                <div className="space-y-1 mt-1">
                  {group.items.map(item => (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/[0.06] text-slate-300 hover:text-white flex items-center justify-between group transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-white/[0.04] group-hover:bg-white/[0.08]">
                          {item.icon}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with mouse or enter</span>
          <span className="text-cyan-400/70">Lucky Sharma Portfolio 2026</span>
        </div>

      </div>
    </div>
  );
};
