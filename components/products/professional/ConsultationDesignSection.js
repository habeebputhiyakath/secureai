'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const consultItems = [
  'Operational goals',
  'Security challenges',
  'Existing infrastructure',
  'Scalability requirements',
  'Budget considerations',
];

const siteSurveyItems = [
  'Camera placement studies',
  'Coverage analysis',
  'Network assessments',
  'Storage requirements',
  'Environmental considerations',
];

const designSolutions = [
  'Enterprise Video Management Systems',
  'Automatic Number Plate Recognition Solutions',
  'Smart Parking Systems',
  'Access Control Systems',
  'Intruder Alarm Systems',
  'AI Video Analytics Platforms',
  'Smart City Solutions',
];

export default function ProfessionalConsultDesignSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('pcd-vis'); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll('.pcd-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pcd-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .pcd-rev.pcd-vis { opacity:1; transform:none; }
        .pcd-d0{transition-delay:0s} .pcd-d1{transition-delay:.08s} .pcd-d2{transition-delay:.16s}
        
        .pcd-card {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .pcd-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.08) !important;
          transform: translateY(-5px);
        }
        .pcd-list-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 0.85rem; color: #475569; margin-bottom: 6px;
        }
        .pcd-list-item svg { flex-shrink: 0; margin-top: 3px; color: #d97706; }
      `}</style>
      <section ref={ref} id="design" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
            <h2 className="pcd-rev pcd-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Consultation & Solution Design
            </h2>
            <p className="pcd-rev pcd-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              Building a solid foundation through in-depth analysis and expert architectural planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Consultation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
              className="pcd-card bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4 border border-amber-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Requirement Analysis</h3>
                <p className="text-slate-600 text-sm mt-3">Our experts work closely with customers to understand their specific operational context.</p>
              </div>
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Focus Areas</h4>
                <div>
                  {consultItems.map((s, i) => (
                    <div key={i} className="pcd-list-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Site Survey */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="pcd-card bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4 border border-orange-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Site Assessment</h3>
                <p className="text-slate-600 text-sm mt-3">Comprehensive physical and digital evaluations of the target deployment environment.</p>
              </div>
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Evaluations Include</h4>
                <div>
                  {siteSurveyItems.map((s, i) => (
                    <div key={i} className="pcd-list-item" style={{color: '#334155'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Solution Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pcd-card bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 mb-4 border border-rose-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Solution Design</h3>
                <p className="text-slate-600 text-sm mt-3">We design customized, scalable architectures for complex enterprise requirements.</p>
              </div>
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Custom Architectures For</h4>
                <div>
                  {designSolutions.map((s, i) => (
                    <div key={i} className="pcd-list-item" style={{color: '#334155'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
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
