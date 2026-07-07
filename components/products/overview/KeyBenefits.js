'use client';
import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

const BENEFITS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    num: '01',
    title: 'One Unified Ecosystem',
    desc: 'All SecureAAI platforms share a single data layer — video management, ANPR, parking, and tracking operate as one intelligence network.',
    tag: 'Core Platform',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    num: '02',
    title: 'Real-Time Intelligence',
    desc: 'Edge AI processing delivers sub-second response times — alerts, detections, and analytics available the moment an event occurs.',
    tag: 'AI Engine',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    num: '03',
    title: 'Open Architecture',
    desc: 'REST APIs, SDKs, and native integrations mean SecureAAI fits your existing technology stack without ripping and replacing.',
    tag: 'Integration',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    num: '04',
    title: 'Enterprise Scalability',
    desc: 'From a single site to thousands of cameras across multiple countries — horizontal scaling without performance compromise.',
    tag: 'Infrastructure',
  },
  // {
  //   icon: (
  //     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  //       <circle cx="12" cy="12" r="3"/>
  //       <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
  //     </svg>
  //   ),
  //   num: '05',
  //   title: 'Self-Learning AI',
  //   desc: 'Adaptive ML models continuously improve detection accuracy — reducing false positives and tuning to your environment.',
  //   tag: 'Machine Learning',
  // },
  // {
  //   icon: (
  //     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  //       <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  //     </svg>
  //   ),
  //   num: '06',
  //   title: 'On-Premise & Cloud',
  //   desc: 'Deploy fully on-premise for air-gapped environments, in the cloud for distributed teams, or in a hybrid configuration.',
  //   tag: 'Deployment',
  // },
];

const STATS = [
  { val: '10K+', label: 'Camera Nodes Supported' },
  { val: '99.4%', label: 'Detection Accuracy' },
  { val: '<50ms', label: 'Response Latency' },
  { val: '100+', label: 'Native Integrations' },
];

const PRODUCTS_SUMMARY = [
  { name: 'SiVMS™', sub: 'Enterprise Video Management', href: '/products/sivms' },
  { name: 'Si.PRO™', sub: 'ANPR & Traffic Intelligence', href: '/products/sipro' },
  { name: 'ParkSi™', sub: 'Smart Parking Management', href: '/products/parksi' },
  { name: 'TRACKSi™', sub: 'Real-Time Asset Tracking', href: '/products/tracksi' },
];

/* ─── Animated counter ─── */
function AnimatedNumber({ target }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });

  useEffect(() => {
    if (!inView) return;
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ''));
    if (isNaN(numeric)) { setDisplay(target); return; }
    const prefix = target.match(/^[^0-9]*/)?.[0] || '';
    const suffix = target.match(/[^0-9.]+$/)?.[0] || '';
    let current = 0;
    const duration = 1400, step = 16, steps = duration / step;
    const timer = setInterval(() => {
      current++;
      const val = Math.round((current / steps) * numeric * 10) / 10;
      setDisplay(`${prefix}${val % 1 === 0 ? Math.round(val) : val}${suffix}`);
      if (current >= steps) { setDisplay(target); clearInterval(timer); }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{display}</span>;
}

/* ─── Stat cell with 3D tilt ─── */
function StatCell({ s, i }) {
  const cellRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const r = cellRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cellRef.current.style.transform = `perspective(400px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(10px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    cellRef.current.style.transform = '';
  }, []);

  return (
    <motion.div
      ref={cellRef}
      className="kb4-stat-cell"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="kb4-stat-val"><AnimatedNumber target={s.val} /></span>
      <span className="kb4-stat-label">{s.label}</span>
    </motion.div>
  );
}

/* ─── Benefit card (3D tilt, card layout) ─── */
function BenefitCard({ b, i }) {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const r = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cardRef.current.style.transform = `perspective(700px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateZ(14px)`;
  }, []);

  const handleMouseEnter = useCallback(() => setHovered(true), []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    if (cardRef.current) cardRef.current.style.transform = '';
  }, []);

  return (
    <motion.div
      ref={(el) => { ref.current = el; cardRef.current = el; }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: hovered ? '#fff' : '#fff',
        border: `1.5px solid ${hovered ? '#bfdbfe' : '#e2e8f0'}`,
        borderRadius: 16,
        padding: '28px 28px 24px',
        position: 'relative',
        overflow: 'hidden',
        transformStyle: 'preserve-3d',
        transition: 'border-color 0.3s, box-shadow 0.35s cubic-bezier(0.22,1,0.36,1)',
        boxShadow: hovered
          ? '0 0 0 1px rgba(1,97,254,0.1), 0 16px 48px rgba(1,97,254,0.12), 0 4px 12px rgba(0,0,0,0.06)'
          : '0 1px 4px rgba(0,0,0,0.04)',
        cursor: 'default',
        willChange: 'transform',
      }}
    >
      {/* Top gradient accent on hover */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: 'linear-gradient(90deg, #0161FE, #38bdf8)',
        borderRadius: '16px 16px 0 0',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s',
      }} />

      {/* Subtle dot pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(1,97,254,0.04) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }} />

      {/* Header row: icon + number */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        {/* 3D icon box */}
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: hovered ? '#0161FE' : '#eff6ff',
          border: `1.5px solid ${hovered ? '#0161FE' : '#bfdbfe'}`,
          color: hovered ? '#fff' : '#0161FE',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
          transformStyle: 'preserve-3d',
          transform: hovered ? 'rotateY(18deg) rotateX(-10deg) scale(1.1)' : 'none',
          boxShadow: hovered
            ? '4px 4px 0 rgba(1,97,254,0.18), 0 6px 20px rgba(1,97,254,0.3)'
            : 'none',
        }}>
          {b.icon}
        </div>

        {/* Number */}
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.58rem', fontWeight: 600,
          letterSpacing: '0.12em',
          color: hovered ? '#0161FE' : '#cbd5e1',
          transition: 'color 0.25s',
        }}>{b.num}</span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '1rem', fontWeight: 700,
        color: hovered ? '#0161FE' : '#0f172a',
        margin: '0 0 10px',
        letterSpacing: '-0.015em',
        transition: 'color 0.25s',
        lineHeight: 1.25,
      }}>{b.title}</h3>

      {/* Desc */}
      <p style={{
        fontSize: '0.81rem', color: '#64748b',
        lineHeight: 1.75, margin: '0 0 20px',
      }}>{b.desc}</p>

      {/* Tag pill */}
      <span style={{
        display: 'inline-block',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.56rem', fontWeight: 600,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: hovered ? '#0161FE' : '#94a3b8',
        background: hovered ? 'rgba(1,97,254,0.07)' : '#f1f5f9',
        border: `1px solid ${hovered ? 'rgba(1,97,254,0.2)' : 'transparent'}`,
        borderRadius: 9999,
        padding: '4px 12px',
        transition: 'all 0.25s',
      }}>{b.tag}</span>
    </motion.div>
  );
}

/* ─── Product card with 3D tilt ─── */
function ProductCard({ p, i }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const r = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cardRef.current.style.transform = `perspective(400px) rotateX(${-y * 6}deg) rotateY(${x * 6 - 4}deg) translateZ(12px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    cardRef.current.style.transform = '';
  }, []);

  return (
    <motion.a
      ref={cardRef}
      href={p.href}
      className="kb4-product-card"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="kb4-prod-dot" />
      <div style={{ flex: 1 }}>
        <div className="kb4-prod-name">{p.name}</div>
        <div className="kb4-prod-sub">{p.sub}</div>
      </div>
      <svg className="kb4-prod-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
      </svg>
    </motion.a>
  );
}

/* ─── Main export ─── */
export default function KeyBenefits() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .kb4-root { font-family: 'DM Sans', sans-serif; background: #f8fafc; }

        /* ── Stats bar ── */
        .kb4-stats-bar {
          background: #fff;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          perspective: 1200px;
        }
        .kb4-stats-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 clamp(20px,4vw,40px);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width:640px) { .kb4-stats-inner { grid-template-columns: repeat(2,1fr); } }

        .kb4-stat-cell {
          padding: 28px 0 28px 28px;
          border-right: 1px solid #e2e8f0;
          position: relative; overflow: hidden;
          transform-style: preserve-3d;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s;
          cursor: default; will-change: transform;
        }
        .kb4-stat-cell:first-child { border-left: 1px solid #e2e8f0; }
        .kb4-stat-cell::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(1,97,254,0.06) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.3s; pointer-events: none;
        }
        .kb4-stat-cell:hover { box-shadow: 0 12px 40px rgba(1,97,254,0.12), 0 2px 8px rgba(0,0,0,0.06); z-index: 2; }
        .kb4-stat-cell:hover::after { opacity: 1; }

        .kb4-stat-val {
          font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800;
          color: #0161FE; letter-spacing: -0.03em; line-height: 1;
          display: block; margin-bottom: 4px; font-family: 'DM Sans', sans-serif;
        }
        .kb4-stat-label { font-size: 0.72rem; color: #94a3b8; letter-spacing: 0.02em; }

        /* ── Section ── */
        .kb4-section { max-width: 1280px; margin: 0 auto; padding: clamp(60px,7vw,100px) clamp(20px,4vw,40px); }

        .kb4-header {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 40px 80px; align-items: end;
          padding-bottom: 48px; border-bottom: 1px solid #e2e8f0;
          margin-bottom: 48px;
        }
        @media (max-width:768px) { .kb4-header { grid-template-columns: 1fr; } }

        .kb4-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase; color: #0161FE;
          display: inline-flex; align-items: center; gap: 10px; margin-bottom: 16px;
        }
        .kb4-eyebrow::before { content: ''; width: 22px; height: 1.5px; background: #0161FE; border-radius: 2px; }

        .kb4-headline {
          font-size: clamp(2rem,4.5vw,3.6rem); font-weight: 800; color: #0f172a;
          line-height: 1.06; letter-spacing: -0.025em; margin: 0;
        }
        .kb4-headline-blue { color: #0161FE; }

        /* ── 3-card × 2-col benefit grid ── */
        .kb4-benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(3, auto);
          gap: 20px;
        }
        @media (max-width: 768px) {
          .kb4-benefits-grid { grid-template-columns: 1fr; }
        }

        /* ── Ecosystem strip ── */
        .kb4-eco {
          background: linear-gradient(135deg, #0042b3 0%, #0161FE 100%);
          position: relative; overflow: hidden;
        }
        .kb4-eco::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size: 24px 24px; pointer-events: none;
        }
        .kb4-eco::after {
          content: ''; position: absolute; top: 0; left: -100%; width: 60%; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent);
          animation: kb4-travel 3.5s ease-in-out infinite;
        }
        @keyframes kb4-travel { 0% { left: -60%; } 100% { left: 140%; } }

        .kb4-eco-orb {
          position: absolute; right: -60px; top: 50%; transform: translateY(-50%);
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, rgba(99,179,254,0.28), rgba(1,97,254,0.04) 60%, transparent);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: inset 0 0 60px rgba(99,179,254,0.14), inset -20px -20px 40px rgba(0,42,179,0.28), 0 0 80px rgba(1,97,254,0.2);
          pointer-events: none;
        }
        .kb4-eco-orb::before {
          content: ''; position: absolute; top: 18%; left: 18%;
          width: 36%; height: 20%; border-radius: 50%;
          background: rgba(255,255,255,0.12); filter: blur(6px); transform: rotate(-35deg);
        }

        .kb4-eco-inner {
          position: relative; z-index: 1; max-width: 1280px; margin: 0 auto;
          padding: clamp(48px,6vw,80px) clamp(20px,4vw,40px);
          display: grid; grid-template-columns: 1fr 1fr; gap: 48px 80px; align-items: center;
        }
        @media (max-width:768px) { .kb4-eco-inner { grid-template-columns: 1fr; } }

        .kb4-eco-eyebrow {
          font-family: 'JetBrains Mono', monospace; font-size: 0.58rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase; color: rgba(219,234,254,0.65);
          display: inline-flex; align-items: center; gap: 10px; margin-bottom: 18px;
        }
        .kb4-eco-eyebrow::before { content: ''; width: 18px; height: 1.5px; background: rgba(219,234,254,0.4); border-radius: 2px; }

        .kb4-eco-headline {
          font-size: clamp(1.9rem, 4vw, 3rem); font-weight: 800; color: #fff;
          line-height: 1.06; letter-spacing: -0.02em; margin: 0 0 14px;
        }
        .kb4-eco-body { font-size: 0.84rem; color: rgba(219,234,254,0.75); line-height: 1.78; max-width: 380px; margin: 0 0 32px; }

        /* ── 3D product cards ── */
        .kb4-product-list { display: flex; flex-direction: column; gap: 8px; }
        .kb4-product-card {
          display: flex; align-items: center; gap: 14px; padding: 14px 16px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px; text-decoration: none;
          transform-style: preserve-3d;
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
          position: relative; overflow: hidden; will-change: transform;
        }
        .kb4-product-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.3s; pointer-events: none;
        }
        .kb4-product-card:hover {
          background: rgba(255,255,255,0.10); border-color: rgba(255,255,255,0.25);
          box-shadow: 6px 0 24px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
        }
        .kb4-product-card:hover::before { opacity: 1; }
        .kb4-product-card:hover .kb4-prod-dot { background: #fff; transform: scale(1.5); box-shadow: 0 0 8px rgba(255,255,255,0.5); }
        .kb4-product-card:hover .kb4-prod-name { color: #fff; }
        .kb4-product-card:hover .kb4-prod-arrow { color: #fff; transform: translateX(4px); }

        .kb4-prod-dot {
          width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
          background: rgba(255,255,255,0.25);
          transition: background 0.22s, transform 0.22s, box-shadow 0.22s;
        }
        .kb4-prod-name {
          font-family: 'JetBrains Mono', monospace; font-size: 0.86rem; font-weight: 600;
          color: rgba(255,255,255,0.9); transition: color 0.22s;
        }
        .kb4-prod-sub { font-size: 0.7rem; color: rgba(219,234,254,0.6); }
        .kb4-prod-arrow { color: rgba(255,255,255,0.3); flex-shrink: 0; transition: transform 0.22s, color 0.22s; }

        /* ── CTAs ── */
        .kb4-cta-white {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: #0161FE; background: #fff; border: 1.5px solid #fff; border-radius: 9999px;
          padding: 12px 28px; text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
        }
        .kb4-cta-white:hover { background: #eff6ff; transform: translateY(-3px) scale(1.02); box-shadow: 0 12px 32px rgba(0,0,0,0.18); }
        .kb4-cta-white svg { transition: transform 0.2s; }
        .kb4-cta-white:hover svg { transform: translateX(3px); }

        .kb4-cta-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.82); background: transparent;
          border: 1.5px solid rgba(255,255,255,0.28); border-radius: 9999px;
          padding: 12px 28px; text-decoration: none;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .kb4-cta-ghost:hover { border-color: rgba(255,255,255,0.65); color: #fff; transform: translateY(-3px); }

        @media (max-width: 600px) {
          .kb4-stat-cell { padding-left: 16px; }
          .kb4-prod-sub { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .kb4-eco::after { animation: none; }
          .kb4-stat-cell, .kb4-product-card { transition: none; }
        }
      `}</style>

      <div className="kb4-root">

        {/* ── Stats bar ── */}
        <div className="kb4-stats-bar">
          <div className="kb4-stats-inner">
            {STATS.map((s, i) => (
              <StatCell key={s.label} s={s} i={i} />
            ))}
          </div>
        </div>

        {/* ── Main section ── */}
        <div className="kb4-section">

          {/* Two-col header */}
          <div className="kb4-header">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="kb4-eyebrow">Platform Architecture</p>
              <h2 className="kb4-headline">
                One Platform.<br />
                <span className="kb4-headline-blue">Unlimited</span> Possibilities.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.8, margin: 0, paddingBottom: 4 }}
            >
              Modern organizations need connected ecosystems — not isolated applications. SecureAAI delivers advanced analytics, centralized management, and intelligent automation in a single enterprise platform.
            </motion.p>
          </div>

          {/* 3 × 2 benefit card grid */}
          <div className="kb4-benefits-grid">
            {BENEFITS.map((b, i) => (
              <BenefitCard key={b.title} b={b} i={i} />
            ))}
          </div>

        </div>

        {/* ── Ecosystem strip ── */}
        <motion.div
          className="kb4-eco"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="kb4-eco-orb" />

          <div className="kb4-eco-inner">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="kb4-eco-eyebrow">One Ecosystem. Infinite Intelligence.</p>
              <h3 className="kb4-eco-headline">
                Explore the Full<br />SecureAAI Software Suite
              </h3>
              <p className="kb4-eco-body">
                SecureAAI platforms are built to work together — combining video management, vehicle intelligence, parking operations, real-time tracking, and AI analytics into one intelligent platform.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <a href="#demo" className="kb4-cta-white">
                  Request a Demo
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
                <a href="/contact" className="kb4-cta-ghost">Talk to Sales</a>
              </div>
            </motion.div>

            <motion.div
              className="kb4-product-list"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {PRODUCTS_SUMMARY.map((p, i) => (
                <ProductCard key={p.name} p={p} i={i} />
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </>
  );
}