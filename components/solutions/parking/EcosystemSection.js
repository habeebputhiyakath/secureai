'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const industries = [
  { label: 'Shopping Malls', icon: <><path d="M6 2 4 6v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6l-2-4" /><path d="M4 6h16" /><path d="M9 10a3 3 0 0 0 6 0" /></> },
  { label: 'Airports', icon: <><path d="M2 16l20-6-2-3-8 2-5-5-2 1 3 5-6 2z" /><path d="M2 20h20" /></> },
  { label: 'Hospitals', icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M12 8v8M8 12h8" /></> },
  { label: 'Hotels & Resorts', icon: <><path d="M3 21V10l9-6 9 6v11" /><path d="M9 21v-6h6v6" /></> },
  { label: 'Corporate Offices', icon: <><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M8 7h1M8 11h1M8 15h1M15 7h1M15 11h1M15 15h1" /></> },
  { label: 'Residential Communities', icon: <><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></> },
  { label: 'Universities', icon: <><path d="M12 3 2 8l10 5 10-5-10-5z" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></> },
  { label: 'Government Facilities', icon: <><path d="M12 2 3 7v2h18V7z" /><path d="M5 10v8M9 10v8M15 10v8M19 10v8" /><path d="M3 21h18" /></> },
  { label: 'Smart Cities', icon: <><path d="M3 21h18" /><path d="M5 21V7l5-4 5 4v14" /><path d="M15 21V11l4-2 2 2v10" /><path d="M9 9h1M9 13h1M9 17h1" /></> },
  { label: 'Transportation Hubs', icon: <><rect x="3" y="6" width="15" height="10" rx="2" /><path d="M18 10h2l1.5 2.5V16H18" /><circle cx="7.5" cy="18" r="1.5" /><circle cx="16.5" cy="18" r="1.5" /></> },
  { label: 'Industrial Parks', icon: <><path d="M3 20h18" /><path d="M5 20V11l4 3v-3l4 3v-3l4 3v6" /><path d="M18 8V5l-3 2" /></> },
  { label: 'Mixed-Use Developments', icon: <><rect x="3" y="3" width="7" height="18" rx="1" /><rect x="14" y="8" width="7" height="13" rx="1" /><path d="M6 7h1M6 11h1M6 15h1M17 12h1M17 16h1" /></> },
];

export default function ParkingEcosystemSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('pe-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.pe-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pe-rev { opacity:0; transform:translateY(24px);
          transition:opacity .68s cubic-bezier(.22,1,.36,1), transform .68s cubic-bezier(.22,1,.36,1); }
        .pe-rev.pe-vis { opacity:1; transform:none; }
        .pe-tile { transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; }
        .pe-tile:hover { box-shadow: 0 12px 28px rgba(1,97,254,0.10); transform: translateY(-3px); border-color: rgba(1,97,254,.3); }
      `}</style>
      <section ref={ref} id="industries" className="relative bg-white py-24 lg:py-32 border-t border-slate-100">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-14">
            <div className="pe-rev mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              Who We Serve
            </div>
            <h2 className="pe-rev text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ transitionDelay: '0.06s' }}>
              Industries We <span style={{ color:'#0161FE' }}>Serve</span>
            </h2>
            <p className="pe-rev text-slate-500 text-lg max-w-2xl mx-auto mt-4" style={{ transitionDelay: '0.1s' }}>
              Our SmartPay Parking Solution is ideal for:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="pe-tile flex items-center gap-3 p-4 rounded-2xl border border-slate-200 bg-white"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background:'rgba(1,97,254,.08)', color:'#0161FE' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ind.icon}</svg>
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
