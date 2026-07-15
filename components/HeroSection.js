'use client';
import { useEffect, useState, useRef } from 'react';

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
  {
    id: 'parking',
    tags: ['Smart Parking', 'IoT Sensors'],
    title: 'Smart Parking System Manages 5,000+ Bays Across 3 Cities with Real-Time Occupancy',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80',
    slug: 'smart-parking',
  },
  {
    id: 'access',
    tags: ['Access Control', 'Biometric'],
    title: 'Biometric Access Control Secures 200+ Critical Zones for Government Campus',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    slug: 'access-control',
  },
  {
    id: 'analytics',
    tags: ['AI Analytics', 'Deep Learning'],
    title: 'AI Video Analytics Boosts Retail Insights & Reduces Shrinkage by 40%',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    slug: 'ai-analytics',
  },
  {
    id: 'smartcity',
    tags: ['Smart City', 'IoT Platform'],
    title: 'City-Wide Surveillance Integrates 15,000+ Sensors Across Metro Area',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
    slug: 'smart-city',
  },
];

// Slot 0 = main (large) card. Slots 1-3 = visible thumbnails.
// Slots 4-5 = off-stage (queued, invisible, parked just past the right edge).
const SLOTS = [
  { x: 0,   y: 0,   w: 340, h: 325, r: 22 }, // main
  { x: 0,   y: 437, w: 108, h: 76,  r: 14 }, // thumb 0
  { x: 116, y: 437, w: 108, h: 76,  r: 14 }, // thumb 1
  { x: 232, y: 437, w: 108, h: 76,  r: 14 }, // thumb 2
  { x: 360, y: 437, w: 108, h: 76,  r: 14 }, // off-stage
  { x: 360, y: 437, w: 108, h: 76,  r: 14 }, // off-stage
];

// ── Hero background slides. Each slide carries its own copy so the
// text on the left rotates in sync with the background image. ──
const heroSlides = [
  {
    id: 'surveillance',
    image: '/home/hero1.png',
    badge: 'AI Security Platform · Since 2018',
   headingTop: 'Next-Generation',
headingHighlight: 'AI Security Solutions',
    body: 'SecureAAI Systems delivers enterprise-grade AI security solutions — ANPR, VMS, Smart Parking, and Intelligent Video Analytics — for smart cities, enterprises, and critical infrastructure worldwide.',
  },
  {
    id: 'vms',
    image: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=1600&q=80',
    badge: 'Enterprise VMS · SiVMS',
    headingTop: 'Centralized video',
    headingHighlight: 'management at scale',
    body: 'SiVMS unifies 10,000+ camera networks into a single command center — AI-driven search, instant retrieval, and real-time alerts across every site.',
  },
  {
    id: 'parking',
    image: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=1600&q=80',
    badge: 'Smart Parking · ParkSi',
    headingTop: 'Real-time parking',
    headingHighlight: 'intelligence, citywide',
    body: 'ParkSi manages 5,000+ bays with live occupancy tracking, automated enforcement, and seamless payment integration across multiple locations.',
  },
  {
    id: 'analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
    badge: 'AI Analytics · TRACKSi',
    headingTop: 'Actionable insight',
    headingHighlight: 'from every camera',
    body: 'TRACKSi turns raw footage into decisions — foot-traffic patterns, shrinkage detection, and behavioral analytics that cut losses by up to 40%.',
  },
];

export default function HeroSection() {
  // `order` is a queue of card indices. order[0] = main, order[1..3] = thumbnails.
  const [order, setOrder] = useState(featuredCards.map((_, i) => i));
  const [paused, setPaused] = useState(false);

  // Hero background/text slide index
  const [slideIndex, setSlideIndex] = useState(0);
  const slideTimer = useRef(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setOrder(prev => [...prev.slice(1), prev[0]]);
    }, 4500);
    return () => clearInterval(t);
  }, [paused]);

  useEffect(() => {
    slideTimer.current = setInterval(() => {
      setSlideIndex(i => (i + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(slideTimer.current);
  }, []);

  const slide = heroSlides[slideIndex];
  const total = heroSlides.length;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">

      {/* ── Background image slideshow (slides right → left) ── */}
      <div className="absolute inset-0">
        {heroSlides.map((s, i) => {
          // shortest signed distance from this slide to the active slide,
          // so the transition always travels right-to-left, even on wrap.
          let diff = i - slideIndex;
          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;

          return (
            <div
              key={s.id}
              className="absolute inset-0"
              style={{
                transform: `translateX(${diff * 100}%)`,
                opacity: diff === 0 ? 1 : 0,
                zIndex: diff === 0 ? 1 : 0,
                transition: 'transform 1.1s cubic-bezier(0.22,1,0.36,1), opacity 0.9s ease',
              }}
            >
              <img
                src={s.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* Dark gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#02061a]/95 via-[#02061a]/10 to-[#0161FE]/40 z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#02061a]/90 via-transparent to-transparent z-[2]" />

      {/* Slide indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0 flex gap-2 z-[3]">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setSlideIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className="p-1.5 cursor-pointer bg-transparent border-none"
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: i === slideIndex ? 22 : 6,
                height: 6,
                backgroundColor: i === slideIndex ? '#0161FE' : 'rgba(255,255,255,0.35)',
              }}
            />
          </button>
        ))}
      </div>

      <div className="relative z-[3] w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">

          {/* ── LEFT (text re-mounts on slide change → drops in from top) ── */}
          <div key={slide.id}>
            {/* Badge */}
            <div className="inline-flex items-center gap-[7px] bg-white/5 backdrop-blur-sm border border-white/15 rounded-full px-[14px] py-[6px] text-[0.72rem] font-semibold tracking-[0.08em] text-[#7fb1ff] uppercase mb-6 animate-[saaiDropTop_0.6s_0.05s_cubic-bezier(0.22,1,0.36,1)_both]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#0161FE] animate-[saai-blink_1.4s_ease-in-out_infinite]" />
              {slide.badge}
            </div>

            {/* H1 */}
            <h1 className="font-sans text-[clamp(2.6rem,4.5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white mb-5 animate-[saaiDropTop_0.6s_0.15s_cubic-bezier(0.22,1,0.36,1)_both]">
              {slide.headingTop}
              <br />
              <span className="text-[#4d8bff]">{slide.headingHighlight}</span>
            </h1>

            {/* Body */}
            <p className="text-[1.05rem] text-white/60 leading-[1.75] font-normal max-w-[480px] mb-9 animate-[saaiDropTop_0.6s_0.25s_cubic-bezier(0.22,1,0.36,1)_both]">
              {slide.body}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-9 animate-[saaiDropTop_0.6s_0.35s_cubic-bezier(0.22,1,0.36,1)_both]">
              <a
                href="#demo"
                className="inline-flex items-center gap-[9px] bg-[#0161FE] hover:bg-[#0052d6] text-white font-semibold text-[0.9rem] px-7 py-[14px] rounded-full border-none cursor-pointer transition-all duration-[180ms] tracking-[0.01em] no-underline hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(1,97,254,0.35)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Request a Demo
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center gap-[9px] bg-transparent hover:bg-white/5 text-white font-semibold text-[0.9rem] px-7 py-[14px] rounded-full border-[1.5px] border-white/25 hover:border-white/50 cursor-pointer transition-all duration-[180ms] no-underline hover:-translate-y-px"
              >
                Explore Solutions
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5 animate-[saaiDropTop_0.6s_0.45s_cubic-bezier(0.22,1,0.36,1)_both]">
              {['SIRA Approved', 'ISO 27001 Certified', 'GDPR Compliant'].map(t => (
                <div key={t} className="flex items-center gap-[7px] text-[0.8rem] text-white/50 font-medium">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-[#7fb1ff] flex-shrink-0">✓</div>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Main image + thumbnail queue carousel ── */}
          <div className="hidden lg:flex relative items-start justify-end animate-[saaiUp_0.65s_0.3s_ease_both]">
            <div
              className="relative"
              style={{ width: 340, height: 513 }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {featuredCards.map((card, cardIdx) => {
                const slotIdx = order.indexOf(cardIdx);
                const slot = SLOTS[slotIdx];
                const isMain = slotIdx === 0;
                const isNext = slotIdx === 1;
                const visible = slotIdx < 4;

                return (
                  <a
                    href={`#${card.slug}`}
                    key={card.id}
                    onClick={(e) => {
                      if (!isMain) {
                        e.preventDefault();
                        setOrder(prev => [cardIdx, ...prev.filter(i => i !== cardIdx)]);
                      }   
                    }}
                    className={`group absolute block overflow-hidden border border-white/10 no-underline h-[340px] ${
                      isNext ? 'animate-[saaiPulseRing_4.5s_ease-in-out_infinite]' : ''
                    }`}
                    style={{
                      left: slot.x,
                      top: slot.y,
                      width: slot.w,
                      height: slot.h,
                      borderRadius: slot.r,
                      opacity: visible ? 1 : 0,
                      zIndex: visible ? 10 - slotIdx : 1,
                      pointerEvents: visible ? 'auto' : 'none',
                      boxShadow: isMain
                        ? '0 20px 60px rgba(2,6,26,0.6)'
                        : '0 8px 20px rgba(2,6,26,0.45)',
                      transition:
                        'left 0.8s cubic-bezier(.65,0,.35,1), top 0.8s cubic-bezier(.65,0,.35,1), width 0.8s cubic-bezier(.65,0,.35,1), height 0.8s cubic-bezier(.65,0,.35,1), opacity 0.6s ease, border-radius 0.8s ease, box-shadow 0.8s ease',
                    }}
                  >
                    {/* Image */}
                    <div className="absolute  inset-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                        isMain ? 'from-black/85 via-black/10 to-black/30' : 'from-black/80 via-black/25 to-transparent'
                      }`}
                    />

                    {/* Index number */}
                    <div
                      className="absolute top-3 left-3 font-mono text-white/70 tracking-[0.1em] transition-all duration-500"
                      style={{ fontSize: isMain ? '0.7rem' : '0.6rem' }}
                    >
                      {String(cardIdx + 1).padStart(2, '0')}
                    </div>

                    {/* Arrow button (main only) */}
                    <div
                      className="absolute top-3 right-3 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0161FE] group-hover:rotate-45 overflow-hidden"
                      style={{
                        width: isMain ? 36 : 0,
                        height: isMain ? 36 : 0,
                        opacity: isMain ? 1 : 0,
                      }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>

                    {/* Tags + title (main only, fades in once it becomes main) */}
                    {isMain && (
                      <div className="absolute bottom-0 left-0 right-0 p-5 animate-[saaiFadeIn_0.6s_0.35s_ease_both]">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {card.tags.map(tag => (
                            <span
                              key={tag}
                              className="inline-flex items-center bg-white/12 backdrop-blur-md border border-white/15 rounded-full px-3 py-[5px] text-[0.62rem] font-bold uppercase tracking-[0.08em] text-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-white font-semibold text-[1.05rem] leading-snug">
                          {card.title}
                        </h3>
                      </div>
                    )}

                    {/* Tiny tag label on thumbnails */}
                    {!isMain && visible && (
                      <div className="absolute bottom-2 left-2 right-2">
                        <span className="inline-flex items-center bg-white/12 backdrop-blur-md border border-white/15 rounded-full px-2 py-[2px] text-[0.55rem] font-bold uppercase tracking-[0.06em] text-white truncate max-w-full">
                          {card.tags[0]}
                        </span>
                      </div>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes saaiUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes saaiDropTop {
          from { opacity: 0; transform: translateY(-26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes saai-blink {
          0%,100% { opacity: 1; } 50% { opacity: 0.3; }
        }
        @keyframes saaiFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes saaiPulseRing {
          0%, 70%, 100% { box-shadow: 0 8px 20px rgba(2,6,26,0.45), 0 0 0 0 rgba(1,97,254,0); }
          85% { box-shadow: 0 8px 20px rgba(2,6,26,0.45), 0 0 0 4px rgba(1,97,254,0.45); }
        }

        @media (prefers-reduced-motion: reduce) {
          *[style*="transition"] {
            transition-duration: 0.01ms !important;
          }
          .animate-\\[saaiPulseRing_4\\.5s_ease-in-out_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}