'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'anpr',
    label: 'ANPR Cameras',
    tagline: 'High-performance cameras for vehicle identification and traffic intelligence.',
    desc: 'Engineered for 24/7 licence plate capture under all weather and lighting conditions. Deliver 99%+ read accuracy at speeds up to 250 km/h across single and multi-lane roads.',
    gradient: 'linear-gradient(135deg, #0f2a5e 0%, #0161FE 100%)',
    accentColor: '#0161FE',
    accentBg: 'rgba(1,97,254,0.08)',
    accentBorder: 'rgba(1,97,254,0.2)',
    specs: ['99%+ Read Accuracy', 'Up to 250 km/h', 'IR Illumination', 'Multi-Lane Support'],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: 'traffic',
    label: 'Traffic Monitoring Cameras',
    tagline: 'Real-time traffic analysis and enforcement applications.',
    desc: 'Purpose-built for intelligent transport systems. Count vehicles, classify by type, detect violations, and stream analytics directly to traffic management centres in real time.',
    gradient: 'linear-gradient(135deg, #082d1a 0%, #059669 100%)',
    accentColor: '#059669',
    accentBg: 'rgba(5,150,105,0.08)',
    accentBorder: 'rgba(5,150,105,0.2)',
    specs: ['Vehicle Classification', 'Speed Detection', 'Red-Light Enforcement', 'Queue Analytics'],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4s-2 1-3.5 2.5L11 8 2.8 6.2l-1 1.4 5.5 4-1.3 1.5-2.3-.8-.9 1L5 15l2.7 1.5 1 .6L10.2 19l1-.9-.8-2.3 1.5-1.3z" />
      </svg>
    ),
  },
  {
    id: 'parking',
    label: 'Parking Management Cameras',
    tagline: 'Occupancy detection and parking guidance.',
    desc: 'AI vision sensors for bay-level parking management. Detect occupied, free, and reserved spaces in under 80 ms and push status to guidance displays and mobile apps instantly.',
    gradient: 'linear-gradient(135deg, #1a0a3b 0%, #7c3aed 100%)',
    accentColor: '#7c3aed',
    accentBg: 'rgba(124,58,237,0.08)',
    accentBorder: 'rgba(124,58,237,0.2)',
    specs: ['< 80ms Detection', 'Bay-Level Accuracy', 'ANPR Integration', 'Overhead & Fisheye'],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'ai',
    label: 'AI Analytics Cameras',
    tagline: 'Human, vehicle, and object detection.',
    desc: 'On-device deep-learning inference delivers facial recognition, crowd analytics, perimeter intrusion, and object classification without sending raw video to the cloud.',
    gradient: 'linear-gradient(135deg, #3b0a0a 0%, #dc2626 100%)',
    accentColor: '#dc2626',
    accentBg: 'rgba(220,38,38,0.08)',
    accentBorder: 'rgba(220,38,38,0.2)',
    specs: ['Edge AI Processing', 'Facial Recognition', 'Crowd Analytics', 'Behaviour Detection'],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M20.188 10.934a8.5 8.5 0 0 1 0 2.132M16.477 5.523a8.5 8.5 0 0 1 1.512 1.512M10.934 3.812a8.5 8.5 0 0 1 2.132 0M5.523 7.523a8.5 8.5 0 0 1 1.512-1.512M3.812 13.066a8.5 8.5 0 0 1 0-2.132M7.523 18.477a8.5 8.5 0 0 1-1.512-1.512M13.066 20.188a8.5 8.5 0 0 1-2.132 0M18.477 16.477a8.5 8.5 0 0 1-1.512 1.512" />
      </svg>
    ),
  },
  {
    id: 'multisensor',
    label: 'Multi-Sensor Cameras',
    tagline: 'Wide-area surveillance with enhanced situational awareness.',
    desc: 'Combine multiple imaging sensors — thermal, optical, and wide-angle — into a single housing. Cover entire perimeters and large open areas with fewer camera units and lower installation cost.',
    gradient: 'linear-gradient(135deg, #0a1f3b 0%, #0ea5e9 100%)',
    accentColor: '#0ea5e9',
    accentBg: 'rgba(14,165,233,0.08)',
    accentBorder: 'rgba(14,165,233,0.2)',
    specs: ['Thermal + Optical', '360° Coverage', 'Panoramic View', 'Single PoE Install'],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function CamerasCategoriesSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('ccat-vis');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.ccat-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ccat-rev {
          opacity: 0; transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .ccat-rev.ccat-vis { opacity: 1; transform: none; }
        .ccat-d0{transition-delay:0s} .ccat-d1{transition-delay:0.08s}
        .ccat-d2{transition-delay:0.16s}

        .ccat-card {
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          cursor: default;
        }
        .ccat-card:hover {
          box-shadow: 0 16px 56px rgba(0,0,0,0.11) !important;
          transform: translateY(-5px);
        }
        .ccat-img-area {
          transition: transform 0.55s cubic-bezier(0.22,1,0.36,1);
        }
        .ccat-card:hover .ccat-img-area { transform: scale(1.03); }

        .ccat-spec-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem; font-weight: 600;
          padding: 4px 10px; border-radius: 9999px;
        }
        .ccat-enquire {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; text-decoration: none;
          transition: gap 0.2s;
        }
        .ccat-enquire:hover { gap: 10px; }
        .ccat-enquire svg { transition: transform 0.2s; }
        .ccat-enquire:hover svg { transform: translateX(3px); }
      `}</style>

      <section
        ref={ref}
        id="categories"
        className="relative overflow-hidden bg-slate-50 py-24 lg:py-32 border-t border-slate-100"
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '28px 28px', opacity: 0.35,
          }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="ccat-rev ccat-d0 mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(1,97,254,0.07)', color: '#0161FE',
                border: '1px solid rgba(1,97,254,0.18)',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              Product Categories
            </div>
            <h2 className="ccat-rev ccat-d1 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-4">
              The Right Camera<br />
              <span style={{ color: '#0161FE' }}>for Every Application</span>
            </h2>
            <p className="ccat-rev ccat-d2 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Five purpose-engineered camera families — each designed, calibrated, and validated for its specific real-world environment.
            </p>
          </div>

          {/* Category cards */}
          <div className="space-y-8">

            {/* Row 1 — top two side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.slice(0, 2).map((cat, i) => (
                <motion.div
                  key={cat.id}
                  id={cat.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.72, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="ccat-card bg-white rounded-3xl overflow-hidden border border-slate-200"
                  style={{ boxShadow: '0 3px 18px rgba(0,0,0,0.06)' }}
                >
                  {/* Visual header */}
                  <div className="h-52 overflow-hidden relative" style={{ background: cat.gradient }}>
                    <div className="ccat-img-area absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-3xl flex items-center justify-center"
                          style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)' }}
                        >
                          {cat.icon}
                        </div>
                      </div>
                    </div>
                    {/* Number badge */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}
                    >
                      <span className="text-white text-xs font-bold">0{i + 1}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-7">
                    <h3 className="text-lg font-extrabold text-slate-900 mb-1" style={{ color: cat.accentColor }}>
                      {cat.label}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500 mb-3">{cat.tagline}</p>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">{cat.desc}</p>

                    {/* Spec pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cat.specs.map((s, j) => (
                        <span key={j} className="ccat-spec-pill"
                          style={{ background: cat.accentBg, color: cat.accentColor, border: `1px solid ${cat.accentBorder}` }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <a href="#" className="ccat-enquire" style={{ color: cat.accentColor }}>
                      ENQUIRE NOW
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2 — three across */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.slice(2).map((cat, i) => (
                <motion.div
                  key={cat.id}
                  id={cat.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.72, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="ccat-card bg-white rounded-3xl overflow-hidden border border-slate-200"
                  style={{ boxShadow: '0 3px 18px rgba(0,0,0,0.06)' }}
                >
                  {/* Visual header */}
                  <div className="h-44 overflow-hidden relative" style={{ background: cat.gradient }}>
                    <div className="ccat-img-area absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)' }}
                      >
                        {cat.icon}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}
                    >
                      <span className="text-white text-xs font-bold">0{i + 3}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-base font-extrabold mb-1" style={{ color: cat.accentColor }}>
                      {cat.label}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-3">{cat.tagline}</p>
                    <p className="text-xs text-slate-500 leading-relaxed mb-5">{cat.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {cat.specs.map((s, j) => (
                        <span key={j} className="ccat-spec-pill"
                          style={{ background: cat.accentBg, color: cat.accentColor, border: `1px solid ${cat.accentBorder}` }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <a href="#" className="ccat-enquire" style={{ color: cat.accentColor }}>
                      ENQUIRE NOW
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
