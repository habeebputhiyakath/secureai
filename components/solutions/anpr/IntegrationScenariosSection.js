'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const integrations = [
  {
    title: 'Access Control Systems',
    desc: 'Integrate ANPR with barriers and access control systems for contactless, automated vehicle entry.',
    icon: '🚧'
  },
  {
    title: 'Smart Parking Management',
    desc: 'Enable ticketless parking operations with entry/exit management, occupancy monitoring, and stay-time analytics.',
    icon: '🅿️'
  },
  {
    title: 'SiVMS™ Enterprise Integration',
    desc: 'Centralize security operations with unified video monitoring, event correlation, and faster investigations.',
    icon: '🎥'
  }
];

const scenarios = [
  { title: 'Traffic Monitoring', desc: 'Optimize traffic operations on highways, intersections, and urban roads.', bg: 'bg-sky-50', text: 'text-sky-700' },
  { title: 'Parking Management', desc: 'Automate operations for shopping malls, airports, hospitals, and hotels.', bg: 'bg-emerald-50', text: 'text-emerald-700' },
  { title: 'Access Control', desc: 'Provide secure access for residential communities and corporate offices.', bg: 'bg-indigo-50', text: 'text-indigo-700' },
  { title: 'Law Enforcement', desc: 'Enhance public safety for police departments and border security.', bg: 'bg-rose-50', text: 'text-rose-700' },
];

export default function SiproIntegrationsSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('spi-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.spi-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .spi-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .spi-rev.spi-vis { opacity:1; transform:none; }
        .spi-d0{transition-delay:0s} .spi-d1{transition-delay:.08s} .spi-d2{transition-delay:.16s}
        .spi-card:hover { transform: translateY(-3px); }
      `}</style>
      <section ref={ref} id="scenarios" className="relative bg-slate-900 py-24 lg:py-32 border-t border-slate-800">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)',backgroundSize:'28px 28px' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Seamless Integrations */}
            <div>
              <div className="spi-rev spi-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(56,189,248,.1)',color:'#7dd3fc',border:'1px solid rgba(56,189,248,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Seamless Connectivity
              </div>
              <h2 className="spi-rev spi-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-8">
                Ecosystem <span className="text-sky-400">Integrations</span>
              </h2>
              <div className="space-y-4">
                {integrations.map((int, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50"
                  >
                    <div className="text-3xl mt-1">{int.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-100">{int.title}</h4>
                      <p className="text-sm text-slate-400 mt-1 leading-relaxed">{int.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Application Scenarios */}
            <div>
              <div className="spi-rev spi-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(255,255,255,.1)',color:'#e2e8f0',border:'1px solid rgba(255,255,255,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Application Scenarios
              </div>
              <h2 className="spi-rev spi-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-8">
                Versatile <span className="text-slate-400">Deployments</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {scenarios.map((sc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`spi-card p-6 rounded-2xl border border-slate-700 bg-slate-800 shadow-md flex flex-col justify-center transition-transform`}
                  >
                    <h4 className="text-lg font-bold text-white mb-2">{sc.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{sc.desc}</p>
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
