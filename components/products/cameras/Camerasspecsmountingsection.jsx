'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const specHighlights = [
  { label: 'Sensors',       value: '4 × 5MP',        sub: 'Motorized 3–9mm, F1.6' },
  { label: 'IR Distance',   value: '30m',            sub: '360° illumination' },
  { label: 'WDR',           value: '120dB',          sub: 'Super WDR' },
  { label: 'Storage',       value: '2 × 1TB',        sub: 'MicroSD, dual-slot' },
  { label: 'Protection',    value: 'IP66 / IK10',    sub: 'Weatherproof · impact-rated' },
  { label: 'Power',         value: 'PoE / 12V DC',   sub: '802.3at, max 22.4W' },
];

const mounts = [
  {
    name: 'Wall Mount',
    desc: 'Standard bracket for flush wall or parapet installation.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="1" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    name: 'Pole Mount',
    desc: 'Strap-mounts to poles between 67–127mm diameter.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22" /><rect x="7" y="8" width="10" height="6" rx="1" />
      </svg>
    ),
  },
  {
    name: 'Corner Mount',
    desc: 'External corner bracket for building edge placement.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20V4h16" /><path d="M4 12h8v8" />
      </svg>
    ),
  },
  {
    name: 'Ceiling Mount',
    desc: 'Pendant mount for overhead installation on flat ceilings.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="8" /><rect x="7" y="8" width="10" height="6" rx="3" />
        <line x1="4" y1="2" x2="20" y2="2" />
      </svg>
    ),
  },
];

export default function CamerasSpecsMountingSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('csm-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.csm-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .csm-rev {
          opacity: 0; transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .csm-rev.csm-vis { opacity: 1; transform: none; }

        .csm-spec-card {
          transition: box-shadow 0.22s, transform 0.22s, border-color 0.22s;
        }
        .csm-spec-card:hover {
          box-shadow: 0 10px 32px rgba(0,0,0,0.08) !important;
          transform: translateY(-4px);
          border-color: rgba(1,97,254,0.35) !important;
        }
        .csm-spec-value {
          font-family: 'JetBrains Mono', monospace;
        }

        .csm-mount-card {
          transition: box-shadow 0.22s, transform 0.22s, border-color 0.22s;
        }
        .csm-mount-card:hover {
          transform: translateY(-4px);
          border-color: rgba(1,97,254,0.35) !important;
          box-shadow: 0 10px 28px rgba(0,0,0,0.06) !important;
        }
      `}</style>

      <section
        ref={ref}
        id="specs"
        className="relative overflow-hidden bg-slate-50 py-24 lg:py-32 border-t border-slate-100"
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '28px 28px', opacity: 0.35,
          }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Spec highlights */}
          <div className="text-center mb-14">
            <div className="csm-rev mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(1,97,254,0.07)', color: '#0161FE',
                border: '1px solid rgba(1,97,254,0.18)',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              Specifications
            </div>
            <h2 className="csm-rev text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Engineered for<br /><span style={{ color: '#0161FE' }}>Every Deployment</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-24">
            {specHighlights.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="csm-spec-card bg-white rounded-2xl p-5 border border-slate-200 text-center"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              >
                <div className="csm-spec-value text-lg sm:text-xl font-bold mb-1" style={{ color: '#0161FE' }}>
                  {s.value}
                </div>
                <div className="text-xs font-bold text-slate-700 mb-0.5">{s.label}</div>
                <div className="text-[0.68rem] text-slate-400 leading-snug">{s.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Mounting options */}
          <div className="text-center mb-14">
            <h3 className="csm-rev text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-4">
              Versatile Installation, Any Site
            </h3>
            <p className="csm-rev text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              A full bracket range adapts the same camera to walls, poles, corners, or ceilings — no site is too awkward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mounts.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="csm-mount-card bg-white rounded-2xl p-7 border border-slate-200"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-5"
                  style={{ background: 'rgba(1,97,254,0.08)', color: '#0161FE' }}
                >
                  {m.icon}
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-2">{m.name}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}