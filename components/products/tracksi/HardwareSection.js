'use client';
import { useState } from 'react';

const thumbnails = [
  { id: 0, icon: '📦', label: 'Front view' },
  { id: 1, icon: '🔌', label: 'Ports view' },
  { id: 2, icon: '🚗', label: 'Install view' },
  { id: 3, icon: '📋', label: 'Spec view' },
];

const features = [
  { num: 1,  text: 'GPS/LBS realtime location', highlight: true },
  { num: 2,  text: 'ACC ignition signal detection', highlight: true },
  { num: 3,  text: 'historical track playback', highlight: false },
  { num: 4,  text: 'moe accurate mileage calculation', highlight: false },
  { num: 5,  text: 'Over speed alarm', highlight: false },
  { num: 6,  text: 'Built in backup battery', highlight: false },
  { num: 7,  text: 'Vibration alarm', highlight: false },
  { num: 8,  text: 'Support Tcp/Udp & SMS', highlight: false },
  { num: 9,  text: 'Sleeping mode', highlight: false },
  { num: 10, text: 'Built in memory', highlight: false },
  { num: 11, text: 'movement alarm', highlight: false },
  { num: 12, text: 'ACC status check', highlight: false },
  { num: 13, text: 'blind area data reupload', highlight: false },
  { num: 14, text: 'Built in 3 protocols switchable by SMS command', highlight: true },
  { num: 15, text: 'power failure alarm', highlight: false },
  { num: 16, text: 'wide voltage', highlight: false },
  { num: 17, text: 'Remote engine control (optional)', highlight: true },
  { num: 18, text: 'Microphone (optional)', highlight: true },
  { num: 19, text: 'SOS button (optional)', highlight: true },
];

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
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 24px rgba(1,97,254,.07);
        }
        .gtp-main-inner {
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 10px; font-size: 4.5rem; color: #94a3b8;
        }
        .gtp-main-sub {
          font-size: .7rem; font-weight: 600; color: #94a3b8;
          letter-spacing: .06em; text-transform: uppercase;
        }
        .gtp-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(1,97,254,.1); border: 1px solid rgba(1,97,254,.22);
          color: #0161FE; cursor: pointer; font-size: 1rem;
          display: flex; align-items: center; justify-content: center;
          z-index: 2; transition: background .15s, transform .15s;
        }
        .gtp-arrow:hover { background: rgba(1,97,254,.22); transform: translateY(-50%) scale(1.08); }
        .gtp-arrow.left { left: 10px; }
        .gtp-arrow.right { right: 10px; }

        .gtp-thumbs { display: flex; gap: 8px; margin-top: 12px; justify-content: center; }
        .gtp-thumb {
          width: 56px; height: 56px; border-radius: 10px;
          border: 2px solid #E2EEFF; background: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 1.4rem;
          transition: border-color .15s, transform .15s;
          position: relative;
        }
        .gtp-thumb:hover { border-color: #93c5fd; transform: translateY(-1px); }
        .gtp-thumb.active { border-color: #0161FE; }
        .gtp-thumb.active::after {
          content: ''; position: absolute; inset: 0; border-radius: 8px;
          background: rgba(1,97,254,.06); pointer-events: none;
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

        /* features card */
        .gtp-features-card {
          border-radius: 14px; overflow: hidden;
          border: 1px solid #E2EEFF; background: #fff;
          box-shadow: 0 2px 12px rgba(1,97,254,.04);
        }
        .gtp-features-head {
          background: #0161FE; padding: 10px 18px;
          font-size: .72rem; font-weight: 700;
          letter-spacing: .08em; color: #fff; text-transform: uppercase;
        }
        .gtp-feat-li {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 9px 18px; border-bottom: 1px solid #EFF4FF;
          transition: background .12s;
        }
        .gtp-feat-li:last-child { border-bottom: none; }
        .gtp-feat-li:hover { background: #F5F9FF; }
        .gtp-feat-num {
          flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%;
          background: #EFF4FF; border: 1px solid #DBEAFE;
          color: #0161FE; font-size: .62rem; font-weight: 700;
          display: flex; align-items: center; justify-content: center; margin-top: 1px;
        }
        .gtp-feat-num.hl { background: #0161FE; color: #fff; border-color: #0161FE; }
        .gtp-feat-text { font-size: .82rem; line-height: 1.65; color: #475569; }
        .gtp-feat-text.hl { color: #0161FE; font-weight: 600; }
      `}</style>

      <section style={{ background: '#F7FAFF', minHeight: '100vh' }}>
        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-36 lg:py-44">

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
                  onClick={() => setActiveThumb(i => (i - 1 + thumbnails.length) % thumbnails.length)}
                  aria-label="Previous">‹</button>

                <div className="gtp-main-inner">
                  <span>{thumbnails[activeThumb].icon}</span>
                  <span className="gtp-main-sub">{thumbnails[activeThumb].label}</span>
                </div>

                <button className="gtp-arrow right"
                  onClick={() => setActiveThumb(i => (i + 1) % thumbnails.length)}
                  aria-label="Next">›</button>
              </div>

              <div className="gtp-thumbs">
                {thumbnails.map(t => (
                  <div key={t.id}
                    className={`gtp-thumb${activeThumb === t.id ? ' active' : ''}`}
                    onClick={() => setActiveThumb(t.id)} title={t.label}>
                    {t.icon}
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

          <div className="gtp-features-card">
            <div className="gtp-features-head">TR100 — Full Feature List</div>
            <ul style={{ listStyle: 'none', padding: '6px 0', margin: 0 }}>
              {features.map(f => (
                <li key={f.num} className="gtp-feat-li">
                  <span className={`gtp-feat-num${f.highlight ? ' hl' : ''}`}>{f.num}</span>
                  <span className={`gtp-feat-text${f.highlight ? ' hl' : ''}`}>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}