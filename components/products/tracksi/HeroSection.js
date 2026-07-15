'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const anchors = [
  { label: 'Hardware', href: '#hardware' },
  { label: 'Software', href: '#software' },
  { label: 'Features', href: '#features' },
];

export default function TracksiHeroSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('trh-vis'); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.trh-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .trh-rev { opacity:0; transform:translateY(28px);
          transition:opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1); }
        .trh-rev.trh-vis { opacity:1; transform:none; }
        .trh-d0{transition-delay:0s} .trh-d1{transition-delay:.1s}
        .trh-d2{transition-delay:.2s} .trh-d3{transition-delay:.3s}
        .trh-d4{transition-delay:.4s}
        @keyframes trhScan { 0%{top:0%} 100%{top:100%} }
        .trh-scan { position:absolute;left:0;right:0;height:1px;
          background:linear-gradient(90deg,transparent,rgba(1,97,254,.55) 50%,transparent);
          animation:trhScan 3.5s linear infinite; pointer-events:none; }
        @keyframes trhPulse { 0%,100%{opacity:1} 50%{opacity:.2} }
        .trh-pulse { animation:trhPulse 1.5s ease-in-out infinite; }
        .trh-anchor { display:inline-flex;align-items:center;gap:7px;padding:10px 20px;
          border-radius:9999px; background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.12);color:white;
          font-size:.75rem;font-weight:600;text-decoration:none;white-space:nowrap;
          transition:background .2s,border-color .2s,color .2s,transform .2s; }
        .trh-anchor:hover { background:rgba(1,97,254,.22);border-color:rgba(1,97,254,.45);
          color:#fff;transform:translateY(-2px); }
        .trh-btn-p { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#0161FE;background:#fff;border:1.5px solid #fff;border-radius:9999px;
          padding:14px 32px;transition:background .22s,transform .22s,box-shadow .22s;
          cursor:pointer;text-decoration:none; }
        .trh-btn-p:hover { background:rgba(255,255,255,.88);transform:translateY(-2px);
          box-shadow:0 10px 32px rgba(0,0,0,.18); }
        .trh-btn-s { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#fff;background:rgba(255,255,255,.1);
          border:1.5px solid rgba(255,255,255,.25);border-radius:9999px;padding:14px 32px;
          transition:background .22s,transform .22s;cursor:pointer;text-decoration:none; }
        .trh-btn-s:hover { background:rgba(255,255,255,.18);transform:translateY(-2px); }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden pt-10  min-h-[80vh] flex items-center border-b border-slate-800 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/products/tracksi/hero.png')",
        }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,rgba(255,255,255,.06) 1px,transparent 1px)',
            backgroundSize:'28px 28px' }} />
        <div className="trh-scan" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 60% 35%,rgba(1,97,254,.22),transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 40% 65%,rgba(14,165,233,.12),transparent 65%)' }} />

        {/* Decorative map elements */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 opacity-[0.08] pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>

        <div className="relative w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="trh-rev trh-d0 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(1,97,254,.14)',border:'1px solid rgba(1,97,254,.32)',
                  color:'#93c5fd',fontSize:'.68rem',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase' }}>
                <span className="trh-pulse w-1.5 h-1.5 rounded-full bg-blue-400" />
                TrackSi™ GPS Ecosystem
              </span>
            </div>

            <h1 className="trh-rev trh-d1 font-extrabold tracking-tight text-white mb-5"
              style={{ fontSize:'clamp(2.8rem,5.5vw,4.5rem)',lineHeight:1.05 }}>
              TrackSi™
            </h1>
            <p className="trh-rev trh-d2 mb-5"
              style={{ fontSize:'clamp(1.1rem,2vw,1.4rem)',fontWeight:700,color:'#93c5fd',lineHeight:1.3 }}>
              Advanced Fleet Management & GPS Tracking
            </p>
            <p className="trh-rev trh-d3 text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              TrackSi™ combines high-precision 4G LTE tracking hardware with a powerful, centralized software platform. Monitor assets in real-time, review historical routes, and receive critical alerts instantly.
            </p>

            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{duration:.75,delay:.5,ease:[.22,1,.36,1]}} className="flex flex-wrap gap-3 mt-2">
              {anchors.map((a,i)=>(
                <a key={i} href={a.href} className="trh-anchor">
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
          style={{ background:'linear-gradient(to bottom,transparent,rgba(2,11,26,.65))' }} />
      </section>
    </>
  );
}