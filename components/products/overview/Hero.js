'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function OverviewHero() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('oh-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.oh-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const pills = ['AI-Powered', 'Open Architecture', 'Enterprise-Grade', 'Real-Time Intelligence'];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .oh-section { font-family: 'DM Sans', sans-serif; }

        .oh-rev {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .oh-rev.oh-vis { opacity: 1; transform: none; }
        .oh-d0 { transition-delay: 0.00s; }
        .oh-d1 { transition-delay: 0.09s; }
        .oh-d2 { transition-delay: 0.18s; }
        .oh-d3 { transition-delay: 0.27s; }
        .oh-d4 { transition-delay: 0.36s; }

        /* dot grid */
        .oh-dotgrid::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.35;
        }

        .oh-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-family: 'JetBrains Mono', monospace;
        }

        .oh-accent-line {
          position: relative;
          display: inline-block;
        }
        .oh-accent-line::after {
          content: '';
          position: absolute;
          left: 0; bottom: -4px;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #3b82f6, #93c5fd);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.55s;
        }
        .oh-vis .oh-accent-line::after { transform: scaleX(1); }

        .oh-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(59,130,246,0.15);
          color: #bfdbfe;
          border: 1px solid rgba(59,130,246,0.3);
          transition: background 0.18s, border-color 0.18s;
          white-space: nowrap;
        }
        .oh-pill:hover {
          background: rgba(59,130,246,0.25);
          border-color: rgba(59,130,246,0.5);
        }

        .oh-stat {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.4rem;
          font-weight: 600;
          color: #0161FE;
          line-height: 1;
        }
        .oh-stat-label {
          font-size: 0.72rem;
          color: #94a3b8;
          font-weight: 500;
          margin-top: 3px;
        }

        .oh-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
          background: #0161FE;
          border: 1.5px solid #0161FE;
          border-radius: 9999px;
          padding: 13px 30px;
          transition: background 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
        }
        .oh-cta-primary:hover {
          background: #0052d6;
          box-shadow: 0 8px 24px rgba(1,97,254,0.28);
          transform: translateY(-2px);
        }
        .oh-cta-primary:hover svg { transform: translateX(3px); }
        .oh-cta-primary svg { transition: transform 0.2s; }

        .oh-cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f8fafc;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 9999px;
          padding: 13px 30px;
          transition: border-color 0.22s, color 0.22s, transform 0.22s, background 0.22s;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
        }
        .oh-cta-ghost:hover {
          border-color: #fff;
          color: #0f172a;
          background: #fff;
          transform: translateY(-2px);
        }

        @keyframes ohPulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }
        .oh-pulse { animation: ohPulse 1.6s ease-in-out infinite; }
      `}</style>

      <section
        ref={ref}
        className="oh-section oh-dotgrid relative overflow-hidden border-b border-slate-800"
        style={{ 
          paddingTop: '72px',
          backgroundImage: "url('/overview.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#0f172a'
        }}
      >
        {/* Blobs */}
        <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle at 40% 40%, #dbeafe, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle at 60% 60%, #e0f2fe, transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28">

          {/* Eyebrow */}
          <div className="oh-rev oh-d0 mb-6 flex items-center gap-3">
            <span
              className="oh-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: 'rgba(59,130,246,0.15)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.3)' }}
            >
              <span className="oh-pulse w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#60a5fa' }} />
              Software Overview
            </span>
          </div>

          {/* Heading */}
          <div className="oh-rev oh-d1 mb-6 max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.04] tracking-tight text-white">
              Intelligent Security<br />
              Software for{' '}
              <span className="oh-accent-line" style={{ color: '#60a5fa' }}>Modern Operations</span>
            </h1>
          </div>

          {/* Body */}
          <div className="oh-rev oh-d2 mb-10 max-w-2xl">
            <p className="text-slate-300 text-lg leading-relaxed">
              From enterprise video management and ANPR to smart parking and real-time tracking — a unified ecosystem for managing security, mobility, and operational efficiency. Built on open architecture, powered by AI.
            </p>
          </div>

          {/* Pills */}
          {/* <div className="oh-rev oh-d3 mb-12 flex flex-wrap gap-3">
            {pills.map(p => (
              <span key={p} className="oh-pill">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="#60a5fa" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                {p}
              </span>
            ))}
          </div> */}

          {/* CTAs */}
          <div className="oh-rev oh-d3 flex flex-wrap gap-4 mb-16">
            <a href="#products" className="oh-cta-primary">
              Explore Portfolio
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#demo" className="oh-cta-ghost">
              Request Demo
            </a>
          </div>

        
        </div>
      </section>
    </>
  );
}