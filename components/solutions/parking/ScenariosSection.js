'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const chips = [
  { label: 'Automatic Vehicle Entry' },
  { label: 'Zero Paper Tickets' },
  { label: 'Instant Digital Payment' },
  { label: 'Automated Barrier Exit' },
];

export default function ParkingScenariosSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('psc-vis'); }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.psc-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .psc-rev { opacity:0; transform:translateY(24px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .psc-rev.psc-vis { opacity:1; transform:none; }
        .psc-d0{transition-delay:0s} .psc-d1{transition-delay:.1s} .psc-d2{transition-delay:.2s}
        .psc-chip {
          display:inline-flex; align-items:center; gap:7px;
          background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.18);
          backdrop-filter: blur(6px); color:#fff;
          font-size:.78rem; font-weight:600; padding:9px 16px; border-radius:9999px;
        }
      `}</style>

      <section ref={ref} id="scenarios" className="relative overflow-hidden">
        <div className="relative min-h-[460px] lg:min-h-[520px] flex items-center bg-cover"
          style={{ backgroundImage: "url('/products/overview/parksi.png')", backgroundPosition: 'center 40%' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(3,10,25,.94) 0%, rgba(3,10,25,.78) 42%, rgba(3,10,25,.32) 75%, rgba(3,10,25,.12) 100%)' }} />

          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-xl py-20 lg:py-24">
              <div className="psc-rev psc-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(1,97,254,.16)',border:'1px solid rgba(1,97,254,.4)',
                  color:'#7fb3ff',fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Ticketless Parking Experience
              </div>
              <h2 className="psc-rev psc-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-5 leading-tight">
                Drivers Never Touch <span style={{ color: '#5b9fff' }}>a Paper Ticket Again</span>
              </h2>
              <p className="psc-rev psc-d1 text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                Using SecureAAi ANPR technology, vehicles are automatically identified on entry and exit. SmartPay captures entry time, calculates duration and charges, processes digital payment, and opens the barrier — entirely automatically.
              </p>

              <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:.7,delay:.3,ease:[.22,1,.36,1]}} className="flex flex-wrap gap-3">
                {chips.map((c,i)=>(
                  <span key={i} className="psc-chip">
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
