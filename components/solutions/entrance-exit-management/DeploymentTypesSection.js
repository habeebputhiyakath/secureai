'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const deployments = [
  {
    title: 'Vehicle Gate & Boom Barrier',
    desc: 'Lane-level ANPR cameras paired with boom barriers deliver ticketless, contactless entry and exit for controlled sites.',
    tags: ['Access control', 'Ticketless entry', 'Barrier integration'],
    icon: <><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  },
  {
    title: 'Multi-Lane Highway-Style Entry',
    desc: 'Overhead gantry cameras capture multiple lanes simultaneously for high-volume campuses and logistics facilities.',
    tags: ['Multi-lane', 'High throughput', 'Peak-hour ready'],
    icon: <><path d="M4 20V10l8-6 8 6v10" /><path d="M2 20h20" /><path d="M9 20v-6h6v6" /></>,
  },
  {
    title: 'Pedestrian & Vehicle Mixed Access',
    desc: 'Combined vehicle and pedestrian access points for mixed-use sites, with independent authorization for each.',
    tags: ['Mixed access', 'Independent authorization', 'Flexible deployment'],
    icon: <><circle cx="9" cy="5" r="2" /><path d="M9 7v6l-3 8M9 13l3 8M6 11l-3 2M12 11l3 2" /><rect x="16" y="9" width="6" height="10" rx="1" /></>,
  },
];

export default function EemDeploymentTypesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('eedt-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.eedt-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .eedt-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .eedt-rev.eedt-vis { opacity:1; transform:none; }
        .eedt-d0{transition-delay:0s} .eedt-d1{transition-delay:.08s}
        .eedt-card { transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s; }
        .eedt-card:hover { box-shadow: 0 16px 40px rgba(1,97,254,0.10); transform: translateY(-4px); border-color: rgba(1,97,254,.3); }
        .eedt-tag {
          display: inline-flex; align-items: center; padding: 4px 10px; margin: 0 6px 6px 0;
          border-radius: 9999px; font-size: 0.68rem; font-weight: 600;
          background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0; white-space: nowrap;
        }
      `}</style>
      <section ref={ref} className="relative bg-white py-24 lg:py-32 border-t border-slate-100">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <div className="eedt-rev eedt-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              Deployment Types
            </div>
            <h2 className="eedt-rev eedt-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              One System. <span style={{ color:'#0161FE' }}>Every Gate.</span>
            </h2>
            <p className="eedt-rev eedt-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              From single-lane barriers to high-traffic multi-lane campuses, entrance and exit management adapts to the site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deployments.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="eedt-card flex flex-col p-7 rounded-3xl border border-slate-200 bg-white"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background:'rgba(1,97,254,.08)', color:'#0161FE', border:'1px solid rgba(1,97,254,.18)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d.icon}</svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{d.title}</h3>
                <p className="text-sm text-slate-500 mb-5 leading-relaxed flex-grow">{d.desc}</p>
                <div>
                  {d.tags.map((t, j) => <span key={j} className="eedt-tag">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
