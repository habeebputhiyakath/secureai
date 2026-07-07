'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function SicareCtaSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('scc-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.scc-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .scc-rev {
          opacity:0; transform:translateY(26px);
          transition:opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                     transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .scc-rev.scc-vis { opacity:1; transform:none; }
        .scc-d0{transition-delay:0s}   .scc-d1{transition-delay:0.08s}
        .scc-d2{transition-delay:0.16s} .scc-d3{transition-delay:0.24s}
        @keyframes sccScan { 0%{top:0%} 100%{top:100%} }
        .scc-scan {
          position:absolute; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(165,180,252,0.45) 50%,transparent);
          animation:sccScan 3.4s linear infinite; pointer-events:none;
        }
        .scc-btn-primary {
          display:inline-flex; align-items:center; gap:9px;
          font-size:0.72rem; font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#312e81; background:#fff;
          border:1.5px solid #fff; border-radius:9999px; padding:14px 32px;
          transition:background 0.22s,transform 0.22s,box-shadow 0.22s;
          cursor:pointer; text-decoration:none;
        }
        .scc-btn-primary:hover {
          background:rgba(255,255,255,0.88); transform:translateY(-2px);
          box-shadow:0 8px 28px rgba(0,0,0,0.15);
        }
        .scc-btn-secondary {
          display:inline-flex; align-items:center; gap:9px;
          font-size:0.72rem; font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#fff;
          background:rgba(255,255,255,0.12);
          border:1.5px solid rgba(255,255,255,0.28); border-radius:9999px;
          padding:14px 32px;
          transition:background 0.22s,transform 0.22s;
          cursor:pointer; text-decoration:none;
        }
        .scc-btn-secondary:hover { background:rgba(255,255,255,0.2); transform:translateY(-2px); }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden py-28 lg:py-36 border-t border-slate-100"
        style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 55%, #4338ca 100%)' }}
      >
        <div className="scc-scan" />
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }} />
        {/* Blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, #a5b4fc, transparent 70%)' }} />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #e0e7ff, transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="scc-rev scc-d0 mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Protect Your Investment
            </div>

            <h2 className="scc-rev scc-d1 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.06] mb-6">
              Ready for Peace of Mind?
            </h2>

            <p className="scc-rev scc-d2 text-indigo-100 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12">
              Let SecureAAi SiCare™ keep your mission-critical systems running flawlessly. Talk to our support specialists today to find the right coverage plan for your organization.
            </p>

            <div className="scc-rev scc-d3 flex flex-wrap items-center justify-center gap-4">
              <a href="#" className="scc-btn-primary">
                GET A QUOTE
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#" className="scc-btn-secondary">DOWNLOAD BROCHURE</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
