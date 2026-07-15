'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Edge AI Units',         href: '#edge' },
  { label: 'GPU Servers',           href: '#gpu' },
  { label: 'Video Processing',      href: '#vpu' },
  { label: 'Storage Appliances',    href: '#storage' },
];

export default function ProcessingHeroSection() {
  const ref = useRef(null);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('ph-vis');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.ph-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ph-rev {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .ph-rev.ph-vis { opacity: 1; transform: none; }
        .ph-d0{transition-delay:0s}   .ph-d1{transition-delay:0.1s}
        .ph-d2{transition-delay:0.2s} .ph-d3{transition-delay:0.3s}
        .ph-d4{transition-delay:0.4s} .ph-d5{transition-delay:0.5s}

        @keyframes phScan { 0%{top:0%} 100%{top:100%} }
        .ph-scan {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(125,211,252,0.55) 50%, transparent);
          animation: phScan 3.6s linear infinite; pointer-events: none;
        }
        @keyframes phPulse { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .ph-pulse { animation: phPulse 1.5s ease-in-out infinite; }

        .ph-quicklink {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 18px; border-radius: 9999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          color: #bae6fd; font-size: 0.75rem; font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .ph-quicklink:hover {
          background: rgba(1,97,254,0.28);
          border-color: rgba(1,97,254,0.55);
          color: #fff; transform: translateY(-2px);
        }
        .ph-btn-primary {
          display:inline-flex; align-items:center; gap:9px;
          font-size:0.72rem; font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#0161FE; background:#fff;
          border:1.5px solid #fff; border-radius:9999px; padding:14px 32px;
          transition:background 0.22s,transform 0.22s,box-shadow 0.22s;
          cursor:pointer; text-decoration:none;
        }
        .ph-btn-primary:hover {
          background:rgba(255,255,255,0.88); transform:translateY(-2px);
          box-shadow:0 10px 32px rgba(0,0,0,0.18);
        }
        .ph-btn-secondary {
          display:inline-flex; align-items:center; gap:9px;
          font-size:0.72rem; font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#fff;
          background:rgba(255,255,255,0.1);
          border:1.5px solid rgba(255,255,255,0.25); border-radius:9999px;
          padding:14px 32px;
          transition:background 0.22s,transform 0.22s;
          cursor:pointer; text-decoration:none;
        }
        .ph-btn-secondary:hover { background:rgba(255,255,255,0.18); transform:translateY(-2px); }

        /* Right-side product visual */
        .ph-visual {
          position: relative; width: 100%; max-width: 580px; height:450px;
          aspect-ratio: 4/5; border-radius: 28px; overflow: hidden;
          background: #020c1b;
          border: 1px solid rgba(125,211,252,0.22);
          box-shadow: 0 30px 90px rgba(1,10,30,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset;
        }
        .ph-visual-img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .ph-visual-fallback {
          width: 100%; height: 100%;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 22px;
          background: radial-gradient(circle at 50% 30%, rgba(1,97,254,0.18), transparent 65%), #020c1b;
        }
        .ph-node-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
        }
        .ph-node {
          width: 26px; height: 26px; border-radius: 7px;
          background: rgba(1,97,254,0.14); border: 1px solid rgba(56,189,248,0.35);
        }
        .ph-fallback-text {
          font-family: 'JetBrains Mono', monospace; font-size: 0.68rem;
          color: #7dd3fc; text-align: center; line-height: 1.7;
        }
        .ph-fallback-text code {
          font-size: 0.62rem; color: #bae6fd; background: rgba(255,255,255,0.06);
          padding: 2px 6px; border-radius: 4px;
        }
        .ph-visual-badge {
          position: absolute; top: 18px; left: 18px; z-index: 2;
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em;
          padding: 7px 14px; border-radius: 9999px; color: #bae6fd;
          background: rgba(2,12,27,0.7); backdrop-filter: blur(6px);
          border: 1px solid rgba(125,211,252,0.3);
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden flex items-center min-h-screen"
        style={{ background: 'linear-gradient(150deg, #020c1b 0%, #05152f 45%, #0161FE 140%)' }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(125,211,252,0.08) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }} />
        <div className="ph-scan" />

        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 60% 35%, rgba(1,97,254,0.28), transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 40% 65%, rgba(14,165,233,0.14), transparent 65%)' }} />

        <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">

            {/* Left: copy */}
            <div>
              <div className="ph-rev ph-d0 mb-7">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: 'rgba(1,97,254,0.15)',
                    border: '1px solid rgba(56,189,248,0.35)',
                    color: '#bae6fd',
                    fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                  }}
                >
                  <span className="ph-pulse w-1.5 h-1.5 rounded-full bg-sky-400" />
                  SecureAAI Hardware — Digital Processing Units
                </span>
              </div>

              <h1
                className="ph-rev ph-d1 font-extrabold tracking-tight text-white mb-4"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', lineHeight: 1.05 }}
              >
                Digital Processing<br />Units
              </h1>
              <p
                className="ph-rev ph-d2 mb-3"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 700, color: '#7dd3fc', lineHeight: 1.3 }}
              >
                Intelligent Computing for Advanced Analytics
              </p>
              <p className="ph-rev ph-d3 text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                SecureAAI Digital Processing Units provide powerful edge and centralized computing capabilities to support AI analytics, video processing, and large-scale deployments.
              </p>

              {/* CTAs */}
              <div className="ph-rev ph-d4 flex flex-wrap gap-4 mb-12">
                <a href="#solutions" className="ph-btn-primary">
                  VIEW SOLUTIONS
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a href="#" className="ph-btn-secondary">REQUEST QUOTE</a>
              </div>

              {/* Quick-jump chips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-2"
              >
                {quickLinks.map((q, i) => (
                  <a key={i} href={q.href} className="ph-quicklink">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="12" y1="17" x2="12" y2="21" /><line x1="8" y1="21" x2="16" y2="21" />
                    </svg>
                    {q.label}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right: product visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="justify-self-center"
            >
              <div className="ph-visual">
                <span className="ph-visual-badge">
                  <span className="ph-pulse w-1.5 h-1.5 rounded-full bg-sky-400" />
                  DPU HARDWARE
                </span>

                {!imgFailed ? (
                  <img
                    src="https://io.bikegremlin.com/wp-content/uploads/2024/07/processor-cpu.jpg"
                    alt="SecureAAI Digital Processing Unit"
                    className="ph-visual-img"
                    onError={() => setImgFailed(true)}
                  />
                ) : (
                  // Fallback shown until the real product photo is dropped into /public/products/processing/
                  <div className="ph-visual-fallback">
                    <div className="ph-node-grid">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="ph-node" style={{ opacity: 0.4 + (i % 4) * 0.15 }} />
                      ))}
                    </div>
                    <span className="ph-fallback-text">Add product image at<br /><code>/products/processing/hero-dpu.jpg</code></span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(2,12,27,0.65))' }} />
      </section>
    </>
  );
}