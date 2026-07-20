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
    title: 'Long Search Times',
    desc: 'Drivers spend valuable time searching for vacant spaces.',
    icon: <><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.4" y2="16.4" /></>,
  },
  {
    title: 'Congestion',
    desc: 'Traffic bottlenecks negatively impact customer experiences.',
    icon: <><path d="M5 17h14M6 17l1.5-5h9L18 17" /><circle cx="8" cy="19.5" r="1.5" /><circle cx="16" cy="19.5" r="1.5" /></>,
  },
  {
    title: 'High Operational Costs',
    desc: 'Manual monitoring increases labor expenses.',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  },
  {
    title: 'Limited Visibility',
    desc: 'Operators lack real-time parking occupancy information.',
    icon: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /><line x1="3" y1="21" x2="21" y2="3" /></>,
  },
  {
    title: 'Revenue Loss',
    desc: 'Underutilized parking spaces affect profitability.',
    icon: <><polyline points="2 7 10.5 15.5 15.5 10.5 22 17" /><polyline points="16 17 22 17 22 11" /></>,
  },
];

const combines = [
  'ANPR Technology — Ticketless access and automated billing',
  'Occupancy Detection — Real-time monitoring of available spaces',
  'Parking Guidance — Navigate drivers directly to empty bays',
  'Vehicle Attribute Recognition — Advanced tracking and security profiling',
  'Enforcement Analytics — Detect overstays and illegal parking',
  'Centralized Management — Multi-site visibility and real-time reporting',
];

export default function PlmWhySection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('plw-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.plw-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .plw-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .plw-rev.plw-vis { opacity:1; transform:none; }
        .plw-d0{transition-delay:0s} .plw-d1{transition-delay:.08s} .plw-d2{transition-delay:.16s}

        .plw-panel { border-radius: 28px; padding: 36px 32px; height: 100%; }
        .plw-panel-challenge { background: #fff; border: 1px solid #f1e2cf; }
        .plw-panel-solution { background: #fff; border: 1px solid rgba(1,97,254,.16); box-shadow: 0 20px 50px -24px rgba(1,97,254,.35); }

        .plw-card { transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; }
        .plw-card-challenge:hover { box-shadow: 0 12px 28px rgba(217,119,6,0.10) !important; transform: translateY(-3px); border-color: rgba(217,119,6,.28) !important; }
        .plw-card-solution:hover { box-shadow: 0 12px 28px rgba(1,97,254,0.12) !important; transform: translateY(-3px); border-color: rgba(1,97,254,.3) !important; }

        .plw-icon-wrap {
          width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
          display:flex; align-items:center; justify-content:center;
        }
      `}</style>
      <section ref={ref} id="why" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="plw-rev plw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              Why It Matters
            </div>
            <h2 className="plw-rev plw-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Parking Challenges in <span style={{ color:'#0161FE' }}>Modern Facilities</span>
            </h2>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Left: The Challenges */}
            <div className="plw-panel plw-panel-challenge">
              <div className="plw-rev plw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(217,119,6,.08)',color:'#b45309',border:'1px solid rgba(217,119,6,.22)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The Challenge
              </div>
              <h3 className="plw-rev plw-d1 text-2xl font-extrabold tracking-tight text-slate-900 mb-3">
                Growing Facilities, Growing Friction
              </h3>
              <p className="plw-rev plw-d2 text-slate-500 mb-7 leading-relaxed">
                Managing parking operations has become increasingly complex due to rising vehicle volumes, inefficient space utilization, traffic congestion, and growing customer expectations.
              </p>

              <div className="space-y-3">
                {challenges.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="plw-card plw-card-challenge flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white"
                  >
                    <div className="plw-icon-wrap" style={{ background:'rgba(217,119,6,.08)', color:'#b45309' }}>
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
            <div className="plw-panel plw-panel-solution">
              <div className="plw-rev plw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The SecureAAi Advantage
              </div>
              <h3 className="plw-rev plw-d1 text-2xl font-extrabold tracking-tight text-slate-900 mb-3">
                One Platform. <span style={{ color:'#0161FE' }}>Complete Visibility.</span>
              </h3>
              <p className="plw-rev plw-d2 text-slate-500 mb-6 leading-relaxed">
                SecureAAi combines multiple smart technologies into one intelligent parking ecosystem:
              </p>

              <div className="space-y-1">
                {combines.map((c, i) => {
                  const [title, desc] = c.split(' — ');
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.35, delay: i * 0.06 }}
                      className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-b-0"
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background:'rgba(1,97,254,.1)', color:'#0161FE' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <div>
                        <span className="text-sm font-bold text-slate-800">{title}</span>
                        <span className="text-sm text-slate-500"> — {desc}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
