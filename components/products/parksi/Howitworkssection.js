'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Vehicle Arrives',
    desc: 'ANPR camera reads the plate in under 80 ms. Barrier lifts automatically for whitelisted vehicles; visitors get a printed or digital ticket.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Slot Assigned',
    desc: 'AI engine maps the nearest available bay and pushes guidance to LED signs and the driver\'s mobile app in real time.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Park & Monitor',
    desc: 'Floor sensors and overhead cameras track occupancy continuously. Security alerts fire instantly on any anomaly.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 6v6c0 5.25 3.9 10.15 9 11.5C17.1 22.15 21 17.25 21 12V6L12 2z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Exit & Pay',
    desc: 'On exit the system calculates the fee, charges via UPI / card / FASTag, issues a digital receipt, and logs the session.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
        <line x1="7" y1="15" x2="10" y2="15"/>
        <line x1="13" y1="15" x2="16" y2="15"/>
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('hw-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.hw-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .hw-rev {
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1),
                      transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .hw-rev.hw-vis { opacity: 1; transform: none; }
        .hw-d0{transition-delay:0s}   .hw-d1{transition-delay:0.1s}
        .hw-d2{transition-delay:0.2s} .hw-d3{transition-delay:0.3s}

        .hw-step-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.12em; color: #60a5fa;
        }

        /* Animated gradient orbs */
        @keyframes hw-float-a {
          0%,100%{transform:translateY(0) scale(1)}
          50%{transform:translateY(-24px) scale(1.06)}
        }
        @keyframes hw-float-b {
          0%,100%{transform:translateY(0) scale(1)}
          50%{transform:translateY(20px) scale(0.96)}
        }
        .hw-orb-a { animation: hw-float-a 7s ease-in-out infinite; }
        .hw-orb-b { animation: hw-float-b 9s ease-in-out infinite; }

        /* Card glow on hover */
        .hw-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s ease;
        }
        .hw-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(1,97,254,0.35), 0 0 0 1px rgba(1,97,254,0.4);
        }

        /* Dashed connector line */
        .hw-connector-line {
          position: absolute;
          top: 36px;
          left: calc(50% + 36px);
          width: calc(100% - 72px);
          height: 1px;
          background: linear-gradient(90deg, rgba(96,165,250,0.5), rgba(96,165,250,0.05));
          pointer-events: none;
        }
        .hw-connector-line::after {
          content: '';
          position: absolute;
          right: 0; top: -3px;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(96,165,250,0.4);
        }

        /* Pulse ring on icon */
        @keyframes hw-pulse-ring {
          0%{transform:scale(1);opacity:0.6}
          100%{transform:scale(1.7);opacity:0}
        }
        .hw-icon-pulse::before {
          content:'';
          position:absolute;
          inset:0; border-radius:50%;
          background: rgba(1,97,254,0.35);
          animation: hw-pulse-ring 2.5s cubic-bezier(0.4,0,0.6,1) infinite;
        }

        /* Scan line */
        @keyframes hw-scan {
          0%{top:0%} 100%{top:100%}
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden w-full py-28 lg:py-36"
        style={{
          background: 'linear-gradient(135deg, #020c1b 0%, #061529 40%, #071e3d 70%, #0a2050 100%)',
        }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(1,97,254,0.18) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Floating orbs */}
        <div className="hw-orb-a absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(1,97,254,0.18) 0%, transparent 70%)' }} />
        <div className="hw-orb-b absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(1,97,254,0.06) 0%, transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* ── Header ── */}
          <div className="text-center mb-20">
            <div
              className="hw-rev hw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(1,97,254,0.12)',
                color: '#60a5fa',
                border: '1px solid rgba(1,97,254,0.3)',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              Simple Workflow
            </div>

            <h2
              className="hw-rev hw-d1 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] mb-5"
              style={{ color: '#fff' }}
            >
              How{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #60a5fa, #0161FE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                SecureAAI
              </span>{' '}
              Works
            </h2>

            <p className="hw-rev hw-d2 text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Four automated steps from entry to exit — zero manual intervention required.
            </p>
          </div>

          {/* ── Steps grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 48, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="hw-card relative flex flex-col rounded-[24px] p-7"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                {/* Connector line between cards */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block hw-connector-line" />
                )}

                {/* Step number */}
                <span className="hw-step-num mb-4">{s.num}</span>

                {/* Icon */}
                <div className="relative mb-6 self-start">
                  <div
                    className="hw-icon-pulse relative w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(1,97,254,0.25), rgba(1,97,254,0.1))',
                      border: '1px solid rgba(1,97,254,0.35)',
                      color: '#60a5fa',
                    }}
                  >
                    {s.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{s.desc}</p>

                {/* Bottom accent line */}
                <div
                  className="mt-6 h-px w-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, #0161FE${i % 2 === 0 ? 'aa' : '55'}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
}