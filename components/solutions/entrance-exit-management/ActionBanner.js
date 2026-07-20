'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const chips = [
  { label: 'Live Classification' },
  { label: 'Instant Authorization' },
  { label: 'Multi-Lane Capture' },
  { label: 'Automatic Barrier Trigger' },
];

export default function EemActionBanner() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('eeab-vis'); }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.eeab-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .eeab-rev { opacity:0; transform:translateY(24px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .eeab-rev.eeab-vis { opacity:1; transform:none; }
        .eeab-d0{transition-delay:0s} .eeab-d1{transition-delay:.1s} .eeab-d2{transition-delay:.2s}
        .eeab-chip {
          display:inline-flex; align-items:center; gap:7px;
          background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.18);
          backdrop-filter: blur(6px); color:#fff;
          font-size:.78rem; font-weight:600; padding:9px 16px; border-radius:9999px;
        }
      `}</style>

      <section ref={ref} className="relative overflow-hidden">
        <div className="relative min-h-[460px] lg:min-h-[520px] flex items-center bg-cover"
          style={{ backgroundImage: "url('/products/sipro/sipro.png')", backgroundPosition: 'center 35%' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(3,10,25,.92) 0%, rgba(3,10,25,.74) 42%, rgba(3,10,25,.28) 75%, rgba(3,10,25,.1) 100%)' }} />

          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-xl py-20 lg:py-24">
              <div className="eeab-rev eeab-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(1,97,254,.16)',border:'1px solid rgba(1,97,254,.4)',
                  color:'#7fb3ff',fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                See It In Action
              </div>
              <h2 className="eeab-rev eeab-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-5 leading-tight">
                Every Vehicle, <span style={{ color: '#5b9fff' }}>Classified the Moment It Arrives</span>
              </h2>
              <p className="eeab-rev eeab-d1 text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                Live at the gate: each vehicle is captured, classified, and cross-checked against authorization records in real time — with the barrier responding automatically, no operator required.
              </p>

              <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:.7,delay:.3,ease:[.22,1,.36,1]}} className="flex flex-wrap gap-3">
                {chips.map((c,i)=>(
                  <span key={i} className="eeab-chip">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {c.label}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
