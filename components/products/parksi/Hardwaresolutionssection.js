'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const hardware = [
  {
    title: 'Indoor Auto Pay Station',
    desc: 'Indoor auto pay stations offer a convenient pay option inside the parking facility with multiple cashless payment modes.',
    img: '/images/hardware/indoor-pay-station.png',
    badge: 'Indoor',
  },
  {
    title: 'Outdoor Auto Pay Station',
    desc: 'These pay stations with a weatherproof design are placed outside the facility and offer multiple payment options.',
    img: '/images/hardware/outdoor-pay-station.png',
    badge: 'Outdoor',
  },
  {
    title: 'Entry Kiosks',
    desc: 'Streamlines the vehicle entry process and reduces congestion outside and within the facility.',
    img: '/images/hardware/entry-kiosk.png',
    badge: 'Entry',
  },
  {
    title: 'Exit Kiosks',
    desc: 'Helps drivers to exit freely from the parking facility without any hassles.',
    img: '/images/hardware/exit-kiosk.png',
    badge: 'Exit',
  },
];

export default function HardwareSolutionsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('hs-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.hs-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .hs-rev {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .hs-rev.hs-vis { opacity: 1; transform: none; }
        .hs-d0{transition-delay:0s}   .hs-d1{transition-delay:0.1s}
        .hs-d2{transition-delay:0.18s}

        .hs-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s ease,
                      border-color 0.35s ease;
        }
        .hs-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 64px rgba(1,97,254,0.15), 0 0 0 1px rgba(1,97,254,0.25);
          border-color: rgba(1,97,254,0.3) !important;
        }
        .hs-card:hover .hs-img {
          transform: scale(1.05);
        }
        .hs-img {
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        @keyframes hs-float-orb {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-20px)}
        }
        .hs-orb { animation: hs-float-orb 8s ease-in-out infinite; }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden w-full py-28 lg:py-36"
        style={{
          background: '#f8fafc',
        }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Orbs */}
        <div className="hs-orb absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, #dbeafe 0%, transparent 68%)' }} />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, #e0f2fe 0%, transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* ── Header ── */}
          <div className="text-center mb-16">
            <div
              className="hs-rev hs-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(1,97,254,0.07)',
                color: '#0161FE',
                border: '1px solid rgba(1,97,254,0.2)',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}
            >
              {/* Hardware icon */}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2"/>
                <rect x="9" y="9" width="6" height="6"/>
                <line x1="9" y1="2" x2="9" y2="4"/>
                <line x1="15" y1="2" x2="15" y2="4"/>
                <line x1="9" y1="20" x2="9" y2="22"/>
                <line x1="15" y1="20" x2="15" y2="22"/>
                <line x1="20" y1="9" x2="22" y2="9"/>
                <line x1="20" y1="14" x2="22" y2="14"/>
                <line x1="2" y1="9" x2="4" y2="9"/>
                <line x1="2" y1="14" x2="4" y2="14"/>
              </svg>
              Hardware Solutions
            </div>

            <h2
              className="hs-rev hs-d1 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] mb-5"
            >
              <span style={{ color: '#0f172a' }}>Highest Standards,</span>{' '}
              <span style={{
                background: 'linear-gradient(90deg, #60a5fa, #0161FE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Effortless Operation
              </span>
            </h2>

            <p className="hs-rev hs-d2 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Purpose-built hardware engineered for 24/7 reliability — from entry to exit, every touchpoint covered.
            </p>
          </div>

          {/* ── 2×2 Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {hardware.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 48, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="hs-card relative rounded-[24px] overflow-hidden flex flex-col"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  
                  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                }}
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                    style={{
                      background: 'rgba(1,97,254,0.08)',
                      color: '#0161FE',
                      border: '1px solid rgba(1,97,254,0.2)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Image area */}
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(160deg, #f1f5f9, #f8fafc)',
                    minHeight: 260,
                  }}
                >
                  {/* Subtle glow behind image */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-48 h-48 rounded-full"
                      style={{ background: 'radial-gradient(circle, rgba(1,97,254,0.15), transparent 70%)' }} />
                  </div>

                  {/* Replace src with actual image paths */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="hs-img relative z-10 object-contain drop-shadow-2xl"
                    style={{ maxHeight: 220, maxWidth: '70%' }}
                  />
                </div>

                {/* Divider */}
                <div className="h-px w-full"
                  style={{ background: 'linear-gradient(90deg, rgba(1,97,254,0.4), rgba(1,97,254,0.05), transparent)' }} />

                {/* Text content */}
                <div className="p-7 flex flex-col gap-2">
                  <h3
                    className="text-base font-bold"
                    style={{ color: '#0f172a' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 flex justify-center"
          >
            <a
              href="#letstalk"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-xs tracking-widest uppercase transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(1,97,254,0.55)]"
              style={{ background: '#0161FE', fontSize: '0.72rem' }}
            >
              Contact Sales
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
}