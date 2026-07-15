'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'High Resolution Imaging',
    desc: 'From 2MP to 64MP, our cameras deliver pin-sharp detail for facial identification, licence plate capture, and forensic evidence — day or night.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="12" cy="12" r="4" />
        <line x1="3" y1="8" x2="21" y2="8" />
        <line x1="3" y1="16" x2="21" y2="16" />
        <line x1="8" y1="3" x2="8" y2="21" />
        <line x1="16" y1="3" x2="16" y2="21" />
      </svg>
    ),
    color: '#0161FE',
    bg: 'rgba(1,97,254,0.08)',
    stat: 'Up to 64MP',
    hero: true,
  },
  {
    title: 'Low-Light Performance',
    desc: 'Starlight and IntelliSense sensors with adaptive IR illumination for full-colour imaging at near-zero lux.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    stat: '< 0.001 Lux',
  },
  {
    title: 'AI Analytics',
    desc: 'On-device deep-learning for object, facial, crowd, and behaviour detection — all at the edge.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
    stat: '50+ Algorithms',
  },
  {
    title: 'Edge Processing',
    desc: 'Embedded NPUs cut latency to milliseconds and keep sensitive video data on-site.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.08)',
    stat: '< 50ms Latency',
  },
  {
    title: 'Weatherproof Design',
    desc: 'IP67/IP68 housings and IK10 impact resistance for extreme heat, cold, rain, and dust.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    stat: 'IP67 / IK10',
  },
 
];

function FeatureCard({ f, i }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50, active: false });

  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      rx: (0.5 - py) * 7,
      ry: (px - 0.5) * 7,
      mx: px * 100,
      my: py * 100,
      active: true,
    });
  };
  const handleLeave = () => setTilt(t => ({ ...t, rx: 0, ry: 0, active: false }));

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`ckf-card ${f.hero ? 'ckf-hero' : ''}`}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        '--mx': `${tilt.mx}%`,
        '--my': `${tilt.my}%`,
        '--spot-color': f.color,
      }}
    >
      <div className="ckf-spotlight" style={{ opacity: tilt.active ? 1 : 0 }} />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-5">
          <motion.div
            className="ckf-icon"
            style={{ background: f.bg, color: f.color }}
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300, damping: 12 }}
          >
            {f.icon}
          </motion.div>
          <span className="ckf-stat" style={{ background: f.bg, color: f.color, border: `1px solid ${f.color}33` }}>
            <span className="ckf-stat-dot" style={{ background: f.color }} />
            {f.stat}
          </span>
        </div>

        <h3 className={`font-extrabold text-slate-900 mb-2 ${f.hero ? 'text-xl sm:text-2xl' : 'text-base'}`}>
          {f.title}
        </h3>
        <span className="ckf-underline" style={{ background: f.color }} />
        <p className={`text-slate-500 leading-relaxed mt-3 ${f.hero ? 'text-sm sm:text-base max-w-md' : 'text-sm'}`}>
          {f.desc}
        </p>

        {f.hero && (
          <div className="ckf-hero-visual mt-auto pt-6">
            <div className="ckf-hero-bars">
              {[0.3, 0.55, 0.8, 1, 0.65].map((h, k) => (
                <motion.span
                  key={k}
                  className="ckf-hero-bar"
                  style={{ background: f.color }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: h }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + k * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </div>
            <span className="ckf-hero-caption">Resolution range, 2MP → 64MP</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function CamerasKeyFeaturesSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('ckf-vis');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.ckf-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ckf-rev {
          opacity: 0; transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .ckf-rev.ckf-vis { opacity: 1; transform: none; }
        .ckf-d0{transition-delay:0s} .ckf-d1{transition-delay:0.08s}
        .ckf-d2{transition-delay:0.16s}

        .ckf-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(200px, auto);
          grid-auto-flow: dense;
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .ckf-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .ckf-grid { grid-template-columns: 1fr; }
        }

        .ckf-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          padding: 28px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
          will-change: transform;
        }
        .ckf-card:hover {
          box-shadow: 0 20px 48px rgba(15,23,42,0.1);
          border-color: rgba(1,97,254,0.25);
        }
        .ckf-hero {
          grid-column: span 2;
          grid-row: span 2;
        }
        @media (max-width: 640px) {
          .ckf-hero { grid-column: span 1; }
        }

        .ckf-spotlight {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: radial-gradient(360px circle at var(--mx) var(--my), color-mix(in srgb, var(--spot-color) 12%, transparent), transparent 70%);
          transition: opacity 0.25s ease;
        }

        .ckf-icon {
          width: 52px; height: 52px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
        }

        .ckf-stat {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.66rem; font-weight: 700;
          padding: 5px 12px; border-radius: 9999px;
          display: inline-flex; align-items: center; gap: 6px;
          white-space: nowrap; height: fit-content;
        }
        .ckf-stat-dot { width: 5px; height: 5px; border-radius: 9999px; }

        .ckf-underline {
          display: block; width: 26px; height: 3px; border-radius: 9999px;
          transition: width 0.3s ease;
        }
        .ckf-card:hover .ckf-underline { width: 46px; }

        .ckf-hero-bars {
          display: flex; align-items: flex-end; gap: 8px; height: 64px;
        }
        .ckf-hero-bar {
          width: 14px; border-radius: 6px 6px 2px 2px;
          transform-origin: bottom;
          height: 100%;
          opacity: 0.85;
        }
        .ckf-hero-caption {
          display: block; margin-top: 10px;
          font-family: 'JetBrains Mono', monospace; font-size: 0.65rem;
          color: #94a3b8; letter-spacing: 0.02em;
        }
      `}</style>

      <section
        ref={ref}
        id="features"
        className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-slate-100"
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '28px 28px', opacity: 0.9,
          }} />
        <div className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-[0.06]"
          style={{ background: 'radial-gradient(circle at 40% 60%, #0161FE, transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
            <div>
              <div className="ckf-rev ckf-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(1,97,254,0.07)', color: '#0161FE',
                  border: '1px solid rgba(1,97,254,0.18)',
                  fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}
              >
                Key Features
              </div>
              <h2 className="ckf-rev ckf-d1 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Built for the<br />
                <span style={{ color: '#0161FE' }}>Harshest Conditions</span>
              </h2>
            </div>
            <p className="ckf-rev ckf-d2 text-slate-500 text-base sm:text-lg leading-relaxed lg:pb-2">
              Every SecureAAI camera integrates six foundational engineering principles — ensuring reliability, intelligence, and security no matter where it's deployed.
            </p>
          </div>

          <div className="ckf-grid">
            {features.map((f, i) => (
              <FeatureCard key={i} f={f} i={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}