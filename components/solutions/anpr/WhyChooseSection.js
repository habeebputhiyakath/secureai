'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const reasons = [
  'AI-Powered Vehicle Intelligence',
  'Enterprise Scalability',
  'High Recognition Accuracy',
  'Real-Time Alerts',
  'Open Platform Integration',
  'Intelligent Analytics',
  'Multi-Site Management',
  'Future-Ready Architecture',
  'Cloud Connectivity',
  '24/7 Technical Support',
];

export default function SiproWhyChooseSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('swc-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.swc-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .swc-rev { opacity:0; transform:translateY(24px);
          transition:opacity .68s cubic-bezier(.22,1,.36,1), transform .68s cubic-bezier(.22,1,.36,1); }
        .swc-rev.swc-vis { opacity:1; transform:none; }
        .swc-item { transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s; }
        .swc-item:hover { border-color: rgba(1,97,254,.35); box-shadow: 0 8px 22px rgba(1,97,254,.08); transform: translateY(-2px); }
      `}</style>
      <section ref={ref} className="relative py-24 lg:py-32 border-t border-slate-100"
        style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #eef4ff 100%)' }}>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="swc-rev mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              The SecureAAi Advantage
            </div>
            <h2 className="swc-rev text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ transitionDelay: '0.06s' }}>
              Why Choose <span style={{ color:'#0161FE' }}>SecureAAi Si Pro ANPR™?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="swc-item flex items-center gap-3 p-4 rounded-2xl border border-slate-200 bg-white"
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background:'rgba(1,97,254,.1)', color:'#0161FE' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span className="text-sm font-bold text-slate-800 leading-tight">{r}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
