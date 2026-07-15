'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 10000, suffix: '+', label: 'Camera Nodes', desc: 'Active connected devices', color: '#0161FE', data: [30,40,35,50,45,60,70,80,75,90,85,100] },
  { value: 99, suffix: '.9%', label: 'AI Accuracy', desc: 'False positive reduction', color: '#059669', data: [80,85,82,88,90,85,92,95,94,97,98,99] },
  { value: 120, suffix: '+', label: 'Enterprise Clients', desc: 'Global organizations', color: '#4f46e5', data: [10,20,15,30,40,35,50,60,55,70,80,120] },
  { value: 100, suffix: 'M+', label: 'Daily AI Inferences', desc: 'Events processed per day', color: '#0891b2', data: [20,25,40,35,50,60,55,75,70,85,90,100] },
];

function ChartIcon({ color }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19V9.5" /><path d="M10 19V5" /><path d="M16 19v-7.5" /><path d="M22 19H2" />
    </svg>
  );
}

function useCounter(end, duration = 2000, trigger) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, end, duration]);
  return count;
}

function StatCard({ stat, trigger, delay }) {
  const count = useCounter(stat.value, 2000, trigger);

  return (
    <div
      className="sd-card relative group rounded-[22px] bg-white border border-slate-200 p-7"
      style={{ '--accent': stat.color, transitionDelay: `${delay}s` }}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-baseline gap-0.5">
            <span className="sd-mono text-[2rem] font-bold tracking-tight text-slate-900">
              {count.toLocaleString()}
            </span>
            <span className="sd-mono text-lg font-semibold text-slate-400">{stat.suffix}</span>
          </div>
          <p className="text-[13px] font-semibold text-slate-500 mt-1.5">{stat.label}</p>
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          style={{ background: `${stat.color}15` }}>
          <ChartIcon color={stat.color} />
        </div>
      </div>

      {/* Mini bar chart */}
      <div className="flex items-end gap-1 h-10 mb-5">
        {stat.data.map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm transition-all duration-700"
            style={{ height: `${v}%`, background: stat.color, opacity: 0.7 + (i / stat.data.length) * 0.3, transitionDelay: trigger ? `${i * 0.04}s` : '0s' }}
          />
        ))}
      </div>

      <p className="text-[0.8rem] text-slate-400 border-t border-slate-100 pt-4">{stat.desc}</p>
    </div>
  );
}

export default function StatsDashboard() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); if (!counted) { setCounted(true); } } },
      { threshold: 0.15 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [counted]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .sd-section { font-family: 'DM Sans', sans-serif; }
        .sd-mono { font-family: 'JetBrains Mono', monospace; }

        .sd-rev { opacity: 0; transform: translateY(26px); transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1), transform 0.72s cubic-bezier(0.22,1,0.36,1); }
        .sd-rev.sd-vis { opacity: 1; transform: none; }

        .sd-card { box-shadow: 0 1px 6px rgba(0,0,0,0.04); transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease; }
        .sd-card:hover { transform: translateY(-4px); border-color: var(--accent); box-shadow: 0 14px 32px -10px color-mix(in srgb, var(--accent) 28%, transparent); }
      `}</style>

      <section ref={ref} className="sd-section relative overflow-hidden bg-slate-50 py-24 lg:py-28 border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-slate-200 pb-10 mb-10">
            <div>
              <div className={`sd-rev mb-6 ${vis ? 'sd-vis' : ''}`}>
                <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[0.68rem] font-bold tracking-[0.1em] uppercase"
                  style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}>
                  Performance Metrics
                </span>
              </div>
              <h2 className={`sd-rev text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.08] text-slate-900 ${vis ? 'sd-vis' : ''}`}
                style={{ transitionDelay: '0.08s' }}>
                Proven at{' '}
                <span style={{ color: '#0161FE' }}>Enterprise Scale</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className={`sd-rev ${vis ? 'sd-vis' : ''}`} style={{ transitionDelay: `${0.12 + i * 0.06}s` }}>
                <StatCard stat={stat} trigger={counted} delay={i * 0.06} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}