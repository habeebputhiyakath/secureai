'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const anchors = [
  { label: 'Why It Matters', href: '#why' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Ecosystem', href: '#ecosystem' },
];

export default function PlmHeroSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('plh-vis'); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.plh-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .plh-rev { opacity:0; transform:translateY(28px);
          transition:opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1); }
        .plh-rev.plh-vis { opacity:1; transform:none; }
        .plh-d0{transition-delay:0s} .plh-d1{transition-delay:.1s}
        .plh-d2{transition-delay:.2s} .plh-d3{transition-delay:.3s}
        .plh-d4{transition-delay:.4s}
        .plh-dotgrid::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 28px 28px; opacity: 0.4;
        }
        @keyframes plhPulse { 0%,100%{opacity:1} 50%{opacity:.25} }
        .plh-pulse { animation:plhPulse 1.5s ease-in-out infinite; }
        .plh-anchor { display:inline-flex;align-items:center;gap:7px;padding:9px 18px;
          border-radius:9999px; background:#fff;
          border:1px solid #e2e8f0;color:#475569;
          font-size:.75rem;font-weight:600;text-decoration:none;white-space:nowrap;
          transition:background .2s,border-color .2s,color .2s,transform .2s;
          box-shadow: 0 1px 2px rgba(15,23,42,.04); }
        .plh-anchor:hover { background:#eaf1ff;border-color:#0161FE;
          color:#0161FE;transform:translateY(-2px); }
        .plh-btn-p { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#fff;background:#0161FE;border:1.5px solid #0161FE;border-radius:9999px;
          padding:14px 32px;transition:background .22s,transform .22s,box-shadow .22s;
          cursor:pointer;text-decoration:none; }
        .plh-btn-p:hover { background:#0052d6;transform:translateY(-2px);
          box-shadow:0 10px 24px -8px rgba(1,97,254,.5); }
        .plh-btn-s { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#374151;background:#fff;
          border:1.5px solid #e2e8f0;border-radius:9999px;padding:14px 32px;
          transition:background .22s,border-color .22s,color .22s,transform .22s;cursor:pointer;text-decoration:none; }
        .plh-btn-s:hover { border-color:#0161FE;color:#0161FE;transform:translateY(-2px); }

        .plh-frame {
          position: relative; border-radius: 28px; overflow: hidden;
          box-shadow: 0 30px 70px -20px rgba(1,97,254,.35), 0 8px 24px rgba(15,23,42,.08);
          border: 1px solid rgba(1,97,254,.12);
        }
        .plh-frame img { display:block; width:100%; height:100%; object-fit:cover; }
        .plh-live-badge {
          position:absolute; top:16px; left:16px; display:inline-flex; align-items:center; gap:6px;
          background:rgba(15,23,42,.72); backdrop-filter: blur(6px);
          color:#fff; font-size:.66rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase;
          padding:6px 12px; border-radius:9999px; border:1px solid rgba(255,255,255,.15);
        }
        .plh-float-card {
          position:absolute; background:#fff; border-radius:14px; padding:12px 16px;
          box-shadow: 0 16px 40px rgba(15,23,42,.16); border:1px solid #eef2f7;
        }
      `}</style>

      <section ref={ref} className="plh-dotgrid relative overflow-hidden flex items-center pt-[104px] pb-20 lg:pb-28 bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 60% 35%,rgba(1,97,254,.10),transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 40% 65%,rgba(1,97,254,.07),transparent 65%)' }} />

        <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

            {/* ── LEFT: Copy ── */}
            <div>
              <div className="plh-rev plh-d0 mb-7">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background:'rgba(1,97,254,.08)',border:'1px solid rgba(1,97,254,.25)',
                    color:'#0161FE',fontSize:'.68rem',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase' }}>
                  <span className="plh-pulse w-1.5 h-1.5 rounded-full" style={{ background:'#0161FE' }} />
                  Intelligent Parking Operations
                </span>
              </div>

              <h1 className="plh-rev plh-d1 font-extrabold tracking-tight text-slate-900 mb-4"
                style={{ fontSize:'clamp(2.4rem,4.2vw,3.5rem)',lineHeight:1.1 }}>
                Parking Lot <span style={{ color:'#0161FE' }}>Management</span>
              </h1>
              <p className="plh-rev plh-d2 mb-3"
                style={{ fontSize:'clamp(1.05rem,1.8vw,1.3rem)',fontWeight:700,color:'#0161FE',lineHeight:1.3 }}>
                Real-Time Occupancy, Guidance, and Enforcement for Smarter Facilities
              </p>
              <p className="plh-rev plh-d3 text-slate-500 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                Managing parking operations has become increasingly complex due to rising vehicle volumes, inefficient space utilization, traffic congestion, and growing customer expectations. SecureAAi combines ANPR, occupancy detection, guidance, and enforcement analytics into a single intelligent platform for every facility.
              </p>

              <div className="plh-rev plh-d4 flex flex-wrap gap-4 mb-12">
                <a href="#capabilities" className="plh-btn-p">
                  EXPLORE CAPABILITIES
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
                <a href="#ecosystem" className="plh-btn-s">VIEW ECOSYSTEM</a>
              </div>

              <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:.75,delay:.5,ease:[.22,1,.36,1]}} className="flex flex-wrap gap-2">
                {anchors.map((a,i)=>(
                  <a key={i} href={a.href} className="plh-anchor">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                    {a.label}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT: Product visual ── */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative"
            >
              <div className="plh-frame aspect-[4/3]">
                <img src="/products/overview/parksi.png" alt="Multi-level parking facility with real-time occupancy indicators and guidance signage" />
                <span className="plh-live-badge">
                  <span className="plh-pulse w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Live Occupancy
                </span>
              </div>

              <div className="plh-float-card hidden sm:block" style={{ bottom: -22, left: -22 }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background:'rgba(1,97,254,.1)', color:'#0161FE' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-none">Real-Time Bays</div>
                    <div className="text-[0.7rem] text-slate-400 mt-1">Up to 100 spaces per zone</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
