'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const anchors = [
  { label: 'Why SmartPay?', href: '#why' },
  { label: 'Features', href: '#capabilities' },
  { label: 'Ticketless Entry', href: '#scenarios' },
  { label: 'Industries', href: '#industries' },
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
        .ph-dotgrid::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 28px 28px; opacity: 0.4;
        }
        @keyframes phPulse { 0%,100%{opacity:1} 50%{opacity:.25} }
        .ph-pulse { animation:phPulse 1.5s ease-in-out infinite; }
        .ph-anchor { display:inline-flex;align-items:center;gap:7px;padding:9px 18px;
          border-radius:9999px; background:#fff;
          border:1px solid #e2e8f0;color:#475569;
          font-size:.75rem;font-weight:600;text-decoration:none;white-space:nowrap;
          transition:background .2s,border-color .2s,color .2s,transform .2s;
          box-shadow: 0 1px 2px rgba(15,23,42,.04); }
        .ph-anchor:hover { background:#eaf1ff;border-color:#0161FE;
          color:#0161FE;transform:translateY(-2px); }
        .ph-btn-p { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#fff;background:#0161FE;border:1.5px solid #0161FE;border-radius:9999px;
          padding:14px 32px;transition:background .22s,transform .22s,box-shadow .22s;
          cursor:pointer;text-decoration:none; }
        .ph-btn-p:hover { background:#0052d6;transform:translateY(-2px);
          box-shadow:0 10px 24px -8px rgba(1,97,254,.5); }
        .ph-btn-s { display:inline-flex;align-items:center;gap:9px;
          font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:#374151;background:#fff;
          border:1.5px solid #e2e8f0;border-radius:9999px;padding:14px 32px;
          transition:background .22s,border-color .22s,color .22s,transform .22s;cursor:pointer;text-decoration:none; }
        .ph-btn-s:hover { border-color:#0161FE;color:#0161FE;transform:translateY(-2px); }

        .ph-frame {
          position: relative; border-radius: 28px; overflow: hidden;
          box-shadow: 0 30px 70px -20px rgba(1,97,254,.35), 0 8px 24px rgba(15,23,42,.08);
          border: 1px solid rgba(1,97,254,.12);
        }
        .ph-frame img { display:block; width:100%; height:100%; object-fit:cover; }
        .ph-live-badge {
          position:absolute; top:16px; left:16px; display:inline-flex; align-items:center; gap:6px;
          background:rgba(15,23,42,.72); backdrop-filter: blur(6px);
          color:#fff; font-size:.66rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase;
          padding:6px 12px; border-radius:9999px; border:1px solid rgba(255,255,255,.15);
        }
        .ph-float-card {
          position:absolute; background:#fff; border-radius:14px; padding:12px 16px;
          box-shadow: 0 16px 40px rgba(15,23,42,.16); border:1px solid #eef2f7;
        }
      `}</style>

      <section ref={ref} className="ph-dotgrid relative overflow-hidden flex items-center pt-[104px] pb-20 lg:pb-28 bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 60% 35%,rgba(1,97,254,.10),transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle at 40% 65%,rgba(1,97,254,.07),transparent 65%)' }} />

        <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

            {/* ── LEFT: Copy ── */}
            <div>
              <div className="ph-rev ph-d0 mb-7">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background:'rgba(1,97,254,.08)',border:'1px solid rgba(1,97,254,.25)',
                    color:'#0161FE',fontSize:'.68rem',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase' }}>
                  <span className="ph-pulse w-1.5 h-1.5 rounded-full" style={{ background:'#0161FE' }} />
                  Digital Parking Payments
                </span>
              </div>

              <h1 className="ph-rev ph-d1 font-extrabold tracking-tight text-slate-900 mb-4"
                style={{ fontSize:'clamp(2.4rem,4.2vw,3.5rem)',lineHeight:1.1 }}>
                SmartPay <span style={{ color:'#0161FE' }}>Parking Solution</span>
              </h1>
              <p className="ph-rev ph-d2 mb-3"
                style={{ fontSize:'clamp(1.05rem,1.8vw,1.3rem)',fontWeight:700,color:'#0161FE',lineHeight:1.3 }}>
                Intelligent Digital Parking Payment &amp; Revenue Management Services
              </p>
              <p className="ph-rev ph-d3 text-slate-500 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
                SecureAAi Systems provides SmartPay Parking Solution, a comprehensive parking payment and revenue management service that enables organizations to deliver seamless, secure, and cashless parking experiences — integrated with our Smart Parking, ANPR, VMS, and Access Control technologies.
              </p>
              <p className="ph-rev ph-d3 text-slate-500 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                Designed for commercial buildings, shopping malls, airports, hospitals, hotels, residential communities, corporate campuses, transportation hubs, and smart city projects.
              </p>

              <div className="ph-rev ph-d4 flex flex-wrap gap-4 mb-12">
                <a href="#capabilities" className="ph-btn-p">
                  EXPLORE FEATURES
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
                <a href="#industries" className="ph-btn-s">VIEW INDUSTRIES</a>
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

            {/* ── RIGHT: Product visual ── */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative"
            >
              <div className="ph-frame aspect-[4/3]">
                <img src="/parking.png" alt="Intelligent smart parking facility with real-time slot availability and automated access" />
                <span className="ph-live-badge">
                  <span className="ph-pulse w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Cashless & Ticketless
                </span>
              </div>

              <div className="ph-float-card hidden sm:block" style={{ bottom: -22, left: -22 }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background:'rgba(1,97,254,.1)', color:'#0161FE' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-none">Automated Billing</div>
                    <div className="text-[0.7rem] text-slate-400 mt-1">Entry to exit, no tickets</div>
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
