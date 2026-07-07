'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const advancedAlarms = [
  { title: 'Vibration Alarm', desc: 'Detects unauthorized vehicle movement or towing attempts when parked.', icon: '📳' },
  { title: 'Movement Alarm', desc: 'Alerts you if the vehicle moves beyond a predefined radius without authorization.', icon: '📍' },
  { title: 'Over-speed Alarm', desc: 'Monitor driver compliance with real-time speed limit violation alerts.', icon: '⚡' },
  { title: 'Power Failure Alarm', desc: 'Immediate notification if the tracker is disconnected from vehicle power.', icon: '🔌' },
];

export default function TracksiFeaturesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('tfa-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.tfa-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .tfa-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .tfa-rev.tfa-vis { opacity:1; transform:none; }
        .tfa-d0{transition-delay:0s} .tfa-d1{transition-delay:.08s} .tfa-d2{transition-delay:.16s}
        .tfa-card {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .tfa-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.06) !important;
          transform: translateY(-4px);
        }
      `}</style>
      <section ref={ref} id="features" className="relative bg-white py-24 lg:py-32">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
             <div className="tfa-rev tfa-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(153,27,27,.08)',color:'#991b1b',border:'1px solid rgba(153,27,27,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Advanced Features
              </div>
            <h2 className="tfa-rev tfa-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Comprehensive <span className="text-red-600">Event Monitoring</span>
            </h2>
            <p className="tfa-rev tfa-d2 text-slate-500 text-lg max-w-2xl mx-auto">
              Stay informed of critical events as they happen with intelligent, configurable alarms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advancedAlarms.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="tfa-card flex flex-col items-start p-6 bg-slate-50 border border-slate-200 rounded-2xl text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-2xl mb-4 border border-red-100">
                  {a.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{a.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
