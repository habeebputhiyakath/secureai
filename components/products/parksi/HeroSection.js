'use client';
import { useEffect, useRef } from 'react';

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
      className="relative overflow-hidden min-h-[70vh] flex  pt-30 pb-20 items-center border-b border-slate-800 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/products/parksi/hero.png')" }}
    >
      {/* Dark overlay for text legibility over bg image */}
      <div className="absolute inset-0 bg-slate-950/55 pointer-events-none" />

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

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col text-left">

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
              className="ps-rev ps-d1 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white mb-6"
              style={{
                opacity: 0,
                transform: 'translateY(26px)',
                transition: 'opacity 0.72s cubic-bezier(0.22,1,0.36,1) 0.08s, transform 0.72s cubic-bezier(0.22,1,0.36,1) 0.08s',
              }}
            >
              SecureAAI: Your<br />
              <span style={{ color: '#0161FE' }}>One-stop Solution</span>
            </h1>

            {/* Subtext */}
            <p
              className="ps-rev ps-d2 text-slate-100 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
              style={{
                opacity: 0,
                transform: 'translateY(26px)',
                transition: 'opacity 0.72s cubic-bezier(0.22,1,0.36,1) 0.16s, transform 0.72s cubic-bezier(0.22,1,0.36,1) 0.16s',
              }}
            >
              SecureAAI solution caters to the ever growing demand for a secure, flexible, and functioning parking management system.
            </p>

            {/* CTAs */}
            <div
              className="ps-rev ps-d3 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{
                opacity: 0,
                transform: 'translateY(26px)',
                transition: 'opacity 0.72s cubic-bezier(0.22,1,0.36,1) 0.24s, transform 0.72s cubic-bezier(0.22,1,0.36,1) 0.24s',
              }}
            >
              <button
                className="px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-transform duration-300 hover:-translate-y-1"
                style={{ background: '#0161FE', boxShadow: '0 8px 24px rgba(1,97,254,0.35)' }}
              >
                Request a Demo
              </button>
              <button
                className="px-7 py-3.5 rounded-full font-semibold text-sm text-white border border-white/25 transition-colors duration-300 hover:bg-white/10"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="hidden lg:block" />

        </div>
      </div>

      <style>{`
        .ps-rev.ps-vis { opacity: 1 !important; transform: none !important; }
      `}</style>
    </section>
  );
}