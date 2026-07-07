'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function SivmsCtaSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('svc-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.svc-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .svc-rev {
          opacity:0; transform:translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .svc-rev.svc-vis { opacity:1; transform:none; }
        .svc-d0{transition-delay:0s} .svc-d1{transition-delay:0.08s}
        .svc-d2{transition-delay:0.16s} .svc-d3{transition-delay:0.24s}
        @keyframes svcScan { 0%{top:0%} 100%{top:100%} }

        .svc-btn-primary {
          display:inline-flex; align-items:center; gap:9px;
          font-size:0.72rem; font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#0161FE; background:#fff;
          border:1.5px solid #fff; border-radius:9999px;
          padding:14px 32px;
          transition: background 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s;
          cursor:pointer; text-decoration:none;
        }
        .svc-btn-primary:hover {
          background:rgba(255,255,255,0.9);
          transform:translateY(-2px);
          box-shadow:0 8px 28px rgba(0,0,0,0.15);
        }
        .svc-btn-secondary {
          display:inline-flex; align-items:center; gap:9px;
          font-size:0.72rem; font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#fff;
          background:rgba(255,255,255,0.12);
          border:1.5px solid rgba(255,255,255,0.35); border-radius:9999px;
          padding:14px 32px;
          transition: background 0.22s, transform 0.22s;
          cursor:pointer; text-decoration:none;
        }
        .svc-btn-secondary:hover {
          background:rgba(255,255,255,0.2);
          transform:translateY(-2px);
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden py-28 lg:py-36 border-t border-slate-100"
        style={{ background: 'linear-gradient(135deg, #0161FE 0%, #1e6fff 55%, #3b82f6 100%)' }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Scan line */}
        <div className="absolute left-0 right-0 h-px opacity-25 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg,transparent,#fff 50%,transparent)',
            animation: 'svcScan 3.2s linear infinite',
          }}
        />
        {/* Blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, #93c5fd, transparent 70%)' }}
        />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #bfdbfe, transparent 70%)' }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Live badge */}
            <div
              className="svc-rev svc-d0 mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.28)',
                color: '#fff',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Deployments Available Now
            </div>

            <h2 className="svc-rev svc-d1 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.06] mb-6">
              Ready to Secure Your<br />Enterprise with SiVMS™?
            </h2>

            <p className="svc-rev svc-d2 text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12">
              Get a live demonstration tailored to your sites and camera infrastructure. Our engineers will design an architecture plan and walk you through ROI before you commit.
            </p>

            <div className="svc-rev svc-d3 flex flex-wrap items-center justify-center gap-4">
              <a href="#" className="svc-btn-primary">
                BOOK A FREE DEMO
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#" className="svc-btn-secondary">
                TALK TO SALES
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
