'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const deployments = [
  {
    title: 'Highway & Gantry',
    desc: 'Overhead-mounted units capture multi-lane, high-speed traffic on highways, expressways, and urban arterial roads.',
    tags: ['Multi-lane', 'High-speed capture', '24/7 operation'],
    icon: <><path d="M4 20V10l8-6 8 6v10" /><path d="M2 20h20" /><path d="M9 20v-6h6v6" /></>,
  },
  {
    title: 'Entrance & Exit Barrier',
    desc: 'Lane-level cameras paired with boom barriers deliver ticketless, contactless entry and exit for controlled sites.',
    tags: ['Access control', 'Ticketless entry', 'Barrier integration'],
    icon: <><path d="M3 17h9M3 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" /><path d="M17 5 6 16" /><path d="M14 3l7 7-2 2-7-7z" /></>,
  },
  {
    title: 'Mobile & Vehicle-Mounted',
    desc: 'Compact, ruggedized units mount on patrol vehicles for on-the-move enforcement and temporary monitoring zones.',
    tags: ['Patrol vehicles', 'Portable rigs', 'Temporary sites'],
    icon: <><rect x="1" y="9" width="15" height="8" rx="2" /><path d="M16 12h3l3 3v2h-6" /><circle cx="5.5" cy="18.5" r="1.5" /><circle cx="16.5" cy="18.5" r="1.5" /></>,
  },
  {
    title: 'Multi-Storey Parking',
    desc: 'Entrance and exit pairs validate permits and log stay-time across every level of a parking structure.',
    tags: ['Permit validation', 'Stay-time tracking', 'Level-by-level'],
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18" /><path d="M9 3v18M15 3v18" /></>,
  },
];

export default function SiproDeploymentTypesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('sdt-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.sdt-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .sdt-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .sdt-rev.sdt-vis { opacity:1; transform:none; }
        .sdt-d0{transition-delay:0s} .sdt-d1{transition-delay:.08s}
        .sdt-card { transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s; }
        .sdt-card:hover { box-shadow: 0 16px 40px rgba(1,97,254,0.10); transform: translateY(-4px); border-color: rgba(1,97,254,.3); }
        .sdt-tag {
          display:inline-flex; align-items:center; padding:4px 10px; margin:0 6px 6px 0;
          border-radius:9999px; font-size:.68rem; font-weight:600;
          background:#f1f5f9; color:#475569; border:1px solid #e2e8f0; white-space:nowrap;
        }
      `}</style>
      <section ref={ref} className="relative bg-white py-24 lg:py-32 border-t border-slate-100">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <div className="sdt-rev sdt-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              Deployment Types
            </div>
            <h2 className="sdt-rev sdt-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              One System. <span style={{ color:'#0161FE' }}>Every Site.</span>
            </h2>
            <p className="sdt-rev sdt-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              From highway gantries to parking structures, Si Pro ANPR adapts to fixed and mobile deployments alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deployments.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="sdt-card flex flex-col p-7 rounded-3xl border border-slate-200 bg-white"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background:'rgba(1,97,254,.08)', color:'#0161FE', border:'1px solid rgba(1,97,254,.18)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d.icon}</svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{d.title}</h3>
                <p className="text-sm text-slate-500 mb-5 leading-relaxed flex-grow">{d.desc}</p>
                <div>
                  {d.tags.map((t, j) => <span key={j} className="sdt-tag">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
