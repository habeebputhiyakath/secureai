'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const swFeatures = [
  'Real-time vehicle tracking on interactive maps',
  'Historical route playback and analysis',
  'Custom geofencing and zone management',
  'Comprehensive fleet utilization reports',
  'Real-time alert notifications (SMS/Email)',
  'Driver behavior monitoring',
  'Multi-device support (Desktop, Tablet, Mobile)',
];

export default function TracksiSoftwareSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('tsw-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.tsw-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .tsw-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .tsw-rev.tsw-vis { opacity:1; transform:none; }
        .tsw-d0{transition-delay:0s} .tsw-d1{transition-delay:.08s} .tsw-d2{transition-delay:.16s}

        .tsw-list-item {
          display: flex; align-items: center; gap: 12px;
          font-size: 0.92rem; color: #b9c6dc; margin-bottom: 13px;
        }
        .tsw-check {
          flex-shrink: 0; width: 22px; height: 22px; border-radius: 7px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(56,189,248,.18), rgba(37,99,235,.12));
          border: 1px solid rgba(56,189,248,.35);
          color: #38bdf8;
        }

        @keyframes tsw-drift {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(-3%, 4%); }
        }
        @keyframes tsw-drift2 {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(4%, -3%); }
        }
        .tsw-orb-a { animation: tsw-drift 14s ease-in-out infinite; }
        .tsw-orb-b { animation: tsw-drift2 18s ease-in-out infinite; }

        @keyframes tsw-dash {
          to { stroke-dashoffset: -100; }
        }
        .tsw-route-path {
          stroke-dasharray: 6 5;
          animation: tsw-dash 3.2s linear infinite;
        }

        @keyframes tsw-move-dot {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        .tsw-vehicle {
          offset-path: path('M10,82 Q28,62 46,70 T88,22');
          animation: tsw-move-dot 5.5s ease-in-out infinite alternate;
        }

        @keyframes tsw-radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .tsw-radar { animation: tsw-radar-sweep 4s linear infinite; transform-origin: 50% 50%; }

        @keyframes tsw-ping {
          0% { transform: scale(1); opacity: .55; }
          100% { transform: scale(2.6); opacity: 0; }
        }
        .tsw-ping-ring {
          animation: tsw-ping 2.2s cubic-bezier(0,0,.2,1) infinite;
        }

        @keyframes tsw-scan-line {
          0% { transform: translateY(-10%); opacity: 0; }
          10% { opacity: .8; }
          90% { opacity: .8; }
          100% { transform: translateY(110%); opacity: 0; }
        }
        .tsw-scanline { animation: tsw-scan-line 3.6s ease-in-out infinite; }

        @keyframes tsw-glow-pulse {
          0%, 100% { opacity: .5; }
          50% { opacity: 1; }
        }
        .tsw-glow-dot { animation: tsw-glow-pulse 2s ease-in-out infinite; }

        .tsw-mono { font-variant-numeric: tabular-nums; letter-spacing: .04em; }
      `}</style>

      <section ref={ref} id="software" className="relative py-24 lg:py-36 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #060c18 0%, #0a1628 55%, #071120 100%)' }}>

        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="tsw-orb-a absolute -top-32 -left-24 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl"
            style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)' }} />
          <div className="tsw-orb-b absolute bottom-0 right-0 w-[560px] h-[560px] rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(#7dd3fc 1px, transparent 1px), linear-gradient(90deg, #7dd3fc 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Visual Side — live dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                aspectRatio: '16/10',
                background: 'linear-gradient(160deg, #0d1b30 0%, #0a1424 100%)',
                border: '1px solid rgba(56,189,248,.18)',
                boxShadow: '0 0 0 1px rgba(56,189,248,.05), 0 30px 80px -20px rgba(37,99,235,.35)'
              }}
            >
              {/* Title bar */}
              <div className="absolute top-0 left-0 right-0 h-11 flex items-center px-4 gap-2 z-10"
                style={{ background: 'rgba(10,20,36,.7)', borderBottom: '1px solid rgba(56,189,248,.12)', backdropFilter: 'blur(6px)' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(248,113,113,.4)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(250,204,21,.4)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(74,222,128,.4)' }} />
                <div className="ml-auto flex items-center gap-1.5 pr-1">
                  <span className="tsw-glow-dot w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="tsw-mono text-[10px] text-cyan-300/80">LIVE</span>
                </div>
              </div>

              {/* Sidebar */}
              <div className="absolute top-11 left-0 bottom-0 w-44 p-4 flex flex-col gap-2.5"
                style={{ background: 'rgba(6,13,25,.5)', borderRight: '1px solid rgba(56,189,248,.1)' }}>
                {['Fleet Overview','Live Map','Geofences','Reports','Drivers'].map((label, i) => (
                  <div key={label} className="h-7 rounded-md flex items-center px-2.5 text-[10px]"
                    style={{
                      background: i === 1 ? 'rgba(37,99,235,.22)' : 'rgba(148,163,184,.06)',
                      border: i === 1 ? '1px solid rgba(56,189,248,.3)' : '1px solid transparent',
                      color: i === 1 ? '#7dd3fc' : '#64748b'
                    }}>
                    {label}
                  </div>
                ))}
              </div>

              {/* Map area */}
              <div className="absolute top-11 left-44 right-0 bottom-0 p-5">
                <div className="relative w-full h-full rounded-2xl overflow-hidden"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #102240 0%, #060d1c 75%)',
                    border: '1px solid rgba(56,189,248,.12)'
                  }}>

                  {/* grid */}
                  <div className="absolute inset-0 opacity-[0.12]" style={{
                    backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
                    backgroundSize: '28px 28px'
                  }} />

                  {/* scan line */}
                  <div className="tsw-scanline absolute left-0 right-0 h-16 pointer-events-none"
                    style={{ background: 'linear-gradient(180deg, transparent, rgba(56,189,248,.12), transparent)' }} />

                  {/* route + moving vehicle */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M10,82 Q28,62 46,70 T88,22" fill="none" stroke="#1d4ed8" strokeWidth="0.6" opacity="0.35" />
                    <path className="tsw-route-path" d="M10,82 Q28,62 46,70 T88,22" fill="none" stroke="#38bdf8" strokeWidth="0.9" strokeLinecap="round" />
                    <circle cx="10" cy="82" r="1.6" fill="#0ea5e9" />
                    <g className="tsw-ping-ring" style={{ transformOrigin: '88px 22px' }}>
                      <circle cx="88" cy="22" r="2.5" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
                    </g>
                    <circle cx="88" cy="22" r="1.8" fill="#38bdf8" />
                  </svg>

                  {/* animated vehicle dot along path (HTML offset-path) */}
                  <div className="tsw-vehicle absolute w-3 h-3 -ml-1.5 -mt-1.5 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, #7dd3fc 0%, #2563eb 70%)',
                      boxShadow: '0 0 12px 3px rgba(56,189,248,.7)'
                    }} />

                  {/* radar sweep, top-left corner accent */}
                  <div className="absolute top-4 left-4 w-14 h-14 opacity-70">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(56,189,248,.25)" strokeWidth="1" />
                      <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(56,189,248,.18)" strokeWidth="1" />
                      <g className="tsw-radar">
                        <path d="M50,50 L50,4 A46,46 0 0,1 88,28 Z" fill="url(#tswRadarGrad)" opacity="0.5" />
                      </g>
                      <defs>
                        <linearGradient id="tswRadarGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* stat chip */}
                  <div className="absolute bottom-3 right-3 rounded-lg px-3 py-2"
                    style={{ background: 'rgba(6,13,25,.75)', border: '1px solid rgba(56,189,248,.2)', backdropFilter: 'blur(4px)' }}>
                    <div className="tsw-mono text-[9px] text-slate-400 mb-0.5">ACTIVE UNITS</div>
                    <div className="tsw-mono text-sm font-bold text-cyan-300">128 / 134</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <div className="order-1 lg:order-2">
              <div className="tsw-rev tsw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: 'rgba(37,99,235,.14)', color: '#7dd3fc', border: '1px solid rgba(56,189,248,.28)',
                  fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>
                Software Platform
              </div>
              <h2 className="tsw-rev tsw-d1 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
                Centralized{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #38bdf8, #6366f1)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>
                  Fleet Visibility
                </span>
              </h2>
              <p className="tsw-rev tsw-d2 text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
                Manage your entire fleet from a single, intuitive interface. Our GPS tracking software translates raw telemetry data into actionable intelligence, allowing you to optimize routes, reduce costs, and improve safety.
              </p>

              <div className="space-y-1">
                {swFeatures.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="tsw-list-item"
                  >
                    <span className="tsw-check">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {f}
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