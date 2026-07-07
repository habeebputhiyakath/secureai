'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const reasons = [
  'Deep Technical Expertise',
  'Open Platform Knowledge',
  'Customized Solutions',
  'Scalable Architectures',
  'Seamless Integration',
  'Industry Best Practices',
  'Future-Ready Technologies',
  'End-to-End Project Support',
  'Long-Term Partnership',
];

const lifecycle = [
  { step: 'Consult', desc: 'Understand requirements and business objectives.', icon: '1️⃣' },
  { step: 'Design', desc: 'Develop intelligent and scalable architectures.', icon: '2️⃣' },
  { step: 'Deploy', desc: 'Implement solutions efficiently.', icon: '3️⃣' },
  { step: 'Optimize', desc: 'Enhance performance continuously.', icon: '4️⃣' },
  { step: 'Support', desc: 'Deliver long-term operational success.', icon: '5️⃣' },
];

export default function ProfessionalWhyLifecycleSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('pwl-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.pwl-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pwl-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .pwl-rev.pwl-vis { opacity:1; transform:none; }
        .pwl-d0{transition-delay:0s} .pwl-d1{transition-delay:.08s}
        .pwl-card:hover { border-color: rgba(245,158,11,0.5) !important; transform: translateY(-2px); }
      `}</style>
      <section ref={ref} id="lifecycle" className="relative bg-white py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Why Choose */}
            <div>
              <div className="pwl-rev pwl-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(245,158,11,.08)',color:'#d97706',border:'1px solid rgba(245,158,11,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The Advantage
              </div>
              <h2 className="pwl-rev pwl-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-8">
                Why Choose SecureAAi <span className="text-amber-600">Professional Services?</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {reasons.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span className="text-sm font-bold text-slate-700">{r}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Lifecycle */}
            <div>
              <div className="pwl-rev pwl-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(15,23,42,.08)',color:'#0f172a',border:'1px solid rgba(15,23,42,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Methodology
              </div>
              <h2 className="pwl-rev pwl-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-8">
                Our Project <span className="text-slate-600">Lifecycle Approach</span>
              </h2>
              <div className="space-y-4">
                {lifecycle.map((lc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-slate-400 transition-colors"
                  >
                    <div className="text-2xl mt-1">{lc.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{lc.step}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{lc.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
