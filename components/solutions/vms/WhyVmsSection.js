'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const challenges = [
  { title: 'Disconnected Systems', desc: 'Multiple standalone systems make monitoring difficult and reduce operational efficiency.', icon: '🔌' },
  { title: 'Limited Visibility', desc: 'Operators struggle to manage growing camera networks and multiple locations.', icon: '📉' },
  { title: 'Slow Incident Response', desc: 'Critical events may be missed without intelligent alerts and centralized control.', icon: '⏱️' },
  { title: 'High Operational Complexity', desc: 'Managing different vendors and platforms increases maintenance and administration efforts.', icon: '⚙️' },
  { title: 'Lack of Scalability', desc: 'Legacy systems are unable to support future expansion and advanced analytics.', icon: '🚧' },
];

const benefits = [
  { title: 'Centralized Security Management', desc: 'Manage thousands of cameras and multiple facilities from one platform.' },
  { title: 'Real-Time Situational Awareness', desc: 'Monitor events and receive instant notifications for critical incidents.' },
  { title: 'Faster Investigations', desc: 'Retrieve video footage quickly using intelligent search capabilities.' },
  { title: 'Improved Operational Efficiency', desc: 'Reduce complexity and simplify day-to-day security operations.' },
  { title: 'Enterprise Scalability', desc: 'Support projects ranging from small businesses to city-wide deployments.' },
  { title: 'Future-Ready Architecture', desc: 'Integrate with AI analytics, cloud platforms, and third-party systems.' },
];

export default function VmsWhySection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vw-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.vw-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .vw-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .vw-rev.vw-vis { opacity:1; transform:none; }
        .vw-d0{transition-delay:0s} .vw-d1{transition-delay:.08s} .vw-d2{transition-delay:.16s}
        .vw-card { transition: box-shadow 0.3s, transform 0.3s; }
        .vw-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.06) !important; transform: translateY(-4px); }
      `}</style>
      <section ref={ref} id="why" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: The Challenges */}
            <div>
              <div className="vw-rev vw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(15,23,42,.08)',color:'#0f172a',border:'1px solid rgba(15,23,42,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The Challenge
              </div>
              <h2 className="vw-rev vw-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                Why Organizations Need an Advanced VMS
              </h2>
              <p className="vw-rev vw-d2 text-slate-600 text-lg mb-8 leading-relaxed">
                Traditional surveillance systems often create challenges that hinder security effectiveness and growth.
              </p>
              
              <div className="space-y-4">
                {challenges.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="text-2xl mt-1">{c.icon}</div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{c.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{c.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: The Benefits */}
            <div>
               <div className="vw-rev vw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(147,51,234,.08)',color:'#9333ea',border:'1px solid rgba(147,51,234,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The Solution
              </div>
              <h2 className="vw-rev vw-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                One Platform. <span className="text-purple-600">Complete Visibility.</span>
              </h2>
              <p className="vw-rev vw-d2 text-slate-600 text-lg mb-8 leading-relaxed">
                SecureAAi VMS solves these challenges through intelligent, centralized management and open architecture.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="vw-card p-5 rounded-2xl border border-slate-200 bg-white"
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-3 border border-purple-100">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{b.title}</h4>
                    <p className="text-xs text-slate-500">{b.desc}</p>
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
