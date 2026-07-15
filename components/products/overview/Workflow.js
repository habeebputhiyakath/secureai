'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    id: 1, label: '01', title: 'Video Capture',
    desc: 'High-resolution edge devices capture streams continuously across every monitored zone, feeding the pipeline in real time.',
    icon: 'camera',
  },
  {
    id: 2, label: '02', title: 'AI Analysis',
    desc: 'Deep learning models process video frames locally, without sending raw footage to the cloud.',
    icon: 'chip',
  },
  {
    id: 3, label: '03', title: 'Detection',
    desc: 'Anomalies, faces, vehicles, and behavioral patterns are identified the instant they appear.',
    icon: 'radar',
  },
  {
    id: 4, label: '04', title: 'Decision Engine',
    desc: 'An enterprise rules engine determines the required action — escalate, log, or automate.',
    icon: 'engine',
  },
  {
    id: 5, label: '05', title: 'Instant Alert',
    desc: 'Notifications route directly to operators, responders, or any integrated third-party system.',
    icon: 'bell',
  },
  {
    id: 6, label: '06', title: 'Live Dashboard',
    desc: 'Every event is visualized on the command-center interface as it happens.',
    icon: 'chart',
  },
];

function StepIcon({ type, size = 20, color = '#0161FE' }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (type) {
    case 'camera':
      return (
        <svg {...common}>
          <path d="M3 8.2c0-.66.53-1.2 1.2-1.2h3.1l1.1-1.6h7.2l1.1 1.6h3.1c.66 0 1.2.54 1.2 1.2v9.6c0 .66-.54 1.2-1.2 1.2H4.2c-.66 0-1.2-.54-1.2-1.2V8.2z" />
          <circle cx="12" cy="13" r="3.2" />
        </svg>
      );
    case 'chip':
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="1.4" />
          <line x1="12" y1="2" x2="12" y2="5.2" /><line x1="12" y1="18.8" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5.2" y2="12" /><line x1="18.8" y1="12" x2="22" y2="12" />
          <line x1="9.6" y1="9.6" x2="14.4" y2="14.4" opacity="0.5" />
        </svg>
      );
    case 'radar':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.4" />
          <circle cx="12" cy="12" r="4.4" opacity="0.5" />
          <circle cx="12" cy="12" r="1.3" fill={color} stroke="none" />
        </svg>
      );
    case 'engine':
      return (
        <svg {...common}>
          <path d="M4 12h4l2-4 4 8 2-4h4" />
        </svg>
      );
    case 'bell':
      return (
        <svg {...common}>
          <path d="M6 10.5a6 6 0 0 1 12 0c0 4 1.4 5.4 1.4 5.4H4.6S6 14.5 6 10.5z" />
          <path d="M10 19a2 2 0 0 0 4 0" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 19V9.5" /><path d="M10 19V5" /><path d="M16 19v-7.5" /><path d="M22 19H2" />
        </svg>
      );
  }
}

function ChevronIcon({ open }) {
  return (
    <motion.svg
      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <polyline points="6 9 12 15 18 9" />
    </motion.svg>
  );
}

function LinkArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

const NODES = [
  { x: 70, y: 70 }, { x: 220, y: 110 }, { x: 130, y: 200 },
  { x: 300, y: 230 }, { x: 190, y: 330 }, { x: 320, y: 400 },
];
const EDGES = [[0, 1], [1, 2], [1, 3], [2, 4], [3, 5], [4, 5]];

export default function Workflow() {
  const ref = useRef(null);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('wf-vis'); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.wf-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const featured = steps[0];
  const rest = steps.slice(1);

  return (
    <>
      <style>{`
        .wf-rev { opacity: 0; transform: translateY(24px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .wf-rev.wf-vis { opacity: 1; transform: none; }
        .wf-d0 { transition-delay: 0.00s; } .wf-d1 { transition-delay: 0.08s; }
        .wf-d2 { transition-delay: 0.16s; } .wf-d3 { transition-delay: 0.24s; }

        .wf-row:hover { background: rgba(1,97,254,0.03); }
        .wf-row { transition: background 0.2s ease; }

        .wf-cta { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .wf-cta:hover { transform: translateY(-2px); box-shadow: 0 10px 24px -8px rgba(1,97,254,0.45); }

        .wf-panel-grid { background-image: linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 32px 32px; }

        .wf-scanline { position: absolute; left: 0; right: 0; height: 90px; background: linear-gradient(to bottom, transparent, rgba(1,97,254,0.16), transparent); animation: wf-scan 5s linear infinite; }
        @keyframes wf-scan { 0% { top: -90px; } 100% { top: 100%; } }

        .wf-node { animation: wf-pulse 2.4s ease-in-out infinite; }
        @keyframes wf-pulse { 0%, 100% { opacity: 0.55; r: 4; } 50% { opacity: 1; r: 5.5; } }

        .wf-edge { stroke-dasharray: 5 5; animation: wf-flow 1.6s linear infinite; }
        @keyframes wf-flow { to { stroke-dashoffset: -20; } }

        .wf-badge-dot { width: 7px; height: 7px; border-radius: 50%; background: #22c55e; position: relative; }
        .wf-badge-dot::after { content: ''; position: absolute; inset: -4px; border-radius: 50%; border: 1px solid #22c55e; opacity: 0.6; animation: wf-ping 1.8s cubic-bezier(0,0,0.2,1) infinite; }
        @keyframes wf-ping { 0% { transform: scale(0.8); opacity: 0.6; } 75%, 100% { transform: scale(2); opacity: 0; } }

        @media (prefers-reduced-motion: reduce) {
          .wf-scanline, .wf-node, .wf-edge, .wf-badge-dot::after { animation: none; }
        }
      `}</style>

      <section ref={ref} className="relative overflow-hidden bg-white py-24 border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Centered header */}
          <div className="wf-rev wf-d0 text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 mb-5 px-[14px] py-[6px] rounded-full text-[0.68rem] font-bold tracking-[0.1em] uppercase"
              style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}>
              Platform Workflow
            </span>
            <h2 className="text-4xl sm:text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 mb-5">
              How SecureAI <span style={{ color: '#0161FE' }}>Works</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Left — featured step + accordion */}
            <div className="wf-rev wf-d1">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full text-white shrink-0"
                    style={{ background: '#0161FE' }}>
                    <StepIcon type={featured.icon} size={17} color="#fff" />
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {featured.label} · {featured.title}
                  </h3>
                </div>
                <span className="mt-1.5 text-slate-300"><LinkArrow /></span>
              </div>
              <p className="text-[0.95rem] text-slate-500 leading-relaxed mb-7 pl-12">
                {featured.desc}
              </p>

              <button className="wf-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white mb-8 ml-12"
                style={{ background: '#0161FE' }}>
                See the platform in action <LinkArrow />
              </button>

              <div className="border-t border-slate-200">
                {rest.map(step => {
                  const isOpen = openId === step.id;
                  return (
                    <div key={step.id} className="wf-row border-b border-slate-200 px-1">
                      <button
                        onClick={() => setOpenId(isOpen ? null : step.id)}
                        className="w-full flex items-center justify-between py-5 text-left"
                      >
                        <span className="flex items-center gap-3.5">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                            style={{ background: 'rgba(1,97,254,0.07)' }}>
                            <StepIcon type={step.icon} size={15} />
                          </span>
                          <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-slate-400">{step.label}</span>
                          <span className="text-[0.98rem] font-bold text-slate-800">{step.title}</span>
                        </span>
                        <span className="text-slate-400 shrink-0"><ChevronIcon open={isOpen} /></span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <p className="text-[0.88rem] text-slate-500 leading-relaxed pb-5 pl-[46px] pr-6">
                              {step.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right — HUD visual panel */}
            <div className="wf-rev wf-d2 relative">
              <div className="relative rounded-[28px] overflow-hidden aspect-[4/4.6]"
                style={{ background: 'linear-gradient(160deg, #0B1B3F 0%, #132A5E 100%)' }}>
                <div className="absolute inset-0 wf-panel-grid opacity-60" />
                <div className="absolute inset-0 overflow-hidden">
                  <div className="wf-scanline" />
                </div>

                <svg viewBox="0 0 380 460" className="absolute inset-0 w-full h-full">
                  {EDGES.map(([a, b], i) => (
                    <line key={i} className="wf-edge" x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y}
                      stroke="#4d8bff" strokeWidth="1.4" opacity="0.5" />
                  ))}
                  {NODES.map((n, i) => (
                    <circle key={i} className="wf-node" cx={n.x} cy={n.y} r="4" fill="#7FB1FF"
                      style={{ animationDelay: `${i * 0.25}s` }} />
                  ))}
                </svg>

                {/* corner brackets */}
                <span className="absolute top-5 right-5 w-5 h-5 border-t border-r border-white/25 rounded-tr-md" />
                <span className="absolute bottom-5 left-5 w-5 h-5 border-b border-l border-white/25 rounded-bl-md" />

                {/* live badge, top-left */}
                <div className="absolute top-6 left-6 flex items-center gap-2.5 bg-white/95 backdrop-blur rounded-full pl-3 pr-4 py-2.5 shadow-lg">
                  <span className="wf-badge-dot" />
                  <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase" style={{ color: '#0161FE' }}>
                    Live Feed
                  </span>
                </div>

                {/* floating stat chip, bottom-right */}
                <div className="absolute -bottom-6 right-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full shrink-0" style={{ background: 'rgba(1,97,254,0.08)' }}>
                    <StepIcon type="chart" size={18} />
                  </span>
                  <div>
                    <div className="text-[1.05rem] font-extrabold text-slate-900 leading-none mb-1">6-stage</div>
                    <div className="text-[0.72rem] text-slate-500 leading-none">Fully automated pipeline</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}