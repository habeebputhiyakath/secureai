'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const rows = [
  {
    n: '01',
    title: 'One Camera, Every Angle',
    body: 'Four independently adjustable sensors — each with its own pan, tilt, and rotation — cover ground-level, wide, and long-throw views from a single housing. Point one lens at a gate, another down a driveway, and a third across a lot, without adding hardware.',
    tag: 'Multi-Sensor Coverage',
    color: '#0161FE',
    image: '/cameras/1.png',
    badge: '4 SENSORS',
  },
  {
    n: '02',
    title: 'Cut Hardware Costs, Not Coverage',
    body: 'Replacing up to four fixed cameras with one unit means fewer mounts, fewer runs of cable, and a simpler install. Fewer devices on the network also means lighter VMS licensing and less ongoing maintenance overhead.',
    tag: 'Deployment Economics',
    color: '#059669',
    image: '/cameras/3.png',
    badge: '1 DEVICE, NOT 4',
  },
  {
    n: '03',
    title: 'AI at the Edge, Per Channel',
    body: 'Each of the four channels runs its own independent AI analysis — intrusion detection on one lane, loitering on another, object-left on a third — so every angle gets analytics tuned to what it actually needs to watch.',
    tag: 'Per-Channel Intelligence',
    color: '#7c3aed',
    image: '/cameras/2.png',
    badge: 'LIVE AI ANALYSIS',
  },
];

function ImagePanel({ src, alt, color, badge }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="cov-visual">
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className="cov-img"
          onError={() => setFailed(true)}
        />
      ) : (
        // Fallback shown until the real photo is dropped into /public/products/cameras/
        <div className="cov-fallback" style={{ background: `linear-gradient(150deg, ${color}26 0%, #eef2f7 100%)` }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          <span className="cov-fallback-text">Add image at<br /><code>{src}</code></span>
        </div>
      )}
      <div className="cov-badge" style={{ color, borderColor: `${color}40` }}>
        <span className="cov-badge-dot" style={{ background: color }} />
        {badge}
      </div>
    </div>
  );
}

export default function CamerasOverviewSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('cov-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.cov-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .cov-rev {
          opacity: 0; transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .cov-rev.cov-vis { opacity: 1; transform: none; }

        .cov-visual {
          position: relative; width: 100%; aspect-ratio: 4/3;
          border-radius: 20px; overflow: hidden;
          border: 1px solid rgba(15,23,42,0.08);
          box-shadow: 0 20px 50px rgba(15,23,42,0.08);
          background: #f1f5f9;
        }
        .cov-img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .cov-visual:hover .cov-img { transform: scale(1.035); }

        .cov-fallback {
          width: 100%; height: 100%;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px;
        }
        .cov-fallback-text {
          font-family: 'JetBrains Mono', monospace; font-size: 0.68rem;
          color: #64748b; text-align: center; line-height: 1.6;
        }
        .cov-fallback-text code {
          font-size: 0.62rem; color: #475569; background: rgba(15,23,42,0.06);
          padding: 2px 6px; border-radius: 4px;
        }

        .cov-badge {
          position: absolute; bottom: 14px; left: 14px; z-index: 2;
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em;
          padding: 7px 14px; border-radius: 9999px;
          background: rgba(255,255,255,0.92); backdrop-filter: blur(6px);
          border: 1px solid; box-shadow: 0 4px 16px rgba(15,23,42,0.1);
        }
        .cov-badge-dot { width: 6px; height: 6px; border-radius: 9999px; }

        .cov-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; padding: 5px 12px; border-radius: 9999px;
          display: inline-block;
        }
      `}</style>

      <section
        ref={ref}
        id="overview"
        className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-slate-100"
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '28px 28px', opacity: 0.7,
          }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="cov-rev text-center mb-20 max-w-2xl mx-auto">
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(1,97,254,0.07)', color: '#0161FE',
                border: '1px solid rgba(1,97,254,0.18)',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              Your Journey of Multi-Vision, Redefined
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Why One Camera Beats Four
            </h2>
          </div>

          <div className="space-y-24">
            {rows.map((row, i) => {
              const reversed = i % 2 === 1;
              return (
                <div key={row.n} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: reversed ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={reversed ? 'lg:order-2' : ''}
                  >
                    <span className="cov-tag mb-5" style={{ background: `${row.color}14`, color: row.color, border: `1px solid ${row.color}33` }}>
                      {row.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                      {row.title}
                    </h3>
                    <p className="text-slate-500 text-base leading-relaxed max-w-lg">
                      {row.body}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: reversed ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={reversed ? 'lg:order-1' : ''}
                  >
                    <ImagePanel src={row.image} alt={row.title} color={row.color} badge={row.badge} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}