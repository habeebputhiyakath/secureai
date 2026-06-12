'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  ShieldCheck, ParkingSquare, Bot, DoorOpen,
  Users, Car, Building2
} from 'lucide-react';

const hotspots = [
  { id: 1, title: 'Enterprise Security',      Icon: ShieldCheck,    desc: 'Military-level AES-256 encryption, zero-trust architecture, and air-gapped deployment options for the most sensitive environments.',      features: ['AES-256 Encryption', 'Zero Trust Architecture', 'On-Premise Deployment'], x: 22, y: 38 },
  { id: 2, title: 'Smart Parking',            Icon: ParkingSquare,  desc: 'Automated access control with real-time occupancy tracking and LPR-based vehicle validation for seamless entry and exit.',                x: 30, y: 68, features: ['Automated Gate Control', 'Real-time Occupancy', 'LPR Validation'] },
  { id: 3, title: 'AI Surveillance',          Icon: Bot,            desc: 'Self-learning neural networks that continuously improve recognition accuracy and adapt to emerging threat patterns.',                      features: ['Self-Learning AI', 'Threat Detection', 'Behavioral Analytics'],              x: 42, y: 52 },
  { id: 4, title: 'Access Control',           Icon: DoorOpen,       desc: 'Biometric synchronization and tailgating detection managed centrally through a secure cloud or on-premise interface.',                    features: ['Biometric Sync', 'Tailgating Detection', 'Cloud Management'],                x: 53, y: 35 },
  { id: 5, title: 'Crowd Intelligence',       Icon: Users,          desc: 'Advanced density heatmaps and flow analysis to detect anomalies, prevent overcrowding, and optimize space utilization.',                  features: ['Density Heatmaps', 'Flow Analysis', 'Anomaly Detection'],                    x: 58, y: 58 },
  { id: 6, title: 'Vehicle Recognition',      Icon: Car,            desc: 'Instantly identify vehicle make, model, and color, estimate speed, and trigger instant alerts for watchlist matches.',                    features: ['Make/Model/Color ID', 'Speed Estimation', 'Watchlist Alerts'],               x: 68, y: 72 },
  { id: 7, title: 'Critical Infrastructure', Icon: Building2,      desc: 'Comprehensive perimeter defense with drone integration and robust failovers for air-gapped mission-critical systems.',                     features: ['Perimeter Defense', 'Drone Integration', 'Air-gapped Systems'],              x: 76, y: 28 },
];

const AUTOPLAY_MS = 5000;

export default function WhySection() {
  const [activeId, setActiveId] = useState(1);
  const [paused,   setPaused]   = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const rafRef      = useRef(null);
  const startRef    = useRef(null);
  const sectionRef  = useRef(null);

  const advance = useCallback(() => {
    setActiveId(prev => (prev === hotspots.length ? 1 : prev + 1));
    setProgress(0);
    startRef.current = performance.now();
  }, []);

  const pick = useCallback((id) => {
    setActiveId(id);
    setProgress(0);
    startRef.current = performance.now();
  }, []);

  useEffect(() => {
    if (paused) {
      clearInterval(intervalRef.current);
      cancelAnimationFrame(rafRef.current);
      return;
    }
    startRef.current = performance.now();
    const tick = (now) => {
      setProgress(Math.min(((now - startRef.current) / AUTOPLAY_MS) * 100, 100));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    intervalRef.current = setInterval(advance, AUTOPLAY_MS);
    return () => { clearInterval(intervalRef.current); cancelAnimationFrame(rafRef.current); };
  }, [paused, activeId, advance]);

  /* ── Reveal on scroll ── */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('ws-vis');
      }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.ws-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const active = hotspots.find(h => h.id === activeId);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .ws-section { font-family: 'DM Sans', sans-serif; }

        /* Reveal */
        .ws-rev {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .ws-rev.ws-vis { opacity: 1; transform: none; }
        .ws-d0 { transition-delay: 0.00s; }
        .ws-d1 { transition-delay: 0.08s; }
        .ws-d2 { transition-delay: 0.16s; }
        .ws-d3 { transition-delay: 0.24s; }

        /* Dot grid bg */
        .ws-dotgrid::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.45;
        }

        /* Eyebrow pill */
        .ws-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* Accent underline */
        .ws-accent-line { position: relative; display: inline-block; }
        .ws-accent-line::after {
          content: '';
          position: absolute;
          left: 0; bottom: -3px;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #0161FE, #5b9fff);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.55s;
        }
        .ws-vis .ws-accent-line::after { transform: scaleX(1); }

        @keyframes ws-ping { 0% { transform: scale(1); opacity: 0.45; } 80%,100% { transform: scale(2.8); opacity: 0; } }
        @keyframes ws-card-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ws-icon-pop { 0% { transform: scale(0.7); opacity: 0; } 60% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes ws-feat-in { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes ws-scan { 0% { top: -2px; } 100% { top: 100%; } }
      `}</style>

      <section
        ref={sectionRef}
        className="ws-section ws-dotgrid relative w-full bg-white overflow-hidden border-t border-slate-100"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-label="Why SecureAAI"
      >
        {/* Soft blue blobs */}
        <div className="absolute -top-24 right-0 w-[420px] h-[420px] rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle at 40% 40%, #dbeafe, transparent 70%)' }} />
        <div className="absolute bottom-0 -left-24 w-[320px] h-[320px] rounded-full pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(circle at 60% 60%, #e0f2fe, transparent 70%)' }} />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

          {/* ── Header ── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-slate-200 pb-10 mb-10">
            <div>
              {/* Eyebrow pill */}
              <div className="ws-rev ws-d0 mb-5">
                <span
                  className="ws-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Why SecureAAI
                </span>
              </div>

              <h2 className="ws-rev ws-d1 text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900">
                The SecureAAI{' '}
                <span className="ws-accent-line" style={{ color: '#0161FE' }}>Edge</span>
              </h2>
            </div>
            <p className="ws-rev ws-d2 text-slate-500 text-[14px] leading-relaxed max-w-xs sm:text-right">
              Enterprise-grade AI security for smart cities, enterprises, and critical infrastructure worldwide.
            </p>
          </div>

          {/* Mobile card */}
          <div className="block md:hidden mb-5 ws-rev ws-d3">
            <MobileCard key={`mob-${activeId}`} active={active} />
          </div>

          {/* Map + overlay */}
          <div className="ws-rev ws-d3 relative w-full">
            {/* Map */}
            <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[16/7] overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
              <img
                src="/car.jpeg"
                alt="Smart city visualization"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              />
              {/* Subtle scan line */}
              <div className="absolute left-0 right-0 h-px z-10 pointer-events-none bg-gradient-to-r from-transparent via-[#5b9fff]/40 to-transparent animate-[ws-scan_4s_linear_infinite]" />
              {/* Edge vignette */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.35)] rounded-2xl" />
              {/* Right fade for card overlap on desktop */}
              <div className="hidden md:block absolute inset-y-0 right-0 w-[38%] pointer-events-none bg-gradient-to-l from-slate-950/70 to-transparent" />

              {/* Hotspots */}
              {hotspots.map(spot => {
                const isActive = activeId === spot.id;
                const IconComp = spot.Icon;
                return (
                  <button
                    key={spot.id}
                    className="group absolute z-20 -translate-x-1/2 -translate-y-1/2 bg-transparent border-none p-0 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#0161FE] rounded-full"
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    onClick={() => pick(spot.id)}
                    aria-label={`Show ${spot.title}`}
                    aria-pressed={isActive}
                  >
                    {/* Ping ring */}
                    {isActive && (
                      <div className="absolute -inset-2 rounded-full bg-[#0161FE]/30 animate-[ws-ping_1.6s_ease-out_infinite] pointer-events-none" />
                    )}
                    {/* Dot */}
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-all duration-300
                        ${isActive
                          ? 'w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] text-white border-2 border-white shadow-[0_0_0_4px_rgba(1,97,254,0.25),0_8px_24px_rgba(0,0,0,0.4)]'
                          : 'w-7 h-7 sm:w-8 sm:h-8 border-2 border-white/80 shadow-md hover:scale-110'
                        }`}
                      style={{
                        background: isActive ? '#0161FE' : 'rgba(1,97,254,0.55)',
                      }}
                    >
                      {isActive ? (
                        <IconComp size={20} strokeWidth={1.75} />
                      ) : (
                        <span className="text-white font-bold text-[11px] sm:text-[12px] leading-none">
                          {spot.id}
                        </span>
                      )}
                    </div>
                    {/* Tooltip */}
                    {!isActive && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 whitespace-nowrap bg-slate-900 text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                        {spot.title}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Info card — desktop overlay */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[clamp(260px,28%,320px)] z-30">
              <InfoCard
                key={activeId}
                active={active}
                progress={progress}
                hotspots={hotspots}
                onPick={pick}
                activeId={activeId}
              />
            </div>
          </div>

          {/* Dot nav */}
          <div className="ws-rev ws-d3 flex justify-center items-center gap-2 mt-7">
            {hotspots.map(h => (
              <button
                key={h.id}
                onClick={() => pick(h.id)}
                aria-label={h.title}
                className="block h-[3px] rounded-full border-none p-0 cursor-pointer transition-all duration-300"
                style={{
                  width:      activeId === h.id ? 28 : 8,
                  background: activeId === h.id ? '#0161FE' : '#cbd5e1',
                }}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

/* ── Info Card ── */
function InfoCard({ active, progress, hotspots, onPick, activeId }) {
  const IconComp = active.Icon;
  return (
    <div className="relative flex flex-col overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-[0_24px_60px_rgba(0,0,0,0.12)] p-6 pb-5 animate-[ws-card-in_0.4s_ease_both]">

      {/* Index label */}
      <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-400 block mb-4">
        0{active.id} / 0{hotspots.length} &nbsp;·&nbsp; Feature
      </span>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 animate-[ws-icon-pop_0.45s_ease_both]"
        style={{ background: 'rgba(1,97,254,0.08)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}
      >
        <IconComp size={20} strokeWidth={1.75} />
      </div>

      {/* Title */}
      <h3 className="text-[17px] font-bold text-slate-900 tracking-tight leading-snug mb-2">
        {active.title}
      </h3>

      {/* Desc */}
      <p className="text-[13px] text-slate-500 leading-relaxed mb-5">
        {active.desc}
      </p>

      {/* Features */}
      <div className="flex flex-col gap-2 mb-5">
        {active.features.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 animate-[ws-feat-in_0.3s_ease_both]"
            style={{ animationDelay: `${(i + 1) * 0.07}s` }}
          >
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#0161FE' }} />
            <span className="text-[12px] font-semibold text-slate-700 leading-none">{f}</span>
          </div>
        ))}
      </div>

      {/* Progress strips */}
      <div className="flex gap-1.5 pt-4 border-t border-slate-100">
        {hotspots.map(h => {
          const isA = h.id === activeId;
          return (
            <button
              key={h.id}
              className="flex-1 h-[3px] rounded-full overflow-hidden cursor-pointer bg-slate-100 border-none p-0"
              onClick={() => onPick(h.id)}
              aria-label={h.title}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width:      isA ? `${progress}%` : h.id < activeId ? '100%' : '0%',
                  transition: isA ? 'none' : 'width 0.3s ease',
                  opacity:    h.id < activeId ? 0.3 : 1,
                  background: '#0161FE',
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Mobile Card ── */
function MobileCard({ active }) {
  const IconComp = active.Icon;
  return (
    <div className="relative rounded-2xl overflow-hidden p-5 bg-white border border-slate-200 shadow-sm animate-[ws-card-in_0.4s_ease_both]">
      <div className="flex items-start gap-3.5 mb-3.5">
        <div
          className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center animate-[ws-icon-pop_0.45s_ease_both]"
          style={{ background: 'rgba(1,97,254,0.08)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}
        >
          <IconComp size={20} strokeWidth={1.75} />
        </div>
        <div>
          <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-400 block mb-1">
            0{active.id} / 07 · Feature
          </span>
          <h3 className="text-[16px] font-bold text-slate-900 tracking-tight leading-snug m-0">
            {active.title}
          </h3>
        </div>
      </div>
      <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{active.desc}</p>
      <div className="flex flex-col gap-2">
        {active.features.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 animate-[ws-feat-in_0.3s_ease_both]"
            style={{ animationDelay: `${(i + 1) * 0.07}s` }}
          >
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#0161FE' }} />
            <span className="text-[12px] font-semibold text-slate-700 leading-none">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}