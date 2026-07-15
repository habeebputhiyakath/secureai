'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const products = [
  {
    id: 'sivms',
    eyebrow: 'SiVMS™',
    title: 'Enterprise Video Management System',
    body: 'AI-powered video analytics, live monitoring, and centralized management across thousands of locations — with real-time search and automated alerting.',
    features: ['Real-time object detection', 'Multi-site federation', 'Automated alerts & rules', 'End-to-end encryption'],
    image: '/products/overview/sivms.png',
    href: '/products/sivms',
    color: '#0161FE',
    imgLeft: true,
  },
  {
    id: 'sipro',
    eyebrow: 'Si.PRO™',
    title: 'ANPR & Traffic Intelligence',
    body: 'High-speed license plate recognition powered by deep learning. Automate access control, monitor traffic flow, and detect stolen vehicles instantly.',
    features: ['99.8% Recognition Accuracy', 'Vehicle Make & Color Detection', 'Watchlist Integration', 'High-Speed Capture (150mph+)'],
    image: '/products/overview/anpr.png',
    href: '/products/sipro',
    color: '#4f46e5',
    imgLeft: false,
  },
  {
    id: 'parksi',
    eyebrow: 'ParkSi™',
    title: 'Smart Parking Platform',
    body: 'Eliminate congestion and maximize revenue. Provide seamless, ticketless entry and AI-driven occupancy guidance for modern parking facilities.',
    features: ['Ticketless ANPR Entry', 'Dynamic Pricing Engine', 'Real-Time LED Guidance', 'Cross-Platform Mobile App'],
    image: '/products/overview/parksi.png',
    href: '/products/parksi',
    color: '#0891b2',
    imgLeft: true,
  },
  {
    id: 'tracksi',
    eyebrow: 'TRACKSi™',
    title: 'Real-Time Fleet & Asset Tracking',
    body: 'Maintain complete visibility over your mobile assets. Leverage GPS, geofencing, and route analytics to optimize logistics and secure high-value shipments.',
    features: ['Live GPS Positioning', 'Dynamic Geofencing & Alerts', 'Historical Route Playback', 'Driver Behavior Analytics'],
    image: '/products/overview/tracksi.png',
    href: '/products/tracksi',
    color: '#059669',
    imgLeft: false,
  },
];

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function FeaturedProducts() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('fp-vis'); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.fp-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .fp-section { font-family: 'DM Sans', sans-serif; }

        .fp-rev { opacity: 0; transform: translateY(26px); transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1), transform 0.72s cubic-bezier(0.22,1,0.36,1); }
        .fp-rev.fp-vis { opacity: 1; transform: none; }
        .fp-d0 { transition-delay: 0.00s; }
        .fp-d1 { transition-delay: 0.08s; }
        .fp-d2 { transition-delay: 0.16s; }
        .fp-d3 { transition-delay: 0.24s; }
        .fp-d4 { transition-delay: 0.32s; }

        .fp-eyebrow { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
        .fp-mono { font-family: 'JetBrains Mono', monospace; }

        .fp-feat { transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease; }
        .fp-feat:hover { transform: translateY(-2px); box-shadow: 0 4px 20px -6px var(--accent-shadow, rgba(1,97,254,0.18)); border-color: var(--accent-border, rgba(1,97,254,0.35)) !important; }

        .fp-cta {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          color: #ffffff; background: var(--accent); border: 1.5px solid var(--accent);
          border-radius: 9999px; padding: 13px 30px;
          transition: background 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s;
          text-decoration: none; white-space: nowrap;
        }
        .fp-cta:hover { background: #ffffff; color: var(--accent); transform: translateY(-2px); box-shadow: 0 8px 24px -6px var(--accent-shadow, rgba(1,97,254,0.28)); }
        .fp-cta:hover svg { transform: translateX(3px); }
        .fp-cta svg { transition: transform 0.2s; }
      `}</style>

      <div ref={ref} id="products" className="fp-section">
        {products.map((p, idx) => {
          const isLight = idx % 2 === 0;
          return (
            <section
              key={p.id}
              className={`relative overflow-hidden py-24 lg:py-28 border-t border-slate-100 ${isLight ? 'bg-white' : 'bg-slate-50'}`}
            >
              <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center ${p.imgLeft ? '' : 'lg:[&>*:first-child]:order-2'}`}>

                  {/* Image */}
                  <motion.div
                    initial={{ scale: 1.06, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden rounded-[28px] relative"
                    style={{ boxShadow: '0 20px 60px rgba(2,6,26,0.1)' }}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-[360px] lg:h-[440px] object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex flex-col" style={{ '--accent': p.color, '--accent-shadow': `${p.color}2e`, '--accent-border': `${p.color}59` }}>

                    <div className="fp-rev fp-d0 mb-6 flex items-center gap-3">
                      <span
                        className="fp-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{ background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}30` }}
                      >
                        {p.eyebrow}
                      </span>
                      <span className="fp-mono text-[0.68rem] tracking-[0.1em] text-slate-400">
                        P.0{idx + 1}
                      </span>
                    </div>

                    <h2 className="fp-rev fp-d1 text-3xl sm:text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 mb-5">
                      {p.title}
                    </h2>

                    <p className="fp-rev fp-d2 text-slate-500 text-base sm:text-[1.05rem] leading-relaxed max-w-[480px] mb-8">
                      {p.body}
                    </p>

                    <div className="fp-rev fp-d3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
                      {p.features.map((f, i) => (
                        <div key={i} className="fp-feat flex items-center gap-3 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-[13.5px] font-semibold text-slate-700">
                          <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: `${p.color}15`, color: p.color }}>
                            <CheckIcon />
                          </span>
                          {f}
                        </div>
                      ))}
                    </div>

                    <div className="fp-rev fp-d4">
                      <Link href={p.href} className="fp-cta">
                        Explore {p.eyebrow} <ArrowIcon />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}