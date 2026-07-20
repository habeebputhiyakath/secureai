'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const capabilities = [
  {
    shortLabel: 'Live Monitoring',
    title: 'Live Monitoring',
    subtitle: 'Monitor Events in Real Time',
    desc: 'Gain complete visibility over your facilities through live video streams and centralized dashboards.',
    icon: '🖥️',
    groups: [
      { label: 'Features', items: ['Multi-Camera View', 'Custom Layouts', 'Video Walls', 'Interactive Maps', 'Event Notifications', 'PTZ Camera Control'] },
    ],
    benefits: ['Improved response times', 'Better situational awareness', 'Increased operational efficiency'],
  },
  {
    shortLabel: 'Recording & Playback',
    title: 'Recording & Playback',
    subtitle: 'Secure Video Storage and Retrieval',
    desc: 'Store and access recordings whenever needed.',
    icon: '📼',
    groups: [
      { label: 'Features', items: ['Continuous Recording', 'Motion-Based Recording', 'Event Recording', 'Timeline Playback', 'Video Export', 'Backup Management'] },
    ],
    benefits: ['Reliable evidence collection', 'Faster incident investigation', 'Long-term storage flexibility'],
  },
  {
    shortLabel: 'Event Management',
    title: 'Event Management',
    subtitle: 'Intelligent Event Handling',
    desc: 'Automatically detect and manage critical events.',
    icon: '⚡',
    groups: [
      { label: 'Supported Events', items: ['Intrusion Detection', 'Motion Detection', 'Line Crossing', 'Camera Tampering', 'Access Control Events', 'ANPR Events', 'Alarm Triggers'] },
    ],
    benefits: ['Faster response', 'Reduced operator workload', 'Enhanced security'],
  },
  {
    shortLabel: 'Multi-Site Management',
    title: 'Multi-Site Management',
    subtitle: 'Manage Multiple Locations Through a Single Platform',
    desc: 'SecureAAi VMS provides centralized administration for distributed facilities.',
    icon: '🏢',
    groups: [
      { label: 'Ideal For', items: ['Corporate Campuses', 'Retail Chains', 'Hospitals', 'Educational Institutions', 'Airports', 'Smart Cities'] },
    ],
    benefits: ['Unified operations', 'Reduced administration costs', 'Better visibility'],
  },
  {
    shortLabel: 'AI Video Analytics',
    title: 'AI Video Analytics Integration',
    subtitle: 'Transform Video into Actionable Intelligence',
    desc: 'SecureAAi VMS integrates seamlessly with AI analytics engines.',
    icon: '🧠',
    groups: [
      { label: 'Analytics Capabilities', items: ['Human Detection', 'Vehicle Detection', 'Face Recognition', 'Crowd Monitoring', 'Intrusion Detection', 'Object Classification', 'Behavior Analysis'] },
    ],
    benefits: ['Proactive security', 'Improved efficiency', 'Enhanced situational awareness'],
  },
  {
    shortLabel: 'ANPR Integration',
    title: 'ANPR Integration',
    subtitle: 'Intelligent Vehicle Management',
    desc: 'Integrate Automatic Number Plate Recognition with the VMS platform.',
    icon: '🚗',
    groups: [
      { label: 'Applications', items: ['Parking Management', 'Vehicle Access Control', 'Traffic Monitoring', 'Blacklist Alerts', 'Visitor Management'] },
    ],
    benefits: ['Automated operations', 'Enhanced vehicle security', 'Faster investigations'],
  },
  {
    shortLabel: 'Search & Investigation',
    title: 'Advanced Search & Investigation',
    subtitle: 'Find Events Faster',
    desc: 'Locate video footage quickly using intelligent search tools.',
    icon: '🔍',
    groups: [
      { label: 'Search Methods', items: ['Date and Time', 'Event Type', 'Camera Name', 'License Plate Number', 'Motion Events', 'Alarm Events'] },
    ],
    benefits: ['Faster evidence retrieval', 'Reduced investigation time', 'Improved productivity'],
  },
  {
    shortLabel: 'Mobile Access',
    title: 'Mobile Access',
    subtitle: 'Security Operations Anywhere',
    desc: 'Monitor your facilities remotely through smartphones and tablets.',
    icon: '📱',
    groups: [
      { label: 'Features', items: ['Live Viewing', 'Event Notifications', 'Playback', 'PTZ Control', 'User Management'] },
    ],
    benefits: ['Remote access', 'Increased flexibility', 'Improved response times'],
  },
  {
    shortLabel: 'Cloud Management',
    title: 'Cloud-Based Management',
    subtitle: 'Centralized Operations with Maximum Flexibility',
    desc: 'SecureAAi supports cloud-enabled deployments for modern organizations.',
    icon: '☁️',
    groups: [
      { label: 'Features', items: ['Remote Monitoring', 'Centralized Updates', 'Data Backup', 'Multi-Site Connectivity', 'Secure Access'] },
    ],
    benefits: ['Reduced infrastructure costs', 'Better scalability', 'Enhanced accessibility'],
  },
  {
    shortLabel: 'Open Platform',
    title: 'Open Platform Architecture',
    subtitle: 'Seamless Integration with Third-Party Systems',
    desc: 'SecureAAi VMS supports integration with:',
    icon: '🔗',
    groups: [
      { label: 'Supported Integrations', items: ['IP Cameras', 'ANPR Systems', 'Access Control Platforms', 'Intruder Alarm Systems', 'IoT Devices', 'Cloud Services', 'Mobile Applications', 'Third-Party APIs'] },
    ],
    benefits: [],
  },
];

export default function VmsCapabilitiesSection() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const cap = capabilities[active];

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vc-vis'); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll('.vc-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .vc-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .vc-rev.vc-vis { opacity:1; transform:none; }
        .vc-d0{transition-delay:0s} .vc-d1{transition-delay:.08s}

        .vc-tab {
          width: 100%; display: flex; align-items: center; gap: 12px;
          padding: 13px 16px; border-radius: 14px; text-align: left;
          background: transparent; border: 1px solid transparent; cursor: pointer;
          transition: background 0.18s, border-color 0.18s;
        }
        .vc-tab:hover { background: #f8fafc; }
        .vc-tab.active { background: rgba(1,97,254,.06); border-color: rgba(1,97,254,.22); }
        .vc-tab-icon {
          width: 34px; height: 34px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; font-size: 1.05rem;
          background: #f1f5f9; border: 1px solid #e2e8f0;
        }
        .vc-tab.active .vc-tab-icon { background: rgba(1,97,254,.12); border-color: rgba(1,97,254,.3); }
        .vc-tab-label { font-size: 0.86rem; font-weight: 700; color: #64748b; line-height: 1.25; }
        .vc-tab.active .vc-tab-label { color: #0161FE; }
        .vc-tab-chevron { margin-left: auto; opacity: 0; transition: opacity 0.18s; color: #0161FE; flex-shrink: 0; }
        .vc-tab.active .vc-tab-chevron { opacity: 1; }

        .vc-panel {
          border-radius: 28px; border: 1px solid #e2e8f0; background: #fff;
          padding: 40px; box-shadow: 0 24px 60px -24px rgba(1,97,254,.18);
          min-height: 440px;
        }
        .vc-icon-wrap {
          width: 56px; height: 56px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.7rem; margin-bottom: 16px;
          background: rgba(1,97,254,.08); border: 1px solid rgba(1,97,254,.16);
        }
        .vc-group-label {
          font-size: 0.66rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          color: #94a3b8; margin-bottom: 8px; margin-top: 18px;
        }
        .vc-group-label:first-child { margin-top: 0; }
        .vc-feature-pill {
          display: inline-flex; align-items: center; padding: 5px 12px;
          border-radius: 9999px; font-size: 0.74rem; font-weight: 600;
          background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0;
          white-space: nowrap; margin-right: 8px; margin-bottom: 8px;
        }
        .vc-benefits {
          margin-top: 24px; padding-top: 20px; border-top: 1px solid #f1f5f9;
        }
        .vc-benefit-row {
          display: flex; align-items: center; gap: 9px;
          font-size: 0.86rem; color: #334155; font-weight: 600;
          margin-bottom: 9px;
        }
      `}</style>
      <section ref={ref} id="capabilities" className="relative bg-white py-24 lg:py-32">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <div className="vc-rev vc-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              What It Does
            </div>
            <h2 className="vc-rev vc-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Core Capabilities
            </h2>
            <p className="vc-rev vc-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              A complete platform for monitoring, recording, analyzing, and managing video across every site.
            </p>
          </div>

          <div className="vc-rev vc-d1 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-8 items-start">

            {/* Tab list */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0">
              {capabilities.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`vc-tab shrink-0 lg:shrink${active === i ? ' active' : ''}`}
                  style={{ minWidth: 220 }}
                >
                  <span className="vc-tab-icon">{c.icon}</span>
                  <span className="vc-tab-label">{c.shortLabel}</span>
                  <svg className="vc-tab-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
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
                  className="vc-panel"
                >
                  <div className="vc-icon-wrap">{cap.icon}</div>
                  <h4 className="text-[0.7rem] font-bold uppercase tracking-widest text-slate-400 mb-1">{cap.subtitle}</h4>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{cap.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>

                  {cap.groups.map((g, gi) => (
                    <div key={gi}>
                      <div className="vc-group-label">{g.label}</div>
                      <div>
                        {g.items.map((f, j) => <span key={j} className="vc-feature-pill">{f}</span>)}
                      </div>
                    </div>
                  ))}

                  {cap.benefits.length > 0 && (
                    <div className="vc-benefits">
                      <div className="vc-group-label" style={{ marginTop: 0 }}>Benefits</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                        {cap.benefits.map((b, j) => (
                          <div key={j} className="vc-benefit-row">
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
