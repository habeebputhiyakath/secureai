'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    title: 'Parking Surveillance',
    subtitle: 'Vehicle Attribute Detection',
    desc: 'Detect vehicle type, brand, color, plate number, and direction of travel for comprehensive security.',
    features: ['Suspicious Vehicle Tracking', 'Stolen Vehicle Recovery', 'Restricted Area Monitoring', 'Traffic Investigation'],
    icon: '📹'
  },
  {
    title: 'Bay Monitoring',
    subtitle: 'Intelligent Occupancy Detection',
    desc: 'Monitor parking occupancy and calculate stay duration in real time to increase turnover.',
    features: ['Space Numbering', 'Red Overlay Indicators', 'Dynamic Pricing Support', 'Overstay Notifications'],
    icon: '🅿️'
  },
  {
    title: 'Parking Guidance System',
    subtitle: 'Real-Time Navigation',
    desc: 'Help drivers locate available spaces quickly to reduce congestion and improve traffic flow.',
    features: ['LED Indicators', 'Display Boards', 'Zone Navigation', 'VIP Parking Guidance'],
    icon: '🗺️'
  },
  {
    title: 'Centralized Platform',
    subtitle: 'Manage Multiple Facilities',
    desc: 'Manage multiple parking facilities from a single unified dashboard with comprehensive controls.',
    features: ['Live Monitoring', 'Occupancy Statistics', 'Vehicle Search', 'Event Logs'],
    icon: '💻'
  },
  {
    title: 'Advanced Analytics & Reporting',
    subtitle: 'Valuable Business Insights',
    desc: 'Gain valuable insights into parking behavior to optimize operations and maximize revenue.',
    features: ['Occupancy Rate', 'Peak Hours', 'Turnover Rate', 'Revenue Trends'],
    icon: '📈'
  }
];

export default function ParkingCapabilitiesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('pc-vis'); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll('.pc-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pc-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .pc-rev.pc-vis { opacity:1; transform:none; }
        .pc-d0{transition-delay:0s} .pc-d1{transition-delay:.08s} .pc-d2{transition-delay:.16s}
        .pc-card { transition: box-shadow 0.3s, transform 0.3s; }
        .pc-card:hover { box-shadow: 0 16px 40px rgba(0,0,0,0.08) !important; transform: translateY(-4px); }
        .pc-feature-pill {
          display: inline-flex; align-items: center; padding: 4px 10px;
          border-radius: 9999px; font-size: 0.7rem; font-weight: 600;
          background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0;
          white-space: nowrap; margin-right: 6px; margin-bottom: 6px;
        }
      `}</style>
      <section ref={ref} id="capabilities" className="relative bg-white py-24 lg:py-32">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
            <h2 className="pc-rev pc-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Solution Capabilities
            </h2>
            <p className="pc-rev pc-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              A comprehensive suite of intelligent features designed to optimize parking efficiency and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="pc-card flex flex-col p-8 rounded-3xl border border-slate-200 bg-white"
              >
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h4 className="text-[0.7rem] font-bold uppercase tracking-widest text-slate-400 mb-1">{cap.subtitle}</h4>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{cap.title}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">{cap.desc}</p>
                
                <div>
                  {cap.features.map((f, j) => (
                    <span key={j} className="pc-feature-pill">{f}</span>
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
