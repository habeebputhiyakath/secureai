'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ecosystem = [
  { title: 'ANPR Cameras', desc: 'High-accuracy vehicle recognition.' },
  { title: 'Occupancy Detection Cameras', desc: 'Real-time space monitoring.' },
  { title: 'Display Boards', desc: 'Availability guidance.' },
  { title: 'Barrier Gates', desc: 'Automated access control.' },
  { title: 'Parking Management Software', desc: 'Centralized monitoring platform.' },
  { title: 'Mobile Applications', desc: 'Remote monitoring and notifications.' },
  { title: 'Cloud Platform', desc: 'Multi-site management.' },
];

const industries = [
  'Shopping Malls', 'Airports', 'Hospitals', 'Hotels & Resorts',
  'Residential Communities', 'Corporate Offices', 'Educational Institutions',
  'Industrial Parks', 'Smart Cities', 'Logistics Centers',
];

export default function PlmEcosystemSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('ple-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.ple-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ple-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .ple-rev.ple-vis { opacity:1; transform:none; }
        .ple-d0{transition-delay:0s} .ple-d1{transition-delay:.08s}
      `}</style>
      <section ref={ref} id="ecosystem" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Ecosystem Components */}
            <div>
              <div className="ple-rev ple-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Hardware & Software
              </div>
              <h2 className="ple-rev ple-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-8">
                Smart Parking <span style={{ color:'#0161FE' }}>Ecosystem</span>
              </h2>
              <div className="space-y-3">
                {ecosystem.map((eco, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: '#0161FE' }} />
                    <div>
                      <span className="font-bold text-slate-900 mr-2">{eco.title}</span>
                      <span className="text-sm text-slate-500">{eco.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <div className="ple-rev ple-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(15,23,42,.08)',color:'#0f172a',border:'1px solid rgba(15,23,42,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Deployments
              </div>
              <h2 className="ple-rev ple-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-8">
                Industries We <span className="text-slate-400">Serve</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {industries.map((ind, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="px-5 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-sm shadow-sm transition-colors"
                    style={{ '--tw-shadow-color': 'transparent' }}
                  >
                    {ind}
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
