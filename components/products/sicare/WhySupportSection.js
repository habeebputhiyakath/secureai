'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const challenges = [
  'Aging infrastructure',
  'Cybersecurity threats',
  'Increasing system complexity',
  'Software compatibility issues',
  'Hardware failures',
  'Network disruptions',
  'Performance degradation',
  'Lack of internal technical expertise',
];

export default function SicareWhySection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('scw-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.scw-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .scw-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .scw-rev.scw-vis { opacity:1; transform:none; }
        .scw-d0{transition-delay:0s} .scw-d1{transition-delay:.08s} .scw-d2{transition-delay:.16s}
        .scw-d3{transition-delay:.24s}
        .scw-challenge-item {
          transition: transform 0.2s, background 0.2s, border-color 0.2s;
        }
        .scw-challenge-item:hover {
          transform: translateX(4px);
          background: rgba(79, 70, 229, 0.05);
          border-color: rgba(79, 70, 229, 0.2);
        }
      `}</style>
      <section ref={ref} id="why" className="relative bg-white py-24 lg:py-32">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.03]"
          style={{ background:'radial-gradient(circle at 60% 40%,#4f46e5,transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left text */}
            <div>
              <div className="scw-rev scw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(79,70,229,.08)',color:'#4f46e5',border:'1px solid rgba(79,70,229,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The Challenge
              </div>
              <h2 className="scw-rev scw-d1 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
                Why Support Services <span className="text-indigo-600">Matter</span>
              </h2>
              <p className="scw-rev scw-d2 text-slate-500 text-base sm:text-lg leading-relaxed mb-6">
                Security systems are expected to operate continuously and reliably. Any downtime, configuration issue, or hardware failure can impact operations, reduce visibility, and expose organizations to risks.
              </p>
              <p className="scw-rev scw-d3 text-slate-500 text-base sm:text-lg leading-relaxed">
                Without proper support, modern challenges can lead to increased operational costs and unexpected downtime. <strong className="text-slate-800 font-bold">SecureAAi SiCare™</strong> addresses these challenges through a proactive and structured approach.
              </p>
            </div>

            {/* Right side - Grid of challenges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {challenges.map((challenge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 + 0.3 }}
                  className="scw-challenge-item flex items-start gap-3 p-4 rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center bg-red-50 text-red-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{challenge}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
