'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Portable & Power-Efficient Deployment',
    desc: 'SecureAAi ANPR cameras can be mounted on trailers, poles, or mobile enclosures for rapid, self-contained deployment in remote parking areas, requiring minimal infrastructure and power.',
  },
  {
    title: 'Remote ANPR Parking Access Control',
    desc: 'Automatic plate recognition drives entry and exit decisions even where no fixed network connection or on-site attendant is available.',
  },
  {
    title: 'Night-Time Surveillance & Monitoring',
    desc: 'IR-enabled cameras keep capturing clear plate reads and site footage long after the sun goes down.',
  },
  {
    title: 'Automated Parking Records & Access Logging',
    desc: 'Every entry and exit is logged automatically, building a searchable record of site activity without manual input.',
  },
  {
    title: 'Flexible Coverage for Remote Sites',
    desc: 'Solar and battery-backed power options extend reliable coverage to sites with no grid connection nearby.',
  },
];

function PlusBadge() {
  return (
    <span className="eera-plus">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </span>
  );
}

export default function EemRemoteAccessSection() {
  const ref = useRef(null);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('eera-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.eera-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .eera-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .eera-rev.eera-vis { opacity:1; transform:none; }
        .eera-d0{transition-delay:0s} .eera-d1{transition-delay:.08s}

        .eera-item { border-bottom: 1px solid rgba(255,255,255,.16); }
        .eera-item:last-child { border-bottom: none; }
        .eera-item button { width:100%; }
        .eera-check {
          width: 26px; height: 26px; border-radius: 9999px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
          background: rgba(255,255,255,.14); border: 1px solid rgba(255,255,255,.35);
        }
        .eera-chev { transition: transform .3s ease; flex-shrink:0; }
        .eera-chev.eera-chev-open { transform: rotate(180deg); }
        .eera-desc { overflow:hidden; transition: max-height .35s ease, opacity .3s ease, margin .35s ease; }

        .eera-scene {
          position: relative; border-radius: 22px; overflow: hidden; height: 100%; min-height: 380px;
          background: #0f172a;
        }
        .eera-scene img { display:block; width:100%; height:100%; object-fit:cover; }

        .eera-badge {
          position:absolute; display:flex; align-items:center; gap:10px;
          background: rgba(15,23,42,.88); backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,.14); border-radius:12px;
          padding: 9px 14px; box-shadow: 0 14px 32px -10px rgba(0,0,0,.6);
          font-size:.74rem; font-weight:600; color:#e2e8f0; white-space:nowrap;
        }
        .eera-plus {
          width:20px; height:20px; border-radius:9999px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
          background:#0161FE; box-shadow:0 0 0 4px rgba(1,97,254,.25);
        }
      `}</style>

      <section ref={ref} className="relative bg-white py-24 lg:py-32 border-t border-slate-100">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="eera-rev eera-d0 flex items-center justify-center gap-3 mb-12 text-center">
            <span className="inline-block w-1 h-6 rounded-full" style={{ background: '#0161FE' }} />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Remote Access Control for Off-Grid Sites
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[28px] overflow-hidden grid grid-cols-1 lg:grid-cols-2"
            style={{ background: 'linear-gradient(135deg, #0161FE 0%, #0b3fc4 100%)' }}
          >
            {/* Left: copy */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-white/90 text-base leading-relaxed mb-8">
                Managing vehicle entry and parking in <b className="underline decoration-white/40">off-grid</b> or remote locations presents unique challenges. Limited power, unreliable network connectivity, and the absence of permanent infrastructure make traditional access control and monitoring impractical. SecureAAi mobile surveillance units, equipped with edge AI-powered ANPR cameras, provide a flexible, self-contained solution for automatic vehicle access control with ANPR and{' '}
                <Link href="/solutions/parking-lot-management" className="underline decoration-white/40 font-semibold inline-flex items-center gap-1">
                  parking management
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </Link>{' '}
                in these environments.
              </p>

              <div>
                {items.map((it, i) => {
                  const isOpen = open === i;
                  return (
                    <div key={i} className="eera-item py-3.5">
                      <button type="button" onClick={() => setOpen(isOpen ? -1 : i)} className="flex items-center gap-3.5 text-left">
                        <span className="eera-check">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        </span>
                        <span className="flex-1 text-white font-bold text-[0.98rem]">{it.title}</span>
                        <svg className={`eera-chev ${isOpen ? 'eera-chev-open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                      </button>
                      <div className="eera-desc pl-[38px]" style={{ maxHeight: isOpen ? '120px' : '0px', marginTop: isOpen ? '10px' : '0px', opacity: isOpen ? 1 : 0 }}>
                        <p className="text-white/80 text-sm leading-relaxed pb-1">{it.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: entrance scene photo */}
            <div className="p-4 sm:p-6 lg:p-6 lg:pl-0">
              <div className="eera-scene">
                <img src="/car.jpeg" alt="Isometric render of an ANPR-controlled vehicle entrance with automated barrier and parking bays" />

                <div className="eera-badge" style={{ top: '30%', left: '4%' }}>
                  <PlusBadge />
                  Entrance &amp; Exit ANPR Camera
                </div>
                <div className="eera-badge" style={{ top: '16%', right: '4%' }}>
                  <PlusBadge />
                  Remote Parking Camera
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
