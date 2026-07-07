'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Faster Processing',
    desc: 'Hardware-accelerated compute pipelines cut AI inference time from seconds to milliseconds — enabling real-time event detection even across thousands of concurrent video feeds.',
    metric: '20× faster',
    metricLabel: 'vs CPU-only systems',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    color: '#6d28d9',
    bg: 'rgba(109,40,217,0.08)',
    border: 'rgba(109,40,217,0.15)',
  },
  {
    title: 'Reduced Latency',
    desc: 'Edge processing units eliminate cloud round-trips. Events are detected, classified, and actioned on-site — response times that cloud-dependent solutions simply cannot match.',
    metric: '< 50ms',
    metricLabel: 'end-to-end event latency',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: '#0161FE',
    bg: 'rgba(1,97,254,0.08)',
    border: 'rgba(1,97,254,0.15)',
  },
  {
    title: 'Enhanced Reliability',
    desc: 'Redundant power supplies, RAID-protected storage, and hardware watchdog timers ensure continuous operation with 99.99% uptime — even during partial hardware failures.',
    metric: '99.99%',
    metricLabel: 'uptime SLA',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.15)',
  },
  {
    title: 'Enterprise Scalability',
    desc: 'Start with a single edge unit and scale horizontally to petabyte-class storage clusters and multi-GPU server farms — without changing software or retraining your team.',
    metric: 'Unlimited',
    metricLabel: 'horizontal scale',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

        .pb-card {
          transition: box-shadow 0.22s, transform 0.22s;
          cursor: default;
        }
        .pb-card:hover {
          box-shadow: 0 10px 40px rgba(0,0,0,0.09) !important;
          transform: translateY(-4px);
        }
        .pb-metric {
          font-family: 'JetBrains Mono', monospace;
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

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
            <div>
              <div className="pb-rev pb-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(109,40,217,0.08)', color: '#6d28d9',
                  border: '1px solid rgba(109,40,217,0.2)',
                  fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}
              >
                Benefits
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

          {/* Benefits — first 4 in a 2×2, 5th full-width accent row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
            {benefits.slice(0, 4).map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="pb-card bg-white rounded-2xl p-7 border border-slate-200"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: b.bg, color: b.color, border: `1px solid ${b.border}` }}
                  >
                    {b.icon}
                  </div>
                  {/* Text */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2 gap-2">
                      <h3 className="text-base font-extrabold text-slate-900">{b.title}</h3>
                      <div className="text-right flex-shrink-0">
                        <p className="pb-metric text-lg font-bold leading-none" style={{ color: b.color }}>{b.metric}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{b.metricLabel}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 5th benefit — AI Optimisation — wide accent card */}
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
