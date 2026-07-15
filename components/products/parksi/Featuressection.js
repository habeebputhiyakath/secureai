'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Live Slot Monitoring',
    desc: 'Real-time occupancy detection across every bay via AI vision sensors and IoT floor sensors. Dashboard updates in under 80 ms.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'ANPR Integration',
    desc: '98.7 % plate recognition accuracy with seamless whitelist / blacklist enforcement and automatic barrier control.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Multi-Level Management',
    desc: 'Handle unlimited floors, zones, and bays from one cloud console. Maps update live as vehicles enter and exit.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Automated Billing',
    desc: 'Dynamic tariff engine supports hourly, daily, monthly, and EV charging rates. Payments via UPI, card, and FASTag.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Analytics & Reports',
    desc: 'Revenue trends, peak-hour heat maps, occupancy forecasts, and compliance exports — all auto-generated and schedulable.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Security & Compliance',
    desc: 'End-to-end encrypted video feeds, role-based access, audit trails, and ISO 27001-ready architecture out of the box.',
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('fs-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.fs-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .fs-rev {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .fs-rev.fs-vis { opacity: 1; transform: none; }
        .fs-d0{transition-delay:0.00s} .fs-d1{transition-delay:0.07s}
        .fs-d2{transition-delay:0.14s} .fs-d3{transition-delay:0.21s}
        .fs-d4{transition-delay:0.28s} .fs-d5{transition-delay:0.35s}
        .fs-d6{transition-delay:0.42s} .fs-d7{transition-delay:0.49s}
        .fs-card:hover {
          border-color: #a3c4fe !important;
          box-shadow: 0 6px 28px rgba(1,97,254,0.10);
          transform: translateY(-3px);
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden bg-slate-50 py-24 lg:py-32 border-t border-slate-100"
      >
        {/* Subtle dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.3,
          }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-[#0161FE] text-white text-sm font-semibold px-4 py-1 rounded">
              Key Features
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              Smart Parking Management Starts Here
            </h2>

            <p className="fs-rev fs-d2 mt-5 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              From entry gate to exit barrier, ParkSi automates every touchpoint so your team focuses on experience, not operations.
            </p>
          </div>

          {/* Cards grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
  {features.slice(0, 4).map((f, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: i * 0.12,
      }}
      style={{ willChange: 'transform, opacity' }}
      className="group bg-white text-center px-10 py-12 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 border-b-[3px] border-b-[#0161FE]"
    >
      {/* Icon */}
      <div className="mx-auto mb-8 w-[88px] h-[88px] rounded-full bg-[#0161FE] flex items-center justify-center shadow-lg group-hover:scale-105 transition">
        <div className="text-white [&>svg]:w-18 [&>svg]:h-13">
          {f.icon}
        </div>
      </div>

      <h3 className="text-[28px] font-semibold text-slate-900 mb-5">
        {f.title}
      </h3>

      <p className="text-[16px]  text-gray-500">
        {f.desc}
      </p>
    </motion.div>
  ))}
</div>
        </div>
      </section>
    </>
  );
}