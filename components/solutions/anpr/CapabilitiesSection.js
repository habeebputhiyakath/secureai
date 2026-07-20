'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const capabilities = [
  {
    shortLabel: 'Plate Recognition',
    title: 'High-Accuracy License Plate Recognition',
    subtitle: 'AI-Powered Vehicle Identification',
    desc: 'SecureAAi ANPR provides accurate plate recognition across various traffic conditions and environments.',
    icon: '📷',
    image: '/products/sipro/anpr.png',
    imageAlt: 'ANPR camera reading a license plate at night in the rain',
    groups: [
      { label: 'Features', items: ['High Recognition Accuracy', 'Multi-Lane Monitoring', 'Day & Night Operation', 'Fast Processing Speed', 'Real-Time Recognition', 'Continuous Monitoring'] },
    ],
    benefits: ['Reliable performance', 'Improved operational efficiency', 'Enhanced security'],
  },
  {
    shortLabel: 'Attribute Detection',
    title: 'Vehicle Attribute Detection',
    subtitle: 'Beyond License Plate Recognition',
    desc: 'AI-powered analytics provide additional information about vehicles.',
    icon: '🚙',
    image: '/anpr.png',
    imageAlt: 'AI overlay identifying vehicle attributes such as ID and registration on a highway',
    groups: [
      { label: 'Detect', items: ['Vehicle Brand', 'Vehicle Type', 'Vehicle Color', 'Vehicle Model', 'Direction of Travel', 'Speed Information'] },
      { label: 'Applications', items: ['Suspicious Vehicle Tracking', 'Traffic Investigation', 'Stolen Vehicle Recovery', 'Restricted Area Monitoring'] },
    ],
    benefits: ['Increased situational awareness', 'Better investigation capabilities', 'Improved security operations'],
  },
  {
    shortLabel: 'Blacklist & Whitelist',
    title: 'Blacklist & Whitelist Management',
    subtitle: 'Intelligent Vehicle Authorization',
    desc: 'Automatically allow or deny vehicle access.',
    icon: '📋',
    image: '/products/overview/parksi.png',
    imageAlt: 'Plate recognized against an authorization list with vacant and occupied spot status',
    groups: [
      { label: 'Whitelist Applications', items: ['Employees', 'Residents', 'VIP Visitors', 'Authorized Vehicles'] },
      { label: 'Blacklist Applications', items: ['Suspicious Vehicles', 'Unauthorized Vehicles', 'Stolen Vehicles', 'Restricted Access Lists'] },
    ],
    benefits: ['Enhanced security', 'Automated access control', 'Faster vehicle processing'],
  },
  {
    shortLabel: 'Real-Time Alerts',
    title: 'Real-Time Alerts',
    subtitle: 'Instant Event Notifications',
    desc: 'Receive immediate alerts when specific conditions are detected.',
    icon: '🔔',
    image: '/products/overview/anpr.png',
    imageAlt: 'AI-powered camera actively monitoring for real-time alert conditions',
    groups: [
      { label: 'Alert Types', items: ['Blacklisted Vehicle Detection', 'Speed Violations', 'Unauthorized Access', 'Restricted Zone Entry', 'Suspicious Vehicle Activity'] },
    ],
    benefits: ['Faster response times', 'Reduced risks', 'Improved operational awareness'],
  },
  {
    shortLabel: 'Traffic Analytics',
    title: 'Traffic Monitoring & Analytics',
    subtitle: 'Transform Vehicle Data into Actionable Intelligence',
    desc: 'Gain deeper insights into traffic behavior.',
    icon: '📊',
    image: '/image.png',
    imageAlt: 'Traffic management van displaying a live vehicle analytics dashboard beside a highway gantry',
    groups: [
      { label: 'Analytics Capabilities', items: ['Vehicle Counting', 'Traffic Density Analysis', 'Peak Hour Statistics', 'Speed Analysis', 'Lane Utilization', 'Vehicle Classification'] },
    ],
    benefits: ['Better planning', 'Improved traffic flow', 'Data-driven decision-making'],
  },
  {
    shortLabel: 'Search & Investigation',
    title: 'Intelligent Search & Investigation',
    subtitle: 'Locate Vehicles in Seconds',
    desc: 'Search vehicle records using multiple parameters.',
    icon: '🔍',
    image: '/smart-city-illustration.png',
    imageAlt: 'City-wide network of connected monitoring points across a smart city',
    groups: [
      { label: 'Search By', items: ['License Plate Number', 'Vehicle Brand', 'Vehicle Color', 'Date and Time', 'Vehicle Type', 'Event Type'] },
    ],
    benefits: ['Faster investigations', 'Reduced workload', 'Improved evidence collection'],
  },
  {
    shortLabel: 'Access Control',
    title: 'Access Control Integration',
    subtitle: 'Seamless Vehicle Entry Management',
    desc: 'Integrate ANPR with barriers and access control systems.',
    icon: '🚧',
    image: '/car.jpeg',
    imageAlt: 'Vehicle at an automated barrier with a plate recognized against an access record',
    groups: [
      { label: 'Applications', items: ['Gated Communities', 'Corporate Campuses', 'Industrial Facilities', 'Government Buildings'] },
    ],
    benefits: ['Contactless entry', 'Automated operations', 'Improved convenience'],
  },
  {
    shortLabel: 'Smart Parking',
    title: 'Smart Parking Integration',
    subtitle: 'Ticketless Parking Experience',
    desc: 'Enable intelligent parking operations through automatic vehicle recognition.',
    icon: '🅿️',
    image: '/parking.png',
    imageAlt: 'Multi-level smart parking facility with automated slot availability tracking',
    groups: [
      { label: 'Features', items: ['Entry & Exit Management', 'Occupancy Monitoring', 'Vehicle History', 'Stay-Time Analysis', 'Parking Analytics'] },
    ],
    benefits: ['Reduced congestion', 'Better parking utilization', 'Improved customer experience'],
  },
  {
    shortLabel: 'VMS Integration',
    title: 'Video Management System Integration',
    subtitle: 'Centralized Security Operations',
    desc: 'SecureAAi ANPR integrates seamlessly with SiVMS Enterprise.',
    icon: '🎥',
    image: '/products/sivms/hero.png',
    imageAlt: 'SiVMS Enterprise AI camera hardware',
    groups: [],
    benefits: ['Unified monitoring', 'Event correlation', 'Centralized management', 'Faster investigations'],
  },
];

export default function SiproCapabilitiesSection() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const cap = capabilities[active];

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('spc-vis'); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll('.spc-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .spc-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .spc-rev.spc-vis { opacity:1; transform:none; }
        .spc-d0{transition-delay:0s} .spc-d1{transition-delay:.08s} .spc-d2{transition-delay:.16s}

        .spc-tab {
          width: 100%; display: flex; align-items: center; gap: 12px;
          padding: 13px 16px; border-radius: 14px; text-align: left;
          background: transparent; border: 1px solid transparent; cursor: pointer;
          transition: background 0.18s, border-color 0.18s;
        }
        .spc-tab:hover { background: #f8fafc; }
        .spc-tab.active { background: rgba(1,97,254,.06); border-color: rgba(1,97,254,.22); }
        .spc-tab-icon {
          width: 34px; height: 34px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; font-size: 1.05rem;
          background: #f1f5f9; border: 1px solid #e2e8f0;
        }
        .spc-tab.active .spc-tab-icon { background: rgba(1,97,254,.12); border-color: rgba(1,97,254,.3); }
        .spc-tab-label { font-size: 0.86rem; font-weight: 700; color: #64748b; line-height: 1.25; }
        .spc-tab.active .spc-tab-label { color: #0161FE; }
        .spc-tab-chevron { margin-left: auto; opacity: 0; transition: opacity 0.18s; color: #0161FE; flex-shrink: 0; }
        .spc-tab.active .spc-tab-chevron { opacity: 1; }

        .spc-panel {
          border-radius: 28px; border: 1px solid #e2e8f0; background: #fff;
          padding: 40px; box-shadow: 0 24px 60px -24px rgba(1,97,254,.18);
          min-height: 480px;
        }
        .spc-icon-wrap {
          width: 56px; height: 56px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.7rem; margin-bottom: 16px;
          background: rgba(1,97,254,.08); border: 1px solid rgba(1,97,254,.16);
        }
        .spc-group-label {
          font-size: 0.66rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          color: #94a3b8; margin-bottom: 8px; margin-top: 18px;
        }
        .spc-group-label:first-child { margin-top: 0; }
        .spc-feature-pill {
          display: inline-flex; align-items: center; padding: 5px 12px;
          border-radius: 9999px; font-size: 0.74rem; font-weight: 600;
          background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0;
          white-space: nowrap; margin-right: 8px; margin-bottom: 8px;
        }
        .spc-benefits {
          margin-top: 24px; padding-top: 20px; border-top: 1px solid #f1f5f9;
        }
        .spc-benefit-row {
          display: flex; align-items: center; gap: 9px;
          font-size: 0.86rem; color: #334155; font-weight: 600;
          margin-bottom: 9px;
        }
        .spc-tab-frame {
          position: relative; border-radius: 20px; overflow: hidden;
          box-shadow: 0 20px 44px -18px rgba(1,97,254,.35), 0 4px 14px rgba(15,23,42,.08);
          border: 1px solid rgba(1,97,254,.12);
          margin-bottom: 14px;
        }
        .spc-tab-frame img { display:block; width:100%; height:100%; object-fit:cover; }
        .spc-tab-frame-caption {
          position:absolute; bottom:0; left:0; right:0;
          background: linear-gradient(to top, rgba(3,10,25,.85), transparent);
          color:#fff; font-size:.72rem; font-weight:700; letter-spacing:.02em;
          padding: 24px 14px 12px;
        }
        .spc-panel-thumb {
          width: 168px; height: 128px; border-radius: 16px; overflow: hidden; flex-shrink: 0;
          border: 1px solid rgba(1,97,254,.16); box-shadow: 0 16px 36px -16px rgba(1,97,254,.4);
        }
        .spc-panel-thumb img { display:block; width:100%; height:100%; object-fit:cover; }
      `}</style>
      <section ref={ref} id="capabilities" className="relative bg-white py-24 lg:py-32">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <div className="spc-rev spc-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              What It Does
            </div>
            <h2 className="spc-rev spc-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Core Capabilities
            </h2>
            <p className="spc-rev spc-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              A comprehensive suite of intelligent features designed to capture, analyze, and act upon vehicle data in real-time.
            </p>
          </div>

          <div className="spc-rev spc-d1 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-8 items-start">

            {/* Tab list */}
            <div className="lg:sticky lg:top-28">
              <div className="spc-tab-frame hidden lg:block aspect-[4/3]">
                <img src="/products/cameras/camera.png" alt="AI-powered ANPR camera hardware with real-time detection overlay" />
                <div className="spc-tab-frame-caption">Enterprise-Grade AI Camera Hardware</div>
              </div>
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0">
              {capabilities.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`spc-tab shrink-0 lg:shrink${active === i ? ' active' : ''}`}
                  style={{ minWidth: 220 }}
                >
                  <span className="spc-tab-icon">{c.icon}</span>
                  <span className="spc-tab-label">{c.shortLabel}</span>
                  <svg className="spc-tab-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              ))}
              </div>
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
                  className="spc-panel"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="spc-icon-wrap">{cap.icon}</div>
                      <h4 className="text-[0.7rem] font-bold uppercase tracking-widest text-slate-400 mb-1">{cap.subtitle}</h4>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{cap.title}</h3>
                    </div>
                    {cap.image && (
                      <div className="spc-panel-thumb hidden sm:block">
                        <img src={cap.image} alt={cap.imageAlt} />
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>

                  {cap.groups.map((g, gi) => (
                    <div key={gi}>
                      <div className="spc-group-label">{g.label}</div>
                      <div>
                        {g.items.map((f, j) => <span key={j} className="spc-feature-pill">{f}</span>)}
                      </div>
                    </div>
                  ))}

                  <div className="spc-benefits">
                    <div className="spc-group-label" style={{ marginTop: 0 }}>Benefits</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                      {cap.benefits.map((b, j) => (
                        <div key={j} className="spc-benefit-row">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0161FE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
