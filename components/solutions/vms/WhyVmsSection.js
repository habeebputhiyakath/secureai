'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Icon({ path }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  );
}

const challenges = [
  {
    title: 'Disconnected Systems',
    desc: 'Multiple standalone systems make monitoring difficult and reduce operational efficiency.',
    icon: <><circle cx="6" cy="12" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><line x1="8.6" y1="10.6" x2="15.4" y2="7.4" /><line x1="8.6" y1="13.4" x2="15.4" y2="16.6" /></>,
  },
  {
    title: 'Limited Visibility',
    desc: 'Operators struggle to manage growing camera networks and multiple locations.',
    icon: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /><line x1="3" y1="21" x2="21" y2="3" /></>,
  },
  {
    title: 'Slow Incident Response',
    desc: 'Critical events may be missed without intelligent alerts and centralized control.',
    icon: <><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" /></>,
  },
  {
    title: 'High Operational Complexity',
    desc: 'Managing different vendors and platforms increases maintenance and administration efforts.',
    icon: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V21a2 2 0 0 1-4 0v-.09A1.7 1.7 0 0 0 9 19.37a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.63 15a1.7 1.7 0 0 0-1.56-1.04H3a2 2 0 0 1 0-4h.09A1.7 1.7 0 0 0 4.63 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.63a1.7 1.7 0 0 0 1.04-1.56V3a2 2 0 0 1 4 0v.09A1.7 1.7 0 0 0 15 4.63a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.37 9a1.7 1.7 0 0 0 1.56 1.04H21a2 2 0 0 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z" /></>,
  },
  {
    title: 'Lack of Scalability',
    desc: 'Legacy systems are unable to support future expansion and advanced analytics.',
    icon: <><path d="M3 20h18" /><path d="M5 20V11l4 3v-3l4 3v-3l4 3v6" /><path d="M18 8V5l-3 2" /></>,
  },
];

const combines = [
  'Live Video Monitoring',
  'Video Recording and Playback',
  'Event Management',
  'Multi-Site Control',
  'AI Video Analytics Integration',
  'Access Control Integration',
  'ANPR Integration',
  'Mobile Monitoring',
  'Cloud Connectivity',
  'Advanced Search and Investigation Tools',
];

export default function VmsWhySection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vw-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.vw-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .vw-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .vw-rev.vw-vis { opacity:1; transform:none; }
        .vw-d0{transition-delay:0s} .vw-d1{transition-delay:.08s} .vw-d2{transition-delay:.16s}

        .vw-panel { border-radius: 28px; padding: 36px 32px; height: 100%; }
        .vw-panel-challenge { background: #fff; border: 1px solid #f1e2cf; }
        .vw-panel-solution { background: #fff; border: 1px solid rgba(1,97,254,.16); box-shadow: 0 20px 50px -24px rgba(1,97,254,.35); }

        .vw-card { transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; }
        .vw-card-challenge:hover { box-shadow: 0 12px 28px rgba(217,119,6,0.10) !important; transform: translateY(-3px); border-color: rgba(217,119,6,.28) !important; }

        .vw-icon-wrap {
          width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
          display:flex; align-items:center; justify-content:center;
        }
      `}</style>
      <section ref={ref} id="why" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="vw-rev vw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              Why It Matters
            </div>
            <h2 className="vw-rev vw-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              From Fragmented Surveillance to <span style={{ color:'#0161FE' }}>Unified Intelligence</span>
            </h2>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Left: The Challenges */}
            <div className="vw-panel vw-panel-challenge">
              <div className="vw-rev vw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(217,119,6,.08)',color:'#b45309',border:'1px solid rgba(217,119,6,.22)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The Challenge
              </div>
              <h3 className="vw-rev vw-d1 text-2xl font-extrabold tracking-tight text-slate-900 mb-3">
                Why Organizations Need an Advanced VMS
              </h3>
              <p className="vw-rev vw-d2 text-slate-500 mb-7 leading-relaxed">
                Traditional surveillance systems often create challenges that hinder security effectiveness and growth.
              </p>

              <div className="space-y-3">
                {challenges.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="vw-card vw-card-challenge flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white"
                  >
                    <div className="vw-icon-wrap" style={{ background:'rgba(217,119,6,.08)', color:'#b45309' }}>
                      <Icon path={c.icon} />
                    </div>
                    <div>
                      <h4 className="text-[0.92rem] font-bold text-slate-900">{c.title}</h4>
                      <p className="text-sm text-slate-500 mt-0.5 leading-snug">{c.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: The Solution */}
            <div className="vw-panel vw-panel-solution">
              <div className="vw-rev vw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The Solution
              </div>
              <h3 className="vw-rev vw-d1 text-2xl font-extrabold tracking-tight text-slate-900 mb-3">
                One Platform. <span style={{ color:'#0161FE' }}>Complete Visibility.</span>
              </h3>
              <p className="vw-rev vw-d2 text-slate-500 mb-6 leading-relaxed">
                SecureAAi Video Management System provides:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                {combines.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-center gap-3 py-3 border-b border-slate-100 last:border-b-0"
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ background:'rgba(1,97,254,.1)', color:'#0161FE' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{c}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
