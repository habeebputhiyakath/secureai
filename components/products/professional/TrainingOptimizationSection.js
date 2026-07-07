'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const trainingPrograms = [
  'Operator Training',
  'Administrator Training',
  'VMS Management',
  'ANPR Operations',
  'Smart Parking Management',
  'Troubleshooting Procedures',
];

const optimizationAreas = [
  'Health monitoring',
  'AI analytics tuning',
  'Network optimization',
  'Database maintenance',
  'Recording optimization',
];

export default function ProfessionalTrainingSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('pto-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.pto-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pto-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .pto-rev.pto-vis { opacity:1; transform:none; }
        .pto-d0{transition-delay:0s} .pto-d1{transition-delay:.08s} .pto-d2{transition-delay:.16s}
        .pto-d3{transition-delay:.24s}
        
        .pto-card {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .pto-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.08) !important;
          transform: translateY(-5px);
        }
        .pto-list-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 0.9rem; color: #475569; margin-bottom: 8px; font-weight: 500;
        }
      `}</style>
      <section ref={ref} id="optimize" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
            <h2 className="pto-rev pto-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Training & Optimization
            </h2>
            <p className="pto-rev pto-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              Empowering your team with knowledge and ensuring your systems run at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Training */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
              className="pto-card bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm relative overflow-hidden"
            >
              <div className="mb-6 flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-100">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path d="M12 14v7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Training & Knowledge Transfer</h3>
                  <p className="text-slate-600 text-sm">Empower teams with practical expertise to manage and operate advanced security ecosystems effectively.</p>
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Training Programs</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {trainingPrograms.map((s, i) => (
                    <div key={i} className="pto-list-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Performance Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="pto-card bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm relative overflow-hidden"
            >
              <div className="mb-6 flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Performance Optimization</h3>
                  <p className="text-slate-600 text-sm">Continuous improvement services to ensure hardware, software, and AI models operate flawlessly over time.</p>
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Improvement Areas</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {optimizationAreas.map((s, i) => (
                    <div key={i} className="pto-list-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
