import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface CinematicIntroProps {
  onComplete?: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [squint, setSquint] = useState(false);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [isExiting, setIsExiting] = useState(false);

  // Sound synthesis
  const playSound = (type: 'thwip' | 'sense' | 'enter') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      if (type === 'enter') {
        // High-velocity web shoot & snap
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(850, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'sense') {
        // Spider-sense tingle
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(540, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      }
    } catch {
      // Audio context restricted
    }
  };

  // Canvas Web Strings & Spider-Sense Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Dynamic web anchor points
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const nodeCount = Math.min(35, Math.floor(width / 40));
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
      });
    }

    let pulseRadius = 0;
    let pulseAlpha = 0.5;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Spider-Sense Radar Ring
      pulseRadius += 2.2;
      pulseAlpha -= 0.004;
      if (pulseAlpha <= 0) {
        pulseRadius = 40;
        pulseAlpha = 0.45;
      }
      ctx.save();
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, pulseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(220, 38, 38, ${Math.max(0, pulseAlpha)})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Secondary blue pulse
      ctx.save();
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.max(0, pulseRadius - 60), 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(56, 189, 248, ${Math.max(0, pulseAlpha * 0.5)})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Connect Nodes with Glowing Web Strands
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.18 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
      }

      // Draw web spokes from center mask out to edges
      const cx = width / 2;
      const cy = height / 2;
      ctx.strokeStyle = 'rgba(220, 38, 38, 0.08)';
      ctx.lineWidth = 0.8;
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * width, cy + Math.sin(a) * height);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Periodic Spidey blink / eye squint animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setSquint(true);
      setTimeout(() => setSquint(false), 220);
    }, 2800);

    return () => clearInterval(blinkInterval);
  }, []);

  // Mouse move makes the lenses track the cursor subtly
  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
    setEyeOffset({ x: x * 12, y: y * 8 });
  };

  const handleEnter = () => {
    if (isExiting) return;
    setIsExiting(true);
    playSound('enter');
    setTimeout(() => {
      document.body.style.overflow = '';
      onComplete?.();
    }, 450);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExiting]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={handleEnter}
      className={`fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden cursor-pointer select-none transition-all duration-500 ${
        isExiting ? 'scale-150 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
      }`}
    >
      {/* Background Interactive Web Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Spider-Sense Electric Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-red-600/20 via-sky-500/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Top Bar Controls */}
      <div 
        className="absolute top-6 right-6 flex items-center gap-3 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="text-neutral-500 hover:text-neutral-200 p-2 text-xs font-mono flex items-center gap-1.5 transition-colors bg-neutral-950/70 rounded-full border border-neutral-800"
          title={soundEnabled ? "Mute audio" : "Enable sound FX"}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-red-500" /> : <VolumeX className="w-4 h-4" />}
          <span className="hidden sm:inline">{soundEnabled ? 'FX ON' : 'FX OFF'}</span>
        </button>

        <button
          onClick={handleEnter}
          className="text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white px-3.5 py-1.5 rounded-full border border-neutral-800 hover:border-red-500 bg-neutral-950/70 backdrop-blur-sm transition-all"
        >
          Skip [ESC]
        </button>
      </div>

      {/* Central Mask & Interactive HUD */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-xl px-6 text-center">
        
        {/* Animated Spider-Man Mask Container */}
        <div 
          className="relative w-80 h-48 sm:w-[420px] sm:h-60 flex items-center justify-center transition-transform duration-150 ease-out"
          style={{ transform: `translate3d(${eyeOffset.x}px, ${eyeOffset.y}px, 0)` }}
        >
          {/* Glowing Red Backlight */}
          <div className="absolute w-56 h-56 bg-red-600/30 rounded-full blur-3xl pointer-events-none" />

          {/* SVG Animated Spidey Lenses */}
          <svg
            viewBox="0 0 400 200"
            className="w-full h-full drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center Neon Red Spider Emblem with glowing legs */}
            <g className="transition-all duration-300">
              <path
                d="M 200 80 L 200 115 M 193 88 L 178 72 L 160 80 M 207 88 L 222 72 L 240 80 M 192 98 L 172 103 L 158 122 M 208 98 L 228 103 L 242 122 M 194 108 L 178 132 L 166 154 M 206 108 L 222 132 L 234 154"
                stroke="#ef4444"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="200" cy="92" r="5" fill="#ef4444" />
              <ellipse cx="200" cy="106" rx="4" ry="7" fill="#ef4444" />
            </g>

            {/* Left Eye Lens (Spider-Man Mask) */}
            <g className={`transition-all duration-200 origin-[140px_100px] ${squint ? 'scale-y-[0.6] scale-x-[0.95]' : 'scale-y-100 scale-x-100'}`}>
              {/* Outer Bold Carbon Frame */}
              <path
                d="M 180 50 C 130 55 90 95 78 138 C 108 144 148 132 180 108 Z"
                fill="#080808"
                stroke="#1c1c1c"
                strokeWidth="5.5"
              />
              {/* Inner Glowing White / Electric Silver Lens */}
              <path
                d="M 172 58 C 132 64 98 98 88 130 C 114 135 146 124 172 104 Z"
                fill="url(#spidey-lens-gradient-left)"
                stroke="#ffffff"
                strokeWidth="2"
              />
              {/* Lens Glint / Highlight line */}
              <path
                d="M 155 70 C 130 76 108 102 100 120"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>

            {/* Right Eye Lens (Spider-Man Mask) */}
            <g className={`transition-all duration-200 origin-[260px_100px] ${squint ? 'scale-y-[0.6] scale-x-[0.95]' : 'scale-y-100 scale-x-100'}`}>
              {/* Outer Bold Carbon Frame */}
              <path
                d="M 220 50 C 270 55 310 95 322 138 C 292 144 252 132 220 108 Z"
                fill="#080808"
                stroke="#1c1c1c"
                strokeWidth="5.5"
              />
              {/* Inner Glowing White / Electric Silver Lens */}
              <path
                d="M 228 58 C 268 64 302 98 312 130 C 286 135 254 124 228 104 Z"
                fill="url(#spidey-lens-gradient-right)"
                stroke="#ffffff"
                strokeWidth="2"
              />
              {/* Lens Glint / Highlight line */}
              <path
                d="M 245 70 C 270 76 292 102 300 120"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="spidey-lens-gradient-left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <linearGradient id="spidey-lens-gradient-right" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Text Header */}
        <div className="mt-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/40 text-red-400 text-[10px] font-mono tracking-[0.3em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <span>PETER PARKER</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-mono font-extrabold tracking-wider text-white">
            LUCKY SHARMA
          </h1>

          <p className="text-xs font-mono text-neutral-400 tracking-wider">
            MNNIT ALLAHABAD // SYSTEMS &bull; CP &bull; AGENTS
          </p>
        </div>

        {/* Big Glowing Enter Button */}
        <div className="mt-10">
          <div className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono text-xs tracking-widest uppercase shadow-[0_0_35px_rgba(220,38,38,0.55)] hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] transition-all transform hover:scale-105 active:scale-95 border border-red-400/40">
            <span>CLICK TO ENTER PORTFOLIO</span>
            <span className="font-bold">→</span>
          </div>
        </div>

        <div className="mt-4 text-[10px] font-mono text-neutral-500 tracking-widest uppercase">
          [ OR CLICK ANYWHERE ON SCREEN ]
        </div>

      </div>
    </div>
  );
};
