'use client';
import { useEffect, useRef, useState } from 'react';

const trustItems = [
  'No setup fees',
  '30-day pilot program',
  'Dedicated onboarding',
  'SIRA & ISO 27001 certified',
];

const stats = [
  { value: '500+', label: 'Enterprise clients' },
  { value: '99.9%', label: 'Uptime guarantee' },
  { value: '4 wks', label: 'Average go-live' },
];

function ArrowIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

export default function CTASection() {
  const ref       = useRef(null);
  const canvasRef = useRef(null);
  const [counted, setCounted] = useState(false);
  const [counts,  setCounts]  = useState([0, 0, 0]);

  /* ── Particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const BRAND = '0161FE';
    const hexToRgb = h => [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
    const [r,g,b] = hexToRgb(BRAND);

    const count = 38;
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2.2 + 0.8,
      alpha: Math.random() * 0.5 + 0.15,
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
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${r},${g},${b},${(1 - dist/130) * 0.12})`;
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

  const displayStats = [
    { value: counts[0] >= 500 ? '500+' : `${counts[0]}+`, label: 'Enterprise clients' },
    { value: counts[1] >= 999 ? '99.9%' : `${(counts[1]/10).toFixed(1)}%`, label: 'Uptime guarantee' },
    { value: counts[2] >= 4 ? '4 wks' : `${counts[2]} wks`, label: 'Average go-live' },
  ];

  return (
    <>
      <style>{`
        @keyframes cta-line   { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes cta-dot    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.85)} }
        @keyframes cta-glow   { 0%,100%{box-shadow:0 0 0 0 rgba(1,97,254,0)} 50%{box-shadow:0 0 0 8px rgba(1,97,254,0.12)} }
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

      <section id="demo" ref={ref} className="relative py-16 lg:py-24 bg-white border-t border-slate-200 overflow-hidden">

        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.7 }}
        />

        {/* Blue accent blob top-right */}
        <div
          className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(1,97,254,0.07) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(1,97,254,0.05) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Two-column grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-20">

            {/* ── Left: heading ── */}
            <div>
              {/* Animated badge */}
              <div
                data-reveal
                style={{ opacity:0, transform:'translateY(16px)', transition:'opacity 0.5s ease, transform 0.5s ease' }}
                className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border border-slate-200 bg-white"
                style={{ animation: 'cta-badge 0.6s cubic-bezier(0.22,1,0.36,1) both 0.05s' }}
              >
                {/* Pulsing dot with ring */}
                <span className="relative flex items-center justify-center w-3 h-3">
                  <span className="cta-ring absolute w-3 h-3 rounded-full border border-emerald-400" style={{ top:'50%', left:'50%' }} />
                  <span className="dot-pulse w-2 h-2 rounded-full bg-emerald-500 relative z-10" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Available for Enterprise Deployment
                </span>
              </div>

              {/* Headline — word-by-word mask animation */}
              <div className="overflow-hidden mb-2">
                <h2 className="cta-word-1 text-4xl lg:text-5xl xl:text-[3.4rem] font-bold tracking-tight leading-[1.1] text-slate-900">
                  Ready to Transform
                </h2>
              </div>
              <div className="overflow-hidden mb-2">
                <h2 className="cta-word-2 text-4xl lg:text-5xl xl:text-[3.4rem] font-bold tracking-tight leading-[1.1]" style={{ color: '#0161FE' }}>
                  Your Security
                </h2>
              </div>
              <div className="overflow-hidden mb-8">
                <h2 className="cta-word-3 text-4xl lg:text-5xl xl:text-[3.4rem] font-bold tracking-tight leading-[1.1] text-slate-900">
                  Operations?
                </h2>
              </div>

              {/* Animated rule */}
              <div
                className="mb-7 h-[2px] w-14 cta-line"
                style={{
                  background: '#0161FE',
                  transformOrigin: 'left',
                  animation: 'cta-line 1s cubic-bezier(0.22,1,0.36,1) both 0.7s',
                }}
              />

              <p
                data-reveal
                style={{ opacity:0, transform:'translateY(12px)', transition:'opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s' }}
                className="text-slate-500 text-[15px] leading-relaxed max-w-sm mb-8"
              >
                Join 500+ enterprises and government organisations that trust SecureAAI for mission-critical security infrastructure.
              </p>

              {/* Inline stats — counter animation */}
              <div className="flex gap-8">
                {displayStats.map((s, i) => (
                  <div key={i} className={`cta-stat-${i+1} flex flex-col gap-0.5`}>
                    <span className="text-[26px] font-bold tracking-tight" style={{ color: '#0161FE' }}>{s.value}</span>
                    <span className="text-[11px] text-slate-400 font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: CTA card ── */}
            <div
              data-reveal
              style={{
                opacity:0,
                transform:'translateY(32px) scale(0.97)',
                transition:'opacity 0.65s cubic-bezier(0.22,1,0.36,1) 0.12s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.12s',
              }}
              className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col gap-6 relative overflow-hidden"
            >
              {/* Blue corner accent */}
              <div
                className="absolute top-0 right-0 w-40 h-40 pointer-events-none rounded-bl-full"
                style={{ background: 'radial-gradient(circle at top right, rgba(1,97,254,0.07), transparent 70%)' }}
              />

              {/* Trust checklist */}
              <ul className="flex flex-col gap-3">
                {trustItems.map((item, i) => (
                  <li
                    key={i}
                    data-reveal
                    style={{
                      opacity:0,
                      transform:'translateY(10px)',
                      transition:`opacity 0.4s ease ${0.18 + i * 0.07}s, transform 0.4s ease ${0.18 + i * 0.07}s`,
                    }}
                    className="flex items-center gap-3 text-[13px] text-slate-600 font-medium"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white"
                      style={{ background: '#0161FE' }}
                    >
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="h-px bg-slate-100" />

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="btn-glow inline-flex items-center justify-center gap-2.5 text-[13.5px] font-semibold tracking-wide text-white rounded-full px-6 py-3.5 transition-all duration-200 hover:opacity-90 hover:-translate-y-[1px]"
                  style={{ background: '#0161FE' }}
                >
                  Request a Private Demo <ArrowIcon />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2.5 text-[13.5px] font-semibold tracking-wide rounded-full px-6 py-3.5 border-[1.5px] transition-all duration-200 hover:-translate-y-[1px]"
                  style={{ color: '#0161FE', borderColor: '#0161FE' }}
                  onMouseEnter={e => { e.currentTarget.style.background='#0161FE'; e.currentTarget.style.color='#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#0161FE'; }}
                >
                  Talk to an Expert <ArrowIcon />
                </a>
              </div>

              {/* Bottom note */}
              <p className="text-[11.5px] text-slate-400 text-center">
                No credit card required · Responds within 24 hours
              </p>
            </div>
          </div>

          {/* ── Quote strip ── */}
          <div
            data-reveal
            style={{ opacity:0, transform:'translateY(16px)', transition:'opacity 0.5s ease 0.35s, transform 0.5s ease 0.35s' }}
            className="border-t border-slate-200 pt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
          >
            <span className="text-6xl leading-none font-serif text-slate-200 shrink-0 select-none">"</span>
            <div className="flex-1">
              <p className="text-[14.5px] text-slate-600 leading-relaxed italic mb-3">
                SecureAAI delivered beyond our expectations — from deployment speed to ongoing support, it has been a seamless experience from day one.
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg text-white text-[11px] font-bold flex items-center justify-center"
                  style={{ background: '#0161FE' }}
                >
                  DC
                </div>
                <div>
                  <p className="text-[12.5px] font-bold text-slate-900">David Chen</p>
                  <p className="text-[11.5px] text-slate-400">CSO, Global Logistics Corporation</p>
                </div>
              </div>
            </div>
            <div className="shrink-0 flex flex-col gap-1 sm:text-right">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Get in touch</span>
              <a
                href="mailto:sales@secureaai.com"
                className="text-[13px] font-semibold hover:underline underline-offset-2 transition-colors"
                style={{ color: '#0161FE' }}
              >
                sales@secureaai.com
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}