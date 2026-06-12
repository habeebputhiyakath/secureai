'use client';
import { useEffect, useRef, useState } from 'react';

const industries = [
  {
    id: 'airports',
    title: 'Airports',
    desc: 'AI-powered security for terminals, perimeters, and airside zones with automated threat detection and passenger flow management.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91" /><path d="M14 2v4l2 2-4 4 4 4-2 2v4" />
      </svg>
    ),
  },
  {
    id: 'hospitals',
    title: 'Hospitals',
    desc: 'Secure patient environments with visitor management, restricted zone access control, and 24/7 surveillance for healthcare facilities.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /><line x1="12" y1="7" x2="12" y2="10" /><line x1="10.5" y1="8.5" x2="13.5" y2="8.5" />
      </svg>
    ),
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    desc: 'Protect assets and workforce with perimeter security, vehicle tracking, and intelligent monitoring of production facilities.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    id: 'education',
    title: 'Education',
    desc: 'Safe campus environments with intelligent access control, visitor tracking, and real-time incident response for schools and universities.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: 'retail',
    title: 'Retail',
    desc: 'Loss prevention, queue management, footfall analytics, and VIP customer detection for modern retail environments.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: 'government',
    title: 'Government',
    desc: 'Mission-critical security for government premises, border control, embassies, and public spaces with SIRA-approved solutions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22" /><line x1="6" y1="18" x2="6" y2="11" /><line x1="10" y1="18" x2="10" y2="11" /><line x1="14" y1="18" x2="14" y2="11" /><line x1="18" y1="18" x2="18" y2="11" /><polygon points="12 2 20 7 4 7" />
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
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('ind-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.ind-rev').forEach(el => io.observe(el));
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
        .ind-d2 { transition-delay: 0.16s; }
        .ind-d3 { transition-delay: 0.20s; }
        .ind-d4 { transition-delay: 0.24s; }
        .ind-d5 { transition-delay: 0.28s; }
        .ind-d6 { transition-delay: 0.32s; }
        .ind-d7 { transition-delay: 0.36s; }

        /* Row */
        .ind-row {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4px;
          border-radius: 16px;
          padding: 22px 28px;
          cursor: pointer;
          background: #f3f4f6;
          color: #0f172a;
          transition: background 0.4s cubic-bezier(0.22,1,0.36,1),
                      color 0.4s cubic-bezier(0.22,1,0.36,1),
                      transform 0.3s ease,
                      box-shadow 0.3s ease;
        }
        .ind-row:hover:not(.ind-row-active) {
          background: #e9ecf1;
        }
        .ind-row-active {
          background: #0161FE;
          color: #ffffff;
          box-shadow: 0 14px 34px rgba(1,97,254,0.28);
          transform: translateY(-1px);
        }

        @media (min-width: 768px) {
          .ind-row {
            grid-template-columns: 1fr 1.4fr;
            align-items: center;
            gap: 24px;
          }
        }

        .ind-row-title {
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        /* Icon box */
        .ind-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          background: rgba(1,97,254,0.08);
          color: #0161FE;
          border: 1px solid rgba(1,97,254,0.16);
          transition: background 0.4s cubic-bezier(0.22,1,0.36,1),
                      color 0.4s ease,
                      border-color 0.4s ease,
                      transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .ind-row-active .ind-icon-wrap {
          background: rgba(255,255,255,0.18);
          color: #ffffff;
          border-color: rgba(255,255,255,0.3);
          transform: rotate(360deg);
        }

        .ind-row-desc {
          font-size: 0.85rem;
          line-height: 1.6;
          color: #94a3b8;
          transition: color 0.4s cubic-bezier(0.22,1,0.36,1),
                      grid-template-rows 0.45s cubic-bezier(0.22,1,0.36,1),
                      opacity 0.4s ease;
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          overflow: hidden;
        }
        .ind-row-desc > div { overflow: hidden; }
        .ind-row-desc.ind-desc-open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .ind-row-active .ind-row-desc {
          color: rgba(255,255,255,0.85);
        }

        @media (min-width: 768px) {
          .ind-row-desc {
            grid-template-rows: 1fr;
            opacity: 1;
          }
        }

        /* Arrow circle on right (desktop) */
        .ind-row-arrow {
          width: 38px; height: 38px;
          border-radius: 9999px;
          display: none;
          align-items: center; justify-content: center;
          flex-shrink: 0;
          border: 1.5px solid rgba(15,23,42,0.12);
          color: #94a3b8;
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .ind-row-active .ind-row-arrow {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.35);
          color: #ffffff;
          transform: translateX(2px) rotate(-45deg);
        }
        @media (min-width: 768px) {
          .ind-row-arrow { display: flex; }
        }
      `}</style>

      <section ref={ref} className="ind-section py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <div className="ind-rev ind-d0 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-slate-200 pb-10 mb-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">
                Industry Solutions
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900">
                Built for Every <em className="font-light not-italic text-slate-400">Sector,</em>
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

          {/* ── Industry rows ── */}
          <div className="flex flex-col gap-3">
            {industries.map((industry, i) => {
              const isActive = active === i;
              return (
                <div
                  key={industry.id}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`ind-rev ind-row ${isActive ? 'ind-row-active' : ''} ind-d${Math.min(i + 1, 7)}`}
                >
                  <div className="ind-row-title">
                    <span className="ind-icon-wrap">{industry.icon}</span>
                    {industry.title}
                  </div>

                  <div className={`ind-row-desc ${isActive ? 'ind-desc-open' : ''} flex md:items-center md:justify-between gap-4`}>
                    <div>
                      <p className="pt-1 md:pt-0">{industry.desc}</p>
                    </div>
                    <div className="ind-row-arrow">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}