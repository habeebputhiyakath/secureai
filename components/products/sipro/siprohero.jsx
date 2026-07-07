'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const PLATES = ['B 4521 KJ', 'DXB A 12345', 'ABC 4829', 'KL 07 AB 1234'];

export default function SiProHero() {
  const ref = useRef(null);
  const [plateIdx, setPlateIdx] = useState(0);
  const [scanning, setScanning] = useState(false);

  /* Reveal */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('sh-vis'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.sh-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Plate cycle */
  useEffect(() => {
    const id = setInterval(() => {
      setScanning(true);
      setTimeout(() => {
        setPlateIdx(i => (i + 1) % PLATES.length);
        setScanning(false);
      }, 600);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const currentPlate = PLATES[plateIdx];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .sh-wrap { font-family: 'DM Sans', sans-serif; }
        .sh-mono { font-family: 'JetBrains Mono', monospace; }

        .sh-dotgrid::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.35;
        }

        .sh-rev {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .sh-rev.sh-vis { opacity: 1; transform: none; }
        .sh-d0 { transition-delay: 0.00s; }
        .sh-d1 { transition-delay: 0.09s; }
        .sh-d2 { transition-delay: 0.18s; }
        .sh-d3 { transition-delay: 0.27s; }
        .sh-d4 { transition-delay: 0.36s; }
        .sh-d5 { transition-delay: 0.45s; }

        .sh-accent { position: relative; display: inline-block; }
        .sh-accent::after {
          content: ''; position: absolute; left: 0; bottom: -4px;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #0161FE, #5b9fff);
          border-radius: 2px; transform: scaleX(0); transform-origin: left;
          transition: transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.55s;
        }
        .sh-vis .sh-accent::after { transform: scaleX(1); }

        .sh-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.62rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
        }

        .sh-cta-primary {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          color: #fff; background: #0161FE; border: 1.5px solid #0161FE;
          border-radius: 9999px; padding: 13px 30px; text-decoration: none; cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .sh-cta-primary:hover { background: #0052d6; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(1,97,254,0.28); }
        .sh-cta-primary:hover svg { transform: translateX(3px); }
        .sh-cta-primary svg { transition: transform 0.2s; }

        .sh-cta-ghost {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          color: #374151; background: transparent; border: 1.5px solid #e2e8f0;
          border-radius: 9999px; padding: 13px 30px; text-decoration: none; cursor: pointer;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .sh-cta-ghost:hover { border-color: #0161FE; color: #0161FE; transform: translateY(-2px); }

        .sh-stat { text-align: center; }
        .sh-stat-num { font-family: 'JetBrains Mono', monospace; font-size: 1.4rem; font-weight: 700; color: #0161FE; }
        .sh-stat-lbl { font-size: 0.68rem; color: #94a3b8; font-weight: 500; margin-top: 2px; }

        .sh-sira {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 5px 12px; border-radius: 9999px;
          background: rgba(1,97,254,0.07); color: #0161FE; border: 1px solid rgba(1,97,254,0.2);
        }

        /* ── DEVICE MOCK STYLES ── */

        /* Monitor */
        .sh-monitor {
          background: #0f172a;
          border-radius: 14px;
          border: 2px solid #1e293b;
          box-shadow: 0 32px 80px rgba(0,0,0,0.28), 0 8px 24px rgba(1,97,254,0.12);
          overflow: hidden;
          position: relative;
        }
        .sh-monitor-bar {
          background: #1e293b;
          padding: 8px 14px;
          display: flex; align-items: center; gap: 6px;
          border-bottom: 1px solid #334155;
        }
        .sh-monitor-dot { width: 8px; height: 8px; border-radius: 50%; }
        .sh-monitor-tabs {
          display: flex; gap: 1px; margin-left: 16px;
          font-family: 'JetBrains Mono', monospace; font-size: 0.52rem;
        }
        .sh-monitor-tab {
          padding: 3px 10px; border-radius: 4px 4px 0 0;
          color: #64748b; cursor: pointer; white-space: nowrap;
        }
        .sh-monitor-tab.active { background: #0f172a; color: #38bdf8; }

        /* Tablet */
        .sh-tablet {
          background: #0f172a;
          border-radius: 16px;
          border: 3px solid #1e293b;
          box-shadow: 0 24px 60px rgba(0,0,0,0.35), 0 4px 16px rgba(1,97,254,0.15);
          overflow: hidden;
          position: relative;
        }
        .sh-tablet-bar {
          background: #1e293b;
          padding: 7px 12px;
          display: flex; align-items: center; gap: 6px;
          border-bottom: 1px solid #334155;
        }

        /* Phone */
        .sh-phone {
          background: #0f172a;
          border-radius: 20px;
          border: 3px solid #1e293b;
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 4px 12px rgba(1,97,254,0.18);
          overflow: hidden;
          position: relative;
        }
        .sh-phone-notch {
          background: #1e293b;
          height: 20px;
          display: flex; align-items: center; justify-content: center;
          border-bottom: 1px solid #334155;
        }
        .sh-phone-notch-pill {
          width: 50px; height: 6px; background: #0f172a; border-radius: 9999px;
        }

        /* Camera grid cell */
        .sh-cam-cell {
          background: #1a2744;
          border: 1px solid #1e3a5f;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          display: flex; align-items: center; justify-content: center;
        }
        .sh-cam-label {
          position: absolute; bottom: 3px; left: 5px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.45rem; color: #38bdf8; font-weight: 600;
          background: rgba(0,0,0,0.6); padding: 1px 4px; border-radius: 2px;
        }

        /* Scan line animation */
        .sh-scanline-sm {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #0161FE 50%, transparent);
          opacity: 0.8;
          animation: shScanSm 1.8s linear infinite;
        }
        @keyframes shScanSm { 0%{top:0%} 100%{top:100%} }

        /* Pulse dot */
        @keyframes shPulse { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .sh-pulse { animation: shPulse 1.4s ease-in-out infinite; }

        /* Alarm badge */
        .sh-alarm {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 8px 12px;
          position: absolute;
          top: -10px; left: -20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          min-width: 170px;
          z-index: 20;
        }

        /* LPR pill on phone */
        .sh-lpr-badge {
          background: rgba(1,97,254,0.12);
          border: 1px solid rgba(1,97,254,0.3);
          border-radius: 6px;
          padding: 4px 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.5rem; color: #38bdf8; font-weight: 700;
          letter-spacing: 0.06em;
        }
      `}</style>

      <section
        ref={ref}
        className="sh-wrap sh-dotgrid relative overflow-hidden bg-white border-b border-slate-100"
        style={{ paddingTop: '72px' }}
      >
        {/* Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle at 40% 40%, #dbeafe, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle at 60% 60%, #e0f2fe, transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* ── LEFT ── */}
            <div className="flex flex-col">
            
              <div className="sh-rev sh-d1 mb-3">
                <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.04] tracking-tight text-slate-900">
                  Enterprise<br />
                  <span className="sh-accent" style={{ color: '#0161FE' }}>Automatic Number</span><br />
                  Plate Recognition
                </h1>
              </div>

              <div className="sh-rev sh-d2 mb-8">
                <p className="text-slate-400 sh-mono text-sm font-medium tracking-wide">
                  Intelligent Vehicle Recognition &amp; Traffic Analytics
                </p>
              </div>

              <div className="sh-rev sh-d3 mb-10">
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
                  Si.PRO™ delivers high-accuracy vehicle identification, access control, traffic monitoring, parking management, and law enforcement capabilities — all in one intelligent platform.
                </p>
              </div>

              <div className="sh-rev sh-d4 flex flex-wrap gap-4 mb-12">
                <a href="#demo" className="sh-cta-primary">
                  Request Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a href="#capabilities" className="sh-cta-ghost">
                  View Capabilities
                </a>
              </div>

             
            </div>

            {/* ── RIGHT — 3-Device Stack ── */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              style={{ position: 'relative', height: 420 }}
            >

              {/* ── MONITOR (back, top-right) ── */}
              <div
                className="sh-monitor"
                style={{
                  position: 'absolute',
                  top: 0, right: 0,
                  width: '88%',
                  zIndex: 1,
                }}
              >
                {/* Bar */}
                <div className="sh-monitor-bar">
                  <span className="sh-monitor-dot" style={{ background: '#f87171' }} />
                  <span className="sh-monitor-dot" style={{ background: '#fbbf24' }} />
                  <span className="sh-monitor-dot" style={{ background: '#4ade80' }} />
                  <div className="sh-monitor-tabs">
                    {['Access Control', 'Alarm Manager', 'LPR', 'Analytics', 'Smart Map'].map((t, i) => (
                      <span key={t} className={`sh-monitor-tab${i === 2 ? ' active' : ''}`}>{t}</span>
                    ))}
                  </div>
                  <span className="ml-auto sh-mono" style={{ fontSize: '0.48rem', color: '#64748b' }}>NOW</span>
                </div>

                {/* Camera grid 2×3 */}
                <div style={{ padding: '8px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '4px', height: 170 }}>
                  {[
                    { label: 'Entry Gate — 01', color: '#0d1f3c', highlight: true },
                    { label: 'Parking Deck — B2', color: '#0a1a30' },
                    { label: 'Exit Lane — 03', color: '#0d1f3c' },
                    { label: 'Mfg. Station 12', color: '#0a1a30' },
                    { label: 'Loading Bay — 05', color: '#0d1f3c', highlight: true },
                    { label: 'Mfg. Station 14', color: '#0a1a30' },
                  ].map((cam, i) => (
                    <div key={i} className="sh-cam-cell" style={{ background: cam.color }}>
                      {cam.highlight && <div className="sh-scanline-sm" />}
                      {/* Fake camera grid lines */}
                      <svg width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
                        {/* Horizontal road/lane lines */}
                        <line x1="0" y1="30" x2="80" y2="30" stroke="#1e3a5f" strokeWidth="1" />
                        <line x1="0" y1="15" x2="80" y2="15" stroke="#1e3a5f" strokeWidth="0.5" />
                        <line x1="0" y1="45" x2="80" y2="45" stroke="#1e3a5f" strokeWidth="0.5" />
                        {/* Vertical */}
                        <line x1="40" y1="0" x2="40" y2="60" stroke="#1e3a5f" strokeWidth="0.5" />
                        {/* Corner brackets */}
                        <rect x="8" y="6" width="10" height="8" fill="none" stroke={cam.highlight ? '#0161FE' : '#334155'} strokeWidth="1" />
                        <rect x="62" y="6" width="10" height="8" fill="none" stroke={cam.highlight ? '#0161FE' : '#334155'} strokeWidth="1" />
                        {/* Vehicle silhouette */}
                        <rect x="28" y="22" width="24" height="12" rx="2" fill={cam.highlight ? 'rgba(1,97,254,0.25)' : 'rgba(30,58,95,0.6)'} />
                        <rect x="32" y="18" width="16" height="8" rx="1" fill={cam.highlight ? 'rgba(1,97,254,0.15)' : 'rgba(30,58,95,0.4)'} />
                        {/* Wheels */}
                        <circle cx="33" cy="35" r="3" fill={cam.highlight ? 'rgba(1,97,254,0.3)' : '#1e3a5f'} />
                        <circle cx="47" cy="35" r="3" fill={cam.highlight ? 'rgba(1,97,254,0.3)' : '#1e3a5f'} />
                      </svg>
                      {/* LP tag on highlighted */}
                      {cam.highlight && (
                        <div style={{
                          position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
                          background: '#f5e642', borderRadius: 3, padding: '2px 6px',
                          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.5rem', fontWeight: 700,
                          color: '#1e293b', letterSpacing: '0.1em', whiteSpace: 'nowrap',
                          opacity: scanning ? 0.3 : 1, transition: 'opacity 0.3s',
                        }}>
                          {scanning ? '------' : currentPlate}
                        </div>
                      )}
                      <span className="sh-cam-label">{cam.label}</span>
                      {/* Live dot */}
                      {cam.highlight && (
                        <span className="sh-pulse" style={{
                          position: 'absolute', top: 5, right: 5,
                          width: 5, height: 5, borderRadius: '50%', background: '#22c55e',
                          display: 'block',
                        }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── TABLET (front-center-left) ── */}
              <div
                className="sh-tablet"
                style={{
                  position: 'absolute',
                  bottom: 0, left: 0,
                  width: '62%',
                  zIndex: 3,
                }}
              >
                <div className="sh-tablet-bar">
                  <span className="sh-monitor-dot" style={{ background: '#f87171' }} />
                  <span className="sh-monitor-dot" style={{ background: '#fbbf24' }} />
                  <span className="sh-monitor-dot" style={{ background: '#4ade80' }} />
                  <span className="sh-mono ml-2" style={{ fontSize: '0.5rem', color: '#38bdf8' }}>Si.PRO — Live LPR Feed</span>
                  <span className="ml-auto sh-pulse" style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                </div>

                {/* Tablet body — split: camera left, data right */}
                <div style={{ display: 'flex', height: 180 }}>
                  {/* Camera view */}
                  <div style={{ width: '48%', background: '#0a1628', position: 'relative', overflow: 'hidden', borderRight: '1px solid #1e3a5f' }}>
                    <div className="sh-scanline-sm" />
                    {/* Corner brackets */}
                    {[
                      { top: 10, left: 10, borderTop: '2px solid #0161FE', borderLeft: '2px solid #0161FE' },
                      { top: 10, right: 10, borderTop: '2px solid #0161FE', borderRight: '2px solid #0161FE' },
                      { bottom: 10, left: 10, borderBottom: '2px solid #0161FE', borderLeft: '2px solid #0161FE' },
                      { bottom: 10, right: 10, borderBottom: '2px solid #0161FE', borderRight: '2px solid #0161FE' },
                    ].map((s, i) => (
                      <div key={i} style={{ position: 'absolute', width: 14, height: 14, ...s }} />
                    ))}
                    {/* Plate */}
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                      <div style={{
                        background: '#f5e642', borderRadius: 4, padding: '4px 10px',
                        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', fontWeight: 700,
                        color: '#1e293b', letterSpacing: '0.14em',
                        opacity: scanning ? 0.2 : 1, transition: 'opacity 0.3s',
                        boxShadow: '0 0 0 2px rgba(1,97,254,0.5)',
                        minWidth: 80, textAlign: 'center',
                      }}>
                        {scanning ? '------' : currentPlate}
                      </div>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.42rem', color: '#38bdf8' }}>
                        {scanning ? 'Scanning...' : '✓ Recognized'}
                      </span>
                    </div>
                  </div>

                  {/* Data panel */}
                  <div style={{ flex: 1, background: '#0f172a', padding: '8px 10px', overflowY: 'hidden' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.45rem', color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
                      Detection Output
                    </div>
                    {[
                      { k: 'PLATE',      v: scanning ? '------' : currentPlate },
                      { k: 'CONF',       v: scanning ? '---' : '98.7%' },
                      { k: 'VEHICLE',    v: scanning ? '------' : 'Sedan' },
                      { k: 'DIRECTION', v: scanning ? '---' : 'Inbound' },
                      { k: 'STATUS',     v: scanning ? '------' : 'Whitelist ✓' },
                      { k: 'SPEED',      v: scanning ? '---' : '42 km/h' },
                    ].map(r => (
                      <div key={r.k} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '4px 0', borderBottom: '1px solid #1e293b',
                        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.48rem',
                      }}>
                        <span style={{ color: '#475569' }}>{r.k}</span>
                        <span style={{ color: '#e2e8f0', fontWeight: 600, opacity: scanning ? 0.3 : 1, transition: 'opacity 0.3s' }}>{r.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── PHONE (front-right, overlapping tablet) ── */}
              <div
                className="sh-phone"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: '2%',
                  width: '28%',
                  zIndex: 4,
                }}
              >
                <div className="sh-phone-notch">
                  <div className="sh-phone-notch-pill" />
                </div>

                {/* Phone body */}
                <div style={{ background: '#0f172a', padding: '8px' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.45rem', color: '#38bdf8', fontWeight: 700 }}>Si.PRO Mobile</span>
                    <span className="sh-pulse" style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  </div>

                  {/* Alarm card */}
                  <div style={{
                    background: '#1e293b', borderRadius: 8, padding: '6px 8px', marginBottom: 6,
                    borderLeft: '2px solid #f87171',
                  }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.42rem', color: '#f87171', fontWeight: 700, marginBottom: 2 }}>
                      ⚠ ALERT
                    </div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.5rem', color: '#e2e8f0', fontWeight: 600, lineHeight: 1.3 }}>
                      Blacklist Match<br />
                      <span style={{ color: '#64748b' }}>Entry Gate — 01</span>
                    </div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.42rem', color: '#94a3b8', marginTop: 3 }}>
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} · Gate A
                    </div>
                  </div>

                  {/* Mini camera view */}
                  <div style={{ background: '#0a1628', borderRadius: 6, height: 70, position: 'relative', overflow: 'hidden', marginBottom: 6 }}>
                    <div className="sh-scanline-sm" />
                    {[
                      { top: 6, left: 6, borderTop: '1.5px solid #0161FE', borderLeft: '1.5px solid #0161FE' },
                      { top: 6, right: 6, borderTop: '1.5px solid #0161FE', borderRight: '1.5px solid #0161FE' },
                      { bottom: 6, left: 6, borderBottom: '1.5px solid #0161FE', borderLeft: '1.5px solid #0161FE' },
                      { bottom: 6, right: 6, borderBottom: '1.5px solid #0161FE', borderRight: '1.5px solid #0161FE' },
                    ].map((s, i) => (
                      <div key={i} style={{ position: 'absolute', width: 10, height: 10, ...s }} />
                    ))}
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{
                        background: '#f5e642', borderRadius: 3, padding: '2px 6px',
                        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.48rem', fontWeight: 700,
                        color: '#1e293b', letterSpacing: '0.1em',
                        opacity: scanning ? 0.2 : 1, transition: 'opacity 0.3s',
                      }}>
                        {scanning ? '---' : currentPlate}
                      </div>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div style={{ display: 'flex', gap: 4 }}>
                    {[
                      { v: '24', l: 'Today' },
                      { v: '2', l: 'Alerts' },
                      { v: '98%', l: 'Acc.' },
                    ].map(s => (
                      <div key={s.l} style={{
                        flex: 1, background: '#1e293b', borderRadius: 6, padding: '4px 0',
                        textAlign: 'center',
                      }}>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', fontWeight: 700, color: '#0161FE' }}>{s.v}</div>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.4rem', color: '#64748b', marginTop: 1 }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Alarm popup (floating above tablet) ── */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute',
                  top: 130, left: -10,
                  zIndex: 10,
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 10,
                  padding: '8px 12px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.14)',
                  minWidth: 180,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0161FE', display: 'inline-block' }} className="sh-pulse" />
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.5rem', fontWeight: 700, color: '#0161FE', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    VPROTECT MOBILE
                  </span>
                </div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.3 }}>
                  Alarm: Gate 01 / Entry Zone
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.45rem', color: '#94a3b8', marginTop: 2 }}>
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} · {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                </div>
              </motion.div>

            </motion.div>
            {/* ── END RIGHT ── */}

          </div>
        </div>
      </section>
    </>
  );
}