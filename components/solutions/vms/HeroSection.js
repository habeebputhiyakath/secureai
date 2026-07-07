'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const anchors = [
  { label: 'Why VMS?', href: '#why' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Integration & Scenarios', href: '#scenarios' },
];

export default function VmsHeroSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vh-vis'); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.vh-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .vh-rev { opacity:0; transform:translateY(28px);
          transition:opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1); }
        .vh-rev.vh-vis { opacity:1; transform:none; }
        .vh-d0{transition-delay:0s} .vh-d1{transition-delay:.1s}
        .vh-d2{transition-delay:.2s} .vh-d3{transition-delay:.3s}
        .vh-d4{transition-delay:.4s}
        @keyframes vhScan { 0%{top:0%} 100%{top:100%} }
        .vh-scan { position:absolute;left:0;right:0;height:1px;
          background:linear-gradient(90deg,transparent,rgba(167,139,250,.55) 50%,transparent);
          animation:vhScan 3.5s linear infinite; pointer-events:none; }
        @keyframes vhPulse { 0%,100%{opacity:1} 50%{opacity:.2} }
        .vh-pulse { animation:vhPulse 1.5s ease-in-out infinite; }
        .vh-anchor { display:inline-flex;align-items:center;gap:7px;padding:9px 18px;
          border-radius:9999px; background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.12);color:#ddd6fe;
          font-size:.75rem;font-weight:600;text-decoration:none;white-space:nowrap;
          transition:background .2s,border-color .2s,color .2s,transform .2s; }
        .vh-anchor:hover { background:rgba(167,139,250,.22);border-color:rgba(167,139,250,.45);
          color:#fff;transform:translateY(-2px); }
        .vh-btn-p { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#2e1065;background:#fff;border:1.5px solid #fff;border-radius:9999px;
          padding:14px 32px;transition:background .22s,transform .22s,box-shadow .22s;
          cursor:pointer;text-decoration:none; }
        .vh-btn-p:hover { background:rgba(255,255,255,.88);transform:translateY(-2px);
          box-shadow:0 10px 32px rgba(0,0,0,.18); }
        .vh-btn-s { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#fff;background:rgba(255,255,255,.1);
          border:1.5px solid rgba(255,255,255,.25);border-radius:9999px;padding:14px 32px;
          transition:background .22s,transform .22s;cursor:pointer;text-decoration:none; }
        .vh-btn-s:hover { background:rgba(255,255,255,.18);transform:translateY(-2px); }
      `}</style>

      <section ref={ref} className="relative overflow-hidden flex items-center min-h-screen"
        style={{ background:'linear-gradient(150deg,#0f172a 0%,#2e1065 45%,#4c1d95 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,rgba(167,139,250,.07) 1px,transparent 1px)',
            backgroundSize:'28px 28px' }} />
        <div className="vh-scan" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 60% 35%,rgba(167,139,250,.15),transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 40% 65%,rgba(139,92,246,.12),transparent 65%)' }} />

        {/* Decorative elements - Camera/Grid abstract */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-2 gap-4 opacity-[0.06] pointer-events-none">
          {[1,2,3,4].map(i => (
             <div key={i} className="w-48 h-32 border-2 border-white rounded-lg flex items-center justify-center">
               <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                 <div className="w-4 h-4 rounded-full bg-white animate-pulse" style={{animationDelay:`${i*0.2}s`}} />
               </div>
             </div>
          ))}
        </div>

        <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-36 lg:py-44">
          <div className="max-w-3xl">
            <div className="vh-rev vh-d0 mb-7">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(167,139,250,.14)',border:'1px solid rgba(167,139,250,.32)',
                  color:'#ddd6fe',fontSize:'.68rem',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase' }}>
                <span className="vh-pulse w-1.5 h-1.5 rounded-full bg-purple-400" />
                Intelligent Security Operations
              </span>
            </div>

            <h1 className="vh-rev vh-d1 font-extrabold tracking-tight text-white mb-4"
              style={{ fontSize:'clamp(2.8rem,5vw,4.5rem)',lineHeight:1.05 }}>
              Video Management <span className="text-purple-400">System</span>
            </h1>
            <p className="vh-rev vh-d2 mb-3"
              style={{ fontSize:'clamp(1.1rem,2vw,1.4rem)',fontWeight:700,color:'#ddd6fe',lineHeight:1.3 }}>
              Centralized Video Management for Enterprise Control
            </p>
            <p className="vh-rev vh-d3 text-slate-300 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl">
              A powerful and scalable platform designed to centralize video surveillance, simplify operations, and deliver real-time situational awareness. Manage cameras, events, recordings, and advanced analytics through a single unified interface.
            </p>

            <div className="vh-rev vh-d4 flex flex-wrap gap-4 mb-14">
              <a href="#capabilities" className="vh-btn-p">
                DISCOVER PLATFORM
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="#scenarios" className="vh-btn-s">VIEW USE CASES</a>
            </div>

            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{duration:.75,delay:.5,ease:[.22,1,.36,1]}} className="flex flex-wrap gap-2">
              {anchors.map((a,i)=>(
                <a key={i} href={a.href} className="vh-anchor">
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
