'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

/* ─── DATA ─────────────────────────────────────────────── */
const CORE_CAPS = [
  {
    id: 'anpr',
    title: 'High-Accuracy ANPR',
    desc: 'Recognize license plates with exceptional accuracy under varying lighting and weather conditions.',
    accent: '#0161FE',
    accentBg: 'rgba(1,97,254,0.07)',
    accentBorder: 'rgba(1,97,254,0.18)',
    glow: 'rgba(1,97,254,0.12)',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&fit=crop',
    imageAlt: 'Highway at night with light trails',
    attrs: null,
    iconPath: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="10" rx="2" /><path d="M6 11h.01M9 11h6M18 11h.01" />
      </svg>
    ),
  },
  {
    id: 'vehicle',
    title: 'Vehicle Attribute Detection',
    desc: 'Comprehensive vehicle profiling across type, brand, color, speed, and direction of travel.',
    accent: '#6366f1',
    accentBg: 'rgba(99,102,241,0.07)',
    accentBorder: 'rgba(99,102,241,0.18)',
    glow: 'rgba(99,102,241,0.12)',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80&fit=crop',
    imageAlt: 'Busy city street with multiple vehicles',
    attrs: [
      { label: 'Vehicle Type', val: 'Sedan' },
      { label: 'Vehicle Brand', val: 'Toyota' },
      { label: 'Vehicle Color', val: 'White' },
      { label: 'Speed', val: '62 km/h' },
    ],
    iconPath: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 11l1.5-4.5h11L19 11" /><rect x="2" y="11" width="20" height="6" rx="1.5" />
        <circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M2 14h20" />
      </svg>
    ),
  },
  {
    id: 'whitelist',
    title: 'Blacklist & Whitelist Management',
    desc: 'Automate vehicle authorization and trigger real-time security alerts instantly.',
    accent: '#059669',
    accentBg: 'rgba(5,150,105,0.07)',
    accentBorder: 'rgba(5,150,105,0.18)',
    glow: 'rgba(5,150,105,0.12)',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80&fit=crop',
    imageAlt: 'Security gate access control',
    attrs: null,
    iconPath: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: 'analytics',
    title: 'Traffic Analytics',
    desc: 'Deep insights across vehicle counts, density, speed profiles, and full historical search.',
    accent: '#d97706',
    accentBg: 'rgba(217,119,6,0.07)',
    accentBorder: 'rgba(217,119,6,0.18)',
    glow: 'rgba(217,119,6,0.12)',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&q=80&fit=crop',
    imageAlt: 'Aerial view of city intersection',
    attrs: [
      { label: 'Vehicle Counting', val: '1,482' },
      { label: 'Traffic Density', val: 'High' },
      { label: 'Speed Monitoring', val: '72 km/h avg' },
    ],
    iconPath: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const HERO_DATA = [
  { title: 'High-Accuracy ANPR', accent: '#0161FE' },
  { title: 'Vehicle Attribute Detection', accent: '#6366f1' },
  { title: 'Blacklist & Whitelist Management', accent: '#059669' },
  { title: 'Traffic Analytics', accent: '#d97706' },
];

const STATS = [
  { val: '98.7%', label: 'Plate accuracy', color: '#0161FE' },
  { val: '<20ms', label: 'Alert latency', color: '#059669' },
  { val: '4.8M+', label: 'Daily scans', color: '#6366f1' },
  { val: '99.98%', label: 'Uptime SLA', color: '#d97706' },
];

const TERM_LINES = [
  { text: '> system.status', color: '#0161FE', blink: false },
  { text: '  uptime: 99.98%', color: '#64748b', blink: false },
  { text: '  plates_processed: 4,821,009', color: '#64748b', blink: false },
  { text: '  alerts_today: 12', color: '#d97706', blink: false },
  { text: '> ■', color: '#0161FE', blink: true },
];

/* ─── MINI CHART ────────────────────────────────────────── */
function MiniChart() {
  const [pts, setPts] = useState([30, 45, 38, 60, 52, 70, 65, 80, 72, 88]);

  useEffect(() => {
    const id = setInterval(() => {
      setPts(p => {
        const last = p[p.length - 1];
        return [...p.slice(1), Math.max(15, Math.min(90, last + (Math.random() - 0.44) * 15))];
      });
    }, 900);
    return () => clearInterval(id);
  }, []);

  const W = 200, H = 36;
  const xs = pts.map((_, i) => (i / (pts.length - 1)) * W);
  const ys = pts.map(v => H - (v / 100) * H);
  const d = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${ys[i].toFixed(1)}`).join(' ');
  const area = `${d} L${W},${H} L0,${H} Z`;

  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', marginTop: 4 }}>
      <path d={area} fill="rgba(217,119,6,0.12)" />
      <path d={d} fill="none" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={xs[xs.length - 1].toFixed(1)} cy={ys[ys.length - 1].toFixed(1)} r="3" fill="#d97706" />
    </svg>
  );
}

/* ─── TERMINAL ──────────────────────────────────────────── */
function Terminal() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= TERM_LINES.length) return;
    const id = setTimeout(() => setVisible(v => v + 1), 280);
    return () => clearTimeout(id);
  }, [visible]);

  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', lineHeight: 1.9 }}>
      {TERM_LINES.slice(0, visible).map((l, i) => (
        <div
          key={i}
          style={{
            color: l.color,
            animation: l.blink ? 'scBlink 1s step-start infinite' : 'none',
          }}
        >
          {l.text}
        </div>
      ))}
    </div>
  );
}

/* ─── CAPABILITY CARD ───────────────────────────────────── */
function CapCard({ cap }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: `1.5px solid ${hovered ? cap.accent : '#e2e8f0'}`,
        borderRadius: 22,
        overflow: 'hidden',
        cursor: 'default',
        transition: 'all 0.3s ease',
        boxShadow: hovered
          ? `0 20px 56px ${cap.glow}, 0 2px 12px rgba(0,0,0,0.06)`
          : '0 1px 6px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-6px)' : 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image strip */}
      <div style={{ position: 'relative', height: 180, overflow: 'hidden', flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cap.image}
          alt={cap.imageAlt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.6) 100%)' }} />

        {/* Icon badge — bottom left only */}
        <div style={{
          position: 'absolute', bottom: 12, left: 14,
          width: 36, height: 36, borderRadius: 10,
          background: cap.accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
          boxShadow: `0 4px 12px ${cap.glow}`,
        }}>
          {cap.iconPath}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '18px 20px 20px', flex: 1 }}>
        <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.3, marginBottom: 8 }}>
          {cap.title}
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: '#64748b', lineHeight: 1.65, marginBottom: cap.attrs ? 12 : 0 }}>
          {cap.desc}
        </p>

        {/* Attr list */}
        {cap.attrs && (
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 5,
            maxHeight: hovered ? 300 : 0,
            overflow: 'hidden',
            opacity: hovered ? 1 : 0,
            transition: 'max-height 0.35s ease, opacity 0.3s ease',
          }}>
            {cap.attrs.map((a) => (
              <div
                key={a.label}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: cap.accentBg,
                  border: `1px solid ${cap.accentBorder}`,
                  borderRadius: 8, padding: '5px 9px',
                }}
              >
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: '#475569', fontWeight: 500 }}>{a.label}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: cap.accent, fontWeight: 600 }}>{a.val}</span>
              </div>
            ))}
            {cap.id === 'analytics' && <MiniChart />}
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div style={{
        height: 2,
        background: `linear-gradient(90deg, transparent, ${cap.accent}, transparent)`,
        margin: '0 10%',
        opacity: hovered ? 0.55 : 0,
        transition: 'opacity 0.3s',
      }} />
    </div>
  );
}

/* ─── HERO VISUAL ───────────────────────────────────────── */
function HeroVisual() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % HERO_DATA.length), 3200);
    return () => clearInterval(id);
  }, []);

  const cap = CORE_CAPS[active];
  const hero = HERO_DATA[active];

  return (
    <div style={{
      position: 'relative', borderRadius: 22, overflow: 'hidden',
      border: '1.5px solid #e2e8f0',
      boxShadow: '0 24px 80px rgba(1,97,254,0.10), 0 4px 16px rgba(0,0,0,0.07)',
      background: '#060d1a',
      aspectRatio: '16/7',
      marginBottom: 44,
    }}>
      {/* Slides */}
      {CORE_CAPS.map((c, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={c.id}
          src={c.image}
          alt={c.imageAlt}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: i === active ? 1 : 0,
            transition: 'opacity 0.9s ease',
          }}
        />
      ))}

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg,rgba(6,13,26,0.78) 0%,rgba(6,13,26,0.35) 55%,transparent 100%)',
      }} />

      {/* Reticle */}
      <div style={{
        position: 'absolute', top: '16%', left: '10%',
        width: 190, height: 58,
        border: `2px solid ${hero.accent}`,
        borderRadius: 6,
        boxShadow: `0 0 22px rgba(1,97,254,0.2)`,
        transition: 'border-color 0.5s',
      }}>
        {/* Corner ticks */}
        {[
          { top: -2, left: -2, borderTop: 3, borderLeft: 3 },
          { top: -2, right: -2, borderTop: 3, borderRight: 3 },
          { bottom: -2, left: -2, borderBottom: 3, borderLeft: 3 },
          { bottom: -2, right: -2, borderBottom: 3, borderRight: 3 },
        ].map((c, i) => (
          <div key={i} style={{
            position: 'absolute', width: 10, height: 10,
            borderColor: hero.accent, borderStyle: 'solid', borderWidth: 0,
            ...(c.borderTop ? { borderTopWidth: c.borderTop } : {}),
            ...(c.borderLeft ? { borderLeftWidth: c.borderLeft } : {}),
            ...(c.borderRight ? { borderRightWidth: c.borderRight } : {}),
            ...(c.borderBottom ? { borderBottomWidth: c.borderBottom } : {}),
            top: 'top' in c ? c.top : undefined,
            bottom: 'bottom' in c ? c.bottom : undefined,
            left: 'left' in c ? c.left : undefined,
            right: 'right' in c ? c.right : undefined,
          }} />
        ))}

        {/* Plate text */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.72rem', fontWeight: 700, color: '#fff',
          letterSpacing: '0.16em', textShadow: '0 1px 4px rgba(0,0,0,0.8)',
        }}>
          KL·07·AB·1234
        </div>

        {/* Scan line */}
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 1.5,
          background: `linear-gradient(90deg, transparent, ${hero.accent}, transparent)`,
          animation: 'scScan 1.6s ease-in-out infinite alternate',
        }} />
      </div>

      {/* Data readout */}
      <div style={{
        position: 'absolute', top: '16%', left: 'calc(10% + 208px)',
        background: 'rgba(6,13,26,0.85)', backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10, padding: '10px 14px', minWidth: 148,
      }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.48rem', color: '#38bdf8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
          DETECTED
        </div>
        {[['Plate', 'KL 07 AB 1234'], ['Conf.', '98.7%'], ['Speed', '54 km/h'], ['Dir.', 'Inbound']].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 14, marginBottom: 3 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.52rem', color: '#64748b' }}>{k}</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.52rem', color: k === 'Conf.' ? '#22c55e' : '#f1f5f9', fontWeight: 600 }}>{v}</span>
          </div>
        ))}
      </div>

      {/* Live badge */}
      <div style={{
        position: 'absolute', top: 16, right: 16,
        background: 'rgba(6,13,26,0.82)', backdropFilter: 'blur(6px)',
        border: '1px solid rgba(1,97,254,0.3)',
        borderRadius: 9999, padding: '5px 13px',
        display: 'flex', alignItems: 'center', gap: 6,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.52rem', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.13em',
      }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'scPulse 1.2s ease-in-out infinite' }} />
        LIVE · Si.PRO™
      </div>

      {/* Title */}
      <div style={{ position: 'absolute', bottom: 18, left: 22 }}>
        <div
          key={active}
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#fff', textShadow: '0 1px 6px rgba(0,0,0,0.5)', animation: 'scFadeUp 0.4s ease both' }}
        >
          {hero.title}
        </div>
      </div>

      {/* Dot nav */}
      <div style={{ position: 'absolute', bottom: 20, right: 20, display: 'flex', gap: 5 }}>
        {HERO_DATA.map((h, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? 20 : 6, height: 6,
              borderRadius: 9999,
              background: i === active ? hero.accent : 'rgba(255,255,255,0.35)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.3s',
            }}
            aria-label={h.title}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── APPLICATION CARDS ─────────────────────────────────── */
function SmartCitiesVisual() {
  return (
    <div style={{ height: 120, background: 'linear-gradient(135deg,#0a0f2e 0%,#0c1e5e 50%,#0a0f2e 100%)', position: 'relative', overflow: 'hidden' }}>
      <svg width="100%" height="90" viewBox="0 0 160 90" preserveAspectRatio="xMidYMax meet" style={{ position: 'absolute', bottom: 0 }}>
        <rect x="10" y="55" width="14" height="35" fill="rgba(1,97,254,0.4)" rx="1" />
        <rect x="28" y="40" width="18" height="50" fill="rgba(1,97,254,0.5)" rx="1" />
        <rect x="50" y="30" width="20" height="60" fill="rgba(56,189,248,0.4)" rx="1" />
        <rect x="74" y="20" width="14" height="70" fill="rgba(1,97,254,0.6)" rx="1" />
        <rect x="92" y="35" width="22" height="55" fill="rgba(56,189,248,0.35)" rx="1" />
        <rect x="118" y="45" width="16" height="45" fill="rgba(1,97,254,0.45)" rx="1" />
        <rect x="138" y="55" width="12" height="35" fill="rgba(1,97,254,0.3)" rx="1" />
        <rect x="30" y="44" width="3" height="3" fill="#38bdf8" rx="0.5" style={{ animation: 'scCityGlow 2s 0.2s ease-in-out infinite' }} />
        <rect x="35" y="44" width="3" height="3" fill="#38bdf8" rx="0.5" style={{ animation: 'scCityGlow 2s 0.8s ease-in-out infinite' }} />
        <rect x="30" y="52" width="3" height="3" fill="#38bdf8" rx="0.5" style={{ animation: 'scCityGlow 2s 1.1s ease-in-out infinite' }} />
        <rect x="52" y="34" width="3" height="3" fill="#0161FE" rx="0.5" style={{ animation: 'scCityGlow 1.8s 0.4s ease-in-out infinite' }} />
        <rect x="76" y="24" width="3" height="3" fill="#38bdf8" rx="0.5" style={{ animation: 'scCityGlow 2.2s 0.6s ease-in-out infinite' }} />
        <rect x="81" y="24" width="3" height="3" fill="#38bdf8" rx="0.5" style={{ animation: 'scCityGlow 2.2s 1.4s ease-in-out infinite' }} />
        <rect x="0" y="88" width="160" height="4" fill="rgba(1,97,254,0.15)" />
        <rect x="-20" y="82" width="14" height="6" fill="#0161FE" rx="2" style={{ animation: 'scDrive 4s linear infinite' }} />
      </svg>
      <div style={{ position: 'absolute', top: 8, left: 20, width: 2, height: 2, borderRadius: '50%', background: '#fff', opacity: 0.6, animation: 'scPulse 2s 0.3s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: 14, left: 50, width: 1.5, height: 1.5, borderRadius: '50%', background: '#fff', opacity: 0.5, animation: 'scPulse 2.5s 0.7s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: 6, right: 30, width: 2, height: 2, borderRadius: '50%', background: '#fff', opacity: 0.7, animation: 'scPulse 1.8s 1.1s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(1,97,254,0.25)', border: '1px solid rgba(1,97,254,0.35)', borderRadius: 6, padding: '4px 8px', fontFamily: "'JetBrains Mono',monospace", fontSize: '0.45rem', color: '#93c5fd' }}>LIVE MAP</div>
    </div>
  );
}

function TrafficVisual() {
  return (
    <div style={{ height: 120, background: 'linear-gradient(135deg,#0d0b2e 0%,#1a1050 50%,#0d0b2e 100%)', position: 'relative', overflow: 'hidden' }}>
      <svg width="100%" height="90" viewBox="0 0 140 90" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0 }}>
        <rect x="0" y="60" width="140" height="30" fill="rgba(99,102,241,0.1)" />
        <rect x="0" y="58" width="140" height="2" fill="rgba(99,102,241,0.3)" />
        <rect x="0" y="73" width="25" height="2" fill="rgba(255,255,255,0.15)" rx="1" />
        <rect x="35" y="73" width="25" height="2" fill="rgba(255,255,255,0.15)" rx="1" />
        <rect x="70" y="73" width="25" height="2" fill="rgba(255,255,255,0.15)" rx="1" />
        <rect x="105" y="73" width="25" height="2" fill="rgba(255,255,255,0.15)" rx="1" />
        <rect x="58" y="10" width="24" height="48" fill="rgba(0,0,0,0.5)" rx="4" />
        <circle cx="70" cy="22" r="7" fill="#ef4444" style={{ animation: 'scTlRed 6s step-start infinite' }} />
        <circle cx="70" cy="34" r="7" fill="#6b7280" style={{ animation: 'scTlAmber 6s step-start infinite' }} />
        <circle cx="70" cy="46" r="7" fill="#6b7280" style={{ animation: 'scTlGreen 6s step-start infinite' }} />
        <rect x="69" y="56" width="2" height="10" fill="rgba(255,255,255,0.2)" />
        <rect x="5" y="63" width="22" height="10" fill="rgba(99,102,241,0.6)" rx="2" style={{ animation: 'scCarRight 5s 0s linear infinite' }} />
        <rect x="80" y="63" width="18" height="10" fill="rgba(99,102,241,0.4)" rx="2" style={{ animation: 'scCarRight 5s 2s linear infinite' }} />
      </svg>
      <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 6, padding: '4px 8px', fontFamily: "'JetBrains Mono',monospace", fontSize: '0.45rem', color: '#a5b4fc' }}>FLOW: HIGH</div>
    </div>
  );
}

function AccessVisual() {
  return (
    <div style={{ height: 120, background: 'linear-gradient(135deg,#051a12 0%,#0a3326 50%,#051a12 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="120" height="90" viewBox="0 0 120 90" style={{ position: 'absolute' }}>
        <circle cx="60" cy="50" r="35" fill="none" stroke="rgba(5,150,105,0.15)" strokeWidth="1" />
        <circle cx="60" cy="50" r="25" fill="none" stroke="rgba(5,150,105,0.2)" strokeWidth="1" />
        <circle cx="60" cy="50" r="15" fill="none" stroke="rgba(5,150,105,0.3)" strokeWidth="1" />
        <g style={{ transformOrigin: '60px 50px', animation: 'scRadar 3s linear infinite' }}>
          <path d="M60 50 L60 15" stroke="rgba(5,150,105,0.7)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M60 50 L85 25" stroke="rgba(5,150,105,0.15)" strokeWidth="1" />
        </g>
        <path d="M60 38 c0 0 8 3 8 9l0 4c0 5-8 9-8 9s-8-4-8-9l0-4c0-6 8-9 8-9z" fill="rgba(5,150,105,0.2)" stroke="rgba(5,150,105,0.6)" strokeWidth="1.2" />
        <polyline points="56 50 59 53 65 47" stroke="#059669" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="75" cy="35" r="2.5" fill="#059669" style={{ animation: 'scPing 2s 0.5s ease-out infinite' }} />
      </svg>
      <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(5,150,105,0.2)', border: '1px solid rgba(5,150,105,0.3)', borderRadius: 6, padding: '4px 8px', fontFamily: "'JetBrains Mono',monospace", fontSize: '0.45rem', color: '#6ee7b7' }}>AUTHORIZED</div>
    </div>
  );
}

function ParkingVisual() {
  return (
    <div style={{ height: 120, background: 'linear-gradient(135deg,#1a1000 0%,#2d1f00 50%,#1a1000 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="140" height="90" viewBox="0 0 140 90" style={{ position: 'absolute' }}>
        <line x1="15" y1="10" x2="15" y2="80" stroke="rgba(217,119,6,0.2)" strokeWidth="0.5" />
        <line x1="50" y1="10" x2="50" y2="80" stroke="rgba(217,119,6,0.2)" strokeWidth="0.5" />
        <line x1="90" y1="10" x2="90" y2="80" stroke="rgba(217,119,6,0.2)" strokeWidth="0.5" />
        <line x1="125" y1="10" x2="125" y2="80" stroke="rgba(217,119,6,0.2)" strokeWidth="0.5" />
        <line x1="10" y1="15" x2="130" y2="15" stroke="rgba(217,119,6,0.2)" strokeWidth="0.5" />
        <line x1="10" y1="45" x2="130" y2="45" stroke="rgba(217,119,6,0.2)" strokeWidth="0.5" />
        <line x1="10" y1="75" x2="130" y2="75" stroke="rgba(217,119,6,0.2)" strokeWidth="0.5" />
        <rect x="18" y="18" width="29" height="24" fill="rgba(217,119,6,0.25)" rx="2" stroke="rgba(217,119,6,0.4)" strokeWidth="0.5" />
        <rect x="18" y="48" width="29" height="24" fill="rgba(217,119,6,0.25)" rx="2" stroke="rgba(217,119,6,0.4)" strokeWidth="0.5" />
        <rect x="53" y="18" width="34" height="24" fill="rgba(217,119,6,0.25)" rx="2" stroke="rgba(217,119,6,0.4)" strokeWidth="0.5" />
        <rect x="93" y="18" width="29" height="24" fill="rgba(5,150,105,0.15)" rx="2" stroke="rgba(5,150,105,0.4)" strokeWidth="0.5" />
        <text x="107" y="33" fill="#6ee7b7" fontSize="8" textAnchor="middle" fontFamily="monospace">FREE</text>
        <rect x="53" y="48" width="34" height="24" fill="rgba(217,119,6,0.25)" rx="2" stroke="rgba(217,119,6,0.4)" strokeWidth="0.5" />
        <rect x="93" y="48" width="29" height="24" fill="rgba(217,119,6,0.25)" rx="2" stroke="rgba(217,119,6,0.4)" strokeWidth="0.5" />
      </svg>
      <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(217,119,6,0.2)', border: '1px solid rgba(217,119,6,0.3)', borderRadius: 6, padding: '4px 8px', fontFamily: "'JetBrains Mono',monospace", fontSize: '0.45rem', color: '#fcd34d' }}>5/6 FULL</div>
    </div>
  );
}

function LawVisual() {
  return (
    <div style={{ height: 120, background: 'linear-gradient(135deg,#1a0808 0%,#300d0d 50%,#1a0808 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', width: 50, height: 50, borderRadius: '50%', border: '2px solid rgba(220,38,38,0.5)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animation: 'scRipple 2s ease-out infinite' }} />
      <div style={{ position: 'absolute', width: 50, height: 50, borderRadius: '50%', border: '2px solid rgba(220,38,38,0.4)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animation: 'scRipple 2s 0.7s ease-out infinite' }} />
      <div style={{ position: 'absolute', width: 50, height: 50, borderRadius: '50%', border: '2px solid rgba(220,38,38,0.3)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animation: 'scRipple 2s 1.4s ease-out infinite' }} />
      <div style={{ position: 'absolute', width: 40, height: 40, borderRadius: '50%', background: 'rgba(220,38,38,0.15)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3 4h4l-2 4 2 4h-4l-3 4-3-4H5l2-4-2-4h4z" /><polyline points="10 11 12 13 15 10" />
        </svg>
      </div>
      <div style={{ position: 'absolute', right: 8, top: 10, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <div style={{ background: 'rgba(220,38,38,0.2)', border: '1px solid rgba(220,38,38,0.3)', borderRadius: 4, padding: '2px 6px', fontFamily: "'JetBrains Mono',monospace", fontSize: '0.42rem', color: '#fca5a5', animation: 'scDataFlow 3s 0s ease-in-out infinite' }}>⚠ KA09CD8800</div>
        <div style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.25)', borderRadius: 4, padding: '2px 6px', fontFamily: "'JetBrains Mono',monospace", fontSize: '0.42rem', color: '#fca5a5', animation: 'scDataFlow 3s 1s ease-in-out infinite' }}>⚠ MH01AB2234</div>
      </div>
      <div style={{ position: 'absolute', bottom: 10, left: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: '0.42rem', color: 'rgba(252,165,165,0.6)' }}>ALERT · 2 MATCHES</div>
    </div>
  );
}

function LogisticsVisual() {
  return (
    <div style={{ height: 120, background: 'linear-gradient(135deg,#100820 0%,#1e1040 50%,#100820 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="140" height="90" viewBox="0 0 140 90" style={{ position: 'absolute' }}>
        <ellipse cx="70" cy="50" rx="50" ry="18" fill="none" stroke="rgba(124,58,237,0.25)" strokeWidth="1" style={{ animation: 'scSpin 8s linear infinite' }} />
        <ellipse cx="70" cy="50" rx="35" ry="13" fill="none" stroke="rgba(124,58,237,0.2)" strokeWidth="0.5" style={{ animation: 'scSpinR 6s linear infinite' }} />
        <rect x="53" y="40" width="22" height="14" fill="rgba(124,58,237,0.2)" rx="2" stroke="rgba(124,58,237,0.5)" strokeWidth="1" />
        <rect x="75" y="44" width="10" height="10" fill="rgba(124,58,237,0.15)" rx="1" stroke="rgba(124,58,237,0.4)" strokeWidth="1" />
        <circle cx="58" cy="56" r="3" fill="rgba(124,58,237,0.4)" stroke="rgba(124,58,237,0.6)" strokeWidth="0.8" />
        <circle cx="80" cy="56" r="3" fill="rgba(124,58,237,0.4)" stroke="rgba(124,58,237,0.6)" strokeWidth="0.8" />
        <circle cx="70" cy="32" r="3" fill="#7c3aed" style={{ transformOrigin: '70px 50px', animation: 'scSpin 4s linear infinite' }} />
        <circle cx="20" cy="50" r="2" fill="rgba(124,58,237,0.5)" style={{ transformOrigin: '70px 50px', animation: 'scSpinR 5s linear infinite' }} />
        <line x1="10" y1="20" x2="50" y2="42" stroke="rgba(124,58,237,0.2)" strokeWidth="0.5" strokeDasharray="3,3" />
        <line x1="130" y1="25" x2="90" y2="42" stroke="rgba(124,58,237,0.2)" strokeWidth="0.5" strokeDasharray="3,3" />
      </svg>
      <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 6, padding: '4px 8px', fontFamily: "'JetBrains Mono',monospace", fontSize: '0.45rem', color: '#c4b5fd' }}>TRACKING</div>
    </div>
  );
}

const APPLICATIONS = [
  {
    label: 'Smart Cities',
    color: '#0161FE',
    bg: 'rgba(1,97,254,0.08)',
    Visual: SmartCitiesVisual,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="7" height="14" /><rect x="14" y="3" width="7" height="18" />
      </svg>
    ),
  },
  {
    label: 'Traffic Monitoring',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    Visual: TrafficVisual,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="2" width="8" height="20" rx="2" />
        <circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="12" cy="17" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Access Control',
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    Visual: AccessVisual,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Parking Management',
    color: '#d97706',
    bg: 'rgba(217,119,6,0.08)',
    Visual: ParkingVisual,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </svg>
    ),
  },
  {
    label: 'Law Enforcement',
    color: '#dc2626',
    bg: 'rgba(220,38,38,0.08)',
    Visual: LawVisual,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 4h4l-2 4 2 4h-4l-3 4-3-4H5l2-4-2-4h4z" /><polyline points="10 11 12 13 15 10" />
      </svg>
    ),
  },
  {
    label: 'Logistics Centers',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
    Visual: LogisticsVisual,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

function AppCard({ app }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 18,
        border: `1.5px solid ${hovered ? app.color + '55' : '#e2e8f0'}`,
        background: '#fff',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'all 0.28s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? `0 12px 36px ${app.color}1A` : '0 1px 5px rgba(0,0,0,0.04)',
      }}
    >
      <app.Visual />
      <div style={{
        padding: '12px 14px 14px',
        background: hovered ? app.bg : '#fff',
        transition: 'background 0.3s',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: hovered ? `${app.color}18` : 'rgba(0,0,0,0.04)',
          border: `1px solid ${hovered ? app.color + '30' : 'rgba(0,0,0,0.07)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: hovered ? app.color : '#64748b',
          flexShrink: 0, transition: 'all 0.25s',
        }}>
          {app.icon}
        </div>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.84rem', fontWeight: 600, color: hovered ? '#0f172a' : '#475569', transition: 'color 0.25s', flex: 1 }}>
          {app.label}
        </span>
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={app.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(2px)' : 'none', transition: 'all 0.2s' }}
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </div>
  );
}

/* ─── GLOBAL CSS (injected once) ───────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

  @keyframes scPulse { 0%,100%{opacity:1} 50%{opacity:0.2} }
  @keyframes scBlink { 0%,100%{opacity:1} 49%{opacity:1} 50%{opacity:0} }
  @keyframes scFadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
  @keyframes scScan { 0%{top:5%} 100%{top:88%} }
  @keyframes scCityGlow { 0%,100%{opacity:0.5} 50%{opacity:1} }
  @keyframes scDrive { 0%{transform:translateX(0)} 100%{transform:translateX(200px)} }
  @keyframes scCarRight { 0%{transform:translateX(-120px)} 100%{transform:translateX(160px)} }
  @keyframes scTlRed { 0%,33%{fill:#ef4444} 33.1%,100%{fill:#374151} }
  @keyframes scTlAmber { 0%,33%{fill:#374151} 33.1%,55%{fill:#f59e0b} 55.1%,100%{fill:#374151} }
  @keyframes scTlGreen { 0%,55%{fill:#374151} 55.1%,99%{fill:#22c55e} 99.1%,100%{fill:#374151} }
  @keyframes scRadar { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes scPing { 0%{transform:scale(1);opacity:1} 100%{transform:scale(2.5);opacity:0} }
  @keyframes scRipple { 0%{transform:translate(-50%,-50%) scale(0.6);opacity:0.8} 100%{transform:translate(-50%,-50%) scale(2.2);opacity:0} }
  @keyframes scDataFlow { 0%{transform:translateY(0);opacity:1} 80%{transform:translateY(-8px);opacity:0.3} 100%{transform:translateY(0);opacity:1} }
  @keyframes scSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes scSpinR { from{transform:rotate(360deg)} to{transform:rotate(0deg)} }

  .sc-section { box-sizing: border-box; }
  .sc-section *, .sc-section *::before, .sc-section *::after { box-sizing: border-box; margin: 0; padding: 0; }
`;

/* ─── MAIN COMPONENT ────────────────────────────────────── */
export default function SiProCapabilities() {
  const styleInjected = useRef(false);

  useEffect(() => {
    if (styleInjected.current) return;
    styleInjected.current = true;
    const el = document.createElement('style');
    el.textContent = GLOBAL_CSS;
    document.head.appendChild(el);
    return () => { el.remove(); styleInjected.current = false; };
  }, []);

  return (
    <section
      className="sc-section"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg,#eef2ff 0%,#f8fafc 25%,#f8fafc 75%,#eef2ff 100%)',
        paddingTop: '72px',
        paddingBottom: '72px',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle,rgba(148,163,184,0.18) 1px,transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Ambient glows */}
      <div style={{ position: 'absolute', top: 0, left: '-10%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle,rgba(1,97,254,0.055),transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(99,102,241,0.055),transparent 65%)', pointerEvents: 'none' }} />

      {/* ── matches hero: max-w-[1280px] mx-auto px-6 lg:px-10 ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative' }}>

        {/* ── SECTION HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#0161FE', background: 'rgba(1,97,254,0.08)',
            border: '1.5px solid rgba(1,97,254,0.2)', borderRadius: 9999,
            padding: '5px 16px', display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 18,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#0161FE', display: 'inline-block', animation: 'scPulse 1.4s ease-in-out infinite' }} />
            Platform Capabilities
          </span>

          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(2rem,4vw,3.1rem)', fontWeight: 800,
            color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16,
          }}>
            Intelligence Built{' '}
            <span style={{ background: 'linear-gradient(135deg,#0161FE,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Into Every Frame
            </span>
          </h2>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: '#64748b', maxWidth: 510, margin: '0 auto', lineHeight: 1.7 }}>
            Si.PRO™ processes every vehicle in real time — capturing, classifying, and acting on data the moment it appears in frame.
          </p>
        </div>

        {/* ── HERO VISUAL ── */}
        <HeroVisual />

        {/* ── STATS BAR ── */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          gap: 1, background: '#e2e8f0', borderRadius: 18,
          overflow: 'hidden', border: '1.5px solid #e2e8f0', marginBottom: 56,
        }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ background: '#fff', padding: '22px 20px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.55rem', fontWeight: 800, color: s.color, lineHeight: 1, marginBottom: 6 }}>
                {s.val}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.73rem', color: '#94a3b8', fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── CAPABILITY CARDS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginBottom: 72 }}>
          {CORE_CAPS.map((cap) => (
            <CapCard key={cap.id} cap={cap} />
          ))}
        </div>

        {/* ── DIVIDER ── */}
        <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(1,97,254,0.25),transparent)', marginBottom: 52 }} />

        {/* ── APPLICATIONS HEADER ── */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 36, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.54rem', fontWeight: 700, color: '#0161FE', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 8 }}>
              Applications
            </p>
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(1.35rem,2.5vw,1.8rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15 }}>
              Deployed Across<br />Every Critical Environment
            </h3>
          </div>

          {/* Terminal */}
          <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: 14, padding: '14px 20px', minWidth: 240 }}>
            <Terminal />
          </div>
        </div>

        {/* ── APPLICATION CARDS — 3 per row ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {APPLICATIONS.map((app) => (
            <AppCard key={app.label} app={app} />
          ))}
        </div>

      </div>
    </section>
  );
}