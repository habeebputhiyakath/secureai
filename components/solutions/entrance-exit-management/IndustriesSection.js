'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const industries = [
  { label: 'Gated Communities', icon: <><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></> },
  { label: 'Corporate Campuses', icon: <><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M8 7h1M8 11h1M8 15h1M15 7h1M15 11h1M15 15h1" /></> },
  { label: 'Industrial Facilities', icon: <><path d="M3 20h18" /><path d="M5 20V11l4 3v-3l4 3v-3l4 3v6" /><path d="M18 8V5l-3 2" /></> },
  { label: 'Government Buildings', icon: <><path d="M12 2 3 7v2h18V7z" /><path d="M5 10v8M9 10v8M15 10v8M19 10v8" /><path d="M3 21h18" /></> },
  { label: 'Residential Communities', icon: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></> },
  { label: 'Parking Facilities', icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 8v8M9 8h4a2.5 2.5 0 0 1 0 5H9" /></> },
  { label: 'Logistics Hubs', icon: <><rect x="2" y="9" width="14" height="10" rx="1" /><path d="M16 12h3l3 3v4h-6" /><circle cx="6.5" cy="19.5" r="1.5" /><circle cx="17.5" cy="19.5" r="1.5" /></> },
  { label: 'Airports', icon: <><path d="M2 16l20-6-2-3-8 2-5-5-2 1 3 5-6 2z" /><path d="M2 20h20" /></> },
];

export default function EemIndustriesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('eei-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.eei-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .eei-rev { opacity:0; transform:translateY(24px);
          transition:opacity .68s cubic-bezier(.22,1,.36,1), transform .68s cubic-bezier(.22,1,.36,1); }
        .eei-rev.eei-vis { opacity:1; transform:none; }
        .eei-tile { transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; }
        .eei-tile:hover { box-shadow: 0 12px 28px rgba(1,97,254,0.10); transform: translateY(-3px); border-color: rgba(1,97,254,.3); }
      `}</style>
      <section ref={ref} id="industries" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-14">
            <div className="eei-rev mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              Who We Serve
            </div>
            <h2 className="eei-rev text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ transitionDelay: '0.06s' }}>
              Industries We <span style={{ color:'#0161FE' }}>Serve</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="eei-tile flex flex-col items-center text-center gap-3 p-5 rounded-2xl border border-slate-200 bg-white"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background:'rgba(1,97,254,.08)', color:'#0161FE' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ind.icon}</svg>
                </div>
                <span className="text-sm font-bold text-slate-800 leading-tight">{ind.label}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
