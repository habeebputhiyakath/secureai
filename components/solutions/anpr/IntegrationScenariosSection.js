'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const scenarios = [
  {
    title: 'Traffic Monitoring',
    desc: 'Monitor vehicle movement and optimize traffic operations.',
    applications: ['Highways', 'Intersections', 'Urban Roads', 'Smart Cities'],
    icon: <><path d="M5 17h14M6 17l1.5-5h9L18 17" /><circle cx="8" cy="19.5" r="1.5" /><circle cx="16" cy="19.5" r="1.5" /></>,
  },
  {
    title: 'Parking Management',
    desc: 'Automate entry and exit operations while improving parking efficiency.',
    applications: ['Shopping Malls', 'Airports', 'Hospitals', 'Hotels'],
    icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 8v8M9 8h4a2.5 2.5 0 0 1 0 5H9" /></>,
  },
  {
    title: 'Access Control',
    desc: 'Provide secure and contactless vehicle access.',
    applications: ['Residential Communities', 'Corporate Offices', 'Industrial Parks'],
    icon: <><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  },
  {
    title: 'Law Enforcement',
    desc: 'Enhance public safety and support investigations.',
    applications: ['Police Departments', 'Border Security', 'Critical Infrastructure', 'Public Facilities'],
    icon: <><path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3z" /><path d="M9 12l2 2 4-4" /></>,
  },
];

export default function SiproIntegrationsSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('spi-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.spi-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .spi-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .spi-rev.spi-vis { opacity:1; transform:none; }
        .spi-d0{transition-delay:0s} .spi-d1{transition-delay:.08s}
        .spi-card { transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s; }
        .spi-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(1,97,254,.10); border-color: rgba(1,97,254,.3); }
        .spi-app-tag {
          display: inline-flex; align-items: center; padding: 4px 10px; margin: 0 6px 6px 0;
          border-radius: 9999px; font-size: 0.7rem; font-weight: 600;
          background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0; white-space: nowrap;
        }
      `}</style>
      <section ref={ref} id="scenarios" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <div className="spi-rev spi-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{ background:'rgba(15,23,42,.08)',color:'#0f172a',border:'1px solid rgba(15,23,42,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              Application Scenarios
            </div>
            <h2 className="spi-rev spi-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              4 Core <span style={{ color:'#0161FE' }}>Application Scenarios</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((sc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="spi-card flex flex-col p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background:'rgba(1,97,254,.08)', color:'#0161FE' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{sc.icon}</svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{sc.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{sc.desc}</p>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  {sc.applications.map((a, j) => <span key={j} className="spi-app-tag">{a}</span>)}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
