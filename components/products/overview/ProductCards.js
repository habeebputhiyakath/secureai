'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const PRODUCTS = [
  {
    id: 'sivms',
    image: 'https://www.satlinks.in/Encyc/2025/3/18/video-management-system_202503181711430983_H@@IGHT_504_W@@IDTH_900.jpg',
    badge: 'Video Management',
    name: 'SiVMS™',
    tagline: 'Enterprise Video Management System',
    desc: 'Centralize surveillance operations and achieve complete situational awareness across your entire facility network with powerful AI-enhanced video intelligence.',
    href: '/products/sivms',
    accent: '#0161FE',
    capabilities: [
      'Live Monitoring & Playback',
      'Multi-Site Management',
      'AI Analytics Integration',
      'Intelligent Search',
      'Mobile & Cloud Access',
      'Event Management',
    ],
    applications: ['Smart Cities', 'Airports', 'Transportation', 'Healthcare', 'Government', 'Manufacturing'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    id: 'sipro',
    image: 'https://efkonindia.com/wp-content/uploads/2024/05/inner-header-anpr.jpg',
    badge: 'ANPR & Traffic',
    name: 'Si.PRO™',
    tagline: 'Enterprise ANPR & Traffic Intelligence',
    desc: 'High-accuracy Automatic Number Plate Recognition and intelligent traffic analytics for vehicle management, enforcement, and access control at scale.',
    href: '/products/sipro',
    accent: '#0161FE',
    capabilities: [
      'License Plate Recognition',
      'Vehicle Attribute Detection',
      'Blacklist & Whitelist Management',
      'Real-Time Alerts',
      'Traffic Analytics',
      'Access Control Integration',
    ],
    applications: ['Parking Management', 'Smart Cities', 'Traffic Monitoring', 'Law Enforcement', 'Logistics'],
    badge2: 'SIRA Approved',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="10" rx="2" />
        <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
        <circle cx="8" cy="12" r="1" fill="currentColor" />
        <circle cx="16" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'parksi',
    image: 'https://img.magnific.com/free-vector/smart-parking-man-user-with-smartphone-touch-screen-control-car-driving-park_33099-165.jpg?semt=ais_hybrid&w=740&q=80',
    badge: 'Smart Parking',
    name: 'ParkSi™',
    tagline: 'Smart Parking Management Platform',
    desc: 'Optimize parking operations through intelligent vehicle access, occupancy monitoring, guidance systems, and advanced analytics — all in one platform.',
    href: '/products/parksi',
    accent: '#0161FE',
    capabilities: [
      'Ticketless Vehicle Access',
      'Occupancy Detection',
      'Parking Guidance',
      'Parking Enforcement',
      'Stay-Time Analysis',
      'Multi-Site Management',
    ],
    applications: ['Shopping Malls', 'Airports', 'Hotels', 'Hospitals', 'Corporate Campuses', 'Smart Cities'],
    badge2: 'New',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 8h4.5a2.5 2.5 0 0 1 0 5H9V8z" />
        <line x1="9" y1="16" x2="9" y2="13" />
      </svg>
    ),
  },
  {
    id: 'tracksi',
    image: 'https://img.freepik.com/premium-vector/car-technology-connected-smartphones-helps-identify-location-navigate-destination_111088-2055.jpg?semt=ais_hybrid&w=740&q=80',
    badge: 'Asset Tracking',
    name: 'TRACKSi™',
    tagline: 'Real-Time Asset & Vehicle Tracking',
    desc: 'Intelligent tracking and monitoring platform delivering real-time visibility into vehicles, assets, people, and mobile resources across any operational environment.',
    href: '/products/tracksi',
    accent: '#0161FE',
    capabilities: [
      'Real-Time Tracking',
      'Fleet Management',
      'Geofencing & Alerts',
      'Historical Playback',
      'Route Optimization',
      'Analytics & Reporting',
    ],
    applications: ['Logistics', 'Transportation', 'Fleet Management', 'Industrial Facilities', 'Mining', 'Smart Cities'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

function ProductCard({ product, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('pc-vis');
      }),
      { threshold: 0.1 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="pc-card"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className={`max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>

        {/* Text side */}
        <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>

          {/* Badge row */}
          <div className="flex items-center gap-3 mb-5">
            <span className="pc-badge-category">{product.badge}</span>
            {product.badge2 && (
              <span className="pc-badge-special">{product.badge2}</span>
            )}
          </div>

          {/* Product name */}
          <div className="mb-2">
            <span className="pc-product-name">{product.name}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug mb-4">
            {product.tagline}
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-8">
            {product.desc}
          </p>

          {/* Capabilities */}
          <div className="mb-8">
            <p className="pc-section-label mb-3">Core Capabilities</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.capabilities.map(c => (
                <div key={c} className="flex items-center gap-2.5">
                  <span className="pc-dot" />
                  <span className="text-sm text-slate-600 font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="mb-8">
            <p className="pc-section-label mb-3">Applications</p>
            <div className="flex flex-wrap gap-2">
              {product.applications.map(a => (
                <span key={a} className="pc-app-pill">{a}</span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a href={product.href} className="pc-cta">
            Explore {product.name}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Image side */}
        <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
            className="pc-img-frame">
            <img
              src={product.image}
              alt={`${product.name} — ${product.tagline}`}
              className="pc-img"
              onError={e => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/800x560/e8edf4/94a3b8?text=${encodeURIComponent(product.name)}`;
              }}
            />
            <div className="pc-img-overlay">
              <span className="pc-img-name">{product.name}</span>
              <span className="pc-img-tag">{product.tagline}</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Divider between cards (except last) */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="border-t border-slate-100" />
      </div>
    </div>
  );
}

export default function ProductCards() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .pc-card {
          font-family: 'DM Sans', sans-serif;
          background: #fff;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
                      transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .pc-card.pc-vis { opacity: 1; transform: none; }

        .pc-badge-category {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 9999px;
          background: rgba(1,97,254,0.08);
          color: #0161FE;
          border: 1px solid rgba(1,97,254,0.18);
          font-family: 'JetBrains Mono', monospace;
        }
        .pc-badge-special {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 9999px;
          background: #f0fdf4;
          color: #15803d;
          border: 1px solid #bbf7d0;
        }

        .pc-product-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          font-weight: 600;
          color: #0161FE;
          letter-spacing: 0.04em;
        }

        .pc-section-label {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #94a3b8;
          font-family: 'JetBrains Mono', monospace;
        }

        .pc-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #0161FE;
          flex-shrink: 0;
        }

        .pc-app-pill {
          font-size: 0.72rem;
          font-weight: 500;
          padding: 4px 12px;
          border-radius: 9999px;
          background: #f8fafc;
          color: #475569;
          border: 1px solid #e2e8f0;
        }

        .pc-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
          background: #0161FE;
          border: 1.5px solid #0161FE;
          border-radius: 9999px;
          padding: 11px 26px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .pc-cta:hover {
          background: #0052d6;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(1,97,254,0.25);
        }
        .pc-cta:hover svg { transform: translateX(3px); }
        .pc-cta svg { transition: transform 0.2s; }

        /* Image frame */
        .pc-img-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e8edf4;
          box-shadow: 0 8px 32px rgba(1,97,254,0.08);
          transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
          background: #e8edf4;
        }
        .pc-img-frame:hover {
          box-shadow: 0 20px 56px rgba(1,97,254,0.14);
          transform: translateY(-4px);
          border-color: #a3c4fe;
        }
        .pc-img-frame:hover .pc-img { transform: scale(1.04); }

        .pc-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.55s cubic-bezier(0.22,1,0.36,1);
        }

        .pc-img-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 20px 22px 18px;
          background: linear-gradient(to top, rgba(1,20,60,0.72) 0%, transparent 100%);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .pc-img-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.06em;
        }
        .pc-img-tag {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.65);
          font-weight: 400;
        }
      `}</style>

      <section id="products" className="bg-white">
        {PRODUCTS.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </section>
    </>
  );
}