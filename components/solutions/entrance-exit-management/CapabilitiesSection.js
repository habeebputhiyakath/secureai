'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const capabilities = [
  {
    shortLabel: 'Vehicle Recognition',
    title: 'Automated Vehicle Recognition',
    subtitle: 'AI-Powered Plate Reading',
    desc: 'Every vehicle is identified automatically at the gate, with no manual verification required.',
    icon: '📷',
    groups: [
      { label: 'Features', items: ['98.7% Recognition Accuracy', '60+ Plate Formats', 'Day & Night Operation', '< 150ms Processing'] },
    ],
    benefits: ['Faster throughput', 'No manual checks', 'Reliable in any weather'],
  },
  {
    shortLabel: 'Barrier Control',
    title: 'Automated Barrier Control',
    subtitle: 'Contactless Entry & Exit',
    desc: 'Recognized and authorized vehicles trigger the barrier automatically — no tickets, no stopping to interact.',
    icon: '🚧',
    groups: [
      { label: 'Features', items: ['Boom Barrier Integration', 'Ticketless Access', 'Auto-Close Safety Sensors', 'Manual Override Option'] },
    ],
    benefits: ['Reduced wait times', 'Fully contactless', 'Lower staffing needs'],
  },
  {
    shortLabel: 'Access Authorization',
    title: 'Access Authorization',
    subtitle: 'Blacklist & Whitelist Management',
    desc: 'Vehicles are automatically allowed or denied access based on predefined authorization lists.',
    icon: '📋',
    groups: [
      { label: 'Applications', items: ['Employee/VIP Access', 'Visitor Pre-Registration', 'Suspicious Vehicle Alerts', 'Stolen Vehicle Detection'] },
    ],
    benefits: ['Enhanced site security', 'Automated authorization', 'Real-time alerts'],
  },
  {
    shortLabel: 'Multi-Lane Support',
    title: 'Multi-Lane & High-Traffic Support',
    subtitle: 'Built for Volume',
    desc: 'Handle multiple simultaneous lanes at busy sites without slowing throughput.',
    icon: '🛣️',
    groups: [
      { label: 'Features', items: ['Simultaneous Multi-Lane Capture', 'Peak-Hour Throughput', 'Queue Monitoring', 'Load-Balanced Processing'] },
    ],
    benefits: ['Handles peak traffic', 'Consistent performance', 'Fewer bottlenecks'],
  },
  {
    shortLabel: 'Ecosystem Integration',
    title: 'Ecosystem Integration',
    subtitle: 'Connects to the Rest of Your Stack',
    desc: 'Entrance and exit events integrate directly with parking, video, and access control platforms.',
    icon: '🔗',
    groups: [
      { label: 'Integrates With', items: ['SmartPay Parking Solution', 'SiVMS Enterprise', 'Access Control Systems', 'Mobile Applications'] },
    ],
    benefits: ['Unified event history', 'Centralized management', 'Faster investigations'],
  },
];

export default function EemCapabilitiesSection() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const cap = capabilities[active];

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('eec-vis'); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll('.eec-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .eec-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .eec-rev.eec-vis { opacity:1; transform:none; }
        .eec-d0{transition-delay:0s} .eec-d1{transition-delay:.08s}

        .eec-tab {
          width: 100%; display: flex; align-items: center; gap: 12px;
          padding: 13px 16px; border-radius: 14px; text-align: left;
          background: transparent; border: 1px solid transparent; cursor: pointer;
          transition: background 0.18s, border-color 0.18s;
        }
        .eec-tab:hover { background: #f8fafc; }
        .eec-tab.active { background: rgba(1,97,254,.06); border-color: rgba(1,97,254,.22); }
        .eec-tab-icon {
          width: 34px; height: 34px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; font-size: 1.05rem;
          background: #f1f5f9; border: 1px solid #e2e8f0;
        }
        .eec-tab.active .eec-tab-icon { background: rgba(1,97,254,.12); border-color: rgba(1,97,254,.3); }
        .eec-tab-label { font-size: 0.86rem; font-weight: 700; color: #64748b; line-height: 1.25; }
        .eec-tab.active .eec-tab-label { color: #0161FE; }
        .eec-tab-chevron { margin-left: auto; opacity: 0; transition: opacity 0.18s; color: #0161FE; flex-shrink: 0; }
        .eec-tab.active .eec-tab-chevron { opacity: 1; }

        .eec-panel {
          border-radius: 28px; border: 1px solid #e2e8f0; background: #fff;
          padding: 40px; box-shadow: 0 24px 60px -24px rgba(1,97,254,.18);
          min-height: 400px;
        }
        .eec-icon-wrap {
          width: 56px; height: 56px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.7rem; margin-bottom: 16px;
          background: rgba(1,97,254,.08); border: 1px solid rgba(1,97,254,.16);
        }
        .eec-group-label {
          font-size: 0.66rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          color: #94a3b8; margin-bottom: 8px; margin-top: 18px;
        }
        .eec-group-label:first-child { margin-top: 0; }
        .eec-feature-pill {
          display: inline-flex; align-items: center; padding: 5px 12px;
          border-radius: 9999px; font-size: 0.74rem; font-weight: 600;
          background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0;
          white-space: nowrap; margin-right: 8px; margin-bottom: 8px;
        }
        .eec-benefits {
          margin-top: 24px; padding-top: 20px; border-top: 1px solid #f1f5f9;
        }
        .eec-benefit-row {
          display: flex; align-items: center; gap: 9px;
          font-size: 0.86rem; color: #334155; font-weight: 600;
          margin-bottom: 9px;
        }
      `}</style>
      <section ref={ref} id="capabilities" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <div className="eec-rev eec-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              What It Does
            </div>
            <h2 className="eec-rev eec-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Core Capabilities
            </h2>
            <p className="eec-rev eec-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              Everything needed to automate vehicle access at any gate, lane, or barrier.
            </p>
          </div>

          <div className="eec-rev eec-d1 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-8 items-start">

            {/* Tab list */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0">
              {capabilities.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`eec-tab shrink-0 lg:shrink${active === i ? ' active' : ''}`}
                  style={{ minWidth: 220 }}
                >
                  <span className="eec-tab-icon">{c.icon}</span>
                  <span className="eec-tab-label">{c.shortLabel}</span>
                  <svg className="eec-tab-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="eec-panel"
                >
                  <div className="eec-icon-wrap">{cap.icon}</div>
                  <h4 className="text-[0.7rem] font-bold uppercase tracking-widest text-slate-400 mb-1">{cap.subtitle}</h4>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{cap.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>

                  {cap.groups.map((g, gi) => (
                    <div key={gi}>
                      <div className="eec-group-label">{g.label}</div>
                      <div>
                        {g.items.map((f, j) => <span key={j} className="eec-feature-pill">{f}</span>)}
                      </div>
                    </div>
                  ))}

                  {cap.benefits.length > 0 && (
                    <div className="eec-benefits">
                      <div className="eec-group-label" style={{ marginTop: 0 }}>Benefits</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                        {cap.benefits.map((b, j) => (
                          <div key={j} className="eec-benefit-row">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0161FE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                            {b}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
