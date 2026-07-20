'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const specGroups = [
  {
    title: 'Optics & Capture',
    icon: <><rect x="3" y="7" width="18" height="10" rx="2" /><circle cx="12" cy="12" r="3" /></>,
    rows: [
      ['Capture Distance', '3 – 12 m (lens dependent)'],
      ['Shutter Speed', '≤ 1/1000s'],
      ['Lanes per Camera', 'Up to 4 lanes'],
      ['Sensor Modes', 'Global shutter, HDR, low-light'],
    ],
  },
  {
    title: 'Illumination',
    icon: <><circle cx="12" cy="12" r="5" /><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
    rows: [
      ['IR Wavelength', '850 nm / 940 nm'],
      ['Night Performance', 'Full recognition in zero ambient light'],
      ['Weather Tolerance', 'Rain, fog, glare compensated'],
    ],
  },
  {
    title: 'Connectivity & Storage',
    icon: <><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 21h8M12 18v3" /></>,
    rows: [
      ['Network', 'Ethernet, PoE+, 4G / LTE'],
      ['Local Storage', 'Up to 256 GB microSD failover'],
      ['Protocols', 'ONVIF, REST API, RTSP'],
      ['Power', 'PoE+, 12V DC, 24V AC'],
    ],
  },
  {
    title: 'Build & Performance',
    icon: <><path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3z" /></>,
    rows: [
      ['Ingress Protection', 'IP67 weatherproof'],
      ['Impact Rating', 'IK10 vandal-resistant'],
      ['Recognition Accuracy', '98.7% average'],
      ['Processing Latency', '< 150 ms edge inference'],
    ],
  },
];

export default function SiproTechnicalSpecsSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('sts-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.sts-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .sts-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .sts-rev.sts-vis { opacity:1; transform:none; }
        .sts-d0{transition-delay:0s} .sts-d1{transition-delay:.08s}
        .sts-panel { transition: box-shadow 0.3s, border-color 0.3s; }
        .sts-panel:hover { box-shadow: 0 16px 40px rgba(1,97,254,.08); border-color: rgba(1,97,254,.25); }
        .sts-row {
          display:flex; align-items:baseline; justify-content:space-between; gap:16px;
          padding:11px 0; border-bottom:1px solid #f1f5f9;
        }
        .sts-row:last-child { border-bottom:none; }
      `}</style>
      <section ref={ref} className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <div className="sts-rev sts-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Technical Specifications
              </div>
              <h2 className="sts-rev sts-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Built on <span style={{ color:'#0161FE' }}>Enterprise-Grade Hardware</span>
              </h2>
            </div>
            <a href="#" className="sts-rev sts-d1 inline-flex items-center gap-2 text-sm font-bold whitespace-nowrap"
              style={{ color:'#0161FE' }}>
              Download Full Datasheet
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12" /><polyline points="7 10 12 15 17 10" /><path d="M4 19h16" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specGroups.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="sts-panel p-6 rounded-3xl border border-slate-200 bg-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background:'rgba(1,97,254,.08)', color:'#0161FE' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{g.icon}</svg>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{g.title}</h3>
                </div>
                <div>
                  {g.rows.map(([label, value], j) => (
                    <div key={j} className="sts-row">
                      <span className="text-xs text-slate-400 font-medium">{label}</span>
                      <span className="text-xs text-slate-800 font-bold text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
