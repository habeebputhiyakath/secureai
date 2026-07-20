'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 98, suffix: '.7%', label: 'Recognition Accuracy', desc: 'Across day, night & adverse weather', color: '#0161FE', data: [78,82,80,85,88,86,90,92,91,95,96,98] },
  { value: 60, suffix: '+', label: 'Plate Formats', desc: 'International standards supported', color: '#059669', data: [20,25,22,30,35,32,40,45,42,50,55,60] },
  { value: 150, suffix: 'ms', label: 'Avg. Processing Time', desc: 'Edge-based real-time inference', color: '#4f46e5', data: [90,85,88,80,75,78,70,65,68,60,58,55] },
  { value: 24, suffix: '/7', label: 'Continuous Operation', desc: 'Day & night, all-weather uptime', color: '#0891b2', data: [60,65,63,70,72,75,78,80,82,85,88,92] },
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
      className="asd-card relative group rounded-[22px] bg-white border border-slate-200 p-7"
      style={{ '--accent': stat.color, transitionDelay: `${delay}s` }}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-baseline gap-0.5">
            <span className="asd-mono text-[2rem] font-bold tracking-tight text-slate-900">
              {count.toLocaleString()}
            </span>
            <span className="asd-mono text-lg font-semibold text-slate-400">{stat.suffix}</span>
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

export default function SiproStatsSection() {
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

        .asd-section { font-family: 'DM Sans', sans-serif; }
        .asd-mono { font-family: 'JetBrains Mono', monospace; }

        .asd-rev { opacity: 0; transform: translateY(26px); transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1), transform 0.72s cubic-bezier(0.22,1,0.36,1); }
        .asd-rev.asd-vis { opacity: 1; transform: none; }

        .asd-card { box-shadow: 0 1px 6px rgba(0,0,0,0.04); transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease; }
        .asd-card:hover { transform: translateY(-4px); border-color: var(--accent); box-shadow: 0 14px 32px -10px color-mix(in srgb, var(--accent) 28%, transparent); }
      `}</style>

      <section ref={ref} className="asd-section relative overflow-hidden bg-white py-24 lg:py-28 border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-slate-200 pb-10 mb-10">
            <div>
              <div className={`asd-rev mb-6 ${vis ? 'asd-vis' : ''}`}>
                <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[0.68rem] font-bold tracking-[0.1em] uppercase"
                  style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}>
                  Performance Metrics
                </span>
              </div>
              <h2 className={`asd-rev text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.08] text-slate-900 ${vis ? 'asd-vis' : ''}`}
                style={{ transitionDelay: '0.08s' }}>
                Built for{' '}
                <span style={{ color: '#0161FE' }}>Real-World Accuracy</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className={`asd-rev ${vis ? 'asd-vis' : ''}`} style={{ transitionDelay: `${0.12 + i * 0.06}s` }}>
                <StatCard stat={stat} trigger={counted} delay={i * 0.06} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
