'use client';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    label: 'Discovery & Scoping',
    desc: 'Our security experts assess your environment, identify requirements, and define success criteria for your deployment.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format&fit=crop',
    tag: 'Week 1',
    stat: '2–3 days',
    statLabel: 'avg. scoping time',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Solution Design',
    label: 'Architecture & Planning',
    desc: 'Custom architecture tailored to your infrastructure, compliance requirements, and scalability goals.',
    image: 'https://images.unsplash.com/photo-1600267204026-85c3cc8e96cd?w=800&q=80&auto=format&fit=crop',
    tag: 'Week 1–2',
    stat: '100%',
    statLabel: 'custom-built plans',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Deployment',
    label: 'Install & Commission',
    desc: 'Professional installation and commissioning by certified SecureAAI engineers with zero downtime.',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80&auto=format&fit=crop',
    tag: 'Week 2–3',
    stat: '0',
    statLabel: 'downtime during install',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Support',
    label: 'Ongoing SICare',
    desc: '24/7 SICare maintenance, remote monitoring, firmware updates, and dedicated account management.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80&auto=format&fit=crop',
    tag: 'Ongoing',
    stat: '24/7',
    statLabel: 'monitoring coverage',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
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
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const step = steps[activeStep];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Poppins:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .dep2-section { font-family: 'Poppins', sans-serif; }

        .dep2-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
                      transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .dep2-fade.dep2-in { opacity: 1; transform: none; }
        .dep2-d0 { transition-delay: 0s; }
        .dep2-d1 { transition-delay: 0.1s; }
        .dep2-d2 { transition-delay: 0.18s; }
        .dep2-d3 { transition-delay: 0.26s; }

        /* Left panel step item */
        .dep2-step-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 18px 20px;
          border-radius: 14px;
          cursor: pointer;
          border: 1px solid transparent;
          transition: background 0.28s ease, border-color 0.28s ease, transform 0.28s cubic-bezier(0.22,1,0.36,1);
          position: relative;
        }
        .dep2-step-item:hover:not(.dep2-step-active) {
          background: #f8fafc;
          border-color: #e2e8f0;
          transform: translateX(4px);
        }
        .dep2-step-item.dep2-step-active {
          background: #ffffff;
          border-color: rgba(1,97,254,0.2);
          box-shadow: 0 4px 24px rgba(1,97,254,0.08);
          transform: translateX(0);
        }

        /* Active left accent bar */
        .dep2-step-item.dep2-step-active::before {
          content: '';
          position: absolute;
          left: 0; top: 20%; bottom: 20%;
          width: 3px;
          border-radius: 0 3px 3px 0;
          background: #0161FE;
        }

        .dep2-step-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #94a3b8;
          transition: color 0.25s;
          flex-shrink: 0;
          padding-top: 2px;
        }
        .dep2-step-active .dep2-step-num { color: #0161FE; }

        .dep2-step-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid #e2e8f0;
          color: #64748b;
          flex-shrink: 0;
          transition: background 0.28s, border-color 0.28s, color 0.28s, transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .dep2-step-active .dep2-step-icon {
          background: #0161FE;
          border-color: #0161FE;
          color: #fff;
          transform: scale(1.05);
        }

        .dep2-step-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 3px;
          transition: color 0.25s;
        }
        .dep2-step-active .dep2-step-title { color: #0161FE; }

        .dep2-step-label {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 500;
          letter-spacing: 0.03em;
        }

        /* Tag pill in step */
        .dep2-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 99px;
          background: rgba(1,97,254,0.07);
          color: #0161FE;
          border: 1px solid rgba(1,97,254,0.18);
          white-space: nowrap;
        }

        /* Right image panel */
        .dep2-image-panel {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: #0f172a;
        }
        .dep2-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.5s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1);
          transform: scale(1.04);
        }
        .dep2-img.dep2-img-loaded {
          opacity: 0.82;
          transform: scale(1);
        }

        /* Overlay info card */
        .dep2-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 24px 24px 24px;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, transparent 100%);
        }

        .dep2-stat-badge {
          display: inline-flex;
          align-items: baseline;
          gap: 6px;
          background: rgba(1,97,254,0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          padding: 8px 14px;
          margin-bottom: 14px;
        }
        .dep2-stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
        }
        .dep2-stat-text {
          font-size: 11px;
          color: rgba(255,255,255,0.75);
          font-weight: 500;
          letter-spacing: 0.03em;
        }

        .dep2-overlay-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 8px;
          letter-spacing: 0.01em;
        }
        .dep2-overlay-desc {
          font-size: 12.5px;
          color: rgba(255,255,255,0.72);
          line-height: 1.65;
          max-width: 420px;
        }

        /* Progress dots */
        .dep2-dot {
          width: 6px; height: 6px;
          border-radius: 99px;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: background 0.25s, width 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .dep2-dot.dep2-dot-active {
          background: #0161FE;
          width: 20px;
        }

        /* CTA buttons */
        .dep2-cta-fill {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 600; letter-spacing: 0.02em;
          color: #fff; background: #0161FE;
          border: 1.5px solid #0161FE;
          border-radius: 9999px; padding: 10px 22px;
          text-decoration: none; white-space: nowrap;
          transition: background 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s;
        }
        .dep2-cta-fill:hover {
          background: #fff; color: #0161FE;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(1,97,254,0.22);
        }
        .dep2-cta-fill:hover svg { transform: translateX(3px); }
        .dep2-cta-fill svg { transition: transform 0.2s; }

        .dep2-cta-outline {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 600; letter-spacing: 0.02em;
          color: #0f172a; background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 9999px; padding: 10px 22px;
          text-decoration: none; white-space: nowrap;
          transition: background 0.22s, color 0.22s, border-color 0.22s, transform 0.22s, box-shadow 0.22s;
        }
        .dep2-cta-outline:hover {
          border-color: #0161FE; color: #0161FE;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(1,97,254,0.1);
        }
        .dep2-cta-outline:hover svg { transform: translateX(3px); }
        .dep2-cta-outline svg { transition: transform 0.2s; }

        /* Connector line between steps */
        .dep2-connector {
          width: 1px;
          background: linear-gradient(180deg, rgba(1,97,254,0.25), #e2e8f0 80%);
          margin: 4px 0 4px 28px;
          height: 12px;
        }

        @media (max-width: 768px) {
          .dep2-layout { flex-direction: column !important; }
          .dep2-image-panel { min-height: 280px !important; }
        }
      `}</style>

      <section ref={ref} className="dep2-section py-20 bg-[#f8fafc]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* ── Header ── */}
          <div className={`dep2-fade dep2-d0 ${visible ? 'dep2-in' : ''} flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-slate-200 pb-10 mb-10`}>
            <div>
              <p
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 mb-4"
              >
                How It Works
              </p>
              <h2
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900"
              >
                Deployment{' '}
                <em className="font-light not-italic text-slate-400">in 4 Steps,</em>
                <br className="hidden sm:block" />{' '}
                4 Weeks
              </h2>
            </div>
            <p className="text-slate-500 text-[13.5px] leading-relaxed max-w-xs sm:text-right">
              From initial consultation to go-live with zero operational disruption.
            </p>
          </div>

          {/* ── Main layout: steps list + image panel ── */}
          <div className={`dep2-fade dep2-d1 ${visible ? 'dep2-in' : ''} dep2-layout flex gap-6 items-stretch`}>

            {/* LEFT: step list */}
            <div className="flex flex-col justify-between gap-1 w-full lg:w-[42%] shrink-0">
              {steps.map((s, i) => (
                <div key={i}>
                  <div
                    className={`dep2-step-item ${activeStep === i ? 'dep2-step-active' : ''}`}
                    onClick={() => setActiveStep(i)}
                    onMouseEnter={() => setActiveStep(i)}
                  >
                    {/* Number */}
                    <span className="dep2-step-num pt-1">{s.number}</span>

                    {/* Icon */}
                    <div className="dep2-step-icon">{s.icon}</div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <p className="dep2-step-title">{s.title}</p>
                        <span className="dep2-tag">{s.tag}</span>
                      </div>
                      <p className="dep2-step-label">{s.label}</p>
                    </div>
                  </div>
                  {i < steps.length - 1 && <div className="dep2-connector" />}
                </div>
              ))}

              {/* Bottom CTA */}
              <div className="flex flex-wrap gap-3 pt-4">
                <a href="#demo" className="dep2-cta-fill">
                  Schedule Consultation <ArrowIcon />
                </a>
                <a href="#" className="dep2-cta-outline">
                  Download Guide <ArrowIcon />
                </a>
              </div>
            </div>

            {/* RIGHT: image panel */}
            <div className="dep2-image-panel flex-1 min-h-[480px] lg:min-h-[520px]">
              <ImagePanel step={step} stepIndex={activeStep} />

              {/* Progress dots */}
              <div className="absolute bottom-4 right-4 flex gap-2 items-center">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`dep2-dot ${activeStep === i ? 'dep2-dot-active' : ''}`}
                    aria-label={`Step ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

/* Separate image panel to handle per-image load state */
function ImagePanel({ step, stepIndex }) {
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(step);

  useEffect(() => {
    setLoaded(false);
    const t = setTimeout(() => setCurrent(step), 50);
    return () => clearTimeout(t);
  }, [stepIndex]);

  return (
    <>
      <img
        key={current.image}
        src={current.image}
        alt={current.title}
        onLoad={() => setLoaded(true)}
        className={`dep2-img absolute inset-0 w-full h-full object-cover ${loaded ? 'dep2-img-loaded' : ''}`}
        style={{ position: 'absolute', inset: 0 }}
      />

      {/* Overlay */}
      <div className="dep2-overlay">
        <div className="dep2-stat-badge">
          <span className="dep2-stat-num">{current.stat}</span>
          <span className="dep2-stat-text">{current.statLabel}</span>
        </div>
        <p className="dep2-overlay-title">{current.title}: {current.label}</p>
        <p className="dep2-overlay-desc">{current.desc}</p>
      </div>
    </>
  );
}