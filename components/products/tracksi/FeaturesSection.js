'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const advancedAlarms = [
  {
    title: 'Vibration Alarm',
    desc: 'Detects unauthorized vehicle movement or towing attempts when parked.',
    code: 'VIB-01',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h3l2-7 3 14 3-11 2 4h7" />
      </svg>
    ),
  },
  {
    title: 'Movement Alarm',
    desc: 'Alerts you if the vehicle moves beyond a predefined radius without authorization.',
    code: 'GEO-02',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
  },
  {
    title: 'Over-speed Alarm',
    desc: 'Monitor driver compliance with real-time speed limit violation alerts.',
    code: 'SPD-03',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 17a8 8 0 1 1 15 0" />
        <path d="M12 13l3.5-3.5" />
        <path d="M12 13a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z" />
      </svg>
    ),
  },
  {
    title: 'Power Failure Alarm',
    desc: 'Immediate notification if the tracker is disconnected from vehicle power.',
    code: 'PWR-04',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3v6M15 3v6M7 9h10l-1 5a4 4 0 0 1-8 0L7 9Z" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
];

const consoleLog = [
  { t: '09:41:02', unit: 'TRK-118', event: 'Vibration detected — parked zone', level: 'warn' },
  { t: '09:38:47', unit: 'TRK-204', event: 'Speed limit exceeded — 82 km/h', level: 'crit' },
  { t: '09:35:19', unit: 'TRK-092', event: 'Power disconnected', level: 'crit' },
  { t: '09:31:56', unit: 'TRK-057', event: 'Left authorized radius', level: 'warn' },
  { t: '09:27:03', unit: 'TRK-118', event: 'Vibration cleared', level: 'ok' },
  { t: '09:22:40', unit: 'TRK-141', event: 'Power restored', level: 'ok' },
];

const levelColor = {
  warn: '#d97706',
  crit: '#dc2626',
  ok: '#059669',
};

export default function TracksiFeaturesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('tfp-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.tfp-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .tfp-rev { opacity:0; transform:translateY(24px);
          transition:opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
        .tfp-rev.tfp-vis { opacity:1; transform:none; }
        .tfp-d0{transition-delay:0s} .tfp-d1{transition-delay:.08s} .tfp-d2{transition-delay:.16s}

        .tfp-row {
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }
        .tfp-row:hover {
          background: #f8fafc;
          border-color: #dbeafe;
          transform: translateX(3px);
        }

        @keyframes tfp-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .tfp-console-track {
          animation: tfp-scroll 14s linear infinite;
        }
        .tfp-console-mask:hover .tfp-console-track {
          animation-play-state: paused;
        }

        @keyframes tfp-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .tfp-live-dot { animation: tfp-blink 1.6s ease-in-out infinite; }

        .tfp-mono { font-variant-numeric: tabular-nums; letter-spacing: .02em; }
      `}</style>

      <section ref={ref} id="features" className="relative py-24 lg:py-32" style={{ background: '#f8fafc' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle,#e2e8f0 1px,transparent 1px)', backgroundSize: '28px 28px', opacity: 0.7 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="tfp-rev tfp-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: 'rgba(37,99,235,.08)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,.2)',
                fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>
              Advanced Features
            </div>
            <h2 className="tfp-rev tfp-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Comprehensive <span style={{ color: '#2563eb' }}>Event Monitoring</span>
            </h2>
            <p className="tfp-rev tfp-d2 text-slate-500 text-lg">
              Stay informed of critical events as they happen with intelligent, configurable alarms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto items-stretch">

            {/* Signature: live console mockup */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 rounded-2xl overflow-hidden flex flex-col"
              style={{ background: '#0b1526', border: '1px solid #16233b' }}
            >
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid #16233b' }}>
                <div className="flex items-center gap-2">
                  <span className="tfp-live-dot w-2 h-2 rounded-full" style={{ background: '#38bdf8' }} />
                  <span className="tfp-mono text-[11px] font-semibold text-slate-300">ALERT CONSOLE</span>
                </div>
                <span className="tfp-mono text-[10px] text-slate-500">6 events / hr</span>
              </div>

              <div className="tfp-console-mask relative flex-1 overflow-hidden" style={{ minHeight: '280px' }}>
                <div className="tfp-console-track">
                  {[...consoleLog, ...consoleLog].map((row, i) => (
                    <div key={i} className="flex items-start gap-3 px-5 py-3" style={{ borderBottom: '1px solid #101c30' }}>
                      <span className="tfp-mono text-[10px] text-slate-500 mt-0.5 w-14 shrink-0">{row.t}</span>
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: levelColor[row.level] }} />
                      <div className="min-w-0">
                        <div className="tfp-mono text-[10px] text-cyan-400/80 mb-0.5">{row.unit}</div>
                        <div className="text-[12px] text-slate-300 leading-snug">{row.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-x-0 top-0 h-8 pointer-events-none" style={{ background: 'linear-gradient(180deg, #0b1526, transparent)' }} />
                <div className="absolute inset-x-0 bottom-0 h-8 pointer-events-none" style={{ background: 'linear-gradient(0deg, #0b1526, transparent)' }} />
              </div>

              <div className="px-5 py-4" style={{ borderTop: '1px solid #16233b' }}>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  Every alarm streams here in real time and routes to SMS or email based on your escalation rules.
                </p>
              </div>
            </motion.div>

            {/* Alarm list */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              {advancedAlarms.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="tfp-row flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-2xl"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(37,99,235,.07)', border: '1px solid rgba(37,99,235,.18)', color: '#2563eb' }}>
                    {a.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[15px] font-bold text-slate-900">{a.title}</h3>
                      <span className="tfp-mono text-[9px] px-1.5 py-0.5 rounded"
                        style={{ background: '#eff6ff', color: '#1d4ed8', border: '1px solid #dbeafe' }}>
                        {a.code}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}