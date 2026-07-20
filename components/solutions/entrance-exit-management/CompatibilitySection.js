'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const groups = [
  {
    title: 'Vehicle Data Captured',
    icon: <><rect x="3" y="7" width="18" height="10" rx="2" /><circle cx="12" cy="12" r="3" /></>,
    items: ['Plate Number', 'Vehicle Color', 'Vehicle Type & Brand', 'Direction of Travel', 'Timestamp', 'Confidence Score'],
  },
  {
    title: 'Secure Data Transmission',
    icon: <><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 21h8M12 18v3" /></>,
    items: ['ONVIF Profile M', 'REST API', 'RTSP Streaming', 'TCP / HTTP', 'Encrypted Transmission'],
  },
  {
    title: 'Integrates With',
    icon: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>,
    items: ['SmartPay Parking Solution', 'SiVMS Enterprise', 'Access Control Systems', 'Mobile Applications', 'Third-Party APIs'],
  },
];

export default function EemCompatibilitySection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('eecm-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.eecm-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .eecm-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .eecm-rev.eecm-vis { opacity:1; transform:none; }
        .eecm-d0{transition-delay:0s} .eecm-d1{transition-delay:.08s}
        .eecm-card { transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s; }
        .eecm-card:hover { box-shadow: 0 16px 40px rgba(1,97,254,0.10); transform: translateY(-4px); border-color: rgba(1,97,254,.3); }
        .eecm-item {
          display:flex; align-items:center; gap:9px;
          font-size:.85rem; color:#334155; font-weight:600; padding: 9px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        .eecm-item:last-child { border-bottom: none; }
      `}</style>
      <section ref={ref} className="relative bg-white py-24 lg:py-32 border-t border-slate-100">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <div className="eecm-rev eecm-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              Compatibility &amp; Integration
            </div>
            <h2 className="eecm-rev eecm-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Open by <span style={{ color:'#0161FE' }}>Design</span>
            </h2>
            <p className="eecm-rev eecm-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              Entrance and exit events capture rich vehicle data, transmit it securely, and plug directly into the rest of your security stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groups.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="eecm-card p-7 rounded-3xl border border-slate-200 bg-white"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background:'rgba(1,97,254,.08)', color:'#0161FE', border:'1px solid rgba(1,97,254,.18)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{g.icon}</svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{g.title}</h3>
                <div>
                  {g.items.map((it, j) => (
                    <div key={j} className="eecm-item">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0161FE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                      {it}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
