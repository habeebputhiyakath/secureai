'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function VmsCtaSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('vcta-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.vcta-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .vcta-rev {
          opacity:0; transform:translateY(26px);
          transition:opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                     transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .vcta-rev.vcta-vis { opacity:1; transform:none; }
        .vcta-d0{transition-delay:0s}   .vcta-d1{transition-delay:0.08s}
        .vcta-d2{transition-delay:0.16s} .vcta-d3{transition-delay:0.24s}
        @keyframes vctaScan { 0%{top:0%} 100%{top:100%} }
        .vcta-scan {
          position:absolute; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.45) 50%,transparent);
          animation:vctaScan 3.4s linear infinite; pointer-events:none;
        }
        .vcta-btn-primary {
          display:inline-flex; align-items:center; gap:9px;
          font-size:0.72rem; font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#0042b3; background:#fff;
          border:1.5px solid #fff; border-radius:9999px; padding:14px 32px;
          transition:background 0.22s,transform 0.22s,box-shadow 0.22s;
          cursor:pointer; text-decoration:none;
        }
        .vcta-btn-primary:hover {
          background:rgba(255,255,255,0.88); transform:translateY(-2px);
          box-shadow:0 8px 28px rgba(0,0,0,0.15);
        }
        .vcta-btn-secondary {
          display:inline-flex; align-items:center; gap:9px;
          font-size:0.72rem; font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#fff;
          background:rgba(255,255,255,0.12);
          border:1.5px solid rgba(255,255,255,0.28); border-radius:9999px;
          padding:14px 32px;
          transition:background 0.22s,transform 0.22s;
          cursor:pointer; text-decoration:none;
        }
        .vcta-btn-secondary:hover { background:rgba(255,255,255,0.2); transform:translateY(-2px); }
        .vcta-frame {
          border-radius: 24px; overflow: hidden;
          box-shadow: 0 30px 70px -18px rgba(0,10,40,.45), 0 0 0 1px rgba(255,255,255,.12);
        }
        .vcta-frame img { display:block; width:100%; height:100%; object-fit:cover; }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden py-24 lg:py-32 border-t border-slate-100"
        style={{ background: 'linear-gradient(135deg, #0042b3 0%, #0161FE 100%)' }}
      >
        <div className="vcta-scan" />
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }} />
        {/* Blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, #bfdbfe, transparent 70%)' }} />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #93c5fd, transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              <div className="vcta-rev vcta-d0 mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: '#fff',
                  fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                Future-Ready Security
              </div>

              <h2 className="vcta-rev vcta-d1 text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.06] mb-6">
                Ready to Transform Your Security Operations?
              </h2>

              <p className="vcta-rev vcta-d2 text-sky-100 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
                Empower your organization with centralized video management, intelligent analytics, and real-time situational awareness through SecureAAi Video Management System.
              </p>

              <div className="vcta-rev vcta-d3 flex flex-wrap items-center gap-4">
                <a href="#" className="vcta-btn-primary">
                  REQUEST A DEMO
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a href="#" className="vcta-btn-secondary">CONTACT OUR EXPERTS</a>
                <a href="#" className="vcta-btn-secondary">DOWNLOAD DATASHEET</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="vcta-frame aspect-[4/3] hidden md:block"
            >
              <img src="/products/cameras/camera.png" alt="AI-powered camera with real-time object detection" />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
