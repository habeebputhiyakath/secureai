'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const featuredCards = [
  {
    id: 'anpr',
    tags: ['Smart Security', 'Edge AI'],
    title: 'ANPR Solutions with 98.7% Accuracy Across 60+ International Formats',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    slug: 'anpr-solutions',
  },
  {
    id: 'vms',
    tags: ['Enterprise', 'Video Management'],
    title: 'Centralized VMS Powers 10,000+ Camera Networks with AI-Driven Search',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    slug: 'vms-platform',
  },
];

const smallCards = [
  {
    id: 'parking',
    tags: ['Smart Parking', 'IoT Sensors'],
    title: 'Smart Parking System Manages 5,000+ Bays Across 3 Cities with Real-Time Occupancy',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=300&q=80',
    slug: 'smart-parking',
  },
  {
    id: 'access',
    tags: ['Access Control', 'Biometric'],
    title: 'Biometric Access Control Secures 200+ Critical Zones for Government Campus',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80',
    slug: 'access-control',
  },
  {
    id: 'analytics',
    tags: ['AI Analytics', 'Deep Learning'],
    title: 'AI Video Analytics Boosts Retail Insights & Reduces Shrinkage by 40%',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80',
    slug: 'ai-analytics',
  },
  {
    id: 'smartcity',
    tags: ['Smart City', 'IoT Platform'],
    title: 'City-Wide Surveillance Integrates 15,000+ Sensors Across Metro Area',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=300&q=80',
    slug: 'smart-city',
  },
];

function ArrowIcon({ size = 13 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function EcosystemSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('eco-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.eco-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .eco-section { font-family: 'DM Sans', sans-serif; }

        /* Reveal */
        .eco-rev {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .eco-rev.eco-vis { opacity: 1; transform: none; }
        .eco-d0 { transition-delay: 0.00s; }
        .eco-d1 { transition-delay: 0.08s; }
        .eco-d2 { transition-delay: 0.16s; }
        .eco-d3 { transition-delay: 0.24s; }
        .eco-d4 { transition-delay: 0.32s; }
        .eco-d5 { transition-delay: 0.40s; }

        /* Dot grid bg */
        .eco-dotgrid::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.45;
        }

        /* Eyebrow pill */
        .eco-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* Accent underline on heading */
        .eco-accent-line {
          position: relative;
          display: inline-block;
        }
        .eco-accent-line::after {
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
        .eco-vis .eco-accent-line::after { transform: scaleX(1); }

        /* See more pill — outline #0161FE, fills on hover */
        .eco-see-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0161FE;
          background: #ffffff;
          border: 1.5px solid #0161FE;
          border-radius: 9999px;
          padding: 12px 26px;
          transition: background 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s;
          text-decoration: none;
          white-space: nowrap;
        }
        .eco-see-more:hover {
          background: #0161FE;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(1,97,254,0.22);
        }
        .eco-see-more:hover svg { transform: translateX(3px); }
        .eco-see-more svg { transition: transform 0.2s; }

        /* Mono index labels */
        .eco-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <section id="solutions" ref={ref} className="eco-section eco-dotgrid relative overflow-hidden bg-white py-16 lg:py-24 border-t border-slate-100">

        {/* Soft blue blobs to echo AboutSection */}
        <div className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle at 40% 40%, #dbeafe, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(circle at 60% 60%, #e0f2fe, transparent 70%)' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-slate-200 pb-10 mb-10">
            <div>
              {/* Eyebrow pill */}
              <div className="eco-rev eco-d0 mb-5">
                <span
                  className="eco-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Portfolio
                </span>
              </div>

              <h2 className="eco-rev eco-d1 text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
                Our Success Stories{' '}
                <span className="eco-accent-line" style={{ color: '#0161FE' }}>Real Results,</span>
                <br className="hidden sm:block" />
                {' '}Real Impact
              </h2>
            </div>

            <div className="eco-rev eco-d2 shrink-0 self-start sm:self-auto">
              <a href="#" className="eco-see-more">
                See More <ArrowIcon />
              </a>
            </div>
          </div>

          {/* ── Featured cards 2-up ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
            {featuredCards.map((card, i) => (
              <a
                key={card.id}
                href={`/case-studies/${card.slug}`}
                className="group relative rounded-[28px] overflow-hidden min-h-[340px] sm:min-h-[400px] flex flex-col justify-end cursor-pointer no-underline"
              >
                {/* BG image — same reveal as AboutSection's main image */}
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.12,
                  }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

                {/* Index */}
                <span className="eco-mono absolute top-5 left-5 text-[11px] font-semibold tracking-[0.18em] text-white/35 z-10">
                  0{i + 1}
                </span>

                {/* Arrow btn — #0161FE on hover */}
                <div
                  className="absolute top-5 right-5 z-10 w-[34px] h-[34px] rounded-full border border-white/25 bg-white/10 flex items-center justify-center text-white transition-all duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  style={{ transition: 'background 0.22s, transform 0.22s' }}
                >
                  <ArrowIcon />
                </div>
                <style>{`
                  .group:hover .group-hover\\:bg-\\[\\#0161FE\\] { background: #0161FE; }
                `}</style>

                {/* Body */}
                <div className="relative z-10 p-6 sm:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10.5px] font-semibold tracking-[0.1em] uppercase px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl lg:text-2xl font-semibold text-white leading-snug tracking-tight max-w-[440px]">
                    {card.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-[12px] font-semibold tracking-wide text-white/60 opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-250">
                    View case study <ArrowIcon size={12} />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* ── List rows ── */}
          <div className="border-t border-slate-200">
           {smallCards.map((card, i) => (
  <a
    key={card.id}
    href={`/case-studies/${card.slug}`}
    className={`eco-rev group flex items-center gap-5 border-b border-slate-200 py-5 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-lg hover:bg-slate-50 transition-colors duration-150 no-underline cursor-pointer ${
      i === 0 ? 'eco-d2' : i === 1 ? 'eco-d3' : i === 2 ? 'eco-d4' : 'eco-d5'
    }`}
  >
    {/* Index */}
    <span className="eco-mono hidden sm:block text-[11px] font-semibold tracking-[0.16em] text-slate-300 w-7 shrink-0">
      0{i + 3}
    </span>

    {/* Thumbnail — zoom-in reveal too */}
    <motion.div
      initial={{ scale: 1.2, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
      className="w-[110px] h-[68px] rounded-xl overflow-hidden shrink-0 bg-slate-100"
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
      />
    </motion.div>

    {/* Content */}
    <div className="flex-1 min-w-0">
      <div className="flex flex-wrap gap-1.5 mb-2">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-full border-[1.5px] border-slate-200 text-slate-500 transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-[13.5px] font-semibold text-slate-700 leading-snug tracking-tight transition-colors duration-200 line-clamp-2 group-hover:text-slate-950">
        {card.title}
      </p>
    </div>

    {/* Arrow — #0161FE on hover */}
    <div
      className="hidden sm:flex w-8 h-8 rounded-full border-[1.5px] border-slate-200 items-center justify-center text-slate-400 shrink-0 group-hover:translate-x-[2px] transition-all duration-200"
      style={{ transition: 'border-color 0.2s, color 0.2s, transform 0.2s' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#0161FE';
        e.currentTarget.style.color = '#0161FE';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '';
        e.currentTarget.style.color = '';
      }}
    >
      <ArrowIcon />
    </div>
  </a>
  
))}

          </div>

        </div>
      </section>
        </>
  );
}