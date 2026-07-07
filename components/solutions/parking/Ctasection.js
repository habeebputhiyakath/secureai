'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ParkingCtaSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('pcta-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.pcta-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pcta-rev {
          opacity:0; transform:translateY(26px);
          transition:opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                     transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .pcta-rev.pcta-vis { opacity:1; transform:none; }
        .pcta-d0{transition-delay:0s}   .pcta-d1{transition-delay:0.08s}
        .pcta-d2{transition-delay:0.16s} .pcta-d3{transition-delay:0.24s}
        @keyframes pctaScan { 0%{top:0%} 100%{top:100%} }
        .pcta-scan {
          position:absolute; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(167,243,208,0.45) 50%,transparent);
          animation:pctaScan 3.4s linear infinite; pointer-events:none;
        }
        .pcta-btn-primary {
          display:inline-flex; align-items:center; gap:9px;
          font-size:0.72rem; font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#064e3b; background:#fff;
          border:1.5px solid #fff; border-radius:9999px; padding:14px 32px;
          transition:background 0.22s,transform 0.22s,box-shadow 0.22s;
          cursor:pointer; text-decoration:none;
        }
        .pcta-btn-primary:hover {
          background:rgba(255,255,255,0.9); transform:translateY(-2px);
          box-shadow:0 8px 28px rgba(0,0,0,0.15);
        }
        .pcta-btn-secondary {
          display:inline-flex; align-items:center; gap:9px;
          font-size:0.72rem; font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#fff;
          background:rgba(255,255,255,0.12);
          border:1.5px solid rgba(255,255,255,0.28); border-radius:9999px;
          padding:14px 32px;
          transition:background 0.22s,transform 0.22s;
          cursor:pointer; text-decoration:none;
        }
        .pcta-btn-secondary:hover { background:rgba(255,255,255,0.2); transform:translateY(-2px); }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden py-28 lg:py-36 border-t border-emerald-900"
        style={{ background: 'linear-gradient(135deg, #064e3b 0%, #047857 55%, #10b981 100%)' }}
      >
        <div className="pcta-scan" />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }} />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, #6ee7b7, transparent 70%)' }} />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #a7f3d0, transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pcta-rev pcta-d0 mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
              Smarter Operations
            </div>

            <h2 className="pcta-rev pcta-d1 text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.06] mb-6">
              Ready to Build Smarter Parking?
            </h2>

            <p className="pcta-rev pcta-d2 text-emerald-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              Transform traditional parking facilities into intelligent ecosystems with AI-powered parking management, occupancy detection, and real-time analytics.
            </p>

            <div className="pcta-rev pcta-d3 flex flex-wrap items-center justify-center gap-4 mb-16">
              <a href="#" className="pcta-btn-primary">
                REQUEST A DEMO
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#" className="pcta-btn-secondary">TALK TO AN EXPERT</a>
            </div>

            <div className="pcta-rev pcta-d3 pt-8 border-t border-white/20">
              <h4 className="text-white font-bold text-lg mb-2">SecureAAi Smart Parking Solution</h4>
              <p className="text-emerald-200 text-sm font-medium tracking-wide uppercase">
                Intelligent Parking • Real-Time Visibility • Better Experiences • Smarter Operations
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
