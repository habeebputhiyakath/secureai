'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const anchors = [
  { label: 'Why ANPR?', href: '#why' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Scenarios', href: '#scenarios' },
];

export default function SiproHeroSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('sph-vis'); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.sph-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .sph-rev { opacity:0; transform:translateY(28px);
          transition:opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1); }
        .sph-rev.sph-vis { opacity:1; transform:none; }
        .sph-d0{transition-delay:0s} .sph-d1{transition-delay:.1s}
        .sph-d2{transition-delay:.2s} .sph-d3{transition-delay:.3s}
        .sph-d4{transition-delay:.4s}
        @keyframes sphScan { 0%{top:0%} 100%{top:100%} }
        .sph-scan { position:absolute;left:0;right:0;height:1px;
          background:linear-gradient(90deg,transparent,rgba(56,189,248,.55) 50%,transparent);
          animation:sphScan 3.5s linear infinite; pointer-events:none; }
        @keyframes sphPulse { 0%,100%{opacity:1} 50%{opacity:.2} }
        .sph-pulse { animation:sphPulse 1.5s ease-in-out infinite; }
        .sph-anchor { display:inline-flex;align-items:center;gap:7px;padding:9px 18px;
          border-radius:9999px; background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.12);color:#bae6fd;
          font-size:.75rem;font-weight:600;text-decoration:none;white-space:nowrap;
          transition:background .2s,border-color .2s,color .2s,transform .2s; }
        .sph-anchor:hover { background:rgba(56,189,248,.22);border-color:rgba(56,189,248,.45);
          color:#fff;transform:translateY(-2px); }
        .sph-btn-p { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#0c4a6e;background:#fff;border:1.5px solid #fff;border-radius:9999px;
          padding:14px 32px;transition:background .22s,transform .22s,box-shadow .22s;
          cursor:pointer;text-decoration:none; }
        .sph-btn-p:hover { background:rgba(255,255,255,.88);transform:translateY(-2px);
          box-shadow:0 10px 32px rgba(0,0,0,.18); }
        .sph-btn-s { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#fff;background:rgba(255,255,255,.1);
          border:1.5px solid rgba(255,255,255,.25);border-radius:9999px;padding:14px 32px;
          transition:background .22s,transform .22s;cursor:pointer;text-decoration:none; }
        .sph-btn-s:hover { background:rgba(255,255,255,.18);transform:translateY(-2px); }
        
        .license-plate {
          font-family: monospace; letter-spacing: 2px;
          background: #fff; color: #000; border: 2px solid #333;
          padding: 8px 16px; border-radius: 8px; font-weight: bold;
          font-size: 1.2rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          display: inline-block; position: relative;
        }
        .license-plate::before {
          content: ''; position: absolute; top: 4px; left: 4px; width: 4px; height: 4px; border-radius: 50%; background: #ccc;
        }
        .license-plate::after {
          content: ''; position: absolute; top: 4px; right: 4px; width: 4px; height: 4px; border-radius: 50%; background: #ccc;
        }
      `}</style>

      <section ref={ref} className="relative overflow-hidden flex items-center min-h-screen"
        style={{ background:'linear-gradient(150deg,#0f172a 0%,#082f49 45%,#0369a1 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,rgba(56,189,248,.07) 1px,transparent 1px)',
            backgroundSize:'28px 28px' }} />
        <div className="sph-scan" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 60% 35%,rgba(56,189,248,.15),transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 40% 65%,rgba(14,165,233,.12),transparent 65%)' }} />

        {/* Decorative elements */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-10 pointer-events-none">
          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="license-plate transform rotate-12 opacity-80">
            DXB 12345
          </motion.div>
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="license-plate transform -rotate-6 opacity-60">
            AUH 9876
          </motion.div>
          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.9 }} className="license-plate transform rotate-6 opacity-40 scale-90">
            SHJ 456
          </motion.div>
        </div>

        <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-36 lg:py-44">
          <div className="max-w-3xl">
            <div className="sph-rev sph-d0 mb-7">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(56,189,248,.14)',border:'1px solid rgba(56,189,248,.32)',
                  color:'#bae6fd',fontSize:'.68rem',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase' }}>
                <span className="sph-pulse w-1.5 h-1.5 rounded-full bg-sky-400" />
                Enterprise ANPR Solutions
              </span>
            </div>

            <h1 className="sph-rev sph-d1 font-extrabold tracking-tight text-white mb-4"
              style={{ fontSize:'clamp(2.8rem,5.5vw,4.5rem)',lineHeight:1.05 }}>
              SecureAAi <span className="text-sky-400">Si Pro ANPR™</span>
            </h1>
            <p className="sph-rev sph-d2 mb-3"
              style={{ fontSize:'clamp(1.1rem,2vw,1.4rem)',fontWeight:700,color:'#bae6fd',lineHeight:1.3 }}>
              AI-Powered Vehicle Intelligence for Smarter Roads and Safer Operations
            </p>
            <p className="sph-rev sph-d3 text-slate-300 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl">
              An intelligent solution designed to provide accurate vehicle identification, real-time monitoring, and actionable traffic intelligence. Combining advanced AI algorithms, high-performance hardware, and powerful analytics.
            </p>

            <div className="sph-rev sph-d4 flex flex-wrap gap-4 mb-14">
              <a href="#capabilities" className="sph-btn-p">
                EXPLORE CAPABILITIES
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="#scenarios" className="sph-btn-s">VIEW SCENARIOS</a>
            </div>

            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{duration:.75,delay:.5,ease:[.22,1,.36,1]}} className="flex flex-wrap gap-2">
              {anchors.map((a,i)=>(
                <a key={i} href={a.href} className="sph-anchor">
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
