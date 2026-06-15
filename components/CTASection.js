'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const trustItems = [
  'No setup fees',
  '30-day pilot program',
  'Dedicated onboarding',
  'SIRA & ISO 27001 certified',
];

function ArrowIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function CTASection() {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const [counted, setCounted] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  /* ── Particle canvas (white particles for blue bg) ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const r = 255, g = 255, b = 255;

    const count = 38;
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2.2 + 0.8,
      alpha: Math.random() * 0.35 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      // Lines between close particles
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${r},${g},${b},${(1 - dist / 130) * 0.1})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      pts.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  /* ── Scroll reveal + counter trigger ── */
  useEffect(() => {
    const els = ref.current?.querySelectorAll('[data-reveal]');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0) scale(1)';
        }
      }),
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));

    // Counter trigger
    const sectionObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !counted) { setCounted(true); animateCounters(); } },
      { threshold: 0.3 }
    );
    if (ref.current) sectionObs.observe(ref.current);
    return () => { observer.disconnect(); sectionObs.disconnect(); };
  }, [counted]);

  const animateCounters = () => {
    const targets = [500, 999, 4];
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setCounts(targets.map(v => Math.floor(v * ease)));
      if (t < 1) requestAnimationFrame(tick);
      else setCounts(targets);
    };
    requestAnimationFrame(tick);
  };

  return (
    <>
      <style>{`
        @keyframes cta-line   { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes cta-dot    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.85)} }
        @keyframes cta-glow   { 0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,0)} 50%{box-shadow:0 0 0 8px rgba(255,255,255,0.18)} }
        @keyframes cta-badge  { from{opacity:0;transform:translateY(-10px) scale(0.92)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes cta-word   { from{opacity:0;transform:translateY(28px) skewY(4deg)} to{opacity:1;transform:translateY(0) skewY(0)} }
        @keyframes cta-card-in{ from{opacity:0;transform:translateY(32px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes cta-ring   { 0%{transform:translate(-50%,-50%) scale(0.9);opacity:0.6} 100%{transform:translate(-50%,-50%) scale(1.6);opacity:0} }
        @keyframes cta-stat   { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

        .cta-word-1 { animation: cta-word 0.65s cubic-bezier(0.22,1,0.36,1) both 0.15s }
        .cta-word-2 { animation: cta-word 0.65s cubic-bezier(0.22,1,0.36,1) both 0.28s }
        .cta-word-3 { animation: cta-word 0.65s cubic-bezier(0.22,1,0.36,1) both 0.41s }
        .cta-stat-1 { animation: cta-stat 0.5s ease both 0.55s }
        .cta-stat-2 { animation: cta-stat 0.5s ease both 0.68s }
        .cta-stat-3 { animation: cta-stat 0.5s ease both 0.81s }
        .cta-ring   { animation: cta-ring 2.2s ease-out infinite }
        .dot-pulse  { animation: cta-dot  1.8s ease infinite }
        .btn-glow   { animation: cta-glow 2.5s ease infinite }
      `}</style>

      <section
        id="demo"
        ref={ref}
        className="relative py-23 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0161FE 100%, #0161FE 45%, #003fa8 100%)' }}
      >

        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.6 }}
        />

        {/* Soft glow accents */}
        <div
          className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
        />

        {/* ── Glass panel cascade ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-32 left-[2%] w-[240px] h-[320px] rounded-[28px] border border-white/15 bg-white/[0.04] backdrop-blur-sm" style={{ transform: 'rotate(-18deg)' }} />
          <div className="absolute -bottom-48 left-[24%] w-[270px] h-[360px] rounded-[28px] border border-white/15 bg-white/[0.05] backdrop-blur-sm" style={{ transform: 'rotate(-18deg)' }} />
          <div className="absolute -bottom-64 left-[48%] w-[300px] h-[400px] rounded-[28px] border border-white/15 bg-white/[0.05] backdrop-blur-sm" style={{ transform: 'rotate(-18deg)' }} />
          <div className="absolute -bottom-40 right-[2%] w-[260px] h-[340px] rounded-[28px] border border-white/15 bg-white/[0.04] backdrop-blur-sm" style={{ transform: 'rotate(-18deg)' }} />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* ── Two-column grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Left: heading ── */}
            <div>
              {/* Animated badge */}
              <div
                data-reveal
                style={{ opacity: 0, transform: 'translateY(16px)', transition: 'opacity 0.5s ease, transform 0.5s ease', animation: 'cta-badge 0.6s cubic-bezier(0.22,1,0.36,1) both 0.05s' }}
                className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
              >
                {/* Pulsing dot with ring */}
                <span className="relative flex items-center justify-center w-3 h-3">
                  <span className="cta-ring absolute w-3 h-3 rounded-full border border-emerald-300" style={{ top: '50%', left: '50%' }} />
                  <span className="dot-pulse w-2 h-2 rounded-full bg-emerald-400 relative z-10" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                  Available for Enterprise Deployment
                </span>
              </div>

              {/* Headline — word-by-word mask animation */}
              <div className="overflow-hidden mb-2">
                <h2 className="cta-word-1 text-4xl lg:text-5xl xl:text-[3.4rem] font-bold tracking-tight leading-[1.1] text-white">
                  Ready to Transform
                </h2>
              </div>
              <div className="overflow-hidden mb-2">
                <h2 className="cta-word-2 text-4xl lg:text-5xl xl:text-[3.4rem] font-bold tracking-tight leading-[1.1] text-blue-100">
                  Your Security
                </h2>
              </div>
              <div className="overflow-hidden mb-8">
                <h2 className="cta-word-3 text-4xl lg:text-5xl xl:text-[3.4rem] font-bold tracking-tight leading-[1.1] text-white">
                  Operations?
                </h2>
              </div>

              {/* Animated rule */}
              <div
                className="mb-7 h-[2px] w-14 cta-line"
                style={{
                  background: 'rgba(255,255,255,0.5)',
                  transformOrigin: 'left',
                  animation: 'cta-line 1s cubic-bezier(0.22,1,0.36,1) both 0.7s',
                }}
              />

              <p
                data-reveal
                style={{ opacity: 0, transform: 'translateY(12px)', transition: 'opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s' }}
                className="text-blue-100/80 text-[15px] leading-relaxed max-w-sm mb-8"
              >
                Join 500+ enterprises and government organisations that trust SecureAAI for mission-critical security infrastructure.
              </p>

            </div>

            {/* ── Right: CTA card (glass) ── */}
            <div
              data-reveal
              style={{
                opacity: 0,
                transform: 'translateY(32px) scale(0.97)',
                transition: 'opacity 0.65s cubic-bezier(0.22,1,0.36,1) 0.12s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.12s',
              }}
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 flex flex-col gap-6 relative overflow-hidden"
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-40 h-40 pointer-events-none rounded-bl-full"
                style={{ background: 'radial-gradient(circle at top right, rgba(255,255,255,0.18), transparent 70%)' }}
              />

              {/* Trust checklist */}
              <ul className="flex flex-col gap-3">
                {trustItems.map((item, i) => (
                  <li
                    key={i}
                    data-reveal
                    style={{
                      opacity: 0,
                      transform: 'translateY(10px)',
                      transition: `opacity 0.4s ease ${0.18 + i * 0.07}s, transform 0.4s ease ${0.18 + i * 0.07}s`,
                    }}
                    className="flex items-center gap-3 text-[13px] text-white/90 font-medium"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-white text-[#0161FE]"
                    >
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="h-px bg-white/15" />

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <Link
                  href="#"
                  className="btn-glow inline-flex items-center justify-center gap-2.5 text-[13.5px] font-semibold tracking-wide rounded-full px-6 py-3.5 transition-all duration-200 hover:opacity-90 hover:-translate-y-[1px]"
                  style={{ background: '#ffffff', color: '#0161FE' }}
                >
                  Request a Private Demo <ArrowIcon />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2.5 text-[13.5px] font-semibold tracking-wide rounded-full px-6 py-3.5 border-[1.5px] transition-all duration-200 hover:-translate-y-[1px]"
                  style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#0161FE'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ffffff'; }}
                >
                  Talk to an Expert <ArrowIcon />
                </    Link>
              </div>

              {/* Bottom note */}
              <p className="text-[11.5px] text-white/50 text-center">
                No credit card required · Responds within 24 hours
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}