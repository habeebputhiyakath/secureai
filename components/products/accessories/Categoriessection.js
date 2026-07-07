'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'mounting',
    num: '01',
    label: 'Mounting Accessories',
    desc: 'Professional-grade mounting hardware for every installation scenario — from simple wall brackets to heavy-duty pole mounts for outdoor deployments.',
    accentColor: '#0d9488',
    accentBg: 'rgba(13,148,136,0.08)',
    accentBorder: 'rgba(13,148,136,0.22)',
    gradient: 'linear-gradient(135deg, #031a18 0%, #0d9488 100%)',
    items: [
      { name: 'Pole Mounts',     sub: 'Heavy-duty steel, up to 114mm diameter poles' },
      { name: 'Wall Mounts',     sub: 'Adjustable tilt & swivel, indoor / outdoor rated' },
      { name: 'Ceiling Mounts',  sub: 'Pendant & flush-mount for all camera profiles' },
      { name: 'Junction Boxes',  sub: 'IP66 rated for concealed cable management' },
    ],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: 'network',
    num: '02',
    label: 'Network Accessories',
    desc: 'Reliable network infrastructure components designed to handle the high-bandwidth demands of multi-camera IP surveillance systems.',
    accentColor: '#0161FE',
    accentBg: 'rgba(1,97,254,0.08)',
    accentBorder: 'rgba(1,97,254,0.22)',
    gradient: 'linear-gradient(135deg, #0f2a5e 0%, #0161FE 100%)',
    items: [
      { name: 'PoE Switches',        sub: '8 / 16 / 24-port, 30W / 60W / 90W per port' },
      { name: 'Media Converters',    sub: 'Copper-to-fibre conversion up to 80 km' },
      { name: 'Network Extenders',   sub: 'Extend PoE over coax or UTP beyond 100 m' },
    ],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    id: 'power',
    num: '03',
    label: 'Power Solutions',
    desc: 'Ensure uninterrupted operation with enterprise-class power accessories providing clean, stable power and protection against surges and outages.',
    accentColor: '#d97706',
    accentBg: 'rgba(217,119,6,0.08)',
    accentBorder: 'rgba(217,119,6,0.22)',
    gradient: 'linear-gradient(135deg, #1a0f07 0%, #d97706 100%)',
    items: [
      { name: 'Power Supplies',   sub: '12V / 24V DC, DIN-rail & desktop form factors' },
      { name: 'UPS Systems',      sub: '500VA – 10kVA, pure sine wave output' },
      { name: 'Surge Protection', sub: 'Class B / C protection, network & coax ports' },
    ],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 'storage',
    num: '04',
    label: 'Storage Solutions',
    desc: 'High-endurance storage media and systems optimised for the 24/7 continuous write cycles that video surveillance demands.',
    accentColor: '#7c3aed',
    accentBg: 'rgba(124,58,237,0.08)',
    accentBorder: 'rgba(124,58,237,0.22)',
    gradient: 'linear-gradient(135deg, #1a0a3b 0%, #7c3aed 100%)',
    items: [
      { name: 'SSD Storage',      sub: 'Surveillance-grade, 3D TLC, up to 7.68TB' },
      { name: 'Enterprise HDDs',  sub: '3.5" CMR, 24/7 rated, up to 20TB capacity' },
      { name: 'RAID Systems',     sub: 'Hardware RAID 0/1/5/6/10, hot-swap bays' },
    ],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: 'environmental',
    num: '05',
    label: 'Environmental Accessories',
    desc: 'Extend camera life and maintain image quality in extreme weather, high-humidity, and temperature-critical environments with purpose-built environmental controls.',
    accentColor: '#059669',
    accentBg: 'rgba(5,150,105,0.08)',
    accentBorder: 'rgba(5,150,105,0.22)',
    gradient: 'linear-gradient(135deg, #082d1a 0%, #059669 100%)',
    items: [
      { name: 'Protective Housings', sub: 'IP68-rated, anti-vandal, stainless or aluminium' },
      { name: 'Heater Modules',      sub: '-40°C to +70°C operation range, auto thermostat' },
      { name: 'Cooling Systems',     sub: 'Peltier-effect coolers for high-temperature cabinets' },
    ],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function AccessoriesCategoriesSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('acat-vis');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.acat-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .acat-rev {
          opacity: 0; transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .acat-rev.acat-vis { opacity: 1; transform: none; }
        .acat-d0{transition-delay:0s} .acat-d1{transition-delay:0.08s}
        .acat-d2{transition-delay:0.16s}

        .acat-card {
          transition: box-shadow 0.25s, transform 0.25s;
          cursor: default;
        }
        .acat-card:hover {
          box-shadow: 0 16px 56px rgba(0,0,0,0.10) !important;
          transform: translateY(-5px);
        }
        .acat-visual { transition: transform 0.55s cubic-bezier(0.22,1,0.36,1); }
        .acat-card:hover .acat-visual { transform: scale(1.04); }

        .acat-item {
          transition: background 0.18s, transform 0.18s;
        }
        .acat-item:hover {
          background: rgba(0,0,0,0.03) !important;
          transform: translateX(3px);
        }
        .acat-enquire {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; text-decoration: none;
          transition: gap 0.2s;
        }
        .acat-enquire:hover { gap: 10px; }
        .acat-enquire svg { transition: transform 0.2s; }
        .acat-enquire:hover svg { transform: translateX(3px); }

        .acat-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em;
        }
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

          {/* Header */}
          <div className="text-center mb-16">
            <div className="acat-rev acat-d0 mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(13,148,136,0.08)', color: '#0d9488',
                border: '1px solid rgba(13,148,136,0.22)',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              Product Categories
            </div>
            <h2 className="acat-rev acat-d1 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-4">
              Everything You Need,<br />
              <span style={{ color: '#0d9488' }}>All in One Place</span>
            </h2>
            <p className="acat-rev acat-d2 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Five accessory families covering every aspect of installation, connectivity, power, storage, and environmental protection.
            </p>
          </div>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {categories.slice(0, 3).map((cat, i) => (
              <motion.div
                key={cat.id}
                id={cat.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.72, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="acat-card bg-white rounded-3xl overflow-hidden border border-slate-200"
                style={{ boxShadow: '0 3px 18px rgba(0,0,0,0.05)' }}
              >
                {/* Gradient header */}
                <div className="h-36 relative overflow-hidden" style={{ background: cat.gradient }}>
                  <div className="acat-visual absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.13)', backdropFilter: 'blur(6px)' }}
                    >
                      {cat.icon}
                    </div>
                  </div>
                  <div className="absolute top-3 left-4">
                    <span className="acat-num text-white opacity-50">{cat.num}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-base font-extrabold mb-2" style={{ color: cat.accentColor }}>
                    {cat.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5">{cat.desc}</p>

                  {/* Product list */}
                  <div className="space-y-2 mb-6">
                    {cat.items.map((item, j) => (
                      <div
                        key={j}
                        className="acat-item flex items-start gap-3 p-2.5 rounded-xl"
                      >
                        <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: cat.accentBg, color: cat.accentColor, border: `1px solid ${cat.accentBorder}` }}
                        >
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800">{item.name}</p>
                          <p className="text-[11px] text-slate-400 leading-snug">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a href="#" className="acat-enquire" style={{ color: cat.accentColor }}>
                    ENQUIRE NOW
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 — 2 wider cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.slice(3).map((cat, i) => (
              <motion.div
                key={cat.id}
                id={cat.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.72, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="acat-card bg-white rounded-3xl overflow-hidden border border-slate-200"
                style={{ boxShadow: '0 3px 18px rgba(0,0,0,0.05)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Gradient side */}
                  <div className="h-48 sm:h-auto relative overflow-hidden" style={{ background: cat.gradient }}>
                    <div className="acat-visual absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="w-18 h-18 w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.13)', backdropFilter: 'blur(6px)' }}
                      >
                        {cat.icon}
                      </div>
                      <p className="text-white text-xs font-bold tracking-wide opacity-80 px-4 text-center">{cat.label}</p>
                    </div>
                    <div className="absolute top-3 left-4">
                      <span className="acat-num text-white opacity-50">{cat.num}</span>
                    </div>
                  </div>

                  {/* Text side */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-extrabold mb-2" style={{ color: cat.accentColor }}>
                        {cat.label}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-5">{cat.desc}</p>

                      <div className="space-y-2 mb-6">
                        {cat.items.map((item, j) => (
                          <div key={j} className="acat-item flex items-start gap-3 p-2.5 rounded-xl">
                            <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                              style={{ background: cat.accentBg, color: cat.accentColor, border: `1px solid ${cat.accentBorder}` }}
                            >
                              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-slate-800">{item.name}</p>
                              <p className="text-[11px] text-slate-400 leading-snug">{item.sub}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a href="#" className="acat-enquire self-start" style={{ color: cat.accentColor }}>
                      ENQUIRE NOW
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
