'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Live Video Monitoring',
    desc: 'Monitor multiple sites from a single interface. View hundreds of camera feeds simultaneously with PTZ control, instant playback switching, and multi-screen layout customisation.',
    img: 'https://wewatchlive.ca/wp-content/uploads/2024/01/live-video-monitoring-new.jpg',
    fallbackGradient: 'linear-gradient(135deg, #0f2a5e 0%, #0161FE 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    stat: 'Up to 10,000+ channels',
  },
  {
    title: 'Recording & Playback',
    desc: 'Secure storage and evidence management. Continuous, scheduled, and event-triggered recording with tamper-proof audit trails and frame-accurate evidence retrieval.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0f_Vv3GqhXYZbKb1jksoQ4lfsTSJ_jrzcoA&s',
    fallbackGradient: 'linear-gradient(135deg, #052a1a 0%, #059669 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" fill="white" stroke="none" />
      </svg>
    ),
    stat: '4PB+ storage capacity',
  },
  {
    title: 'Event Management',
    desc: 'Receive intelligent alerts and notifications. AI-powered anomaly detection triggers instant escalations — perimeter breaches, loitering, crowd density, and more.',
    img: 'https://www.shutterstock.com/shutterstock/videos/4032856693/thumb/1.jpg?ip=x480',
    fallbackGradient: 'linear-gradient(135deg, #3b0a0a 0%, #dc2626 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    stat: '<500ms alert latency',
  },
  {
    title: 'AI Video Analytics',
    desc: 'Transform video into actionable intelligence. Facial recognition, ANPR, object classification, behavioural analysis, and crowd heatmaps — all processed at the edge.',
    img: 'https://static.wixstatic.com/media/f2078f_8cf07e77149947a3af1145788ba08374~mv2.webp',
    fallbackGradient: 'linear-gradient(135deg, #1a0a3b 0%, #7c3aed 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    stat: '98.7% ANPR accuracy',
  },
  {
    title: 'Multi-Site Management',
    desc: 'Manage distributed facilities through one platform. Single pane of glass control across unlimited geographic locations, with no VPN complexity.',
    img: 'https://fiixsoftware.com/wp-content/uploads/2024/08/multi-site-graphic@2x.png',
    fallbackGradient: 'linear-gradient(135deg, #0a1f3b 0%, #0ea5e9 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    stat: '15+ countries deployed',
  },
];

export default function SivmsCoreFeaturesSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('svcf-vis');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.svcf-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .svcf-rev {
          opacity: 0; transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .svcf-rev.svcf-vis { opacity: 1; transform: none; }
        .svcf-d0{transition-delay:0s} .svcf-d1{transition-delay:0.08s}
        .svcf-d2{transition-delay:0.16s}

        .svcf-card {
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .svcf-card:hover {
          box-shadow: 0 12px 48px rgba(1,97,254,0.12) !important;
          transform: translateY(-4px);
        }
        .svcf-card:hover .svcf-img {
          transform: scale(1.04);
        }
        .svcf-img {
          transition: transform 0.55s cubic-bezier(0.22,1,0.36,1);
        }

        .svcf-stat-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem; font-weight: 600;
          color: #0161FE;
          background: rgba(1,97,254,0.08);
          border: 1px solid rgba(1,97,254,0.15);
          border-radius: 9999px;
          padding: 4px 12px;
        }

        .svcf-read-more {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #0161FE;
          text-decoration: none;
          transition: gap 0.2s;
        }
        .svcf-read-more:hover { gap: 10px; }
        .svcf-read-more svg { transition: transform 0.2s; }
        .svcf-read-more:hover svg { transform: translateX(3px); }
      `}</style>

      <section
        ref={ref}
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
            <div className="svcf-rev svcf-d0 mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(1,97,254,0.07)', color: '#0161FE',
                border: '1px solid rgba(1,97,254,0.18)',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              Core Features
            </div>
            <h2 className="svcf-rev svcf-d1 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-4">
              High Availability &amp;<br />
              <span style={{ color: '#0161FE' }}>Powerful System</span>
            </h2>
            <p className="svcf-rev svcf-d2 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Every capability you need to secure your enterprise — designed for scale, reliability, and intelligent automation.
            </p>
          </div>

          {/* Feature rows — alternating layout */}
          <div className="space-y-8">
            {/* Row 1: 4 cards in a grid (Dahua-style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.slice(0, 4).map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="svcf-card bg-white rounded-2xl overflow-hidden border border-slate-200"
                  style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
                >
                  {/* Image / visual area */}
                  <div className="h-44 overflow-hidden relative" style={{ background: f.fallbackGradient }}>
                    <img
                      src={f.img}
                      alt={f.title}
                      className="svcf-img w-full h-full object-cover opacity-0"
                      onLoad={e => e.target.classList.remove('opacity-0')}
                      onError={e => e.target.style.display = 'none'}
                    />
                    {/* Icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(4px)' }}
                      >
                        {f.icon}
                      </div>
                    </div>
                    {/* Stat badge on image */}
                    <div className="absolute bottom-3 left-3">
                      <span className="text-[10px] font-bold text-white px-3 py-1 rounded-full"
                        style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
                      >
                        {f.stat}
                      </span>
                    </div>
                  </div>
                  {/* Text body */}
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-slate-900 mb-2" style={{ color: '#0161FE' }}>
                      {f.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{f.desc}</p>
                    <a href="#" className="svcf-read-more">
                      Learn More
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2: 5th feature — wide card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="svcf-card bg-white rounded-2xl overflow-hidden border border-slate-200"
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left — image */}
                <div className="h-64 lg:h-auto overflow-hidden relative" style={{ background: features[4].fallbackGradient }}>
                  <img
                    src={features[4].img}
                    alt={features[4].title}
                    className="svcf-img w-full h-full object-cover opacity-0"
                    onLoad={e => e.target.classList.remove('opacity-0')}
                    onError={e => e.target.style.display = 'none'}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-3xl flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(4px)' }}
                    >
                      {features[4].icon}
                    </div>
                  </div>
                </div>
                {/* Right — text */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="svcf-stat-badge self-start mb-4">{features[4].stat}</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3" style={{ color: '#0161FE' }}>
                    {features[4].title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{features[4].desc}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Single pane of glass',
                      'Unlimited sites',
                      'No VPN required',
                      'Centralised audit logs',
                    ].map((item, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-full"
                          style={{ background: 'rgba(1,97,254,0.1)', color: '#0161FE' }}
                        >
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-xs text-slate-600 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#" className="svcf-read-more mt-8 self-start">
                    Explore Multi-Site
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Download / Compare CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 justify-center mt-14"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-xs tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: '#0161FE', border: '1.5px solid #0161FE', fontSize: '0.72rem' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              DOWNLOAD BROCHURE
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5"
              style={{ color: '#0161FE', border: '1.5px solid rgba(1,97,254,0.35)', fontSize: '0.72rem' }}
            >
              COMPARE EDITIONS
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
