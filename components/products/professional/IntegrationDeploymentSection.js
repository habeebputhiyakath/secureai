'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const integrations = [
  'IP Cameras',
  'VMS Platforms',
  'Access Control Systems',
  'ANPR Solutions',
  'IoT Sensors',
  'Alarm Systems',
  'Cloud Platforms',
  'ERP Systems',
  'Third-Party APIs',
];

const deployments = [
  'Hardware installation',
  'Software configuration',
  'Server setup',
  'Network optimization',
  'User configuration',
  'Performance validation',
];

const migrations = [
  'Analog-to-IP migration',
  'VMS migration',
  'AI analytics deployment',
  'Storage expansion',
  'Cloud adoption',
];

export default function ProfessionalIntegrationSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('pid-vis'); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll('.pid-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pid-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .pid-rev.pid-vis { opacity:1; transform:none; }
        .pid-d0{transition-delay:0s} .pid-d1{transition-delay:.08s} .pid-d2{transition-delay:.16s}
        
        .pid-card {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .pid-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.06) !important;
          transform: translateY(-4px);
        }
        .pid-list-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 0.85rem; color: #475569; margin-bottom: 6px;
        }
        .pid-chip {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.7rem; font-weight: 700; color: #4f46e5;
          background: rgba(79,70,229,0.1); border: 1px solid rgba(79,70,229,0.2);
          padding: 4px 10px; border-radius: 9999px; white-space: nowrap;
        }
      `}</style>
      <section ref={ref} id="deploy" className="relative bg-white py-24 lg:py-32">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.4 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
            <h2 className="pid-rev pid-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Integration & Deployment
            </h2>
            <p className="pid-rev pid-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              Bringing designs to life through expert installation, seamless systems integration, and risk-free migration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* System Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
              className="pid-card bg-white rounded-2xl p-7 border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 border border-indigo-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">System Integration</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">SecureAAi integrates diverse technologies into a unified ecosystem, eliminating data silos and improving operational awareness.</p>
              
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-3">Supported Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  {integrations.map((s, i) => (
                    <span key={i} className="pid-chip" style={{color: '#4f46e5', background: 'rgba(79,70,229,0.1)', borderColor: 'rgba(79,70,229,0.2)'}}>{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Installation and Commissioning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="pid-card bg-white rounded-2xl p-7 border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 border border-teal-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Installation & Commissioning</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">Professional deployment services ensure that every component is physically installed and digitally configured to exact specifications.</p>
              
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-3">Deployment Services</h4>
                {deployments.map((s, i) => (
                  <div key={i} className="pid-list-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Migration and Upgrade */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pid-card bg-white rounded-2xl p-7 border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 border border-sky-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10" />
                  <polyline points="1 20 1 14 7 14" />
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Migration & Upgrades</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">Modernize existing infrastructures seamlessly with strategies designed to minimize downtime and preserve existing data.</p>
              
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-3">Modernization Services</h4>
                {migrations.map((s, i) => (
                  <div key={i} className="pid-list-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
