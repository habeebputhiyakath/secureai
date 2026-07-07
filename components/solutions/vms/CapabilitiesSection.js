'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    title: 'Live Monitoring',
    subtitle: 'Monitor Events in Real Time',
    desc: 'Gain complete visibility over your facilities through live video streams and centralized dashboards.',
    features: ['Multi-Camera View', 'Custom Layouts', 'Video Walls', 'Interactive Maps'],
    icon: '🖥️'
  },
  {
    title: 'Recording & Playback',
    subtitle: 'Secure Video Storage and Retrieval',
    desc: 'Store and access recordings whenever needed with flexible and reliable evidence collection.',
    features: ['Continuous Recording', 'Motion-Based', 'Timeline Playback', 'Video Export'],
    icon: '📼'
  },
  {
    title: 'Event Management',
    subtitle: 'Intelligent Event Handling',
    desc: 'Automatically detect and manage critical events to reduce operator workload and speed up response.',
    features: ['Intrusion Detection', 'Line Crossing', 'Camera Tampering', 'Alarm Triggers'],
    icon: '⚡'
  },
  {
    title: 'Multi-Site Management',
    subtitle: 'Centralized Distributed Control',
    desc: 'Provide centralized administration for distributed facilities to reduce costs and unify operations.',
    features: ['Corporate Campuses', 'Retail Chains', 'Hospitals', 'Smart Cities'],
    icon: '🏢'
  },
  {
    title: 'AI Video Analytics Integration',
    subtitle: 'Transform Video into Intelligence',
    desc: 'Integrate seamlessly with AI analytics engines for proactive security and situational awareness.',
    features: ['Human/Vehicle Detection', 'Face Recognition', 'Crowd Monitoring', 'Object Classification'],
    icon: '🧠'
  },
  {
    title: 'Advanced Search & Investigation',
    subtitle: 'Find Events Faster',
    desc: 'Locate video footage quickly using intelligent search tools based on numerous parameters.',
    features: ['Date and Time', 'Event Type', 'License Plate', 'Motion Events'],
    icon: '🔍'
  }
];

export default function VmsCapabilitiesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vc-vis'); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll('.vc-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .vc-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .vc-rev.vc-vis { opacity:1; transform:none; }
        .vc-d0{transition-delay:0s} .vc-d1{transition-delay:.08s} .vc-d2{transition-delay:.16s}
        .vc-card { transition: box-shadow 0.3s, transform 0.3s; }
        .vc-card:hover { box-shadow: 0 16px 40px rgba(0,0,0,0.08) !important; transform: translateY(-4px); }
        .vc-feature-pill {
          display: inline-flex; align-items: center; padding: 4px 10px;
          border-radius: 9999px; font-size: 0.7rem; font-weight: 600;
          background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0;
          white-space: nowrap; margin-right: 6px; margin-bottom: 6px;
        }
      `}</style>
      <section ref={ref} id="capabilities" className="relative bg-white py-24 lg:py-32">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
            <h2 className="vc-rev vc-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Core Capabilities
            </h2>
            <p className="vc-rev vc-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              A comprehensive suite of intelligent features designed to manage, analyze, and act upon video data in real-time.
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
                className="vc-card flex flex-col p-8 rounded-3xl border border-slate-200 bg-white"
              >
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h4 className="text-[0.7rem] font-bold uppercase tracking-widest text-slate-400 mb-1">{cap.subtitle}</h4>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{cap.title}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">{cap.desc}</p>
                
                <div>
                  {cap.features.map((f, j) => (
                    <span key={j} className="vc-feature-pill">{f}</span>
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
