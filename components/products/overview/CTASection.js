'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const trustItems = [
  'No setup fees',
  'SIRA & ISO 27001 certified',
  'Dedicated onboarding team',
  'Full pilot program available',
];

function ArrowIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function CTASection() {
  const canvasRef = useRef(null);
  const ref = useRef(null);
  const [counted, setCounted] = useState(false);

  /* Particle canvas — faint blue signal dots over the light overlay */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const pts = Array.from({ length: 38 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2.2 + 0.8,
      alpha: Math.random() * 0.35 + 0.15,
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
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(1,97,254,${(1 - dist / 130) * 0.12})`;
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
        ctx.fillStyle = `rgba(1,97,254,${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  /* Reveal */
  useEffect(() => {
    const els = ref.current?.querySelectorAll('[data-reveal]');
    if (!els) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0) scale(1)'; }
      }),
      { threshold: 0.08 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .cta2-section { font-family: 'DM Sans', sans-serif; }

        @keyframes ctaWordUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ctaDot    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.85)} }
        @keyframes ctaRing   { 0%{transform:translate(-50%,-50%) scale(0.9);opacity:0.6} 100%{transform:translate(-50%,-50%) scale(1.6);opacity:0} }
        @keyframes ctaLine   { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        .cta2-w1 { animation: ctaWordUp 0.65s cubic-bezier(0.22,1,0.36,1) both 0.15s }
        .cta2-w2 { animation: ctaWordUp 0.65s cubic-bezier(0.22,1,0.36,1) both 0.28s }
        .cta2-w3 { animation: ctaWordUp 0.65s cubic-bezier(0.22,1,0.36,1) both 0.41s }
        .cta2-dot { animation: ctaDot 1.8s ease infinite }
        .cta2-ring { animation: ctaRing 2.2s ease-out infinite }

        .cta2-btn-secondary { transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease; }
        .cta2-btn-secondary:hover { background: #0161FE; color: #ffffff; border-color: #0161FE; }
      `}</style>

      <section
        id="demo"
        ref={ref}
        className="cta2-section relative py-24 lg:py-28 overflow-hidden border-t border-slate-100 bg-cover bg-center"
        style={{ backgroundImage: "url('/products/overview/cta.png')" }}
      >
        {/* Light overlay so black/blue text stays legible over the photo */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(115deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.93) 45%, rgba(255,255,255,0.82) 100%)' }} />

        {/* Particle canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.7 }} />

        {/* Glow accents */}
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(1,97,254,0.08) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-24 -left-24 w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(1,97,254,0.05) 0%, transparent 70%)' }} />

        {/* Glass panels */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-32 left-[2%] w-[240px] h-[320px] rounded-[28px] border border-slate-200 bg-white/40 backdrop-blur-sm" style={{ transform: 'rotate(-18deg)' }} />
          <div className="absolute -bottom-48 left-[24%] w-[270px] h-[360px] rounded-[28px] border border-slate-200 bg-white/50 backdrop-blur-sm" style={{ transform: 'rotate(-18deg)' }} />
          <div className="absolute -bottom-40 right-[2%] w-[260px] h-[340px] rounded-[28px] border border-slate-200 bg-white/40 backdrop-blur-sm" style={{ transform: 'rotate(-18deg)' }} />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT — Headline */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border"
                style={{ background: 'rgba(1,97,254,0.07)', borderColor: 'rgba(1,97,254,0.18)', animation: 'ctaWordUp 0.6s cubic-bezier(0.22,1,0.36,1) both 0.05s' }}>
                <span className="relative flex items-center justify-center w-3 h-3">
                  <span className="cta2-ring absolute w-3 h-3 rounded-full border border-emerald-400" style={{ top: '50%', left: '50%' }} />
                  <span className="cta2-dot w-2 h-2 rounded-full bg-emerald-500 relative z-10" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: '#0161FE' }}>Available for Enterprise Deployment</span>
              </div>

              {/* Headline */}
              <div className="overflow-hidden mb-2"><h2 className="cta2-w1 text-4xl lg:text-5xl xl:text-[3.4rem] font-bold tracking-tight leading-[1.1] text-slate-900">Ready to Transform</h2></div>
              <div className="overflow-hidden mb-2"><h2 className="cta2-w2 text-4xl lg:text-5xl xl:text-[3.4rem] font-bold tracking-tight leading-[1.1]" style={{ color: '#0161FE' }}>Your Security</h2></div>
              <div className="overflow-hidden mb-8"><h2 className="cta2-w3 text-4xl lg:text-5xl xl:text-[3.4rem] font-bold tracking-tight leading-[1.1] text-slate-900">Operations?</h2></div>

              {/* Rule */}
              <div className="mb-7 h-[2px] w-14" style={{ background: '#0161FE', transformOrigin: 'left', animation: 'ctaLine 1s cubic-bezier(0.22,1,0.36,1) both 0.7s' }} />

              <p data-reveal style={{ opacity: 0, transform: 'translateY(12px)', transition: 'opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s' }}
                className="text-slate-500 text-[15px] leading-relaxed max-w-sm mb-8">
                Join 120+ enterprises and government organisations that trust SecureAI for mission-critical security infrastructure.
              </p>
            </div>

            {/* RIGHT — CTA card */}
            <div data-reveal style={{ opacity: 0, transform: 'translateY(32px) scale(0.97)', transition: 'opacity 0.65s cubic-bezier(0.22,1,0.36,1) 0.12s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.12s' }}
              className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col gap-6 relative overflow-hidden"
              style={{ boxShadow: '0 20px 60px rgba(2,6,26,0.1)' }}>

              <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none rounded-bl-full"
                style={{ background: 'radial-gradient(circle at top right, rgba(1,97,254,0.06), transparent 70%)' }} />

              {/* Trust items */}
              <ul className="flex flex-col gap-3">
                {trustItems.map((item, i) => (
                  <li key={i} data-reveal
                    style={{ opacity: 0, transform: 'translateY(10px)', transition: `opacity 0.4s ease ${0.18 + i * 0.07}s, transform 0.4s ease ${0.18 + i * 0.07}s` }}
                    className="flex items-center gap-3 text-[13px] text-slate-700 font-medium">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(1,97,254,0.1)', color: '#0161FE' }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="h-px bg-slate-200" />

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <Link href="/demo"
                  className="inline-flex items-center justify-center gap-2.5 text-[13.5px] font-semibold tracking-wide rounded-full px-6 py-3.5 transition-all duration-200 hover:-translate-y-[1px]"
                  style={{ background: '#0161FE', color: '#ffffff', boxShadow: '0 8px 24px -8px rgba(1,97,254,0.45)' }}>
                  Request a Private Demo <ArrowIcon />
                </Link>
                <Link href="/contact"
                  className="cta2-btn-secondary inline-flex items-center justify-center gap-2.5 text-[13.5px] font-semibold tracking-wide rounded-full px-6 py-3.5 border-[1.5px]"
                  style={{ color: '#0B1B3F', borderColor: '#CBD5E1', background: 'transparent' }}>
                  Talk to an Expert <ArrowIcon />
                </Link>
              </div>

              <p className="text-[11.5px] text-slate-400 text-center">No credit card required · Responds within 24 hours</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}