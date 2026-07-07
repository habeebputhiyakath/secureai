'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    title: 'High-Accuracy License Plate Recognition',
    subtitle: 'AI-Powered Vehicle Identification',
    desc: 'SecureAAi ANPR provides accurate plate recognition across various traffic conditions and environments.',
    features: ['Multi-Lane Monitoring', 'Day & Night Operation', 'Fast Processing Speed', 'Real-Time Recognition'],
    icon: '📷', color: 'sky'
  },
  {
    title: 'Vehicle Attribute Detection',
    subtitle: 'Beyond License Plate Recognition',
    desc: 'AI-powered analytics provide additional information about vehicles to increase situational awareness.',
    features: ['Vehicle Brand', 'Vehicle Type', 'Vehicle Color', 'Direction of Travel'],
    icon: '🚙', color: 'blue'
  },
  {
    title: 'Blacklist & Whitelist Management',
    subtitle: 'Intelligent Vehicle Authorization',
    desc: 'Automatically allow or deny vehicle access based on predefined lists.',
    features: ['Employee/VIP Access', 'Suspicious Vehicles', 'Stolen Vehicles', 'Restricted Zones'],
    icon: '📋', color: 'indigo'
  },
  {
    title: 'Real-Time Alerts',
    subtitle: 'Instant Event Notifications',
    desc: 'Receive immediate alerts when specific conditions are detected to ensure faster response times.',
    features: ['Speed Violations', 'Unauthorized Access', 'Restricted Zone Entry', 'Suspicious Activity'],
    icon: '🔔', color: 'rose'
  },
  {
    title: 'Traffic Monitoring & Analytics',
    subtitle: 'Transform Data into Actionable Intelligence',
    desc: 'Gain deeper insights into traffic behavior to improve flow and data-driven decision making.',
    features: ['Vehicle Counting', 'Traffic Density', 'Peak Hour Stats', 'Speed Analysis'],
    icon: '📊', color: 'emerald'
  },
  {
    title: 'Intelligent Search & Investigation',
    subtitle: 'Locate Vehicles in Seconds',
    desc: 'Search vehicle records using multiple parameters for rapid evidence collection.',
    features: ['License Plate', 'Vehicle Color/Brand', 'Date & Time', 'Event Type'],
    icon: '🔍', color: 'amber'
  }
];

export default function SiproCapabilitiesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('spc-vis'); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll('.spc-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .spc-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .spc-rev.spc-vis { opacity:1; transform:none; }
        .spc-d0{transition-delay:0s} .spc-d1{transition-delay:.08s} .spc-d2{transition-delay:.16s}
        .spc-card { transition: box-shadow 0.3s, transform 0.3s; }
        .spc-card:hover { box-shadow: 0 16px 40px rgba(0,0,0,0.08) !important; transform: translateY(-4px); }
        .spc-feature-pill {
          display: inline-flex; align-items: center; padding: 4px 10px;
          border-radius: 9999px; font-size: 0.7rem; font-weight: 600;
          background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0;
          white-space: nowrap; margin-right: 6px; margin-bottom: 6px;
        }
      `}</style>
      <section ref={ref} id="capabilities" className="relative bg-white py-24 lg:py-32">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
            <h2 className="spc-rev spc-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Core Capabilities
            </h2>
            <p className="spc-rev spc-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              A comprehensive suite of intelligent features designed to capture, analyze, and act upon vehicle data in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="spc-card flex flex-col p-8 rounded-3xl border border-slate-200 bg-white"
              >
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h4 className="text-[0.7rem] font-bold uppercase tracking-widest text-slate-400 mb-1">{cap.subtitle}</h4>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{cap.title}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">{cap.desc}</p>
                
                <div>
                  {cap.features.map((f, j) => (
                    <span key={j} className="spc-feature-pill">{f}</span>
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
