'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const lifecycleStages = [
  {
    title: 'Consultation',
    desc: 'Understand operational requirements and assess current infrastructure capabilities.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.1)'
  },
  {
    title: 'Design',
    desc: 'Develop scalable architectures tailored to your specific security and operational needs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)'
  },
  {
    title: 'Deployment',
    desc: 'Implement best practices ensuring seamless integration and minimal disruption.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)'
  },
  {
    title: 'Optimization',
    desc: 'Improve system efficiency, tune AI analytics, and optimize database performance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)'
  },
  {
    title: 'Expansion',
    desc: 'Support future growth by seamlessly integrating new hardware and capabilities.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.1)'
  },
  {
    title: 'Upgrade',
    desc: 'Introduce new technologies, firmware, and software to maintain peak performance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-10.3l-2.02 2.02M3 12h11M14 9l3 3-3 3" />
      </svg>
    ),
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.1)'
  }
];

export default function SicareLifecycleSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('scl-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.scl-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .scl-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .scl-rev.scl-vis { opacity:1; transform:none; }
        .scl-d0{transition-delay:0s} .scl-d1{transition-delay:.08s} .scl-d2{transition-delay:.16s}
      `}</style>
      <section ref={ref} id="lifecycle" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
            <h2 className="scl-rev scl-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Lifecycle Management
            </h2>
            <p className="scl-rev scl-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              SecureAAi supports customers throughout the entire system lifecycle — from initial concept to future expansions.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 relative z-10">
              {lifecycleStages.map((stage, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ background: stage.bg, color: stage.color }}>
                    {stage.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{stage.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{stage.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
