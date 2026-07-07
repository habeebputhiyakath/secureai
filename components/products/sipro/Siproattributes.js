'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ATTRS = [
  {
    key: 'VEHICLE TYPE',
    values: ['Sedan', 'SUV', 'Truck', 'Bus', 'Motorcycle', 'Van'],
    side: 'left',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v5a2 2 0 0 1-2 2h-2" />
        <circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
  },
  {
    key: 'VEHICLE BRAND',
    values: ['Toyota', 'Mercedes', 'BMW', 'Ford', 'Hyundai', 'Nissan'],
    side: 'left',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    key: 'VEHICLE COLOR',
    values: ['White', 'Black', 'Silver', 'Red', 'Blue', 'Gray'],
    swatches: ['#f1f5f9', '#1e293b', '#94a3b8', '#ef4444', '#3b82f6', '#6b7280'],
    side: 'left',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    key: 'SPEED',
    values: ['42 km/h', '67 km/h', '89 km/h', '31 km/h', '104 km/h', '55 km/h'],
    side: 'right',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    key: 'DIRECTION',
    values: ['Inbound', 'Outbound', 'Left Turn', 'Right Turn', 'Stationary', 'U-Turn'],
    side: 'right',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" />
      </svg>
    ),
  },
];

const STATS = [
  { val: '98.7%', label: 'Plate accuracy' },
  { val: '5',     label: 'Attributes detected' },
  { val: '<50ms', label: 'Detection latency' },
  { val: '4.8M+', label: 'Daily scans' },
  { val: '99.98%',label: 'Uptime SLA' },
];

const PLATES = [
  'KL 07 AB 1234',
  'MH 01 AB 2234',
  'DL 4C BF 1234',
  'KA 09 CD 8800',
  'TN 22 Y 5678',
];

/* ─── ATTR CARD ─────────────────────────────────────────── */
function AttrCard({ attr, delay, visible }) {
  const [valIdx, setValIdx] = useState(0);
  const [cycling, setCycling] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const interval = 1800 + delay * 10;
    const timeout = setTimeout(() => {
      const id = setInterval(() => {
        setActive(true);
        setCycling(true);
        setTimeout(() => {
          setValIdx(i => (i + 1) % attr.values.length);
          setCycling(false);
        }, 280);
        setTimeout(() => setActive(false), 800);
      }, interval);
      return () => clearInterval(id);
    }, 800 + delay * 80);
    return () => clearTimeout(timeout);
  }, [visible]);

  const currentSwatch = attr.swatches?.[valIdx];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: delay * 0.08 + 0.2 }}
      style={{
        background: active ? 'rgba(1,97,254,0.10)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${active ? 'rgba(1,97,254,0.50)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 12,
        padding: '12px 16px',
        width: '100%',
        transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
        boxShadow: active ? '0 0 0 1px rgba(1,97,254,0.15)' : 'none',
        cursor: 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        {/* Icon */}
        <div style={{
          width: 28, height: 28, borderRadius: 7,
          background: 'rgba(1,97,254,0.18)', color: '#60a5fa',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          {attr.icon}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Label */}
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.48rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.30)', marginBottom: 3,
          }}>
            {attr.key}
          </div>

          {/* Value */}
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.8rem', fontWeight: 600, color: '#fff',
            display: 'flex', alignItems: 'center', gap: 6,
            minHeight: 20,
            opacity: cycling ? 0 : 1,
            transform: cycling ? 'translateY(-4px)' : 'translateY(0)',
            transition: 'opacity 0.25s, transform 0.25s',
          }}>
            {currentSwatch && (
              <span style={{
                width: 10, height: 10, borderRadius: '50%', flexShrink: 0,
                background: currentSwatch,
                border: attr.values[valIdx] === 'White' ? '1px solid rgba(255,255,255,0.3)' : 'none',
                transition: 'background 0.3s',
              }} />
            )}
            {attr.values[valIdx]}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── PLATE BADGE ───────────────────────────────────────── */
function PlateBadge({ visible }) {
  const [plateIdx, setPlateIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setPlateIdx(i => (i + 1) % PLATES.length);
        setFading(false);
      }, 300);
    }, 2800);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <div style={{
      position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)',
      background: '#f5e642', borderRadius: 4, padding: '4px 12px',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.68rem', fontWeight: 700, color: '#1e293b', letterSpacing: '0.14em',
      whiteSpace: 'nowrap',
      opacity: fading ? 0.1 : 1, transition: 'opacity 0.3s',
    }}>
      {PLATES[plateIdx]}
    </div>
  );
}

/* ─── MAIN COMPONENT ────────────────────────────────────── */
export default function SiProAttributes() {
const ref = useRef(null);  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setVisible(true); }),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const leftAttrs  = ATTRS.filter(a => a.side === 'left');
  const rightAttrs = ATTRS.filter(a => a.side === 'right');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .sa-section { font-family: 'DM Sans', sans-serif; }

        .sa-dotgrid { position: relative; }
        .sa-dotgrid::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        @keyframes saPulse   { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes saBeam    { 0%{top:0%} 100%{top:calc(100% - 2px)} }

        .sa-beam {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #0161FE, #38bdf8, #0161FE, transparent);
          opacity: 0.85;
          animation: saBeam 2.4s ease-in-out infinite;
        }
        .sa-beam-glow {
          position: absolute; left: 0; right: 0; height: 40px;
          background: linear-gradient(180deg, rgba(1,97,254,0), rgba(1,97,254,0.10), rgba(1,97,254,0));
          animation: saBeam 2.4s ease-in-out infinite;
          transform: translateY(-20px);
          pointer-events: none;
        }

        .sa-stat-cell:hover { background: rgba(1,97,254,0.08) !important; }
      `}</style>

      
      <div   
        ref={ref}
        className="sa-section sa-dotgrid overflow-hidden"
        style={{ background: '#060e1e', position: 'relative' }}
      >
        {/* Ambient glows */}
        <div style={{ position:'absolute', top:'-100px', left:'-100px', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(1,97,254,0.06),transparent 65%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-100px', right:'-100px', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(56,189,248,0.04),transparent 65%)', pointerEvents:'none' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 40px', position: 'relative' }}>

          {/* ── HEADER ── */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#60a5fa', background: 'rgba(1,97,254,0.10)',
              border: '1.5px solid rgba(1,97,254,0.22)', borderRadius: 9999,
              padding: '5px 16px', display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 18,
            }}>
              <span style={{ width:5, height:5, borderRadius:'50%', background:'#60a5fa', display:'inline-block', animation:'saPulse 1.4s ease-in-out infinite' }} />
              Vehicle Attribute Detection
            </span>

            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(1.9rem,3.5vw,2.8rem)', fontWeight: 800,
              color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 14,
            }}>
              Beyond the plate.{' '}
              <span style={{ background: 'linear-gradient(135deg,#0161FE,#38bdf8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                Full vehicle profile.
              </span>
            </h2>

            <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:'0.92rem', color:'rgba(255,255,255,0.42)', maxWidth:480, margin:'0 auto', lineHeight:1.7 }}>
              In milliseconds, Si.PRO™ builds a complete vehicle profile — type, brand, colour, speed, and direction — simultaneously with plate recognition.
            </p>
          </div>

          {/* ── STAGE: left attrs | scanner | right attrs ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 340px 1fr',
            gap: 24,
            alignItems: 'center',
            marginBottom: 52,
          }}>

            {/* Left attrs */}
            <div style={{ display:'flex', flexDirection:'column', gap:10, alignItems:'flex-end' }}>
              {leftAttrs.map((attr, i) => (
                <AttrCard key={attr.key} attr={attr} delay={i} visible={visible} />
              ))}
            </div>

            {/* Scanner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{ position: 'relative', width: 340, height: 220, margin: '0 auto' }}
            >
              {/* Frame */}
              <div style={{
                position: 'absolute', inset: 0,
                border: '1.5px solid rgba(1,97,254,0.35)',
                borderRadius: 12,
                background: 'rgba(1,97,254,0.04)',
                overflow: 'hidden',
              }}>
                {/* Scan beam */}
                <div className="sa-beam" />
                <div className="sa-beam-glow" />

                {/* Corner ticks */}
                {[
                  { top: -1, left: -1, borderTop: '2px solid #0161FE', borderLeft: '2px solid #0161FE', borderRadius: '4px 0 0 0' },
                  { top: -1, right: -1, borderTop: '2px solid #0161FE', borderRight: '2px solid #0161FE', borderRadius: '0 4px 0 0' },
                  { bottom: -1, left: -1, borderBottom: '2px solid #0161FE', borderLeft: '2px solid #0161FE', borderRadius: '0 0 0 4px' },
                  { bottom: -1, right: -1, borderBottom: '2px solid #0161FE', borderRight: '2px solid #0161FE', borderRadius: '0 0 4px 0' },
                ].map((s, i) => (
                  <div key={i} style={{ position:'absolute', width:16, height:16, ...s }} />
                ))}

                {/* Vehicle SVG */}
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <svg width="280" height="140" viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Body */}
                    <rect x="20" y="72" width="240" height="40" rx="6" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
                    {/* Cabin */}
                    <path d="M72 72 L88 38 L192 38 L208 72Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                    {/* Windows */}
                    <path d="M98 68 L106 44 L140 44 L140 68Z" fill="rgba(56,189,248,0.12)" stroke="rgba(56,189,248,0.25)" strokeWidth="0.8"/>
                    <path d="M144 68 L144 44 L174 44 L182 68Z" fill="rgba(56,189,248,0.12)" stroke="rgba(56,189,248,0.25)" strokeWidth="0.8"/>
                    {/* Front lights */}
                    <rect x="238" y="78" width="16" height="8" rx="2" fill="rgba(251,191,36,0.4)" stroke="rgba(251,191,36,0.6)" strokeWidth="0.8"/>
                    {/* Rear lights */}
                    <rect x="26" y="78" width="14" height="8" rx="2" fill="rgba(239,68,68,0.35)" stroke="rgba(239,68,68,0.5)" strokeWidth="0.8"/>
                    {/* Wheels */}
                    <circle cx="72" cy="112" r="18" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                    <circle cx="72" cy="112" r="9" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
                    <circle cx="208" cy="112" r="18" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                    <circle cx="208" cy="112" r="9" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
                    {/* Ground shadow */}
                    <ellipse cx="140" cy="132" rx="110" ry="6" fill="rgba(0,0,0,0.25)"/>
                    {/* Detection dots */}
                    <circle cx="140" cy="72" r="2.5" fill="#0161FE" opacity="0.8" style={{ animation:'saPulse 1.6s ease-in-out infinite' }}/>
                    <circle cx="72"  cy="78" r="2"   fill="#38bdf8" opacity="0.7" style={{ animation:'saPulse 1.6s 0.4s ease-in-out infinite' }}/>
                    <circle cx="208" cy="78" r="2"   fill="#38bdf8" opacity="0.7" style={{ animation:'saPulse 1.6s 0.8s ease-in-out infinite' }}/>
                  </svg>
                </div>

                {/* Plate badge */}
                <PlateBadge visible={visible} />

                {/* Live badge */}
                <div style={{
                  position:'absolute', top:10, right:10,
                  background:'rgba(6,13,26,0.82)', backdropFilter:'blur(6px)',
                  border:'1px solid rgba(1,97,254,0.3)',
                  borderRadius:9999, padding:'4px 10px',
                  display:'flex', alignItems:'center', gap:5,
                  fontFamily:"'JetBrains Mono', monospace",
                  fontSize:'0.48rem', fontWeight:700, color:'#38bdf8', letterSpacing:'0.12em',
                }}>
                  <span style={{ width:5, height:5, borderRadius:'50%', background:'#22c55e', display:'inline-block', animation:'saPulse 1.2s ease-in-out infinite' }} />
                  LIVE · Si.PRO™
                </div>
              </div>
            </motion.div>

            {/* Right attrs */}
            <div style={{ display:'flex', flexDirection:'column', gap:10, alignItems:'flex-start' }}>
              {rightAttrs.map((attr, i) => (
                <AttrCard key={attr.key} attr={attr} delay={i + leftAttrs.length} visible={visible} />
              ))}
            </div>

          </div>

         

        </div>
      </div>
    </>
  );
}