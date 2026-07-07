'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const applications = [
  {
    label: 'Airports',
    desc: 'Perimeter security, baggage monitoring, terminal crowd analytics, and ANPR at vehicle entry/exit.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4s-2 1-3.5 2.5L11 8 2.8 6.2l-1 1.4 5.5 4-1.3 1.5-2.3-.8-.9 1L5 15l2.7 1.5 1 .6L10.2 19l1-.9-.8-2.3 1.5-1.3z" />
      </svg>
    ),
    color: '#0161FE',
    bg: 'rgba(1,97,254,0.07)',
    border: 'rgba(1,97,254,0.18)',
  },
  {
    label: 'Smart Cities',
    desc: 'City-wide surveillance, traffic monitoring, public safety analytics, and integrated command-centre feeds.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.07)',
    border: 'rgba(14,165,233,0.2)',
  },
  {
    label: 'Healthcare',
    desc: 'Patient safety monitoring, restricted zone access alerts, medication room surveillance, and compliance recording.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    color: '#10b981',
    bg: 'rgba(16,185,129,0.07)',
    border: 'rgba(16,185,129,0.2)',
  },
  {
    label: 'Education',
    desc: 'Campus perimeter protection, safe school zones, attendance analytics, and emergency response integration.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.2)',
  },
  {
    label: 'Transportation',
    desc: 'Rail station monitoring, bus depot surveillance, vehicle counting, and ANPR for fleet management.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.07)',
    border: 'rgba(139,92,246,0.2)',
  },
  {
    label: 'Government',
    desc: 'Critical infrastructure protection, classified facility monitoring, border surveillance, and inter-agency video sharing.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.07)',
    border: 'rgba(239,68,68,0.2)',
  },
  {
    label: 'Manufacturing',
    desc: 'Production floor monitoring, safety compliance, intrusion detection, and quality-control video archiving.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    color: '#64748b',
    bg: 'rgba(100,116,139,0.07)',
    border: 'rgba(100,116,139,0.2)',
  },
];

export default function SivmsApplicationsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('sva-vis');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.sva-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .sva-rev {
          opacity: 0; transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .sva-rev.sva-vis { opacity: 1; transform: none; }
        .sva-d0{transition-delay:0s} .sva-d1{transition-delay:0.08s}
        .sva-d2{transition-delay:0.16s}

        .sva-card {
          transition: box-shadow 0.22s, transform 0.22s, border-color 0.22s;
        }
        .sva-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 36px rgba(0,0,0,0.1) !important;
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-slate-100"
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '28px 28px', opacity: 0.45,
          }}
        />
        {/* Blue blob top-right */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-[0.08]"
          style={{ background: 'radial-gradient(circle at 40% 40%, #0161FE, transparent 70%)' }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="sva-rev sva-d0 mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(1,97,254,0.07)', color: '#0161FE',
                border: '1px solid rgba(1,97,254,0.18)',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              Industry Applications
            </div>
            <h2 className="sva-rev sva-d1 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-4">
              Built for Every<br />
              <span style={{ color: '#0161FE' }}>Security Environment</span>
            </h2>
            <p className="sva-rev sva-d2 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              SiVMS™ is trusted across seven key verticals — from airports handling millions of passengers to manufacturing plants securing critical assets 24/7.
            </p>
          </div>

          {/* Application Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* First 4 across top row */}
            {applications.slice(0, 4).map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="sva-card bg-white rounded-2xl p-6 border border-slate-200 cursor-default"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: app.bg, color: app.color, border: `1px solid ${app.border}` }}
                >
                  {app.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{app.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Second row: 3 centred */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5 lg:max-w-[75%] lg:mx-auto">
            {applications.slice(4).map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.32 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="sva-card bg-white rounded-2xl p-6 border border-slate-200 cursor-default"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: app.bg, color: app.color, border: `1px solid ${app.border}` }}
                >
                  {app.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{app.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
