'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const swUpdates = [
  'Software upgrades',
  'Firmware updates',
  'Security patches',
  'Bug fixes',
  'Feature enhancements',
  'Compatibility improvements',
];

const swBenefits = [
  'Enhanced cybersecurity',
  'Improved functionality',
  'Better stability',
  'Future-ready infrastructure',
];

const remoteAdvantages = [
  'Faster response times',
  'Reduced operational interruptions',
  'Lower service costs',
  'Improved availability',
];

const perfAreas = [
  'Network performance',
  'Recording quality',
  'Storage utilization',
  'AI analytics accuracy',
  'Database performance',
  'Server health',
  'Camera configurations',
];

export default function SicareSoftwareSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('scs-vis'); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll('.scs-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .scs-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .scs-rev.scs-vis { opacity:1; transform:none; }
        .scs-d0{transition-delay:0s} .scs-d1{transition-delay:.08s}
        .scs-d2{transition-delay:.16s} .scs-d3{transition-delay:.24s}
        .scs-card {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .scs-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.06) !important;
          transform: translateY(-4px);
        }
        .scs-list-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 0.85rem; color: #475569; margin-bottom: 6px;
        }
        .scs-list-item svg { flex-shrink: 0; margin-top: 3px; color: #4f46e5; }
        .scs-chip {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.7rem; font-weight: 700; color: #4f46e5;
          background: rgba(79,70,229,0.1); border: 1px solid rgba(79,70,229,0.2);
          padding: 4px 10px; border-radius: 9999px; white-space: nowrap;
        }
      `}</style>
      <section ref={ref} className="relative bg-white py-24 lg:py-32">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.4 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
            <h2 className="scs-rev scs-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Advanced Optimization & Updates
            </h2>
            <p className="scs-rev scs-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              Stay secure, stay current, and maximize the efficiency of your intelligent security systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Software and Firmware Updates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
              className="scs-card bg-white rounded-2xl p-7 border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Software & Firmware</h3>
              <p className="text-slate-500 text-xs font-semibold mb-3">Keeping Systems Secure and Future Ready</p>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">Technology evolves continuously. Software updates are essential for cybersecurity, compatibility, and performance improvements.</p>
              
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Includes</h4>
                {swUpdates.map((s, i) => (
                  <div key={i} className="scs-list-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {s}
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Benefits</h4>
                <div className="flex flex-wrap gap-2">
                  {swBenefits.map((b, i) => (
                    <span key={i} className="scs-chip" style={{color: '#2563eb', background: 'rgba(37,99,235,0.1)', borderColor: 'rgba(37,99,235,0.2)'}}>{b}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Remote Support Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="scs-card bg-white rounded-2xl p-7 border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5 border border-purple-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Remote Support</h3>
              <p className="text-slate-500 text-xs font-semibold mb-3">Rapid Response Without On-Site Visits</p>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">Secure remote support enables our engineers to diagnose and resolve problems efficiently, without the wait time of physical dispatch.</p>
              
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Advantages</h4>
                <div className="flex flex-col gap-2">
                  {remoteAdvantages.map((b, i) => (
                    <span key={i} className="scs-chip" style={{color: '#9333ea', background: 'rgba(147,51,234,0.1)', borderColor: 'rgba(147,51,234,0.2)', alignSelf: 'flex-start'}}>{b}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Performance Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="scs-card bg-white rounded-2xl p-7 border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20V10" />
                  <path d="M18 20V4" />
                  <path d="M6 20v-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Performance Optimization</h3>
              <p className="text-slate-500 text-xs font-semibold mb-3">Continuous Improvement for Maximum Efficiency</p>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">Security systems require ongoing tuning and optimization to maintain high performance and accurate AI analytics.</p>
              
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Areas Covered</h4>
                {perfAreas.map((s, i) => (
                  <div key={i} className="scs-list-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
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
