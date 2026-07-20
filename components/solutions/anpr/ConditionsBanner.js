'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const chips = [
  { label: 'Heavy Rain', ok: true },
  { label: 'Low Light', ok: true },
  { label: 'High Speed', ok: true },
  { label: 'Glare & Fog', ok: true },
];

export default function SiproConditionsBanner() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('scb-vis'); }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.scb-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .scb-rev { opacity:0; transform:translateY(24px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .scb-rev.scb-vis { opacity:1; transform:none; }
        .scb-d0{transition-delay:0s} .scb-d1{transition-delay:.1s} .scb-d2{transition-delay:.2s}
        .scb-chip {
          display:inline-flex; align-items:center; gap:7px;
          background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.18);
          backdrop-filter: blur(6px); color:#fff;
          font-size:.78rem; font-weight:600; padding:9px 16px; border-radius:9999px;
        }
      `}</style>

      <section ref={ref} className="relative overflow-hidden">
        <div className="relative min-h-[460px] lg:min-h-[520px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/products/sipro/anpr.png')" }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(3,10,25,.92) 0%, rgba(3,10,25,.72) 42%, rgba(3,10,25,.25) 75%, rgba(3,10,25,.1) 100%)' }} />

          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-xl py-20 lg:py-24">
              <div className="scb-rev scb-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(1,97,254,.16)',border:'1px solid rgba(1,97,254,.4)',
                  color:'#7fb3ff',fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Built for Real Conditions
              </div>
              <h2 className="scb-rev scb-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-5 leading-tight">
                Reliable Recognition, <span style={{ color: '#5b9fff' }}>Rain or Shine, Day or Night</span>
              </h2>
              <p className="scb-rev scb-d1 text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                Si Pro ANPR maintains 98.7% recognition accuracy even in heavy rain, low light, and high-speed traffic — no dedicated lighting or weather-controlled enclosures required.
              </p>

              <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:.7,delay:.3,ease:[.22,1,.36,1]}} className="flex flex-wrap gap-3">
                {chips.map((c,i)=>(
                  <span key={i} className="scb-chip">
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
