'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const gallery = [
  { id: 0, label: 'Front view', img: 'https://picsum.photos/seed/tr100-front/700/700' },
  { id: 1, label: 'Ports view', img: 'https://picsum.photos/seed/tr100-ports/700/700' },
  { id: 2, label: 'Install view', img: 'https://picsum.photos/seed/tr100-install/700/700' },
  { id: 3, label: 'Spec view', img: 'https://picsum.photos/seed/tr100-spec/700/700' },
];

// Small inline icon set — kept dependency-free, reused across matching feature types
const ICONS = {
  pin: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
  key: <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />,
  history: <path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5 M12 7v5l4 2" />,
  ruler: <path d="M3 8h18v8H3z M7 8v3 M11 8v3 M15 8v3 M19 8v3" />,
  check: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3" />,
  gauge: <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z M12 12l4-4 M12 8v1" />,
  wave: <path d="M2 12h3l2-8 4 16 3-11 2 5h6" />,
  battery: <path d="M2 8h16v8H2z M18 10h2v4h-2z M5 11h5v2H5z" />,
  message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
  chip: <path d="M6 6h12v12H6z M9 1v3 M15 1v3 M9 20v3 M15 20v3 M1 9h3 M1 15h3 M20 9h3 M20 15h3" />,
  refresh: <path d="M23 4v6h-6 M1 20v-6h6 M3.51 9a9 9 0 0 1 14.85-3.36L23 10 M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />,
  toggle: <path d="M17 4H7a8 8 0 0 0 0 16h10a8 8 0 0 0 0-16z M7 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />,
  power: <path d="M18.36 6.64a9 9 0 1 1-12.73 0 M12 2v10" />,
  bolt: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  engine: <path d="M14 7h4l2 3v5h-2 M2 15V9h8l2-2h2 M6 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M16 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
  mic: <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z M19 10v2a7 7 0 0 1-14 0v-2 M12 19v4 M8 23h8" />,
  sos: <path d="M12 9v4 M12 17h.01 M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h17a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />,
};

const featureGroups = [
  {
    name: 'Core Tracking & Positioning',
    accent: '#0161FE',
    items: [
      { text: 'GPS/LBS realtime location', icon: 'pin', tag: 'Key Feature' },
      { text: 'ACC ignition signal detection', icon: 'key', tag: 'Key Feature' },
      { text: 'Historical track playback', icon: 'history' },
      { text: 'More accurate mileage calculation', icon: 'ruler' },
      { text: 'ACC status check', icon: 'check' },
    ],
  },
  {
    name: 'Alerts & Security',
    accent: '#DC2626',
    items: [
      { text: 'Over speed alarm', icon: 'gauge' },
      { text: 'Vibration alarm', icon: 'wave' },
      { text: 'Movement alarm', icon: 'wave' },
      { text: 'Power failure alarm', icon: 'power' },
      { text: 'SOS button', icon: 'sos', tag: 'Add-on' },
    ],
  },
  {
    name: 'Connectivity & Data',
    accent: '#7C3AED',
    items: [
      { text: 'Support TCP/UDP & SMS', icon: 'message' },
      { text: 'Built-in 3 protocols, switchable by SMS command', icon: 'toggle', tag: 'Key Feature' },
      { text: 'Blind area data reupload', icon: 'refresh' },
      { text: 'Built-in memory', icon: 'chip' },
      { text: 'Microphone', icon: 'mic', tag: 'Add-on' },
    ],
  },
  {
    name: 'Power & Hardware',
    accent: '#059669',
    items: [
      { text: 'Built-in backup battery', icon: 'battery' },
      { text: 'Sleeping mode', icon: 'moon' },
      { text: 'Wide voltage support', icon: 'bolt' },
      { text: 'Remote engine control', icon: 'engine', tag: 'Add-on' },
    ],
  },
];

function FeatureIcon({ id, color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[id]}
    </svg>
  );
}

export default function GPSTrackerProduct() {
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <>
      <style>{`
        @keyframes gtpPulse { 0%,100%{opacity:1} 50%{opacity:.25} }

        .gtp-section-label {
          font-size: .7rem; font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase; color: #0161FE;
          display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;
        }
        .gtp-section-label::after {
          content: ''; flex: 1; height: 1px; background: #DBEAFE;
        }

        .gtp-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          margin-bottom: .75rem; padding: 4px 14px; border-radius: 9999px;
          background: #EFF4FF; border: 1px solid #DBEAFE;
          font-size: .68rem; font-weight: 700;
          letter-spacing: .12em; text-transform: uppercase; color: #0161FE;
        }
        .gtp-pulse {
          width: 6px; height: 6px; border-radius: 50%; background: #0161FE;
          animation: gtpPulse 1.5s ease-in-out infinite;
        }

        /* image area */
        .gtp-main-image {
          width: 100%; aspect-ratio: 1/1; border-radius: 14px;
          border: 1px solid #E2EEFF; background: #fff;
          position: relative; overflow: hidden;
          box-shadow: 0 4px 24px rgba(1,97,254,.07);
        }
        .gtp-main-image img {
          width: 100%; height: 100%; object-fit: cover;
        }
        .gtp-main-label {
          position: absolute; bottom: 12px; left: 12px;
          font-size: .68rem; font-weight: 700; color: #fff;
          letter-spacing: .06em; text-transform: uppercase;
          background: rgba(0,0,0,.45); backdrop-filter: blur(4px);
          padding: 5px 12px; border-radius: 9999px;
        }
        .gtp-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,.85); border: 1px solid rgba(1,97,254,.22);
          color: #0161FE; cursor: pointer; font-size: 1rem;
          display: flex; align-items: center; justify-content: center;
          z-index: 2; transition: background .15s, transform .15s;
        }
        .gtp-arrow:hover { background: #fff; transform: translateY(-50%) scale(1.08); }
        .gtp-arrow.left { left: 10px; }
        .gtp-arrow.right { right: 10px; }

        .gtp-thumbs { display: flex; gap: 8px; margin-top: 12px; justify-content: center; }
        .gtp-thumb {
          width: 56px; height: 56px; border-radius: 10px; overflow: hidden;
          border: 2px solid #E2EEFF; background: #fff;
          cursor: pointer; transition: border-color .15s, transform .15s;
          position: relative;
        }
        .gtp-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .gtp-thumb:hover { border-color: #93c5fd; transform: translateY(-1px); }
        .gtp-thumb.active { border-color: #0161FE; }
        .gtp-thumb.active::after {
          content: ''; position: absolute; inset: 0;
          box-shadow: inset 0 0 0 2px rgba(1,97,254,.35); pointer-events: none;
        }

        /* info */
        .gtp-product-name {
          font-size: 1.15rem; font-weight: 700; color: #071225;
          line-height: 1.35; margin-bottom: 1rem;
        }
        .gtp-tags { display: flex; flex-direction: column; gap: 5px; margin-bottom: 1.25rem; }
        .gtp-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: .76rem; color: #0161FE; font-weight: 500; cursor: pointer;
        }
        .gtp-tag::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: #0161FE; flex-shrink: 0;
        }
        .gtp-tag:hover { text-decoration: underline; }
        .gtp-desc-label {
          font-size: .72rem; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; color: #64748b; margin-bottom: .75rem;
        }
        .gtp-inquiry-btn {
          display: inline-flex; align-items: center; gap: 9px;
          background: #0161FE; color: #fff; border: none; border-radius: 9999px;
          padding: 12px 28px; font-size: .72rem; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase; cursor: pointer;
          box-shadow: 0 4px 16px rgba(1,97,254,.3);
          transition: background .2s, transform .2s, box-shadow .2s;
        }
        .gtp-inquiry-btn:hover {
          background: #0040b8; transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(1,97,254,.4);
        }

        /* feature groups */
        .gtp-group-head {
          display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;
        }
        .gtp-group-dot {
          width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0;
        }
        .gtp-group-title {
          font-size: .95rem; font-weight: 800; color: #071225; letter-spacing: -.01em;
        }
        .gtp-feat-card {
          border-radius: 14px; border: 1px solid #E2EEFF; background: #fff;
          padding: 16px 18px; display: flex; align-items: flex-start; gap: 12px;
          box-shadow: 0 2px 10px rgba(1,97,254,.04);
          position: relative; overflow: hidden;
        }
        .gtp-feat-icon-box {
          flex-shrink: 0; width: 38px; height: 38px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
        }
        .gtp-feat-text { font-size: .84rem; line-height: 1.5; color: #334155; font-weight: 500; }
        .gtp-feat-tag {
          display: inline-block; margin-top: 6px; font-size: .62rem; font-weight: 700;
          letter-spacing: .06em; text-transform: uppercase; padding: 2px 9px;
          border-radius: 9999px;
        }
      `}</style>

      <section style={{ background: '#F7FAFF', minHeight: '100vh' }}>
        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-24 lg:py-32">

          {/* Heading bar */}
          <div style={{ marginBottom: '2.5rem', paddingBottom: '1.25rem', borderBottom: '2px solid #0161FE' }}>
            <div className="gtp-eyebrow">
              <span className="gtp-pulse" />
              GPS Hardware
            </div>
            <h1 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', fontWeight: 800, color: '#071225', lineHeight: 1.1, margin: '0 0 .4rem 0' }}>
              4G GPS Tracker
            </h1>
            <p style={{ fontSize: '.875rem', color: '#64748b', margin: 0 }}>
              Accurate Mini 4G · Real-time tracking · White-label ready
            </p>
          </div>

          {/* Section label */}
          <div className="gtp-section-label">Product overview</div>

          {/* Product grid */}
          <div className="flex flex-col lg:flex-row gap-10 mb-10">

            {/* Image col */}
            <div style={{ width: 320, flexShrink: 0 }}>
              <div className="gtp-main-image">
                <button className="gtp-arrow left"
                  onClick={() => setActiveThumb(i => (i - 1 + gallery.length) % gallery.length)}
                  aria-label="Previous">‹</button>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeThumb}
                    src={gallery[activeThumb].img}
                    alt={gallery[activeThumb].label}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>

                <span className="gtp-main-label">{gallery[activeThumb].label}</span>

                <button className="gtp-arrow right"
                  onClick={() => setActiveThumb(i => (i + 1) % gallery.length)}
                  aria-label="Next">›</button>
              </div>

              <div className="gtp-thumbs">
                {gallery.map(t => (
                  <div key={t.id}
                    className={`gtp-thumb${activeThumb === t.id ? ' active' : ''}`}
                    onClick={() => setActiveThumb(t.id)} title={t.label}>
                    <img src={t.img} alt={t.label} />
                  </div>
                ))}
              </div>
            </div>

            {/* Info col */}
            <div style={{ flex: 1, minWidth: 260 }}>
              <div className="gtp-product-name">Accurate Mini 4G GPS tracker with alarm</div>

              <div className="gtp-tags">
                <span className="gtp-tag">GPS tracker</span>
                <span className="gtp-tag">Mini 4G GPS tracker</span>
                <span className="gtp-tag">gps tracker with alarm</span>
              </div>

              <div className="gtp-desc-label">Product description</div>

              <button className="gtp-inquiry-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                INQUIRY
              </button>
            </div>

          </div>

          {/* Divider */}
          <div style={{ height: 1, background: '#E2EEFF', margin: '2.5rem 0' }} />

          {/* Features */}
          <div className="gtp-section-label">TR100 Features</div>

          <div className="flex flex-col gap-10">
            {featureGroups.map((group, gi) => (
              <div key={group.name}>
                <motion.div
                  className="gtp-group-head"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="gtp-group-dot" style={{ background: group.accent }} />
                  <span className="gtp-group-title">{group.name}</span>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item, i) => (
                    <motion.div
                      key={item.text}
                      className="gtp-feat-card"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -4, boxShadow: `0 10px 28px ${group.accent}22` }}
                    >
                      <motion.div
                        className="gtp-feat-icon-box"
                        style={{ background: `${group.accent}14` }}
                        whileHover={{ rotate: 8, scale: 1.08 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                      >
                        <FeatureIcon id={item.icon} color={group.accent} />
                      </motion.div>
                      <div>
                        <div className="gtp-feat-text">{item.text}</div>
                        {item.tag && (
                          <span
                            className="gtp-feat-tag"
                            style={{ background: `${group.accent}14`, color: group.accent }}
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}