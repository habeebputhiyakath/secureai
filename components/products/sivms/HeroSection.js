'use client';
import { useEffect, useRef } from 'react';

export default function SivmsHeroSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('svh-vis');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.svh-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .svh-rev {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .svh-rev.svh-vis { opacity: 1; transform: none; }
        .svh-d0{transition-delay:0s}   .svh-d1{transition-delay:0.1s}
        .svh-d2{transition-delay:0.2s} .svh-d3{transition-delay:0.3s}
        .svh-d4{transition-delay:0.4s}

        @keyframes svhScan {
          0%   { top: 0% }
          100% { top: 100% }
        }
        .svh-scan {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(56,189,248,0.6) 50%, transparent);
          animation: svhScan 3.2s linear infinite;
          pointer-events: none;
        }
        @keyframes svhPulse {
          0%,100% { opacity:1; } 50% { opacity:0.25; }
        }
        .svh-pulse { animation: svhPulse 1.4s ease-in-out infinite; }

        .svh-chip {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 10px 20px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .svh-chip:hover {
          border-color: rgba(56,189,248,0.5);
          background: rgba(255,255,255,0.10);
          transform: translateY(-2px);
        }

        .svh-btn-primary {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #0161FE;
          background: #ffffff; border: 1.5px solid #ffffff;
          border-radius: 9999px; padding: 14px 32px;
          transition: background 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s;
          cursor: pointer; text-decoration: none;
        }
        .svh-btn-primary:hover {
          background: rgba(255,255,255,0.88);
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(0,0,0,0.18);
        }
        .svh-btn-secondary {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #fff;
          background: rgba(255,255,255,0.10);
          border: 1.5px solid rgba(255,255,255,0.3); border-radius: 9999px;
          padding: 14px 32px;
          transition: background 0.22s, transform 0.22s;
          cursor: pointer; text-decoration: none;
        }
        .svh-btn-secondary:hover {
          background: rgba(255,255,255,0.18);
          transform: translateY(-2px);
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden pt-15 min-h-[80vh] flex items-center border-b border-slate-800 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/products/sivms/hero.png')",
        }}
      >
        {/* Dot-grid overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Scan line */}
        <div className="svh-scan" />

        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(1,97,254,0.22), transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 40% 60%, rgba(14,165,233,0.12), transparent 65%)' }} />

        <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="svh-rev svh-d0 mb-7 flex items-center gap-3">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sky-300"
                style={{
                  background: 'rgba(14,165,233,0.12)',
                  border: '1px solid rgba(14,165,233,0.3)',
                  fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                }}
              >
                <span className="svh-pulse w-1.5 h-1.5 rounded-full bg-sky-400" />
                Enterprise Video Management System
              </span>
            </div>

            {/* Heading */}
            <h1 className="svh-rev svh-d1 font-extrabold leading-[1.05] tracking-tight text-white mb-6"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)' }}
            >
              SiVMS™
              <span className="block text-sky-400 mt-1" style={{ fontSize: '0.62em', fontWeight: 700 }}>
                Enterprise Video Management System Software
              </span>
            </h1>

            {/* Sub-heading */}
            <p className="svh-rev svh-d2 text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              Centralized Video Management for Intelligent Security
            </p>

            {/* CTAs */}
            <div className="svh-rev svh-d3 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#letstalk" className="svh-btn-primary">
                Request a Demo
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="#features" className="svh-btn-secondary">
                Explore Features
              </a>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}