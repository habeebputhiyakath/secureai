'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const integrations = [
  {
    title: 'ANPR Integration',
    desc: 'Integrate Automatic Number Plate Recognition for parking management, vehicle access control, traffic monitoring, and blacklist alerts.',
    icon: '🚗'
  },
  {
    title: 'Mobile Access',
    desc: 'Security Operations Anywhere. Monitor your facilities remotely through smartphones and tablets with live viewing and PTZ control.',
    icon: '📱'
  },
  {
    title: 'Cloud-Based Management',
    desc: 'Centralized operations with maximum flexibility. Remote monitoring, centralized updates, and secure multi-site connectivity.',
    icon: '☁️'
  },
  {
    title: 'Open Platform Architecture',
    desc: 'Seamless integration with third-party systems including IP cameras, Access Control Platforms, Intruder Alarms, and IoT Devices.',
    icon: '🔗'
  }
];

export default function VmsIntegrationsSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vi-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.vi-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .vi-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .vi-rev.vi-vis { opacity:1; transform:none; }
        .vi-d0{transition-delay:0s} .vi-d1{transition-delay:.08s} .vi-d2{transition-delay:.16s}
      `}</style>
      <section ref={ref} className="relative bg-slate-900 py-24 lg:py-32 border-t border-slate-800">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)',backgroundSize:'28px 28px' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
            <div className="vi-rev vi-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(167,139,250,.1)',color:'#c4b5fd',border:'1px solid rgba(167,139,250,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Extensibility
            </div>
            <h2 className="vi-rev vi-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Seamless <span className="text-purple-400">Integration</span>
            </h2>
            <p className="vi-rev vi-d2 text-slate-400 text-lg max-w-2xl mx-auto">
              Extend the capabilities of your VMS with open architecture and powerful ecosystem integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {integrations.map((int, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-3xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-colors"
              >
                <div className="text-3xl mt-1">{int.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100 mb-2">{int.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{int.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
