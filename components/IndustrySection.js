'use client';
import { useEffect, useRef, useState } from 'react';

const industries = [
  {
    id: 'airports',
    title: 'Airports',
    num: '01',
    desc: 'AI-powered security for terminals, perimeters, and airside zones with automated threat detection and passenger flow management.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91" />
        <path d="M14 2v4l2 2-4 4 4 4-2 2v4" />
      </svg>
    ),
  },
  {
    id: 'hospitals',
    title: 'Hospitals',
    num: '02',
    desc: 'Secure patient environments with visitor management, restricted zone access control, and 24/7 surveillance for healthcare facilities.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
        <line x1="12" y1="7" x2="12" y2="10" />
        <line x1="10.5" y1="8.5" x2="13.5" y2="8.5" />
      </svg>
    ),
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    num: '03',
    desc: 'Protect assets and workforce with perimeter security, vehicle tracking, and intelligent monitoring of production facilities.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    id: 'education',
    title: 'Education',
    num: '04',
    desc: 'Safe campus environments with intelligent access control, visitor tracking, and real-time incident response for schools and universities.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: 'retail',
    title: 'Retail',
    num: '05',
    desc: 'Loss prevention, queue management, footfall analytics, and VIP customer detection for modern retail environments.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: 'government',
    title: 'Government',
    num: '06',
    desc: 'Mission-critical security for government premises, border control, embassies, and public spaces with SIRA-approved solutions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    ),
  },
];

function ArrowIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function IndustrySection() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Poppins:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .ind-section { font-family: 'Poppins', sans-serif; }

        .ind-fade {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
                      transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .ind-fade.ind-in { opacity: 1; transform: none; }
        .ind-d0 { transition-delay: 0s; }
        .ind-d1 { transition-delay: 0.12s; }
        .ind-d2 { transition-delay: 0.2s; }
        .ind-d3 { transition-delay: 0.28s; }
        .ind-d4 { transition-delay: 0.36s; }
        .ind-d5 { transition-delay: 0.44s; }
        .ind-d6 { transition-delay: 0.52s; }

        /* 3-column grid, 2 on tablet, 1 on mobile */
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) {
          .ind-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .ind-grid { grid-template-columns: 1fr; }
        }

        /* ── Card ── */
        .ind-card {
          border-radius: 16px;
          padding: 28px 24px 24px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          transition:
            border-color 0.3s ease,
            transform 0.4s cubic-bezier(0.22,1,0.36,1),
            box-shadow 0.4s cubic-bezier(0.22,1,0.36,1);
        }

        /* blue fill slides up from bottom */
        .ind-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #0161FE;
          border-radius: inherit;
          transform: translateY(102%);
          transition: transform 0.52s cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .ind-card.ind-active::before { transform: translateY(0); }

        .ind-card:not(.ind-active):hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(1,97,254,0.13);
          border-color: #a5bfff;
        }

        .ind-card > * { position: relative; z-index: 1; }

        /* num */
        .ind-card-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #94a3b8;
          margin-bottom: 16px;
          display: block;
          transition: color 0.45s ease;
        }
        .ind-card.ind-active .ind-card-num { color: rgba(255,255,255,0.4); }

        /* icon */
        .ind-icon-box {
          width: 46px; height: 46px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(1,97,254,0.07);
          border: 1px solid rgba(1,97,254,0.14);
          color: #0161FE;
          margin-bottom: 20px;
          transition:
            background 0.45s ease,
            border-color 0.45s ease,
            color 0.45s ease,
            transform 0.55s cubic-bezier(0.22,1,0.36,1);
        }
        .ind-card.ind-active .ind-icon-box {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.28);
          color: #fff;
          transform: scale(1.1) rotate(10deg);
        }

        /* title */
        .ind-card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: #0f172a;
          margin-bottom: 10px;
          transition: color 0.45s ease;
        }
        .ind-card.ind-active .ind-card-title { color: #ffffff; }

        /* desc — hidden until active */
        .ind-card-desc {
          font-size: 0.8rem;
          line-height: 1.68;
          color: #64748b;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition:
            max-height 0.5s cubic-bezier(0.22,1,0.36,1),
            opacity 0.4s ease,
            color 0.45s ease;
        }
        .ind-card.ind-active .ind-card-desc {
          max-height: 140px;
          opacity: 1;
          color: rgba(255,255,255,0.82);
        }
        .ind-card:not(.ind-active):hover .ind-card-desc {
          max-height: 140px;
          opacity: 0.55;
        }

        /* "Learn more" chip */
        .ind-card-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 16px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ffffff;
          opacity: 0;
          transform: translateY(8px);
          transition:
            opacity 0.35s ease 0.12s,
            transform 0.4s cubic-bezier(0.22,1,0.36,1) 0.12s;
        }
        .ind-card.ind-active .ind-card-chip {
          opacity: 1;
          transform: none;
        }
      `}</style>

      <section ref={sectionRef} className="ind-section py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <div className={`ind-fade ind-d0 ${visible ? 'ind-in' : ''} flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-slate-200 pb-10 mb-10`}>
            <div>
              <p
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 mb-4"
              >
                Industry Solutions
              </p>
              <h2
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900"
              >
                Built for Every{' '}
                <em className="font-light not-italic text-slate-400">Sector,</em>
                <br className="hidden sm:block" />{' '}
                Every Scale
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-slate-900 border-[1.5px] border-slate-900 rounded-full px-5 py-2.5 shrink-0 self-start sm:self-auto hover:bg-slate-900 hover:text-white transition-colors duration-200"
            >
              All Industries <ArrowIcon />
            </a>
          </div>

          {/* ── 3-column card grid ── */}
          <div className="ind-grid">
            {industries.map((industry, i) => (
              <div
                key={industry.id}
                onClick={() => setActive(active === i ? null : i)}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`ind-fade ind-d${Math.min(i + 1, 6)} ${visible ? 'ind-in' : ''} ind-card ${active === i ? 'ind-active' : ''}`}
              >
                <span className="ind-card-num">{industry.num}</span>
                <div className="ind-icon-box">{industry.icon}</div>
                <p className="ind-card-title">{industry.title}</p>
                <p className="ind-card-desc">{industry.desc}</p>
                <span className="ind-card-chip">
                  Learn more <ArrowIcon size={11} />
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}