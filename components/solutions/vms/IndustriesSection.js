'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const industries = [
  { label: 'Smart Cities', desc: 'Manage city-wide surveillance and public safety operations.', icon: <><path d="M3 21h18" /><path d="M5 21V7l5-4 5 4v14" /><path d="M15 21V11l4-2 2 2v10" /><path d="M9 9h1M9 13h1M9 17h1" /></> },
  { label: 'Airports', desc: 'Enhance security and operational visibility.', icon: <><path d="M2 16l20-6-2-3-8 2-5-5-2 1 3 5-6 2z" /><path d="M2 20h20" /></> },
  { label: 'Transportation', desc: 'Monitor terminals, stations, and logistics hubs.', icon: <><rect x="3" y="6" width="15" height="10" rx="2" /><path d="M18 10h2l1.5 2.5V16H18" /><circle cx="7.5" cy="18" r="1.5" /><circle cx="16.5" cy="18" r="1.5" /></> },
  { label: 'Government', desc: 'Protect critical infrastructure and public facilities.', icon: <><path d="M12 2 3 7v2h18V7z" /><path d="M5 10v8M9 10v8M15 10v8M19 10v8" /><path d="M3 21h18" /></> },
  { label: 'Healthcare', desc: 'Secure hospitals and healthcare campuses.', icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M12 8v8M8 12h8" /></> },
  { label: 'Education', desc: 'Create safer learning environments.', icon: <><path d="M12 3 2 8l10 5 10-5-10-5z" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></> },
  { label: 'Manufacturing', desc: 'Improve safety and monitor industrial operations.', icon: <><path d="M3 20h18" /><path d="M5 20V11l4 3v-3l4 3v-3l4 3v6" /><path d="M18 8V5l-3 2" /></> },
  { label: 'Retail', desc: 'Protect assets and optimize operations.', icon: <><path d="M6 2 4 6v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6l-2-4" /><path d="M4 6h16" /><path d="M9 10a3 3 0 0 0 6 0" /></> },
  { label: 'Logistics & Warehousing', desc: 'Enhance visibility and operational efficiency.', icon: <><rect x="2" y="9" width="14" height="10" rx="1" /><path d="M16 12h3l3 3v4h-6" /><circle cx="6.5" cy="19.5" r="1.5" /><circle cx="17.5" cy="19.5" r="1.5" /></> },
];

export default function VmsIndustriesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vin-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.vin-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .vin-rev { opacity:0; transform:translateY(24px);
          transition:opacity .68s cubic-bezier(.22,1,.36,1), transform .68s cubic-bezier(.22,1,.36,1); }
        .vin-rev.vin-vis { opacity:1; transform:none; }
        .vin-tile { transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; }
        .vin-tile:hover { box-shadow: 0 12px 28px rgba(1,97,254,0.10); transform: translateY(-3px); border-color: rgba(1,97,254,.3); }
      `}</style>
      <section ref={ref} className="relative bg-white py-24 lg:py-32 border-t border-slate-100">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-14">
            <div className="vin-rev mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              Who We Serve
            </div>
            <h2 className="vin-rev text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ transitionDelay: '0.06s' }}>
              Industries We <span style={{ color:'#0161FE' }}>Serve</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="vin-tile flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-white"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background:'rgba(1,97,254,.08)', color:'#0161FE' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ind.icon}</svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{ind.label}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
