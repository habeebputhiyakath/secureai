'use client';
import { useEffect, useRef, useState } from 'react';

const industries = [
  {
    id: 'airports',
    title: 'Airports',
    num: '01',
    desc: 'AI-powered security for terminals, perimeters, and airside zones with automated threat detection and passenger flow management.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format&fit=crop',
    tag: 'Transport',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91"/>
        <path d="M14 2v4l2 2-4 4 4 4-2 2v4"/>
      </svg>
    ),
  },
  {
    id: 'hospitals',
    title: 'Hospitals',
    num: '02',
    desc: 'Secure patient environments with visitor management, restricted zone access control, and 24/7 surveillance for healthcare facilities.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80&auto=format&fit=crop',
    tag: 'Healthcare',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
        <line x1="12" y1="7" x2="12" y2="10"/><line x1="10.5" y1="8.5" x2="13.5" y2="8.5"/>
      </svg>
    ),
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    num: '03',
    desc: 'Protect assets and workforce with perimeter security, vehicle tracking, and intelligent monitoring of production facilities.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop',
    tag: 'Industrial',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    id: 'education',
    title: 'Education',
    num: '04',
    desc: 'Safe campus environments with intelligent access control, visitor tracking, and real-time incident response for schools and universities.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80&auto=format&fit=crop',
    tag: 'Campus',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    id: 'retail',
    title: 'Retail',
    num: '05',
    desc: 'Loss prevention, queue management, footfall analytics, and VIP customer detection for modern retail environments.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&auto=format&fit=crop',
    tag: 'Commerce',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
  {
    id: 'government',
    title: 'Government',
    num: '06',
    desc: 'Mission-critical security for government premises, border control, embassies, and public spaces with SIRA-approved solutions.',
    image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=800&q=80&auto=format&fit=crop',
    tag: 'Public Sector',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22"/>
        <line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/>
        <line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/>
        <polygon points="12 2 20 7 4 7"/>
      </svg>
    ),
  },
];

function ArrowIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
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
      { threshold: 0.08 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .ind-section { font-family: 'DM Sans', sans-serif; }

        .ind-rev {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .ind-rev.ind-vis { opacity: 1; transform: none; }
        .ind-d0 { transition-delay: 0.00s; }
        .ind-d1 { transition-delay: 0.08s; }
        .ind-d2 { transition-delay: 0.14s; }
        .ind-d3 { transition-delay: 0.20s; }
        .ind-d4 { transition-delay: 0.26s; }
        .ind-d5 { transition-delay: 0.32s; }
        .ind-d6 { transition-delay: 0.38s; }

        .ind-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .ind-heading {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: #0f172a;
        }

        .ind-accent-line {
          position: relative;
          display: inline-block;
          color: #0161FE;
        }
        .ind-accent-line::after {
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
        .ind-vis .ind-accent-line::after { transform: scaleX(1); }

        .ind-all-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #0f172a; background: #ffffff;
          border: 1.5px solid #0f172a;
          border-radius: 9999px; padding: 13px 28px;
          text-decoration: none; white-space: nowrap;
          transition: background 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s;
        }
        .ind-all-link:hover { background: #0f172a; color: #fff; transform: translateY(-2px); }
        .ind-all-link:hover svg { transform: translateX(3px); }
        .ind-all-link svg { transition: transform 0.2s; }

        /* Grid */
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) { .ind-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .ind-grid { grid-template-columns: 1fr; } }

        /* ── CARD: has visible image tinted at rest, darkens on hover ── */
        .ind-card {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          min-height: 220px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition:
            transform 0.45s cubic-bezier(0.22,1,0.36,1),
            box-shadow 0.45s cubic-bezier(0.22,1,0.36,1),
            border-color 0.3s ease;
        }
        .ind-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 56px rgba(1,97,254,0.18);
          border-color: rgba(1,97,254,0.4);
        }
        .ind-card.ind-active {
          transform: translateY(-6px);
          box-shadow: 0 24px 56px rgba(1,97,254,0.22);
          border-color: #0161FE;
        }

        /* BG image: always visible at partial opacity, goes fuller on hover */
        .ind-card-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          opacity: 0.18;
          transform: scale(1.03);
          transition: opacity 0.55s ease, transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }
        .ind-card:hover .ind-card-bg,
        .ind-card.ind-active .ind-card-bg {
          opacity: 1;
          transform: scale(1);
        }

        /* Scrim: light at rest (shows tinted image), dark on hover */
        .ind-scrim {
          position: absolute; inset: 0;
          transition: background 0.55s ease;
          background: linear-gradient(160deg, rgba(248,250,252,0.92) 0%, rgba(241,245,249,0.85) 100%);
        }
        .ind-card:hover .ind-scrim,
        .ind-card.ind-active .ind-scrim {
          background: linear-gradient(160deg, rgba(1,9,30,0.74) 0%, rgba(1,9,30,0.52) 100%);
        }

        /* Blue corner accent on active */
        .ind-corner {
          position: absolute; top: 0; right: 0;
          width: 0; height: 0; border-style: solid;
          border-width: 0 36px 36px 0;
          border-color: transparent #0161FE transparent transparent;
          opacity: 0; transition: opacity 0.3s ease; z-index: 3;
        }
        .ind-card.ind-active .ind-corner { opacity: 1; }

        /* Inner content */
        .ind-card-inner {
          position: relative; z-index: 2;
          padding: 24px 22px 22px;
          display: flex; flex-direction: column; height: 100%;
        }

        /* Top row: num + tag */
        .ind-top-row {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 16px;
        }

        .ind-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; font-weight: 400;
          letter-spacing: 0.1em; color: #94a3b8;
          transition: color 0.4s ease;
        }
        .ind-card:hover .ind-num,
        .ind-card.ind-active .ind-num { color: rgba(255,255,255,0.45); }

        /* Tag pill — visible at rest */
        .ind-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px; font-weight: 400;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 3px 9px; border-radius: 99px;
          background: rgba(1,97,254,0.08);
          color: #0161FE;
          border: 1px solid rgba(1,97,254,0.2);
          transition: background 0.4s ease, color 0.4s ease, border-color 0.4s ease;
        }
        .ind-card:hover .ind-tag,
        .ind-card.ind-active .ind-tag {
          background: rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.85);
          border-color: rgba(255,255,255,0.25);
        }

        /* Icon box */
        .ind-icon {
          width: 46px; height: 46px; border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(1,97,254,0.08);
          border: 1px solid rgba(1,97,254,0.18);
          color: #0161FE; margin-bottom: 16px;
          transition: background 0.4s, border-color 0.4s, color 0.4s,
                      transform 0.5s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s;
        }
        .ind-card:hover .ind-icon,
        .ind-card.ind-active .ind-icon {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.3);
          color: #fff;
          transform: scale(1.1) rotate(8deg);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        /* Card title — slate at rest, white on hover */
        .ind-card-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.15rem; font-weight: 800;
          letter-spacing: -0.01em; line-height: 1.2;
          color: #0f172a;
          transition: color 0.4s ease;
        }
        .ind-card:hover .ind-card-title,
        .ind-card.ind-active .ind-card-title { color: #ffffff; }

        /* Card desc — hidden at rest, reveals on hover */
        .ind-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; line-height: 1.65; font-weight: 400;
          color: rgba(255,255,255,0.78);
          margin-top: 8px; max-height: 0; overflow: hidden; opacity: 0;
          transition: max-height 0.52s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease;
        }
        .ind-card:hover .ind-card-desc,
        .ind-card.ind-active .ind-card-desc { max-height: 140px; opacity: 1; }

        /* Divider line at rest — subtle slate, goes transparent on hover */
        .ind-divider {
          height: 1px;
          background: #e2e8f0;
          margin: 14px 0 0;
          transition: background 0.4s ease, opacity 0.4s ease;
        }
        .ind-card:hover .ind-divider,
        .ind-card.ind-active .ind-divider { background: rgba(255,255,255,0.15); }

        /* Bottom row: always visible */
        .ind-bottom-row {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 12px;
        }

        /* "Learn more" — slate at rest, white on hover */
        .ind-learn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; font-weight: 400;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #64748b;
          display: flex; align-items: center; gap: 5px;
          transition: color 0.3s ease;
        }
        .ind-card:hover .ind-learn,
        .ind-card.ind-active .ind-learn { color: rgba(255,255,255,0.9); }
        .ind-learn svg { transition: transform 0.2s; }
        .ind-card:hover .ind-learn svg { transform: translateX(3px); }

        /* Arrow circle button — slate border at rest, blue fill on hover */
        .ind-arrow-btn {
          width: 30px; height: 30px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid #e2e8f0;
          color: #94a3b8;
          transition: background 0.3s, border-color 0.3s, color 0.3s, transform 0.3s;
        }
        .ind-card:hover .ind-arrow-btn,
        .ind-card.ind-active .ind-arrow-btn {
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.35);
          color: #fff;
          transform: rotate(-45deg);
        }
      `}</style>

      <section ref={sectionRef} className="ind-section relative overflow-hidden bg-white py-24 lg:py-32 border-t border-slate-100">

        {/* Soft blobs */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle at 40% 40%, #dbeafe, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle at 60% 60%, #e0f2fe, transparent 70%)' }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Header */}
          <div className={`ind-rev ind-d0 ${visible ? 'ind-vis' : ''} flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12`}>
            <div>
              <div className="mb-6">
                <span
                  className="ind-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Industry Solutions
                </span>
              </div>
              <h2 className="ind-heading">
                Built for Every Sector &amp;<br />
                <span className="ind-accent-line">Every Scale</span>
              </h2>
            </div>
            <a href="#" className="ind-all-link">
              ALL INDUSTRIES <ArrowIcon />
            </a>
          </div>

          {/* Grid */}
          <div className="ind-grid">
            {industries.map((industry, i) => (
              <div
                key={industry.id}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === i ? null : i)}
                className={`ind-rev ind-d${Math.min(i + 1, 6)} ${visible ? 'ind-vis' : ''} ind-card ${active === i ? 'ind-active' : ''}`}
              >
                {/* Always-visible tinted image bg */}
                <div className="ind-card-bg" style={{ backgroundImage: `url(${industry.image})` }} />
                {/* Scrim: light slate at rest → dark on hover */}
                <div className="ind-scrim" />
                {/* Blue corner on active */}
                <div className="ind-corner" />

                <div className="ind-card-inner">
                  {/* Top: num + tag */}
                  <div className="ind-top-row">
                    <span className="ind-num">{industry.num}</span>
                    <span className="ind-tag">{industry.tag}</span>
                  </div>

                  {/* Icon */}
                  <div className="ind-icon">{industry.icon}</div>

                  {/* Title */}
                  <p className="ind-card-title">{industry.title}</p>

                  {/* Desc — slides in on hover */}
                  <p className="ind-card-desc">{industry.desc}</p>

                  {/* Divider + bottom row — always visible */}
                  <div className="ind-divider" />
                  <div className="ind-bottom-row">
                    <span className="ind-learn">
                      Learn more <ArrowIcon size={10} />
                    </span>
                    <div className="ind-arrow-btn">
                      <ArrowIcon size={11} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}