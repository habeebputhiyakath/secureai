'use client';
import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";


const features = [
  { icon: '🛡️', title: 'Military-Grade Security', desc: 'End-to-end encryption' },
  { icon: '🤖', title: 'Self-Learning AI',         desc: 'Adaptive threat detection' },
  { icon: '🔗', title: 'Open Integration',          desc: 'REST APIs & legacy support' },
  { icon: '⚡', title: 'Real-Time Processing',      desc: 'Edge AI at millisecond speed' },
];

const stats = [
  { value: '500+',  label: 'Enterprise clients' },
  { value: '15+',   label: 'Countries deployed' },
  { value: '98.7%', label: 'ANPR accuracy' },
  { value: '24/7',  label: 'Support coverage' },
];

const cameras = Array.from({ length: 6 });

export default function AboutSection() {
  const ref = useRef(null);

  /* ── Reveal on scroll ── */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('ab-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.ab-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .ab-section { font-family: 'DM Sans', sans-serif; }

        /* Reveal */
        .ab-rev {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .ab-rev.ab-vis { opacity: 1; transform: none; }
        .ab-d0 { transition-delay: 0.00s; }
        .ab-d1 { transition-delay: 0.08s; }
        .ab-d2 { transition-delay: 0.16s; }
        .ab-d3 { transition-delay: 0.24s; }
        .ab-d4 { transition-delay: 0.32s; }
        .ab-d5 { transition-delay: 0.40s; }

        /* Dot grid bg */
        .ab-dotgrid::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.45;
        }

        /* Scan line */
        .ab-scan {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #38bdf8 50%, transparent);
          opacity: 0.55;
          animation: abScan var(--dur,2.4s) linear infinite;
          top: 0;
        }
        @keyframes abScan { 0%{top:0%} 100%{top:100%} }

        /* Float */
        @keyframes abFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        .ab-float-1 { animation: abFloat 3.6s ease-in-out infinite; }
        .ab-float-2 { animation: abFloat 3.6s ease-in-out infinite; animation-delay: 1.8s; }

        /* Heading accent underline */
        .ab-accent-line {
          position: relative;
          display: inline-block;
        }
        .ab-accent-line::after {
          content: '';
          position: absolute;
          left: 0; bottom: -3px;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #0161FE, #5b9fff);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.55s;
        }
        .ab-vis .ab-accent-line::after { transform: scaleX(1); }

        /* Pill eyebrow */
        .ab-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* Feature card hover */
        .ab-feat:hover {
          border-color: #a3c4fe !important;
          box-shadow: 0 4px 20px rgba(1,97,254,0.09);
          transform: translateY(-2px);
        }

        /* CTA pill button */
        .ab-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffffff;
          background: #0161FE;
          border: 1.5px solid #0161FE;
          border-radius: 9999px;
          padding: 13px 30px;
          transition: background 0.22s, color 0.22s, border-color 0.22s,
                      transform 0.22s, box-shadow 0.22s;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
        }
        .ab-cta-btn:hover {
          background: #ffffff;
          color: #0161FE;
          border-color: #0161FE;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(1,97,254,0.22);
        }
        .ab-cta-btn:hover svg { transform: translateX(3px); }
        .ab-cta-btn svg { transition: transform 0.2s; }

        /* Stat strip */
        .ab-stat-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.05rem;
          font-weight: 600;
          color: #0161FE;
        }

        /* Monitor status bar */
        .ab-mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes abPulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.25; }
        }
        .ab-pulse-dot { animation: abPulse 1.4s ease-in-out infinite; }
      `}</style>

      <section
        ref={ref}
        className="ab-section ab-dotgrid relative overflow-hidden bg-white pt-0 pb-24 lg:py-32 border-t border-slate-100"
      >
        {/* Soft blue blobs */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle at 40% 40%, #dbeafe, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle at 60% 60%, #e0f2fe, transparent 70%)' }} />

        {/* ── Same container as EcosystemSection ── */}
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* ══════════════════════════════
                LEFT COLUMN
            ══════════════════════════════ */}
            <div className="flex flex-col">

              {/* Eyebrow pill */}
              <div className="ab-rev ab-d0 mb-6 self-start">
                <span
                  className="ab-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Global Security Standard Certified
                </span>
              </div>

              {/* Heading */}
              <h2
                className="ab-rev ab-d1 text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-900 mb-5"
              >
                Building Smarter &amp;<br />
                <span className="ab-accent-line" style={{ color: '#0161FE' }}>Safer Environments</span><br />
                with AI
              </h2>

              {/* Body */}
              <p className="ab-rev ab-d2 text-slate-500 text-base sm:text-lg leading-relaxed mb-3">
                SecureAAI Systems delivers next-generation AI-powered security solutions including ANPR, Video Management Systems, Smart Parking, and Intelligent Video Analytics.
              </p>

              {/* Feature grid */}
              <div className="ab-rev ab-d3 grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="ab-feat flex items-center gap-4 px-4 py-2 rounded-full bg-white border border-slate-700 cursor-default transition-all duration-200"
                    style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}
                  >
                    <p className="text-lg font-normal text-slate-800 leading-snug">{f.title}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="ab-rev ab-d4">
                <a href="#" className="ab-cta-btn">
                  ABOUT US
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ══════════════════════════════
                RIGHT COLUMN — Visual
            ══════════════════════════════ */}
            <div className="relative">
              {/* Main Image */}
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden rounded-[32px]"
              >
                <img
                  src="/about.png"
                  alt="ANPR"
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>

              {/* Floating Accuracy Card */}
              <div
                className="absolute top-8 -left-6 bg-white rounded-2xl px-5 py-4"
                style={{ boxShadow: "0 12px 40px rgba(0,0,0,.12)" }}
              >
                <p className="text-xs text-slate-500">Recognition Accuracy</p>
                <h3 className="text-2xl font-bold" style={{ color: '#0161FE' }}>
                  98.7%
                </h3>
              </div>

              {/* Floating Live Detection Card */}
              <div
                className="absolute bottom-8 -right-6 bg-white rounded-2xl px-5 py-4"
                style={{ boxShadow: "0 12px 40px rgba(0,0,0,.12)" }}
              >
                <p className="text-xs text-slate-500">Live Detection</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="font-semibold">Active</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}