'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Mounting',     href: '#mounting' },
  { label: 'Network',      href: '#network' },
  { label: 'Power',        href: '#power' },
  { label: 'Storage',      href: '#storage' },
  { label: 'Environmental',href: '#environmental' },
];

export default function AccessoriesHeroSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('ah-vis');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.ah-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ah-rev {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .ah-rev.ah-vis { opacity: 1; transform: none; }
        .ah-d0{transition-delay:0s}   .ah-d1{transition-delay:0.1s}
        .ah-d2{transition-delay:0.2s} .ah-d3{transition-delay:0.3s}
        .ah-d4{transition-delay:0.4s}

        @keyframes ahScan { 0%{top:0%} 100%{top:100%} }
        .ah-scan {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(20,184,166,0.5) 50%, transparent);
          animation: ahScan 3.8s linear infinite; pointer-events: none;
        }
        @keyframes ahPulse { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .ah-pulse { animation: ahPulse 1.5s ease-in-out infinite; }

        .ah-quicklink {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 18px; border-radius: 9999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          color: #99f6e4; font-size: 0.75rem; font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .ah-quicklink:hover {
          background: rgba(20,184,166,0.2);
          border-color: rgba(20,184,166,0.45);
          color: #fff; transform: translateY(-2px);
        }
        .ah-btn-primary {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #0f4a45; background: #fff;
          border: 1.5px solid #fff; border-radius: 9999px; padding: 14px 32px;
          transition: background 0.22s, transform 0.22s, box-shadow 0.22s;
          cursor: pointer; text-decoration: none;
        }
        .ah-btn-primary:hover {
          background: rgba(255,255,255,0.88); transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(0,0,0,0.18);
        }
        .ah-btn-secondary {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #fff;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.25); border-radius: 9999px;
          padding: 14px 32px;
          transition: background 0.22s, transform 0.22s;
          cursor: pointer; text-decoration: none;
        }
        .ah-btn-secondary:hover { background: rgba(255,255,255,0.18); transform: translateY(-2px); }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden flex items-center min-h-screen"
        style={{ background: 'linear-gradient(150deg, #031a18 0%, #072e2a 45%, #0a3d38 100%)' }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(20,184,166,0.07) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }} />
        <div className="ah-scan" />

        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 60% 35%, rgba(20,184,166,0.16), transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 40% 65%, rgba(16,185,129,0.1), transparent 65%)' }} />

        {/* Decorative hexagonal grid — top right */}
        <div className="absolute right-0 top-0 bottom-0 w-72 hidden xl:flex flex-col justify-center items-end pr-10 gap-3 opacity-[0.04] pointer-events-none">
          {[5, 6, 5, 6, 5].map((count, row) => (
            <div key={row} className="flex gap-3" style={{ marginLeft: row % 2 === 0 ? 0 : 18 }}>
              {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-lg border border-white" />
              ))}
            </div>
          ))}
        </div>

        <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-36 lg:py-44">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="ah-rev ah-d0 mb-7">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(20,184,166,0.14)',
                  border: '1px solid rgba(20,184,166,0.32)',
                  color: '#5eead4',
                  fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                }}
              >
                <span className="ah-pulse w-1.5 h-1.5 rounded-full bg-teal-400" />
                SecureAAI Hardware — Accessories
              </span>
            </div>

            {/* Heading */}
            <h1
              className="ah-rev ah-d1 font-extrabold tracking-tight text-white mb-4"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', lineHeight: 1.05 }}
            >
              Accessories
            </h1>
            <p
              className="ah-rev ah-d2 mb-3"
              style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', fontWeight: 700, color: '#5eead4', lineHeight: 1.3 }}
            >
              Complete Your Security Ecosystem
            </p>
            <p className="ah-rev ah-d3 text-slate-400 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl">
              SecureAAI accessories ensure seamless installation and optimal system performance — every mount, cable, switch, and enclosure engineered to work in harmony with your cameras and processing units.
            </p>

            {/* CTAs */}
            <div className="ah-rev ah-d4 flex flex-wrap gap-4 mb-14">
              <a href="#categories" className="ah-btn-primary">
                BROWSE ACCESSORIES
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#" className="ah-btn-secondary">REQUEST QUOTE</a>
            </div>

            {/* Quick-jump chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2"
            >
              {quickLinks.map((q, i) => (
                <a key={i} href={q.href} className="ah-quicklink">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  {q.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(3,26,24,0.65))' }} />
      </section>
    </>
  );
}
