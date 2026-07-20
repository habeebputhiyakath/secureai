'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Icon({ path, ...props }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {path}
    </svg>
  );
}

const challenges = [
  {
    title: 'Increasing Traffic Volumes',
    desc: 'Growing vehicle numbers require intelligent systems capable of processing information automatically.',
    icon: <><path d="M5 17h14M6 17l1.5-5h9L18 17" /><circle cx="8" cy="19.5" r="1.5" /><circle cx="16" cy="19.5" r="1.5" /><path d="M9 8h6M8 5h8l1 4H7l1-4z" /></>,
  },
  {
    title: 'Manual Operations',
    desc: 'Conventional processes increase labor costs and reduce efficiency.',
    icon: <><path d="M9 3h6a1 1 0 0 1 1 1v1H8V4a1 1 0 0 1 1-1z" /><rect x="5" y="5" width="14" height="16" rx="2" /><path d="M9 12h6M9 16h4" /></>,
  },
  {
    title: 'Limited Visibility',
    desc: 'Organizations lack actionable information about vehicle movement and behavior.',
    icon: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /><line x1="3" y1="21" x2="21" y2="3" /></>,
  },
  {
    title: 'Security Challenges',
    desc: 'Unauthorized vehicles and suspicious activities require immediate attention.',
    icon: <><path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3z" /><path d="M12 8v5" /><circle cx="12" cy="16.2" r="0.6" fill="currentColor" /></>,
  },
  {
    title: 'Investigation Difficulties',
    desc: 'Manual searches consume time and delay incident response.',
    icon: <><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.4" y2="16.4" /><path d="M9 11h4" /></>,
  },
];

const combines = [
  'AI License Plate Recognition',
  'Vehicle Attribute Detection',
  'Blacklist & Whitelist Management',
  'Real-Time Alerts',
  'Traffic Analytics',
  'Vehicle Search',
  'Access Control Integration',
  'Parking Management Integration',
  'VMS Integration',
  'Cloud Connectivity',
];

export default function SiproWhyAnprSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('spw-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.spw-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .spw-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .spw-rev.spw-vis { opacity:1; transform:none; }
        .spw-d0{transition-delay:0s} .spw-d1{transition-delay:.08s} .spw-d2{transition-delay:.16s}

        .spw-panel { border-radius: 28px; padding: 36px 32px; height: 100%; }
        .spw-panel-challenge { background: #fff; border: 1px solid #f1e2cf; }
        .spw-panel-solution { background: #fff; border: 1px solid rgba(1,97,254,.16); box-shadow: 0 20px 50px -24px rgba(1,97,254,.35); }

        .spw-card { transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; }
        .spw-card-challenge:hover { box-shadow: 0 12px 28px rgba(217,119,6,0.10) !important; transform: translateY(-3px); border-color: rgba(217,119,6,.28) !important; }
        .spw-card-solution:hover { box-shadow: 0 12px 28px rgba(1,97,254,0.12) !important; transform: translateY(-3px); border-color: rgba(1,97,254,.3) !important; }

        .spw-icon-wrap {
          width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
          display:flex; align-items:center; justify-content:center;
        }
      `}</style>
      <section ref={ref} id="why" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="spw-rev spw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              Why It Matters
            </div>
            <h2 className="spw-rev spw-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              From Everyday Bottlenecks to <span style={{ color:'#0161FE' }}>Automated Intelligence</span>
            </h2>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Left: The Challenges */}
            <div className="spw-panel spw-panel-challenge">
              <div className="spw-rev spw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(217,119,6,.08)',color:'#b45309',border:'1px solid rgba(217,119,6,.22)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The Challenge
              </div>
              <h3 className="spw-rev spw-d1 text-2xl font-extrabold tracking-tight text-slate-900 mb-3">
                Why Modern Organizations Need ANPR
              </h3>
              <p className="spw-rev spw-d2 text-slate-500 mb-7 leading-relaxed">
                Traditional vehicle monitoring methods are often inefficient, labor-intensive, and unable to provide real-time insights.
              </p>

              <div className="space-y-3">
                {challenges.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="spw-card spw-card-challenge flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white"
                  >
                    <div className="spw-icon-wrap" style={{ background:'rgba(217,119,6,.08)', color:'#b45309' }}>
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

            {/* Right: The Benefits */}
            <div className="spw-panel spw-panel-solution">
              <div className="spw-rev spw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The Solution
              </div>
              <h3 className="spw-rev spw-d1 text-2xl font-extrabold tracking-tight text-slate-900 mb-3">
                One Platform. <span style={{ color:'#0161FE' }}>Complete Vehicle Intelligence.</span>
              </h3>
              <p className="spw-rev spw-d2 text-slate-500 mb-6 leading-relaxed">
                SecureAAi ANPR combines:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                {combines.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="spw-card spw-card-solution flex items-center gap-3 py-3 border-b border-slate-100 last:border-b-0"
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
