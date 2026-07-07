'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const swFeatures = [
  'Real-time vehicle tracking on interactive maps',
  'Historical route playback and analysis',
  'Custom geofencing and zone management',
  'Comprehensive fleet utilization reports',
  'Real-time alert notifications (SMS/Email)',
  'Driver behavior monitoring',
  'Multi-device support (Desktop, Tablet, Mobile)',
];

export default function TracksiSoftwareSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('tsw-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.tsw-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .tsw-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .tsw-rev.tsw-vis { opacity:1; transform:none; }
        .tsw-d0{transition-delay:0s} .tsw-d1{transition-delay:.08s} .tsw-d2{transition-delay:.16s}
        .tsw-list-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.9rem; color: #cbd5e1; margin-bottom: 12px;
        }
        .tsw-list-item svg { flex-shrink: 0; color: #f87171; }
      `}</style>
      <section ref={ref} id="software" className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 pointer-events-none blur-3xl"
          style={{ background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Side (Mockup placeholder) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800"
              style={{ aspectRatio: '16/10' }}
            >
               {/* UI Mockup representation */}
               <div className="absolute top-0 left-0 right-0 h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
               </div>
               <div className="absolute top-10 left-0 bottom-0 w-48 bg-slate-900/50 border-r border-slate-700/50 p-4 flex flex-col gap-3">
                 {[1,2,3,4,5].map(i => <div key={i} className="h-6 rounded bg-slate-700/30 w-full"></div>)}
               </div>
               <div className="absolute top-10 left-48 right-0 bottom-0 p-6">
                 {/* Map representation */}
                 <div className="w-full h-full rounded-xl border border-slate-700/50 relative overflow-hidden"
                      style={{ background: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 100%)' }}>
                    {/* Grid lines */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    {/* Fake route line */}
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M10,80 Q30,60 50,70 T90,20" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
                      <circle cx="90" cy="20" r="3" fill="#ef4444" />
                      <circle cx="10" cy="80" r="3" fill="#ef4444" />
                    </svg>
                 </div>
               </div>
            </motion.div>

            {/* Text Side */}
            <div className="order-1 lg:order-2">
              <div className="tsw-rev tsw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(239,68,68,.15)',color:'#fca5a5',border:'1px solid rgba(239,68,68,.3)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Software Platform
              </div>
              <h2 className="tsw-rev tsw-d1 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
                Centralized <span className="text-red-500">Fleet Visibility</span>
              </h2>
              <p className="tsw-rev tsw-d2 text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
                Manage your entire fleet from a single, intuitive interface. Our GPS tracking software translates raw telemetry data into actionable intelligence, allowing you to optimize routes, reduce costs, and improve safety.
              </p>
              
              <div className="space-y-2">
                {swFeatures.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="tsw-list-item"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
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
