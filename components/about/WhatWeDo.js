'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function WhatWeDo() {
  const solutions = [
    { title: "Enterprise Video Management Systems (SiVMS™)", desc: "Centralized monitoring, recording, event management, and AI analytics integration for enterprise-scale surveillance operations." },
    { title: "Automatic Number Plate Recognition (Si.PRO™)", desc: "AI-powered vehicle recognition and traffic intelligence for access control, parking management, smart cities, and transportation applications." },
    { title: "Smart Parking Solutions (ParkSi™)", desc: "Intelligent parking management and guidance systems that optimize occupancy, automate vehicle access, and improve user experiences." },
    { title: "AI Video Analytics", desc: "Transform video streams into actionable intelligence through advanced object detection, behavior analysis, and event management." },
    { title: "Intelligent Cameras", desc: "High-performance AI-enabled cameras for surveillance, traffic monitoring, and parking management." },
    { title: "Access Control Systems", desc: "Secure and manage people and vehicle access through intelligent authentication technologies." },
    { title: "Intruder Alarm Systems", desc: "Comprehensive protection through intelligent sensors and real-time alerts." },
    { title: "Traffic Monitoring Solutions", desc: "Advanced vehicle analytics and traffic management platforms designed for smart mobility and public safety." },
  ];

  return (
    <section className="relative py-24 px-6 lg:px-10 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px", amount: 0.3 }} variants={staggerContainer}
          onViewportEnter={(e) => e?.target?.classList.add('in-view')}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              What We Do
            </span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-6">
            Comprehensive <span className="ab-accent-line text-[#0161FE]">Security Ecosystem</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-500 max-w-[800px] mx-auto font-medium">
            SecureAAi Systems provides end-to-end security and intelligent monitoring solutions that combine software, hardware, and services into a unified ecosystem.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((sol, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="group bg-white border border-slate-200 rounded-2xl p-8 hover:bg-slate-50 hover:border-slate-300 hover:shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-full bg-[#0161FE]/10 flex items-center justify-center mb-6 text-[#0161FE] group-hover:scale-110 transition-transform duration-300">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                 </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{sol.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{sol.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
