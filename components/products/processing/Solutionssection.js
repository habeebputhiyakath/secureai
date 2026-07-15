'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const solutions = [
  {
    id: 'edge',
    num: '01',
    label: 'Edge AI Processing Units',
    tagline: 'Real-time analytics and event processing at the edge.',
    desc: 'Compact, ruggedised computing units that run deep-learning inference locally — eliminating cloud round-trips. Deploy directly alongside cameras for sub-50ms event detection without any bandwidth overhead.',
    gradient: 'linear-gradient(135deg, #1a0a3b 0%, #6d28d9 100%)',
    accentColor: '#7c3aed',
    accentBg: 'rgba(124,58,237,0.08)',
    accentBorder: 'rgba(124,58,237,0.2)',
    specs: ['< 50ms Latency', 'On-Device Inference', 'PoE Powered', 'Fanless Design'],
    image: 'https://share.opsy.st/6227cd5d3208b-Edge+AI.png',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 'gpu',
    num: '02',
    label: 'GPU Accelerated Servers',
    tagline: 'Support high-performance AI workloads.',
    desc: 'Rack-mount GPU servers configured for parallel AI inference across thousands of camera streams simultaneously. Ideal for city-scale surveillance, facial recognition at scale, and real-time behavioural analytics.',
    gradient: 'linear-gradient(135deg, #0f2a5e 0%, #0161FE 100%)',
    accentColor: '#0161FE',
    accentBg: 'rgba(1,97,254,0.08)',
    accentBorder: 'rgba(1,97,254,0.2)',
    specs: ['Multi-GPU Support', '10,000+ Channels', 'PCIe Gen 4', 'Redundant PSU'],
    image: 'https://cdn.prod.website-files.com/688af3c3b556a2c3deb298c0/69776c36d11b2a80de27c636_Product_Hero_TITAN-GM645R-G6.webp',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    id: 'vpu',
    num: '03',
    label: 'Video Processing Units',
    tagline: 'Optimized for enterprise video management systems.',
    desc: 'Purpose-built VPUs handle the heavy lifting of encoding, decoding, and transcoding thousands of streams with hardware acceleration — freeing your servers for analytics rather than codec work.',
    gradient: 'linear-gradient(135deg, #082d1a 0%, #059669 100%)',
    accentColor: '#059669',
    accentBg: 'rgba(5,150,105,0.08)',
    accentBorder: 'rgba(5,150,105,0.2)',
    specs: ['H.265/H.264', '4K@60fps', 'Hardware Codec', 'VMS Integration'],
    image: 'https://elexexplorer.com/wp-content/uploads/2023/05/GPU_feature_image_761x582.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <polygon points="10 8 16 12 10 16 10 8" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'storage',
    num: '04',
    label: 'Storage Appliances',
    tagline: 'Secure and scalable video storage solutions.',
    desc: 'Enterprise NAS and SAN solutions engineered for continuous video write loads. Scale from 12TB to multi-petabyte configurations with RAID protection, automatic tiering, and built-in backup management.',
    gradient: 'linear-gradient(135deg, #1a0f07 0%, #d97706 100%)',
    accentColor: '#d97706',
    accentBg: 'rgba(217,119,6,0.08)',
    accentBorder: 'rgba(217,119,6,0.2)',
    specs: ['12TB – 4PB+', 'RAID Protected', 'AES-256 Encrypted', 'Auto Tiering'],
    image: 'https://www.bluechipgulf.ae/wp-content/uploads/2020/01/storage-appliance.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
];

function SolutionMedia({ image, gradient, icon, label, num }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="h-52 overflow-hidden relative" style={{ background: gradient }}>
      {!failed ? (
        <img
          src={image}
          alt={label}
          className="psol-visual absolute inset-0 w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        // Fallback shown until the real product photo is dropped into /public/products/processing/
        <div className="psol-visual absolute inset-0 flex items-center justify-center gap-8">
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)' }}
          >
            {icon}
          </div>
          <div className="flex flex-col gap-2 opacity-30">
            {[60, 80, 48, 70, 55].map((w, j) => (
              <div key={j} className="h-1.5 rounded-full bg-white" style={{ width: w }} />
            ))}
          </div>
        </div>
      )}

      {/* Gradient wash for legibility over real photos */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(2,12,27,0.05) 0%, rgba(2,12,27,0.5) 100%)' }} />

      {/* Icon chip, bottom-left */}
      <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.25)' }}
      >
        {icon}
      </div>

      {/* Step number */}
      <div className="absolute top-4 left-4">
        <span className="psol-num text-white opacity-70">{num}</span>
      </div>
    </div>
  );
}

export default function ProcessingSolutionsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('psol-vis');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.psol-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .psol-rev {
          opacity: 0; transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .psol-rev.psol-vis { opacity: 1; transform: none; }
        .psol-d0{transition-delay:0s} .psol-d1{transition-delay:0.08s}
        .psol-d2{transition-delay:0.16s}

        .psol-card {
          transition: box-shadow 0.25s, transform 0.25s;
          cursor: default;
        }
        .psol-card:hover {
          box-shadow: 0 16px 56px rgba(0,0,0,0.10) !important;
          transform: translateY(-5px);
        }
        .psol-visual { transition: transform 0.55s cubic-bezier(0.22,1,0.36,1); }
        .psol-card:hover .psol-visual { transform: scale(1.05); }

        .psol-spec {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem; font-weight: 600;
          padding: 4px 10px; border-radius: 9999px;
        }
        .psol-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em;
        }
        .psol-enquire {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; text-decoration: none;
          transition: gap 0.2s;
        }
        .psol-enquire:hover { gap: 10px; }
        .psol-enquire svg { transition: transform 0.2s; }
        .psol-enquire:hover svg { transform: translateX(3px); }
      `}</style>

      <section
        ref={ref}
        id="solutions"
        className="relative overflow-hidden bg-slate-50 py-24 lg:py-32 border-t border-slate-100"
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '28px 28px', opacity: 0.35,
          }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="psol-rev psol-d0 mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(109,40,217,0.08)', color: '#6d28d9',
                border: '1px solid rgba(109,40,217,0.2)',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              Solutions Include
            </div>
            <h2 className="psol-rev psol-d1 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-4">
              Purpose-Built for<br />
              <span style={{ color: '#6d28d9' }}>Every Workload</span>
            </h2>
            <p className="psol-rev psol-d2 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Four hardware families designed to match the exact compute, storage, and latency requirements of your deployment.
            </p>
          </div>

          {/* Cards — 2×2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.id}
                id={sol.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.72, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="psol-card bg-white rounded-3xl overflow-hidden border border-slate-200"
                style={{ boxShadow: '0 3px 18px rgba(0,0,0,0.05)' }}
              >
                <SolutionMedia image={sol.image} gradient={sol.gradient} icon={sol.icon} label={sol.label} num={sol.num} />

                {/* Body */}
                <div className="p-7">
                  <h3 className="text-lg font-extrabold mb-1" style={{ color: sol.accentColor }}>
                    {sol.label}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 mb-3">{sol.tagline}</p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{sol.desc}</p>

                  {/* Spec pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {sol.specs.map((s, j) => (
                      <span key={j} className="psol-spec"
                        style={{ background: sol.accentBg, color: sol.accentColor, border: `1px solid ${sol.accentBorder}` }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <a href="#" className="psol-enquire" style={{ color: sol.accentColor }}>
                    ENQUIRE NOW
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}