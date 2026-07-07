'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '500+',   label: 'Enterprise Clients',     sub: 'worldwide deployments' },
  { value: '15+',    label: 'Countries Deployed',     sub: 'global footprint' },
  { value: '10K+',   label: 'Camera Models',          sub: 'ONVIF & proprietary' },
  { value: '98.7%',  label: 'ANPR Accuracy',          sub: 'industry-leading recognition' },
  { value: '4PB+',   label: 'Storage Capacity',       sub: 'per enterprise deployment' },
  { value: '24/7',   label: 'Support Coverage',       sub: 'dedicated response team' },
];

export default function SivmsStatsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('svs-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.svs-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .svs-rev {
          opacity: 0; transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .svs-rev.svs-vis { opacity: 1; transform: none; }
        .svs-d0{transition-delay:0s} .svs-d1{transition-delay:0.08s}
        .svs-num { font-family: 'JetBrains Mono', monospace; }
        .svs-card:hover { border-color: rgba(255,255,255,0.35) !important; transform: translateY(-2px); }
        @keyframes svsScan { 0%{top:0%} 100%{top:100%} }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden py-24 lg:py-28 border-t border-slate-100"
        style={{ background: 'linear-gradient(135deg, #0161FE 0%, #1e6fff 50%, #3b82f6 100%)' }}
      >
        {/* Dot grid overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Scan line */}
        <div className="absolute left-0 right-0 h-px opacity-30 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, #fff 50%, transparent)',
            animation: 'svsScan 3s linear infinite',
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div
              className="svs-rev svs-d0 mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              By the Numbers
            </div>
            <h2 className="svs-rev svs-d1 text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.08]">
              Performance That Speaks
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="svs-card text-center p-5 rounded-2xl border transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <p className="svs-num text-2xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-xs font-semibold text-blue-100 mb-0.5">{s.label}</p>
                <p className="text-xs text-blue-200 opacity-75">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
