'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Edge AI Units',         href: '#edge' },
  { label: 'GPU Servers',           href: '#gpu' },
  { label: 'Video Processing',      href: '#vpu' },
  { label: 'Storage Appliances',    href: '#storage' },
];

export default function ProcessingHeroSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('ph-vis');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.ph-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ph-rev {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .ph-rev.ph-vis { opacity: 1; transform: none; }
        .ph-d0{transition-delay:0s}   .ph-d1{transition-delay:0.1s}
        .ph-d2{transition-delay:0.2s} .ph-d3{transition-delay:0.3s}
        .ph-d4{transition-delay:0.4s}

        @keyframes phScan { 0%{top:0%} 100%{top:100%} }
        .ph-scan {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(167,139,250,0.5) 50%, transparent);
          animation: phScan 3.6s linear infinite; pointer-events: none;
        }
        @keyframes phPulse { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .ph-pulse { animation: phPulse 1.5s ease-in-out infinite; }

        @keyframes phGrid {
          0%   { transform: translateY(0); }
          100% { transform: translateY(28px); }
        }

        .ph-quicklink {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 18px; border-radius: 9999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          color: #c4b5fd; font-size: 0.75rem; font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .ph-quicklink:hover {
          background: rgba(124,58,237,0.25);
          border-color: rgba(124,58,237,0.5);
          color: #fff; transform: translateY(-2px);
        }
        .ph-btn-primary {
          display:inline-flex; align-items:center; gap:9px;
          font-size:0.72rem; font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#6d28d9; background:#fff;
          border:1.5px solid #fff; border-radius:9999px; padding:14px 32px;
          transition:background 0.22s,transform 0.22s,box-shadow 0.22s;
          cursor:pointer; text-decoration:none;
        }
        .ph-btn-primary:hover {
          background:rgba(255,255,255,0.88); transform:translateY(-2px);
          box-shadow:0 10px 32px rgba(0,0,0,0.18);
        }
        .ph-btn-secondary {
          display:inline-flex; align-items:center; gap:9px;
          font-size:0.72rem; font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#fff;
          background:rgba(255,255,255,0.1);
          border:1.5px solid rgba(255,255,255,0.25); border-radius:9999px;
          padding:14px 32px;
          transition:background 0.22s,transform 0.22s;
          cursor:pointer; text-decoration:none;
        }
        .ph-btn-secondary:hover { background:rgba(255,255,255,0.18); transform:translateY(-2px); }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden flex items-center min-h-screen"
        style={{ background: 'linear-gradient(150deg, #0d0520 0%, #180b38 45%, #1e0f47 100%)' }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(167,139,250,0.08) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }} />
        <div className="ph-scan" />

        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 60% 35%, rgba(109,40,217,0.22), transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 40% 65%, rgba(79,70,229,0.12), transparent 65%)' }} />

        {/* Decorative CPU grid graphic */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block opacity-[0.05] pointer-events-none select-none">
          <div className="grid grid-cols-6 gap-3">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-10 h-10 rounded border border-white" />
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-36 lg:py-44">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="ph-rev ph-d0 mb-7">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(124,58,237,0.15)',
                  border: '1px solid rgba(124,58,237,0.35)',
                  color: '#c4b5fd',
                  fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                }}
              >
                <span className="ph-pulse w-1.5 h-1.5 rounded-full bg-violet-400" />
                SecureAAI Hardware — Digital Processing Units
              </span>
            </div>

            {/* Heading */}
            <h1
              className="ph-rev ph-d1 font-extrabold tracking-tight text-white mb-4"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', lineHeight: 1.05 }}
            >
              Digital Processing<br />Units
            </h1>
            <p
              className="ph-rev ph-d2 mb-3"
              style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', fontWeight: 700, color: '#c4b5fd', lineHeight: 1.3 }}
            >
              Intelligent Computing for Advanced Analytics
            </p>
            <p className="ph-rev ph-d3 text-slate-400 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl">
              SecureAAI Digital Processing Units provide powerful edge and centralized computing capabilities to support AI analytics, video processing, and large-scale deployments.
            </p>

            {/* CTAs */}
            <div className="ph-rev ph-d4 flex flex-wrap gap-4 mb-14">
              <a href="#solutions" className="ph-btn-primary">
                VIEW SOLUTIONS
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#" className="ph-btn-secondary">REQUEST QUOTE</a>
            </div>

            {/* Quick-jump chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2"
            >
              {quickLinks.map((q, i) => (
                <a key={i} href={q.href} className="ph-quicklink">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="12" y1="17" x2="12" y2="21" /><line x1="8" y1="21" x2="16" y2="21" />
                  </svg>
                  {q.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(13,5,32,0.65))' }} />
      </section>
    </>
  );
}
