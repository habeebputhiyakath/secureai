'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const rows = [
  { feature: 'Architecture', traditional: 'Fragmented Systems', secure: 'Unified Single Platform' },
  { feature: 'Analytics', traditional: 'Post-Event Search Only', secure: 'Real-Time Edge & Cloud AI' },
  { feature: 'Scalability', traditional: 'Limited by Hardware', secure: 'Infinite Cloud Scalability' },
  { feature: 'Updates', traditional: 'Manual Patching', secure: 'Automatic OTA Updates' },
  { feature: 'Total Cost', traditional: 'High CapEx & Maintenance', secure: 'Predictable SaaS Model' },
  { feature: 'Security', traditional: 'Vulnerable Networks', secure: 'End-to-End Encryption' },
];

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Comparison() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('cp-vis'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.cp-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .cp-rev { opacity: 0; transform: translateY(26px); transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1), transform 0.72s cubic-bezier(0.22,1,0.36,1); }
        .cp-rev.cp-vis { opacity: 1; transform: none; }
        .cp-d0 { transition-delay: 0.00s; }
        .cp-d1 { transition-delay: 0.08s; }
        .cp-d2 { transition-delay: 0.16s; }

        .cp-row { transition: background 0.15s ease; }
        .cp-row:hover { background: rgba(248, 250, 252, 0.8); }
      `}</style>

      <section ref={ref} className="relative overflow-hidden bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="border-b border-slate-200 pb-10 mb-10">
            <div className="cp-rev cp-d0 mb-5">
              <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[0.68rem] font-bold tracking-[0.1em] uppercase"
                style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}>
                Platform Comparison
              </span>
            </div>
            <h2 className="cp-rev cp-d1 text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.08] text-slate-900">
              The New Standard in{' '}
              <span style={{ color: '#0161FE' }}>Security</span>
            </h2>
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[22px] overflow-hidden border border-slate-200 bg-white"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 px-6 py-4">
              <div className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-slate-400 flex items-center">Feature</div>
              <div className="text-center text-[13.5px] font-semibold text-slate-500">Legacy Systems</div>
              <div className="text-center text-[13.5px] font-bold flex flex-col items-center gap-1" style={{ color: '#0161FE' }}>
                SecureAI
                <div className="w-10 h-0.5 rounded-full" style={{ background: '#0161FE' }} />
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-100">
              {rows.map((row, i) => (
                <div key={i} className="cp-row grid grid-cols-3 items-center px-6 py-4">
                  <span className="text-[13.5px] font-bold text-slate-800">{row.feature}</span>
                  <div className="flex items-center justify-center gap-2 text-center">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-slate-100 text-slate-400 text-[10px]">✕</div>
                    <span className="text-[12.5px] font-medium text-slate-500 hidden sm:block">{row.traditional}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-center">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(1,97,254,0.12)', color: '#0161FE' }}>
                      <CheckIcon />
                    </div>
                    <span className="text-[12.5px] font-bold hidden sm:block" style={{ color: '#1e3a5f' }}>{row.secure}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
