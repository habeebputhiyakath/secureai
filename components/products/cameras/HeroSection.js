'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'ANPR Cameras',           href: '#anpr' },
  { label: 'Traffic Monitoring',     href: '#traffic' },
  { label: 'Parking Management',     href: '#parking' },
  { label: 'AI Analytics',           href: '#ai' },
  { label: 'Multi-Sensor',           href: '#multisensor' },
];

export default function CamerasHeroSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('ch-vis');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.ch-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
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
        .ch-d4{transition-delay:0.4s}

        @keyframes chScan { 0%{top:0%} 100%{top:100%} }
        .ch-scan {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(56,189,248,0.55) 50%, transparent);
          animation: chScan 3.4s linear infinite; pointer-events: none;
        }
        @keyframes chPulse { 0%,100%{opacity:1} 50%{opacity:0.25} }
        .ch-pulse { animation: chPulse 1.5s ease-in-out infinite; }

        .ch-quicklink {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 18px; border-radius: 9999px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          color: #cbd5e1; font-size: 0.75rem; font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .ch-quicklink:hover {
          background: rgba(1,97,254,0.25);
          border-color: rgba(1,97,254,0.5);
          color: #fff; transform: translateY(-2px);
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
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden flex items-center min-h-screen"
        style={{ background: 'linear-gradient(150deg, #020c1b 0%, #051428 45%, #081d3d 100%)' }}
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

        {/* Camera lens graphic — decorative */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center opacity-[0.06] pointer-events-none">
          <div className="w-[520px] h-[520px] rounded-full border border-white" />
          <div className="absolute w-[380px] h-[380px] rounded-full border border-white" />
          <div className="absolute w-[240px] h-[240px] rounded-full border border-white" />
          <div className="absolute w-[120px] h-[120px] rounded-full border border-white" />
          <div className="absolute w-[50px] h-[50px] rounded-full bg-white opacity-40" />
        </div>

        <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-36 lg:py-44">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="ch-rev ch-d0 mb-7">
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

            {/* Main heading */}
            <h1
              className="ch-rev ch-d1 font-extrabold tracking-tight text-white mb-4"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', lineHeight: 1.05 }}
            >
              Intelligent Cameras
            </h1>
            <p className="ch-rev ch-d2 mb-3"
              style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', fontWeight: 700, color: '#7dd3fc', lineHeight: 1.3 }}
            >
              AI-Powered Vision for Modern Security
            </p>
            <p className="ch-rev ch-d3 text-slate-400 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl">
              SecureAAI intelligent cameras combine advanced imaging technologies with AI capabilities to provide superior performance across surveillance, traffic monitoring, and smart parking applications.
            </p>

            {/* CTAs */}
            <div className="ch-rev ch-d4 flex flex-wrap gap-4 mb-14">
              <a href="#categories" className="ch-btn-primary">
                VIEW ALL CAMERAS
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#" className="ch-btn-secondary">REQUEST QUOTE</a>
            </div>

            {/* Quick-jump category chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2"
            >
              {quickLinks.map((q, i) => (
                <a key={i} href={q.href} className="ch-quicklink">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  {q.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(2,12,27,0.6))' }} />
      </section>
    </>
  );
}
