'use client';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    desc: 'Our security experts assess your environment, identify requirements, and define success criteria for your deployment.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Solution Design',
    desc: 'Custom architecture tailored to your infrastructure, compliance requirements, and scalability goals.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Deployment',
    desc: 'Professional installation and commissioning by certified SecureAAI engineers with zero downtime.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Support',
    desc: '24/7 SICare maintenance, remote monitoring, firmware updates, and dedicated account management.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

function ArrowIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

export default function DeploymentSection() {
  const ref = useRef(null);
  const lineRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const sectionEl = ref.current;
    if (!sectionEl) return;

    const els = sectionEl.querySelectorAll('.dep-rev');
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('dep-vis');
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));

    const sectionObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setRevealed(true);
        }),
      { threshold: 0.3 }
    );
    sectionObserver.observe(sectionEl);

    return () => { observer.disconnect(); sectionObserver.disconnect(); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .dep-section { font-family: 'DM Sans', sans-serif; }

        /* Reveal */
        .dep-rev {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .dep-rev.dep-vis { opacity: 1; transform: none; }
        .dep-d0 { transition-delay: 0.00s; }
        .dep-d1 { transition-delay: 0.08s; }
        .dep-d2 { transition-delay: 0.16s; }
        .dep-d3 { transition-delay: 0.24s; }
        .dep-d4 { transition-delay: 0.32s; }

        /* Dot grid bg */
        .dep-dotgrid::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.45;
        }

        /* Eyebrow pill */
        .dep-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* Accent underline */
        .dep-accent-line { position: relative; display: inline-block; }
        .dep-accent-line::after {
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
        .dep-vis .dep-accent-line::after { transform: scaleX(1); }

        /* Step icon circle */
        .dep-icon-circle {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          background: #ffffff;
          color: #0161FE;
          border: 1px solid rgba(1,97,254,0.18);
          position: relative;
          z-index: 10;
          transition: background 0.3s cubic-bezier(0.22,1,0.36,1),
                      color 0.3s ease,
                      border-color 0.3s ease,
                      transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s ease;
        }
        .group:hover .dep-icon-circle {
          background: #0161FE;
          color: #ffffff;
          border-color: #0161FE;
          transform: scale(1.08) rotate(-4deg);
          box-shadow: 0 10px 26px rgba(1,97,254,0.25);
        }

        .dep-icon-circle-sm {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: #ffffff;
          color: #0161FE;
          border: 1px solid rgba(1,97,254,0.18);
          position: relative;
        }

        /* Number badge */
        .dep-badge {
          background: #0161FE;
          color: #ffffff;
          box-shadow: 0 4px 10px rgba(1,97,254,0.35);
        }

        .group:hover .dep-step-title { color: #0161FE; }

        /* CTA pill — filled #0161FE */
        .dep-cta-fill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #ffffff;
          background: #0161FE;
          border: 1.5px solid #0161FE;
          border-radius: 9999px;
          padding: 10px 20px;
          transition: background 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s;
          text-decoration: none;
          white-space: nowrap;
        }
        .dep-cta-fill:hover {
          background: #ffffff;
          color: #0161FE;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(1,97,254,0.22);
        }
        .dep-cta-fill:hover svg { transform: translateX(3px); }
        .dep-cta-fill svg { transition: transform 0.2s; }

        /* CTA pill — outline #0161FE */
        .dep-cta-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #0161FE;
          background: #ffffff;
          border: 1.5px solid #0161FE;
          border-radius: 9999px;
          padding: 10px 20px;
          transition: background 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s;
          text-decoration: none;
          white-space: nowrap;
        }
        .dep-cta-outline:hover {
          background: #0161FE;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(1,97,254,0.22);
        }
        .dep-cta-outline:hover svg { transform: translateX(3px); }
        .dep-cta-outline svg { transition: transform 0.2s; }
      `}</style>

      <section ref={ref} className="dep-section dep-dotgrid relative overflow-hidden bg-white py-16 lg:py-24 border-t border-slate-100">

        {/* Soft blue blobs */}
        <div className="absolute -top-24 left-0 w-[420px] h-[420px] rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle at 40% 40%, #dbeafe, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(circle at 60% 60%, #e0f2fe, transparent 70%)' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-slate-200 pb-10 mb-14">
            <div>
              {/* Eyebrow pill */}
              <div className="dep-rev dep-d0 mb-5">
                <span
                  className="dep-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  How It Works
                </span>
              </div>

              <h2 className="dep-rev dep-d1 text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900">
                Deployment{' '}
                <span className="dep-accent-line" style={{ color: '#0161FE' }}>Process</span>
              </h2>
            </div>
            <p className="dep-rev dep-d2 text-slate-500 text-[14px] leading-relaxed max-w-xs sm:text-right">
              From initial consultation to go-live in as little as 4 weeks.
            </p>
          </div>

          {/* ── Desktop timeline ── */}
          <div className="hidden lg:block mb-14">
            {/* Progress line track */}
            <div className="relative mb-12">
              <div className="absolute top-[26px] left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-slate-200" />
              {/* Animated fill */}
              <div
                ref={lineRef}
                className="absolute top-[26px] left-[calc(12.5%)] h-[2px] rounded-full transition-all duration-[1400ms] ease-out"
                style={{
                  width: revealed ? 'calc(75%)' : '0%',
                  background: 'linear-gradient(90deg, #0161FE, #5b9fff)',
                }}
              />

              {/* Steps */}
              <div className="relative flex items-start justify-between">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`dep-rev group flex flex-col items-center text-center px-5 cursor-default dep-d${i}`}
                    style={{ width: '25%' }}
                  >
                    {/* Icon circle */}
                    <div className="dep-icon-circle mb-5">
                      {step.icon}
                      {/* Number badge */}
                      <span className="dep-badge absolute -top-2 -right-2 w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>

                    <h3 className="dep-step-title text-[14px] font-bold text-slate-900 mb-2 tracking-tight transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-[12.5px] text-slate-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Mobile vertical timeline ── */}
          <div className="lg:hidden mb-14">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`dep-rev flex gap-5 items-start dep-d${i}`}
              >
                {/* Left column: icon + connector */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="dep-icon-circle-sm">
                    {step.icon}
                    <span className="dep-badge absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[8px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-px mt-2 mb-0 transition-all duration-700"
                      style={{
                        height: revealed ? '48px' : '0px',
                        background: 'linear-gradient(180deg, #0161FE, #cbd5e1)',
                        transitionDelay: `${i * 150 + 400}ms`,
                      }}
                    />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-8">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 block mb-1">
                    Step {step.number}
                  </span>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-1.5 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="dep-rev dep-d4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-slate-200 pt-10">
            <p className="text-slate-500 text-[14px] leading-relaxed max-w-sm">
              Ready to start your SecureAAI journey? Our team is available to guide you from day one.
            </p>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a href="#demo" className="dep-cta-fill">
                Schedule Consultation <ArrowIcon />
              </a>
              <a href="#" className="dep-cta-outline">
                Download Guide <ArrowIcon />
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}