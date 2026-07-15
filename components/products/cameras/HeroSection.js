'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const specBullets = [
  '4-Sensor Independent Coverage',
  'Motorized Pan · Tilt · Rotation per Lens',
  '360° IR Illumination — up to 30m',
  'Dual 1TB SD Card Local Storage',
];

const tabs = [
  { id: 'overview',   label: 'Overview' },
  { id: 'categories', label: 'Camera Types' },
  { id: 'features',   label: 'Key Features' },
  { id: 'specs',      label: 'Specs & Mounting' },
];

export default function CamerasHeroSection() {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [tabSticky, setTabSticky] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('ch-vis');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.ch-rev').forEach(el => io.observe(el));

    const onScroll = () => setTabSticky(window.scrollY > 520);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <>
      <style>{`
        .ch-rev {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .ch-rev.ch-vis { opacity: 1; transform: none; }
        .ch-d0{transition-delay:0s}   .ch-d1{transition-delay:0.1s}
        .ch-d2{transition-delay:0.2s} .ch-d3{transition-delay:0.3s}
        .ch-d4{transition-delay:0.4s} .ch-d5{transition-delay:0.5s}

        @keyframes chScan { 0%{top:0%} 100%{top:100%} }
        .ch-scan {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(56,189,248,0.55) 50%, transparent);
          animation: chScan 3.4s linear infinite; pointer-events: none;
        }
        @keyframes chPulse { 0%,100%{opacity:1} 50%{opacity:0.25} }
        .ch-pulse { animation: chPulse 1.5s ease-in-out infinite; }

        .ch-spec-row {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.82rem; color: #cbd5e1; font-weight: 500;
        }
        .ch-spec-check {
          width: 18px; height: 18px; border-radius: 9999px; flex-shrink: 0;
          background: rgba(1,97,254,0.18); border: 1px solid rgba(56,189,248,0.4);
          display: flex; align-items: center; justify-content: center;
        }

        .ch-btn-primary {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #0161FE; background: #fff;
          border: 1.5px solid #fff; border-radius: 9999px; padding: 14px 32px;
          transition: background 0.22s, transform 0.22s, box-shadow 0.22s;
          cursor: pointer; text-decoration: none;
        }
        .ch-btn-primary:hover {
          background: rgba(255,255,255,0.88);
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(0,0,0,0.18);
        }
        .ch-btn-secondary {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #fff;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.28); border-radius: 9999px;
          padding: 14px 32px;
          transition: background 0.22s, transform 0.22s;
          cursor: pointer; text-decoration: none;
        }
        .ch-btn-secondary:hover { background: rgba(255,255,255,0.18); transform: translateY(-2px); }

        /* Quad-split signature visual */
        .ch-quad {
          position: relative; width: 100%; aspect-ratio: 1/1; max-width: 460px;
          border-radius: 24px; overflow: hidden;
          background: #020c1b;
          border: 1px solid rgba(56,189,248,0.25);
          box-shadow: 0 30px 90px rgba(1,10,30,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset;
        }
        .ch-quad-grid {
          position: absolute; inset: 0;
          display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr;
          gap: 2px; background: rgba(56,189,248,0.18);
        }
        .ch-quad-cell {
          position: relative; overflow: hidden;
          display: flex; align-items: flex-end;
        }
        .ch-quad-cell::after {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at 50% 30%, rgba(56,189,248,0.16), transparent 65%);
        }
        .ch-quad-label {
          position: relative; z-index: 2; font-family: 'JetBrains Mono', monospace;
          font-size: 0.55rem; font-weight: 700; letter-spacing: 0.08em;
          color: #7dd3fc; padding: 8px 10px; text-transform: uppercase;
        }
        .ch-quad-rec {
          position: absolute; top: 8px; right: 10px; z-index: 2;
          display: flex; align-items: center; gap: 4px;
          font-family: 'JetBrains Mono', monospace; font-size: 0.5rem;
          color: #f87171; font-weight: 700; letter-spacing: 0.06em;
        }
        .ch-quad-dot { width: 5px; height: 5px; border-radius: 9999px; background: #f87171; }
        .ch-quad-center {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 46px; height: 46px; border-radius: 9999px; z-index: 3;
          background: rgba(2,12,27,0.9); border: 1px solid rgba(1,97,254,0.5);
          display: flex; align-items: center; justify-content: center;
        }

        /* Sticky tab nav */
        .ch-tabnav {
          position: sticky; top: 0; z-index: 40;
          background: rgba(2,12,27,0.92); backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: box-shadow 0.25s;
        }
        .ch-tabnav.ch-tabnav-shadow { box-shadow: 0 8px 24px rgba(0,0,0,0.25); }
        .ch-tab {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #94a3b8;
          padding: 16px 4px; border-bottom: 2px solid transparent;
          cursor: pointer; background: none; border-top: none; border-left: none; border-right: none;
          transition: color 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .ch-tab:hover { color: #cbd5e1; }
        .ch-tab.ch-tab-active { color: #fff; border-bottom-color: #0161FE; }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden border-b p-10  border-slate-800"
        style={{ background: 'linear-gradient(160deg, #020c1b 0%, #05152f 55%, #071b3d 100%)' }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }} />
        <div className="ch-scan" />

        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 55% 35%, rgba(1,97,254,0.18), transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 40% 65%, rgba(14,165,233,0.10), transparent 65%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 pt-28 lg:pt-36 pb-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">

            {/* Left: copy */}
            <div>
              <div className="ch-rev ch-d0 mb-7 mt-10">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: 'rgba(14,165,233,0.12)',
                    border: '1px solid rgba(14,165,233,0.3)',
                    color: '#7dd3fc',
                    fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                  }}
                >
                  <span className="ch-pulse w-1.5 h-1.5 rounded-full bg-sky-400" />
                  SecureAAI Hardware — Intelligent Cameras
                </span>
              </div>

              <h1
                className="ch-rev ch-d1 font-extrabold tracking-tight text-white mb-4"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', lineHeight: 1.05 }}
              >
                One Camera.Every Angle Covered.
              </h1>
              <p className="ch-rev ch-d2 mb-3"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 700, color: '#7dd3fc', lineHeight: 1.3 }}
              >
                AI-Powered Vision for Modern Security
              </p>
              <p className="ch-rev ch-d3 text-slate-400 text-base sm:text-lg leading-relaxed mb-9 max-w-xl">
                SecureAAI intelligent cameras combine independent multi-sensor imaging with edge AI to replace multiple fixed units with one purpose-engineered device — across surveillance, traffic, and smart parking deployments.
              </p>

            

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-4"
              >
                <a href="#specs" className="ch-btn-primary">
                  VIEW SPECIFICATIONS
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a href="#categories" className="ch-btn-secondary">EXPLORE CAMERA TYPES</a>
              </motion.div>
            </div>

            {/* Right: quad-split signature visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="justify-self-center"
            >
              <div className="ch-quad">
                <div className="ch-quad-grid">
                  {['ANPR — LANE 01', 'TRAFFIC — NORTH', 'PARKING — BAY 12', 'PERIMETER — GATE'].map((label, i) => (
                    <div key={i} className="ch-quad-cell"
                      style={{ background: `linear-gradient(160deg, rgba(1,97,254,${0.10 + i * 0.03}) 0%, #020c1b 85%)` }}
                    >
                      <span className="ch-quad-rec"><span className="ch-quad-dot ch-pulse" />REC</span>
                      <span className="ch-quad-label">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="ch-quad-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M20.188 10.934a8.5 8.5 0 0 1 0 2.132M16.477 5.523a8.5 8.5 0 0 1 1.512 1.512M10.934 3.812a8.5 8.5 0 0 1 2.132 0M5.523 7.523a8.5 8.5 0 0 1 1.512-1.512M3.812 13.066a8.5 8.5 0 0 1 0-2.132M7.523 18.477a8.5 8.5 0 0 1-1.512-1.512M13.066 20.188a8.5 8.5 0 0 1-2.132 0M18.477 16.477a8.5 8.5 0 0 1-1.512 1.512" />
                  </svg>
                </div>
              </div>
              <p className="text-center text-slate-500 text-xs font-mono mt-4 tracking-wide">
                4 independent AI channels · one housing
              </p>
            </motion.div>
          </div>
        </div>

        {/* Sticky tab nav */}
        <div className={`ch-tabnav ${tabSticky ? 'ch-tabnav-shadow' : ''}`}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center gap-8 overflow-x-auto">
            {tabs.map(t => (
              <a
                key={t.id}
                href={`#${t.id}`}
                onClick={() => setActiveTab(t.id)}
                className={`ch-tab ${activeTab === t.id ? 'ch-tab-active' : ''}`}
              >
                {t.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}