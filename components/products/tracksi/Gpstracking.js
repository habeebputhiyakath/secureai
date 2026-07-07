'use client';
import { useEffect, useRef, useState } from 'react';

const features = [
  'Compatible with many tracker brands including Coban TK102/TK103a, Meitrack VT310/VT300, GT06, GPS103a, Concox GT02/GT06/GT06N, Cantrack, etc. No user quantity limit — supports ~10,000 devices on one software set.',
  'Support free Google Maps and MapInfo digital map.',
  'Real-time tracking.',
  'Trajectory replay.',
  'Cut off engine and control remotely.',
  'Get SOS, overspeed, out of geo-fence, parking alarm, and low power alarm etc.',
  'Accept basic customized web tracking software — add your company logo and name.',
  'Logo and domain customization accepted.',
  'Monitor many vehicles on the same screen.',
  'Opened protocol of tracker.',
  'Independent user account management.',
  'Support multiple languages — can add and modify language packs.',
  'A large size data capacity. A single server can support over 10,000 devices.',
  'Definition of POI.',
  'Open API or full source code for GPS tracking system (additional cost).',
];

const brands = [
  { name: 'TRACKPRO', models: 'TR20, TR60, TR80, TR90, TR70, TR130, GT02, GT07 etc' },
  { name: 'MEITRACK', models: 'VT300, VT310, MT90, MVT800, MVT100, MVT340, etc' },
  { name: 'COBAN', models: 'GPS102, GPS103, GPS106, TK102, TK103, TK106, GPS102B, GPS103A, GPS303, GPS305, GPS306, etc' },
  { name: 'CARSCOP', models: 'CCTR-800, CCTR-811, CCTR-808S, CCTR-830, etc' },
  { name: 'BOFAN', models: 'PT502, PT600X, PT201, PT510-AC, PT201, etc' },
  { name: 'ONER / ZHUOKai', models: 'MT01, CT01, CT04, CT06, etc' },
  { name: 'CANTRACK', models: 'tk102, tk103, g01, g02, g900, g05, tk200A, tk06A, tk100, g200, g03, tk103B' },
  { name: 'TOPSHINE', models: 'VT1000, MT01, MT100, TK103R, PT30, MT08, etc' },
  { name: 'TOPTEN', models: 'GT08, TK310-D, TK108, MT09L, MT113, TK220, TK510, TK228, LT02, TK208 etc' },
  { name: 'XEXUN', models: 'TK102, TK103, XT009, TK103-2, TK201-2, XT008, TK203, XT107, XT-01, etc' },
  { name: 'PORTMAN', models: 'GT3000, GV3200, GT3200, etc' },
  { name: 'GATOR', models: 'M528, PT220, M588N, PT350, M508, etc' },
  { name: 'AUTOLEADER / SINOTRACK', models: 'AL900C, ST901, ST902, ST906, ST906W, etc' },
  { name: 'CARSKY', models: 'GPS508, GB618, G110D, GPS507, G110C, GD401, GB696, GA507, etc' },
  { name: 'eELINK', models: 'TK116, TK119, TK115, OT08, GPT06, etc' },
  { name: 'KESON', models: 'KS-168, KS-168F, KS-668, KS168V, TK103, KS158, KS168T, GPS168M, etc' },
  { name: 'U-TRAVELLER (TBIT)', models: 'T2, etc' },
  { name: 'CONCOX', models: 'GT02, GT06, GT06N, GT08, GT800, GT06E, GV50, GT840, GT550, GV25, GT200, BD230, GT600, ET400, ET210, EV10, ET25, GK309W, GT360, GT370, GT310, GT03A, GT03C, GK320, GK309, GK309D, GT770, GT760, GT740, GT720, etc' },
  { name: 'QUECLINK', models: 'GV200, GMT100, GV200G, GV300, GV300C, GV500, GV65, GV55, GT200, GT300, GT500, etc' },
  { name: 'SINO / AUTOLEADER', models: 'ST-906W, ST-915W, ST-901, ST-901A, ST-901M, ST-902, ST-904, ST-905, ST-915, ST-906, ST-908' },
  { name: 'EVIEW / MRTRACK', models: 'EV07, etc' },
  { name: 'NORAN', models: 'NR006, NR008, NR108, NRB20' },
  { name: 'TELTONIKA', models: 'FM1100, FM9200, FMC130, FMB140, etc' },
];

// Screenshot gallery — replace src values with your actual image paths/URLs
const screenshots = [
  {
    src: '/images/gps-dashboard.png',
    label: 'Live Dashboard',
    fallbackBg: '#1a3a6b',
    fallbackIcon: '🗺️',
  },
  {
    src: '/images/gps-mobile.png',
    label: 'Mobile App',
    fallbackBg: '#163358',
    fallbackIcon: '📱',
  },
  {
    src: '/images/gps-report.png',
    label: 'Reports',
    fallbackBg: '#1d3f73',
    fallbackIcon: '📋',
  },
  {
    src: '/images/gps-devices.png',
    label: 'Device Mgmt',
    fallbackBg: '#122d54',
    fallbackIcon: '📡',
  },
  {
    src: '/images/gps-alerts.png',
    label: 'Alerts',
    fallbackBg: '#183562',
    fallbackIcon: '🔔',
  },
  {
    src: '/images/gps-analytics.png',
    label: 'Analytics',
    fallbackBg: '#1b3a6a',
    fallbackIcon: '📊',
  },
  {
    src: '/images/gps-history.png',
    label: 'Trip History',
    fallbackBg: '#15305a',
    fallbackIcon: '🛣️',
  },
];

export default function GPSTrackingSystemPage() {
  const ref = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [prevIdx, setPrevIdx] = useState(null);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('gts-vis'); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.gts-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') navigateLightbox(1);
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, activeIdx]);

  const selectThumb = (idx) => {
    if (idx === activeIdx) return;
    setDirection(idx > activeIdx ? 'right' : 'left');
    setPrevIdx(activeIdx);
    setActiveIdx(idx);
    setTimeout(() => setPrevIdx(null), 400);
  };

  const navigateLightbox = (delta) => {
    const next = (activeIdx + delta + screenshots.length) % screenshots.length;
    setDirection(delta > 0 ? 'right' : 'left');
    setPrevIdx(activeIdx);
    setActiveIdx(next);
    setTimeout(() => setPrevIdx(null), 400);
  };

  return (
    <>
      <style>{`
        /* ── Reveal animations ── */
        .gts-rev {
          opacity: 0; transform: translateY(20px);
          transition: opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1);
        }
        .gts-rev.gts-vis { opacity: 1; transform: none; }
        .gts-d0{transition-delay:0s}  .gts-d1{transition-delay:.07s}
        .gts-d2{transition-delay:.14s}.gts-d3{transition-delay:.21s}
        .gts-d4{transition-delay:.28s}.gts-d5{transition-delay:.35s}

        /* ── Feature list ── */
        .gts-feat-li {
          display: flex; gap: 12px; align-items: flex-start;
          padding: 14px 16px;
          border-bottom: 1px solid #EFF4FF;
          transition: background .15s;
        }
        .gts-feat-li:last-child { border-bottom: none; }
        .gts-feat-li:hover { background: #F5F9FF; }
        .gts-feat-num {
          flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%;
          background: #0161FE; color: #fff;
          font-size: .7rem; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          margin-top: 1px;
        }
        .gts-feat-text { font-size: .875rem; color: #334155; line-height: 1.65; }

        /* ── Brand cards ── */
        .gts-brand-card {
          border-radius: 10px; border: 1px solid #E2EEFF;
          background: #fff; overflow: hidden;
          transition: border-color .18s, transform .18s;
        }
        .gts-brand-card:hover { border-color: #0161FE; transform: translateY(-2px); }
        .gts-brand-head {
          background: #0161FE; padding: 8px 12px;
          font-size: .72rem; font-weight: 700; letter-spacing: .06em; color: #fff;
        }
        .gts-brand-body { padding: 10px 12px; font-size: .72rem; color: #64748b; line-height: 1.55; }

        /* ── Section label ── */
        .gts-section-label {
          font-size: .7rem; font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase; color: #0161FE;
          display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;
        }
        .gts-section-label::after { content: ''; flex: 1; height: 1px; background: #DBEAFE; }

        /* ── Gallery ── */
        .gts-gallery-wrap {
          border-radius: 14px; overflow: hidden;
          border: 1px solid #E2EEFF;
          background: #0d2247;
          box-shadow: 0 8px 40px rgba(1,97,254,.12);
        }
        .gts-main-stage {
          position: relative; width: 100%; aspect-ratio: 16/9;
          overflow: hidden; cursor: zoom-in;
          background: #0d2247;
        }
        .gts-main-img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover;
          transition: opacity .38s cubic-bezier(.22,1,.36,1),
                      transform .38s cubic-bezier(.22,1,.36,1);
        }
        .gts-main-img.entering-right  { opacity: 0; transform: translateX(40px); }
        .gts-main-img.entering-left   { opacity: 0; transform: translateX(-40px); }
        .gts-main-img.active          { opacity: 1; transform: translateX(0); }
        .gts-main-img.leaving-right   { opacity: 0; transform: translateX(-40px); }
        .gts-main-img.leaving-left    { opacity: 0; transform: translateX(40px); }

        .gts-main-fallback {
          position: absolute; inset: 0; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 8px;
          transition: opacity .38s ease;
        }
        .gts-main-fallback-icon { font-size: 3rem; }
        .gts-main-fallback-label {
          font-size: .85rem; font-weight: 600; color: rgba(255,255,255,.7);
          letter-spacing: .05em; text-transform: uppercase;
        }

        .gts-gallery-overlay {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 10px 14px;
          background: linear-gradient(transparent, rgba(7,18,37,.75));
          font-size: .75rem; font-weight: 600; color: #fff;
          letter-spacing: .04em;
          display: flex; align-items: center; justify-content: space-between;
        }
        .gts-gallery-counter {
          background: rgba(1,97,254,.7); border-radius: 20px;
          padding: 2px 10px; font-size: .65rem; font-weight: 700; color: #fff;
        }

        .gts-thumb-strip {
          display: flex; gap: 0;
          border-top: 1px solid rgba(255,255,255,.08);
          overflow-x: auto;
          scrollbar-width: none;
        }
        .gts-thumb-strip::-webkit-scrollbar { display: none; }

        .gts-thumb {
          flex: 1; min-width: 0;
          aspect-ratio: 16/9;
          cursor: pointer;
          position: relative; overflow: hidden;
          border-right: 1px solid rgba(255,255,255,.06);
          transition: opacity .2s;
          opacity: .5;
        }
        .gts-thumb:last-child { border-right: none; }
        .gts-thumb:hover { opacity: .85; }
        .gts-thumb.active { opacity: 1; }
        .gts-thumb.active::after {
          content: ''; position: absolute; inset: 0;
          border: 2px solid #0161FE;
          border-radius: 2px;
          pointer-events: none;
        }
        .gts-thumb img, .gts-thumb-fb {
          width: 100%; height: 100%; object-fit: cover;
          pointer-events: none;
        }
        .gts-thumb-fb {
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem;
        }
        .gts-thumb-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          font-size: .5rem; font-weight: 700; text-align: center;
          padding: 3px 2px;
          background: rgba(7,18,37,.7);
          color: rgba(255,255,255,.8);
          text-transform: uppercase; letter-spacing: .04em;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }

        /* ── Lightbox ── */
        .gts-lightbox-backdrop {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(7,18,37,.92);
          backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          animation: gts-lb-in .22s ease;
        }
        @keyframes gts-lb-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .gts-lightbox-inner {
          position: relative; max-width: min(92vw, 1100px); width: 100%;
          animation: gts-lb-scale .28s cubic-bezier(.22,1,.36,1);
        }
        @keyframes gts-lb-scale {
          from { opacity: 0; transform: scale(.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        .gts-lightbox-img {
          width: 100%; border-radius: 10px;
          box-shadow: 0 24px 80px rgba(0,0,0,.6);
          display: block;
        }
        .gts-lightbox-fb {
          width: 100%; aspect-ratio: 16/9;
          border-radius: 10px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 12px;
        }
        .gts-lightbox-btn {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 44px; height: 44px; border-radius: 50%;
          background: rgba(1,97,254,.8); border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background .15s, transform .15s;
          color: #fff; font-size: 1.1rem;
        }
        .gts-lightbox-btn:hover { background: #0161FE; transform: translateY(-50%) scale(1.08); }
        .gts-lightbox-btn.prev { left: -22px; }
        .gts-lightbox-btn.next { right: -22px; }
        .gts-lightbox-close {
          position: absolute; top: -14px; right: -14px;
          width: 34px; height: 34px; border-radius: 50%;
          background: #fff; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: .9rem; color: #071225;
          transition: background .15s, transform .15s;
          box-shadow: 0 2px 10px rgba(0,0,0,.3);
        }
        .gts-lightbox-close:hover { background: #fee2e2; transform: scale(1.1); }
        .gts-lightbox-caption {
          text-align: center; margin-top: 14px;
          font-size: .8rem; font-weight: 600; color: rgba(255,255,255,.7);
          letter-spacing: .06em; text-transform: uppercase;
        }
      `}</style>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div
          className="gts-lightbox-backdrop"
          onClick={e => { if (e.target === e.currentTarget) setLightboxOpen(false); }}
        >
          <div className="gts-lightbox-inner">
            <button className="gts-lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close">✕</button>
            <button className="gts-lightbox-btn prev" onClick={() => navigateLightbox(-1)} aria-label="Previous">‹</button>
            <button className="gts-lightbox-btn next" onClick={() => navigateLightbox(1)} aria-label="Next">›</button>

            <img
              key={activeIdx}
              src={screenshots[activeIdx].src}
              alt={screenshots[activeIdx].label}
              className="gts-lightbox-img"
              onError={e => {
                const fb = e.currentTarget.nextSibling;
                e.currentTarget.style.display = 'none';
                if (fb) fb.style.display = 'flex';
              }}
            />
            <div
              className="gts-lightbox-fb"
              style={{ display: 'none', background: screenshots[activeIdx].fallbackBg }}
            >
              <span style={{ fontSize: '5rem' }}>{screenshots[activeIdx].fallbackIcon}</span>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: 'rgba(255,255,255,.8)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                {screenshots[activeIdx].label}
              </span>
            </div>

            <div className="gts-lightbox-caption">
              {screenshots[activeIdx].label} &nbsp;·&nbsp; {activeIdx + 1} / {screenshots.length}
            </div>
          </div>
        </div>
      )}

      <section ref={ref} style={{ background: '#F7FAFF', minHeight: '100vh' }}>
        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-36 lg:py-44">

          {/* ── Page title bar ── */}
          <div className="gts-rev gts-d0 mb-10 pb-5" style={{ borderBottom: '2px solid #0161FE' }}>
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ background: '#EFF4FF', color: '#0161FE', border: '1px solid #DBEAFE' }}>
              GPS Tracking Platform
            </div>
            <h1 className="font-extrabold" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', color: '#071225', lineHeight: 1.1 }}>
              GPS Tracking System
            </h1>
            <p className="mt-2 text-sm" style={{ color: '#64748b' }}>
              Compatible with 50+ brands · Supports 10,000+ devices · White-label ready
            </p>
          </div>

          {/* ── Screenshot Gallery ── */}
          <div className="gts-rev gts-d1 mb-10">
            <div className="gts-section-label">Platform screenshots</div>

            <div className="gts-gallery-wrap">
              {/* Main stage */}
              <div className="gts-main-stage" onClick={() => setLightboxOpen(true)}>
                {/* Current image */}
                <img
                  key={`active-${activeIdx}`}
                  src={screenshots[activeIdx].src}
                  alt={screenshots[activeIdx].label}
                  className={`gts-main-img active`}
                  style={{ animationFillMode: 'forwards' }}
                  onError={e => {
                    e.currentTarget.style.display = 'none';
                    const fb = document.getElementById(`gts-fb-${activeIdx}`);
                    if (fb) fb.style.opacity = '1';
                  }}
                />
                {/* Fallback for current */}
                <div
                  id={`gts-fb-${activeIdx}`}
                  className="gts-main-fallback"
                  style={{ background: screenshots[activeIdx].fallbackBg, opacity: 0, transition: 'opacity .3s' }}
                >
                  <span className="gts-main-fallback-icon">{screenshots[activeIdx].fallbackIcon}</span>
                  <span className="gts-main-fallback-label">{screenshots[activeIdx].label}</span>
                </div>

                <div className="gts-gallery-overlay">
                  <span>{screenshots[activeIdx].label}</span>
                  <span className="gts-gallery-counter">{activeIdx + 1} / {screenshots.length}</span>
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="gts-thumb-strip">
                {screenshots.map((s, i) => (
                  <div
                    key={i}
                    className={`gts-thumb${i === activeIdx ? ' active' : ''}`}
                    onClick={() => selectThumb(i)}
                    title={s.label}
                  >
                    <img
                      src={s.src}
                      alt={s.label}
                      onError={e => {
                        e.currentTarget.style.display = 'none';
                        const fb = e.currentTarget.nextSibling ;
                        if (fb) fb.style.display = 'flex';
                      }}
                    />
                    <div className="gts-thumb-fb" style={{ display: 'none', background: s.fallbackBg }}>
                      {s.fallbackIcon}
                    </div>
                    <div className="gts-thumb-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-2 text-xs text-center" style={{ color: '#94a3b8' }}>
              Click any thumbnail to switch view · Click main image to enlarge · Use ← → arrow keys in fullscreen
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">

            {/* ── Left: features list ── */}
            <div className="flex-1 min-w-0">
              <div className="gts-rev gts-d1 gts-section-label">Platform features</div>

              <div className="gts-rev gts-d2 rounded-xl overflow-hidden"
                style={{ border: '1px solid #E2EEFF', background: '#fff' }}>
                {features.map((f, i) => (
                  <div key={i} className="gts-feat-li">
                    <span className="gts-feat-num">{i + 1}</span>
                    <span className="gts-feat-text">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: supported brands ── */}
            <div className="w-full lg:w-[420px] flex-shrink-0">
              <div className="gts-rev gts-d1 gts-section-label">Supported GPS trackers</div>

              <div className="flex flex-col gap-2.5">
                {brands.map((b, i) => (
                  <div key={i} className={`gts-brand-card gts-rev gts-d${i % 6}`}>
                    <div className="gts-brand-head">{b.name}</div>
                    <div className="gts-brand-body">{b.models}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}