'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'High Resolution Imaging',
    desc: 'From 2MP to 64MP, our cameras deliver pin-sharp detail for facial identification, licence plate capture, and forensic evidence — day or night.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  },
  {
    title: 'Low-Light Performance',
    desc: 'Starlight and IntelliSense sensors combined with adaptive IR illumination ensure full-colour imaging at near-zero lux — no blind spots after dark.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    stat: '< 0.001 Lux',
  },
  {
    title: 'AI Analytics',
    desc: 'On-device deep-learning models for object classification, facial recognition, crowd density measurement, and anomalous behaviour detection — all at the edge.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
    stat: '50+ AI Algorithms',
  },
  {
    title: 'Edge Processing',
    desc: 'Neural processing units (NPUs) embedded directly in the camera reduce latency to milliseconds, cut bandwidth consumption, and keep sensitive video data on-site.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.08)',
    stat: '< 50ms Latency',
  },
  {
    title: 'Weatherproof Design',
    desc: 'IP67/IP68 rated housings and IK10 impact resistance mean SecureAAI cameras perform flawlessly in desert heat, arctic cold, heavy rain, and industrial dust environments.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    stat: 'IP67 / IK10',
  },
  {
    title: 'Cybersecurity Protection',
    desc: 'AES-256 encrypted streams, secure boot, certificate-based authentication, and regular firmware security updates ensure your cameras are never the weak link.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.08)',
    stat: 'AES-256 Encrypted',
  },
];

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

        .ckf-card {
          transition: box-shadow 0.22s, transform 0.22s, border-color 0.22s;
          cursor: default;
        }
        .ckf-card:hover {
          box-shadow: 0 8px 36px rgba(0,0,0,0.09) !important;
          transform: translateY(-4px);
        }
        .ckf-stat {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem; font-weight: 700;
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-slate-100"
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '28px 28px', opacity: 0.9,
          }} />
        {/* Blob bottom-right */}
        <div className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-[0.06]"
          style={{ background: 'radial-gradient(circle at 40% 60%, #0161FE, transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Header */}
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

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="ckf-card bg-white rounded-2xl p-7 border border-slate-200"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              >
                {/* Icon + stat row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl"
                    style={{ background: f.bg, color: f.color }}
                  >
                    {f.icon}
                  </div>
                  <span className="ckf-stat px-3 py-1 rounded-full"
                    style={{ background: f.bg, color: f.color, border: `1px solid ${f.bg.replace('0.08', '0.2')}` }}
                  >
                    {f.stat}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
