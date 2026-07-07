'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const industries = [
  'Smart Cities', 'Airports', 'Transportation', 'Government',
  'Healthcare', 'Education', 'Manufacturing', 'Retail', 'Logistics & Warehousing'
];

const scenarios = [
  { title: 'Enterprise Security Operations', desc: 'Centralized surveillance across multiple buildings and facilities.' },
  { title: 'Smart City Monitoring', desc: 'Integrated city-wide video management and public safety.' },
  { title: 'Transportation Infrastructure', desc: 'Monitor airports, railways, and traffic networks.' },
  { title: 'Critical Infrastructure', desc: 'Secure power plants, industrial facilities, and sensitive environments.' },
];

export default function VmsScenariosSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vs-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.vs-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .vs-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .vs-rev.vs-vis { opacity:1; transform:none; }
        .vs-d0{transition-delay:0s} .vs-d1{transition-delay:.08s} .vs-d2{transition-delay:.16s}
      `}</style>
      <section ref={ref} id="scenarios" className="relative bg-white py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Industries */}
            <div>
              <div className="vs-rev vs-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(15,23,42,.08)',color:'#0f172a',border:'1px solid rgba(15,23,42,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Industries We Serve
              </div>
              <h2 className="vs-rev vs-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-8">
                Versatile <span className="text-purple-600">Deployments</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {industries.map((ind, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-semibold text-sm shadow-sm"
                  >
                    {ind}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scenarios */}
            <div>
              <div className="vs-rev vs-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(147,51,234,.08)',color:'#9333ea',border:'1px solid rgba(147,51,234,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Application Scenarios
              </div>
              <h2 className="vs-rev vs-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-8">
                4 Core <span className="text-slate-400">Applications</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {scenarios.map((sc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mb-3">
                      {i + 1}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">{sc.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{sc.desc}</p>
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
