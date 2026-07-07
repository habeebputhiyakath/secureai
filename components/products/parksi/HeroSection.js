'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const bullets = [
  'Quick and easy entry and exit',
  'Streamlined vehicle traffic',
  'High data security',
  'Multiple payment options',
  'Multi-site management',
];

export default function HeroSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('ps-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.ps-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-screen flex items-center border-b border-slate-800"
      style={{ background: '#071225' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.45,
        }}
      />

      {/* Blue blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle at 40% 40%, #0161FE44, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle at 60% 60%, #0161FE33, transparent 70%)' }}
      />

      <div className="relative max-w-[1280px] mx-auto  px-6 lg:px-10  lg:pt-42 pb-40 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col  ">

            {/* Eyebrow */}
            <div
              className="ps-rev ps-d0 mb-6 self-start inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(1,97,254,0.12)',
                color: '#60a5fa',
                border: '1px solid rgba(1,97,254,0.3)',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                opacity: 0,
                transform: 'translateY(26px)',
                transition: 'opacity 0.72s cubic-bezier(0.22,1,0.36,1), transform 0.72s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 6v6c0 5.25 3.9 10.15 9 11.5C17.1 22.15 21 17.25 21 12V6L12 2z" />
              </svg>
              Smart Parking Management System
            </div>

            {/* Heading */}
            <h1
              className="ps-rev ps-d1 text-5xl sm:text-6xl font-extrabold leading-[1.06] tracking-tight text-white mb-6"
              style={{
                opacity: 0,
                transform: 'translateY(26px)',
                transition: 'opacity 0.72s cubic-bezier(0.22,1,0.36,1) 0.08s, transform 0.72s cubic-bezier(0.22,1,0.36,1) 0.08s',
              }}
            >
              SecureAAI: Your<br />
              <span style={{ color: '#0161FE' }}>One-stop Solution</span>
            </h1>

            <p
              className="ps-rev ps-d2 text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
              style={{
                opacity: 0,
                transform: 'translateY(26px)',
                transition: 'opacity 0.72s cubic-bezier(0.22,1,0.36,1) 0.16s, transform 0.72s cubic-bezier(0.22,1,0.36,1) 0.16s',
              }}
            >
              SecureAAI solution caters to the ever growing demand for a secure, flexible, and functioning parking management system.
            </p>

            {/* Bullet list */}
            <ul
              className="ps-rev ps-d3 flex flex-col gap-2.5 mb-10"
              style={{
                opacity: 0,
                transform: 'translateY(26px)',
                transition: 'opacity 0.72s cubic-bezier(0.22,1,0.36,1) 0.22s, transform 0.72s cubic-bezier(0.22,1,0.36,1) 0.22s',
              }}
            >
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: '#0161FE' }}
                  >
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.2L4 7.2L8.5 2.8" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-slate-300">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div
              className="ps-rev ps-d5 flex flex-wrap gap-4"
              style={{
                opacity: 0,
                transform: 'translateY(26px)',
                transition: 'opacity 0.72s cubic-bezier(0.22,1,0.36,1) 0.36s, transform 0.72s cubic-bezier(0.22,1,0.36,1) 0.36s',
              }}
            >
              <a
                href="#key"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-xs tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: '#0161FE', border: '1.5px solid #0161FE', fontSize: '0.72rem' }}
              >
                ELIMINATE YOUR PARKING WOES
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#letstalk"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs tracking-widest uppercase border transition-all duration-200 hover:-translate-y-0.5"
                style={{ color: '#60a5fa', border: '1.5px solid rgba(1,97,254,0.45)', fontSize: '0.72rem' }}
              >
                GET A QUOTE
              </a>
            </div>
          </div>

          {/* ── RIGHT — Image ── */}
          <div className="relative">
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[32px] overflow-hidden"
              style={{ boxShadow: '0 32px 80px rgba(1,97,254,0.2)' }}
            >
              {/* ── Replace src with your actual image path ── */}
              <img
                src="https://parkomax.com/wp-content/uploads/2024/08/Parkomax-Parking-Management-1-1536x1157.webp"
                alt="SecureAAI Smart Parking Management System"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3', display: 'block' }}
              />

              {/* Subtle blue overlay at bottom for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(7,18,37,0.45) 0%, transparent 50%)',
                }}
              />
            </motion.div>

            {/* Floating card — Available Slots */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-8 -left-6 rounded-2xl px-5 py-4 z-10"
              style={{
                background: 'rgba(7,18,37,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(1,97,254,0.25)',
                boxShadow: '0 12px 40px rgba(0,0,0,.35)',
              }}
            >
              <p className="text-xs text-slate-400">Available Slots</p>
              <h3 className="text-2xl font-bold" style={{ color: '#0161FE' }}>168 / 480</h3>
            </motion.div>

            {/* Floating card — ANPR Active */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-8 -right-6 rounded-2xl px-5 py-4 z-10"
              style={{
                background: 'rgba(7,18,37,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(1,97,254,0.25)',
                boxShadow: '0 12px 40px rgba(0,0,0,.35)',
              }}
            >
              <p className="text-xs text-slate-400">ANPR Camera</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-semibold text-sm text-white">Active</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .ps-rev.ps-vis { opacity: 1 !important; transform: none !important; }
      `}</style>
    </section>
  );
}