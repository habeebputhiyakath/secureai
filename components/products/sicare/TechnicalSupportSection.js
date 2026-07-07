'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const techServices = [
  'Remote troubleshooting',
  'Product configuration assistance',
  'Software support',
  'Performance analysis',
  'Network diagnostics',
  'Integration support',
  'Event troubleshooting',
  'Recording verification',
  'Database optimization',
  'System tuning',
];

const techBenefits = [
  'Reduced downtime',
  'Faster issue resolution',
  'Improved reliability',
  'Increased productivity',
  'Better user experience',
];

const maintenanceServices = [
  'Camera inspection',
  'Lens cleaning',
  'Storage health checks',
  'Firmware verification',
  'Network diagnostics',
  'Server performance analysis',
  'Database optimization',
  'System health assessments',
  'Recording verification',
  'Event log review',
];

const maintenanceBenefits = [
  'Increased equipment lifespan',
  'Reduced maintenance costs',
  'Improved performance',
  'Better reliability',
];

export default function SicareTechnicalSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('sct-vis'); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll('.sct-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .sct-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .sct-rev.sct-vis { opacity:1; transform:none; }
        .sct-d0{transition-delay:0s} .sct-d1{transition-delay:.08s} .sct-d2{transition-delay:.16s}
        .sct-d3{transition-delay:.24s}
        
        .sct-card {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .sct-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.08) !important;
          transform: translateY(-5px);
        }
        .sct-list-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 0.85rem; color: #475569; margin-bottom: 6px;
        }
        .sct-list-item svg { flex-shrink: 0; margin-top: 3px; color: #6366f1; }
        .sct-benefit-chip {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.7rem; font-weight: 700; color: #059669;
          background: rgba(5,150,105,0.1); border: 1px solid rgba(5,150,105,0.2);
          padding: 4px 10px; border-radius: 9999px; white-space: nowrap;
        }
      `}</style>
      <section ref={ref} id="tech" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
            <h2 className="sct-rev sct-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Core Support & Maintenance
            </h2>
            <p className="sct-rev sct-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              Proactive care and expert assistance to keep your security infrastructure running at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Technical Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
              className="sct-card bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 border border-indigo-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Technical Support Services</h3>
                <p className="text-slate-500 text-sm font-medium">Expert Assistance When You Need It Most</p>
                <p className="text-slate-600 text-sm mt-3">Our highly trained engineers provide responsive technical assistance to diagnose and resolve issues efficiently.</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Services Include</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  {techServices.map((s, i) => (
                    <div key={i} className="sct-list-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Benefits</h4>
                <div className="flex flex-wrap gap-2">
                  {techBenefits.map((b, i) => (
                    <span key={i} className="sct-benefit-chip">{b}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Preventive Maintenance Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="sct-card bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 border border-teal-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Preventive Maintenance</h3>
                <p className="text-slate-500 text-sm font-medium">Prevent Problems Before They Affect Operations</p>
                <p className="text-slate-600 text-sm mt-3">Preventive maintenance is essential to maintaining system health and avoiding costly failures.</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Activities Include</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  {maintenanceServices.map((s, i) => (
                    <div key={i} className="sct-list-item" style={{color: '#334155'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Benefits</h4>
                <div className="flex flex-wrap gap-2">
                  {maintenanceBenefits.map((b, i) => (
                    <span key={i} className="sct-benefit-chip" style={{color: '#0284c7', background: 'rgba(2,132,199,0.1)', borderColor: 'rgba(2,132,199,0.2)'}}>{b}</span>
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
