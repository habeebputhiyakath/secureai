'use client';
import { useEffect, useRef, useState } from 'react';

const industries = [
  {
    id: 'airports',
    title: 'Airports',
    num: '01',
    desc: 'AI-powered security for terminals, perimeters, and airside zones with automated threat detection and passenger flow management.',
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
  const scrollRef = useRef(null);
  const [active, setActive] = useState(null);
  const [visible, setVisible] = useState(false);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const cards = el.querySelectorAll('.ind-card');
      let closestIdx = 0;
      let minDist = Infinity;
      cards.forEach((c, i) => {
        const dist = Math.abs(c.offsetLeft - el.scrollLeft);
        if (dist < minDist) { minDist = dist; closestIdx = i; }
      });
      setActiveDot(closestIdx);
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .ind-section { font-family: 'DM Sans', sans-serif; }

        /* ── Reveal animation ── */
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

        /* ── Eyebrow ── */
        .ind-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* ── Heading ── */
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

        /* ── CTA link ── */
        .ind-all-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #0f172a; background: #ffffff;
          border: 1.5px solid #0f172a;
          border-radius: 9999px; padding: 13px 28px;
          text-decoration: none; white-space: nowrap;
          transition: background 0.22s, color 0.22s, transform 0.22s;
        }
        .ind-all-link:hover { background: #0f172a; color: #fff; transform: translateY(-2px); }
        .ind-all-link:hover svg { transform: translateX(3px); }
        .ind-all-link svg { transition: transform 0.2s; }

        /* ── Scroll container — hidden scrollbar ── */
        .ind-scroll-wrap {
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-inline: 24px;
          scroll-padding-left: 24px;
        }
        @media (min-width: 1024px) {
          .ind-scroll-wrap {
            padding-inline: 40px;
            scroll-padding-left: 40px;
          }
        }
        .ind-scroll-wrap::-webkit-scrollbar {
          display: none;
        }

        .ind-track {
          display: flex;
          gap: 16px;
          width: max-content;
        }

        /* ── Card: exactly 1/4 of available width ── */
        .ind-card {
          /* (100vw - left+right padding - 3 gaps) / 4 */
          width: calc((100vw - 48px - 48px) / 4);
          min-width: 220px;
          max-width: 340px;
          flex-shrink: 0;
          border-radius: 20px;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          padding: 24px 22px 20px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          transition:
            transform 0.4s cubic-bezier(0.22,1,0.36,1),
            box-shadow 0.4s cubic-bezier(0.22,1,0.36,1),
            border-color 0.3s,
            background 0.3s;
        }

        /* Subtle blue tint gradient on hover */
        .ind-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(1,97,254,0.05) 0%, transparent 60%);
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .ind-card:hover,
        .ind-card.ind-active {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(1,97,254,0.15);
          border-color: rgba(1,97,254,0.45);
          background: #ffffff;
        }
        .ind-card:hover::before,
        .ind-card.ind-active::before { opacity: 1; }
        .ind-card.ind-active { border-color: #0161FE; box-shadow: 0 20px 50px rgba(1,97,254,0.2); }

        /* Blue corner accent on active */
        .ind-corner {
          position: absolute; top: 0; right: 0;
          width: 0; height: 0; border-style: solid;
          border-width: 0 32px 32px 0;
          border-color: transparent #0161FE transparent transparent;
          opacity: 0; transition: opacity 0.3s; z-index: 2;
        }
        .ind-card.ind-active .ind-corner { opacity: 1; }

        /* ── Card inner ── */
        .ind-card-inner {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; height: 100%;
        }

        .ind-top-row {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 18px;
        }

        .ind-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; font-weight: 400;
          letter-spacing: 0.1em; color: #94a3b8;
        }

        .ind-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px; font-weight: 400;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 3px 9px; border-radius: 99px;
          background: rgba(1,97,254,0.08);
          color: #0161FE;
          border: 1px solid rgba(1,97,254,0.2);
        }

        .ind-icon {
          width: 46px; height: 46px; border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(1,97,254,0.08);
          border: 1px solid rgba(1,97,254,0.18);
          color: #0161FE; margin-bottom: 16px;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s;
        }
        .ind-card:hover .ind-icon,
        .ind-card.ind-active .ind-icon {
          transform: scale(1.1) rotate(8deg);
          box-shadow: 0 6px 20px rgba(1,97,254,0.18);
        }

        .ind-card-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.1rem; font-weight: 800;
          letter-spacing: -0.01em; line-height: 1.2;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .ind-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px; line-height: 1.65;
          color: #64748b;
          flex: 1;
        }

        .ind-divider {
          height: 1px;
          background: #e2e8f0;
          margin: 16px 0 12px;
          transition: background 0.3s;
        }
        .ind-card:hover .ind-divider,
        .ind-card.ind-active .ind-divider { background: rgba(1,97,254,0.2); }

        .ind-bottom-row {
          display: flex; align-items: center; justify-content: space-between;
        }

        .ind-learn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #0161FE;
          display: flex; align-items: center; gap: 5px;
        }
        .ind-learn svg { transition: transform 0.2s; }
        .ind-card:hover .ind-learn svg { transform: translateX(3px); }

        .ind-arrow-btn {
          width: 30px; height: 30px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid #e2e8f0; color: #94a3b8;
          transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.25s;
        }
        .ind-card:hover .ind-arrow-btn,
        .ind-card.ind-active .ind-arrow-btn {
          background: #0161FE; border-color: #0161FE;
          color: #fff; transform: rotate(-45deg);
        }

        /* ── Dot indicators ── */
        .ind-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #e2e8f0;
          transition: background 0.25s, width 0.25s;
          flex-shrink: 0;
        }
        .ind-dot.ind-dot-active {
          background: #0161FE;
          width: 18px;
          border-radius: 99px;
        }

        /* ── Responsive ── */
        @media (min-width: 1024px) {
          .ind-card {
            width: calc((100vw - 80px - 48px) / 4);
          }
        }
        @media (max-width: 900px) {
          .ind-card {
            width: calc((100vw - 48px - 32px) / 2.2);
          }
        }
        @media (max-width: 560px) {
          .ind-card {
            width: calc(100vw - 56px);
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="ind-section relative overflow-hidden bg-white py-24 lg:py-32 border-t border-slate-100"
      >
        {/* Soft blobs */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle at 40% 40%, #dbeafe, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle at 60% 60%, #e0f2fe, transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* ── Header ── */}
          <div className={`ind-rev ind-d0 ${visible ? 'ind-vis' : ''} flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10`}>
            <div>
              <div className="mb-5">
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

          {/* ── Scrollable track ── */}
          <div
            className={`ind-rev ind-d1 ${visible ? 'ind-vis' : ''} ind-scroll-wrap`}
            ref={scrollRef}
          >
            <div className="ind-track">
              {industries.map((industry, i) => (
                <div
                  key={industry.id}
                  className={`ind-card ${active === i ? 'ind-active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(active === i ? null : i)}
                >
                  <div className="ind-corner" />
                  <div className="ind-card-inner">
                    <div className="ind-top-row">
                      <span className="ind-num">{industry.num}</span>
                      <span className="ind-tag">{industry.tag}</span>
                    </div>
                    <div className="ind-icon">{industry.icon}</div>
                    <p className="ind-card-title">{industry.title}</p>
                    <p className="ind-card-desc">{industry.desc}</p>
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

          {/* ── Dot indicators ── */}
          <div className={`ind-rev ind-d2 ${visible ? 'ind-vis' : ''} flex items-center gap-2 mt-6 px-6 lg:px-10`}>
            {industries.map((_, i) => (
              <div
                key={i}
                className={`ind-dot ${activeDot === i ? 'ind-dot-active' : ''}`}
              />
            ))}
            <span
              style={{
                marginLeft: 'auto',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '9px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
              Scroll to explore
            </span>
          </div>

        </div>
      </section>
    </>
  );
}