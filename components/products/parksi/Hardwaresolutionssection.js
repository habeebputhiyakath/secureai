'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const hardware = [
  {
    title: 'Indoor Auto Pay Station',
    desc: 'A convenient pay option inside the parking facility with multiple cashless payment modes.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScC_uptYDKXtIFDE62Qaz3Xou3iMrqP4iC_xrmgugnYQ&s=10',
    badge: 'Indoor',
    tag: '01',
  },
  {
    title: 'Outdoor Auto Pay Station',
    desc: 'Weatherproof design placed outside the facility, offering multiple payment options.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4LsDW6D-WwqV-VASOY3ms9FTwPUTvC6MA_fb1QoiCig&s=10',
    badge: 'Outdoor',
    tag: '02',
  },
  {
    title: 'Entry Kiosks',
    desc: 'Streamlines the vehicle entry process and reduces congestion outside and within the facility.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTSLQ8WfhUDMCsVzzw-VyqcLF9kz2L5-AmkLXzVbTOg&s=10',
    badge: 'Entry',
    tag: '03',
  },
  {
    title: 'Exit Kiosks',
    desc: 'Helps drivers exit freely from the parking facility without any hassles.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThptirfvzvPgm2luPk3BvysOlyPKMt1XUQMQ45IxNLQA&s=10',
    badge: 'Exit',
    tag: '04',
  },
];

function TiltCard({ item, index }) {
  const cardRef = useRef(null);
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 220, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mx.set(px - 0.5);
    my.set(py - 0.5);
    setSpot({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setSpot({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        background: '#0b1220',
        border: '1px solid rgba(148,163,184,0.14)',
      }}
      className="hw-card relative rounded-[26px] overflow-hidden flex flex-col group"
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(360px circle at ${spot.x}% ${spot.y}%, rgba(1,97,254,0.28), transparent 70%)`,
        }}
      />

      {/* Tag number watermark */}
      <span
        className="absolute top-5 right-6 z-10 font-extrabold select-none"
        style={{ fontSize: '2.75rem', color: 'rgba(148,163,184,0.14)', lineHeight: 1 }}
      >
        {item.tag}
      </span>

      {/* Badge */}
      <div className="absolute top-5 left-6 z-10">
        <span
          className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
          style={{
            background: 'rgba(1,97,254,0.16)',
            color: '#60a5fa',
            border: '1px solid rgba(1,97,254,0.35)',
          }}
        >
          {item.badge}
        </span>
      </div>

      {/* Image with reveal mask */}
      <div
        className="relative z-[1] flex items-center justify-center overflow-hidden"
        style={{ minHeight: 240 }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, #111c2f, #0b1220)' }}
        />
        <img
          src={item.img}
          alt={item.title}
          className="hw-img relative z-[2] object-contain"
          style={{ maxHeight: 190, maxWidth: '62%', transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)' }}
        />
      </div>

      {/* Text */}
      <div className="relative z-[1] p-7 pt-6 flex flex-col gap-2" style={{ borderTop: '1px solid rgba(148,163,184,0.12)' }}>
        <h3 className="text-base font-bold text-white">{item.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{item.desc}</p>
      </div>

      {/* Bottom accent line that grows on hover */}
      <div
        className="hw-accent absolute bottom-0 left-0 h-[3px] z-[2]"
        style={{ width: '0%', background: 'linear-gradient(90deg, #0161FE, #60a5fa)' }}
      />
    </motion.div>
  );
}

export default function HardwareSolutionsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('hs-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.hs-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .hs-rev {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .hs-rev.hs-vis { opacity: 1; transform: none; }
        .hs-d0{transition-delay:0s}   .hs-d1{transition-delay:0.1s}
        .hs-d2{transition-delay:0.18s}

        .hw-card:hover .hw-img { transform: scale(1.08); }
        .hw-card:hover .hw-accent { width: 100%; transition: width 0.6s cubic-bezier(0.22,1,0.36,1); }
        .hw-accent { transition: width 0.4s ease; }

        @keyframes hw-drift {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,-24px) scale(1.06); }
        }
        .hw-orb { animation: hw-drift 10s ease-in-out infinite; }
        .hw-orb-2 { animation: hw-drift 13s ease-in-out infinite reverse; }

        @keyframes hw-sheen {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .hw-sheen-text {
          background: linear-gradient(110deg, #0f172a 20%, #0161FE 40%, #60a5fa 50%, #0161FE 60%, #0f172a 80%);
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: hw-sheen 6s linear infinite;
        }

        .hw-grid-line {
          background-image:
            linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px);
          background-size: 44px 44px;
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden w-full py-24 lg:py-32"
        style={{ background: '#050912' }}
      >
        {/* Grid lines */}
        <div className="hw-grid-line absolute inset-0 pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' }} />

        {/* Drifting orbs */}
        <div className="hw-orb absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(1,97,254,0.22) 0%, transparent 70%)' }} />
        <div className="hw-orb-2 absolute bottom-0 -left-24 w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.16) 0%, transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div
              className="hs-rev hs-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{
                background: 'rgba(1,97,254,0.1)',
                color: '#60a5fa',
                border: '1px solid rgba(1,97,254,0.3)',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                width: 'fit-content',
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2"/>
                <rect x="9" y="9" width="6" height="6"/>
                <line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/>
                <line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/>
                <line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/>
                <line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/>
              </svg>
              Hardware Solutions
            </div>

            <h2 className="hs-rev hs-d1 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] mb-5">
              <span className="hw-sheen-text">Highest Standards, Effortless Operation</span>
            </h2>

            <p className="hs-rev hs-d2 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#94a3b8' }}>
              Purpose-built hardware engineered for 24/7 reliability — from entry to exit, every touchpoint covered.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8" style={{ perspective: 1200 }}>
            {hardware.map((item, i) => (
              <TiltCard key={i} item={item} index={i} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 flex justify-center"
          >
            <a
              href="#letstalk"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-xs tracking-widest uppercase transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(1,97,254,0.55)]"
              style={{ background: '#0161FE', fontSize: '0.72rem' }}
            >
              Contact Sales
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
}