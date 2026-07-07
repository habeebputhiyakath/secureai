'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const reasons = [
  { title: 'Experienced Engineers', icon: '👨‍💻' },
  { title: 'Proactive Maintenance', icon: '🛠️' },
  { title: 'Rapid Response',        icon: '⚡' },
  { title: 'Reduced Downtime',      icon: '⏱️' },
  { title: 'Long-Term Reliability', icon: '🛡️' },
  { title: 'Future-Ready Expertise',icon: '🚀' },
  { title: 'Maximum Uptime',        icon: '📈' },
  { title: 'Customer-Centric',      icon: '🤝' },
];

export default function SicareWhyChooseSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('scwc-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.scwc-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .scwc-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .scwc-rev.scwc-vis { opacity:1; transform:none; }
        .scwc-d0{transition-delay:0s} .scwc-d1{transition-delay:.08s}
        .scwc-card:hover { border-color: rgba(99,102,241,0.5) !important; transform: translateY(-2px); }
      `}</style>
      <section ref={ref} id="why-choose" className="relative bg-white py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
            <h2 className="scwc-rev scwc-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Why Choose SecureAAi SiCare™
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="scwc-card flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center transition-all duration-200"
              >
                <span className="text-3xl mb-3">{r.icon}</span>
                <span className="text-sm font-bold text-slate-800 leading-tight">{r.title}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
