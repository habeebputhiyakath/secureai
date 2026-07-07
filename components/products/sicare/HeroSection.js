'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const anchors = [
  { label: 'Why Support Matters', href: '#why' },
  { label: 'Technical Support',   href: '#tech' },
  { label: 'Maintenance',         href: '#maintenance' },
  { label: 'Lifecycle',           href: '#lifecycle' },
  { label: 'Why SiCare™',         href: '#why-choose' },
];

export default function SicareHeroSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('sch-vis'); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.sch-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .sch-rev { opacity:0; transform:translateY(28px);
          transition:opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1); }
        .sch-rev.sch-vis { opacity:1; transform:none; }
        .sch-d0{transition-delay:0s} .sch-d1{transition-delay:.1s}
        .sch-d2{transition-delay:.2s} .sch-d3{transition-delay:.3s}
        .sch-d4{transition-delay:.4s}
        @keyframes schScan { 0%{top:0%} 100%{top:100%} }
        .sch-scan { position:absolute;left:0;right:0;height:1px;
          background:linear-gradient(90deg,transparent,rgba(99,102,241,.55) 50%,transparent);
          animation:schScan 3.5s linear infinite; pointer-events:none; }
        @keyframes schPulse { 0%,100%{opacity:1} 50%{opacity:.2} }
        .sch-pulse { animation:schPulse 1.5s ease-in-out infinite; }
        .sch-anchor { display:inline-flex;align-items:center;gap:7px;padding:9px 18px;
          border-radius:9999px; background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.12);color:#c7d2fe;
          font-size:.75rem;font-weight:600;text-decoration:none;white-space:nowrap;
          transition:background .2s,border-color .2s,color .2s,transform .2s; }
        .sch-anchor:hover { background:rgba(99,102,241,.22);border-color:rgba(99,102,241,.45);
          color:#fff;transform:translateY(-2px); }
        .sch-btn-p { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#312e81;background:#fff;border:1.5px solid #fff;border-radius:9999px;
          padding:14px 32px;transition:background .22s,transform .22s,box-shadow .22s;
          cursor:pointer;text-decoration:none; }
        .sch-btn-p:hover { background:rgba(255,255,255,.88);transform:translateY(-2px);
          box-shadow:0 10px 32px rgba(0,0,0,.18); }
        .sch-btn-s { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#fff;background:rgba(255,255,255,.1);
          border:1.5px solid rgba(255,255,255,.25);border-radius:9999px;padding:14px 32px;
          transition:background .22s,transform .22s;cursor:pointer;text-decoration:none; }
        .sch-btn-s:hover { background:rgba(255,255,255,.18);transform:translateY(-2px); }
      `}</style>

      <section ref={ref} className="relative overflow-hidden flex items-center min-h-screen"
        style={{ background:'linear-gradient(150deg,#0f0c29 0%,#1a1560 45%,#24217a 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,rgba(99,102,241,.07) 1px,transparent 1px)',
            backgroundSize:'28px 28px' }} />
        <div className="sch-scan" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 60% 35%,rgba(99,102,241,.2),transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 40% 65%,rgba(139,92,246,.12),transparent 65%)' }} />

        {/* Decorative rings — top right */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center opacity-[0.05] pointer-events-none">
          {[420,300,180,90].map((s,i)=>(
            <div key={i} className="absolute rounded-full border border-white" style={{ width:s,height:s }} />
          ))}
        </div>

        <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-36 lg:py-44">
          <div className="max-w-3xl">
            <div className="sch-rev sch-d0 mb-7">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(99,102,241,.14)',border:'1px solid rgba(99,102,241,.32)',
                  color:'#a5b4fc',fontSize:'.68rem',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase' }}>
                <span className="sch-pulse w-1.5 h-1.5 rounded-full bg-indigo-400" />
                SecureAAI Services — SiCare™
              </span>
            </div>

            <h1 className="sch-rev sch-d1 font-extrabold tracking-tight text-white mb-4"
              style={{ fontSize:'clamp(2.8rem,5.5vw,4.5rem)',lineHeight:1.05 }}>
              SiCare™
            </h1>
            <p className="sch-rev sch-d2 mb-3"
              style={{ fontSize:'clamp(1.1rem,2vw,1.4rem)',fontWeight:700,color:'#a5b4fc',lineHeight:1.3 }}>
              Comprehensive Support and Lifecycle Services
            </p>
            <p className="sch-rev sch-d3 text-slate-300 text-base sm:text-lg leading-relaxed mb-4 max-w-2xl">
              Protecting Your Security Investment Through Proactive Support and Expert Care
            </p>
            <p className="sch-rev sch-d3 text-slate-400 text-sm leading-relaxed mb-12 max-w-2xl">
              Implementing intelligent security technologies is only the beginning. SiCare™ ensures long-term performance, reliability, cybersecurity, and scalability through continuous monitoring, expert support, and proactive maintenance.
            </p>

            <div className="sch-rev sch-d4 flex flex-wrap gap-4 mb-14">
              <a href="#why" className="sch-btn-p">
                EXPLORE SICARE™
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="#" className="sch-btn-s">GET A QUOTE</a>
            </div>

            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{duration:.75,delay:.5,ease:[.22,1,.36,1]}} className="flex flex-wrap gap-2">
              {anchors.map((a,i)=>(
                <a key={i} href={a.href} className="sch-anchor">
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
          style={{ background:'linear-gradient(to bottom,transparent,rgba(15,12,41,.65))' }} />
      </section>
    </>
  );
}
