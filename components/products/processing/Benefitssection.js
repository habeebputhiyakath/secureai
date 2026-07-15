'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const benefits = [
  {
    channel: 'CH01',
    title: 'Faster Processing',
    desc: 'Hardware-accelerated compute pipelines cut AI inference time from seconds to milliseconds — enabling real-time event detection even across thousands of concurrent video feeds.',
    metric: '20× faster',
    metricLabel: 'vs CPU-only systems',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    color: '#6d28d9',
    bg: 'rgba(109,40,217,0.08)',
    border: 'rgba(109,40,217,0.15)',
  },
  {
    channel: 'CH02',
    title: 'Reduced Latency',
    desc: 'Edge processing eliminates cloud round-trips for on-site response times cloud-dependent solutions cannot match.',
    metric: '< 50ms',
    metricLabel: 'end-to-end latency',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: '#0161FE',
    bg: 'rgba(1,97,254,0.08)',
    border: 'rgba(1,97,254,0.15)',
  },
  {
    channel: 'CH03',
    title: 'Enhanced Reliability',
    desc: 'Redundant power, RAID storage, and watchdog timers keep units running through partial hardware failure.',
    metric: '99.99%',
    metricLabel: 'uptime SLA',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.15)',
  },
  {
    channel: 'CH04',
    title: 'Enterprise Scalability',
    desc: 'Scale from one edge unit to petabyte clusters and multi-GPU farms without changing software.',
    metric: 'Unlimited',
    metricLabel: 'horizontal scale',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    color: '#d97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.15)',
  },
  {
    title: 'AI Optimization',
    desc: 'NPU and GPU architectures are pre-tuned for SecureAAI model zoo — facial recognition, ANPR, and behaviour analytics run at maximum throughput with no manual configuration.',
    metric: '50+ Models',
    metricLabel: 'pre-optimised for deployment',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.08)',
    border: 'rgba(14,165,233,0.15)',
  },
];

// Counts the numeric portion of a metric up from 0 once it enters view,
// keeping any prefix/suffix (×, <, %, +) static.
function CountUp({ value, duration = 1.3 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const match = value.match(/^([^\d]*)([\d.]+)([^\d]*.*)$/);
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!isInView || !match) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
    let start = null;
    const durMs = duration * 1000;
    function step(ts) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / durMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref}>{display}</span>;
}

// Live ticking mm:ss counter — reads like a real camera feed timestamp.
function FeedClock({ startAt = 0 }) {
  const [seconds, setSeconds] = useState(startAt);
  useEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');
  return <>{mm}:{ss}</>;
}

export default function ProcessingBenefitsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('pb-vis');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.pb-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pb-rev {
          opacity: 0; transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .pb-rev.pb-vis { opacity: 1; transform: none; }
        .pb-d0{transition-delay:0s} .pb-d1{transition-delay:0.08s}
        .pb-d2{transition-delay:0.16s}

        .pb-metric { font-family: 'JetBrains Mono', monospace; }

        /* ambient security-scan sweep drifting down the section */
        @keyframes pb-scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        .pb-scanline { animation: pb-scan 7s linear infinite; }

        /* blinking rec-style status dot */
        @keyframes pb-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .pb-dot { animation: pb-pulse 1.6s ease-in-out infinite; }
        @keyframes pb-ping { 0% { transform: scale(1); opacity: 0.5; } 75%, 100% { transform: scale(2.2); opacity: 0; } }
        .pb-ring { animation: pb-ping 1.8s cubic-bezier(0,0,0.2,1) infinite; }

        /* monitor-wall bento layout: one hero feed + three smaller feeds,
           echoing a CCTV quad-split display */
        .pb-wall { display: grid; gap: 1.25rem; margin-bottom: 1.5rem; }
        @media (min-width: 1024px) {
          .pb-wall {
            grid-template-columns: 1.35fr 1fr 1fr;
            grid-template-rows: auto auto;
            grid-template-areas:
              "big   ch02 ch02"
              "big   ch03 ch04";
          }
          .pb-area-ch01 { grid-area: big; }
          .pb-area-ch02 { grid-area: ch02; }
          .pb-area-ch03 { grid-area: ch03; }
          .pb-area-ch04 { grid-area: ch04; }
        }

        .pb-card { position: relative; transition: box-shadow 0.25s, transform 0.25s; height: 100%; }
        .pb-card:hover { box-shadow: 0 14px 44px rgba(0,0,0,0.10) !important; transform: translateY(-4px); }

        /* viewfinder corner brackets — always faintly present, like a feed frame */
        .pb-bracket { position: absolute; width: 18px; height: 18px; opacity: 0.35; transition: opacity 0.3s ease, width 0.3s ease, height 0.3s ease; }
        .pb-card:hover .pb-bracket { opacity: 1; width: 24px; height: 24px; }
        .pb-bracket.tl { top: -1px; left: -1px; border-top: 2px solid; border-left: 2px solid; border-radius: 10px 0 0 0; }
        .pb-bracket.tr { top: -1px; right: -1px; border-top: 2px solid; border-right: 2px solid; border-radius: 0 10px 0 0; }
        .pb-bracket.bl { bottom: -1px; left: -1px; border-bottom: 2px solid; border-left: 2px solid; border-radius: 0 0 0 10px; }
        .pb-bracket.br { bottom: -1px; right: -1px; border-bottom: 2px solid; border-right: 2px solid; border-radius: 0 0 10px 0; }

        /* scan sweep across card on hover */
        .pb-sweep { position: absolute; inset: 0; overflow: hidden; border-radius: 1rem; pointer-events: none; }
        .pb-sweep::after {
          content: ''; position: absolute; left: 0; right: 0; height: 55%; top: -60%;
          background: linear-gradient(180deg, transparent, var(--sweep-color), transparent);
          transition: top 0.85s cubic-bezier(0.22,1,0.36,1);
        }
        .pb-card:hover .pb-sweep::after { top: 105%; }

        .pb-icon-wrap { transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1); }
        .pb-card:hover .pb-icon-wrap { transform: scale(1.08) rotate(-6deg); }

        .pb-feedtag { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em; }

        @media (prefers-reduced-motion: reduce) {
          .pb-scanline, .pb-dot, .pb-ring { animation: none !important; }
          .pb-sweep::after { transition: none; }
          .pb-icon-wrap { transition: none; }
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-slate-100"
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '28px 28px', opacity: 0.9,
          }} />
        {/* Blob */}
        <div className="absolute top-0 left-0 w-[520px] h-[520px] rounded-full pointer-events-none opacity-[0.06]"
          style={{ background: 'radial-gradient(circle at 40% 40%, #6d28d9, transparent 70%)' }} />
        {/* Ambient scan sweep */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
          <div className="pb-scanline w-full h-40"
            style={{ background: 'linear-gradient(180deg, transparent, #0161FE, transparent)' }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
            <div>
              <div className="pb-rev pb-d0 mb-5 inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(109,40,217,0.08)', color: '#6d28d9',
                  border: '1px solid rgba(109,40,217,0.2)',
                  fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="pb-ring absolute inline-flex h-full w-full rounded-full" style={{ background: '#6d28d9' }} />
                  <span className="pb-dot relative inline-flex rounded-full h-2 w-2" style={{ background: '#6d28d9' }} />
                </span>
                Benefits.log
              </div>
              <h2 className="pb-rev pb-d1 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                The Competitive<br />
                <span style={{ color: '#6d28d9' }}>Edge You Need</span>
              </h2>
            </div>
            <p className="pb-rev pb-d2 text-slate-500 text-base sm:text-lg leading-relaxed lg:pb-2">
              Every SecureAAI Processing Unit is designed from the ground up to deliver measurable operational advantages — not just raw compute specs.
            </p>
          </div>

          {/* Monitor wall — 1 hero feed + 3 smaller feeds, quad-split style */}
          <div className="pb-wall">
            {benefits.slice(0, 4).map((b, i) => {
              const isHero = i === 0;
              return (
                <motion.div
                  key={b.channel}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  className={`pb-card pb-area-${b.channel.toLowerCase()} bg-white rounded-2xl border border-slate-200 flex flex-col`}
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)', '--sweep-color': `${b.color}1f` }}
                >
                  <span className="pb-bracket tl" style={{ borderColor: b.color }} />
                  <span className="pb-bracket tr" style={{ borderColor: b.color }} />
                  <span className="pb-bracket bl" style={{ borderColor: b.color }} />
                  <span className="pb-bracket br" style={{ borderColor: b.color }} />
                  <div className="pb-sweep" />

                  {/* channel / timestamp overlay, like a live camera feed label */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2 py-1 rounded-md"
                    style={{ background: 'rgba(15,23,42,0.75)' }}
                  >
                    <span className="pb-dot w-1.5 h-1.5 rounded-full" style={{ background: '#ef4444' }} />
                    <span className="pb-feedtag text-[10px] font-bold text-white">
                      {b.channel} · <FeedClock startAt={i * 23} />
                    </span>
                  </div>

                  <div className={`relative flex-1 flex flex-col ${isHero ? 'p-8 pt-12 lg:p-9 lg:pt-14' : 'p-6 pt-11'}`}>
                    <div className={`pb-icon-wrap flex-shrink-0 rounded-xl flex items-center justify-center mb-4 ${isHero ? 'w-16 h-16' : 'w-11 h-11'}`}
                      style={{ background: b.bg, color: b.color, border: `1px solid ${b.border}` }}
                    >
                      {b.icon}
                    </div>

                    <div className={`flex items-start justify-between gap-3 mb-2 ${isHero ? '' : 'flex-col'}`}>
                      <h3 className={`font-extrabold text-slate-900 ${isHero ? 'text-2xl' : 'text-sm'}`}>{b.title}</h3>
                      <div className={isHero ? 'text-right' : ''}>
                        <p className={`pb-metric font-bold leading-none ${isHero ? 'text-3xl' : 'text-base'}`} style={{ color: b.color }}>
                          <CountUp value={b.metric} />
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{b.metricLabel}</p>
                      </div>
                    </div>

                    <p className={`text-slate-500 leading-relaxed ${isHero ? 'text-sm mt-2' : 'text-xs mt-1'}`}>
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 5th benefit — AI Optimisation — wide accent card (unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="pb-card rounded-2xl border overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0a1f3b 0%, #0c2d56 100%)',
              borderColor: 'rgba(14,165,233,0.25)',
              boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left — text */}
              <div className="p-8 lg:p-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(14,165,233,0.15)', color: '#38bdf8', border: '1px solid rgba(14,165,233,0.3)' }}
                >
                  {benefits[4].icon}
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">{benefits[4].title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{benefits[4].desc}</p>
                <div className="flex items-baseline gap-2">
                  <p className="pb-metric text-3xl font-bold text-sky-400">{benefits[4].metric}</p>
                  <p className="text-slate-400 text-xs">{benefits[4].metricLabel}</p>
                </div>
              </div>
              {/* Right — visual data bars */}
              <div className="p-8 lg:p-10 flex flex-col justify-center gap-4">
                {[
                  { label: 'Facial Recognition', pct: 95, color: '#7c3aed' },
                  { label: 'ANPR Accuracy',       pct: 99, color: '#0161FE' },
                  { label: 'Object Detection',    pct: 92, color: '#059669' },
                  { label: 'Crowd Analytics',     pct: 88, color: '#d97706' },
                ].map((bar, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-slate-400 font-medium">{bar.label}</span>
                      <span className="text-xs font-bold text-white" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{bar.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: bar.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + j * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}