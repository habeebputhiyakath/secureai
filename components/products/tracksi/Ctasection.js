'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function TracksiCtaSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('tcta-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.tcta-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .tcta-rev {
          opacity:0; transform:translateY(26px);
          transition:opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                     transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .tcta-rev.tcta-vis { opacity:1; transform:none; }
        .tcta-d0{transition-delay:0s}   .tcta-d1{transition-delay:0.08s}
        .tcta-d2{transition-delay:0.16s} .tcta-d3{transition-delay:0.24s}

        @keyframes tctaScan { 0%{top:0%} 100%{top:100%} }
        .tcta-scan {
          position:absolute; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(125,211,252,0.5) 50%,transparent);
          animation:tctaScan 3.4s linear infinite; pointer-events:none;
        }

        @keyframes tctaDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-4%, 5%) scale(1.05); }
        }
        @keyframes tctaDrift2 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(5%, -4%) scale(1.08); }
        }
        .tcta-orb-a { animation: tctaDrift 16s ease-in-out infinite; }
        .tcta-orb-b { animation: tctaDrift2 20s ease-in-out infinite; }

        @keyframes tctaOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .tcta-orbit-ring { animation: tctaOrbit 22s linear infinite; transform-origin: 50% 50%; }
        .tcta-orbit-ring-slow { animation: tctaOrbit 34s linear infinite reverse; transform-origin: 50% 50%; }

        @keyframes tctaPing {
          0% { transform: scale(1); opacity: .6; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        .tcta-ping { animation: tctaPing 2.4s cubic-bezier(0,0,.2,1) infinite; }

        @keyframes tctaFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .tcta-float { animation: tctaFloat 5s ease-in-out infinite; }

        .tcta-btn-primary {
          position: relative;
          display:inline-flex; align-items:center; gap:9px;
          font-size:0.72rem; font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#0b1a3a;
          background: linear-gradient(135deg, #ffffff, #dbeafe);
          border:1.5px solid rgba(255,255,255,0.9); border-radius:9999px; padding:14px 32px;
          transition:transform 0.25s, box-shadow 0.25s;
          cursor:pointer; text-decoration:none;
          box-shadow: 0 8px 24px rgba(56,189,248,0.25);
        }
        .tcta-btn-primary:hover {
          transform:translateY(-2px);
          box-shadow:0 14px 34px rgba(56,189,248,0.4);
        }
        .tcta-btn-secondary {
          display:inline-flex; align-items:center; gap:9px;
          font-size:0.72rem; font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#fff;
          background:rgba(255,255,255,0.08);
          border:1.5px solid rgba(255,255,255,0.25); border-radius:9999px;
          padding:14px 32px; backdrop-filter: blur(6px);
          transition:background 0.22s,transform 0.22s, border-color .22s;
          cursor:pointer; text-decoration:none;
        }
        .tcta-btn-secondary:hover { background:rgba(255,255,255,0.16); border-color: rgba(255,255,255,0.45); transform:translateY(-2px); }

        .tcta-mono { font-variant-numeric: tabular-nums; letter-spacing: .04em; }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden py-28 lg:py-36 border-t border-slate-100"
        style={{ background: 'radial-gradient(120% 140% at 50% 0%, #0f2454 0%, #0a1638 45%, #050b1c 100%)' }}
      >
        <div className="tcta-scan" />

        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(#7dd3fc 1px, transparent 1px), linear-gradient(90deg, #7dd3fc 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />

        {/* Drifting glow orbs */}
        <div className="tcta-orb-a absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full pointer-events-none opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, #38bdf8, transparent 70%)' }} />
        <div className="tcta-orb-b absolute -bottom-32 -left-24 w-[460px] h-[460px] rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }} />

        {/* Orbit signature — satellite tracking motif */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-70">
          <svg viewBox="0 0 600 600" className="w-[720px] h-[720px] max-w-none">
            <g className="tcta-orbit-ring-slow" style={{ transformBox: 'fill-box' }}>
              <ellipse cx="300" cy="300" rx="280" ry="120" fill="none" stroke="rgba(125,211,252,0.12)" strokeWidth="1" />
            </g>
            <g className="tcta-orbit-ring" style={{ transformBox: 'fill-box' }}>
              <ellipse cx="300" cy="300" rx="200" ry="200" fill="none" stroke="rgba(125,211,252,0.1)" strokeWidth="1" strokeDasharray="2 6" />
              <circle cx="500" cy="300" r="4" fill="#7dd3fc" />
              <circle className="tcta-ping" cx="500" cy="300" r="4" fill="none" stroke="#7dd3fc" strokeWidth="1" style={{ transformOrigin: '500px 300px' }} />
            </g>
          </svg>
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="tcta-rev tcta-d0 tcta-float mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(125,211,252,0.3)',
                color: '#e0f2fe',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                backdropFilter: 'blur(6px)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Hardware Available Now
            </div>

            <h2 className="tcta-rev tcta-d1 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] mb-6">
              <span className="text-white">Track Your </span>
              <span style={{
                background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}>
                Fleet
              </span>
              <span className="text-white"> Today.</span>
            </h2>

            <p className="tcta-rev tcta-d2 text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12">
              Optimize routes, improve safety, and gain total visibility over your mobile assets with the TrackSi™ GPS Ecosystem.
            </p>

            <div className="tcta-rev tcta-d3 flex flex-wrap items-center justify-center gap-4">
              <a href="#" className="tcta-btn-primary">
                REQUEST A DEMO
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#" className="tcta-btn-secondary">CONTACT SALES</a>
            </div>

            <div className="tcta-rev tcta-d3 tcta-mono mt-10 flex items-center justify-center gap-2 text-[11px] text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400/70" />
              12,400+ vehicles tracked worldwide
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}