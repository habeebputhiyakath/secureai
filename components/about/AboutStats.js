'use client';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ from = 0, to, suffix = '', duration = 2 }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeProgress * (to - from) + from);
      if (nodeRef.current) nodeRef.current.textContent = currentVal + suffix;
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration, suffix]);

  return (
    <span ref={nodeRef}>
      {from}
      {suffix}
    </span>
  );
};

const stats = [
  { value: 120, suffix: '+', label: 'Countries & Regions' },
  { value: 5000, suffix: '+', label: 'Enterprise Partners' },
  { value: 15, suffix: 'M+', label: 'Connected Devices' },
  { value: 99, suffix: '%', label: 'Analytics Accuracy' },
];

export default function AboutStats() {
  return (
    <section className="py-16 px-6 lg:px-10 bg-white border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-[#0161FE]/[0.03] border border-[#0161FE]/10 rounded-[32px] p-10 md:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0161FE]/5 blur-[80px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col gap-2 ${i > 0 ? 'border-l border-[#0161FE]/10' : ''}`}
              >
                <h4
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0161FE] tracking-tight"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <Counter to={stat.value} suffix={stat.suffix} />
                </h4>
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
