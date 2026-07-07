'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const anchors = [
  { label: 'Why Smart Parking?', href: '#why' },
  { label: 'Application Scenarios', href: '#scenarios' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Ecosystem', href: '#ecosystem' },
];

export default function ParkingHeroSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('ph-vis'); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.ph-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ph-rev { opacity:0; transform:translateY(28px);
          transition:opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1); }
        .ph-rev.ph-vis { opacity:1; transform:none; }
        .ph-d0{transition-delay:0s} .ph-d1{transition-delay:.1s}
        .ph-d2{transition-delay:.2s} .ph-d3{transition-delay:.3s}
        .ph-d4{transition-delay:.4s}
        @keyframes phScan { 0%{top:0%} 100%{top:100%} }
        .ph-scan { position:absolute;left:0;right:0;height:1px;
          background:linear-gradient(90deg,transparent,rgba(52,211,153,.55) 50%,transparent);
          animation:phScan 3.5s linear infinite; pointer-events:none; }
        @keyframes phPulse { 0%,100%{opacity:1} 50%{opacity:.2} }
        .ph-pulse { animation:phPulse 1.5s ease-in-out infinite; }
        .ph-anchor { display:inline-flex;align-items:center;gap:7px;padding:9px 18px;
          border-radius:9999px; background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.12);color:#a7f3d0;
          font-size:.75rem;font-weight:600;text-decoration:none;white-space:nowrap;
          transition:background .2s,border-color .2s,color .2s,transform .2s; }
        .ph-anchor:hover { background:rgba(52,211,153,.22);border-color:rgba(52,211,153,.45);
          color:#fff;transform:translateY(-2px); }
        .ph-btn-p { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#064e3b;background:#fff;border:1.5px solid #fff;border-radius:9999px;
          padding:14px 32px;transition:background .22s,transform .22s,box-shadow .22s;
          cursor:pointer;text-decoration:none; }
        .ph-btn-p:hover { background:rgba(255,255,255,.88);transform:translateY(-2px);
          box-shadow:0 10px 32px rgba(0,0,0,.18); }
        .ph-btn-s { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#fff;background:rgba(255,255,255,.1);
          border:1.5px solid rgba(255,255,255,.25);border-radius:9999px;padding:14px 32px;
          transition:background .22s,transform .22s;cursor:pointer;text-decoration:none; }
        .ph-btn-s:hover { background:rgba(255,255,255,.18);transform:translateY(-2px); }
      `}</style>

      <section ref={ref} className="relative overflow-hidden flex items-center min-h-screen"
        style={{ background:'linear-gradient(150deg,#0f172a 0%,#064e3b 45%,#047857 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,rgba(52,211,153,.07) 1px,transparent 1px)',
            backgroundSize:'28px 28px' }} />
        <div className="ph-scan" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 60% 35%,rgba(52,211,153,.15),transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 40% 65%,rgba(16,185,129,.12),transparent 65%)' }} />

        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-3 gap-6 pointer-events-none">
          {[1,2,3,4,5,6].map(i => (
             <div key={i} className="w-24 h-40 border-2 border-white/20 rounded-md flex flex-col justify-end p-2 relative">
               <div className={`w-full h-2 rounded-full ${i%2 === 0 ? 'bg-emerald-400' : 'bg-rose-400'} opacity-60`} />
             </div>
          ))}
        </div>

        <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-36 lg:py-44">
          <div className="max-w-3xl">
            <div className="ph-rev ph-d0 mb-7">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(52,211,153,.14)',border:'1px solid rgba(52,211,153,.32)',
                  color:'#a7f3d0',fontSize:'.68rem',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase' }}>
                <span className="ph-pulse w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Intelligent Parking Ecosystem
              </span>
            </div>

            <h1 className="ph-rev ph-d1 font-extrabold tracking-tight text-white mb-4"
              style={{ fontSize:'clamp(2.8rem,5vw,4.5rem)',lineHeight:1.05 }}>
              Smart Parking <span className="text-emerald-400">Solution</span>
            </h1>
            <p className="ph-rev ph-d2 mb-3"
              style={{ fontSize:'clamp(1.1rem,2vw,1.4rem)',fontWeight:700,color:'#a7f3d0',lineHeight:1.3 }}>
              AI-Powered Management & Guidance for Smarter Mobility
            </p>
            <p className="ph-rev ph-d3 text-slate-300 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl">
              Transform traditional parking facilities into intelligent ecosystems through AI-powered ANPR, occupancy detection, parking guidance, enforcement, and centralized management.
            </p>

            <div className="ph-rev ph-d4 flex flex-wrap gap-4 mb-14">
              <a href="#capabilities" className="ph-btn-p">
                EXPLORE FEATURES
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="#scenarios" className="ph-btn-s">VIEW SCENARIOS</a>
            </div>

            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{duration:.75,delay:.5,ease:[.22,1,.36,1]}} className="flex flex-wrap gap-2">
              {anchors.map((a,i)=>(
                <a key={i} href={a.href} className="ph-anchor">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                  {a.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background:'linear-gradient(to bottom,transparent,rgba(15,23,42,.65))' }} />
      </section>
    </>
  );
}
