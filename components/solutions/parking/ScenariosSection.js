'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const scenarios = [
  {
    title: 'Entrance & Exit Management',
    desc: 'Automatically recognize license plates and streamline vehicle entry and exit for ticketless and contactless access.',
    benefits: ['Faster throughput', 'Improved security', 'Reduced manpower', 'Contactless access'],
    icon: '🚧'
  },
  {
    title: 'Indoor Parking Guidance',
    desc: 'Navigate drivers to available spaces with clear occupancy indicators that change automatically based on availability.',
    benefits: ['Reduce search time', 'Improve efficiency', 'Enhance accessibility', 'Increase satisfaction'],
    icon: '🎯'
  },
  {
    title: 'Outdoor Occupancy Detection',
    desc: 'Monitor up to 100 parking spaces simultaneously with real-time AI-powered occupancy analysis and stay-time calculation.',
    benefits: ['Increase turnover', 'Improve utilization', 'Enable dynamic pricing', 'Support overstay alerts'],
    icon: '🌤️'
  },
  {
    title: 'Parking Enforcement',
    desc: 'Automatically identify illegal parking, overstay vehicles, restricted area violations, and unauthorized vehicles.',
    benefits: ['Lower labor costs', 'Fair enforcement', 'Better traffic flow', 'Enhanced safety'],
    icon: '🚨'
  }
];

export default function ParkingScenariosSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('psc-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.psc-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .psc-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .psc-rev.psc-vis { opacity:1; transform:none; }
        .psc-d0{transition-delay:0s} .psc-d1{transition-delay:.08s} .psc-d2{transition-delay:.16s}
        .psc-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important; }
      `}</style>
      <section ref={ref} id="scenarios" className="relative bg-slate-900 py-24 lg:py-32 border-t border-slate-800">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)',backgroundSize:'28px 28px' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
            <div className="psc-rev psc-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(52,211,153,.1)',color:'#6ee7b7',border:'1px solid rgba(52,211,153,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Deployments
            </div>
            <h2 className="psc-rev psc-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              4 Core <span className="text-emerald-400">Application Scenarios</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scenarios.map((sc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="psc-card flex flex-col p-8 rounded-3xl bg-slate-800 border border-slate-700 shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{sc.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{sc.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed flex-grow">{sc.desc}</p>
                
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {sc.benefits.map((b, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-emerald-100">
                      <svg className="text-emerald-400 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      {b}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
