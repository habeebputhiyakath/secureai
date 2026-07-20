'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Vehicle Approaches',
    desc: 'An ANPR camera at the gate captures the vehicle and plate as it arrives — day, night, or in adverse weather.',
    icon: <><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></>,
  },
  {
    step: '02',
    title: 'Recognized & Authorized',
    desc: 'The plate is read and instantly checked against whitelist and blacklist records for authorization.',
    icon: <><rect x="3" y="7" width="18" height="10" rx="2" /><path d="M7 17v2M17 17v2" /><path d="M7 11h6" /></>,
  },
  {
    step: '03',
    title: 'Barrier Opens Automatically',
    desc: 'Authorized vehicles pass through contactlessly — any applicable charges are calculated and processed digitally.',
    icon: <><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  },
  {
    step: '04',
    title: 'Event Logged & Reported',
    desc: 'Every entry and exit is recorded centrally for search, reporting, and integration with VMS and parking systems.',
    icon: <><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></>,
  },
];

export default function EemHowItWorksSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('eehw-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.eehw-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .eehw-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .eehw-rev.eehw-vis { opacity:1; transform:none; }
        .eehw-d0{transition-delay:0s} .eehw-d1{transition-delay:.08s}
        .eehw-card { transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s; position: relative; }
        .eehw-card:hover { box-shadow: 0 16px 40px rgba(1,97,254,0.10); transform: translateY(-4px); border-color: rgba(1,97,254,.3); }
        .eehw-connector {
          display: none;
        }
        @media (min-width: 1024px) {
          .eehw-connector {
            display: block; position: absolute; top: 46px; left: 100%;
            width: 100%; height: 2px;
            background: repeating-linear-gradient(90deg, rgba(1,97,254,.28) 0 8px, transparent 8px 16px);
            z-index: 0;
          }
        }
      `}</style>
      <section ref={ref} id="how-it-works" className="relative bg-white py-24 lg:py-32 border-t border-slate-100">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <div className="eehw-rev eehw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              How It Works
            </div>
            <h2 className="eehw-rev eehw-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              From Approach to <span style={{ color:'#0161FE' }}>Automatic Access</span>
            </h2>
            <p className="eehw-rev eehw-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              A single automated pipeline handles every vehicle at every gate, with no manual intervention required.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="eehw-card flex flex-col p-7 rounded-3xl border border-slate-200 bg-white"
              >
                {i < steps.length - 1 && <div className="eehw-connector" />}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background:'rgba(1,97,254,.08)', color:'#0161FE', border:'1px solid rgba(1,97,254,.18)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                  </div>
                  <span className="text-2xl font-extrabold text-slate-200 select-none">{s.step}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
