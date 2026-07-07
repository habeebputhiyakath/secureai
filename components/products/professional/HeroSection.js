'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const anchors = [
  { label: 'Consult & Design', href: '#design' },
  { label: 'Integrate & Deploy', href: '#deploy' },
  { label: 'Train & Optimize', href: '#optimize' },
  { label: 'Lifecycle', href: '#lifecycle' },
];

export default function ProfessionalHeroSection() {
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
          background:linear-gradient(90deg,transparent,rgba(245,158,11,.55) 50%,transparent);
          animation:phScan 3.5s linear infinite; pointer-events:none; }
        @keyframes phPulse { 0%,100%{opacity:1} 50%{opacity:.2} }
        .ph-pulse { animation:phPulse 1.5s ease-in-out infinite; }
        .ph-anchor { display:inline-flex;align-items:center;gap:7px;padding:9px 18px;
          border-radius:9999px; background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.12);color:#fde68a;
          font-size:.75rem;font-weight:600;text-decoration:none;white-space:nowrap;
          transition:background .2s,border-color .2s,color .2s,transform .2s; }
        .ph-anchor:hover { background:rgba(245,158,11,.22);border-color:rgba(245,158,11,.45);
          color:#fff;transform:translateY(-2px); }
        .ph-btn-p { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#78350f;background:#fff;border:1.5px solid #fff;border-radius:9999px;
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
        style={{ background:'linear-gradient(150deg,#1e1b18 0%,#451a03 45%,#78350f 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,rgba(245,158,11,.07) 1px,transparent 1px)',
            backgroundSize:'28px 28px' }} />
        <div className="ph-scan" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 60% 35%,rgba(245,158,11,.15),transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 40% 65%,rgba(251,146,60,.12),transparent 65%)' }} />

        {/* Decorative elements */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 opacity-[0.08] pointer-events-none">
          {[1,2,3].map(i => (
            <div key={i} className="w-64 h-24 border border-white rounded-xl transform rotate-12" />
          ))}
        </div>

        <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-36 lg:py-44">
          <div className="max-w-3xl">
            <div className="ph-rev ph-d0 mb-7">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(245,158,11,.14)',border:'1px solid rgba(245,158,11,.32)',
                  color:'#fde68a',fontSize:'.68rem',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase' }}>
                <span className="ph-pulse w-1.5 h-1.5 rounded-full bg-amber-400" />
                SecureAAI Services
              </span>
            </div>

            <h1 className="ph-rev ph-d1 font-extrabold tracking-tight text-white mb-4"
              style={{ fontSize:'clamp(2.8rem,5.5vw,4.5rem)',lineHeight:1.05 }}>
              Professional Services
            </h1>
            <p className="ph-rev ph-d2 mb-3"
              style={{ fontSize:'clamp(1.1rem,2vw,1.4rem)',fontWeight:700,color:'#fde68a',lineHeight:1.3 }}>
              Expert Consulting, Design, Integration and Deployment Services
            </p>
            <p className="ph-rev ph-d3 text-slate-300 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl">
              Modern security projects require more than products. Successful deployments depend on planning, expertise, integration, and ongoing optimization. We help organizations design, deploy, and manage intelligent ecosystems that deliver long-term value.
            </p>

            <div className="ph-rev ph-d4 flex flex-wrap gap-4 mb-14">
              <a href="#design" className="ph-btn-p">
                EXPLORE SERVICES
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="#" className="ph-btn-s">TALK TO AN EXPERT</a>
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
          style={{ background:'linear-gradient(to bottom,transparent,rgba(15,8,3,.65))' }} />
      </section>
    </>
  );
}
